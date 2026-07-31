
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
 * Model AsignaturaRecord
 * 
 */
export type AsignaturaRecord = $Result.DefaultSelection<Prisma.$AsignaturaRecordPayload>
/**
 * Model TemaRecord
 * 
 */
export type TemaRecord = $Result.DefaultSelection<Prisma.$TemaRecordPayload>
/**
 * Model PreguntaRecord
 * 
 */
export type PreguntaRecord = $Result.DefaultSelection<Prisma.$PreguntaRecordPayload>
/**
 * Model IntentoRecord
 * 
 */
export type IntentoRecord = $Result.DefaultSelection<Prisma.$IntentoRecordPayload>
/**
 * Model ProgresoTemaRecord
 * 
 */
export type ProgresoTemaRecord = $Result.DefaultSelection<Prisma.$ProgresoTemaRecordPayload>

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

  /**
   * `prisma.asignaturaRecord`: Exposes CRUD operations for the **AsignaturaRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsignaturaRecords
    * const asignaturaRecords = await prisma.asignaturaRecord.findMany()
    * ```
    */
  get asignaturaRecord(): Prisma.AsignaturaRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temaRecord`: Exposes CRUD operations for the **TemaRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemaRecords
    * const temaRecords = await prisma.temaRecord.findMany()
    * ```
    */
  get temaRecord(): Prisma.TemaRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preguntaRecord`: Exposes CRUD operations for the **PreguntaRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreguntaRecords
    * const preguntaRecords = await prisma.preguntaRecord.findMany()
    * ```
    */
  get preguntaRecord(): Prisma.PreguntaRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intentoRecord`: Exposes CRUD operations for the **IntentoRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntentoRecords
    * const intentoRecords = await prisma.intentoRecord.findMany()
    * ```
    */
  get intentoRecord(): Prisma.IntentoRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progresoTemaRecord`: Exposes CRUD operations for the **ProgresoTemaRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgresoTemaRecords
    * const progresoTemaRecords = await prisma.progresoTemaRecord.findMany()
    * ```
    */
  get progresoTemaRecord(): Prisma.ProgresoTemaRecordDelegate<ExtArgs, ClientOptions>;
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
    ClassroomMeetingRecord: 'ClassroomMeetingRecord',
    AsignaturaRecord: 'AsignaturaRecord',
    TemaRecord: 'TemaRecord',
    PreguntaRecord: 'PreguntaRecord',
    IntentoRecord: 'IntentoRecord',
    ProgresoTemaRecord: 'ProgresoTemaRecord'
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
      modelProps: "learningPathRecord" | "learningSessionRecord" | "masteryStateRecord" | "classroomRecord" | "classroomStudentProfileRecord" | "studentEnrollmentRecord" | "classroomMeetingRecord" | "asignaturaRecord" | "temaRecord" | "preguntaRecord" | "intentoRecord" | "progresoTemaRecord"
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
      AsignaturaRecord: {
        payload: Prisma.$AsignaturaRecordPayload<ExtArgs>
        fields: Prisma.AsignaturaRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsignaturaRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsignaturaRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload>
          }
          findFirst: {
            args: Prisma.AsignaturaRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsignaturaRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload>
          }
          findMany: {
            args: Prisma.AsignaturaRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload>[]
          }
          create: {
            args: Prisma.AsignaturaRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload>
          }
          createMany: {
            args: Prisma.AsignaturaRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsignaturaRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload>[]
          }
          delete: {
            args: Prisma.AsignaturaRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload>
          }
          update: {
            args: Prisma.AsignaturaRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload>
          }
          deleteMany: {
            args: Prisma.AsignaturaRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsignaturaRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsignaturaRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload>[]
          }
          upsert: {
            args: Prisma.AsignaturaRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsignaturaRecordPayload>
          }
          aggregate: {
            args: Prisma.AsignaturaRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsignaturaRecord>
          }
          groupBy: {
            args: Prisma.AsignaturaRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsignaturaRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsignaturaRecordCountArgs<ExtArgs>
            result: $Utils.Optional<AsignaturaRecordCountAggregateOutputType> | number
          }
        }
      }
      TemaRecord: {
        payload: Prisma.$TemaRecordPayload<ExtArgs>
        fields: Prisma.TemaRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemaRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemaRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload>
          }
          findFirst: {
            args: Prisma.TemaRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemaRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload>
          }
          findMany: {
            args: Prisma.TemaRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload>[]
          }
          create: {
            args: Prisma.TemaRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload>
          }
          createMany: {
            args: Prisma.TemaRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemaRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload>[]
          }
          delete: {
            args: Prisma.TemaRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload>
          }
          update: {
            args: Prisma.TemaRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload>
          }
          deleteMany: {
            args: Prisma.TemaRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemaRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemaRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload>[]
          }
          upsert: {
            args: Prisma.TemaRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemaRecordPayload>
          }
          aggregate: {
            args: Prisma.TemaRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemaRecord>
          }
          groupBy: {
            args: Prisma.TemaRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemaRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemaRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TemaRecordCountAggregateOutputType> | number
          }
        }
      }
      PreguntaRecord: {
        payload: Prisma.$PreguntaRecordPayload<ExtArgs>
        fields: Prisma.PreguntaRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreguntaRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreguntaRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload>
          }
          findFirst: {
            args: Prisma.PreguntaRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreguntaRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload>
          }
          findMany: {
            args: Prisma.PreguntaRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload>[]
          }
          create: {
            args: Prisma.PreguntaRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload>
          }
          createMany: {
            args: Prisma.PreguntaRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreguntaRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload>[]
          }
          delete: {
            args: Prisma.PreguntaRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload>
          }
          update: {
            args: Prisma.PreguntaRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload>
          }
          deleteMany: {
            args: Prisma.PreguntaRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreguntaRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreguntaRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload>[]
          }
          upsert: {
            args: Prisma.PreguntaRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaRecordPayload>
          }
          aggregate: {
            args: Prisma.PreguntaRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreguntaRecord>
          }
          groupBy: {
            args: Prisma.PreguntaRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreguntaRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreguntaRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PreguntaRecordCountAggregateOutputType> | number
          }
        }
      }
      IntentoRecord: {
        payload: Prisma.$IntentoRecordPayload<ExtArgs>
        fields: Prisma.IntentoRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntentoRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntentoRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload>
          }
          findFirst: {
            args: Prisma.IntentoRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntentoRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload>
          }
          findMany: {
            args: Prisma.IntentoRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload>[]
          }
          create: {
            args: Prisma.IntentoRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload>
          }
          createMany: {
            args: Prisma.IntentoRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntentoRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload>[]
          }
          delete: {
            args: Prisma.IntentoRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload>
          }
          update: {
            args: Prisma.IntentoRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload>
          }
          deleteMany: {
            args: Prisma.IntentoRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntentoRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntentoRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload>[]
          }
          upsert: {
            args: Prisma.IntentoRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntentoRecordPayload>
          }
          aggregate: {
            args: Prisma.IntentoRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntentoRecord>
          }
          groupBy: {
            args: Prisma.IntentoRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntentoRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntentoRecordCountArgs<ExtArgs>
            result: $Utils.Optional<IntentoRecordCountAggregateOutputType> | number
          }
        }
      }
      ProgresoTemaRecord: {
        payload: Prisma.$ProgresoTemaRecordPayload<ExtArgs>
        fields: Prisma.ProgresoTemaRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgresoTemaRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgresoTemaRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload>
          }
          findFirst: {
            args: Prisma.ProgresoTemaRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgresoTemaRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload>
          }
          findMany: {
            args: Prisma.ProgresoTemaRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload>[]
          }
          create: {
            args: Prisma.ProgresoTemaRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload>
          }
          createMany: {
            args: Prisma.ProgresoTemaRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgresoTemaRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload>[]
          }
          delete: {
            args: Prisma.ProgresoTemaRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload>
          }
          update: {
            args: Prisma.ProgresoTemaRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload>
          }
          deleteMany: {
            args: Prisma.ProgresoTemaRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgresoTemaRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgresoTemaRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload>[]
          }
          upsert: {
            args: Prisma.ProgresoTemaRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoTemaRecordPayload>
          }
          aggregate: {
            args: Prisma.ProgresoTemaRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgresoTemaRecord>
          }
          groupBy: {
            args: Prisma.ProgresoTemaRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresoTemaRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgresoTemaRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresoTemaRecordCountAggregateOutputType> | number
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
    asignaturaRecord?: AsignaturaRecordOmit
    temaRecord?: TemaRecordOmit
    preguntaRecord?: PreguntaRecordOmit
    intentoRecord?: IntentoRecordOmit
    progresoTemaRecord?: ProgresoTemaRecordOmit
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
   * Count Type AsignaturaRecordCountOutputType
   */

  export type AsignaturaRecordCountOutputType = {
    temas: number
  }

  export type AsignaturaRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    temas?: boolean | AsignaturaRecordCountOutputTypeCountTemasArgs
  }

  // Custom InputTypes
  /**
   * AsignaturaRecordCountOutputType without action
   */
  export type AsignaturaRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecordCountOutputType
     */
    select?: AsignaturaRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsignaturaRecordCountOutputType without action
   */
  export type AsignaturaRecordCountOutputTypeCountTemasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemaRecordWhereInput
  }


  /**
   * Count Type TemaRecordCountOutputType
   */

  export type TemaRecordCountOutputType = {
    preguntas: number
  }

  export type TemaRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preguntas?: boolean | TemaRecordCountOutputTypeCountPreguntasArgs
  }

  // Custom InputTypes
  /**
   * TemaRecordCountOutputType without action
   */
  export type TemaRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecordCountOutputType
     */
    select?: TemaRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemaRecordCountOutputType without action
   */
  export type TemaRecordCountOutputTypeCountPreguntasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreguntaRecordWhereInput
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
   * Model AsignaturaRecord
   */

  export type AggregateAsignaturaRecord = {
    _count: AsignaturaRecordCountAggregateOutputType | null
    _avg: AsignaturaRecordAvgAggregateOutputType | null
    _sum: AsignaturaRecordSumAggregateOutputType | null
    _min: AsignaturaRecordMinAggregateOutputType | null
    _max: AsignaturaRecordMaxAggregateOutputType | null
  }

  export type AsignaturaRecordAvgAggregateOutputType = {
    orden: number | null
  }

  export type AsignaturaRecordSumAggregateOutputType = {
    orden: number | null
  }

  export type AsignaturaRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    eje: string | null
    nombre: string | null
    orden: number | null
  }

  export type AsignaturaRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    eje: string | null
    nombre: string | null
    orden: number | null
  }

  export type AsignaturaRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    eje: number
    nombre: number
    orden: number
    _all: number
  }


  export type AsignaturaRecordAvgAggregateInputType = {
    orden?: true
  }

  export type AsignaturaRecordSumAggregateInputType = {
    orden?: true
  }

  export type AsignaturaRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    eje?: true
    nombre?: true
    orden?: true
  }

  export type AsignaturaRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    eje?: true
    nombre?: true
    orden?: true
  }

  export type AsignaturaRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    eje?: true
    nombre?: true
    orden?: true
    _all?: true
  }

  export type AsignaturaRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsignaturaRecord to aggregate.
     */
    where?: AsignaturaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignaturaRecords to fetch.
     */
    orderBy?: AsignaturaRecordOrderByWithRelationInput | AsignaturaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsignaturaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignaturaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignaturaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsignaturaRecords
    **/
    _count?: true | AsignaturaRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsignaturaRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsignaturaRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsignaturaRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsignaturaRecordMaxAggregateInputType
  }

  export type GetAsignaturaRecordAggregateType<T extends AsignaturaRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateAsignaturaRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsignaturaRecord[P]>
      : GetScalarType<T[P], AggregateAsignaturaRecord[P]>
  }




  export type AsignaturaRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsignaturaRecordWhereInput
    orderBy?: AsignaturaRecordOrderByWithAggregationInput | AsignaturaRecordOrderByWithAggregationInput[]
    by: AsignaturaRecordScalarFieldEnum[] | AsignaturaRecordScalarFieldEnum
    having?: AsignaturaRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsignaturaRecordCountAggregateInputType | true
    _avg?: AsignaturaRecordAvgAggregateInputType
    _sum?: AsignaturaRecordSumAggregateInputType
    _min?: AsignaturaRecordMinAggregateInputType
    _max?: AsignaturaRecordMaxAggregateInputType
  }

  export type AsignaturaRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    eje: string
    nombre: string
    orden: number
    _count: AsignaturaRecordCountAggregateOutputType | null
    _avg: AsignaturaRecordAvgAggregateOutputType | null
    _sum: AsignaturaRecordSumAggregateOutputType | null
    _min: AsignaturaRecordMinAggregateOutputType | null
    _max: AsignaturaRecordMaxAggregateOutputType | null
  }

  type GetAsignaturaRecordGroupByPayload<T extends AsignaturaRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsignaturaRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsignaturaRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsignaturaRecordGroupByOutputType[P]>
            : GetScalarType<T[P], AsignaturaRecordGroupByOutputType[P]>
        }
      >
    >


  export type AsignaturaRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eje?: boolean
    nombre?: boolean
    orden?: boolean
    temas?: boolean | AsignaturaRecord$temasArgs<ExtArgs>
    _count?: boolean | AsignaturaRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asignaturaRecord"]>

  export type AsignaturaRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eje?: boolean
    nombre?: boolean
    orden?: boolean
  }, ExtArgs["result"]["asignaturaRecord"]>

  export type AsignaturaRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eje?: boolean
    nombre?: boolean
    orden?: boolean
  }, ExtArgs["result"]["asignaturaRecord"]>

  export type AsignaturaRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eje?: boolean
    nombre?: boolean
    orden?: boolean
  }

  export type AsignaturaRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "eje" | "nombre" | "orden", ExtArgs["result"]["asignaturaRecord"]>
  export type AsignaturaRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    temas?: boolean | AsignaturaRecord$temasArgs<ExtArgs>
    _count?: boolean | AsignaturaRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AsignaturaRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AsignaturaRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AsignaturaRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsignaturaRecord"
    objects: {
      temas: Prisma.$TemaRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      eje: string
      nombre: string
      orden: number
    }, ExtArgs["result"]["asignaturaRecord"]>
    composites: {}
  }

  type AsignaturaRecordGetPayload<S extends boolean | null | undefined | AsignaturaRecordDefaultArgs> = $Result.GetResult<Prisma.$AsignaturaRecordPayload, S>

  type AsignaturaRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsignaturaRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsignaturaRecordCountAggregateInputType | true
    }

  export interface AsignaturaRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsignaturaRecord'], meta: { name: 'AsignaturaRecord' } }
    /**
     * Find zero or one AsignaturaRecord that matches the filter.
     * @param {AsignaturaRecordFindUniqueArgs} args - Arguments to find a AsignaturaRecord
     * @example
     * // Get one AsignaturaRecord
     * const asignaturaRecord = await prisma.asignaturaRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsignaturaRecordFindUniqueArgs>(args: SelectSubset<T, AsignaturaRecordFindUniqueArgs<ExtArgs>>): Prisma__AsignaturaRecordClient<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AsignaturaRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsignaturaRecordFindUniqueOrThrowArgs} args - Arguments to find a AsignaturaRecord
     * @example
     * // Get one AsignaturaRecord
     * const asignaturaRecord = await prisma.asignaturaRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsignaturaRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, AsignaturaRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsignaturaRecordClient<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsignaturaRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaRecordFindFirstArgs} args - Arguments to find a AsignaturaRecord
     * @example
     * // Get one AsignaturaRecord
     * const asignaturaRecord = await prisma.asignaturaRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsignaturaRecordFindFirstArgs>(args?: SelectSubset<T, AsignaturaRecordFindFirstArgs<ExtArgs>>): Prisma__AsignaturaRecordClient<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AsignaturaRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaRecordFindFirstOrThrowArgs} args - Arguments to find a AsignaturaRecord
     * @example
     * // Get one AsignaturaRecord
     * const asignaturaRecord = await prisma.asignaturaRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsignaturaRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, AsignaturaRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsignaturaRecordClient<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AsignaturaRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsignaturaRecords
     * const asignaturaRecords = await prisma.asignaturaRecord.findMany()
     * 
     * // Get first 10 AsignaturaRecords
     * const asignaturaRecords = await prisma.asignaturaRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asignaturaRecordWithIdOnly = await prisma.asignaturaRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsignaturaRecordFindManyArgs>(args?: SelectSubset<T, AsignaturaRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AsignaturaRecord.
     * @param {AsignaturaRecordCreateArgs} args - Arguments to create a AsignaturaRecord.
     * @example
     * // Create one AsignaturaRecord
     * const AsignaturaRecord = await prisma.asignaturaRecord.create({
     *   data: {
     *     // ... data to create a AsignaturaRecord
     *   }
     * })
     * 
     */
    create<T extends AsignaturaRecordCreateArgs>(args: SelectSubset<T, AsignaturaRecordCreateArgs<ExtArgs>>): Prisma__AsignaturaRecordClient<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AsignaturaRecords.
     * @param {AsignaturaRecordCreateManyArgs} args - Arguments to create many AsignaturaRecords.
     * @example
     * // Create many AsignaturaRecords
     * const asignaturaRecord = await prisma.asignaturaRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsignaturaRecordCreateManyArgs>(args?: SelectSubset<T, AsignaturaRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsignaturaRecords and returns the data saved in the database.
     * @param {AsignaturaRecordCreateManyAndReturnArgs} args - Arguments to create many AsignaturaRecords.
     * @example
     * // Create many AsignaturaRecords
     * const asignaturaRecord = await prisma.asignaturaRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsignaturaRecords and only return the `id`
     * const asignaturaRecordWithIdOnly = await prisma.asignaturaRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsignaturaRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, AsignaturaRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AsignaturaRecord.
     * @param {AsignaturaRecordDeleteArgs} args - Arguments to delete one AsignaturaRecord.
     * @example
     * // Delete one AsignaturaRecord
     * const AsignaturaRecord = await prisma.asignaturaRecord.delete({
     *   where: {
     *     // ... filter to delete one AsignaturaRecord
     *   }
     * })
     * 
     */
    delete<T extends AsignaturaRecordDeleteArgs>(args: SelectSubset<T, AsignaturaRecordDeleteArgs<ExtArgs>>): Prisma__AsignaturaRecordClient<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AsignaturaRecord.
     * @param {AsignaturaRecordUpdateArgs} args - Arguments to update one AsignaturaRecord.
     * @example
     * // Update one AsignaturaRecord
     * const asignaturaRecord = await prisma.asignaturaRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsignaturaRecordUpdateArgs>(args: SelectSubset<T, AsignaturaRecordUpdateArgs<ExtArgs>>): Prisma__AsignaturaRecordClient<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AsignaturaRecords.
     * @param {AsignaturaRecordDeleteManyArgs} args - Arguments to filter AsignaturaRecords to delete.
     * @example
     * // Delete a few AsignaturaRecords
     * const { count } = await prisma.asignaturaRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsignaturaRecordDeleteManyArgs>(args?: SelectSubset<T, AsignaturaRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsignaturaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsignaturaRecords
     * const asignaturaRecord = await prisma.asignaturaRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsignaturaRecordUpdateManyArgs>(args: SelectSubset<T, AsignaturaRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsignaturaRecords and returns the data updated in the database.
     * @param {AsignaturaRecordUpdateManyAndReturnArgs} args - Arguments to update many AsignaturaRecords.
     * @example
     * // Update many AsignaturaRecords
     * const asignaturaRecord = await prisma.asignaturaRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AsignaturaRecords and only return the `id`
     * const asignaturaRecordWithIdOnly = await prisma.asignaturaRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends AsignaturaRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, AsignaturaRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AsignaturaRecord.
     * @param {AsignaturaRecordUpsertArgs} args - Arguments to update or create a AsignaturaRecord.
     * @example
     * // Update or create a AsignaturaRecord
     * const asignaturaRecord = await prisma.asignaturaRecord.upsert({
     *   create: {
     *     // ... data to create a AsignaturaRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsignaturaRecord we want to update
     *   }
     * })
     */
    upsert<T extends AsignaturaRecordUpsertArgs>(args: SelectSubset<T, AsignaturaRecordUpsertArgs<ExtArgs>>): Prisma__AsignaturaRecordClient<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AsignaturaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaRecordCountArgs} args - Arguments to filter AsignaturaRecords to count.
     * @example
     * // Count the number of AsignaturaRecords
     * const count = await prisma.asignaturaRecord.count({
     *   where: {
     *     // ... the filter for the AsignaturaRecords we want to count
     *   }
     * })
    **/
    count<T extends AsignaturaRecordCountArgs>(
      args?: Subset<T, AsignaturaRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsignaturaRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsignaturaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsignaturaRecordAggregateArgs>(args: Subset<T, AsignaturaRecordAggregateArgs>): Prisma.PrismaPromise<GetAsignaturaRecordAggregateType<T>>

    /**
     * Group by AsignaturaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsignaturaRecordGroupByArgs} args - Group by arguments.
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
      T extends AsignaturaRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsignaturaRecordGroupByArgs['orderBy'] }
        : { orderBy?: AsignaturaRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsignaturaRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsignaturaRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsignaturaRecord model
   */
  readonly fields: AsignaturaRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsignaturaRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsignaturaRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    temas<T extends AsignaturaRecord$temasArgs<ExtArgs> = {}>(args?: Subset<T, AsignaturaRecord$temasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AsignaturaRecord model
   */
  interface AsignaturaRecordFieldRefs {
    readonly id: FieldRef<"AsignaturaRecord", 'String'>
    readonly createdAt: FieldRef<"AsignaturaRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"AsignaturaRecord", 'DateTime'>
    readonly eje: FieldRef<"AsignaturaRecord", 'String'>
    readonly nombre: FieldRef<"AsignaturaRecord", 'String'>
    readonly orden: FieldRef<"AsignaturaRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AsignaturaRecord findUnique
   */
  export type AsignaturaRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
    /**
     * Filter, which AsignaturaRecord to fetch.
     */
    where: AsignaturaRecordWhereUniqueInput
  }

  /**
   * AsignaturaRecord findUniqueOrThrow
   */
  export type AsignaturaRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
    /**
     * Filter, which AsignaturaRecord to fetch.
     */
    where: AsignaturaRecordWhereUniqueInput
  }

  /**
   * AsignaturaRecord findFirst
   */
  export type AsignaturaRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
    /**
     * Filter, which AsignaturaRecord to fetch.
     */
    where?: AsignaturaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignaturaRecords to fetch.
     */
    orderBy?: AsignaturaRecordOrderByWithRelationInput | AsignaturaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsignaturaRecords.
     */
    cursor?: AsignaturaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignaturaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignaturaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsignaturaRecords.
     */
    distinct?: AsignaturaRecordScalarFieldEnum | AsignaturaRecordScalarFieldEnum[]
  }

  /**
   * AsignaturaRecord findFirstOrThrow
   */
  export type AsignaturaRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
    /**
     * Filter, which AsignaturaRecord to fetch.
     */
    where?: AsignaturaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignaturaRecords to fetch.
     */
    orderBy?: AsignaturaRecordOrderByWithRelationInput | AsignaturaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsignaturaRecords.
     */
    cursor?: AsignaturaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignaturaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignaturaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsignaturaRecords.
     */
    distinct?: AsignaturaRecordScalarFieldEnum | AsignaturaRecordScalarFieldEnum[]
  }

  /**
   * AsignaturaRecord findMany
   */
  export type AsignaturaRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
    /**
     * Filter, which AsignaturaRecords to fetch.
     */
    where?: AsignaturaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsignaturaRecords to fetch.
     */
    orderBy?: AsignaturaRecordOrderByWithRelationInput | AsignaturaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsignaturaRecords.
     */
    cursor?: AsignaturaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsignaturaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsignaturaRecords.
     */
    skip?: number
    distinct?: AsignaturaRecordScalarFieldEnum | AsignaturaRecordScalarFieldEnum[]
  }

  /**
   * AsignaturaRecord create
   */
  export type AsignaturaRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a AsignaturaRecord.
     */
    data: XOR<AsignaturaRecordCreateInput, AsignaturaRecordUncheckedCreateInput>
  }

  /**
   * AsignaturaRecord createMany
   */
  export type AsignaturaRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsignaturaRecords.
     */
    data: AsignaturaRecordCreateManyInput | AsignaturaRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AsignaturaRecord createManyAndReturn
   */
  export type AsignaturaRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * The data used to create many AsignaturaRecords.
     */
    data: AsignaturaRecordCreateManyInput | AsignaturaRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AsignaturaRecord update
   */
  export type AsignaturaRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a AsignaturaRecord.
     */
    data: XOR<AsignaturaRecordUpdateInput, AsignaturaRecordUncheckedUpdateInput>
    /**
     * Choose, which AsignaturaRecord to update.
     */
    where: AsignaturaRecordWhereUniqueInput
  }

  /**
   * AsignaturaRecord updateMany
   */
  export type AsignaturaRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsignaturaRecords.
     */
    data: XOR<AsignaturaRecordUpdateManyMutationInput, AsignaturaRecordUncheckedUpdateManyInput>
    /**
     * Filter which AsignaturaRecords to update
     */
    where?: AsignaturaRecordWhereInput
    /**
     * Limit how many AsignaturaRecords to update.
     */
    limit?: number
  }

  /**
   * AsignaturaRecord updateManyAndReturn
   */
  export type AsignaturaRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * The data used to update AsignaturaRecords.
     */
    data: XOR<AsignaturaRecordUpdateManyMutationInput, AsignaturaRecordUncheckedUpdateManyInput>
    /**
     * Filter which AsignaturaRecords to update
     */
    where?: AsignaturaRecordWhereInput
    /**
     * Limit how many AsignaturaRecords to update.
     */
    limit?: number
  }

  /**
   * AsignaturaRecord upsert
   */
  export type AsignaturaRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the AsignaturaRecord to update in case it exists.
     */
    where: AsignaturaRecordWhereUniqueInput
    /**
     * In case the AsignaturaRecord found by the `where` argument doesn't exist, create a new AsignaturaRecord with this data.
     */
    create: XOR<AsignaturaRecordCreateInput, AsignaturaRecordUncheckedCreateInput>
    /**
     * In case the AsignaturaRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsignaturaRecordUpdateInput, AsignaturaRecordUncheckedUpdateInput>
  }

  /**
   * AsignaturaRecord delete
   */
  export type AsignaturaRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
    /**
     * Filter which AsignaturaRecord to delete.
     */
    where: AsignaturaRecordWhereUniqueInput
  }

  /**
   * AsignaturaRecord deleteMany
   */
  export type AsignaturaRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsignaturaRecords to delete
     */
    where?: AsignaturaRecordWhereInput
    /**
     * Limit how many AsignaturaRecords to delete.
     */
    limit?: number
  }

  /**
   * AsignaturaRecord.temas
   */
  export type AsignaturaRecord$temasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    where?: TemaRecordWhereInput
    orderBy?: TemaRecordOrderByWithRelationInput | TemaRecordOrderByWithRelationInput[]
    cursor?: TemaRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemaRecordScalarFieldEnum | TemaRecordScalarFieldEnum[]
  }

  /**
   * AsignaturaRecord without action
   */
  export type AsignaturaRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsignaturaRecord
     */
    select?: AsignaturaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AsignaturaRecord
     */
    omit?: AsignaturaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsignaturaRecordInclude<ExtArgs> | null
  }


  /**
   * Model TemaRecord
   */

  export type AggregateTemaRecord = {
    _count: TemaRecordCountAggregateOutputType | null
    _avg: TemaRecordAvgAggregateOutputType | null
    _sum: TemaRecordSumAggregateOutputType | null
    _min: TemaRecordMinAggregateOutputType | null
    _max: TemaRecordMaxAggregateOutputType | null
  }

  export type TemaRecordAvgAggregateOutputType = {
    orden: number | null
  }

  export type TemaRecordSumAggregateOutputType = {
    orden: number | null
  }

  export type TemaRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    asignaturaId: string | null
    romano: string | null
    nombre: string | null
    orden: number | null
    bloque: string | null
  }

  export type TemaRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    asignaturaId: string | null
    romano: string | null
    nombre: string | null
    orden: number | null
    bloque: string | null
  }

  export type TemaRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    asignaturaId: number
    romano: number
    nombre: number
    orden: number
    bloque: number
    _all: number
  }


  export type TemaRecordAvgAggregateInputType = {
    orden?: true
  }

  export type TemaRecordSumAggregateInputType = {
    orden?: true
  }

  export type TemaRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    asignaturaId?: true
    romano?: true
    nombre?: true
    orden?: true
    bloque?: true
  }

  export type TemaRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    asignaturaId?: true
    romano?: true
    nombre?: true
    orden?: true
    bloque?: true
  }

  export type TemaRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    asignaturaId?: true
    romano?: true
    nombre?: true
    orden?: true
    bloque?: true
    _all?: true
  }

  export type TemaRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemaRecord to aggregate.
     */
    where?: TemaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemaRecords to fetch.
     */
    orderBy?: TemaRecordOrderByWithRelationInput | TemaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemaRecords
    **/
    _count?: true | TemaRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemaRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemaRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemaRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemaRecordMaxAggregateInputType
  }

  export type GetTemaRecordAggregateType<T extends TemaRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTemaRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemaRecord[P]>
      : GetScalarType<T[P], AggregateTemaRecord[P]>
  }




  export type TemaRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemaRecordWhereInput
    orderBy?: TemaRecordOrderByWithAggregationInput | TemaRecordOrderByWithAggregationInput[]
    by: TemaRecordScalarFieldEnum[] | TemaRecordScalarFieldEnum
    having?: TemaRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemaRecordCountAggregateInputType | true
    _avg?: TemaRecordAvgAggregateInputType
    _sum?: TemaRecordSumAggregateInputType
    _min?: TemaRecordMinAggregateInputType
    _max?: TemaRecordMaxAggregateInputType
  }

  export type TemaRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    asignaturaId: string
    romano: string
    nombre: string
    orden: number
    bloque: string | null
    _count: TemaRecordCountAggregateOutputType | null
    _avg: TemaRecordAvgAggregateOutputType | null
    _sum: TemaRecordSumAggregateOutputType | null
    _min: TemaRecordMinAggregateOutputType | null
    _max: TemaRecordMaxAggregateOutputType | null
  }

  type GetTemaRecordGroupByPayload<T extends TemaRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemaRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemaRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemaRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TemaRecordGroupByOutputType[P]>
        }
      >
    >


  export type TemaRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asignaturaId?: boolean
    romano?: boolean
    nombre?: boolean
    orden?: boolean
    bloque?: boolean
    asignatura?: boolean | AsignaturaRecordDefaultArgs<ExtArgs>
    preguntas?: boolean | TemaRecord$preguntasArgs<ExtArgs>
    _count?: boolean | TemaRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temaRecord"]>

  export type TemaRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asignaturaId?: boolean
    romano?: boolean
    nombre?: boolean
    orden?: boolean
    bloque?: boolean
    asignatura?: boolean | AsignaturaRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temaRecord"]>

  export type TemaRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asignaturaId?: boolean
    romano?: boolean
    nombre?: boolean
    orden?: boolean
    bloque?: boolean
    asignatura?: boolean | AsignaturaRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temaRecord"]>

  export type TemaRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    asignaturaId?: boolean
    romano?: boolean
    nombre?: boolean
    orden?: boolean
    bloque?: boolean
  }

  export type TemaRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "asignaturaId" | "romano" | "nombre" | "orden" | "bloque", ExtArgs["result"]["temaRecord"]>
  export type TemaRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignatura?: boolean | AsignaturaRecordDefaultArgs<ExtArgs>
    preguntas?: boolean | TemaRecord$preguntasArgs<ExtArgs>
    _count?: boolean | TemaRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemaRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignatura?: boolean | AsignaturaRecordDefaultArgs<ExtArgs>
  }
  export type TemaRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asignatura?: boolean | AsignaturaRecordDefaultArgs<ExtArgs>
  }

  export type $TemaRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemaRecord"
    objects: {
      asignatura: Prisma.$AsignaturaRecordPayload<ExtArgs>
      preguntas: Prisma.$PreguntaRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      asignaturaId: string
      romano: string
      nombre: string
      orden: number
      bloque: string | null
    }, ExtArgs["result"]["temaRecord"]>
    composites: {}
  }

  type TemaRecordGetPayload<S extends boolean | null | undefined | TemaRecordDefaultArgs> = $Result.GetResult<Prisma.$TemaRecordPayload, S>

  type TemaRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemaRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemaRecordCountAggregateInputType | true
    }

  export interface TemaRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemaRecord'], meta: { name: 'TemaRecord' } }
    /**
     * Find zero or one TemaRecord that matches the filter.
     * @param {TemaRecordFindUniqueArgs} args - Arguments to find a TemaRecord
     * @example
     * // Get one TemaRecord
     * const temaRecord = await prisma.temaRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemaRecordFindUniqueArgs>(args: SelectSubset<T, TemaRecordFindUniqueArgs<ExtArgs>>): Prisma__TemaRecordClient<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemaRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemaRecordFindUniqueOrThrowArgs} args - Arguments to find a TemaRecord
     * @example
     * // Get one TemaRecord
     * const temaRecord = await prisma.temaRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemaRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TemaRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemaRecordClient<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemaRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemaRecordFindFirstArgs} args - Arguments to find a TemaRecord
     * @example
     * // Get one TemaRecord
     * const temaRecord = await prisma.temaRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemaRecordFindFirstArgs>(args?: SelectSubset<T, TemaRecordFindFirstArgs<ExtArgs>>): Prisma__TemaRecordClient<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemaRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemaRecordFindFirstOrThrowArgs} args - Arguments to find a TemaRecord
     * @example
     * // Get one TemaRecord
     * const temaRecord = await prisma.temaRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemaRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TemaRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemaRecordClient<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemaRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemaRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemaRecords
     * const temaRecords = await prisma.temaRecord.findMany()
     * 
     * // Get first 10 TemaRecords
     * const temaRecords = await prisma.temaRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temaRecordWithIdOnly = await prisma.temaRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemaRecordFindManyArgs>(args?: SelectSubset<T, TemaRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemaRecord.
     * @param {TemaRecordCreateArgs} args - Arguments to create a TemaRecord.
     * @example
     * // Create one TemaRecord
     * const TemaRecord = await prisma.temaRecord.create({
     *   data: {
     *     // ... data to create a TemaRecord
     *   }
     * })
     * 
     */
    create<T extends TemaRecordCreateArgs>(args: SelectSubset<T, TemaRecordCreateArgs<ExtArgs>>): Prisma__TemaRecordClient<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemaRecords.
     * @param {TemaRecordCreateManyArgs} args - Arguments to create many TemaRecords.
     * @example
     * // Create many TemaRecords
     * const temaRecord = await prisma.temaRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemaRecordCreateManyArgs>(args?: SelectSubset<T, TemaRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemaRecords and returns the data saved in the database.
     * @param {TemaRecordCreateManyAndReturnArgs} args - Arguments to create many TemaRecords.
     * @example
     * // Create many TemaRecords
     * const temaRecord = await prisma.temaRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemaRecords and only return the `id`
     * const temaRecordWithIdOnly = await prisma.temaRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemaRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TemaRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemaRecord.
     * @param {TemaRecordDeleteArgs} args - Arguments to delete one TemaRecord.
     * @example
     * // Delete one TemaRecord
     * const TemaRecord = await prisma.temaRecord.delete({
     *   where: {
     *     // ... filter to delete one TemaRecord
     *   }
     * })
     * 
     */
    delete<T extends TemaRecordDeleteArgs>(args: SelectSubset<T, TemaRecordDeleteArgs<ExtArgs>>): Prisma__TemaRecordClient<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemaRecord.
     * @param {TemaRecordUpdateArgs} args - Arguments to update one TemaRecord.
     * @example
     * // Update one TemaRecord
     * const temaRecord = await prisma.temaRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemaRecordUpdateArgs>(args: SelectSubset<T, TemaRecordUpdateArgs<ExtArgs>>): Prisma__TemaRecordClient<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemaRecords.
     * @param {TemaRecordDeleteManyArgs} args - Arguments to filter TemaRecords to delete.
     * @example
     * // Delete a few TemaRecords
     * const { count } = await prisma.temaRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemaRecordDeleteManyArgs>(args?: SelectSubset<T, TemaRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemaRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemaRecords
     * const temaRecord = await prisma.temaRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemaRecordUpdateManyArgs>(args: SelectSubset<T, TemaRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemaRecords and returns the data updated in the database.
     * @param {TemaRecordUpdateManyAndReturnArgs} args - Arguments to update many TemaRecords.
     * @example
     * // Update many TemaRecords
     * const temaRecord = await prisma.temaRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemaRecords and only return the `id`
     * const temaRecordWithIdOnly = await prisma.temaRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemaRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TemaRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemaRecord.
     * @param {TemaRecordUpsertArgs} args - Arguments to update or create a TemaRecord.
     * @example
     * // Update or create a TemaRecord
     * const temaRecord = await prisma.temaRecord.upsert({
     *   create: {
     *     // ... data to create a TemaRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemaRecord we want to update
     *   }
     * })
     */
    upsert<T extends TemaRecordUpsertArgs>(args: SelectSubset<T, TemaRecordUpsertArgs<ExtArgs>>): Prisma__TemaRecordClient<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemaRecordCountArgs} args - Arguments to filter TemaRecords to count.
     * @example
     * // Count the number of TemaRecords
     * const count = await prisma.temaRecord.count({
     *   where: {
     *     // ... the filter for the TemaRecords we want to count
     *   }
     * })
    **/
    count<T extends TemaRecordCountArgs>(
      args?: Subset<T, TemaRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemaRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemaRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemaRecordAggregateArgs>(args: Subset<T, TemaRecordAggregateArgs>): Prisma.PrismaPromise<GetTemaRecordAggregateType<T>>

    /**
     * Group by TemaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemaRecordGroupByArgs} args - Group by arguments.
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
      T extends TemaRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemaRecordGroupByArgs['orderBy'] }
        : { orderBy?: TemaRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemaRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemaRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemaRecord model
   */
  readonly fields: TemaRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemaRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemaRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asignatura<T extends AsignaturaRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsignaturaRecordDefaultArgs<ExtArgs>>): Prisma__AsignaturaRecordClient<$Result.GetResult<Prisma.$AsignaturaRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    preguntas<T extends TemaRecord$preguntasArgs<ExtArgs> = {}>(args?: Subset<T, TemaRecord$preguntasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TemaRecord model
   */
  interface TemaRecordFieldRefs {
    readonly id: FieldRef<"TemaRecord", 'String'>
    readonly createdAt: FieldRef<"TemaRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"TemaRecord", 'DateTime'>
    readonly asignaturaId: FieldRef<"TemaRecord", 'String'>
    readonly romano: FieldRef<"TemaRecord", 'String'>
    readonly nombre: FieldRef<"TemaRecord", 'String'>
    readonly orden: FieldRef<"TemaRecord", 'Int'>
    readonly bloque: FieldRef<"TemaRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TemaRecord findUnique
   */
  export type TemaRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemaRecord to fetch.
     */
    where: TemaRecordWhereUniqueInput
  }

  /**
   * TemaRecord findUniqueOrThrow
   */
  export type TemaRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemaRecord to fetch.
     */
    where: TemaRecordWhereUniqueInput
  }

  /**
   * TemaRecord findFirst
   */
  export type TemaRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemaRecord to fetch.
     */
    where?: TemaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemaRecords to fetch.
     */
    orderBy?: TemaRecordOrderByWithRelationInput | TemaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemaRecords.
     */
    cursor?: TemaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemaRecords.
     */
    distinct?: TemaRecordScalarFieldEnum | TemaRecordScalarFieldEnum[]
  }

  /**
   * TemaRecord findFirstOrThrow
   */
  export type TemaRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemaRecord to fetch.
     */
    where?: TemaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemaRecords to fetch.
     */
    orderBy?: TemaRecordOrderByWithRelationInput | TemaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemaRecords.
     */
    cursor?: TemaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemaRecords.
     */
    distinct?: TemaRecordScalarFieldEnum | TemaRecordScalarFieldEnum[]
  }

  /**
   * TemaRecord findMany
   */
  export type TemaRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    /**
     * Filter, which TemaRecords to fetch.
     */
    where?: TemaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemaRecords to fetch.
     */
    orderBy?: TemaRecordOrderByWithRelationInput | TemaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemaRecords.
     */
    cursor?: TemaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemaRecords.
     */
    skip?: number
    distinct?: TemaRecordScalarFieldEnum | TemaRecordScalarFieldEnum[]
  }

  /**
   * TemaRecord create
   */
  export type TemaRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TemaRecord.
     */
    data: XOR<TemaRecordCreateInput, TemaRecordUncheckedCreateInput>
  }

  /**
   * TemaRecord createMany
   */
  export type TemaRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemaRecords.
     */
    data: TemaRecordCreateManyInput | TemaRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemaRecord createManyAndReturn
   */
  export type TemaRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TemaRecords.
     */
    data: TemaRecordCreateManyInput | TemaRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemaRecord update
   */
  export type TemaRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TemaRecord.
     */
    data: XOR<TemaRecordUpdateInput, TemaRecordUncheckedUpdateInput>
    /**
     * Choose, which TemaRecord to update.
     */
    where: TemaRecordWhereUniqueInput
  }

  /**
   * TemaRecord updateMany
   */
  export type TemaRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemaRecords.
     */
    data: XOR<TemaRecordUpdateManyMutationInput, TemaRecordUncheckedUpdateManyInput>
    /**
     * Filter which TemaRecords to update
     */
    where?: TemaRecordWhereInput
    /**
     * Limit how many TemaRecords to update.
     */
    limit?: number
  }

  /**
   * TemaRecord updateManyAndReturn
   */
  export type TemaRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * The data used to update TemaRecords.
     */
    data: XOR<TemaRecordUpdateManyMutationInput, TemaRecordUncheckedUpdateManyInput>
    /**
     * Filter which TemaRecords to update
     */
    where?: TemaRecordWhereInput
    /**
     * Limit how many TemaRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemaRecord upsert
   */
  export type TemaRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TemaRecord to update in case it exists.
     */
    where: TemaRecordWhereUniqueInput
    /**
     * In case the TemaRecord found by the `where` argument doesn't exist, create a new TemaRecord with this data.
     */
    create: XOR<TemaRecordCreateInput, TemaRecordUncheckedCreateInput>
    /**
     * In case the TemaRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemaRecordUpdateInput, TemaRecordUncheckedUpdateInput>
  }

  /**
   * TemaRecord delete
   */
  export type TemaRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
    /**
     * Filter which TemaRecord to delete.
     */
    where: TemaRecordWhereUniqueInput
  }

  /**
   * TemaRecord deleteMany
   */
  export type TemaRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemaRecords to delete
     */
    where?: TemaRecordWhereInput
    /**
     * Limit how many TemaRecords to delete.
     */
    limit?: number
  }

  /**
   * TemaRecord.preguntas
   */
  export type TemaRecord$preguntasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    where?: PreguntaRecordWhereInput
    orderBy?: PreguntaRecordOrderByWithRelationInput | PreguntaRecordOrderByWithRelationInput[]
    cursor?: PreguntaRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreguntaRecordScalarFieldEnum | PreguntaRecordScalarFieldEnum[]
  }

  /**
   * TemaRecord without action
   */
  export type TemaRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemaRecord
     */
    select?: TemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemaRecord
     */
    omit?: TemaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemaRecordInclude<ExtArgs> | null
  }


  /**
   * Model PreguntaRecord
   */

  export type AggregatePreguntaRecord = {
    _count: PreguntaRecordCountAggregateOutputType | null
    _avg: PreguntaRecordAvgAggregateOutputType | null
    _sum: PreguntaRecordSumAggregateOutputType | null
    _min: PreguntaRecordMinAggregateOutputType | null
    _max: PreguntaRecordMaxAggregateOutputType | null
  }

  export type PreguntaRecordAvgAggregateOutputType = {
    dificultad: number | null
    vecesServida: number | null
  }

  export type PreguntaRecordSumAggregateOutputType = {
    dificultad: number | null
    vecesServida: number | null
  }

  export type PreguntaRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    temaId: string | null
    enunciado: string | null
    claveCorrecta: string | null
    solucion: string | null
    fuente: string | null
    esAncla: boolean | null
    dificultad: number | null
    vecesServida: number | null
    activa: boolean | null
  }

  export type PreguntaRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    temaId: string | null
    enunciado: string | null
    claveCorrecta: string | null
    solucion: string | null
    fuente: string | null
    esAncla: boolean | null
    dificultad: number | null
    vecesServida: number | null
    activa: boolean | null
  }

  export type PreguntaRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    temaId: number
    enunciado: number
    alternativas: number
    claveCorrecta: number
    solucion: number
    fuente: number
    esAncla: number
    dificultad: number
    vecesServida: number
    activa: number
    _all: number
  }


  export type PreguntaRecordAvgAggregateInputType = {
    dificultad?: true
    vecesServida?: true
  }

  export type PreguntaRecordSumAggregateInputType = {
    dificultad?: true
    vecesServida?: true
  }

  export type PreguntaRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    temaId?: true
    enunciado?: true
    claveCorrecta?: true
    solucion?: true
    fuente?: true
    esAncla?: true
    dificultad?: true
    vecesServida?: true
    activa?: true
  }

  export type PreguntaRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    temaId?: true
    enunciado?: true
    claveCorrecta?: true
    solucion?: true
    fuente?: true
    esAncla?: true
    dificultad?: true
    vecesServida?: true
    activa?: true
  }

  export type PreguntaRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    temaId?: true
    enunciado?: true
    alternativas?: true
    claveCorrecta?: true
    solucion?: true
    fuente?: true
    esAncla?: true
    dificultad?: true
    vecesServida?: true
    activa?: true
    _all?: true
  }

  export type PreguntaRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreguntaRecord to aggregate.
     */
    where?: PreguntaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreguntaRecords to fetch.
     */
    orderBy?: PreguntaRecordOrderByWithRelationInput | PreguntaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreguntaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreguntaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreguntaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreguntaRecords
    **/
    _count?: true | PreguntaRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreguntaRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreguntaRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreguntaRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreguntaRecordMaxAggregateInputType
  }

  export type GetPreguntaRecordAggregateType<T extends PreguntaRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePreguntaRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreguntaRecord[P]>
      : GetScalarType<T[P], AggregatePreguntaRecord[P]>
  }




  export type PreguntaRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreguntaRecordWhereInput
    orderBy?: PreguntaRecordOrderByWithAggregationInput | PreguntaRecordOrderByWithAggregationInput[]
    by: PreguntaRecordScalarFieldEnum[] | PreguntaRecordScalarFieldEnum
    having?: PreguntaRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreguntaRecordCountAggregateInputType | true
    _avg?: PreguntaRecordAvgAggregateInputType
    _sum?: PreguntaRecordSumAggregateInputType
    _min?: PreguntaRecordMinAggregateInputType
    _max?: PreguntaRecordMaxAggregateInputType
  }

  export type PreguntaRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    temaId: string
    enunciado: string
    alternativas: JsonValue
    claveCorrecta: string
    solucion: string | null
    fuente: string | null
    esAncla: boolean
    dificultad: number
    vecesServida: number
    activa: boolean
    _count: PreguntaRecordCountAggregateOutputType | null
    _avg: PreguntaRecordAvgAggregateOutputType | null
    _sum: PreguntaRecordSumAggregateOutputType | null
    _min: PreguntaRecordMinAggregateOutputType | null
    _max: PreguntaRecordMaxAggregateOutputType | null
  }

  type GetPreguntaRecordGroupByPayload<T extends PreguntaRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreguntaRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreguntaRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreguntaRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PreguntaRecordGroupByOutputType[P]>
        }
      >
    >


  export type PreguntaRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    temaId?: boolean
    enunciado?: boolean
    alternativas?: boolean
    claveCorrecta?: boolean
    solucion?: boolean
    fuente?: boolean
    esAncla?: boolean
    dificultad?: boolean
    vecesServida?: boolean
    activa?: boolean
    tema?: boolean | TemaRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preguntaRecord"]>

  export type PreguntaRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    temaId?: boolean
    enunciado?: boolean
    alternativas?: boolean
    claveCorrecta?: boolean
    solucion?: boolean
    fuente?: boolean
    esAncla?: boolean
    dificultad?: boolean
    vecesServida?: boolean
    activa?: boolean
    tema?: boolean | TemaRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preguntaRecord"]>

  export type PreguntaRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    temaId?: boolean
    enunciado?: boolean
    alternativas?: boolean
    claveCorrecta?: boolean
    solucion?: boolean
    fuente?: boolean
    esAncla?: boolean
    dificultad?: boolean
    vecesServida?: boolean
    activa?: boolean
    tema?: boolean | TemaRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preguntaRecord"]>

  export type PreguntaRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    temaId?: boolean
    enunciado?: boolean
    alternativas?: boolean
    claveCorrecta?: boolean
    solucion?: boolean
    fuente?: boolean
    esAncla?: boolean
    dificultad?: boolean
    vecesServida?: boolean
    activa?: boolean
  }

  export type PreguntaRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "temaId" | "enunciado" | "alternativas" | "claveCorrecta" | "solucion" | "fuente" | "esAncla" | "dificultad" | "vecesServida" | "activa", ExtArgs["result"]["preguntaRecord"]>
  export type PreguntaRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tema?: boolean | TemaRecordDefaultArgs<ExtArgs>
  }
  export type PreguntaRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tema?: boolean | TemaRecordDefaultArgs<ExtArgs>
  }
  export type PreguntaRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tema?: boolean | TemaRecordDefaultArgs<ExtArgs>
  }

  export type $PreguntaRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreguntaRecord"
    objects: {
      tema: Prisma.$TemaRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      temaId: string
      enunciado: string
      alternativas: Prisma.JsonValue
      claveCorrecta: string
      solucion: string | null
      fuente: string | null
      esAncla: boolean
      dificultad: number
      vecesServida: number
      activa: boolean
    }, ExtArgs["result"]["preguntaRecord"]>
    composites: {}
  }

  type PreguntaRecordGetPayload<S extends boolean | null | undefined | PreguntaRecordDefaultArgs> = $Result.GetResult<Prisma.$PreguntaRecordPayload, S>

  type PreguntaRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreguntaRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreguntaRecordCountAggregateInputType | true
    }

  export interface PreguntaRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreguntaRecord'], meta: { name: 'PreguntaRecord' } }
    /**
     * Find zero or one PreguntaRecord that matches the filter.
     * @param {PreguntaRecordFindUniqueArgs} args - Arguments to find a PreguntaRecord
     * @example
     * // Get one PreguntaRecord
     * const preguntaRecord = await prisma.preguntaRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreguntaRecordFindUniqueArgs>(args: SelectSubset<T, PreguntaRecordFindUniqueArgs<ExtArgs>>): Prisma__PreguntaRecordClient<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PreguntaRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreguntaRecordFindUniqueOrThrowArgs} args - Arguments to find a PreguntaRecord
     * @example
     * // Get one PreguntaRecord
     * const preguntaRecord = await prisma.preguntaRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreguntaRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PreguntaRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreguntaRecordClient<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreguntaRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaRecordFindFirstArgs} args - Arguments to find a PreguntaRecord
     * @example
     * // Get one PreguntaRecord
     * const preguntaRecord = await prisma.preguntaRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreguntaRecordFindFirstArgs>(args?: SelectSubset<T, PreguntaRecordFindFirstArgs<ExtArgs>>): Prisma__PreguntaRecordClient<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreguntaRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaRecordFindFirstOrThrowArgs} args - Arguments to find a PreguntaRecord
     * @example
     * // Get one PreguntaRecord
     * const preguntaRecord = await prisma.preguntaRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreguntaRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PreguntaRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreguntaRecordClient<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PreguntaRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreguntaRecords
     * const preguntaRecords = await prisma.preguntaRecord.findMany()
     * 
     * // Get first 10 PreguntaRecords
     * const preguntaRecords = await prisma.preguntaRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preguntaRecordWithIdOnly = await prisma.preguntaRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreguntaRecordFindManyArgs>(args?: SelectSubset<T, PreguntaRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PreguntaRecord.
     * @param {PreguntaRecordCreateArgs} args - Arguments to create a PreguntaRecord.
     * @example
     * // Create one PreguntaRecord
     * const PreguntaRecord = await prisma.preguntaRecord.create({
     *   data: {
     *     // ... data to create a PreguntaRecord
     *   }
     * })
     * 
     */
    create<T extends PreguntaRecordCreateArgs>(args: SelectSubset<T, PreguntaRecordCreateArgs<ExtArgs>>): Prisma__PreguntaRecordClient<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PreguntaRecords.
     * @param {PreguntaRecordCreateManyArgs} args - Arguments to create many PreguntaRecords.
     * @example
     * // Create many PreguntaRecords
     * const preguntaRecord = await prisma.preguntaRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreguntaRecordCreateManyArgs>(args?: SelectSubset<T, PreguntaRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PreguntaRecords and returns the data saved in the database.
     * @param {PreguntaRecordCreateManyAndReturnArgs} args - Arguments to create many PreguntaRecords.
     * @example
     * // Create many PreguntaRecords
     * const preguntaRecord = await prisma.preguntaRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PreguntaRecords and only return the `id`
     * const preguntaRecordWithIdOnly = await prisma.preguntaRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreguntaRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PreguntaRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PreguntaRecord.
     * @param {PreguntaRecordDeleteArgs} args - Arguments to delete one PreguntaRecord.
     * @example
     * // Delete one PreguntaRecord
     * const PreguntaRecord = await prisma.preguntaRecord.delete({
     *   where: {
     *     // ... filter to delete one PreguntaRecord
     *   }
     * })
     * 
     */
    delete<T extends PreguntaRecordDeleteArgs>(args: SelectSubset<T, PreguntaRecordDeleteArgs<ExtArgs>>): Prisma__PreguntaRecordClient<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PreguntaRecord.
     * @param {PreguntaRecordUpdateArgs} args - Arguments to update one PreguntaRecord.
     * @example
     * // Update one PreguntaRecord
     * const preguntaRecord = await prisma.preguntaRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreguntaRecordUpdateArgs>(args: SelectSubset<T, PreguntaRecordUpdateArgs<ExtArgs>>): Prisma__PreguntaRecordClient<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PreguntaRecords.
     * @param {PreguntaRecordDeleteManyArgs} args - Arguments to filter PreguntaRecords to delete.
     * @example
     * // Delete a few PreguntaRecords
     * const { count } = await prisma.preguntaRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreguntaRecordDeleteManyArgs>(args?: SelectSubset<T, PreguntaRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreguntaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreguntaRecords
     * const preguntaRecord = await prisma.preguntaRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreguntaRecordUpdateManyArgs>(args: SelectSubset<T, PreguntaRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreguntaRecords and returns the data updated in the database.
     * @param {PreguntaRecordUpdateManyAndReturnArgs} args - Arguments to update many PreguntaRecords.
     * @example
     * // Update many PreguntaRecords
     * const preguntaRecord = await prisma.preguntaRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PreguntaRecords and only return the `id`
     * const preguntaRecordWithIdOnly = await prisma.preguntaRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends PreguntaRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PreguntaRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PreguntaRecord.
     * @param {PreguntaRecordUpsertArgs} args - Arguments to update or create a PreguntaRecord.
     * @example
     * // Update or create a PreguntaRecord
     * const preguntaRecord = await prisma.preguntaRecord.upsert({
     *   create: {
     *     // ... data to create a PreguntaRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreguntaRecord we want to update
     *   }
     * })
     */
    upsert<T extends PreguntaRecordUpsertArgs>(args: SelectSubset<T, PreguntaRecordUpsertArgs<ExtArgs>>): Prisma__PreguntaRecordClient<$Result.GetResult<Prisma.$PreguntaRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PreguntaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaRecordCountArgs} args - Arguments to filter PreguntaRecords to count.
     * @example
     * // Count the number of PreguntaRecords
     * const count = await prisma.preguntaRecord.count({
     *   where: {
     *     // ... the filter for the PreguntaRecords we want to count
     *   }
     * })
    **/
    count<T extends PreguntaRecordCountArgs>(
      args?: Subset<T, PreguntaRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreguntaRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreguntaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreguntaRecordAggregateArgs>(args: Subset<T, PreguntaRecordAggregateArgs>): Prisma.PrismaPromise<GetPreguntaRecordAggregateType<T>>

    /**
     * Group by PreguntaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaRecordGroupByArgs} args - Group by arguments.
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
      T extends PreguntaRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreguntaRecordGroupByArgs['orderBy'] }
        : { orderBy?: PreguntaRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreguntaRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreguntaRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreguntaRecord model
   */
  readonly fields: PreguntaRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreguntaRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreguntaRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tema<T extends TemaRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemaRecordDefaultArgs<ExtArgs>>): Prisma__TemaRecordClient<$Result.GetResult<Prisma.$TemaRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PreguntaRecord model
   */
  interface PreguntaRecordFieldRefs {
    readonly id: FieldRef<"PreguntaRecord", 'String'>
    readonly createdAt: FieldRef<"PreguntaRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"PreguntaRecord", 'DateTime'>
    readonly temaId: FieldRef<"PreguntaRecord", 'String'>
    readonly enunciado: FieldRef<"PreguntaRecord", 'String'>
    readonly alternativas: FieldRef<"PreguntaRecord", 'Json'>
    readonly claveCorrecta: FieldRef<"PreguntaRecord", 'String'>
    readonly solucion: FieldRef<"PreguntaRecord", 'String'>
    readonly fuente: FieldRef<"PreguntaRecord", 'String'>
    readonly esAncla: FieldRef<"PreguntaRecord", 'Boolean'>
    readonly dificultad: FieldRef<"PreguntaRecord", 'Float'>
    readonly vecesServida: FieldRef<"PreguntaRecord", 'Int'>
    readonly activa: FieldRef<"PreguntaRecord", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PreguntaRecord findUnique
   */
  export type PreguntaRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    /**
     * Filter, which PreguntaRecord to fetch.
     */
    where: PreguntaRecordWhereUniqueInput
  }

  /**
   * PreguntaRecord findUniqueOrThrow
   */
  export type PreguntaRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    /**
     * Filter, which PreguntaRecord to fetch.
     */
    where: PreguntaRecordWhereUniqueInput
  }

  /**
   * PreguntaRecord findFirst
   */
  export type PreguntaRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    /**
     * Filter, which PreguntaRecord to fetch.
     */
    where?: PreguntaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreguntaRecords to fetch.
     */
    orderBy?: PreguntaRecordOrderByWithRelationInput | PreguntaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreguntaRecords.
     */
    cursor?: PreguntaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreguntaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreguntaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreguntaRecords.
     */
    distinct?: PreguntaRecordScalarFieldEnum | PreguntaRecordScalarFieldEnum[]
  }

  /**
   * PreguntaRecord findFirstOrThrow
   */
  export type PreguntaRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    /**
     * Filter, which PreguntaRecord to fetch.
     */
    where?: PreguntaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreguntaRecords to fetch.
     */
    orderBy?: PreguntaRecordOrderByWithRelationInput | PreguntaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreguntaRecords.
     */
    cursor?: PreguntaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreguntaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreguntaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreguntaRecords.
     */
    distinct?: PreguntaRecordScalarFieldEnum | PreguntaRecordScalarFieldEnum[]
  }

  /**
   * PreguntaRecord findMany
   */
  export type PreguntaRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    /**
     * Filter, which PreguntaRecords to fetch.
     */
    where?: PreguntaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreguntaRecords to fetch.
     */
    orderBy?: PreguntaRecordOrderByWithRelationInput | PreguntaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreguntaRecords.
     */
    cursor?: PreguntaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreguntaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreguntaRecords.
     */
    skip?: number
    distinct?: PreguntaRecordScalarFieldEnum | PreguntaRecordScalarFieldEnum[]
  }

  /**
   * PreguntaRecord create
   */
  export type PreguntaRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PreguntaRecord.
     */
    data: XOR<PreguntaRecordCreateInput, PreguntaRecordUncheckedCreateInput>
  }

  /**
   * PreguntaRecord createMany
   */
  export type PreguntaRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreguntaRecords.
     */
    data: PreguntaRecordCreateManyInput | PreguntaRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreguntaRecord createManyAndReturn
   */
  export type PreguntaRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PreguntaRecords.
     */
    data: PreguntaRecordCreateManyInput | PreguntaRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreguntaRecord update
   */
  export type PreguntaRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PreguntaRecord.
     */
    data: XOR<PreguntaRecordUpdateInput, PreguntaRecordUncheckedUpdateInput>
    /**
     * Choose, which PreguntaRecord to update.
     */
    where: PreguntaRecordWhereUniqueInput
  }

  /**
   * PreguntaRecord updateMany
   */
  export type PreguntaRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreguntaRecords.
     */
    data: XOR<PreguntaRecordUpdateManyMutationInput, PreguntaRecordUncheckedUpdateManyInput>
    /**
     * Filter which PreguntaRecords to update
     */
    where?: PreguntaRecordWhereInput
    /**
     * Limit how many PreguntaRecords to update.
     */
    limit?: number
  }

  /**
   * PreguntaRecord updateManyAndReturn
   */
  export type PreguntaRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * The data used to update PreguntaRecords.
     */
    data: XOR<PreguntaRecordUpdateManyMutationInput, PreguntaRecordUncheckedUpdateManyInput>
    /**
     * Filter which PreguntaRecords to update
     */
    where?: PreguntaRecordWhereInput
    /**
     * Limit how many PreguntaRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreguntaRecord upsert
   */
  export type PreguntaRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PreguntaRecord to update in case it exists.
     */
    where: PreguntaRecordWhereUniqueInput
    /**
     * In case the PreguntaRecord found by the `where` argument doesn't exist, create a new PreguntaRecord with this data.
     */
    create: XOR<PreguntaRecordCreateInput, PreguntaRecordUncheckedCreateInput>
    /**
     * In case the PreguntaRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreguntaRecordUpdateInput, PreguntaRecordUncheckedUpdateInput>
  }

  /**
   * PreguntaRecord delete
   */
  export type PreguntaRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
    /**
     * Filter which PreguntaRecord to delete.
     */
    where: PreguntaRecordWhereUniqueInput
  }

  /**
   * PreguntaRecord deleteMany
   */
  export type PreguntaRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreguntaRecords to delete
     */
    where?: PreguntaRecordWhereInput
    /**
     * Limit how many PreguntaRecords to delete.
     */
    limit?: number
  }

  /**
   * PreguntaRecord without action
   */
  export type PreguntaRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaRecord
     */
    select?: PreguntaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreguntaRecord
     */
    omit?: PreguntaRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaRecordInclude<ExtArgs> | null
  }


  /**
   * Model IntentoRecord
   */

  export type AggregateIntentoRecord = {
    _count: IntentoRecordCountAggregateOutputType | null
    _avg: IntentoRecordAvgAggregateOutputType | null
    _sum: IntentoRecordSumAggregateOutputType | null
    _min: IntentoRecordMinAggregateOutputType | null
    _max: IntentoRecordMaxAggregateOutputType | null
  }

  export type IntentoRecordAvgAggregateOutputType = {
    tiempoMs: number | null
    thetaAlumno: number | null
    thetaPregunta: number | null
  }

  export type IntentoRecordSumAggregateOutputType = {
    tiempoMs: number | null
    thetaAlumno: number | null
    thetaPregunta: number | null
  }

  export type IntentoRecordMinAggregateOutputType = {
    id: string | null
    creadoEn: Date | null
    alumnoId: string | null
    preguntaId: string | null
    temaId: string | null
    asignaturaId: string | null
    resultado: string | null
    tiempoMs: number | null
    modo: string | null
    perfil: string | null
    thetaAlumno: number | null
    thetaPregunta: number | null
  }

  export type IntentoRecordMaxAggregateOutputType = {
    id: string | null
    creadoEn: Date | null
    alumnoId: string | null
    preguntaId: string | null
    temaId: string | null
    asignaturaId: string | null
    resultado: string | null
    tiempoMs: number | null
    modo: string | null
    perfil: string | null
    thetaAlumno: number | null
    thetaPregunta: number | null
  }

  export type IntentoRecordCountAggregateOutputType = {
    id: number
    creadoEn: number
    alumnoId: number
    preguntaId: number
    temaId: number
    asignaturaId: number
    resultado: number
    tiempoMs: number
    modo: number
    perfil: number
    thetaAlumno: number
    thetaPregunta: number
    _all: number
  }


  export type IntentoRecordAvgAggregateInputType = {
    tiempoMs?: true
    thetaAlumno?: true
    thetaPregunta?: true
  }

  export type IntentoRecordSumAggregateInputType = {
    tiempoMs?: true
    thetaAlumno?: true
    thetaPregunta?: true
  }

  export type IntentoRecordMinAggregateInputType = {
    id?: true
    creadoEn?: true
    alumnoId?: true
    preguntaId?: true
    temaId?: true
    asignaturaId?: true
    resultado?: true
    tiempoMs?: true
    modo?: true
    perfil?: true
    thetaAlumno?: true
    thetaPregunta?: true
  }

  export type IntentoRecordMaxAggregateInputType = {
    id?: true
    creadoEn?: true
    alumnoId?: true
    preguntaId?: true
    temaId?: true
    asignaturaId?: true
    resultado?: true
    tiempoMs?: true
    modo?: true
    perfil?: true
    thetaAlumno?: true
    thetaPregunta?: true
  }

  export type IntentoRecordCountAggregateInputType = {
    id?: true
    creadoEn?: true
    alumnoId?: true
    preguntaId?: true
    temaId?: true
    asignaturaId?: true
    resultado?: true
    tiempoMs?: true
    modo?: true
    perfil?: true
    thetaAlumno?: true
    thetaPregunta?: true
    _all?: true
  }

  export type IntentoRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntentoRecord to aggregate.
     */
    where?: IntentoRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntentoRecords to fetch.
     */
    orderBy?: IntentoRecordOrderByWithRelationInput | IntentoRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntentoRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntentoRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntentoRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntentoRecords
    **/
    _count?: true | IntentoRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntentoRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntentoRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntentoRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntentoRecordMaxAggregateInputType
  }

  export type GetIntentoRecordAggregateType<T extends IntentoRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateIntentoRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntentoRecord[P]>
      : GetScalarType<T[P], AggregateIntentoRecord[P]>
  }




  export type IntentoRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntentoRecordWhereInput
    orderBy?: IntentoRecordOrderByWithAggregationInput | IntentoRecordOrderByWithAggregationInput[]
    by: IntentoRecordScalarFieldEnum[] | IntentoRecordScalarFieldEnum
    having?: IntentoRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntentoRecordCountAggregateInputType | true
    _avg?: IntentoRecordAvgAggregateInputType
    _sum?: IntentoRecordSumAggregateInputType
    _min?: IntentoRecordMinAggregateInputType
    _max?: IntentoRecordMaxAggregateInputType
  }

  export type IntentoRecordGroupByOutputType = {
    id: string
    creadoEn: Date
    alumnoId: string
    preguntaId: string
    temaId: string
    asignaturaId: string
    resultado: string
    tiempoMs: number
    modo: string
    perfil: string
    thetaAlumno: number | null
    thetaPregunta: number | null
    _count: IntentoRecordCountAggregateOutputType | null
    _avg: IntentoRecordAvgAggregateOutputType | null
    _sum: IntentoRecordSumAggregateOutputType | null
    _min: IntentoRecordMinAggregateOutputType | null
    _max: IntentoRecordMaxAggregateOutputType | null
  }

  type GetIntentoRecordGroupByPayload<T extends IntentoRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntentoRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntentoRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntentoRecordGroupByOutputType[P]>
            : GetScalarType<T[P], IntentoRecordGroupByOutputType[P]>
        }
      >
    >


  export type IntentoRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creadoEn?: boolean
    alumnoId?: boolean
    preguntaId?: boolean
    temaId?: boolean
    asignaturaId?: boolean
    resultado?: boolean
    tiempoMs?: boolean
    modo?: boolean
    perfil?: boolean
    thetaAlumno?: boolean
    thetaPregunta?: boolean
  }, ExtArgs["result"]["intentoRecord"]>

  export type IntentoRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creadoEn?: boolean
    alumnoId?: boolean
    preguntaId?: boolean
    temaId?: boolean
    asignaturaId?: boolean
    resultado?: boolean
    tiempoMs?: boolean
    modo?: boolean
    perfil?: boolean
    thetaAlumno?: boolean
    thetaPregunta?: boolean
  }, ExtArgs["result"]["intentoRecord"]>

  export type IntentoRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creadoEn?: boolean
    alumnoId?: boolean
    preguntaId?: boolean
    temaId?: boolean
    asignaturaId?: boolean
    resultado?: boolean
    tiempoMs?: boolean
    modo?: boolean
    perfil?: boolean
    thetaAlumno?: boolean
    thetaPregunta?: boolean
  }, ExtArgs["result"]["intentoRecord"]>

  export type IntentoRecordSelectScalar = {
    id?: boolean
    creadoEn?: boolean
    alumnoId?: boolean
    preguntaId?: boolean
    temaId?: boolean
    asignaturaId?: boolean
    resultado?: boolean
    tiempoMs?: boolean
    modo?: boolean
    perfil?: boolean
    thetaAlumno?: boolean
    thetaPregunta?: boolean
  }

  export type IntentoRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creadoEn" | "alumnoId" | "preguntaId" | "temaId" | "asignaturaId" | "resultado" | "tiempoMs" | "modo" | "perfil" | "thetaAlumno" | "thetaPregunta", ExtArgs["result"]["intentoRecord"]>

  export type $IntentoRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntentoRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creadoEn: Date
      alumnoId: string
      preguntaId: string
      temaId: string
      asignaturaId: string
      resultado: string
      tiempoMs: number
      modo: string
      perfil: string
      thetaAlumno: number | null
      thetaPregunta: number | null
    }, ExtArgs["result"]["intentoRecord"]>
    composites: {}
  }

  type IntentoRecordGetPayload<S extends boolean | null | undefined | IntentoRecordDefaultArgs> = $Result.GetResult<Prisma.$IntentoRecordPayload, S>

  type IntentoRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntentoRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntentoRecordCountAggregateInputType | true
    }

  export interface IntentoRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntentoRecord'], meta: { name: 'IntentoRecord' } }
    /**
     * Find zero or one IntentoRecord that matches the filter.
     * @param {IntentoRecordFindUniqueArgs} args - Arguments to find a IntentoRecord
     * @example
     * // Get one IntentoRecord
     * const intentoRecord = await prisma.intentoRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntentoRecordFindUniqueArgs>(args: SelectSubset<T, IntentoRecordFindUniqueArgs<ExtArgs>>): Prisma__IntentoRecordClient<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntentoRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntentoRecordFindUniqueOrThrowArgs} args - Arguments to find a IntentoRecord
     * @example
     * // Get one IntentoRecord
     * const intentoRecord = await prisma.intentoRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntentoRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, IntentoRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntentoRecordClient<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntentoRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntentoRecordFindFirstArgs} args - Arguments to find a IntentoRecord
     * @example
     * // Get one IntentoRecord
     * const intentoRecord = await prisma.intentoRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntentoRecordFindFirstArgs>(args?: SelectSubset<T, IntentoRecordFindFirstArgs<ExtArgs>>): Prisma__IntentoRecordClient<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntentoRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntentoRecordFindFirstOrThrowArgs} args - Arguments to find a IntentoRecord
     * @example
     * // Get one IntentoRecord
     * const intentoRecord = await prisma.intentoRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntentoRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, IntentoRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntentoRecordClient<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntentoRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntentoRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntentoRecords
     * const intentoRecords = await prisma.intentoRecord.findMany()
     * 
     * // Get first 10 IntentoRecords
     * const intentoRecords = await prisma.intentoRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intentoRecordWithIdOnly = await prisma.intentoRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntentoRecordFindManyArgs>(args?: SelectSubset<T, IntentoRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntentoRecord.
     * @param {IntentoRecordCreateArgs} args - Arguments to create a IntentoRecord.
     * @example
     * // Create one IntentoRecord
     * const IntentoRecord = await prisma.intentoRecord.create({
     *   data: {
     *     // ... data to create a IntentoRecord
     *   }
     * })
     * 
     */
    create<T extends IntentoRecordCreateArgs>(args: SelectSubset<T, IntentoRecordCreateArgs<ExtArgs>>): Prisma__IntentoRecordClient<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntentoRecords.
     * @param {IntentoRecordCreateManyArgs} args - Arguments to create many IntentoRecords.
     * @example
     * // Create many IntentoRecords
     * const intentoRecord = await prisma.intentoRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntentoRecordCreateManyArgs>(args?: SelectSubset<T, IntentoRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntentoRecords and returns the data saved in the database.
     * @param {IntentoRecordCreateManyAndReturnArgs} args - Arguments to create many IntentoRecords.
     * @example
     * // Create many IntentoRecords
     * const intentoRecord = await prisma.intentoRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntentoRecords and only return the `id`
     * const intentoRecordWithIdOnly = await prisma.intentoRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntentoRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, IntentoRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntentoRecord.
     * @param {IntentoRecordDeleteArgs} args - Arguments to delete one IntentoRecord.
     * @example
     * // Delete one IntentoRecord
     * const IntentoRecord = await prisma.intentoRecord.delete({
     *   where: {
     *     // ... filter to delete one IntentoRecord
     *   }
     * })
     * 
     */
    delete<T extends IntentoRecordDeleteArgs>(args: SelectSubset<T, IntentoRecordDeleteArgs<ExtArgs>>): Prisma__IntentoRecordClient<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntentoRecord.
     * @param {IntentoRecordUpdateArgs} args - Arguments to update one IntentoRecord.
     * @example
     * // Update one IntentoRecord
     * const intentoRecord = await prisma.intentoRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntentoRecordUpdateArgs>(args: SelectSubset<T, IntentoRecordUpdateArgs<ExtArgs>>): Prisma__IntentoRecordClient<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntentoRecords.
     * @param {IntentoRecordDeleteManyArgs} args - Arguments to filter IntentoRecords to delete.
     * @example
     * // Delete a few IntentoRecords
     * const { count } = await prisma.intentoRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntentoRecordDeleteManyArgs>(args?: SelectSubset<T, IntentoRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntentoRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntentoRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntentoRecords
     * const intentoRecord = await prisma.intentoRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntentoRecordUpdateManyArgs>(args: SelectSubset<T, IntentoRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntentoRecords and returns the data updated in the database.
     * @param {IntentoRecordUpdateManyAndReturnArgs} args - Arguments to update many IntentoRecords.
     * @example
     * // Update many IntentoRecords
     * const intentoRecord = await prisma.intentoRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntentoRecords and only return the `id`
     * const intentoRecordWithIdOnly = await prisma.intentoRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends IntentoRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, IntentoRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntentoRecord.
     * @param {IntentoRecordUpsertArgs} args - Arguments to update or create a IntentoRecord.
     * @example
     * // Update or create a IntentoRecord
     * const intentoRecord = await prisma.intentoRecord.upsert({
     *   create: {
     *     // ... data to create a IntentoRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntentoRecord we want to update
     *   }
     * })
     */
    upsert<T extends IntentoRecordUpsertArgs>(args: SelectSubset<T, IntentoRecordUpsertArgs<ExtArgs>>): Prisma__IntentoRecordClient<$Result.GetResult<Prisma.$IntentoRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntentoRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntentoRecordCountArgs} args - Arguments to filter IntentoRecords to count.
     * @example
     * // Count the number of IntentoRecords
     * const count = await prisma.intentoRecord.count({
     *   where: {
     *     // ... the filter for the IntentoRecords we want to count
     *   }
     * })
    **/
    count<T extends IntentoRecordCountArgs>(
      args?: Subset<T, IntentoRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntentoRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntentoRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntentoRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntentoRecordAggregateArgs>(args: Subset<T, IntentoRecordAggregateArgs>): Prisma.PrismaPromise<GetIntentoRecordAggregateType<T>>

    /**
     * Group by IntentoRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntentoRecordGroupByArgs} args - Group by arguments.
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
      T extends IntentoRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntentoRecordGroupByArgs['orderBy'] }
        : { orderBy?: IntentoRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntentoRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntentoRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntentoRecord model
   */
  readonly fields: IntentoRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntentoRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntentoRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IntentoRecord model
   */
  interface IntentoRecordFieldRefs {
    readonly id: FieldRef<"IntentoRecord", 'String'>
    readonly creadoEn: FieldRef<"IntentoRecord", 'DateTime'>
    readonly alumnoId: FieldRef<"IntentoRecord", 'String'>
    readonly preguntaId: FieldRef<"IntentoRecord", 'String'>
    readonly temaId: FieldRef<"IntentoRecord", 'String'>
    readonly asignaturaId: FieldRef<"IntentoRecord", 'String'>
    readonly resultado: FieldRef<"IntentoRecord", 'String'>
    readonly tiempoMs: FieldRef<"IntentoRecord", 'Int'>
    readonly modo: FieldRef<"IntentoRecord", 'String'>
    readonly perfil: FieldRef<"IntentoRecord", 'String'>
    readonly thetaAlumno: FieldRef<"IntentoRecord", 'Float'>
    readonly thetaPregunta: FieldRef<"IntentoRecord", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * IntentoRecord findUnique
   */
  export type IntentoRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * Filter, which IntentoRecord to fetch.
     */
    where: IntentoRecordWhereUniqueInput
  }

  /**
   * IntentoRecord findUniqueOrThrow
   */
  export type IntentoRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * Filter, which IntentoRecord to fetch.
     */
    where: IntentoRecordWhereUniqueInput
  }

  /**
   * IntentoRecord findFirst
   */
  export type IntentoRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * Filter, which IntentoRecord to fetch.
     */
    where?: IntentoRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntentoRecords to fetch.
     */
    orderBy?: IntentoRecordOrderByWithRelationInput | IntentoRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntentoRecords.
     */
    cursor?: IntentoRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntentoRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntentoRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntentoRecords.
     */
    distinct?: IntentoRecordScalarFieldEnum | IntentoRecordScalarFieldEnum[]
  }

  /**
   * IntentoRecord findFirstOrThrow
   */
  export type IntentoRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * Filter, which IntentoRecord to fetch.
     */
    where?: IntentoRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntentoRecords to fetch.
     */
    orderBy?: IntentoRecordOrderByWithRelationInput | IntentoRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntentoRecords.
     */
    cursor?: IntentoRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntentoRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntentoRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntentoRecords.
     */
    distinct?: IntentoRecordScalarFieldEnum | IntentoRecordScalarFieldEnum[]
  }

  /**
   * IntentoRecord findMany
   */
  export type IntentoRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * Filter, which IntentoRecords to fetch.
     */
    where?: IntentoRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntentoRecords to fetch.
     */
    orderBy?: IntentoRecordOrderByWithRelationInput | IntentoRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntentoRecords.
     */
    cursor?: IntentoRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntentoRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntentoRecords.
     */
    skip?: number
    distinct?: IntentoRecordScalarFieldEnum | IntentoRecordScalarFieldEnum[]
  }

  /**
   * IntentoRecord create
   */
  export type IntentoRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a IntentoRecord.
     */
    data: XOR<IntentoRecordCreateInput, IntentoRecordUncheckedCreateInput>
  }

  /**
   * IntentoRecord createMany
   */
  export type IntentoRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntentoRecords.
     */
    data: IntentoRecordCreateManyInput | IntentoRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntentoRecord createManyAndReturn
   */
  export type IntentoRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * The data used to create many IntentoRecords.
     */
    data: IntentoRecordCreateManyInput | IntentoRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntentoRecord update
   */
  export type IntentoRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a IntentoRecord.
     */
    data: XOR<IntentoRecordUpdateInput, IntentoRecordUncheckedUpdateInput>
    /**
     * Choose, which IntentoRecord to update.
     */
    where: IntentoRecordWhereUniqueInput
  }

  /**
   * IntentoRecord updateMany
   */
  export type IntentoRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntentoRecords.
     */
    data: XOR<IntentoRecordUpdateManyMutationInput, IntentoRecordUncheckedUpdateManyInput>
    /**
     * Filter which IntentoRecords to update
     */
    where?: IntentoRecordWhereInput
    /**
     * Limit how many IntentoRecords to update.
     */
    limit?: number
  }

  /**
   * IntentoRecord updateManyAndReturn
   */
  export type IntentoRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * The data used to update IntentoRecords.
     */
    data: XOR<IntentoRecordUpdateManyMutationInput, IntentoRecordUncheckedUpdateManyInput>
    /**
     * Filter which IntentoRecords to update
     */
    where?: IntentoRecordWhereInput
    /**
     * Limit how many IntentoRecords to update.
     */
    limit?: number
  }

  /**
   * IntentoRecord upsert
   */
  export type IntentoRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the IntentoRecord to update in case it exists.
     */
    where: IntentoRecordWhereUniqueInput
    /**
     * In case the IntentoRecord found by the `where` argument doesn't exist, create a new IntentoRecord with this data.
     */
    create: XOR<IntentoRecordCreateInput, IntentoRecordUncheckedCreateInput>
    /**
     * In case the IntentoRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntentoRecordUpdateInput, IntentoRecordUncheckedUpdateInput>
  }

  /**
   * IntentoRecord delete
   */
  export type IntentoRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
    /**
     * Filter which IntentoRecord to delete.
     */
    where: IntentoRecordWhereUniqueInput
  }

  /**
   * IntentoRecord deleteMany
   */
  export type IntentoRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntentoRecords to delete
     */
    where?: IntentoRecordWhereInput
    /**
     * Limit how many IntentoRecords to delete.
     */
    limit?: number
  }

  /**
   * IntentoRecord without action
   */
  export type IntentoRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentoRecord
     */
    select?: IntentoRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntentoRecord
     */
    omit?: IntentoRecordOmit<ExtArgs> | null
  }


  /**
   * Model ProgresoTemaRecord
   */

  export type AggregateProgresoTemaRecord = {
    _count: ProgresoTemaRecordCountAggregateOutputType | null
    _avg: ProgresoTemaRecordAvgAggregateOutputType | null
    _sum: ProgresoTemaRecordSumAggregateOutputType | null
    _min: ProgresoTemaRecordMinAggregateOutputType | null
    _max: ProgresoTemaRecordMaxAggregateOutputType | null
  }

  export type ProgresoTemaRecordAvgAggregateOutputType = {
    rachaActual: number | null
    mejorRacha: number | null
    intentosEnTema: number | null
    theta: number | null
  }

  export type ProgresoTemaRecordSumAggregateOutputType = {
    rachaActual: number | null
    mejorRacha: number | null
    intentosEnTema: number | null
    theta: number | null
  }

  export type ProgresoTemaRecordMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    alumnoId: string | null
    temaId: string | null
    rachaActual: number | null
    mejorRacha: number | null
    intentosEnTema: number | null
    practicado: boolean | null
    consolidado: boolean | null
    theta: number | null
    ultimoIntentoEn: Date | null
  }

  export type ProgresoTemaRecordMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    alumnoId: string | null
    temaId: string | null
    rachaActual: number | null
    mejorRacha: number | null
    intentosEnTema: number | null
    practicado: boolean | null
    consolidado: boolean | null
    theta: number | null
    ultimoIntentoEn: Date | null
  }

  export type ProgresoTemaRecordCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    alumnoId: number
    temaId: number
    rachaActual: number
    mejorRacha: number
    intentosEnTema: number
    practicado: number
    consolidado: number
    theta: number
    ultimoIntentoEn: number
    _all: number
  }


  export type ProgresoTemaRecordAvgAggregateInputType = {
    rachaActual?: true
    mejorRacha?: true
    intentosEnTema?: true
    theta?: true
  }

  export type ProgresoTemaRecordSumAggregateInputType = {
    rachaActual?: true
    mejorRacha?: true
    intentosEnTema?: true
    theta?: true
  }

  export type ProgresoTemaRecordMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    alumnoId?: true
    temaId?: true
    rachaActual?: true
    mejorRacha?: true
    intentosEnTema?: true
    practicado?: true
    consolidado?: true
    theta?: true
    ultimoIntentoEn?: true
  }

  export type ProgresoTemaRecordMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    alumnoId?: true
    temaId?: true
    rachaActual?: true
    mejorRacha?: true
    intentosEnTema?: true
    practicado?: true
    consolidado?: true
    theta?: true
    ultimoIntentoEn?: true
  }

  export type ProgresoTemaRecordCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    alumnoId?: true
    temaId?: true
    rachaActual?: true
    mejorRacha?: true
    intentosEnTema?: true
    practicado?: true
    consolidado?: true
    theta?: true
    ultimoIntentoEn?: true
    _all?: true
  }

  export type ProgresoTemaRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgresoTemaRecord to aggregate.
     */
    where?: ProgresoTemaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoTemaRecords to fetch.
     */
    orderBy?: ProgresoTemaRecordOrderByWithRelationInput | ProgresoTemaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgresoTemaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoTemaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoTemaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgresoTemaRecords
    **/
    _count?: true | ProgresoTemaRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgresoTemaRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgresoTemaRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresoTemaRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresoTemaRecordMaxAggregateInputType
  }

  export type GetProgresoTemaRecordAggregateType<T extends ProgresoTemaRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateProgresoTemaRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgresoTemaRecord[P]>
      : GetScalarType<T[P], AggregateProgresoTemaRecord[P]>
  }




  export type ProgresoTemaRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoTemaRecordWhereInput
    orderBy?: ProgresoTemaRecordOrderByWithAggregationInput | ProgresoTemaRecordOrderByWithAggregationInput[]
    by: ProgresoTemaRecordScalarFieldEnum[] | ProgresoTemaRecordScalarFieldEnum
    having?: ProgresoTemaRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresoTemaRecordCountAggregateInputType | true
    _avg?: ProgresoTemaRecordAvgAggregateInputType
    _sum?: ProgresoTemaRecordSumAggregateInputType
    _min?: ProgresoTemaRecordMinAggregateInputType
    _max?: ProgresoTemaRecordMaxAggregateInputType
  }

  export type ProgresoTemaRecordGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    alumnoId: string
    temaId: string
    rachaActual: number
    mejorRacha: number
    intentosEnTema: number
    practicado: boolean
    consolidado: boolean
    theta: number
    ultimoIntentoEn: Date | null
    _count: ProgresoTemaRecordCountAggregateOutputType | null
    _avg: ProgresoTemaRecordAvgAggregateOutputType | null
    _sum: ProgresoTemaRecordSumAggregateOutputType | null
    _min: ProgresoTemaRecordMinAggregateOutputType | null
    _max: ProgresoTemaRecordMaxAggregateOutputType | null
  }

  type GetProgresoTemaRecordGroupByPayload<T extends ProgresoTemaRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresoTemaRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresoTemaRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresoTemaRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresoTemaRecordGroupByOutputType[P]>
        }
      >
    >


  export type ProgresoTemaRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumnoId?: boolean
    temaId?: boolean
    rachaActual?: boolean
    mejorRacha?: boolean
    intentosEnTema?: boolean
    practicado?: boolean
    consolidado?: boolean
    theta?: boolean
    ultimoIntentoEn?: boolean
  }, ExtArgs["result"]["progresoTemaRecord"]>

  export type ProgresoTemaRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumnoId?: boolean
    temaId?: boolean
    rachaActual?: boolean
    mejorRacha?: boolean
    intentosEnTema?: boolean
    practicado?: boolean
    consolidado?: boolean
    theta?: boolean
    ultimoIntentoEn?: boolean
  }, ExtArgs["result"]["progresoTemaRecord"]>

  export type ProgresoTemaRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumnoId?: boolean
    temaId?: boolean
    rachaActual?: boolean
    mejorRacha?: boolean
    intentosEnTema?: boolean
    practicado?: boolean
    consolidado?: boolean
    theta?: boolean
    ultimoIntentoEn?: boolean
  }, ExtArgs["result"]["progresoTemaRecord"]>

  export type ProgresoTemaRecordSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alumnoId?: boolean
    temaId?: boolean
    rachaActual?: boolean
    mejorRacha?: boolean
    intentosEnTema?: boolean
    practicado?: boolean
    consolidado?: boolean
    theta?: boolean
    ultimoIntentoEn?: boolean
  }

  export type ProgresoTemaRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "alumnoId" | "temaId" | "rachaActual" | "mejorRacha" | "intentosEnTema" | "practicado" | "consolidado" | "theta" | "ultimoIntentoEn", ExtArgs["result"]["progresoTemaRecord"]>

  export type $ProgresoTemaRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgresoTemaRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      alumnoId: string
      temaId: string
      rachaActual: number
      mejorRacha: number
      intentosEnTema: number
      practicado: boolean
      consolidado: boolean
      theta: number
      ultimoIntentoEn: Date | null
    }, ExtArgs["result"]["progresoTemaRecord"]>
    composites: {}
  }

  type ProgresoTemaRecordGetPayload<S extends boolean | null | undefined | ProgresoTemaRecordDefaultArgs> = $Result.GetResult<Prisma.$ProgresoTemaRecordPayload, S>

  type ProgresoTemaRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgresoTemaRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgresoTemaRecordCountAggregateInputType | true
    }

  export interface ProgresoTemaRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgresoTemaRecord'], meta: { name: 'ProgresoTemaRecord' } }
    /**
     * Find zero or one ProgresoTemaRecord that matches the filter.
     * @param {ProgresoTemaRecordFindUniqueArgs} args - Arguments to find a ProgresoTemaRecord
     * @example
     * // Get one ProgresoTemaRecord
     * const progresoTemaRecord = await prisma.progresoTemaRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgresoTemaRecordFindUniqueArgs>(args: SelectSubset<T, ProgresoTemaRecordFindUniqueArgs<ExtArgs>>): Prisma__ProgresoTemaRecordClient<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgresoTemaRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgresoTemaRecordFindUniqueOrThrowArgs} args - Arguments to find a ProgresoTemaRecord
     * @example
     * // Get one ProgresoTemaRecord
     * const progresoTemaRecord = await prisma.progresoTemaRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgresoTemaRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgresoTemaRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgresoTemaRecordClient<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgresoTemaRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoTemaRecordFindFirstArgs} args - Arguments to find a ProgresoTemaRecord
     * @example
     * // Get one ProgresoTemaRecord
     * const progresoTemaRecord = await prisma.progresoTemaRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgresoTemaRecordFindFirstArgs>(args?: SelectSubset<T, ProgresoTemaRecordFindFirstArgs<ExtArgs>>): Prisma__ProgresoTemaRecordClient<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgresoTemaRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoTemaRecordFindFirstOrThrowArgs} args - Arguments to find a ProgresoTemaRecord
     * @example
     * // Get one ProgresoTemaRecord
     * const progresoTemaRecord = await prisma.progresoTemaRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgresoTemaRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgresoTemaRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgresoTemaRecordClient<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgresoTemaRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoTemaRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgresoTemaRecords
     * const progresoTemaRecords = await prisma.progresoTemaRecord.findMany()
     * 
     * // Get first 10 ProgresoTemaRecords
     * const progresoTemaRecords = await prisma.progresoTemaRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progresoTemaRecordWithIdOnly = await prisma.progresoTemaRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgresoTemaRecordFindManyArgs>(args?: SelectSubset<T, ProgresoTemaRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgresoTemaRecord.
     * @param {ProgresoTemaRecordCreateArgs} args - Arguments to create a ProgresoTemaRecord.
     * @example
     * // Create one ProgresoTemaRecord
     * const ProgresoTemaRecord = await prisma.progresoTemaRecord.create({
     *   data: {
     *     // ... data to create a ProgresoTemaRecord
     *   }
     * })
     * 
     */
    create<T extends ProgresoTemaRecordCreateArgs>(args: SelectSubset<T, ProgresoTemaRecordCreateArgs<ExtArgs>>): Prisma__ProgresoTemaRecordClient<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgresoTemaRecords.
     * @param {ProgresoTemaRecordCreateManyArgs} args - Arguments to create many ProgresoTemaRecords.
     * @example
     * // Create many ProgresoTemaRecords
     * const progresoTemaRecord = await prisma.progresoTemaRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgresoTemaRecordCreateManyArgs>(args?: SelectSubset<T, ProgresoTemaRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgresoTemaRecords and returns the data saved in the database.
     * @param {ProgresoTemaRecordCreateManyAndReturnArgs} args - Arguments to create many ProgresoTemaRecords.
     * @example
     * // Create many ProgresoTemaRecords
     * const progresoTemaRecord = await prisma.progresoTemaRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgresoTemaRecords and only return the `id`
     * const progresoTemaRecordWithIdOnly = await prisma.progresoTemaRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgresoTemaRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgresoTemaRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProgresoTemaRecord.
     * @param {ProgresoTemaRecordDeleteArgs} args - Arguments to delete one ProgresoTemaRecord.
     * @example
     * // Delete one ProgresoTemaRecord
     * const ProgresoTemaRecord = await prisma.progresoTemaRecord.delete({
     *   where: {
     *     // ... filter to delete one ProgresoTemaRecord
     *   }
     * })
     * 
     */
    delete<T extends ProgresoTemaRecordDeleteArgs>(args: SelectSubset<T, ProgresoTemaRecordDeleteArgs<ExtArgs>>): Prisma__ProgresoTemaRecordClient<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgresoTemaRecord.
     * @param {ProgresoTemaRecordUpdateArgs} args - Arguments to update one ProgresoTemaRecord.
     * @example
     * // Update one ProgresoTemaRecord
     * const progresoTemaRecord = await prisma.progresoTemaRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgresoTemaRecordUpdateArgs>(args: SelectSubset<T, ProgresoTemaRecordUpdateArgs<ExtArgs>>): Prisma__ProgresoTemaRecordClient<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgresoTemaRecords.
     * @param {ProgresoTemaRecordDeleteManyArgs} args - Arguments to filter ProgresoTemaRecords to delete.
     * @example
     * // Delete a few ProgresoTemaRecords
     * const { count } = await prisma.progresoTemaRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgresoTemaRecordDeleteManyArgs>(args?: SelectSubset<T, ProgresoTemaRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgresoTemaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoTemaRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgresoTemaRecords
     * const progresoTemaRecord = await prisma.progresoTemaRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgresoTemaRecordUpdateManyArgs>(args: SelectSubset<T, ProgresoTemaRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgresoTemaRecords and returns the data updated in the database.
     * @param {ProgresoTemaRecordUpdateManyAndReturnArgs} args - Arguments to update many ProgresoTemaRecords.
     * @example
     * // Update many ProgresoTemaRecords
     * const progresoTemaRecord = await prisma.progresoTemaRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProgresoTemaRecords and only return the `id`
     * const progresoTemaRecordWithIdOnly = await prisma.progresoTemaRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgresoTemaRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgresoTemaRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProgresoTemaRecord.
     * @param {ProgresoTemaRecordUpsertArgs} args - Arguments to update or create a ProgresoTemaRecord.
     * @example
     * // Update or create a ProgresoTemaRecord
     * const progresoTemaRecord = await prisma.progresoTemaRecord.upsert({
     *   create: {
     *     // ... data to create a ProgresoTemaRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgresoTemaRecord we want to update
     *   }
     * })
     */
    upsert<T extends ProgresoTemaRecordUpsertArgs>(args: SelectSubset<T, ProgresoTemaRecordUpsertArgs<ExtArgs>>): Prisma__ProgresoTemaRecordClient<$Result.GetResult<Prisma.$ProgresoTemaRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgresoTemaRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoTemaRecordCountArgs} args - Arguments to filter ProgresoTemaRecords to count.
     * @example
     * // Count the number of ProgresoTemaRecords
     * const count = await prisma.progresoTemaRecord.count({
     *   where: {
     *     // ... the filter for the ProgresoTemaRecords we want to count
     *   }
     * })
    **/
    count<T extends ProgresoTemaRecordCountArgs>(
      args?: Subset<T, ProgresoTemaRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresoTemaRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgresoTemaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoTemaRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgresoTemaRecordAggregateArgs>(args: Subset<T, ProgresoTemaRecordAggregateArgs>): Prisma.PrismaPromise<GetProgresoTemaRecordAggregateType<T>>

    /**
     * Group by ProgresoTemaRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoTemaRecordGroupByArgs} args - Group by arguments.
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
      T extends ProgresoTemaRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgresoTemaRecordGroupByArgs['orderBy'] }
        : { orderBy?: ProgresoTemaRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgresoTemaRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresoTemaRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgresoTemaRecord model
   */
  readonly fields: ProgresoTemaRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgresoTemaRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgresoTemaRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProgresoTemaRecord model
   */
  interface ProgresoTemaRecordFieldRefs {
    readonly id: FieldRef<"ProgresoTemaRecord", 'String'>
    readonly createdAt: FieldRef<"ProgresoTemaRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgresoTemaRecord", 'DateTime'>
    readonly alumnoId: FieldRef<"ProgresoTemaRecord", 'String'>
    readonly temaId: FieldRef<"ProgresoTemaRecord", 'String'>
    readonly rachaActual: FieldRef<"ProgresoTemaRecord", 'Int'>
    readonly mejorRacha: FieldRef<"ProgresoTemaRecord", 'Int'>
    readonly intentosEnTema: FieldRef<"ProgresoTemaRecord", 'Int'>
    readonly practicado: FieldRef<"ProgresoTemaRecord", 'Boolean'>
    readonly consolidado: FieldRef<"ProgresoTemaRecord", 'Boolean'>
    readonly theta: FieldRef<"ProgresoTemaRecord", 'Float'>
    readonly ultimoIntentoEn: FieldRef<"ProgresoTemaRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgresoTemaRecord findUnique
   */
  export type ProgresoTemaRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * Filter, which ProgresoTemaRecord to fetch.
     */
    where: ProgresoTemaRecordWhereUniqueInput
  }

  /**
   * ProgresoTemaRecord findUniqueOrThrow
   */
  export type ProgresoTemaRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * Filter, which ProgresoTemaRecord to fetch.
     */
    where: ProgresoTemaRecordWhereUniqueInput
  }

  /**
   * ProgresoTemaRecord findFirst
   */
  export type ProgresoTemaRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * Filter, which ProgresoTemaRecord to fetch.
     */
    where?: ProgresoTemaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoTemaRecords to fetch.
     */
    orderBy?: ProgresoTemaRecordOrderByWithRelationInput | ProgresoTemaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgresoTemaRecords.
     */
    cursor?: ProgresoTemaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoTemaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoTemaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgresoTemaRecords.
     */
    distinct?: ProgresoTemaRecordScalarFieldEnum | ProgresoTemaRecordScalarFieldEnum[]
  }

  /**
   * ProgresoTemaRecord findFirstOrThrow
   */
  export type ProgresoTemaRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * Filter, which ProgresoTemaRecord to fetch.
     */
    where?: ProgresoTemaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoTemaRecords to fetch.
     */
    orderBy?: ProgresoTemaRecordOrderByWithRelationInput | ProgresoTemaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgresoTemaRecords.
     */
    cursor?: ProgresoTemaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoTemaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoTemaRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgresoTemaRecords.
     */
    distinct?: ProgresoTemaRecordScalarFieldEnum | ProgresoTemaRecordScalarFieldEnum[]
  }

  /**
   * ProgresoTemaRecord findMany
   */
  export type ProgresoTemaRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * Filter, which ProgresoTemaRecords to fetch.
     */
    where?: ProgresoTemaRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoTemaRecords to fetch.
     */
    orderBy?: ProgresoTemaRecordOrderByWithRelationInput | ProgresoTemaRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgresoTemaRecords.
     */
    cursor?: ProgresoTemaRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoTemaRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoTemaRecords.
     */
    skip?: number
    distinct?: ProgresoTemaRecordScalarFieldEnum | ProgresoTemaRecordScalarFieldEnum[]
  }

  /**
   * ProgresoTemaRecord create
   */
  export type ProgresoTemaRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a ProgresoTemaRecord.
     */
    data: XOR<ProgresoTemaRecordCreateInput, ProgresoTemaRecordUncheckedCreateInput>
  }

  /**
   * ProgresoTemaRecord createMany
   */
  export type ProgresoTemaRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgresoTemaRecords.
     */
    data: ProgresoTemaRecordCreateManyInput | ProgresoTemaRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgresoTemaRecord createManyAndReturn
   */
  export type ProgresoTemaRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ProgresoTemaRecords.
     */
    data: ProgresoTemaRecordCreateManyInput | ProgresoTemaRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgresoTemaRecord update
   */
  export type ProgresoTemaRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a ProgresoTemaRecord.
     */
    data: XOR<ProgresoTemaRecordUpdateInput, ProgresoTemaRecordUncheckedUpdateInput>
    /**
     * Choose, which ProgresoTemaRecord to update.
     */
    where: ProgresoTemaRecordWhereUniqueInput
  }

  /**
   * ProgresoTemaRecord updateMany
   */
  export type ProgresoTemaRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgresoTemaRecords.
     */
    data: XOR<ProgresoTemaRecordUpdateManyMutationInput, ProgresoTemaRecordUncheckedUpdateManyInput>
    /**
     * Filter which ProgresoTemaRecords to update
     */
    where?: ProgresoTemaRecordWhereInput
    /**
     * Limit how many ProgresoTemaRecords to update.
     */
    limit?: number
  }

  /**
   * ProgresoTemaRecord updateManyAndReturn
   */
  export type ProgresoTemaRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * The data used to update ProgresoTemaRecords.
     */
    data: XOR<ProgresoTemaRecordUpdateManyMutationInput, ProgresoTemaRecordUncheckedUpdateManyInput>
    /**
     * Filter which ProgresoTemaRecords to update
     */
    where?: ProgresoTemaRecordWhereInput
    /**
     * Limit how many ProgresoTemaRecords to update.
     */
    limit?: number
  }

  /**
   * ProgresoTemaRecord upsert
   */
  export type ProgresoTemaRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the ProgresoTemaRecord to update in case it exists.
     */
    where: ProgresoTemaRecordWhereUniqueInput
    /**
     * In case the ProgresoTemaRecord found by the `where` argument doesn't exist, create a new ProgresoTemaRecord with this data.
     */
    create: XOR<ProgresoTemaRecordCreateInput, ProgresoTemaRecordUncheckedCreateInput>
    /**
     * In case the ProgresoTemaRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgresoTemaRecordUpdateInput, ProgresoTemaRecordUncheckedUpdateInput>
  }

  /**
   * ProgresoTemaRecord delete
   */
  export type ProgresoTemaRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
    /**
     * Filter which ProgresoTemaRecord to delete.
     */
    where: ProgresoTemaRecordWhereUniqueInput
  }

  /**
   * ProgresoTemaRecord deleteMany
   */
  export type ProgresoTemaRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgresoTemaRecords to delete
     */
    where?: ProgresoTemaRecordWhereInput
    /**
     * Limit how many ProgresoTemaRecords to delete.
     */
    limit?: number
  }

  /**
   * ProgresoTemaRecord without action
   */
  export type ProgresoTemaRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoTemaRecord
     */
    select?: ProgresoTemaRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgresoTemaRecord
     */
    omit?: ProgresoTemaRecordOmit<ExtArgs> | null
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


  export const AsignaturaRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    eje: 'eje',
    nombre: 'nombre',
    orden: 'orden'
  };

  export type AsignaturaRecordScalarFieldEnum = (typeof AsignaturaRecordScalarFieldEnum)[keyof typeof AsignaturaRecordScalarFieldEnum]


  export const TemaRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    asignaturaId: 'asignaturaId',
    romano: 'romano',
    nombre: 'nombre',
    orden: 'orden',
    bloque: 'bloque'
  };

  export type TemaRecordScalarFieldEnum = (typeof TemaRecordScalarFieldEnum)[keyof typeof TemaRecordScalarFieldEnum]


  export const PreguntaRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    temaId: 'temaId',
    enunciado: 'enunciado',
    alternativas: 'alternativas',
    claveCorrecta: 'claveCorrecta',
    solucion: 'solucion',
    fuente: 'fuente',
    esAncla: 'esAncla',
    dificultad: 'dificultad',
    vecesServida: 'vecesServida',
    activa: 'activa'
  };

  export type PreguntaRecordScalarFieldEnum = (typeof PreguntaRecordScalarFieldEnum)[keyof typeof PreguntaRecordScalarFieldEnum]


  export const IntentoRecordScalarFieldEnum: {
    id: 'id',
    creadoEn: 'creadoEn',
    alumnoId: 'alumnoId',
    preguntaId: 'preguntaId',
    temaId: 'temaId',
    asignaturaId: 'asignaturaId',
    resultado: 'resultado',
    tiempoMs: 'tiempoMs',
    modo: 'modo',
    perfil: 'perfil',
    thetaAlumno: 'thetaAlumno',
    thetaPregunta: 'thetaPregunta'
  };

  export type IntentoRecordScalarFieldEnum = (typeof IntentoRecordScalarFieldEnum)[keyof typeof IntentoRecordScalarFieldEnum]


  export const ProgresoTemaRecordScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    alumnoId: 'alumnoId',
    temaId: 'temaId',
    rachaActual: 'rachaActual',
    mejorRacha: 'mejorRacha',
    intentosEnTema: 'intentosEnTema',
    practicado: 'practicado',
    consolidado: 'consolidado',
    theta: 'theta',
    ultimoIntentoEn: 'ultimoIntentoEn'
  };

  export type ProgresoTemaRecordScalarFieldEnum = (typeof ProgresoTemaRecordScalarFieldEnum)[keyof typeof ProgresoTemaRecordScalarFieldEnum]


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

  export type AsignaturaRecordWhereInput = {
    AND?: AsignaturaRecordWhereInput | AsignaturaRecordWhereInput[]
    OR?: AsignaturaRecordWhereInput[]
    NOT?: AsignaturaRecordWhereInput | AsignaturaRecordWhereInput[]
    id?: StringFilter<"AsignaturaRecord"> | string
    createdAt?: DateTimeFilter<"AsignaturaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AsignaturaRecord"> | Date | string
    eje?: StringFilter<"AsignaturaRecord"> | string
    nombre?: StringFilter<"AsignaturaRecord"> | string
    orden?: IntFilter<"AsignaturaRecord"> | number
    temas?: TemaRecordListRelationFilter
  }

  export type AsignaturaRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eje?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    temas?: TemaRecordOrderByRelationAggregateInput
  }

  export type AsignaturaRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eje_nombre?: AsignaturaRecordEjeNombreCompoundUniqueInput
    AND?: AsignaturaRecordWhereInput | AsignaturaRecordWhereInput[]
    OR?: AsignaturaRecordWhereInput[]
    NOT?: AsignaturaRecordWhereInput | AsignaturaRecordWhereInput[]
    createdAt?: DateTimeFilter<"AsignaturaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AsignaturaRecord"> | Date | string
    eje?: StringFilter<"AsignaturaRecord"> | string
    nombre?: StringFilter<"AsignaturaRecord"> | string
    orden?: IntFilter<"AsignaturaRecord"> | number
    temas?: TemaRecordListRelationFilter
  }, "id" | "eje_nombre">

  export type AsignaturaRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eje?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    _count?: AsignaturaRecordCountOrderByAggregateInput
    _avg?: AsignaturaRecordAvgOrderByAggregateInput
    _max?: AsignaturaRecordMaxOrderByAggregateInput
    _min?: AsignaturaRecordMinOrderByAggregateInput
    _sum?: AsignaturaRecordSumOrderByAggregateInput
  }

  export type AsignaturaRecordScalarWhereWithAggregatesInput = {
    AND?: AsignaturaRecordScalarWhereWithAggregatesInput | AsignaturaRecordScalarWhereWithAggregatesInput[]
    OR?: AsignaturaRecordScalarWhereWithAggregatesInput[]
    NOT?: AsignaturaRecordScalarWhereWithAggregatesInput | AsignaturaRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AsignaturaRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AsignaturaRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AsignaturaRecord"> | Date | string
    eje?: StringWithAggregatesFilter<"AsignaturaRecord"> | string
    nombre?: StringWithAggregatesFilter<"AsignaturaRecord"> | string
    orden?: IntWithAggregatesFilter<"AsignaturaRecord"> | number
  }

  export type TemaRecordWhereInput = {
    AND?: TemaRecordWhereInput | TemaRecordWhereInput[]
    OR?: TemaRecordWhereInput[]
    NOT?: TemaRecordWhereInput | TemaRecordWhereInput[]
    id?: StringFilter<"TemaRecord"> | string
    createdAt?: DateTimeFilter<"TemaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TemaRecord"> | Date | string
    asignaturaId?: StringFilter<"TemaRecord"> | string
    romano?: StringFilter<"TemaRecord"> | string
    nombre?: StringFilter<"TemaRecord"> | string
    orden?: IntFilter<"TemaRecord"> | number
    bloque?: StringNullableFilter<"TemaRecord"> | string | null
    asignatura?: XOR<AsignaturaRecordScalarRelationFilter, AsignaturaRecordWhereInput>
    preguntas?: PreguntaRecordListRelationFilter
  }

  export type TemaRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignaturaId?: SortOrder
    romano?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    bloque?: SortOrderInput | SortOrder
    asignatura?: AsignaturaRecordOrderByWithRelationInput
    preguntas?: PreguntaRecordOrderByRelationAggregateInput
  }

  export type TemaRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    asignaturaId_orden?: TemaRecordAsignaturaIdOrdenCompoundUniqueInput
    AND?: TemaRecordWhereInput | TemaRecordWhereInput[]
    OR?: TemaRecordWhereInput[]
    NOT?: TemaRecordWhereInput | TemaRecordWhereInput[]
    createdAt?: DateTimeFilter<"TemaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TemaRecord"> | Date | string
    asignaturaId?: StringFilter<"TemaRecord"> | string
    romano?: StringFilter<"TemaRecord"> | string
    nombre?: StringFilter<"TemaRecord"> | string
    orden?: IntFilter<"TemaRecord"> | number
    bloque?: StringNullableFilter<"TemaRecord"> | string | null
    asignatura?: XOR<AsignaturaRecordScalarRelationFilter, AsignaturaRecordWhereInput>
    preguntas?: PreguntaRecordListRelationFilter
  }, "id" | "asignaturaId_orden">

  export type TemaRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignaturaId?: SortOrder
    romano?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    bloque?: SortOrderInput | SortOrder
    _count?: TemaRecordCountOrderByAggregateInput
    _avg?: TemaRecordAvgOrderByAggregateInput
    _max?: TemaRecordMaxOrderByAggregateInput
    _min?: TemaRecordMinOrderByAggregateInput
    _sum?: TemaRecordSumOrderByAggregateInput
  }

  export type TemaRecordScalarWhereWithAggregatesInput = {
    AND?: TemaRecordScalarWhereWithAggregatesInput | TemaRecordScalarWhereWithAggregatesInput[]
    OR?: TemaRecordScalarWhereWithAggregatesInput[]
    NOT?: TemaRecordScalarWhereWithAggregatesInput | TemaRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemaRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TemaRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemaRecord"> | Date | string
    asignaturaId?: StringWithAggregatesFilter<"TemaRecord"> | string
    romano?: StringWithAggregatesFilter<"TemaRecord"> | string
    nombre?: StringWithAggregatesFilter<"TemaRecord"> | string
    orden?: IntWithAggregatesFilter<"TemaRecord"> | number
    bloque?: StringNullableWithAggregatesFilter<"TemaRecord"> | string | null
  }

  export type PreguntaRecordWhereInput = {
    AND?: PreguntaRecordWhereInput | PreguntaRecordWhereInput[]
    OR?: PreguntaRecordWhereInput[]
    NOT?: PreguntaRecordWhereInput | PreguntaRecordWhereInput[]
    id?: StringFilter<"PreguntaRecord"> | string
    createdAt?: DateTimeFilter<"PreguntaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"PreguntaRecord"> | Date | string
    temaId?: StringFilter<"PreguntaRecord"> | string
    enunciado?: StringFilter<"PreguntaRecord"> | string
    alternativas?: JsonFilter<"PreguntaRecord">
    claveCorrecta?: StringFilter<"PreguntaRecord"> | string
    solucion?: StringNullableFilter<"PreguntaRecord"> | string | null
    fuente?: StringNullableFilter<"PreguntaRecord"> | string | null
    esAncla?: BoolFilter<"PreguntaRecord"> | boolean
    dificultad?: FloatFilter<"PreguntaRecord"> | number
    vecesServida?: IntFilter<"PreguntaRecord"> | number
    activa?: BoolFilter<"PreguntaRecord"> | boolean
    tema?: XOR<TemaRecordScalarRelationFilter, TemaRecordWhereInput>
  }

  export type PreguntaRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    temaId?: SortOrder
    enunciado?: SortOrder
    alternativas?: SortOrder
    claveCorrecta?: SortOrder
    solucion?: SortOrderInput | SortOrder
    fuente?: SortOrderInput | SortOrder
    esAncla?: SortOrder
    dificultad?: SortOrder
    vecesServida?: SortOrder
    activa?: SortOrder
    tema?: TemaRecordOrderByWithRelationInput
  }

  export type PreguntaRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PreguntaRecordWhereInput | PreguntaRecordWhereInput[]
    OR?: PreguntaRecordWhereInput[]
    NOT?: PreguntaRecordWhereInput | PreguntaRecordWhereInput[]
    createdAt?: DateTimeFilter<"PreguntaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"PreguntaRecord"> | Date | string
    temaId?: StringFilter<"PreguntaRecord"> | string
    enunciado?: StringFilter<"PreguntaRecord"> | string
    alternativas?: JsonFilter<"PreguntaRecord">
    claveCorrecta?: StringFilter<"PreguntaRecord"> | string
    solucion?: StringNullableFilter<"PreguntaRecord"> | string | null
    fuente?: StringNullableFilter<"PreguntaRecord"> | string | null
    esAncla?: BoolFilter<"PreguntaRecord"> | boolean
    dificultad?: FloatFilter<"PreguntaRecord"> | number
    vecesServida?: IntFilter<"PreguntaRecord"> | number
    activa?: BoolFilter<"PreguntaRecord"> | boolean
    tema?: XOR<TemaRecordScalarRelationFilter, TemaRecordWhereInput>
  }, "id">

  export type PreguntaRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    temaId?: SortOrder
    enunciado?: SortOrder
    alternativas?: SortOrder
    claveCorrecta?: SortOrder
    solucion?: SortOrderInput | SortOrder
    fuente?: SortOrderInput | SortOrder
    esAncla?: SortOrder
    dificultad?: SortOrder
    vecesServida?: SortOrder
    activa?: SortOrder
    _count?: PreguntaRecordCountOrderByAggregateInput
    _avg?: PreguntaRecordAvgOrderByAggregateInput
    _max?: PreguntaRecordMaxOrderByAggregateInput
    _min?: PreguntaRecordMinOrderByAggregateInput
    _sum?: PreguntaRecordSumOrderByAggregateInput
  }

  export type PreguntaRecordScalarWhereWithAggregatesInput = {
    AND?: PreguntaRecordScalarWhereWithAggregatesInput | PreguntaRecordScalarWhereWithAggregatesInput[]
    OR?: PreguntaRecordScalarWhereWithAggregatesInput[]
    NOT?: PreguntaRecordScalarWhereWithAggregatesInput | PreguntaRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PreguntaRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PreguntaRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PreguntaRecord"> | Date | string
    temaId?: StringWithAggregatesFilter<"PreguntaRecord"> | string
    enunciado?: StringWithAggregatesFilter<"PreguntaRecord"> | string
    alternativas?: JsonWithAggregatesFilter<"PreguntaRecord">
    claveCorrecta?: StringWithAggregatesFilter<"PreguntaRecord"> | string
    solucion?: StringNullableWithAggregatesFilter<"PreguntaRecord"> | string | null
    fuente?: StringNullableWithAggregatesFilter<"PreguntaRecord"> | string | null
    esAncla?: BoolWithAggregatesFilter<"PreguntaRecord"> | boolean
    dificultad?: FloatWithAggregatesFilter<"PreguntaRecord"> | number
    vecesServida?: IntWithAggregatesFilter<"PreguntaRecord"> | number
    activa?: BoolWithAggregatesFilter<"PreguntaRecord"> | boolean
  }

  export type IntentoRecordWhereInput = {
    AND?: IntentoRecordWhereInput | IntentoRecordWhereInput[]
    OR?: IntentoRecordWhereInput[]
    NOT?: IntentoRecordWhereInput | IntentoRecordWhereInput[]
    id?: StringFilter<"IntentoRecord"> | string
    creadoEn?: DateTimeFilter<"IntentoRecord"> | Date | string
    alumnoId?: StringFilter<"IntentoRecord"> | string
    preguntaId?: StringFilter<"IntentoRecord"> | string
    temaId?: StringFilter<"IntentoRecord"> | string
    asignaturaId?: StringFilter<"IntentoRecord"> | string
    resultado?: StringFilter<"IntentoRecord"> | string
    tiempoMs?: IntFilter<"IntentoRecord"> | number
    modo?: StringFilter<"IntentoRecord"> | string
    perfil?: StringFilter<"IntentoRecord"> | string
    thetaAlumno?: FloatNullableFilter<"IntentoRecord"> | number | null
    thetaPregunta?: FloatNullableFilter<"IntentoRecord"> | number | null
  }

  export type IntentoRecordOrderByWithRelationInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    alumnoId?: SortOrder
    preguntaId?: SortOrder
    temaId?: SortOrder
    asignaturaId?: SortOrder
    resultado?: SortOrder
    tiempoMs?: SortOrder
    modo?: SortOrder
    perfil?: SortOrder
    thetaAlumno?: SortOrderInput | SortOrder
    thetaPregunta?: SortOrderInput | SortOrder
  }

  export type IntentoRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntentoRecordWhereInput | IntentoRecordWhereInput[]
    OR?: IntentoRecordWhereInput[]
    NOT?: IntentoRecordWhereInput | IntentoRecordWhereInput[]
    creadoEn?: DateTimeFilter<"IntentoRecord"> | Date | string
    alumnoId?: StringFilter<"IntentoRecord"> | string
    preguntaId?: StringFilter<"IntentoRecord"> | string
    temaId?: StringFilter<"IntentoRecord"> | string
    asignaturaId?: StringFilter<"IntentoRecord"> | string
    resultado?: StringFilter<"IntentoRecord"> | string
    tiempoMs?: IntFilter<"IntentoRecord"> | number
    modo?: StringFilter<"IntentoRecord"> | string
    perfil?: StringFilter<"IntentoRecord"> | string
    thetaAlumno?: FloatNullableFilter<"IntentoRecord"> | number | null
    thetaPregunta?: FloatNullableFilter<"IntentoRecord"> | number | null
  }, "id">

  export type IntentoRecordOrderByWithAggregationInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    alumnoId?: SortOrder
    preguntaId?: SortOrder
    temaId?: SortOrder
    asignaturaId?: SortOrder
    resultado?: SortOrder
    tiempoMs?: SortOrder
    modo?: SortOrder
    perfil?: SortOrder
    thetaAlumno?: SortOrderInput | SortOrder
    thetaPregunta?: SortOrderInput | SortOrder
    _count?: IntentoRecordCountOrderByAggregateInput
    _avg?: IntentoRecordAvgOrderByAggregateInput
    _max?: IntentoRecordMaxOrderByAggregateInput
    _min?: IntentoRecordMinOrderByAggregateInput
    _sum?: IntentoRecordSumOrderByAggregateInput
  }

  export type IntentoRecordScalarWhereWithAggregatesInput = {
    AND?: IntentoRecordScalarWhereWithAggregatesInput | IntentoRecordScalarWhereWithAggregatesInput[]
    OR?: IntentoRecordScalarWhereWithAggregatesInput[]
    NOT?: IntentoRecordScalarWhereWithAggregatesInput | IntentoRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntentoRecord"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"IntentoRecord"> | Date | string
    alumnoId?: StringWithAggregatesFilter<"IntentoRecord"> | string
    preguntaId?: StringWithAggregatesFilter<"IntentoRecord"> | string
    temaId?: StringWithAggregatesFilter<"IntentoRecord"> | string
    asignaturaId?: StringWithAggregatesFilter<"IntentoRecord"> | string
    resultado?: StringWithAggregatesFilter<"IntentoRecord"> | string
    tiempoMs?: IntWithAggregatesFilter<"IntentoRecord"> | number
    modo?: StringWithAggregatesFilter<"IntentoRecord"> | string
    perfil?: StringWithAggregatesFilter<"IntentoRecord"> | string
    thetaAlumno?: FloatNullableWithAggregatesFilter<"IntentoRecord"> | number | null
    thetaPregunta?: FloatNullableWithAggregatesFilter<"IntentoRecord"> | number | null
  }

  export type ProgresoTemaRecordWhereInput = {
    AND?: ProgresoTemaRecordWhereInput | ProgresoTemaRecordWhereInput[]
    OR?: ProgresoTemaRecordWhereInput[]
    NOT?: ProgresoTemaRecordWhereInput | ProgresoTemaRecordWhereInput[]
    id?: StringFilter<"ProgresoTemaRecord"> | string
    createdAt?: DateTimeFilter<"ProgresoTemaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ProgresoTemaRecord"> | Date | string
    alumnoId?: StringFilter<"ProgresoTemaRecord"> | string
    temaId?: StringFilter<"ProgresoTemaRecord"> | string
    rachaActual?: IntFilter<"ProgresoTemaRecord"> | number
    mejorRacha?: IntFilter<"ProgresoTemaRecord"> | number
    intentosEnTema?: IntFilter<"ProgresoTemaRecord"> | number
    practicado?: BoolFilter<"ProgresoTemaRecord"> | boolean
    consolidado?: BoolFilter<"ProgresoTemaRecord"> | boolean
    theta?: FloatFilter<"ProgresoTemaRecord"> | number
    ultimoIntentoEn?: DateTimeNullableFilter<"ProgresoTemaRecord"> | Date | string | null
  }

  export type ProgresoTemaRecordOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumnoId?: SortOrder
    temaId?: SortOrder
    rachaActual?: SortOrder
    mejorRacha?: SortOrder
    intentosEnTema?: SortOrder
    practicado?: SortOrder
    consolidado?: SortOrder
    theta?: SortOrder
    ultimoIntentoEn?: SortOrderInput | SortOrder
  }

  export type ProgresoTemaRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alumnoId_temaId?: ProgresoTemaRecordAlumnoIdTemaIdCompoundUniqueInput
    AND?: ProgresoTemaRecordWhereInput | ProgresoTemaRecordWhereInput[]
    OR?: ProgresoTemaRecordWhereInput[]
    NOT?: ProgresoTemaRecordWhereInput | ProgresoTemaRecordWhereInput[]
    createdAt?: DateTimeFilter<"ProgresoTemaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ProgresoTemaRecord"> | Date | string
    alumnoId?: StringFilter<"ProgresoTemaRecord"> | string
    temaId?: StringFilter<"ProgresoTemaRecord"> | string
    rachaActual?: IntFilter<"ProgresoTemaRecord"> | number
    mejorRacha?: IntFilter<"ProgresoTemaRecord"> | number
    intentosEnTema?: IntFilter<"ProgresoTemaRecord"> | number
    practicado?: BoolFilter<"ProgresoTemaRecord"> | boolean
    consolidado?: BoolFilter<"ProgresoTemaRecord"> | boolean
    theta?: FloatFilter<"ProgresoTemaRecord"> | number
    ultimoIntentoEn?: DateTimeNullableFilter<"ProgresoTemaRecord"> | Date | string | null
  }, "id" | "alumnoId_temaId">

  export type ProgresoTemaRecordOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumnoId?: SortOrder
    temaId?: SortOrder
    rachaActual?: SortOrder
    mejorRacha?: SortOrder
    intentosEnTema?: SortOrder
    practicado?: SortOrder
    consolidado?: SortOrder
    theta?: SortOrder
    ultimoIntentoEn?: SortOrderInput | SortOrder
    _count?: ProgresoTemaRecordCountOrderByAggregateInput
    _avg?: ProgresoTemaRecordAvgOrderByAggregateInput
    _max?: ProgresoTemaRecordMaxOrderByAggregateInput
    _min?: ProgresoTemaRecordMinOrderByAggregateInput
    _sum?: ProgresoTemaRecordSumOrderByAggregateInput
  }

  export type ProgresoTemaRecordScalarWhereWithAggregatesInput = {
    AND?: ProgresoTemaRecordScalarWhereWithAggregatesInput | ProgresoTemaRecordScalarWhereWithAggregatesInput[]
    OR?: ProgresoTemaRecordScalarWhereWithAggregatesInput[]
    NOT?: ProgresoTemaRecordScalarWhereWithAggregatesInput | ProgresoTemaRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgresoTemaRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProgresoTemaRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgresoTemaRecord"> | Date | string
    alumnoId?: StringWithAggregatesFilter<"ProgresoTemaRecord"> | string
    temaId?: StringWithAggregatesFilter<"ProgresoTemaRecord"> | string
    rachaActual?: IntWithAggregatesFilter<"ProgresoTemaRecord"> | number
    mejorRacha?: IntWithAggregatesFilter<"ProgresoTemaRecord"> | number
    intentosEnTema?: IntWithAggregatesFilter<"ProgresoTemaRecord"> | number
    practicado?: BoolWithAggregatesFilter<"ProgresoTemaRecord"> | boolean
    consolidado?: BoolWithAggregatesFilter<"ProgresoTemaRecord"> | boolean
    theta?: FloatWithAggregatesFilter<"ProgresoTemaRecord"> | number
    ultimoIntentoEn?: DateTimeNullableWithAggregatesFilter<"ProgresoTemaRecord"> | Date | string | null
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

  export type AsignaturaRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eje: string
    nombre: string
    orden: number
    temas?: TemaRecordCreateNestedManyWithoutAsignaturaInput
  }

  export type AsignaturaRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eje: string
    nombre: string
    orden: number
    temas?: TemaRecordUncheckedCreateNestedManyWithoutAsignaturaInput
  }

  export type AsignaturaRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    temas?: TemaRecordUpdateManyWithoutAsignaturaNestedInput
  }

  export type AsignaturaRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    temas?: TemaRecordUncheckedUpdateManyWithoutAsignaturaNestedInput
  }

  export type AsignaturaRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eje: string
    nombre: string
    orden: number
  }

  export type AsignaturaRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type AsignaturaRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type TemaRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    romano: string
    nombre: string
    orden: number
    bloque?: string | null
    asignatura: AsignaturaRecordCreateNestedOneWithoutTemasInput
    preguntas?: PreguntaRecordCreateNestedManyWithoutTemaInput
  }

  export type TemaRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    asignaturaId: string
    romano: string
    nombre: string
    orden: number
    bloque?: string | null
    preguntas?: PreguntaRecordUncheckedCreateNestedManyWithoutTemaInput
  }

  export type TemaRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    romano?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    bloque?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: AsignaturaRecordUpdateOneRequiredWithoutTemasNestedInput
    preguntas?: PreguntaRecordUpdateManyWithoutTemaNestedInput
  }

  export type TemaRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    romano?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    bloque?: NullableStringFieldUpdateOperationsInput | string | null
    preguntas?: PreguntaRecordUncheckedUpdateManyWithoutTemaNestedInput
  }

  export type TemaRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    asignaturaId: string
    romano: string
    nombre: string
    orden: number
    bloque?: string | null
  }

  export type TemaRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    romano?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    bloque?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemaRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    romano?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    bloque?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PreguntaRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enunciado: string
    alternativas: JsonNullValueInput | InputJsonValue
    claveCorrecta: string
    solucion?: string | null
    fuente?: string | null
    esAncla?: boolean
    dificultad?: number
    vecesServida?: number
    activa?: boolean
    tema: TemaRecordCreateNestedOneWithoutPreguntasInput
  }

  export type PreguntaRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    temaId: string
    enunciado: string
    alternativas: JsonNullValueInput | InputJsonValue
    claveCorrecta: string
    solucion?: string | null
    fuente?: string | null
    esAncla?: boolean
    dificultad?: number
    vecesServida?: number
    activa?: boolean
  }

  export type PreguntaRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enunciado?: StringFieldUpdateOperationsInput | string
    alternativas?: JsonNullValueInput | InputJsonValue
    claveCorrecta?: StringFieldUpdateOperationsInput | string
    solucion?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: NullableStringFieldUpdateOperationsInput | string | null
    esAncla?: BoolFieldUpdateOperationsInput | boolean
    dificultad?: FloatFieldUpdateOperationsInput | number
    vecesServida?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
    tema?: TemaRecordUpdateOneRequiredWithoutPreguntasNestedInput
  }

  export type PreguntaRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temaId?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    alternativas?: JsonNullValueInput | InputJsonValue
    claveCorrecta?: StringFieldUpdateOperationsInput | string
    solucion?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: NullableStringFieldUpdateOperationsInput | string | null
    esAncla?: BoolFieldUpdateOperationsInput | boolean
    dificultad?: FloatFieldUpdateOperationsInput | number
    vecesServida?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PreguntaRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    temaId: string
    enunciado: string
    alternativas: JsonNullValueInput | InputJsonValue
    claveCorrecta: string
    solucion?: string | null
    fuente?: string | null
    esAncla?: boolean
    dificultad?: number
    vecesServida?: number
    activa?: boolean
  }

  export type PreguntaRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enunciado?: StringFieldUpdateOperationsInput | string
    alternativas?: JsonNullValueInput | InputJsonValue
    claveCorrecta?: StringFieldUpdateOperationsInput | string
    solucion?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: NullableStringFieldUpdateOperationsInput | string | null
    esAncla?: BoolFieldUpdateOperationsInput | boolean
    dificultad?: FloatFieldUpdateOperationsInput | number
    vecesServida?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PreguntaRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temaId?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    alternativas?: JsonNullValueInput | InputJsonValue
    claveCorrecta?: StringFieldUpdateOperationsInput | string
    solucion?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: NullableStringFieldUpdateOperationsInput | string | null
    esAncla?: BoolFieldUpdateOperationsInput | boolean
    dificultad?: FloatFieldUpdateOperationsInput | number
    vecesServida?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntentoRecordCreateInput = {
    id: string
    creadoEn?: Date | string
    alumnoId: string
    preguntaId: string
    temaId: string
    asignaturaId: string
    resultado: string
    tiempoMs: number
    modo: string
    perfil: string
    thetaAlumno?: number | null
    thetaPregunta?: number | null
  }

  export type IntentoRecordUncheckedCreateInput = {
    id: string
    creadoEn?: Date | string
    alumnoId: string
    preguntaId: string
    temaId: string
    asignaturaId: string
    resultado: string
    tiempoMs: number
    modo: string
    perfil: string
    thetaAlumno?: number | null
    thetaPregunta?: number | null
  }

  export type IntentoRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    alumnoId?: StringFieldUpdateOperationsInput | string
    preguntaId?: StringFieldUpdateOperationsInput | string
    temaId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    tiempoMs?: IntFieldUpdateOperationsInput | number
    modo?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    thetaAlumno?: NullableFloatFieldUpdateOperationsInput | number | null
    thetaPregunta?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntentoRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    alumnoId?: StringFieldUpdateOperationsInput | string
    preguntaId?: StringFieldUpdateOperationsInput | string
    temaId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    tiempoMs?: IntFieldUpdateOperationsInput | number
    modo?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    thetaAlumno?: NullableFloatFieldUpdateOperationsInput | number | null
    thetaPregunta?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntentoRecordCreateManyInput = {
    id: string
    creadoEn?: Date | string
    alumnoId: string
    preguntaId: string
    temaId: string
    asignaturaId: string
    resultado: string
    tiempoMs: number
    modo: string
    perfil: string
    thetaAlumno?: number | null
    thetaPregunta?: number | null
  }

  export type IntentoRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    alumnoId?: StringFieldUpdateOperationsInput | string
    preguntaId?: StringFieldUpdateOperationsInput | string
    temaId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    tiempoMs?: IntFieldUpdateOperationsInput | number
    modo?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    thetaAlumno?: NullableFloatFieldUpdateOperationsInput | number | null
    thetaPregunta?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntentoRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    alumnoId?: StringFieldUpdateOperationsInput | string
    preguntaId?: StringFieldUpdateOperationsInput | string
    temaId?: StringFieldUpdateOperationsInput | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    resultado?: StringFieldUpdateOperationsInput | string
    tiempoMs?: IntFieldUpdateOperationsInput | number
    modo?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    thetaAlumno?: NullableFloatFieldUpdateOperationsInput | number | null
    thetaPregunta?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProgresoTemaRecordCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alumnoId: string
    temaId: string
    rachaActual?: number
    mejorRacha?: number
    intentosEnTema?: number
    practicado?: boolean
    consolidado?: boolean
    theta?: number
    ultimoIntentoEn?: Date | string | null
  }

  export type ProgresoTemaRecordUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alumnoId: string
    temaId: string
    rachaActual?: number
    mejorRacha?: number
    intentosEnTema?: number
    practicado?: boolean
    consolidado?: boolean
    theta?: number
    ultimoIntentoEn?: Date | string | null
  }

  export type ProgresoTemaRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumnoId?: StringFieldUpdateOperationsInput | string
    temaId?: StringFieldUpdateOperationsInput | string
    rachaActual?: IntFieldUpdateOperationsInput | number
    mejorRacha?: IntFieldUpdateOperationsInput | number
    intentosEnTema?: IntFieldUpdateOperationsInput | number
    practicado?: BoolFieldUpdateOperationsInput | boolean
    consolidado?: BoolFieldUpdateOperationsInput | boolean
    theta?: FloatFieldUpdateOperationsInput | number
    ultimoIntentoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgresoTemaRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumnoId?: StringFieldUpdateOperationsInput | string
    temaId?: StringFieldUpdateOperationsInput | string
    rachaActual?: IntFieldUpdateOperationsInput | number
    mejorRacha?: IntFieldUpdateOperationsInput | number
    intentosEnTema?: IntFieldUpdateOperationsInput | number
    practicado?: BoolFieldUpdateOperationsInput | boolean
    consolidado?: BoolFieldUpdateOperationsInput | boolean
    theta?: FloatFieldUpdateOperationsInput | number
    ultimoIntentoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgresoTemaRecordCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alumnoId: string
    temaId: string
    rachaActual?: number
    mejorRacha?: number
    intentosEnTema?: number
    practicado?: boolean
    consolidado?: boolean
    theta?: number
    ultimoIntentoEn?: Date | string | null
  }

  export type ProgresoTemaRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumnoId?: StringFieldUpdateOperationsInput | string
    temaId?: StringFieldUpdateOperationsInput | string
    rachaActual?: IntFieldUpdateOperationsInput | number
    mejorRacha?: IntFieldUpdateOperationsInput | number
    intentosEnTema?: IntFieldUpdateOperationsInput | number
    practicado?: BoolFieldUpdateOperationsInput | boolean
    consolidado?: BoolFieldUpdateOperationsInput | boolean
    theta?: FloatFieldUpdateOperationsInput | number
    ultimoIntentoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgresoTemaRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alumnoId?: StringFieldUpdateOperationsInput | string
    temaId?: StringFieldUpdateOperationsInput | string
    rachaActual?: IntFieldUpdateOperationsInput | number
    mejorRacha?: IntFieldUpdateOperationsInput | number
    intentosEnTema?: IntFieldUpdateOperationsInput | number
    practicado?: BoolFieldUpdateOperationsInput | boolean
    consolidado?: BoolFieldUpdateOperationsInput | boolean
    theta?: FloatFieldUpdateOperationsInput | number
    ultimoIntentoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type TemaRecordListRelationFilter = {
    every?: TemaRecordWhereInput
    some?: TemaRecordWhereInput
    none?: TemaRecordWhereInput
  }

  export type TemaRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsignaturaRecordEjeNombreCompoundUniqueInput = {
    eje: string
    nombre: string
  }

  export type AsignaturaRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eje?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
  }

  export type AsignaturaRecordAvgOrderByAggregateInput = {
    orden?: SortOrder
  }

  export type AsignaturaRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eje?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
  }

  export type AsignaturaRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eje?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
  }

  export type AsignaturaRecordSumOrderByAggregateInput = {
    orden?: SortOrder
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

  export type AsignaturaRecordScalarRelationFilter = {
    is?: AsignaturaRecordWhereInput
    isNot?: AsignaturaRecordWhereInput
  }

  export type PreguntaRecordListRelationFilter = {
    every?: PreguntaRecordWhereInput
    some?: PreguntaRecordWhereInput
    none?: PreguntaRecordWhereInput
  }

  export type PreguntaRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemaRecordAsignaturaIdOrdenCompoundUniqueInput = {
    asignaturaId: string
    orden: number
  }

  export type TemaRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignaturaId?: SortOrder
    romano?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    bloque?: SortOrder
  }

  export type TemaRecordAvgOrderByAggregateInput = {
    orden?: SortOrder
  }

  export type TemaRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignaturaId?: SortOrder
    romano?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    bloque?: SortOrder
  }

  export type TemaRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    asignaturaId?: SortOrder
    romano?: SortOrder
    nombre?: SortOrder
    orden?: SortOrder
    bloque?: SortOrder
  }

  export type TemaRecordSumOrderByAggregateInput = {
    orden?: SortOrder
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

  export type TemaRecordScalarRelationFilter = {
    is?: TemaRecordWhereInput
    isNot?: TemaRecordWhereInput
  }

  export type PreguntaRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    temaId?: SortOrder
    enunciado?: SortOrder
    alternativas?: SortOrder
    claveCorrecta?: SortOrder
    solucion?: SortOrder
    fuente?: SortOrder
    esAncla?: SortOrder
    dificultad?: SortOrder
    vecesServida?: SortOrder
    activa?: SortOrder
  }

  export type PreguntaRecordAvgOrderByAggregateInput = {
    dificultad?: SortOrder
    vecesServida?: SortOrder
  }

  export type PreguntaRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    temaId?: SortOrder
    enunciado?: SortOrder
    claveCorrecta?: SortOrder
    solucion?: SortOrder
    fuente?: SortOrder
    esAncla?: SortOrder
    dificultad?: SortOrder
    vecesServida?: SortOrder
    activa?: SortOrder
  }

  export type PreguntaRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    temaId?: SortOrder
    enunciado?: SortOrder
    claveCorrecta?: SortOrder
    solucion?: SortOrder
    fuente?: SortOrder
    esAncla?: SortOrder
    dificultad?: SortOrder
    vecesServida?: SortOrder
    activa?: SortOrder
  }

  export type PreguntaRecordSumOrderByAggregateInput = {
    dificultad?: SortOrder
    vecesServida?: SortOrder
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

  export type IntentoRecordCountOrderByAggregateInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    alumnoId?: SortOrder
    preguntaId?: SortOrder
    temaId?: SortOrder
    asignaturaId?: SortOrder
    resultado?: SortOrder
    tiempoMs?: SortOrder
    modo?: SortOrder
    perfil?: SortOrder
    thetaAlumno?: SortOrder
    thetaPregunta?: SortOrder
  }

  export type IntentoRecordAvgOrderByAggregateInput = {
    tiempoMs?: SortOrder
    thetaAlumno?: SortOrder
    thetaPregunta?: SortOrder
  }

  export type IntentoRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    alumnoId?: SortOrder
    preguntaId?: SortOrder
    temaId?: SortOrder
    asignaturaId?: SortOrder
    resultado?: SortOrder
    tiempoMs?: SortOrder
    modo?: SortOrder
    perfil?: SortOrder
    thetaAlumno?: SortOrder
    thetaPregunta?: SortOrder
  }

  export type IntentoRecordMinOrderByAggregateInput = {
    id?: SortOrder
    creadoEn?: SortOrder
    alumnoId?: SortOrder
    preguntaId?: SortOrder
    temaId?: SortOrder
    asignaturaId?: SortOrder
    resultado?: SortOrder
    tiempoMs?: SortOrder
    modo?: SortOrder
    perfil?: SortOrder
    thetaAlumno?: SortOrder
    thetaPregunta?: SortOrder
  }

  export type IntentoRecordSumOrderByAggregateInput = {
    tiempoMs?: SortOrder
    thetaAlumno?: SortOrder
    thetaPregunta?: SortOrder
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

  export type ProgresoTemaRecordAlumnoIdTemaIdCompoundUniqueInput = {
    alumnoId: string
    temaId: string
  }

  export type ProgresoTemaRecordCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumnoId?: SortOrder
    temaId?: SortOrder
    rachaActual?: SortOrder
    mejorRacha?: SortOrder
    intentosEnTema?: SortOrder
    practicado?: SortOrder
    consolidado?: SortOrder
    theta?: SortOrder
    ultimoIntentoEn?: SortOrder
  }

  export type ProgresoTemaRecordAvgOrderByAggregateInput = {
    rachaActual?: SortOrder
    mejorRacha?: SortOrder
    intentosEnTema?: SortOrder
    theta?: SortOrder
  }

  export type ProgresoTemaRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumnoId?: SortOrder
    temaId?: SortOrder
    rachaActual?: SortOrder
    mejorRacha?: SortOrder
    intentosEnTema?: SortOrder
    practicado?: SortOrder
    consolidado?: SortOrder
    theta?: SortOrder
    ultimoIntentoEn?: SortOrder
  }

  export type ProgresoTemaRecordMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alumnoId?: SortOrder
    temaId?: SortOrder
    rachaActual?: SortOrder
    mejorRacha?: SortOrder
    intentosEnTema?: SortOrder
    practicado?: SortOrder
    consolidado?: SortOrder
    theta?: SortOrder
    ultimoIntentoEn?: SortOrder
  }

  export type ProgresoTemaRecordSumOrderByAggregateInput = {
    rachaActual?: SortOrder
    mejorRacha?: SortOrder
    intentosEnTema?: SortOrder
    theta?: SortOrder
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

  export type TemaRecordCreateNestedManyWithoutAsignaturaInput = {
    create?: XOR<TemaRecordCreateWithoutAsignaturaInput, TemaRecordUncheckedCreateWithoutAsignaturaInput> | TemaRecordCreateWithoutAsignaturaInput[] | TemaRecordUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: TemaRecordCreateOrConnectWithoutAsignaturaInput | TemaRecordCreateOrConnectWithoutAsignaturaInput[]
    createMany?: TemaRecordCreateManyAsignaturaInputEnvelope
    connect?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
  }

  export type TemaRecordUncheckedCreateNestedManyWithoutAsignaturaInput = {
    create?: XOR<TemaRecordCreateWithoutAsignaturaInput, TemaRecordUncheckedCreateWithoutAsignaturaInput> | TemaRecordCreateWithoutAsignaturaInput[] | TemaRecordUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: TemaRecordCreateOrConnectWithoutAsignaturaInput | TemaRecordCreateOrConnectWithoutAsignaturaInput[]
    createMany?: TemaRecordCreateManyAsignaturaInputEnvelope
    connect?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TemaRecordUpdateManyWithoutAsignaturaNestedInput = {
    create?: XOR<TemaRecordCreateWithoutAsignaturaInput, TemaRecordUncheckedCreateWithoutAsignaturaInput> | TemaRecordCreateWithoutAsignaturaInput[] | TemaRecordUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: TemaRecordCreateOrConnectWithoutAsignaturaInput | TemaRecordCreateOrConnectWithoutAsignaturaInput[]
    upsert?: TemaRecordUpsertWithWhereUniqueWithoutAsignaturaInput | TemaRecordUpsertWithWhereUniqueWithoutAsignaturaInput[]
    createMany?: TemaRecordCreateManyAsignaturaInputEnvelope
    set?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
    disconnect?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
    delete?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
    connect?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
    update?: TemaRecordUpdateWithWhereUniqueWithoutAsignaturaInput | TemaRecordUpdateWithWhereUniqueWithoutAsignaturaInput[]
    updateMany?: TemaRecordUpdateManyWithWhereWithoutAsignaturaInput | TemaRecordUpdateManyWithWhereWithoutAsignaturaInput[]
    deleteMany?: TemaRecordScalarWhereInput | TemaRecordScalarWhereInput[]
  }

  export type TemaRecordUncheckedUpdateManyWithoutAsignaturaNestedInput = {
    create?: XOR<TemaRecordCreateWithoutAsignaturaInput, TemaRecordUncheckedCreateWithoutAsignaturaInput> | TemaRecordCreateWithoutAsignaturaInput[] | TemaRecordUncheckedCreateWithoutAsignaturaInput[]
    connectOrCreate?: TemaRecordCreateOrConnectWithoutAsignaturaInput | TemaRecordCreateOrConnectWithoutAsignaturaInput[]
    upsert?: TemaRecordUpsertWithWhereUniqueWithoutAsignaturaInput | TemaRecordUpsertWithWhereUniqueWithoutAsignaturaInput[]
    createMany?: TemaRecordCreateManyAsignaturaInputEnvelope
    set?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
    disconnect?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
    delete?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
    connect?: TemaRecordWhereUniqueInput | TemaRecordWhereUniqueInput[]
    update?: TemaRecordUpdateWithWhereUniqueWithoutAsignaturaInput | TemaRecordUpdateWithWhereUniqueWithoutAsignaturaInput[]
    updateMany?: TemaRecordUpdateManyWithWhereWithoutAsignaturaInput | TemaRecordUpdateManyWithWhereWithoutAsignaturaInput[]
    deleteMany?: TemaRecordScalarWhereInput | TemaRecordScalarWhereInput[]
  }

  export type AsignaturaRecordCreateNestedOneWithoutTemasInput = {
    create?: XOR<AsignaturaRecordCreateWithoutTemasInput, AsignaturaRecordUncheckedCreateWithoutTemasInput>
    connectOrCreate?: AsignaturaRecordCreateOrConnectWithoutTemasInput
    connect?: AsignaturaRecordWhereUniqueInput
  }

  export type PreguntaRecordCreateNestedManyWithoutTemaInput = {
    create?: XOR<PreguntaRecordCreateWithoutTemaInput, PreguntaRecordUncheckedCreateWithoutTemaInput> | PreguntaRecordCreateWithoutTemaInput[] | PreguntaRecordUncheckedCreateWithoutTemaInput[]
    connectOrCreate?: PreguntaRecordCreateOrConnectWithoutTemaInput | PreguntaRecordCreateOrConnectWithoutTemaInput[]
    createMany?: PreguntaRecordCreateManyTemaInputEnvelope
    connect?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
  }

  export type PreguntaRecordUncheckedCreateNestedManyWithoutTemaInput = {
    create?: XOR<PreguntaRecordCreateWithoutTemaInput, PreguntaRecordUncheckedCreateWithoutTemaInput> | PreguntaRecordCreateWithoutTemaInput[] | PreguntaRecordUncheckedCreateWithoutTemaInput[]
    connectOrCreate?: PreguntaRecordCreateOrConnectWithoutTemaInput | PreguntaRecordCreateOrConnectWithoutTemaInput[]
    createMany?: PreguntaRecordCreateManyTemaInputEnvelope
    connect?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
  }

  export type AsignaturaRecordUpdateOneRequiredWithoutTemasNestedInput = {
    create?: XOR<AsignaturaRecordCreateWithoutTemasInput, AsignaturaRecordUncheckedCreateWithoutTemasInput>
    connectOrCreate?: AsignaturaRecordCreateOrConnectWithoutTemasInput
    upsert?: AsignaturaRecordUpsertWithoutTemasInput
    connect?: AsignaturaRecordWhereUniqueInput
    update?: XOR<XOR<AsignaturaRecordUpdateToOneWithWhereWithoutTemasInput, AsignaturaRecordUpdateWithoutTemasInput>, AsignaturaRecordUncheckedUpdateWithoutTemasInput>
  }

  export type PreguntaRecordUpdateManyWithoutTemaNestedInput = {
    create?: XOR<PreguntaRecordCreateWithoutTemaInput, PreguntaRecordUncheckedCreateWithoutTemaInput> | PreguntaRecordCreateWithoutTemaInput[] | PreguntaRecordUncheckedCreateWithoutTemaInput[]
    connectOrCreate?: PreguntaRecordCreateOrConnectWithoutTemaInput | PreguntaRecordCreateOrConnectWithoutTemaInput[]
    upsert?: PreguntaRecordUpsertWithWhereUniqueWithoutTemaInput | PreguntaRecordUpsertWithWhereUniqueWithoutTemaInput[]
    createMany?: PreguntaRecordCreateManyTemaInputEnvelope
    set?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
    disconnect?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
    delete?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
    connect?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
    update?: PreguntaRecordUpdateWithWhereUniqueWithoutTemaInput | PreguntaRecordUpdateWithWhereUniqueWithoutTemaInput[]
    updateMany?: PreguntaRecordUpdateManyWithWhereWithoutTemaInput | PreguntaRecordUpdateManyWithWhereWithoutTemaInput[]
    deleteMany?: PreguntaRecordScalarWhereInput | PreguntaRecordScalarWhereInput[]
  }

  export type PreguntaRecordUncheckedUpdateManyWithoutTemaNestedInput = {
    create?: XOR<PreguntaRecordCreateWithoutTemaInput, PreguntaRecordUncheckedCreateWithoutTemaInput> | PreguntaRecordCreateWithoutTemaInput[] | PreguntaRecordUncheckedCreateWithoutTemaInput[]
    connectOrCreate?: PreguntaRecordCreateOrConnectWithoutTemaInput | PreguntaRecordCreateOrConnectWithoutTemaInput[]
    upsert?: PreguntaRecordUpsertWithWhereUniqueWithoutTemaInput | PreguntaRecordUpsertWithWhereUniqueWithoutTemaInput[]
    createMany?: PreguntaRecordCreateManyTemaInputEnvelope
    set?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
    disconnect?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
    delete?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
    connect?: PreguntaRecordWhereUniqueInput | PreguntaRecordWhereUniqueInput[]
    update?: PreguntaRecordUpdateWithWhereUniqueWithoutTemaInput | PreguntaRecordUpdateWithWhereUniqueWithoutTemaInput[]
    updateMany?: PreguntaRecordUpdateManyWithWhereWithoutTemaInput | PreguntaRecordUpdateManyWithWhereWithoutTemaInput[]
    deleteMany?: PreguntaRecordScalarWhereInput | PreguntaRecordScalarWhereInput[]
  }

  export type TemaRecordCreateNestedOneWithoutPreguntasInput = {
    create?: XOR<TemaRecordCreateWithoutPreguntasInput, TemaRecordUncheckedCreateWithoutPreguntasInput>
    connectOrCreate?: TemaRecordCreateOrConnectWithoutPreguntasInput
    connect?: TemaRecordWhereUniqueInput
  }

  export type TemaRecordUpdateOneRequiredWithoutPreguntasNestedInput = {
    create?: XOR<TemaRecordCreateWithoutPreguntasInput, TemaRecordUncheckedCreateWithoutPreguntasInput>
    connectOrCreate?: TemaRecordCreateOrConnectWithoutPreguntasInput
    upsert?: TemaRecordUpsertWithoutPreguntasInput
    connect?: TemaRecordWhereUniqueInput
    update?: XOR<XOR<TemaRecordUpdateToOneWithWhereWithoutPreguntasInput, TemaRecordUpdateWithoutPreguntasInput>, TemaRecordUncheckedUpdateWithoutPreguntasInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type TemaRecordCreateWithoutAsignaturaInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    romano: string
    nombre: string
    orden: number
    bloque?: string | null
    preguntas?: PreguntaRecordCreateNestedManyWithoutTemaInput
  }

  export type TemaRecordUncheckedCreateWithoutAsignaturaInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    romano: string
    nombre: string
    orden: number
    bloque?: string | null
    preguntas?: PreguntaRecordUncheckedCreateNestedManyWithoutTemaInput
  }

  export type TemaRecordCreateOrConnectWithoutAsignaturaInput = {
    where: TemaRecordWhereUniqueInput
    create: XOR<TemaRecordCreateWithoutAsignaturaInput, TemaRecordUncheckedCreateWithoutAsignaturaInput>
  }

  export type TemaRecordCreateManyAsignaturaInputEnvelope = {
    data: TemaRecordCreateManyAsignaturaInput | TemaRecordCreateManyAsignaturaInput[]
    skipDuplicates?: boolean
  }

  export type TemaRecordUpsertWithWhereUniqueWithoutAsignaturaInput = {
    where: TemaRecordWhereUniqueInput
    update: XOR<TemaRecordUpdateWithoutAsignaturaInput, TemaRecordUncheckedUpdateWithoutAsignaturaInput>
    create: XOR<TemaRecordCreateWithoutAsignaturaInput, TemaRecordUncheckedCreateWithoutAsignaturaInput>
  }

  export type TemaRecordUpdateWithWhereUniqueWithoutAsignaturaInput = {
    where: TemaRecordWhereUniqueInput
    data: XOR<TemaRecordUpdateWithoutAsignaturaInput, TemaRecordUncheckedUpdateWithoutAsignaturaInput>
  }

  export type TemaRecordUpdateManyWithWhereWithoutAsignaturaInput = {
    where: TemaRecordScalarWhereInput
    data: XOR<TemaRecordUpdateManyMutationInput, TemaRecordUncheckedUpdateManyWithoutAsignaturaInput>
  }

  export type TemaRecordScalarWhereInput = {
    AND?: TemaRecordScalarWhereInput | TemaRecordScalarWhereInput[]
    OR?: TemaRecordScalarWhereInput[]
    NOT?: TemaRecordScalarWhereInput | TemaRecordScalarWhereInput[]
    id?: StringFilter<"TemaRecord"> | string
    createdAt?: DateTimeFilter<"TemaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"TemaRecord"> | Date | string
    asignaturaId?: StringFilter<"TemaRecord"> | string
    romano?: StringFilter<"TemaRecord"> | string
    nombre?: StringFilter<"TemaRecord"> | string
    orden?: IntFilter<"TemaRecord"> | number
    bloque?: StringNullableFilter<"TemaRecord"> | string | null
  }

  export type AsignaturaRecordCreateWithoutTemasInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eje: string
    nombre: string
    orden: number
  }

  export type AsignaturaRecordUncheckedCreateWithoutTemasInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    eje: string
    nombre: string
    orden: number
  }

  export type AsignaturaRecordCreateOrConnectWithoutTemasInput = {
    where: AsignaturaRecordWhereUniqueInput
    create: XOR<AsignaturaRecordCreateWithoutTemasInput, AsignaturaRecordUncheckedCreateWithoutTemasInput>
  }

  export type PreguntaRecordCreateWithoutTemaInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enunciado: string
    alternativas: JsonNullValueInput | InputJsonValue
    claveCorrecta: string
    solucion?: string | null
    fuente?: string | null
    esAncla?: boolean
    dificultad?: number
    vecesServida?: number
    activa?: boolean
  }

  export type PreguntaRecordUncheckedCreateWithoutTemaInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enunciado: string
    alternativas: JsonNullValueInput | InputJsonValue
    claveCorrecta: string
    solucion?: string | null
    fuente?: string | null
    esAncla?: boolean
    dificultad?: number
    vecesServida?: number
    activa?: boolean
  }

  export type PreguntaRecordCreateOrConnectWithoutTemaInput = {
    where: PreguntaRecordWhereUniqueInput
    create: XOR<PreguntaRecordCreateWithoutTemaInput, PreguntaRecordUncheckedCreateWithoutTemaInput>
  }

  export type PreguntaRecordCreateManyTemaInputEnvelope = {
    data: PreguntaRecordCreateManyTemaInput | PreguntaRecordCreateManyTemaInput[]
    skipDuplicates?: boolean
  }

  export type AsignaturaRecordUpsertWithoutTemasInput = {
    update: XOR<AsignaturaRecordUpdateWithoutTemasInput, AsignaturaRecordUncheckedUpdateWithoutTemasInput>
    create: XOR<AsignaturaRecordCreateWithoutTemasInput, AsignaturaRecordUncheckedCreateWithoutTemasInput>
    where?: AsignaturaRecordWhereInput
  }

  export type AsignaturaRecordUpdateToOneWithWhereWithoutTemasInput = {
    where?: AsignaturaRecordWhereInput
    data: XOR<AsignaturaRecordUpdateWithoutTemasInput, AsignaturaRecordUncheckedUpdateWithoutTemasInput>
  }

  export type AsignaturaRecordUpdateWithoutTemasInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type AsignaturaRecordUncheckedUpdateWithoutTemasInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eje?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type PreguntaRecordUpsertWithWhereUniqueWithoutTemaInput = {
    where: PreguntaRecordWhereUniqueInput
    update: XOR<PreguntaRecordUpdateWithoutTemaInput, PreguntaRecordUncheckedUpdateWithoutTemaInput>
    create: XOR<PreguntaRecordCreateWithoutTemaInput, PreguntaRecordUncheckedCreateWithoutTemaInput>
  }

  export type PreguntaRecordUpdateWithWhereUniqueWithoutTemaInput = {
    where: PreguntaRecordWhereUniqueInput
    data: XOR<PreguntaRecordUpdateWithoutTemaInput, PreguntaRecordUncheckedUpdateWithoutTemaInput>
  }

  export type PreguntaRecordUpdateManyWithWhereWithoutTemaInput = {
    where: PreguntaRecordScalarWhereInput
    data: XOR<PreguntaRecordUpdateManyMutationInput, PreguntaRecordUncheckedUpdateManyWithoutTemaInput>
  }

  export type PreguntaRecordScalarWhereInput = {
    AND?: PreguntaRecordScalarWhereInput | PreguntaRecordScalarWhereInput[]
    OR?: PreguntaRecordScalarWhereInput[]
    NOT?: PreguntaRecordScalarWhereInput | PreguntaRecordScalarWhereInput[]
    id?: StringFilter<"PreguntaRecord"> | string
    createdAt?: DateTimeFilter<"PreguntaRecord"> | Date | string
    updatedAt?: DateTimeFilter<"PreguntaRecord"> | Date | string
    temaId?: StringFilter<"PreguntaRecord"> | string
    enunciado?: StringFilter<"PreguntaRecord"> | string
    alternativas?: JsonFilter<"PreguntaRecord">
    claveCorrecta?: StringFilter<"PreguntaRecord"> | string
    solucion?: StringNullableFilter<"PreguntaRecord"> | string | null
    fuente?: StringNullableFilter<"PreguntaRecord"> | string | null
    esAncla?: BoolFilter<"PreguntaRecord"> | boolean
    dificultad?: FloatFilter<"PreguntaRecord"> | number
    vecesServida?: IntFilter<"PreguntaRecord"> | number
    activa?: BoolFilter<"PreguntaRecord"> | boolean
  }

  export type TemaRecordCreateWithoutPreguntasInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    romano: string
    nombre: string
    orden: number
    bloque?: string | null
    asignatura: AsignaturaRecordCreateNestedOneWithoutTemasInput
  }

  export type TemaRecordUncheckedCreateWithoutPreguntasInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    asignaturaId: string
    romano: string
    nombre: string
    orden: number
    bloque?: string | null
  }

  export type TemaRecordCreateOrConnectWithoutPreguntasInput = {
    where: TemaRecordWhereUniqueInput
    create: XOR<TemaRecordCreateWithoutPreguntasInput, TemaRecordUncheckedCreateWithoutPreguntasInput>
  }

  export type TemaRecordUpsertWithoutPreguntasInput = {
    update: XOR<TemaRecordUpdateWithoutPreguntasInput, TemaRecordUncheckedUpdateWithoutPreguntasInput>
    create: XOR<TemaRecordCreateWithoutPreguntasInput, TemaRecordUncheckedCreateWithoutPreguntasInput>
    where?: TemaRecordWhereInput
  }

  export type TemaRecordUpdateToOneWithWhereWithoutPreguntasInput = {
    where?: TemaRecordWhereInput
    data: XOR<TemaRecordUpdateWithoutPreguntasInput, TemaRecordUncheckedUpdateWithoutPreguntasInput>
  }

  export type TemaRecordUpdateWithoutPreguntasInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    romano?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    bloque?: NullableStringFieldUpdateOperationsInput | string | null
    asignatura?: AsignaturaRecordUpdateOneRequiredWithoutTemasNestedInput
  }

  export type TemaRecordUncheckedUpdateWithoutPreguntasInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asignaturaId?: StringFieldUpdateOperationsInput | string
    romano?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    bloque?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type TemaRecordCreateManyAsignaturaInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    romano: string
    nombre: string
    orden: number
    bloque?: string | null
  }

  export type TemaRecordUpdateWithoutAsignaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    romano?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    bloque?: NullableStringFieldUpdateOperationsInput | string | null
    preguntas?: PreguntaRecordUpdateManyWithoutTemaNestedInput
  }

  export type TemaRecordUncheckedUpdateWithoutAsignaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    romano?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    bloque?: NullableStringFieldUpdateOperationsInput | string | null
    preguntas?: PreguntaRecordUncheckedUpdateManyWithoutTemaNestedInput
  }

  export type TemaRecordUncheckedUpdateManyWithoutAsignaturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    romano?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    bloque?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PreguntaRecordCreateManyTemaInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enunciado: string
    alternativas: JsonNullValueInput | InputJsonValue
    claveCorrecta: string
    solucion?: string | null
    fuente?: string | null
    esAncla?: boolean
    dificultad?: number
    vecesServida?: number
    activa?: boolean
  }

  export type PreguntaRecordUpdateWithoutTemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enunciado?: StringFieldUpdateOperationsInput | string
    alternativas?: JsonNullValueInput | InputJsonValue
    claveCorrecta?: StringFieldUpdateOperationsInput | string
    solucion?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: NullableStringFieldUpdateOperationsInput | string | null
    esAncla?: BoolFieldUpdateOperationsInput | boolean
    dificultad?: FloatFieldUpdateOperationsInput | number
    vecesServida?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PreguntaRecordUncheckedUpdateWithoutTemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enunciado?: StringFieldUpdateOperationsInput | string
    alternativas?: JsonNullValueInput | InputJsonValue
    claveCorrecta?: StringFieldUpdateOperationsInput | string
    solucion?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: NullableStringFieldUpdateOperationsInput | string | null
    esAncla?: BoolFieldUpdateOperationsInput | boolean
    dificultad?: FloatFieldUpdateOperationsInput | number
    vecesServida?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PreguntaRecordUncheckedUpdateManyWithoutTemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enunciado?: StringFieldUpdateOperationsInput | string
    alternativas?: JsonNullValueInput | InputJsonValue
    claveCorrecta?: StringFieldUpdateOperationsInput | string
    solucion?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: NullableStringFieldUpdateOperationsInput | string | null
    esAncla?: BoolFieldUpdateOperationsInput | boolean
    dificultad?: FloatFieldUpdateOperationsInput | number
    vecesServida?: IntFieldUpdateOperationsInput | number
    activa?: BoolFieldUpdateOperationsInput | boolean
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