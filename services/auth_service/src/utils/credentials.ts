import { randomBytes, scryptSync, timingSafeEqual, createHash } from "node:crypto";

const credentialEncoding = "hex";

export function hashCredential(credential: string) {
  const salt = randomBytes(16).toString(credentialEncoding);
  const derivedKey = scryptSync(credential, salt, 64).toString(credentialEncoding);
  return `scrypt$${salt}$${derivedKey}`;
}

export function verifyCredential(
  credential: string,
  storedHash: string | null | undefined
) {
  if (!storedHash) {
    return false;
  }

  const [algorithm, salt, expectedHash] = storedHash.split("$");

  if (algorithm !== "scrypt" || !salt || !expectedHash) {
    return false;
  }

  const derivedKey = scryptSync(credential, salt, 64).toString(credentialEncoding);

  try {
    return timingSafeEqual(
      Buffer.from(derivedKey, credentialEncoding),
      Buffer.from(expectedHash, credentialEncoding)
    );
  } catch {
    return false;
  }
}

export function generateOpaqueToken() {
  return randomBytes(32).toString("base64url");
}

export function hashOpaqueToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}
