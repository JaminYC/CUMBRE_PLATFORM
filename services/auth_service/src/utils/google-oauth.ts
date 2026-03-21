import { createHmac } from "node:crypto";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo";

export function buildGoogleAuthUrl(
  clientId: string,
  callbackUrl: string,
  stateSecret: string
): string {
  const state = generateSignedState(stateSecret);
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: callbackUrl,
    response_type: "code",
    scope: "openid email profile",
    state,
    access_type: "offline",
    prompt: "select_account"
  });

  return `${GOOGLE_AUTH_URL}?${params}`;
}

export function verifyOAuthState(state: string, stateSecret: string): boolean {
  const [payload, signature] = state.split(".");

  if (!payload || !signature) {
    return false;
  }

  const expected = createHmac("sha256", stateSecret)
    .update(payload)
    .digest("base64url");

  return expected === signature;
}

function generateSignedState(secret: string): string {
  const payload = Buffer.from(Date.now().toString()).toString("base64url");
  const sig = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export async function exchangeGoogleCode(
  code: string,
  clientId: string,
  clientSecret: string,
  callbackUrl: string
): Promise<{ accessToken: string }> {
  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: callbackUrl,
      grant_type: "authorization_code"
    })
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Google token exchange failed (${response.status}): ${body}`);
  }

  const data = await response.json() as { access_token: string };
  return { accessToken: data.access_token };
}

export interface GoogleUserInfo {
  id: string;
  email: string;
  name: string;
  givenName?: string;
  familyName?: string;
  picture?: string;
}

export async function getGoogleUserInfo(accessToken: string): Promise<GoogleUserInfo> {
  const response = await fetch(GOOGLE_USERINFO_URL, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Google user info (${response.status})`);
  }

  const data = await response.json() as {
    id: string;
    email: string;
    name: string;
    given_name?: string;
    family_name?: string;
    picture?: string;
  };

  return {
    id: data.id,
    email: data.email,
    name: data.name,
    givenName: data.given_name,
    familyName: data.family_name,
    picture: data.picture
  };
}
