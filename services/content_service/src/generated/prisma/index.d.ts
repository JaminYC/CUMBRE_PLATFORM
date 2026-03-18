
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
 * Model TopicRecord
 * 
 */
export type TopicRecord = $Result.DefaultSelection<Prisma.$TopicRecordPayload>
/**
 * Model LessonRecord
 * 
 */
export type LessonRecord = $Result.DefaultSelection<Prisma.$LessonRecordPayload>
/**
 * Model ContentItemRecord
 * 
 */
export type ContentItemRecord = $Result.DefaultSelection<Prisma.$ContentItemRecordPayload>
/**
 * Model TeachingMaterialRecord
 * 
 */
export type TeachingMaterialRecord = $Result.DefaultSelection<Prisma.$TeachingMaterialRecordPayload>
/**
 * Model TeachingModuleRecord
 * 
 */
export type TeachingModuleRecord = $Result.DefaultSelection<Prisma.$TeachingModuleRecordPayload>
/**
 * Model TeachingQuizRecord
 * 
 */
export type TeachingQuizRecord = $Result.DefaultSelection<Prisma.$TeachingQuizRecordPayload>
/**
 * Model StudentAttemptRecord
 * 
 */
export type StudentAttemptRecord = $Result.DefaultSelection<Prisma.$StudentAttemptRecordPayload>
/**
 * Model KnowledgeNodeRecord
 * 
 */
export type KnowledgeNodeRecord = $Result.DefaultSelection<Prisma.$KnowledgeNodeRecordPayload>
/**
 * Model KnowledgeEdgeRecord
 * 
 */
