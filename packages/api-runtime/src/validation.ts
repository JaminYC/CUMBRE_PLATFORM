import { createRequire } from "node:module";
import type { ErrorObject, ValidateFunction } from "ajv";
import type { ApiErrorDetail, SchemaDefinition } from "@cumbre/schemas";
import { ValidationError } from "./errors.js";

export interface RequestValidation {
  body?: SchemaDefinition;
  query?: SchemaDefinition;
  params?: SchemaDefinition;
}

export interface RequestValidator {
  validateBody(value: unknown): unknown;
  validateQuery(value: unknown): unknown;
  validateParams(value: unknown): unknown;
}

const require = createRequire(import.meta.url);
const { default: Ajv } = require("ajv") as {
  default: typeof import("ajv").default;
};
const { default: addFormats } = require("ajv-formats") as {
  default: typeof import("ajv-formats").default;
};

export function createRequestValidator(
  validation?: RequestValidation
): RequestValidator {
  const ajv = createAjvInstance();
  const bodyValidator = compile(ajv, validation?.body);
  const queryValidator = compile(ajv, validation?.query);
  const paramsValidator = compile(ajv, validation?.params);

  return {
    validateBody(value: unknown) {
      return bodyValidator ? validateWith(bodyValidator, value, "body") : value;
    },
    validateQuery(value: unknown) {
      return queryValidator ? validateWith(queryValidator, value, "query") : value;
    },
    validateParams(value: unknown) {
      return paramsValidator ? validateWith(paramsValidator, value, "params") : value;
    }
  };
}

function compile(
  ajv: InstanceType<typeof Ajv>,
  schema?: SchemaDefinition
): ValidateFunction | undefined {
  if (!schema) {
    return undefined;
  }

  return ajv.compile(normalizeSchema(schema));
}

function createAjvInstance(): InstanceType<typeof Ajv> {
  const ajv = new Ajv({
    allErrors: true,
    coerceTypes: true,
    useDefaults: true
  });

  addFormats(ajv);
  return ajv;
}

function validateWith(
  validator: ValidateFunction,
  input: unknown,
  segment: "body" | "query" | "params"
) {
  const value = input === undefined ? {} : clone(input);
  const valid = validator(value);

  if (valid) {
    return value;
  }

  throw new ValidationError(
    `Invalid ${segment} payload.`,
    mapErrors(validator.errors ?? [], segment)
  );
}

function mapErrors(errors: ErrorObject[], segment: string): ApiErrorDetail[] {
  return errors.map((error) => ({
    field: `${segment}${error.instancePath || ""}` || segment,
    message: error.message ?? "Invalid value.",
    code: error.keyword.toUpperCase()
  }));
}

function normalizeSchema(schema: SchemaDefinition): SchemaDefinition {
  if (schema.$ref) {
    return { ...schema };
  }

  const normalized: SchemaDefinition = { ...schema };

  if (schema.properties) {
    normalized.properties = Object.fromEntries(
      Object.entries(schema.properties).map(([key, value]) => [
        key,
        normalizeSchema(value)
      ])
    );
  }

  if (schema.items) {
    normalized.items = normalizeSchema(schema.items);
  }

  if (schema.oneOf) {
    normalized.oneOf = schema.oneOf.map(normalizeSchema);
  }

  const types = Array.isArray(schema.type) ? schema.type : [schema.type];
  if (types.includes("object") && normalized.additionalProperties === undefined) {
    normalized.additionalProperties = false;
  }

  return normalized;
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
