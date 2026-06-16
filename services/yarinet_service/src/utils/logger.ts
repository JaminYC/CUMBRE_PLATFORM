export type LogLevel = "debug" | "info" | "warn" | "error";

export interface Logger {
  debug(message: string, context?: Record<string, unknown>): void;
  info(message: string, context?: Record<string, unknown>): void;
  warn(message: string, context?: Record<string, unknown>): void;
  error(message: string, context?: Record<string, unknown>): void;
}

const levelWeight: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40
};

export function createLogger(service: string, level: LogLevel): Logger {
  const write = (
    entryLevel: LogLevel,
    message: string,
    context?: Record<string, unknown>
  ) => {
    if (levelWeight[entryLevel] < levelWeight[level]) {
      return;
    }

    const payload = {
      timestamp: new Date().toISOString(),
      level: entryLevel,
      service,
      message,
      context
    };

    const line = JSON.stringify(payload);

    if (entryLevel === "error") {
      console.error(line);
      return;
    }

    console.log(line);
  };

  return {
    debug: (message, context) => write("debug", message, context),
    info: (message, context) => write("info", message, context),
    warn: (message, context) => write("warn", message, context),
    error: (message, context) => write("error", message, context)
  };
}
