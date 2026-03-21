import type { RequestContext } from "@cumbre/api-runtime";
import type { AuthServiceConfig } from "../config/env.js";
import { toDomainUser } from "../models/user-mappers.js";
import type { SessionRepository } from "../repositories/session-repository.js";
import type { UserRepository } from "../repositories/user-repository.js";
import type { Logger } from "../utils/logger.js";
import {
  buildGoogleAuthUrl,
  exchangeGoogleCode,
  getGoogleUserInfo
} from "../utils/google-oauth.js";

export class GoogleOAuthController {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sessionRepository: SessionRepository,
    private readonly logger: Logger,
    private readonly config: AuthServiceConfig
  ) {}

  redirect = async ({ res }: RequestContext): Promise<undefined> => {
    const url = buildGoogleAuthUrl(
      this.config.googleClientId,
      this.config.googleCallbackUrl,
      this.config.googleClientSecret
    );

    res.writeHead(302, { Location: url, "Cache-Control": "no-store, no-cache" });
    res.end();

    return undefined;
  };

  callback = async ({ res, query }: RequestContext): Promise<undefined> => {
    const code = query.get("code");
    const oauthError = query.get("error");
    const failUrl = new URL("/login", this.config.portalUrl);

    if (oauthError || !code) {
      failUrl.searchParams.set("error", oauthError ?? "oauth_cancelled");
      res.writeHead(302, { Location: failUrl.toString(), "Cache-Control": "no-store" });
      res.end();
      return undefined;
    }

    try {
      const { accessToken: googleAccessToken } = await exchangeGoogleCode(
        code,
        this.config.googleClientId,
        this.config.googleClientSecret,
        this.config.googleCallbackUrl
      );

      const profile = await getGoogleUserInfo(googleAccessToken);

      const userRecord = await this.userRepository.findOrCreateByGoogle({
        googleId: profile.id,
        email: profile.email,
        displayName: profile.name,
        givenName: profile.givenName,
        familyName: profile.familyName,
        avatarUrl: profile.picture
      });

      const accessTokenExpiresAt = new Date(
        Date.now() + this.config.authAccessTokenTtlMinutes * 60 * 1000
      );
      const refreshTokenExpiresAt = new Date(
        Date.now() + this.config.authRefreshTokenTtlDays * 24 * 60 * 60 * 1000
      );

      const session = await this.sessionRepository.create({
        user: toDomainUser(userRecord),
        accessTokenExpiresAt,
        refreshTokenExpiresAt
      });

      const finishUrl = new URL("/api/auth/google/finish", this.config.portalUrl);
      finishUrl.searchParams.set("access_token", session.tokens.accessToken);
      finishUrl.searchParams.set("refresh_token", session.tokens.refreshToken);
      finishUrl.searchParams.set(
        "expires_at",
        session.record.accessTokenExpiresAt.toISOString()
      );
      finishUrl.searchParams.set(
        "refresh_expires_at",
        session.record.refreshTokenExpiresAt.toISOString()
      );

      this.logger.info("Google OAuth login success", {
        userId: userRecord.id,
        email: userRecord.email ?? "(no email)"
      });

      res.writeHead(302, {
        Location: finishUrl.toString(),
        "Cache-Control": "no-store, no-cache"
      });
      res.end();

      return undefined;
    } catch (err) {
      this.logger.error("Google OAuth callback failed", {
        error: err instanceof Error ? err.message : String(err)
      });

      failUrl.searchParams.set("error", "oauth_error");
      res.writeHead(302, { Location: failUrl.toString(), "Cache-Control": "no-store" });
      res.end();

      return undefined;
    }
  };
}
