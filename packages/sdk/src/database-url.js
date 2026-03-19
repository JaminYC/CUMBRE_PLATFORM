export function normalizePostgresUrl(input) {
  const trimmed = input.trim();

  try {
    const url = new URL(trimmed);

    if (
      (url.hostname.endsWith(".supabase.co") ||
        url.hostname.endsWith(".pooler.supabase.com")) &&
      !url.searchParams.has("sslmode")
    ) {
      url.searchParams.set("sslmode", "require");
    }

    return url.toString();
  } catch {
    return trimmed;
  }
}
