export function normalizePostgresUrl(input) {
  const trimmed = input.trim();

  try {
    const url = new URL(trimmed);

    const isSupabaseHost = url.hostname.endsWith(".supabase.co");
    const isPoolerHost = url.hostname.endsWith(".pooler.supabase.com");
    // Port 6543 = PgBouncer transaction mode; port 5432 on pooler = session mode
    const isTransactionPooler = isPoolerHost && url.port === "6543";

    if ((isSupabaseHost || isPoolerHost) && !url.searchParams.has("sslmode")) {
      url.searchParams.set("sslmode", "require");
    }

    // Transaction mode requires disabling Prisma's named prepared statements.
    // Without this flag Prisma sends PREPARE/EXECUTE statements which are lost
    // when PgBouncer returns the server connection to the pool between transactions.
    if (isTransactionPooler && !url.searchParams.has("pgbouncer")) {
      url.searchParams.set("pgbouncer", "true");
    }

    // Cap Prisma connection pool per service so the total across all services
    // stays well within Supabase's pooler max_client_conn limit.
    if (isPoolerHost && !url.searchParams.has("connection_limit")) {
      url.searchParams.set("connection_limit", "2");
    }

    return url.toString();
  } catch {
    return trimmed;
  }
}
