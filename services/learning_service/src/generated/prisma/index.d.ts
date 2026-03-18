
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
 * Model LearningPathRecord
 * 
 */
export type LearningPathRecord = $Result.DefaultSelection<Prisma.$LearningPathRecordPayload>
/**
 * Model LearningSessionRecord
 * 
 */
export type LearningSessionRecord = $Result.DefaultSelection<Prisma.$LearningSessionRecordPayload>
/**
 * Model MasteryStateRecord
 * 
 */
export type MasteryStateRecord = $Result.DefaultSelection<Prisma.$MasteryStateRecordPayload>
/**
 * Model ClassroomRecord
 * 
 */
export type ClassroomRecord = $Result.DefaultSelection<Prisma.$ClassroomRecordPayload>
/**
 * Model ClassroomStudentProfileRecord
 * 
 */
export type ClassroomStudentProfileRecord = $Result.DefaultSelection<Prisma.$ClassroomStudentProfileRecordPayload>
/**
 * Model StudentEnrollmentRecord
 * 
 */
export type StudentEnrollmentRecord = $Result.DefaultSelection<Prisma.$StudentEnrollmentRecordPayload>
/**
 * Model ClassroomMeetingRecord
 * 
 */
export type ClassroomMeetingRecord = $Result.DefaultSelection<Prisma.$ClassroomMeetingRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LearningPathRecords
 * const learningPathRecords = await prisma.learningPathRecord.findMany()
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
   * // Fetch zero or more LearningPathRecords
   * const learningPathRecords = await prisma.learningPathRecord.findMany()
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
   * `prisma.learningPathRecord`: Exposes CRUD operations for the **LearningPathRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningPathRecords
    * const learningPathRecords = await prisma.learningPathRecord.findMany()
    * ```
    */
  get learningPathRecord(): Prisma.LearningPathRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningSessionRecord`: Exposes CRUD operations for the **LearningSessionRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningSessionRecords
    * const learningSessionRecords = await prisma.learningSessionRecord.findMany()
    * ```
    */
  get learningSessionRecord(): Prisma.LearningSessionRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masteryStateRecord`: Exposes CRUD operations for the **MasteryStateRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasteryStateRecords
    * const masteryStateRecords = await prisma.masteryStateRecord.findMany()
    * ```
    */
  get masteryStateRecord(): Prisma.MasteryStateRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroomRecord`: Exposes CRUD operations for the **ClassroomRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassroomRecords
    * const classroomRecords = await prisma.classroomRecord.findMany()
    * ```
    */
  get classroomRecord(): Prisma.ClassroomRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroomStudentProfileRecord`: Exposes CRUD operations for the **ClassroomStudentProfileRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassroomStudentProfileRecords
    * const classroomStudentProfileRecords = await prisma.classroomStudentProfileRecord.findMany()
    * ```
    */
  get classroomStudentProfileRecord(): Prisma.ClassroomStudentProfileRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentEnrollmentRecord`: Exposes CRUD operations for the **StudentEnrollmentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentEnrollmentRecords
    * const studentEnrollmentRecords = await prisma.studentEnrollmentRecord.findMany()
    * ```
    */
  get studentEnrollmentRecord(): Prisma.StudentEnrollmentRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroomMeetingRecord`: Exposes CRUD operations for the **ClassroomMeetingRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassroomMeetingRecords
    * const classroomMeetingRecords = await prisma.classroomMeetingRecord.findMany()
    * ```
    */
  get classroomMeetingRecord(): Prisma.ClassroomMeetingRecordDelegate<ExtArgs, ClientOptions>;
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
    LearningPathRecord: 'LearningPathRecord',
    LearningSessionRecord: 'LearningSessionRecord',
    MasteryStateRecord: 'MasteryStateRecord',
    ClassroomRecord: 'ClassroomRecord',
    ClassroomStudentProfileRecord: 'ClassroomStudentProfileRecord',
    StudentEnrollmentRecord: 'StudentEnrollmentRecord',
    ClassroomMeetingRecord: 'ClassroomMeetingRecord'
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
      modelProps: "learningPathRecord" | "learningSessionRecord" | "masteryStateRecord" | "classroomRecord" | "classroomStudentProfileRecord" | "studentEnrollmentRecord" | "classroomMeetingRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LearningPathRecord: {
        payload: Prisma.$LearningPathRecordPayload<ExtArgs>
        fields: Prisma.LearningPathRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningPathRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningPathRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload>
          }
          findFirst: {
            args: Prisma.LearningPathRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningPathRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload>
          }
          findMany: {
            args: Prisma.LearningPathRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload>[]
          }
          create: {
            args: Prisma.LearningPathRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload>
          }
          createMany: {
            args: Prisma.LearningPathRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningPathRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload>[]
          }
          delete: {
            args: Prisma.LearningPathRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload>
          }
          update: {
            args: Prisma.LearningPathRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload>
          }
          deleteMany: {
            args: Prisma.LearningPathRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningPathRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningPathRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload>[]
          }
          upsert: {
            args: Prisma.LearningPathRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathRecordPayload>
          }
          aggregate: {
            args: Prisma.LearningPathRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningPathRecord>
          }
          groupBy: {
            args: Prisma.LearningPathRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningPathRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningPathRecordCountArgs<ExtArgs>
            result: $Utils.Optional<LearningPathRecordCountAggregateOutputType> | number
          }
        }
      }
      LearningSessionRecord: {
        payload: Prisma.$LearningSessionRecordPayload<ExtArgs>
        fields: Prisma.LearningSessionRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningSessionRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningSessionRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload>
          }
          findFirst: {
            args: Prisma.LearningSessionRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningSessionRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload>
          }
          findMany: {
            args: Prisma.LearningSessionRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload>[]
          }
          create: {
            args: Prisma.LearningSessionRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload>
          }
          createMany: {
            args: Prisma.LearningSessionRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningSessionRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload>[]
          }
          delete: {
            args: Prisma.LearningSessionRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload>
          }
          update: {
            args: Prisma.LearningSessionRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload>
          }
          deleteMany: {
            args: Prisma.LearningSessionRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningSessionRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningSessionRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload>[]
          }
          upsert: {
            args: Prisma.LearningSessionRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningSessionRecordPayload>
          }
          aggregate: {
            args: Prisma.LearningSessionRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningSessionRecord>
          }
          groupBy: {
            args: Prisma.LearningSessionRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningSessionRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningSessionRecordCountArgs<ExtArgs>
            result: $Utils.Optional<LearningSessionRecordCountAggregateOutputType> | number
          }
        }
      }
      MasteryStateRecord: {
        payload: Prisma.$MasteryStateRecordPayload<ExtArgs>
        fields: Prisma.MasteryStateRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasteryStateRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasteryStateRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload>
          }
          findFirst: {
            args: Prisma.MasteryStateRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasteryStateRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload>
          }
          findMany: {
            args: Prisma.MasteryStateRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload>[]
          }
          create: {
            args: Prisma.MasteryStateRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload>
          }
          createMany: {
            args: Prisma.MasteryStateRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasteryStateRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload>[]
          }
          delete: {
            args: Prisma.MasteryStateRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload>
          }
          update: {
            args: Prisma.MasteryStateRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload>
          }
          deleteMany: {
            args: Prisma.MasteryStateRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasteryStateRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasteryStateRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload>[]
          }
          upsert: {
            args: Prisma.MasteryStateRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasteryStateRecordPayload>
          }
          aggregate: {
            args: Prisma.MasteryStateRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasteryStateRecord>
          }
          groupBy: {
            args: Prisma.MasteryStateRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasteryStateRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasteryStateRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MasteryStateRecordCountAggregateOutputType> | number
          }
        }
      }
      ClassroomRecord: {
        payload: Prisma.$ClassroomRecordPayload<ExtArgs>
        fields: Prisma.ClassroomRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload>
          }
          findFirst: {
            args: Prisma.ClassroomRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload>
          }
          findMany: {
            args: Prisma.ClassroomRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload>[]
          }
          create: {
            args: Prisma.ClassroomRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload>
          }
          createMany: {
            args: Prisma.ClassroomRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload>[]
          }
          delete: {
            args: Prisma.ClassroomRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload>
          }
          update: {
            args: Prisma.ClassroomRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomRecordPayload>
          }
          aggregate: {
            args: Prisma.ClassroomRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroomRecord>
          }
          groupBy: {
            args: Prisma.ClassroomRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomRecordCountAggregateOutputType> | number
          }
        }
      }
      ClassroomStudentProfileRecord: {
        payload: Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>
        fields: Prisma.ClassroomStudentProfileRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomStudentProfileRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomStudentProfileRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload>
          }
          findFirst: {
            args: Prisma.ClassroomStudentProfileRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomStudentProfileRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload>
          }
          findMany: {
            args: Prisma.ClassroomStudentProfileRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload>[]
          }
          create: {
            args: Prisma.ClassroomStudentProfileRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload>
          }
          createMany: {
            args: Prisma.ClassroomStudentProfileRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomStudentProfileRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload>[]
          }
          delete: {
            args: Prisma.ClassroomStudentProfileRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload>
          }
          update: {
            args: Prisma.ClassroomStudentProfileRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomStudentProfileRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomStudentProfileRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomStudentProfileRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomStudentProfileRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomStudentProfileRecordPayload>
          }
          aggregate: {
            args: Prisma.ClassroomStudentProfileRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroomStudentProfileRecord>
          }
          groupBy: {
            args: Prisma.ClassroomStudentProfileRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomStudentProfileRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomStudentProfileRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomStudentProfileRecordCountAggregateOutputType> | number
          }
        }
      }
      StudentEnrollmentRecord: {
        payload: Prisma.$StudentEnrollmentRecordPayload<ExtArgs>
        fields: Prisma.StudentEnrollmentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentEnrollmentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentEnrollmentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload>
          }
          findFirst: {
            args: Prisma.StudentEnrollmentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentEnrollmentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload>
          }
          findMany: {
            args: Prisma.StudentEnrollmentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload>[]
          }
          create: {
            args: Prisma.StudentEnrollmentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload>
          }
          createMany: {
            args: Prisma.StudentEnrollmentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentEnrollmentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload>[]
          }
          delete: {
            args: Prisma.StudentEnrollmentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload>
          }
          update: {
            args: Prisma.StudentEnrollmentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload>
          }
          deleteMany: {
            args: Prisma.StudentEnrollmentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentEnrollmentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentEnrollmentRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload>[]
          }
          upsert: {
            args: Prisma.StudentEnrollmentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentEnrollmentRecordPayload>
          }
          aggregate: {
            args: Prisma.StudentEnrollmentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentEnrollmentRecord>
          }
          groupBy: {
            args: Prisma.StudentEnrollmentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentEnrollmentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentEnrollmentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<StudentEnrollmentRecordCountAggregateOutputType> | number
          }
        }
      }
      ClassroomMeetingRecord: {
        payload: Prisma.$ClassroomMeetingRecordPayload<ExtArgs>
        fields: Prisma.ClassroomMeetingRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomMeetingRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomMeetingRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload>
          }
          findFirst: {
            args: Prisma.ClassroomMeetingRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomMeetingRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload>
          }
          findMany: {
            args: Prisma.ClassroomMeetingRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload>[]
          }
          create: {
            args: Prisma.ClassroomMeetingRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload>
          }
          createMany: {
            args: Prisma.ClassroomMeetingRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomMeetingRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload>[]
          }
          delete: {
            args: Prisma.ClassroomMeetingRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload>
          }
          update: {
            args: Prisma.ClassroomMeetingRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomMeetingRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomMeetingRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomMeetingRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomMeetingRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomMeetingRecordPayload>
          }
          aggregate: {
            args: Prisma.ClassroomMeetingRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroomMeetingRecord>
          }
          groupBy: {
            args: Prisma.ClassroomMeetingRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomMeetingRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomMeetingRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomMeetingRecordCountAggregateOutputType> | number
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
    learningPathRecord?: LearningPathRecordOmit
    learningSessionRecord?: LearningSessionRecordOmit
    masteryStateRecord?: MasteryStateRecordOmit
    classroomRecord?: ClassroomRecordOmit
    classroomStudentProfileRecord?: ClassroomStudentProfileRecordOmit
    studentEnrollmentRecord?: StudentEnrollmentRecordOmit
    classroomMeetingRecord?: ClassroomMeetingRecordOmit
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
   * Count Type LearningPathRecordCountOutputType
   */

  export type LearningPathRecordCountOutputType = {
    sessions: number
    classrooms: number
  }

  export type LearningPathRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | LearningPathRecordCountOutputTypeCountSessionsArgs
    classrooms?: boolean | LearningPathRecordCountOutputTypeCountClassroomsArgs
  }

  // Custom InputTypes
  /**
   * LearningPathRecordCountOutputType without action
   */
  export type LearningPathRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecordCountOutputType
     */
    select?: LearningPathRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LearningPathRecordCountOutputType without action
   */
  export type LearningPathRecordCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningSessionRecordWhereInput
  }

  /**
   * LearningPathRecordCountOutputType without action
   */
  export type LearningPathRecordCountOutputTypeCountClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomRecordWhereInput
  }


  /**
   * Count Type ClassroomRecordCountOutputType
   */

  export type ClassroomRecordCountOutputType = {
    enrollments: number
    meetings: number
  }

  export type ClassroomRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | ClassroomRecordCountOutputTypeCountEnrollmentsArgs
    meetings?: boolean | ClassroomRecordCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * ClassroomRecordCountOutputType without action
   */
  export type ClassroomRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecordCountOutputType
     */
    select?: ClassroomRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomRecordCountOutputType without action
   */
  export type ClassroomRecordCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentEnrollmentRecordWhereInput
  }

  /**
   * ClassroomRecordCountOutputType without action
   */
  export type ClassroomRecordCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomMeetingRecordWhereInput
  }


  /**
   * Count Type ClassroomStudentProfileRecordCountOutputType
   */

  export type ClassroomStudentProfileRecordCountOutputType = {
    enrollments: number
  }

  export type ClassroomStudentProfileRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | ClassroomStudentProfileRecordCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * ClassroomStudentProfileRecordCountOutputType without action
   */
  export type ClassroomStudentProfileRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecordCountOutputType
     */
    select?: ClassroomStudentProfileRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomStudentProfileRecordCountOutputType without action
   */
  export type ClassroomStudentProfileRecordCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentEnrollmentRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LearningPathRecord
   */

  export type AggregateLearningPathRecord = {
    _count: LearningPathRecordCountAggregateOutputType | null
    _avg: LearningPathRecordAvgAggregateOutputType | null
    _sum: LearningPathRecordSumAggregateOutputType | null
    _min: LearningPathRecordMinAggregateOutputType | null
    _max: LearningPathRecordMaxAggregateOutputType | null
  }

  export type LearningPathRecordAvgAggregateOutputType = {
    estimatedDurationMinutes: number | null
  }

  export type LearningPathRecordSumAggregateOutputType = {
    estimatedDurationMinutes: number | null
  }

  export type LearningPathRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    summary: string | null
    status: string | null
    estimatedDurationMinutes: number | null
    difficultyLevel: string | null
    sequencingStrategy: string | null
  }

  export type LearningPathRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    summary: string | null
    status: string | null
    estimatedDurationMinutes: number | null
    difficultyLevel: string | null
    sequencingStrategy: string | null
  }

  export type LearningPathRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    title: number
    summary: number
    status: number
    audienceRoles: number
    topicIds: number
    skillIds: number
    lessonIds: number
    projectIds: number
    estimatedDurationMinutes: number
    difficultyLevel: number
    sequencingStrategy: number
    _all: number
  }


  export type LearningPathRecordAvgAggregateInputType = {
    estimatedDurationMinutes?: true
  }

  export type LearningPathRecordSumAggregateInputType = {
    estimatedDurationMinutes?: true
  }

  export type LearningPathRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    summary?: true
    status?: true
    estimatedDurationMinutes?: true
    difficultyLevel?: true
    sequencingStrategy?: true
  }

  export type LearningPathRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    summary?: true
    status?: true
    estimatedDurationMinutes?: true
    difficultyLevel?: true
    sequencingStrategy?: true
  }

  export type LearningPathRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    title?: true
    summary?: true
    status?: true
    audienceRoles?: true
    topicIds?: true
    skillIds?: true
    lessonIds?: true
    projectIds?: true
    estimatedDurationMinutes?: true
    difficultyLevel?: true
    sequencingStrategy?: true
    _all?: true
  }

  export type LearningPathRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPathRecord to aggregate.
     */
    where?: LearningPathRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPathRecords to fetch.
     */
    orderBy?: LearningPathRecordOrderByWithRelationInput | LearningPathRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningPathRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPathRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPathRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningPathRecords
    **/
    _count?: true | LearningPathRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningPathRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningPathRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningPathRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningPathRecordMaxAggregateInputType
  }

  export type GetLearningPathRecordAggregateType<T extends LearningPathRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningPathRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningPathRecord[P]>
      : GetScalarType<T[P], AggregateLearningPathRecord[P]>
  }




  export type LearningPathRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningPathRecordWhereInput
    orderBy?: LearningPathRecordOrderByWithAggregationInput | LearningPathRecordOrderByWithAggregationInput[]
    by: LearningPathRecordScalarFieldEnum[] | LearningPathRecordScalarFieldEnum
    having?: LearningPathRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningPathRecordCountAggregateInputType | true
    _avg?: LearningPathRecordAvgAggregateInputType
    _sum?: LearningPathRecordSumAggregateInputType
    _min?: LearningPathRecordMinAggregateInputType
    _max?: LearningPathRecordMaxAggregateInputType
  }

  export type LearningPathRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    title: string
    summary: string | null
    status: string
    audienceRoles: string[]
    topicIds: string[]
    skillIds: string[]
    lessonIds: string[]
    projectIds: string[]
    estimatedDurationMinutes: number | null
    difficultyLevel: string | null
    sequencingStrategy: string | null
    _count: LearningPathRecordCountAggregateOutputType | null
    _avg: LearningPathRecordAvgAggregateOutputType | null
    _sum: LearningPathRecordSumAggregateOutputType | null
    _min: LearningPathRecordMinAggregateOutputType | null
    _max: LearningPathRecordMaxAggregateOutputType | null
  }

  type GetLearningPathRecordGroupByPayload<T extends LearningPathRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningPathRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningPathRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningPathRecordGroupByOutputType[P]>
            : GetScalarType<T[P], LearningPathRecordGroupByOutputType[P]>
        }
      >
    >


  export type LearningPathRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    status?: boolean
    audienceRoles?: boolean
    topicIds?: boolean
    skillIds?: boolean
    lessonIds?: boolean
    projectIds?: boolean
    estimatedDurationMinutes?: boolean
    difficultyLevel?: boolean
    sequencingStrategy?: boolean
    sessions?: boolean | LearningPathRecord$sessionsArgs<ExtArgs>
    classrooms?: boolean | LearningPathRecord$classroomsArgs<ExtArgs>
    _count?: boolean | LearningPathRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningPathRecord"]>

  export type LearningPathRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    status?: boolean
    audienceRoles?: boolean
    topicIds?: boolean
    skillIds?: boolean
    lessonIds?: boolean
    projectIds?: boolean
    estimatedDurationMinutes?: boolean
    difficultyLevel?: boolean
    sequencingStrategy?: boolean
  }, ExtArgs["result"]["learningPathRecord"]>

  export type LearningPathRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    status?: boolean
    audienceRoles?: boolean
    topicIds?: boolean
    skillIds?: boolean
    lessonIds?: boolean
    projectIds?: boolean
    estimatedDurationMinutes?: boolean
    difficultyLevel?: boolean
    sequencingStrategy?: boolean
  }, ExtArgs["result"]["learningPathRecord"]>

  export type LearningPathRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    title?: boolean
    summary?: boolean
    status?: boolean
    audienceRoles?: boolean
    topicIds?: boolean
    skillIds?: boolean
    lessonIds?: boolean
    projectIds?: boolean
    estimatedDurationMinutes?: boolean
    difficultyLevel?: boolean
    sequencingStrategy?: boolean
  }

  export type LearningPathRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "title" | "summary" | "status" | "audienceRoles" | "topicIds" | "skillIds" | "lessonIds" | "projectIds" | "estimatedDurationMinutes" | "difficultyLevel" | "sequencingStrategy", ExtArgs["result"]["learningPathRecord"]>
  export type LearningPathRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | LearningPathRecord$sessionsArgs<ExtArgs>
    classrooms?: boolean | LearningPathRecord$classroomsArgs<ExtArgs>
    _count?: boolean | LearningPathRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LearningPathRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LearningPathRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LearningPathRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningPathRecord"
    objects: {
      sessions: Prisma.$LearningSessionRecordPayload<ExtArgs>[]
      classrooms: Prisma.$ClassroomRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      title: string
      summary: string | null
      status: string
      audienceRoles: string[]
      topicIds: string[]
      skillIds: string[]
      lessonIds: string[]
      projectIds: string[]
      estimatedDurationMinutes: number | null
      difficultyLevel: string | null
      sequencingStrategy: string | null
    }, ExtArgs["result"]["learningPathRecord"]>
    composites: {}
  }

  type LearningPathRecordGetPayload<S extends boolean | null | undefined | LearningPathRecordDefaultArgs> = $Result.GetResult<Prisma.$LearningPathRecordPayload, S>

  type LearningPathRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningPathRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningPathRecordCountAggregateInputType | true
    }

  export interface LearningPathRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningPathRecord'], meta: { name: 'LearningPathRecord' } }
    /**
     * Find zero or one LearningPathRecord that matches the filter.
     * @param {LearningPathRecordFindUniqueArgs} args - Arguments to find a LearningPathRecord
     * @example
     * // Get one LearningPathRecord
     * const learningPathRecord = await prisma.learningPathRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningPathRecordFindUniqueArgs>(args: SelectSubset<T, LearningPathRecordFindUniqueArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningPathRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningPathRecordFindUniqueOrThrowArgs} args - Arguments to find a LearningPathRecord
     * @example
     * // Get one LearningPathRecord
     * const learningPathRecord = await prisma.learningPathRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningPathRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningPathRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningPathRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathRecordFindFirstArgs} args - Arguments to find a LearningPathRecord
     * @example
     * // Get one LearningPathRecord
     * const learningPathRecord = await prisma.learningPathRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningPathRecordFindFirstArgs>(args?: SelectSubset<T, LearningPathRecordFindFirstArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningPathRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathRecordFindFirstOrThrowArgs} args - Arguments to find a LearningPathRecord
     * @example
     * // Get one LearningPathRecord
     * const learningPathRecord = await prisma.learningPathRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningPathRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningPathRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningPathRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningPathRecords
     * const learningPathRecords = await prisma.learningPathRecord.findMany()
     * 
     * // Get first 10 LearningPathRecords
     * const learningPathRecords = await prisma.learningPathRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningPathRecordWithIdOnly = await prisma.learningPathRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningPathRecordFindManyArgs>(args?: SelectSubset<T, LearningPathRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningPathRecord.
     * @param {LearningPathRecordCreateArgs} args - Arguments to create a LearningPathRecord.
     * @example
     * // Create one LearningPathRecord
     * const LearningPathRecord = await prisma.learningPathRecord.create({
     *   data: {
     *     // ... data to create a LearningPathRecord
     *   }
     * })
     * 
     */
    create<T extends LearningPathRecordCreateArgs>(args: SelectSubset<T, LearningPathRecordCreateArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningPathRecords.
     * @param {LearningPathRecordCreateManyArgs} args - Arguments to create many LearningPathRecords.
     * @example
     * // Create many LearningPathRecords
     * const learningPathRecord = await prisma.learningPathRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningPathRecordCreateManyArgs>(args?: SelectSubset<T, LearningPathRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningPathRecords and returns the data saved in the database.
     * @param {LearningPathRecordCreateManyAndReturnArgs} args - Arguments to create many LearningPathRecords.
     * @example
     * // Create many LearningPathRecords
     * const learningPathRecord = await prisma.learningPathRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningPathRecords and only return the `id`
     * const learningPathRecordWithIdOnly = await prisma.learningPathRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningPathRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningPathRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningPathRecord.
     * @param {LearningPathRecordDeleteArgs} args - Arguments to delete one LearningPathRecord.
     * @example
     * // Delete one LearningPathRecord
     * const LearningPathRecord = await prisma.learningPathRecord.delete({
     *   where: {
     *     // ... filter to delete one LearningPathRecord
     *   }
     * })
     * 
     */
    delete<T extends LearningPathRecordDeleteArgs>(args: SelectSubset<T, LearningPathRecordDeleteArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningPathRecord.
     * @param {LearningPathRecordUpdateArgs} args - Arguments to update one LearningPathRecord.
     * @example
     * // Update one LearningPathRecord
     * const learningPathRecord = await prisma.learningPathRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningPathRecordUpdateArgs>(args: SelectSubset<T, LearningPathRecordUpdateArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningPathRecords.
     * @param {LearningPathRecordDeleteManyArgs} args - Arguments to filter LearningPathRecords to delete.
     * @example
     * // Delete a few LearningPathRecords
     * const { count } = await prisma.learningPathRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningPathRecordDeleteManyArgs>(args?: SelectSubset<T, LearningPathRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningPathRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningPathRecords
     * const learningPathRecord = await prisma.learningPathRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningPathRecordUpdateManyArgs>(args: SelectSubset<T, LearningPathRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningPathRecords and returns the data updated in the database.
     * @param {LearningPathRecordUpdateManyAndReturnArgs} args - Arguments to update many LearningPathRecords.
     * @example
     * // Update many LearningPathRecords
     * const learningPathRecord = await prisma.learningPathRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningPathRecords and only return the `id`
     * const learningPathRecordWithIdOnly = await prisma.learningPathRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends LearningPathRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningPathRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningPathRecord.
     * @param {LearningPathRecordUpsertArgs} args - Arguments to update or create a LearningPathRecord.
     * @example
     * // Update or create a LearningPathRecord
     * const learningPathRecord = await prisma.learningPathRecord.upsert({
     *   create: {
     *     // ... data to create a LearningPathRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningPathRecord we want to update
     *   }
     * })
     */
    upsert<T extends LearningPathRecordUpsertArgs>(args: SelectSubset<T, LearningPathRecordUpsertArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningPathRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathRecordCountArgs} args - Arguments to filter LearningPathRecords to count.
     * @example
     * // Count the number of LearningPathRecords
     * const count = await prisma.learningPathRecord.count({
     *   where: {
     *     // ... the filter for the LearningPathRecords we want to count
     *   }
     * })
    **/
    count<T extends LearningPathRecordCountArgs>(
      args?: Subset<T, LearningPathRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningPathRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningPathRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningPathRecordAggregateArgs>(args: Subset<T, LearningPathRecordAggregateArgs>): Prisma.PrismaPromise<GetLearningPathRecordAggregateType<T>>

    /**
     * Group by LearningPathRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathRecordGroupByArgs} args - Group by arguments.
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
      T extends LearningPathRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningPathRecordGroupByArgs['orderBy'] }
        : { orderBy?: LearningPathRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningPathRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningPathRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningPathRecord model
   */
  readonly fields: LearningPathRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningPathRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningPathRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends LearningPathRecord$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, LearningPathRecord$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classrooms<T extends LearningPathRecord$classroomsArgs<ExtArgs> = {}>(args?: Subset<T, LearningPathRecord$classroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LearningPathRecord model
   */
  interface LearningPathRecordFieldRefs {
    readonly id: FieldRef<"LearningPathRecord", 'String'>
    readonly createdAt: FieldRef<"LearningPathRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningPathRecord", 'DateTime'>
    readonly metadata: FieldRef<"LearningPathRecord", 'Json'>
    readonly title: FieldRef<"LearningPathRecord", 'String'>
    readonly summary: FieldRef<"LearningPathRecord", 'String'>
    readonly status: FieldRef<"LearningPathRecord", 'String'>
    readonly audienceRoles: FieldRef<"LearningPathRecord", 'String[]'>
    readonly topicIds: FieldRef<"LearningPathRecord", 'String[]'>
    readonly skillIds: FieldRef<"LearningPathRecord", 'String[]'>
    readonly lessonIds: FieldRef<"LearningPathRecord", 'String[]'>
    readonly projectIds: FieldRef<"LearningPathRecord", 'String[]'>
    readonly estimatedDurationMinutes: FieldRef<"LearningPathRecord", 'Int'>
    readonly difficultyLevel: FieldRef<"LearningPathRecord", 'String'>
    readonly sequencingStrategy: FieldRef<"LearningPathRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LearningPathRecord findUnique
   */
  export type LearningPathRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathRecord to fetch.
     */
    where: LearningPathRecordWhereUniqueInput
  }

  /**
   * LearningPathRecord findUniqueOrThrow
   */
  export type LearningPathRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathRecord to fetch.
     */
    where: LearningPathRecordWhereUniqueInput
  }

  /**
   * LearningPathRecord findFirst
   */
  export type LearningPathRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathRecord to fetch.
     */
    where?: LearningPathRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPathRecords to fetch.
     */
    orderBy?: LearningPathRecordOrderByWithRelationInput | LearningPathRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPathRecords.
     */
    cursor?: LearningPathRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPathRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPathRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPathRecords.
     */
    distinct?: LearningPathRecordScalarFieldEnum | LearningPathRecordScalarFieldEnum[]
  }

  /**
   * LearningPathRecord findFirstOrThrow
   */
  export type LearningPathRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathRecord to fetch.
     */
    where?: LearningPathRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPathRecords to fetch.
     */
    orderBy?: LearningPathRecordOrderByWithRelationInput | LearningPathRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPathRecords.
     */
    cursor?: LearningPathRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPathRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPathRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPathRecords.
     */
    distinct?: LearningPathRecordScalarFieldEnum | LearningPathRecordScalarFieldEnum[]
  }

  /**
   * LearningPathRecord findMany
   */
  export type LearningPathRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathRecords to fetch.
     */
    where?: LearningPathRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPathRecords to fetch.
     */
    orderBy?: LearningPathRecordOrderByWithRelationInput | LearningPathRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningPathRecords.
     */
    cursor?: LearningPathRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPathRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPathRecords.
     */
    skip?: number
    distinct?: LearningPathRecordScalarFieldEnum | LearningPathRecordScalarFieldEnum[]
  }

  /**
   * LearningPathRecord create
   */
  export type LearningPathRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningPathRecord.
     */
    data: XOR<LearningPathRecordCreateInput, LearningPathRecordUncheckedCreateInput>
  }

  /**
   * LearningPathRecord createMany
   */
  export type LearningPathRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningPathRecords.
     */
    data: LearningPathRecordCreateManyInput | LearningPathRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningPathRecord createManyAndReturn
   */
  export type LearningPathRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * The data used to create many LearningPathRecords.
     */
    data: LearningPathRecordCreateManyInput | LearningPathRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningPathRecord update
   */
  export type LearningPathRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningPathRecord.
     */
    data: XOR<LearningPathRecordUpdateInput, LearningPathRecordUncheckedUpdateInput>
    /**
     * Choose, which LearningPathRecord to update.
     */
    where: LearningPathRecordWhereUniqueInput
  }

  /**
   * LearningPathRecord updateMany
   */
  export type LearningPathRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningPathRecords.
     */
    data: XOR<LearningPathRecordUpdateManyMutationInput, LearningPathRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningPathRecords to update
     */
    where?: LearningPathRecordWhereInput
    /**
     * Limit how many LearningPathRecords to update.
     */
    limit?: number
  }

  /**
   * LearningPathRecord updateManyAndReturn
   */
  export type LearningPathRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * The data used to update LearningPathRecords.
     */
    data: XOR<LearningPathRecordUpdateManyMutationInput, LearningPathRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningPathRecords to update
     */
    where?: LearningPathRecordWhereInput
    /**
     * Limit how many LearningPathRecords to update.
     */
    limit?: number
  }

  /**
   * LearningPathRecord upsert
   */
  export type LearningPathRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningPathRecord to update in case it exists.
     */
    where: LearningPathRecordWhereUniqueInput
    /**
     * In case the LearningPathRecord found by the `where` argument doesn't exist, create a new LearningPathRecord with this data.
     */
    create: XOR<LearningPathRecordCreateInput, LearningPathRecordUncheckedCreateInput>
    /**
     * In case the LearningPathRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningPathRecordUpdateInput, LearningPathRecordUncheckedUpdateInput>
  }

  /**
   * LearningPathRecord delete
   */
  export type LearningPathRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    /**
     * Filter which LearningPathRecord to delete.
     */
    where: LearningPathRecordWhereUniqueInput
  }

  /**
   * LearningPathRecord deleteMany
   */
  export type LearningPathRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPathRecords to delete
     */
    where?: LearningPathRecordWhereInput
    /**
     * Limit how many LearningPathRecords to delete.
     */
    limit?: number
  }

  /**
   * LearningPathRecord.sessions
   */
  export type LearningPathRecord$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    where?: LearningSessionRecordWhereInput
    orderBy?: LearningSessionRecordOrderByWithRelationInput | LearningSessionRecordOrderByWithRelationInput[]
    cursor?: LearningSessionRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningSessionRecordScalarFieldEnum | LearningSessionRecordScalarFieldEnum[]
  }

  /**
   * LearningPathRecord.classrooms
   */
  export type LearningPathRecord$classroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    where?: ClassroomRecordWhereInput
    orderBy?: ClassroomRecordOrderByWithRelationInput | ClassroomRecordOrderByWithRelationInput[]
    cursor?: ClassroomRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomRecordScalarFieldEnum | ClassroomRecordScalarFieldEnum[]
  }

  /**
   * LearningPathRecord without action
   */
  export type LearningPathRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
  }


  /**
   * Model LearningSessionRecord
   */

  export type AggregateLearningSessionRecord = {
    _count: LearningSessionRecordCountAggregateOutputType | null
    _avg: LearningSessionRecordAvgAggregateOutputType | null
    _sum: LearningSessionRecordSumAggregateOutputType | null
    _min: LearningSessionRecordMinAggregateOutputType | null
    _max: LearningSessionRecordMaxAggregateOutputType | null
  }

  export type LearningSessionRecordAvgAggregateOutputType = {
    progressPercent: number | null
  }

  export type LearningSessionRecordSumAggregateOutputType = {
    progressPercent: number | null
  }

  export type LearningSessionRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    learnerUserId: string | null
    status: string | null
    learningPathId: string | null
    lessonId: string | null
    topicId: string | null
    tutorSessionId: string | null
    startedAt: Date | null
    endedAt: Date | null
    progressPercent: number | null
    difficultyLevel: string | null
  }

  export type LearningSessionRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    learnerUserId: string | null
    status: string | null
    learningPathId: string | null
    lessonId: string | null
    topicId: string | null
    tutorSessionId: string | null
    startedAt: Date | null
    endedAt: Date | null
    progressPercent: number | null
    difficultyLevel: string | null
  }

  export type LearningSessionRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    learnerUserId: number
    status: number
    learningPathId: number
    lessonId: number
    topicId: number
    tutorSessionId: number
    startedAt: number
    endedAt: number
    progressPercent: number
    difficultyLevel: number
    masteryStateIds: number
    recommendationIds: number
    _all: number
  }


  export type LearningSessionRecordAvgAggregateInputType = {
    progressPercent?: true
  }

  export type LearningSessionRecordSumAggregateInputType = {
    progressPercent?: true
  }

  export type LearningSessionRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    learnerUserId?: true
    status?: true
    learningPathId?: true
    lessonId?: true
    topicId?: true
    tutorSessionId?: true
    startedAt?: true
    endedAt?: true
    progressPercent?: true
    difficultyLevel?: true
  }

  export type LearningSessionRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    learnerUserId?: true
    status?: true
    learningPathId?: true
    lessonId?: true
    topicId?: true
    tutorSessionId?: true
    startedAt?: true
    endedAt?: true
    progressPercent?: true
    difficultyLevel?: true
  }

  export type LearningSessionRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    learnerUserId?: true
    status?: true
    learningPathId?: true
    lessonId?: true
    topicId?: true
    tutorSessionId?: true
    startedAt?: true
    endedAt?: true
    progressPercent?: true
    difficultyLevel?: true
    masteryStateIds?: true
    recommendationIds?: true
    _all?: true
  }

  export type LearningSessionRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningSessionRecord to aggregate.
     */
    where?: LearningSessionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSessionRecords to fetch.
     */
    orderBy?: LearningSessionRecordOrderByWithRelationInput | LearningSessionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningSessionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSessionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSessionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningSessionRecords
    **/
    _count?: true | LearningSessionRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningSessionRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningSessionRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningSessionRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningSessionRecordMaxAggregateInputType
  }

  export type GetLearningSessionRecordAggregateType<T extends LearningSessionRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningSessionRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningSessionRecord[P]>
      : GetScalarType<T[P], AggregateLearningSessionRecord[P]>
  }




  export type LearningSessionRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningSessionRecordWhereInput
    orderBy?: LearningSessionRecordOrderByWithAggregationInput | LearningSessionRecordOrderByWithAggregationInput[]
    by: LearningSessionRecordScalarFieldEnum[] | LearningSessionRecordScalarFieldEnum
    having?: LearningSessionRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningSessionRecordCountAggregateInputType | true
    _avg?: LearningSessionRecordAvgAggregateInputType
    _sum?: LearningSessionRecordSumAggregateInputType
    _min?: LearningSessionRecordMinAggregateInputType
    _max?: LearningSessionRecordMaxAggregateInputType
  }

  export type LearningSessionRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    learnerUserId: string
    status: string
    learningPathId: string | null
    lessonId: string | null
    topicId: string | null
    tutorSessionId: string | null
    startedAt: Date
    endedAt: Date | null
    progressPercent: number
    difficultyLevel: string | null
    masteryStateIds: string[]
    recommendationIds: string[]
    _count: LearningSessionRecordCountAggregateOutputType | null
    _avg: LearningSessionRecordAvgAggregateOutputType | null
    _sum: LearningSessionRecordSumAggregateOutputType | null
    _min: LearningSessionRecordMinAggregateOutputType | null
    _max: LearningSessionRecordMaxAggregateOutputType | null
  }

  type GetLearningSessionRecordGroupByPayload<T extends LearningSessionRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningSessionRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningSessionRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningSessionRecordGroupByOutputType[P]>
            : GetScalarType<T[P], LearningSessionRecordGroupByOutputType[P]>
        }
      >
    >


  export type LearningSessionRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    status?: boolean
    learningPathId?: boolean
    lessonId?: boolean
    topicId?: boolean
    tutorSessionId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    progressPercent?: boolean
    difficultyLevel?: boolean
    masteryStateIds?: boolean
    recommendationIds?: boolean
    learningPath?: boolean | LearningSessionRecord$learningPathArgs<ExtArgs>
  }, ExtArgs["result"]["learningSessionRecord"]>

  export type LearningSessionRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    status?: boolean
    learningPathId?: boolean
    lessonId?: boolean
    topicId?: boolean
    tutorSessionId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    progressPercent?: boolean
    difficultyLevel?: boolean
    masteryStateIds?: boolean
    recommendationIds?: boolean
    learningPath?: boolean | LearningSessionRecord$learningPathArgs<ExtArgs>
  }, ExtArgs["result"]["learningSessionRecord"]>

  export type LearningSessionRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    status?: boolean
    learningPathId?: boolean
    lessonId?: boolean
    topicId?: boolean
    tutorSessionId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    progressPercent?: boolean
    difficultyLevel?: boolean
    masteryStateIds?: boolean
    recommendationIds?: boolean
    learningPath?: boolean | LearningSessionRecord$learningPathArgs<ExtArgs>
  }, ExtArgs["result"]["learningSessionRecord"]>

  export type LearningSessionRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    status?: boolean
    learningPathId?: boolean
    lessonId?: boolean
    topicId?: boolean
    tutorSessionId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    progressPercent?: boolean
    difficultyLevel?: boolean
    masteryStateIds?: boolean
    recommendationIds?: boolean
  }

  export type LearningSessionRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "learnerUserId" | "status" | "learningPathId" | "lessonId" | "topicId" | "tutorSessionId" | "startedAt" | "endedAt" | "progressPercent" | "difficultyLevel" | "masteryStateIds" | "recommendationIds", ExtArgs["result"]["learningSessionRecord"]>
  export type LearningSessionRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningPath?: boolean | LearningSessionRecord$learningPathArgs<ExtArgs>
  }
  export type LearningSessionRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningPath?: boolean | LearningSessionRecord$learningPathArgs<ExtArgs>
  }
  export type LearningSessionRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningPath?: boolean | LearningSessionRecord$learningPathArgs<ExtArgs>
  }

  export type $LearningSessionRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningSessionRecord"
    objects: {
      learningPath: Prisma.$LearningPathRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      learnerUserId: string
      status: string
      learningPathId: string | null
      lessonId: string | null
      topicId: string | null
      tutorSessionId: string | null
      startedAt: Date
      endedAt: Date | null
      progressPercent: number
      difficultyLevel: string | null
      masteryStateIds: string[]
      recommendationIds: string[]
    }, ExtArgs["result"]["learningSessionRecord"]>
    composites: {}
  }

  type LearningSessionRecordGetPayload<S extends boolean | null | undefined | LearningSessionRecordDefaultArgs> = $Result.GetResult<Prisma.$LearningSessionRecordPayload, S>

  type LearningSessionRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningSessionRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningSessionRecordCountAggregateInputType | true
    }

  export interface LearningSessionRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningSessionRecord'], meta: { name: 'LearningSessionRecord' } }
    /**
     * Find zero or one LearningSessionRecord that matches the filter.
     * @param {LearningSessionRecordFindUniqueArgs} args - Arguments to find a LearningSessionRecord
     * @example
     * // Get one LearningSessionRecord
     * const learningSessionRecord = await prisma.learningSessionRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningSessionRecordFindUniqueArgs>(args: SelectSubset<T, LearningSessionRecordFindUniqueArgs<ExtArgs>>): Prisma__LearningSessionRecordClient<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningSessionRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningSessionRecordFindUniqueOrThrowArgs} args - Arguments to find a LearningSessionRecord
     * @example
     * // Get one LearningSessionRecord
     * const learningSessionRecord = await prisma.learningSessionRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningSessionRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningSessionRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningSessionRecordClient<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningSessionRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionRecordFindFirstArgs} args - Arguments to find a LearningSessionRecord
     * @example
     * // Get one LearningSessionRecord
     * const learningSessionRecord = await prisma.learningSessionRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningSessionRecordFindFirstArgs>(args?: SelectSubset<T, LearningSessionRecordFindFirstArgs<ExtArgs>>): Prisma__LearningSessionRecordClient<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningSessionRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionRecordFindFirstOrThrowArgs} args - Arguments to find a LearningSessionRecord
     * @example
     * // Get one LearningSessionRecord
     * const learningSessionRecord = await prisma.learningSessionRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningSessionRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningSessionRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningSessionRecordClient<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningSessionRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningSessionRecords
     * const learningSessionRecords = await prisma.learningSessionRecord.findMany()
     * 
     * // Get first 10 LearningSessionRecords
     * const learningSessionRecords = await prisma.learningSessionRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningSessionRecordWithIdOnly = await prisma.learningSessionRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningSessionRecordFindManyArgs>(args?: SelectSubset<T, LearningSessionRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningSessionRecord.
     * @param {LearningSessionRecordCreateArgs} args - Arguments to create a LearningSessionRecord.
     * @example
     * // Create one LearningSessionRecord
     * const LearningSessionRecord = await prisma.learningSessionRecord.create({
     *   data: {
     *     // ... data to create a LearningSessionRecord
     *   }
     * })
     * 
     */
    create<T extends LearningSessionRecordCreateArgs>(args: SelectSubset<T, LearningSessionRecordCreateArgs<ExtArgs>>): Prisma__LearningSessionRecordClient<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningSessionRecords.
     * @param {LearningSessionRecordCreateManyArgs} args - Arguments to create many LearningSessionRecords.
     * @example
     * // Create many LearningSessionRecords
     * const learningSessionRecord = await prisma.learningSessionRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningSessionRecordCreateManyArgs>(args?: SelectSubset<T, LearningSessionRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningSessionRecords and returns the data saved in the database.
     * @param {LearningSessionRecordCreateManyAndReturnArgs} args - Arguments to create many LearningSessionRecords.
     * @example
     * // Create many LearningSessionRecords
     * const learningSessionRecord = await prisma.learningSessionRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningSessionRecords and only return the `id`
     * const learningSessionRecordWithIdOnly = await prisma.learningSessionRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningSessionRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningSessionRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningSessionRecord.
     * @param {LearningSessionRecordDeleteArgs} args - Arguments to delete one LearningSessionRecord.
     * @example
     * // Delete one LearningSessionRecord
     * const LearningSessionRecord = await prisma.learningSessionRecord.delete({
     *   where: {
     *     // ... filter to delete one LearningSessionRecord
     *   }
     * })
     * 
     */
    delete<T extends LearningSessionRecordDeleteArgs>(args: SelectSubset<T, LearningSessionRecordDeleteArgs<ExtArgs>>): Prisma__LearningSessionRecordClient<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningSessionRecord.
     * @param {LearningSessionRecordUpdateArgs} args - Arguments to update one LearningSessionRecord.
     * @example
     * // Update one LearningSessionRecord
     * const learningSessionRecord = await prisma.learningSessionRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningSessionRecordUpdateArgs>(args: SelectSubset<T, LearningSessionRecordUpdateArgs<ExtArgs>>): Prisma__LearningSessionRecordClient<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningSessionRecords.
     * @param {LearningSessionRecordDeleteManyArgs} args - Arguments to filter LearningSessionRecords to delete.
     * @example
     * // Delete a few LearningSessionRecords
     * const { count } = await prisma.learningSessionRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningSessionRecordDeleteManyArgs>(args?: SelectSubset<T, LearningSessionRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningSessionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningSessionRecords
     * const learningSessionRecord = await prisma.learningSessionRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningSessionRecordUpdateManyArgs>(args: SelectSubset<T, LearningSessionRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningSessionRecords and returns the data updated in the database.
     * @param {LearningSessionRecordUpdateManyAndReturnArgs} args - Arguments to update many LearningSessionRecords.
     * @example
     * // Update many LearningSessionRecords
     * const learningSessionRecord = await prisma.learningSessionRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningSessionRecords and only return the `id`
     * const learningSessionRecordWithIdOnly = await prisma.learningSessionRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends LearningSessionRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningSessionRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningSessionRecord.
     * @param {LearningSessionRecordUpsertArgs} args - Arguments to update or create a LearningSessionRecord.
     * @example
     * // Update or create a LearningSessionRecord
     * const learningSessionRecord = await prisma.learningSessionRecord.upsert({
     *   create: {
     *     // ... data to create a LearningSessionRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningSessionRecord we want to update
     *   }
     * })
     */
    upsert<T extends LearningSessionRecordUpsertArgs>(args: SelectSubset<T, LearningSessionRecordUpsertArgs<ExtArgs>>): Prisma__LearningSessionRecordClient<$Result.GetResult<Prisma.$LearningSessionRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningSessionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionRecordCountArgs} args - Arguments to filter LearningSessionRecords to count.
     * @example
     * // Count the number of LearningSessionRecords
     * const count = await prisma.learningSessionRecord.count({
     *   where: {
     *     // ... the filter for the LearningSessionRecords we want to count
     *   }
     * })
    **/
    count<T extends LearningSessionRecordCountArgs>(
      args?: Subset<T, LearningSessionRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningSessionRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningSessionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningSessionRecordAggregateArgs>(args: Subset<T, LearningSessionRecordAggregateArgs>): Prisma.PrismaPromise<GetLearningSessionRecordAggregateType<T>>

    /**
     * Group by LearningSessionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningSessionRecordGroupByArgs} args - Group by arguments.
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
      T extends LearningSessionRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningSessionRecordGroupByArgs['orderBy'] }
        : { orderBy?: LearningSessionRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningSessionRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningSessionRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningSessionRecord model
   */
  readonly fields: LearningSessionRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningSessionRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningSessionRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    learningPath<T extends LearningSessionRecord$learningPathArgs<ExtArgs> = {}>(args?: Subset<T, LearningSessionRecord$learningPathArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LearningSessionRecord model
   */
  interface LearningSessionRecordFieldRefs {
    readonly id: FieldRef<"LearningSessionRecord", 'String'>
    readonly createdAt: FieldRef<"LearningSessionRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningSessionRecord", 'DateTime'>
    readonly metadata: FieldRef<"LearningSessionRecord", 'Json'>
    readonly learnerUserId: FieldRef<"LearningSessionRecord", 'String'>
    readonly status: FieldRef<"LearningSessionRecord", 'String'>
    readonly learningPathId: FieldRef<"LearningSessionRecord", 'String'>
    readonly lessonId: FieldRef<"LearningSessionRecord", 'String'>
    readonly topicId: FieldRef<"LearningSessionRecord", 'String'>
    readonly tutorSessionId: FieldRef<"LearningSessionRecord", 'String'>
    readonly startedAt: FieldRef<"LearningSessionRecord", 'DateTime'>
    readonly endedAt: FieldRef<"LearningSessionRecord", 'DateTime'>
    readonly progressPercent: FieldRef<"LearningSessionRecord", 'Float'>
    readonly difficultyLevel: FieldRef<"LearningSessionRecord", 'String'>
    readonly masteryStateIds: FieldRef<"LearningSessionRecord", 'String[]'>
    readonly recommendationIds: FieldRef<"LearningSessionRecord", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * LearningSessionRecord findUnique
   */
  export type LearningSessionRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningSessionRecord to fetch.
     */
    where: LearningSessionRecordWhereUniqueInput
  }

  /**
   * LearningSessionRecord findUniqueOrThrow
   */
  export type LearningSessionRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningSessionRecord to fetch.
     */
    where: LearningSessionRecordWhereUniqueInput
  }

  /**
   * LearningSessionRecord findFirst
   */
  export type LearningSessionRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningSessionRecord to fetch.
     */
    where?: LearningSessionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSessionRecords to fetch.
     */
    orderBy?: LearningSessionRecordOrderByWithRelationInput | LearningSessionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningSessionRecords.
     */
    cursor?: LearningSessionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSessionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSessionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningSessionRecords.
     */
    distinct?: LearningSessionRecordScalarFieldEnum | LearningSessionRecordScalarFieldEnum[]
  }

  /**
   * LearningSessionRecord findFirstOrThrow
   */
  export type LearningSessionRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningSessionRecord to fetch.
     */
    where?: LearningSessionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSessionRecords to fetch.
     */
    orderBy?: LearningSessionRecordOrderByWithRelationInput | LearningSessionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningSessionRecords.
     */
    cursor?: LearningSessionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSessionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSessionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningSessionRecords.
     */
    distinct?: LearningSessionRecordScalarFieldEnum | LearningSessionRecordScalarFieldEnum[]
  }

  /**
   * LearningSessionRecord findMany
   */
  export type LearningSessionRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    /**
     * Filter, which LearningSessionRecords to fetch.
     */
    where?: LearningSessionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningSessionRecords to fetch.
     */
    orderBy?: LearningSessionRecordOrderByWithRelationInput | LearningSessionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningSessionRecords.
     */
    cursor?: LearningSessionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningSessionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningSessionRecords.
     */
    skip?: number
    distinct?: LearningSessionRecordScalarFieldEnum | LearningSessionRecordScalarFieldEnum[]
  }

  /**
   * LearningSessionRecord create
   */
  export type LearningSessionRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningSessionRecord.
     */
    data: XOR<LearningSessionRecordCreateInput, LearningSessionRecordUncheckedCreateInput>
  }

  /**
   * LearningSessionRecord createMany
   */
  export type LearningSessionRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningSessionRecords.
     */
    data: LearningSessionRecordCreateManyInput | LearningSessionRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningSessionRecord createManyAndReturn
   */
  export type LearningSessionRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * The data used to create many LearningSessionRecords.
     */
    data: LearningSessionRecordCreateManyInput | LearningSessionRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningSessionRecord update
   */
  export type LearningSessionRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningSessionRecord.
     */
    data: XOR<LearningSessionRecordUpdateInput, LearningSessionRecordUncheckedUpdateInput>
    /**
     * Choose, which LearningSessionRecord to update.
     */
    where: LearningSessionRecordWhereUniqueInput
  }

  /**
   * LearningSessionRecord updateMany
   */
  export type LearningSessionRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningSessionRecords.
     */
    data: XOR<LearningSessionRecordUpdateManyMutationInput, LearningSessionRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningSessionRecords to update
     */
    where?: LearningSessionRecordWhereInput
    /**
     * Limit how many LearningSessionRecords to update.
     */
    limit?: number
  }

  /**
   * LearningSessionRecord updateManyAndReturn
   */
  export type LearningSessionRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * The data used to update LearningSessionRecords.
     */
    data: XOR<LearningSessionRecordUpdateManyMutationInput, LearningSessionRecordUncheckedUpdateManyInput>
    /**
     * Filter which LearningSessionRecords to update
     */
    where?: LearningSessionRecordWhereInput
    /**
     * Limit how many LearningSessionRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningSessionRecord upsert
   */
  export type LearningSessionRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningSessionRecord to update in case it exists.
     */
    where: LearningSessionRecordWhereUniqueInput
    /**
     * In case the LearningSessionRecord found by the `where` argument doesn't exist, create a new LearningSessionRecord with this data.
     */
    create: XOR<LearningSessionRecordCreateInput, LearningSessionRecordUncheckedCreateInput>
    /**
     * In case the LearningSessionRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningSessionRecordUpdateInput, LearningSessionRecordUncheckedUpdateInput>
  }

  /**
   * LearningSessionRecord delete
   */
  export type LearningSessionRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
    /**
     * Filter which LearningSessionRecord to delete.
     */
    where: LearningSessionRecordWhereUniqueInput
  }

  /**
   * LearningSessionRecord deleteMany
   */
  export type LearningSessionRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningSessionRecords to delete
     */
    where?: LearningSessionRecordWhereInput
    /**
     * Limit how many LearningSessionRecords to delete.
     */
    limit?: number
  }

  /**
   * LearningSessionRecord.learningPath
   */
  export type LearningSessionRecord$learningPathArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    where?: LearningPathRecordWhereInput
  }

  /**
   * LearningSessionRecord without action
   */
  export type LearningSessionRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningSessionRecord
     */
    select?: LearningSessionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningSessionRecord
     */
    omit?: LearningSessionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningSessionRecordInclude<ExtArgs> | null
  }


  /**
   * Model MasteryStateRecord
   */

  export type AggregateMasteryStateRecord = {
    _count: MasteryStateRecordCountAggregateOutputType | null
    _avg: MasteryStateRecordAvgAggregateOutputType | null
    _sum: MasteryStateRecordSumAggregateOutputType | null
    _min: MasteryStateRecordMinAggregateOutputType | null
    _max: MasteryStateRecordMaxAggregateOutputType | null
  }

  export type MasteryStateRecordAvgAggregateOutputType = {
    score: number | null
    confidence: number | null
    evidenceCount: number | null
  }

  export type MasteryStateRecordSumAggregateOutputType = {
    score: number | null
    confidence: number | null
    evidenceCount: number | null
  }

  export type MasteryStateRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    learnerUserId: string | null
    learningPathId: string | null
    subjectType: string | null
    subjectId: string | null
    level: string | null
    score: number | null
    confidence: number | null
    evidenceCount: number | null
    trend: string | null
    lastObservedAt: Date | null
    recommendedDifficulty: string | null
  }

  export type MasteryStateRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    learnerUserId: string | null
    learningPathId: string | null
    subjectType: string | null
    subjectId: string | null
    level: string | null
    score: number | null
    confidence: number | null
    evidenceCount: number | null
    trend: string | null
    lastObservedAt: Date | null
    recommendedDifficulty: string | null
  }

  export type MasteryStateRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    learnerUserId: number
    learningPathId: number
    subjectType: number
    subjectId: number
    level: number
    score: number
    confidence: number
    evidenceCount: number
    trend: number
    lastObservedAt: number
    recommendedDifficulty: number
    _all: number
  }


  export type MasteryStateRecordAvgAggregateInputType = {
    score?: true
    confidence?: true
    evidenceCount?: true
  }

  export type MasteryStateRecordSumAggregateInputType = {
    score?: true
    confidence?: true
    evidenceCount?: true
  }

  export type MasteryStateRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    learnerUserId?: true
    learningPathId?: true
    subjectType?: true
    subjectId?: true
    level?: true
    score?: true
    confidence?: true
    evidenceCount?: true
    trend?: true
    lastObservedAt?: true
    recommendedDifficulty?: true
  }

  export type MasteryStateRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    learnerUserId?: true
    learningPathId?: true
    subjectType?: true
    subjectId?: true
    level?: true
    score?: true
    confidence?: true
    evidenceCount?: true
    trend?: true
    lastObservedAt?: true
    recommendedDifficulty?: true
  }

  export type MasteryStateRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    learnerUserId?: true
    learningPathId?: true
    subjectType?: true
    subjectId?: true
    level?: true
    score?: true
    confidence?: true
    evidenceCount?: true
    trend?: true
    lastObservedAt?: true
    recommendedDifficulty?: true
    _all?: true
  }

  export type MasteryStateRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasteryStateRecord to aggregate.
     */
    where?: MasteryStateRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasteryStateRecords to fetch.
     */
    orderBy?: MasteryStateRecordOrderByWithRelationInput | MasteryStateRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasteryStateRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasteryStateRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasteryStateRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasteryStateRecords
    **/
    _count?: true | MasteryStateRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasteryStateRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasteryStateRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasteryStateRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasteryStateRecordMaxAggregateInputType
  }

  export type GetMasteryStateRecordAggregateType<T extends MasteryStateRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMasteryStateRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasteryStateRecord[P]>
      : GetScalarType<T[P], AggregateMasteryStateRecord[P]>
  }




  export type MasteryStateRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasteryStateRecordWhereInput
    orderBy?: MasteryStateRecordOrderByWithAggregationInput | MasteryStateRecordOrderByWithAggregationInput[]
    by: MasteryStateRecordScalarFieldEnum[] | MasteryStateRecordScalarFieldEnum
    having?: MasteryStateRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasteryStateRecordCountAggregateInputType | true
    _avg?: MasteryStateRecordAvgAggregateInputType
    _sum?: MasteryStateRecordSumAggregateInputType
    _min?: MasteryStateRecordMinAggregateInputType
    _max?: MasteryStateRecordMaxAggregateInputType
  }

  export type MasteryStateRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    learnerUserId: string
    learningPathId: string | null
    subjectType: string
    subjectId: string
    level: string
    score: number
    confidence: number
    evidenceCount: number | null
    trend: string | null
    lastObservedAt: Date
    recommendedDifficulty: string | null
    _count: MasteryStateRecordCountAggregateOutputType | null
    _avg: MasteryStateRecordAvgAggregateOutputType | null
    _sum: MasteryStateRecordSumAggregateOutputType | null
    _min: MasteryStateRecordMinAggregateOutputType | null
    _max: MasteryStateRecordMaxAggregateOutputType | null
  }

  type GetMasteryStateRecordGroupByPayload<T extends MasteryStateRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasteryStateRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasteryStateRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasteryStateRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MasteryStateRecordGroupByOutputType[P]>
        }
      >
    >


  export type MasteryStateRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    learningPathId?: boolean
    subjectType?: boolean
    subjectId?: boolean
    level?: boolean
    score?: boolean
    confidence?: boolean
    evidenceCount?: boolean
    trend?: boolean
    lastObservedAt?: boolean
    recommendedDifficulty?: boolean
  }, ExtArgs["result"]["masteryStateRecord"]>

  export type MasteryStateRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    learningPathId?: boolean
    subjectType?: boolean
    subjectId?: boolean
    level?: boolean
    score?: boolean
    confidence?: boolean
    evidenceCount?: boolean
    trend?: boolean
    lastObservedAt?: boolean
    recommendedDifficulty?: boolean
  }, ExtArgs["result"]["masteryStateRecord"]>

  export type MasteryStateRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    learningPathId?: boolean
    subjectType?: boolean
    subjectId?: boolean
    level?: boolean
    score?: boolean
    confidence?: boolean
    evidenceCount?: boolean
    trend?: boolean
    lastObservedAt?: boolean
    recommendedDifficulty?: boolean
  }, ExtArgs["result"]["masteryStateRecord"]>

  export type MasteryStateRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    learnerUserId?: boolean
    learningPathId?: boolean
    subjectType?: boolean
    subjectId?: boolean
    level?: boolean
    score?: boolean
    confidence?: boolean
    evidenceCount?: boolean
    trend?: boolean
    lastObservedAt?: boolean
    recommendedDifficulty?: boolean
  }

  export type MasteryStateRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "learnerUserId" | "learningPathId" | "subjectType" | "subjectId" | "level" | "score" | "confidence" | "evidenceCount" | "trend" | "lastObservedAt" | "recommendedDifficulty", ExtArgs["result"]["masteryStateRecord"]>

  export type $MasteryStateRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasteryStateRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      learnerUserId: string
      learningPathId: string | null
      subjectType: string
      subjectId: string
      level: string
      score: number
      confidence: number
      evidenceCount: number | null
      trend: string | null
      lastObservedAt: Date
      recommendedDifficulty: string | null
    }, ExtArgs["result"]["masteryStateRecord"]>
    composites: {}
  }

  type MasteryStateRecordGetPayload<S extends boolean | null | undefined | MasteryStateRecordDefaultArgs> = $Result.GetResult<Prisma.$MasteryStateRecordPayload, S>

  type MasteryStateRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasteryStateRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasteryStateRecordCountAggregateInputType | true
    }

  export interface MasteryStateRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasteryStateRecord'], meta: { name: 'MasteryStateRecord' } }
    /**
     * Find zero or one MasteryStateRecord that matches the filter.
     * @param {MasteryStateRecordFindUniqueArgs} args - Arguments to find a MasteryStateRecord
     * @example
     * // Get one MasteryStateRecord
     * const masteryStateRecord = await prisma.masteryStateRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasteryStateRecordFindUniqueArgs>(args: SelectSubset<T, MasteryStateRecordFindUniqueArgs<ExtArgs>>): Prisma__MasteryStateRecordClient<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasteryStateRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasteryStateRecordFindUniqueOrThrowArgs} args - Arguments to find a MasteryStateRecord
     * @example
     * // Get one MasteryStateRecord
     * const masteryStateRecord = await prisma.masteryStateRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasteryStateRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MasteryStateRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasteryStateRecordClient<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasteryStateRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryStateRecordFindFirstArgs} args - Arguments to find a MasteryStateRecord
     * @example
     * // Get one MasteryStateRecord
     * const masteryStateRecord = await prisma.masteryStateRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasteryStateRecordFindFirstArgs>(args?: SelectSubset<T, MasteryStateRecordFindFirstArgs<ExtArgs>>): Prisma__MasteryStateRecordClient<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasteryStateRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryStateRecordFindFirstOrThrowArgs} args - Arguments to find a MasteryStateRecord
     * @example
     * // Get one MasteryStateRecord
     * const masteryStateRecord = await prisma.masteryStateRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasteryStateRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MasteryStateRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasteryStateRecordClient<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasteryStateRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryStateRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasteryStateRecords
     * const masteryStateRecords = await prisma.masteryStateRecord.findMany()
     * 
     * // Get first 10 MasteryStateRecords
     * const masteryStateRecords = await prisma.masteryStateRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masteryStateRecordWithIdOnly = await prisma.masteryStateRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasteryStateRecordFindManyArgs>(args?: SelectSubset<T, MasteryStateRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasteryStateRecord.
     * @param {MasteryStateRecordCreateArgs} args - Arguments to create a MasteryStateRecord.
     * @example
     * // Create one MasteryStateRecord
     * const MasteryStateRecord = await prisma.masteryStateRecord.create({
     *   data: {
     *     // ... data to create a MasteryStateRecord
     *   }
     * })
     * 
     */
    create<T extends MasteryStateRecordCreateArgs>(args: SelectSubset<T, MasteryStateRecordCreateArgs<ExtArgs>>): Prisma__MasteryStateRecordClient<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasteryStateRecords.
     * @param {MasteryStateRecordCreateManyArgs} args - Arguments to create many MasteryStateRecords.
     * @example
     * // Create many MasteryStateRecords
     * const masteryStateRecord = await prisma.masteryStateRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasteryStateRecordCreateManyArgs>(args?: SelectSubset<T, MasteryStateRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasteryStateRecords and returns the data saved in the database.
     * @param {MasteryStateRecordCreateManyAndReturnArgs} args - Arguments to create many MasteryStateRecords.
     * @example
     * // Create many MasteryStateRecords
     * const masteryStateRecord = await prisma.masteryStateRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasteryStateRecords and only return the `id`
     * const masteryStateRecordWithIdOnly = await prisma.masteryStateRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasteryStateRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MasteryStateRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasteryStateRecord.
     * @param {MasteryStateRecordDeleteArgs} args - Arguments to delete one MasteryStateRecord.
     * @example
     * // Delete one MasteryStateRecord
     * const MasteryStateRecord = await prisma.masteryStateRecord.delete({
     *   where: {
     *     // ... filter to delete one MasteryStateRecord
     *   }
     * })
     * 
     */
    delete<T extends MasteryStateRecordDeleteArgs>(args: SelectSubset<T, MasteryStateRecordDeleteArgs<ExtArgs>>): Prisma__MasteryStateRecordClient<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasteryStateRecord.
     * @param {MasteryStateRecordUpdateArgs} args - Arguments to update one MasteryStateRecord.
     * @example
     * // Update one MasteryStateRecord
     * const masteryStateRecord = await prisma.masteryStateRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasteryStateRecordUpdateArgs>(args: SelectSubset<T, MasteryStateRecordUpdateArgs<ExtArgs>>): Prisma__MasteryStateRecordClient<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasteryStateRecords.
     * @param {MasteryStateRecordDeleteManyArgs} args - Arguments to filter MasteryStateRecords to delete.
     * @example
     * // Delete a few MasteryStateRecords
     * const { count } = await prisma.masteryStateRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasteryStateRecordDeleteManyArgs>(args?: SelectSubset<T, MasteryStateRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasteryStateRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryStateRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasteryStateRecords
     * const masteryStateRecord = await prisma.masteryStateRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasteryStateRecordUpdateManyArgs>(args: SelectSubset<T, MasteryStateRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasteryStateRecords and returns the data updated in the database.
     * @param {MasteryStateRecordUpdateManyAndReturnArgs} args - Arguments to update many MasteryStateRecords.
     * @example
     * // Update many MasteryStateRecords
     * const masteryStateRecord = await prisma.masteryStateRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasteryStateRecords and only return the `id`
     * const masteryStateRecordWithIdOnly = await prisma.masteryStateRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends MasteryStateRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, MasteryStateRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasteryStateRecord.
     * @param {MasteryStateRecordUpsertArgs} args - Arguments to update or create a MasteryStateRecord.
     * @example
     * // Update or create a MasteryStateRecord
     * const masteryStateRecord = await prisma.masteryStateRecord.upsert({
     *   create: {
     *     // ... data to create a MasteryStateRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasteryStateRecord we want to update
     *   }
     * })
     */
    upsert<T extends MasteryStateRecordUpsertArgs>(args: SelectSubset<T, MasteryStateRecordUpsertArgs<ExtArgs>>): Prisma__MasteryStateRecordClient<$Result.GetResult<Prisma.$MasteryStateRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasteryStateRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryStateRecordCountArgs} args - Arguments to filter MasteryStateRecords to count.
     * @example
     * // Count the number of MasteryStateRecords
     * const count = await prisma.masteryStateRecord.count({
     *   where: {
     *     // ... the filter for the MasteryStateRecords we want to count
     *   }
     * })
    **/
    count<T extends MasteryStateRecordCountArgs>(
      args?: Subset<T, MasteryStateRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasteryStateRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasteryStateRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryStateRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasteryStateRecordAggregateArgs>(args: Subset<T, MasteryStateRecordAggregateArgs>): Prisma.PrismaPromise<GetMasteryStateRecordAggregateType<T>>

    /**
     * Group by MasteryStateRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasteryStateRecordGroupByArgs} args - Group by arguments.
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
      T extends MasteryStateRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasteryStateRecordGroupByArgs['orderBy'] }
        : { orderBy?: MasteryStateRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasteryStateRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasteryStateRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasteryStateRecord model
   */
  readonly fields: MasteryStateRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasteryStateRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasteryStateRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MasteryStateRecord model
   */
  interface MasteryStateRecordFieldRefs {
    readonly id: FieldRef<"MasteryStateRecord", 'String'>
    readonly createdAt: FieldRef<"MasteryStateRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"MasteryStateRecord", 'DateTime'>
    readonly metadata: FieldRef<"MasteryStateRecord", 'Json'>
    readonly learnerUserId: FieldRef<"MasteryStateRecord", 'String'>
    readonly learningPathId: FieldRef<"MasteryStateRecord", 'String'>
    readonly subjectType: FieldRef<"MasteryStateRecord", 'String'>
    readonly subjectId: FieldRef<"MasteryStateRecord", 'String'>
    readonly level: FieldRef<"MasteryStateRecord", 'String'>
    readonly score: FieldRef<"MasteryStateRecord", 'Float'>
    readonly confidence: FieldRef<"MasteryStateRecord", 'Float'>
    readonly evidenceCount: FieldRef<"MasteryStateRecord", 'Int'>
    readonly trend: FieldRef<"MasteryStateRecord", 'String'>
    readonly lastObservedAt: FieldRef<"MasteryStateRecord", 'DateTime'>
    readonly recommendedDifficulty: FieldRef<"MasteryStateRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MasteryStateRecord findUnique
   */
  export type MasteryStateRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * Filter, which MasteryStateRecord to fetch.
     */
    where: MasteryStateRecordWhereUniqueInput
  }

  /**
   * MasteryStateRecord findUniqueOrThrow
   */
  export type MasteryStateRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * Filter, which MasteryStateRecord to fetch.
     */
    where: MasteryStateRecordWhereUniqueInput
  }

  /**
   * MasteryStateRecord findFirst
   */
  export type MasteryStateRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * Filter, which MasteryStateRecord to fetch.
     */
    where?: MasteryStateRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasteryStateRecords to fetch.
     */
    orderBy?: MasteryStateRecordOrderByWithRelationInput | MasteryStateRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasteryStateRecords.
     */
    cursor?: MasteryStateRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasteryStateRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasteryStateRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasteryStateRecords.
     */
    distinct?: MasteryStateRecordScalarFieldEnum | MasteryStateRecordScalarFieldEnum[]
  }

  /**
   * MasteryStateRecord findFirstOrThrow
   */
  export type MasteryStateRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * Filter, which MasteryStateRecord to fetch.
     */
    where?: MasteryStateRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasteryStateRecords to fetch.
     */
    orderBy?: MasteryStateRecordOrderByWithRelationInput | MasteryStateRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasteryStateRecords.
     */
    cursor?: MasteryStateRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasteryStateRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasteryStateRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasteryStateRecords.
     */
    distinct?: MasteryStateRecordScalarFieldEnum | MasteryStateRecordScalarFieldEnum[]
  }

  /**
   * MasteryStateRecord findMany
   */
  export type MasteryStateRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * Filter, which MasteryStateRecords to fetch.
     */
    where?: MasteryStateRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasteryStateRecords to fetch.
     */
    orderBy?: MasteryStateRecordOrderByWithRelationInput | MasteryStateRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasteryStateRecords.
     */
    cursor?: MasteryStateRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasteryStateRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasteryStateRecords.
     */
    skip?: number
    distinct?: MasteryStateRecordScalarFieldEnum | MasteryStateRecordScalarFieldEnum[]
  }

  /**
   * MasteryStateRecord create
   */
  export type MasteryStateRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a MasteryStateRecord.
     */
    data: XOR<MasteryStateRecordCreateInput, MasteryStateRecordUncheckedCreateInput>
  }

  /**
   * MasteryStateRecord createMany
   */
  export type MasteryStateRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasteryStateRecords.
     */
    data: MasteryStateRecordCreateManyInput | MasteryStateRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasteryStateRecord createManyAndReturn
   */
  export type MasteryStateRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * The data used to create many MasteryStateRecords.
     */
    data: MasteryStateRecordCreateManyInput | MasteryStateRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasteryStateRecord update
   */
  export type MasteryStateRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a MasteryStateRecord.
     */
    data: XOR<MasteryStateRecordUpdateInput, MasteryStateRecordUncheckedUpdateInput>
    /**
     * Choose, which MasteryStateRecord to update.
     */
    where: MasteryStateRecordWhereUniqueInput
  }

  /**
   * MasteryStateRecord updateMany
   */
  export type MasteryStateRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasteryStateRecords.
     */
    data: XOR<MasteryStateRecordUpdateManyMutationInput, MasteryStateRecordUncheckedUpdateManyInput>
    /**
     * Filter which MasteryStateRecords to update
     */
    where?: MasteryStateRecordWhereInput
    /**
     * Limit how many MasteryStateRecords to update.
     */
    limit?: number
  }

  /**
   * MasteryStateRecord updateManyAndReturn
   */
  export type MasteryStateRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * The data used to update MasteryStateRecords.
     */
    data: XOR<MasteryStateRecordUpdateManyMutationInput, MasteryStateRecordUncheckedUpdateManyInput>
    /**
     * Filter which MasteryStateRecords to update
     */
    where?: MasteryStateRecordWhereInput
    /**
     * Limit how many MasteryStateRecords to update.
     */
    limit?: number
  }

  /**
   * MasteryStateRecord upsert
   */
  export type MasteryStateRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the MasteryStateRecord to update in case it exists.
     */
    where: MasteryStateRecordWhereUniqueInput
    /**
     * In case the MasteryStateRecord found by the `where` argument doesn't exist, create a new MasteryStateRecord with this data.
     */
    create: XOR<MasteryStateRecordCreateInput, MasteryStateRecordUncheckedCreateInput>
    /**
     * In case the MasteryStateRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasteryStateRecordUpdateInput, MasteryStateRecordUncheckedUpdateInput>
  }

  /**
   * MasteryStateRecord delete
   */
  export type MasteryStateRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
    /**
     * Filter which MasteryStateRecord to delete.
     */
    where: MasteryStateRecordWhereUniqueInput
  }

  /**
   * MasteryStateRecord deleteMany
   */
  export type MasteryStateRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasteryStateRecords to delete
     */
    where?: MasteryStateRecordWhereInput
    /**
     * Limit how many MasteryStateRecords to delete.
     */
    limit?: number
  }

  /**
   * MasteryStateRecord without action
   */
  export type MasteryStateRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasteryStateRecord
     */
    select?: MasteryStateRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasteryStateRecord
     */
    omit?: MasteryStateRecordOmit<ExtArgs> | null
  }


  /**
   * Model ClassroomRecord
   */

  export type AggregateClassroomRecord = {
    _count: ClassroomRecordCountAggregateOutputType | null
    _min: ClassroomRecordMinAggregateOutputType | null
    _max: ClassroomRecordMaxAggregateOutputType | null
  }

  export type ClassroomRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    gradeLevel: string | null
    subject: string | null
    teacherId: string | null
    classCode: string | null
    learningPathId: string | null
  }

  export type ClassroomRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    gradeLevel: string | null
    subject: string | null
    teacherId: string | null
    classCode: string | null
    learningPathId: string | null
  }

  export type ClassroomRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    name: number
    gradeLevel: number
    subject: number
    teacherId: number
    classCode: number
    assignedModuleIds: number
    assignedLearningPathIds: number
    learningPathId: number
    _all: number
  }


  export type ClassroomRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    gradeLevel?: true
    subject?: true
    teacherId?: true
    classCode?: true
    learningPathId?: true
  }

  export type ClassroomRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    gradeLevel?: true
    subject?: true
    teacherId?: true
    classCode?: true
    learningPathId?: true
  }

  export type ClassroomRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    name?: true
    gradeLevel?: true
    subject?: true
    teacherId?: true
    classCode?: true
    assignedModuleIds?: true
    assignedLearningPathIds?: true
    learningPathId?: true
    _all?: true
  }

  export type ClassroomRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomRecord to aggregate.
     */
    where?: ClassroomRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomRecords to fetch.
     */
    orderBy?: ClassroomRecordOrderByWithRelationInput | ClassroomRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassroomRecords
    **/
    _count?: true | ClassroomRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomRecordMaxAggregateInputType
  }

  export type GetClassroomRecordAggregateType<T extends ClassroomRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroomRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroomRecord[P]>
      : GetScalarType<T[P], AggregateClassroomRecord[P]>
  }




  export type ClassroomRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomRecordWhereInput
    orderBy?: ClassroomRecordOrderByWithAggregationInput | ClassroomRecordOrderByWithAggregationInput[]
    by: ClassroomRecordScalarFieldEnum[] | ClassroomRecordScalarFieldEnum
    having?: ClassroomRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomRecordCountAggregateInputType | true
    _min?: ClassroomRecordMinAggregateInputType
    _max?: ClassroomRecordMaxAggregateInputType
  }

  export type ClassroomRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds: string[]
    assignedLearningPathIds: string[]
    learningPathId: string | null
    _count: ClassroomRecordCountAggregateOutputType | null
    _min: ClassroomRecordMinAggregateOutputType | null
    _max: ClassroomRecordMaxAggregateOutputType | null
  }

  type GetClassroomRecordGroupByPayload<T extends ClassroomRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomRecordGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    name?: boolean
    gradeLevel?: boolean
    subject?: boolean
    teacherId?: boolean
    classCode?: boolean
    assignedModuleIds?: boolean
    assignedLearningPathIds?: boolean
    learningPathId?: boolean
    learningPath?: boolean | ClassroomRecord$learningPathArgs<ExtArgs>
    enrollments?: boolean | ClassroomRecord$enrollmentsArgs<ExtArgs>
    meetings?: boolean | ClassroomRecord$meetingsArgs<ExtArgs>
    _count?: boolean | ClassroomRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomRecord"]>

  export type ClassroomRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    name?: boolean
    gradeLevel?: boolean
    subject?: boolean
    teacherId?: boolean
    classCode?: boolean
    assignedModuleIds?: boolean
    assignedLearningPathIds?: boolean
    learningPathId?: boolean
    learningPath?: boolean | ClassroomRecord$learningPathArgs<ExtArgs>
  }, ExtArgs["result"]["classroomRecord"]>

  export type ClassroomRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    name?: boolean
    gradeLevel?: boolean
    subject?: boolean
    teacherId?: boolean
    classCode?: boolean
    assignedModuleIds?: boolean
    assignedLearningPathIds?: boolean
    learningPathId?: boolean
    learningPath?: boolean | ClassroomRecord$learningPathArgs<ExtArgs>
  }, ExtArgs["result"]["classroomRecord"]>

  export type ClassroomRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    name?: boolean
    gradeLevel?: boolean
    subject?: boolean
    teacherId?: boolean
    classCode?: boolean
    assignedModuleIds?: boolean
    assignedLearningPathIds?: boolean
    learningPathId?: boolean
  }

  export type ClassroomRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "name" | "gradeLevel" | "subject" | "teacherId" | "classCode" | "assignedModuleIds" | "assignedLearningPathIds" | "learningPathId", ExtArgs["result"]["classroomRecord"]>
  export type ClassroomRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningPath?: boolean | ClassroomRecord$learningPathArgs<ExtArgs>
    enrollments?: boolean | ClassroomRecord$enrollmentsArgs<ExtArgs>
    meetings?: boolean | ClassroomRecord$meetingsArgs<ExtArgs>
    _count?: boolean | ClassroomRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassroomRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningPath?: boolean | ClassroomRecord$learningPathArgs<ExtArgs>
  }
  export type ClassroomRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningPath?: boolean | ClassroomRecord$learningPathArgs<ExtArgs>
  }

  export type $ClassroomRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassroomRecord"
    objects: {
      learningPath: Prisma.$LearningPathRecordPayload<ExtArgs> | null
      enrollments: Prisma.$StudentEnrollmentRecordPayload<ExtArgs>[]
      meetings: Prisma.$ClassroomMeetingRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      name: string
      gradeLevel: string
      subject: string
      teacherId: string
      classCode: string
      assignedModuleIds: string[]
      assignedLearningPathIds: string[]
      learningPathId: string | null
    }, ExtArgs["result"]["classroomRecord"]>
    composites: {}
  }

  type ClassroomRecordGetPayload<S extends boolean | null | undefined | ClassroomRecordDefaultArgs> = $Result.GetResult<Prisma.$ClassroomRecordPayload, S>

  type ClassroomRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomRecordCountAggregateInputType | true
    }

  export interface ClassroomRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassroomRecord'], meta: { name: 'ClassroomRecord' } }
    /**
     * Find zero or one ClassroomRecord that matches the filter.
     * @param {ClassroomRecordFindUniqueArgs} args - Arguments to find a ClassroomRecord
     * @example
     * // Get one ClassroomRecord
     * const classroomRecord = await prisma.classroomRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomRecordFindUniqueArgs>(args: SelectSubset<T, ClassroomRecordFindUniqueArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassroomRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomRecordFindUniqueOrThrowArgs} args - Arguments to find a ClassroomRecord
     * @example
     * // Get one ClassroomRecord
     * const classroomRecord = await prisma.classroomRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomRecordFindFirstArgs} args - Arguments to find a ClassroomRecord
     * @example
     * // Get one ClassroomRecord
     * const classroomRecord = await prisma.classroomRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomRecordFindFirstArgs>(args?: SelectSubset<T, ClassroomRecordFindFirstArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomRecordFindFirstOrThrowArgs} args - Arguments to find a ClassroomRecord
     * @example
     * // Get one ClassroomRecord
     * const classroomRecord = await prisma.classroomRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassroomRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassroomRecords
     * const classroomRecords = await prisma.classroomRecord.findMany()
     * 
     * // Get first 10 ClassroomRecords
     * const classroomRecords = await prisma.classroomRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomRecordWithIdOnly = await prisma.classroomRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomRecordFindManyArgs>(args?: SelectSubset<T, ClassroomRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassroomRecord.
     * @param {ClassroomRecordCreateArgs} args - Arguments to create a ClassroomRecord.
     * @example
     * // Create one ClassroomRecord
     * const ClassroomRecord = await prisma.classroomRecord.create({
     *   data: {
     *     // ... data to create a ClassroomRecord
     *   }
     * })
     * 
     */
    create<T extends ClassroomRecordCreateArgs>(args: SelectSubset<T, ClassroomRecordCreateArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassroomRecords.
     * @param {ClassroomRecordCreateManyArgs} args - Arguments to create many ClassroomRecords.
     * @example
     * // Create many ClassroomRecords
     * const classroomRecord = await prisma.classroomRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomRecordCreateManyArgs>(args?: SelectSubset<T, ClassroomRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassroomRecords and returns the data saved in the database.
     * @param {ClassroomRecordCreateManyAndReturnArgs} args - Arguments to create many ClassroomRecords.
     * @example
     * // Create many ClassroomRecords
     * const classroomRecord = await prisma.classroomRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassroomRecords and only return the `id`
     * const classroomRecordWithIdOnly = await prisma.classroomRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassroomRecord.
     * @param {ClassroomRecordDeleteArgs} args - Arguments to delete one ClassroomRecord.
     * @example
     * // Delete one ClassroomRecord
     * const ClassroomRecord = await prisma.classroomRecord.delete({
     *   where: {
     *     // ... filter to delete one ClassroomRecord
     *   }
     * })
     * 
     */
    delete<T extends ClassroomRecordDeleteArgs>(args: SelectSubset<T, ClassroomRecordDeleteArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassroomRecord.
     * @param {ClassroomRecordUpdateArgs} args - Arguments to update one ClassroomRecord.
     * @example
     * // Update one ClassroomRecord
     * const classroomRecord = await prisma.classroomRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomRecordUpdateArgs>(args: SelectSubset<T, ClassroomRecordUpdateArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassroomRecords.
     * @param {ClassroomRecordDeleteManyArgs} args - Arguments to filter ClassroomRecords to delete.
     * @example
     * // Delete a few ClassroomRecords
     * const { count } = await prisma.classroomRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomRecordDeleteManyArgs>(args?: SelectSubset<T, ClassroomRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassroomRecords
     * const classroomRecord = await prisma.classroomRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomRecordUpdateManyArgs>(args: SelectSubset<T, ClassroomRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomRecords and returns the data updated in the database.
     * @param {ClassroomRecordUpdateManyAndReturnArgs} args - Arguments to update many ClassroomRecords.
     * @example
     * // Update many ClassroomRecords
     * const classroomRecord = await prisma.classroomRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassroomRecords and only return the `id`
     * const classroomRecordWithIdOnly = await prisma.classroomRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassroomRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassroomRecord.
     * @param {ClassroomRecordUpsertArgs} args - Arguments to update or create a ClassroomRecord.
     * @example
     * // Update or create a ClassroomRecord
     * const classroomRecord = await prisma.classroomRecord.upsert({
     *   create: {
     *     // ... data to create a ClassroomRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassroomRecord we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomRecordUpsertArgs>(args: SelectSubset<T, ClassroomRecordUpsertArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassroomRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomRecordCountArgs} args - Arguments to filter ClassroomRecords to count.
     * @example
     * // Count the number of ClassroomRecords
     * const count = await prisma.classroomRecord.count({
     *   where: {
     *     // ... the filter for the ClassroomRecords we want to count
     *   }
     * })
    **/
    count<T extends ClassroomRecordCountArgs>(
      args?: Subset<T, ClassroomRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassroomRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassroomRecordAggregateArgs>(args: Subset<T, ClassroomRecordAggregateArgs>): Prisma.PrismaPromise<GetClassroomRecordAggregateType<T>>

    /**
     * Group by ClassroomRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomRecordGroupByArgs} args - Group by arguments.
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
      T extends ClassroomRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomRecordGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassroomRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassroomRecord model
   */
  readonly fields: ClassroomRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassroomRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    learningPath<T extends ClassroomRecord$learningPathArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomRecord$learningPathArgs<ExtArgs>>): Prisma__LearningPathRecordClient<$Result.GetResult<Prisma.$LearningPathRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends ClassroomRecord$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomRecord$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetings<T extends ClassroomRecord$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomRecord$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClassroomRecord model
   */
  interface ClassroomRecordFieldRefs {
    readonly id: FieldRef<"ClassroomRecord", 'String'>
    readonly createdAt: FieldRef<"ClassroomRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassroomRecord", 'DateTime'>
    readonly metadata: FieldRef<"ClassroomRecord", 'Json'>
    readonly name: FieldRef<"ClassroomRecord", 'String'>
    readonly gradeLevel: FieldRef<"ClassroomRecord", 'String'>
    readonly subject: FieldRef<"ClassroomRecord", 'String'>
    readonly teacherId: FieldRef<"ClassroomRecord", 'String'>
    readonly classCode: FieldRef<"ClassroomRecord", 'String'>
    readonly assignedModuleIds: FieldRef<"ClassroomRecord", 'String[]'>
    readonly assignedLearningPathIds: FieldRef<"ClassroomRecord", 'String[]'>
    readonly learningPathId: FieldRef<"ClassroomRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClassroomRecord findUnique
   */
  export type ClassroomRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomRecord to fetch.
     */
    where: ClassroomRecordWhereUniqueInput
  }

  /**
   * ClassroomRecord findUniqueOrThrow
   */
  export type ClassroomRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomRecord to fetch.
     */
    where: ClassroomRecordWhereUniqueInput
  }

  /**
   * ClassroomRecord findFirst
   */
  export type ClassroomRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomRecord to fetch.
     */
    where?: ClassroomRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomRecords to fetch.
     */
    orderBy?: ClassroomRecordOrderByWithRelationInput | ClassroomRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomRecords.
     */
    cursor?: ClassroomRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomRecords.
     */
    distinct?: ClassroomRecordScalarFieldEnum | ClassroomRecordScalarFieldEnum[]
  }

  /**
   * ClassroomRecord findFirstOrThrow
   */
  export type ClassroomRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomRecord to fetch.
     */
    where?: ClassroomRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomRecords to fetch.
     */
    orderBy?: ClassroomRecordOrderByWithRelationInput | ClassroomRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomRecords.
     */
    cursor?: ClassroomRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomRecords.
     */
    distinct?: ClassroomRecordScalarFieldEnum | ClassroomRecordScalarFieldEnum[]
  }

  /**
   * ClassroomRecord findMany
   */
  export type ClassroomRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomRecords to fetch.
     */
    where?: ClassroomRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomRecords to fetch.
     */
    orderBy?: ClassroomRecordOrderByWithRelationInput | ClassroomRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassroomRecords.
     */
    cursor?: ClassroomRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomRecords.
     */
    skip?: number
    distinct?: ClassroomRecordScalarFieldEnum | ClassroomRecordScalarFieldEnum[]
  }

  /**
   * ClassroomRecord create
   */
  export type ClassroomRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassroomRecord.
     */
    data: XOR<ClassroomRecordCreateInput, ClassroomRecordUncheckedCreateInput>
  }

  /**
   * ClassroomRecord createMany
   */
  export type ClassroomRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassroomRecords.
     */
    data: ClassroomRecordCreateManyInput | ClassroomRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassroomRecord createManyAndReturn
   */
  export type ClassroomRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ClassroomRecords.
     */
    data: ClassroomRecordCreateManyInput | ClassroomRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomRecord update
   */
  export type ClassroomRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassroomRecord.
     */
    data: XOR<ClassroomRecordUpdateInput, ClassroomRecordUncheckedUpdateInput>
    /**
     * Choose, which ClassroomRecord to update.
     */
    where: ClassroomRecordWhereUniqueInput
  }

  /**
   * ClassroomRecord updateMany
   */
  export type ClassroomRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassroomRecords.
     */
    data: XOR<ClassroomRecordUpdateManyMutationInput, ClassroomRecordUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomRecords to update
     */
    where?: ClassroomRecordWhereInput
    /**
     * Limit how many ClassroomRecords to update.
     */
    limit?: number
  }

  /**
   * ClassroomRecord updateManyAndReturn
   */
  export type ClassroomRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * The data used to update ClassroomRecords.
     */
    data: XOR<ClassroomRecordUpdateManyMutationInput, ClassroomRecordUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomRecords to update
     */
    where?: ClassroomRecordWhereInput
    /**
     * Limit how many ClassroomRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomRecord upsert
   */
  export type ClassroomRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassroomRecord to update in case it exists.
     */
    where: ClassroomRecordWhereUniqueInput
    /**
     * In case the ClassroomRecord found by the `where` argument doesn't exist, create a new ClassroomRecord with this data.
     */
    create: XOR<ClassroomRecordCreateInput, ClassroomRecordUncheckedCreateInput>
    /**
     * In case the ClassroomRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomRecordUpdateInput, ClassroomRecordUncheckedUpdateInput>
  }

  /**
   * ClassroomRecord delete
   */
  export type ClassroomRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
    /**
     * Filter which ClassroomRecord to delete.
     */
    where: ClassroomRecordWhereUniqueInput
  }

  /**
   * ClassroomRecord deleteMany
   */
  export type ClassroomRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomRecords to delete
     */
    where?: ClassroomRecordWhereInput
    /**
     * Limit how many ClassroomRecords to delete.
     */
    limit?: number
  }

  /**
   * ClassroomRecord.learningPath
   */
  export type ClassroomRecord$learningPathArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathRecord
     */
    select?: LearningPathRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPathRecord
     */
    omit?: LearningPathRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathRecordInclude<ExtArgs> | null
    where?: LearningPathRecordWhereInput
  }

  /**
   * ClassroomRecord.enrollments
   */
  export type ClassroomRecord$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    where?: StudentEnrollmentRecordWhereInput
    orderBy?: StudentEnrollmentRecordOrderByWithRelationInput | StudentEnrollmentRecordOrderByWithRelationInput[]
    cursor?: StudentEnrollmentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentEnrollmentRecordScalarFieldEnum | StudentEnrollmentRecordScalarFieldEnum[]
  }

  /**
   * ClassroomRecord.meetings
   */
  export type ClassroomRecord$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    where?: ClassroomMeetingRecordWhereInput
    orderBy?: ClassroomMeetingRecordOrderByWithRelationInput | ClassroomMeetingRecordOrderByWithRelationInput[]
    cursor?: ClassroomMeetingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomMeetingRecordScalarFieldEnum | ClassroomMeetingRecordScalarFieldEnum[]
  }

  /**
   * ClassroomRecord without action
   */
  export type ClassroomRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomRecord
     */
    select?: ClassroomRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomRecord
     */
    omit?: ClassroomRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomRecordInclude<ExtArgs> | null
  }


  /**
   * Model ClassroomStudentProfileRecord
   */

  export type AggregateClassroomStudentProfileRecord = {
    _count: ClassroomStudentProfileRecordCountAggregateOutputType | null
    _min: ClassroomStudentProfileRecordMinAggregateOutputType | null
    _max: ClassroomStudentProfileRecordMaxAggregateOutputType | null
  }

  export type ClassroomStudentProfileRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    gradeLevel: string | null
    createdByTeacher: boolean | null
    linkedUserId: string | null
    generatedCredential: string | null
  }

  export type ClassroomStudentProfileRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    gradeLevel: string | null
    createdByTeacher: boolean | null
    linkedUserId: string | null
    generatedCredential: string | null
  }

  export type ClassroomStudentProfileRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    name: number
    email: number
    gradeLevel: number
    createdByTeacher: number
    linkedUserId: number
    generatedCredential: number
    _all: number
  }


  export type ClassroomStudentProfileRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    gradeLevel?: true
    createdByTeacher?: true
    linkedUserId?: true
    generatedCredential?: true
  }

  export type ClassroomStudentProfileRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    gradeLevel?: true
    createdByTeacher?: true
    linkedUserId?: true
    generatedCredential?: true
  }

  export type ClassroomStudentProfileRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    name?: true
    email?: true
    gradeLevel?: true
    createdByTeacher?: true
    linkedUserId?: true
    generatedCredential?: true
    _all?: true
  }

  export type ClassroomStudentProfileRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomStudentProfileRecord to aggregate.
     */
    where?: ClassroomStudentProfileRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomStudentProfileRecords to fetch.
     */
    orderBy?: ClassroomStudentProfileRecordOrderByWithRelationInput | ClassroomStudentProfileRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomStudentProfileRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomStudentProfileRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomStudentProfileRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassroomStudentProfileRecords
    **/
    _count?: true | ClassroomStudentProfileRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomStudentProfileRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomStudentProfileRecordMaxAggregateInputType
  }

  export type GetClassroomStudentProfileRecordAggregateType<T extends ClassroomStudentProfileRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroomStudentProfileRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroomStudentProfileRecord[P]>
      : GetScalarType<T[P], AggregateClassroomStudentProfileRecord[P]>
  }




  export type ClassroomStudentProfileRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomStudentProfileRecordWhereInput
    orderBy?: ClassroomStudentProfileRecordOrderByWithAggregationInput | ClassroomStudentProfileRecordOrderByWithAggregationInput[]
    by: ClassroomStudentProfileRecordScalarFieldEnum[] | ClassroomStudentProfileRecordScalarFieldEnum
    having?: ClassroomStudentProfileRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomStudentProfileRecordCountAggregateInputType | true
    _min?: ClassroomStudentProfileRecordMinAggregateInputType
    _max?: ClassroomStudentProfileRecordMaxAggregateInputType
  }

  export type ClassroomStudentProfileRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    name: string
    email: string | null
    gradeLevel: string
    createdByTeacher: boolean
    linkedUserId: string | null
    generatedCredential: string | null
    _count: ClassroomStudentProfileRecordCountAggregateOutputType | null
    _min: ClassroomStudentProfileRecordMinAggregateOutputType | null
    _max: ClassroomStudentProfileRecordMaxAggregateOutputType | null
  }

  type GetClassroomStudentProfileRecordGroupByPayload<T extends ClassroomStudentProfileRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomStudentProfileRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomStudentProfileRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomStudentProfileRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomStudentProfileRecordGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomStudentProfileRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    name?: boolean
    email?: boolean
    gradeLevel?: boolean
    createdByTeacher?: boolean
    linkedUserId?: boolean
    generatedCredential?: boolean
    enrollments?: boolean | ClassroomStudentProfileRecord$enrollmentsArgs<ExtArgs>
    _count?: boolean | ClassroomStudentProfileRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomStudentProfileRecord"]>

  export type ClassroomStudentProfileRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    name?: boolean
    email?: boolean
    gradeLevel?: boolean
    createdByTeacher?: boolean
    linkedUserId?: boolean
    generatedCredential?: boolean
  }, ExtArgs["result"]["classroomStudentProfileRecord"]>

  export type ClassroomStudentProfileRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    name?: boolean
    email?: boolean
    gradeLevel?: boolean
    createdByTeacher?: boolean
    linkedUserId?: boolean
    generatedCredential?: boolean
  }, ExtArgs["result"]["classroomStudentProfileRecord"]>

  export type ClassroomStudentProfileRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    name?: boolean
    email?: boolean
    gradeLevel?: boolean
    createdByTeacher?: boolean
    linkedUserId?: boolean
    generatedCredential?: boolean
  }

  export type ClassroomStudentProfileRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "name" | "email" | "gradeLevel" | "createdByTeacher" | "linkedUserId" | "generatedCredential", ExtArgs["result"]["classroomStudentProfileRecord"]>
  export type ClassroomStudentProfileRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | ClassroomStudentProfileRecord$enrollmentsArgs<ExtArgs>
    _count?: boolean | ClassroomStudentProfileRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassroomStudentProfileRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassroomStudentProfileRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassroomStudentProfileRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassroomStudentProfileRecord"
    objects: {
      enrollments: Prisma.$StudentEnrollmentRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      name: string
      email: string | null
      gradeLevel: string
      createdByTeacher: boolean
      linkedUserId: string | null
      generatedCredential: string | null
    }, ExtArgs["result"]["classroomStudentProfileRecord"]>
    composites: {}
  }

  type ClassroomStudentProfileRecordGetPayload<S extends boolean | null | undefined | ClassroomStudentProfileRecordDefaultArgs> = $Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload, S>

  type ClassroomStudentProfileRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomStudentProfileRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomStudentProfileRecordCountAggregateInputType | true
    }

  export interface ClassroomStudentProfileRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassroomStudentProfileRecord'], meta: { name: 'ClassroomStudentProfileRecord' } }
    /**
     * Find zero or one ClassroomStudentProfileRecord that matches the filter.
     * @param {ClassroomStudentProfileRecordFindUniqueArgs} args - Arguments to find a ClassroomStudentProfileRecord
     * @example
     * // Get one ClassroomStudentProfileRecord
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomStudentProfileRecordFindUniqueArgs>(args: SelectSubset<T, ClassroomStudentProfileRecordFindUniqueArgs<ExtArgs>>): Prisma__ClassroomStudentProfileRecordClient<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassroomStudentProfileRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomStudentProfileRecordFindUniqueOrThrowArgs} args - Arguments to find a ClassroomStudentProfileRecord
     * @example
     * // Get one ClassroomStudentProfileRecord
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomStudentProfileRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomStudentProfileRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomStudentProfileRecordClient<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomStudentProfileRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomStudentProfileRecordFindFirstArgs} args - Arguments to find a ClassroomStudentProfileRecord
     * @example
     * // Get one ClassroomStudentProfileRecord
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomStudentProfileRecordFindFirstArgs>(args?: SelectSubset<T, ClassroomStudentProfileRecordFindFirstArgs<ExtArgs>>): Prisma__ClassroomStudentProfileRecordClient<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomStudentProfileRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomStudentProfileRecordFindFirstOrThrowArgs} args - Arguments to find a ClassroomStudentProfileRecord
     * @example
     * // Get one ClassroomStudentProfileRecord
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomStudentProfileRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomStudentProfileRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomStudentProfileRecordClient<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassroomStudentProfileRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomStudentProfileRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassroomStudentProfileRecords
     * const classroomStudentProfileRecords = await prisma.classroomStudentProfileRecord.findMany()
     * 
     * // Get first 10 ClassroomStudentProfileRecords
     * const classroomStudentProfileRecords = await prisma.classroomStudentProfileRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomStudentProfileRecordWithIdOnly = await prisma.classroomStudentProfileRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomStudentProfileRecordFindManyArgs>(args?: SelectSubset<T, ClassroomStudentProfileRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassroomStudentProfileRecord.
     * @param {ClassroomStudentProfileRecordCreateArgs} args - Arguments to create a ClassroomStudentProfileRecord.
     * @example
     * // Create one ClassroomStudentProfileRecord
     * const ClassroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.create({
     *   data: {
     *     // ... data to create a ClassroomStudentProfileRecord
     *   }
     * })
     * 
     */
    create<T extends ClassroomStudentProfileRecordCreateArgs>(args: SelectSubset<T, ClassroomStudentProfileRecordCreateArgs<ExtArgs>>): Prisma__ClassroomStudentProfileRecordClient<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassroomStudentProfileRecords.
     * @param {ClassroomStudentProfileRecordCreateManyArgs} args - Arguments to create many ClassroomStudentProfileRecords.
     * @example
     * // Create many ClassroomStudentProfileRecords
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomStudentProfileRecordCreateManyArgs>(args?: SelectSubset<T, ClassroomStudentProfileRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassroomStudentProfileRecords and returns the data saved in the database.
     * @param {ClassroomStudentProfileRecordCreateManyAndReturnArgs} args - Arguments to create many ClassroomStudentProfileRecords.
     * @example
     * // Create many ClassroomStudentProfileRecords
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassroomStudentProfileRecords and only return the `id`
     * const classroomStudentProfileRecordWithIdOnly = await prisma.classroomStudentProfileRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomStudentProfileRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomStudentProfileRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassroomStudentProfileRecord.
     * @param {ClassroomStudentProfileRecordDeleteArgs} args - Arguments to delete one ClassroomStudentProfileRecord.
     * @example
     * // Delete one ClassroomStudentProfileRecord
     * const ClassroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.delete({
     *   where: {
     *     // ... filter to delete one ClassroomStudentProfileRecord
     *   }
     * })
     * 
     */
    delete<T extends ClassroomStudentProfileRecordDeleteArgs>(args: SelectSubset<T, ClassroomStudentProfileRecordDeleteArgs<ExtArgs>>): Prisma__ClassroomStudentProfileRecordClient<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassroomStudentProfileRecord.
     * @param {ClassroomStudentProfileRecordUpdateArgs} args - Arguments to update one ClassroomStudentProfileRecord.
     * @example
     * // Update one ClassroomStudentProfileRecord
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomStudentProfileRecordUpdateArgs>(args: SelectSubset<T, ClassroomStudentProfileRecordUpdateArgs<ExtArgs>>): Prisma__ClassroomStudentProfileRecordClient<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassroomStudentProfileRecords.
     * @param {ClassroomStudentProfileRecordDeleteManyArgs} args - Arguments to filter ClassroomStudentProfileRecords to delete.
     * @example
     * // Delete a few ClassroomStudentProfileRecords
     * const { count } = await prisma.classroomStudentProfileRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomStudentProfileRecordDeleteManyArgs>(args?: SelectSubset<T, ClassroomStudentProfileRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomStudentProfileRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomStudentProfileRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassroomStudentProfileRecords
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomStudentProfileRecordUpdateManyArgs>(args: SelectSubset<T, ClassroomStudentProfileRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomStudentProfileRecords and returns the data updated in the database.
     * @param {ClassroomStudentProfileRecordUpdateManyAndReturnArgs} args - Arguments to update many ClassroomStudentProfileRecords.
     * @example
     * // Update many ClassroomStudentProfileRecords
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassroomStudentProfileRecords and only return the `id`
     * const classroomStudentProfileRecordWithIdOnly = await prisma.classroomStudentProfileRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassroomStudentProfileRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomStudentProfileRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassroomStudentProfileRecord.
     * @param {ClassroomStudentProfileRecordUpsertArgs} args - Arguments to update or create a ClassroomStudentProfileRecord.
     * @example
     * // Update or create a ClassroomStudentProfileRecord
     * const classroomStudentProfileRecord = await prisma.classroomStudentProfileRecord.upsert({
     *   create: {
     *     // ... data to create a ClassroomStudentProfileRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassroomStudentProfileRecord we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomStudentProfileRecordUpsertArgs>(args: SelectSubset<T, ClassroomStudentProfileRecordUpsertArgs<ExtArgs>>): Prisma__ClassroomStudentProfileRecordClient<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassroomStudentProfileRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomStudentProfileRecordCountArgs} args - Arguments to filter ClassroomStudentProfileRecords to count.
     * @example
     * // Count the number of ClassroomStudentProfileRecords
     * const count = await prisma.classroomStudentProfileRecord.count({
     *   where: {
     *     // ... the filter for the ClassroomStudentProfileRecords we want to count
     *   }
     * })
    **/
    count<T extends ClassroomStudentProfileRecordCountArgs>(
      args?: Subset<T, ClassroomStudentProfileRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomStudentProfileRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassroomStudentProfileRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomStudentProfileRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassroomStudentProfileRecordAggregateArgs>(args: Subset<T, ClassroomStudentProfileRecordAggregateArgs>): Prisma.PrismaPromise<GetClassroomStudentProfileRecordAggregateType<T>>

    /**
     * Group by ClassroomStudentProfileRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomStudentProfileRecordGroupByArgs} args - Group by arguments.
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
      T extends ClassroomStudentProfileRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomStudentProfileRecordGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomStudentProfileRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassroomStudentProfileRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomStudentProfileRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassroomStudentProfileRecord model
   */
  readonly fields: ClassroomStudentProfileRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassroomStudentProfileRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomStudentProfileRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollments<T extends ClassroomStudentProfileRecord$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomStudentProfileRecord$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ClassroomStudentProfileRecord model
   */
  interface ClassroomStudentProfileRecordFieldRefs {
    readonly id: FieldRef<"ClassroomStudentProfileRecord", 'String'>
    readonly createdAt: FieldRef<"ClassroomStudentProfileRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassroomStudentProfileRecord", 'DateTime'>
    readonly metadata: FieldRef<"ClassroomStudentProfileRecord", 'Json'>
    readonly name: FieldRef<"ClassroomStudentProfileRecord", 'String'>
    readonly email: FieldRef<"ClassroomStudentProfileRecord", 'String'>
    readonly gradeLevel: FieldRef<"ClassroomStudentProfileRecord", 'String'>
    readonly createdByTeacher: FieldRef<"ClassroomStudentProfileRecord", 'Boolean'>
    readonly linkedUserId: FieldRef<"ClassroomStudentProfileRecord", 'String'>
    readonly generatedCredential: FieldRef<"ClassroomStudentProfileRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClassroomStudentProfileRecord findUnique
   */
  export type ClassroomStudentProfileRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomStudentProfileRecord to fetch.
     */
    where: ClassroomStudentProfileRecordWhereUniqueInput
  }

  /**
   * ClassroomStudentProfileRecord findUniqueOrThrow
   */
  export type ClassroomStudentProfileRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomStudentProfileRecord to fetch.
     */
    where: ClassroomStudentProfileRecordWhereUniqueInput
  }

  /**
   * ClassroomStudentProfileRecord findFirst
   */
  export type ClassroomStudentProfileRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomStudentProfileRecord to fetch.
     */
    where?: ClassroomStudentProfileRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomStudentProfileRecords to fetch.
     */
    orderBy?: ClassroomStudentProfileRecordOrderByWithRelationInput | ClassroomStudentProfileRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomStudentProfileRecords.
     */
    cursor?: ClassroomStudentProfileRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomStudentProfileRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomStudentProfileRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomStudentProfileRecords.
     */
    distinct?: ClassroomStudentProfileRecordScalarFieldEnum | ClassroomStudentProfileRecordScalarFieldEnum[]
  }

  /**
   * ClassroomStudentProfileRecord findFirstOrThrow
   */
  export type ClassroomStudentProfileRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomStudentProfileRecord to fetch.
     */
    where?: ClassroomStudentProfileRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomStudentProfileRecords to fetch.
     */
    orderBy?: ClassroomStudentProfileRecordOrderByWithRelationInput | ClassroomStudentProfileRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomStudentProfileRecords.
     */
    cursor?: ClassroomStudentProfileRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomStudentProfileRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomStudentProfileRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomStudentProfileRecords.
     */
    distinct?: ClassroomStudentProfileRecordScalarFieldEnum | ClassroomStudentProfileRecordScalarFieldEnum[]
  }

  /**
   * ClassroomStudentProfileRecord findMany
   */
  export type ClassroomStudentProfileRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomStudentProfileRecords to fetch.
     */
    where?: ClassroomStudentProfileRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomStudentProfileRecords to fetch.
     */
    orderBy?: ClassroomStudentProfileRecordOrderByWithRelationInput | ClassroomStudentProfileRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassroomStudentProfileRecords.
     */
    cursor?: ClassroomStudentProfileRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomStudentProfileRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomStudentProfileRecords.
     */
    skip?: number
    distinct?: ClassroomStudentProfileRecordScalarFieldEnum | ClassroomStudentProfileRecordScalarFieldEnum[]
  }

  /**
   * ClassroomStudentProfileRecord create
   */
  export type ClassroomStudentProfileRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassroomStudentProfileRecord.
     */
    data: XOR<ClassroomStudentProfileRecordCreateInput, ClassroomStudentProfileRecordUncheckedCreateInput>
  }

  /**
   * ClassroomStudentProfileRecord createMany
   */
  export type ClassroomStudentProfileRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassroomStudentProfileRecords.
     */
    data: ClassroomStudentProfileRecordCreateManyInput | ClassroomStudentProfileRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassroomStudentProfileRecord createManyAndReturn
   */
  export type ClassroomStudentProfileRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ClassroomStudentProfileRecords.
     */
    data: ClassroomStudentProfileRecordCreateManyInput | ClassroomStudentProfileRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassroomStudentProfileRecord update
   */
  export type ClassroomStudentProfileRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassroomStudentProfileRecord.
     */
    data: XOR<ClassroomStudentProfileRecordUpdateInput, ClassroomStudentProfileRecordUncheckedUpdateInput>
    /**
     * Choose, which ClassroomStudentProfileRecord to update.
     */
    where: ClassroomStudentProfileRecordWhereUniqueInput
  }

  /**
   * ClassroomStudentProfileRecord updateMany
   */
  export type ClassroomStudentProfileRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassroomStudentProfileRecords.
     */
    data: XOR<ClassroomStudentProfileRecordUpdateManyMutationInput, ClassroomStudentProfileRecordUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomStudentProfileRecords to update
     */
    where?: ClassroomStudentProfileRecordWhereInput
    /**
     * Limit how many ClassroomStudentProfileRecords to update.
     */
    limit?: number
  }

  /**
   * ClassroomStudentProfileRecord updateManyAndReturn
   */
  export type ClassroomStudentProfileRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * The data used to update ClassroomStudentProfileRecords.
     */
    data: XOR<ClassroomStudentProfileRecordUpdateManyMutationInput, ClassroomStudentProfileRecordUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomStudentProfileRecords to update
     */
    where?: ClassroomStudentProfileRecordWhereInput
    /**
     * Limit how many ClassroomStudentProfileRecords to update.
     */
    limit?: number
  }

  /**
   * ClassroomStudentProfileRecord upsert
   */
  export type ClassroomStudentProfileRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassroomStudentProfileRecord to update in case it exists.
     */
    where: ClassroomStudentProfileRecordWhereUniqueInput
    /**
     * In case the ClassroomStudentProfileRecord found by the `where` argument doesn't exist, create a new ClassroomStudentProfileRecord with this data.
     */
    create: XOR<ClassroomStudentProfileRecordCreateInput, ClassroomStudentProfileRecordUncheckedCreateInput>
    /**
     * In case the ClassroomStudentProfileRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomStudentProfileRecordUpdateInput, ClassroomStudentProfileRecordUncheckedUpdateInput>
  }

  /**
   * ClassroomStudentProfileRecord delete
   */
  export type ClassroomStudentProfileRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
    /**
     * Filter which ClassroomStudentProfileRecord to delete.
     */
    where: ClassroomStudentProfileRecordWhereUniqueInput
  }

  /**
   * ClassroomStudentProfileRecord deleteMany
   */
  export type ClassroomStudentProfileRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomStudentProfileRecords to delete
     */
    where?: ClassroomStudentProfileRecordWhereInput
    /**
     * Limit how many ClassroomStudentProfileRecords to delete.
     */
    limit?: number
  }

  /**
   * ClassroomStudentProfileRecord.enrollments
   */
  export type ClassroomStudentProfileRecord$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    where?: StudentEnrollmentRecordWhereInput
    orderBy?: StudentEnrollmentRecordOrderByWithRelationInput | StudentEnrollmentRecordOrderByWithRelationInput[]
    cursor?: StudentEnrollmentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentEnrollmentRecordScalarFieldEnum | StudentEnrollmentRecordScalarFieldEnum[]
  }

  /**
   * ClassroomStudentProfileRecord without action
   */
  export type ClassroomStudentProfileRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomStudentProfileRecord
     */
    select?: ClassroomStudentProfileRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomStudentProfileRecord
     */
    omit?: ClassroomStudentProfileRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomStudentProfileRecordInclude<ExtArgs> | null
  }


  /**
   * Model StudentEnrollmentRecord
   */

  export type AggregateStudentEnrollmentRecord = {
    _count: StudentEnrollmentRecordCountAggregateOutputType | null
    _min: StudentEnrollmentRecordMinAggregateOutputType | null
    _max: StudentEnrollmentRecordMaxAggregateOutputType | null
  }

  export type StudentEnrollmentRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    classroomId: string | null
    studentId: string | null
    status: string | null
    joinedAt: Date | null
  }

  export type StudentEnrollmentRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    classroomId: string | null
    studentId: string | null
    status: string | null
    joinedAt: Date | null
  }

  export type StudentEnrollmentRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    classroomId: number
    studentId: number
    status: number
    joinedAt: number
    _all: number
  }


  export type StudentEnrollmentRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    classroomId?: true
    studentId?: true
    status?: true
    joinedAt?: true
  }

  export type StudentEnrollmentRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    classroomId?: true
    studentId?: true
    status?: true
    joinedAt?: true
  }

  export type StudentEnrollmentRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    classroomId?: true
    studentId?: true
    status?: true
    joinedAt?: true
    _all?: true
  }

  export type StudentEnrollmentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentEnrollmentRecord to aggregate.
     */
    where?: StudentEnrollmentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentEnrollmentRecords to fetch.
     */
    orderBy?: StudentEnrollmentRecordOrderByWithRelationInput | StudentEnrollmentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentEnrollmentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentEnrollmentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentEnrollmentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentEnrollmentRecords
    **/
    _count?: true | StudentEnrollmentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentEnrollmentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentEnrollmentRecordMaxAggregateInputType
  }

  export type GetStudentEnrollmentRecordAggregateType<T extends StudentEnrollmentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentEnrollmentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentEnrollmentRecord[P]>
      : GetScalarType<T[P], AggregateStudentEnrollmentRecord[P]>
  }




  export type StudentEnrollmentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentEnrollmentRecordWhereInput
    orderBy?: StudentEnrollmentRecordOrderByWithAggregationInput | StudentEnrollmentRecordOrderByWithAggregationInput[]
    by: StudentEnrollmentRecordScalarFieldEnum[] | StudentEnrollmentRecordScalarFieldEnum
    having?: StudentEnrollmentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentEnrollmentRecordCountAggregateInputType | true
    _min?: StudentEnrollmentRecordMinAggregateInputType
    _max?: StudentEnrollmentRecordMaxAggregateInputType
  }

  export type StudentEnrollmentRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    classroomId: string
    studentId: string
    status: string
    joinedAt: Date | null
    _count: StudentEnrollmentRecordCountAggregateOutputType | null
    _min: StudentEnrollmentRecordMinAggregateOutputType | null
    _max: StudentEnrollmentRecordMaxAggregateOutputType | null
  }

  type GetStudentEnrollmentRecordGroupByPayload<T extends StudentEnrollmentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentEnrollmentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentEnrollmentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentEnrollmentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StudentEnrollmentRecordGroupByOutputType[P]>
        }
      >
    >


  export type StudentEnrollmentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    classroomId?: boolean
    studentId?: boolean
    status?: boolean
    joinedAt?: boolean
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
    student?: boolean | ClassroomStudentProfileRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentEnrollmentRecord"]>

  export type StudentEnrollmentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    classroomId?: boolean
    studentId?: boolean
    status?: boolean
    joinedAt?: boolean
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
    student?: boolean | ClassroomStudentProfileRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentEnrollmentRecord"]>

  export type StudentEnrollmentRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    classroomId?: boolean
    studentId?: boolean
    status?: boolean
    joinedAt?: boolean
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
    student?: boolean | ClassroomStudentProfileRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentEnrollmentRecord"]>

  export type StudentEnrollmentRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    classroomId?: boolean
    studentId?: boolean
    status?: boolean
    joinedAt?: boolean
  }

  export type StudentEnrollmentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "classroomId" | "studentId" | "status" | "joinedAt", ExtArgs["result"]["studentEnrollmentRecord"]>
  export type StudentEnrollmentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
    student?: boolean | ClassroomStudentProfileRecordDefaultArgs<ExtArgs>
  }
  export type StudentEnrollmentRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
    student?: boolean | ClassroomStudentProfileRecordDefaultArgs<ExtArgs>
  }
  export type StudentEnrollmentRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
    student?: boolean | ClassroomStudentProfileRecordDefaultArgs<ExtArgs>
  }

  export type $StudentEnrollmentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentEnrollmentRecord"
    objects: {
      classroom: Prisma.$ClassroomRecordPayload<ExtArgs>
      student: Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      classroomId: string
      studentId: string
      status: string
      joinedAt: Date | null
    }, ExtArgs["result"]["studentEnrollmentRecord"]>
    composites: {}
  }

  type StudentEnrollmentRecordGetPayload<S extends boolean | null | undefined | StudentEnrollmentRecordDefaultArgs> = $Result.GetResult<Prisma.$StudentEnrollmentRecordPayload, S>

  type StudentEnrollmentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentEnrollmentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentEnrollmentRecordCountAggregateInputType | true
    }

  export interface StudentEnrollmentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentEnrollmentRecord'], meta: { name: 'StudentEnrollmentRecord' } }
    /**
     * Find zero or one StudentEnrollmentRecord that matches the filter.
     * @param {StudentEnrollmentRecordFindUniqueArgs} args - Arguments to find a StudentEnrollmentRecord
     * @example
     * // Get one StudentEnrollmentRecord
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentEnrollmentRecordFindUniqueArgs>(args: SelectSubset<T, StudentEnrollmentRecordFindUniqueArgs<ExtArgs>>): Prisma__StudentEnrollmentRecordClient<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentEnrollmentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentEnrollmentRecordFindUniqueOrThrowArgs} args - Arguments to find a StudentEnrollmentRecord
     * @example
     * // Get one StudentEnrollmentRecord
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentEnrollmentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentEnrollmentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentEnrollmentRecordClient<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentEnrollmentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentEnrollmentRecordFindFirstArgs} args - Arguments to find a StudentEnrollmentRecord
     * @example
     * // Get one StudentEnrollmentRecord
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentEnrollmentRecordFindFirstArgs>(args?: SelectSubset<T, StudentEnrollmentRecordFindFirstArgs<ExtArgs>>): Prisma__StudentEnrollmentRecordClient<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentEnrollmentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentEnrollmentRecordFindFirstOrThrowArgs} args - Arguments to find a StudentEnrollmentRecord
     * @example
     * // Get one StudentEnrollmentRecord
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentEnrollmentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentEnrollmentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentEnrollmentRecordClient<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentEnrollmentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentEnrollmentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentEnrollmentRecords
     * const studentEnrollmentRecords = await prisma.studentEnrollmentRecord.findMany()
     * 
     * // Get first 10 StudentEnrollmentRecords
     * const studentEnrollmentRecords = await prisma.studentEnrollmentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentEnrollmentRecordWithIdOnly = await prisma.studentEnrollmentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentEnrollmentRecordFindManyArgs>(args?: SelectSubset<T, StudentEnrollmentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentEnrollmentRecord.
     * @param {StudentEnrollmentRecordCreateArgs} args - Arguments to create a StudentEnrollmentRecord.
     * @example
     * // Create one StudentEnrollmentRecord
     * const StudentEnrollmentRecord = await prisma.studentEnrollmentRecord.create({
     *   data: {
     *     // ... data to create a StudentEnrollmentRecord
     *   }
     * })
     * 
     */
    create<T extends StudentEnrollmentRecordCreateArgs>(args: SelectSubset<T, StudentEnrollmentRecordCreateArgs<ExtArgs>>): Prisma__StudentEnrollmentRecordClient<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentEnrollmentRecords.
     * @param {StudentEnrollmentRecordCreateManyArgs} args - Arguments to create many StudentEnrollmentRecords.
     * @example
     * // Create many StudentEnrollmentRecords
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentEnrollmentRecordCreateManyArgs>(args?: SelectSubset<T, StudentEnrollmentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentEnrollmentRecords and returns the data saved in the database.
     * @param {StudentEnrollmentRecordCreateManyAndReturnArgs} args - Arguments to create many StudentEnrollmentRecords.
     * @example
     * // Create many StudentEnrollmentRecords
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentEnrollmentRecords and only return the `id`
     * const studentEnrollmentRecordWithIdOnly = await prisma.studentEnrollmentRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentEnrollmentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentEnrollmentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentEnrollmentRecord.
     * @param {StudentEnrollmentRecordDeleteArgs} args - Arguments to delete one StudentEnrollmentRecord.
     * @example
     * // Delete one StudentEnrollmentRecord
     * const StudentEnrollmentRecord = await prisma.studentEnrollmentRecord.delete({
     *   where: {
     *     // ... filter to delete one StudentEnrollmentRecord
     *   }
     * })
     * 
     */
    delete<T extends StudentEnrollmentRecordDeleteArgs>(args: SelectSubset<T, StudentEnrollmentRecordDeleteArgs<ExtArgs>>): Prisma__StudentEnrollmentRecordClient<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentEnrollmentRecord.
     * @param {StudentEnrollmentRecordUpdateArgs} args - Arguments to update one StudentEnrollmentRecord.
     * @example
     * // Update one StudentEnrollmentRecord
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentEnrollmentRecordUpdateArgs>(args: SelectSubset<T, StudentEnrollmentRecordUpdateArgs<ExtArgs>>): Prisma__StudentEnrollmentRecordClient<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentEnrollmentRecords.
     * @param {StudentEnrollmentRecordDeleteManyArgs} args - Arguments to filter StudentEnrollmentRecords to delete.
     * @example
     * // Delete a few StudentEnrollmentRecords
     * const { count } = await prisma.studentEnrollmentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentEnrollmentRecordDeleteManyArgs>(args?: SelectSubset<T, StudentEnrollmentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentEnrollmentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentEnrollmentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentEnrollmentRecords
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentEnrollmentRecordUpdateManyArgs>(args: SelectSubset<T, StudentEnrollmentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentEnrollmentRecords and returns the data updated in the database.
     * @param {StudentEnrollmentRecordUpdateManyAndReturnArgs} args - Arguments to update many StudentEnrollmentRecords.
     * @example
     * // Update many StudentEnrollmentRecords
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentEnrollmentRecords and only return the `id`
     * const studentEnrollmentRecordWithIdOnly = await prisma.studentEnrollmentRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentEnrollmentRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentEnrollmentRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentEnrollmentRecord.
     * @param {StudentEnrollmentRecordUpsertArgs} args - Arguments to update or create a StudentEnrollmentRecord.
     * @example
     * // Update or create a StudentEnrollmentRecord
     * const studentEnrollmentRecord = await prisma.studentEnrollmentRecord.upsert({
     *   create: {
     *     // ... data to create a StudentEnrollmentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentEnrollmentRecord we want to update
     *   }
     * })
     */
    upsert<T extends StudentEnrollmentRecordUpsertArgs>(args: SelectSubset<T, StudentEnrollmentRecordUpsertArgs<ExtArgs>>): Prisma__StudentEnrollmentRecordClient<$Result.GetResult<Prisma.$StudentEnrollmentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentEnrollmentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentEnrollmentRecordCountArgs} args - Arguments to filter StudentEnrollmentRecords to count.
     * @example
     * // Count the number of StudentEnrollmentRecords
     * const count = await prisma.studentEnrollmentRecord.count({
     *   where: {
     *     // ... the filter for the StudentEnrollmentRecords we want to count
     *   }
     * })
    **/
    count<T extends StudentEnrollmentRecordCountArgs>(
      args?: Subset<T, StudentEnrollmentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentEnrollmentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentEnrollmentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentEnrollmentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentEnrollmentRecordAggregateArgs>(args: Subset<T, StudentEnrollmentRecordAggregateArgs>): Prisma.PrismaPromise<GetStudentEnrollmentRecordAggregateType<T>>

    /**
     * Group by StudentEnrollmentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentEnrollmentRecordGroupByArgs} args - Group by arguments.
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
      T extends StudentEnrollmentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentEnrollmentRecordGroupByArgs['orderBy'] }
        : { orderBy?: StudentEnrollmentRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentEnrollmentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentEnrollmentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentEnrollmentRecord model
   */
  readonly fields: StudentEnrollmentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentEnrollmentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentEnrollmentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classroom<T extends ClassroomRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomRecordDefaultArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends ClassroomStudentProfileRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomStudentProfileRecordDefaultArgs<ExtArgs>>): Prisma__ClassroomStudentProfileRecordClient<$Result.GetResult<Prisma.$ClassroomStudentProfileRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentEnrollmentRecord model
   */
  interface StudentEnrollmentRecordFieldRefs {
    readonly id: FieldRef<"StudentEnrollmentRecord", 'String'>
    readonly createdAt: FieldRef<"StudentEnrollmentRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentEnrollmentRecord", 'DateTime'>
    readonly metadata: FieldRef<"StudentEnrollmentRecord", 'Json'>
    readonly classroomId: FieldRef<"StudentEnrollmentRecord", 'String'>
    readonly studentId: FieldRef<"StudentEnrollmentRecord", 'String'>
    readonly status: FieldRef<"StudentEnrollmentRecord", 'String'>
    readonly joinedAt: FieldRef<"StudentEnrollmentRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentEnrollmentRecord findUnique
   */
  export type StudentEnrollmentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentEnrollmentRecord to fetch.
     */
    where: StudentEnrollmentRecordWhereUniqueInput
  }

  /**
   * StudentEnrollmentRecord findUniqueOrThrow
   */
  export type StudentEnrollmentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentEnrollmentRecord to fetch.
     */
    where: StudentEnrollmentRecordWhereUniqueInput
  }

  /**
   * StudentEnrollmentRecord findFirst
   */
  export type StudentEnrollmentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentEnrollmentRecord to fetch.
     */
    where?: StudentEnrollmentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentEnrollmentRecords to fetch.
     */
    orderBy?: StudentEnrollmentRecordOrderByWithRelationInput | StudentEnrollmentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentEnrollmentRecords.
     */
    cursor?: StudentEnrollmentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentEnrollmentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentEnrollmentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentEnrollmentRecords.
     */
    distinct?: StudentEnrollmentRecordScalarFieldEnum | StudentEnrollmentRecordScalarFieldEnum[]
  }

  /**
   * StudentEnrollmentRecord findFirstOrThrow
   */
  export type StudentEnrollmentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentEnrollmentRecord to fetch.
     */
    where?: StudentEnrollmentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentEnrollmentRecords to fetch.
     */
    orderBy?: StudentEnrollmentRecordOrderByWithRelationInput | StudentEnrollmentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentEnrollmentRecords.
     */
    cursor?: StudentEnrollmentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentEnrollmentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentEnrollmentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentEnrollmentRecords.
     */
    distinct?: StudentEnrollmentRecordScalarFieldEnum | StudentEnrollmentRecordScalarFieldEnum[]
  }

  /**
   * StudentEnrollmentRecord findMany
   */
  export type StudentEnrollmentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentEnrollmentRecords to fetch.
     */
    where?: StudentEnrollmentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentEnrollmentRecords to fetch.
     */
    orderBy?: StudentEnrollmentRecordOrderByWithRelationInput | StudentEnrollmentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentEnrollmentRecords.
     */
    cursor?: StudentEnrollmentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentEnrollmentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentEnrollmentRecords.
     */
    skip?: number
    distinct?: StudentEnrollmentRecordScalarFieldEnum | StudentEnrollmentRecordScalarFieldEnum[]
  }

  /**
   * StudentEnrollmentRecord create
   */
  export type StudentEnrollmentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentEnrollmentRecord.
     */
    data: XOR<StudentEnrollmentRecordCreateInput, StudentEnrollmentRecordUncheckedCreateInput>
  }

  /**
   * StudentEnrollmentRecord createMany
   */
  export type StudentEnrollmentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentEnrollmentRecords.
     */
    data: StudentEnrollmentRecordCreateManyInput | StudentEnrollmentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentEnrollmentRecord createManyAndReturn
   */
  export type StudentEnrollmentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * The data used to create many StudentEnrollmentRecords.
     */
    data: StudentEnrollmentRecordCreateManyInput | StudentEnrollmentRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentEnrollmentRecord update
   */
  export type StudentEnrollmentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentEnrollmentRecord.
     */
    data: XOR<StudentEnrollmentRecordUpdateInput, StudentEnrollmentRecordUncheckedUpdateInput>
    /**
     * Choose, which StudentEnrollmentRecord to update.
     */
    where: StudentEnrollmentRecordWhereUniqueInput
  }

  /**
   * StudentEnrollmentRecord updateMany
   */
  export type StudentEnrollmentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentEnrollmentRecords.
     */
    data: XOR<StudentEnrollmentRecordUpdateManyMutationInput, StudentEnrollmentRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudentEnrollmentRecords to update
     */
    where?: StudentEnrollmentRecordWhereInput
    /**
     * Limit how many StudentEnrollmentRecords to update.
     */
    limit?: number
  }

  /**
   * StudentEnrollmentRecord updateManyAndReturn
   */
  export type StudentEnrollmentRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * The data used to update StudentEnrollmentRecords.
     */
    data: XOR<StudentEnrollmentRecordUpdateManyMutationInput, StudentEnrollmentRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudentEnrollmentRecords to update
     */
    where?: StudentEnrollmentRecordWhereInput
    /**
     * Limit how many StudentEnrollmentRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentEnrollmentRecord upsert
   */
  export type StudentEnrollmentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentEnrollmentRecord to update in case it exists.
     */
    where: StudentEnrollmentRecordWhereUniqueInput
    /**
     * In case the StudentEnrollmentRecord found by the `where` argument doesn't exist, create a new StudentEnrollmentRecord with this data.
     */
    create: XOR<StudentEnrollmentRecordCreateInput, StudentEnrollmentRecordUncheckedCreateInput>
    /**
     * In case the StudentEnrollmentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentEnrollmentRecordUpdateInput, StudentEnrollmentRecordUncheckedUpdateInput>
  }

  /**
   * StudentEnrollmentRecord delete
   */
  export type StudentEnrollmentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
    /**
     * Filter which StudentEnrollmentRecord to delete.
     */
    where: StudentEnrollmentRecordWhereUniqueInput
  }

  /**
   * StudentEnrollmentRecord deleteMany
   */
  export type StudentEnrollmentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentEnrollmentRecords to delete
     */
    where?: StudentEnrollmentRecordWhereInput
    /**
     * Limit how many StudentEnrollmentRecords to delete.
     */
    limit?: number
  }

  /**
   * StudentEnrollmentRecord without action
   */
  export type StudentEnrollmentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentEnrollmentRecord
     */
    select?: StudentEnrollmentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentEnrollmentRecord
     */
    omit?: StudentEnrollmentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentEnrollmentRecordInclude<ExtArgs> | null
  }


  /**
   * Model ClassroomMeetingRecord
   */

  export type AggregateClassroomMeetingRecord = {
    _count: ClassroomMeetingRecordCountAggregateOutputType | null
    _min: ClassroomMeetingRecordMinAggregateOutputType | null
    _max: ClassroomMeetingRecordMaxAggregateOutputType | null
  }

  export type ClassroomMeetingRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    classroomId: string | null
    provider: string | null
    title: string | null
    description: string | null
    scheduledAt: Date | null
    meetingUrl: string | null
    createdByTeacherId: string | null
  }

  export type ClassroomMeetingRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    classroomId: string | null
    provider: string | null
    title: string | null
    description: string | null
    scheduledAt: Date | null
    meetingUrl: string | null
    createdByTeacherId: string | null
  }

  export type ClassroomMeetingRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    classroomId: number
    provider: number
    title: number
    description: number
    scheduledAt: number
    meetingUrl: number
    createdByTeacherId: number
    _all: number
  }


  export type ClassroomMeetingRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    classroomId?: true
    provider?: true
    title?: true
    description?: true
    scheduledAt?: true
    meetingUrl?: true
    createdByTeacherId?: true
  }

  export type ClassroomMeetingRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    classroomId?: true
    provider?: true
    title?: true
    description?: true
    scheduledAt?: true
    meetingUrl?: true
    createdByTeacherId?: true
  }

  export type ClassroomMeetingRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    classroomId?: true
    provider?: true
    title?: true
    description?: true
    scheduledAt?: true
    meetingUrl?: true
    createdByTeacherId?: true
    _all?: true
  }

  export type ClassroomMeetingRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomMeetingRecord to aggregate.
     */
    where?: ClassroomMeetingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomMeetingRecords to fetch.
     */
    orderBy?: ClassroomMeetingRecordOrderByWithRelationInput | ClassroomMeetingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomMeetingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomMeetingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomMeetingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassroomMeetingRecords
    **/
    _count?: true | ClassroomMeetingRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomMeetingRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomMeetingRecordMaxAggregateInputType
  }

  export type GetClassroomMeetingRecordAggregateType<T extends ClassroomMeetingRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroomMeetingRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroomMeetingRecord[P]>
      : GetScalarType<T[P], AggregateClassroomMeetingRecord[P]>
  }




  export type ClassroomMeetingRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomMeetingRecordWhereInput
    orderBy?: ClassroomMeetingRecordOrderByWithAggregationInput | ClassroomMeetingRecordOrderByWithAggregationInput[]
    by: ClassroomMeetingRecordScalarFieldEnum[] | ClassroomMeetingRecordScalarFieldEnum
    having?: ClassroomMeetingRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomMeetingRecordCountAggregateInputType | true
    _min?: ClassroomMeetingRecordMinAggregateInputType
    _max?: ClassroomMeetingRecordMaxAggregateInputType
  }

  export type ClassroomMeetingRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    classroomId: string
    provider: string
    title: string
    description: string | null
    scheduledAt: Date
    meetingUrl: string
    createdByTeacherId: string
    _count: ClassroomMeetingRecordCountAggregateOutputType | null
    _min: ClassroomMeetingRecordMinAggregateOutputType | null
    _max: ClassroomMeetingRecordMaxAggregateOutputType | null
  }

  type GetClassroomMeetingRecordGroupByPayload<T extends ClassroomMeetingRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomMeetingRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomMeetingRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomMeetingRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomMeetingRecordGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomMeetingRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    classroomId?: boolean
    provider?: boolean
    title?: boolean
    description?: boolean
    scheduledAt?: boolean
    meetingUrl?: boolean
    createdByTeacherId?: boolean
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomMeetingRecord"]>

  export type ClassroomMeetingRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    classroomId?: boolean
    provider?: boolean
    title?: boolean
    description?: boolean
    scheduledAt?: boolean
    meetingUrl?: boolean
    createdByTeacherId?: boolean
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomMeetingRecord"]>

  export type ClassroomMeetingRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    classroomId?: boolean
    provider?: boolean
    title?: boolean
    description?: boolean
    scheduledAt?: boolean
    meetingUrl?: boolean
    createdByTeacherId?: boolean
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroomMeetingRecord"]>

  export type ClassroomMeetingRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    classroomId?: boolean
    provider?: boolean
    title?: boolean
    description?: boolean
    scheduledAt?: boolean
    meetingUrl?: boolean
    createdByTeacherId?: boolean
  }

  export type ClassroomMeetingRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "classroomId" | "provider" | "title" | "description" | "scheduledAt" | "meetingUrl" | "createdByTeacherId", ExtArgs["result"]["classroomMeetingRecord"]>
  export type ClassroomMeetingRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
  }
  export type ClassroomMeetingRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
  }
  export type ClassroomMeetingRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomRecordDefaultArgs<ExtArgs>
  }

  export type $ClassroomMeetingRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassroomMeetingRecord"
    objects: {
      classroom: Prisma.$ClassroomRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      classroomId: string
      provider: string
      title: string
      description: string | null
      scheduledAt: Date
      meetingUrl: string
      createdByTeacherId: string
    }, ExtArgs["result"]["classroomMeetingRecord"]>
    composites: {}
  }

  type ClassroomMeetingRecordGetPayload<S extends boolean | null | undefined | ClassroomMeetingRecordDefaultArgs> = $Result.GetResult<Prisma.$ClassroomMeetingRecordPayload, S>

  type ClassroomMeetingRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomMeetingRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomMeetingRecordCountAggregateInputType | true
    }

  export interface ClassroomMeetingRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassroomMeetingRecord'], meta: { name: 'ClassroomMeetingRecord' } }
    /**
     * Find zero or one ClassroomMeetingRecord that matches the filter.
     * @param {ClassroomMeetingRecordFindUniqueArgs} args - Arguments to find a ClassroomMeetingRecord
     * @example
     * // Get one ClassroomMeetingRecord
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomMeetingRecordFindUniqueArgs>(args: SelectSubset<T, ClassroomMeetingRecordFindUniqueArgs<ExtArgs>>): Prisma__ClassroomMeetingRecordClient<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassroomMeetingRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomMeetingRecordFindUniqueOrThrowArgs} args - Arguments to find a ClassroomMeetingRecord
     * @example
     * // Get one ClassroomMeetingRecord
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomMeetingRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomMeetingRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomMeetingRecordClient<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomMeetingRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMeetingRecordFindFirstArgs} args - Arguments to find a ClassroomMeetingRecord
     * @example
     * // Get one ClassroomMeetingRecord
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomMeetingRecordFindFirstArgs>(args?: SelectSubset<T, ClassroomMeetingRecordFindFirstArgs<ExtArgs>>): Prisma__ClassroomMeetingRecordClient<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassroomMeetingRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMeetingRecordFindFirstOrThrowArgs} args - Arguments to find a ClassroomMeetingRecord
     * @example
     * // Get one ClassroomMeetingRecord
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomMeetingRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomMeetingRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomMeetingRecordClient<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassroomMeetingRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMeetingRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassroomMeetingRecords
     * const classroomMeetingRecords = await prisma.classroomMeetingRecord.findMany()
     * 
     * // Get first 10 ClassroomMeetingRecords
     * const classroomMeetingRecords = await prisma.classroomMeetingRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomMeetingRecordWithIdOnly = await prisma.classroomMeetingRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomMeetingRecordFindManyArgs>(args?: SelectSubset<T, ClassroomMeetingRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassroomMeetingRecord.
     * @param {ClassroomMeetingRecordCreateArgs} args - Arguments to create a ClassroomMeetingRecord.
     * @example
     * // Create one ClassroomMeetingRecord
     * const ClassroomMeetingRecord = await prisma.classroomMeetingRecord.create({
     *   data: {
     *     // ... data to create a ClassroomMeetingRecord
     *   }
     * })
     * 
     */
    create<T extends ClassroomMeetingRecordCreateArgs>(args: SelectSubset<T, ClassroomMeetingRecordCreateArgs<ExtArgs>>): Prisma__ClassroomMeetingRecordClient<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassroomMeetingRecords.
     * @param {ClassroomMeetingRecordCreateManyArgs} args - Arguments to create many ClassroomMeetingRecords.
     * @example
     * // Create many ClassroomMeetingRecords
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomMeetingRecordCreateManyArgs>(args?: SelectSubset<T, ClassroomMeetingRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassroomMeetingRecords and returns the data saved in the database.
     * @param {ClassroomMeetingRecordCreateManyAndReturnArgs} args - Arguments to create many ClassroomMeetingRecords.
     * @example
     * // Create many ClassroomMeetingRecords
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassroomMeetingRecords and only return the `id`
     * const classroomMeetingRecordWithIdOnly = await prisma.classroomMeetingRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomMeetingRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomMeetingRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassroomMeetingRecord.
     * @param {ClassroomMeetingRecordDeleteArgs} args - Arguments to delete one ClassroomMeetingRecord.
     * @example
     * // Delete one ClassroomMeetingRecord
     * const ClassroomMeetingRecord = await prisma.classroomMeetingRecord.delete({
     *   where: {
     *     // ... filter to delete one ClassroomMeetingRecord
     *   }
     * })
     * 
     */
    delete<T extends ClassroomMeetingRecordDeleteArgs>(args: SelectSubset<T, ClassroomMeetingRecordDeleteArgs<ExtArgs>>): Prisma__ClassroomMeetingRecordClient<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassroomMeetingRecord.
     * @param {ClassroomMeetingRecordUpdateArgs} args - Arguments to update one ClassroomMeetingRecord.
     * @example
     * // Update one ClassroomMeetingRecord
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomMeetingRecordUpdateArgs>(args: SelectSubset<T, ClassroomMeetingRecordUpdateArgs<ExtArgs>>): Prisma__ClassroomMeetingRecordClient<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassroomMeetingRecords.
     * @param {ClassroomMeetingRecordDeleteManyArgs} args - Arguments to filter ClassroomMeetingRecords to delete.
     * @example
     * // Delete a few ClassroomMeetingRecords
     * const { count } = await prisma.classroomMeetingRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomMeetingRecordDeleteManyArgs>(args?: SelectSubset<T, ClassroomMeetingRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomMeetingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMeetingRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassroomMeetingRecords
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomMeetingRecordUpdateManyArgs>(args: SelectSubset<T, ClassroomMeetingRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassroomMeetingRecords and returns the data updated in the database.
     * @param {ClassroomMeetingRecordUpdateManyAndReturnArgs} args - Arguments to update many ClassroomMeetingRecords.
     * @example
     * // Update many ClassroomMeetingRecords
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassroomMeetingRecords and only return the `id`
     * const classroomMeetingRecordWithIdOnly = await prisma.classroomMeetingRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassroomMeetingRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomMeetingRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassroomMeetingRecord.
     * @param {ClassroomMeetingRecordUpsertArgs} args - Arguments to update or create a ClassroomMeetingRecord.
     * @example
     * // Update or create a ClassroomMeetingRecord
     * const classroomMeetingRecord = await prisma.classroomMeetingRecord.upsert({
     *   create: {
     *     // ... data to create a ClassroomMeetingRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassroomMeetingRecord we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomMeetingRecordUpsertArgs>(args: SelectSubset<T, ClassroomMeetingRecordUpsertArgs<ExtArgs>>): Prisma__ClassroomMeetingRecordClient<$Result.GetResult<Prisma.$ClassroomMeetingRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassroomMeetingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMeetingRecordCountArgs} args - Arguments to filter ClassroomMeetingRecords to count.
     * @example
     * // Count the number of ClassroomMeetingRecords
     * const count = await prisma.classroomMeetingRecord.count({
     *   where: {
     *     // ... the filter for the ClassroomMeetingRecords we want to count
     *   }
     * })
    **/
    count<T extends ClassroomMeetingRecordCountArgs>(
      args?: Subset<T, ClassroomMeetingRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomMeetingRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassroomMeetingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMeetingRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassroomMeetingRecordAggregateArgs>(args: Subset<T, ClassroomMeetingRecordAggregateArgs>): Prisma.PrismaPromise<GetClassroomMeetingRecordAggregateType<T>>

    /**
     * Group by ClassroomMeetingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomMeetingRecordGroupByArgs} args - Group by arguments.
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
      T extends ClassroomMeetingRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomMeetingRecordGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomMeetingRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassroomMeetingRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomMeetingRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassroomMeetingRecord model
   */
  readonly fields: ClassroomMeetingRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassroomMeetingRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomMeetingRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classroom<T extends ClassroomRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomRecordDefaultArgs<ExtArgs>>): Prisma__ClassroomRecordClient<$Result.GetResult<Prisma.$ClassroomRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClassroomMeetingRecord model
   */
  interface ClassroomMeetingRecordFieldRefs {
    readonly id: FieldRef<"ClassroomMeetingRecord", 'String'>
    readonly createdAt: FieldRef<"ClassroomMeetingRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassroomMeetingRecord", 'DateTime'>
    readonly metadata: FieldRef<"ClassroomMeetingRecord", 'Json'>
    readonly classroomId: FieldRef<"ClassroomMeetingRecord", 'String'>
    readonly provider: FieldRef<"ClassroomMeetingRecord", 'String'>
    readonly title: FieldRef<"ClassroomMeetingRecord", 'String'>
    readonly description: FieldRef<"ClassroomMeetingRecord", 'String'>
    readonly scheduledAt: FieldRef<"ClassroomMeetingRecord", 'DateTime'>
    readonly meetingUrl: FieldRef<"ClassroomMeetingRecord", 'String'>
    readonly createdByTeacherId: FieldRef<"ClassroomMeetingRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClassroomMeetingRecord findUnique
   */
  export type ClassroomMeetingRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMeetingRecord to fetch.
     */
    where: ClassroomMeetingRecordWhereUniqueInput
  }

  /**
   * ClassroomMeetingRecord findUniqueOrThrow
   */
  export type ClassroomMeetingRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMeetingRecord to fetch.
     */
    where: ClassroomMeetingRecordWhereUniqueInput
  }

  /**
   * ClassroomMeetingRecord findFirst
   */
  export type ClassroomMeetingRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMeetingRecord to fetch.
     */
    where?: ClassroomMeetingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomMeetingRecords to fetch.
     */
    orderBy?: ClassroomMeetingRecordOrderByWithRelationInput | ClassroomMeetingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomMeetingRecords.
     */
    cursor?: ClassroomMeetingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomMeetingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomMeetingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomMeetingRecords.
     */
    distinct?: ClassroomMeetingRecordScalarFieldEnum | ClassroomMeetingRecordScalarFieldEnum[]
  }

  /**
   * ClassroomMeetingRecord findFirstOrThrow
   */
  export type ClassroomMeetingRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMeetingRecord to fetch.
     */
    where?: ClassroomMeetingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomMeetingRecords to fetch.
     */
    orderBy?: ClassroomMeetingRecordOrderByWithRelationInput | ClassroomMeetingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassroomMeetingRecords.
     */
    cursor?: ClassroomMeetingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomMeetingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomMeetingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassroomMeetingRecords.
     */
    distinct?: ClassroomMeetingRecordScalarFieldEnum | ClassroomMeetingRecordScalarFieldEnum[]
  }

  /**
   * ClassroomMeetingRecord findMany
   */
  export type ClassroomMeetingRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClassroomMeetingRecords to fetch.
     */
    where?: ClassroomMeetingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassroomMeetingRecords to fetch.
     */
    orderBy?: ClassroomMeetingRecordOrderByWithRelationInput | ClassroomMeetingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassroomMeetingRecords.
     */
    cursor?: ClassroomMeetingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassroomMeetingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassroomMeetingRecords.
     */
    skip?: number
    distinct?: ClassroomMeetingRecordScalarFieldEnum | ClassroomMeetingRecordScalarFieldEnum[]
  }

  /**
   * ClassroomMeetingRecord create
   */
  export type ClassroomMeetingRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassroomMeetingRecord.
     */
    data: XOR<ClassroomMeetingRecordCreateInput, ClassroomMeetingRecordUncheckedCreateInput>
  }

  /**
   * ClassroomMeetingRecord createMany
   */
  export type ClassroomMeetingRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassroomMeetingRecords.
     */
    data: ClassroomMeetingRecordCreateManyInput | ClassroomMeetingRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassroomMeetingRecord createManyAndReturn
   */
  export type ClassroomMeetingRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ClassroomMeetingRecords.
     */
    data: ClassroomMeetingRecordCreateManyInput | ClassroomMeetingRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomMeetingRecord update
   */
  export type ClassroomMeetingRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassroomMeetingRecord.
     */
    data: XOR<ClassroomMeetingRecordUpdateInput, ClassroomMeetingRecordUncheckedUpdateInput>
    /**
     * Choose, which ClassroomMeetingRecord to update.
     */
    where: ClassroomMeetingRecordWhereUniqueInput
  }

  /**
   * ClassroomMeetingRecord updateMany
   */
  export type ClassroomMeetingRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassroomMeetingRecords.
     */
    data: XOR<ClassroomMeetingRecordUpdateManyMutationInput, ClassroomMeetingRecordUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomMeetingRecords to update
     */
    where?: ClassroomMeetingRecordWhereInput
    /**
     * Limit how many ClassroomMeetingRecords to update.
     */
    limit?: number
  }

  /**
   * ClassroomMeetingRecord updateManyAndReturn
   */
  export type ClassroomMeetingRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * The data used to update ClassroomMeetingRecords.
     */
    data: XOR<ClassroomMeetingRecordUpdateManyMutationInput, ClassroomMeetingRecordUncheckedUpdateManyInput>
    /**
     * Filter which ClassroomMeetingRecords to update
     */
    where?: ClassroomMeetingRecordWhereInput
    /**
     * Limit how many ClassroomMeetingRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassroomMeetingRecord upsert
   */
  export type ClassroomMeetingRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassroomMeetingRecord to update in case it exists.
     */
    where: ClassroomMeetingRecordWhereUniqueInput
    /**
     * In case the ClassroomMeetingRecord found by the `where` argument doesn't exist, create a new ClassroomMeetingRecord with this data.
     */
    create: XOR<ClassroomMeetingRecordCreateInput, ClassroomMeetingRecordUncheckedCreateInput>
    /**
     * In case the ClassroomMeetingRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomMeetingRecordUpdateInput, ClassroomMeetingRecordUncheckedUpdateInput>
  }

  /**
   * ClassroomMeetingRecord delete
   */
  export type ClassroomMeetingRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
    /**
     * Filter which ClassroomMeetingRecord to delete.
     */
    where: ClassroomMeetingRecordWhereUniqueInput
  }

  /**
   * ClassroomMeetingRecord deleteMany
   */
  export type ClassroomMeetingRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassroomMeetingRecords to delete
     */
    where?: ClassroomMeetingRecordWhereInput
    /**
     * Limit how many ClassroomMeetingRecords to delete.
     */
    limit?: number
  }

  /**
   * ClassroomMeetingRecord without action
   */
  export type ClassroomMeetingRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomMeetingRecord
     */
    select?: ClassroomMeetingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassroomMeetingRecord
     */
    omit?: ClassroomMeetingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomMeetingRecordInclude<ExtArgs> | null
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


  export const LearningPathRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    title: 'title',
    summary: 'summary',
    status: 'status',
    audienceRoles: 'audienceRoles',
    topicIds: 'topicIds',
    skillIds: 'skillIds',
    lessonIds: 'lessonIds',
    projectIds: 'projectIds',
    estimatedDurationMinutes: 'estimatedDurationMinutes',
    difficultyLevel: 'difficultyLevel',
    sequencingStrategy: 'sequencingStrategy'
  };

  export type LearningPathRecordScalarFieldEnum = (typeof LearningPathRecordScalarFieldEnum)[keyof typeof LearningPathRecordScalarFieldEnum]


  export const LearningSessionRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    learnerUserId: 'learnerUserId',
    status: 'status',
    learningPathId: 'learningPathId',
    lessonId: 'lessonId',
    topicId: 'topicId',
    tutorSessionId: 'tutorSessionId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    progressPercent: 'progressPercent',
    difficultyLevel: 'difficultyLevel',
    masteryStateIds: 'masteryStateIds',
    recommendationIds: 'recommendationIds'
  };

  export type LearningSessionRecordScalarFieldEnum = (typeof LearningSessionRecordScalarFieldEnum)[keyof typeof LearningSessionRecordScalarFieldEnum]


  export const MasteryStateRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    learnerUserId: 'learnerUserId',
    learningPathId: 'learningPathId',
    subjectType: 'subjectType',
    subjectId: 'subjectId',
    level: 'level',
    score: 'score',
    confidence: 'confidence',
    evidenceCount: 'evidenceCount',
    trend: 'trend',
    lastObservedAt: 'lastObservedAt',
    recommendedDifficulty: 'recommendedDifficulty'
  };

  export type MasteryStateRecordScalarFieldEnum = (typeof MasteryStateRecordScalarFieldEnum)[keyof typeof MasteryStateRecordScalarFieldEnum]


  export const ClassroomRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    name: 'name',
    gradeLevel: 'gradeLevel',
    subject: 'subject',
    teacherId: 'teacherId',
    classCode: 'classCode',
    assignedModuleIds: 'assignedModuleIds',
    assignedLearningPathIds: 'assignedLearningPathIds',
    learningPathId: 'learningPathId'
  };

  export type ClassroomRecordScalarFieldEnum = (typeof ClassroomRecordScalarFieldEnum)[keyof typeof ClassroomRecordScalarFieldEnum]


  export const ClassroomStudentProfileRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    name: 'name',
    email: 'email',
    gradeLevel: 'gradeLevel',
    createdByTeacher: 'createdByTeacher',
    linkedUserId: 'linkedUserId',
    generatedCredential: 'generatedCredential'
  };

  export type ClassroomStudentProfileRecordScalarFieldEnum = (typeof ClassroomStudentProfileRecordScalarFieldEnum)[keyof typeof ClassroomStudentProfileRecordScalarFieldEnum]


  export const StudentEnrollmentRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    classroomId: 'classroomId',
    studentId: 'studentId',
    status: 'status',
    joinedAt: 'joinedAt'
  };

  export type StudentEnrollmentRecordScalarFieldEnum = (typeof StudentEnrollmentRecordScalarFieldEnum)[keyof typeof StudentEnrollmentRecordScalarFieldEnum]


  export const ClassroomMeetingRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    classroomId: 'classroomId',
    provider: 'provider',
    title: 'title',
    description: 'description',
    scheduledAt: 'scheduledAt',
    meetingUrl: 'meetingUrl',
    createdByTeacherId: 'createdByTeacherId'
  };

  export type ClassroomMeetingRecordScalarFieldEnum = (typeof ClassroomMeetingRecordScalarFieldEnum)[keyof typeof ClassroomMeetingRecordScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type LearningPathRecordWhereInput = {
    AND?: LearningPathRecordWhereInput | LearningPathRecordWhereInput[]
    OR?: LearningPathRecordWhereInput[]
    NOT?: LearningPathRecordWhereInput | LearningPathRecordWhereInput[]
    id?: StringFilter<"LearningPathRecord"> | string
    createdAt?: DateTimeFilter<"LearningPathRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningPathRecord"> | Date | string
    metadata?: JsonNullableFilter<"LearningPathRecord">
    title?: StringFilter<"LearningPathRecord"> | string
    summary?: StringNullableFilter<"LearningPathRecord"> | string | null
    status?: StringFilter<"LearningPathRecord"> | string
    audienceRoles?: StringNullableListFilter<"LearningPathRecord">
    topicIds?: StringNullableListFilter<"LearningPathRecord">
    skillIds?: StringNullableListFilter<"LearningPathRecord">
    lessonIds?: StringNullableListFilter<"LearningPathRecord">
    projectIds?: StringNullableListFilter<"LearningPathRecord">
    estimatedDurationMinutes?: IntNullableFilter<"LearningPathRecord"> | number | null
    difficultyLevel?: StringNullableFilter<"LearningPathRecord"> | string | null
    sequencingStrategy?: StringNullableFilter<"LearningPathRecord"> | string | null
    sessions?: LearningSessionRecordListRelationFilter
    classrooms?: ClassroomRecordListRelationFilter
  }

  export type LearningPathRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    status?: SortOrder
    audienceRoles?: SortOrder
    topicIds?: SortOrder
    skillIds?: SortOrder
    lessonIds?: SortOrder
    projectIds?: SortOrder
    estimatedDurationMinutes?: SortOrderInput | SortOrder
    difficultyLevel?: SortOrderInput | SortOrder
    sequencingStrategy?: SortOrderInput | SortOrder
    sessions?: LearningSessionRecordOrderByRelationAggregateInput
    classrooms?: ClassroomRecordOrderByRelationAggregateInput
  }

  export type LearningPathRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningPathRecordWhereInput | LearningPathRecordWhereInput[]
    OR?: LearningPathRecordWhereInput[]
    NOT?: LearningPathRecordWhereInput | LearningPathRecordWhereInput[]
    createdAt?: DateTimeFilter<"LearningPathRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningPathRecord"> | Date | string
    metadata?: JsonNullableFilter<"LearningPathRecord">
    title?: StringFilter<"LearningPathRecord"> | string
    summary?: StringNullableFilter<"LearningPathRecord"> | string | null
    status?: StringFilter<"LearningPathRecord"> | string
    audienceRoles?: StringNullableListFilter<"LearningPathRecord">
    topicIds?: StringNullableListFilter<"LearningPathRecord">
    skillIds?: StringNullableListFilter<"LearningPathRecord">
    lessonIds?: StringNullableListFilter<"LearningPathRecord">
    projectIds?: StringNullableListFilter<"LearningPathRecord">
    estimatedDurationMinutes?: IntNullableFilter<"LearningPathRecord"> | number | null
    difficultyLevel?: StringNullableFilter<"LearningPathRecord"> | string | null
    sequencingStrategy?: StringNullableFilter<"LearningPathRecord"> | string | null
    sessions?: LearningSessionRecordListRelationFilter
    classrooms?: ClassroomRecordListRelationFilter
  }, "id">

  export type LearningPathRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    status?: SortOrder
    audienceRoles?: SortOrder
    topicIds?: SortOrder
    skillIds?: SortOrder
    lessonIds?: SortOrder
    projectIds?: SortOrder
    estimatedDurationMinutes?: SortOrderInput | SortOrder
    difficultyLevel?: SortOrderInput | SortOrder
    sequencingStrategy?: SortOrderInput | SortOrder
    _count?: LearningPathRecordCountOrderByAggregateInput
    _avg?: LearningPathRecordAvgOrderByAggregateInput
    _max?: LearningPathRecordMaxOrderByAggregateInput
    _min?: LearningPathRecordMinOrderByAggregateInput
    _sum?: LearningPathRecordSumOrderByAggregateInput
  }

  export type LearningPathRecordScalarWhereWithAggregatesInput = {
    AND?: LearningPathRecordScalarWhereWithAggregatesInput | LearningPathRecordScalarWhereWithAggregatesInput[]
    OR?: LearningPathRecordScalarWhereWithAggregatesInput[]
    NOT?: LearningPathRecordScalarWhereWithAggregatesInput | LearningPathRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningPathRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LearningPathRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningPathRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"LearningPathRecord">
    title?: StringWithAggregatesFilter<"LearningPathRecord"> | string
    summary?: StringNullableWithAggregatesFilter<"LearningPathRecord"> | string | null
    status?: StringWithAggregatesFilter<"LearningPathRecord"> | string
    audienceRoles?: StringNullableListFilter<"LearningPathRecord">
    topicIds?: StringNullableListFilter<"LearningPathRecord">
    skillIds?: StringNullableListFilter<"LearningPathRecord">
    lessonIds?: StringNullableListFilter<"LearningPathRecord">
    projectIds?: StringNullableListFilter<"LearningPathRecord">
    estimatedDurationMinutes?: IntNullableWithAggregatesFilter<"LearningPathRecord"> | number | null
    difficultyLevel?: StringNullableWithAggregatesFilter<"LearningPathRecord"> | string | null
    sequencingStrategy?: StringNullableWithAggregatesFilter<"LearningPathRecord"> | string | null
  }

  export type LearningSessionRecordWhereInput = {
    AND?: LearningSessionRecordWhereInput | LearningSessionRecordWhereInput[]
    OR?: LearningSessionRecordWhereInput[]
    NOT?: LearningSessionRecordWhereInput | LearningSessionRecordWhereInput[]
    id?: StringFilter<"LearningSessionRecord"> | string
    createdAt?: DateTimeFilter<"LearningSessionRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningSessionRecord"> | Date | string
    metadata?: JsonNullableFilter<"LearningSessionRecord">
    learnerUserId?: StringFilter<"LearningSessionRecord"> | string
    status?: StringFilter<"LearningSessionRecord"> | string
    learningPathId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    lessonId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    topicId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    tutorSessionId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    startedAt?: DateTimeFilter<"LearningSessionRecord"> | Date | string
    endedAt?: DateTimeNullableFilter<"LearningSessionRecord"> | Date | string | null
    progressPercent?: FloatFilter<"LearningSessionRecord"> | number
    difficultyLevel?: StringNullableFilter<"LearningSessionRecord"> | string | null
    masteryStateIds?: StringNullableListFilter<"LearningSessionRecord">
    recommendationIds?: StringNullableListFilter<"LearningSessionRecord">
    learningPath?: XOR<LearningPathRecordNullableScalarRelationFilter, LearningPathRecordWhereInput> | null
  }

  export type LearningSessionRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    learningPathId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    topicId?: SortOrderInput | SortOrder
    tutorSessionId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    progressPercent?: SortOrder
    difficultyLevel?: SortOrderInput | SortOrder
    masteryStateIds?: SortOrder
    recommendationIds?: SortOrder
    learningPath?: LearningPathRecordOrderByWithRelationInput
  }

  export type LearningSessionRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningSessionRecordWhereInput | LearningSessionRecordWhereInput[]
    OR?: LearningSessionRecordWhereInput[]
    NOT?: LearningSessionRecordWhereInput | LearningSessionRecordWhereInput[]
    createdAt?: DateTimeFilter<"LearningSessionRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningSessionRecord"> | Date | string
    metadata?: JsonNullableFilter<"LearningSessionRecord">
    learnerUserId?: StringFilter<"LearningSessionRecord"> | string
    status?: StringFilter<"LearningSessionRecord"> | string
    learningPathId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    lessonId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    topicId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    tutorSessionId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    startedAt?: DateTimeFilter<"LearningSessionRecord"> | Date | string
    endedAt?: DateTimeNullableFilter<"LearningSessionRecord"> | Date | string | null
    progressPercent?: FloatFilter<"LearningSessionRecord"> | number
    difficultyLevel?: StringNullableFilter<"LearningSessionRecord"> | string | null
    masteryStateIds?: StringNullableListFilter<"LearningSessionRecord">
    recommendationIds?: StringNullableListFilter<"LearningSessionRecord">
    learningPath?: XOR<LearningPathRecordNullableScalarRelationFilter, LearningPathRecordWhereInput> | null
  }, "id">

  export type LearningSessionRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    learningPathId?: SortOrderInput | SortOrder
    lessonId?: SortOrderInput | SortOrder
    topicId?: SortOrderInput | SortOrder
    tutorSessionId?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    progressPercent?: SortOrder
    difficultyLevel?: SortOrderInput | SortOrder
    masteryStateIds?: SortOrder
    recommendationIds?: SortOrder
    _count?: LearningSessionRecordCountOrderByAggregateInput
    _avg?: LearningSessionRecordAvgOrderByAggregateInput
    _max?: LearningSessionRecordMaxOrderByAggregateInput
    _min?: LearningSessionRecordMinOrderByAggregateInput
    _sum?: LearningSessionRecordSumOrderByAggregateInput
  }

  export type LearningSessionRecordScalarWhereWithAggregatesInput = {
    AND?: LearningSessionRecordScalarWhereWithAggregatesInput | LearningSessionRecordScalarWhereWithAggregatesInput[]
    OR?: LearningSessionRecordScalarWhereWithAggregatesInput[]
    NOT?: LearningSessionRecordScalarWhereWithAggregatesInput | LearningSessionRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningSessionRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LearningSessionRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningSessionRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"LearningSessionRecord">
    learnerUserId?: StringWithAggregatesFilter<"LearningSessionRecord"> | string
    status?: StringWithAggregatesFilter<"LearningSessionRecord"> | string
    learningPathId?: StringNullableWithAggregatesFilter<"LearningSessionRecord"> | string | null
    lessonId?: StringNullableWithAggregatesFilter<"LearningSessionRecord"> | string | null
    topicId?: StringNullableWithAggregatesFilter<"LearningSessionRecord"> | string | null
    tutorSessionId?: StringNullableWithAggregatesFilter<"LearningSessionRecord"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"LearningSessionRecord"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"LearningSessionRecord"> | Date | string | null
    progressPercent?: FloatWithAggregatesFilter<"LearningSessionRecord"> | number
    difficultyLevel?: StringNullableWithAggregatesFilter<"LearningSessionRecord"> | string | null
    masteryStateIds?: StringNullableListFilter<"LearningSessionRecord">
    recommendationIds?: StringNullableListFilter<"LearningSessionRecord">
  }

  export type MasteryStateRecordWhereInput = {
    AND?: MasteryStateRecordWhereInput | MasteryStateRecordWhereInput[]
    OR?: MasteryStateRecordWhereInput[]
    NOT?: MasteryStateRecordWhereInput | MasteryStateRecordWhereInput[]
    id?: StringFilter<"MasteryStateRecord"> | string
    createdAt?: DateTimeFilter<"MasteryStateRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MasteryStateRecord"> | Date | string
    metadata?: JsonNullableFilter<"MasteryStateRecord">
    learnerUserId?: StringFilter<"MasteryStateRecord"> | string
    learningPathId?: StringNullableFilter<"MasteryStateRecord"> | string | null
    subjectType?: StringFilter<"MasteryStateRecord"> | string
    subjectId?: StringFilter<"MasteryStateRecord"> | string
    level?: StringFilter<"MasteryStateRecord"> | string
    score?: FloatFilter<"MasteryStateRecord"> | number
    confidence?: FloatFilter<"MasteryStateRecord"> | number
    evidenceCount?: IntNullableFilter<"MasteryStateRecord"> | number | null
    trend?: StringNullableFilter<"MasteryStateRecord"> | string | null
    lastObservedAt?: DateTimeFilter<"MasteryStateRecord"> | Date | string
    recommendedDifficulty?: StringNullableFilter<"MasteryStateRecord"> | string | null
  }

  export type MasteryStateRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    learnerUserId?: SortOrder
    learningPathId?: SortOrderInput | SortOrder
    subjectType?: SortOrder
    subjectId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    evidenceCount?: SortOrderInput | SortOrder
    trend?: SortOrderInput | SortOrder
    lastObservedAt?: SortOrder
    recommendedDifficulty?: SortOrderInput | SortOrder
  }

  export type MasteryStateRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasteryStateRecordWhereInput | MasteryStateRecordWhereInput[]
    OR?: MasteryStateRecordWhereInput[]
    NOT?: MasteryStateRecordWhereInput | MasteryStateRecordWhereInput[]
    createdAt?: DateTimeFilter<"MasteryStateRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MasteryStateRecord"> | Date | string
    metadata?: JsonNullableFilter<"MasteryStateRecord">
    learnerUserId?: StringFilter<"MasteryStateRecord"> | string
    learningPathId?: StringNullableFilter<"MasteryStateRecord"> | string | null
    subjectType?: StringFilter<"MasteryStateRecord"> | string
    subjectId?: StringFilter<"MasteryStateRecord"> | string
    level?: StringFilter<"MasteryStateRecord"> | string
    score?: FloatFilter<"MasteryStateRecord"> | number
    confidence?: FloatFilter<"MasteryStateRecord"> | number
    evidenceCount?: IntNullableFilter<"MasteryStateRecord"> | number | null
    trend?: StringNullableFilter<"MasteryStateRecord"> | string | null
    lastObservedAt?: DateTimeFilter<"MasteryStateRecord"> | Date | string
    recommendedDifficulty?: StringNullableFilter<"MasteryStateRecord"> | string | null
  }, "id">

  export type MasteryStateRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    learnerUserId?: SortOrder
    learningPathId?: SortOrderInput | SortOrder
    subjectType?: SortOrder
    subjectId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    evidenceCount?: SortOrderInput | SortOrder
    trend?: SortOrderInput | SortOrder
    lastObservedAt?: SortOrder
    recommendedDifficulty?: SortOrderInput | SortOrder
    _count?: MasteryStateRecordCountOrderByAggregateInput
    _avg?: MasteryStateRecordAvgOrderByAggregateInput
    _max?: MasteryStateRecordMaxOrderByAggregateInput
    _min?: MasteryStateRecordMinOrderByAggregateInput
    _sum?: MasteryStateRecordSumOrderByAggregateInput
  }

  export type MasteryStateRecordScalarWhereWithAggregatesInput = {
    AND?: MasteryStateRecordScalarWhereWithAggregatesInput | MasteryStateRecordScalarWhereWithAggregatesInput[]
    OR?: MasteryStateRecordScalarWhereWithAggregatesInput[]
    NOT?: MasteryStateRecordScalarWhereWithAggregatesInput | MasteryStateRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasteryStateRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MasteryStateRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MasteryStateRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"MasteryStateRecord">
    learnerUserId?: StringWithAggregatesFilter<"MasteryStateRecord"> | string
    learningPathId?: StringNullableWithAggregatesFilter<"MasteryStateRecord"> | string | null
    subjectType?: StringWithAggregatesFilter<"MasteryStateRecord"> | string
    subjectId?: StringWithAggregatesFilter<"MasteryStateRecord"> | string
    level?: StringWithAggregatesFilter<"MasteryStateRecord"> | string
    score?: FloatWithAggregatesFilter<"MasteryStateRecord"> | number
    confidence?: FloatWithAggregatesFilter<"MasteryStateRecord"> | number
    evidenceCount?: IntNullableWithAggregatesFilter<"MasteryStateRecord"> | number | null
    trend?: StringNullableWithAggregatesFilter<"MasteryStateRecord"> | string | null
    lastObservedAt?: DateTimeWithAggregatesFilter<"MasteryStateRecord"> | Date | string
    recommendedDifficulty?: StringNullableWithAggregatesFilter<"MasteryStateRecord"> | string | null
  }

  export type ClassroomRecordWhereInput = {
    AND?: ClassroomRecordWhereInput | ClassroomRecordWhereInput[]
    OR?: ClassroomRecordWhereInput[]
    NOT?: ClassroomRecordWhereInput | ClassroomRecordWhereInput[]
    id?: StringFilter<"ClassroomRecord"> | string
    createdAt?: DateTimeFilter<"ClassroomRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomRecord"> | Date | string
    metadata?: JsonNullableFilter<"ClassroomRecord">
    name?: StringFilter<"ClassroomRecord"> | string
    gradeLevel?: StringFilter<"ClassroomRecord"> | string
    subject?: StringFilter<"ClassroomRecord"> | string
    teacherId?: StringFilter<"ClassroomRecord"> | string
    classCode?: StringFilter<"ClassroomRecord"> | string
    assignedModuleIds?: StringNullableListFilter<"ClassroomRecord">
    assignedLearningPathIds?: StringNullableListFilter<"ClassroomRecord">
    learningPathId?: StringNullableFilter<"ClassroomRecord"> | string | null
    learningPath?: XOR<LearningPathRecordNullableScalarRelationFilter, LearningPathRecordWhereInput> | null
    enrollments?: StudentEnrollmentRecordListRelationFilter
    meetings?: ClassroomMeetingRecordListRelationFilter
  }

  export type ClassroomRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    classCode?: SortOrder
    assignedModuleIds?: SortOrder
    assignedLearningPathIds?: SortOrder
    learningPathId?: SortOrderInput | SortOrder
    learningPath?: LearningPathRecordOrderByWithRelationInput
    enrollments?: StudentEnrollmentRecordOrderByRelationAggregateInput
    meetings?: ClassroomMeetingRecordOrderByRelationAggregateInput
  }

  export type ClassroomRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    classCode?: string
    AND?: ClassroomRecordWhereInput | ClassroomRecordWhereInput[]
    OR?: ClassroomRecordWhereInput[]
    NOT?: ClassroomRecordWhereInput | ClassroomRecordWhereInput[]
    createdAt?: DateTimeFilter<"ClassroomRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomRecord"> | Date | string
    metadata?: JsonNullableFilter<"ClassroomRecord">
    name?: StringFilter<"ClassroomRecord"> | string
    gradeLevel?: StringFilter<"ClassroomRecord"> | string
    subject?: StringFilter<"ClassroomRecord"> | string
    teacherId?: StringFilter<"ClassroomRecord"> | string
    assignedModuleIds?: StringNullableListFilter<"ClassroomRecord">
    assignedLearningPathIds?: StringNullableListFilter<"ClassroomRecord">
    learningPathId?: StringNullableFilter<"ClassroomRecord"> | string | null
    learningPath?: XOR<LearningPathRecordNullableScalarRelationFilter, LearningPathRecordWhereInput> | null
    enrollments?: StudentEnrollmentRecordListRelationFilter
    meetings?: ClassroomMeetingRecordListRelationFilter
  }, "id" | "classCode">

  export type ClassroomRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    classCode?: SortOrder
    assignedModuleIds?: SortOrder
    assignedLearningPathIds?: SortOrder
    learningPathId?: SortOrderInput | SortOrder
    _count?: ClassroomRecordCountOrderByAggregateInput
    _max?: ClassroomRecordMaxOrderByAggregateInput
    _min?: ClassroomRecordMinOrderByAggregateInput
  }

  export type ClassroomRecordScalarWhereWithAggregatesInput = {
    AND?: ClassroomRecordScalarWhereWithAggregatesInput | ClassroomRecordScalarWhereWithAggregatesInput[]
    OR?: ClassroomRecordScalarWhereWithAggregatesInput[]
    NOT?: ClassroomRecordScalarWhereWithAggregatesInput | ClassroomRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassroomRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClassroomRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassroomRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"ClassroomRecord">
    name?: StringWithAggregatesFilter<"ClassroomRecord"> | string
    gradeLevel?: StringWithAggregatesFilter<"ClassroomRecord"> | string
    subject?: StringWithAggregatesFilter<"ClassroomRecord"> | string
    teacherId?: StringWithAggregatesFilter<"ClassroomRecord"> | string
    classCode?: StringWithAggregatesFilter<"ClassroomRecord"> | string
    assignedModuleIds?: StringNullableListFilter<"ClassroomRecord">
    assignedLearningPathIds?: StringNullableListFilter<"ClassroomRecord">
    learningPathId?: StringNullableWithAggregatesFilter<"ClassroomRecord"> | string | null
  }

  export type ClassroomStudentProfileRecordWhereInput = {
    AND?: ClassroomStudentProfileRecordWhereInput | ClassroomStudentProfileRecordWhereInput[]
    OR?: ClassroomStudentProfileRecordWhereInput[]
    NOT?: ClassroomStudentProfileRecordWhereInput | ClassroomStudentProfileRecordWhereInput[]
    id?: StringFilter<"ClassroomStudentProfileRecord"> | string
    createdAt?: DateTimeFilter<"ClassroomStudentProfileRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomStudentProfileRecord"> | Date | string
    metadata?: JsonNullableFilter<"ClassroomStudentProfileRecord">
    name?: StringFilter<"ClassroomStudentProfileRecord"> | string
    email?: StringNullableFilter<"ClassroomStudentProfileRecord"> | string | null
    gradeLevel?: StringFilter<"ClassroomStudentProfileRecord"> | string
    createdByTeacher?: BoolFilter<"ClassroomStudentProfileRecord"> | boolean
    linkedUserId?: StringNullableFilter<"ClassroomStudentProfileRecord"> | string | null
    generatedCredential?: StringNullableFilter<"ClassroomStudentProfileRecord"> | string | null
    enrollments?: StudentEnrollmentRecordListRelationFilter
  }

  export type ClassroomStudentProfileRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    gradeLevel?: SortOrder
    createdByTeacher?: SortOrder
    linkedUserId?: SortOrderInput | SortOrder
    generatedCredential?: SortOrderInput | SortOrder
    enrollments?: StudentEnrollmentRecordOrderByRelationAggregateInput
  }

  export type ClassroomStudentProfileRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    linkedUserId?: string
    AND?: ClassroomStudentProfileRecordWhereInput | ClassroomStudentProfileRecordWhereInput[]
    OR?: ClassroomStudentProfileRecordWhereInput[]
    NOT?: ClassroomStudentProfileRecordWhereInput | ClassroomStudentProfileRecordWhereInput[]
    createdAt?: DateTimeFilter<"ClassroomStudentProfileRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomStudentProfileRecord"> | Date | string
    metadata?: JsonNullableFilter<"ClassroomStudentProfileRecord">
    name?: StringFilter<"ClassroomStudentProfileRecord"> | string
    email?: StringNullableFilter<"ClassroomStudentProfileRecord"> | string | null
    gradeLevel?: StringFilter<"ClassroomStudentProfileRecord"> | string
    createdByTeacher?: BoolFilter<"ClassroomStudentProfileRecord"> | boolean
    generatedCredential?: StringNullableFilter<"ClassroomStudentProfileRecord"> | string | null
    enrollments?: StudentEnrollmentRecordListRelationFilter
  }, "id" | "linkedUserId">

  export type ClassroomStudentProfileRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    gradeLevel?: SortOrder
    createdByTeacher?: SortOrder
    linkedUserId?: SortOrderInput | SortOrder
    generatedCredential?: SortOrderInput | SortOrder
    _count?: ClassroomStudentProfileRecordCountOrderByAggregateInput
    _max?: ClassroomStudentProfileRecordMaxOrderByAggregateInput
    _min?: ClassroomStudentProfileRecordMinOrderByAggregateInput
  }

  export type ClassroomStudentProfileRecordScalarWhereWithAggregatesInput = {
    AND?: ClassroomStudentProfileRecordScalarWhereWithAggregatesInput | ClassroomStudentProfileRecordScalarWhereWithAggregatesInput[]
    OR?: ClassroomStudentProfileRecordScalarWhereWithAggregatesInput[]
    NOT?: ClassroomStudentProfileRecordScalarWhereWithAggregatesInput | ClassroomStudentProfileRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassroomStudentProfileRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClassroomStudentProfileRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassroomStudentProfileRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"ClassroomStudentProfileRecord">
    name?: StringWithAggregatesFilter<"ClassroomStudentProfileRecord"> | string
    email?: StringNullableWithAggregatesFilter<"ClassroomStudentProfileRecord"> | string | null
    gradeLevel?: StringWithAggregatesFilter<"ClassroomStudentProfileRecord"> | string
    createdByTeacher?: BoolWithAggregatesFilter<"ClassroomStudentProfileRecord"> | boolean
    linkedUserId?: StringNullableWithAggregatesFilter<"ClassroomStudentProfileRecord"> | string | null
    generatedCredential?: StringNullableWithAggregatesFilter<"ClassroomStudentProfileRecord"> | string | null
  }

  export type StudentEnrollmentRecordWhereInput = {
    AND?: StudentEnrollmentRecordWhereInput | StudentEnrollmentRecordWhereInput[]
    OR?: StudentEnrollmentRecordWhereInput[]
    NOT?: StudentEnrollmentRecordWhereInput | StudentEnrollmentRecordWhereInput[]
    id?: StringFilter<"StudentEnrollmentRecord"> | string
    createdAt?: DateTimeFilter<"StudentEnrollmentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"StudentEnrollmentRecord"> | Date | string
    metadata?: JsonNullableFilter<"StudentEnrollmentRecord">
    classroomId?: StringFilter<"StudentEnrollmentRecord"> | string
    studentId?: StringFilter<"StudentEnrollmentRecord"> | string
    status?: StringFilter<"StudentEnrollmentRecord"> | string
    joinedAt?: DateTimeNullableFilter<"StudentEnrollmentRecord"> | Date | string | null
    classroom?: XOR<ClassroomRecordScalarRelationFilter, ClassroomRecordWhereInput>
    student?: XOR<ClassroomStudentProfileRecordScalarRelationFilter, ClassroomStudentProfileRecordWhereInput>
  }

  export type StudentEnrollmentRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    classroomId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    classroom?: ClassroomRecordOrderByWithRelationInput
    student?: ClassroomStudentProfileRecordOrderByWithRelationInput
  }

  export type StudentEnrollmentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    classroomId_studentId?: StudentEnrollmentRecordClassroomIdStudentIdCompoundUniqueInput
    AND?: StudentEnrollmentRecordWhereInput | StudentEnrollmentRecordWhereInput[]
    OR?: StudentEnrollmentRecordWhereInput[]
    NOT?: StudentEnrollmentRecordWhereInput | StudentEnrollmentRecordWhereInput[]
    createdAt?: DateTimeFilter<"StudentEnrollmentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"StudentEnrollmentRecord"> | Date | string
    metadata?: JsonNullableFilter<"StudentEnrollmentRecord">
    classroomId?: StringFilter<"StudentEnrollmentRecord"> | string
    studentId?: StringFilter<"StudentEnrollmentRecord"> | string
    status?: StringFilter<"StudentEnrollmentRecord"> | string
    joinedAt?: DateTimeNullableFilter<"StudentEnrollmentRecord"> | Date | string | null
    classroom?: XOR<ClassroomRecordScalarRelationFilter, ClassroomRecordWhereInput>
    student?: XOR<ClassroomStudentProfileRecordScalarRelationFilter, ClassroomStudentProfileRecordWhereInput>
  }, "id" | "classroomId_studentId">

  export type StudentEnrollmentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    classroomId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    _count?: StudentEnrollmentRecordCountOrderByAggregateInput
    _max?: StudentEnrollmentRecordMaxOrderByAggregateInput
    _min?: StudentEnrollmentRecordMinOrderByAggregateInput
  }

  export type StudentEnrollmentRecordScalarWhereWithAggregatesInput = {
    AND?: StudentEnrollmentRecordScalarWhereWithAggregatesInput | StudentEnrollmentRecordScalarWhereWithAggregatesInput[]
    OR?: StudentEnrollmentRecordScalarWhereWithAggregatesInput[]
    NOT?: StudentEnrollmentRecordScalarWhereWithAggregatesInput | StudentEnrollmentRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentEnrollmentRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudentEnrollmentRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentEnrollmentRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"StudentEnrollmentRecord">
    classroomId?: StringWithAggregatesFilter<"StudentEnrollmentRecord"> | string
    studentId?: StringWithAggregatesFilter<"StudentEnrollmentRecord"> | string
    status?: StringWithAggregatesFilter<"StudentEnrollmentRecord"> | string
    joinedAt?: DateTimeNullableWithAggregatesFilter<"StudentEnrollmentRecord"> | Date | string | null
  }

  export type ClassroomMeetingRecordWhereInput = {
    AND?: ClassroomMeetingRecordWhereInput | ClassroomMeetingRecordWhereInput[]
    OR?: ClassroomMeetingRecordWhereInput[]
    NOT?: ClassroomMeetingRecordWhereInput | ClassroomMeetingRecordWhereInput[]
    id?: StringFilter<"ClassroomMeetingRecord"> | string
    createdAt?: DateTimeFilter<"ClassroomMeetingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomMeetingRecord"> | Date | string
    metadata?: JsonNullableFilter<"ClassroomMeetingRecord">
    classroomId?: StringFilter<"ClassroomMeetingRecord"> | string
    provider?: StringFilter<"ClassroomMeetingRecord"> | string
    title?: StringFilter<"ClassroomMeetingRecord"> | string
    description?: StringNullableFilter<"ClassroomMeetingRecord"> | string | null
    scheduledAt?: DateTimeFilter<"ClassroomMeetingRecord"> | Date | string
    meetingUrl?: StringFilter<"ClassroomMeetingRecord"> | string
    createdByTeacherId?: StringFilter<"ClassroomMeetingRecord"> | string
    classroom?: XOR<ClassroomRecordScalarRelationFilter, ClassroomRecordWhereInput>
  }

  export type ClassroomMeetingRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    classroomId?: SortOrder
    provider?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    meetingUrl?: SortOrder
    createdByTeacherId?: SortOrder
    classroom?: ClassroomRecordOrderByWithRelationInput
  }

  export type ClassroomMeetingRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassroomMeetingRecordWhereInput | ClassroomMeetingRecordWhereInput[]
    OR?: ClassroomMeetingRecordWhereInput[]
    NOT?: ClassroomMeetingRecordWhereInput | ClassroomMeetingRecordWhereInput[]
    createdAt?: DateTimeFilter<"ClassroomMeetingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomMeetingRecord"> | Date | string
    metadata?: JsonNullableFilter<"ClassroomMeetingRecord">
    classroomId?: StringFilter<"ClassroomMeetingRecord"> | string
    provider?: StringFilter<"ClassroomMeetingRecord"> | string
    title?: StringFilter<"ClassroomMeetingRecord"> | string
    description?: StringNullableFilter<"ClassroomMeetingRecord"> | string | null
    scheduledAt?: DateTimeFilter<"ClassroomMeetingRecord"> | Date | string
    meetingUrl?: StringFilter<"ClassroomMeetingRecord"> | string
    createdByTeacherId?: StringFilter<"ClassroomMeetingRecord"> | string
    classroom?: XOR<ClassroomRecordScalarRelationFilter, ClassroomRecordWhereInput>
  }, "id">

  export type ClassroomMeetingRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    classroomId?: SortOrder
    provider?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    meetingUrl?: SortOrder
    createdByTeacherId?: SortOrder
    _count?: ClassroomMeetingRecordCountOrderByAggregateInput
    _max?: ClassroomMeetingRecordMaxOrderByAggregateInput
    _min?: ClassroomMeetingRecordMinOrderByAggregateInput
  }

  export type ClassroomMeetingRecordScalarWhereWithAggregatesInput = {
    AND?: ClassroomMeetingRecordScalarWhereWithAggregatesInput | ClassroomMeetingRecordScalarWhereWithAggregatesInput[]
    OR?: ClassroomMeetingRecordScalarWhereWithAggregatesInput[]
    NOT?: ClassroomMeetingRecordScalarWhereWithAggregatesInput | ClassroomMeetingRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassroomMeetingRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ClassroomMeetingRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassroomMeetingRecord"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"ClassroomMeetingRecord">
    classroomId?: StringWithAggregatesFilter<"ClassroomMeetingRecord"> | string
    provider?: StringWithAggregatesFilter<"ClassroomMeetingRecord"> | string
    title?: StringWithAggregatesFilter<"ClassroomMeetingRecord"> | string
    description?: StringNullableWithAggregatesFilter<"ClassroomMeetingRecord"> | string | null
    scheduledAt?: DateTimeWithAggregatesFilter<"ClassroomMeetingRecord"> | Date | string
    meetingUrl?: StringWithAggregatesFilter<"ClassroomMeetingRecord"> | string
    createdByTeacherId?: StringWithAggregatesFilter<"ClassroomMeetingRecord"> | string
  }

  export type LearningPathRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    status: string
    audienceRoles?: LearningPathRecordCreateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordCreatetopicIdsInput | string[]
    skillIds?: LearningPathRecordCreateskillIdsInput | string[]
    lessonIds?: LearningPathRecordCreatelessonIdsInput | string[]
    projectIds?: LearningPathRecordCreateprojectIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    sequencingStrategy?: string | null
    sessions?: LearningSessionRecordCreateNestedManyWithoutLearningPathInput
    classrooms?: ClassroomRecordCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    status: string
    audienceRoles?: LearningPathRecordCreateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordCreatetopicIdsInput | string[]
    skillIds?: LearningPathRecordCreateskillIdsInput | string[]
    lessonIds?: LearningPathRecordCreatelessonIdsInput | string[]
    projectIds?: LearningPathRecordCreateprojectIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    sequencingStrategy?: string | null
    sessions?: LearningSessionRecordUncheckedCreateNestedManyWithoutLearningPathInput
    classrooms?: ClassroomRecordUncheckedCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    audienceRoles?: LearningPathRecordUpdateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordUpdatetopicIdsInput | string[]
    skillIds?: LearningPathRecordUpdateskillIdsInput | string[]
    lessonIds?: LearningPathRecordUpdatelessonIdsInput | string[]
    projectIds?: LearningPathRecordUpdateprojectIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sequencingStrategy?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: LearningSessionRecordUpdateManyWithoutLearningPathNestedInput
    classrooms?: ClassroomRecordUpdateManyWithoutLearningPathNestedInput
  }

  export type LearningPathRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    audienceRoles?: LearningPathRecordUpdateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordUpdatetopicIdsInput | string[]
    skillIds?: LearningPathRecordUpdateskillIdsInput | string[]
    lessonIds?: LearningPathRecordUpdatelessonIdsInput | string[]
    projectIds?: LearningPathRecordUpdateprojectIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sequencingStrategy?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: LearningSessionRecordUncheckedUpdateManyWithoutLearningPathNestedInput
    classrooms?: ClassroomRecordUncheckedUpdateManyWithoutLearningPathNestedInput
  }

  export type LearningPathRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    status: string
    audienceRoles?: LearningPathRecordCreateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordCreatetopicIdsInput | string[]
    skillIds?: LearningPathRecordCreateskillIdsInput | string[]
    lessonIds?: LearningPathRecordCreatelessonIdsInput | string[]
    projectIds?: LearningPathRecordCreateprojectIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    sequencingStrategy?: string | null
  }

  export type LearningPathRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    audienceRoles?: LearningPathRecordUpdateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordUpdatetopicIdsInput | string[]
    skillIds?: LearningPathRecordUpdateskillIdsInput | string[]
    lessonIds?: LearningPathRecordUpdatelessonIdsInput | string[]
    projectIds?: LearningPathRecordUpdateprojectIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sequencingStrategy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LearningPathRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    audienceRoles?: LearningPathRecordUpdateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordUpdatetopicIdsInput | string[]
    skillIds?: LearningPathRecordUpdateskillIdsInput | string[]
    lessonIds?: LearningPathRecordUpdatelessonIdsInput | string[]
    projectIds?: LearningPathRecordUpdateprojectIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sequencingStrategy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LearningSessionRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    lessonId?: string | null
    topicId?: string | null
    tutorSessionId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    progressPercent: number
    difficultyLevel?: string | null
    masteryStateIds?: LearningSessionRecordCreatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordCreaterecommendationIdsInput | string[]
    learningPath?: LearningPathRecordCreateNestedOneWithoutSessionsInput
  }

  export type LearningSessionRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    learningPathId?: string | null
    lessonId?: string | null
    topicId?: string | null
    tutorSessionId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    progressPercent: number
    difficultyLevel?: string | null
    masteryStateIds?: LearningSessionRecordCreatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordCreaterecommendationIdsInput | string[]
  }

  export type LearningSessionRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: FloatFieldUpdateOperationsInput | number
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    masteryStateIds?: LearningSessionRecordUpdatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordUpdaterecommendationIdsInput | string[]
    learningPath?: LearningPathRecordUpdateOneWithoutSessionsNestedInput
  }

  export type LearningSessionRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: FloatFieldUpdateOperationsInput | number
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    masteryStateIds?: LearningSessionRecordUpdatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordUpdaterecommendationIdsInput | string[]
  }

  export type LearningSessionRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    learningPathId?: string | null
    lessonId?: string | null
    topicId?: string | null
    tutorSessionId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    progressPercent: number
    difficultyLevel?: string | null
    masteryStateIds?: LearningSessionRecordCreatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordCreaterecommendationIdsInput | string[]
  }

  export type LearningSessionRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: FloatFieldUpdateOperationsInput | number
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    masteryStateIds?: LearningSessionRecordUpdatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordUpdaterecommendationIdsInput | string[]
  }

  export type LearningSessionRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: FloatFieldUpdateOperationsInput | number
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    masteryStateIds?: LearningSessionRecordUpdatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordUpdaterecommendationIdsInput | string[]
  }

  export type MasteryStateRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    learningPathId?: string | null
    subjectType: string
    subjectId: string
    level: string
    score: number
    confidence: number
    evidenceCount?: number | null
    trend?: string | null
    lastObservedAt: Date | string
    recommendedDifficulty?: string | null
  }

  export type MasteryStateRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    learningPathId?: string | null
    subjectType: string
    subjectId: string
    level: string
    score: number
    confidence: number
    evidenceCount?: number | null
    trend?: string | null
    lastObservedAt: Date | string
    recommendedDifficulty?: string | null
  }

  export type MasteryStateRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    subjectType?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    evidenceCount?: NullableIntFieldUpdateOperationsInput | number | null
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    lastObservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedDifficulty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasteryStateRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    subjectType?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    evidenceCount?: NullableIntFieldUpdateOperationsInput | number | null
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    lastObservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedDifficulty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasteryStateRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    learningPathId?: string | null
    subjectType: string
    subjectId: string
    level: string
    score: number
    confidence: number
    evidenceCount?: number | null
    trend?: string | null
    lastObservedAt: Date | string
    recommendedDifficulty?: string | null
  }

  export type MasteryStateRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    subjectType?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    evidenceCount?: NullableIntFieldUpdateOperationsInput | number | null
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    lastObservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedDifficulty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasteryStateRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    subjectType?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    evidenceCount?: NullableIntFieldUpdateOperationsInput | number | null
    trend?: NullableStringFieldUpdateOperationsInput | string | null
    lastObservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedDifficulty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassroomRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
    learningPath?: LearningPathRecordCreateNestedOneWithoutClassroomsInput
    enrollments?: StudentEnrollmentRecordCreateNestedManyWithoutClassroomInput
    meetings?: ClassroomMeetingRecordCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
    learningPathId?: string | null
    enrollments?: StudentEnrollmentRecordUncheckedCreateNestedManyWithoutClassroomInput
    meetings?: ClassroomMeetingRecordUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
    learningPath?: LearningPathRecordUpdateOneWithoutClassroomsNestedInput
    enrollments?: StudentEnrollmentRecordUpdateManyWithoutClassroomNestedInput
    meetings?: ClassroomMeetingRecordUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    enrollments?: StudentEnrollmentRecordUncheckedUpdateManyWithoutClassroomNestedInput
    meetings?: ClassroomMeetingRecordUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
    learningPathId?: string | null
  }

  export type ClassroomRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
  }

  export type ClassroomRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassroomStudentProfileRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    email?: string | null
    gradeLevel: string
    createdByTeacher: boolean
    linkedUserId?: string | null
    generatedCredential?: string | null
    enrollments?: StudentEnrollmentRecordCreateNestedManyWithoutStudentInput
  }

  export type ClassroomStudentProfileRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    email?: string | null
    gradeLevel: string
    createdByTeacher: boolean
    linkedUserId?: string | null
    generatedCredential?: string | null
    enrollments?: StudentEnrollmentRecordUncheckedCreateNestedManyWithoutStudentInput
  }

  export type ClassroomStudentProfileRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdByTeacher?: BoolFieldUpdateOperationsInput | boolean
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCredential?: NullableStringFieldUpdateOperationsInput | string | null
    enrollments?: StudentEnrollmentRecordUpdateManyWithoutStudentNestedInput
  }

  export type ClassroomStudentProfileRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdByTeacher?: BoolFieldUpdateOperationsInput | boolean
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCredential?: NullableStringFieldUpdateOperationsInput | string | null
    enrollments?: StudentEnrollmentRecordUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ClassroomStudentProfileRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    email?: string | null
    gradeLevel: string
    createdByTeacher: boolean
    linkedUserId?: string | null
    generatedCredential?: string | null
  }

  export type ClassroomStudentProfileRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdByTeacher?: BoolFieldUpdateOperationsInput | boolean
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCredential?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassroomStudentProfileRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdByTeacher?: BoolFieldUpdateOperationsInput | boolean
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCredential?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentEnrollmentRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status: string
    joinedAt?: Date | string | null
    classroom: ClassroomRecordCreateNestedOneWithoutEnrollmentsInput
    student: ClassroomStudentProfileRecordCreateNestedOneWithoutEnrollmentsInput
  }

  export type StudentEnrollmentRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId: string
    studentId: string
    status: string
    joinedAt?: Date | string | null
  }

  export type StudentEnrollmentRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classroom?: ClassroomRecordUpdateOneRequiredWithoutEnrollmentsNestedInput
    student?: ClassroomStudentProfileRecordUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type StudentEnrollmentRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentEnrollmentRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId: string
    studentId: string
    status: string
    joinedAt?: Date | string | null
  }

  export type StudentEnrollmentRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentEnrollmentRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassroomMeetingRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    title: string
    description?: string | null
    scheduledAt: Date | string
    meetingUrl: string
    createdByTeacherId: string
    classroom: ClassroomRecordCreateNestedOneWithoutMeetingsInput
  }

  export type ClassroomMeetingRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId: string
    provider: string
    title: string
    description?: string | null
    scheduledAt: Date | string
    meetingUrl: string
    createdByTeacherId: string
  }

  export type ClassroomMeetingRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    createdByTeacherId?: StringFieldUpdateOperationsInput | string
    classroom?: ClassroomRecordUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type ClassroomMeetingRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    createdByTeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassroomMeetingRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId: string
    provider: string
    title: string
    description?: string | null
    scheduledAt: Date | string
    meetingUrl: string
    createdByTeacherId: string
  }

  export type ClassroomMeetingRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    createdByTeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassroomMeetingRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    createdByTeacherId?: StringFieldUpdateOperationsInput | string
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

  export type LearningSessionRecordListRelationFilter = {
    every?: LearningSessionRecordWhereInput
    some?: LearningSessionRecordWhereInput
    none?: LearningSessionRecordWhereInput
  }

  export type ClassroomRecordListRelationFilter = {
    every?: ClassroomRecordWhereInput
    some?: ClassroomRecordWhereInput
    none?: ClassroomRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LearningSessionRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningPathRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    audienceRoles?: SortOrder
    topicIds?: SortOrder
    skillIds?: SortOrder
    lessonIds?: SortOrder
    projectIds?: SortOrder
    estimatedDurationMinutes?: SortOrder
    difficultyLevel?: SortOrder
    sequencingStrategy?: SortOrder
  }

  export type LearningPathRecordAvgOrderByAggregateInput = {
    estimatedDurationMinutes?: SortOrder
  }

  export type LearningPathRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    estimatedDurationMinutes?: SortOrder
    difficultyLevel?: SortOrder
    sequencingStrategy?: SortOrder
  }

  export type LearningPathRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    status?: SortOrder
    estimatedDurationMinutes?: SortOrder
    difficultyLevel?: SortOrder
    sequencingStrategy?: SortOrder
  }

  export type LearningPathRecordSumOrderByAggregateInput = {
    estimatedDurationMinutes?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LearningPathRecordNullableScalarRelationFilter = {
    is?: LearningPathRecordWhereInput | null
    isNot?: LearningPathRecordWhereInput | null
  }

  export type LearningSessionRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    learningPathId?: SortOrder
    lessonId?: SortOrder
    topicId?: SortOrder
    tutorSessionId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    progressPercent?: SortOrder
    difficultyLevel?: SortOrder
    masteryStateIds?: SortOrder
    recommendationIds?: SortOrder
  }

  export type LearningSessionRecordAvgOrderByAggregateInput = {
    progressPercent?: SortOrder
  }

  export type LearningSessionRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    learningPathId?: SortOrder
    lessonId?: SortOrder
    topicId?: SortOrder
    tutorSessionId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    progressPercent?: SortOrder
    difficultyLevel?: SortOrder
  }

  export type LearningSessionRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    learnerUserId?: SortOrder
    status?: SortOrder
    learningPathId?: SortOrder
    lessonId?: SortOrder
    topicId?: SortOrder
    tutorSessionId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    progressPercent?: SortOrder
    difficultyLevel?: SortOrder
  }

  export type LearningSessionRecordSumOrderByAggregateInput = {
    progressPercent?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MasteryStateRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    learnerUserId?: SortOrder
    learningPathId?: SortOrder
    subjectType?: SortOrder
    subjectId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    evidenceCount?: SortOrder
    trend?: SortOrder
    lastObservedAt?: SortOrder
    recommendedDifficulty?: SortOrder
  }

  export type MasteryStateRecordAvgOrderByAggregateInput = {
    score?: SortOrder
    confidence?: SortOrder
    evidenceCount?: SortOrder
  }

  export type MasteryStateRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    learnerUserId?: SortOrder
    learningPathId?: SortOrder
    subjectType?: SortOrder
    subjectId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    evidenceCount?: SortOrder
    trend?: SortOrder
    lastObservedAt?: SortOrder
    recommendedDifficulty?: SortOrder
  }

  export type MasteryStateRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    learnerUserId?: SortOrder
    learningPathId?: SortOrder
    subjectType?: SortOrder
    subjectId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    evidenceCount?: SortOrder
    trend?: SortOrder
    lastObservedAt?: SortOrder
    recommendedDifficulty?: SortOrder
  }

  export type MasteryStateRecordSumOrderByAggregateInput = {
    score?: SortOrder
    confidence?: SortOrder
    evidenceCount?: SortOrder
  }

  export type StudentEnrollmentRecordListRelationFilter = {
    every?: StudentEnrollmentRecordWhereInput
    some?: StudentEnrollmentRecordWhereInput
    none?: StudentEnrollmentRecordWhereInput
  }

  export type ClassroomMeetingRecordListRelationFilter = {
    every?: ClassroomMeetingRecordWhereInput
    some?: ClassroomMeetingRecordWhereInput
    none?: ClassroomMeetingRecordWhereInput
  }

  export type StudentEnrollmentRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomMeetingRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    classCode?: SortOrder
    assignedModuleIds?: SortOrder
    assignedLearningPathIds?: SortOrder
    learningPathId?: SortOrder
  }

  export type ClassroomRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    classCode?: SortOrder
    learningPathId?: SortOrder
  }

  export type ClassroomRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    classCode?: SortOrder
    learningPathId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClassroomStudentProfileRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gradeLevel?: SortOrder
    createdByTeacher?: SortOrder
    linkedUserId?: SortOrder
    generatedCredential?: SortOrder
  }

  export type ClassroomStudentProfileRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gradeLevel?: SortOrder
    createdByTeacher?: SortOrder
    linkedUserId?: SortOrder
    generatedCredential?: SortOrder
  }

  export type ClassroomStudentProfileRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gradeLevel?: SortOrder
    createdByTeacher?: SortOrder
    linkedUserId?: SortOrder
    generatedCredential?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ClassroomRecordScalarRelationFilter = {
    is?: ClassroomRecordWhereInput
    isNot?: ClassroomRecordWhereInput
  }

  export type ClassroomStudentProfileRecordScalarRelationFilter = {
    is?: ClassroomStudentProfileRecordWhereInput
    isNot?: ClassroomStudentProfileRecordWhereInput
  }

  export type StudentEnrollmentRecordClassroomIdStudentIdCompoundUniqueInput = {
    classroomId: string
    studentId: string
  }

  export type StudentEnrollmentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    classroomId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type StudentEnrollmentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classroomId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type StudentEnrollmentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classroomId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type ClassroomMeetingRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    classroomId?: SortOrder
    provider?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    meetingUrl?: SortOrder
    createdByTeacherId?: SortOrder
  }

  export type ClassroomMeetingRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classroomId?: SortOrder
    provider?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    meetingUrl?: SortOrder
    createdByTeacherId?: SortOrder
  }

  export type ClassroomMeetingRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classroomId?: SortOrder
    provider?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    meetingUrl?: SortOrder
    createdByTeacherId?: SortOrder
  }

  export type LearningPathRecordCreateaudienceRolesInput = {
    set: string[]
  }

  export type LearningPathRecordCreatetopicIdsInput = {
    set: string[]
  }

  export type LearningPathRecordCreateskillIdsInput = {
    set: string[]
  }

  export type LearningPathRecordCreatelessonIdsInput = {
    set: string[]
  }

  export type LearningPathRecordCreateprojectIdsInput = {
    set: string[]
  }

  export type LearningSessionRecordCreateNestedManyWithoutLearningPathInput = {
    create?: XOR<LearningSessionRecordCreateWithoutLearningPathInput, LearningSessionRecordUncheckedCreateWithoutLearningPathInput> | LearningSessionRecordCreateWithoutLearningPathInput[] | LearningSessionRecordUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: LearningSessionRecordCreateOrConnectWithoutLearningPathInput | LearningSessionRecordCreateOrConnectWithoutLearningPathInput[]
    createMany?: LearningSessionRecordCreateManyLearningPathInputEnvelope
    connect?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
  }

  export type ClassroomRecordCreateNestedManyWithoutLearningPathInput = {
    create?: XOR<ClassroomRecordCreateWithoutLearningPathInput, ClassroomRecordUncheckedCreateWithoutLearningPathInput> | ClassroomRecordCreateWithoutLearningPathInput[] | ClassroomRecordUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: ClassroomRecordCreateOrConnectWithoutLearningPathInput | ClassroomRecordCreateOrConnectWithoutLearningPathInput[]
    createMany?: ClassroomRecordCreateManyLearningPathInputEnvelope
    connect?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
  }

  export type LearningSessionRecordUncheckedCreateNestedManyWithoutLearningPathInput = {
    create?: XOR<LearningSessionRecordCreateWithoutLearningPathInput, LearningSessionRecordUncheckedCreateWithoutLearningPathInput> | LearningSessionRecordCreateWithoutLearningPathInput[] | LearningSessionRecordUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: LearningSessionRecordCreateOrConnectWithoutLearningPathInput | LearningSessionRecordCreateOrConnectWithoutLearningPathInput[]
    createMany?: LearningSessionRecordCreateManyLearningPathInputEnvelope
    connect?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
  }

  export type ClassroomRecordUncheckedCreateNestedManyWithoutLearningPathInput = {
    create?: XOR<ClassroomRecordCreateWithoutLearningPathInput, ClassroomRecordUncheckedCreateWithoutLearningPathInput> | ClassroomRecordCreateWithoutLearningPathInput[] | ClassroomRecordUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: ClassroomRecordCreateOrConnectWithoutLearningPathInput | ClassroomRecordCreateOrConnectWithoutLearningPathInput[]
    createMany?: ClassroomRecordCreateManyLearningPathInputEnvelope
    connect?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
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

  export type LearningPathRecordUpdateaudienceRolesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LearningPathRecordUpdatetopicIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LearningPathRecordUpdateskillIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LearningPathRecordUpdatelessonIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LearningPathRecordUpdateprojectIdsInput = {
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

  export type LearningSessionRecordUpdateManyWithoutLearningPathNestedInput = {
    create?: XOR<LearningSessionRecordCreateWithoutLearningPathInput, LearningSessionRecordUncheckedCreateWithoutLearningPathInput> | LearningSessionRecordCreateWithoutLearningPathInput[] | LearningSessionRecordUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: LearningSessionRecordCreateOrConnectWithoutLearningPathInput | LearningSessionRecordCreateOrConnectWithoutLearningPathInput[]
    upsert?: LearningSessionRecordUpsertWithWhereUniqueWithoutLearningPathInput | LearningSessionRecordUpsertWithWhereUniqueWithoutLearningPathInput[]
    createMany?: LearningSessionRecordCreateManyLearningPathInputEnvelope
    set?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
    disconnect?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
    delete?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
    connect?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
    update?: LearningSessionRecordUpdateWithWhereUniqueWithoutLearningPathInput | LearningSessionRecordUpdateWithWhereUniqueWithoutLearningPathInput[]
    updateMany?: LearningSessionRecordUpdateManyWithWhereWithoutLearningPathInput | LearningSessionRecordUpdateManyWithWhereWithoutLearningPathInput[]
    deleteMany?: LearningSessionRecordScalarWhereInput | LearningSessionRecordScalarWhereInput[]
  }

  export type ClassroomRecordUpdateManyWithoutLearningPathNestedInput = {
    create?: XOR<ClassroomRecordCreateWithoutLearningPathInput, ClassroomRecordUncheckedCreateWithoutLearningPathInput> | ClassroomRecordCreateWithoutLearningPathInput[] | ClassroomRecordUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: ClassroomRecordCreateOrConnectWithoutLearningPathInput | ClassroomRecordCreateOrConnectWithoutLearningPathInput[]
    upsert?: ClassroomRecordUpsertWithWhereUniqueWithoutLearningPathInput | ClassroomRecordUpsertWithWhereUniqueWithoutLearningPathInput[]
    createMany?: ClassroomRecordCreateManyLearningPathInputEnvelope
    set?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
    disconnect?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
    delete?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
    connect?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
    update?: ClassroomRecordUpdateWithWhereUniqueWithoutLearningPathInput | ClassroomRecordUpdateWithWhereUniqueWithoutLearningPathInput[]
    updateMany?: ClassroomRecordUpdateManyWithWhereWithoutLearningPathInput | ClassroomRecordUpdateManyWithWhereWithoutLearningPathInput[]
    deleteMany?: ClassroomRecordScalarWhereInput | ClassroomRecordScalarWhereInput[]
  }

  export type LearningSessionRecordUncheckedUpdateManyWithoutLearningPathNestedInput = {
    create?: XOR<LearningSessionRecordCreateWithoutLearningPathInput, LearningSessionRecordUncheckedCreateWithoutLearningPathInput> | LearningSessionRecordCreateWithoutLearningPathInput[] | LearningSessionRecordUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: LearningSessionRecordCreateOrConnectWithoutLearningPathInput | LearningSessionRecordCreateOrConnectWithoutLearningPathInput[]
    upsert?: LearningSessionRecordUpsertWithWhereUniqueWithoutLearningPathInput | LearningSessionRecordUpsertWithWhereUniqueWithoutLearningPathInput[]
    createMany?: LearningSessionRecordCreateManyLearningPathInputEnvelope
    set?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
    disconnect?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
    delete?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
    connect?: LearningSessionRecordWhereUniqueInput | LearningSessionRecordWhereUniqueInput[]
    update?: LearningSessionRecordUpdateWithWhereUniqueWithoutLearningPathInput | LearningSessionRecordUpdateWithWhereUniqueWithoutLearningPathInput[]
    updateMany?: LearningSessionRecordUpdateManyWithWhereWithoutLearningPathInput | LearningSessionRecordUpdateManyWithWhereWithoutLearningPathInput[]
    deleteMany?: LearningSessionRecordScalarWhereInput | LearningSessionRecordScalarWhereInput[]
  }

  export type ClassroomRecordUncheckedUpdateManyWithoutLearningPathNestedInput = {
    create?: XOR<ClassroomRecordCreateWithoutLearningPathInput, ClassroomRecordUncheckedCreateWithoutLearningPathInput> | ClassroomRecordCreateWithoutLearningPathInput[] | ClassroomRecordUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: ClassroomRecordCreateOrConnectWithoutLearningPathInput | ClassroomRecordCreateOrConnectWithoutLearningPathInput[]
    upsert?: ClassroomRecordUpsertWithWhereUniqueWithoutLearningPathInput | ClassroomRecordUpsertWithWhereUniqueWithoutLearningPathInput[]
    createMany?: ClassroomRecordCreateManyLearningPathInputEnvelope
    set?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
    disconnect?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
    delete?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
    connect?: ClassroomRecordWhereUniqueInput | ClassroomRecordWhereUniqueInput[]
    update?: ClassroomRecordUpdateWithWhereUniqueWithoutLearningPathInput | ClassroomRecordUpdateWithWhereUniqueWithoutLearningPathInput[]
    updateMany?: ClassroomRecordUpdateManyWithWhereWithoutLearningPathInput | ClassroomRecordUpdateManyWithWhereWithoutLearningPathInput[]
    deleteMany?: ClassroomRecordScalarWhereInput | ClassroomRecordScalarWhereInput[]
  }

  export type LearningSessionRecordCreatemasteryStateIdsInput = {
    set: string[]
  }

  export type LearningSessionRecordCreaterecommendationIdsInput = {
    set: string[]
  }

  export type LearningPathRecordCreateNestedOneWithoutSessionsInput = {
    create?: XOR<LearningPathRecordCreateWithoutSessionsInput, LearningPathRecordUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LearningPathRecordCreateOrConnectWithoutSessionsInput
    connect?: LearningPathRecordWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LearningSessionRecordUpdatemasteryStateIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LearningSessionRecordUpdaterecommendationIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LearningPathRecordUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<LearningPathRecordCreateWithoutSessionsInput, LearningPathRecordUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LearningPathRecordCreateOrConnectWithoutSessionsInput
    upsert?: LearningPathRecordUpsertWithoutSessionsInput
    disconnect?: LearningPathRecordWhereInput | boolean
    delete?: LearningPathRecordWhereInput | boolean
    connect?: LearningPathRecordWhereUniqueInput
    update?: XOR<XOR<LearningPathRecordUpdateToOneWithWhereWithoutSessionsInput, LearningPathRecordUpdateWithoutSessionsInput>, LearningPathRecordUncheckedUpdateWithoutSessionsInput>
  }

  export type ClassroomRecordCreateassignedModuleIdsInput = {
    set: string[]
  }

  export type ClassroomRecordCreateassignedLearningPathIdsInput = {
    set: string[]
  }

  export type LearningPathRecordCreateNestedOneWithoutClassroomsInput = {
    create?: XOR<LearningPathRecordCreateWithoutClassroomsInput, LearningPathRecordUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: LearningPathRecordCreateOrConnectWithoutClassroomsInput
    connect?: LearningPathRecordWhereUniqueInput
  }

  export type StudentEnrollmentRecordCreateNestedManyWithoutClassroomInput = {
    create?: XOR<StudentEnrollmentRecordCreateWithoutClassroomInput, StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput> | StudentEnrollmentRecordCreateWithoutClassroomInput[] | StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentEnrollmentRecordCreateOrConnectWithoutClassroomInput | StudentEnrollmentRecordCreateOrConnectWithoutClassroomInput[]
    createMany?: StudentEnrollmentRecordCreateManyClassroomInputEnvelope
    connect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
  }

  export type ClassroomMeetingRecordCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassroomMeetingRecordCreateWithoutClassroomInput, ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput> | ClassroomMeetingRecordCreateWithoutClassroomInput[] | ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomMeetingRecordCreateOrConnectWithoutClassroomInput | ClassroomMeetingRecordCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassroomMeetingRecordCreateManyClassroomInputEnvelope
    connect?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
  }

  export type StudentEnrollmentRecordUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<StudentEnrollmentRecordCreateWithoutClassroomInput, StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput> | StudentEnrollmentRecordCreateWithoutClassroomInput[] | StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentEnrollmentRecordCreateOrConnectWithoutClassroomInput | StudentEnrollmentRecordCreateOrConnectWithoutClassroomInput[]
    createMany?: StudentEnrollmentRecordCreateManyClassroomInputEnvelope
    connect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
  }

  export type ClassroomMeetingRecordUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<ClassroomMeetingRecordCreateWithoutClassroomInput, ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput> | ClassroomMeetingRecordCreateWithoutClassroomInput[] | ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomMeetingRecordCreateOrConnectWithoutClassroomInput | ClassroomMeetingRecordCreateOrConnectWithoutClassroomInput[]
    createMany?: ClassroomMeetingRecordCreateManyClassroomInputEnvelope
    connect?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
  }

  export type ClassroomRecordUpdateassignedModuleIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ClassroomRecordUpdateassignedLearningPathIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LearningPathRecordUpdateOneWithoutClassroomsNestedInput = {
    create?: XOR<LearningPathRecordCreateWithoutClassroomsInput, LearningPathRecordUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: LearningPathRecordCreateOrConnectWithoutClassroomsInput
    upsert?: LearningPathRecordUpsertWithoutClassroomsInput
    disconnect?: LearningPathRecordWhereInput | boolean
    delete?: LearningPathRecordWhereInput | boolean
    connect?: LearningPathRecordWhereUniqueInput
    update?: XOR<XOR<LearningPathRecordUpdateToOneWithWhereWithoutClassroomsInput, LearningPathRecordUpdateWithoutClassroomsInput>, LearningPathRecordUncheckedUpdateWithoutClassroomsInput>
  }

  export type StudentEnrollmentRecordUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<StudentEnrollmentRecordCreateWithoutClassroomInput, StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput> | StudentEnrollmentRecordCreateWithoutClassroomInput[] | StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentEnrollmentRecordCreateOrConnectWithoutClassroomInput | StudentEnrollmentRecordCreateOrConnectWithoutClassroomInput[]
    upsert?: StudentEnrollmentRecordUpsertWithWhereUniqueWithoutClassroomInput | StudentEnrollmentRecordUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: StudentEnrollmentRecordCreateManyClassroomInputEnvelope
    set?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    disconnect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    delete?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    connect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    update?: StudentEnrollmentRecordUpdateWithWhereUniqueWithoutClassroomInput | StudentEnrollmentRecordUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: StudentEnrollmentRecordUpdateManyWithWhereWithoutClassroomInput | StudentEnrollmentRecordUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: StudentEnrollmentRecordScalarWhereInput | StudentEnrollmentRecordScalarWhereInput[]
  }

  export type ClassroomMeetingRecordUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassroomMeetingRecordCreateWithoutClassroomInput, ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput> | ClassroomMeetingRecordCreateWithoutClassroomInput[] | ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomMeetingRecordCreateOrConnectWithoutClassroomInput | ClassroomMeetingRecordCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassroomMeetingRecordUpsertWithWhereUniqueWithoutClassroomInput | ClassroomMeetingRecordUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassroomMeetingRecordCreateManyClassroomInputEnvelope
    set?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
    disconnect?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
    delete?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
    connect?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
    update?: ClassroomMeetingRecordUpdateWithWhereUniqueWithoutClassroomInput | ClassroomMeetingRecordUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassroomMeetingRecordUpdateManyWithWhereWithoutClassroomInput | ClassroomMeetingRecordUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassroomMeetingRecordScalarWhereInput | ClassroomMeetingRecordScalarWhereInput[]
  }

  export type StudentEnrollmentRecordUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<StudentEnrollmentRecordCreateWithoutClassroomInput, StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput> | StudentEnrollmentRecordCreateWithoutClassroomInput[] | StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentEnrollmentRecordCreateOrConnectWithoutClassroomInput | StudentEnrollmentRecordCreateOrConnectWithoutClassroomInput[]
    upsert?: StudentEnrollmentRecordUpsertWithWhereUniqueWithoutClassroomInput | StudentEnrollmentRecordUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: StudentEnrollmentRecordCreateManyClassroomInputEnvelope
    set?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    disconnect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    delete?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    connect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    update?: StudentEnrollmentRecordUpdateWithWhereUniqueWithoutClassroomInput | StudentEnrollmentRecordUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: StudentEnrollmentRecordUpdateManyWithWhereWithoutClassroomInput | StudentEnrollmentRecordUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: StudentEnrollmentRecordScalarWhereInput | StudentEnrollmentRecordScalarWhereInput[]
  }

  export type ClassroomMeetingRecordUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<ClassroomMeetingRecordCreateWithoutClassroomInput, ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput> | ClassroomMeetingRecordCreateWithoutClassroomInput[] | ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: ClassroomMeetingRecordCreateOrConnectWithoutClassroomInput | ClassroomMeetingRecordCreateOrConnectWithoutClassroomInput[]
    upsert?: ClassroomMeetingRecordUpsertWithWhereUniqueWithoutClassroomInput | ClassroomMeetingRecordUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: ClassroomMeetingRecordCreateManyClassroomInputEnvelope
    set?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
    disconnect?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
    delete?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
    connect?: ClassroomMeetingRecordWhereUniqueInput | ClassroomMeetingRecordWhereUniqueInput[]
    update?: ClassroomMeetingRecordUpdateWithWhereUniqueWithoutClassroomInput | ClassroomMeetingRecordUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: ClassroomMeetingRecordUpdateManyWithWhereWithoutClassroomInput | ClassroomMeetingRecordUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: ClassroomMeetingRecordScalarWhereInput | ClassroomMeetingRecordScalarWhereInput[]
  }

  export type StudentEnrollmentRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentEnrollmentRecordCreateWithoutStudentInput, StudentEnrollmentRecordUncheckedCreateWithoutStudentInput> | StudentEnrollmentRecordCreateWithoutStudentInput[] | StudentEnrollmentRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentEnrollmentRecordCreateOrConnectWithoutStudentInput | StudentEnrollmentRecordCreateOrConnectWithoutStudentInput[]
    createMany?: StudentEnrollmentRecordCreateManyStudentInputEnvelope
    connect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
  }

  export type StudentEnrollmentRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentEnrollmentRecordCreateWithoutStudentInput, StudentEnrollmentRecordUncheckedCreateWithoutStudentInput> | StudentEnrollmentRecordCreateWithoutStudentInput[] | StudentEnrollmentRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentEnrollmentRecordCreateOrConnectWithoutStudentInput | StudentEnrollmentRecordCreateOrConnectWithoutStudentInput[]
    createMany?: StudentEnrollmentRecordCreateManyStudentInputEnvelope
    connect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentEnrollmentRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentEnrollmentRecordCreateWithoutStudentInput, StudentEnrollmentRecordUncheckedCreateWithoutStudentInput> | StudentEnrollmentRecordCreateWithoutStudentInput[] | StudentEnrollmentRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentEnrollmentRecordCreateOrConnectWithoutStudentInput | StudentEnrollmentRecordCreateOrConnectWithoutStudentInput[]
    upsert?: StudentEnrollmentRecordUpsertWithWhereUniqueWithoutStudentInput | StudentEnrollmentRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentEnrollmentRecordCreateManyStudentInputEnvelope
    set?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    disconnect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    delete?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    connect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    update?: StudentEnrollmentRecordUpdateWithWhereUniqueWithoutStudentInput | StudentEnrollmentRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentEnrollmentRecordUpdateManyWithWhereWithoutStudentInput | StudentEnrollmentRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentEnrollmentRecordScalarWhereInput | StudentEnrollmentRecordScalarWhereInput[]
  }

  export type StudentEnrollmentRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentEnrollmentRecordCreateWithoutStudentInput, StudentEnrollmentRecordUncheckedCreateWithoutStudentInput> | StudentEnrollmentRecordCreateWithoutStudentInput[] | StudentEnrollmentRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentEnrollmentRecordCreateOrConnectWithoutStudentInput | StudentEnrollmentRecordCreateOrConnectWithoutStudentInput[]
    upsert?: StudentEnrollmentRecordUpsertWithWhereUniqueWithoutStudentInput | StudentEnrollmentRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentEnrollmentRecordCreateManyStudentInputEnvelope
    set?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    disconnect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    delete?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    connect?: StudentEnrollmentRecordWhereUniqueInput | StudentEnrollmentRecordWhereUniqueInput[]
    update?: StudentEnrollmentRecordUpdateWithWhereUniqueWithoutStudentInput | StudentEnrollmentRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentEnrollmentRecordUpdateManyWithWhereWithoutStudentInput | StudentEnrollmentRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentEnrollmentRecordScalarWhereInput | StudentEnrollmentRecordScalarWhereInput[]
  }

  export type ClassroomRecordCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<ClassroomRecordCreateWithoutEnrollmentsInput, ClassroomRecordUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ClassroomRecordCreateOrConnectWithoutEnrollmentsInput
    connect?: ClassroomRecordWhereUniqueInput
  }

  export type ClassroomStudentProfileRecordCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<ClassroomStudentProfileRecordCreateWithoutEnrollmentsInput, ClassroomStudentProfileRecordUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ClassroomStudentProfileRecordCreateOrConnectWithoutEnrollmentsInput
    connect?: ClassroomStudentProfileRecordWhereUniqueInput
  }

  export type ClassroomRecordUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<ClassroomRecordCreateWithoutEnrollmentsInput, ClassroomRecordUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ClassroomRecordCreateOrConnectWithoutEnrollmentsInput
    upsert?: ClassroomRecordUpsertWithoutEnrollmentsInput
    connect?: ClassroomRecordWhereUniqueInput
    update?: XOR<XOR<ClassroomRecordUpdateToOneWithWhereWithoutEnrollmentsInput, ClassroomRecordUpdateWithoutEnrollmentsInput>, ClassroomRecordUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ClassroomStudentProfileRecordUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<ClassroomStudentProfileRecordCreateWithoutEnrollmentsInput, ClassroomStudentProfileRecordUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ClassroomStudentProfileRecordCreateOrConnectWithoutEnrollmentsInput
    upsert?: ClassroomStudentProfileRecordUpsertWithoutEnrollmentsInput
    connect?: ClassroomStudentProfileRecordWhereUniqueInput
    update?: XOR<XOR<ClassroomStudentProfileRecordUpdateToOneWithWhereWithoutEnrollmentsInput, ClassroomStudentProfileRecordUpdateWithoutEnrollmentsInput>, ClassroomStudentProfileRecordUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ClassroomRecordCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<ClassroomRecordCreateWithoutMeetingsInput, ClassroomRecordUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ClassroomRecordCreateOrConnectWithoutMeetingsInput
    connect?: ClassroomRecordWhereUniqueInput
  }

  export type ClassroomRecordUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<ClassroomRecordCreateWithoutMeetingsInput, ClassroomRecordUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ClassroomRecordCreateOrConnectWithoutMeetingsInput
    upsert?: ClassroomRecordUpsertWithoutMeetingsInput
    connect?: ClassroomRecordWhereUniqueInput
    update?: XOR<XOR<ClassroomRecordUpdateToOneWithWhereWithoutMeetingsInput, ClassroomRecordUpdateWithoutMeetingsInput>, ClassroomRecordUncheckedUpdateWithoutMeetingsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LearningSessionRecordCreateWithoutLearningPathInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    lessonId?: string | null
    topicId?: string | null
    tutorSessionId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    progressPercent: number
    difficultyLevel?: string | null
    masteryStateIds?: LearningSessionRecordCreatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordCreaterecommendationIdsInput | string[]
  }

  export type LearningSessionRecordUncheckedCreateWithoutLearningPathInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    lessonId?: string | null
    topicId?: string | null
    tutorSessionId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    progressPercent: number
    difficultyLevel?: string | null
    masteryStateIds?: LearningSessionRecordCreatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordCreaterecommendationIdsInput | string[]
  }

  export type LearningSessionRecordCreateOrConnectWithoutLearningPathInput = {
    where: LearningSessionRecordWhereUniqueInput
    create: XOR<LearningSessionRecordCreateWithoutLearningPathInput, LearningSessionRecordUncheckedCreateWithoutLearningPathInput>
  }

  export type LearningSessionRecordCreateManyLearningPathInputEnvelope = {
    data: LearningSessionRecordCreateManyLearningPathInput | LearningSessionRecordCreateManyLearningPathInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomRecordCreateWithoutLearningPathInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
    enrollments?: StudentEnrollmentRecordCreateNestedManyWithoutClassroomInput
    meetings?: ClassroomMeetingRecordCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomRecordUncheckedCreateWithoutLearningPathInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
    enrollments?: StudentEnrollmentRecordUncheckedCreateNestedManyWithoutClassroomInput
    meetings?: ClassroomMeetingRecordUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomRecordCreateOrConnectWithoutLearningPathInput = {
    where: ClassroomRecordWhereUniqueInput
    create: XOR<ClassroomRecordCreateWithoutLearningPathInput, ClassroomRecordUncheckedCreateWithoutLearningPathInput>
  }

  export type ClassroomRecordCreateManyLearningPathInputEnvelope = {
    data: ClassroomRecordCreateManyLearningPathInput | ClassroomRecordCreateManyLearningPathInput[]
    skipDuplicates?: boolean
  }

  export type LearningSessionRecordUpsertWithWhereUniqueWithoutLearningPathInput = {
    where: LearningSessionRecordWhereUniqueInput
    update: XOR<LearningSessionRecordUpdateWithoutLearningPathInput, LearningSessionRecordUncheckedUpdateWithoutLearningPathInput>
    create: XOR<LearningSessionRecordCreateWithoutLearningPathInput, LearningSessionRecordUncheckedCreateWithoutLearningPathInput>
  }

  export type LearningSessionRecordUpdateWithWhereUniqueWithoutLearningPathInput = {
    where: LearningSessionRecordWhereUniqueInput
    data: XOR<LearningSessionRecordUpdateWithoutLearningPathInput, LearningSessionRecordUncheckedUpdateWithoutLearningPathInput>
  }

  export type LearningSessionRecordUpdateManyWithWhereWithoutLearningPathInput = {
    where: LearningSessionRecordScalarWhereInput
    data: XOR<LearningSessionRecordUpdateManyMutationInput, LearningSessionRecordUncheckedUpdateManyWithoutLearningPathInput>
  }

  export type LearningSessionRecordScalarWhereInput = {
    AND?: LearningSessionRecordScalarWhereInput | LearningSessionRecordScalarWhereInput[]
    OR?: LearningSessionRecordScalarWhereInput[]
    NOT?: LearningSessionRecordScalarWhereInput | LearningSessionRecordScalarWhereInput[]
    id?: StringFilter<"LearningSessionRecord"> | string
    createdAt?: DateTimeFilter<"LearningSessionRecord"> | Date | string
    updatedAt?: DateTimeFilter<"LearningSessionRecord"> | Date | string
    metadata?: JsonNullableFilter<"LearningSessionRecord">
    learnerUserId?: StringFilter<"LearningSessionRecord"> | string
    status?: StringFilter<"LearningSessionRecord"> | string
    learningPathId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    lessonId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    topicId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    tutorSessionId?: StringNullableFilter<"LearningSessionRecord"> | string | null
    startedAt?: DateTimeFilter<"LearningSessionRecord"> | Date | string
    endedAt?: DateTimeNullableFilter<"LearningSessionRecord"> | Date | string | null
    progressPercent?: FloatFilter<"LearningSessionRecord"> | number
    difficultyLevel?: StringNullableFilter<"LearningSessionRecord"> | string | null
    masteryStateIds?: StringNullableListFilter<"LearningSessionRecord">
    recommendationIds?: StringNullableListFilter<"LearningSessionRecord">
  }

  export type ClassroomRecordUpsertWithWhereUniqueWithoutLearningPathInput = {
    where: ClassroomRecordWhereUniqueInput
    update: XOR<ClassroomRecordUpdateWithoutLearningPathInput, ClassroomRecordUncheckedUpdateWithoutLearningPathInput>
    create: XOR<ClassroomRecordCreateWithoutLearningPathInput, ClassroomRecordUncheckedCreateWithoutLearningPathInput>
  }

  export type ClassroomRecordUpdateWithWhereUniqueWithoutLearningPathInput = {
    where: ClassroomRecordWhereUniqueInput
    data: XOR<ClassroomRecordUpdateWithoutLearningPathInput, ClassroomRecordUncheckedUpdateWithoutLearningPathInput>
  }

  export type ClassroomRecordUpdateManyWithWhereWithoutLearningPathInput = {
    where: ClassroomRecordScalarWhereInput
    data: XOR<ClassroomRecordUpdateManyMutationInput, ClassroomRecordUncheckedUpdateManyWithoutLearningPathInput>
  }

  export type ClassroomRecordScalarWhereInput = {
    AND?: ClassroomRecordScalarWhereInput | ClassroomRecordScalarWhereInput[]
    OR?: ClassroomRecordScalarWhereInput[]
    NOT?: ClassroomRecordScalarWhereInput | ClassroomRecordScalarWhereInput[]
    id?: StringFilter<"ClassroomRecord"> | string
    createdAt?: DateTimeFilter<"ClassroomRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomRecord"> | Date | string
    metadata?: JsonNullableFilter<"ClassroomRecord">
    name?: StringFilter<"ClassroomRecord"> | string
    gradeLevel?: StringFilter<"ClassroomRecord"> | string
    subject?: StringFilter<"ClassroomRecord"> | string
    teacherId?: StringFilter<"ClassroomRecord"> | string
    classCode?: StringFilter<"ClassroomRecord"> | string
    assignedModuleIds?: StringNullableListFilter<"ClassroomRecord">
    assignedLearningPathIds?: StringNullableListFilter<"ClassroomRecord">
    learningPathId?: StringNullableFilter<"ClassroomRecord"> | string | null
  }

  export type LearningPathRecordCreateWithoutSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    status: string
    audienceRoles?: LearningPathRecordCreateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordCreatetopicIdsInput | string[]
    skillIds?: LearningPathRecordCreateskillIdsInput | string[]
    lessonIds?: LearningPathRecordCreatelessonIdsInput | string[]
    projectIds?: LearningPathRecordCreateprojectIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    sequencingStrategy?: string | null
    classrooms?: ClassroomRecordCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathRecordUncheckedCreateWithoutSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    status: string
    audienceRoles?: LearningPathRecordCreateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordCreatetopicIdsInput | string[]
    skillIds?: LearningPathRecordCreateskillIdsInput | string[]
    lessonIds?: LearningPathRecordCreatelessonIdsInput | string[]
    projectIds?: LearningPathRecordCreateprojectIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    sequencingStrategy?: string | null
    classrooms?: ClassroomRecordUncheckedCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathRecordCreateOrConnectWithoutSessionsInput = {
    where: LearningPathRecordWhereUniqueInput
    create: XOR<LearningPathRecordCreateWithoutSessionsInput, LearningPathRecordUncheckedCreateWithoutSessionsInput>
  }

  export type LearningPathRecordUpsertWithoutSessionsInput = {
    update: XOR<LearningPathRecordUpdateWithoutSessionsInput, LearningPathRecordUncheckedUpdateWithoutSessionsInput>
    create: XOR<LearningPathRecordCreateWithoutSessionsInput, LearningPathRecordUncheckedCreateWithoutSessionsInput>
    where?: LearningPathRecordWhereInput
  }

  export type LearningPathRecordUpdateToOneWithWhereWithoutSessionsInput = {
    where?: LearningPathRecordWhereInput
    data: XOR<LearningPathRecordUpdateWithoutSessionsInput, LearningPathRecordUncheckedUpdateWithoutSessionsInput>
  }

  export type LearningPathRecordUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    audienceRoles?: LearningPathRecordUpdateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordUpdatetopicIdsInput | string[]
    skillIds?: LearningPathRecordUpdateskillIdsInput | string[]
    lessonIds?: LearningPathRecordUpdatelessonIdsInput | string[]
    projectIds?: LearningPathRecordUpdateprojectIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sequencingStrategy?: NullableStringFieldUpdateOperationsInput | string | null
    classrooms?: ClassroomRecordUpdateManyWithoutLearningPathNestedInput
  }

  export type LearningPathRecordUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    audienceRoles?: LearningPathRecordUpdateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordUpdatetopicIdsInput | string[]
    skillIds?: LearningPathRecordUpdateskillIdsInput | string[]
    lessonIds?: LearningPathRecordUpdatelessonIdsInput | string[]
    projectIds?: LearningPathRecordUpdateprojectIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sequencingStrategy?: NullableStringFieldUpdateOperationsInput | string | null
    classrooms?: ClassroomRecordUncheckedUpdateManyWithoutLearningPathNestedInput
  }

  export type LearningPathRecordCreateWithoutClassroomsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    status: string
    audienceRoles?: LearningPathRecordCreateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordCreatetopicIdsInput | string[]
    skillIds?: LearningPathRecordCreateskillIdsInput | string[]
    lessonIds?: LearningPathRecordCreatelessonIdsInput | string[]
    projectIds?: LearningPathRecordCreateprojectIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    sequencingStrategy?: string | null
    sessions?: LearningSessionRecordCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathRecordUncheckedCreateWithoutClassroomsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title: string
    summary?: string | null
    status: string
    audienceRoles?: LearningPathRecordCreateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordCreatetopicIdsInput | string[]
    skillIds?: LearningPathRecordCreateskillIdsInput | string[]
    lessonIds?: LearningPathRecordCreatelessonIdsInput | string[]
    projectIds?: LearningPathRecordCreateprojectIdsInput | string[]
    estimatedDurationMinutes?: number | null
    difficultyLevel?: string | null
    sequencingStrategy?: string | null
    sessions?: LearningSessionRecordUncheckedCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathRecordCreateOrConnectWithoutClassroomsInput = {
    where: LearningPathRecordWhereUniqueInput
    create: XOR<LearningPathRecordCreateWithoutClassroomsInput, LearningPathRecordUncheckedCreateWithoutClassroomsInput>
  }

  export type StudentEnrollmentRecordCreateWithoutClassroomInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status: string
    joinedAt?: Date | string | null
    student: ClassroomStudentProfileRecordCreateNestedOneWithoutEnrollmentsInput
  }

  export type StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId: string
    status: string
    joinedAt?: Date | string | null
  }

  export type StudentEnrollmentRecordCreateOrConnectWithoutClassroomInput = {
    where: StudentEnrollmentRecordWhereUniqueInput
    create: XOR<StudentEnrollmentRecordCreateWithoutClassroomInput, StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput>
  }

  export type StudentEnrollmentRecordCreateManyClassroomInputEnvelope = {
    data: StudentEnrollmentRecordCreateManyClassroomInput | StudentEnrollmentRecordCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomMeetingRecordCreateWithoutClassroomInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    title: string
    description?: string | null
    scheduledAt: Date | string
    meetingUrl: string
    createdByTeacherId: string
  }

  export type ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    title: string
    description?: string | null
    scheduledAt: Date | string
    meetingUrl: string
    createdByTeacherId: string
  }

  export type ClassroomMeetingRecordCreateOrConnectWithoutClassroomInput = {
    where: ClassroomMeetingRecordWhereUniqueInput
    create: XOR<ClassroomMeetingRecordCreateWithoutClassroomInput, ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput>
  }

  export type ClassroomMeetingRecordCreateManyClassroomInputEnvelope = {
    data: ClassroomMeetingRecordCreateManyClassroomInput | ClassroomMeetingRecordCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type LearningPathRecordUpsertWithoutClassroomsInput = {
    update: XOR<LearningPathRecordUpdateWithoutClassroomsInput, LearningPathRecordUncheckedUpdateWithoutClassroomsInput>
    create: XOR<LearningPathRecordCreateWithoutClassroomsInput, LearningPathRecordUncheckedCreateWithoutClassroomsInput>
    where?: LearningPathRecordWhereInput
  }

  export type LearningPathRecordUpdateToOneWithWhereWithoutClassroomsInput = {
    where?: LearningPathRecordWhereInput
    data: XOR<LearningPathRecordUpdateWithoutClassroomsInput, LearningPathRecordUncheckedUpdateWithoutClassroomsInput>
  }

  export type LearningPathRecordUpdateWithoutClassroomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    audienceRoles?: LearningPathRecordUpdateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordUpdatetopicIdsInput | string[]
    skillIds?: LearningPathRecordUpdateskillIdsInput | string[]
    lessonIds?: LearningPathRecordUpdatelessonIdsInput | string[]
    projectIds?: LearningPathRecordUpdateprojectIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sequencingStrategy?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: LearningSessionRecordUpdateManyWithoutLearningPathNestedInput
  }

  export type LearningPathRecordUncheckedUpdateWithoutClassroomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    audienceRoles?: LearningPathRecordUpdateaudienceRolesInput | string[]
    topicIds?: LearningPathRecordUpdatetopicIdsInput | string[]
    skillIds?: LearningPathRecordUpdateskillIdsInput | string[]
    lessonIds?: LearningPathRecordUpdatelessonIdsInput | string[]
    projectIds?: LearningPathRecordUpdateprojectIdsInput | string[]
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sequencingStrategy?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: LearningSessionRecordUncheckedUpdateManyWithoutLearningPathNestedInput
  }

  export type StudentEnrollmentRecordUpsertWithWhereUniqueWithoutClassroomInput = {
    where: StudentEnrollmentRecordWhereUniqueInput
    update: XOR<StudentEnrollmentRecordUpdateWithoutClassroomInput, StudentEnrollmentRecordUncheckedUpdateWithoutClassroomInput>
    create: XOR<StudentEnrollmentRecordCreateWithoutClassroomInput, StudentEnrollmentRecordUncheckedCreateWithoutClassroomInput>
  }

  export type StudentEnrollmentRecordUpdateWithWhereUniqueWithoutClassroomInput = {
    where: StudentEnrollmentRecordWhereUniqueInput
    data: XOR<StudentEnrollmentRecordUpdateWithoutClassroomInput, StudentEnrollmentRecordUncheckedUpdateWithoutClassroomInput>
  }

  export type StudentEnrollmentRecordUpdateManyWithWhereWithoutClassroomInput = {
    where: StudentEnrollmentRecordScalarWhereInput
    data: XOR<StudentEnrollmentRecordUpdateManyMutationInput, StudentEnrollmentRecordUncheckedUpdateManyWithoutClassroomInput>
  }

  export type StudentEnrollmentRecordScalarWhereInput = {
    AND?: StudentEnrollmentRecordScalarWhereInput | StudentEnrollmentRecordScalarWhereInput[]
    OR?: StudentEnrollmentRecordScalarWhereInput[]
    NOT?: StudentEnrollmentRecordScalarWhereInput | StudentEnrollmentRecordScalarWhereInput[]
    id?: StringFilter<"StudentEnrollmentRecord"> | string
    createdAt?: DateTimeFilter<"StudentEnrollmentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"StudentEnrollmentRecord"> | Date | string
    metadata?: JsonNullableFilter<"StudentEnrollmentRecord">
    classroomId?: StringFilter<"StudentEnrollmentRecord"> | string
    studentId?: StringFilter<"StudentEnrollmentRecord"> | string
    status?: StringFilter<"StudentEnrollmentRecord"> | string
    joinedAt?: DateTimeNullableFilter<"StudentEnrollmentRecord"> | Date | string | null
  }

  export type ClassroomMeetingRecordUpsertWithWhereUniqueWithoutClassroomInput = {
    where: ClassroomMeetingRecordWhereUniqueInput
    update: XOR<ClassroomMeetingRecordUpdateWithoutClassroomInput, ClassroomMeetingRecordUncheckedUpdateWithoutClassroomInput>
    create: XOR<ClassroomMeetingRecordCreateWithoutClassroomInput, ClassroomMeetingRecordUncheckedCreateWithoutClassroomInput>
  }

  export type ClassroomMeetingRecordUpdateWithWhereUniqueWithoutClassroomInput = {
    where: ClassroomMeetingRecordWhereUniqueInput
    data: XOR<ClassroomMeetingRecordUpdateWithoutClassroomInput, ClassroomMeetingRecordUncheckedUpdateWithoutClassroomInput>
  }

  export type ClassroomMeetingRecordUpdateManyWithWhereWithoutClassroomInput = {
    where: ClassroomMeetingRecordScalarWhereInput
    data: XOR<ClassroomMeetingRecordUpdateManyMutationInput, ClassroomMeetingRecordUncheckedUpdateManyWithoutClassroomInput>
  }

  export type ClassroomMeetingRecordScalarWhereInput = {
    AND?: ClassroomMeetingRecordScalarWhereInput | ClassroomMeetingRecordScalarWhereInput[]
    OR?: ClassroomMeetingRecordScalarWhereInput[]
    NOT?: ClassroomMeetingRecordScalarWhereInput | ClassroomMeetingRecordScalarWhereInput[]
    id?: StringFilter<"ClassroomMeetingRecord"> | string
    createdAt?: DateTimeFilter<"ClassroomMeetingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ClassroomMeetingRecord"> | Date | string
    metadata?: JsonNullableFilter<"ClassroomMeetingRecord">
    classroomId?: StringFilter<"ClassroomMeetingRecord"> | string
    provider?: StringFilter<"ClassroomMeetingRecord"> | string
    title?: StringFilter<"ClassroomMeetingRecord"> | string
    description?: StringNullableFilter<"ClassroomMeetingRecord"> | string | null
    scheduledAt?: DateTimeFilter<"ClassroomMeetingRecord"> | Date | string
    meetingUrl?: StringFilter<"ClassroomMeetingRecord"> | string
    createdByTeacherId?: StringFilter<"ClassroomMeetingRecord"> | string
  }

  export type StudentEnrollmentRecordCreateWithoutStudentInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status: string
    joinedAt?: Date | string | null
    classroom: ClassroomRecordCreateNestedOneWithoutEnrollmentsInput
  }

  export type StudentEnrollmentRecordUncheckedCreateWithoutStudentInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId: string
    status: string
    joinedAt?: Date | string | null
  }

  export type StudentEnrollmentRecordCreateOrConnectWithoutStudentInput = {
    where: StudentEnrollmentRecordWhereUniqueInput
    create: XOR<StudentEnrollmentRecordCreateWithoutStudentInput, StudentEnrollmentRecordUncheckedCreateWithoutStudentInput>
  }

  export type StudentEnrollmentRecordCreateManyStudentInputEnvelope = {
    data: StudentEnrollmentRecordCreateManyStudentInput | StudentEnrollmentRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentEnrollmentRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentEnrollmentRecordWhereUniqueInput
    update: XOR<StudentEnrollmentRecordUpdateWithoutStudentInput, StudentEnrollmentRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentEnrollmentRecordCreateWithoutStudentInput, StudentEnrollmentRecordUncheckedCreateWithoutStudentInput>
  }

  export type StudentEnrollmentRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentEnrollmentRecordWhereUniqueInput
    data: XOR<StudentEnrollmentRecordUpdateWithoutStudentInput, StudentEnrollmentRecordUncheckedUpdateWithoutStudentInput>
  }

  export type StudentEnrollmentRecordUpdateManyWithWhereWithoutStudentInput = {
    where: StudentEnrollmentRecordScalarWhereInput
    data: XOR<StudentEnrollmentRecordUpdateManyMutationInput, StudentEnrollmentRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type ClassroomRecordCreateWithoutEnrollmentsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
    learningPath?: LearningPathRecordCreateNestedOneWithoutClassroomsInput
    meetings?: ClassroomMeetingRecordCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomRecordUncheckedCreateWithoutEnrollmentsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
    learningPathId?: string | null
    meetings?: ClassroomMeetingRecordUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomRecordCreateOrConnectWithoutEnrollmentsInput = {
    where: ClassroomRecordWhereUniqueInput
    create: XOR<ClassroomRecordCreateWithoutEnrollmentsInput, ClassroomRecordUncheckedCreateWithoutEnrollmentsInput>
  }

  export type ClassroomStudentProfileRecordCreateWithoutEnrollmentsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    email?: string | null
    gradeLevel: string
    createdByTeacher: boolean
    linkedUserId?: string | null
    generatedCredential?: string | null
  }

  export type ClassroomStudentProfileRecordUncheckedCreateWithoutEnrollmentsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    email?: string | null
    gradeLevel: string
    createdByTeacher: boolean
    linkedUserId?: string | null
    generatedCredential?: string | null
  }

  export type ClassroomStudentProfileRecordCreateOrConnectWithoutEnrollmentsInput = {
    where: ClassroomStudentProfileRecordWhereUniqueInput
    create: XOR<ClassroomStudentProfileRecordCreateWithoutEnrollmentsInput, ClassroomStudentProfileRecordUncheckedCreateWithoutEnrollmentsInput>
  }

  export type ClassroomRecordUpsertWithoutEnrollmentsInput = {
    update: XOR<ClassroomRecordUpdateWithoutEnrollmentsInput, ClassroomRecordUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<ClassroomRecordCreateWithoutEnrollmentsInput, ClassroomRecordUncheckedCreateWithoutEnrollmentsInput>
    where?: ClassroomRecordWhereInput
  }

  export type ClassroomRecordUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: ClassroomRecordWhereInput
    data: XOR<ClassroomRecordUpdateWithoutEnrollmentsInput, ClassroomRecordUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ClassroomRecordUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
    learningPath?: LearningPathRecordUpdateOneWithoutClassroomsNestedInput
    meetings?: ClassroomMeetingRecordUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomRecordUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    meetings?: ClassroomMeetingRecordUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomStudentProfileRecordUpsertWithoutEnrollmentsInput = {
    update: XOR<ClassroomStudentProfileRecordUpdateWithoutEnrollmentsInput, ClassroomStudentProfileRecordUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<ClassroomStudentProfileRecordCreateWithoutEnrollmentsInput, ClassroomStudentProfileRecordUncheckedCreateWithoutEnrollmentsInput>
    where?: ClassroomStudentProfileRecordWhereInput
  }

  export type ClassroomStudentProfileRecordUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: ClassroomStudentProfileRecordWhereInput
    data: XOR<ClassroomStudentProfileRecordUpdateWithoutEnrollmentsInput, ClassroomStudentProfileRecordUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ClassroomStudentProfileRecordUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdByTeacher?: BoolFieldUpdateOperationsInput | boolean
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCredential?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassroomStudentProfileRecordUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdByTeacher?: BoolFieldUpdateOperationsInput | boolean
    linkedUserId?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCredential?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassroomRecordCreateWithoutMeetingsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
    learningPath?: LearningPathRecordCreateNestedOneWithoutClassroomsInput
    enrollments?: StudentEnrollmentRecordCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomRecordUncheckedCreateWithoutMeetingsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
    learningPathId?: string | null
    enrollments?: StudentEnrollmentRecordUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomRecordCreateOrConnectWithoutMeetingsInput = {
    where: ClassroomRecordWhereUniqueInput
    create: XOR<ClassroomRecordCreateWithoutMeetingsInput, ClassroomRecordUncheckedCreateWithoutMeetingsInput>
  }

  export type ClassroomRecordUpsertWithoutMeetingsInput = {
    update: XOR<ClassroomRecordUpdateWithoutMeetingsInput, ClassroomRecordUncheckedUpdateWithoutMeetingsInput>
    create: XOR<ClassroomRecordCreateWithoutMeetingsInput, ClassroomRecordUncheckedCreateWithoutMeetingsInput>
    where?: ClassroomRecordWhereInput
  }

  export type ClassroomRecordUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: ClassroomRecordWhereInput
    data: XOR<ClassroomRecordUpdateWithoutMeetingsInput, ClassroomRecordUncheckedUpdateWithoutMeetingsInput>
  }

  export type ClassroomRecordUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
    learningPath?: LearningPathRecordUpdateOneWithoutClassroomsNestedInput
    enrollments?: StudentEnrollmentRecordUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomRecordUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
    learningPathId?: NullableStringFieldUpdateOperationsInput | string | null
    enrollments?: StudentEnrollmentRecordUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type LearningSessionRecordCreateManyLearningPathInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId: string
    status: string
    lessonId?: string | null
    topicId?: string | null
    tutorSessionId?: string | null
    startedAt: Date | string
    endedAt?: Date | string | null
    progressPercent: number
    difficultyLevel?: string | null
    masteryStateIds?: LearningSessionRecordCreatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordCreaterecommendationIdsInput | string[]
  }

  export type ClassroomRecordCreateManyLearningPathInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name: string
    gradeLevel: string
    subject: string
    teacherId: string
    classCode: string
    assignedModuleIds?: ClassroomRecordCreateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordCreateassignedLearningPathIdsInput | string[]
  }

  export type LearningSessionRecordUpdateWithoutLearningPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: FloatFieldUpdateOperationsInput | number
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    masteryStateIds?: LearningSessionRecordUpdatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordUpdaterecommendationIdsInput | string[]
  }

  export type LearningSessionRecordUncheckedUpdateWithoutLearningPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: FloatFieldUpdateOperationsInput | number
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    masteryStateIds?: LearningSessionRecordUpdatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordUpdaterecommendationIdsInput | string[]
  }

  export type LearningSessionRecordUncheckedUpdateManyWithoutLearningPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    learnerUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lessonId?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: FloatFieldUpdateOperationsInput | number
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    masteryStateIds?: LearningSessionRecordUpdatemasteryStateIdsInput | string[]
    recommendationIds?: LearningSessionRecordUpdaterecommendationIdsInput | string[]
  }

  export type ClassroomRecordUpdateWithoutLearningPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
    enrollments?: StudentEnrollmentRecordUpdateManyWithoutClassroomNestedInput
    meetings?: ClassroomMeetingRecordUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomRecordUncheckedUpdateWithoutLearningPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
    enrollments?: StudentEnrollmentRecordUncheckedUpdateManyWithoutClassroomNestedInput
    meetings?: ClassroomMeetingRecordUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomRecordUncheckedUpdateManyWithoutLearningPathInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    classCode?: StringFieldUpdateOperationsInput | string
    assignedModuleIds?: ClassroomRecordUpdateassignedModuleIdsInput | string[]
    assignedLearningPathIds?: ClassroomRecordUpdateassignedLearningPathIdsInput | string[]
  }

  export type StudentEnrollmentRecordCreateManyClassroomInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId: string
    status: string
    joinedAt?: Date | string | null
  }

  export type ClassroomMeetingRecordCreateManyClassroomInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    title: string
    description?: string | null
    scheduledAt: Date | string
    meetingUrl: string
    createdByTeacherId: string
  }

  export type StudentEnrollmentRecordUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: ClassroomStudentProfileRecordUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type StudentEnrollmentRecordUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentEnrollmentRecordUncheckedUpdateManyWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    studentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassroomMeetingRecordUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    createdByTeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassroomMeetingRecordUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    createdByTeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassroomMeetingRecordUncheckedUpdateManyWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    createdByTeacherId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentEnrollmentRecordCreateManyStudentInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId: string
    status: string
    joinedAt?: Date | string | null
  }

  export type StudentEnrollmentRecordUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classroom?: ClassroomRecordUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type StudentEnrollmentRecordUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentEnrollmentRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    classroomId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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