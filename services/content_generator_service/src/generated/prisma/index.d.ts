
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GenerationJobRecord
 * 
 */
export type GenerationJobRecord = $Result.DefaultSelection<Prisma.$GenerationJobRecordPayload>
/**
 * Model GenerationLimitRecord
 * 
 */
export type GenerationLimitRecord = $Result.DefaultSelection<Prisma.$GenerationLimitRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GenerationJobRecords
 * const generationJobRecords = await prisma.generationJobRecord.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more GenerationJobRecords
   * const generationJobRecords = await prisma.generationJobRecord.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.generationJobRecord`: Exposes CRUD operations for the **GenerationJobRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenerationJobRecords
    * const generationJobRecords = await prisma.generationJobRecord.findMany()
    * ```
    */
  get generationJobRecord(): Prisma.GenerationJobRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generationLimitRecord`: Exposes CRUD operations for the **GenerationLimitRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenerationLimitRecords
    * const generationLimitRecords = await prisma.generationLimitRecord.findMany()
    * ```
    */
  get generationLimitRecord(): Prisma.GenerationLimitRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    GenerationJobRecord: 'GenerationJobRecord',
    GenerationLimitRecord: 'GenerationLimitRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "generationJobRecord" | "generationLimitRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GenerationJobRecord: {
        payload: Prisma.$GenerationJobRecordPayload<ExtArgs>
        fields: Prisma.GenerationJobRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenerationJobRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenerationJobRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload>
          }
          findFirst: {
            args: Prisma.GenerationJobRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenerationJobRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload>
          }
          findMany: {
            args: Prisma.GenerationJobRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload>[]
          }
          create: {
            args: Prisma.GenerationJobRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload>
          }
          createMany: {
            args: Prisma.GenerationJobRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenerationJobRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload>[]
          }
          delete: {
            args: Prisma.GenerationJobRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload>
          }
          update: {
            args: Prisma.GenerationJobRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload>
          }
          deleteMany: {
            args: Prisma.GenerationJobRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenerationJobRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenerationJobRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload>[]
          }
          upsert: {
            args: Prisma.GenerationJobRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationJobRecordPayload>
          }
          aggregate: {
            args: Prisma.GenerationJobRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenerationJobRecord>
          }
          groupBy: {
            args: Prisma.GenerationJobRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenerationJobRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenerationJobRecordCountArgs<ExtArgs>
            result: $Utils.Optional<GenerationJobRecordCountAggregateOutputType> | number
          }
        }
      }
      GenerationLimitRecord: {
        payload: Prisma.$GenerationLimitRecordPayload<ExtArgs>
        fields: Prisma.GenerationLimitRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenerationLimitRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenerationLimitRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload>
          }
          findFirst: {
            args: Prisma.GenerationLimitRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenerationLimitRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload>
          }
          findMany: {
            args: Prisma.GenerationLimitRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload>[]
          }
          create: {
            args: Prisma.GenerationLimitRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload>
          }
          createMany: {
            args: Prisma.GenerationLimitRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenerationLimitRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload>[]
          }
          delete: {
            args: Prisma.GenerationLimitRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload>
          }
          update: {
            args: Prisma.GenerationLimitRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload>
          }
          deleteMany: {
            args: Prisma.GenerationLimitRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenerationLimitRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenerationLimitRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload>[]
          }
          upsert: {
            args: Prisma.GenerationLimitRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenerationLimitRecordPayload>
          }
          aggregate: {
            args: Prisma.GenerationLimitRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenerationLimitRecord>
          }
          groupBy: {
            args: Prisma.GenerationLimitRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenerationLimitRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenerationLimitRecordCountArgs<ExtArgs>
            result: $Utils.Optional<GenerationLimitRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    generationJobRecord?: GenerationJobRecordOmit
    generationLimitRecord?: GenerationLimitRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model GenerationJobRecord
   */

  export type AggregateGenerationJobRecord = {
    _count: GenerationJobRecordCountAggregateOutputType | null
    _min: GenerationJobRecordMinAggregateOutputType | null
    _max: GenerationJobRecordMaxAggregateOutputType | null
  }

  export type GenerationJobRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    role: string | null
    topic: string | null
    depth: string | null
    status: string | null
    errorMsg: string | null
  }

  export type GenerationJobRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    role: string | null
    topic: string | null
    depth: string | null
    status: string | null
    errorMsg: string | null
  }

  export type GenerationJobRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    role: number
    topic: number
    depth: number
    sources: number
    outputs: number
    status: number
    results: number
    errorMsg: number
    _all: number
  }


  export type GenerationJobRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    role?: true
    topic?: true
    depth?: true
    status?: true
    errorMsg?: true
  }

  export type GenerationJobRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    role?: true
    topic?: true
    depth?: true
    status?: true
    errorMsg?: true
  }

  export type GenerationJobRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    role?: true
    topic?: true
    depth?: true
    sources?: true
    outputs?: true
    status?: true
    results?: true
    errorMsg?: true
    _all?: true
  }

  export type GenerationJobRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationJobRecord to aggregate.
     */
    where?: GenerationJobRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationJobRecords to fetch.
     */
    orderBy?: GenerationJobRecordOrderByWithRelationInput | GenerationJobRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenerationJobRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationJobRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationJobRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenerationJobRecords
    **/
    _count?: true | GenerationJobRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenerationJobRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenerationJobRecordMaxAggregateInputType
  }

  export type GetGenerationJobRecordAggregateType<T extends GenerationJobRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateGenerationJobRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenerationJobRecord[P]>
      : GetScalarType<T[P], AggregateGenerationJobRecord[P]>
  }




  export type GenerationJobRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationJobRecordWhereInput
    orderBy?: GenerationJobRecordOrderByWithAggregationInput | GenerationJobRecordOrderByWithAggregationInput[]
    by: GenerationJobRecordScalarFieldEnum[] | GenerationJobRecordScalarFieldEnum
    having?: GenerationJobRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenerationJobRecordCountAggregateInputType | true
    _min?: GenerationJobRecordMinAggregateInputType
    _max?: GenerationJobRecordMaxAggregateInputType
  }

  export type GenerationJobRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    role: string
    topic: string
    depth: string
    sources: JsonValue
    outputs: string[]
    status: string
    results: JsonValue | null
    errorMsg: string | null
    _count: GenerationJobRecordCountAggregateOutputType | null
    _min: GenerationJobRecordMinAggregateOutputType | null
    _max: GenerationJobRecordMaxAggregateOutputType | null
  }

  type GetGenerationJobRecordGroupByPayload<T extends GenerationJobRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenerationJobRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenerationJobRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenerationJobRecordGroupByOutputType[P]>
            : GetScalarType<T[P], GenerationJobRecordGroupByOutputType[P]>
        }
      >
    >


  export type GenerationJobRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    role?: boolean
    topic?: boolean
    depth?: boolean
    sources?: boolean
    outputs?: boolean
    status?: boolean
    results?: boolean
    errorMsg?: boolean
  }, ExtArgs["result"]["generationJobRecord"]>

  export type GenerationJobRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    role?: boolean
    topic?: boolean
    depth?: boolean
    sources?: boolean
    outputs?: boolean
    status?: boolean
    results?: boolean
    errorMsg?: boolean
  }, ExtArgs["result"]["generationJobRecord"]>

  export type GenerationJobRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    role?: boolean
    topic?: boolean
    depth?: boolean
    sources?: boolean
    outputs?: boolean
    status?: boolean
    results?: boolean
    errorMsg?: boolean
  }, ExtArgs["result"]["generationJobRecord"]>

  export type GenerationJobRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    role?: boolean
    topic?: boolean
    depth?: boolean
    sources?: boolean
    outputs?: boolean
    status?: boolean
    results?: boolean
    errorMsg?: boolean
  }

  export type GenerationJobRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "role" | "topic" | "depth" | "sources" | "outputs" | "status" | "results" | "errorMsg", ExtArgs["result"]["generationJobRecord"]>

  export type $GenerationJobRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenerationJobRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      role: string
      topic: string
      depth: string
      sources: Prisma.JsonValue
      outputs: string[]
      status: string
      results: Prisma.JsonValue | null
      errorMsg: string | null
    }, ExtArgs["result"]["generationJobRecord"]>
    composites: {}
  }

  type GenerationJobRecordGetPayload<S extends boolean | null | undefined | GenerationJobRecordDefaultArgs> = $Result.GetResult<Prisma.$GenerationJobRecordPayload, S>

  type GenerationJobRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenerationJobRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenerationJobRecordCountAggregateInputType | true
    }

  export interface GenerationJobRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenerationJobRecord'], meta: { name: 'GenerationJobRecord' } }
    /**
     * Find zero or one GenerationJobRecord that matches the filter.
     * @param {GenerationJobRecordFindUniqueArgs} args - Arguments to find a GenerationJobRecord
     * @example
     * // Get one GenerationJobRecord
     * const generationJobRecord = await prisma.generationJobRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenerationJobRecordFindUniqueArgs>(args: SelectSubset<T, GenerationJobRecordFindUniqueArgs<ExtArgs>>): Prisma__GenerationJobRecordClient<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GenerationJobRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenerationJobRecordFindUniqueOrThrowArgs} args - Arguments to find a GenerationJobRecord
     * @example
     * // Get one GenerationJobRecord
     * const generationJobRecord = await prisma.generationJobRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenerationJobRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, GenerationJobRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenerationJobRecordClient<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationJobRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobRecordFindFirstArgs} args - Arguments to find a GenerationJobRecord
     * @example
     * // Get one GenerationJobRecord
     * const generationJobRecord = await prisma.generationJobRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenerationJobRecordFindFirstArgs>(args?: SelectSubset<T, GenerationJobRecordFindFirstArgs<ExtArgs>>): Prisma__GenerationJobRecordClient<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationJobRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobRecordFindFirstOrThrowArgs} args - Arguments to find a GenerationJobRecord
     * @example
     * // Get one GenerationJobRecord
     * const generationJobRecord = await prisma.generationJobRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenerationJobRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, GenerationJobRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenerationJobRecordClient<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GenerationJobRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenerationJobRecords
     * const generationJobRecords = await prisma.generationJobRecord.findMany()
     * 
     * // Get first 10 GenerationJobRecords
     * const generationJobRecords = await prisma.generationJobRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generationJobRecordWithIdOnly = await prisma.generationJobRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenerationJobRecordFindManyArgs>(args?: SelectSubset<T, GenerationJobRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GenerationJobRecord.
     * @param {GenerationJobRecordCreateArgs} args - Arguments to create a GenerationJobRecord.
     * @example
     * // Create one GenerationJobRecord
     * const GenerationJobRecord = await prisma.generationJobRecord.create({
     *   data: {
     *     // ... data to create a GenerationJobRecord
     *   }
     * })
     * 
     */
    create<T extends GenerationJobRecordCreateArgs>(args: SelectSubset<T, GenerationJobRecordCreateArgs<ExtArgs>>): Prisma__GenerationJobRecordClient<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GenerationJobRecords.
     * @param {GenerationJobRecordCreateManyArgs} args - Arguments to create many GenerationJobRecords.
     * @example
     * // Create many GenerationJobRecords
     * const generationJobRecord = await prisma.generationJobRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenerationJobRecordCreateManyArgs>(args?: SelectSubset<T, GenerationJobRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GenerationJobRecords and returns the data saved in the database.
     * @param {GenerationJobRecordCreateManyAndReturnArgs} args - Arguments to create many GenerationJobRecords.
     * @example
     * // Create many GenerationJobRecords
     * const generationJobRecord = await prisma.generationJobRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GenerationJobRecords and only return the `id`
     * const generationJobRecordWithIdOnly = await prisma.generationJobRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenerationJobRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, GenerationJobRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GenerationJobRecord.
     * @param {GenerationJobRecordDeleteArgs} args - Arguments to delete one GenerationJobRecord.
     * @example
     * // Delete one GenerationJobRecord
     * const GenerationJobRecord = await prisma.generationJobRecord.delete({
     *   where: {
     *     // ... filter to delete one GenerationJobRecord
     *   }
     * })
     * 
     */
    delete<T extends GenerationJobRecordDeleteArgs>(args: SelectSubset<T, GenerationJobRecordDeleteArgs<ExtArgs>>): Prisma__GenerationJobRecordClient<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GenerationJobRecord.
     * @param {GenerationJobRecordUpdateArgs} args - Arguments to update one GenerationJobRecord.
     * @example
     * // Update one GenerationJobRecord
     * const generationJobRecord = await prisma.generationJobRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenerationJobRecordUpdateArgs>(args: SelectSubset<T, GenerationJobRecordUpdateArgs<ExtArgs>>): Prisma__GenerationJobRecordClient<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GenerationJobRecords.
     * @param {GenerationJobRecordDeleteManyArgs} args - Arguments to filter GenerationJobRecords to delete.
     * @example
     * // Delete a few GenerationJobRecords
     * const { count } = await prisma.generationJobRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenerationJobRecordDeleteManyArgs>(args?: SelectSubset<T, GenerationJobRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenerationJobRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenerationJobRecords
     * const generationJobRecord = await prisma.generationJobRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenerationJobRecordUpdateManyArgs>(args: SelectSubset<T, GenerationJobRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenerationJobRecords and returns the data updated in the database.
     * @param {GenerationJobRecordUpdateManyAndReturnArgs} args - Arguments to update many GenerationJobRecords.
     * @example
     * // Update many GenerationJobRecords
     * const generationJobRecord = await prisma.generationJobRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GenerationJobRecords and only return the `id`
     * const generationJobRecordWithIdOnly = await prisma.generationJobRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenerationJobRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, GenerationJobRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GenerationJobRecord.
     * @param {GenerationJobRecordUpsertArgs} args - Arguments to update or create a GenerationJobRecord.
     * @example
     * // Update or create a GenerationJobRecord
     * const generationJobRecord = await prisma.generationJobRecord.upsert({
     *   create: {
     *     // ... data to create a GenerationJobRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenerationJobRecord we want to update
     *   }
     * })
     */
    upsert<T extends GenerationJobRecordUpsertArgs>(args: SelectSubset<T, GenerationJobRecordUpsertArgs<ExtArgs>>): Prisma__GenerationJobRecordClient<$Result.GetResult<Prisma.$GenerationJobRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GenerationJobRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobRecordCountArgs} args - Arguments to filter GenerationJobRecords to count.
     * @example
     * // Count the number of GenerationJobRecords
     * const count = await prisma.generationJobRecord.count({
     *   where: {
     *     // ... the filter for the GenerationJobRecords we want to count
     *   }
     * })
    **/
    count<T extends GenerationJobRecordCountArgs>(
      args?: Subset<T, GenerationJobRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenerationJobRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenerationJobRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenerationJobRecordAggregateArgs>(args: Subset<T, GenerationJobRecordAggregateArgs>): Prisma.PrismaPromise<GetGenerationJobRecordAggregateType<T>>

    /**
     * Group by GenerationJobRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationJobRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenerationJobRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenerationJobRecordGroupByArgs['orderBy'] }
        : { orderBy?: GenerationJobRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenerationJobRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenerationJobRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenerationJobRecord model
   */
  readonly fields: GenerationJobRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenerationJobRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenerationJobRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GenerationJobRecord model
   */
  interface GenerationJobRecordFieldRefs {
    readonly id: FieldRef<"GenerationJobRecord", 'String'>
    readonly createdAt: FieldRef<"GenerationJobRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"GenerationJobRecord", 'DateTime'>
    readonly userId: FieldRef<"GenerationJobRecord", 'String'>
    readonly role: FieldRef<"GenerationJobRecord", 'String'>
    readonly topic: FieldRef<"GenerationJobRecord", 'String'>
    readonly depth: FieldRef<"GenerationJobRecord", 'String'>
    readonly sources: FieldRef<"GenerationJobRecord", 'Json'>
    readonly outputs: FieldRef<"GenerationJobRecord", 'String[]'>
    readonly status: FieldRef<"GenerationJobRecord", 'String'>
    readonly results: FieldRef<"GenerationJobRecord", 'Json'>
    readonly errorMsg: FieldRef<"GenerationJobRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GenerationJobRecord findUnique
   */
  export type GenerationJobRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJobRecord to fetch.
     */
    where: GenerationJobRecordWhereUniqueInput
  }

  /**
   * GenerationJobRecord findUniqueOrThrow
   */
  export type GenerationJobRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJobRecord to fetch.
     */
    where: GenerationJobRecordWhereUniqueInput
  }

  /**
   * GenerationJobRecord findFirst
   */
  export type GenerationJobRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJobRecord to fetch.
     */
    where?: GenerationJobRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationJobRecords to fetch.
     */
    orderBy?: GenerationJobRecordOrderByWithRelationInput | GenerationJobRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationJobRecords.
     */
    cursor?: GenerationJobRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationJobRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationJobRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationJobRecords.
     */
    distinct?: GenerationJobRecordScalarFieldEnum | GenerationJobRecordScalarFieldEnum[]
  }

  /**
   * GenerationJobRecord findFirstOrThrow
   */
  export type GenerationJobRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJobRecord to fetch.
     */
    where?: GenerationJobRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationJobRecords to fetch.
     */
    orderBy?: GenerationJobRecordOrderByWithRelationInput | GenerationJobRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationJobRecords.
     */
    cursor?: GenerationJobRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationJobRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationJobRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationJobRecords.
     */
    distinct?: GenerationJobRecordScalarFieldEnum | GenerationJobRecordScalarFieldEnum[]
  }

  /**
   * GenerationJobRecord findMany
   */
  export type GenerationJobRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationJobRecords to fetch.
     */
    where?: GenerationJobRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationJobRecords to fetch.
     */
    orderBy?: GenerationJobRecordOrderByWithRelationInput | GenerationJobRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenerationJobRecords.
     */
    cursor?: GenerationJobRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationJobRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationJobRecords.
     */
    skip?: number
    distinct?: GenerationJobRecordScalarFieldEnum | GenerationJobRecordScalarFieldEnum[]
  }

  /**
   * GenerationJobRecord create
   */
  export type GenerationJobRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a GenerationJobRecord.
     */
    data: XOR<GenerationJobRecordCreateInput, GenerationJobRecordUncheckedCreateInput>
  }

  /**
   * GenerationJobRecord createMany
   */
  export type GenerationJobRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenerationJobRecords.
     */
    data: GenerationJobRecordCreateManyInput | GenerationJobRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenerationJobRecord createManyAndReturn
   */
  export type GenerationJobRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * The data used to create many GenerationJobRecords.
     */
    data: GenerationJobRecordCreateManyInput | GenerationJobRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenerationJobRecord update
   */
  export type GenerationJobRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a GenerationJobRecord.
     */
    data: XOR<GenerationJobRecordUpdateInput, GenerationJobRecordUncheckedUpdateInput>
    /**
     * Choose, which GenerationJobRecord to update.
     */
    where: GenerationJobRecordWhereUniqueInput
  }

  /**
   * GenerationJobRecord updateMany
   */
  export type GenerationJobRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenerationJobRecords.
     */
    data: XOR<GenerationJobRecordUpdateManyMutationInput, GenerationJobRecordUncheckedUpdateManyInput>
    /**
     * Filter which GenerationJobRecords to update
     */
    where?: GenerationJobRecordWhereInput
    /**
     * Limit how many GenerationJobRecords to update.
     */
    limit?: number
  }

  /**
   * GenerationJobRecord updateManyAndReturn
   */
  export type GenerationJobRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * The data used to update GenerationJobRecords.
     */
    data: XOR<GenerationJobRecordUpdateManyMutationInput, GenerationJobRecordUncheckedUpdateManyInput>
    /**
     * Filter which GenerationJobRecords to update
     */
    where?: GenerationJobRecordWhereInput
    /**
     * Limit how many GenerationJobRecords to update.
     */
    limit?: number
  }

  /**
   * GenerationJobRecord upsert
   */
  export type GenerationJobRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the GenerationJobRecord to update in case it exists.
     */
    where: GenerationJobRecordWhereUniqueInput
    /**
     * In case the GenerationJobRecord found by the `where` argument doesn't exist, create a new GenerationJobRecord with this data.
     */
    create: XOR<GenerationJobRecordCreateInput, GenerationJobRecordUncheckedCreateInput>
    /**
     * In case the GenerationJobRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenerationJobRecordUpdateInput, GenerationJobRecordUncheckedUpdateInput>
  }

  /**
   * GenerationJobRecord delete
   */
  export type GenerationJobRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
    /**
     * Filter which GenerationJobRecord to delete.
     */
    where: GenerationJobRecordWhereUniqueInput
  }

  /**
   * GenerationJobRecord deleteMany
   */
  export type GenerationJobRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationJobRecords to delete
     */
    where?: GenerationJobRecordWhereInput
    /**
     * Limit how many GenerationJobRecords to delete.
     */
    limit?: number
  }

  /**
   * GenerationJobRecord without action
   */
  export type GenerationJobRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationJobRecord
     */
    select?: GenerationJobRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationJobRecord
     */
    omit?: GenerationJobRecordOmit<ExtArgs> | null
  }


  /**
   * Model GenerationLimitRecord
   */

  export type AggregateGenerationLimitRecord = {
    _count: GenerationLimitRecordCountAggregateOutputType | null
    _avg: GenerationLimitRecordAvgAggregateOutputType | null
    _sum: GenerationLimitRecordSumAggregateOutputType | null
    _min: GenerationLimitRecordMinAggregateOutputType | null
    _max: GenerationLimitRecordMaxAggregateOutputType | null
  }

  export type GenerationLimitRecordAvgAggregateOutputType = {
    dailyLimit: number | null
  }

  export type GenerationLimitRecordSumAggregateOutputType = {
    dailyLimit: number | null
  }

  export type GenerationLimitRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    dailyLimit: number | null
    isActive: boolean | null
  }

  export type GenerationLimitRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    dailyLimit: number | null
    isActive: boolean | null
  }

  export type GenerationLimitRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    role: number
    dailyLimit: number
    isActive: number
    _all: number
  }


  export type GenerationLimitRecordAvgAggregateInputType = {
    dailyLimit?: true
  }

  export type GenerationLimitRecordSumAggregateInputType = {
    dailyLimit?: true
  }

  export type GenerationLimitRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    dailyLimit?: true
    isActive?: true
  }

  export type GenerationLimitRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    dailyLimit?: true
    isActive?: true
  }

  export type GenerationLimitRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    dailyLimit?: true
    isActive?: true
    _all?: true
  }

  export type GenerationLimitRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationLimitRecord to aggregate.
     */
    where?: GenerationLimitRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationLimitRecords to fetch.
     */
    orderBy?: GenerationLimitRecordOrderByWithRelationInput | GenerationLimitRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenerationLimitRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationLimitRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationLimitRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenerationLimitRecords
    **/
    _count?: true | GenerationLimitRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenerationLimitRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenerationLimitRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenerationLimitRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenerationLimitRecordMaxAggregateInputType
  }

  export type GetGenerationLimitRecordAggregateType<T extends GenerationLimitRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateGenerationLimitRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenerationLimitRecord[P]>
      : GetScalarType<T[P], AggregateGenerationLimitRecord[P]>
  }




  export type GenerationLimitRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenerationLimitRecordWhereInput
    orderBy?: GenerationLimitRecordOrderByWithAggregationInput | GenerationLimitRecordOrderByWithAggregationInput[]
    by: GenerationLimitRecordScalarFieldEnum[] | GenerationLimitRecordScalarFieldEnum
    having?: GenerationLimitRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenerationLimitRecordCountAggregateInputType | true
    _avg?: GenerationLimitRecordAvgAggregateInputType
    _sum?: GenerationLimitRecordSumAggregateInputType
    _min?: GenerationLimitRecordMinAggregateInputType
    _max?: GenerationLimitRecordMaxAggregateInputType
  }

  export type GenerationLimitRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    role: string
    dailyLimit: number
    isActive: boolean
    _count: GenerationLimitRecordCountAggregateOutputType | null
    _avg: GenerationLimitRecordAvgAggregateOutputType | null
    _sum: GenerationLimitRecordSumAggregateOutputType | null
    _min: GenerationLimitRecordMinAggregateOutputType | null
    _max: GenerationLimitRecordMaxAggregateOutputType | null
  }

  type GetGenerationLimitRecordGroupByPayload<T extends GenerationLimitRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenerationLimitRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenerationLimitRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenerationLimitRecordGroupByOutputType[P]>
            : GetScalarType<T[P], GenerationLimitRecordGroupByOutputType[P]>
        }
      >
    >


  export type GenerationLimitRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    dailyLimit?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["generationLimitRecord"]>

  export type GenerationLimitRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    dailyLimit?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["generationLimitRecord"]>

  export type GenerationLimitRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    dailyLimit?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["generationLimitRecord"]>

  export type GenerationLimitRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    dailyLimit?: boolean
    isActive?: boolean
  }

  export type GenerationLimitRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "role" | "dailyLimit" | "isActive", ExtArgs["result"]["generationLimitRecord"]>

  export type $GenerationLimitRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenerationLimitRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      role: string
      dailyLimit: number
      isActive: boolean
    }, ExtArgs["result"]["generationLimitRecord"]>
    composites: {}
  }

  type GenerationLimitRecordGetPayload<S extends boolean | null | undefined | GenerationLimitRecordDefaultArgs> = $Result.GetResult<Prisma.$GenerationLimitRecordPayload, S>

  type GenerationLimitRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenerationLimitRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenerationLimitRecordCountAggregateInputType | true
    }

  export interface GenerationLimitRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenerationLimitRecord'], meta: { name: 'GenerationLimitRecord' } }
    /**
     * Find zero or one GenerationLimitRecord that matches the filter.
     * @param {GenerationLimitRecordFindUniqueArgs} args - Arguments to find a GenerationLimitRecord
     * @example
     * // Get one GenerationLimitRecord
     * const generationLimitRecord = await prisma.generationLimitRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenerationLimitRecordFindUniqueArgs>(args: SelectSubset<T, GenerationLimitRecordFindUniqueArgs<ExtArgs>>): Prisma__GenerationLimitRecordClient<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GenerationLimitRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenerationLimitRecordFindUniqueOrThrowArgs} args - Arguments to find a GenerationLimitRecord
     * @example
     * // Get one GenerationLimitRecord
     * const generationLimitRecord = await prisma.generationLimitRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenerationLimitRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, GenerationLimitRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenerationLimitRecordClient<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationLimitRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLimitRecordFindFirstArgs} args - Arguments to find a GenerationLimitRecord
     * @example
     * // Get one GenerationLimitRecord
     * const generationLimitRecord = await prisma.generationLimitRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenerationLimitRecordFindFirstArgs>(args?: SelectSubset<T, GenerationLimitRecordFindFirstArgs<ExtArgs>>): Prisma__GenerationLimitRecordClient<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenerationLimitRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLimitRecordFindFirstOrThrowArgs} args - Arguments to find a GenerationLimitRecord
     * @example
     * // Get one GenerationLimitRecord
     * const generationLimitRecord = await prisma.generationLimitRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenerationLimitRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, GenerationLimitRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenerationLimitRecordClient<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GenerationLimitRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLimitRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenerationLimitRecords
     * const generationLimitRecords = await prisma.generationLimitRecord.findMany()
     * 
     * // Get first 10 GenerationLimitRecords
     * const generationLimitRecords = await prisma.generationLimitRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generationLimitRecordWithIdOnly = await prisma.generationLimitRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenerationLimitRecordFindManyArgs>(args?: SelectSubset<T, GenerationLimitRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GenerationLimitRecord.
     * @param {GenerationLimitRecordCreateArgs} args - Arguments to create a GenerationLimitRecord.
     * @example
     * // Create one GenerationLimitRecord
     * const GenerationLimitRecord = await prisma.generationLimitRecord.create({
     *   data: {
     *     // ... data to create a GenerationLimitRecord
     *   }
     * })
     * 
     */
    create<T extends GenerationLimitRecordCreateArgs>(args: SelectSubset<T, GenerationLimitRecordCreateArgs<ExtArgs>>): Prisma__GenerationLimitRecordClient<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GenerationLimitRecords.
     * @param {GenerationLimitRecordCreateManyArgs} args - Arguments to create many GenerationLimitRecords.
     * @example
     * // Create many GenerationLimitRecords
     * const generationLimitRecord = await prisma.generationLimitRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenerationLimitRecordCreateManyArgs>(args?: SelectSubset<T, GenerationLimitRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GenerationLimitRecords and returns the data saved in the database.
     * @param {GenerationLimitRecordCreateManyAndReturnArgs} args - Arguments to create many GenerationLimitRecords.
     * @example
     * // Create many GenerationLimitRecords
     * const generationLimitRecord = await prisma.generationLimitRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GenerationLimitRecords and only return the `id`
     * const generationLimitRecordWithIdOnly = await prisma.generationLimitRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenerationLimitRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, GenerationLimitRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GenerationLimitRecord.
     * @param {GenerationLimitRecordDeleteArgs} args - Arguments to delete one GenerationLimitRecord.
     * @example
     * // Delete one GenerationLimitRecord
     * const GenerationLimitRecord = await prisma.generationLimitRecord.delete({
     *   where: {
     *     // ... filter to delete one GenerationLimitRecord
     *   }
     * })
     * 
     */
    delete<T extends GenerationLimitRecordDeleteArgs>(args: SelectSubset<T, GenerationLimitRecordDeleteArgs<ExtArgs>>): Prisma__GenerationLimitRecordClient<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GenerationLimitRecord.
     * @param {GenerationLimitRecordUpdateArgs} args - Arguments to update one GenerationLimitRecord.
     * @example
     * // Update one GenerationLimitRecord
     * const generationLimitRecord = await prisma.generationLimitRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenerationLimitRecordUpdateArgs>(args: SelectSubset<T, GenerationLimitRecordUpdateArgs<ExtArgs>>): Prisma__GenerationLimitRecordClient<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GenerationLimitRecords.
     * @param {GenerationLimitRecordDeleteManyArgs} args - Arguments to filter GenerationLimitRecords to delete.
     * @example
     * // Delete a few GenerationLimitRecords
     * const { count } = await prisma.generationLimitRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenerationLimitRecordDeleteManyArgs>(args?: SelectSubset<T, GenerationLimitRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenerationLimitRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLimitRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenerationLimitRecords
     * const generationLimitRecord = await prisma.generationLimitRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenerationLimitRecordUpdateManyArgs>(args: SelectSubset<T, GenerationLimitRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenerationLimitRecords and returns the data updated in the database.
     * @param {GenerationLimitRecordUpdateManyAndReturnArgs} args - Arguments to update many GenerationLimitRecords.
     * @example
     * // Update many GenerationLimitRecords
     * const generationLimitRecord = await prisma.generationLimitRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GenerationLimitRecords and only return the `id`
     * const generationLimitRecordWithIdOnly = await prisma.generationLimitRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenerationLimitRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, GenerationLimitRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GenerationLimitRecord.
     * @param {GenerationLimitRecordUpsertArgs} args - Arguments to update or create a GenerationLimitRecord.
     * @example
     * // Update or create a GenerationLimitRecord
     * const generationLimitRecord = await prisma.generationLimitRecord.upsert({
     *   create: {
     *     // ... data to create a GenerationLimitRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenerationLimitRecord we want to update
     *   }
     * })
     */
    upsert<T extends GenerationLimitRecordUpsertArgs>(args: SelectSubset<T, GenerationLimitRecordUpsertArgs<ExtArgs>>): Prisma__GenerationLimitRecordClient<$Result.GetResult<Prisma.$GenerationLimitRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GenerationLimitRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLimitRecordCountArgs} args - Arguments to filter GenerationLimitRecords to count.
     * @example
     * // Count the number of GenerationLimitRecords
     * const count = await prisma.generationLimitRecord.count({
     *   where: {
     *     // ... the filter for the GenerationLimitRecords we want to count
     *   }
     * })
    **/
    count<T extends GenerationLimitRecordCountArgs>(
      args?: Subset<T, GenerationLimitRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenerationLimitRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenerationLimitRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLimitRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenerationLimitRecordAggregateArgs>(args: Subset<T, GenerationLimitRecordAggregateArgs>): Prisma.PrismaPromise<GetGenerationLimitRecordAggregateType<T>>

    /**
     * Group by GenerationLimitRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenerationLimitRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenerationLimitRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenerationLimitRecordGroupByArgs['orderBy'] }
        : { orderBy?: GenerationLimitRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenerationLimitRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenerationLimitRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenerationLimitRecord model
   */
  readonly fields: GenerationLimitRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenerationLimitRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenerationLimitRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GenerationLimitRecord model
   */
  interface GenerationLimitRecordFieldRefs {
    readonly id: FieldRef<"GenerationLimitRecord", 'String'>
    readonly createdAt: FieldRef<"GenerationLimitRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"GenerationLimitRecord", 'DateTime'>
    readonly role: FieldRef<"GenerationLimitRecord", 'String'>
    readonly dailyLimit: FieldRef<"GenerationLimitRecord", 'Int'>
    readonly isActive: FieldRef<"GenerationLimitRecord", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GenerationLimitRecord findUnique
   */
  export type GenerationLimitRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationLimitRecord to fetch.
     */
    where: GenerationLimitRecordWhereUniqueInput
  }

  /**
   * GenerationLimitRecord findUniqueOrThrow
   */
  export type GenerationLimitRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationLimitRecord to fetch.
     */
    where: GenerationLimitRecordWhereUniqueInput
  }

  /**
   * GenerationLimitRecord findFirst
   */
  export type GenerationLimitRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationLimitRecord to fetch.
     */
    where?: GenerationLimitRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationLimitRecords to fetch.
     */
    orderBy?: GenerationLimitRecordOrderByWithRelationInput | GenerationLimitRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationLimitRecords.
     */
    cursor?: GenerationLimitRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationLimitRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationLimitRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationLimitRecords.
     */
    distinct?: GenerationLimitRecordScalarFieldEnum | GenerationLimitRecordScalarFieldEnum[]
  }

  /**
   * GenerationLimitRecord findFirstOrThrow
   */
  export type GenerationLimitRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationLimitRecord to fetch.
     */
    where?: GenerationLimitRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationLimitRecords to fetch.
     */
    orderBy?: GenerationLimitRecordOrderByWithRelationInput | GenerationLimitRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenerationLimitRecords.
     */
    cursor?: GenerationLimitRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationLimitRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationLimitRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenerationLimitRecords.
     */
    distinct?: GenerationLimitRecordScalarFieldEnum | GenerationLimitRecordScalarFieldEnum[]
  }

  /**
   * GenerationLimitRecord findMany
   */
  export type GenerationLimitRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * Filter, which GenerationLimitRecords to fetch.
     */
    where?: GenerationLimitRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenerationLimitRecords to fetch.
     */
    orderBy?: GenerationLimitRecordOrderByWithRelationInput | GenerationLimitRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenerationLimitRecords.
     */
    cursor?: GenerationLimitRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenerationLimitRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenerationLimitRecords.
     */
    skip?: number
    distinct?: GenerationLimitRecordScalarFieldEnum | GenerationLimitRecordScalarFieldEnum[]
  }

  /**
   * GenerationLimitRecord create
   */
  export type GenerationLimitRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a GenerationLimitRecord.
     */
    data: XOR<GenerationLimitRecordCreateInput, GenerationLimitRecordUncheckedCreateInput>
  }

  /**
   * GenerationLimitRecord createMany
   */
  export type GenerationLimitRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenerationLimitRecords.
     */
    data: GenerationLimitRecordCreateManyInput | GenerationLimitRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenerationLimitRecord createManyAndReturn
   */
  export type GenerationLimitRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * The data used to create many GenerationLimitRecords.
     */
    data: GenerationLimitRecordCreateManyInput | GenerationLimitRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenerationLimitRecord update
   */
  export type GenerationLimitRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a GenerationLimitRecord.
     */
    data: XOR<GenerationLimitRecordUpdateInput, GenerationLimitRecordUncheckedUpdateInput>
    /**
     * Choose, which GenerationLimitRecord to update.
     */
    where: GenerationLimitRecordWhereUniqueInput
  }

  /**
   * GenerationLimitRecord updateMany
   */
  export type GenerationLimitRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenerationLimitRecords.
     */
    data: XOR<GenerationLimitRecordUpdateManyMutationInput, GenerationLimitRecordUncheckedUpdateManyInput>
    /**
     * Filter which GenerationLimitRecords to update
     */
    where?: GenerationLimitRecordWhereInput
    /**
     * Limit how many GenerationLimitRecords to update.
     */
    limit?: number
  }

  /**
   * GenerationLimitRecord updateManyAndReturn
   */
  export type GenerationLimitRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * The data used to update GenerationLimitRecords.
     */
    data: XOR<GenerationLimitRecordUpdateManyMutationInput, GenerationLimitRecordUncheckedUpdateManyInput>
    /**
     * Filter which GenerationLimitRecords to update
     */
    where?: GenerationLimitRecordWhereInput
    /**
     * Limit how many GenerationLimitRecords to update.
     */
    limit?: number
  }

  /**
   * GenerationLimitRecord upsert
   */
  export type GenerationLimitRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the GenerationLimitRecord to update in case it exists.
     */
    where: GenerationLimitRecordWhereUniqueInput
    /**
     * In case the GenerationLimitRecord found by the `where` argument doesn't exist, create a new GenerationLimitRecord with this data.
     */
    create: XOR<GenerationLimitRecordCreateInput, GenerationLimitRecordUncheckedCreateInput>
    /**
     * In case the GenerationLimitRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenerationLimitRecordUpdateInput, GenerationLimitRecordUncheckedUpdateInput>
  }

  /**
   * GenerationLimitRecord delete
   */
  export type GenerationLimitRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
    /**
     * Filter which GenerationLimitRecord to delete.
     */
    where: GenerationLimitRecordWhereUniqueInput
  }

  /**
   * GenerationLimitRecord deleteMany
   */
  export type GenerationLimitRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenerationLimitRecords to delete
     */
    where?: GenerationLimitRecordWhereInput
    /**
     * Limit how many GenerationLimitRecords to delete.
     */
    limit?: number
  }

  /**
   * GenerationLimitRecord without action
   */
  export type GenerationLimitRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenerationLimitRecord
     */
    select?: GenerationLimitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenerationLimitRecord
     */
    omit?: GenerationLimitRecordOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GenerationJobRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    role: 'role',
    topic: 'topic',
    depth: 'depth',
    sources: 'sources',
    outputs: 'outputs',
    status: 'status',
    results: 'results',
    errorMsg: 'errorMsg'
  };

  export type GenerationJobRecordScalarFieldEnum = (typeof GenerationJobRecordScalarFieldEnum)[keyof typeof GenerationJobRecordScalarFieldEnum]


  export const GenerationLimitRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    dailyLimit: 'dailyLimit',
    isActive: 'isActive'
  };

  export type GenerationLimitRecordScalarFieldEnum = (typeof GenerationLimitRecordScalarFieldEnum)[keyof typeof GenerationLimitRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GenerationJobRecordWhereInput = {
    AND?: GenerationJobRecordWhereInput | GenerationJobRecordWhereInput[]
    OR?: GenerationJobRecordWhereInput[]
    NOT?: GenerationJobRecordWhereInput | GenerationJobRecordWhereInput[]
    id?: StringFilter<"GenerationJobRecord"> | string
    createdAt?: DateTimeFilter<"GenerationJobRecord"> | Date | string
    updatedAt?: DateTimeFilter<"GenerationJobRecord"> | Date | string
    userId?: StringFilter<"GenerationJobRecord"> | string
    role?: StringFilter<"GenerationJobRecord"> | string
    topic?: StringFilter<"GenerationJobRecord"> | string
    depth?: StringFilter<"GenerationJobRecord"> | string
    sources?: JsonFilter<"GenerationJobRecord">
    outputs?: StringNullableListFilter<"GenerationJobRecord">
    status?: StringFilter<"GenerationJobRecord"> | string
    results?: JsonNullableFilter<"GenerationJobRecord">
    errorMsg?: StringNullableFilter<"GenerationJobRecord"> | string | null
  }

  export type GenerationJobRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    topic?: SortOrder
    depth?: SortOrder
    sources?: SortOrder
    outputs?: SortOrder
    status?: SortOrder
    results?: SortOrderInput | SortOrder
    errorMsg?: SortOrderInput | SortOrder
  }

  export type GenerationJobRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenerationJobRecordWhereInput | GenerationJobRecordWhereInput[]
    OR?: GenerationJobRecordWhereInput[]
    NOT?: GenerationJobRecordWhereInput | GenerationJobRecordWhereInput[]
    createdAt?: DateTimeFilter<"GenerationJobRecord"> | Date | string
    updatedAt?: DateTimeFilter<"GenerationJobRecord"> | Date | string
    userId?: StringFilter<"GenerationJobRecord"> | string
    role?: StringFilter<"GenerationJobRecord"> | string
    topic?: StringFilter<"GenerationJobRecord"> | string
    depth?: StringFilter<"GenerationJobRecord"> | string
    sources?: JsonFilter<"GenerationJobRecord">
    outputs?: StringNullableListFilter<"GenerationJobRecord">
    status?: StringFilter<"GenerationJobRecord"> | string
    results?: JsonNullableFilter<"GenerationJobRecord">
    errorMsg?: StringNullableFilter<"GenerationJobRecord"> | string | null
  }, "id">

  export type GenerationJobRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    topic?: SortOrder
    depth?: SortOrder
    sources?: SortOrder
    outputs?: SortOrder
    status?: SortOrder
    results?: SortOrderInput | SortOrder
    errorMsg?: SortOrderInput | SortOrder
    _count?: GenerationJobRecordCountOrderByAggregateInput
    _max?: GenerationJobRecordMaxOrderByAggregateInput
    _min?: GenerationJobRecordMinOrderByAggregateInput
  }

  export type GenerationJobRecordScalarWhereWithAggregatesInput = {
    AND?: GenerationJobRecordScalarWhereWithAggregatesInput | GenerationJobRecordScalarWhereWithAggregatesInput[]
    OR?: GenerationJobRecordScalarWhereWithAggregatesInput[]
    NOT?: GenerationJobRecordScalarWhereWithAggregatesInput | GenerationJobRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GenerationJobRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GenerationJobRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GenerationJobRecord"> | Date | string
    userId?: StringWithAggregatesFilter<"GenerationJobRecord"> | string
    role?: StringWithAggregatesFilter<"GenerationJobRecord"> | string
    topic?: StringWithAggregatesFilter<"GenerationJobRecord"> | string
    depth?: StringWithAggregatesFilter<"GenerationJobRecord"> | string
    sources?: JsonWithAggregatesFilter<"GenerationJobRecord">
    outputs?: StringNullableListFilter<"GenerationJobRecord">
    status?: StringWithAggregatesFilter<"GenerationJobRecord"> | string
    results?: JsonNullableWithAggregatesFilter<"GenerationJobRecord">
    errorMsg?: StringNullableWithAggregatesFilter<"GenerationJobRecord"> | string | null
  }

  export type GenerationLimitRecordWhereInput = {
    AND?: GenerationLimitRecordWhereInput | GenerationLimitRecordWhereInput[]
    OR?: GenerationLimitRecordWhereInput[]
    NOT?: GenerationLimitRecordWhereInput | GenerationLimitRecordWhereInput[]
    id?: StringFilter<"GenerationLimitRecord"> | string
    createdAt?: DateTimeFilter<"GenerationLimitRecord"> | Date | string
    updatedAt?: DateTimeFilter<"GenerationLimitRecord"> | Date | string
    role?: StringFilter<"GenerationLimitRecord"> | string
    dailyLimit?: IntFilter<"GenerationLimitRecord"> | number
    isActive?: BoolFilter<"GenerationLimitRecord"> | boolean
  }

  export type GenerationLimitRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    dailyLimit?: SortOrder
    isActive?: SortOrder
  }

  export type GenerationLimitRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    role?: string
    AND?: GenerationLimitRecordWhereInput | GenerationLimitRecordWhereInput[]
    OR?: GenerationLimitRecordWhereInput[]
    NOT?: GenerationLimitRecordWhereInput | GenerationLimitRecordWhereInput[]
    createdAt?: DateTimeFilter<"GenerationLimitRecord"> | Date | string
    updatedAt?: DateTimeFilter<"GenerationLimitRecord"> | Date | string
    dailyLimit?: IntFilter<"GenerationLimitRecord"> | number
    isActive?: BoolFilter<"GenerationLimitRecord"> | boolean
  }, "id" | "role">

  export type GenerationLimitRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    dailyLimit?: SortOrder
    isActive?: SortOrder
    _count?: GenerationLimitRecordCountOrderByAggregateInput
    _avg?: GenerationLimitRecordAvgOrderByAggregateInput
    _max?: GenerationLimitRecordMaxOrderByAggregateInput
    _min?: GenerationLimitRecordMinOrderByAggregateInput
    _sum?: GenerationLimitRecordSumOrderByAggregateInput
  }

  export type GenerationLimitRecordScalarWhereWithAggregatesInput = {
    AND?: GenerationLimitRecordScalarWhereWithAggregatesInput | GenerationLimitRecordScalarWhereWithAggregatesInput[]
    OR?: GenerationLimitRecordScalarWhereWithAggregatesInput[]
    NOT?: GenerationLimitRecordScalarWhereWithAggregatesInput | GenerationLimitRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GenerationLimitRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GenerationLimitRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GenerationLimitRecord"> | Date | string
    role?: StringWithAggregatesFilter<"GenerationLimitRecord"> | string
    dailyLimit?: IntWithAggregatesFilter<"GenerationLimitRecord"> | number
    isActive?: BoolWithAggregatesFilter<"GenerationLimitRecord"> | boolean
  }

  export type GenerationJobRecordCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    role: string
    topic: string
    depth: string
    sources: JsonNullValueInput | InputJsonValue
    outputs?: GenerationJobRecordCreateoutputsInput | string[]
    status: string
    results?: NullableJsonNullValueInput | InputJsonValue
    errorMsg?: string | null
  }

  export type GenerationJobRecordUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    role: string
    topic: string
    depth: string
    sources: JsonNullValueInput | InputJsonValue
    outputs?: GenerationJobRecordCreateoutputsInput | string[]
    status: string
    results?: NullableJsonNullValueInput | InputJsonValue
    errorMsg?: string | null
  }

  export type GenerationJobRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    depth?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    outputs?: GenerationJobRecordUpdateoutputsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationJobRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    depth?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    outputs?: GenerationJobRecordUpdateoutputsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationJobRecordCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    role: string
    topic: string
    depth: string
    sources: JsonNullValueInput | InputJsonValue
    outputs?: GenerationJobRecordCreateoutputsInput | string[]
    status: string
    results?: NullableJsonNullValueInput | InputJsonValue
    errorMsg?: string | null
  }

  export type GenerationJobRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    depth?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    outputs?: GenerationJobRecordUpdateoutputsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationJobRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    depth?: StringFieldUpdateOperationsInput | string
    sources?: JsonNullValueInput | InputJsonValue
    outputs?: GenerationJobRecordUpdateoutputsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    results?: NullableJsonNullValueInput | InputJsonValue
    errorMsg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenerationLimitRecordCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: string
    dailyLimit: number
    isActive?: boolean
  }

  export type GenerationLimitRecordUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: string
    dailyLimit: number
    isActive?: boolean
  }

  export type GenerationLimitRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GenerationLimitRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GenerationLimitRecordCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: string
    dailyLimit: number
    isActive?: boolean
  }

  export type GenerationLimitRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GenerationLimitRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    dailyLimit?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GenerationJobRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    topic?: SortOrder
    depth?: SortOrder
    sources?: SortOrder
    outputs?: SortOrder
    status?: SortOrder
    results?: SortOrder
    errorMsg?: SortOrder
  }

  export type GenerationJobRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    topic?: SortOrder
    depth?: SortOrder
    status?: SortOrder
    errorMsg?: SortOrder
  }

  export type GenerationJobRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    topic?: SortOrder
    depth?: SortOrder
    status?: SortOrder
    errorMsg?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GenerationLimitRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    dailyLimit?: SortOrder
    isActive?: SortOrder
  }

  export type GenerationLimitRecordAvgOrderByAggregateInput = {
    dailyLimit?: SortOrder
  }

  export type GenerationLimitRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    dailyLimit?: SortOrder
    isActive?: SortOrder
  }

  export type GenerationLimitRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    dailyLimit?: SortOrder
    isActive?: SortOrder
  }

  export type GenerationLimitRecordSumOrderByAggregateInput = {
    dailyLimit?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GenerationJobRecordCreateoutputsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GenerationJobRecordUpdateoutputsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}