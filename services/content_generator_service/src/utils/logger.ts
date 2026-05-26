// services/content_generator_service/src/utils/logger.ts
export type LogLevel = "debug" | "info" | "warn" | "error";

export interface Logger {
  debug(msg: string, meta?: Record<string, unknown>): void;
  info(msg: string, meta?: Record<string, unknown>): void;
  warn(msg: string, meta?: Record<string, unknown>): void;
  error(msg: string, meta?: Record<string, unknown>): void;
}

export function createLogger(service: string, level: LogLevel = "info"): Logger {
  const levels: Record<LogLevel, number> = { debug: 0, info: 1, warn: 2, error: 3 };
  const minLevel = levels[level];

  function log(lvl: LogLevel, msg: string, meta?: Record<string, unknown>) {
    if (levels[lvl] < minLevel) return;
    const entry = { time: new Date().toISOString(), level: lvl, service, msg, ...meta };
    const out = lvl === "error" ? process.stderr : process.stdout;
    out.write(JSON.stringify(entry) + "\n");
  }

  return {
    debug: (msg, meta) => log("debug", msg, meta),
    info:  (msg, meta) => log("info",  msg, meta),
    warn:  (msg, meta) => log("warn",  msg, meta),
    error: (msg, meta) => log("error", msg, meta),
  };
}
