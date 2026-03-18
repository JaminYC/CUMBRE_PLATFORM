
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
 * Model TutorSessionRecord
 * 
 */
export type TutorSessionRecord = $Result.DefaultSelection<Prisma.$TutorSessionRecordPayload>
/**
 * Model TutorTurnRecord
 * 
 */
export type TutorTurnRecord = $Result.DefaultSelection<Prisma.$TutorTurnRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TutorSessionRecords
 * const tutorSessionRecords = await prisma.tutorSessionRecord.findMany()
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
   * // Fetch zero or more TutorSessionRecords
   * const tutorSessionRecords = await prisma.tutorSessionRecord.findMany()
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
   * `prisma.tutorSessionRecord`: Exposes CRUD operations for the **TutorSessionRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorSessionRecords
    * const tutorSessionRecords = await prisma.tutorSessionRecord.findMany()
    * ```
    */
  get tutorSessionRecord(): Prisma.TutorSessionRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorTurnRecord`: Exposes CRUD operations for the **TutorTurnRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorTurnRecords
    * const tutorTurnRecords = await prisma.tutorTurnRecord.findMany()
    * ```
    */
  get tutorTurnRecord(): Prisma.TutorTurnRecordDelegate<ExtArgs, ClientOptions>;
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
    TutorSessionRecord: 'TutorSessionRecord',
    TutorTurnRecord: 'TutorTurnRecord'
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
      modelProps: "tutorSessionRecord" | "tutorTurnRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TutorSessionRecord: {
        payload: Prisma.$TutorSessionRecordPayload<ExtArgs>
        fields: Prisma.TutorSessionRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorSessionRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorSessionRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload>
          }
          findFirst: {
            args: Prisma.TutorSessionRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorSessionRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload>
          }
          findMany: {
            args: Prisma.TutorSessionRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload>[]
          }
          create: {
            args: Prisma.TutorSessionRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload>
          }
          createMany: {
            args: Prisma.TutorSessionRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorSessionRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload>[]
          }
          delete: {
            args: Prisma.TutorSessionRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload>
          }
          update: {
            args: Prisma.TutorSessionRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload>
          }
          deleteMany: {
            args: Prisma.TutorSessionRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorSessionRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorSessionRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload>[]
          }
          upsert: {
            args: Prisma.TutorSessionRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSessionRecordPayload>
          }
          aggregate: {
            args: Prisma.TutorSessionRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorSessionRecord>
          }
          groupBy: {
            args: Prisma.TutorSessionRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorSessionRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorSessionRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TutorSessionRecordCountAggregateOutputType> | number
          }
        }
      }
      TutorTurnRecord: {
        payload: Prisma.$TutorTurnRecordPayload<ExtArgs>
        fields: Prisma.TutorTurnRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorTurnRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorTurnRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload>
          }
          findFirst: {
            args: Prisma.TutorTurnRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorTurnRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload>
          }
          findMany: {
            args: Prisma.TutorTurnRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload>[]
          }
          create: {
            args: Prisma.TutorTurnRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload>
          }
          createMany: {
            args: Prisma.TutorTurnRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorTurnRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload>[]
          }
          delete: {
            args: Prisma.TutorTurnRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload>
          }
          update: {
            args: Prisma.TutorTurnRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload>
          }
          deleteMany: {
            args: Prisma.TutorTurnRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorTurnRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorTurnRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload>[]
          }
          upsert: {
            args: Prisma.TutorTurnRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorTurnRecordPayload>
          }
          aggregate: {
            args: Prisma.TutorTurnRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorTurnRecord>
          }
          groupBy: {
            args: Prisma.TutorTurnRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorTurnRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorTurnRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TutorTurnRecordCountAggregateOutputType> | number
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
    tutorSessionRecord?: TutorSessionRecordOmit
    tutorTurnRecord?: TutorTurnRecordOmit
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
   * Count Type TutorSessionRecordCountOutputType
   */

  export type TutorSessionRecordCountOutputType = {
    turns: number
  }

  export type TutorSessionRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turns?: boolean | TutorSessionRecordCountOutputTypeCountTurnsArgs
  }

  // Custom InputTypes
  /**
   * TutorSessionRecordCountOutputType without action
   */
  export type TutorSessionRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecordCountOutputType
     */
    select?: TutorSessionRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorSessionRecordCountOutputType without action
   */
  export type TutorSessionRecordCountOutputTypeCountTurnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorTurnRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TutorSessionRecord
   */

  export type AggregateTutorSessionRecord = {
    _count: TutorSessionRecordCountAggregateOutputType | null
    _avg: TutorSessionRecordAvgAggregateOutputType | null
    _sum: TutorSessionRecordSumAggregateOutputType | null
    _min: TutorSessionRecordMinAggregateOutputType | null
    _max: TutorSessionRecordMaxAggregateOutputType | null
  }

  export type TutorSessionRecordAvgAggregateOutputType = {
    turnCount: number | null
  }

  export type TutorSessionRecordSumAggregateOutputType = {
    turnCount: number | null
  }

  export type TutorSessionRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    learnerUserId: string | null
    status: string | null
    tutorMode: string | null
    startedAt: Date | null
    lastInteractionAt: Date | null
    learningPathId: string | null
    lessonId: string | null
    goalSummary: string | null
    turnCount: number | null
  }

  export type TutorSessionRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    learnerUserId: string | null
    status: string | null
    tutorMode: string | null
    startedAt: Date | null
    lastInteractionAt: Date | null
    learningPathId: string | null
    lessonId: string | null
    goalSummary: string | null
    turnCount: number | null
  }

  export type TutorSessionRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    learnerUserId: number
    status: number
    tutorMode: number
    startedAt: number
    lastInteractionAt: number
    learningPathId: number
    lessonId: number
    topicIds: number
    goalSummary: number
    turnCount: number
    _all: number
  }


  export type TutorSessionRecordAvgAggregateInputType = {
    turnCount?: true
  }

  export type TutorSessionRecordSumAggregateInputType = {
    turnCount?: true
  }

  export type TutorSessionRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    learnerUserId?: true
    status?: true
    tutorMode?: true
    startedAt?: true
    lastInteractionAt?: true
    learningPathId?: true
    lessonId?: true
    goalSummary?: true
    turnCount?: true
  }

  export type TutorSessionRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    learnerUserId?: true
    status?: true
    tutorMode?: true
    startedAt?: true
    lastInteractionAt?: true
    learningPathId?: true
    lessonId?: true
    goalSummary?: true
    turnCount?: true
  }

  export type TutorSessionRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    learnerUserId?: true
    status?: true
    tutorMode?: true
    startedAt?: true
    lastInteractionAt?: true
    learningPathId?: true
    lessonId?: true
    topicIds?: true
    goalSummary?: true
    turnCount?: true
    _all?: true
  }

  export type TutorSessionRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorSessionRecord to aggregate.
     */
    where?: TutorSessionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSessionRecords to fetch.
     */
    orderBy?: TutorSessionRecordOrderByWithRelationInput | TutorSessionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorSessionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSessionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSessionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorSessionRecords
    **/
    _count?: true | TutorSessionRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorSessionRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorSessionRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorSessionRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorSessionRecordMaxAggregateInputType
  }

  export type GetTutorSessionRecordAggregateType<T extends TutorSessionRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorSessionRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorSessionRecord[P]>
      : GetScalarType<T[P], AggregateTutorSessionRecord[P]>
  }




  export type TutorSessionRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSessionRecordWhereInput
    orderBy?: TutorSessionRecordOrderByWithAggregationInput | TutorSessionRecordOrderByWithAggregationInput[]
    by: TutorSessionRecordScalarFieldEnum[] | TutorSessionRecordScalarFieldEnum
    having?: TutorSessionRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorSessionRecordCountAggregateInputType | true
    _avg?: TutorSessionRecordAvgAggregateInputType
    _sum?: TutorSessionRecordSumAggregateInputType
    _min?: TutorSessionRecordMinAggregateInputType
    _max?: TutorSessionRecordMaxAggregateInputType
  }

  export type TutorSessionRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    learnerUserId: string
    status: string
    tutorMode: string
    startedAt: Date
    lastInteractionAt: Date
    learningPathId: string | null
    lessonId: string | null
    topicIds: string[]
    goalSummary: string | null
    turnCount: number
    _count: TutorSessionRecordCountAggregateOutputType | null
    _avg: TutorSessionRecordAvgAggregateOutputType | null
    _sum: TutorSessionRecordSumAggregateOutputType | null
    _min: TutorSessionRecordMinAggregateOutputType | null
    _max: TutorSessionRecordMaxAggregateOutputType | null
  }

  type GetTutorSessionRecordGroupByPayload<T extends TutorSessionRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorSessionRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorSessionRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorSessionRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TutorSessionRecordGroupByOutputType[P]>
        }
      >
    >


  export type TutorSessionRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    status?: boolean
    tutorMode?: boolean
    startedAt?: boolean
    lastInteractionAt?: boolean
    learningPathId?: boolean
    lessonId?: boolean
    topicIds?: boolean
    goalSummary?: boolean
    turnCount?: boolean
    turns?: boolean | TutorSessionRecord$turnsArgs<ExtArgs>
    _count?: boolean | TutorSessionRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSessionRecord"]>

  export type TutorSessionRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    status?: boolean
    tutorMode?: boolean
    startedAt?: boolean
    lastInteractionAt?: boolean
    learningPathId?: boolean
    lessonId?: boolean
    topicIds?: boolean
    goalSummary?: boolean
    turnCount?: boolean
  }, ExtArgs["result"]["tutorSessionRecord"]>

  export type TutorSessionRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    status?: boolean
    tutorMode?: boolean
    startedAt?: boolean
    lastInteractionAt?: boolean
    learningPathId?: boolean
    lessonId?: boolean
    topicIds?: boolean
    goalSummary?: boolean
    turnCount?: boolean
  }, ExtArgs["result"]["tutorSessionRecord"]>

  export type TutorSessionRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    status?: boolean
    tutorMode?: boolean
    startedAt?: boolean
    lastInteractionAt?: boolean
    learningPathId?: boolean
    lessonId?: boolean
    topicIds?: boolean
    goalSummary?: boolean
    turnCount?: boolean
  }

  export type TutorSessionRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "learnerUserId" | "status" | "tutorMode" | "startedAt" | "lastInteractionAt" | "learningPathId" | "lessonId" | "topicIds" | "goalSummary" | "turnCount", ExtArgs["result"]["tutorSessionRecord"]>
  export type TutorSessionRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turns?: boolean | TutorSessionRecord$turnsArgs<ExtArgs>
    _count?: boolean | TutorSessionRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TutorSessionRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TutorSessionRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TutorSessionRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorSessionRecord"
    objects: {
      turns: Prisma.$TutorTurnRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      learnerUserId: string
      status: string
      tutorMode: string
      startedAt: Date
      lastInteractionAt: Date
      learningPathId: string | null
      lessonId: string | null
      topicIds: string[]
      goalSummary: string | null
      turnCount: number
    }, ExtArgs["result"]["tutorSessionRecord"]>
    composites: {}
  }

  type TutorSessionRecordGetPayload<S extends boolean | null | undefined | TutorSessionRecordDefaultArgs> = $Result.GetResult<Prisma.$TutorSessionRecordPayload, S>

  type TutorSessionRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorSessionRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorSessionRecordCountAggregateInputType | true
    }

  export interface TutorSessionRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorSessionRecord'], meta: { name: 'TutorSessionRecord' } }
    /**
     * Find zero or one TutorSessionRecord that matches the filter.
     * @param {TutorSessionRecordFindUniqueArgs} args - Arguments to find a TutorSessionRecord
     * @example
     * // Get one TutorSessionRecord
     * const tutorSessionRecord = await prisma.tutorSessionRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorSessionRecordFindUniqueArgs>(args: SelectSubset<T, TutorSessionRecordFindUniqueArgs<ExtArgs>>): Prisma__TutorSessionRecordClient<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorSessionRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorSessionRecordFindUniqueOrThrowArgs} args - Arguments to find a TutorSessionRecord
     * @example
     * // Get one TutorSessionRecord
     * const tutorSessionRecord = await prisma.tutorSessionRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorSessionRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorSessionRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorSessionRecordClient<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorSessionRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionRecordFindFirstArgs} args - Arguments to find a TutorSessionRecord
     * @example
     * // Get one TutorSessionRecord
     * const tutorSessionRecord = await prisma.tutorSessionRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorSessionRecordFindFirstArgs>(args?: SelectSubset<T, TutorSessionRecordFindFirstArgs<ExtArgs>>): Prisma__TutorSessionRecordClient<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorSessionRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionRecordFindFirstOrThrowArgs} args - Arguments to find a TutorSessionRecord
     * @example
     * // Get one TutorSessionRecord
     * const tutorSessionRecord = await prisma.tutorSessionRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorSessionRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorSessionRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorSessionRecordClient<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorSessionRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorSessionRecords
     * const tutorSessionRecords = await prisma.tutorSessionRecord.findMany()
     * 
     * // Get first 10 TutorSessionRecords
     * const tutorSessionRecords = await prisma.tutorSessionRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorSessionRecordWithIdOnly = await prisma.tutorSessionRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorSessionRecordFindManyArgs>(args?: SelectSubset<T, TutorSessionRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorSessionRecord.
     * @param {TutorSessionRecordCreateArgs} args - Arguments to create a TutorSessionRecord.
     * @example
     * // Create one TutorSessionRecord
     * const TutorSessionRecord = await prisma.tutorSessionRecord.create({
     *   data: {
     *     // ... data to create a TutorSessionRecord
     *   }
     * })
     * 
     */
    create<T extends TutorSessionRecordCreateArgs>(args: SelectSubset<T, TutorSessionRecordCreateArgs<ExtArgs>>): Prisma__TutorSessionRecordClient<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorSessionRecords.
     * @param {TutorSessionRecordCreateManyArgs} args - Arguments to create many TutorSessionRecords.
     * @example
     * // Create many TutorSessionRecords
     * const tutorSessionRecord = await prisma.tutorSessionRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorSessionRecordCreateManyArgs>(args?: SelectSubset<T, TutorSessionRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorSessionRecords and returns the data saved in the database.
     * @param {TutorSessionRecordCreateManyAndReturnArgs} args - Arguments to create many TutorSessionRecords.
     * @example
     * // Create many TutorSessionRecords
     * const tutorSessionRecord = await prisma.tutorSessionRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorSessionRecords and only return the `id`
     * const tutorSessionRecordWithIdOnly = await prisma.tutorSessionRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorSessionRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorSessionRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorSessionRecord.
     * @param {TutorSessionRecordDeleteArgs} args - Arguments to delete one TutorSessionRecord.
     * @example
     * // Delete one TutorSessionRecord
     * const TutorSessionRecord = await prisma.tutorSessionRecord.delete({
     *   where: {
     *     // ... filter to delete one TutorSessionRecord
     *   }
     * })
     * 
     */
    delete<T extends TutorSessionRecordDeleteArgs>(args: SelectSubset<T, TutorSessionRecordDeleteArgs<ExtArgs>>): Prisma__TutorSessionRecordClient<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorSessionRecord.
     * @param {TutorSessionRecordUpdateArgs} args - Arguments to update one TutorSessionRecord.
     * @example
     * // Update one TutorSessionRecord
     * const tutorSessionRecord = await prisma.tutorSessionRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorSessionRecordUpdateArgs>(args: SelectSubset<T, TutorSessionRecordUpdateArgs<ExtArgs>>): Prisma__TutorSessionRecordClient<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorSessionRecords.
     * @param {TutorSessionRecordDeleteManyArgs} args - Arguments to filter TutorSessionRecords to delete.
     * @example
     * // Delete a few TutorSessionRecords
     * const { count } = await prisma.tutorSessionRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorSessionRecordDeleteManyArgs>(args?: SelectSubset<T, TutorSessionRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorSessionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorSessionRecords
     * const tutorSessionRecord = await prisma.tutorSessionRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorSessionRecordUpdateManyArgs>(args: SelectSubset<T, TutorSessionRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorSessionRecords and returns the data updated in the database.
     * @param {TutorSessionRecordUpdateManyAndReturnArgs} args - Arguments to update many TutorSessionRecords.
     * @example
     * // Update many TutorSessionRecords
     * const tutorSessionRecord = await prisma.tutorSessionRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorSessionRecords and only return the `id`
     * const tutorSessionRecordWithIdOnly = await prisma.tutorSessionRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends TutorSessionRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorSessionRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorSessionRecord.
     * @param {TutorSessionRecordUpsertArgs} args - Arguments to update or create a TutorSessionRecord.
     * @example
     * // Update or create a TutorSessionRecord
     * const tutorSessionRecord = await prisma.tutorSessionRecord.upsert({
     *   create: {
     *     // ... data to create a TutorSessionRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorSessionRecord we want to update
     *   }
     * })
     */
    upsert<T extends TutorSessionRecordUpsertArgs>(args: SelectSubset<T, TutorSessionRecordUpsertArgs<ExtArgs>>): Prisma__TutorSessionRecordClient<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorSessionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionRecordCountArgs} args - Arguments to filter TutorSessionRecords to count.
     * @example
     * // Count the number of TutorSessionRecords
     * const count = await prisma.tutorSessionRecord.count({
     *   where: {
     *     // ... the filter for the TutorSessionRecords we want to count
     *   }
     * })
    **/
    count<T extends TutorSessionRecordCountArgs>(
      args?: Subset<T, TutorSessionRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorSessionRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorSessionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorSessionRecordAggregateArgs>(args: Subset<T, TutorSessionRecordAggregateArgs>): Prisma.PrismaPromise<GetTutorSessionRecordAggregateType<T>>

    /**
     * Group by TutorSessionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSessionRecordGroupByArgs} args - Group by arguments.
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
      T extends TutorSessionRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorSessionRecordGroupByArgs['orderBy'] }
        : { orderBy?: TutorSessionRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TutorSessionRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorSessionRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorSessionRecord model
   */
  readonly fields: TutorSessionRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorSessionRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorSessionRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turns<T extends TutorSessionRecord$turnsArgs<ExtArgs> = {}>(args?: Subset<T, TutorSessionRecord$turnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TutorSessionRecord model
   */
  interface TutorSessionRecordFieldRefs {
    readonly id: FieldRef<"TutorSessionRecord", 'String'>
    readonly createdAt: FieldRef<"TutorSessionRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"TutorSessionRecord", 'DateTime'>
    readonly metadata: FieldRef<"TutorSessionRecord", 'Json'>
    readonly learnerUserId: FieldRef<"TutorSessionRecord", 'String'>
    readonly status: FieldRef<"TutorSessionRecord", 'String'>
    readonly tutorMode: FieldRef<"TutorSessionRecord", 'String'>
    readonly startedAt: FieldRef<"TutorSessionRecord", 'DateTime'>
    readonly lastInteractionAt: FieldRef<"TutorSessionRecord", 'DateTime'>
    readonly learningPathId: FieldRef<"TutorSessionRecord", 'String'>
    readonly lessonId: FieldRef<"TutorSessionRecord", 'String'>
    readonly topicIds: FieldRef<"TutorSessionRecord", 'String[]'>
    readonly goalSummary: FieldRef<"TutorSessionRecord", 'String'>
    readonly turnCount: FieldRef<"TutorSessionRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TutorSessionRecord findUnique
   */
  export type TutorSessionRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorSessionRecord to fetch.
     */
    where: TutorSessionRecordWhereUniqueInput
  }

  /**
   * TutorSessionRecord findUniqueOrThrow
   */
  export type TutorSessionRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorSessionRecord to fetch.
     */
    where: TutorSessionRecordWhereUniqueInput
  }

  /**
   * TutorSessionRecord findFirst
   */
  export type TutorSessionRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorSessionRecord to fetch.
     */
    where?: TutorSessionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSessionRecords to fetch.
     */
    orderBy?: TutorSessionRecordOrderByWithRelationInput | TutorSessionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorSessionRecords.
     */
    cursor?: TutorSessionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSessionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSessionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorSessionRecords.
     */
    distinct?: TutorSessionRecordScalarFieldEnum | TutorSessionRecordScalarFieldEnum[]
  }

  /**
   * TutorSessionRecord findFirstOrThrow
   */
  export type TutorSessionRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorSessionRecord to fetch.
     */
    where?: TutorSessionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSessionRecords to fetch.
     */
    orderBy?: TutorSessionRecordOrderByWithRelationInput | TutorSessionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorSessionRecords.
     */
    cursor?: TutorSessionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSessionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSessionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorSessionRecords.
     */
    distinct?: TutorSessionRecordScalarFieldEnum | TutorSessionRecordScalarFieldEnum[]
  }

  /**
   * TutorSessionRecord findMany
   */
  export type TutorSessionRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorSessionRecords to fetch.
     */
    where?: TutorSessionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSessionRecords to fetch.
     */
    orderBy?: TutorSessionRecordOrderByWithRelationInput | TutorSessionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorSessionRecords.
     */
    cursor?: TutorSessionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSessionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSessionRecords.
     */
    skip?: number
    distinct?: TutorSessionRecordScalarFieldEnum | TutorSessionRecordScalarFieldEnum[]
  }

  /**
   * TutorSessionRecord create
   */
  export type TutorSessionRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorSessionRecord.
     */
    data: XOR<TutorSessionRecordCreateInput, TutorSessionRecordUncheckedCreateInput>
  }

  /**
   * TutorSessionRecord createMany
   */
  export type TutorSessionRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorSessionRecords.
     */
    data: TutorSessionRecordCreateManyInput | TutorSessionRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorSessionRecord createManyAndReturn
   */
  export type TutorSessionRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TutorSessionRecords.
     */
    data: TutorSessionRecordCreateManyInput | TutorSessionRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorSessionRecord update
   */
  export type TutorSessionRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorSessionRecord.
     */
    data: XOR<TutorSessionRecordUpdateInput, TutorSessionRecordUncheckedUpdateInput>
    /**
     * Choose, which TutorSessionRecord to update.
     */
    where: TutorSessionRecordWhereUniqueInput
  }

  /**
   * TutorSessionRecord updateMany
   */
  export type TutorSessionRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorSessionRecords.
     */
    data: XOR<TutorSessionRecordUpdateManyMutationInput, TutorSessionRecordUncheckedUpdateManyInput>
    /**
     * Filter which TutorSessionRecords to update
     */
    where?: TutorSessionRecordWhereInput
    /**
     * Limit how many TutorSessionRecords to update.
     */
    limit?: number
  }

  /**
   * TutorSessionRecord updateManyAndReturn
   */
  export type TutorSessionRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * The data used to update TutorSessionRecords.
     */
    data: XOR<TutorSessionRecordUpdateManyMutationInput, TutorSessionRecordUncheckedUpdateManyInput>
    /**
     * Filter which TutorSessionRecords to update
     */
    where?: TutorSessionRecordWhereInput
    /**
     * Limit how many TutorSessionRecords to update.
     */
    limit?: number
  }

  /**
   * TutorSessionRecord upsert
   */
  export type TutorSessionRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorSessionRecord to update in case it exists.
     */
    where: TutorSessionRecordWhereUniqueInput
    /**
     * In case the TutorSessionRecord found by the `where` argument doesn't exist, create a new TutorSessionRecord with this data.
     */
    create: XOR<TutorSessionRecordCreateInput, TutorSessionRecordUncheckedCreateInput>
    /**
     * In case the TutorSessionRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorSessionRecordUpdateInput, TutorSessionRecordUncheckedUpdateInput>
  }

  /**
   * TutorSessionRecord delete
   */
  export type TutorSessionRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
    /**
     * Filter which TutorSessionRecord to delete.
     */
    where: TutorSessionRecordWhereUniqueInput
  }

  /**
   * TutorSessionRecord deleteMany
   */
  export type TutorSessionRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorSessionRecords to delete
     */
    where?: TutorSessionRecordWhereInput
    /**
     * Limit how many TutorSessionRecords to delete.
     */
    limit?: number
  }

  /**
   * TutorSessionRecord.turns
   */
  export type TutorSessionRecord$turnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    where?: TutorTurnRecordWhereInput
    orderBy?: TutorTurnRecordOrderByWithRelationInput | TutorTurnRecordOrderByWithRelationInput[]
    cursor?: TutorTurnRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorTurnRecordScalarFieldEnum | TutorTurnRecordScalarFieldEnum[]
  }

  /**
   * TutorSessionRecord without action
   */
  export type TutorSessionRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSessionRecord
     */
    select?: TutorSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSessionRecord
     */
    omit?: TutorSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSessionRecordInclude<ExtArgs> | null
  }


  /**
   * Model TutorTurnRecord
   */

  export type AggregateTutorTurnRecord = {
    _count: TutorTurnRecordCountAggregateOutputType | null
    _min: TutorTurnRecordMinAggregateOutputType | null
    _max: TutorTurnRecordMaxAggregateOutputType | null
  }

  export type TutorTurnRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tutorSessionId: string | null
    actor: string | null
    action: string | null
    responseType: string | null
    title: string | null
    summary: string | null
    content: string | null
    lessonId: string | null
    topicId: string | null
  }

  export type TutorTurnRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tutorSessionId: string | null
    actor: string | null
    action: string | null
    responseType: string | null
    title: string | null
    summary: string | null
    content: string | null
    lessonId: string | null
    topicId: string | null
  }

  export type TutorTurnRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    retrievalContext: number
    tutorSessionId: number
    actor: number
    action: number
    responseType: number
    title: number
    summary: number
    content: number
    lessonId: number
    topicId: number
    suggestedPrompts: number
    nextSteps: number
    references: number
    contextSnippets: number
    _all: number
  }


  export type TutorTurnRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tutorSessionId?: true
    actor?: true
    action?: true
    responseType?: true
    title?: true
    summary?: true
    content?: true
    lessonId?: true
    topicId?: true
  }

  export type TutorTurnRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tutorSessionId?: true
    actor?: true
    action?: true
    responseType?: true
    title?: true
    summary?: true
    content?: true
    lessonId?: true
    topicId?: true
  }

  export type TutorTurnRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    retrievalContext?: true
    tutorSessionId?: true
    actor?: true
    action?: true
    responseType?: true
    title?: true
    summary?: true
    content?: true
    lessonId?: true
    topicId?: true
    suggestedPrompts?: true
    nextSteps?: true
    references?: true
    contextSnippets?: true
    _all?: true
  }

  export type TutorTurnRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorTurnRecord to aggregate.
     */
    where?: TutorTurnRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorTurnRecords to fetch.
     */
    orderBy?: TutorTurnRecordOrderByWithRelationInput | TutorTurnRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorTurnRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorTurnRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorTurnRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorTurnRecords
    **/
    _count?: true | TutorTurnRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorTurnRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorTurnRecordMaxAggregateInputType
  }

  export type GetTutorTurnRecordAggregateType<T extends TutorTurnRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorTurnRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorTurnRecord[P]>
      : GetScalarType<T[P], AggregateTutorTurnRecord[P]>
  }




  export type TutorTurnRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorTurnRecordWhereInput
    orderBy?: TutorTurnRecordOrderByWithAggregationInput | TutorTurnRecordOrderByWithAggregationInput[]
    by: TutorTurnRecordScalarFieldEnum[] | TutorTurnRecordScalarFieldEnum
    having?: TutorTurnRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorTurnRecordCountAggregateInputType | true
    _min?: TutorTurnRecordMinAggregateInputType
    _max?: TutorTurnRecordMaxAggregateInputType
  }

  export type TutorTurnRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    retrievalContext: JsonValue | null
    tutorSessionId: string
    actor: string
    action: string | null
    responseType: string | null
    title: string | null
    summary: string | null
    content: string
    lessonId: string | null
    topicId: string | null
    suggestedPrompts: string[]
    nextSteps: string[]
    references: JsonValue | null
    contextSnippets: JsonValue | null
    _count: TutorTurnRecordCountAggregateOutputType | null
    _min: TutorTurnRecordMinAggregateOutputType | null
    _max: TutorTurnRecordMaxAggregateOutputType | null
  }

  type GetTutorTurnRecordGroupByPayload<T extends TutorTurnRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorTurnRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorTurnRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorTurnRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TutorTurnRecordGroupByOutputType[P]>
        }
      >
    >


  export type TutorTurnRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    retrievalContext?: boolean
    tutorSessionId?: boolean
    actor?: boolean
    action?: boolean
    responseType?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    lessonId?: boolean
    topicId?: boolean
    suggestedPrompts?: boolean
    nextSteps?: boolean
    references?: boolean
    contextSnippets?: boolean
    tutorSession?: boolean | TutorSessionRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorTurnRecord"]>

  export type TutorTurnRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    retrievalContext?: boolean
    tutorSessionId?: boolean
    actor?: boolean
    action?: boolean
    responseType?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    lessonId?: boolean
    topicId?: boolean
    suggestedPrompts?: boolean
    nextSteps?: boolean
    references?: boolean
    contextSnippets?: boolean
    tutorSession?: boolean | TutorSessionRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorTurnRecord"]>

  export type TutorTurnRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    retrievalContext?: boolean
    tutorSessionId?: boolean
    actor?: boolean
    action?: boolean
    responseType?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    lessonId?: boolean
    topicId?: boolean
    suggestedPrompts?: boolean
    nextSteps?: boolean
    references?: boolean
    contextSnippets?: boolean
    tutorSession?: boolean | TutorSessionRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorTurnRecord"]>

  export type TutorTurnRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    retrievalContext?: boolean
    tutorSessionId?: boolean
    actor?: boolean
    action?: boolean
    responseType?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    lessonId?: boolean
    topicId?: boolean
    suggestedPrompts?: boolean
    nextSteps?: boolean
    references?: boolean
    contextSnippets?: boolean
  }

  export type TutorTurnRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "retrievalContext" | "tutorSessionId" | "actor" | "action" | "responseType" | "title" | "summary" | "content" | "lessonId" | "topicId" | "suggestedPrompts" | "nextSteps" | "references" | "contextSnippets", ExtArgs["result"]["tutorTurnRecord"]>
  export type TutorTurnRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorSession?: boolean | TutorSessionRecordDefaultArgs<ExtArgs>
  }
  export type TutorTurnRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorSession?: boolean | TutorSessionRecordDefaultArgs<ExtArgs>
  }
  export type TutorTurnRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorSession?: boolean | TutorSessionRecordDefaultArgs<ExtArgs>
  }

  export type $TutorTurnRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorTurnRecord"
    objects: {
      tutorSession: Prisma.$TutorSessionRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      retrievalContext: Prisma.JsonValue | null
      tutorSessionId: string
      actor: string
      action: string | null
      responseType: string | null
      title: string | null
      summary: string | null
      content: string
      lessonId: string | null
      topicId: string | null
      suggestedPrompts: string[]
      nextSteps: string[]
      references: Prisma.JsonValue | null
      contextSnippets: Prisma.JsonValue | null
    }, ExtArgs["result"]["tutorTurnRecord"]>
    composites: {}
  }

  type TutorTurnRecordGetPayload<S extends boolean | null | undefined | TutorTurnRecordDefaultArgs> = $Result.GetResult<Prisma.$TutorTurnRecordPayload, S>

  type TutorTurnRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorTurnRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorTurnRecordCountAggregateInputType | true
    }

  export interface TutorTurnRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorTurnRecord'], meta: { name: 'TutorTurnRecord' } }
    /**
     * Find zero or one TutorTurnRecord that matches the filter.
     * @param {TutorTurnRecordFindUniqueArgs} args - Arguments to find a TutorTurnRecord
     * @example
     * // Get one TutorTurnRecord
     * const tutorTurnRecord = await prisma.tutorTurnRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorTurnRecordFindUniqueArgs>(args: SelectSubset<T, TutorTurnRecordFindUniqueArgs<ExtArgs>>): Prisma__TutorTurnRecordClient<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorTurnRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorTurnRecordFindUniqueOrThrowArgs} args - Arguments to find a TutorTurnRecord
     * @example
     * // Get one TutorTurnRecord
     * const tutorTurnRecord = await prisma.tutorTurnRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorTurnRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorTurnRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorTurnRecordClient<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorTurnRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorTurnRecordFindFirstArgs} args - Arguments to find a TutorTurnRecord
     * @example
     * // Get one TutorTurnRecord
     * const tutorTurnRecord = await prisma.tutorTurnRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorTurnRecordFindFirstArgs>(args?: SelectSubset<T, TutorTurnRecordFindFirstArgs<ExtArgs>>): Prisma__TutorTurnRecordClient<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorTurnRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorTurnRecordFindFirstOrThrowArgs} args - Arguments to find a TutorTurnRecord
     * @example
     * // Get one TutorTurnRecord
     * const tutorTurnRecord = await prisma.tutorTurnRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorTurnRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorTurnRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorTurnRecordClient<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorTurnRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorTurnRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorTurnRecords
     * const tutorTurnRecords = await prisma.tutorTurnRecord.findMany()
     * 
     * // Get first 10 TutorTurnRecords
     * const tutorTurnRecords = await prisma.tutorTurnRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorTurnRecordWithIdOnly = await prisma.tutorTurnRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorTurnRecordFindManyArgs>(args?: SelectSubset<T, TutorTurnRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorTurnRecord.
     * @param {TutorTurnRecordCreateArgs} args - Arguments to create a TutorTurnRecord.
     * @example
     * // Create one TutorTurnRecord
     * const TutorTurnRecord = await prisma.tutorTurnRecord.create({
     *   data: {
     *     // ... data to create a TutorTurnRecord
     *   }
     * })
     * 
     */
    create<T extends TutorTurnRecordCreateArgs>(args: SelectSubset<T, TutorTurnRecordCreateArgs<ExtArgs>>): Prisma__TutorTurnRecordClient<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorTurnRecords.
     * @param {TutorTurnRecordCreateManyArgs} args - Arguments to create many TutorTurnRecords.
     * @example
     * // Create many TutorTurnRecords
     * const tutorTurnRecord = await prisma.tutorTurnRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorTurnRecordCreateManyArgs>(args?: SelectSubset<T, TutorTurnRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorTurnRecords and returns the data saved in the database.
     * @param {TutorTurnRecordCreateManyAndReturnArgs} args - Arguments to create many TutorTurnRecords.
     * @example
     * // Create many TutorTurnRecords
     * const tutorTurnRecord = await prisma.tutorTurnRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorTurnRecords and only return the `id`
     * const tutorTurnRecordWithIdOnly = await prisma.tutorTurnRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorTurnRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorTurnRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorTurnRecord.
     * @param {TutorTurnRecordDeleteArgs} args - Arguments to delete one TutorTurnRecord.
     * @example
     * // Delete one TutorTurnRecord
     * const TutorTurnRecord = await prisma.tutorTurnRecord.delete({
     *   where: {
     *     // ... filter to delete one TutorTurnRecord
     *   }
     * })
     * 
     */
    delete<T extends TutorTurnRecordDeleteArgs>(args: SelectSubset<T, TutorTurnRecordDeleteArgs<ExtArgs>>): Prisma__TutorTurnRecordClient<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorTurnRecord.
     * @param {TutorTurnRecordUpdateArgs} args - Arguments to update one TutorTurnRecord.
     * @example
     * // Update one TutorTurnRecord
     * const tutorTurnRecord = await prisma.tutorTurnRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorTurnRecordUpdateArgs>(args: SelectSubset<T, TutorTurnRecordUpdateArgs<ExtArgs>>): Prisma__TutorTurnRecordClient<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorTurnRecords.
     * @param {TutorTurnRecordDeleteManyArgs} args - Arguments to filter TutorTurnRecords to delete.
     * @example
     * // Delete a few TutorTurnRecords
     * const { count } = await prisma.tutorTurnRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorTurnRecordDeleteManyArgs>(args?: SelectSubset<T, TutorTurnRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorTurnRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorTurnRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorTurnRecords
     * const tutorTurnRecord = await prisma.tutorTurnRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorTurnRecordUpdateManyArgs>(args: SelectSubset<T, TutorTurnRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorTurnRecords and returns the data updated in the database.
     * @param {TutorTurnRecordUpdateManyAndReturnArgs} args - Arguments to update many TutorTurnRecords.
     * @example
     * // Update many TutorTurnRecords
     * const tutorTurnRecord = await prisma.tutorTurnRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorTurnRecords and only return the `id`
     * const tutorTurnRecordWithIdOnly = await prisma.tutorTurnRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends TutorTurnRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorTurnRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorTurnRecord.
     * @param {TutorTurnRecordUpsertArgs} args - Arguments to update or create a TutorTurnRecord.
     * @example
     * // Update or create a TutorTurnRecord
     * const tutorTurnRecord = await prisma.tutorTurnRecord.upsert({
     *   create: {
     *     // ... data to create a TutorTurnRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorTurnRecord we want to update
     *   }
     * })
     */
    upsert<T extends TutorTurnRecordUpsertArgs>(args: SelectSubset<T, TutorTurnRecordUpsertArgs<ExtArgs>>): Prisma__TutorTurnRecordClient<$Result.GetResult<Prisma.$TutorTurnRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorTurnRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorTurnRecordCountArgs} args - Arguments to filter TutorTurnRecords to count.
     * @example
     * // Count the number of TutorTurnRecords
     * const count = await prisma.tutorTurnRecord.count({
     *   where: {
     *     // ... the filter for the TutorTurnRecords we want to count
     *   }
     * })
    **/
    count<T extends TutorTurnRecordCountArgs>(
      args?: Subset<T, TutorTurnRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorTurnRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorTurnRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorTurnRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorTurnRecordAggregateArgs>(args: Subset<T, TutorTurnRecordAggregateArgs>): Prisma.PrismaPromise<GetTutorTurnRecordAggregateType<T>>

    /**
     * Group by TutorTurnRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorTurnRecordGroupByArgs} args - Group by arguments.
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
      T extends TutorTurnRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorTurnRecordGroupByArgs['orderBy'] }
        : { orderBy?: TutorTurnRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TutorTurnRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorTurnRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorTurnRecord model
   */
  readonly fields: TutorTurnRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorTurnRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorTurnRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutorSession<T extends TutorSessionRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorSessionRecordDefaultArgs<ExtArgs>>): Prisma__TutorSessionRecordClient<$Result.GetResult<Prisma.$TutorSessionRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TutorTurnRecord model
   */
  interface TutorTurnRecordFieldRefs {
    readonly id: FieldRef<"TutorTurnRecord", 'String'>
    readonly createdAt: FieldRef<"TutorTurnRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"TutorTurnRecord", 'DateTime'>
    readonly metadata: FieldRef<"TutorTurnRecord", 'Json'>
    readonly retrievalContext: FieldRef<"TutorTurnRecord", 'Json'>
    readonly tutorSessionId: FieldRef<"TutorTurnRecord", 'String'>
    readonly actor: FieldRef<"TutorTurnRecord", 'String'>
    readonly action: FieldRef<"TutorTurnRecord", 'String'>
    readonly responseType: FieldRef<"TutorTurnRecord", 'String'>
    readonly title: FieldRef<"TutorTurnRecord", 'String'>
    readonly summary: FieldRef<"TutorTurnRecord", 'String'>
    readonly content: FieldRef<"TutorTurnRecord", 'String'>
    readonly lessonId: FieldRef<"TutorTurnRecord", 'String'>
    readonly topicId: FieldRef<"TutorTurnRecord", 'String'>
    readonly suggestedPrompts: FieldRef<"TutorTurnRecord", 'String[]'>
    readonly nextSteps: FieldRef<"TutorTurnRecord", 'String[]'>
    readonly references: FieldRef<"TutorTurnRecord", 'Json'>
    readonly contextSnippets: FieldRef<"TutorTurnRecord", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * TutorTurnRecord findUnique
   */
  export type TutorTurnRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorTurnRecord to fetch.
     */
    where: TutorTurnRecordWhereUniqueInput
  }

  /**
   * TutorTurnRecord findUniqueOrThrow
   */
  export type TutorTurnRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorTurnRecord to fetch.
     */
    where: TutorTurnRecordWhereUniqueInput
  }

  /**
   * TutorTurnRecord findFirst
   */
  export type TutorTurnRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorTurnRecord to fetch.
     */
    where?: TutorTurnRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorTurnRecords to fetch.
     */
    orderBy?: TutorTurnRecordOrderByWithRelationInput | TutorTurnRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorTurnRecords.
     */
    cursor?: TutorTurnRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorTurnRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorTurnRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorTurnRecords.
     */
    distinct?: TutorTurnRecordScalarFieldEnum | TutorTurnRecordScalarFieldEnum[]
  }

  /**
   * TutorTurnRecord findFirstOrThrow
   */
  export type TutorTurnRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorTurnRecord to fetch.
     */
    where?: TutorTurnRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorTurnRecords to fetch.
     */
    orderBy?: TutorTurnRecordOrderByWithRelationInput | TutorTurnRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorTurnRecords.
     */
    cursor?: TutorTurnRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorTurnRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorTurnRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorTurnRecords.
     */
    distinct?: TutorTurnRecordScalarFieldEnum | TutorTurnRecordScalarFieldEnum[]
  }

  /**
   * TutorTurnRecord findMany
   */
  export type TutorTurnRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    /**
     * Filter, which TutorTurnRecords to fetch.
     */
    where?: TutorTurnRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorTurnRecords to fetch.
     */
    orderBy?: TutorTurnRecordOrderByWithRelationInput | TutorTurnRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorTurnRecords.
     */
    cursor?: TutorTurnRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorTurnRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorTurnRecords.
     */
    skip?: number
    distinct?: TutorTurnRecordScalarFieldEnum | TutorTurnRecordScalarFieldEnum[]
  }

  /**
   * TutorTurnRecord create
   */
  export type TutorTurnRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorTurnRecord.
     */
    data: XOR<TutorTurnRecordCreateInput, TutorTurnRecordUncheckedCreateInput>
  }

  /**
   * TutorTurnRecord createMany
   */
  export type TutorTurnRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorTurnRecords.
     */
    data: TutorTurnRecordCreateManyInput | TutorTurnRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorTurnRecord createManyAndReturn
   */
  export type TutorTurnRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TutorTurnRecords.
     */
    data: TutorTurnRecordCreateManyInput | TutorTurnRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorTurnRecord update
   */
  export type TutorTurnRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorTurnRecord.
     */
    data: XOR<TutorTurnRecordUpdateInput, TutorTurnRecordUncheckedUpdateInput>
    /**
     * Choose, which TutorTurnRecord to update.
     */
    where: TutorTurnRecordWhereUniqueInput
  }

  /**
   * TutorTurnRecord updateMany
   */
  export type TutorTurnRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorTurnRecords.
     */
    data: XOR<TutorTurnRecordUpdateManyMutationInput, TutorTurnRecordUncheckedUpdateManyInput>
    /**
     * Filter which TutorTurnRecords to update
     */
    where?: TutorTurnRecordWhereInput
    /**
     * Limit how many TutorTurnRecords to update.
     */
    limit?: number
  }

  /**
   * TutorTurnRecord updateManyAndReturn
   */
  export type TutorTurnRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * The data used to update TutorTurnRecords.
     */
    data: XOR<TutorTurnRecordUpdateManyMutationInput, TutorTurnRecordUncheckedUpdateManyInput>
    /**
     * Filter which TutorTurnRecords to update
     */
    where?: TutorTurnRecordWhereInput
    /**
     * Limit how many TutorTurnRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorTurnRecord upsert
   */
  export type TutorTurnRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorTurnRecord to update in case it exists.
     */
    where: TutorTurnRecordWhereUniqueInput
    /**
     * In case the TutorTurnRecord found by the `where` argument doesn't exist, create a new TutorTurnRecord with this data.
     */
    create: XOR<TutorTurnRecordCreateInput, TutorTurnRecordUncheckedCreateInput>
    /**
     * In case the TutorTurnRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorTurnRecordUpdateInput, TutorTurnRecordUncheckedUpdateInput>
  }

  /**
   * TutorTurnRecord delete
   */
  export type TutorTurnRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
    /**
     * Filter which TutorTurnRecord to delete.
     */
    where: TutorTurnRecordWhereUniqueInput
  }

  /**
   * TutorTurnRecord deleteMany
   */
  export type TutorTurnRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorTurnRecords to delete
     */
    where?: TutorTurnRecordWhereInput
    /**
     * Limit how many TutorTurnRecords to delete.
     */
    limit?: number
  }

  /**
   * TutorTurnRecord without action
   */
  export type TutorTurnRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorTurnRecord
     */
    select?: TutorTurnRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorTurnRecord
     */
    omit?: TutorTurnRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorTurnRecordInclude<ExtArgs> | null
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


  export const TutorSessionRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    learnerUserId: 'learnerUserId',
    status: 'status',
    tutorMode: 'tutorMode',
    startedAt: 'startedAt',
    lastInteractionAt: 'lastInteractionAt',
    learningPathId: 'learningPathId',
    lessonId: 'lessonId',
    topicIds: 'topicIds',
    goalSummary: 'goalSummary',
    turnCount: 'turnCount'
  };

  export type TutorSessionRecordScalarFieldEnum = (typeof TutorSessionRecordScalarFieldEnum)[keyof typeof TutorSessionRecordScalarFieldEnum]


  export const TutorTurnRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    retrievalContext: 'retrievalContext',
    tutorSessionId: 'tutorSessionId',
    actor: 'actor',
    action: 'action',
    responseType: 'responseType',
    title: 'title',
    summary: 'summary',
    content: 'content',
    lessonId: 'lessonId',
    topicId: 'topicId',
    suggestedPrompts: 'suggestedPrompts',
    nextSteps: 'nextSteps',
    references: 'references',
    contextSnippets: 'contextSnippets'
  };

  export type TutorTurnRecordScalarFieldEnum = (typeof TutorTurnRecordScalarFieldEnum)[keyof typeof TutorTurnRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  export type TutorSessionRecordWhereInput = {
    AND?: TutorSessionRecordWhereInput | TutorSessionRecordWhereInput[]
    OR?: TutorSessionRecordWhereInput[]
    NOT?: TutorSessionRecordWhereInput | TutorSessionRecordWhereInput[]
    id?: StringFilter<"TutorSessionRecord"> | string
    createdAt?: DateTimeFilter<"TutorSessionRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TutorSessionRecord"> | Date | string
    metadata?: JsonNullableFilter<"TutorSessionRecord">
    learnerUserId?: StringFilter<"TutorSessionRecord"> | string
    status?: StringFilter<"TutorSessionRecord"> | string
    tutorMode?: StringFilter<"TutorSessionRecord"> | string
    startedAt?: DateTimeFilter<"TutorSessionRecord"> | Date | string
    lastInteractionAt?: DateTimeFilter<"TutorSessionRecord"> | Date | string
    learningPathId?: StringNullableFilter<"TutorSessionRecord"> | string | null
    lessonId?: StringNullableFilter<"TutorSessionRecord"> | string | null
    topicIds?: StringNullableListFilter<"TutorSessionRecord">
    goalSummary?: StringNullableFilter<"TutorSessionRecord"> | string | null
    turnCount?: IntFilter<"TutorSessionRecord"> | number
    turns?: TutorTurnRecordListRelationFilter
  }

  export type TutorSessionRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    tutorMode?: SortOrder
    startedAt?: SortOrder
    lastInteractionAt?: SortOrder
    learningPathId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    topicIds?: SortOrder
    goalSummary?: SortOrderInput | SortOrder
    turnCount?: SortOrder
    turns?: TutorTurnRecordOrderByRelationAggregateInput
  }

  export type TutorSessionRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TutorSessionRecordWhereInput | TutorSessionRecordWhereInput[]
    OR?: TutorSessionRecordWhereInput[]
    NOT?: TutorSessionRecordWhereInput | TutorSessionRecordWhereInput[]
    createdAt?: DateTimeFilter<"TutorSessionRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TutorSessionRecord"> | Date | string
    metadata?: JsonNullableFilter<"TutorSessionRecord">
    learnerUserId?: StringFilter<"TutorSessionRecord"> | string
    status?: StringFilter<"TutorSessionRecord"> | string
    tutorMode?: StringFilter<"TutorSessionRecord"> | string
    startedAt?: DateTimeFilter<"TutorSessionRecord"> | Date | string
    lastInteractionAt?: DateTimeFilter<"TutorSessionRecord"> | Date | string
    learningPathId?: StringNullableFilter<"TutorSessionRecord"> | string | null
    lessonId?: StringNullableFilter<"TutorSessionRecord"> | string | null
    topicIds?: StringNullableListFilter<"TutorSessionRecord">
    goalSummary?: StringNullableFilter<"TutorSessionRecord"> | string | null
    turnCount?: IntFilter<"TutorSessionRecord"> | number
    turns?: TutorTurnRecordListRelationFilter
  }, "id">

  export type TutorSessionRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    tutorMode?: SortOrder
    startedAt?: SortOrder
    lastInteractionAt?: SortOrder
    learningPathId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    topicIds?: SortOrder
    goalSummary?: SortOrderInput | SortOrder
    turnCount?: SortOrder
    _count?: TutorSessionRecordCountOrderByAggregateInput
    _avg?: TutorSessionRecordAvgOrderByAggregateInput
    _max?: TutorSessionRecordMaxOrderByAggregateInput
    _min?: TutorSessionRecordMinOrderByAggregateInput
    _sum?: TutorSessionRecordSumOrderByAggregateInput
  }

  export type TutorSessionRecordScalarWhereWithAggregatesInput = {
    AND?: TutorSessionRecordScalarWhereWithAggregatesInput | TutorSessionRecordScalarWhereWithAggregatesInput[]
    OR?: TutorSessionRecordScalarWhereWithAggregatesInput[]
    NOT?: TutorSessionRecordScalarWhereWithAggregatesInput | TutorSessionRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TutorSessionRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TutorSessionRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TutorSessionRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"TutorSessionRecord">
    learnerUserId?: StringWithAggregatesFilter<"TutorSessionRecord"> | string
    status?: StringWithAggregatesFilter<"TutorSessionRecord"> | string
    tutorMode?: StringWithAggregatesFilter<"TutorSessionRecord"> | string
    startedAt?: DateTimeWithAggregatesFilter<"TutorSessionRecord"> | Date | string
    lastInteractionAt?: DateTimeWithAggregatesFilter<"TutorSessionRecord"> | Date | string
    learningPathId?: StringNullableWithAggregatesFilter<"TutorSessionRecord"> | string | null
    lessonId?: StringNullableWithAggregatesFilter<"TutorSessionRecord"> | string | null
    topicIds?: StringNullableListFilter<"TutorSessionRecord">
    goalSummary?: StringNullableWithAggregatesFilter<"TutorSessionRecord"> | string | null
    turnCount?: IntWithAggregatesFilter<"TutorSessionRecord"> | number
  }

  export type TutorTurnRecordWhereInput = {
    AND?: TutorTurnRecordWhereInput | TutorTurnRecordWhereInput[]
    OR?: TutorTurnRecordWhereInput[]
    NOT?: TutorTurnRecordWhereInput | TutorTurnRecordWhereInput[]
    id?: StringFilter<"TutorTurnRecord"> | string
    createdAt?: DateTimeFilter<"TutorTurnRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TutorTurnRecord"> | Date | string
    metadata?: JsonNullableFilter<"TutorTurnRecord">
    retrievalContext?: JsonNullableFilter<"TutorTurnRecord">
    tutorSessionId?: StringFilter<"TutorTurnRecord"> | string
    actor?: StringFilter<"TutorTurnRecord"> | string
    action?: StringNullableFilter<"TutorTurnRecord"> | string | null
    responseType?: StringNullableFilter<"TutorTurnRecord"> | string | null
    title?: StringNullableFilter<"TutorTurnRecord"> | string | null
    summary?: StringNullableFilter<"TutorTurnRecord"> | string | null
    content?: StringFilter<"TutorTurnRecord"> | string
    lessonId?: StringNullableFilter<"TutorTurnRecord"> | string | null
    topicId?: StringNullableFilter<"TutorTurnRecord"> | string | null
    suggestedPrompts?: StringNullableListFilter<"TutorTurnRecord">
    nextSteps?: StringNullableListFilter<"TutorTurnRecord">
    references?: JsonNullableFilter<"TutorTurnRecord">
    contextSnippets?: JsonNullableFilter<"TutorTurnRecord">
    tutorSession?: XOR<TutorSessionRecordScalarRelationFilter, TutorSessionRecordWhereInput>
  }

  export type TutorTurnRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    retrievalContext?: SortOrderInput | SortOrder
    tutorSessionId?: SortOrder
    actor?: SortOrder
    action?: SortOrderInput | SortOrder
    responseType?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    content?: SortOrder
    lessonId?: SortOrderInput | SortOrder
    topicId?: SortOrderInput | SortOrder
    suggestedPrompts?: SortOrder
    nextSteps?: SortOrder
    references?: SortOrderInput | SortOrder
    contextSnippets?: SortOrderInput | SortOrder
    tutorSession?: TutorSessionRecordOrderByWithRelationInput
  }

  export type TutorTurnRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TutorTurnRecordWhereInput | TutorTurnRecordWhereInput[]
    OR?: TutorTurnRecordWhereInput[]
    NOT?: TutorTurnRecordWhereInput | TutorTurnRecordWhereInput[]
    createdAt?: DateTimeFilter<"TutorTurnRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TutorTurnRecord"> | Date | string
    metadata?: JsonNullableFilter<"TutorTurnRecord">
    retrievalContext?: JsonNullableFilter<"TutorTurnRecord">
    tutorSessionId?: StringFilter<"TutorTurnRecord"> | string
    actor?: StringFilter<"TutorTurnRecord"> | string
    action?: StringNullableFilter<"TutorTurnRecord"> | string | null
    responseType?: StringNullableFilter<"TutorTurnRecord"> | string | null
    title?: StringNullableFilter<"TutorTurnRecord"> | string | null
    summary?: StringNullableFilter<"TutorTurnRecord"> | string | null
    content?: StringFilter<"TutorTurnRecord"> | string
    lessonId?: StringNullableFilter<"TutorTurnRecord"> | string | null
    topicId?: StringNullableFilter<"TutorTurnRecord"> | string | null
    suggestedPrompts?: StringNullableListFilter<"TutorTurnRecord">
    nextSteps?: StringNullableListFilter<"TutorTurnRecord">
    references?: JsonNullableFilter<"TutorTurnRecord">
    contextSnippets?: JsonNullableFilter<"TutorTurnRecord">
    tutorSession?: XOR<TutorSessionRecordScalarRelationFilter, TutorSessionRecordWhereInput>
  }, "id">

  export type TutorTurnRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    retrievalContext?: SortOrderInput | SortOrder
    tutorSessionId?: SortOrder
    actor?: SortOrder
    action?: SortOrderInput | SortOrder
    responseType?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    content?: SortOrder
    lessonId?: SortOrderInput | SortOrder
    topicId?: SortOrderInput | SortOrder
    suggestedPrompts?: SortOrder
    nextSteps?: SortOrder
    references?: SortOrderInput | SortOrder
    contextSnippets?: SortOrderInput | SortOrder
    _count?: TutorTurnRecordCountOrderByAggregateInput
    _max?: TutorTurnRecordMaxOrderByAggregateInput
    _min?: TutorTurnRecordMinOrderByAggregateInput
  }

  export type TutorTurnRecordScalarWhereWithAggregatesInput = {
    AND?: TutorTurnRecordScalarWhereWithAggregatesInput | TutorTurnRecordScalarWhereWithAggregatesInput[]
    OR?: TutorTurnRecordScalarWhereWithAggregatesInput[]
    NOT?: TutorTurnRecordScalarWhereWithAggregatesInput | TutorTurnRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TutorTurnRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TutorTurnRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TutorTurnRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"TutorTurnRecord">
    retrievalContext?: JsonNullableWithAggregatesFilter<"TutorTurnRecord">
    tutorSessionId?: StringWithAggregatesFilter<"TutorTurnRecord"> | string
    actor?: StringWithAggregatesFilter<"TutorTurnRecord"> | string
    action?: StringNullableWithAggregatesFilter<"TutorTurnRecord"> | string | null
    responseType?: StringNullableWithAggregatesFilter<"TutorTurnRecord"> | string | null
    title?: StringNullableWithAggregatesFilter<"TutorTurnRecord"> | string | null
    summary?: StringNullableWithAggregatesFilter<"TutorTurnRecord"> | string | null
    content?: StringWithAggregatesFilter<"TutorTurnRecord"> | string
    lessonId?: StringNullableWithAggregatesFilter<"TutorTurnRecord"> | string | null
    topicId?: StringNullableWithAggregatesFilter<"TutorTurnRecord"> | string | null
    suggestedPrompts?: StringNullableListFilter<"TutorTurnRecord">
    nextSteps?: StringNullableListFilter<"TutorTurnRecord">
    references?: JsonNullableWithAggregatesFilter<"TutorTurnRecord">
    contextSnippets?: JsonNullableWithAggregatesFilter<"TutorTurnRecord">
  }

  export type TutorSessionRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    tutorMode: string
    startedAt: Date | string
    lastInteractionAt: Date | string
    learningPathId?: string | null
    lessonId?: string | null
    topicIds?: TutorSessionRecordCreatetopicIdsInput | string[]
    goalSummary?: string | null
    turnCount?: number
    turns?: TutorTurnRecordCreateNestedManyWithoutTutorSessionInput
  }

  export type TutorSessionRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    tutorMode: string
    startedAt: Date | string
    lastInteractionAt: Date | string
    learningPathId?: string | null
    lessonId?: string | null
    topicIds?: TutorSessionRecordCreatetopicIdsInput | string[]
    goalSummary?: string | null
    turnCount?: number
    turns?: TutorTurnRecordUncheckedCreateNestedManyWithoutTutorSessionInput
  }

  export type TutorSessionRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tutorMode?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteractionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicIds?: TutorSessionRecordUpdatetopicIdsInput | string[]
    goalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    turnCount?: IntFieldUpdateOperationsInput | number
    turns?: TutorTurnRecordUpdateManyWithoutTutorSessionNestedInput
  }

  export type TutorSessionRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tutorMode?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteractionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicIds?: TutorSessionRecordUpdatetopicIdsInput | string[]
    goalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    turnCount?: IntFieldUpdateOperationsInput | number
    turns?: TutorTurnRecordUncheckedUpdateManyWithoutTutorSessionNestedInput
  }

  export type TutorSessionRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    tutorMode: string
    startedAt: Date | string
    lastInteractionAt: Date | string
    learningPathId?: string | null
    lessonId?: string | null
    topicIds?: TutorSessionRecordCreatetopicIdsInput | string[]
    goalSummary?: string | null
    turnCount?: number
  }

  export type TutorSessionRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tutorMode?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteractionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicIds?: TutorSessionRecordUpdatetopicIdsInput | string[]
    goalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    turnCount?: IntFieldUpdateOperationsInput | number
  }

  export type TutorSessionRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tutorMode?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteractionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicIds?: TutorSessionRecordUpdatetopicIdsInput | string[]
    goalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    turnCount?: IntFieldUpdateOperationsInput | number
  }

  export type TutorTurnRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    actor: string
    action?: string | null
    responseType?: string | null
    title?: string | null
    summary?: string | null
    content: string
    lessonId?: string | null
    topicId?: string | null
    suggestedPrompts?: TutorTurnRecordCreatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordCreatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
    tutorSession: TutorSessionRecordCreateNestedOneWithoutTurnsInput
  }

  export type TutorTurnRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    tutorSessionId: string
    actor: string
    action?: string | null
    responseType?: string | null
    title?: string | null
    summary?: string | null
    content: string
    lessonId?: string | null
    topicId?: string | null
    suggestedPrompts?: TutorTurnRecordCreatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordCreatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TutorTurnRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    actor?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedPrompts?: TutorTurnRecordUpdatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordUpdatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
    tutorSession?: TutorSessionRecordUpdateOneRequiredWithoutTurnsNestedInput
  }

  export type TutorTurnRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    tutorSessionId?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedPrompts?: TutorTurnRecordUpdatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordUpdatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TutorTurnRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    tutorSessionId: string
    actor: string
    action?: string | null
    responseType?: string | null
    title?: string | null
    summary?: string | null
    content: string
    lessonId?: string | null
    topicId?: string | null
    suggestedPrompts?: TutorTurnRecordCreatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordCreatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TutorTurnRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    actor?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedPrompts?: TutorTurnRecordUpdatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordUpdatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TutorTurnRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    tutorSessionId?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedPrompts?: TutorTurnRecordUpdatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordUpdatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type TutorTurnRecordListRelationFilter = {
    every?: TutorTurnRecordWhereInput
    some?: TutorTurnRecordWhereInput
    none?: TutorTurnRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TutorTurnRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorSessionRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    tutorMode?: SortOrder
    startedAt?: SortOrder
    lastInteractionAt?: SortOrder
    learningPathId?: SortOrder
    lessonId?: SortOrder
    topicIds?: SortOrder
    goalSummary?: SortOrder
    turnCount?: SortOrder
  }

  export type TutorSessionRecordAvgOrderByAggregateInput = {
    turnCount?: SortOrder
  }

  export type TutorSessionRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    tutorMode?: SortOrder
    startedAt?: SortOrder
    lastInteractionAt?: SortOrder
    learningPathId?: SortOrder
    lessonId?: SortOrder
    goalSummary?: SortOrder
    turnCount?: SortOrder
  }

  export type TutorSessionRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    tutorMode?: SortOrder
    startedAt?: SortOrder
    lastInteractionAt?: SortOrder
    learningPathId?: SortOrder
    lessonId?: SortOrder
    goalSummary?: SortOrder
    turnCount?: SortOrder
  }

  export type TutorSessionRecordSumOrderByAggregateInput = {
    turnCount?: SortOrder
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

  export type TutorSessionRecordScalarRelationFilter = {
    is?: TutorSessionRecordWhereInput
    isNot?: TutorSessionRecordWhereInput
  }

  export type TutorTurnRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    retrievalContext?: SortOrder
    tutorSessionId?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    responseType?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    lessonId?: SortOrder
    topicId?: SortOrder
    suggestedPrompts?: SortOrder
    nextSteps?: SortOrder
    references?: SortOrder
    contextSnippets?: SortOrder
  }

  export type TutorTurnRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tutorSessionId?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    responseType?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    lessonId?: SortOrder
    topicId?: SortOrder
  }

  export type TutorTurnRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tutorSessionId?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    responseType?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    lessonId?: SortOrder
    topicId?: SortOrder
  }

  export type TutorSessionRecordCreatetopicIdsInput = {
    set: string[]
  }

  export type TutorTurnRecordCreateNestedManyWithoutTutorSessionInput = {
    create?: XOR<TutorTurnRecordCreateWithoutTutorSessionInput, TutorTurnRecordUncheckedCreateWithoutTutorSessionInput> | TutorTurnRecordCreateWithoutTutorSessionInput[] | TutorTurnRecordUncheckedCreateWithoutTutorSessionInput[]
    connectOrCreate?: TutorTurnRecordCreateOrConnectWithoutTutorSessionInput | TutorTurnRecordCreateOrConnectWithoutTutorSessionInput[]
    createMany?: TutorTurnRecordCreateManyTutorSessionInputEnvelope
    connect?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
  }

  export type TutorTurnRecordUncheckedCreateNestedManyWithoutTutorSessionInput = {
    create?: XOR<TutorTurnRecordCreateWithoutTutorSessionInput, TutorTurnRecordUncheckedCreateWithoutTutorSessionInput> | TutorTurnRecordCreateWithoutTutorSessionInput[] | TutorTurnRecordUncheckedCreateWithoutTutorSessionInput[]
    connectOrCreate?: TutorTurnRecordCreateOrConnectWithoutTutorSessionInput | TutorTurnRecordCreateOrConnectWithoutTutorSessionInput[]
    createMany?: TutorTurnRecordCreateManyTutorSessionInputEnvelope
    connect?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TutorSessionRecordUpdatetopicIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TutorTurnRecordUpdateManyWithoutTutorSessionNestedInput = {
    create?: XOR<TutorTurnRecordCreateWithoutTutorSessionInput, TutorTurnRecordUncheckedCreateWithoutTutorSessionInput> | TutorTurnRecordCreateWithoutTutorSessionInput[] | TutorTurnRecordUncheckedCreateWithoutTutorSessionInput[]
    connectOrCreate?: TutorTurnRecordCreateOrConnectWithoutTutorSessionInput | TutorTurnRecordCreateOrConnectWithoutTutorSessionInput[]
    upsert?: TutorTurnRecordUpsertWithWhereUniqueWithoutTutorSessionInput | TutorTurnRecordUpsertWithWhereUniqueWithoutTutorSessionInput[]
    createMany?: TutorTurnRecordCreateManyTutorSessionInputEnvelope
    set?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
    disconnect?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
    delete?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
    connect?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
    update?: TutorTurnRecordUpdateWithWhereUniqueWithoutTutorSessionInput | TutorTurnRecordUpdateWithWhereUniqueWithoutTutorSessionInput[]
    updateMany?: TutorTurnRecordUpdateManyWithWhereWithoutTutorSessionInput | TutorTurnRecordUpdateManyWithWhereWithoutTutorSessionInput[]
    deleteMany?: TutorTurnRecordScalarWhereInput | TutorTurnRecordScalarWhereInput[]
  }

  export type TutorTurnRecordUncheckedUpdateManyWithoutTutorSessionNestedInput = {
    create?: XOR<TutorTurnRecordCreateWithoutTutorSessionInput, TutorTurnRecordUncheckedCreateWithoutTutorSessionInput> | TutorTurnRecordCreateWithoutTutorSessionInput[] | TutorTurnRecordUncheckedCreateWithoutTutorSessionInput[]
    connectOrCreate?: TutorTurnRecordCreateOrConnectWithoutTutorSessionInput | TutorTurnRecordCreateOrConnectWithoutTutorSessionInput[]
    upsert?: TutorTurnRecordUpsertWithWhereUniqueWithoutTutorSessionInput | TutorTurnRecordUpsertWithWhereUniqueWithoutTutorSessionInput[]
    createMany?: TutorTurnRecordCreateManyTutorSessionInputEnvelope
    set?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
    disconnect?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
    delete?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
    connect?: TutorTurnRecordWhereUniqueInput | TutorTurnRecordWhereUniqueInput[]
    update?: TutorTurnRecordUpdateWithWhereUniqueWithoutTutorSessionInput | TutorTurnRecordUpdateWithWhereUniqueWithoutTutorSessionInput[]
    updateMany?: TutorTurnRecordUpdateManyWithWhereWithoutTutorSessionInput | TutorTurnRecordUpdateManyWithWhereWithoutTutorSessionInput[]
    deleteMany?: TutorTurnRecordScalarWhereInput | TutorTurnRecordScalarWhereInput[]
  }

  export type TutorTurnRecordCreatesuggestedPromptsInput = {
    set: string[]
  }

  export type TutorTurnRecordCreatenextStepsInput = {
    set: string[]
  }

  export type TutorSessionRecordCreateNestedOneWithoutTurnsInput = {
    create?: XOR<TutorSessionRecordCreateWithoutTurnsInput, TutorSessionRecordUncheckedCreateWithoutTurnsInput>
    connectOrCreate?: TutorSessionRecordCreateOrConnectWithoutTurnsInput
    connect?: TutorSessionRecordWhereUniqueInput
  }

  export type TutorTurnRecordUpdatesuggestedPromptsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TutorTurnRecordUpdatenextStepsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TutorSessionRecordUpdateOneRequiredWithoutTurnsNestedInput = {
    create?: XOR<TutorSessionRecordCreateWithoutTurnsInput, TutorSessionRecordUncheckedCreateWithoutTurnsInput>
    connectOrCreate?: TutorSessionRecordCreateOrConnectWithoutTurnsInput
    upsert?: TutorSessionRecordUpsertWithoutTurnsInput
    connect?: TutorSessionRecordWhereUniqueInput
    update?: XOR<XOR<TutorSessionRecordUpdateToOneWithWhereWithoutTurnsInput, TutorSessionRecordUpdateWithoutTurnsInput>, TutorSessionRecordUncheckedUpdateWithoutTurnsInput>
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

  export type TutorTurnRecordCreateWithoutTutorSessionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    actor: string
    action?: string | null
    responseType?: string | null
    title?: string | null
    summary?: string | null
    content: string
    lessonId?: string | null
    topicId?: string | null
    suggestedPrompts?: TutorTurnRecordCreatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordCreatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TutorTurnRecordUncheckedCreateWithoutTutorSessionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    actor: string
    action?: string | null
    responseType?: string | null
    title?: string | null
    summary?: string | null
    content: string
    lessonId?: string | null
    topicId?: string | null
    suggestedPrompts?: TutorTurnRecordCreatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordCreatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TutorTurnRecordCreateOrConnectWithoutTutorSessionInput = {
    where: TutorTurnRecordWhereUniqueInput
    create: XOR<TutorTurnRecordCreateWithoutTutorSessionInput, TutorTurnRecordUncheckedCreateWithoutTutorSessionInput>
  }

  export type TutorTurnRecordCreateManyTutorSessionInputEnvelope = {
    data: TutorTurnRecordCreateManyTutorSessionInput | TutorTurnRecordCreateManyTutorSessionInput[]
    skipDuplicates?: boolean
  }

  export type TutorTurnRecordUpsertWithWhereUniqueWithoutTutorSessionInput = {
    where: TutorTurnRecordWhereUniqueInput
    update: XOR<TutorTurnRecordUpdateWithoutTutorSessionInput, TutorTurnRecordUncheckedUpdateWithoutTutorSessionInput>
    create: XOR<TutorTurnRecordCreateWithoutTutorSessionInput, TutorTurnRecordUncheckedCreateWithoutTutorSessionInput>
  }

  export type TutorTurnRecordUpdateWithWhereUniqueWithoutTutorSessionInput = {
    where: TutorTurnRecordWhereUniqueInput
    data: XOR<TutorTurnRecordUpdateWithoutTutorSessionInput, TutorTurnRecordUncheckedUpdateWithoutTutorSessionInput>
  }

  export type TutorTurnRecordUpdateManyWithWhereWithoutTutorSessionInput = {
    where: TutorTurnRecordScalarWhereInput
    data: XOR<TutorTurnRecordUpdateManyMutationInput, TutorTurnRecordUncheckedUpdateManyWithoutTutorSessionInput>
  }

  export type TutorTurnRecordScalarWhereInput = {
    AND?: TutorTurnRecordScalarWhereInput | TutorTurnRecordScalarWhereInput[]
    OR?: TutorTurnRecordScalarWhereInput[]
    NOT?: TutorTurnRecordScalarWhereInput | TutorTurnRecordScalarWhereInput[]
    id?: StringFilter<"TutorTurnRecord"> | string
    createdAt?: DateTimeFilter<"TutorTurnRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TutorTurnRecord"> | Date | string
    metadata?: JsonNullableFilter<"TutorTurnRecord">
    retrievalContext?: JsonNullableFilter<"TutorTurnRecord">
    tutorSessionId?: StringFilter<"TutorTurnRecord"> | string
    actor?: StringFilter<"TutorTurnRecord"> | string
    action?: StringNullableFilter<"TutorTurnRecord"> | string | null
    responseType?: StringNullableFilter<"TutorTurnRecord"> | string | null
    title?: StringNullableFilter<"TutorTurnRecord"> | string | null
    summary?: StringNullableFilter<"TutorTurnRecord"> | string | null
    content?: StringFilter<"TutorTurnRecord"> | string
    lessonId?: StringNullableFilter<"TutorTurnRecord"> | string | null
    topicId?: StringNullableFilter<"TutorTurnRecord"> | string | null
    suggestedPrompts?: StringNullableListFilter<"TutorTurnRecord">
    nextSteps?: StringNullableListFilter<"TutorTurnRecord">
    references?: JsonNullableFilter<"TutorTurnRecord">
    contextSnippets?: JsonNullableFilter<"TutorTurnRecord">
  }

  export type TutorSessionRecordCreateWithoutTurnsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    tutorMode: string
    startedAt: Date | string
    lastInteractionAt: Date | string
    learningPathId?: string | null
    lessonId?: string | null
    topicIds?: TutorSessionRecordCreatetopicIdsInput | string[]
    goalSummary?: string | null
    turnCount?: number
  }

  export type TutorSessionRecordUncheckedCreateWithoutTurnsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    tutorMode: string
    startedAt: Date | string
    lastInteractionAt: Date | string
    learningPathId?: string | null
    lessonId?: string | null
    topicIds?: TutorSessionRecordCreatetopicIdsInput | string[]
    goalSummary?: string | null
    turnCount?: number
  }

  export type TutorSessionRecordCreateOrConnectWithoutTurnsInput = {
    where: TutorSessionRecordWhereUniqueInput
    create: XOR<TutorSessionRecordCreateWithoutTurnsInput, TutorSessionRecordUncheckedCreateWithoutTurnsInput>
  }

  export type TutorSessionRecordUpsertWithoutTurnsInput = {
    update: XOR<TutorSessionRecordUpdateWithoutTurnsInput, TutorSessionRecordUncheckedUpdateWithoutTurnsInput>
    create: XOR<TutorSessionRecordCreateWithoutTurnsInput, TutorSessionRecordUncheckedCreateWithoutTurnsInput>
    where?: TutorSessionRecordWhereInput
  }

  export type TutorSessionRecordUpdateToOneWithWhereWithoutTurnsInput = {
    where?: TutorSessionRecordWhereInput
    data: XOR<TutorSessionRecordUpdateWithoutTurnsInput, TutorSessionRecordUncheckedUpdateWithoutTurnsInput>
  }

  export type TutorSessionRecordUpdateWithoutTurnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tutorMode?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteractionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicIds?: TutorSessionRecordUpdatetopicIdsInput | string[]
    goalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    turnCount?: IntFieldUpdateOperationsInput | number
  }

  export type TutorSessionRecordUncheckedUpdateWithoutTurnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    tutorMode?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastInteractionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicIds?: TutorSessionRecordUpdatetopicIdsInput | string[]
    goalSummary?: NullableStringFieldUpdateOperationsInput | string | null
    turnCount?: IntFieldUpdateOperationsInput | number
  }

  export type TutorTurnRecordCreateManyTutorSessionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    actor: string
    action?: string | null
    responseType?: string | null
    title?: string | null
    summary?: string | null
    content: string
    lessonId?: string | null
    topicId?: string | null
    suggestedPrompts?: TutorTurnRecordCreatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordCreatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TutorTurnRecordUpdateWithoutTutorSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    actor?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedPrompts?: TutorTurnRecordUpdatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordUpdatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TutorTurnRecordUncheckedUpdateWithoutTutorSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    actor?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedPrompts?: TutorTurnRecordUpdatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordUpdatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TutorTurnRecordUncheckedUpdateManyWithoutTutorSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    retrievalContext?: NullableJsonNullValueInput | InputJsonValue
    actor?: StringFieldUpdateOperationsInput | string
    action?: NullableStringFieldUpdateOperationsInput | string | null
    responseType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedPrompts?: TutorTurnRecordUpdatesuggestedPromptsInput | string[]
    nextSteps?: TutorTurnRecordUpdatenextStepsInput | string[]
    references?: NullableJsonNullValueInput | InputJsonValue
    contextSnippets?: NullableJsonNullValueInput | InputJsonValue
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