export type KnowledgeEdgeRecord = $Result.DefaultSelection<Prisma.$KnowledgeEdgeRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TopicRecords
 * const topicRecords = await prisma.topicRecord.findMany()
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
   * // Fetch zero or more TopicRecords
   * const topicRecords = await prisma.topicRecord.findMany()
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
   * `prisma.topicRecord`: Exposes CRUD operations for the **TopicRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopicRecords
    * const topicRecords = await prisma.topicRecord.findMany()
    * ```
    */
  get topicRecord(): Prisma.TopicRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonRecord`: Exposes CRUD operations for the **LessonRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonRecords
    * const lessonRecords = await prisma.lessonRecord.findMany()
    * ```
    */
  get lessonRecord(): Prisma.LessonRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentItemRecord`: Exposes CRUD operations for the **ContentItemRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentItemRecords
    * const contentItemRecords = await prisma.contentItemRecord.findMany()
    * ```
    */
  get contentItemRecord(): Prisma.ContentItemRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingMaterialRecord`: Exposes CRUD operations for the **TeachingMaterialRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingMaterialRecords
    * const teachingMaterialRecords = await prisma.teachingMaterialRecord.findMany()
    * ```
    */
  get teachingMaterialRecord(): Prisma.TeachingMaterialRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingModuleRecord`: Exposes CRUD operations for the **TeachingModuleRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingModuleRecords
    * const teachingModuleRecords = await prisma.teachingModuleRecord.findMany()
    * ```
    */
  get teachingModuleRecord(): Prisma.TeachingModuleRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingQuizRecord`: Exposes CRUD operations for the **TeachingQuizRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingQuizRecords
    * const teachingQuizRecords = await prisma.teachingQuizRecord.findMany()
    * ```
    */
  get teachingQuizRecord(): Prisma.TeachingQuizRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAttemptRecord`: Exposes CRUD operations for the **StudentAttemptRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAttemptRecords
    * const studentAttemptRecords = await prisma.studentAttemptRecord.findMany()
    * ```
    */
  get studentAttemptRecord(): Prisma.StudentAttemptRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledgeNodeRecord`: Exposes CRUD operations for the **KnowledgeNodeRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeNodeRecords
    * const knowledgeNodeRecords = await prisma.knowledgeNodeRecord.findMany()
    * ```
    */
  get knowledgeNodeRecord(): Prisma.KnowledgeNodeRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledgeEdgeRecord`: Exposes CRUD operations for the **KnowledgeEdgeRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeEdgeRecords
    * const knowledgeEdgeRecords = await prisma.knowledgeEdgeRecord.findMany()
    * ```
    */
  get knowledgeEdgeRecord(): Prisma.KnowledgeEdgeRecordDelegate<ExtArgs, ClientOptions>;
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
    TopicRecord: 'TopicRecord',
    LessonRecord: 'LessonRecord',
    ContentItemRecord: 'ContentItemRecord',
    TeachingMaterialRecord: 'TeachingMaterialRecord',
    TeachingModuleRecord: 'TeachingModuleRecord',
    TeachingQuizRecord: 'TeachingQuizRecord',
    StudentAttemptRecord: 'StudentAttemptRecord',
    KnowledgeNodeRecord: 'KnowledgeNodeRecord',
    KnowledgeEdgeRecord: 'KnowledgeEdgeRecord'
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
      modelProps: "topicRecord" | "lessonRecord" | "contentItemRecord" | "teachingMaterialRecord" | "teachingModuleRecord" | "teachingQuizRecord" | "studentAttemptRecord" | "knowledgeNodeRecord" | "knowledgeEdgeRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TopicRecord: {
        payload: Prisma.$TopicRecordPayload<ExtArgs>
        fields: Prisma.TopicRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload>
          }
          findFirst: {
            args: Prisma.TopicRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload>
          }
          findMany: {
            args: Prisma.TopicRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload>[]
          }
          create: {
            args: Prisma.TopicRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload>
          }
          createMany: {
            args: Prisma.TopicRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload>[]
          }
          delete: {
            args: Prisma.TopicRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload>
          }
          update: {
            args: Prisma.TopicRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload>
          }
          deleteMany: {
            args: Prisma.TopicRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload>[]
          }
          upsert: {
            args: Prisma.TopicRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicRecordPayload>
          }
          aggregate: {
            args: Prisma.TopicRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopicRecord>
          }
          groupBy: {
            args: Prisma.TopicRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TopicRecordCountAggregateOutputType> | number
          }
        }
      }
      LessonRecord: {
        payload: Prisma.$LessonRecordPayload<ExtArgs>
        fields: Prisma.LessonRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload>
          }
          findFirst: {
            args: Prisma.LessonRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload>
          }
          findMany: {
            args: Prisma.LessonRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload>[]
          }
          create: {
            args: Prisma.LessonRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload>
          }
          createMany: {
            args: Prisma.LessonRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload>[]
          }
          delete: {
            args: Prisma.LessonRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload>
          }
          update: {
            args: Prisma.LessonRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload>
          }
          deleteMany: {
            args: Prisma.LessonRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload>[]
          }
          upsert: {
            args: Prisma.LessonRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonRecordPayload>
          }
          aggregate: {
            args: Prisma.LessonRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonRecord>
          }
          groupBy: {
            args: Prisma.LessonRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonRecordCountArgs<ExtArgs>
            result: $Utils.Optional<LessonRecordCountAggregateOutputType> | number
          }
        }
      }
      ContentItemRecord: {
        payload: Prisma.$ContentItemRecordPayload<ExtArgs>
        fields: Prisma.ContentItemRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentItemRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentItemRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload>
          }
          findFirst: {
            args: Prisma.ContentItemRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentItemRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload>
          }
          findMany: {
            args: Prisma.ContentItemRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload>[]
          }
          create: {
            args: Prisma.ContentItemRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload>
          }
          createMany: {
            args: Prisma.ContentItemRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentItemRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload>[]
          }
          delete: {
            args: Prisma.ContentItemRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload>
          }
          update: {
            args: Prisma.ContentItemRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload>
          }
          deleteMany: {
            args: Prisma.ContentItemRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentItemRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentItemRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload>[]
          }
          upsert: {
            args: Prisma.ContentItemRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemRecordPayload>
          }
          aggregate: {
            args: Prisma.ContentItemRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentItemRecord>
          }
          groupBy: {
            args: Prisma.ContentItemRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentItemRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentItemRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ContentItemRecordCountAggregateOutputType> | number
          }
        }
      }
      TeachingMaterialRecord: {
        payload: Prisma.$TeachingMaterialRecordPayload<ExtArgs>
        fields: Prisma.TeachingMaterialRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingMaterialRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingMaterialRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload>
          }
          findFirst: {
            args: Prisma.TeachingMaterialRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingMaterialRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload>
          }
          findMany: {
            args: Prisma.TeachingMaterialRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload>[]
          }
          create: {
            args: Prisma.TeachingMaterialRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload>
          }
          createMany: {
            args: Prisma.TeachingMaterialRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingMaterialRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload>[]
          }
          delete: {
            args: Prisma.TeachingMaterialRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload>
          }
          update: {
            args: Prisma.TeachingMaterialRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload>
          }
          deleteMany: {
            args: Prisma.TeachingMaterialRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingMaterialRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingMaterialRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload>[]
          }
          upsert: {
            args: Prisma.TeachingMaterialRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingMaterialRecordPayload>
          }
          aggregate: {
            args: Prisma.TeachingMaterialRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingMaterialRecord>
          }
          groupBy: {
            args: Prisma.TeachingMaterialRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingMaterialRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingMaterialRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingMaterialRecordCountAggregateOutputType> | number
          }
        }
      }
      TeachingModuleRecord: {
        payload: Prisma.$TeachingModuleRecordPayload<ExtArgs>
        fields: Prisma.TeachingModuleRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingModuleRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingModuleRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload>
          }
          findFirst: {
            args: Prisma.TeachingModuleRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingModuleRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload>
          }
          findMany: {
            args: Prisma.TeachingModuleRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload>[]
          }
          create: {
            args: Prisma.TeachingModuleRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload>
          }
          createMany: {
            args: Prisma.TeachingModuleRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingModuleRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload>[]
          }
          delete: {
            args: Prisma.TeachingModuleRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload>
          }
          update: {
            args: Prisma.TeachingModuleRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload>
          }
          deleteMany: {
            args: Prisma.TeachingModuleRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingModuleRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingModuleRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload>[]
          }
          upsert: {
            args: Prisma.TeachingModuleRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingModuleRecordPayload>
          }
          aggregate: {
            args: Prisma.TeachingModuleRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingModuleRecord>
          }
          groupBy: {
            args: Prisma.TeachingModuleRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingModuleRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingModuleRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingModuleRecordCountAggregateOutputType> | number
          }
        }
      }
      TeachingQuizRecord: {
        payload: Prisma.$TeachingQuizRecordPayload<ExtArgs>
        fields: Prisma.TeachingQuizRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingQuizRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingQuizRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload>
          }
          findFirst: {
            args: Prisma.TeachingQuizRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingQuizRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload>
          }
          findMany: {
            args: Prisma.TeachingQuizRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload>[]
          }
          create: {
            args: Prisma.TeachingQuizRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload>
          }
          createMany: {
            args: Prisma.TeachingQuizRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingQuizRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload>[]
          }
          delete: {
            args: Prisma.TeachingQuizRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload>
          }
          update: {
            args: Prisma.TeachingQuizRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload>
          }
          deleteMany: {
            args: Prisma.TeachingQuizRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingQuizRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingQuizRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload>[]
          }
          upsert: {
            args: Prisma.TeachingQuizRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingQuizRecordPayload>
          }
          aggregate: {
            args: Prisma.TeachingQuizRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingQuizRecord>
          }
          groupBy: {
            args: Prisma.TeachingQuizRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingQuizRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingQuizRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingQuizRecordCountAggregateOutputType> | number
          }
        }
      }
      StudentAttemptRecord: {
        payload: Prisma.$StudentAttemptRecordPayload<ExtArgs>
        fields: Prisma.StudentAttemptRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAttemptRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAttemptRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload>
          }
          findFirst: {
            args: Prisma.StudentAttemptRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAttemptRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload>
          }
          findMany: {
            args: Prisma.StudentAttemptRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload>[]
          }
          create: {
            args: Prisma.StudentAttemptRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload>
          }
          createMany: {
            args: Prisma.StudentAttemptRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentAttemptRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload>[]
          }
          delete: {
            args: Prisma.StudentAttemptRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload>
          }
          update: {
            args: Prisma.StudentAttemptRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload>
          }
          deleteMany: {
            args: Prisma.StudentAttemptRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAttemptRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentAttemptRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload>[]
          }
          upsert: {
            args: Prisma.StudentAttemptRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAttemptRecordPayload>
          }
          aggregate: {
            args: Prisma.StudentAttemptRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAttemptRecord>
          }
          groupBy: {
            args: Prisma.StudentAttemptRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAttemptRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAttemptRecordCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAttemptRecordCountAggregateOutputType> | number
          }
        }
      }
      KnowledgeNodeRecord: {
        payload: Prisma.$KnowledgeNodeRecordPayload<ExtArgs>
        fields: Prisma.KnowledgeNodeRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeNodeRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeNodeRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload>
          }
          findFirst: {
            args: Prisma.KnowledgeNodeRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeNodeRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload>
          }
          findMany: {
            args: Prisma.KnowledgeNodeRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload>[]
          }
          create: {
            args: Prisma.KnowledgeNodeRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload>
          }
          createMany: {
            args: Prisma.KnowledgeNodeRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeNodeRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload>[]
          }
          delete: {
            args: Prisma.KnowledgeNodeRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload>
          }
          update: {
            args: Prisma.KnowledgeNodeRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeNodeRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeNodeRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeNodeRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeNodeRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeNodeRecordPayload>
          }
          aggregate: {
            args: Prisma.KnowledgeNodeRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeNodeRecord>
          }
          groupBy: {
            args: Prisma.KnowledgeNodeRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeNodeRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeNodeRecordCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeNodeRecordCountAggregateOutputType> | number
          }
        }
      }
      KnowledgeEdgeRecord: {
        payload: Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>
        fields: Prisma.KnowledgeEdgeRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeEdgeRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeEdgeRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload>
          }
          findFirst: {
            args: Prisma.KnowledgeEdgeRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeEdgeRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload>
          }
          findMany: {
            args: Prisma.KnowledgeEdgeRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload>[]
          }
          create: {
            args: Prisma.KnowledgeEdgeRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload>
          }
          createMany: {
            args: Prisma.KnowledgeEdgeRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeEdgeRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload>[]
          }
          delete: {
            args: Prisma.KnowledgeEdgeRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload>
          }
          update: {
            args: Prisma.KnowledgeEdgeRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeEdgeRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeEdgeRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeEdgeRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeEdgeRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeEdgeRecordPayload>
          }
          aggregate: {
            args: Prisma.KnowledgeEdgeRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeEdgeRecord>
          }
          groupBy: {
            args: Prisma.KnowledgeEdgeRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeEdgeRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeEdgeRecordCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeEdgeRecordCountAggregateOutputType> | number
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
    topicRecord?: TopicRecordOmit
    lessonRecord?: LessonRecordOmit
    contentItemRecord?: ContentItemRecordOmit
    teachingMaterialRecord?: TeachingMaterialRecordOmit
    teachingModuleRecord?: TeachingModuleRecordOmit
    teachingQuizRecord?: TeachingQuizRecordOmit
    studentAttemptRecord?: StudentAttemptRecordOmit
    knowledgeNodeRecord?: KnowledgeNodeRecordOmit
    knowledgeEdgeRecord?: KnowledgeEdgeRecordOmit
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
   * Count Type TopicRecordCountOutputType
   */

  export type TopicRecordCountOutputType = {
    lessons: number
  }

  export type TopicRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | TopicRecordCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * TopicRecordCountOutputType without action
   */
  export type TopicRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecordCountOutputType
     */
    select?: TopicRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicRecordCountOutputType without action
   */
  export type TopicRecordCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TopicRecord
   */

  export type AggregateTopicRecord = {
    _count: TopicRecordCountAggregateOutputType | null
    _min: TopicRecordMinAggregateOutputType | null
    _max: TopicRecordMaxAggregateOutputType | null
  }

  export type TopicRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    summary: string | null
    slug: string | null
    parentTopicId: string | null
  }

  export type TopicRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    summary: string | null
    slug: string | null
    parentTopicId: string | null
  }

  export type TopicRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    title: number
    summary: number
    slug: number
    parentTopicId: number
    skillIds: number
    prerequisiteTopicIds: number
    _all: number
  }


  export type TopicRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    summary?: true
    slug?: true
    parentTopicId?: true
  }

  export type TopicRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    summary?: true
    slug?: true
    parentTopicId?: true
  }

  export type TopicRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    title?: true
    summary?: true
    slug?: true
    parentTopicId?: true
    skillIds?: true
    prerequisiteTopicIds?: true
    _all?: true
  }

  export type TopicRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicRecord to aggregate.
     */
    where?: TopicRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicRecords to fetch.
     */
    orderBy?: TopicRecordOrderByWithRelationInput | TopicRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopicRecords
    **/
    _count?: true | TopicRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicRecordMaxAggregateInputType
  }

  export type GetTopicRecordAggregateType<T extends TopicRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTopicRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopicRecord[P]>
      : GetScalarType<T[P], AggregateTopicRecord[P]>
  }




  export type TopicRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicRecordWhereInput
    orderBy?: TopicRecordOrderByWithAggregationInput | TopicRecordOrderByWithAggregationInput[]
    by: TopicRecordScalarFieldEnum[] | TopicRecordScalarFieldEnum
    having?: TopicRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicRecordCountAggregateInputType | true
    _min?: TopicRecordMinAggregateInputType
    _max?: TopicRecordMaxAggregateInputType
  }

  export type TopicRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    title: string
    summary: string | null
    slug: string | null
    parentTopicId: string | null
    skillIds: string[]
    prerequisiteTopicIds: string[]
    _count: TopicRecordCountAggregateOutputType | null
    _min: TopicRecordMinAggregateOutputType | null
    _max: TopicRecordMaxAggregateOutputType | null
  }

  type GetTopicRecordGroupByPayload<T extends TopicRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TopicRecordGroupByOutputType[P]>
        }
      >
    >


  export type TopicRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    slug?: boolean
    parentTopicId?: boolean
    skillIds?: boolean
    prerequisiteTopicIds?: boolean
    lessons?: boolean | TopicRecord$lessonsArgs<ExtArgs>
    _count?: boolean | TopicRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicRecord"]>

  export type TopicRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    slug?: boolean
    parentTopicId?: boolean
    skillIds?: boolean
    prerequisiteTopicIds?: boolean
  }, ExtArgs["result"]["topicRecord"]>

  export type TopicRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    slug?: boolean
    parentTopicId?: boolean
    skillIds?: boolean
    prerequisiteTopicIds?: boolean
  }, ExtArgs["result"]["topicRecord"]>

  export type TopicRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    slug?: boolean
    parentTopicId?: boolean
    skillIds?: boolean
    prerequisiteTopicIds?: boolean
  }

  export type TopicRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "title" | "summary" | "slug" | "parentTopicId" | "skillIds" | "prerequisiteTopicIds", ExtArgs["result"]["topicRecord"]>
  export type TopicRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | TopicRecord$lessonsArgs<ExtArgs>
    _count?: boolean | TopicRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TopicRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TopicRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopicRecord"
    objects: {
      lessons: Prisma.$LessonRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      title: string
      summary: string | null
      slug: string | null
      parentTopicId: string | null
      skillIds: string[]
      prerequisiteTopicIds: string[]
    }, ExtArgs["result"]["topicRecord"]>
    composites: {}
  }

  type TopicRecordGetPayload<S extends boolean | null | undefined | TopicRecordDefaultArgs> = $Result.GetResult<Prisma.$TopicRecordPayload, S>

  type TopicRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicRecordCountAggregateInputType | true
    }

  export interface TopicRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopicRecord'], meta: { name: 'TopicRecord' } }
    /**
     * Find zero or one TopicRecord that matches the filter.
     * @param {TopicRecordFindUniqueArgs} args - Arguments to find a TopicRecord
     * @example
     * // Get one TopicRecord
     * const topicRecord = await prisma.topicRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicRecordFindUniqueArgs>(args: SelectSubset<T, TopicRecordFindUniqueArgs<ExtArgs>>): Prisma__TopicRecordClient<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopicRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicRecordFindUniqueOrThrowArgs} args - Arguments to find a TopicRecord
     * @example
     * // Get one TopicRecord
     * const topicRecord = await prisma.topicRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicRecordClient<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicRecordFindFirstArgs} args - Arguments to find a TopicRecord
     * @example
     * // Get one TopicRecord
     * const topicRecord = await prisma.topicRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicRecordFindFirstArgs>(args?: SelectSubset<T, TopicRecordFindFirstArgs<ExtArgs>>): Prisma__TopicRecordClient<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicRecordFindFirstOrThrowArgs} args - Arguments to find a TopicRecord
     * @example
     * // Get one TopicRecord
     * const topicRecord = await prisma.topicRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicRecordClient<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopicRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopicRecords
     * const topicRecords = await prisma.topicRecord.findMany()
     * 
     * // Get first 10 TopicRecords
     * const topicRecords = await prisma.topicRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicRecordWithIdOnly = await prisma.topicRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicRecordFindManyArgs>(args?: SelectSubset<T, TopicRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopicRecord.
     * @param {TopicRecordCreateArgs} args - Arguments to create a TopicRecord.
     * @example
     * // Create one TopicRecord
     * const TopicRecord = await prisma.topicRecord.create({
     *   data: {
     *     // ... data to create a TopicRecord
     *   }
     * })
     * 
     */
    create<T extends TopicRecordCreateArgs>(args: SelectSubset<T, TopicRecordCreateArgs<ExtArgs>>): Prisma__TopicRecordClient<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopicRecords.
     * @param {TopicRecordCreateManyArgs} args - Arguments to create many TopicRecords.
     * @example
     * // Create many TopicRecords
     * const topicRecord = await prisma.topicRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicRecordCreateManyArgs>(args?: SelectSubset<T, TopicRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TopicRecords and returns the data saved in the database.
     * @param {TopicRecordCreateManyAndReturnArgs} args - Arguments to create many TopicRecords.
     * @example
     * // Create many TopicRecords
     * const topicRecord = await prisma.topicRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TopicRecords and only return the `id`
     * const topicRecordWithIdOnly = await prisma.topicRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TopicRecord.
     * @param {TopicRecordDeleteArgs} args - Arguments to delete one TopicRecord.
     * @example
     * // Delete one TopicRecord
     * const TopicRecord = await prisma.topicRecord.delete({
     *   where: {
     *     // ... filter to delete one TopicRecord
     *   }
     * })
     * 
     */
    delete<T extends TopicRecordDeleteArgs>(args: SelectSubset<T, TopicRecordDeleteArgs<ExtArgs>>): Prisma__TopicRecordClient<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopicRecord.
     * @param {TopicRecordUpdateArgs} args - Arguments to update one TopicRecord.
     * @example
     * // Update one TopicRecord
     * const topicRecord = await prisma.topicRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicRecordUpdateArgs>(args: SelectSubset<T, TopicRecordUpdateArgs<ExtArgs>>): Prisma__TopicRecordClient<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopicRecords.
     * @param {TopicRecordDeleteManyArgs} args - Arguments to filter TopicRecords to delete.
     * @example
     * // Delete a few TopicRecords
     * const { count } = await prisma.topicRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicRecordDeleteManyArgs>(args?: SelectSubset<T, TopicRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopicRecords
     * const topicRecord = await prisma.topicRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicRecordUpdateManyArgs>(args: SelectSubset<T, TopicRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicRecords and returns the data updated in the database.
     * @param {TopicRecordUpdateManyAndReturnArgs} args - Arguments to update many TopicRecords.
     * @example
     * // Update many TopicRecords
     * const topicRecord = await prisma.topicRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TopicRecords and only return the `id`
     * const topicRecordWithIdOnly = await prisma.topicRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends TopicRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TopicRecord.
     * @param {TopicRecordUpsertArgs} args - Arguments to update or create a TopicRecord.
     * @example
     * // Update or create a TopicRecord
     * const topicRecord = await prisma.topicRecord.upsert({
     *   create: {
     *     // ... data to create a TopicRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopicRecord we want to update
     *   }
     * })
     */
    upsert<T extends TopicRecordUpsertArgs>(args: SelectSubset<T, TopicRecordUpsertArgs<ExtArgs>>): Prisma__TopicRecordClient<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopicRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicRecordCountArgs} args - Arguments to filter TopicRecords to count.
     * @example
     * // Count the number of TopicRecords
     * const count = await prisma.topicRecord.count({
     *   where: {
     *     // ... the filter for the TopicRecords we want to count
     *   }
     * })
    **/
    count<T extends TopicRecordCountArgs>(
      args?: Subset<T, TopicRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopicRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicRecordAggregateArgs>(args: Subset<T, TopicRecordAggregateArgs>): Prisma.PrismaPromise<GetTopicRecordAggregateType<T>>

    /**
     * Group by TopicRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicRecordGroupByArgs} args - Group by arguments.
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
      T extends TopicRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicRecordGroupByArgs['orderBy'] }
        : { orderBy?: TopicRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopicRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopicRecord model
   */
  readonly fields: TopicRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopicRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends TopicRecord$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, TopicRecord$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TopicRecord model
   */
  interface TopicRecordFieldRefs {
    readonly id: FieldRef<"TopicRecord", 'String'>
    readonly createdAt: FieldRef<"TopicRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"TopicRecord", 'DateTime'>
    readonly metadata: FieldRef<"TopicRecord", 'Json'>
    readonly title: FieldRef<"TopicRecord", 'String'>
    readonly summary: FieldRef<"TopicRecord", 'String'>
    readonly slug: FieldRef<"TopicRecord", 'String'>
    readonly parentTopicId: FieldRef<"TopicRecord", 'String'>
    readonly skillIds: FieldRef<"TopicRecord", 'String[]'>
    readonly prerequisiteTopicIds: FieldRef<"TopicRecord", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * TopicRecord findUnique
   */
  export type TopicRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
    /**
     * Filter, which TopicRecord to fetch.
     */
    where: TopicRecordWhereUniqueInput
  }

  /**
   * TopicRecord findUniqueOrThrow
   */
  export type TopicRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
    /**
     * Filter, which TopicRecord to fetch.
     */
    where: TopicRecordWhereUniqueInput
  }

  /**
   * TopicRecord findFirst
   */
  export type TopicRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
    /**
     * Filter, which TopicRecord to fetch.
     */
    where?: TopicRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicRecords to fetch.
     */
    orderBy?: TopicRecordOrderByWithRelationInput | TopicRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicRecords.
     */
    cursor?: TopicRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicRecords.
     */
    distinct?: TopicRecordScalarFieldEnum | TopicRecordScalarFieldEnum[]
  }

  /**
   * TopicRecord findFirstOrThrow
   */
  export type TopicRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
    /**
     * Filter, which TopicRecord to fetch.
     */
    where?: TopicRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicRecords to fetch.
     */
    orderBy?: TopicRecordOrderByWithRelationInput | TopicRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicRecords.
     */
    cursor?: TopicRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicRecords.
     */
    distinct?: TopicRecordScalarFieldEnum | TopicRecordScalarFieldEnum[]
  }

  /**
   * TopicRecord findMany
   */
  export type TopicRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
    /**
     * Filter, which TopicRecords to fetch.
     */
    where?: TopicRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicRecords to fetch.
     */
    orderBy?: TopicRecordOrderByWithRelationInput | TopicRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopicRecords.
     */
    cursor?: TopicRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicRecords.
     */
    skip?: number
    distinct?: TopicRecordScalarFieldEnum | TopicRecordScalarFieldEnum[]
  }

  /**
   * TopicRecord create
   */
  export type TopicRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TopicRecord.
     */
    data: XOR<TopicRecordCreateInput, TopicRecordUncheckedCreateInput>
  }

  /**
   * TopicRecord createMany
   */
  export type TopicRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopicRecords.
     */
    data: TopicRecordCreateManyInput | TopicRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopicRecord createManyAndReturn
   */
  export type TopicRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TopicRecords.
     */
    data: TopicRecordCreateManyInput | TopicRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopicRecord update
   */
  export type TopicRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TopicRecord.
     */
    data: XOR<TopicRecordUpdateInput, TopicRecordUncheckedUpdateInput>
    /**
     * Choose, which TopicRecord to update.
     */
    where: TopicRecordWhereUniqueInput
  }

  /**
   * TopicRecord updateMany
   */
  export type TopicRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopicRecords.
     */
    data: XOR<TopicRecordUpdateManyMutationInput, TopicRecordUncheckedUpdateManyInput>
    /**
     * Filter which TopicRecords to update
     */
    where?: TopicRecordWhereInput
    /**
     * Limit how many TopicRecords to update.
     */
    limit?: number
  }

  /**
   * TopicRecord updateManyAndReturn
   */
  export type TopicRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * The data used to update TopicRecords.
     */
    data: XOR<TopicRecordUpdateManyMutationInput, TopicRecordUncheckedUpdateManyInput>
    /**
     * Filter which TopicRecords to update
     */
    where?: TopicRecordWhereInput
    /**
     * Limit how many TopicRecords to update.
     */
    limit?: number
  }

  /**
   * TopicRecord upsert
   */
  export type TopicRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TopicRecord to update in case it exists.
     */
    where: TopicRecordWhereUniqueInput
    /**
     * In case the TopicRecord found by the `where` argument doesn't exist, create a new TopicRecord with this data.
     */
    create: XOR<TopicRecordCreateInput, TopicRecordUncheckedCreateInput>
    /**
     * In case the TopicRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicRecordUpdateInput, TopicRecordUncheckedUpdateInput>
  }

  /**
   * TopicRecord delete
   */
  export type TopicRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
    /**
     * Filter which TopicRecord to delete.
     */
    where: TopicRecordWhereUniqueInput
  }

  /**
   * TopicRecord deleteMany
   */
  export type TopicRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicRecords to delete
     */
    where?: TopicRecordWhereInput
    /**
     * Limit how many TopicRecords to delete.
     */
    limit?: number
  }

  /**
   * TopicRecord.lessons
   */
  export type TopicRecord$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    where?: LessonRecordWhereInput
    orderBy?: LessonRecordOrderByWithRelationInput | LessonRecordOrderByWithRelationInput[]
    cursor?: LessonRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonRecordScalarFieldEnum | LessonRecordScalarFieldEnum[]
  }

  /**
   * TopicRecord without action
   */
  export type TopicRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicRecord
     */
    select?: TopicRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicRecord
     */
    omit?: TopicRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicRecordInclude<ExtArgs> | null
  }


  /**
   * Model LessonRecord
   */

  export type AggregateLessonRecord = {
    _count: LessonRecordCountAggregateOutputType | null
    _avg: LessonRecordAvgAggregateOutputType | null
    _sum: LessonRecordSumAggregateOutputType | null
    _min: LessonRecordMinAggregateOutputType | null
    _max: LessonRecordMaxAggregateOutputType | null
  }

  export type LessonRecordAvgAggregateOutputType = {
    estimatedDurationMinutes: number | null
  }

  export type LessonRecordSumAggregateOutputType = {
    estimatedDurationMinutes: number | null
  }

  export type LessonRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    summary: string | null
    lessonType: string | null
    topicId: string | null
    estimatedDurationMinutes: number | null
    difficultyLevel: string | null
  }

  export type LessonRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    summary: string | null
    lessonType: string | null
    topicId: string | null
    estimatedDurationMinutes: number | null
    difficultyLevel: string | null
  }

  export type LessonRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    title: number
    summary: number
    lessonType: number
    topicId: number
    skillIds: number
    learningObjectiveIds: number
    prerequisiteLessonIds: number
    estimatedDurationMinutes: number
    difficultyLevel: number
    resourceUrls: number
    _all: number
  }


  export type LessonRecordAvgAggregateInputType = {
    estimatedDurationMinutes?: true
  }

  export type LessonRecordSumAggregateInputType = {
    estimatedDurationMinutes?: true
  }

  export type LessonRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    summary?: true
    lessonType?: true
    topicId?: true
    estimatedDurationMinutes?: true
    difficultyLevel?: true
  }

  export type LessonRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    summary?: true
    lessonType?: true
    topicId?: true
    estimatedDurationMinutes?: true
    difficultyLevel?: true
  }

  export type LessonRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    title?: true
    summary?: true
    lessonType?: true
    topicId?: true
    skillIds?: true
    learningObjectiveIds?: true
    prerequisiteLessonIds?: true
    estimatedDurationMinutes?: true
    difficultyLevel?: true
    resourceUrls?: true
    _all?: true
  }

  export type LessonRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonRecord to aggregate.
     */
    where?: LessonRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonRecords to fetch.
     */
    orderBy?: LessonRecordOrderByWithRelationInput | LessonRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonRecords
    **/
    _count?: true | LessonRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonRecordMaxAggregateInputType
  }

  export type GetLessonRecordAggregateType<T extends LessonRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonRecord[P]>
      : GetScalarType<T[P], AggregateLessonRecord[P]>
  }




  export type LessonRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonRecordWhereInput
    orderBy?: LessonRecordOrderByWithAggregationInput | LessonRecordOrderByWithAggregationInput[]
    by: LessonRecordScalarFieldEnum[] | LessonRecordScalarFieldEnum
    having?: LessonRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonRecordCountAggregateInputType | true
    _avg?: LessonRecordAvgAggregateInputType
    _sum?: LessonRecordSumAggregateInputType
    _min?: LessonRecordMinAggregateInputType
    _max?: LessonRecordMaxAggregateInputType
  }

  export type LessonRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    title: string
    summary: string | null
    lessonType: string
    topicId: string
    skillIds: string[]
    learningObjectiveIds: string[]
    prerequisiteLessonIds: string[]
    estimatedDurationMinutes: number | null
    difficultyLevel: string | null
    resourceUrls: string[]
    _count: LessonRecordCountAggregateOutputType | null
    _avg: LessonRecordAvgAggregateOutputType | null
    _sum: LessonRecordSumAggregateOutputType | null
    _min: LessonRecordMinAggregateOutputType | null
    _max: LessonRecordMaxAggregateOutputType | null
  }

  type GetLessonRecordGroupByPayload<T extends LessonRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonRecordGroupByOutputType[P]>
            : GetScalarType<T[P], LessonRecordGroupByOutputType[P]>
        }
      >
    >


  export type LessonRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    lessonType?: boolean
    topicId?: boolean
    skillIds?: boolean
    learningObjectiveIds?: boolean
    prerequisiteLessonIds?: boolean
    estimatedDurationMinutes?: boolean
    difficultyLevel?: boolean
    resourceUrls?: boolean
    topic?: boolean | TopicRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonRecord"]>

  export type LessonRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    lessonType?: boolean
    topicId?: boolean
    skillIds?: boolean
    learningObjectiveIds?: boolean
    prerequisiteLessonIds?: boolean
    estimatedDurationMinutes?: boolean
    difficultyLevel?: boolean
    resourceUrls?: boolean
    topic?: boolean | TopicRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonRecord"]>

  export type LessonRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    lessonType?: boolean
    topicId?: boolean
    skillIds?: boolean
    learningObjectiveIds?: boolean
    prerequisiteLessonIds?: boolean
    estimatedDurationMinutes?: boolean
    difficultyLevel?: boolean
    resourceUrls?: boolean
    topic?: boolean | TopicRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonRecord"]>

  export type LessonRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    lessonType?: boolean
    topicId?: boolean
    skillIds?: boolean
    learningObjectiveIds?: boolean
    prerequisiteLessonIds?: boolean
    estimatedDurationMinutes?: boolean
    difficultyLevel?: boolean
    resourceUrls?: boolean
  }

  export type LessonRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "title" | "summary" | "lessonType" | "topicId" | "skillIds" | "learningObjectiveIds" | "prerequisiteLessonIds" | "estimatedDurationMinutes" | "difficultyLevel" | "resourceUrls", ExtArgs["result"]["lessonRecord"]>
  export type LessonRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicRecordDefaultArgs<ExtArgs>
  }
  export type LessonRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicRecordDefaultArgs<ExtArgs>
  }
  export type LessonRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicRecordDefaultArgs<ExtArgs>
  }

  export type $LessonRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonRecord"
    objects: {
      topic: Prisma.$TopicRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      title: string
      summary: string | null
      lessonType: string
      topicId: string
      skillIds: string[]
      learningObjectiveIds: string[]
      prerequisiteLessonIds: string[]
      estimatedDurationMinutes: number | null
      difficultyLevel: string | null
      resourceUrls: string[]
    }, ExtArgs["result"]["lessonRecord"]>
    composites: {}
  }

  type LessonRecordGetPayload<S extends boolean | null | undefined | LessonRecordDefaultArgs> = $Result.GetResult<Prisma.$LessonRecordPayload, S>

  type LessonRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonRecordCountAggregateInputType | true
    }

  export interface LessonRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonRecord'], meta: { name: 'LessonRecord' } }
    /**
     * Find zero or one LessonRecord that matches the filter.
     * @param {LessonRecordFindUniqueArgs} args - Arguments to find a LessonRecord
     * @example
     * // Get one LessonRecord
     * const lessonRecord = await prisma.lessonRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonRecordFindUniqueArgs>(args: SelectSubset<T, LessonRecordFindUniqueArgs<ExtArgs>>): Prisma__LessonRecordClient<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonRecordFindUniqueOrThrowArgs} args - Arguments to find a LessonRecord
     * @example
     * // Get one LessonRecord
     * const lessonRecord = await prisma.lessonRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonRecordClient<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonRecordFindFirstArgs} args - Arguments to find a LessonRecord
     * @example
     * // Get one LessonRecord
     * const lessonRecord = await prisma.lessonRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonRecordFindFirstArgs>(args?: SelectSubset<T, LessonRecordFindFirstArgs<ExtArgs>>): Prisma__LessonRecordClient<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonRecordFindFirstOrThrowArgs} args - Arguments to find a LessonRecord
     * @example
     * // Get one LessonRecord
     * const lessonRecord = await prisma.lessonRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonRecordClient<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonRecords
     * const lessonRecords = await prisma.lessonRecord.findMany()
     * 
     * // Get first 10 LessonRecords
     * const lessonRecords = await prisma.lessonRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonRecordWithIdOnly = await prisma.lessonRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonRecordFindManyArgs>(args?: SelectSubset<T, LessonRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonRecord.
     * @param {LessonRecordCreateArgs} args - Arguments to create a LessonRecord.
     * @example
     * // Create one LessonRecord
     * const LessonRecord = await prisma.lessonRecord.create({
     *   data: {
     *     // ... data to create a LessonRecord
     *   }
     * })
     * 
     */
    create<T extends LessonRecordCreateArgs>(args: SelectSubset<T, LessonRecordCreateArgs<ExtArgs>>): Prisma__LessonRecordClient<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonRecords.
     * @param {LessonRecordCreateManyArgs} args - Arguments to create many LessonRecords.
     * @example
     * // Create many LessonRecords
     * const lessonRecord = await prisma.lessonRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonRecordCreateManyArgs>(args?: SelectSubset<T, LessonRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonRecords and returns the data saved in the database.
     * @param {LessonRecordCreateManyAndReturnArgs} args - Arguments to create many LessonRecords.
     * @example
     * // Create many LessonRecords
     * const lessonRecord = await prisma.lessonRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonRecords and only return the `id`
     * const lessonRecordWithIdOnly = await prisma.lessonRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonRecord.
     * @param {LessonRecordDeleteArgs} args - Arguments to delete one LessonRecord.
     * @example
     * // Delete one LessonRecord
     * const LessonRecord = await prisma.lessonRecord.delete({
     *   where: {
     *     // ... filter to delete one LessonRecord
     *   }
     * })
     * 
     */
    delete<T extends LessonRecordDeleteArgs>(args: SelectSubset<T, LessonRecordDeleteArgs<ExtArgs>>): Prisma__LessonRecordClient<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonRecord.
     * @param {LessonRecordUpdateArgs} args - Arguments to update one LessonRecord.
     * @example
     * // Update one LessonRecord
     * const lessonRecord = await prisma.lessonRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonRecordUpdateArgs>(args: SelectSubset<T, LessonRecordUpdateArgs<ExtArgs>>): Prisma__LessonRecordClient<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonRecords.
     * @param {LessonRecordDeleteManyArgs} args - Arguments to filter LessonRecords to delete.
     * @example
     * // Delete a few LessonRecords
     * const { count } = await prisma.lessonRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonRecordDeleteManyArgs>(args?: SelectSubset<T, LessonRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonRecords
     * const lessonRecord = await prisma.lessonRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonRecordUpdateManyArgs>(args: SelectSubset<T, LessonRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonRecords and returns the data updated in the database.
     * @param {LessonRecordUpdateManyAndReturnArgs} args - Arguments to update many LessonRecords.
     * @example
     * // Update many LessonRecords
     * const lessonRecord = await prisma.lessonRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonRecords and only return the `id`
     * const lessonRecordWithIdOnly = await prisma.lessonRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonRecord.
     * @param {LessonRecordUpsertArgs} args - Arguments to update or create a LessonRecord.
     * @example
     * // Update or create a LessonRecord
     * const lessonRecord = await prisma.lessonRecord.upsert({
     *   create: {
     *     // ... data to create a LessonRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonRecord we want to update
     *   }
     * })
     */
    upsert<T extends LessonRecordUpsertArgs>(args: SelectSubset<T, LessonRecordUpsertArgs<ExtArgs>>): Prisma__LessonRecordClient<$Result.GetResult<Prisma.$LessonRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonRecordCountArgs} args - Arguments to filter LessonRecords to count.
     * @example
     * // Count the number of LessonRecords
     * const count = await prisma.lessonRecord.count({
     *   where: {
     *     // ... the filter for the LessonRecords we want to count
     *   }
     * })
    **/
    count<T extends LessonRecordCountArgs>(
      args?: Subset<T, LessonRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonRecordAggregateArgs>(args: Subset<T, LessonRecordAggregateArgs>): Prisma.PrismaPromise<GetLessonRecordAggregateType<T>>

    /**
     * Group by LessonRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonRecordGroupByArgs} args - Group by arguments.
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
      T extends LessonRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonRecordGroupByArgs['orderBy'] }
        : { orderBy?: LessonRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonRecord model
   */
  readonly fields: LessonRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends TopicRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicRecordDefaultArgs<ExtArgs>>): Prisma__TopicRecordClient<$Result.GetResult<Prisma.$TopicRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LessonRecord model
   */
  interface LessonRecordFieldRefs {
    readonly id: FieldRef<"LessonRecord", 'String'>
    readonly createdAt: FieldRef<"LessonRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"LessonRecord", 'DateTime'>
    readonly metadata: FieldRef<"LessonRecord", 'Json'>
    readonly title: FieldRef<"LessonRecord", 'String'>
    readonly summary: FieldRef<"LessonRecord", 'String'>
    readonly lessonType: FieldRef<"LessonRecord", 'String'>
    readonly topicId: FieldRef<"LessonRecord", 'String'>
    readonly skillIds: FieldRef<"LessonRecord", 'String[]'>
    readonly learningObjectiveIds: FieldRef<"LessonRecord", 'String[]'>
    readonly prerequisiteLessonIds: FieldRef<"LessonRecord", 'String[]'>
    readonly estimatedDurationMinutes: FieldRef<"LessonRecord", 'Int'>
    readonly difficultyLevel: FieldRef<"LessonRecord", 'String'>
    readonly resourceUrls: FieldRef<"LessonRecord", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * LessonRecord findUnique
   */
  export type LessonRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    /**
     * Filter, which LessonRecord to fetch.
     */
    where: LessonRecordWhereUniqueInput
  }

  /**
   * LessonRecord findUniqueOrThrow
   */
  export type LessonRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    /**
     * Filter, which LessonRecord to fetch.
     */
    where: LessonRecordWhereUniqueInput
  }

  /**
   * LessonRecord findFirst
   */
  export type LessonRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    /**
     * Filter, which LessonRecord to fetch.
     */
    where?: LessonRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonRecords to fetch.
     */
    orderBy?: LessonRecordOrderByWithRelationInput | LessonRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonRecords.
     */
    cursor?: LessonRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonRecords.
     */
    distinct?: LessonRecordScalarFieldEnum | LessonRecordScalarFieldEnum[]
  }

  /**
   * LessonRecord findFirstOrThrow
   */
  export type LessonRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    /**
     * Filter, which LessonRecord to fetch.
     */
    where?: LessonRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonRecords to fetch.
     */
    orderBy?: LessonRecordOrderByWithRelationInput | LessonRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonRecords.
     */
    cursor?: LessonRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonRecords.
     */
    distinct?: LessonRecordScalarFieldEnum | LessonRecordScalarFieldEnum[]
  }

  /**
   * LessonRecord findMany
   */
  export type LessonRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    /**
     * Filter, which LessonRecords to fetch.
     */
    where?: LessonRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonRecords to fetch.
     */
    orderBy?: LessonRecordOrderByWithRelationInput | LessonRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonRecords.
     */
    cursor?: LessonRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonRecords.
     */
    skip?: number
    distinct?: LessonRecordScalarFieldEnum | LessonRecordScalarFieldEnum[]
  }

  /**
   * LessonRecord create
   */
  export type LessonRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonRecord.
     */
    data: XOR<LessonRecordCreateInput, LessonRecordUncheckedCreateInput>
  }

  /**
   * LessonRecord createMany
   */
  export type LessonRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonRecords.
     */
    data: LessonRecordCreateManyInput | LessonRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonRecord createManyAndReturn
   */
  export type LessonRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * The data used to create many LessonRecords.
     */
    data: LessonRecordCreateManyInput | LessonRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonRecord update
   */
  export type LessonRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonRecord.
     */
    data: XOR<LessonRecordUpdateInput, LessonRecordUncheckedUpdateInput>
    /**
     * Choose, which LessonRecord to update.
     */
    where: LessonRecordWhereUniqueInput
  }

  /**
   * LessonRecord updateMany
   */
  export type LessonRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonRecords.
     */
    data: XOR<LessonRecordUpdateManyMutationInput, LessonRecordUncheckedUpdateManyInput>
    /**
     * Filter which LessonRecords to update
     */
    where?: LessonRecordWhereInput
    /**
     * Limit how many LessonRecords to update.
     */
    limit?: number
  }

  /**
   * LessonRecord updateManyAndReturn
   */
  export type LessonRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * The data used to update LessonRecords.
     */
    data: XOR<LessonRecordUpdateManyMutationInput, LessonRecordUncheckedUpdateManyInput>
    /**
     * Filter which LessonRecords to update
     */
    where?: LessonRecordWhereInput
    /**
     * Limit how many LessonRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonRecord upsert
   */
  export type LessonRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonRecord to update in case it exists.
     */
    where: LessonRecordWhereUniqueInput
    /**
     * In case the LessonRecord found by the `where` argument doesn't exist, create a new LessonRecord with this data.
     */
    create: XOR<LessonRecordCreateInput, LessonRecordUncheckedCreateInput>
    /**
     * In case the LessonRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonRecordUpdateInput, LessonRecordUncheckedUpdateInput>
  }

  /**
   * LessonRecord delete
   */
  export type LessonRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
    /**
     * Filter which LessonRecord to delete.
     */
    where: LessonRecordWhereUniqueInput
  }

  /**
   * LessonRecord deleteMany
   */
  export type LessonRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonRecords to delete
     */
    where?: LessonRecordWhereInput
    /**
     * Limit how many LessonRecords to delete.
     */
    limit?: number
  }

  /**
   * LessonRecord without action
   */
  export type LessonRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonRecord
     */
    select?: LessonRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonRecord
     */
    omit?: LessonRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonRecordInclude<ExtArgs> | null
  }


  /**
   * Model ContentItemRecord
   */

  export type AggregateContentItemRecord = {
    _count: ContentItemRecordCountAggregateOutputType | null
    _min: ContentItemRecordMinAggregateOutputType | null
    _max: ContentItemRecordMaxAggregateOutputType | null
  }

  export type ContentItemRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    summary: string | null
    contentType: string | null
    status: string | null
    lessonId: string | null
    assessmentId: string | null
    projectId: string | null
    authorUserId: string | null
    sourceUrl: string | null
    language: string | null
    versionLabel: string | null
  }

  export type ContentItemRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    summary: string | null
    contentType: string | null
    status: string | null
    lessonId: string | null
    assessmentId: string | null
    projectId: string | null
    authorUserId: string | null
    sourceUrl: string | null
    language: string | null
    versionLabel: string | null
  }

  export type ContentItemRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    title: number
    summary: number
    contentType: number
    status: number
    topicIds: number
    skillIds: number
    lessonId: number
    assessmentId: number
    projectId: number
    authorUserId: number
    sourceUrl: number
    language: number
    versionLabel: number
    _all: number
  }


  export type ContentItemRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    summary?: true
    contentType?: true
    status?: true
    lessonId?: true
    assessmentId?: true
    projectId?: true
    authorUserId?: true
    sourceUrl?: true
    language?: true
    versionLabel?: true
  }

  export type ContentItemRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    summary?: true
    contentType?: true
    status?: true
    lessonId?: true
    assessmentId?: true
    projectId?: true
    authorUserId?: true
    sourceUrl?: true
    language?: true
    versionLabel?: true
  }

  export type ContentItemRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    title?: true
    summary?: true
    contentType?: true
    status?: true
    topicIds?: true
    skillIds?: true
    lessonId?: true
    assessmentId?: true
    projectId?: true
    authorUserId?: true
    sourceUrl?: true
    language?: true
    versionLabel?: true
    _all?: true
  }

  export type ContentItemRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentItemRecord to aggregate.
     */
    where?: ContentItemRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItemRecords to fetch.
     */
    orderBy?: ContentItemRecordOrderByWithRelationInput | ContentItemRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentItemRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItemRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItemRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentItemRecords
    **/
    _count?: true | ContentItemRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentItemRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentItemRecordMaxAggregateInputType
  }

  export type GetContentItemRecordAggregateType<T extends ContentItemRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateContentItemRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentItemRecord[P]>
      : GetScalarType<T[P], AggregateContentItemRecord[P]>
  }




  export type ContentItemRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentItemRecordWhereInput
    orderBy?: ContentItemRecordOrderByWithAggregationInput | ContentItemRecordOrderByWithAggregationInput[]
    by: ContentItemRecordScalarFieldEnum[] | ContentItemRecordScalarFieldEnum
    having?: ContentItemRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentItemRecordCountAggregateInputType | true
    _min?: ContentItemRecordMinAggregateInputType
    _max?: ContentItemRecordMaxAggregateInputType
  }

  export type ContentItemRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    title: string
    summary: string | null
    contentType: string
    status: string
    topicIds: string[]
    skillIds: string[]
    lessonId: string | null
    assessmentId: string | null
    projectId: string | null
    authorUserId: string | null
    sourceUrl: string | null
    language: string | null
    versionLabel: string | null
    _count: ContentItemRecordCountAggregateOutputType | null
    _min: ContentItemRecordMinAggregateOutputType | null
    _max: ContentItemRecordMaxAggregateOutputType | null
  }

  type GetContentItemRecordGroupByPayload<T extends ContentItemRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentItemRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentItemRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentItemRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ContentItemRecordGroupByOutputType[P]>
        }
      >
    >


  export type ContentItemRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    contentType?: boolean
    status?: boolean
    topicIds?: boolean
    skillIds?: boolean
    lessonId?: boolean
    assessmentId?: boolean
    projectId?: boolean
    authorUserId?: boolean
    sourceUrl?: boolean
    language?: boolean
    versionLabel?: boolean
  }, ExtArgs["result"]["contentItemRecord"]>

  export type ContentItemRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    contentType?: boolean
    status?: boolean
    topicIds?: boolean
    skillIds?: boolean
    lessonId?: boolean
    assessmentId?: boolean
    projectId?: boolean
    authorUserId?: boolean
    sourceUrl?: boolean
    language?: boolean
    versionLabel?: boolean
  }, ExtArgs["result"]["contentItemRecord"]>

  export type ContentItemRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    contentType?: boolean
    status?: boolean
    topicIds?: boolean
    skillIds?: boolean
    lessonId?: boolean
    assessmentId?: boolean
    projectId?: boolean
    authorUserId?: boolean
    sourceUrl?: boolean
    language?: boolean
    versionLabel?: boolean
  }, ExtArgs["result"]["contentItemRecord"]>

  export type ContentItemRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    contentType?: boolean
    status?: boolean
    topicIds?: boolean
    skillIds?: boolean
    lessonId?: boolean
    assessmentId?: boolean
    projectId?: boolean
    authorUserId?: boolean
    sourceUrl?: boolean
    language?: boolean
    versionLabel?: boolean
  }

  export type ContentItemRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "title" | "summary" | "contentType" | "status" | "topicIds" | "skillIds" | "lessonId" | "assessmentId" | "projectId" | "authorUserId" | "sourceUrl" | "language" | "versionLabel", ExtArgs["result"]["contentItemRecord"]>

  export type $ContentItemRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentItemRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      title: string
      summary: string | null
      contentType: string
      status: string
      topicIds: string[]
      skillIds: string[]
      lessonId: string | null
      assessmentId: string | null
      projectId: string | null
      authorUserId: string | null
      sourceUrl: string | null
      language: string | null
      versionLabel: string | null
    }, ExtArgs["result"]["contentItemRecord"]>
    composites: {}
  }

  type ContentItemRecordGetPayload<S extends boolean | null | undefined | ContentItemRecordDefaultArgs> = $Result.GetResult<Prisma.$ContentItemRecordPayload, S>

  type ContentItemRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentItemRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentItemRecordCountAggregateInputType | true
    }

  export interface ContentItemRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentItemRecord'], meta: { name: 'ContentItemRecord' } }
    /**
     * Find zero or one ContentItemRecord that matches the filter.
     * @param {ContentItemRecordFindUniqueArgs} args - Arguments to find a ContentItemRecord
     * @example
     * // Get one ContentItemRecord
     * const contentItemRecord = await prisma.contentItemRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentItemRecordFindUniqueArgs>(args: SelectSubset<T, ContentItemRecordFindUniqueArgs<ExtArgs>>): Prisma__ContentItemRecordClient<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentItemRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentItemRecordFindUniqueOrThrowArgs} args - Arguments to find a ContentItemRecord
     * @example
     * // Get one ContentItemRecord
     * const contentItemRecord = await prisma.contentItemRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentItemRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentItemRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentItemRecordClient<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentItemRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemRecordFindFirstArgs} args - Arguments to find a ContentItemRecord
     * @example
     * // Get one ContentItemRecord
     * const contentItemRecord = await prisma.contentItemRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentItemRecordFindFirstArgs>(args?: SelectSubset<T, ContentItemRecordFindFirstArgs<ExtArgs>>): Prisma__ContentItemRecordClient<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentItemRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemRecordFindFirstOrThrowArgs} args - Arguments to find a ContentItemRecord
     * @example
     * // Get one ContentItemRecord
     * const contentItemRecord = await prisma.contentItemRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentItemRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentItemRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentItemRecordClient<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentItemRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentItemRecords
     * const contentItemRecords = await prisma.contentItemRecord.findMany()
     * 
     * // Get first 10 ContentItemRecords
     * const contentItemRecords = await prisma.contentItemRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentItemRecordWithIdOnly = await prisma.contentItemRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentItemRecordFindManyArgs>(args?: SelectSubset<T, ContentItemRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentItemRecord.
     * @param {ContentItemRecordCreateArgs} args - Arguments to create a ContentItemRecord.
     * @example
     * // Create one ContentItemRecord
     * const ContentItemRecord = await prisma.contentItemRecord.create({
     *   data: {
     *     // ... data to create a ContentItemRecord
     *   }
     * })
     * 
     */
    create<T extends ContentItemRecordCreateArgs>(args: SelectSubset<T, ContentItemRecordCreateArgs<ExtArgs>>): Prisma__ContentItemRecordClient<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentItemRecords.
     * @param {ContentItemRecordCreateManyArgs} args - Arguments to create many ContentItemRecords.
     * @example
     * // Create many ContentItemRecords
     * const contentItemRecord = await prisma.contentItemRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentItemRecordCreateManyArgs>(args?: SelectSubset<T, ContentItemRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentItemRecords and returns the data saved in the database.
     * @param {ContentItemRecordCreateManyAndReturnArgs} args - Arguments to create many ContentItemRecords.
     * @example
     * // Create many ContentItemRecords
     * const contentItemRecord = await prisma.contentItemRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentItemRecords and only return the `id`
     * const contentItemRecordWithIdOnly = await prisma.contentItemRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentItemRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentItemRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentItemRecord.
     * @param {ContentItemRecordDeleteArgs} args - Arguments to delete one ContentItemRecord.
     * @example
     * // Delete one ContentItemRecord
     * const ContentItemRecord = await prisma.contentItemRecord.delete({
     *   where: {
     *     // ... filter to delete one ContentItemRecord
     *   }
     * })
     * 
     */
    delete<T extends ContentItemRecordDeleteArgs>(args: SelectSubset<T, ContentItemRecordDeleteArgs<ExtArgs>>): Prisma__ContentItemRecordClient<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentItemRecord.
     * @param {ContentItemRecordUpdateArgs} args - Arguments to update one ContentItemRecord.
     * @example
     * // Update one ContentItemRecord
     * const contentItemRecord = await prisma.contentItemRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentItemRecordUpdateArgs>(args: SelectSubset<T, ContentItemRecordUpdateArgs<ExtArgs>>): Prisma__ContentItemRecordClient<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentItemRecords.
     * @param {ContentItemRecordDeleteManyArgs} args - Arguments to filter ContentItemRecords to delete.
     * @example
     * // Delete a few ContentItemRecords
     * const { count } = await prisma.contentItemRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentItemRecordDeleteManyArgs>(args?: SelectSubset<T, ContentItemRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentItemRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentItemRecords
     * const contentItemRecord = await prisma.contentItemRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentItemRecordUpdateManyArgs>(args: SelectSubset<T, ContentItemRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentItemRecords and returns the data updated in the database.
     * @param {ContentItemRecordUpdateManyAndReturnArgs} args - Arguments to update many ContentItemRecords.
     * @example
     * // Update many ContentItemRecords
     * const contentItemRecord = await prisma.contentItemRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentItemRecords and only return the `id`
     * const contentItemRecordWithIdOnly = await prisma.contentItemRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContentItemRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentItemRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentItemRecord.
     * @param {ContentItemRecordUpsertArgs} args - Arguments to update or create a ContentItemRecord.
     * @example
     * // Update or create a ContentItemRecord
     * const contentItemRecord = await prisma.contentItemRecord.upsert({
     *   create: {
     *     // ... data to create a ContentItemRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentItemRecord we want to update
     *   }
     * })
     */
    upsert<T extends ContentItemRecordUpsertArgs>(args: SelectSubset<T, ContentItemRecordUpsertArgs<ExtArgs>>): Prisma__ContentItemRecordClient<$Result.GetResult<Prisma.$ContentItemRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentItemRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemRecordCountArgs} args - Arguments to filter ContentItemRecords to count.
     * @example
     * // Count the number of ContentItemRecords
     * const count = await prisma.contentItemRecord.count({
     *   where: {
     *     // ... the filter for the ContentItemRecords we want to count
     *   }
     * })
    **/
    count<T extends ContentItemRecordCountArgs>(
      args?: Subset<T, ContentItemRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentItemRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentItemRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentItemRecordAggregateArgs>(args: Subset<T, ContentItemRecordAggregateArgs>): Prisma.PrismaPromise<GetContentItemRecordAggregateType<T>>

    /**
     * Group by ContentItemRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemRecordGroupByArgs} args - Group by arguments.
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
      T extends ContentItemRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentItemRecordGroupByArgs['orderBy'] }
        : { orderBy?: ContentItemRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentItemRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentItemRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentItemRecord model
   */
  readonly fields: ContentItemRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentItemRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentItemRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContentItemRecord model
   */
  interface ContentItemRecordFieldRefs {
    readonly id: FieldRef<"ContentItemRecord", 'String'>
    readonly createdAt: FieldRef<"ContentItemRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentItemRecord", 'DateTime'>
    readonly metadata: FieldRef<"ContentItemRecord", 'Json'>
    readonly title: FieldRef<"ContentItemRecord", 'String'>
    readonly summary: FieldRef<"ContentItemRecord", 'String'>
    readonly contentType: FieldRef<"ContentItemRecord", 'String'>
    readonly status: FieldRef<"ContentItemRecord", 'String'>
    readonly topicIds: FieldRef<"ContentItemRecord", 'String[]'>
    readonly skillIds: FieldRef<"ContentItemRecord", 'String[]'>
    readonly lessonId: FieldRef<"ContentItemRecord", 'String'>
    readonly assessmentId: FieldRef<"ContentItemRecord", 'String'>
    readonly projectId: FieldRef<"ContentItemRecord", 'String'>
    readonly authorUserId: FieldRef<"ContentItemRecord", 'String'>
    readonly sourceUrl: FieldRef<"ContentItemRecord", 'String'>
    readonly language: FieldRef<"ContentItemRecord", 'String'>
    readonly versionLabel: FieldRef<"ContentItemRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContentItemRecord findUnique
   */
  export type ContentItemRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * Filter, which ContentItemRecord to fetch.
     */
    where: ContentItemRecordWhereUniqueInput
  }

  /**
   * ContentItemRecord findUniqueOrThrow
   */
  export type ContentItemRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * Filter, which ContentItemRecord to fetch.
     */
    where: ContentItemRecordWhereUniqueInput
  }

  /**
   * ContentItemRecord findFirst
   */
  export type ContentItemRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * Filter, which ContentItemRecord to fetch.
     */
    where?: ContentItemRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItemRecords to fetch.
     */
    orderBy?: ContentItemRecordOrderByWithRelationInput | ContentItemRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentItemRecords.
     */
    cursor?: ContentItemRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItemRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItemRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentItemRecords.
     */
    distinct?: ContentItemRecordScalarFieldEnum | ContentItemRecordScalarFieldEnum[]
  }

  /**
   * ContentItemRecord findFirstOrThrow
   */
  export type ContentItemRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * Filter, which ContentItemRecord to fetch.
     */
    where?: ContentItemRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItemRecords to fetch.
     */
    orderBy?: ContentItemRecordOrderByWithRelationInput | ContentItemRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentItemRecords.
     */
    cursor?: ContentItemRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItemRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItemRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentItemRecords.
     */
    distinct?: ContentItemRecordScalarFieldEnum | ContentItemRecordScalarFieldEnum[]
  }

  /**
   * ContentItemRecord findMany
   */
  export type ContentItemRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * Filter, which ContentItemRecords to fetch.
     */
    where?: ContentItemRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItemRecords to fetch.
     */
    orderBy?: ContentItemRecordOrderByWithRelationInput | ContentItemRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentItemRecords.
     */
    cursor?: ContentItemRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItemRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItemRecords.
     */
    skip?: number
    distinct?: ContentItemRecordScalarFieldEnum | ContentItemRecordScalarFieldEnum[]
  }

  /**
   * ContentItemRecord create
   */
  export type ContentItemRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a ContentItemRecord.
     */
    data: XOR<ContentItemRecordCreateInput, ContentItemRecordUncheckedCreateInput>
  }

  /**
   * ContentItemRecord createMany
   */
  export type ContentItemRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentItemRecords.
     */
    data: ContentItemRecordCreateManyInput | ContentItemRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentItemRecord createManyAndReturn
   */
  export type ContentItemRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ContentItemRecords.
     */
    data: ContentItemRecordCreateManyInput | ContentItemRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentItemRecord update
   */
  export type ContentItemRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a ContentItemRecord.
     */
    data: XOR<ContentItemRecordUpdateInput, ContentItemRecordUncheckedUpdateInput>
    /**
     * Choose, which ContentItemRecord to update.
     */
    where: ContentItemRecordWhereUniqueInput
  }

  /**
   * ContentItemRecord updateMany
   */
  export type ContentItemRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentItemRecords.
     */
    data: XOR<ContentItemRecordUpdateManyMutationInput, ContentItemRecordUncheckedUpdateManyInput>
    /**
     * Filter which ContentItemRecords to update
     */
    where?: ContentItemRecordWhereInput
    /**
     * Limit how many ContentItemRecords to update.
     */
    limit?: number
  }

  /**
   * ContentItemRecord updateManyAndReturn
   */
  export type ContentItemRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * The data used to update ContentItemRecords.
     */
    data: XOR<ContentItemRecordUpdateManyMutationInput, ContentItemRecordUncheckedUpdateManyInput>
    /**
     * Filter which ContentItemRecords to update
     */
    where?: ContentItemRecordWhereInput
    /**
     * Limit how many ContentItemRecords to update.
     */
    limit?: number
  }

  /**
   * ContentItemRecord upsert
   */
  export type ContentItemRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the ContentItemRecord to update in case it exists.
     */
    where: ContentItemRecordWhereUniqueInput
    /**
     * In case the ContentItemRecord found by the `where` argument doesn't exist, create a new ContentItemRecord with this data.
     */
    create: XOR<ContentItemRecordCreateInput, ContentItemRecordUncheckedCreateInput>
    /**
     * In case the ContentItemRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentItemRecordUpdateInput, ContentItemRecordUncheckedUpdateInput>
  }

  /**
   * ContentItemRecord delete
   */
  export type ContentItemRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
    /**
     * Filter which ContentItemRecord to delete.
     */
    where: ContentItemRecordWhereUniqueInput
  }

  /**
   * ContentItemRecord deleteMany
   */
  export type ContentItemRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentItemRecords to delete
     */
    where?: ContentItemRecordWhereInput
    /**
     * Limit how many ContentItemRecords to delete.
     */
    limit?: number
  }

  /**
   * ContentItemRecord without action
   */
  export type ContentItemRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItemRecord
     */
    select?: ContentItemRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItemRecord
     */
    omit?: ContentItemRecordOmit<ExtArgs> | null
  }


  /**
   * Model TeachingMaterialRecord
   */

  export type AggregateTeachingMaterialRecord = {
    _count: TeachingMaterialRecordCountAggregateOutputType | null
    _min: TeachingMaterialRecordMinAggregateOutputType | null
    _max: TeachingMaterialRecordMaxAggregateOutputType | null
  }

  export type TeachingMaterialRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
    fileName: string | null
    mimeType: string | null
    materialKind: string | null
    status: string | null
    parsedText: string | null
    sourceUrl: string | null
  }

  export type TeachingMaterialRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
    fileName: string | null
    mimeType: string | null
    materialKind: string | null
    status: string | null
    parsedText: string | null
    sourceUrl: string | null
  }

  export type TeachingMaterialRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    teacherId: number
    fileName: number
    mimeType: number
    materialKind: number
    status: number
    parsedText: number
    parsedStructure: number
    sourceUrl: number
    _all: number
  }


  export type TeachingMaterialRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    fileName?: true
    mimeType?: true
    materialKind?: true
    status?: true
    parsedText?: true
    sourceUrl?: true
  }

  export type TeachingMaterialRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    fileName?: true
    mimeType?: true
    materialKind?: true
    status?: true
    parsedText?: true
    sourceUrl?: true
  }

  export type TeachingMaterialRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    teacherId?: true
    fileName?: true
    mimeType?: true
    materialKind?: true
    status?: true
    parsedText?: true
    parsedStructure?: true
    sourceUrl?: true
    _all?: true
  }

  export type TeachingMaterialRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingMaterialRecord to aggregate.
     */
    where?: TeachingMaterialRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingMaterialRecords to fetch.
     */
    orderBy?: TeachingMaterialRecordOrderByWithRelationInput | TeachingMaterialRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingMaterialRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingMaterialRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingMaterialRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingMaterialRecords
    **/
    _count?: true | TeachingMaterialRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingMaterialRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingMaterialRecordMaxAggregateInputType
  }

  export type GetTeachingMaterialRecordAggregateType<T extends TeachingMaterialRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingMaterialRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingMaterialRecord[P]>
      : GetScalarType<T[P], AggregateTeachingMaterialRecord[P]>
  }




  export type TeachingMaterialRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingMaterialRecordWhereInput
    orderBy?: TeachingMaterialRecordOrderByWithAggregationInput | TeachingMaterialRecordOrderByWithAggregationInput[]
    by: TeachingMaterialRecordScalarFieldEnum[] | TeachingMaterialRecordScalarFieldEnum
    having?: TeachingMaterialRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingMaterialRecordCountAggregateInputType | true
    _min?: TeachingMaterialRecordMinAggregateInputType
    _max?: TeachingMaterialRecordMaxAggregateInputType
  }

  export type TeachingMaterialRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    teacherId: string
    fileName: string
    mimeType: string
    materialKind: string
    status: string
    parsedText: string
    parsedStructure: JsonValue
    sourceUrl: string | null
    _count: TeachingMaterialRecordCountAggregateOutputType | null
    _min: TeachingMaterialRecordMinAggregateOutputType | null
    _max: TeachingMaterialRecordMaxAggregateOutputType | null
  }

  type GetTeachingMaterialRecordGroupByPayload<T extends TeachingMaterialRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingMaterialRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingMaterialRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingMaterialRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingMaterialRecordGroupByOutputType[P]>
        }
      >
    >


  export type TeachingMaterialRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    fileName?: boolean
    mimeType?: boolean
    materialKind?: boolean
    status?: boolean
    parsedText?: boolean
    parsedStructure?: boolean
    sourceUrl?: boolean
  }, ExtArgs["result"]["teachingMaterialRecord"]>

  export type TeachingMaterialRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    fileName?: boolean
    mimeType?: boolean
    materialKind?: boolean
    status?: boolean
    parsedText?: boolean
    parsedStructure?: boolean
    sourceUrl?: boolean
  }, ExtArgs["result"]["teachingMaterialRecord"]>

  export type TeachingMaterialRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    fileName?: boolean
    mimeType?: boolean
    materialKind?: boolean
    status?: boolean
    parsedText?: boolean
    parsedStructure?: boolean
    sourceUrl?: boolean
  }, ExtArgs["result"]["teachingMaterialRecord"]>

  export type TeachingMaterialRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    fileName?: boolean
    mimeType?: boolean
    materialKind?: boolean
    status?: boolean
    parsedText?: boolean
    parsedStructure?: boolean
    sourceUrl?: boolean
  }

  export type TeachingMaterialRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "teacherId" | "fileName" | "mimeType" | "materialKind" | "status" | "parsedText" | "parsedStructure" | "sourceUrl", ExtArgs["result"]["teachingMaterialRecord"]>

  export type $TeachingMaterialRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingMaterialRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      teacherId: string
      fileName: string
      mimeType: string
      materialKind: string
      status: string
      parsedText: string
      parsedStructure: Prisma.JsonValue
      sourceUrl: string | null
    }, ExtArgs["result"]["teachingMaterialRecord"]>
    composites: {}
  }

  type TeachingMaterialRecordGetPayload<S extends boolean | null | undefined | TeachingMaterialRecordDefaultArgs> = $Result.GetResult<Prisma.$TeachingMaterialRecordPayload, S>

  type TeachingMaterialRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingMaterialRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingMaterialRecordCountAggregateInputType | true
    }

  export interface TeachingMaterialRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingMaterialRecord'], meta: { name: 'TeachingMaterialRecord' } }
    /**
     * Find zero or one TeachingMaterialRecord that matches the filter.
     * @param {TeachingMaterialRecordFindUniqueArgs} args - Arguments to find a TeachingMaterialRecord
     * @example
     * // Get one TeachingMaterialRecord
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingMaterialRecordFindUniqueArgs>(args: SelectSubset<T, TeachingMaterialRecordFindUniqueArgs<ExtArgs>>): Prisma__TeachingMaterialRecordClient<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingMaterialRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingMaterialRecordFindUniqueOrThrowArgs} args - Arguments to find a TeachingMaterialRecord
     * @example
     * // Get one TeachingMaterialRecord
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingMaterialRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingMaterialRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingMaterialRecordClient<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingMaterialRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingMaterialRecordFindFirstArgs} args - Arguments to find a TeachingMaterialRecord
     * @example
     * // Get one TeachingMaterialRecord
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingMaterialRecordFindFirstArgs>(args?: SelectSubset<T, TeachingMaterialRecordFindFirstArgs<ExtArgs>>): Prisma__TeachingMaterialRecordClient<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingMaterialRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingMaterialRecordFindFirstOrThrowArgs} args - Arguments to find a TeachingMaterialRecord
     * @example
     * // Get one TeachingMaterialRecord
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingMaterialRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingMaterialRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingMaterialRecordClient<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingMaterialRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingMaterialRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingMaterialRecords
     * const teachingMaterialRecords = await prisma.teachingMaterialRecord.findMany()
     * 
     * // Get first 10 TeachingMaterialRecords
     * const teachingMaterialRecords = await prisma.teachingMaterialRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingMaterialRecordWithIdOnly = await prisma.teachingMaterialRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingMaterialRecordFindManyArgs>(args?: SelectSubset<T, TeachingMaterialRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingMaterialRecord.
     * @param {TeachingMaterialRecordCreateArgs} args - Arguments to create a TeachingMaterialRecord.
     * @example
     * // Create one TeachingMaterialRecord
     * const TeachingMaterialRecord = await prisma.teachingMaterialRecord.create({
     *   data: {
     *     // ... data to create a TeachingMaterialRecord
     *   }
     * })
     * 
     */
    create<T extends TeachingMaterialRecordCreateArgs>(args: SelectSubset<T, TeachingMaterialRecordCreateArgs<ExtArgs>>): Prisma__TeachingMaterialRecordClient<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingMaterialRecords.
     * @param {TeachingMaterialRecordCreateManyArgs} args - Arguments to create many TeachingMaterialRecords.
     * @example
     * // Create many TeachingMaterialRecords
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingMaterialRecordCreateManyArgs>(args?: SelectSubset<T, TeachingMaterialRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingMaterialRecords and returns the data saved in the database.
     * @param {TeachingMaterialRecordCreateManyAndReturnArgs} args - Arguments to create many TeachingMaterialRecords.
     * @example
     * // Create many TeachingMaterialRecords
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingMaterialRecords and only return the `id`
     * const teachingMaterialRecordWithIdOnly = await prisma.teachingMaterialRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingMaterialRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingMaterialRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingMaterialRecord.
     * @param {TeachingMaterialRecordDeleteArgs} args - Arguments to delete one TeachingMaterialRecord.
     * @example
     * // Delete one TeachingMaterialRecord
     * const TeachingMaterialRecord = await prisma.teachingMaterialRecord.delete({
     *   where: {
     *     // ... filter to delete one TeachingMaterialRecord
     *   }
     * })
     * 
     */
    delete<T extends TeachingMaterialRecordDeleteArgs>(args: SelectSubset<T, TeachingMaterialRecordDeleteArgs<ExtArgs>>): Prisma__TeachingMaterialRecordClient<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingMaterialRecord.
     * @param {TeachingMaterialRecordUpdateArgs} args - Arguments to update one TeachingMaterialRecord.
     * @example
     * // Update one TeachingMaterialRecord
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingMaterialRecordUpdateArgs>(args: SelectSubset<T, TeachingMaterialRecordUpdateArgs<ExtArgs>>): Prisma__TeachingMaterialRecordClient<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingMaterialRecords.
     * @param {TeachingMaterialRecordDeleteManyArgs} args - Arguments to filter TeachingMaterialRecords to delete.
     * @example
     * // Delete a few TeachingMaterialRecords
     * const { count } = await prisma.teachingMaterialRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingMaterialRecordDeleteManyArgs>(args?: SelectSubset<T, TeachingMaterialRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingMaterialRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingMaterialRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingMaterialRecords
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingMaterialRecordUpdateManyArgs>(args: SelectSubset<T, TeachingMaterialRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingMaterialRecords and returns the data updated in the database.
     * @param {TeachingMaterialRecordUpdateManyAndReturnArgs} args - Arguments to update many TeachingMaterialRecords.
     * @example
     * // Update many TeachingMaterialRecords
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingMaterialRecords and only return the `id`
     * const teachingMaterialRecordWithIdOnly = await prisma.teachingMaterialRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeachingMaterialRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingMaterialRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingMaterialRecord.
     * @param {TeachingMaterialRecordUpsertArgs} args - Arguments to update or create a TeachingMaterialRecord.
     * @example
     * // Update or create a TeachingMaterialRecord
     * const teachingMaterialRecord = await prisma.teachingMaterialRecord.upsert({
     *   create: {
     *     // ... data to create a TeachingMaterialRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingMaterialRecord we want to update
     *   }
     * })
     */
    upsert<T extends TeachingMaterialRecordUpsertArgs>(args: SelectSubset<T, TeachingMaterialRecordUpsertArgs<ExtArgs>>): Prisma__TeachingMaterialRecordClient<$Result.GetResult<Prisma.$TeachingMaterialRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingMaterialRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingMaterialRecordCountArgs} args - Arguments to filter TeachingMaterialRecords to count.
     * @example
     * // Count the number of TeachingMaterialRecords
     * const count = await prisma.teachingMaterialRecord.count({
     *   where: {
     *     // ... the filter for the TeachingMaterialRecords we want to count
     *   }
     * })
    **/
    count<T extends TeachingMaterialRecordCountArgs>(
      args?: Subset<T, TeachingMaterialRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingMaterialRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingMaterialRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingMaterialRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeachingMaterialRecordAggregateArgs>(args: Subset<T, TeachingMaterialRecordAggregateArgs>): Prisma.PrismaPromise<GetTeachingMaterialRecordAggregateType<T>>

    /**
     * Group by TeachingMaterialRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingMaterialRecordGroupByArgs} args - Group by arguments.
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
      T extends TeachingMaterialRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingMaterialRecordGroupByArgs['orderBy'] }
        : { orderBy?: TeachingMaterialRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeachingMaterialRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingMaterialRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingMaterialRecord model
   */
  readonly fields: TeachingMaterialRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingMaterialRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingMaterialRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TeachingMaterialRecord model
   */
  interface TeachingMaterialRecordFieldRefs {
    readonly id: FieldRef<"TeachingMaterialRecord", 'String'>
    readonly createdAt: FieldRef<"TeachingMaterialRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"TeachingMaterialRecord", 'DateTime'>
    readonly metadata: FieldRef<"TeachingMaterialRecord", 'Json'>
    readonly teacherId: FieldRef<"TeachingMaterialRecord", 'String'>
    readonly fileName: FieldRef<"TeachingMaterialRecord", 'String'>
    readonly mimeType: FieldRef<"TeachingMaterialRecord", 'String'>
    readonly materialKind: FieldRef<"TeachingMaterialRecord", 'String'>
    readonly status: FieldRef<"TeachingMaterialRecord", 'String'>
    readonly parsedText: FieldRef<"TeachingMaterialRecord", 'String'>
    readonly parsedStructure: FieldRef<"TeachingMaterialRecord", 'Json'>
    readonly sourceUrl: FieldRef<"TeachingMaterialRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeachingMaterialRecord findUnique
   */
  export type TeachingMaterialRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingMaterialRecord to fetch.
     */
    where: TeachingMaterialRecordWhereUniqueInput
  }

  /**
   * TeachingMaterialRecord findUniqueOrThrow
   */
  export type TeachingMaterialRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingMaterialRecord to fetch.
     */
    where: TeachingMaterialRecordWhereUniqueInput
  }

  /**
   * TeachingMaterialRecord findFirst
   */
  export type TeachingMaterialRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingMaterialRecord to fetch.
     */
    where?: TeachingMaterialRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingMaterialRecords to fetch.
     */
    orderBy?: TeachingMaterialRecordOrderByWithRelationInput | TeachingMaterialRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingMaterialRecords.
     */
    cursor?: TeachingMaterialRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingMaterialRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingMaterialRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingMaterialRecords.
     */
    distinct?: TeachingMaterialRecordScalarFieldEnum | TeachingMaterialRecordScalarFieldEnum[]
  }

  /**
   * TeachingMaterialRecord findFirstOrThrow
   */
  export type TeachingMaterialRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingMaterialRecord to fetch.
     */
    where?: TeachingMaterialRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingMaterialRecords to fetch.
     */
    orderBy?: TeachingMaterialRecordOrderByWithRelationInput | TeachingMaterialRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingMaterialRecords.
     */
    cursor?: TeachingMaterialRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingMaterialRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingMaterialRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingMaterialRecords.
     */
    distinct?: TeachingMaterialRecordScalarFieldEnum | TeachingMaterialRecordScalarFieldEnum[]
  }

  /**
   * TeachingMaterialRecord findMany
   */
  export type TeachingMaterialRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingMaterialRecords to fetch.
     */
    where?: TeachingMaterialRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingMaterialRecords to fetch.
     */
    orderBy?: TeachingMaterialRecordOrderByWithRelationInput | TeachingMaterialRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingMaterialRecords.
     */
    cursor?: TeachingMaterialRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingMaterialRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingMaterialRecords.
     */
    skip?: number
    distinct?: TeachingMaterialRecordScalarFieldEnum | TeachingMaterialRecordScalarFieldEnum[]
  }

  /**
   * TeachingMaterialRecord create
   */
  export type TeachingMaterialRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a TeachingMaterialRecord.
     */
    data: XOR<TeachingMaterialRecordCreateInput, TeachingMaterialRecordUncheckedCreateInput>
  }

  /**
   * TeachingMaterialRecord createMany
   */
  export type TeachingMaterialRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingMaterialRecords.
     */
    data: TeachingMaterialRecordCreateManyInput | TeachingMaterialRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingMaterialRecord createManyAndReturn
   */
  export type TeachingMaterialRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingMaterialRecords.
     */
    data: TeachingMaterialRecordCreateManyInput | TeachingMaterialRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingMaterialRecord update
   */
  export type TeachingMaterialRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a TeachingMaterialRecord.
     */
    data: XOR<TeachingMaterialRecordUpdateInput, TeachingMaterialRecordUncheckedUpdateInput>
    /**
     * Choose, which TeachingMaterialRecord to update.
     */
    where: TeachingMaterialRecordWhereUniqueInput
  }

  /**
   * TeachingMaterialRecord updateMany
   */
  export type TeachingMaterialRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingMaterialRecords.
     */
    data: XOR<TeachingMaterialRecordUpdateManyMutationInput, TeachingMaterialRecordUncheckedUpdateManyInput>
    /**
     * Filter which TeachingMaterialRecords to update
     */
    where?: TeachingMaterialRecordWhereInput
    /**
     * Limit how many TeachingMaterialRecords to update.
     */
    limit?: number
  }

  /**
   * TeachingMaterialRecord updateManyAndReturn
   */
  export type TeachingMaterialRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * The data used to update TeachingMaterialRecords.
     */
    data: XOR<TeachingMaterialRecordUpdateManyMutationInput, TeachingMaterialRecordUncheckedUpdateManyInput>
    /**
     * Filter which TeachingMaterialRecords to update
     */
    where?: TeachingMaterialRecordWhereInput
    /**
     * Limit how many TeachingMaterialRecords to update.
     */
    limit?: number
  }

  /**
   * TeachingMaterialRecord upsert
   */
  export type TeachingMaterialRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the TeachingMaterialRecord to update in case it exists.
     */
    where: TeachingMaterialRecordWhereUniqueInput
    /**
     * In case the TeachingMaterialRecord found by the `where` argument doesn't exist, create a new TeachingMaterialRecord with this data.
     */
    create: XOR<TeachingMaterialRecordCreateInput, TeachingMaterialRecordUncheckedCreateInput>
    /**
     * In case the TeachingMaterialRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingMaterialRecordUpdateInput, TeachingMaterialRecordUncheckedUpdateInput>
  }

  /**
   * TeachingMaterialRecord delete
   */
  export type TeachingMaterialRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
    /**
     * Filter which TeachingMaterialRecord to delete.
     */
    where: TeachingMaterialRecordWhereUniqueInput
  }

  /**
   * TeachingMaterialRecord deleteMany
   */
  export type TeachingMaterialRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingMaterialRecords to delete
     */
    where?: TeachingMaterialRecordWhereInput
    /**
     * Limit how many TeachingMaterialRecords to delete.
     */
    limit?: number
  }

  /**
   * TeachingMaterialRecord without action
   */
  export type TeachingMaterialRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingMaterialRecord
     */
    select?: TeachingMaterialRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingMaterialRecord
     */
    omit?: TeachingMaterialRecordOmit<ExtArgs> | null
  }


  /**
   * Model TeachingModuleRecord
   */

  export type AggregateTeachingModuleRecord = {
    _count: TeachingModuleRecordCountAggregateOutputType | null
    _min: TeachingModuleRecordMinAggregateOutputType | null
    _max: TeachingModuleRecordMaxAggregateOutputType | null
  }

  export type TeachingModuleRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
    materialId: string | null
    title: string | null
    summary: string | null
    status: string | null
  }

  export type TeachingModuleRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
    materialId: string | null
    title: string | null
    summary: string | null
    status: string | null
  }

  export type TeachingModuleRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    teacherId: number
    materialId: number
    title: number
    summary: number
    status: number
    conceptNodeIds: number
    lessonIds: number
    sections: number
    suggestedTopicTitles: number
    _all: number
  }


  export type TeachingModuleRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    materialId?: true
    title?: true
    summary?: true
    status?: true
  }

  export type TeachingModuleRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    materialId?: true
    title?: true
    summary?: true
    status?: true
  }

  export type TeachingModuleRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    teacherId?: true
    materialId?: true
    title?: true
    summary?: true
    status?: true
    conceptNodeIds?: true
    lessonIds?: true
    sections?: true
    suggestedTopicTitles?: true
    _all?: true
  }

  export type TeachingModuleRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingModuleRecord to aggregate.
     */
    where?: TeachingModuleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingModuleRecords to fetch.
     */
    orderBy?: TeachingModuleRecordOrderByWithRelationInput | TeachingModuleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingModuleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingModuleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingModuleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingModuleRecords
    **/
    _count?: true | TeachingModuleRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingModuleRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingModuleRecordMaxAggregateInputType
  }

  export type GetTeachingModuleRecordAggregateType<T extends TeachingModuleRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingModuleRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingModuleRecord[P]>
      : GetScalarType<T[P], AggregateTeachingModuleRecord[P]>
  }




  export type TeachingModuleRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingModuleRecordWhereInput
    orderBy?: TeachingModuleRecordOrderByWithAggregationInput | TeachingModuleRecordOrderByWithAggregationInput[]
    by: TeachingModuleRecordScalarFieldEnum[] | TeachingModuleRecordScalarFieldEnum
    having?: TeachingModuleRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingModuleRecordCountAggregateInputType | true
    _min?: TeachingModuleRecordMinAggregateInputType
    _max?: TeachingModuleRecordMaxAggregateInputType
  }

  export type TeachingModuleRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    teacherId: string
    materialId: string | null
    title: string
    summary: string | null
    status: string
    conceptNodeIds: string[]
    lessonIds: string[]
    sections: JsonValue
    suggestedTopicTitles: string[]
    _count: TeachingModuleRecordCountAggregateOutputType | null
    _min: TeachingModuleRecordMinAggregateOutputType | null
    _max: TeachingModuleRecordMaxAggregateOutputType | null
  }

  type GetTeachingModuleRecordGroupByPayload<T extends TeachingModuleRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingModuleRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingModuleRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingModuleRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingModuleRecordGroupByOutputType[P]>
        }
      >
    >


  export type TeachingModuleRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    materialId?: boolean
    title?: boolean
    summary?: boolean
    status?: boolean
    conceptNodeIds?: boolean
    lessonIds?: boolean
    sections?: boolean
    suggestedTopicTitles?: boolean
  }, ExtArgs["result"]["teachingModuleRecord"]>

  export type TeachingModuleRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    materialId?: boolean
    title?: boolean
    summary?: boolean
    status?: boolean
    conceptNodeIds?: boolean
    lessonIds?: boolean
    sections?: boolean
    suggestedTopicTitles?: boolean
  }, ExtArgs["result"]["teachingModuleRecord"]>

  export type TeachingModuleRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    materialId?: boolean
    title?: boolean
    summary?: boolean
    status?: boolean
    conceptNodeIds?: boolean
    lessonIds?: boolean
    sections?: boolean
    suggestedTopicTitles?: boolean
  }, ExtArgs["result"]["teachingModuleRecord"]>

  export type TeachingModuleRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    materialId?: boolean
    title?: boolean
    summary?: boolean
    status?: boolean
    conceptNodeIds?: boolean
    lessonIds?: boolean
    sections?: boolean
    suggestedTopicTitles?: boolean
  }

  export type TeachingModuleRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "teacherId" | "materialId" | "title" | "summary" | "status" | "conceptNodeIds" | "lessonIds" | "sections" | "suggestedTopicTitles", ExtArgs["result"]["teachingModuleRecord"]>

  export type $TeachingModuleRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingModuleRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      teacherId: string
      materialId: string | null
      title: string
      summary: string | null
      status: string
      conceptNodeIds: string[]
      lessonIds: string[]
      sections: Prisma.JsonValue
      suggestedTopicTitles: string[]
    }, ExtArgs["result"]["teachingModuleRecord"]>
    composites: {}
  }

  type TeachingModuleRecordGetPayload<S extends boolean | null | undefined | TeachingModuleRecordDefaultArgs> = $Result.GetResult<Prisma.$TeachingModuleRecordPayload, S>

  type TeachingModuleRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingModuleRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingModuleRecordCountAggregateInputType | true
    }

  export interface TeachingModuleRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingModuleRecord'], meta: { name: 'TeachingModuleRecord' } }
    /**
     * Find zero or one TeachingModuleRecord that matches the filter.
     * @param {TeachingModuleRecordFindUniqueArgs} args - Arguments to find a TeachingModuleRecord
     * @example
     * // Get one TeachingModuleRecord
     * const teachingModuleRecord = await prisma.teachingModuleRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingModuleRecordFindUniqueArgs>(args: SelectSubset<T, TeachingModuleRecordFindUniqueArgs<ExtArgs>>): Prisma__TeachingModuleRecordClient<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingModuleRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingModuleRecordFindUniqueOrThrowArgs} args - Arguments to find a TeachingModuleRecord
     * @example
     * // Get one TeachingModuleRecord
     * const teachingModuleRecord = await prisma.teachingModuleRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingModuleRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingModuleRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingModuleRecordClient<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingModuleRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingModuleRecordFindFirstArgs} args - Arguments to find a TeachingModuleRecord
     * @example
     * // Get one TeachingModuleRecord
     * const teachingModuleRecord = await prisma.teachingModuleRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingModuleRecordFindFirstArgs>(args?: SelectSubset<T, TeachingModuleRecordFindFirstArgs<ExtArgs>>): Prisma__TeachingModuleRecordClient<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingModuleRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingModuleRecordFindFirstOrThrowArgs} args - Arguments to find a TeachingModuleRecord
     * @example
     * // Get one TeachingModuleRecord
     * const teachingModuleRecord = await prisma.teachingModuleRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingModuleRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingModuleRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingModuleRecordClient<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingModuleRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingModuleRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingModuleRecords
     * const teachingModuleRecords = await prisma.teachingModuleRecord.findMany()
     * 
     * // Get first 10 TeachingModuleRecords
     * const teachingModuleRecords = await prisma.teachingModuleRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingModuleRecordWithIdOnly = await prisma.teachingModuleRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingModuleRecordFindManyArgs>(args?: SelectSubset<T, TeachingModuleRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingModuleRecord.
     * @param {TeachingModuleRecordCreateArgs} args - Arguments to create a TeachingModuleRecord.
     * @example
     * // Create one TeachingModuleRecord
     * const TeachingModuleRecord = await prisma.teachingModuleRecord.create({
     *   data: {
     *     // ... data to create a TeachingModuleRecord
     *   }
     * })
     * 
     */
    create<T extends TeachingModuleRecordCreateArgs>(args: SelectSubset<T, TeachingModuleRecordCreateArgs<ExtArgs>>): Prisma__TeachingModuleRecordClient<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingModuleRecords.
     * @param {TeachingModuleRecordCreateManyArgs} args - Arguments to create many TeachingModuleRecords.
     * @example
     * // Create many TeachingModuleRecords
     * const teachingModuleRecord = await prisma.teachingModuleRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingModuleRecordCreateManyArgs>(args?: SelectSubset<T, TeachingModuleRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingModuleRecords and returns the data saved in the database.
     * @param {TeachingModuleRecordCreateManyAndReturnArgs} args - Arguments to create many TeachingModuleRecords.
     * @example
     * // Create many TeachingModuleRecords
     * const teachingModuleRecord = await prisma.teachingModuleRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingModuleRecords and only return the `id`
     * const teachingModuleRecordWithIdOnly = await prisma.teachingModuleRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingModuleRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingModuleRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingModuleRecord.
     * @param {TeachingModuleRecordDeleteArgs} args - Arguments to delete one TeachingModuleRecord.
     * @example
     * // Delete one TeachingModuleRecord
     * const TeachingModuleRecord = await prisma.teachingModuleRecord.delete({
     *   where: {
     *     // ... filter to delete one TeachingModuleRecord
     *   }
     * })
     * 
     */
    delete<T extends TeachingModuleRecordDeleteArgs>(args: SelectSubset<T, TeachingModuleRecordDeleteArgs<ExtArgs>>): Prisma__TeachingModuleRecordClient<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingModuleRecord.
     * @param {TeachingModuleRecordUpdateArgs} args - Arguments to update one TeachingModuleRecord.
     * @example
     * // Update one TeachingModuleRecord
     * const teachingModuleRecord = await prisma.teachingModuleRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingModuleRecordUpdateArgs>(args: SelectSubset<T, TeachingModuleRecordUpdateArgs<ExtArgs>>): Prisma__TeachingModuleRecordClient<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingModuleRecords.
     * @param {TeachingModuleRecordDeleteManyArgs} args - Arguments to filter TeachingModuleRecords to delete.
     * @example
     * // Delete a few TeachingModuleRecords
     * const { count } = await prisma.teachingModuleRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingModuleRecordDeleteManyArgs>(args?: SelectSubset<T, TeachingModuleRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingModuleRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingModuleRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingModuleRecords
     * const teachingModuleRecord = await prisma.teachingModuleRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingModuleRecordUpdateManyArgs>(args: SelectSubset<T, TeachingModuleRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingModuleRecords and returns the data updated in the database.
     * @param {TeachingModuleRecordUpdateManyAndReturnArgs} args - Arguments to update many TeachingModuleRecords.
     * @example
     * // Update many TeachingModuleRecords
     * const teachingModuleRecord = await prisma.teachingModuleRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingModuleRecords and only return the `id`
     * const teachingModuleRecordWithIdOnly = await prisma.teachingModuleRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeachingModuleRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingModuleRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingModuleRecord.
     * @param {TeachingModuleRecordUpsertArgs} args - Arguments to update or create a TeachingModuleRecord.
     * @example
     * // Update or create a TeachingModuleRecord
     * const teachingModuleRecord = await prisma.teachingModuleRecord.upsert({
     *   create: {
     *     // ... data to create a TeachingModuleRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingModuleRecord we want to update
     *   }
     * })
     */
    upsert<T extends TeachingModuleRecordUpsertArgs>(args: SelectSubset<T, TeachingModuleRecordUpsertArgs<ExtArgs>>): Prisma__TeachingModuleRecordClient<$Result.GetResult<Prisma.$TeachingModuleRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingModuleRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingModuleRecordCountArgs} args - Arguments to filter TeachingModuleRecords to count.
     * @example
     * // Count the number of TeachingModuleRecords
     * const count = await prisma.teachingModuleRecord.count({
     *   where: {
     *     // ... the filter for the TeachingModuleRecords we want to count
     *   }
     * })
    **/
    count<T extends TeachingModuleRecordCountArgs>(
      args?: Subset<T, TeachingModuleRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingModuleRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingModuleRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingModuleRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeachingModuleRecordAggregateArgs>(args: Subset<T, TeachingModuleRecordAggregateArgs>): Prisma.PrismaPromise<GetTeachingModuleRecordAggregateType<T>>

    /**
     * Group by TeachingModuleRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingModuleRecordGroupByArgs} args - Group by arguments.
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
      T extends TeachingModuleRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingModuleRecordGroupByArgs['orderBy'] }
        : { orderBy?: TeachingModuleRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeachingModuleRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingModuleRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingModuleRecord model
   */
  readonly fields: TeachingModuleRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingModuleRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingModuleRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TeachingModuleRecord model
   */
  interface TeachingModuleRecordFieldRefs {
    readonly id: FieldRef<"TeachingModuleRecord", 'String'>
    readonly createdAt: FieldRef<"TeachingModuleRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"TeachingModuleRecord", 'DateTime'>
    readonly metadata: FieldRef<"TeachingModuleRecord", 'Json'>
    readonly teacherId: FieldRef<"TeachingModuleRecord", 'String'>
    readonly materialId: FieldRef<"TeachingModuleRecord", 'String'>
    readonly title: FieldRef<"TeachingModuleRecord", 'String'>
    readonly summary: FieldRef<"TeachingModuleRecord", 'String'>
    readonly status: FieldRef<"TeachingModuleRecord", 'String'>
    readonly conceptNodeIds: FieldRef<"TeachingModuleRecord", 'String[]'>
    readonly lessonIds: FieldRef<"TeachingModuleRecord", 'String[]'>
    readonly sections: FieldRef<"TeachingModuleRecord", 'Json'>
    readonly suggestedTopicTitles: FieldRef<"TeachingModuleRecord", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * TeachingModuleRecord findUnique
   */
  export type TeachingModuleRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingModuleRecord to fetch.
     */
    where: TeachingModuleRecordWhereUniqueInput
  }

  /**
   * TeachingModuleRecord findUniqueOrThrow
   */
  export type TeachingModuleRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingModuleRecord to fetch.
     */
    where: TeachingModuleRecordWhereUniqueInput
  }

  /**
   * TeachingModuleRecord findFirst
   */
  export type TeachingModuleRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingModuleRecord to fetch.
     */
    where?: TeachingModuleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingModuleRecords to fetch.
     */
    orderBy?: TeachingModuleRecordOrderByWithRelationInput | TeachingModuleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingModuleRecords.
     */
    cursor?: TeachingModuleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingModuleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingModuleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingModuleRecords.
     */
    distinct?: TeachingModuleRecordScalarFieldEnum | TeachingModuleRecordScalarFieldEnum[]
  }

  /**
   * TeachingModuleRecord findFirstOrThrow
   */
  export type TeachingModuleRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingModuleRecord to fetch.
     */
    where?: TeachingModuleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingModuleRecords to fetch.
     */
    orderBy?: TeachingModuleRecordOrderByWithRelationInput | TeachingModuleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingModuleRecords.
     */
    cursor?: TeachingModuleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingModuleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingModuleRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingModuleRecords.
     */
    distinct?: TeachingModuleRecordScalarFieldEnum | TeachingModuleRecordScalarFieldEnum[]
  }

  /**
   * TeachingModuleRecord findMany
   */
  export type TeachingModuleRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingModuleRecords to fetch.
     */
    where?: TeachingModuleRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingModuleRecords to fetch.
     */
    orderBy?: TeachingModuleRecordOrderByWithRelationInput | TeachingModuleRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingModuleRecords.
     */
    cursor?: TeachingModuleRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingModuleRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingModuleRecords.
     */
    skip?: number
    distinct?: TeachingModuleRecordScalarFieldEnum | TeachingModuleRecordScalarFieldEnum[]
  }

  /**
   * TeachingModuleRecord create
   */
  export type TeachingModuleRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a TeachingModuleRecord.
     */
    data: XOR<TeachingModuleRecordCreateInput, TeachingModuleRecordUncheckedCreateInput>
  }

  /**
   * TeachingModuleRecord createMany
   */
  export type TeachingModuleRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingModuleRecords.
     */
    data: TeachingModuleRecordCreateManyInput | TeachingModuleRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingModuleRecord createManyAndReturn
   */
  export type TeachingModuleRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingModuleRecords.
     */
    data: TeachingModuleRecordCreateManyInput | TeachingModuleRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingModuleRecord update
   */
  export type TeachingModuleRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a TeachingModuleRecord.
     */
    data: XOR<TeachingModuleRecordUpdateInput, TeachingModuleRecordUncheckedUpdateInput>
    /**
     * Choose, which TeachingModuleRecord to update.
     */
    where: TeachingModuleRecordWhereUniqueInput
  }

  /**
   * TeachingModuleRecord updateMany
   */
  export type TeachingModuleRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingModuleRecords.
     */
    data: XOR<TeachingModuleRecordUpdateManyMutationInput, TeachingModuleRecordUncheckedUpdateManyInput>
    /**
     * Filter which TeachingModuleRecords to update
     */
    where?: TeachingModuleRecordWhereInput
    /**
     * Limit how many TeachingModuleRecords to update.
     */
    limit?: number
  }

  /**
   * TeachingModuleRecord updateManyAndReturn
   */
  export type TeachingModuleRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * The data used to update TeachingModuleRecords.
     */
    data: XOR<TeachingModuleRecordUpdateManyMutationInput, TeachingModuleRecordUncheckedUpdateManyInput>
    /**
     * Filter which TeachingModuleRecords to update
     */
    where?: TeachingModuleRecordWhereInput
    /**
     * Limit how many TeachingModuleRecords to update.
     */
    limit?: number
  }

  /**
   * TeachingModuleRecord upsert
   */
  export type TeachingModuleRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the TeachingModuleRecord to update in case it exists.
     */
    where: TeachingModuleRecordWhereUniqueInput
    /**
     * In case the TeachingModuleRecord found by the `where` argument doesn't exist, create a new TeachingModuleRecord with this data.
     */
    create: XOR<TeachingModuleRecordCreateInput, TeachingModuleRecordUncheckedCreateInput>
    /**
     * In case the TeachingModuleRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingModuleRecordUpdateInput, TeachingModuleRecordUncheckedUpdateInput>
  }

  /**
   * TeachingModuleRecord delete
   */
  export type TeachingModuleRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
    /**
     * Filter which TeachingModuleRecord to delete.
     */
    where: TeachingModuleRecordWhereUniqueInput
  }

  /**
   * TeachingModuleRecord deleteMany
   */
  export type TeachingModuleRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingModuleRecords to delete
     */
    where?: TeachingModuleRecordWhereInput
    /**
     * Limit how many TeachingModuleRecords to delete.
     */
    limit?: number
  }

  /**
   * TeachingModuleRecord without action
   */
  export type TeachingModuleRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingModuleRecord
     */
    select?: TeachingModuleRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingModuleRecord
     */
    omit?: TeachingModuleRecordOmit<ExtArgs> | null
  }


  /**
   * Model TeachingQuizRecord
   */

  export type AggregateTeachingQuizRecord = {
    _count: TeachingQuizRecordCountAggregateOutputType | null
    _min: TeachingQuizRecordMinAggregateOutputType | null
    _max: TeachingQuizRecordMaxAggregateOutputType | null
  }

  export type TeachingQuizRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
    moduleId: string | null
    lessonId: string | null
    title: string | null
    summary: string | null
  }

  export type TeachingQuizRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
    moduleId: string | null
    lessonId: string | null
    title: string | null
    summary: string | null
  }

  export type TeachingQuizRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    teacherId: number
    moduleId: number
    lessonId: number
    title: number
    summary: number
    questions: number
    _all: number
  }


  export type TeachingQuizRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    moduleId?: true
    lessonId?: true
    title?: true
    summary?: true
  }

  export type TeachingQuizRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    moduleId?: true
    lessonId?: true
    title?: true
    summary?: true
  }

  export type TeachingQuizRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    teacherId?: true
    moduleId?: true
    lessonId?: true
    title?: true
    summary?: true
    questions?: true
    _all?: true
  }

  export type TeachingQuizRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingQuizRecord to aggregate.
     */
    where?: TeachingQuizRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingQuizRecords to fetch.
     */
    orderBy?: TeachingQuizRecordOrderByWithRelationInput | TeachingQuizRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingQuizRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingQuizRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingQuizRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingQuizRecords
    **/
    _count?: true | TeachingQuizRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingQuizRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingQuizRecordMaxAggregateInputType
  }

  export type GetTeachingQuizRecordAggregateType<T extends TeachingQuizRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingQuizRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingQuizRecord[P]>
      : GetScalarType<T[P], AggregateTeachingQuizRecord[P]>
  }




  export type TeachingQuizRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingQuizRecordWhereInput
    orderBy?: TeachingQuizRecordOrderByWithAggregationInput | TeachingQuizRecordOrderByWithAggregationInput[]
    by: TeachingQuizRecordScalarFieldEnum[] | TeachingQuizRecordScalarFieldEnum
    having?: TeachingQuizRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingQuizRecordCountAggregateInputType | true
    _min?: TeachingQuizRecordMinAggregateInputType
    _max?: TeachingQuizRecordMaxAggregateInputType
  }

  export type TeachingQuizRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    teacherId: string
    moduleId: string | null
    lessonId: string | null
    title: string
    summary: string | null
    questions: JsonValue
    _count: TeachingQuizRecordCountAggregateOutputType | null
    _min: TeachingQuizRecordMinAggregateOutputType | null
    _max: TeachingQuizRecordMaxAggregateOutputType | null
  }

  type GetTeachingQuizRecordGroupByPayload<T extends TeachingQuizRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingQuizRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingQuizRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingQuizRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingQuizRecordGroupByOutputType[P]>
        }
      >
    >


  export type TeachingQuizRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    moduleId?: boolean
    lessonId?: boolean
    title?: boolean
    summary?: boolean
    questions?: boolean
  }, ExtArgs["result"]["teachingQuizRecord"]>

  export type TeachingQuizRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    moduleId?: boolean
    lessonId?: boolean
    title?: boolean
    summary?: boolean
    questions?: boolean
  }, ExtArgs["result"]["teachingQuizRecord"]>

  export type TeachingQuizRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    moduleId?: boolean
    lessonId?: boolean
    title?: boolean
    summary?: boolean
    questions?: boolean
  }, ExtArgs["result"]["teachingQuizRecord"]>

  export type TeachingQuizRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    moduleId?: boolean
    lessonId?: boolean
    title?: boolean
    summary?: boolean
    questions?: boolean
  }

  export type TeachingQuizRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "teacherId" | "moduleId" | "lessonId" | "title" | "summary" | "questions", ExtArgs["result"]["teachingQuizRecord"]>

  export type $TeachingQuizRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingQuizRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      teacherId: string
      moduleId: string | null
      lessonId: string | null
      title: string
      summary: string | null
      questions: Prisma.JsonValue
    }, ExtArgs["result"]["teachingQuizRecord"]>
    composites: {}
  }

  type TeachingQuizRecordGetPayload<S extends boolean | null | undefined | TeachingQuizRecordDefaultArgs> = $Result.GetResult<Prisma.$TeachingQuizRecordPayload, S>

  type TeachingQuizRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingQuizRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingQuizRecordCountAggregateInputType | true
    }

  export interface TeachingQuizRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingQuizRecord'], meta: { name: 'TeachingQuizRecord' } }
    /**
     * Find zero or one TeachingQuizRecord that matches the filter.
     * @param {TeachingQuizRecordFindUniqueArgs} args - Arguments to find a TeachingQuizRecord
     * @example
     * // Get one TeachingQuizRecord
     * const teachingQuizRecord = await prisma.teachingQuizRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingQuizRecordFindUniqueArgs>(args: SelectSubset<T, TeachingQuizRecordFindUniqueArgs<ExtArgs>>): Prisma__TeachingQuizRecordClient<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingQuizRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingQuizRecordFindUniqueOrThrowArgs} args - Arguments to find a TeachingQuizRecord
     * @example
     * // Get one TeachingQuizRecord
     * const teachingQuizRecord = await prisma.teachingQuizRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingQuizRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingQuizRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingQuizRecordClient<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingQuizRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingQuizRecordFindFirstArgs} args - Arguments to find a TeachingQuizRecord
     * @example
     * // Get one TeachingQuizRecord
     * const teachingQuizRecord = await prisma.teachingQuizRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingQuizRecordFindFirstArgs>(args?: SelectSubset<T, TeachingQuizRecordFindFirstArgs<ExtArgs>>): Prisma__TeachingQuizRecordClient<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingQuizRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingQuizRecordFindFirstOrThrowArgs} args - Arguments to find a TeachingQuizRecord
     * @example
     * // Get one TeachingQuizRecord
     * const teachingQuizRecord = await prisma.teachingQuizRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingQuizRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingQuizRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingQuizRecordClient<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingQuizRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingQuizRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingQuizRecords
     * const teachingQuizRecords = await prisma.teachingQuizRecord.findMany()
     * 
     * // Get first 10 TeachingQuizRecords
     * const teachingQuizRecords = await prisma.teachingQuizRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingQuizRecordWithIdOnly = await prisma.teachingQuizRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingQuizRecordFindManyArgs>(args?: SelectSubset<T, TeachingQuizRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingQuizRecord.
     * @param {TeachingQuizRecordCreateArgs} args - Arguments to create a TeachingQuizRecord.
     * @example
     * // Create one TeachingQuizRecord
     * const TeachingQuizRecord = await prisma.teachingQuizRecord.create({
     *   data: {
     *     // ... data to create a TeachingQuizRecord
     *   }
     * })
     * 
     */
    create<T extends TeachingQuizRecordCreateArgs>(args: SelectSubset<T, TeachingQuizRecordCreateArgs<ExtArgs>>): Prisma__TeachingQuizRecordClient<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingQuizRecords.
     * @param {TeachingQuizRecordCreateManyArgs} args - Arguments to create many TeachingQuizRecords.
     * @example
     * // Create many TeachingQuizRecords
     * const teachingQuizRecord = await prisma.teachingQuizRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingQuizRecordCreateManyArgs>(args?: SelectSubset<T, TeachingQuizRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingQuizRecords and returns the data saved in the database.
     * @param {TeachingQuizRecordCreateManyAndReturnArgs} args - Arguments to create many TeachingQuizRecords.
     * @example
     * // Create many TeachingQuizRecords
     * const teachingQuizRecord = await prisma.teachingQuizRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingQuizRecords and only return the `id`
     * const teachingQuizRecordWithIdOnly = await prisma.teachingQuizRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingQuizRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingQuizRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingQuizRecord.
     * @param {TeachingQuizRecordDeleteArgs} args - Arguments to delete one TeachingQuizRecord.
     * @example
     * // Delete one TeachingQuizRecord
     * const TeachingQuizRecord = await prisma.teachingQuizRecord.delete({
     *   where: {
     *     // ... filter to delete one TeachingQuizRecord
     *   }
     * })
     * 
     */
    delete<T extends TeachingQuizRecordDeleteArgs>(args: SelectSubset<T, TeachingQuizRecordDeleteArgs<ExtArgs>>): Prisma__TeachingQuizRecordClient<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingQuizRecord.
     * @param {TeachingQuizRecordUpdateArgs} args - Arguments to update one TeachingQuizRecord.
     * @example
     * // Update one TeachingQuizRecord
     * const teachingQuizRecord = await prisma.teachingQuizRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingQuizRecordUpdateArgs>(args: SelectSubset<T, TeachingQuizRecordUpdateArgs<ExtArgs>>): Prisma__TeachingQuizRecordClient<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingQuizRecords.
     * @param {TeachingQuizRecordDeleteManyArgs} args - Arguments to filter TeachingQuizRecords to delete.
     * @example
     * // Delete a few TeachingQuizRecords
     * const { count } = await prisma.teachingQuizRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingQuizRecordDeleteManyArgs>(args?: SelectSubset<T, TeachingQuizRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingQuizRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingQuizRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingQuizRecords
     * const teachingQuizRecord = await prisma.teachingQuizRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingQuizRecordUpdateManyArgs>(args: SelectSubset<T, TeachingQuizRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingQuizRecords and returns the data updated in the database.
     * @param {TeachingQuizRecordUpdateManyAndReturnArgs} args - Arguments to update many TeachingQuizRecords.
     * @example
     * // Update many TeachingQuizRecords
     * const teachingQuizRecord = await prisma.teachingQuizRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingQuizRecords and only return the `id`
     * const teachingQuizRecordWithIdOnly = await prisma.teachingQuizRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeachingQuizRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingQuizRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingQuizRecord.
     * @param {TeachingQuizRecordUpsertArgs} args - Arguments to update or create a TeachingQuizRecord.
     * @example
     * // Update or create a TeachingQuizRecord
     * const teachingQuizRecord = await prisma.teachingQuizRecord.upsert({
     *   create: {
     *     // ... data to create a TeachingQuizRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingQuizRecord we want to update
     *   }
     * })
     */
    upsert<T extends TeachingQuizRecordUpsertArgs>(args: SelectSubset<T, TeachingQuizRecordUpsertArgs<ExtArgs>>): Prisma__TeachingQuizRecordClient<$Result.GetResult<Prisma.$TeachingQuizRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingQuizRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingQuizRecordCountArgs} args - Arguments to filter TeachingQuizRecords to count.
     * @example
     * // Count the number of TeachingQuizRecords
     * const count = await prisma.teachingQuizRecord.count({
     *   where: {
     *     // ... the filter for the TeachingQuizRecords we want to count
     *   }
     * })
    **/
    count<T extends TeachingQuizRecordCountArgs>(
      args?: Subset<T, TeachingQuizRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingQuizRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingQuizRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingQuizRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeachingQuizRecordAggregateArgs>(args: Subset<T, TeachingQuizRecordAggregateArgs>): Prisma.PrismaPromise<GetTeachingQuizRecordAggregateType<T>>

    /**
     * Group by TeachingQuizRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingQuizRecordGroupByArgs} args - Group by arguments.
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
      T extends TeachingQuizRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingQuizRecordGroupByArgs['orderBy'] }
        : { orderBy?: TeachingQuizRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeachingQuizRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingQuizRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingQuizRecord model
   */
  readonly fields: TeachingQuizRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingQuizRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingQuizRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TeachingQuizRecord model
   */
  interface TeachingQuizRecordFieldRefs {
    readonly id: FieldRef<"TeachingQuizRecord", 'String'>
    readonly createdAt: FieldRef<"TeachingQuizRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"TeachingQuizRecord", 'DateTime'>
    readonly metadata: FieldRef<"TeachingQuizRecord", 'Json'>
    readonly teacherId: FieldRef<"TeachingQuizRecord", 'String'>
    readonly moduleId: FieldRef<"TeachingQuizRecord", 'String'>
    readonly lessonId: FieldRef<"TeachingQuizRecord", 'String'>
    readonly title: FieldRef<"TeachingQuizRecord", 'String'>
    readonly summary: FieldRef<"TeachingQuizRecord", 'String'>
    readonly questions: FieldRef<"TeachingQuizRecord", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * TeachingQuizRecord findUnique
   */
  export type TeachingQuizRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingQuizRecord to fetch.
     */
    where: TeachingQuizRecordWhereUniqueInput
  }

  /**
   * TeachingQuizRecord findUniqueOrThrow
   */
  export type TeachingQuizRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingQuizRecord to fetch.
     */
    where: TeachingQuizRecordWhereUniqueInput
  }

  /**
   * TeachingQuizRecord findFirst
   */
  export type TeachingQuizRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingQuizRecord to fetch.
     */
    where?: TeachingQuizRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingQuizRecords to fetch.
     */
    orderBy?: TeachingQuizRecordOrderByWithRelationInput | TeachingQuizRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingQuizRecords.
     */
    cursor?: TeachingQuizRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingQuizRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingQuizRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingQuizRecords.
     */
    distinct?: TeachingQuizRecordScalarFieldEnum | TeachingQuizRecordScalarFieldEnum[]
  }

  /**
   * TeachingQuizRecord findFirstOrThrow
   */
  export type TeachingQuizRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingQuizRecord to fetch.
     */
    where?: TeachingQuizRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingQuizRecords to fetch.
     */
    orderBy?: TeachingQuizRecordOrderByWithRelationInput | TeachingQuizRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingQuizRecords.
     */
    cursor?: TeachingQuizRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingQuizRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingQuizRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingQuizRecords.
     */
    distinct?: TeachingQuizRecordScalarFieldEnum | TeachingQuizRecordScalarFieldEnum[]
  }

  /**
   * TeachingQuizRecord findMany
   */
  export type TeachingQuizRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * Filter, which TeachingQuizRecords to fetch.
     */
    where?: TeachingQuizRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingQuizRecords to fetch.
     */
    orderBy?: TeachingQuizRecordOrderByWithRelationInput | TeachingQuizRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingQuizRecords.
     */
    cursor?: TeachingQuizRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingQuizRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingQuizRecords.
     */
    skip?: number
    distinct?: TeachingQuizRecordScalarFieldEnum | TeachingQuizRecordScalarFieldEnum[]
  }

  /**
   * TeachingQuizRecord create
   */
  export type TeachingQuizRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a TeachingQuizRecord.
     */
    data: XOR<TeachingQuizRecordCreateInput, TeachingQuizRecordUncheckedCreateInput>
  }

  /**
   * TeachingQuizRecord createMany
   */
  export type TeachingQuizRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingQuizRecords.
     */
    data: TeachingQuizRecordCreateManyInput | TeachingQuizRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingQuizRecord createManyAndReturn
   */
  export type TeachingQuizRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingQuizRecords.
     */
    data: TeachingQuizRecordCreateManyInput | TeachingQuizRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingQuizRecord update
   */
  export type TeachingQuizRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a TeachingQuizRecord.
     */
    data: XOR<TeachingQuizRecordUpdateInput, TeachingQuizRecordUncheckedUpdateInput>
    /**
     * Choose, which TeachingQuizRecord to update.
     */
    where: TeachingQuizRecordWhereUniqueInput
  }

  /**
   * TeachingQuizRecord updateMany
   */
  export type TeachingQuizRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingQuizRecords.
     */
    data: XOR<TeachingQuizRecordUpdateManyMutationInput, TeachingQuizRecordUncheckedUpdateManyInput>
    /**
     * Filter which TeachingQuizRecords to update
     */
    where?: TeachingQuizRecordWhereInput
    /**
     * Limit how many TeachingQuizRecords to update.
     */
    limit?: number
  }

  /**
   * TeachingQuizRecord updateManyAndReturn
   */
  export type TeachingQuizRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * The data used to update TeachingQuizRecords.
     */
    data: XOR<TeachingQuizRecordUpdateManyMutationInput, TeachingQuizRecordUncheckedUpdateManyInput>
    /**
     * Filter which TeachingQuizRecords to update
     */
    where?: TeachingQuizRecordWhereInput
    /**
     * Limit how many TeachingQuizRecords to update.
     */
    limit?: number
  }

  /**
   * TeachingQuizRecord upsert
   */
  export type TeachingQuizRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the TeachingQuizRecord to update in case it exists.
     */
    where: TeachingQuizRecordWhereUniqueInput
    /**
     * In case the TeachingQuizRecord found by the `where` argument doesn't exist, create a new TeachingQuizRecord with this data.
     */
    create: XOR<TeachingQuizRecordCreateInput, TeachingQuizRecordUncheckedCreateInput>
    /**
     * In case the TeachingQuizRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingQuizRecordUpdateInput, TeachingQuizRecordUncheckedUpdateInput>
  }

  /**
   * TeachingQuizRecord delete
   */
  export type TeachingQuizRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
    /**
     * Filter which TeachingQuizRecord to delete.
     */
    where: TeachingQuizRecordWhereUniqueInput
  }

  /**
   * TeachingQuizRecord deleteMany
   */
  export type TeachingQuizRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingQuizRecords to delete
     */
    where?: TeachingQuizRecordWhereInput
    /**
     * Limit how many TeachingQuizRecords to delete.
     */
    limit?: number
  }

  /**
   * TeachingQuizRecord without action
   */
  export type TeachingQuizRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingQuizRecord
     */
    select?: TeachingQuizRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingQuizRecord
     */
    omit?: TeachingQuizRecordOmit<ExtArgs> | null
  }


  /**
   * Model StudentAttemptRecord
   */

  export type AggregateStudentAttemptRecord = {
    _count: StudentAttemptRecordCountAggregateOutputType | null
    _avg: StudentAttemptRecordAvgAggregateOutputType | null
    _sum: StudentAttemptRecordSumAggregateOutputType | null
    _min: StudentAttemptRecordMinAggregateOutputType | null
    _max: StudentAttemptRecordMaxAggregateOutputType | null
  }

  export type StudentAttemptRecordAvgAggregateOutputType = {
    score: number | null
  }

  export type StudentAttemptRecordSumAggregateOutputType = {
    score: number | null
  }

  export type StudentAttemptRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    studentId: string | null
    classroomId: string | null
    quizId: string | null
    source: string | null
    score: number | null
    teacherVerified: boolean | null
  }

  export type StudentAttemptRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    studentId: string | null
    classroomId: string | null
    quizId: string | null
    source: string | null
    score: number | null
    teacherVerified: boolean | null
  }

  export type StudentAttemptRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    studentId: number
    classroomId: number
    quizId: number
    source: number
    score: number
    answers: number
    teacherVerified: number
    _all: number
  }


  export type StudentAttemptRecordAvgAggregateInputType = {
    score?: true
  }

  export type StudentAttemptRecordSumAggregateInputType = {
    score?: true
  }

  export type StudentAttemptRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    studentId?: true
    classroomId?: true
    quizId?: true
    source?: true
    score?: true
    teacherVerified?: true
  }

  export type StudentAttemptRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    studentId?: true
    classroomId?: true
    quizId?: true
    source?: true
    score?: true
    teacherVerified?: true
  }

  export type StudentAttemptRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    studentId?: true
    classroomId?: true
    quizId?: true
    source?: true
    score?: true
    answers?: true
    teacherVerified?: true
    _all?: true
  }

  export type StudentAttemptRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAttemptRecord to aggregate.
     */
    where?: StudentAttemptRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAttemptRecords to fetch.
     */
    orderBy?: StudentAttemptRecordOrderByWithRelationInput | StudentAttemptRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAttemptRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAttemptRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAttemptRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAttemptRecords
    **/
    _count?: true | StudentAttemptRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAttemptRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentAttemptRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAttemptRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAttemptRecordMaxAggregateInputType
  }

  export type GetStudentAttemptRecordAggregateType<T extends StudentAttemptRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAttemptRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAttemptRecord[P]>
      : GetScalarType<T[P], AggregateStudentAttemptRecord[P]>
  }




  export type StudentAttemptRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAttemptRecordWhereInput
    orderBy?: StudentAttemptRecordOrderByWithAggregationInput | StudentAttemptRecordOrderByWithAggregationInput[]
    by: StudentAttemptRecordScalarFieldEnum[] | StudentAttemptRecordScalarFieldEnum
    having?: StudentAttemptRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAttemptRecordCountAggregateInputType | true
    _avg?: StudentAttemptRecordAvgAggregateInputType
    _sum?: StudentAttemptRecordSumAggregateInputType
    _min?: StudentAttemptRecordMinAggregateInputType
    _max?: StudentAttemptRecordMaxAggregateInputType
  }

  export type StudentAttemptRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    studentId: string
    classroomId: string | null
    quizId: string | null
    source: string
    score: number | null
    answers: JsonValue
    teacherVerified: boolean
    _count: StudentAttemptRecordCountAggregateOutputType | null
    _avg: StudentAttemptRecordAvgAggregateOutputType | null
    _sum: StudentAttemptRecordSumAggregateOutputType | null
    _min: StudentAttemptRecordMinAggregateOutputType | null
    _max: StudentAttemptRecordMaxAggregateOutputType | null
  }

  type GetStudentAttemptRecordGroupByPayload<T extends StudentAttemptRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAttemptRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAttemptRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAttemptRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAttemptRecordGroupByOutputType[P]>
        }
      >
    >


  export type StudentAttemptRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    studentId?: boolean
    classroomId?: boolean
    quizId?: boolean
    source?: boolean
    score?: boolean
    answers?: boolean
    teacherVerified?: boolean
  }, ExtArgs["result"]["studentAttemptRecord"]>

  export type StudentAttemptRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    studentId?: boolean
    classroomId?: boolean
    quizId?: boolean
    source?: boolean
    score?: boolean
    answers?: boolean
    teacherVerified?: boolean
  }, ExtArgs["result"]["studentAttemptRecord"]>

  export type StudentAttemptRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    studentId?: boolean
    classroomId?: boolean
    quizId?: boolean
    source?: boolean
    score?: boolean
    answers?: boolean
    teacherVerified?: boolean
  }, ExtArgs["result"]["studentAttemptRecord"]>

  export type StudentAttemptRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    studentId?: boolean
    classroomId?: boolean
    quizId?: boolean
    source?: boolean
    score?: boolean
    answers?: boolean
    teacherVerified?: boolean
  }

  export type StudentAttemptRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "studentId" | "classroomId" | "quizId" | "source" | "score" | "answers" | "teacherVerified", ExtArgs["result"]["studentAttemptRecord"]>

  export type $StudentAttemptRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAttemptRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      studentId: string
      classroomId: string | null
      quizId: string | null
      source: string
      score: number | null
      answers: Prisma.JsonValue
      teacherVerified: boolean
    }, ExtArgs["result"]["studentAttemptRecord"]>
    composites: {}
  }

  type StudentAttemptRecordGetPayload<S extends boolean | null | undefined | StudentAttemptRecordDefaultArgs> = $Result.GetResult<Prisma.$StudentAttemptRecordPayload, S>

  type StudentAttemptRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAttemptRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAttemptRecordCountAggregateInputType | true
    }

  export interface StudentAttemptRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAttemptRecord'], meta: { name: 'StudentAttemptRecord' } }
    /**
     * Find zero or one StudentAttemptRecord that matches the filter.
     * @param {StudentAttemptRecordFindUniqueArgs} args - Arguments to find a StudentAttemptRecord
     * @example
     * // Get one StudentAttemptRecord
     * const studentAttemptRecord = await prisma.studentAttemptRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAttemptRecordFindUniqueArgs>(args: SelectSubset<T, StudentAttemptRecordFindUniqueArgs<ExtArgs>>): Prisma__StudentAttemptRecordClient<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAttemptRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAttemptRecordFindUniqueOrThrowArgs} args - Arguments to find a StudentAttemptRecord
     * @example
     * // Get one StudentAttemptRecord
     * const studentAttemptRecord = await prisma.studentAttemptRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAttemptRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAttemptRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAttemptRecordClient<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAttemptRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttemptRecordFindFirstArgs} args - Arguments to find a StudentAttemptRecord
     * @example
     * // Get one StudentAttemptRecord
     * const studentAttemptRecord = await prisma.studentAttemptRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAttemptRecordFindFirstArgs>(args?: SelectSubset<T, StudentAttemptRecordFindFirstArgs<ExtArgs>>): Prisma__StudentAttemptRecordClient<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAttemptRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttemptRecordFindFirstOrThrowArgs} args - Arguments to find a StudentAttemptRecord
     * @example
     * // Get one StudentAttemptRecord
     * const studentAttemptRecord = await prisma.studentAttemptRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAttemptRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAttemptRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAttemptRecordClient<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAttemptRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttemptRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAttemptRecords
     * const studentAttemptRecords = await prisma.studentAttemptRecord.findMany()
     * 
     * // Get first 10 StudentAttemptRecords
     * const studentAttemptRecords = await prisma.studentAttemptRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAttemptRecordWithIdOnly = await prisma.studentAttemptRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAttemptRecordFindManyArgs>(args?: SelectSubset<T, StudentAttemptRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAttemptRecord.
     * @param {StudentAttemptRecordCreateArgs} args - Arguments to create a StudentAttemptRecord.
     * @example
     * // Create one StudentAttemptRecord
     * const StudentAttemptRecord = await prisma.studentAttemptRecord.create({
     *   data: {
     *     // ... data to create a StudentAttemptRecord
     *   }
     * })
     * 
     */
    create<T extends StudentAttemptRecordCreateArgs>(args: SelectSubset<T, StudentAttemptRecordCreateArgs<ExtArgs>>): Prisma__StudentAttemptRecordClient<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAttemptRecords.
     * @param {StudentAttemptRecordCreateManyArgs} args - Arguments to create many StudentAttemptRecords.
     * @example
     * // Create many StudentAttemptRecords
     * const studentAttemptRecord = await prisma.studentAttemptRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAttemptRecordCreateManyArgs>(args?: SelectSubset<T, StudentAttemptRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentAttemptRecords and returns the data saved in the database.
     * @param {StudentAttemptRecordCreateManyAndReturnArgs} args - Arguments to create many StudentAttemptRecords.
     * @example
     * // Create many StudentAttemptRecords
     * const studentAttemptRecord = await prisma.studentAttemptRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentAttemptRecords and only return the `id`
     * const studentAttemptRecordWithIdOnly = await prisma.studentAttemptRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentAttemptRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentAttemptRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentAttemptRecord.
     * @param {StudentAttemptRecordDeleteArgs} args - Arguments to delete one StudentAttemptRecord.
     * @example
     * // Delete one StudentAttemptRecord
     * const StudentAttemptRecord = await prisma.studentAttemptRecord.delete({
     *   where: {
     *     // ... filter to delete one StudentAttemptRecord
     *   }
     * })
     * 
     */
    delete<T extends StudentAttemptRecordDeleteArgs>(args: SelectSubset<T, StudentAttemptRecordDeleteArgs<ExtArgs>>): Prisma__StudentAttemptRecordClient<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAttemptRecord.
     * @param {StudentAttemptRecordUpdateArgs} args - Arguments to update one StudentAttemptRecord.
     * @example
     * // Update one StudentAttemptRecord
     * const studentAttemptRecord = await prisma.studentAttemptRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAttemptRecordUpdateArgs>(args: SelectSubset<T, StudentAttemptRecordUpdateArgs<ExtArgs>>): Prisma__StudentAttemptRecordClient<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAttemptRecords.
     * @param {StudentAttemptRecordDeleteManyArgs} args - Arguments to filter StudentAttemptRecords to delete.
     * @example
     * // Delete a few StudentAttemptRecords
     * const { count } = await prisma.studentAttemptRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAttemptRecordDeleteManyArgs>(args?: SelectSubset<T, StudentAttemptRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAttemptRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttemptRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAttemptRecords
     * const studentAttemptRecord = await prisma.studentAttemptRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAttemptRecordUpdateManyArgs>(args: SelectSubset<T, StudentAttemptRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAttemptRecords and returns the data updated in the database.
     * @param {StudentAttemptRecordUpdateManyAndReturnArgs} args - Arguments to update many StudentAttemptRecords.
     * @example
     * // Update many StudentAttemptRecords
     * const studentAttemptRecord = await prisma.studentAttemptRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentAttemptRecords and only return the `id`
     * const studentAttemptRecordWithIdOnly = await prisma.studentAttemptRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentAttemptRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentAttemptRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentAttemptRecord.
     * @param {StudentAttemptRecordUpsertArgs} args - Arguments to update or create a StudentAttemptRecord.
     * @example
     * // Update or create a StudentAttemptRecord
     * const studentAttemptRecord = await prisma.studentAttemptRecord.upsert({
     *   create: {
     *     // ... data to create a StudentAttemptRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAttemptRecord we want to update
     *   }
     * })
     */
    upsert<T extends StudentAttemptRecordUpsertArgs>(args: SelectSubset<T, StudentAttemptRecordUpsertArgs<ExtArgs>>): Prisma__StudentAttemptRecordClient<$Result.GetResult<Prisma.$StudentAttemptRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentAttemptRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttemptRecordCountArgs} args - Arguments to filter StudentAttemptRecords to count.
     * @example
     * // Count the number of StudentAttemptRecords
     * const count = await prisma.studentAttemptRecord.count({
     *   where: {
     *     // ... the filter for the StudentAttemptRecords we want to count
     *   }
     * })
    **/
    count<T extends StudentAttemptRecordCountArgs>(
      args?: Subset<T, StudentAttemptRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAttemptRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAttemptRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttemptRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAttemptRecordAggregateArgs>(args: Subset<T, StudentAttemptRecordAggregateArgs>): Prisma.PrismaPromise<GetStudentAttemptRecordAggregateType<T>>

    /**
     * Group by StudentAttemptRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAttemptRecordGroupByArgs} args - Group by arguments.
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
      T extends StudentAttemptRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAttemptRecordGroupByArgs['orderBy'] }
        : { orderBy?: StudentAttemptRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentAttemptRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAttemptRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAttemptRecord model
   */
  readonly fields: StudentAttemptRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAttemptRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAttemptRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StudentAttemptRecord model
   */
  interface StudentAttemptRecordFieldRefs {
    readonly id: FieldRef<"StudentAttemptRecord", 'String'>
    readonly createdAt: FieldRef<"StudentAttemptRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentAttemptRecord", 'DateTime'>
    readonly metadata: FieldRef<"StudentAttemptRecord", 'Json'>
    readonly studentId: FieldRef<"StudentAttemptRecord", 'String'>
    readonly classroomId: FieldRef<"StudentAttemptRecord", 'String'>
    readonly quizId: FieldRef<"StudentAttemptRecord", 'String'>
    readonly source: FieldRef<"StudentAttemptRecord", 'String'>
    readonly score: FieldRef<"StudentAttemptRecord", 'Float'>
    readonly answers: FieldRef<"StudentAttemptRecord", 'Json'>
    readonly teacherVerified: FieldRef<"StudentAttemptRecord", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * StudentAttemptRecord findUnique
   */
  export type StudentAttemptRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * Filter, which StudentAttemptRecord to fetch.
     */
    where: StudentAttemptRecordWhereUniqueInput
  }

  /**
   * StudentAttemptRecord findUniqueOrThrow
   */
  export type StudentAttemptRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * Filter, which StudentAttemptRecord to fetch.
     */
    where: StudentAttemptRecordWhereUniqueInput
  }

  /**
   * StudentAttemptRecord findFirst
   */
  export type StudentAttemptRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * Filter, which StudentAttemptRecord to fetch.
     */
    where?: StudentAttemptRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAttemptRecords to fetch.
     */
    orderBy?: StudentAttemptRecordOrderByWithRelationInput | StudentAttemptRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAttemptRecords.
     */
    cursor?: StudentAttemptRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAttemptRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAttemptRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAttemptRecords.
     */
    distinct?: StudentAttemptRecordScalarFieldEnum | StudentAttemptRecordScalarFieldEnum[]
  }

  /**
   * StudentAttemptRecord findFirstOrThrow
   */
  export type StudentAttemptRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * Filter, which StudentAttemptRecord to fetch.
     */
    where?: StudentAttemptRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAttemptRecords to fetch.
     */
    orderBy?: StudentAttemptRecordOrderByWithRelationInput | StudentAttemptRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAttemptRecords.
     */
    cursor?: StudentAttemptRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAttemptRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAttemptRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAttemptRecords.
     */
    distinct?: StudentAttemptRecordScalarFieldEnum | StudentAttemptRecordScalarFieldEnum[]
  }

  /**
   * StudentAttemptRecord findMany
   */
  export type StudentAttemptRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * Filter, which StudentAttemptRecords to fetch.
     */
    where?: StudentAttemptRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAttemptRecords to fetch.
     */
    orderBy?: StudentAttemptRecordOrderByWithRelationInput | StudentAttemptRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAttemptRecords.
     */
    cursor?: StudentAttemptRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAttemptRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAttemptRecords.
     */
    skip?: number
    distinct?: StudentAttemptRecordScalarFieldEnum | StudentAttemptRecordScalarFieldEnum[]
  }

  /**
   * StudentAttemptRecord create
   */
  export type StudentAttemptRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a StudentAttemptRecord.
     */
    data: XOR<StudentAttemptRecordCreateInput, StudentAttemptRecordUncheckedCreateInput>
  }

  /**
   * StudentAttemptRecord createMany
   */
  export type StudentAttemptRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAttemptRecords.
     */
    data: StudentAttemptRecordCreateManyInput | StudentAttemptRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAttemptRecord createManyAndReturn
   */
  export type StudentAttemptRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * The data used to create many StudentAttemptRecords.
     */
    data: StudentAttemptRecordCreateManyInput | StudentAttemptRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAttemptRecord update
   */
  export type StudentAttemptRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a StudentAttemptRecord.
     */
    data: XOR<StudentAttemptRecordUpdateInput, StudentAttemptRecordUncheckedUpdateInput>
    /**
     * Choose, which StudentAttemptRecord to update.
     */
    where: StudentAttemptRecordWhereUniqueInput
  }

  /**
   * StudentAttemptRecord updateMany
   */
  export type StudentAttemptRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAttemptRecords.
     */
    data: XOR<StudentAttemptRecordUpdateManyMutationInput, StudentAttemptRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudentAttemptRecords to update
     */
    where?: StudentAttemptRecordWhereInput
    /**
     * Limit how many StudentAttemptRecords to update.
     */
    limit?: number
  }

  /**
   * StudentAttemptRecord updateManyAndReturn
   */
  export type StudentAttemptRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * The data used to update StudentAttemptRecords.
     */
    data: XOR<StudentAttemptRecordUpdateManyMutationInput, StudentAttemptRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudentAttemptRecords to update
     */
    where?: StudentAttemptRecordWhereInput
    /**
     * Limit how many StudentAttemptRecords to update.
     */
    limit?: number
  }

  /**
   * StudentAttemptRecord upsert
   */
  export type StudentAttemptRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the StudentAttemptRecord to update in case it exists.
     */
    where: StudentAttemptRecordWhereUniqueInput
    /**
     * In case the StudentAttemptRecord found by the `where` argument doesn't exist, create a new StudentAttemptRecord with this data.
     */
    create: XOR<StudentAttemptRecordCreateInput, StudentAttemptRecordUncheckedCreateInput>
    /**
     * In case the StudentAttemptRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAttemptRecordUpdateInput, StudentAttemptRecordUncheckedUpdateInput>
  }

  /**
   * StudentAttemptRecord delete
   */
  export type StudentAttemptRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
    /**
     * Filter which StudentAttemptRecord to delete.
     */
    where: StudentAttemptRecordWhereUniqueInput
  }

  /**
   * StudentAttemptRecord deleteMany
   */
  export type StudentAttemptRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAttemptRecords to delete
     */
    where?: StudentAttemptRecordWhereInput
    /**
     * Limit how many StudentAttemptRecords to delete.
     */
    limit?: number
  }

  /**
   * StudentAttemptRecord without action
   */
  export type StudentAttemptRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAttemptRecord
     */
    select?: StudentAttemptRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAttemptRecord
     */
    omit?: StudentAttemptRecordOmit<ExtArgs> | null
  }


  /**
   * Model KnowledgeNodeRecord
   */

  export type AggregateKnowledgeNodeRecord = {
    _count: KnowledgeNodeRecordCountAggregateOutputType | null
    _min: KnowledgeNodeRecordMinAggregateOutputType | null
    _max: KnowledgeNodeRecordMaxAggregateOutputType | null
  }

  export type KnowledgeNodeRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nodeType: string | null
    title: string | null
    summary: string | null
    sourceEntityType: string | null
    sourceEntityId: string | null
  }

  export type KnowledgeNodeRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nodeType: string | null
    title: string | null
    summary: string | null
    sourceEntityType: string | null
    sourceEntityId: string | null
  }

  export type KnowledgeNodeRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    nodeType: number
    title: number
    summary: number
    sourceEntityType: number
    sourceEntityId: number
    _all: number
  }


  export type KnowledgeNodeRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nodeType?: true
    title?: true
    summary?: true
    sourceEntityType?: true
    sourceEntityId?: true
  }

  export type KnowledgeNodeRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nodeType?: true
    title?: true
    summary?: true
    sourceEntityType?: true
    sourceEntityId?: true
  }

  export type KnowledgeNodeRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    nodeType?: true
    title?: true
    summary?: true
    sourceEntityType?: true
    sourceEntityId?: true
    _all?: true
  }

  export type KnowledgeNodeRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeNodeRecord to aggregate.
     */
    where?: KnowledgeNodeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeNodeRecords to fetch.
     */
    orderBy?: KnowledgeNodeRecordOrderByWithRelationInput | KnowledgeNodeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeNodeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeNodeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeNodeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeNodeRecords
    **/
    _count?: true | KnowledgeNodeRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeNodeRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeNodeRecordMaxAggregateInputType
  }

  export type GetKnowledgeNodeRecordAggregateType<T extends KnowledgeNodeRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeNodeRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeNodeRecord[P]>
      : GetScalarType<T[P], AggregateKnowledgeNodeRecord[P]>
  }




  export type KnowledgeNodeRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeNodeRecordWhereInput
    orderBy?: KnowledgeNodeRecordOrderByWithAggregationInput | KnowledgeNodeRecordOrderByWithAggregationInput[]
    by: KnowledgeNodeRecordScalarFieldEnum[] | KnowledgeNodeRecordScalarFieldEnum
    having?: KnowledgeNodeRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeNodeRecordCountAggregateInputType | true
    _min?: KnowledgeNodeRecordMinAggregateInputType
    _max?: KnowledgeNodeRecordMaxAggregateInputType
  }

  export type KnowledgeNodeRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    nodeType: string
    title: string
    summary: string | null
    sourceEntityType: string | null
    sourceEntityId: string | null
    _count: KnowledgeNodeRecordCountAggregateOutputType | null
    _min: KnowledgeNodeRecordMinAggregateOutputType | null
    _max: KnowledgeNodeRecordMaxAggregateOutputType | null
  }

  type GetKnowledgeNodeRecordGroupByPayload<T extends KnowledgeNodeRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeNodeRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeNodeRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeNodeRecordGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeNodeRecordGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeNodeRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    nodeType?: boolean
    title?: boolean
    summary?: boolean
    sourceEntityType?: boolean
    sourceEntityId?: boolean
  }, ExtArgs["result"]["knowledgeNodeRecord"]>

  export type KnowledgeNodeRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    nodeType?: boolean
    title?: boolean
    summary?: boolean
    sourceEntityType?: boolean
    sourceEntityId?: boolean
  }, ExtArgs["result"]["knowledgeNodeRecord"]>

  export type KnowledgeNodeRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    nodeType?: boolean
    title?: boolean
    summary?: boolean
    sourceEntityType?: boolean
    sourceEntityId?: boolean
  }, ExtArgs["result"]["knowledgeNodeRecord"]>

  export type KnowledgeNodeRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    nodeType?: boolean
    title?: boolean
    summary?: boolean
    sourceEntityType?: boolean
    sourceEntityId?: boolean
  }

  export type KnowledgeNodeRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "nodeType" | "title" | "summary" | "sourceEntityType" | "sourceEntityId", ExtArgs["result"]["knowledgeNodeRecord"]>

  export type $KnowledgeNodeRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeNodeRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      nodeType: string
      title: string
      summary: string | null
      sourceEntityType: string | null
      sourceEntityId: string | null
    }, ExtArgs["result"]["knowledgeNodeRecord"]>
    composites: {}
  }

  type KnowledgeNodeRecordGetPayload<S extends boolean | null | undefined | KnowledgeNodeRecordDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeNodeRecordPayload, S>

  type KnowledgeNodeRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeNodeRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeNodeRecordCountAggregateInputType | true
    }

  export interface KnowledgeNodeRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeNodeRecord'], meta: { name: 'KnowledgeNodeRecord' } }
    /**
     * Find zero or one KnowledgeNodeRecord that matches the filter.
     * @param {KnowledgeNodeRecordFindUniqueArgs} args - Arguments to find a KnowledgeNodeRecord
     * @example
     * // Get one KnowledgeNodeRecord
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeNodeRecordFindUniqueArgs>(args: SelectSubset<T, KnowledgeNodeRecordFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeNodeRecordClient<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KnowledgeNodeRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeNodeRecordFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeNodeRecord
     * @example
     * // Get one KnowledgeNodeRecord
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeNodeRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeNodeRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeNodeRecordClient<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeNodeRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeNodeRecordFindFirstArgs} args - Arguments to find a KnowledgeNodeRecord
     * @example
     * // Get one KnowledgeNodeRecord
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeNodeRecordFindFirstArgs>(args?: SelectSubset<T, KnowledgeNodeRecordFindFirstArgs<ExtArgs>>): Prisma__KnowledgeNodeRecordClient<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeNodeRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeNodeRecordFindFirstOrThrowArgs} args - Arguments to find a KnowledgeNodeRecord
     * @example
     * // Get one KnowledgeNodeRecord
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeNodeRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeNodeRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeNodeRecordClient<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KnowledgeNodeRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeNodeRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeNodeRecords
     * const knowledgeNodeRecords = await prisma.knowledgeNodeRecord.findMany()
     * 
     * // Get first 10 KnowledgeNodeRecords
     * const knowledgeNodeRecords = await prisma.knowledgeNodeRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeNodeRecordWithIdOnly = await prisma.knowledgeNodeRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeNodeRecordFindManyArgs>(args?: SelectSubset<T, KnowledgeNodeRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KnowledgeNodeRecord.
     * @param {KnowledgeNodeRecordCreateArgs} args - Arguments to create a KnowledgeNodeRecord.
     * @example
     * // Create one KnowledgeNodeRecord
     * const KnowledgeNodeRecord = await prisma.knowledgeNodeRecord.create({
     *   data: {
     *     // ... data to create a KnowledgeNodeRecord
     *   }
     * })
     * 
     */
    create<T extends KnowledgeNodeRecordCreateArgs>(args: SelectSubset<T, KnowledgeNodeRecordCreateArgs<ExtArgs>>): Prisma__KnowledgeNodeRecordClient<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KnowledgeNodeRecords.
     * @param {KnowledgeNodeRecordCreateManyArgs} args - Arguments to create many KnowledgeNodeRecords.
     * @example
     * // Create many KnowledgeNodeRecords
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeNodeRecordCreateManyArgs>(args?: SelectSubset<T, KnowledgeNodeRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeNodeRecords and returns the data saved in the database.
     * @param {KnowledgeNodeRecordCreateManyAndReturnArgs} args - Arguments to create many KnowledgeNodeRecords.
     * @example
     * // Create many KnowledgeNodeRecords
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeNodeRecords and only return the `id`
     * const knowledgeNodeRecordWithIdOnly = await prisma.knowledgeNodeRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeNodeRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeNodeRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KnowledgeNodeRecord.
     * @param {KnowledgeNodeRecordDeleteArgs} args - Arguments to delete one KnowledgeNodeRecord.
     * @example
     * // Delete one KnowledgeNodeRecord
     * const KnowledgeNodeRecord = await prisma.knowledgeNodeRecord.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeNodeRecord
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeNodeRecordDeleteArgs>(args: SelectSubset<T, KnowledgeNodeRecordDeleteArgs<ExtArgs>>): Prisma__KnowledgeNodeRecordClient<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KnowledgeNodeRecord.
     * @param {KnowledgeNodeRecordUpdateArgs} args - Arguments to update one KnowledgeNodeRecord.
     * @example
     * // Update one KnowledgeNodeRecord
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeNodeRecordUpdateArgs>(args: SelectSubset<T, KnowledgeNodeRecordUpdateArgs<ExtArgs>>): Prisma__KnowledgeNodeRecordClient<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KnowledgeNodeRecords.
     * @param {KnowledgeNodeRecordDeleteManyArgs} args - Arguments to filter KnowledgeNodeRecords to delete.
     * @example
     * // Delete a few KnowledgeNodeRecords
     * const { count } = await prisma.knowledgeNodeRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeNodeRecordDeleteManyArgs>(args?: SelectSubset<T, KnowledgeNodeRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeNodeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeNodeRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeNodeRecords
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeNodeRecordUpdateManyArgs>(args: SelectSubset<T, KnowledgeNodeRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeNodeRecords and returns the data updated in the database.
     * @param {KnowledgeNodeRecordUpdateManyAndReturnArgs} args - Arguments to update many KnowledgeNodeRecords.
     * @example
     * // Update many KnowledgeNodeRecords
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KnowledgeNodeRecords and only return the `id`
     * const knowledgeNodeRecordWithIdOnly = await prisma.knowledgeNodeRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends KnowledgeNodeRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeNodeRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KnowledgeNodeRecord.
     * @param {KnowledgeNodeRecordUpsertArgs} args - Arguments to update or create a KnowledgeNodeRecord.
     * @example
     * // Update or create a KnowledgeNodeRecord
     * const knowledgeNodeRecord = await prisma.knowledgeNodeRecord.upsert({
     *   create: {
     *     // ... data to create a KnowledgeNodeRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeNodeRecord we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeNodeRecordUpsertArgs>(args: SelectSubset<T, KnowledgeNodeRecordUpsertArgs<ExtArgs>>): Prisma__KnowledgeNodeRecordClient<$Result.GetResult<Prisma.$KnowledgeNodeRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KnowledgeNodeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeNodeRecordCountArgs} args - Arguments to filter KnowledgeNodeRecords to count.
     * @example
     * // Count the number of KnowledgeNodeRecords
     * const count = await prisma.knowledgeNodeRecord.count({
     *   where: {
     *     // ... the filter for the KnowledgeNodeRecords we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeNodeRecordCountArgs>(
      args?: Subset<T, KnowledgeNodeRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeNodeRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeNodeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeNodeRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KnowledgeNodeRecordAggregateArgs>(args: Subset<T, KnowledgeNodeRecordAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeNodeRecordAggregateType<T>>

    /**
     * Group by KnowledgeNodeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeNodeRecordGroupByArgs} args - Group by arguments.
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
      T extends KnowledgeNodeRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeNodeRecordGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeNodeRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KnowledgeNodeRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeNodeRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeNodeRecord model
   */
  readonly fields: KnowledgeNodeRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeNodeRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeNodeRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the KnowledgeNodeRecord model
   */
  interface KnowledgeNodeRecordFieldRefs {
    readonly id: FieldRef<"KnowledgeNodeRecord", 'String'>
    readonly createdAt: FieldRef<"KnowledgeNodeRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"KnowledgeNodeRecord", 'DateTime'>
    readonly metadata: FieldRef<"KnowledgeNodeRecord", 'Json'>
    readonly nodeType: FieldRef<"KnowledgeNodeRecord", 'String'>
    readonly title: FieldRef<"KnowledgeNodeRecord", 'String'>
    readonly summary: FieldRef<"KnowledgeNodeRecord", 'String'>
    readonly sourceEntityType: FieldRef<"KnowledgeNodeRecord", 'String'>
    readonly sourceEntityId: FieldRef<"KnowledgeNodeRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeNodeRecord findUnique
   */
  export type KnowledgeNodeRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeNodeRecord to fetch.
     */
    where: KnowledgeNodeRecordWhereUniqueInput
  }

  /**
   * KnowledgeNodeRecord findUniqueOrThrow
   */
  export type KnowledgeNodeRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeNodeRecord to fetch.
     */
    where: KnowledgeNodeRecordWhereUniqueInput
  }

  /**
   * KnowledgeNodeRecord findFirst
   */
  export type KnowledgeNodeRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeNodeRecord to fetch.
     */
    where?: KnowledgeNodeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeNodeRecords to fetch.
     */
    orderBy?: KnowledgeNodeRecordOrderByWithRelationInput | KnowledgeNodeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeNodeRecords.
     */
    cursor?: KnowledgeNodeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeNodeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeNodeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeNodeRecords.
     */
    distinct?: KnowledgeNodeRecordScalarFieldEnum | KnowledgeNodeRecordScalarFieldEnum[]
  }

  /**
   * KnowledgeNodeRecord findFirstOrThrow
   */
  export type KnowledgeNodeRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeNodeRecord to fetch.
     */
    where?: KnowledgeNodeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeNodeRecords to fetch.
     */
    orderBy?: KnowledgeNodeRecordOrderByWithRelationInput | KnowledgeNodeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeNodeRecords.
     */
    cursor?: KnowledgeNodeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeNodeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeNodeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeNodeRecords.
     */
    distinct?: KnowledgeNodeRecordScalarFieldEnum | KnowledgeNodeRecordScalarFieldEnum[]
  }

  /**
   * KnowledgeNodeRecord findMany
   */
  export type KnowledgeNodeRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeNodeRecords to fetch.
     */
    where?: KnowledgeNodeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeNodeRecords to fetch.
     */
    orderBy?: KnowledgeNodeRecordOrderByWithRelationInput | KnowledgeNodeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeNodeRecords.
     */
    cursor?: KnowledgeNodeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeNodeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeNodeRecords.
     */
    skip?: number
    distinct?: KnowledgeNodeRecordScalarFieldEnum | KnowledgeNodeRecordScalarFieldEnum[]
  }

  /**
   * KnowledgeNodeRecord create
   */
  export type KnowledgeNodeRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeNodeRecord.
     */
    data: XOR<KnowledgeNodeRecordCreateInput, KnowledgeNodeRecordUncheckedCreateInput>
  }

  /**
   * KnowledgeNodeRecord createMany
   */
  export type KnowledgeNodeRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeNodeRecords.
     */
    data: KnowledgeNodeRecordCreateManyInput | KnowledgeNodeRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeNodeRecord createManyAndReturn
   */
  export type KnowledgeNodeRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * The data used to create many KnowledgeNodeRecords.
     */
    data: KnowledgeNodeRecordCreateManyInput | KnowledgeNodeRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeNodeRecord update
   */
  export type KnowledgeNodeRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeNodeRecord.
     */
    data: XOR<KnowledgeNodeRecordUpdateInput, KnowledgeNodeRecordUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeNodeRecord to update.
     */
    where: KnowledgeNodeRecordWhereUniqueInput
  }

  /**
   * KnowledgeNodeRecord updateMany
   */
  export type KnowledgeNodeRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeNodeRecords.
     */
    data: XOR<KnowledgeNodeRecordUpdateManyMutationInput, KnowledgeNodeRecordUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeNodeRecords to update
     */
    where?: KnowledgeNodeRecordWhereInput
    /**
     * Limit how many KnowledgeNodeRecords to update.
     */
    limit?: number
  }

  /**
   * KnowledgeNodeRecord updateManyAndReturn
   */
  export type KnowledgeNodeRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * The data used to update KnowledgeNodeRecords.
     */
    data: XOR<KnowledgeNodeRecordUpdateManyMutationInput, KnowledgeNodeRecordUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeNodeRecords to update
     */
    where?: KnowledgeNodeRecordWhereInput
    /**
     * Limit how many KnowledgeNodeRecords to update.
     */
    limit?: number
  }

  /**
   * KnowledgeNodeRecord upsert
   */
  export type KnowledgeNodeRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeNodeRecord to update in case it exists.
     */
    where: KnowledgeNodeRecordWhereUniqueInput
    /**
     * In case the KnowledgeNodeRecord found by the `where` argument doesn't exist, create a new KnowledgeNodeRecord with this data.
     */
    create: XOR<KnowledgeNodeRecordCreateInput, KnowledgeNodeRecordUncheckedCreateInput>
    /**
     * In case the KnowledgeNodeRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeNodeRecordUpdateInput, KnowledgeNodeRecordUncheckedUpdateInput>
  }

  /**
   * KnowledgeNodeRecord delete
   */
  export type KnowledgeNodeRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
    /**
     * Filter which KnowledgeNodeRecord to delete.
     */
    where: KnowledgeNodeRecordWhereUniqueInput
  }

  /**
   * KnowledgeNodeRecord deleteMany
   */
  export type KnowledgeNodeRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeNodeRecords to delete
     */
    where?: KnowledgeNodeRecordWhereInput
    /**
     * Limit how many KnowledgeNodeRecords to delete.
     */
    limit?: number
  }

  /**
   * KnowledgeNodeRecord without action
   */
  export type KnowledgeNodeRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeNodeRecord
     */
    select?: KnowledgeNodeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeNodeRecord
     */
    omit?: KnowledgeNodeRecordOmit<ExtArgs> | null
  }


  /**
   * Model KnowledgeEdgeRecord
   */

  export type AggregateKnowledgeEdgeRecord = {
    _count: KnowledgeEdgeRecordCountAggregateOutputType | null
    _avg: KnowledgeEdgeRecordAvgAggregateOutputType | null
    _sum: KnowledgeEdgeRecordSumAggregateOutputType | null
    _min: KnowledgeEdgeRecordMinAggregateOutputType | null
    _max: KnowledgeEdgeRecordMaxAggregateOutputType | null
  }

  export type KnowledgeEdgeRecordAvgAggregateOutputType = {
    weight: number | null
  }

  export type KnowledgeEdgeRecordSumAggregateOutputType = {
    weight: number | null
  }

  export type KnowledgeEdgeRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sourceNodeId: string | null
    targetNodeId: string | null
    edgeType: string | null
    label: string | null
    weight: number | null
    directed: boolean | null
  }

  export type KnowledgeEdgeRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sourceNodeId: string | null
    targetNodeId: string | null
    edgeType: string | null
    label: string | null
    weight: number | null
    directed: boolean | null
  }

  export type KnowledgeEdgeRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    sourceNodeId: number
    targetNodeId: number
    edgeType: number
    label: number
    weight: number
    directed: number
    _all: number
  }


  export type KnowledgeEdgeRecordAvgAggregateInputType = {
    weight?: true
  }

  export type KnowledgeEdgeRecordSumAggregateInputType = {
    weight?: true
  }

  export type KnowledgeEdgeRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    sourceNodeId?: true
    targetNodeId?: true
    edgeType?: true
    label?: true
    weight?: true
    directed?: true
  }

  export type KnowledgeEdgeRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    sourceNodeId?: true
    targetNodeId?: true
    edgeType?: true
    label?: true
    weight?: true
    directed?: true
  }

  export type KnowledgeEdgeRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    sourceNodeId?: true
    targetNodeId?: true
    edgeType?: true
    label?: true
    weight?: true
    directed?: true
    _all?: true
  }

  export type KnowledgeEdgeRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeEdgeRecord to aggregate.
     */
    where?: KnowledgeEdgeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeEdgeRecords to fetch.
     */
    orderBy?: KnowledgeEdgeRecordOrderByWithRelationInput | KnowledgeEdgeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeEdgeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeEdgeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeEdgeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeEdgeRecords
    **/
    _count?: true | KnowledgeEdgeRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KnowledgeEdgeRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KnowledgeEdgeRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeEdgeRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeEdgeRecordMaxAggregateInputType
  }

  export type GetKnowledgeEdgeRecordAggregateType<T extends KnowledgeEdgeRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeEdgeRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeEdgeRecord[P]>
      : GetScalarType<T[P], AggregateKnowledgeEdgeRecord[P]>
  }




  export type KnowledgeEdgeRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeEdgeRecordWhereInput
    orderBy?: KnowledgeEdgeRecordOrderByWithAggregationInput | KnowledgeEdgeRecordOrderByWithAggregationInput[]
    by: KnowledgeEdgeRecordScalarFieldEnum[] | KnowledgeEdgeRecordScalarFieldEnum
    having?: KnowledgeEdgeRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeEdgeRecordCountAggregateInputType | true
    _avg?: KnowledgeEdgeRecordAvgAggregateInputType
    _sum?: KnowledgeEdgeRecordSumAggregateInputType
    _min?: KnowledgeEdgeRecordMinAggregateInputType
    _max?: KnowledgeEdgeRecordMaxAggregateInputType
  }

  export type KnowledgeEdgeRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    sourceNodeId: string
    targetNodeId: string
    edgeType: string
    label: string | null
    weight: number | null
    directed: boolean
    _count: KnowledgeEdgeRecordCountAggregateOutputType | null
    _avg: KnowledgeEdgeRecordAvgAggregateOutputType | null
    _sum: KnowledgeEdgeRecordSumAggregateOutputType | null
    _min: KnowledgeEdgeRecordMinAggregateOutputType | null
    _max: KnowledgeEdgeRecordMaxAggregateOutputType | null
  }

  type GetKnowledgeEdgeRecordGroupByPayload<T extends KnowledgeEdgeRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeEdgeRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeEdgeRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeEdgeRecordGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeEdgeRecordGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeEdgeRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    edgeType?: boolean
    label?: boolean
    weight?: boolean
    directed?: boolean
  }, ExtArgs["result"]["knowledgeEdgeRecord"]>

  export type KnowledgeEdgeRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    edgeType?: boolean
    label?: boolean
    weight?: boolean
    directed?: boolean
  }, ExtArgs["result"]["knowledgeEdgeRecord"]>

  export type KnowledgeEdgeRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    edgeType?: boolean
    label?: boolean
    weight?: boolean
    directed?: boolean
  }, ExtArgs["result"]["knowledgeEdgeRecord"]>

  export type KnowledgeEdgeRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    edgeType?: boolean
    label?: boolean
    weight?: boolean
    directed?: boolean
  }

  export type KnowledgeEdgeRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "sourceNodeId" | "targetNodeId" | "edgeType" | "label" | "weight" | "directed", ExtArgs["result"]["knowledgeEdgeRecord"]>

  export type $KnowledgeEdgeRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeEdgeRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      sourceNodeId: string
      targetNodeId: string
      edgeType: string
      label: string | null
      weight: number | null
      directed: boolean
    }, ExtArgs["result"]["knowledgeEdgeRecord"]>
    composites: {}
  }

  type KnowledgeEdgeRecordGetPayload<S extends boolean | null | undefined | KnowledgeEdgeRecordDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload, S>

  type KnowledgeEdgeRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeEdgeRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeEdgeRecordCountAggregateInputType | true
    }

  export interface KnowledgeEdgeRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeEdgeRecord'], meta: { name: 'KnowledgeEdgeRecord' } }
    /**
     * Find zero or one KnowledgeEdgeRecord that matches the filter.
     * @param {KnowledgeEdgeRecordFindUniqueArgs} args - Arguments to find a KnowledgeEdgeRecord
     * @example
     * // Get one KnowledgeEdgeRecord
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeEdgeRecordFindUniqueArgs>(args: SelectSubset<T, KnowledgeEdgeRecordFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeEdgeRecordClient<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KnowledgeEdgeRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeEdgeRecordFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeEdgeRecord
     * @example
     * // Get one KnowledgeEdgeRecord
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeEdgeRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeEdgeRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeEdgeRecordClient<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeEdgeRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeEdgeRecordFindFirstArgs} args - Arguments to find a KnowledgeEdgeRecord
     * @example
     * // Get one KnowledgeEdgeRecord
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeEdgeRecordFindFirstArgs>(args?: SelectSubset<T, KnowledgeEdgeRecordFindFirstArgs<ExtArgs>>): Prisma__KnowledgeEdgeRecordClient<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeEdgeRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeEdgeRecordFindFirstOrThrowArgs} args - Arguments to find a KnowledgeEdgeRecord
     * @example
     * // Get one KnowledgeEdgeRecord
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeEdgeRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeEdgeRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeEdgeRecordClient<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KnowledgeEdgeRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeEdgeRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeEdgeRecords
     * const knowledgeEdgeRecords = await prisma.knowledgeEdgeRecord.findMany()
     * 
     * // Get first 10 KnowledgeEdgeRecords
     * const knowledgeEdgeRecords = await prisma.knowledgeEdgeRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeEdgeRecordWithIdOnly = await prisma.knowledgeEdgeRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeEdgeRecordFindManyArgs>(args?: SelectSubset<T, KnowledgeEdgeRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KnowledgeEdgeRecord.
     * @param {KnowledgeEdgeRecordCreateArgs} args - Arguments to create a KnowledgeEdgeRecord.
     * @example
     * // Create one KnowledgeEdgeRecord
     * const KnowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.create({
     *   data: {
     *     // ... data to create a KnowledgeEdgeRecord
     *   }
     * })
     * 
     */
    create<T extends KnowledgeEdgeRecordCreateArgs>(args: SelectSubset<T, KnowledgeEdgeRecordCreateArgs<ExtArgs>>): Prisma__KnowledgeEdgeRecordClient<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KnowledgeEdgeRecords.
     * @param {KnowledgeEdgeRecordCreateManyArgs} args - Arguments to create many KnowledgeEdgeRecords.
     * @example
     * // Create many KnowledgeEdgeRecords
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeEdgeRecordCreateManyArgs>(args?: SelectSubset<T, KnowledgeEdgeRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeEdgeRecords and returns the data saved in the database.
     * @param {KnowledgeEdgeRecordCreateManyAndReturnArgs} args - Arguments to create many KnowledgeEdgeRecords.
     * @example
     * // Create many KnowledgeEdgeRecords
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeEdgeRecords and only return the `id`
     * const knowledgeEdgeRecordWithIdOnly = await prisma.knowledgeEdgeRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeEdgeRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeEdgeRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KnowledgeEdgeRecord.
     * @param {KnowledgeEdgeRecordDeleteArgs} args - Arguments to delete one KnowledgeEdgeRecord.
     * @example
     * // Delete one KnowledgeEdgeRecord
     * const KnowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeEdgeRecord
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeEdgeRecordDeleteArgs>(args: SelectSubset<T, KnowledgeEdgeRecordDeleteArgs<ExtArgs>>): Prisma__KnowledgeEdgeRecordClient<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KnowledgeEdgeRecord.
     * @param {KnowledgeEdgeRecordUpdateArgs} args - Arguments to update one KnowledgeEdgeRecord.
     * @example
     * // Update one KnowledgeEdgeRecord
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeEdgeRecordUpdateArgs>(args: SelectSubset<T, KnowledgeEdgeRecordUpdateArgs<ExtArgs>>): Prisma__KnowledgeEdgeRecordClient<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KnowledgeEdgeRecords.
     * @param {KnowledgeEdgeRecordDeleteManyArgs} args - Arguments to filter KnowledgeEdgeRecords to delete.
     * @example
     * // Delete a few KnowledgeEdgeRecords
     * const { count } = await prisma.knowledgeEdgeRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeEdgeRecordDeleteManyArgs>(args?: SelectSubset<T, KnowledgeEdgeRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeEdgeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeEdgeRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeEdgeRecords
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeEdgeRecordUpdateManyArgs>(args: SelectSubset<T, KnowledgeEdgeRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeEdgeRecords and returns the data updated in the database.
     * @param {KnowledgeEdgeRecordUpdateManyAndReturnArgs} args - Arguments to update many KnowledgeEdgeRecords.
     * @example
     * // Update many KnowledgeEdgeRecords
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KnowledgeEdgeRecords and only return the `id`
     * const knowledgeEdgeRecordWithIdOnly = await prisma.knowledgeEdgeRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends KnowledgeEdgeRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeEdgeRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KnowledgeEdgeRecord.
     * @param {KnowledgeEdgeRecordUpsertArgs} args - Arguments to update or create a KnowledgeEdgeRecord.
     * @example
     * // Update or create a KnowledgeEdgeRecord
     * const knowledgeEdgeRecord = await prisma.knowledgeEdgeRecord.upsert({
     *   create: {
     *     // ... data to create a KnowledgeEdgeRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeEdgeRecord we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeEdgeRecordUpsertArgs>(args: SelectSubset<T, KnowledgeEdgeRecordUpsertArgs<ExtArgs>>): Prisma__KnowledgeEdgeRecordClient<$Result.GetResult<Prisma.$KnowledgeEdgeRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KnowledgeEdgeRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeEdgeRecordCountArgs} args - Arguments to filter KnowledgeEdgeRecords to count.
     * @example
     * // Count the number of KnowledgeEdgeRecords
     * const count = await prisma.knowledgeEdgeRecord.count({
     *   where: {
     *     // ... the filter for the KnowledgeEdgeRecords we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeEdgeRecordCountArgs>(
      args?: Subset<T, KnowledgeEdgeRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeEdgeRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeEdgeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeEdgeRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KnowledgeEdgeRecordAggregateArgs>(args: Subset<T, KnowledgeEdgeRecordAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeEdgeRecordAggregateType<T>>

    /**
     * Group by KnowledgeEdgeRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeEdgeRecordGroupByArgs} args - Group by arguments.
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
      T extends KnowledgeEdgeRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeEdgeRecordGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeEdgeRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KnowledgeEdgeRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeEdgeRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeEdgeRecord model
   */
  readonly fields: KnowledgeEdgeRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeEdgeRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeEdgeRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the KnowledgeEdgeRecord model
   */
  interface KnowledgeEdgeRecordFieldRefs {
    readonly id: FieldRef<"KnowledgeEdgeRecord", 'String'>
    readonly createdAt: FieldRef<"KnowledgeEdgeRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"KnowledgeEdgeRecord", 'DateTime'>
    readonly metadata: FieldRef<"KnowledgeEdgeRecord", 'Json'>
    readonly sourceNodeId: FieldRef<"KnowledgeEdgeRecord", 'String'>
    readonly targetNodeId: FieldRef<"KnowledgeEdgeRecord", 'String'>
    readonly edgeType: FieldRef<"KnowledgeEdgeRecord", 'String'>
    readonly label: FieldRef<"KnowledgeEdgeRecord", 'String'>
    readonly weight: FieldRef<"KnowledgeEdgeRecord", 'Float'>
    readonly directed: FieldRef<"KnowledgeEdgeRecord", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeEdgeRecord findUnique
   */
  export type KnowledgeEdgeRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeEdgeRecord to fetch.
     */
    where: KnowledgeEdgeRecordWhereUniqueInput
  }

  /**
   * KnowledgeEdgeRecord findUniqueOrThrow
   */
  export type KnowledgeEdgeRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeEdgeRecord to fetch.
     */
    where: KnowledgeEdgeRecordWhereUniqueInput
  }

  /**
   * KnowledgeEdgeRecord findFirst
   */
  export type KnowledgeEdgeRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeEdgeRecord to fetch.
     */
    where?: KnowledgeEdgeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeEdgeRecords to fetch.
     */
    orderBy?: KnowledgeEdgeRecordOrderByWithRelationInput | KnowledgeEdgeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeEdgeRecords.
     */
    cursor?: KnowledgeEdgeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeEdgeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeEdgeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeEdgeRecords.
     */
    distinct?: KnowledgeEdgeRecordScalarFieldEnum | KnowledgeEdgeRecordScalarFieldEnum[]
  }

  /**
   * KnowledgeEdgeRecord findFirstOrThrow
   */
  export type KnowledgeEdgeRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeEdgeRecord to fetch.
     */
    where?: KnowledgeEdgeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeEdgeRecords to fetch.
     */
    orderBy?: KnowledgeEdgeRecordOrderByWithRelationInput | KnowledgeEdgeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeEdgeRecords.
     */
    cursor?: KnowledgeEdgeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeEdgeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeEdgeRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeEdgeRecords.
     */
    distinct?: KnowledgeEdgeRecordScalarFieldEnum | KnowledgeEdgeRecordScalarFieldEnum[]
  }

  /**
   * KnowledgeEdgeRecord findMany
   */
  export type KnowledgeEdgeRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * Filter, which KnowledgeEdgeRecords to fetch.
     */
    where?: KnowledgeEdgeRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeEdgeRecords to fetch.
     */
    orderBy?: KnowledgeEdgeRecordOrderByWithRelationInput | KnowledgeEdgeRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeEdgeRecords.
     */
    cursor?: KnowledgeEdgeRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeEdgeRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeEdgeRecords.
     */
    skip?: number
    distinct?: KnowledgeEdgeRecordScalarFieldEnum | KnowledgeEdgeRecordScalarFieldEnum[]
  }

  /**
   * KnowledgeEdgeRecord create
   */
  export type KnowledgeEdgeRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeEdgeRecord.
     */
    data: XOR<KnowledgeEdgeRecordCreateInput, KnowledgeEdgeRecordUncheckedCreateInput>
  }

  /**
   * KnowledgeEdgeRecord createMany
   */
  export type KnowledgeEdgeRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeEdgeRecords.
     */
    data: KnowledgeEdgeRecordCreateManyInput | KnowledgeEdgeRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeEdgeRecord createManyAndReturn
   */
  export type KnowledgeEdgeRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * The data used to create many KnowledgeEdgeRecords.
     */
    data: KnowledgeEdgeRecordCreateManyInput | KnowledgeEdgeRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeEdgeRecord update
   */
  export type KnowledgeEdgeRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeEdgeRecord.
     */
    data: XOR<KnowledgeEdgeRecordUpdateInput, KnowledgeEdgeRecordUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeEdgeRecord to update.
     */
    where: KnowledgeEdgeRecordWhereUniqueInput
  }

  /**
   * KnowledgeEdgeRecord updateMany
   */
  export type KnowledgeEdgeRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeEdgeRecords.
     */
    data: XOR<KnowledgeEdgeRecordUpdateManyMutationInput, KnowledgeEdgeRecordUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeEdgeRecords to update
     */
    where?: KnowledgeEdgeRecordWhereInput
    /**
     * Limit how many KnowledgeEdgeRecords to update.
     */
    limit?: number
  }

  /**
   * KnowledgeEdgeRecord updateManyAndReturn
   */
  export type KnowledgeEdgeRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * The data used to update KnowledgeEdgeRecords.
     */
    data: XOR<KnowledgeEdgeRecordUpdateManyMutationInput, KnowledgeEdgeRecordUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeEdgeRecords to update
     */
    where?: KnowledgeEdgeRecordWhereInput
    /**
     * Limit how many KnowledgeEdgeRecords to update.
     */
    limit?: number
  }

  /**
   * KnowledgeEdgeRecord upsert
   */
  export type KnowledgeEdgeRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeEdgeRecord to update in case it exists.
     */
    where: KnowledgeEdgeRecordWhereUniqueInput
    /**
     * In case the KnowledgeEdgeRecord found by the `where` argument doesn't exist, create a new KnowledgeEdgeRecord with this data.
     */
    create: XOR<KnowledgeEdgeRecordCreateInput, KnowledgeEdgeRecordUncheckedCreateInput>
    /**
     * In case the KnowledgeEdgeRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeEdgeRecordUpdateInput, KnowledgeEdgeRecordUncheckedUpdateInput>
  }

  /**
   * KnowledgeEdgeRecord delete
   */
  export type KnowledgeEdgeRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
    /**
     * Filter which KnowledgeEdgeRecord to delete.
     */
    where: KnowledgeEdgeRecordWhereUniqueInput
  }

  /**
   * KnowledgeEdgeRecord deleteMany
   */
  export type KnowledgeEdgeRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeEdgeRecords to delete
     */
    where?: KnowledgeEdgeRecordWhereInput
    /**
     * Limit how many KnowledgeEdgeRecords to delete.
     */
    limit?: number
  }

  /**
   * KnowledgeEdgeRecord without action
   */
  export type KnowledgeEdgeRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeEdgeRecord
     */
    select?: KnowledgeEdgeRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeEdgeRecord
     */
    omit?: KnowledgeEdgeRecordOmit<ExtArgs> | null
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


  export const TopicRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    title: 'title',
    summary: 'summary',
    slug: 'slug',
    parentTopicId: 'parentTopicId',
    skillIds: 'skillIds',
    prerequisiteTopicIds: 'prerequisiteTopicIds'
  };

  export type TopicRecordScalarFieldEnum = (typeof TopicRecordScalarFieldEnum)[keyof typeof TopicRecordScalarFieldEnum]


  export const LessonRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    title: 'title',
    summary: 'summary',
    lessonType: 'lessonType',
    topicId: 'topicId',
    skillIds: 'skillIds',
    learningObjectiveIds: 'learningObjectiveIds',
    prerequisiteLessonIds: 'prerequisiteLessonIds',
    estimatedDurationMinutes: 'estimatedDurationMinutes',
    difficultyLevel: 'difficultyLevel',
    resourceUrls: 'resourceUrls'
  };

  export type LessonRecordScalarFieldEnum = (typeof LessonRecordScalarFieldEnum)[keyof typeof LessonRecordScalarFieldEnum]


  export const ContentItemRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    title: 'title',
    summary: 'summary',
    contentType: 'contentType',
    status: 'status',
    topicIds: 'topicIds',
    skillIds: 'skillIds',
    lessonId: 'lessonId',
    assessmentId: 'assessmentId',
    projectId: 'projectId',
    authorUserId: 'authorUserId',
    sourceUrl: 'sourceUrl',
    language: 'language',
    versionLabel: 'versionLabel'
  };

  export type ContentItemRecordScalarFieldEnum = (typeof ContentItemRecordScalarFieldEnum)[keyof typeof ContentItemRecordScalarFieldEnum]


  export const TeachingMaterialRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    teacherId: 'teacherId',
    fileName: 'fileName',
    mimeType: 'mimeType',
    materialKind: 'materialKind',
    status: 'status',
    parsedText: 'parsedText',
    parsedStructure: 'parsedStructure',
    sourceUrl: 'sourceUrl'
  };

  export type TeachingMaterialRecordScalarFieldEnum = (typeof TeachingMaterialRecordScalarFieldEnum)[keyof typeof TeachingMaterialRecordScalarFieldEnum]


  export const TeachingModuleRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    teacherId: 'teacherId',
    materialId: 'materialId',
    title: 'title',
    summary: 'summary',
    status: 'status',
    conceptNodeIds: 'conceptNodeIds',
    lessonIds: 'lessonIds',
    sections: 'sections',
    suggestedTopicTitles: 'suggestedTopicTitles'
  };

  export type TeachingModuleRecordScalarFieldEnum = (typeof TeachingModuleRecordScalarFieldEnum)[keyof typeof TeachingModuleRecordScalarFieldEnum]


  export const TeachingQuizRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    teacherId: 'teacherId',
    moduleId: 'moduleId',
    lessonId: 'lessonId',
    title: 'title',
    summary: 'summary',
    questions: 'questions'
  };

  export type TeachingQuizRecordScalarFieldEnum = (typeof TeachingQuizRecordScalarFieldEnum)[keyof typeof TeachingQuizRecordScalarFieldEnum]


  export const StudentAttemptRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    studentId: 'studentId',
    classroomId: 'classroomId',
    quizId: 'quizId',
    source: 'source',
    score: 'score',
    answers: 'answers',
    teacherVerified: 'teacherVerified'
  };

  export type StudentAttemptRecordScalarFieldEnum = (typeof StudentAttemptRecordScalarFieldEnum)[keyof typeof StudentAttemptRecordScalarFieldEnum]


  export const KnowledgeNodeRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    nodeType: 'nodeType',
    title: 'title',
    summary: 'summary',
    sourceEntityType: 'sourceEntityType',
    sourceEntityId: 'sourceEntityId'
  };

  export type KnowledgeNodeRecordScalarFieldEnum = (typeof KnowledgeNodeRecordScalarFieldEnum)[keyof typeof KnowledgeNodeRecordScalarFieldEnum]


  export const KnowledgeEdgeRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    sourceNodeId: 'sourceNodeId',
    targetNodeId: 'targetNodeId',
    edgeType: 'edgeType',
    label: 'label',
    weight: 'weight',
    directed: 'directed'
  };

  export type KnowledgeEdgeRecordScalarFieldEnum = (typeof KnowledgeEdgeRecordScalarFieldEnum)[keyof typeof KnowledgeEdgeRecordScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TopicRecordWhereInput = {
    AND?: TopicRecordWhereInput | TopicRecordWhereInput[]
    OR?: TopicRecordWhereInput[]
    NOT?: TopicRecordWhereInput | TopicRecordWhereInput[]
    id?: StringFilter<"TopicRecord"> | string
    createdAt?: DateTimeFilter<"TopicRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TopicRecord"> | Date | string
    metadata?: JsonNullableFilter<"TopicRecord">
    title?: StringFilter<"TopicRecord"> | string
    summary?: StringNullableFilter<"TopicRecord"> | string | null
    slug?: StringNullableFilter<"TopicRecord"> | string | null
    parentTopicId?: StringNullableFilter<"TopicRecord"> | string | null
    skillIds?: StringNullableListFilter<"TopicRecord">
    prerequisiteTopicIds?: StringNullableListFilter<"TopicRecord">
    lessons?: LessonRecordListRelationFilter
  }

  export type TopicRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    parentTopicId?: SortOrderInput | SortOrder
    skillIds?: SortOrder
    prerequisiteTopicIds?: SortOrder
    lessons?: LessonRecordOrderByRelationAggregateInput
  }

  export type TopicRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicRecordWhereInput | TopicRecordWhereInput[]
    OR?: TopicRecordWhereInput[]
    NOT?: TopicRecordWhereInput | TopicRecordWhereInput[]
    createdAt?: DateTimeFilter<"TopicRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TopicRecord"> | Date | string
    metadata?: JsonNullableFilter<"TopicRecord">
    title?: StringFilter<"TopicRecord"> | string
    summary?: StringNullableFilter<"TopicRecord"> | string | null
    slug?: StringNullableFilter<"TopicRecord"> | string | null
    parentTopicId?: StringNullableFilter<"TopicRecord"> | string | null
    skillIds?: StringNullableListFilter<"TopicRecord">
    prerequisiteTopicIds?: StringNullableListFilter<"TopicRecord">
    lessons?: LessonRecordListRelationFilter
  }, "id">

  export type TopicRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    parentTopicId?: SortOrderInput | SortOrder
    skillIds?: SortOrder
    prerequisiteTopicIds?: SortOrder
    _count?: TopicRecordCountOrderByAggregateInput
    _max?: TopicRecordMaxOrderByAggregateInput
    _min?: TopicRecordMinOrderByAggregateInput
  }

  export type TopicRecordScalarWhereWithAggregatesInput = {
    AND?: TopicRecordScalarWhereWithAggregatesInput | TopicRecordScalarWhereWithAggregatesInput[]
    OR?: TopicRecordScalarWhereWithAggregatesInput[]
    NOT?: TopicRecordScalarWhereWithAggregatesInput | TopicRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TopicRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TopicRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TopicRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"TopicRecord">
    title?: StringWithAggregatesFilter<"TopicRecord"> | string
    summary?: StringNullableWithAggregatesFilter<"TopicRecord"> | string | null
    slug?: StringNullableWithAggregatesFilter<"TopicRecord"> | string | null
    parentTopicId?: StringNullableWithAggregatesFilter<"TopicRecord"> | string | null
    skillIds?: StringNullableListFilter<"TopicRecord">
    prerequisiteTopicIds?: StringNullableListFilter<"TopicRecord">
  }

  export type LessonRecordWhereInput = {
    AND?: LessonRecordWhereInput | LessonRecordWhereInput[]
    OR?: LessonRecordWhereInput[]
    NOT?: LessonRecordWhereInput | LessonRecordWhereInput[]
    id?: StringFilter<"LessonRecord"> | string
    createdAt?: DateTimeFilter<"LessonRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LessonRecord"> | Date | string
    metadata?: JsonNullableFilter<"LessonRecord">
    title?: StringFilter<"LessonRecord"> | string
    summary?: StringNullableFilter<"LessonRecord"> | string | null
    lessonType?: StringFilter<"LessonRecord"> | string
    topicId?: StringFilter<"LessonRecord"> | string
    skillIds?: StringNullableListFilter<"LessonRecord">
    learningObjectiveIds?: StringNullableListFilter<"LessonRecord">
    prerequisiteLessonIds?: StringNullableListFilter<"LessonRecord">
    estimatedDurationMinutes?: IntNullableFilter<"LessonRecord"> | number | null
    difficultyLevel?: StringNullableFilter<"LessonRecord"> | string | null
    resourceUrls?: StringNullableListFilter<"LessonRecord">
    topic?: XOR<TopicRecordScalarRelationFilter, TopicRecordWhereInput>
  }

  export type LessonRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    lessonType?: SortOrder
    topicId?: SortOrder
    skillIds?: SortOrder
    learningObjectiveIds?: SortOrder
    prerequisiteLessonIds?: SortOrder
    estimatedDurationMinutes?: SortOrderInput | SortOrder
    difficultyLevel?: SortOrderInput | SortOrder
    resourceUrls?: SortOrder
    topic?: TopicRecordOrderByWithRelationInput
  }

  export type LessonRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonRecordWhereInput | LessonRecordWhereInput[]
    OR?: LessonRecordWhereInput[]
    NOT?: LessonRecordWhereInput | LessonRecordWhereInput[]
    createdAt?: DateTimeFilter<"LessonRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LessonRecord"> | Date | string
    metadata?: JsonNullableFilter<"LessonRecord">
    title?: StringFilter<"LessonRecord"> | string
    summary?: StringNullableFilter<"LessonRecord"> | string | null
    lessonType?: StringFilter<"LessonRecord"> | string
    topicId?: StringFilter<"LessonRecord"> | string
    skillIds?: StringNullableListFilter<"LessonRecord">
    learningObjectiveIds?: StringNullableListFilter<"LessonRecord">
    prerequisiteLessonIds?: StringNullableListFilter<"LessonRecord">
    estimatedDurationMinutes?: IntNullableFilter<"LessonRecord"> | number | null
    difficultyLevel?: StringNullableFilter<"LessonRecord"> | string | null
    resourceUrls?: StringNullableListFilter<"LessonRecord">
    topic?: XOR<TopicRecordScalarRelationFilter, TopicRecordWhereInput>
  }, "id">

  export type LessonRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    lessonType?: SortOrder
    topicId?: SortOrder
    skillIds?: SortOrder
    learningObjectiveIds?: SortOrder
    prerequisiteLessonIds?: SortOrder
    estimatedDurationMinutes?: SortOrderInput | SortOrder
    difficultyLevel?: SortOrderInput | SortOrder
    resourceUrls?: SortOrder
    _count?: LessonRecordCountOrderByAggregateInput
    _avg?: LessonRecordAvgOrderByAggregateInput
    _max?: LessonRecordMaxOrderByAggregateInput
    _min?: LessonRecordMinOrderByAggregateInput
    _sum?: LessonRecordSumOrderByAggregateInput
  }

  export type LessonRecordScalarWhereWithAggregatesInput = {
    AND?: LessonRecordScalarWhereWithAggregatesInput | LessonRecordScalarWhereWithAggregatesInput[]
    OR?: LessonRecordScalarWhereWithAggregatesInput[]
    NOT?: LessonRecordScalarWhereWithAggregatesInput | LessonRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LessonRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LessonRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"LessonRecord">
    title?: StringWithAggregatesFilter<"LessonRecord"> | string
    summary?: StringNullableWithAggregatesFilter<"LessonRecord"> | string | null
    lessonType?: StringWithAggregatesFilter<"LessonRecord"> | string
    topicId?: StringWithAggregatesFilter<"LessonRecord"> | string
    skillIds?: StringNullableListFilter<"LessonRecord">
    learningObjectiveIds?: StringNullableListFilter<"LessonRecord">
    prerequisiteLessonIds?: StringNullableListFilter<"LessonRecord">
    estimatedDurationMinutes?: IntNullableWithAggregatesFilter<"LessonRecord"> | number | null
    difficultyLevel?: StringNullableWithAggregatesFilter<"LessonRecord"> | string | null
    resourceUrls?: StringNullableListFilter<"LessonRecord">
  }

  export type ContentItemRecordWhereInput = {
    AND?: ContentItemRecordWhereInput | ContentItemRecordWhereInput[]
    OR?: ContentItemRecordWhereInput[]
    NOT?: ContentItemRecordWhereInput | ContentItemRecordWhereInput[]
    id?: StringFilter<"ContentItemRecord"> | string
    createdAt?: DateTimeFilter<"ContentItemRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ContentItemRecord"> | Date | string
    metadata?: JsonNullableFilter<"ContentItemRecord">
    title?: StringFilter<"ContentItemRecord"> | string
    summary?: StringNullableFilter<"ContentItemRecord"> | string | null
    contentType?: StringFilter<"ContentItemRecord"> | string
    status?: StringFilter<"ContentItemRecord"> | string
    topicIds?: StringNullableListFilter<"ContentItemRecord">
    skillIds?: StringNullableListFilter<"ContentItemRecord">
    lessonId?: StringNullableFilter<"ContentItemRecord"> | string | null
    assessmentId?: StringNullableFilter<"ContentItemRecord"> | string | null
    projectId?: StringNullableFilter<"ContentItemRecord"> | string | null
    authorUserId?: StringNullableFilter<"ContentItemRecord"> | string | null
    sourceUrl?: StringNullableFilter<"ContentItemRecord"> | string | null
    language?: StringNullableFilter<"ContentItemRecord"> | string | null
    versionLabel?: StringNullableFilter<"ContentItemRecord"> | string | null
  }

  export type ContentItemRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    contentType?: SortOrder
    status?: SortOrder
    topicIds?: SortOrder
    skillIds?: SortOrder
    lessonId?: SortOrderInput | SortOrder
    assessmentId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    authorUserId?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    versionLabel?: SortOrderInput | SortOrder
  }

  export type ContentItemRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentItemRecordWhereInput | ContentItemRecordWhereInput[]
    OR?: ContentItemRecordWhereInput[]
    NOT?: ContentItemRecordWhereInput | ContentItemRecordWhereInput[]
    createdAt?: DateTimeFilter<"ContentItemRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ContentItemRecord"> | Date | string
    metadata?: JsonNullableFilter<"ContentItemRecord">
    title?: StringFilter<"ContentItemRecord"> | string
    summary?: StringNullableFilter<"ContentItemRecord"> | string | null
    contentType?: StringFilter<"ContentItemRecord"> | string
    status?: StringFilter<"ContentItemRecord"> | string
    topicIds?: StringNullableListFilter<"ContentItemRecord">
    skillIds?: StringNullableListFilter<"ContentItemRecord">
    lessonId?: StringNullableFilter<"ContentItemRecord"> | string | null
    assessmentId?: StringNullableFilter<"ContentItemRecord"> | string | null
    projectId?: StringNullableFilter<"ContentItemRecord"> | string | null
    authorUserId?: StringNullableFilter<"ContentItemRecord"> | string | null
    sourceUrl?: StringNullableFilter<"ContentItemRecord"> | string | null
    language?: StringNullableFilter<"ContentItemRecord"> | string | null
    versionLabel?: StringNullableFilter<"ContentItemRecord"> | string | null
  }, "id">

  export type ContentItemRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    contentType?: SortOrder
    status?: SortOrder
    topicIds?: SortOrder
    skillIds?: SortOrder
    lessonId?: SortOrderInput | SortOrder
    assessmentId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    authorUserId?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    versionLabel?: SortOrderInput | SortOrder
    _count?: ContentItemRecordCountOrderByAggregateInput
    _max?: ContentItemRecordMaxOrderByAggregateInput
    _min?: ContentItemRecordMinOrderByAggregateInput
  }

  export type ContentItemRecordScalarWhereWithAggregatesInput = {
    AND?: ContentItemRecordScalarWhereWithAggregatesInput | ContentItemRecordScalarWhereWithAggregatesInput[]
    OR?: ContentItemRecordScalarWhereWithAggregatesInput[]
    NOT?: ContentItemRecordScalarWhereWithAggregatesInput | ContentItemRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentItemRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContentItemRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentItemRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"ContentItemRecord">
    title?: StringWithAggregatesFilter<"ContentItemRecord"> | string
    summary?: StringNullableWithAggregatesFilter<"ContentItemRecord"> | string | null
    contentType?: StringWithAggregatesFilter<"ContentItemRecord"> | string
    status?: StringWithAggregatesFilter<"ContentItemRecord"> | string
    topicIds?: StringNullableListFilter<"ContentItemRecord">
    skillIds?: StringNullableListFilter<"ContentItemRecord">
    lessonId?: StringNullableWithAggregatesFilter<"ContentItemRecord"> | string | null
    assessmentId?: StringNullableWithAggregatesFilter<"ContentItemRecord"> | string | null
    projectId?: StringNullableWithAggregatesFilter<"ContentItemRecord"> | string | null
    authorUserId?: StringNullableWithAggregatesFilter<"ContentItemRecord"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"ContentItemRecord"> | string | null
    language?: StringNullableWithAggregatesFilter<"ContentItemRecord"> | string | null
    versionLabel?: StringNullableWithAggregatesFilter<"ContentItemRecord"> | string | null
  }

  export type TeachingMaterialRecordWhereInput = {
    AND?: TeachingMaterialRecordWhereInput | TeachingMaterialRecordWhereInput[]
    OR?: TeachingMaterialRecordWhereInput[]
    NOT?: TeachingMaterialRecordWhereInput | TeachingMaterialRecordWhereInput[]
    id?: StringFilter<"TeachingMaterialRecord"> | string
    createdAt?: DateTimeFilter<"TeachingMaterialRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingMaterialRecord"> | Date | string
    metadata?: JsonNullableFilter<"TeachingMaterialRecord">
    teacherId?: StringFilter<"TeachingMaterialRecord"> | string
    fileName?: StringFilter<"TeachingMaterialRecord"> | string
    mimeType?: StringFilter<"TeachingMaterialRecord"> | string
    materialKind?: StringFilter<"TeachingMaterialRecord"> | string
    status?: StringFilter<"TeachingMaterialRecord"> | string
    parsedText?: StringFilter<"TeachingMaterialRecord"> | string
    parsedStructure?: JsonFilter<"TeachingMaterialRecord">
    sourceUrl?: StringNullableFilter<"TeachingMaterialRecord"> | string | null
  }

  export type TeachingMaterialRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    materialKind?: SortOrder
    status?: SortOrder
    parsedText?: SortOrder
    parsedStructure?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
  }

  export type TeachingMaterialRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeachingMaterialRecordWhereInput | TeachingMaterialRecordWhereInput[]
    OR?: TeachingMaterialRecordWhereInput[]
    NOT?: TeachingMaterialRecordWhereInput | TeachingMaterialRecordWhereInput[]
    createdAt?: DateTimeFilter<"TeachingMaterialRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingMaterialRecord"> | Date | string
    metadata?: JsonNullableFilter<"TeachingMaterialRecord">
    teacherId?: StringFilter<"TeachingMaterialRecord"> | string
    fileName?: StringFilter<"TeachingMaterialRecord"> | string
    mimeType?: StringFilter<"TeachingMaterialRecord"> | string
    materialKind?: StringFilter<"TeachingMaterialRecord"> | string
    status?: StringFilter<"TeachingMaterialRecord"> | string
    parsedText?: StringFilter<"TeachingMaterialRecord"> | string
    parsedStructure?: JsonFilter<"TeachingMaterialRecord">
    sourceUrl?: StringNullableFilter<"TeachingMaterialRecord"> | string | null
  }, "id">

  export type TeachingMaterialRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    materialKind?: SortOrder
    status?: SortOrder
    parsedText?: SortOrder
    parsedStructure?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    _count?: TeachingMaterialRecordCountOrderByAggregateInput
    _max?: TeachingMaterialRecordMaxOrderByAggregateInput
    _min?: TeachingMaterialRecordMinOrderByAggregateInput
  }

  export type TeachingMaterialRecordScalarWhereWithAggregatesInput = {
    AND?: TeachingMaterialRecordScalarWhereWithAggregatesInput | TeachingMaterialRecordScalarWhereWithAggregatesInput[]
    OR?: TeachingMaterialRecordScalarWhereWithAggregatesInput[]
    NOT?: TeachingMaterialRecordScalarWhereWithAggregatesInput | TeachingMaterialRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeachingMaterialRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeachingMaterialRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeachingMaterialRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"TeachingMaterialRecord">
    teacherId?: StringWithAggregatesFilter<"TeachingMaterialRecord"> | string
    fileName?: StringWithAggregatesFilter<"TeachingMaterialRecord"> | string
    mimeType?: StringWithAggregatesFilter<"TeachingMaterialRecord"> | string
    materialKind?: StringWithAggregatesFilter<"TeachingMaterialRecord"> | string
    status?: StringWithAggregatesFilter<"TeachingMaterialRecord"> | string
    parsedText?: StringWithAggregatesFilter<"TeachingMaterialRecord"> | string
    parsedStructure?: JsonWithAggregatesFilter<"TeachingMaterialRecord">
    sourceUrl?: StringNullableWithAggregatesFilter<"TeachingMaterialRecord"> | string | null
  }

  export type TeachingModuleRecordWhereInput = {
    AND?: TeachingModuleRecordWhereInput | TeachingModuleRecordWhereInput[]
    OR?: TeachingModuleRecordWhereInput[]
    NOT?: TeachingModuleRecordWhereInput | TeachingModuleRecordWhereInput[]
    id?: StringFilter<"TeachingModuleRecord"> | string
    createdAt?: DateTimeFilter<"TeachingModuleRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingModuleRecord"> | Date | string
    metadata?: JsonNullableFilter<"TeachingModuleRecord">
    teacherId?: StringFilter<"TeachingModuleRecord"> | string
    materialId?: StringNullableFilter<"TeachingModuleRecord"> | string | null
    title?: StringFilter<"TeachingModuleRecord"> | string
    summary?: StringNullableFilter<"TeachingModuleRecord"> | string | null
    status?: StringFilter<"TeachingModuleRecord"> | string
    conceptNodeIds?: StringNullableListFilter<"TeachingModuleRecord">
    lessonIds?: StringNullableListFilter<"TeachingModuleRecord">
    sections?: JsonFilter<"TeachingModuleRecord">
    suggestedTopicTitles?: StringNullableListFilter<"TeachingModuleRecord">
  }

  export type TeachingModuleRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    materialId?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    status?: SortOrder
    conceptNodeIds?: SortOrder
    lessonIds?: SortOrder
    sections?: SortOrder
    suggestedTopicTitles?: SortOrder
  }

  export type TeachingModuleRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeachingModuleRecordWhereInput | TeachingModuleRecordWhereInput[]
    OR?: TeachingModuleRecordWhereInput[]
    NOT?: TeachingModuleRecordWhereInput | TeachingModuleRecordWhereInput[]
    createdAt?: DateTimeFilter<"TeachingModuleRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingModuleRecord"> | Date | string
    metadata?: JsonNullableFilter<"TeachingModuleRecord">
    teacherId?: StringFilter<"TeachingModuleRecord"> | string
    materialId?: StringNullableFilter<"TeachingModuleRecord"> | string | null
    title?: StringFilter<"TeachingModuleRecord"> | string
    summary?: StringNullableFilter<"TeachingModuleRecord"> | string | null
    status?: StringFilter<"TeachingModuleRecord"> | string
    conceptNodeIds?: StringNullableListFilter<"TeachingModuleRecord">
    lessonIds?: StringNullableListFilter<"TeachingModuleRecord">
    sections?: JsonFilter<"TeachingModuleRecord">
    suggestedTopicTitles?: StringNullableListFilter<"TeachingModuleRecord">
  }, "id">

  export type TeachingModuleRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    materialId?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    status?: SortOrder
    conceptNodeIds?: SortOrder
    lessonIds?: SortOrder
    sections?: SortOrder
    suggestedTopicTitles?: SortOrder
    _count?: TeachingModuleRecordCountOrderByAggregateInput
    _max?: TeachingModuleRecordMaxOrderByAggregateInput
    _min?: TeachingModuleRecordMinOrderByAggregateInput
  }

  export type TeachingModuleRecordScalarWhereWithAggregatesInput = {
    AND?: TeachingModuleRecordScalarWhereWithAggregatesInput | TeachingModuleRecordScalarWhereWithAggregatesInput[]
    OR?: TeachingModuleRecordScalarWhereWithAggregatesInput[]
    NOT?: TeachingModuleRecordScalarWhereWithAggregatesInput | TeachingModuleRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeachingModuleRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeachingModuleRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeachingModuleRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"TeachingModuleRecord">
    teacherId?: StringWithAggregatesFilter<"TeachingModuleRecord"> | string
    materialId?: StringNullableWithAggregatesFilter<"TeachingModuleRecord"> | string | null
    title?: StringWithAggregatesFilter<"TeachingModuleRecord"> | string
    summary?: StringNullableWithAggregatesFilter<"TeachingModuleRecord"> | string | null
    status?: StringWithAggregatesFilter<"TeachingModuleRecord"> | string
    conceptNodeIds?: StringNullableListFilter<"TeachingModuleRecord">
    lessonIds?: StringNullableListFilter<"TeachingModuleRecord">
    sections?: JsonWithAggregatesFilter<"TeachingModuleRecord">
    suggestedTopicTitles?: StringNullableListFilter<"TeachingModuleRecord">
  }

  export type TeachingQuizRecordWhereInput = {
    AND?: TeachingQuizRecordWhereInput | TeachingQuizRecordWhereInput[]
    OR?: TeachingQuizRecordWhereInput[]
    NOT?: TeachingQuizRecordWhereInput | TeachingQuizRecordWhereInput[]
    id?: StringFilter<"TeachingQuizRecord"> | string
    createdAt?: DateTimeFilter<"TeachingQuizRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingQuizRecord"> | Date | string
    metadata?: JsonNullableFilter<"TeachingQuizRecord">
    teacherId?: StringFilter<"TeachingQuizRecord"> | string
    moduleId?: StringNullableFilter<"TeachingQuizRecord"> | string | null
    lessonId?: StringNullableFilter<"TeachingQuizRecord"> | string | null
    title?: StringFilter<"TeachingQuizRecord"> | string
    summary?: StringNullableFilter<"TeachingQuizRecord"> | string | null
    questions?: JsonFilter<"TeachingQuizRecord">
  }

  export type TeachingQuizRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    moduleId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    questions?: SortOrder
  }

  export type TeachingQuizRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeachingQuizRecordWhereInput | TeachingQuizRecordWhereInput[]
    OR?: TeachingQuizRecordWhereInput[]
    NOT?: TeachingQuizRecordWhereInput | TeachingQuizRecordWhereInput[]
    createdAt?: DateTimeFilter<"TeachingQuizRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TeachingQuizRecord"> | Date | string
    metadata?: JsonNullableFilter<"TeachingQuizRecord">
    teacherId?: StringFilter<"TeachingQuizRecord"> | string
    moduleId?: StringNullableFilter<"TeachingQuizRecord"> | string | null
    lessonId?: StringNullableFilter<"TeachingQuizRecord"> | string | null
    title?: StringFilter<"TeachingQuizRecord"> | string
    summary?: StringNullableFilter<"TeachingQuizRecord"> | string | null
    questions?: JsonFilter<"TeachingQuizRecord">
  }, "id">

  export type TeachingQuizRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    moduleId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    questions?: SortOrder
    _count?: TeachingQuizRecordCountOrderByAggregateInput
    _max?: TeachingQuizRecordMaxOrderByAggregateInput
    _min?: TeachingQuizRecordMinOrderByAggregateInput
  }

  export type TeachingQuizRecordScalarWhereWithAggregatesInput = {
    AND?: TeachingQuizRecordScalarWhereWithAggregatesInput | TeachingQuizRecordScalarWhereWithAggregatesInput[]
    OR?: TeachingQuizRecordScalarWhereWithAggregatesInput[]
    NOT?: TeachingQuizRecordScalarWhereWithAggregatesInput | TeachingQuizRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeachingQuizRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeachingQuizRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeachingQuizRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"TeachingQuizRecord">
    teacherId?: StringWithAggregatesFilter<"TeachingQuizRecord"> | string
    moduleId?: StringNullableWithAggregatesFilter<"TeachingQuizRecord"> | string | null
    lessonId?: StringNullableWithAggregatesFilter<"TeachingQuizRecord"> | string | null
    title?: StringWithAggregatesFilter<"TeachingQuizRecord"> | string
    summary?: StringNullableWithAggregatesFilter<"TeachingQuizRecord"> | string | null
    questions?: JsonWithAggregatesFilter<"TeachingQuizRecord">
  }

  export type StudentAttemptRecordWhereInput = {
    AND?: StudentAttemptRecordWhereInput | StudentAttemptRecordWhereInput[]
    OR?: StudentAttemptRecordWhereInput[]
    NOT?: StudentAttemptRecordWhereInput | StudentAttemptRecordWhereInput[]
    id?: StringFilter<"StudentAttemptRecord"> | string
    createdAt?: DateTimeFilter<"StudentAttemptRecord"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAttemptRecord"> | Date | string
    metadata?: JsonNullableFilter<"StudentAttemptRecord">
    studentId?: StringFilter<"StudentAttemptRecord"> | string
    classroomId?: StringNullableFilter<"StudentAttemptRecord"> | string | null
    quizId?: StringNullableFilter<"StudentAttemptRecord"> | string | null
    source?: StringFilter<"StudentAttemptRecord"> | string
    score?: FloatNullableFilter<"StudentAttemptRecord"> | number | null
    answers?: JsonFilter<"StudentAttemptRecord">
    teacherVerified?: BoolFilter<"StudentAttemptRecord"> | boolean
  }

  export type StudentAttemptRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    studentId?: SortOrder
    classroomId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    source?: SortOrder
    score?: SortOrderInput | SortOrder
    answers?: SortOrder
    teacherVerified?: SortOrder
  }

  export type StudentAttemptRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentAttemptRecordWhereInput | StudentAttemptRecordWhereInput[]
    OR?: StudentAttemptRecordWhereInput[]
    NOT?: StudentAttemptRecordWhereInput | StudentAttemptRecordWhereInput[]
    createdAt?: DateTimeFilter<"StudentAttemptRecord"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAttemptRecord"> | Date | string
    metadata?: JsonNullableFilter<"StudentAttemptRecord">
    studentId?: StringFilter<"StudentAttemptRecord"> | string
    classroomId?: StringNullableFilter<"StudentAttemptRecord"> | string | null
    quizId?: StringNullableFilter<"StudentAttemptRecord"> | string | null
    source?: StringFilter<"StudentAttemptRecord"> | string
    score?: FloatNullableFilter<"StudentAttemptRecord"> | number | null
    answers?: JsonFilter<"StudentAttemptRecord">
    teacherVerified?: BoolFilter<"StudentAttemptRecord"> | boolean
  }, "id">

  export type StudentAttemptRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    studentId?: SortOrder
    classroomId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    source?: SortOrder
    score?: SortOrderInput | SortOrder
    answers?: SortOrder
    teacherVerified?: SortOrder
    _count?: StudentAttemptRecordCountOrderByAggregateInput
    _avg?: StudentAttemptRecordAvgOrderByAggregateInput
    _max?: StudentAttemptRecordMaxOrderByAggregateInput
    _min?: StudentAttemptRecordMinOrderByAggregateInput
    _sum?: StudentAttemptRecordSumOrderByAggregateInput
  }

  export type StudentAttemptRecordScalarWhereWithAggregatesInput = {
    AND?: StudentAttemptRecordScalarWhereWithAggregatesInput | StudentAttemptRecordScalarWhereWithAggregatesInput[]
    OR?: StudentAttemptRecordScalarWhereWithAggregatesInput[]
    NOT?: StudentAttemptRecordScalarWhereWithAggregatesInput | StudentAttemptRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAttemptRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudentAttemptRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentAttemptRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"StudentAttemptRecord">
    studentId?: StringWithAggregatesFilter<"StudentAttemptRecord"> | string
    classroomId?: StringNullableWithAggregatesFilter<"StudentAttemptRecord"> | string | null
    quizId?: StringNullableWithAggregatesFilter<"StudentAttemptRecord"> | string | null
    source?: StringWithAggregatesFilter<"StudentAttemptRecord"> | string
    score?: FloatNullableWithAggregatesFilter<"StudentAttemptRecord"> | number | null
    answers?: JsonWithAggregatesFilter<"StudentAttemptRecord">
    teacherVerified?: BoolWithAggregatesFilter<"StudentAttemptRecord"> | boolean
  }

  export type KnowledgeNodeRecordWhereInput = {
    AND?: KnowledgeNodeRecordWhereInput | KnowledgeNodeRecordWhereInput[]
    OR?: KnowledgeNodeRecordWhereInput[]
    NOT?: KnowledgeNodeRecordWhereInput | KnowledgeNodeRecordWhereInput[]
    id?: StringFilter<"KnowledgeNodeRecord"> | string
    createdAt?: DateTimeFilter<"KnowledgeNodeRecord"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeNodeRecord"> | Date | string
    metadata?: JsonNullableFilter<"KnowledgeNodeRecord">
    nodeType?: StringFilter<"KnowledgeNodeRecord"> | string
    title?: StringFilter<"KnowledgeNodeRecord"> | string
    summary?: StringNullableFilter<"KnowledgeNodeRecord"> | string | null
    sourceEntityType?: StringNullableFilter<"KnowledgeNodeRecord"> | string | null
    sourceEntityId?: StringNullableFilter<"KnowledgeNodeRecord"> | string | null
  }

  export type KnowledgeNodeRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    nodeType?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    sourceEntityType?: SortOrderInput | SortOrder
    sourceEntityId?: SortOrderInput | SortOrder
  }

  export type KnowledgeNodeRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KnowledgeNodeRecordWhereInput | KnowledgeNodeRecordWhereInput[]
    OR?: KnowledgeNodeRecordWhereInput[]
    NOT?: KnowledgeNodeRecordWhereInput | KnowledgeNodeRecordWhereInput[]
    createdAt?: DateTimeFilter<"KnowledgeNodeRecord"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeNodeRecord"> | Date | string
    metadata?: JsonNullableFilter<"KnowledgeNodeRecord">
    nodeType?: StringFilter<"KnowledgeNodeRecord"> | string
    title?: StringFilter<"KnowledgeNodeRecord"> | string
    summary?: StringNullableFilter<"KnowledgeNodeRecord"> | string | null
    sourceEntityType?: StringNullableFilter<"KnowledgeNodeRecord"> | string | null
    sourceEntityId?: StringNullableFilter<"KnowledgeNodeRecord"> | string | null
  }, "id">

  export type KnowledgeNodeRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    nodeType?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    sourceEntityType?: SortOrderInput | SortOrder
    sourceEntityId?: SortOrderInput | SortOrder
    _count?: KnowledgeNodeRecordCountOrderByAggregateInput
    _max?: KnowledgeNodeRecordMaxOrderByAggregateInput
    _min?: KnowledgeNodeRecordMinOrderByAggregateInput
  }

  export type KnowledgeNodeRecordScalarWhereWithAggregatesInput = {
    AND?: KnowledgeNodeRecordScalarWhereWithAggregatesInput | KnowledgeNodeRecordScalarWhereWithAggregatesInput[]
    OR?: KnowledgeNodeRecordScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeNodeRecordScalarWhereWithAggregatesInput | KnowledgeNodeRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KnowledgeNodeRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KnowledgeNodeRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KnowledgeNodeRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"KnowledgeNodeRecord">
    nodeType?: StringWithAggregatesFilter<"KnowledgeNodeRecord"> | string
    title?: StringWithAggregatesFilter<"KnowledgeNodeRecord"> | string
    summary?: StringNullableWithAggregatesFilter<"KnowledgeNodeRecord"> | string | null
    sourceEntityType?: StringNullableWithAggregatesFilter<"KnowledgeNodeRecord"> | string | null
    sourceEntityId?: StringNullableWithAggregatesFilter<"KnowledgeNodeRecord"> | string | null
  }

  export type KnowledgeEdgeRecordWhereInput = {
    AND?: KnowledgeEdgeRecordWhereInput | KnowledgeEdgeRecordWhereInput[]
    OR?: KnowledgeEdgeRecordWhereInput[]
    NOT?: KnowledgeEdgeRecordWhereInput | KnowledgeEdgeRecordWhereInput[]
    id?: StringFilter<"KnowledgeEdgeRecord"> | string
    createdAt?: DateTimeFilter<"KnowledgeEdgeRecord"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeEdgeRecord"> | Date | string
    metadata?: JsonNullableFilter<"KnowledgeEdgeRecord">
    sourceNodeId?: StringFilter<"KnowledgeEdgeRecord"> | string
    targetNodeId?: StringFilter<"KnowledgeEdgeRecord"> | string
    edgeType?: StringFilter<"KnowledgeEdgeRecord"> | string
    label?: StringNullableFilter<"KnowledgeEdgeRecord"> | string | null
    weight?: FloatNullableFilter<"KnowledgeEdgeRecord"> | number | null
    directed?: BoolFilter<"KnowledgeEdgeRecord"> | boolean
  }

  export type KnowledgeEdgeRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    edgeType?: SortOrder
    label?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    directed?: SortOrder
  }

  export type KnowledgeEdgeRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KnowledgeEdgeRecordWhereInput | KnowledgeEdgeRecordWhereInput[]
    OR?: KnowledgeEdgeRecordWhereInput[]
    NOT?: KnowledgeEdgeRecordWhereInput | KnowledgeEdgeRecordWhereInput[]
    createdAt?: DateTimeFilter<"KnowledgeEdgeRecord"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeEdgeRecord"> | Date | string
    metadata?: JsonNullableFilter<"KnowledgeEdgeRecord">
    sourceNodeId?: StringFilter<"KnowledgeEdgeRecord"> | string
    targetNodeId?: StringFilter<"KnowledgeEdgeRecord"> | string
    edgeType?: StringFilter<"KnowledgeEdgeRecord"> | string
    label?: StringNullableFilter<"KnowledgeEdgeRecord"> | string | null
    weight?: FloatNullableFilter<"KnowledgeEdgeRecord"> | number | null
    directed?: BoolFilter<"KnowledgeEdgeRecord"> | boolean
  }, "id">

  export type KnowledgeEdgeRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    edgeType?: SortOrder
    label?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    directed?: SortOrder
    _count?: KnowledgeEdgeRecordCountOrderByAggregateInput
    _avg?: KnowledgeEdgeRecordAvgOrderByAggregateInput
    _max?: KnowledgeEdgeRecordMaxOrderByAggregateInput
    _min?: KnowledgeEdgeRecordMinOrderByAggregateInput
    _sum?: KnowledgeEdgeRecordSumOrderByAggregateInput
  }

  export type KnowledgeEdgeRecordScalarWhereWithAggregatesInput = {
    AND?: KnowledgeEdgeRecordScalarWhereWithAggregatesInput | KnowledgeEdgeRecordScalarWhereWithAggregatesInput[]
    OR?: KnowledgeEdgeRecordScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeEdgeRecordScalarWhereWithAggregatesInput | KnowledgeEdgeRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KnowledgeEdgeRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KnowledgeEdgeRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KnowledgeEdgeRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"KnowledgeEdgeRecord">
    sourceNodeId?: StringWithAggregatesFilter<"KnowledgeEdgeRecord"> | string
    targetNodeId?: StringWithAggregatesFilter<"KnowledgeEdgeRecord"> | string
    edgeType?: StringWithAggregatesFilter<"KnowledgeEdgeRecord"> | string
    label?: StringNullableWithAggregatesFilter<"KnowledgeEdgeRecord"> | string | null
    weight?: FloatNullableWithAggregatesFilter<"KnowledgeEdgeRecord"> | number | null
    directed?: BoolWithAggregatesFilter<"KnowledgeEdgeRecord"> | boolean
  }

  export type TopicRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    slug?: string | null
    parentTopicId?: string | null
    skillIds?: TopicRecordCreateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordCreateprerequisiteTopicIdsInput | string[]
    lessons?: LessonRecordCreateNestedManyWithoutTopicInput
  }

  export type TopicRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    slug?: string | null
    parentTopicId?: string | null
    skillIds?: TopicRecordCreateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordCreateprerequisiteTopicIdsInput | string[]
    lessons?: LessonRecordUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    skillIds?: TopicRecordUpdateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordUpdateprerequisiteTopicIdsInput | string[]
    lessons?: LessonRecordUpdateManyWithoutTopicNestedInput
  }

  export type TopicRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    skillIds?: TopicRecordUpdateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordUpdateprerequisiteTopicIdsInput | string[]
    lessons?: LessonRecordUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    slug?: string | null
    parentTopicId?: string | null
    skillIds?: TopicRecordCreateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordCreateprerequisiteTopicIdsInput | string[]
  }

  export type TopicRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    skillIds?: TopicRecordUpdateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordUpdateprerequisiteTopicIdsInput | string[]
  }

  export type TopicRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    skillIds?: TopicRecordUpdateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordUpdateprerequisiteTopicIdsInput | string[]
  }

  export type LessonRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    lessonType: string
    skillIds?: LessonRecordCreateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordCreatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordCreateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    resourceUrls?: LessonRecordCreateresourceUrlsInput | string[]
    topic: TopicRecordCreateNestedOneWithoutLessonsInput
  }

  export type LessonRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    lessonType: string
    topicId: string
    skillIds?: LessonRecordCreateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordCreatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordCreateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    resourceUrls?: LessonRecordCreateresourceUrlsInput | string[]
  }

  export type LessonRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    lessonType?: StringFieldUpdateOperationsInput | string
    skillIds?: LessonRecordUpdateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordUpdatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordUpdateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resourceUrls?: LessonRecordUpdateresourceUrlsInput | string[]
    topic?: TopicRecordUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    lessonType?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    skillIds?: LessonRecordUpdateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordUpdatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordUpdateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resourceUrls?: LessonRecordUpdateresourceUrlsInput | string[]
  }

  export type LessonRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    lessonType: string
    topicId: string
    skillIds?: LessonRecordCreateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordCreatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordCreateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    resourceUrls?: LessonRecordCreateresourceUrlsInput | string[]
  }

  export type LessonRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    lessonType?: StringFieldUpdateOperationsInput | string
    skillIds?: LessonRecordUpdateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordUpdatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordUpdateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resourceUrls?: LessonRecordUpdateresourceUrlsInput | string[]
  }

  export type LessonRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    lessonType?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    skillIds?: LessonRecordUpdateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordUpdatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordUpdateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resourceUrls?: LessonRecordUpdateresourceUrlsInput | string[]
  }

  export type ContentItemRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    contentType: string
    status: string
    topicIds?: ContentItemRecordCreatetopicIdsInput | string[]
    skillIds?: ContentItemRecordCreateskillIdsInput | string[]
    lessonId?: string | null
    assessmentId?: string | null
    projectId?: string | null
    authorUserId?: string | null
    sourceUrl?: string | null
    language?: string | null
    versionLabel?: string | null
  }

  export type ContentItemRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    contentType: string
    status: string
    topicIds?: ContentItemRecordCreatetopicIdsInput | string[]
    skillIds?: ContentItemRecordCreateskillIdsInput | string[]
    lessonId?: string | null
    assessmentId?: string | null
    projectId?: string | null
    authorUserId?: string | null
    sourceUrl?: string | null
    language?: string | null
    versionLabel?: string | null
  }

  export type ContentItemRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    topicIds?: ContentItemRecordUpdatetopicIdsInput | string[]
    skillIds?: ContentItemRecordUpdateskillIdsInput | string[]
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    authorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    versionLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentItemRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    topicIds?: ContentItemRecordUpdatetopicIdsInput | string[]
    skillIds?: ContentItemRecordUpdateskillIdsInput | string[]
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    authorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    versionLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentItemRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    contentType: string
    status: string
    topicIds?: ContentItemRecordCreatetopicIdsInput | string[]
    skillIds?: ContentItemRecordCreateskillIdsInput | string[]
    lessonId?: string | null
    assessmentId?: string | null
    projectId?: string | null
    authorUserId?: string | null
    sourceUrl?: string | null
    language?: string | null
    versionLabel?: string | null
  }

  export type ContentItemRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    topicIds?: ContentItemRecordUpdatetopicIdsInput | string[]
    skillIds?: ContentItemRecordUpdateskillIdsInput | string[]
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    authorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    versionLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentItemRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    topicIds?: ContentItemRecordUpdatetopicIdsInput | string[]
    skillIds?: ContentItemRecordUpdateskillIdsInput | string[]
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    authorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    versionLabel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeachingMaterialRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    fileName: string
    mimeType: string
    materialKind: string
    status: string
    parsedText: string
    parsedStructure: JsonNullValueInput | InputJsonValue
    sourceUrl?: string | null
  }

  export type TeachingMaterialRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    fileName: string
    mimeType: string
    materialKind: string
    status: string
    parsedText: string
    parsedStructure: JsonNullValueInput | InputJsonValue
    sourceUrl?: string | null
  }

  export type TeachingMaterialRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    materialKind?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    parsedStructure?: JsonNullValueInput | InputJsonValue
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeachingMaterialRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    materialKind?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    parsedStructure?: JsonNullValueInput | InputJsonValue
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeachingMaterialRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    fileName: string
    mimeType: string
    materialKind: string
    status: string
    parsedText: string
    parsedStructure: JsonNullValueInput | InputJsonValue
    sourceUrl?: string | null
  }

  export type TeachingMaterialRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    materialKind?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    parsedStructure?: JsonNullValueInput | InputJsonValue
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeachingMaterialRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    materialKind?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    parsedText?: StringFieldUpdateOperationsInput | string
    parsedStructure?: JsonNullValueInput | InputJsonValue
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeachingModuleRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    materialId?: string | null
    title: string
    summary?: string | null
    status: string
    conceptNodeIds?: TeachingModuleRecordCreateconceptNodeIdsInput | string[]
    lessonIds?: TeachingModuleRecordCreatelessonIdsInput | string[]
    sections: JsonNullValueInput | InputJsonValue
    suggestedTopicTitles?: TeachingModuleRecordCreatesuggestedTopicTitlesInput | string[]
  }

  export type TeachingModuleRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    materialId?: string | null
    title: string
    summary?: string | null
    status: string
    conceptNodeIds?: TeachingModuleRecordCreateconceptNodeIdsInput | string[]
    lessonIds?: TeachingModuleRecordCreatelessonIdsInput | string[]
    sections: JsonNullValueInput | InputJsonValue
    suggestedTopicTitles?: TeachingModuleRecordCreatesuggestedTopicTitlesInput | string[]
  }

  export type TeachingModuleRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    conceptNodeIds?: TeachingModuleRecordUpdateconceptNodeIdsInput | string[]
    lessonIds?: TeachingModuleRecordUpdatelessonIdsInput | string[]
    sections?: JsonNullValueInput | InputJsonValue
    suggestedTopicTitles?: TeachingModuleRecordUpdatesuggestedTopicTitlesInput | string[]
  }

  export type TeachingModuleRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    conceptNodeIds?: TeachingModuleRecordUpdateconceptNodeIdsInput | string[]
    lessonIds?: TeachingModuleRecordUpdatelessonIdsInput | string[]
    sections?: JsonNullValueInput | InputJsonValue
    suggestedTopicTitles?: TeachingModuleRecordUpdatesuggestedTopicTitlesInput | string[]
  }

  export type TeachingModuleRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    materialId?: string | null
    title: string
    summary?: string | null
    status: string
    conceptNodeIds?: TeachingModuleRecordCreateconceptNodeIdsInput | string[]
    lessonIds?: TeachingModuleRecordCreatelessonIdsInput | string[]
    sections: JsonNullValueInput | InputJsonValue
    suggestedTopicTitles?: TeachingModuleRecordCreatesuggestedTopicTitlesInput | string[]
  }

  export type TeachingModuleRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    conceptNodeIds?: TeachingModuleRecordUpdateconceptNodeIdsInput | string[]
    lessonIds?: TeachingModuleRecordUpdatelessonIdsInput | string[]
    sections?: JsonNullValueInput | InputJsonValue
    suggestedTopicTitles?: TeachingModuleRecordUpdatesuggestedTopicTitlesInput | string[]
  }

  export type TeachingModuleRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    conceptNodeIds?: TeachingModuleRecordUpdateconceptNodeIdsInput | string[]
    lessonIds?: TeachingModuleRecordUpdatelessonIdsInput | string[]
    sections?: JsonNullValueInput | InputJsonValue
    suggestedTopicTitles?: TeachingModuleRecordUpdatesuggestedTopicTitlesInput | string[]
  }

  export type TeachingQuizRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    moduleId?: string | null
    lessonId?: string | null
    title: string
    summary?: string | null
    questions: JsonNullValueInput | InputJsonValue
  }

  export type TeachingQuizRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    moduleId?: string | null
    lessonId?: string | null
    title: string
    summary?: string | null
    questions: JsonNullValueInput | InputJsonValue
  }

  export type TeachingQuizRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: JsonNullValueInput | InputJsonValue
  }

  export type TeachingQuizRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: JsonNullValueInput | InputJsonValue
  }

  export type TeachingQuizRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    moduleId?: string | null
    lessonId?: string | null
    title: string
    summary?: string | null
    questions: JsonNullValueInput | InputJsonValue
  }

  export type TeachingQuizRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: JsonNullValueInput | InputJsonValue
  }

  export type TeachingQuizRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    moduleId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: JsonNullValueInput | InputJsonValue
  }

  export type StudentAttemptRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId: string
    classroomId?: string | null
    quizId?: string | null
    source: string
    score?: number | null
    answers: JsonNullValueInput | InputJsonValue
    teacherVerified?: boolean
  }

  export type StudentAttemptRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId: string
    classroomId?: string | null
    quizId?: string | null
    source: string
    score?: number | null
    answers: JsonNullValueInput | InputJsonValue
    teacherVerified?: boolean
  }

  export type StudentAttemptRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    teacherVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentAttemptRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    teacherVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentAttemptRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId: string
    classroomId?: string | null
    quizId?: string | null
    source: string
    score?: number | null
    answers: JsonNullValueInput | InputJsonValue
    teacherVerified?: boolean
  }

  export type StudentAttemptRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    teacherVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentAttemptRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    teacherVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KnowledgeNodeRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nodeType: string
    title: string
    summary?: string | null
    sourceEntityType?: string | null
    sourceEntityId?: string | null
  }

  export type KnowledgeNodeRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nodeType: string
    title: string
    summary?: string | null
    sourceEntityType?: string | null
    sourceEntityId?: string | null
  }

  export type KnowledgeNodeRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nodeType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceEntityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KnowledgeNodeRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nodeType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceEntityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KnowledgeNodeRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nodeType: string
    title: string
    summary?: string | null
    sourceEntityType?: string | null
    sourceEntityId?: string | null
  }

  export type KnowledgeNodeRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nodeType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceEntityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KnowledgeNodeRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    nodeType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sourceEntityType?: NullableStringFieldUpdateOperationsInput | string | null
    sourceEntityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KnowledgeEdgeRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceNodeId: string
    targetNodeId: string
    edgeType: string
    label?: string | null
    weight?: number | null
    directed?: boolean
  }

  export type KnowledgeEdgeRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceNodeId: string
    targetNodeId: string
    edgeType: string
    label?: string | null
    weight?: number | null
    directed?: boolean
  }

  export type KnowledgeEdgeRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    edgeType?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    directed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KnowledgeEdgeRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    edgeType?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    directed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KnowledgeEdgeRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceNodeId: string
    targetNodeId: string
    edgeType: string
    label?: string | null
    weight?: number | null
    directed?: boolean
  }

  export type KnowledgeEdgeRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    edgeType?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    directed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KnowledgeEdgeRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    edgeType?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    directed?: BoolFieldUpdateOperationsInput | boolean
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

  export type LessonRecordListRelationFilter = {
    every?: LessonRecordWhereInput
    some?: LessonRecordWhereInput
    none?: LessonRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LessonRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    slug?: SortOrder
    parentTopicId?: SortOrder
    skillIds?: SortOrder
    prerequisiteTopicIds?: SortOrder
  }

  export type TopicRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    slug?: SortOrder
    parentTopicId?: SortOrder
  }

  export type TopicRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    slug?: SortOrder
    parentTopicId?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TopicRecordScalarRelationFilter = {
    is?: TopicRecordWhereInput
    isNot?: TopicRecordWhereInput
  }

  export type LessonRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    lessonType?: SortOrder
    topicId?: SortOrder
    skillIds?: SortOrder
    learningObjectiveIds?: SortOrder
    prerequisiteLessonIds?: SortOrder
    estimatedDurationMinutes?: SortOrder
    difficultyLevel?: SortOrder
    resourceUrls?: SortOrder
  }

  export type LessonRecordAvgOrderByAggregateInput = {
    estimatedDurationMinutes?: SortOrder
  }

  export type LessonRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    lessonType?: SortOrder
    topicId?: SortOrder
    estimatedDurationMinutes?: SortOrder
    difficultyLevel?: SortOrder
  }

  export type LessonRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    lessonType?: SortOrder
    topicId?: SortOrder
    estimatedDurationMinutes?: SortOrder
    difficultyLevel?: SortOrder
  }

  export type LessonRecordSumOrderByAggregateInput = {
    estimatedDurationMinutes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ContentItemRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    contentType?: SortOrder
    status?: SortOrder
    topicIds?: SortOrder
    skillIds?: SortOrder
    lessonId?: SortOrder
    assessmentId?: SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    sourceUrl?: SortOrder
    language?: SortOrder
    versionLabel?: SortOrder
  }

  export type ContentItemRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    contentType?: SortOrder
    status?: SortOrder
    lessonId?: SortOrder
    assessmentId?: SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    sourceUrl?: SortOrder
    language?: SortOrder
    versionLabel?: SortOrder
  }

  export type ContentItemRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    contentType?: SortOrder
    status?: SortOrder
    lessonId?: SortOrder
    assessmentId?: SortOrder
    projectId?: SortOrder
    authorUserId?: SortOrder
    sourceUrl?: SortOrder
    language?: SortOrder
    versionLabel?: SortOrder
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

  export type TeachingMaterialRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    teacherId?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    materialKind?: SortOrder
    status?: SortOrder
    parsedText?: SortOrder
    parsedStructure?: SortOrder
    sourceUrl?: SortOrder
  }

  export type TeachingMaterialRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    materialKind?: SortOrder
    status?: SortOrder
    parsedText?: SortOrder
    sourceUrl?: SortOrder
  }

  export type TeachingMaterialRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    materialKind?: SortOrder
    status?: SortOrder
    parsedText?: SortOrder
    sourceUrl?: SortOrder
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

  export type TeachingModuleRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    teacherId?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    conceptNodeIds?: SortOrder
    lessonIds?: SortOrder
    sections?: SortOrder
    suggestedTopicTitles?: SortOrder
  }

  export type TeachingModuleRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    status?: SortOrder
  }

  export type TeachingModuleRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    status?: SortOrder
  }

  export type TeachingQuizRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    teacherId?: SortOrder
    moduleId?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    questions?: SortOrder
  }

  export type TeachingQuizRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    moduleId?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
  }

  export type TeachingQuizRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    moduleId?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StudentAttemptRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
    quizId?: SortOrder
    source?: SortOrder
    score?: SortOrder
    answers?: SortOrder
    teacherVerified?: SortOrder
  }

  export type StudentAttemptRecordAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type StudentAttemptRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
    quizId?: SortOrder
    source?: SortOrder
    score?: SortOrder
    teacherVerified?: SortOrder
  }

  export type StudentAttemptRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentId?: SortOrder
    classroomId?: SortOrder
    quizId?: SortOrder
    source?: SortOrder
    score?: SortOrder
    teacherVerified?: SortOrder
  }

  export type StudentAttemptRecordSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type KnowledgeNodeRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    nodeType?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    sourceEntityType?: SortOrder
    sourceEntityId?: SortOrder
  }

  export type KnowledgeNodeRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nodeType?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    sourceEntityType?: SortOrder
    sourceEntityId?: SortOrder
  }

  export type KnowledgeNodeRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nodeType?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    sourceEntityType?: SortOrder
    sourceEntityId?: SortOrder
  }

  export type KnowledgeEdgeRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    edgeType?: SortOrder
    label?: SortOrder
    weight?: SortOrder
    directed?: SortOrder
  }

  export type KnowledgeEdgeRecordAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type KnowledgeEdgeRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    edgeType?: SortOrder
    label?: SortOrder
    weight?: SortOrder
    directed?: SortOrder
  }

  export type KnowledgeEdgeRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    edgeType?: SortOrder
    label?: SortOrder
    weight?: SortOrder
    directed?: SortOrder
  }

  export type KnowledgeEdgeRecordSumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type TopicRecordCreateskillIdsInput = {
    set: string[]
  }

  export type TopicRecordCreateprerequisiteTopicIdsInput = {
    set: string[]
  }

  export type LessonRecordCreateNestedManyWithoutTopicInput = {
    create?: XOR<LessonRecordCreateWithoutTopicInput, LessonRecordUncheckedCreateWithoutTopicInput> | LessonRecordCreateWithoutTopicInput[] | LessonRecordUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: LessonRecordCreateOrConnectWithoutTopicInput | LessonRecordCreateOrConnectWithoutTopicInput[]
    createMany?: LessonRecordCreateManyTopicInputEnvelope
    connect?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
  }

  export type LessonRecordUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<LessonRecordCreateWithoutTopicInput, LessonRecordUncheckedCreateWithoutTopicInput> | LessonRecordCreateWithoutTopicInput[] | LessonRecordUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: LessonRecordCreateOrConnectWithoutTopicInput | LessonRecordCreateOrConnectWithoutTopicInput[]
    createMany?: LessonRecordCreateManyTopicInputEnvelope
    connect?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
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

  export type TopicRecordUpdateskillIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TopicRecordUpdateprerequisiteTopicIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LessonRecordUpdateManyWithoutTopicNestedInput = {
    create?: XOR<LessonRecordCreateWithoutTopicInput, LessonRecordUncheckedCreateWithoutTopicInput> | LessonRecordCreateWithoutTopicInput[] | LessonRecordUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: LessonRecordCreateOrConnectWithoutTopicInput | LessonRecordCreateOrConnectWithoutTopicInput[]
    upsert?: LessonRecordUpsertWithWhereUniqueWithoutTopicInput | LessonRecordUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: LessonRecordCreateManyTopicInputEnvelope
    set?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
    disconnect?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
    delete?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
    connect?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
    update?: LessonRecordUpdateWithWhereUniqueWithoutTopicInput | LessonRecordUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: LessonRecordUpdateManyWithWhereWithoutTopicInput | LessonRecordUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: LessonRecordScalarWhereInput | LessonRecordScalarWhereInput[]
  }

  export type LessonRecordUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<LessonRecordCreateWithoutTopicInput, LessonRecordUncheckedCreateWithoutTopicInput> | LessonRecordCreateWithoutTopicInput[] | LessonRecordUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: LessonRecordCreateOrConnectWithoutTopicInput | LessonRecordCreateOrConnectWithoutTopicInput[]
    upsert?: LessonRecordUpsertWithWhereUniqueWithoutTopicInput | LessonRecordUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: LessonRecordCreateManyTopicInputEnvelope
    set?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
    disconnect?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
    delete?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
    connect?: LessonRecordWhereUniqueInput | LessonRecordWhereUniqueInput[]
    update?: LessonRecordUpdateWithWhereUniqueWithoutTopicInput | LessonRecordUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: LessonRecordUpdateManyWithWhereWithoutTopicInput | LessonRecordUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: LessonRecordScalarWhereInput | LessonRecordScalarWhereInput[]
  }

  export type LessonRecordCreateskillIdsInput = {
    set: string[]
  }

  export type LessonRecordCreatelearningObjectiveIdsInput = {
    set: string[]
  }

  export type LessonRecordCreateprerequisiteLessonIdsInput = {
    set: string[]
  }

  export type LessonRecordCreateresourceUrlsInput = {
    set: string[]
  }

  export type TopicRecordCreateNestedOneWithoutLessonsInput = {
    create?: XOR<TopicRecordCreateWithoutLessonsInput, TopicRecordUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: TopicRecordCreateOrConnectWithoutLessonsInput
    connect?: TopicRecordWhereUniqueInput
  }

  export type LessonRecordUpdateskillIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LessonRecordUpdatelearningObjectiveIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LessonRecordUpdateprerequisiteLessonIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LessonRecordUpdateresourceUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TopicRecordUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<TopicRecordCreateWithoutLessonsInput, TopicRecordUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: TopicRecordCreateOrConnectWithoutLessonsInput
    upsert?: TopicRecordUpsertWithoutLessonsInput
    connect?: TopicRecordWhereUniqueInput
    update?: XOR<XOR<TopicRecordUpdateToOneWithWhereWithoutLessonsInput, TopicRecordUpdateWithoutLessonsInput>, TopicRecordUncheckedUpdateWithoutLessonsInput>
  }

  export type ContentItemRecordCreatetopicIdsInput = {
    set: string[]
  }

  export type ContentItemRecordCreateskillIdsInput = {
    set: string[]
  }

  export type ContentItemRecordUpdatetopicIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContentItemRecordUpdateskillIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TeachingModuleRecordCreateconceptNodeIdsInput = {
    set: string[]
  }

  export type TeachingModuleRecordCreatelessonIdsInput = {
    set: string[]
  }

  export type TeachingModuleRecordCreatesuggestedTopicTitlesInput = {
    set: string[]
  }

  export type TeachingModuleRecordUpdateconceptNodeIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TeachingModuleRecordUpdatelessonIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TeachingModuleRecordUpdatesuggestedTopicTitlesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LessonRecordCreateWithoutTopicInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    lessonType: string
    skillIds?: LessonRecordCreateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordCreatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordCreateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    resourceUrls?: LessonRecordCreateresourceUrlsInput | string[]
  }

  export type LessonRecordUncheckedCreateWithoutTopicInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    lessonType: string
    skillIds?: LessonRecordCreateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordCreatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordCreateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    resourceUrls?: LessonRecordCreateresourceUrlsInput | string[]
  }

  export type LessonRecordCreateOrConnectWithoutTopicInput = {
    where: LessonRecordWhereUniqueInput
    create: XOR<LessonRecordCreateWithoutTopicInput, LessonRecordUncheckedCreateWithoutTopicInput>
  }

  export type LessonRecordCreateManyTopicInputEnvelope = {
    data: LessonRecordCreateManyTopicInput | LessonRecordCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type LessonRecordUpsertWithWhereUniqueWithoutTopicInput = {
    where: LessonRecordWhereUniqueInput
    update: XOR<LessonRecordUpdateWithoutTopicInput, LessonRecordUncheckedUpdateWithoutTopicInput>
    create: XOR<LessonRecordCreateWithoutTopicInput, LessonRecordUncheckedCreateWithoutTopicInput>
  }

  export type LessonRecordUpdateWithWhereUniqueWithoutTopicInput = {
    where: LessonRecordWhereUniqueInput
    data: XOR<LessonRecordUpdateWithoutTopicInput, LessonRecordUncheckedUpdateWithoutTopicInput>
  }

  export type LessonRecordUpdateManyWithWhereWithoutTopicInput = {
    where: LessonRecordScalarWhereInput
    data: XOR<LessonRecordUpdateManyMutationInput, LessonRecordUncheckedUpdateManyWithoutTopicInput>
  }

  export type LessonRecordScalarWhereInput = {
    AND?: LessonRecordScalarWhereInput | LessonRecordScalarWhereInput[]
    OR?: LessonRecordScalarWhereInput[]
    NOT?: LessonRecordScalarWhereInput | LessonRecordScalarWhereInput[]
    id?: StringFilter<"LessonRecord"> | string
    createdAt?: DateTimeFilter<"LessonRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LessonRecord"> | Date | string
    metadata?: JsonNullableFilter<"LessonRecord">
    title?: StringFilter<"LessonRecord"> | string
    summary?: StringNullableFilter<"LessonRecord"> | string | null
    lessonType?: StringFilter<"LessonRecord"> | string
    topicId?: StringFilter<"LessonRecord"> | string
    skillIds?: StringNullableListFilter<"LessonRecord">
    learningObjectiveIds?: StringNullableListFilter<"LessonRecord">
    prerequisiteLessonIds?: StringNullableListFilter<"LessonRecord">
    estimatedDurationMinutes?: IntNullableFilter<"LessonRecord"> | number | null
    difficultyLevel?: StringNullableFilter<"LessonRecord"> | string | null
    resourceUrls?: StringNullableListFilter<"LessonRecord">
  }

  export type TopicRecordCreateWithoutLessonsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    slug?: string | null
    parentTopicId?: string | null
    skillIds?: TopicRecordCreateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordCreateprerequisiteTopicIdsInput | string[]
  }

  export type TopicRecordUncheckedCreateWithoutLessonsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    slug?: string | null
    parentTopicId?: string | null
    skillIds?: TopicRecordCreateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordCreateprerequisiteTopicIdsInput | string[]
  }

  export type TopicRecordCreateOrConnectWithoutLessonsInput = {
    where: TopicRecordWhereUniqueInput
    create: XOR<TopicRecordCreateWithoutLessonsInput, TopicRecordUncheckedCreateWithoutLessonsInput>
  }

  export type TopicRecordUpsertWithoutLessonsInput = {
    update: XOR<TopicRecordUpdateWithoutLessonsInput, TopicRecordUncheckedUpdateWithoutLessonsInput>
    create: XOR<TopicRecordCreateWithoutLessonsInput, TopicRecordUncheckedCreateWithoutLessonsInput>
    where?: TopicRecordWhereInput
  }

  export type TopicRecordUpdateToOneWithWhereWithoutLessonsInput = {
    where?: TopicRecordWhereInput
    data: XOR<TopicRecordUpdateWithoutLessonsInput, TopicRecordUncheckedUpdateWithoutLessonsInput>
  }

  export type TopicRecordUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    skillIds?: TopicRecordUpdateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordUpdateprerequisiteTopicIdsInput | string[]
  }

  export type TopicRecordUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    parentTopicId?: NullableStringFieldUpdateOperationsInput | string | null
    skillIds?: TopicRecordUpdateskillIdsInput | string[]
    prerequisiteTopicIds?: TopicRecordUpdateprerequisiteTopicIdsInput | string[]
  }

  export type LessonRecordCreateManyTopicInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    lessonType: string
    skillIds?: LessonRecordCreateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordCreatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordCreateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    resourceUrls?: LessonRecordCreateresourceUrlsInput | string[]
  }

  export type LessonRecordUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    lessonType?: StringFieldUpdateOperationsInput | string
    skillIds?: LessonRecordUpdateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordUpdatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordUpdateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resourceUrls?: LessonRecordUpdateresourceUrlsInput | string[]
  }

  export type LessonRecordUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    lessonType?: StringFieldUpdateOperationsInput | string
    skillIds?: LessonRecordUpdateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordUpdatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordUpdateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resourceUrls?: LessonRecordUpdateresourceUrlsInput | string[]
  }

  export type LessonRecordUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    lessonType?: StringFieldUpdateOperationsInput | string
    skillIds?: LessonRecordUpdateskillIdsInput | string[]
    learningObjectiveIds?: LessonRecordUpdatelearningObjectiveIdsInput | string[]
    prerequisiteLessonIds?: LessonRecordUpdateprerequisiteLessonIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    resourceUrls?: LessonRecordUpdateresourceUrlsInput | string[]
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