
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
 * Model CivicChallenge
 * 
 */
export type CivicChallenge = $Result.DefaultSelection<Prisma.$CivicChallengePayload>
/**
 * Model DebateForum
 * 
 */
export type DebateForum = $Result.DefaultSelection<Prisma.$DebateForumPayload>
/**
 * Model ForumParticipant
 * 
 */
export type ForumParticipant = $Result.DefaultSelection<Prisma.$ForumParticipantPayload>
/**
 * Model ForumMessage
 * 
 */
export type ForumMessage = $Result.DefaultSelection<Prisma.$ForumMessagePayload>
/**
 * Model FactCheckCitation
 * 
 */
export type FactCheckCitation = $Result.DefaultSelection<Prisma.$FactCheckCitationPayload>
/**
 * Model CitizenProposal
 * 
 */
export type CitizenProposal = $Result.DefaultSelection<Prisma.$CitizenProposalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChallengeStatus: {
  DRAFT: 'DRAFT',
  OPEN: 'OPEN',
  DELIBERATING: 'DELIBERATING',
  SYNTHESIZING: 'SYNTHESIZING',
  CLOSED: 'CLOSED',
  ARCHIVED: 'ARCHIVED'
};

export type ChallengeStatus = (typeof ChallengeStatus)[keyof typeof ChallengeStatus]


export const ForumStatus: {
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  LOCKED: 'LOCKED',
  CLOSED: 'CLOSED'
};

export type ForumStatus = (typeof ForumStatus)[keyof typeof ForumStatus]


export const MessageAuthorType: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  AI: 'AI',
  SYSTEM: 'SYSTEM'
};

export type MessageAuthorType = (typeof MessageAuthorType)[keyof typeof MessageAuthorType]


export const AgentRole: {
  MODERATOR: 'MODERATOR',
  FACT_CHECKER: 'FACT_CHECKER',
  SYNTHESIZER: 'SYNTHESIZER'
};

export type AgentRole = (typeof AgentRole)[keyof typeof AgentRole]


export const ModerationStatus: {
  VISIBLE: 'VISIBLE',
  FLAGGED: 'FLAGGED',
  HIDDEN: 'HIDDEN',
  PENDING: 'PENDING'
};

export type ModerationStatus = (typeof ModerationStatus)[keyof typeof ModerationStatus]


export const FactVerdict: {
  SUPPORTED: 'SUPPORTED',
  PARTIALLY_SUPPORTED: 'PARTIALLY_SUPPORTED',
  DISPUTED: 'DISPUTED',
  UNSUPPORTED: 'UNSUPPORTED',
  UNVERIFIED: 'UNVERIFIED'
};

export type FactVerdict = (typeof FactVerdict)[keyof typeof FactVerdict]


export const ProposalStatus: {
  DRAFT: 'DRAFT',
  UNDER_REVIEW: 'UNDER_REVIEW',
  APPROVED: 'APPROVED',
  PUBLISHED: 'PUBLISHED',
  REJECTED: 'REJECTED'
};

export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus]

}

export type ChallengeStatus = $Enums.ChallengeStatus

export const ChallengeStatus: typeof $Enums.ChallengeStatus

export type ForumStatus = $Enums.ForumStatus

export const ForumStatus: typeof $Enums.ForumStatus

export type MessageAuthorType = $Enums.MessageAuthorType

export const MessageAuthorType: typeof $Enums.MessageAuthorType

export type AgentRole = $Enums.AgentRole

export const AgentRole: typeof $Enums.AgentRole

export type ModerationStatus = $Enums.ModerationStatus

export const ModerationStatus: typeof $Enums.ModerationStatus

export type FactVerdict = $Enums.FactVerdict

export const FactVerdict: typeof $Enums.FactVerdict

export type ProposalStatus = $Enums.ProposalStatus

export const ProposalStatus: typeof $Enums.ProposalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CivicChallenges
 * const civicChallenges = await prisma.civicChallenge.findMany()
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
   * // Fetch zero or more CivicChallenges
   * const civicChallenges = await prisma.civicChallenge.findMany()
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
   * `prisma.civicChallenge`: Exposes CRUD operations for the **CivicChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CivicChallenges
    * const civicChallenges = await prisma.civicChallenge.findMany()
    * ```
    */
  get civicChallenge(): Prisma.CivicChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.debateForum`: Exposes CRUD operations for the **DebateForum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DebateForums
    * const debateForums = await prisma.debateForum.findMany()
    * ```
    */
  get debateForum(): Prisma.DebateForumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumParticipant`: Exposes CRUD operations for the **ForumParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumParticipants
    * const forumParticipants = await prisma.forumParticipant.findMany()
    * ```
    */
  get forumParticipant(): Prisma.ForumParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumMessage`: Exposes CRUD operations for the **ForumMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumMessages
    * const forumMessages = await prisma.forumMessage.findMany()
    * ```
    */
  get forumMessage(): Prisma.ForumMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factCheckCitation`: Exposes CRUD operations for the **FactCheckCitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FactCheckCitations
    * const factCheckCitations = await prisma.factCheckCitation.findMany()
    * ```
    */
  get factCheckCitation(): Prisma.FactCheckCitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.citizenProposal`: Exposes CRUD operations for the **CitizenProposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CitizenProposals
    * const citizenProposals = await prisma.citizenProposal.findMany()
    * ```
    */
  get citizenProposal(): Prisma.CitizenProposalDelegate<ExtArgs, ClientOptions>;
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
    CivicChallenge: 'CivicChallenge',
    DebateForum: 'DebateForum',
    ForumParticipant: 'ForumParticipant',
    ForumMessage: 'ForumMessage',
    FactCheckCitation: 'FactCheckCitation',
    CitizenProposal: 'CitizenProposal'
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
      modelProps: "civicChallenge" | "debateForum" | "forumParticipant" | "forumMessage" | "factCheckCitation" | "citizenProposal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CivicChallenge: {
        payload: Prisma.$CivicChallengePayload<ExtArgs>
        fields: Prisma.CivicChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CivicChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CivicChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload>
          }
          findFirst: {
            args: Prisma.CivicChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CivicChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload>
          }
          findMany: {
            args: Prisma.CivicChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload>[]
          }
          create: {
            args: Prisma.CivicChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload>
          }
          createMany: {
            args: Prisma.CivicChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CivicChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload>[]
          }
          delete: {
            args: Prisma.CivicChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload>
          }
          update: {
            args: Prisma.CivicChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload>
          }
          deleteMany: {
            args: Prisma.CivicChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CivicChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CivicChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload>[]
          }
          upsert: {
            args: Prisma.CivicChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CivicChallengePayload>
          }
          aggregate: {
            args: Prisma.CivicChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCivicChallenge>
          }
          groupBy: {
            args: Prisma.CivicChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CivicChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CivicChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<CivicChallengeCountAggregateOutputType> | number
          }
        }
      }
      DebateForum: {
        payload: Prisma.$DebateForumPayload<ExtArgs>
        fields: Prisma.DebateForumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebateForumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebateForumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload>
          }
          findFirst: {
            args: Prisma.DebateForumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebateForumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload>
          }
          findMany: {
            args: Prisma.DebateForumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload>[]
          }
          create: {
            args: Prisma.DebateForumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload>
          }
          createMany: {
            args: Prisma.DebateForumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebateForumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload>[]
          }
          delete: {
            args: Prisma.DebateForumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload>
          }
          update: {
            args: Prisma.DebateForumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload>
          }
          deleteMany: {
            args: Prisma.DebateForumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebateForumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DebateForumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload>[]
          }
          upsert: {
            args: Prisma.DebateForumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebateForumPayload>
          }
          aggregate: {
            args: Prisma.DebateForumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebateForum>
          }
          groupBy: {
            args: Prisma.DebateForumGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebateForumGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebateForumCountArgs<ExtArgs>
            result: $Utils.Optional<DebateForumCountAggregateOutputType> | number
          }
        }
      }
      ForumParticipant: {
        payload: Prisma.$ForumParticipantPayload<ExtArgs>
        fields: Prisma.ForumParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload>
          }
          findFirst: {
            args: Prisma.ForumParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload>
          }
          findMany: {
            args: Prisma.ForumParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload>[]
          }
          create: {
            args: Prisma.ForumParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload>
          }
          createMany: {
            args: Prisma.ForumParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload>[]
          }
          delete: {
            args: Prisma.ForumParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload>
          }
          update: {
            args: Prisma.ForumParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ForumParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ForumParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumParticipantPayload>
          }
          aggregate: {
            args: Prisma.ForumParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumParticipant>
          }
          groupBy: {
            args: Prisma.ForumParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ForumParticipantCountAggregateOutputType> | number
          }
        }
      }
      ForumMessage: {
        payload: Prisma.$ForumMessagePayload<ExtArgs>
        fields: Prisma.ForumMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload>
          }
          findFirst: {
            args: Prisma.ForumMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload>
          }
          findMany: {
            args: Prisma.ForumMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload>[]
          }
          create: {
            args: Prisma.ForumMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload>
          }
          createMany: {
            args: Prisma.ForumMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload>[]
          }
          delete: {
            args: Prisma.ForumMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload>
          }
          update: {
            args: Prisma.ForumMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload>
          }
          deleteMany: {
            args: Prisma.ForumMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload>[]
          }
          upsert: {
            args: Prisma.ForumMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumMessagePayload>
          }
          aggregate: {
            args: Prisma.ForumMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumMessage>
          }
          groupBy: {
            args: Prisma.ForumMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ForumMessageCountAggregateOutputType> | number
          }
        }
      }
      FactCheckCitation: {
        payload: Prisma.$FactCheckCitationPayload<ExtArgs>
        fields: Prisma.FactCheckCitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactCheckCitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactCheckCitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload>
          }
          findFirst: {
            args: Prisma.FactCheckCitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactCheckCitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload>
          }
          findMany: {
            args: Prisma.FactCheckCitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload>[]
          }
          create: {
            args: Prisma.FactCheckCitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload>
          }
          createMany: {
            args: Prisma.FactCheckCitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactCheckCitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload>[]
          }
          delete: {
            args: Prisma.FactCheckCitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload>
          }
          update: {
            args: Prisma.FactCheckCitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload>
          }
          deleteMany: {
            args: Prisma.FactCheckCitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactCheckCitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FactCheckCitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload>[]
          }
          upsert: {
            args: Prisma.FactCheckCitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactCheckCitationPayload>
          }
          aggregate: {
            args: Prisma.FactCheckCitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactCheckCitation>
          }
          groupBy: {
            args: Prisma.FactCheckCitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactCheckCitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactCheckCitationCountArgs<ExtArgs>
            result: $Utils.Optional<FactCheckCitationCountAggregateOutputType> | number
          }
        }
      }
      CitizenProposal: {
        payload: Prisma.$CitizenProposalPayload<ExtArgs>
        fields: Prisma.CitizenProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitizenProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitizenProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload>
          }
          findFirst: {
            args: Prisma.CitizenProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitizenProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload>
          }
          findMany: {
            args: Prisma.CitizenProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload>[]
          }
          create: {
            args: Prisma.CitizenProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload>
          }
          createMany: {
            args: Prisma.CitizenProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CitizenProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload>[]
          }
          delete: {
            args: Prisma.CitizenProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload>
          }
          update: {
            args: Prisma.CitizenProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload>
          }
          deleteMany: {
            args: Prisma.CitizenProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitizenProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CitizenProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload>[]
          }
          upsert: {
            args: Prisma.CitizenProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitizenProposalPayload>
          }
          aggregate: {
            args: Prisma.CitizenProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCitizenProposal>
          }
          groupBy: {
            args: Prisma.CitizenProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitizenProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitizenProposalCountArgs<ExtArgs>
            result: $Utils.Optional<CitizenProposalCountAggregateOutputType> | number
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
    civicChallenge?: CivicChallengeOmit
    debateForum?: DebateForumOmit
    forumParticipant?: ForumParticipantOmit
    forumMessage?: ForumMessageOmit
    factCheckCitation?: FactCheckCitationOmit
    citizenProposal?: CitizenProposalOmit
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
   * Count Type CivicChallengeCountOutputType
   */

  export type CivicChallengeCountOutputType = {
    proposals: number
  }

  export type CivicChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposals?: boolean | CivicChallengeCountOutputTypeCountProposalsArgs
  }

  // Custom InputTypes
  /**
   * CivicChallengeCountOutputType without action
   */
  export type CivicChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallengeCountOutputType
     */
    select?: CivicChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CivicChallengeCountOutputType without action
   */
  export type CivicChallengeCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitizenProposalWhereInput
  }


  /**
   * Count Type DebateForumCountOutputType
   */

  export type DebateForumCountOutputType = {
    messages: number
    participants: number
  }

  export type DebateForumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | DebateForumCountOutputTypeCountMessagesArgs
    participants?: boolean | DebateForumCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * DebateForumCountOutputType without action
   */
  export type DebateForumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForumCountOutputType
     */
    select?: DebateForumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DebateForumCountOutputType without action
   */
  export type DebateForumCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumMessageWhereInput
  }

  /**
   * DebateForumCountOutputType without action
   */
  export type DebateForumCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumParticipantWhereInput
  }


  /**
   * Count Type ForumMessageCountOutputType
   */

  export type ForumMessageCountOutputType = {
    replies: number
    citations: number
  }

  export type ForumMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | ForumMessageCountOutputTypeCountRepliesArgs
    citations?: boolean | ForumMessageCountOutputTypeCountCitationsArgs
  }

  // Custom InputTypes
  /**
   * ForumMessageCountOutputType without action
   */
  export type ForumMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessageCountOutputType
     */
    select?: ForumMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumMessageCountOutputType without action
   */
  export type ForumMessageCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumMessageWhereInput
  }

  /**
   * ForumMessageCountOutputType without action
   */
  export type ForumMessageCountOutputTypeCountCitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactCheckCitationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CivicChallenge
   */

  export type AggregateCivicChallenge = {
    _count: CivicChallengeCountAggregateOutputType | null
    _min: CivicChallengeMinAggregateOutputType | null
    _max: CivicChallengeMaxAggregateOutputType | null
  }

  export type CivicChallengeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
    classroomId: string | null
    title: string | null
    problemStatement: string | null
    context: string | null
    category: string | null
    gradeLevel: string | null
    status: $Enums.ChallengeStatus | null
    opensAt: Date | null
    closesAt: Date | null
  }

  export type CivicChallengeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
    classroomId: string | null
    title: string | null
    problemStatement: string | null
    context: string | null
    category: string | null
    gradeLevel: string | null
    status: $Enums.ChallengeStatus | null
    opensAt: Date | null
    closesAt: Date | null
  }

  export type CivicChallengeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    teacherId: number
    classroomId: number
    title: number
    problemStatement: number
    context: number
    category: number
    gradeLevel: number
    status: number
    guidingQuestions: number
    rubric: number
    opensAt: number
    closesAt: number
    _all: number
  }


  export type CivicChallengeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    classroomId?: true
    title?: true
    problemStatement?: true
    context?: true
    category?: true
    gradeLevel?: true
    status?: true
    opensAt?: true
    closesAt?: true
  }

  export type CivicChallengeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    classroomId?: true
    title?: true
    problemStatement?: true
    context?: true
    category?: true
    gradeLevel?: true
    status?: true
    opensAt?: true
    closesAt?: true
  }

  export type CivicChallengeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    teacherId?: true
    classroomId?: true
    title?: true
    problemStatement?: true
    context?: true
    category?: true
    gradeLevel?: true
    status?: true
    guidingQuestions?: true
    rubric?: true
    opensAt?: true
    closesAt?: true
    _all?: true
  }

  export type CivicChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CivicChallenge to aggregate.
     */
    where?: CivicChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CivicChallenges to fetch.
     */
    orderBy?: CivicChallengeOrderByWithRelationInput | CivicChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CivicChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CivicChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CivicChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CivicChallenges
    **/
    _count?: true | CivicChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CivicChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CivicChallengeMaxAggregateInputType
  }

  export type GetCivicChallengeAggregateType<T extends CivicChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateCivicChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCivicChallenge[P]>
      : GetScalarType<T[P], AggregateCivicChallenge[P]>
  }




  export type CivicChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CivicChallengeWhereInput
    orderBy?: CivicChallengeOrderByWithAggregationInput | CivicChallengeOrderByWithAggregationInput[]
    by: CivicChallengeScalarFieldEnum[] | CivicChallengeScalarFieldEnum
    having?: CivicChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CivicChallengeCountAggregateInputType | true
    _min?: CivicChallengeMinAggregateInputType
    _max?: CivicChallengeMaxAggregateInputType
  }

  export type CivicChallengeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    teacherId: string
    classroomId: string | null
    title: string
    problemStatement: string
    context: string | null
    category: string
    gradeLevel: string | null
    status: $Enums.ChallengeStatus
    guidingQuestions: string[]
    rubric: JsonValue | null
    opensAt: Date | null
    closesAt: Date | null
    _count: CivicChallengeCountAggregateOutputType | null
    _min: CivicChallengeMinAggregateOutputType | null
    _max: CivicChallengeMaxAggregateOutputType | null
  }

  type GetCivicChallengeGroupByPayload<T extends CivicChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CivicChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CivicChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CivicChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], CivicChallengeGroupByOutputType[P]>
        }
      >
    >


  export type CivicChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    classroomId?: boolean
    title?: boolean
    problemStatement?: boolean
    context?: boolean
    category?: boolean
    gradeLevel?: boolean
    status?: boolean
    guidingQuestions?: boolean
    rubric?: boolean
    opensAt?: boolean
    closesAt?: boolean
    forum?: boolean | CivicChallenge$forumArgs<ExtArgs>
    proposals?: boolean | CivicChallenge$proposalsArgs<ExtArgs>
    _count?: boolean | CivicChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["civicChallenge"]>

  export type CivicChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    classroomId?: boolean
    title?: boolean
    problemStatement?: boolean
    context?: boolean
    category?: boolean
    gradeLevel?: boolean
    status?: boolean
    guidingQuestions?: boolean
    rubric?: boolean
    opensAt?: boolean
    closesAt?: boolean
  }, ExtArgs["result"]["civicChallenge"]>

  export type CivicChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    classroomId?: boolean
    title?: boolean
    problemStatement?: boolean
    context?: boolean
    category?: boolean
    gradeLevel?: boolean
    status?: boolean
    guidingQuestions?: boolean
    rubric?: boolean
    opensAt?: boolean
    closesAt?: boolean
  }, ExtArgs["result"]["civicChallenge"]>

  export type CivicChallengeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    teacherId?: boolean
    classroomId?: boolean
    title?: boolean
    problemStatement?: boolean
    context?: boolean
    category?: boolean
    gradeLevel?: boolean
    status?: boolean
    guidingQuestions?: boolean
    rubric?: boolean
    opensAt?: boolean
    closesAt?: boolean
  }

  export type CivicChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "teacherId" | "classroomId" | "title" | "problemStatement" | "context" | "category" | "gradeLevel" | "status" | "guidingQuestions" | "rubric" | "opensAt" | "closesAt", ExtArgs["result"]["civicChallenge"]>
  export type CivicChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forum?: boolean | CivicChallenge$forumArgs<ExtArgs>
    proposals?: boolean | CivicChallenge$proposalsArgs<ExtArgs>
    _count?: boolean | CivicChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CivicChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CivicChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CivicChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CivicChallenge"
    objects: {
      forum: Prisma.$DebateForumPayload<ExtArgs> | null
      proposals: Prisma.$CitizenProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      teacherId: string
      classroomId: string | null
      title: string
      problemStatement: string
      context: string | null
      category: string
      gradeLevel: string | null
      status: $Enums.ChallengeStatus
      guidingQuestions: string[]
      rubric: Prisma.JsonValue | null
      opensAt: Date | null
      closesAt: Date | null
    }, ExtArgs["result"]["civicChallenge"]>
    composites: {}
  }

  type CivicChallengeGetPayload<S extends boolean | null | undefined | CivicChallengeDefaultArgs> = $Result.GetResult<Prisma.$CivicChallengePayload, S>

  type CivicChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CivicChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CivicChallengeCountAggregateInputType | true
    }

  export interface CivicChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CivicChallenge'], meta: { name: 'CivicChallenge' } }
    /**
     * Find zero or one CivicChallenge that matches the filter.
     * @param {CivicChallengeFindUniqueArgs} args - Arguments to find a CivicChallenge
     * @example
     * // Get one CivicChallenge
     * const civicChallenge = await prisma.civicChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CivicChallengeFindUniqueArgs>(args: SelectSubset<T, CivicChallengeFindUniqueArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CivicChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CivicChallengeFindUniqueOrThrowArgs} args - Arguments to find a CivicChallenge
     * @example
     * // Get one CivicChallenge
     * const civicChallenge = await prisma.civicChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CivicChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, CivicChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CivicChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CivicChallengeFindFirstArgs} args - Arguments to find a CivicChallenge
     * @example
     * // Get one CivicChallenge
     * const civicChallenge = await prisma.civicChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CivicChallengeFindFirstArgs>(args?: SelectSubset<T, CivicChallengeFindFirstArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CivicChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CivicChallengeFindFirstOrThrowArgs} args - Arguments to find a CivicChallenge
     * @example
     * // Get one CivicChallenge
     * const civicChallenge = await prisma.civicChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CivicChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, CivicChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CivicChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CivicChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CivicChallenges
     * const civicChallenges = await prisma.civicChallenge.findMany()
     * 
     * // Get first 10 CivicChallenges
     * const civicChallenges = await prisma.civicChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const civicChallengeWithIdOnly = await prisma.civicChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CivicChallengeFindManyArgs>(args?: SelectSubset<T, CivicChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CivicChallenge.
     * @param {CivicChallengeCreateArgs} args - Arguments to create a CivicChallenge.
     * @example
     * // Create one CivicChallenge
     * const CivicChallenge = await prisma.civicChallenge.create({
     *   data: {
     *     // ... data to create a CivicChallenge
     *   }
     * })
     * 
     */
    create<T extends CivicChallengeCreateArgs>(args: SelectSubset<T, CivicChallengeCreateArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CivicChallenges.
     * @param {CivicChallengeCreateManyArgs} args - Arguments to create many CivicChallenges.
     * @example
     * // Create many CivicChallenges
     * const civicChallenge = await prisma.civicChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CivicChallengeCreateManyArgs>(args?: SelectSubset<T, CivicChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CivicChallenges and returns the data saved in the database.
     * @param {CivicChallengeCreateManyAndReturnArgs} args - Arguments to create many CivicChallenges.
     * @example
     * // Create many CivicChallenges
     * const civicChallenge = await prisma.civicChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CivicChallenges and only return the `id`
     * const civicChallengeWithIdOnly = await prisma.civicChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CivicChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, CivicChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CivicChallenge.
     * @param {CivicChallengeDeleteArgs} args - Arguments to delete one CivicChallenge.
     * @example
     * // Delete one CivicChallenge
     * const CivicChallenge = await prisma.civicChallenge.delete({
     *   where: {
     *     // ... filter to delete one CivicChallenge
     *   }
     * })
     * 
     */
    delete<T extends CivicChallengeDeleteArgs>(args: SelectSubset<T, CivicChallengeDeleteArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CivicChallenge.
     * @param {CivicChallengeUpdateArgs} args - Arguments to update one CivicChallenge.
     * @example
     * // Update one CivicChallenge
     * const civicChallenge = await prisma.civicChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CivicChallengeUpdateArgs>(args: SelectSubset<T, CivicChallengeUpdateArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CivicChallenges.
     * @param {CivicChallengeDeleteManyArgs} args - Arguments to filter CivicChallenges to delete.
     * @example
     * // Delete a few CivicChallenges
     * const { count } = await prisma.civicChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CivicChallengeDeleteManyArgs>(args?: SelectSubset<T, CivicChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CivicChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CivicChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CivicChallenges
     * const civicChallenge = await prisma.civicChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CivicChallengeUpdateManyArgs>(args: SelectSubset<T, CivicChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CivicChallenges and returns the data updated in the database.
     * @param {CivicChallengeUpdateManyAndReturnArgs} args - Arguments to update many CivicChallenges.
     * @example
     * // Update many CivicChallenges
     * const civicChallenge = await prisma.civicChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CivicChallenges and only return the `id`
     * const civicChallengeWithIdOnly = await prisma.civicChallenge.updateManyAndReturn({
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
    updateManyAndReturn<T extends CivicChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, CivicChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CivicChallenge.
     * @param {CivicChallengeUpsertArgs} args - Arguments to update or create a CivicChallenge.
     * @example
     * // Update or create a CivicChallenge
     * const civicChallenge = await prisma.civicChallenge.upsert({
     *   create: {
     *     // ... data to create a CivicChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CivicChallenge we want to update
     *   }
     * })
     */
    upsert<T extends CivicChallengeUpsertArgs>(args: SelectSubset<T, CivicChallengeUpsertArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CivicChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CivicChallengeCountArgs} args - Arguments to filter CivicChallenges to count.
     * @example
     * // Count the number of CivicChallenges
     * const count = await prisma.civicChallenge.count({
     *   where: {
     *     // ... the filter for the CivicChallenges we want to count
     *   }
     * })
    **/
    count<T extends CivicChallengeCountArgs>(
      args?: Subset<T, CivicChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CivicChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CivicChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CivicChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CivicChallengeAggregateArgs>(args: Subset<T, CivicChallengeAggregateArgs>): Prisma.PrismaPromise<GetCivicChallengeAggregateType<T>>

    /**
     * Group by CivicChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CivicChallengeGroupByArgs} args - Group by arguments.
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
      T extends CivicChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CivicChallengeGroupByArgs['orderBy'] }
        : { orderBy?: CivicChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CivicChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCivicChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CivicChallenge model
   */
  readonly fields: CivicChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CivicChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CivicChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    forum<T extends CivicChallenge$forumArgs<ExtArgs> = {}>(args?: Subset<T, CivicChallenge$forumArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proposals<T extends CivicChallenge$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, CivicChallenge$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CivicChallenge model
   */
  interface CivicChallengeFieldRefs {
    readonly id: FieldRef<"CivicChallenge", 'String'>
    readonly createdAt: FieldRef<"CivicChallenge", 'DateTime'>
    readonly updatedAt: FieldRef<"CivicChallenge", 'DateTime'>
    readonly metadata: FieldRef<"CivicChallenge", 'Json'>
    readonly teacherId: FieldRef<"CivicChallenge", 'String'>
    readonly classroomId: FieldRef<"CivicChallenge", 'String'>
    readonly title: FieldRef<"CivicChallenge", 'String'>
    readonly problemStatement: FieldRef<"CivicChallenge", 'String'>
    readonly context: FieldRef<"CivicChallenge", 'String'>
    readonly category: FieldRef<"CivicChallenge", 'String'>
    readonly gradeLevel: FieldRef<"CivicChallenge", 'String'>
    readonly status: FieldRef<"CivicChallenge", 'ChallengeStatus'>
    readonly guidingQuestions: FieldRef<"CivicChallenge", 'String[]'>
    readonly rubric: FieldRef<"CivicChallenge", 'Json'>
    readonly opensAt: FieldRef<"CivicChallenge", 'DateTime'>
    readonly closesAt: FieldRef<"CivicChallenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CivicChallenge findUnique
   */
  export type CivicChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CivicChallenge to fetch.
     */
    where: CivicChallengeWhereUniqueInput
  }

  /**
   * CivicChallenge findUniqueOrThrow
   */
  export type CivicChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CivicChallenge to fetch.
     */
    where: CivicChallengeWhereUniqueInput
  }

  /**
   * CivicChallenge findFirst
   */
  export type CivicChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CivicChallenge to fetch.
     */
    where?: CivicChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CivicChallenges to fetch.
     */
    orderBy?: CivicChallengeOrderByWithRelationInput | CivicChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CivicChallenges.
     */
    cursor?: CivicChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CivicChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CivicChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CivicChallenges.
     */
    distinct?: CivicChallengeScalarFieldEnum | CivicChallengeScalarFieldEnum[]
  }

  /**
   * CivicChallenge findFirstOrThrow
   */
  export type CivicChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CivicChallenge to fetch.
     */
    where?: CivicChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CivicChallenges to fetch.
     */
    orderBy?: CivicChallengeOrderByWithRelationInput | CivicChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CivicChallenges.
     */
    cursor?: CivicChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CivicChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CivicChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CivicChallenges.
     */
    distinct?: CivicChallengeScalarFieldEnum | CivicChallengeScalarFieldEnum[]
  }

  /**
   * CivicChallenge findMany
   */
  export type CivicChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
    /**
     * Filter, which CivicChallenges to fetch.
     */
    where?: CivicChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CivicChallenges to fetch.
     */
    orderBy?: CivicChallengeOrderByWithRelationInput | CivicChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CivicChallenges.
     */
    cursor?: CivicChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CivicChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CivicChallenges.
     */
    skip?: number
    distinct?: CivicChallengeScalarFieldEnum | CivicChallengeScalarFieldEnum[]
  }

  /**
   * CivicChallenge create
   */
  export type CivicChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a CivicChallenge.
     */
    data: XOR<CivicChallengeCreateInput, CivicChallengeUncheckedCreateInput>
  }

  /**
   * CivicChallenge createMany
   */
  export type CivicChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CivicChallenges.
     */
    data: CivicChallengeCreateManyInput | CivicChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CivicChallenge createManyAndReturn
   */
  export type CivicChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many CivicChallenges.
     */
    data: CivicChallengeCreateManyInput | CivicChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CivicChallenge update
   */
  export type CivicChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a CivicChallenge.
     */
    data: XOR<CivicChallengeUpdateInput, CivicChallengeUncheckedUpdateInput>
    /**
     * Choose, which CivicChallenge to update.
     */
    where: CivicChallengeWhereUniqueInput
  }

  /**
   * CivicChallenge updateMany
   */
  export type CivicChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CivicChallenges.
     */
    data: XOR<CivicChallengeUpdateManyMutationInput, CivicChallengeUncheckedUpdateManyInput>
    /**
     * Filter which CivicChallenges to update
     */
    where?: CivicChallengeWhereInput
    /**
     * Limit how many CivicChallenges to update.
     */
    limit?: number
  }

  /**
   * CivicChallenge updateManyAndReturn
   */
  export type CivicChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * The data used to update CivicChallenges.
     */
    data: XOR<CivicChallengeUpdateManyMutationInput, CivicChallengeUncheckedUpdateManyInput>
    /**
     * Filter which CivicChallenges to update
     */
    where?: CivicChallengeWhereInput
    /**
     * Limit how many CivicChallenges to update.
     */
    limit?: number
  }

  /**
   * CivicChallenge upsert
   */
  export type CivicChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the CivicChallenge to update in case it exists.
     */
    where: CivicChallengeWhereUniqueInput
    /**
     * In case the CivicChallenge found by the `where` argument doesn't exist, create a new CivicChallenge with this data.
     */
    create: XOR<CivicChallengeCreateInput, CivicChallengeUncheckedCreateInput>
    /**
     * In case the CivicChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CivicChallengeUpdateInput, CivicChallengeUncheckedUpdateInput>
  }

  /**
   * CivicChallenge delete
   */
  export type CivicChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
    /**
     * Filter which CivicChallenge to delete.
     */
    where: CivicChallengeWhereUniqueInput
  }

  /**
   * CivicChallenge deleteMany
   */
  export type CivicChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CivicChallenges to delete
     */
    where?: CivicChallengeWhereInput
    /**
     * Limit how many CivicChallenges to delete.
     */
    limit?: number
  }

  /**
   * CivicChallenge.forum
   */
  export type CivicChallenge$forumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    where?: DebateForumWhereInput
  }

  /**
   * CivicChallenge.proposals
   */
  export type CivicChallenge$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    where?: CitizenProposalWhereInput
    orderBy?: CitizenProposalOrderByWithRelationInput | CitizenProposalOrderByWithRelationInput[]
    cursor?: CitizenProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitizenProposalScalarFieldEnum | CitizenProposalScalarFieldEnum[]
  }

  /**
   * CivicChallenge without action
   */
  export type CivicChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CivicChallenge
     */
    select?: CivicChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CivicChallenge
     */
    omit?: CivicChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CivicChallengeInclude<ExtArgs> | null
  }


  /**
   * Model DebateForum
   */

  export type AggregateDebateForum = {
    _count: DebateForumCountAggregateOutputType | null
    _avg: DebateForumAvgAggregateOutputType | null
    _sum: DebateForumSumAggregateOutputType | null
    _min: DebateForumMinAggregateOutputType | null
    _max: DebateForumMaxAggregateOutputType | null
  }

  export type DebateForumAvgAggregateOutputType = {
    messageCount: number | null
  }

  export type DebateForumSumAggregateOutputType = {
    messageCount: number | null
  }

  export type DebateForumMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeId: string | null
    status: $Enums.ForumStatus | null
    moderationLevel: string | null
    messageCount: number | null
    lastActivityAt: Date | null
  }

  export type DebateForumMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeId: string | null
    status: $Enums.ForumStatus | null
    moderationLevel: string | null
    messageCount: number | null
    lastActivityAt: Date | null
  }

  export type DebateForumCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    challengeId: number
    status: number
    moderationLevel: number
    messageCount: number
    lastActivityAt: number
    _all: number
  }


  export type DebateForumAvgAggregateInputType = {
    messageCount?: true
  }

  export type DebateForumSumAggregateInputType = {
    messageCount?: true
  }

  export type DebateForumMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
    status?: true
    moderationLevel?: true
    messageCount?: true
    lastActivityAt?: true
  }

  export type DebateForumMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
    status?: true
    moderationLevel?: true
    messageCount?: true
    lastActivityAt?: true
  }

  export type DebateForumCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    challengeId?: true
    status?: true
    moderationLevel?: true
    messageCount?: true
    lastActivityAt?: true
    _all?: true
  }

  export type DebateForumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebateForum to aggregate.
     */
    where?: DebateForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebateForums to fetch.
     */
    orderBy?: DebateForumOrderByWithRelationInput | DebateForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebateForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebateForums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebateForums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DebateForums
    **/
    _count?: true | DebateForumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DebateForumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DebateForumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebateForumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebateForumMaxAggregateInputType
  }

  export type GetDebateForumAggregateType<T extends DebateForumAggregateArgs> = {
        [P in keyof T & keyof AggregateDebateForum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebateForum[P]>
      : GetScalarType<T[P], AggregateDebateForum[P]>
  }




  export type DebateForumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebateForumWhereInput
    orderBy?: DebateForumOrderByWithAggregationInput | DebateForumOrderByWithAggregationInput[]
    by: DebateForumScalarFieldEnum[] | DebateForumScalarFieldEnum
    having?: DebateForumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebateForumCountAggregateInputType | true
    _avg?: DebateForumAvgAggregateInputType
    _sum?: DebateForumSumAggregateInputType
    _min?: DebateForumMinAggregateInputType
    _max?: DebateForumMaxAggregateInputType
  }

  export type DebateForumGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    challengeId: string
    status: $Enums.ForumStatus
    moderationLevel: string
    messageCount: number
    lastActivityAt: Date | null
    _count: DebateForumCountAggregateOutputType | null
    _avg: DebateForumAvgAggregateOutputType | null
    _sum: DebateForumSumAggregateOutputType | null
    _min: DebateForumMinAggregateOutputType | null
    _max: DebateForumMaxAggregateOutputType | null
  }

  type GetDebateForumGroupByPayload<T extends DebateForumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebateForumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebateForumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebateForumGroupByOutputType[P]>
            : GetScalarType<T[P], DebateForumGroupByOutputType[P]>
        }
      >
    >


  export type DebateForumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    challengeId?: boolean
    status?: boolean
    moderationLevel?: boolean
    messageCount?: boolean
    lastActivityAt?: boolean
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
    messages?: boolean | DebateForum$messagesArgs<ExtArgs>
    participants?: boolean | DebateForum$participantsArgs<ExtArgs>
    _count?: boolean | DebateForumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debateForum"]>

  export type DebateForumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    challengeId?: boolean
    status?: boolean
    moderationLevel?: boolean
    messageCount?: boolean
    lastActivityAt?: boolean
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debateForum"]>

  export type DebateForumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    challengeId?: boolean
    status?: boolean
    moderationLevel?: boolean
    messageCount?: boolean
    lastActivityAt?: boolean
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debateForum"]>

  export type DebateForumSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    challengeId?: boolean
    status?: boolean
    moderationLevel?: boolean
    messageCount?: boolean
    lastActivityAt?: boolean
  }

  export type DebateForumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "challengeId" | "status" | "moderationLevel" | "messageCount" | "lastActivityAt", ExtArgs["result"]["debateForum"]>
  export type DebateForumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
    messages?: boolean | DebateForum$messagesArgs<ExtArgs>
    participants?: boolean | DebateForum$participantsArgs<ExtArgs>
    _count?: boolean | DebateForumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DebateForumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }
  export type DebateForumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }

  export type $DebateForumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DebateForum"
    objects: {
      challenge: Prisma.$CivicChallengePayload<ExtArgs>
      messages: Prisma.$ForumMessagePayload<ExtArgs>[]
      participants: Prisma.$ForumParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      challengeId: string
      status: $Enums.ForumStatus
      moderationLevel: string
      messageCount: number
      lastActivityAt: Date | null
    }, ExtArgs["result"]["debateForum"]>
    composites: {}
  }

  type DebateForumGetPayload<S extends boolean | null | undefined | DebateForumDefaultArgs> = $Result.GetResult<Prisma.$DebateForumPayload, S>

  type DebateForumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DebateForumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DebateForumCountAggregateInputType | true
    }

  export interface DebateForumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DebateForum'], meta: { name: 'DebateForum' } }
    /**
     * Find zero or one DebateForum that matches the filter.
     * @param {DebateForumFindUniqueArgs} args - Arguments to find a DebateForum
     * @example
     * // Get one DebateForum
     * const debateForum = await prisma.debateForum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebateForumFindUniqueArgs>(args: SelectSubset<T, DebateForumFindUniqueArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DebateForum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DebateForumFindUniqueOrThrowArgs} args - Arguments to find a DebateForum
     * @example
     * // Get one DebateForum
     * const debateForum = await prisma.debateForum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebateForumFindUniqueOrThrowArgs>(args: SelectSubset<T, DebateForumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebateForum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateForumFindFirstArgs} args - Arguments to find a DebateForum
     * @example
     * // Get one DebateForum
     * const debateForum = await prisma.debateForum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebateForumFindFirstArgs>(args?: SelectSubset<T, DebateForumFindFirstArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DebateForum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateForumFindFirstOrThrowArgs} args - Arguments to find a DebateForum
     * @example
     * // Get one DebateForum
     * const debateForum = await prisma.debateForum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebateForumFindFirstOrThrowArgs>(args?: SelectSubset<T, DebateForumFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DebateForums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateForumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DebateForums
     * const debateForums = await prisma.debateForum.findMany()
     * 
     * // Get first 10 DebateForums
     * const debateForums = await prisma.debateForum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debateForumWithIdOnly = await prisma.debateForum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebateForumFindManyArgs>(args?: SelectSubset<T, DebateForumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DebateForum.
     * @param {DebateForumCreateArgs} args - Arguments to create a DebateForum.
     * @example
     * // Create one DebateForum
     * const DebateForum = await prisma.debateForum.create({
     *   data: {
     *     // ... data to create a DebateForum
     *   }
     * })
     * 
     */
    create<T extends DebateForumCreateArgs>(args: SelectSubset<T, DebateForumCreateArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DebateForums.
     * @param {DebateForumCreateManyArgs} args - Arguments to create many DebateForums.
     * @example
     * // Create many DebateForums
     * const debateForum = await prisma.debateForum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebateForumCreateManyArgs>(args?: SelectSubset<T, DebateForumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DebateForums and returns the data saved in the database.
     * @param {DebateForumCreateManyAndReturnArgs} args - Arguments to create many DebateForums.
     * @example
     * // Create many DebateForums
     * const debateForum = await prisma.debateForum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DebateForums and only return the `id`
     * const debateForumWithIdOnly = await prisma.debateForum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebateForumCreateManyAndReturnArgs>(args?: SelectSubset<T, DebateForumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DebateForum.
     * @param {DebateForumDeleteArgs} args - Arguments to delete one DebateForum.
     * @example
     * // Delete one DebateForum
     * const DebateForum = await prisma.debateForum.delete({
     *   where: {
     *     // ... filter to delete one DebateForum
     *   }
     * })
     * 
     */
    delete<T extends DebateForumDeleteArgs>(args: SelectSubset<T, DebateForumDeleteArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DebateForum.
     * @param {DebateForumUpdateArgs} args - Arguments to update one DebateForum.
     * @example
     * // Update one DebateForum
     * const debateForum = await prisma.debateForum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebateForumUpdateArgs>(args: SelectSubset<T, DebateForumUpdateArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DebateForums.
     * @param {DebateForumDeleteManyArgs} args - Arguments to filter DebateForums to delete.
     * @example
     * // Delete a few DebateForums
     * const { count } = await prisma.debateForum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebateForumDeleteManyArgs>(args?: SelectSubset<T, DebateForumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebateForums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateForumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DebateForums
     * const debateForum = await prisma.debateForum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebateForumUpdateManyArgs>(args: SelectSubset<T, DebateForumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebateForums and returns the data updated in the database.
     * @param {DebateForumUpdateManyAndReturnArgs} args - Arguments to update many DebateForums.
     * @example
     * // Update many DebateForums
     * const debateForum = await prisma.debateForum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DebateForums and only return the `id`
     * const debateForumWithIdOnly = await prisma.debateForum.updateManyAndReturn({
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
    updateManyAndReturn<T extends DebateForumUpdateManyAndReturnArgs>(args: SelectSubset<T, DebateForumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DebateForum.
     * @param {DebateForumUpsertArgs} args - Arguments to update or create a DebateForum.
     * @example
     * // Update or create a DebateForum
     * const debateForum = await prisma.debateForum.upsert({
     *   create: {
     *     // ... data to create a DebateForum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DebateForum we want to update
     *   }
     * })
     */
    upsert<T extends DebateForumUpsertArgs>(args: SelectSubset<T, DebateForumUpsertArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DebateForums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateForumCountArgs} args - Arguments to filter DebateForums to count.
     * @example
     * // Count the number of DebateForums
     * const count = await prisma.debateForum.count({
     *   where: {
     *     // ... the filter for the DebateForums we want to count
     *   }
     * })
    **/
    count<T extends DebateForumCountArgs>(
      args?: Subset<T, DebateForumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebateForumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DebateForum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateForumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DebateForumAggregateArgs>(args: Subset<T, DebateForumAggregateArgs>): Prisma.PrismaPromise<GetDebateForumAggregateType<T>>

    /**
     * Group by DebateForum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebateForumGroupByArgs} args - Group by arguments.
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
      T extends DebateForumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebateForumGroupByArgs['orderBy'] }
        : { orderBy?: DebateForumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DebateForumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebateForumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DebateForum model
   */
  readonly fields: DebateForumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DebateForum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebateForumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends CivicChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CivicChallengeDefaultArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends DebateForum$messagesArgs<ExtArgs> = {}>(args?: Subset<T, DebateForum$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends DebateForum$participantsArgs<ExtArgs> = {}>(args?: Subset<T, DebateForum$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DebateForum model
   */
  interface DebateForumFieldRefs {
    readonly id: FieldRef<"DebateForum", 'String'>
    readonly createdAt: FieldRef<"DebateForum", 'DateTime'>
    readonly updatedAt: FieldRef<"DebateForum", 'DateTime'>
    readonly metadata: FieldRef<"DebateForum", 'Json'>
    readonly challengeId: FieldRef<"DebateForum", 'String'>
    readonly status: FieldRef<"DebateForum", 'ForumStatus'>
    readonly moderationLevel: FieldRef<"DebateForum", 'String'>
    readonly messageCount: FieldRef<"DebateForum", 'Int'>
    readonly lastActivityAt: FieldRef<"DebateForum", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DebateForum findUnique
   */
  export type DebateForumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    /**
     * Filter, which DebateForum to fetch.
     */
    where: DebateForumWhereUniqueInput
  }

  /**
   * DebateForum findUniqueOrThrow
   */
  export type DebateForumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    /**
     * Filter, which DebateForum to fetch.
     */
    where: DebateForumWhereUniqueInput
  }

  /**
   * DebateForum findFirst
   */
  export type DebateForumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    /**
     * Filter, which DebateForum to fetch.
     */
    where?: DebateForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebateForums to fetch.
     */
    orderBy?: DebateForumOrderByWithRelationInput | DebateForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebateForums.
     */
    cursor?: DebateForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebateForums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebateForums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebateForums.
     */
    distinct?: DebateForumScalarFieldEnum | DebateForumScalarFieldEnum[]
  }

  /**
   * DebateForum findFirstOrThrow
   */
  export type DebateForumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    /**
     * Filter, which DebateForum to fetch.
     */
    where?: DebateForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebateForums to fetch.
     */
    orderBy?: DebateForumOrderByWithRelationInput | DebateForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebateForums.
     */
    cursor?: DebateForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebateForums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebateForums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebateForums.
     */
    distinct?: DebateForumScalarFieldEnum | DebateForumScalarFieldEnum[]
  }

  /**
   * DebateForum findMany
   */
  export type DebateForumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    /**
     * Filter, which DebateForums to fetch.
     */
    where?: DebateForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebateForums to fetch.
     */
    orderBy?: DebateForumOrderByWithRelationInput | DebateForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DebateForums.
     */
    cursor?: DebateForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebateForums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebateForums.
     */
    skip?: number
    distinct?: DebateForumScalarFieldEnum | DebateForumScalarFieldEnum[]
  }

  /**
   * DebateForum create
   */
  export type DebateForumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    /**
     * The data needed to create a DebateForum.
     */
    data: XOR<DebateForumCreateInput, DebateForumUncheckedCreateInput>
  }

  /**
   * DebateForum createMany
   */
  export type DebateForumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DebateForums.
     */
    data: DebateForumCreateManyInput | DebateForumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DebateForum createManyAndReturn
   */
  export type DebateForumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * The data used to create many DebateForums.
     */
    data: DebateForumCreateManyInput | DebateForumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DebateForum update
   */
  export type DebateForumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    /**
     * The data needed to update a DebateForum.
     */
    data: XOR<DebateForumUpdateInput, DebateForumUncheckedUpdateInput>
    /**
     * Choose, which DebateForum to update.
     */
    where: DebateForumWhereUniqueInput
  }

  /**
   * DebateForum updateMany
   */
  export type DebateForumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DebateForums.
     */
    data: XOR<DebateForumUpdateManyMutationInput, DebateForumUncheckedUpdateManyInput>
    /**
     * Filter which DebateForums to update
     */
    where?: DebateForumWhereInput
    /**
     * Limit how many DebateForums to update.
     */
    limit?: number
  }

  /**
   * DebateForum updateManyAndReturn
   */
  export type DebateForumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * The data used to update DebateForums.
     */
    data: XOR<DebateForumUpdateManyMutationInput, DebateForumUncheckedUpdateManyInput>
    /**
     * Filter which DebateForums to update
     */
    where?: DebateForumWhereInput
    /**
     * Limit how many DebateForums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DebateForum upsert
   */
  export type DebateForumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    /**
     * The filter to search for the DebateForum to update in case it exists.
     */
    where: DebateForumWhereUniqueInput
    /**
     * In case the DebateForum found by the `where` argument doesn't exist, create a new DebateForum with this data.
     */
    create: XOR<DebateForumCreateInput, DebateForumUncheckedCreateInput>
    /**
     * In case the DebateForum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebateForumUpdateInput, DebateForumUncheckedUpdateInput>
  }

  /**
   * DebateForum delete
   */
  export type DebateForumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
    /**
     * Filter which DebateForum to delete.
     */
    where: DebateForumWhereUniqueInput
  }

  /**
   * DebateForum deleteMany
   */
  export type DebateForumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebateForums to delete
     */
    where?: DebateForumWhereInput
    /**
     * Limit how many DebateForums to delete.
     */
    limit?: number
  }

  /**
   * DebateForum.messages
   */
  export type DebateForum$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    where?: ForumMessageWhereInput
    orderBy?: ForumMessageOrderByWithRelationInput | ForumMessageOrderByWithRelationInput[]
    cursor?: ForumMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumMessageScalarFieldEnum | ForumMessageScalarFieldEnum[]
  }

  /**
   * DebateForum.participants
   */
  export type DebateForum$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    where?: ForumParticipantWhereInput
    orderBy?: ForumParticipantOrderByWithRelationInput | ForumParticipantOrderByWithRelationInput[]
    cursor?: ForumParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumParticipantScalarFieldEnum | ForumParticipantScalarFieldEnum[]
  }

  /**
   * DebateForum without action
   */
  export type DebateForumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebateForum
     */
    select?: DebateForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DebateForum
     */
    omit?: DebateForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebateForumInclude<ExtArgs> | null
  }


  /**
   * Model ForumParticipant
   */

  export type AggregateForumParticipant = {
    _count: ForumParticipantCountAggregateOutputType | null
    _avg: ForumParticipantAvgAggregateOutputType | null
    _sum: ForumParticipantSumAggregateOutputType | null
    _min: ForumParticipantMinAggregateOutputType | null
    _max: ForumParticipantMaxAggregateOutputType | null
  }

  export type ForumParticipantAvgAggregateOutputType = {
    messagesSent: number | null
  }

  export type ForumParticipantSumAggregateOutputType = {
    messagesSent: number | null
  }

  export type ForumParticipantMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    forumId: string | null
    studentId: string | null
    stance: string | null
    messagesSent: number | null
  }

  export type ForumParticipantMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    forumId: string | null
    studentId: string | null
    stance: string | null
    messagesSent: number | null
  }

  export type ForumParticipantCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    forumId: number
    studentId: number
    stance: number
    messagesSent: number
    _all: number
  }


  export type ForumParticipantAvgAggregateInputType = {
    messagesSent?: true
  }

  export type ForumParticipantSumAggregateInputType = {
    messagesSent?: true
  }

  export type ForumParticipantMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    forumId?: true
    studentId?: true
    stance?: true
    messagesSent?: true
  }

  export type ForumParticipantMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    forumId?: true
    studentId?: true
    stance?: true
    messagesSent?: true
  }

  export type ForumParticipantCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    forumId?: true
    studentId?: true
    stance?: true
    messagesSent?: true
    _all?: true
  }

  export type ForumParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumParticipant to aggregate.
     */
    where?: ForumParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumParticipants to fetch.
     */
    orderBy?: ForumParticipantOrderByWithRelationInput | ForumParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumParticipants
    **/
    _count?: true | ForumParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumParticipantMaxAggregateInputType
  }

  export type GetForumParticipantAggregateType<T extends ForumParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateForumParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumParticipant[P]>
      : GetScalarType<T[P], AggregateForumParticipant[P]>
  }




  export type ForumParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumParticipantWhereInput
    orderBy?: ForumParticipantOrderByWithAggregationInput | ForumParticipantOrderByWithAggregationInput[]
    by: ForumParticipantScalarFieldEnum[] | ForumParticipantScalarFieldEnum
    having?: ForumParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumParticipantCountAggregateInputType | true
    _avg?: ForumParticipantAvgAggregateInputType
    _sum?: ForumParticipantSumAggregateInputType
    _min?: ForumParticipantMinAggregateInputType
    _max?: ForumParticipantMaxAggregateInputType
  }

  export type ForumParticipantGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    forumId: string
    studentId: string
    stance: string | null
    messagesSent: number
    _count: ForumParticipantCountAggregateOutputType | null
    _avg: ForumParticipantAvgAggregateOutputType | null
    _sum: ForumParticipantSumAggregateOutputType | null
    _min: ForumParticipantMinAggregateOutputType | null
    _max: ForumParticipantMaxAggregateOutputType | null
  }

  type GetForumParticipantGroupByPayload<T extends ForumParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ForumParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ForumParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    forumId?: boolean
    studentId?: boolean
    stance?: boolean
    messagesSent?: boolean
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumParticipant"]>

  export type ForumParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    forumId?: boolean
    studentId?: boolean
    stance?: boolean
    messagesSent?: boolean
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumParticipant"]>

  export type ForumParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    forumId?: boolean
    studentId?: boolean
    stance?: boolean
    messagesSent?: boolean
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumParticipant"]>

  export type ForumParticipantSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    forumId?: boolean
    studentId?: boolean
    stance?: boolean
    messagesSent?: boolean
  }

  export type ForumParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "forumId" | "studentId" | "stance" | "messagesSent", ExtArgs["result"]["forumParticipant"]>
  export type ForumParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
  }
  export type ForumParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
  }
  export type ForumParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
  }

  export type $ForumParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumParticipant"
    objects: {
      forum: Prisma.$DebateForumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      forumId: string
      studentId: string
      stance: string | null
      messagesSent: number
    }, ExtArgs["result"]["forumParticipant"]>
    composites: {}
  }

  type ForumParticipantGetPayload<S extends boolean | null | undefined | ForumParticipantDefaultArgs> = $Result.GetResult<Prisma.$ForumParticipantPayload, S>

  type ForumParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumParticipantCountAggregateInputType | true
    }

  export interface ForumParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumParticipant'], meta: { name: 'ForumParticipant' } }
    /**
     * Find zero or one ForumParticipant that matches the filter.
     * @param {ForumParticipantFindUniqueArgs} args - Arguments to find a ForumParticipant
     * @example
     * // Get one ForumParticipant
     * const forumParticipant = await prisma.forumParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumParticipantFindUniqueArgs>(args: SelectSubset<T, ForumParticipantFindUniqueArgs<ExtArgs>>): Prisma__ForumParticipantClient<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumParticipantFindUniqueOrThrowArgs} args - Arguments to find a ForumParticipant
     * @example
     * // Get one ForumParticipant
     * const forumParticipant = await prisma.forumParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumParticipantClient<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumParticipantFindFirstArgs} args - Arguments to find a ForumParticipant
     * @example
     * // Get one ForumParticipant
     * const forumParticipant = await prisma.forumParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumParticipantFindFirstArgs>(args?: SelectSubset<T, ForumParticipantFindFirstArgs<ExtArgs>>): Prisma__ForumParticipantClient<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumParticipantFindFirstOrThrowArgs} args - Arguments to find a ForumParticipant
     * @example
     * // Get one ForumParticipant
     * const forumParticipant = await prisma.forumParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumParticipantClient<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumParticipants
     * const forumParticipants = await prisma.forumParticipant.findMany()
     * 
     * // Get first 10 ForumParticipants
     * const forumParticipants = await prisma.forumParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumParticipantWithIdOnly = await prisma.forumParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumParticipantFindManyArgs>(args?: SelectSubset<T, ForumParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumParticipant.
     * @param {ForumParticipantCreateArgs} args - Arguments to create a ForumParticipant.
     * @example
     * // Create one ForumParticipant
     * const ForumParticipant = await prisma.forumParticipant.create({
     *   data: {
     *     // ... data to create a ForumParticipant
     *   }
     * })
     * 
     */
    create<T extends ForumParticipantCreateArgs>(args: SelectSubset<T, ForumParticipantCreateArgs<ExtArgs>>): Prisma__ForumParticipantClient<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumParticipants.
     * @param {ForumParticipantCreateManyArgs} args - Arguments to create many ForumParticipants.
     * @example
     * // Create many ForumParticipants
     * const forumParticipant = await prisma.forumParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumParticipantCreateManyArgs>(args?: SelectSubset<T, ForumParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumParticipants and returns the data saved in the database.
     * @param {ForumParticipantCreateManyAndReturnArgs} args - Arguments to create many ForumParticipants.
     * @example
     * // Create many ForumParticipants
     * const forumParticipant = await prisma.forumParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumParticipants and only return the `id`
     * const forumParticipantWithIdOnly = await prisma.forumParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumParticipant.
     * @param {ForumParticipantDeleteArgs} args - Arguments to delete one ForumParticipant.
     * @example
     * // Delete one ForumParticipant
     * const ForumParticipant = await prisma.forumParticipant.delete({
     *   where: {
     *     // ... filter to delete one ForumParticipant
     *   }
     * })
     * 
     */
    delete<T extends ForumParticipantDeleteArgs>(args: SelectSubset<T, ForumParticipantDeleteArgs<ExtArgs>>): Prisma__ForumParticipantClient<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumParticipant.
     * @param {ForumParticipantUpdateArgs} args - Arguments to update one ForumParticipant.
     * @example
     * // Update one ForumParticipant
     * const forumParticipant = await prisma.forumParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumParticipantUpdateArgs>(args: SelectSubset<T, ForumParticipantUpdateArgs<ExtArgs>>): Prisma__ForumParticipantClient<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumParticipants.
     * @param {ForumParticipantDeleteManyArgs} args - Arguments to filter ForumParticipants to delete.
     * @example
     * // Delete a few ForumParticipants
     * const { count } = await prisma.forumParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumParticipantDeleteManyArgs>(args?: SelectSubset<T, ForumParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumParticipants
     * const forumParticipant = await prisma.forumParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumParticipantUpdateManyArgs>(args: SelectSubset<T, ForumParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumParticipants and returns the data updated in the database.
     * @param {ForumParticipantUpdateManyAndReturnArgs} args - Arguments to update many ForumParticipants.
     * @example
     * // Update many ForumParticipants
     * const forumParticipant = await prisma.forumParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumParticipants and only return the `id`
     * const forumParticipantWithIdOnly = await prisma.forumParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ForumParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumParticipant.
     * @param {ForumParticipantUpsertArgs} args - Arguments to update or create a ForumParticipant.
     * @example
     * // Update or create a ForumParticipant
     * const forumParticipant = await prisma.forumParticipant.upsert({
     *   create: {
     *     // ... data to create a ForumParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumParticipant we want to update
     *   }
     * })
     */
    upsert<T extends ForumParticipantUpsertArgs>(args: SelectSubset<T, ForumParticipantUpsertArgs<ExtArgs>>): Prisma__ForumParticipantClient<$Result.GetResult<Prisma.$ForumParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumParticipantCountArgs} args - Arguments to filter ForumParticipants to count.
     * @example
     * // Count the number of ForumParticipants
     * const count = await prisma.forumParticipant.count({
     *   where: {
     *     // ... the filter for the ForumParticipants we want to count
     *   }
     * })
    **/
    count<T extends ForumParticipantCountArgs>(
      args?: Subset<T, ForumParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumParticipantAggregateArgs>(args: Subset<T, ForumParticipantAggregateArgs>): Prisma.PrismaPromise<GetForumParticipantAggregateType<T>>

    /**
     * Group by ForumParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumParticipantGroupByArgs} args - Group by arguments.
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
      T extends ForumParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ForumParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumParticipant model
   */
  readonly fields: ForumParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    forum<T extends DebateForumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DebateForumDefaultArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ForumParticipant model
   */
  interface ForumParticipantFieldRefs {
    readonly id: FieldRef<"ForumParticipant", 'String'>
    readonly createdAt: FieldRef<"ForumParticipant", 'DateTime'>
    readonly updatedAt: FieldRef<"ForumParticipant", 'DateTime'>
    readonly forumId: FieldRef<"ForumParticipant", 'String'>
    readonly studentId: FieldRef<"ForumParticipant", 'String'>
    readonly stance: FieldRef<"ForumParticipant", 'String'>
    readonly messagesSent: FieldRef<"ForumParticipant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ForumParticipant findUnique
   */
  export type ForumParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ForumParticipant to fetch.
     */
    where: ForumParticipantWhereUniqueInput
  }

  /**
   * ForumParticipant findUniqueOrThrow
   */
  export type ForumParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ForumParticipant to fetch.
     */
    where: ForumParticipantWhereUniqueInput
  }

  /**
   * ForumParticipant findFirst
   */
  export type ForumParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ForumParticipant to fetch.
     */
    where?: ForumParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumParticipants to fetch.
     */
    orderBy?: ForumParticipantOrderByWithRelationInput | ForumParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumParticipants.
     */
    cursor?: ForumParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumParticipants.
     */
    distinct?: ForumParticipantScalarFieldEnum | ForumParticipantScalarFieldEnum[]
  }

  /**
   * ForumParticipant findFirstOrThrow
   */
  export type ForumParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ForumParticipant to fetch.
     */
    where?: ForumParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumParticipants to fetch.
     */
    orderBy?: ForumParticipantOrderByWithRelationInput | ForumParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumParticipants.
     */
    cursor?: ForumParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumParticipants.
     */
    distinct?: ForumParticipantScalarFieldEnum | ForumParticipantScalarFieldEnum[]
  }

  /**
   * ForumParticipant findMany
   */
  export type ForumParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ForumParticipants to fetch.
     */
    where?: ForumParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumParticipants to fetch.
     */
    orderBy?: ForumParticipantOrderByWithRelationInput | ForumParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumParticipants.
     */
    cursor?: ForumParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumParticipants.
     */
    skip?: number
    distinct?: ForumParticipantScalarFieldEnum | ForumParticipantScalarFieldEnum[]
  }

  /**
   * ForumParticipant create
   */
  export type ForumParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumParticipant.
     */
    data: XOR<ForumParticipantCreateInput, ForumParticipantUncheckedCreateInput>
  }

  /**
   * ForumParticipant createMany
   */
  export type ForumParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumParticipants.
     */
    data: ForumParticipantCreateManyInput | ForumParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumParticipant createManyAndReturn
   */
  export type ForumParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many ForumParticipants.
     */
    data: ForumParticipantCreateManyInput | ForumParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumParticipant update
   */
  export type ForumParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumParticipant.
     */
    data: XOR<ForumParticipantUpdateInput, ForumParticipantUncheckedUpdateInput>
    /**
     * Choose, which ForumParticipant to update.
     */
    where: ForumParticipantWhereUniqueInput
  }

  /**
   * ForumParticipant updateMany
   */
  export type ForumParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumParticipants.
     */
    data: XOR<ForumParticipantUpdateManyMutationInput, ForumParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ForumParticipants to update
     */
    where?: ForumParticipantWhereInput
    /**
     * Limit how many ForumParticipants to update.
     */
    limit?: number
  }

  /**
   * ForumParticipant updateManyAndReturn
   */
  export type ForumParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * The data used to update ForumParticipants.
     */
    data: XOR<ForumParticipantUpdateManyMutationInput, ForumParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ForumParticipants to update
     */
    where?: ForumParticipantWhereInput
    /**
     * Limit how many ForumParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumParticipant upsert
   */
  export type ForumParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumParticipant to update in case it exists.
     */
    where: ForumParticipantWhereUniqueInput
    /**
     * In case the ForumParticipant found by the `where` argument doesn't exist, create a new ForumParticipant with this data.
     */
    create: XOR<ForumParticipantCreateInput, ForumParticipantUncheckedCreateInput>
    /**
     * In case the ForumParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumParticipantUpdateInput, ForumParticipantUncheckedUpdateInput>
  }

  /**
   * ForumParticipant delete
   */
  export type ForumParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
    /**
     * Filter which ForumParticipant to delete.
     */
    where: ForumParticipantWhereUniqueInput
  }

  /**
   * ForumParticipant deleteMany
   */
  export type ForumParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumParticipants to delete
     */
    where?: ForumParticipantWhereInput
    /**
     * Limit how many ForumParticipants to delete.
     */
    limit?: number
  }

  /**
   * ForumParticipant without action
   */
  export type ForumParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumParticipant
     */
    select?: ForumParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumParticipant
     */
    omit?: ForumParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumParticipantInclude<ExtArgs> | null
  }


  /**
   * Model ForumMessage
   */

  export type AggregateForumMessage = {
    _count: ForumMessageCountAggregateOutputType | null
    _min: ForumMessageMinAggregateOutputType | null
    _max: ForumMessageMaxAggregateOutputType | null
  }

  export type ForumMessageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    forumId: string | null
    authorType: $Enums.MessageAuthorType | null
    authorId: string | null
    agentRole: $Enums.AgentRole | null
    body: string | null
    replyToId: string | null
    moderationStatus: $Enums.ModerationStatus | null
    flaggedReason: string | null
  }

  export type ForumMessageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    forumId: string | null
    authorType: $Enums.MessageAuthorType | null
    authorId: string | null
    agentRole: $Enums.AgentRole | null
    body: string | null
    replyToId: string | null
    moderationStatus: $Enums.ModerationStatus | null
    flaggedReason: string | null
  }

  export type ForumMessageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    forumId: number
    authorType: number
    authorId: number
    agentRole: number
    body: number
    replyToId: number
    moderationStatus: number
    flaggedReason: number
    _all: number
  }


  export type ForumMessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    forumId?: true
    authorType?: true
    authorId?: true
    agentRole?: true
    body?: true
    replyToId?: true
    moderationStatus?: true
    flaggedReason?: true
  }

  export type ForumMessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    forumId?: true
    authorType?: true
    authorId?: true
    agentRole?: true
    body?: true
    replyToId?: true
    moderationStatus?: true
    flaggedReason?: true
  }

  export type ForumMessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    forumId?: true
    authorType?: true
    authorId?: true
    agentRole?: true
    body?: true
    replyToId?: true
    moderationStatus?: true
    flaggedReason?: true
    _all?: true
  }

  export type ForumMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumMessage to aggregate.
     */
    where?: ForumMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumMessages to fetch.
     */
    orderBy?: ForumMessageOrderByWithRelationInput | ForumMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumMessages
    **/
    _count?: true | ForumMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumMessageMaxAggregateInputType
  }

  export type GetForumMessageAggregateType<T extends ForumMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateForumMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumMessage[P]>
      : GetScalarType<T[P], AggregateForumMessage[P]>
  }




  export type ForumMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumMessageWhereInput
    orderBy?: ForumMessageOrderByWithAggregationInput | ForumMessageOrderByWithAggregationInput[]
    by: ForumMessageScalarFieldEnum[] | ForumMessageScalarFieldEnum
    having?: ForumMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumMessageCountAggregateInputType | true
    _min?: ForumMessageMinAggregateInputType
    _max?: ForumMessageMaxAggregateInputType
  }

  export type ForumMessageGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    forumId: string
    authorType: $Enums.MessageAuthorType
    authorId: string | null
    agentRole: $Enums.AgentRole | null
    body: string
    replyToId: string | null
    moderationStatus: $Enums.ModerationStatus
    flaggedReason: string | null
    _count: ForumMessageCountAggregateOutputType | null
    _min: ForumMessageMinAggregateOutputType | null
    _max: ForumMessageMaxAggregateOutputType | null
  }

  type GetForumMessageGroupByPayload<T extends ForumMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ForumMessageGroupByOutputType[P]>
        }
      >
    >


  export type ForumMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    forumId?: boolean
    authorType?: boolean
    authorId?: boolean
    agentRole?: boolean
    body?: boolean
    replyToId?: boolean
    moderationStatus?: boolean
    flaggedReason?: boolean
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
    replyTo?: boolean | ForumMessage$replyToArgs<ExtArgs>
    replies?: boolean | ForumMessage$repliesArgs<ExtArgs>
    citations?: boolean | ForumMessage$citationsArgs<ExtArgs>
    _count?: boolean | ForumMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumMessage"]>

  export type ForumMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    forumId?: boolean
    authorType?: boolean
    authorId?: boolean
    agentRole?: boolean
    body?: boolean
    replyToId?: boolean
    moderationStatus?: boolean
    flaggedReason?: boolean
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
    replyTo?: boolean | ForumMessage$replyToArgs<ExtArgs>
  }, ExtArgs["result"]["forumMessage"]>

  export type ForumMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    forumId?: boolean
    authorType?: boolean
    authorId?: boolean
    agentRole?: boolean
    body?: boolean
    replyToId?: boolean
    moderationStatus?: boolean
    flaggedReason?: boolean
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
    replyTo?: boolean | ForumMessage$replyToArgs<ExtArgs>
  }, ExtArgs["result"]["forumMessage"]>

  export type ForumMessageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    forumId?: boolean
    authorType?: boolean
    authorId?: boolean
    agentRole?: boolean
    body?: boolean
    replyToId?: boolean
    moderationStatus?: boolean
    flaggedReason?: boolean
  }

  export type ForumMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "forumId" | "authorType" | "authorId" | "agentRole" | "body" | "replyToId" | "moderationStatus" | "flaggedReason", ExtArgs["result"]["forumMessage"]>
  export type ForumMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
    replyTo?: boolean | ForumMessage$replyToArgs<ExtArgs>
    replies?: boolean | ForumMessage$repliesArgs<ExtArgs>
    citations?: boolean | ForumMessage$citationsArgs<ExtArgs>
    _count?: boolean | ForumMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
    replyTo?: boolean | ForumMessage$replyToArgs<ExtArgs>
  }
  export type ForumMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forum?: boolean | DebateForumDefaultArgs<ExtArgs>
    replyTo?: boolean | ForumMessage$replyToArgs<ExtArgs>
  }

  export type $ForumMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumMessage"
    objects: {
      forum: Prisma.$DebateForumPayload<ExtArgs>
      replyTo: Prisma.$ForumMessagePayload<ExtArgs> | null
      replies: Prisma.$ForumMessagePayload<ExtArgs>[]
      citations: Prisma.$FactCheckCitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      forumId: string
      authorType: $Enums.MessageAuthorType
      authorId: string | null
      agentRole: $Enums.AgentRole | null
      body: string
      replyToId: string | null
      moderationStatus: $Enums.ModerationStatus
      flaggedReason: string | null
    }, ExtArgs["result"]["forumMessage"]>
    composites: {}
  }

  type ForumMessageGetPayload<S extends boolean | null | undefined | ForumMessageDefaultArgs> = $Result.GetResult<Prisma.$ForumMessagePayload, S>

  type ForumMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumMessageCountAggregateInputType | true
    }

  export interface ForumMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumMessage'], meta: { name: 'ForumMessage' } }
    /**
     * Find zero or one ForumMessage that matches the filter.
     * @param {ForumMessageFindUniqueArgs} args - Arguments to find a ForumMessage
     * @example
     * // Get one ForumMessage
     * const forumMessage = await prisma.forumMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumMessageFindUniqueArgs>(args: SelectSubset<T, ForumMessageFindUniqueArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumMessageFindUniqueOrThrowArgs} args - Arguments to find a ForumMessage
     * @example
     * // Get one ForumMessage
     * const forumMessage = await prisma.forumMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMessageFindFirstArgs} args - Arguments to find a ForumMessage
     * @example
     * // Get one ForumMessage
     * const forumMessage = await prisma.forumMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumMessageFindFirstArgs>(args?: SelectSubset<T, ForumMessageFindFirstArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMessageFindFirstOrThrowArgs} args - Arguments to find a ForumMessage
     * @example
     * // Get one ForumMessage
     * const forumMessage = await prisma.forumMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumMessages
     * const forumMessages = await prisma.forumMessage.findMany()
     * 
     * // Get first 10 ForumMessages
     * const forumMessages = await prisma.forumMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumMessageWithIdOnly = await prisma.forumMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumMessageFindManyArgs>(args?: SelectSubset<T, ForumMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumMessage.
     * @param {ForumMessageCreateArgs} args - Arguments to create a ForumMessage.
     * @example
     * // Create one ForumMessage
     * const ForumMessage = await prisma.forumMessage.create({
     *   data: {
     *     // ... data to create a ForumMessage
     *   }
     * })
     * 
     */
    create<T extends ForumMessageCreateArgs>(args: SelectSubset<T, ForumMessageCreateArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumMessages.
     * @param {ForumMessageCreateManyArgs} args - Arguments to create many ForumMessages.
     * @example
     * // Create many ForumMessages
     * const forumMessage = await prisma.forumMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumMessageCreateManyArgs>(args?: SelectSubset<T, ForumMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumMessages and returns the data saved in the database.
     * @param {ForumMessageCreateManyAndReturnArgs} args - Arguments to create many ForumMessages.
     * @example
     * // Create many ForumMessages
     * const forumMessage = await prisma.forumMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumMessages and only return the `id`
     * const forumMessageWithIdOnly = await prisma.forumMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumMessage.
     * @param {ForumMessageDeleteArgs} args - Arguments to delete one ForumMessage.
     * @example
     * // Delete one ForumMessage
     * const ForumMessage = await prisma.forumMessage.delete({
     *   where: {
     *     // ... filter to delete one ForumMessage
     *   }
     * })
     * 
     */
    delete<T extends ForumMessageDeleteArgs>(args: SelectSubset<T, ForumMessageDeleteArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumMessage.
     * @param {ForumMessageUpdateArgs} args - Arguments to update one ForumMessage.
     * @example
     * // Update one ForumMessage
     * const forumMessage = await prisma.forumMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumMessageUpdateArgs>(args: SelectSubset<T, ForumMessageUpdateArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumMessages.
     * @param {ForumMessageDeleteManyArgs} args - Arguments to filter ForumMessages to delete.
     * @example
     * // Delete a few ForumMessages
     * const { count } = await prisma.forumMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumMessageDeleteManyArgs>(args?: SelectSubset<T, ForumMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumMessages
     * const forumMessage = await prisma.forumMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumMessageUpdateManyArgs>(args: SelectSubset<T, ForumMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumMessages and returns the data updated in the database.
     * @param {ForumMessageUpdateManyAndReturnArgs} args - Arguments to update many ForumMessages.
     * @example
     * // Update many ForumMessages
     * const forumMessage = await prisma.forumMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumMessages and only return the `id`
     * const forumMessageWithIdOnly = await prisma.forumMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ForumMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumMessage.
     * @param {ForumMessageUpsertArgs} args - Arguments to update or create a ForumMessage.
     * @example
     * // Update or create a ForumMessage
     * const forumMessage = await prisma.forumMessage.upsert({
     *   create: {
     *     // ... data to create a ForumMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumMessage we want to update
     *   }
     * })
     */
    upsert<T extends ForumMessageUpsertArgs>(args: SelectSubset<T, ForumMessageUpsertArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMessageCountArgs} args - Arguments to filter ForumMessages to count.
     * @example
     * // Count the number of ForumMessages
     * const count = await prisma.forumMessage.count({
     *   where: {
     *     // ... the filter for the ForumMessages we want to count
     *   }
     * })
    **/
    count<T extends ForumMessageCountArgs>(
      args?: Subset<T, ForumMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumMessageAggregateArgs>(args: Subset<T, ForumMessageAggregateArgs>): Prisma.PrismaPromise<GetForumMessageAggregateType<T>>

    /**
     * Group by ForumMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumMessageGroupByArgs} args - Group by arguments.
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
      T extends ForumMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumMessageGroupByArgs['orderBy'] }
        : { orderBy?: ForumMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumMessage model
   */
  readonly fields: ForumMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    forum<T extends DebateForumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DebateForumDefaultArgs<ExtArgs>>): Prisma__DebateForumClient<$Result.GetResult<Prisma.$DebateForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    replyTo<T extends ForumMessage$replyToArgs<ExtArgs> = {}>(args?: Subset<T, ForumMessage$replyToArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends ForumMessage$repliesArgs<ExtArgs> = {}>(args?: Subset<T, ForumMessage$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citations<T extends ForumMessage$citationsArgs<ExtArgs> = {}>(args?: Subset<T, ForumMessage$citationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ForumMessage model
   */
  interface ForumMessageFieldRefs {
    readonly id: FieldRef<"ForumMessage", 'String'>
    readonly createdAt: FieldRef<"ForumMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ForumMessage", 'DateTime'>
    readonly metadata: FieldRef<"ForumMessage", 'Json'>
    readonly forumId: FieldRef<"ForumMessage", 'String'>
    readonly authorType: FieldRef<"ForumMessage", 'MessageAuthorType'>
    readonly authorId: FieldRef<"ForumMessage", 'String'>
    readonly agentRole: FieldRef<"ForumMessage", 'AgentRole'>
    readonly body: FieldRef<"ForumMessage", 'String'>
    readonly replyToId: FieldRef<"ForumMessage", 'String'>
    readonly moderationStatus: FieldRef<"ForumMessage", 'ModerationStatus'>
    readonly flaggedReason: FieldRef<"ForumMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ForumMessage findUnique
   */
  export type ForumMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    /**
     * Filter, which ForumMessage to fetch.
     */
    where: ForumMessageWhereUniqueInput
  }

  /**
   * ForumMessage findUniqueOrThrow
   */
  export type ForumMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    /**
     * Filter, which ForumMessage to fetch.
     */
    where: ForumMessageWhereUniqueInput
  }

  /**
   * ForumMessage findFirst
   */
  export type ForumMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    /**
     * Filter, which ForumMessage to fetch.
     */
    where?: ForumMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumMessages to fetch.
     */
    orderBy?: ForumMessageOrderByWithRelationInput | ForumMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumMessages.
     */
    cursor?: ForumMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumMessages.
     */
    distinct?: ForumMessageScalarFieldEnum | ForumMessageScalarFieldEnum[]
  }

  /**
   * ForumMessage findFirstOrThrow
   */
  export type ForumMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    /**
     * Filter, which ForumMessage to fetch.
     */
    where?: ForumMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumMessages to fetch.
     */
    orderBy?: ForumMessageOrderByWithRelationInput | ForumMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumMessages.
     */
    cursor?: ForumMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumMessages.
     */
    distinct?: ForumMessageScalarFieldEnum | ForumMessageScalarFieldEnum[]
  }

  /**
   * ForumMessage findMany
   */
  export type ForumMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    /**
     * Filter, which ForumMessages to fetch.
     */
    where?: ForumMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumMessages to fetch.
     */
    orderBy?: ForumMessageOrderByWithRelationInput | ForumMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumMessages.
     */
    cursor?: ForumMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumMessages.
     */
    skip?: number
    distinct?: ForumMessageScalarFieldEnum | ForumMessageScalarFieldEnum[]
  }

  /**
   * ForumMessage create
   */
  export type ForumMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumMessage.
     */
    data: XOR<ForumMessageCreateInput, ForumMessageUncheckedCreateInput>
  }

  /**
   * ForumMessage createMany
   */
  export type ForumMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumMessages.
     */
    data: ForumMessageCreateManyInput | ForumMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumMessage createManyAndReturn
   */
  export type ForumMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ForumMessages.
     */
    data: ForumMessageCreateManyInput | ForumMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumMessage update
   */
  export type ForumMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumMessage.
     */
    data: XOR<ForumMessageUpdateInput, ForumMessageUncheckedUpdateInput>
    /**
     * Choose, which ForumMessage to update.
     */
    where: ForumMessageWhereUniqueInput
  }

  /**
   * ForumMessage updateMany
   */
  export type ForumMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumMessages.
     */
    data: XOR<ForumMessageUpdateManyMutationInput, ForumMessageUncheckedUpdateManyInput>
    /**
     * Filter which ForumMessages to update
     */
    where?: ForumMessageWhereInput
    /**
     * Limit how many ForumMessages to update.
     */
    limit?: number
  }

  /**
   * ForumMessage updateManyAndReturn
   */
  export type ForumMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * The data used to update ForumMessages.
     */
    data: XOR<ForumMessageUpdateManyMutationInput, ForumMessageUncheckedUpdateManyInput>
    /**
     * Filter which ForumMessages to update
     */
    where?: ForumMessageWhereInput
    /**
     * Limit how many ForumMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumMessage upsert
   */
  export type ForumMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumMessage to update in case it exists.
     */
    where: ForumMessageWhereUniqueInput
    /**
     * In case the ForumMessage found by the `where` argument doesn't exist, create a new ForumMessage with this data.
     */
    create: XOR<ForumMessageCreateInput, ForumMessageUncheckedCreateInput>
    /**
     * In case the ForumMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumMessageUpdateInput, ForumMessageUncheckedUpdateInput>
  }

  /**
   * ForumMessage delete
   */
  export type ForumMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    /**
     * Filter which ForumMessage to delete.
     */
    where: ForumMessageWhereUniqueInput
  }

  /**
   * ForumMessage deleteMany
   */
  export type ForumMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumMessages to delete
     */
    where?: ForumMessageWhereInput
    /**
     * Limit how many ForumMessages to delete.
     */
    limit?: number
  }

  /**
   * ForumMessage.replyTo
   */
  export type ForumMessage$replyToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    where?: ForumMessageWhereInput
  }

  /**
   * ForumMessage.replies
   */
  export type ForumMessage$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
    where?: ForumMessageWhereInput
    orderBy?: ForumMessageOrderByWithRelationInput | ForumMessageOrderByWithRelationInput[]
    cursor?: ForumMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumMessageScalarFieldEnum | ForumMessageScalarFieldEnum[]
  }

  /**
   * ForumMessage.citations
   */
  export type ForumMessage$citationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    where?: FactCheckCitationWhereInput
    orderBy?: FactCheckCitationOrderByWithRelationInput | FactCheckCitationOrderByWithRelationInput[]
    cursor?: FactCheckCitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FactCheckCitationScalarFieldEnum | FactCheckCitationScalarFieldEnum[]
  }

  /**
   * ForumMessage without action
   */
  export type ForumMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumMessage
     */
    select?: ForumMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumMessage
     */
    omit?: ForumMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumMessageInclude<ExtArgs> | null
  }


  /**
   * Model FactCheckCitation
   */

  export type AggregateFactCheckCitation = {
    _count: FactCheckCitationCountAggregateOutputType | null
    _avg: FactCheckCitationAvgAggregateOutputType | null
    _sum: FactCheckCitationSumAggregateOutputType | null
    _min: FactCheckCitationMinAggregateOutputType | null
    _max: FactCheckCitationMaxAggregateOutputType | null
  }

  export type FactCheckCitationAvgAggregateOutputType = {
    confidence: number | null
  }

  export type FactCheckCitationSumAggregateOutputType = {
    confidence: number | null
  }

  export type FactCheckCitationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    messageId: string | null
    sourceUrl: string | null
    sourceTitle: string | null
    claim: string | null
    verdict: $Enums.FactVerdict | null
    confidence: number | null
    rationale: string | null
  }

  export type FactCheckCitationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    messageId: string | null
    sourceUrl: string | null
    sourceTitle: string | null
    claim: string | null
    verdict: $Enums.FactVerdict | null
    confidence: number | null
    rationale: string | null
  }

  export type FactCheckCitationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    messageId: number
    sourceUrl: number
    sourceTitle: number
    claim: number
    verdict: number
    confidence: number
    rationale: number
    supportingSources: number
    _all: number
  }


  export type FactCheckCitationAvgAggregateInputType = {
    confidence?: true
  }

  export type FactCheckCitationSumAggregateInputType = {
    confidence?: true
  }

  export type FactCheckCitationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    messageId?: true
    sourceUrl?: true
    sourceTitle?: true
    claim?: true
    verdict?: true
    confidence?: true
    rationale?: true
  }

  export type FactCheckCitationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    messageId?: true
    sourceUrl?: true
    sourceTitle?: true
    claim?: true
    verdict?: true
    confidence?: true
    rationale?: true
  }

  export type FactCheckCitationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    messageId?: true
    sourceUrl?: true
    sourceTitle?: true
    claim?: true
    verdict?: true
    confidence?: true
    rationale?: true
    supportingSources?: true
    _all?: true
  }

  export type FactCheckCitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FactCheckCitation to aggregate.
     */
    where?: FactCheckCitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactCheckCitations to fetch.
     */
    orderBy?: FactCheckCitationOrderByWithRelationInput | FactCheckCitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactCheckCitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactCheckCitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactCheckCitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FactCheckCitations
    **/
    _count?: true | FactCheckCitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactCheckCitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactCheckCitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactCheckCitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactCheckCitationMaxAggregateInputType
  }

  export type GetFactCheckCitationAggregateType<T extends FactCheckCitationAggregateArgs> = {
        [P in keyof T & keyof AggregateFactCheckCitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactCheckCitation[P]>
      : GetScalarType<T[P], AggregateFactCheckCitation[P]>
  }




  export type FactCheckCitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactCheckCitationWhereInput
    orderBy?: FactCheckCitationOrderByWithAggregationInput | FactCheckCitationOrderByWithAggregationInput[]
    by: FactCheckCitationScalarFieldEnum[] | FactCheckCitationScalarFieldEnum
    having?: FactCheckCitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactCheckCitationCountAggregateInputType | true
    _avg?: FactCheckCitationAvgAggregateInputType
    _sum?: FactCheckCitationSumAggregateInputType
    _min?: FactCheckCitationMinAggregateInputType
    _max?: FactCheckCitationMaxAggregateInputType
  }

  export type FactCheckCitationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    messageId: string
    sourceUrl: string | null
    sourceTitle: string | null
    claim: string
    verdict: $Enums.FactVerdict
    confidence: number
    rationale: string | null
    supportingSources: JsonValue | null
    _count: FactCheckCitationCountAggregateOutputType | null
    _avg: FactCheckCitationAvgAggregateOutputType | null
    _sum: FactCheckCitationSumAggregateOutputType | null
    _min: FactCheckCitationMinAggregateOutputType | null
    _max: FactCheckCitationMaxAggregateOutputType | null
  }

  type GetFactCheckCitationGroupByPayload<T extends FactCheckCitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactCheckCitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactCheckCitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactCheckCitationGroupByOutputType[P]>
            : GetScalarType<T[P], FactCheckCitationGroupByOutputType[P]>
        }
      >
    >


  export type FactCheckCitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    messageId?: boolean
    sourceUrl?: boolean
    sourceTitle?: boolean
    claim?: boolean
    verdict?: boolean
    confidence?: boolean
    rationale?: boolean
    supportingSources?: boolean
    message?: boolean | ForumMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factCheckCitation"]>

  export type FactCheckCitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    messageId?: boolean
    sourceUrl?: boolean
    sourceTitle?: boolean
    claim?: boolean
    verdict?: boolean
    confidence?: boolean
    rationale?: boolean
    supportingSources?: boolean
    message?: boolean | ForumMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factCheckCitation"]>

  export type FactCheckCitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    messageId?: boolean
    sourceUrl?: boolean
    sourceTitle?: boolean
    claim?: boolean
    verdict?: boolean
    confidence?: boolean
    rationale?: boolean
    supportingSources?: boolean
    message?: boolean | ForumMessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factCheckCitation"]>

  export type FactCheckCitationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    messageId?: boolean
    sourceUrl?: boolean
    sourceTitle?: boolean
    claim?: boolean
    verdict?: boolean
    confidence?: boolean
    rationale?: boolean
    supportingSources?: boolean
  }

  export type FactCheckCitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "messageId" | "sourceUrl" | "sourceTitle" | "claim" | "verdict" | "confidence" | "rationale" | "supportingSources", ExtArgs["result"]["factCheckCitation"]>
  export type FactCheckCitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | ForumMessageDefaultArgs<ExtArgs>
  }
  export type FactCheckCitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | ForumMessageDefaultArgs<ExtArgs>
  }
  export type FactCheckCitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | ForumMessageDefaultArgs<ExtArgs>
  }

  export type $FactCheckCitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FactCheckCitation"
    objects: {
      message: Prisma.$ForumMessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      messageId: string
      sourceUrl: string | null
      sourceTitle: string | null
      claim: string
      verdict: $Enums.FactVerdict
      confidence: number
      rationale: string | null
      supportingSources: Prisma.JsonValue | null
    }, ExtArgs["result"]["factCheckCitation"]>
    composites: {}
  }

  type FactCheckCitationGetPayload<S extends boolean | null | undefined | FactCheckCitationDefaultArgs> = $Result.GetResult<Prisma.$FactCheckCitationPayload, S>

  type FactCheckCitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FactCheckCitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactCheckCitationCountAggregateInputType | true
    }

  export interface FactCheckCitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FactCheckCitation'], meta: { name: 'FactCheckCitation' } }
    /**
     * Find zero or one FactCheckCitation that matches the filter.
     * @param {FactCheckCitationFindUniqueArgs} args - Arguments to find a FactCheckCitation
     * @example
     * // Get one FactCheckCitation
     * const factCheckCitation = await prisma.factCheckCitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactCheckCitationFindUniqueArgs>(args: SelectSubset<T, FactCheckCitationFindUniqueArgs<ExtArgs>>): Prisma__FactCheckCitationClient<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FactCheckCitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FactCheckCitationFindUniqueOrThrowArgs} args - Arguments to find a FactCheckCitation
     * @example
     * // Get one FactCheckCitation
     * const factCheckCitation = await prisma.factCheckCitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactCheckCitationFindUniqueOrThrowArgs>(args: SelectSubset<T, FactCheckCitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactCheckCitationClient<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FactCheckCitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactCheckCitationFindFirstArgs} args - Arguments to find a FactCheckCitation
     * @example
     * // Get one FactCheckCitation
     * const factCheckCitation = await prisma.factCheckCitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactCheckCitationFindFirstArgs>(args?: SelectSubset<T, FactCheckCitationFindFirstArgs<ExtArgs>>): Prisma__FactCheckCitationClient<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FactCheckCitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactCheckCitationFindFirstOrThrowArgs} args - Arguments to find a FactCheckCitation
     * @example
     * // Get one FactCheckCitation
     * const factCheckCitation = await prisma.factCheckCitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactCheckCitationFindFirstOrThrowArgs>(args?: SelectSubset<T, FactCheckCitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactCheckCitationClient<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FactCheckCitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactCheckCitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FactCheckCitations
     * const factCheckCitations = await prisma.factCheckCitation.findMany()
     * 
     * // Get first 10 FactCheckCitations
     * const factCheckCitations = await prisma.factCheckCitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factCheckCitationWithIdOnly = await prisma.factCheckCitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactCheckCitationFindManyArgs>(args?: SelectSubset<T, FactCheckCitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FactCheckCitation.
     * @param {FactCheckCitationCreateArgs} args - Arguments to create a FactCheckCitation.
     * @example
     * // Create one FactCheckCitation
     * const FactCheckCitation = await prisma.factCheckCitation.create({
     *   data: {
     *     // ... data to create a FactCheckCitation
     *   }
     * })
     * 
     */
    create<T extends FactCheckCitationCreateArgs>(args: SelectSubset<T, FactCheckCitationCreateArgs<ExtArgs>>): Prisma__FactCheckCitationClient<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FactCheckCitations.
     * @param {FactCheckCitationCreateManyArgs} args - Arguments to create many FactCheckCitations.
     * @example
     * // Create many FactCheckCitations
     * const factCheckCitation = await prisma.factCheckCitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactCheckCitationCreateManyArgs>(args?: SelectSubset<T, FactCheckCitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FactCheckCitations and returns the data saved in the database.
     * @param {FactCheckCitationCreateManyAndReturnArgs} args - Arguments to create many FactCheckCitations.
     * @example
     * // Create many FactCheckCitations
     * const factCheckCitation = await prisma.factCheckCitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FactCheckCitations and only return the `id`
     * const factCheckCitationWithIdOnly = await prisma.factCheckCitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactCheckCitationCreateManyAndReturnArgs>(args?: SelectSubset<T, FactCheckCitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FactCheckCitation.
     * @param {FactCheckCitationDeleteArgs} args - Arguments to delete one FactCheckCitation.
     * @example
     * // Delete one FactCheckCitation
     * const FactCheckCitation = await prisma.factCheckCitation.delete({
     *   where: {
     *     // ... filter to delete one FactCheckCitation
     *   }
     * })
     * 
     */
    delete<T extends FactCheckCitationDeleteArgs>(args: SelectSubset<T, FactCheckCitationDeleteArgs<ExtArgs>>): Prisma__FactCheckCitationClient<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FactCheckCitation.
     * @param {FactCheckCitationUpdateArgs} args - Arguments to update one FactCheckCitation.
     * @example
     * // Update one FactCheckCitation
     * const factCheckCitation = await prisma.factCheckCitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactCheckCitationUpdateArgs>(args: SelectSubset<T, FactCheckCitationUpdateArgs<ExtArgs>>): Prisma__FactCheckCitationClient<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FactCheckCitations.
     * @param {FactCheckCitationDeleteManyArgs} args - Arguments to filter FactCheckCitations to delete.
     * @example
     * // Delete a few FactCheckCitations
     * const { count } = await prisma.factCheckCitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactCheckCitationDeleteManyArgs>(args?: SelectSubset<T, FactCheckCitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FactCheckCitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactCheckCitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FactCheckCitations
     * const factCheckCitation = await prisma.factCheckCitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactCheckCitationUpdateManyArgs>(args: SelectSubset<T, FactCheckCitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FactCheckCitations and returns the data updated in the database.
     * @param {FactCheckCitationUpdateManyAndReturnArgs} args - Arguments to update many FactCheckCitations.
     * @example
     * // Update many FactCheckCitations
     * const factCheckCitation = await prisma.factCheckCitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FactCheckCitations and only return the `id`
     * const factCheckCitationWithIdOnly = await prisma.factCheckCitation.updateManyAndReturn({
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
    updateManyAndReturn<T extends FactCheckCitationUpdateManyAndReturnArgs>(args: SelectSubset<T, FactCheckCitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FactCheckCitation.
     * @param {FactCheckCitationUpsertArgs} args - Arguments to update or create a FactCheckCitation.
     * @example
     * // Update or create a FactCheckCitation
     * const factCheckCitation = await prisma.factCheckCitation.upsert({
     *   create: {
     *     // ... data to create a FactCheckCitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FactCheckCitation we want to update
     *   }
     * })
     */
    upsert<T extends FactCheckCitationUpsertArgs>(args: SelectSubset<T, FactCheckCitationUpsertArgs<ExtArgs>>): Prisma__FactCheckCitationClient<$Result.GetResult<Prisma.$FactCheckCitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FactCheckCitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactCheckCitationCountArgs} args - Arguments to filter FactCheckCitations to count.
     * @example
     * // Count the number of FactCheckCitations
     * const count = await prisma.factCheckCitation.count({
     *   where: {
     *     // ... the filter for the FactCheckCitations we want to count
     *   }
     * })
    **/
    count<T extends FactCheckCitationCountArgs>(
      args?: Subset<T, FactCheckCitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactCheckCitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FactCheckCitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactCheckCitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FactCheckCitationAggregateArgs>(args: Subset<T, FactCheckCitationAggregateArgs>): Prisma.PrismaPromise<GetFactCheckCitationAggregateType<T>>

    /**
     * Group by FactCheckCitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactCheckCitationGroupByArgs} args - Group by arguments.
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
      T extends FactCheckCitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactCheckCitationGroupByArgs['orderBy'] }
        : { orderBy?: FactCheckCitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FactCheckCitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactCheckCitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FactCheckCitation model
   */
  readonly fields: FactCheckCitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FactCheckCitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactCheckCitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends ForumMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumMessageDefaultArgs<ExtArgs>>): Prisma__ForumMessageClient<$Result.GetResult<Prisma.$ForumMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FactCheckCitation model
   */
  interface FactCheckCitationFieldRefs {
    readonly id: FieldRef<"FactCheckCitation", 'String'>
    readonly createdAt: FieldRef<"FactCheckCitation", 'DateTime'>
    readonly updatedAt: FieldRef<"FactCheckCitation", 'DateTime'>
    readonly metadata: FieldRef<"FactCheckCitation", 'Json'>
    readonly messageId: FieldRef<"FactCheckCitation", 'String'>
    readonly sourceUrl: FieldRef<"FactCheckCitation", 'String'>
    readonly sourceTitle: FieldRef<"FactCheckCitation", 'String'>
    readonly claim: FieldRef<"FactCheckCitation", 'String'>
    readonly verdict: FieldRef<"FactCheckCitation", 'FactVerdict'>
    readonly confidence: FieldRef<"FactCheckCitation", 'Float'>
    readonly rationale: FieldRef<"FactCheckCitation", 'String'>
    readonly supportingSources: FieldRef<"FactCheckCitation", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * FactCheckCitation findUnique
   */
  export type FactCheckCitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    /**
     * Filter, which FactCheckCitation to fetch.
     */
    where: FactCheckCitationWhereUniqueInput
  }

  /**
   * FactCheckCitation findUniqueOrThrow
   */
  export type FactCheckCitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    /**
     * Filter, which FactCheckCitation to fetch.
     */
    where: FactCheckCitationWhereUniqueInput
  }

  /**
   * FactCheckCitation findFirst
   */
  export type FactCheckCitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    /**
     * Filter, which FactCheckCitation to fetch.
     */
    where?: FactCheckCitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactCheckCitations to fetch.
     */
    orderBy?: FactCheckCitationOrderByWithRelationInput | FactCheckCitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FactCheckCitations.
     */
    cursor?: FactCheckCitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactCheckCitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactCheckCitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FactCheckCitations.
     */
    distinct?: FactCheckCitationScalarFieldEnum | FactCheckCitationScalarFieldEnum[]
  }

  /**
   * FactCheckCitation findFirstOrThrow
   */
  export type FactCheckCitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    /**
     * Filter, which FactCheckCitation to fetch.
     */
    where?: FactCheckCitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactCheckCitations to fetch.
     */
    orderBy?: FactCheckCitationOrderByWithRelationInput | FactCheckCitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FactCheckCitations.
     */
    cursor?: FactCheckCitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactCheckCitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactCheckCitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FactCheckCitations.
     */
    distinct?: FactCheckCitationScalarFieldEnum | FactCheckCitationScalarFieldEnum[]
  }

  /**
   * FactCheckCitation findMany
   */
  export type FactCheckCitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    /**
     * Filter, which FactCheckCitations to fetch.
     */
    where?: FactCheckCitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactCheckCitations to fetch.
     */
    orderBy?: FactCheckCitationOrderByWithRelationInput | FactCheckCitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FactCheckCitations.
     */
    cursor?: FactCheckCitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactCheckCitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactCheckCitations.
     */
    skip?: number
    distinct?: FactCheckCitationScalarFieldEnum | FactCheckCitationScalarFieldEnum[]
  }

  /**
   * FactCheckCitation create
   */
  export type FactCheckCitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    /**
     * The data needed to create a FactCheckCitation.
     */
    data: XOR<FactCheckCitationCreateInput, FactCheckCitationUncheckedCreateInput>
  }

  /**
   * FactCheckCitation createMany
   */
  export type FactCheckCitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FactCheckCitations.
     */
    data: FactCheckCitationCreateManyInput | FactCheckCitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FactCheckCitation createManyAndReturn
   */
  export type FactCheckCitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * The data used to create many FactCheckCitations.
     */
    data: FactCheckCitationCreateManyInput | FactCheckCitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FactCheckCitation update
   */
  export type FactCheckCitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    /**
     * The data needed to update a FactCheckCitation.
     */
    data: XOR<FactCheckCitationUpdateInput, FactCheckCitationUncheckedUpdateInput>
    /**
     * Choose, which FactCheckCitation to update.
     */
    where: FactCheckCitationWhereUniqueInput
  }

  /**
   * FactCheckCitation updateMany
   */
  export type FactCheckCitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FactCheckCitations.
     */
    data: XOR<FactCheckCitationUpdateManyMutationInput, FactCheckCitationUncheckedUpdateManyInput>
    /**
     * Filter which FactCheckCitations to update
     */
    where?: FactCheckCitationWhereInput
    /**
     * Limit how many FactCheckCitations to update.
     */
    limit?: number
  }

  /**
   * FactCheckCitation updateManyAndReturn
   */
  export type FactCheckCitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * The data used to update FactCheckCitations.
     */
    data: XOR<FactCheckCitationUpdateManyMutationInput, FactCheckCitationUncheckedUpdateManyInput>
    /**
     * Filter which FactCheckCitations to update
     */
    where?: FactCheckCitationWhereInput
    /**
     * Limit how many FactCheckCitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FactCheckCitation upsert
   */
  export type FactCheckCitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    /**
     * The filter to search for the FactCheckCitation to update in case it exists.
     */
    where: FactCheckCitationWhereUniqueInput
    /**
     * In case the FactCheckCitation found by the `where` argument doesn't exist, create a new FactCheckCitation with this data.
     */
    create: XOR<FactCheckCitationCreateInput, FactCheckCitationUncheckedCreateInput>
    /**
     * In case the FactCheckCitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactCheckCitationUpdateInput, FactCheckCitationUncheckedUpdateInput>
  }

  /**
   * FactCheckCitation delete
   */
  export type FactCheckCitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
    /**
     * Filter which FactCheckCitation to delete.
     */
    where: FactCheckCitationWhereUniqueInput
  }

  /**
   * FactCheckCitation deleteMany
   */
  export type FactCheckCitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FactCheckCitations to delete
     */
    where?: FactCheckCitationWhereInput
    /**
     * Limit how many FactCheckCitations to delete.
     */
    limit?: number
  }

  /**
   * FactCheckCitation without action
   */
  export type FactCheckCitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactCheckCitation
     */
    select?: FactCheckCitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactCheckCitation
     */
    omit?: FactCheckCitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactCheckCitationInclude<ExtArgs> | null
  }


  /**
   * Model CitizenProposal
   */

  export type AggregateCitizenProposal = {
    _count: CitizenProposalCountAggregateOutputType | null
    _min: CitizenProposalMinAggregateOutputType | null
    _max: CitizenProposalMaxAggregateOutputType | null
  }

  export type CitizenProposalMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeId: string | null
    generatedByAgent: boolean | null
    title: string | null
    summary: string | null
    problemRestatement: string | null
    status: $Enums.ProposalStatus | null
    approvedByTeacherId: string | null
  }

  export type CitizenProposalMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeId: string | null
    generatedByAgent: boolean | null
    title: string | null
    summary: string | null
    problemRestatement: string | null
    status: $Enums.ProposalStatus | null
    approvedByTeacherId: string | null
  }

  export type CitizenProposalCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    metadata: number
    challengeId: number
    generatedByAgent: number
    title: number
    summary: number
    problemRestatement: number
    proposedActions: number
    agreements: number
    tensions: number
    citedMessageIds: number
    status: number
    approvedByTeacherId: number
    _all: number
  }


  export type CitizenProposalMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
    generatedByAgent?: true
    title?: true
    summary?: true
    problemRestatement?: true
    status?: true
    approvedByTeacherId?: true
  }

  export type CitizenProposalMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
    generatedByAgent?: true
    title?: true
    summary?: true
    problemRestatement?: true
    status?: true
    approvedByTeacherId?: true
  }

  export type CitizenProposalCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    challengeId?: true
    generatedByAgent?: true
    title?: true
    summary?: true
    problemRestatement?: true
    proposedActions?: true
    agreements?: true
    tensions?: true
    citedMessageIds?: true
    status?: true
    approvedByTeacherId?: true
    _all?: true
  }

  export type CitizenProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CitizenProposal to aggregate.
     */
    where?: CitizenProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitizenProposals to fetch.
     */
    orderBy?: CitizenProposalOrderByWithRelationInput | CitizenProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitizenProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitizenProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitizenProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CitizenProposals
    **/
    _count?: true | CitizenProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitizenProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitizenProposalMaxAggregateInputType
  }

  export type GetCitizenProposalAggregateType<T extends CitizenProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateCitizenProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCitizenProposal[P]>
      : GetScalarType<T[P], AggregateCitizenProposal[P]>
  }




  export type CitizenProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitizenProposalWhereInput
    orderBy?: CitizenProposalOrderByWithAggregationInput | CitizenProposalOrderByWithAggregationInput[]
    by: CitizenProposalScalarFieldEnum[] | CitizenProposalScalarFieldEnum
    having?: CitizenProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitizenProposalCountAggregateInputType | true
    _min?: CitizenProposalMinAggregateInputType
    _max?: CitizenProposalMaxAggregateInputType
  }

  export type CitizenProposalGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    challengeId: string
    generatedByAgent: boolean
    title: string
    summary: string
    problemRestatement: string
    proposedActions: JsonValue
    agreements: string[]
    tensions: string[]
    citedMessageIds: string[]
    status: $Enums.ProposalStatus
    approvedByTeacherId: string | null
    _count: CitizenProposalCountAggregateOutputType | null
    _min: CitizenProposalMinAggregateOutputType | null
    _max: CitizenProposalMaxAggregateOutputType | null
  }

  type GetCitizenProposalGroupByPayload<T extends CitizenProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitizenProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitizenProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitizenProposalGroupByOutputType[P]>
            : GetScalarType<T[P], CitizenProposalGroupByOutputType[P]>
        }
      >
    >


  export type CitizenProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    challengeId?: boolean
    generatedByAgent?: boolean
    title?: boolean
    summary?: boolean
    problemRestatement?: boolean
    proposedActions?: boolean
    agreements?: boolean
    tensions?: boolean
    citedMessageIds?: boolean
    status?: boolean
    approvedByTeacherId?: boolean
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citizenProposal"]>

  export type CitizenProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    challengeId?: boolean
    generatedByAgent?: boolean
    title?: boolean
    summary?: boolean
    problemRestatement?: boolean
    proposedActions?: boolean
    agreements?: boolean
    tensions?: boolean
    citedMessageIds?: boolean
    status?: boolean
    approvedByTeacherId?: boolean
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citizenProposal"]>

  export type CitizenProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    challengeId?: boolean
    generatedByAgent?: boolean
    title?: boolean
    summary?: boolean
    problemRestatement?: boolean
    proposedActions?: boolean
    agreements?: boolean
    tensions?: boolean
    citedMessageIds?: boolean
    status?: boolean
    approvedByTeacherId?: boolean
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citizenProposal"]>

  export type CitizenProposalSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    challengeId?: boolean
    generatedByAgent?: boolean
    title?: boolean
    summary?: boolean
    problemRestatement?: boolean
    proposedActions?: boolean
    agreements?: boolean
    tensions?: boolean
    citedMessageIds?: boolean
    status?: boolean
    approvedByTeacherId?: boolean
  }

  export type CitizenProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "metadata" | "challengeId" | "generatedByAgent" | "title" | "summary" | "problemRestatement" | "proposedActions" | "agreements" | "tensions" | "citedMessageIds" | "status" | "approvedByTeacherId", ExtArgs["result"]["citizenProposal"]>
  export type CitizenProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }
  export type CitizenProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }
  export type CitizenProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | CivicChallengeDefaultArgs<ExtArgs>
  }

  export type $CitizenProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CitizenProposal"
    objects: {
      challenge: Prisma.$CivicChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
      challengeId: string
      generatedByAgent: boolean
      title: string
      summary: string
      problemRestatement: string
      proposedActions: Prisma.JsonValue
      agreements: string[]
      tensions: string[]
      citedMessageIds: string[]
      status: $Enums.ProposalStatus
      approvedByTeacherId: string | null
    }, ExtArgs["result"]["citizenProposal"]>
    composites: {}
  }

  type CitizenProposalGetPayload<S extends boolean | null | undefined | CitizenProposalDefaultArgs> = $Result.GetResult<Prisma.$CitizenProposalPayload, S>

  type CitizenProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitizenProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitizenProposalCountAggregateInputType | true
    }

  export interface CitizenProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CitizenProposal'], meta: { name: 'CitizenProposal' } }
    /**
     * Find zero or one CitizenProposal that matches the filter.
     * @param {CitizenProposalFindUniqueArgs} args - Arguments to find a CitizenProposal
     * @example
     * // Get one CitizenProposal
     * const citizenProposal = await prisma.citizenProposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitizenProposalFindUniqueArgs>(args: SelectSubset<T, CitizenProposalFindUniqueArgs<ExtArgs>>): Prisma__CitizenProposalClient<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CitizenProposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitizenProposalFindUniqueOrThrowArgs} args - Arguments to find a CitizenProposal
     * @example
     * // Get one CitizenProposal
     * const citizenProposal = await prisma.citizenProposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitizenProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, CitizenProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitizenProposalClient<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CitizenProposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenProposalFindFirstArgs} args - Arguments to find a CitizenProposal
     * @example
     * // Get one CitizenProposal
     * const citizenProposal = await prisma.citizenProposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitizenProposalFindFirstArgs>(args?: SelectSubset<T, CitizenProposalFindFirstArgs<ExtArgs>>): Prisma__CitizenProposalClient<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CitizenProposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenProposalFindFirstOrThrowArgs} args - Arguments to find a CitizenProposal
     * @example
     * // Get one CitizenProposal
     * const citizenProposal = await prisma.citizenProposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitizenProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, CitizenProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitizenProposalClient<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CitizenProposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CitizenProposals
     * const citizenProposals = await prisma.citizenProposal.findMany()
     * 
     * // Get first 10 CitizenProposals
     * const citizenProposals = await prisma.citizenProposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citizenProposalWithIdOnly = await prisma.citizenProposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CitizenProposalFindManyArgs>(args?: SelectSubset<T, CitizenProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CitizenProposal.
     * @param {CitizenProposalCreateArgs} args - Arguments to create a CitizenProposal.
     * @example
     * // Create one CitizenProposal
     * const CitizenProposal = await prisma.citizenProposal.create({
     *   data: {
     *     // ... data to create a CitizenProposal
     *   }
     * })
     * 
     */
    create<T extends CitizenProposalCreateArgs>(args: SelectSubset<T, CitizenProposalCreateArgs<ExtArgs>>): Prisma__CitizenProposalClient<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CitizenProposals.
     * @param {CitizenProposalCreateManyArgs} args - Arguments to create many CitizenProposals.
     * @example
     * // Create many CitizenProposals
     * const citizenProposal = await prisma.citizenProposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitizenProposalCreateManyArgs>(args?: SelectSubset<T, CitizenProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CitizenProposals and returns the data saved in the database.
     * @param {CitizenProposalCreateManyAndReturnArgs} args - Arguments to create many CitizenProposals.
     * @example
     * // Create many CitizenProposals
     * const citizenProposal = await prisma.citizenProposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CitizenProposals and only return the `id`
     * const citizenProposalWithIdOnly = await prisma.citizenProposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CitizenProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, CitizenProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CitizenProposal.
     * @param {CitizenProposalDeleteArgs} args - Arguments to delete one CitizenProposal.
     * @example
     * // Delete one CitizenProposal
     * const CitizenProposal = await prisma.citizenProposal.delete({
     *   where: {
     *     // ... filter to delete one CitizenProposal
     *   }
     * })
     * 
     */
    delete<T extends CitizenProposalDeleteArgs>(args: SelectSubset<T, CitizenProposalDeleteArgs<ExtArgs>>): Prisma__CitizenProposalClient<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CitizenProposal.
     * @param {CitizenProposalUpdateArgs} args - Arguments to update one CitizenProposal.
     * @example
     * // Update one CitizenProposal
     * const citizenProposal = await prisma.citizenProposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitizenProposalUpdateArgs>(args: SelectSubset<T, CitizenProposalUpdateArgs<ExtArgs>>): Prisma__CitizenProposalClient<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CitizenProposals.
     * @param {CitizenProposalDeleteManyArgs} args - Arguments to filter CitizenProposals to delete.
     * @example
     * // Delete a few CitizenProposals
     * const { count } = await prisma.citizenProposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitizenProposalDeleteManyArgs>(args?: SelectSubset<T, CitizenProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CitizenProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CitizenProposals
     * const citizenProposal = await prisma.citizenProposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitizenProposalUpdateManyArgs>(args: SelectSubset<T, CitizenProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CitizenProposals and returns the data updated in the database.
     * @param {CitizenProposalUpdateManyAndReturnArgs} args - Arguments to update many CitizenProposals.
     * @example
     * // Update many CitizenProposals
     * const citizenProposal = await prisma.citizenProposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CitizenProposals and only return the `id`
     * const citizenProposalWithIdOnly = await prisma.citizenProposal.updateManyAndReturn({
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
    updateManyAndReturn<T extends CitizenProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, CitizenProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CitizenProposal.
     * @param {CitizenProposalUpsertArgs} args - Arguments to update or create a CitizenProposal.
     * @example
     * // Update or create a CitizenProposal
     * const citizenProposal = await prisma.citizenProposal.upsert({
     *   create: {
     *     // ... data to create a CitizenProposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CitizenProposal we want to update
     *   }
     * })
     */
    upsert<T extends CitizenProposalUpsertArgs>(args: SelectSubset<T, CitizenProposalUpsertArgs<ExtArgs>>): Prisma__CitizenProposalClient<$Result.GetResult<Prisma.$CitizenProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CitizenProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenProposalCountArgs} args - Arguments to filter CitizenProposals to count.
     * @example
     * // Count the number of CitizenProposals
     * const count = await prisma.citizenProposal.count({
     *   where: {
     *     // ... the filter for the CitizenProposals we want to count
     *   }
     * })
    **/
    count<T extends CitizenProposalCountArgs>(
      args?: Subset<T, CitizenProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitizenProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CitizenProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitizenProposalAggregateArgs>(args: Subset<T, CitizenProposalAggregateArgs>): Prisma.PrismaPromise<GetCitizenProposalAggregateType<T>>

    /**
     * Group by CitizenProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitizenProposalGroupByArgs} args - Group by arguments.
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
      T extends CitizenProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitizenProposalGroupByArgs['orderBy'] }
        : { orderBy?: CitizenProposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CitizenProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitizenProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CitizenProposal model
   */
  readonly fields: CitizenProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CitizenProposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitizenProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends CivicChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CivicChallengeDefaultArgs<ExtArgs>>): Prisma__CivicChallengeClient<$Result.GetResult<Prisma.$CivicChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CitizenProposal model
   */
  interface CitizenProposalFieldRefs {
    readonly id: FieldRef<"CitizenProposal", 'String'>
    readonly createdAt: FieldRef<"CitizenProposal", 'DateTime'>
    readonly updatedAt: FieldRef<"CitizenProposal", 'DateTime'>
    readonly metadata: FieldRef<"CitizenProposal", 'Json'>
    readonly challengeId: FieldRef<"CitizenProposal", 'String'>
    readonly generatedByAgent: FieldRef<"CitizenProposal", 'Boolean'>
    readonly title: FieldRef<"CitizenProposal", 'String'>
    readonly summary: FieldRef<"CitizenProposal", 'String'>
    readonly problemRestatement: FieldRef<"CitizenProposal", 'String'>
    readonly proposedActions: FieldRef<"CitizenProposal", 'Json'>
    readonly agreements: FieldRef<"CitizenProposal", 'String[]'>
    readonly tensions: FieldRef<"CitizenProposal", 'String[]'>
    readonly citedMessageIds: FieldRef<"CitizenProposal", 'String[]'>
    readonly status: FieldRef<"CitizenProposal", 'ProposalStatus'>
    readonly approvedByTeacherId: FieldRef<"CitizenProposal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CitizenProposal findUnique
   */
  export type CitizenProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    /**
     * Filter, which CitizenProposal to fetch.
     */
    where: CitizenProposalWhereUniqueInput
  }

  /**
   * CitizenProposal findUniqueOrThrow
   */
  export type CitizenProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    /**
     * Filter, which CitizenProposal to fetch.
     */
    where: CitizenProposalWhereUniqueInput
  }

  /**
   * CitizenProposal findFirst
   */
  export type CitizenProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    /**
     * Filter, which CitizenProposal to fetch.
     */
    where?: CitizenProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitizenProposals to fetch.
     */
    orderBy?: CitizenProposalOrderByWithRelationInput | CitizenProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CitizenProposals.
     */
    cursor?: CitizenProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitizenProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitizenProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CitizenProposals.
     */
    distinct?: CitizenProposalScalarFieldEnum | CitizenProposalScalarFieldEnum[]
  }

  /**
   * CitizenProposal findFirstOrThrow
   */
  export type CitizenProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    /**
     * Filter, which CitizenProposal to fetch.
     */
    where?: CitizenProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitizenProposals to fetch.
     */
    orderBy?: CitizenProposalOrderByWithRelationInput | CitizenProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CitizenProposals.
     */
    cursor?: CitizenProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitizenProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitizenProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CitizenProposals.
     */
    distinct?: CitizenProposalScalarFieldEnum | CitizenProposalScalarFieldEnum[]
  }

  /**
   * CitizenProposal findMany
   */
  export type CitizenProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    /**
     * Filter, which CitizenProposals to fetch.
     */
    where?: CitizenProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CitizenProposals to fetch.
     */
    orderBy?: CitizenProposalOrderByWithRelationInput | CitizenProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CitizenProposals.
     */
    cursor?: CitizenProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CitizenProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CitizenProposals.
     */
    skip?: number
    distinct?: CitizenProposalScalarFieldEnum | CitizenProposalScalarFieldEnum[]
  }

  /**
   * CitizenProposal create
   */
  export type CitizenProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a CitizenProposal.
     */
    data: XOR<CitizenProposalCreateInput, CitizenProposalUncheckedCreateInput>
  }

  /**
   * CitizenProposal createMany
   */
  export type CitizenProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CitizenProposals.
     */
    data: CitizenProposalCreateManyInput | CitizenProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CitizenProposal createManyAndReturn
   */
  export type CitizenProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * The data used to create many CitizenProposals.
     */
    data: CitizenProposalCreateManyInput | CitizenProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CitizenProposal update
   */
  export type CitizenProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a CitizenProposal.
     */
    data: XOR<CitizenProposalUpdateInput, CitizenProposalUncheckedUpdateInput>
    /**
     * Choose, which CitizenProposal to update.
     */
    where: CitizenProposalWhereUniqueInput
  }

  /**
   * CitizenProposal updateMany
   */
  export type CitizenProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CitizenProposals.
     */
    data: XOR<CitizenProposalUpdateManyMutationInput, CitizenProposalUncheckedUpdateManyInput>
    /**
     * Filter which CitizenProposals to update
     */
    where?: CitizenProposalWhereInput
    /**
     * Limit how many CitizenProposals to update.
     */
    limit?: number
  }

  /**
   * CitizenProposal updateManyAndReturn
   */
  export type CitizenProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * The data used to update CitizenProposals.
     */
    data: XOR<CitizenProposalUpdateManyMutationInput, CitizenProposalUncheckedUpdateManyInput>
    /**
     * Filter which CitizenProposals to update
     */
    where?: CitizenProposalWhereInput
    /**
     * Limit how many CitizenProposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CitizenProposal upsert
   */
  export type CitizenProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the CitizenProposal to update in case it exists.
     */
    where: CitizenProposalWhereUniqueInput
    /**
     * In case the CitizenProposal found by the `where` argument doesn't exist, create a new CitizenProposal with this data.
     */
    create: XOR<CitizenProposalCreateInput, CitizenProposalUncheckedCreateInput>
    /**
     * In case the CitizenProposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitizenProposalUpdateInput, CitizenProposalUncheckedUpdateInput>
  }

  /**
   * CitizenProposal delete
   */
  export type CitizenProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
    /**
     * Filter which CitizenProposal to delete.
     */
    where: CitizenProposalWhereUniqueInput
  }

  /**
   * CitizenProposal deleteMany
   */
  export type CitizenProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CitizenProposals to delete
     */
    where?: CitizenProposalWhereInput
    /**
     * Limit how many CitizenProposals to delete.
     */
    limit?: number
  }

  /**
   * CitizenProposal without action
   */
  export type CitizenProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitizenProposal
     */
    select?: CitizenProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CitizenProposal
     */
    omit?: CitizenProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitizenProposalInclude<ExtArgs> | null
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


  export const CivicChallengeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    teacherId: 'teacherId',
    classroomId: 'classroomId',
    title: 'title',
    problemStatement: 'problemStatement',
    context: 'context',
    category: 'category',
    gradeLevel: 'gradeLevel',
    status: 'status',
    guidingQuestions: 'guidingQuestions',
    rubric: 'rubric',
    opensAt: 'opensAt',
    closesAt: 'closesAt'
  };

  export type CivicChallengeScalarFieldEnum = (typeof CivicChallengeScalarFieldEnum)[keyof typeof CivicChallengeScalarFieldEnum]


  export const DebateForumScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    challengeId: 'challengeId',
    status: 'status',
    moderationLevel: 'moderationLevel',
    messageCount: 'messageCount',
    lastActivityAt: 'lastActivityAt'
  };

  export type DebateForumScalarFieldEnum = (typeof DebateForumScalarFieldEnum)[keyof typeof DebateForumScalarFieldEnum]


  export const ForumParticipantScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    forumId: 'forumId',
    studentId: 'studentId',
    stance: 'stance',
    messagesSent: 'messagesSent'
  };

  export type ForumParticipantScalarFieldEnum = (typeof ForumParticipantScalarFieldEnum)[keyof typeof ForumParticipantScalarFieldEnum]


  export const ForumMessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    forumId: 'forumId',
    authorType: 'authorType',
    authorId: 'authorId',
    agentRole: 'agentRole',
    body: 'body',
    replyToId: 'replyToId',
    moderationStatus: 'moderationStatus',
    flaggedReason: 'flaggedReason'
  };

  export type ForumMessageScalarFieldEnum = (typeof ForumMessageScalarFieldEnum)[keyof typeof ForumMessageScalarFieldEnum]


  export const FactCheckCitationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    messageId: 'messageId',
    sourceUrl: 'sourceUrl',
    sourceTitle: 'sourceTitle',
    claim: 'claim',
    verdict: 'verdict',
    confidence: 'confidence',
    rationale: 'rationale',
    supportingSources: 'supportingSources'
  };

  export type FactCheckCitationScalarFieldEnum = (typeof FactCheckCitationScalarFieldEnum)[keyof typeof FactCheckCitationScalarFieldEnum]


  export const CitizenProposalScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata',
    challengeId: 'challengeId',
    generatedByAgent: 'generatedByAgent',
    title: 'title',
    summary: 'summary',
    problemRestatement: 'problemRestatement',
    proposedActions: 'proposedActions',
    agreements: 'agreements',
    tensions: 'tensions',
    citedMessageIds: 'citedMessageIds',
    status: 'status',
    approvedByTeacherId: 'approvedByTeacherId'
  };

  export type CitizenProposalScalarFieldEnum = (typeof CitizenProposalScalarFieldEnum)[keyof typeof CitizenProposalScalarFieldEnum]


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
   * Reference to a field of type 'ChallengeStatus'
   */
  export type EnumChallengeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengeStatus'>
    


  /**
   * Reference to a field of type 'ChallengeStatus[]'
   */
  export type ListEnumChallengeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallengeStatus[]'>
    


  /**
   * Reference to a field of type 'ForumStatus'
   */
  export type EnumForumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ForumStatus'>
    


  /**
   * Reference to a field of type 'ForumStatus[]'
   */
  export type ListEnumForumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ForumStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MessageAuthorType'
   */
  export type EnumMessageAuthorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageAuthorType'>
    


  /**
   * Reference to a field of type 'MessageAuthorType[]'
   */
  export type ListEnumMessageAuthorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageAuthorType[]'>
    


  /**
   * Reference to a field of type 'AgentRole'
   */
  export type EnumAgentRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentRole'>
    


  /**
   * Reference to a field of type 'AgentRole[]'
   */
  export type ListEnumAgentRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentRole[]'>
    


  /**
   * Reference to a field of type 'ModerationStatus'
   */
  export type EnumModerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationStatus'>
    


  /**
   * Reference to a field of type 'ModerationStatus[]'
   */
  export type ListEnumModerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationStatus[]'>
    


  /**
   * Reference to a field of type 'FactVerdict'
   */
  export type EnumFactVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FactVerdict'>
    


  /**
   * Reference to a field of type 'FactVerdict[]'
   */
  export type ListEnumFactVerdictFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FactVerdict[]'>
    


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
   * Reference to a field of type 'ProposalStatus'
   */
  export type EnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus'>
    


  /**
   * Reference to a field of type 'ProposalStatus[]'
   */
  export type ListEnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type CivicChallengeWhereInput = {
    AND?: CivicChallengeWhereInput | CivicChallengeWhereInput[]
    OR?: CivicChallengeWhereInput[]
    NOT?: CivicChallengeWhereInput | CivicChallengeWhereInput[]
    id?: StringFilter<"CivicChallenge"> | string
    createdAt?: DateTimeFilter<"CivicChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"CivicChallenge"> | Date | string
    metadata?: JsonNullableFilter<"CivicChallenge">
    teacherId?: StringFilter<"CivicChallenge"> | string
    classroomId?: StringNullableFilter<"CivicChallenge"> | string | null
    title?: StringFilter<"CivicChallenge"> | string
    problemStatement?: StringFilter<"CivicChallenge"> | string
    context?: StringNullableFilter<"CivicChallenge"> | string | null
    category?: StringFilter<"CivicChallenge"> | string
    gradeLevel?: StringNullableFilter<"CivicChallenge"> | string | null
    status?: EnumChallengeStatusFilter<"CivicChallenge"> | $Enums.ChallengeStatus
    guidingQuestions?: StringNullableListFilter<"CivicChallenge">
    rubric?: JsonNullableFilter<"CivicChallenge">
    opensAt?: DateTimeNullableFilter<"CivicChallenge"> | Date | string | null
    closesAt?: DateTimeNullableFilter<"CivicChallenge"> | Date | string | null
    forum?: XOR<DebateForumNullableScalarRelationFilter, DebateForumWhereInput> | null
    proposals?: CitizenProposalListRelationFilter
  }

  export type CivicChallengeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    classroomId?: SortOrderInput | SortOrder
    title?: SortOrder
    problemStatement?: SortOrder
    context?: SortOrderInput | SortOrder
    category?: SortOrder
    gradeLevel?: SortOrderInput | SortOrder
    status?: SortOrder
    guidingQuestions?: SortOrder
    rubric?: SortOrderInput | SortOrder
    opensAt?: SortOrderInput | SortOrder
    closesAt?: SortOrderInput | SortOrder
    forum?: DebateForumOrderByWithRelationInput
    proposals?: CitizenProposalOrderByRelationAggregateInput
  }

  export type CivicChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CivicChallengeWhereInput | CivicChallengeWhereInput[]
    OR?: CivicChallengeWhereInput[]
    NOT?: CivicChallengeWhereInput | CivicChallengeWhereInput[]
    createdAt?: DateTimeFilter<"CivicChallenge"> | Date | string
    updatedAt?: DateTimeFilter<"CivicChallenge"> | Date | string
    metadata?: JsonNullableFilter<"CivicChallenge">
    teacherId?: StringFilter<"CivicChallenge"> | string
    classroomId?: StringNullableFilter<"CivicChallenge"> | string | null
    title?: StringFilter<"CivicChallenge"> | string
    problemStatement?: StringFilter<"CivicChallenge"> | string
    context?: StringNullableFilter<"CivicChallenge"> | string | null
    category?: StringFilter<"CivicChallenge"> | string
    gradeLevel?: StringNullableFilter<"CivicChallenge"> | string | null
    status?: EnumChallengeStatusFilter<"CivicChallenge"> | $Enums.ChallengeStatus
    guidingQuestions?: StringNullableListFilter<"CivicChallenge">
    rubric?: JsonNullableFilter<"CivicChallenge">
    opensAt?: DateTimeNullableFilter<"CivicChallenge"> | Date | string | null
    closesAt?: DateTimeNullableFilter<"CivicChallenge"> | Date | string | null
    forum?: XOR<DebateForumNullableScalarRelationFilter, DebateForumWhereInput> | null
    proposals?: CitizenProposalListRelationFilter
  }, "id">

  export type CivicChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    teacherId?: SortOrder
    classroomId?: SortOrderInput | SortOrder
    title?: SortOrder
    problemStatement?: SortOrder
    context?: SortOrderInput | SortOrder
    category?: SortOrder
    gradeLevel?: SortOrderInput | SortOrder
    status?: SortOrder
    guidingQuestions?: SortOrder
    rubric?: SortOrderInput | SortOrder
    opensAt?: SortOrderInput | SortOrder
    closesAt?: SortOrderInput | SortOrder
    _count?: CivicChallengeCountOrderByAggregateInput
    _max?: CivicChallengeMaxOrderByAggregateInput
    _min?: CivicChallengeMinOrderByAggregateInput
  }

  export type CivicChallengeScalarWhereWithAggregatesInput = {
    AND?: CivicChallengeScalarWhereWithAggregatesInput | CivicChallengeScalarWhereWithAggregatesInput[]
    OR?: CivicChallengeScalarWhereWithAggregatesInput[]
    NOT?: CivicChallengeScalarWhereWithAggregatesInput | CivicChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CivicChallenge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CivicChallenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CivicChallenge"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"CivicChallenge">
    teacherId?: StringWithAggregatesFilter<"CivicChallenge"> | string
    classroomId?: StringNullableWithAggregatesFilter<"CivicChallenge"> | string | null
    title?: StringWithAggregatesFilter<"CivicChallenge"> | string
    problemStatement?: StringWithAggregatesFilter<"CivicChallenge"> | string
    context?: StringNullableWithAggregatesFilter<"CivicChallenge"> | string | null
    category?: StringWithAggregatesFilter<"CivicChallenge"> | string
    gradeLevel?: StringNullableWithAggregatesFilter<"CivicChallenge"> | string | null
    status?: EnumChallengeStatusWithAggregatesFilter<"CivicChallenge"> | $Enums.ChallengeStatus
    guidingQuestions?: StringNullableListFilter<"CivicChallenge">
    rubric?: JsonNullableWithAggregatesFilter<"CivicChallenge">
    opensAt?: DateTimeNullableWithAggregatesFilter<"CivicChallenge"> | Date | string | null
    closesAt?: DateTimeNullableWithAggregatesFilter<"CivicChallenge"> | Date | string | null
  }

  export type DebateForumWhereInput = {
    AND?: DebateForumWhereInput | DebateForumWhereInput[]
    OR?: DebateForumWhereInput[]
    NOT?: DebateForumWhereInput | DebateForumWhereInput[]
    id?: StringFilter<"DebateForum"> | string
    createdAt?: DateTimeFilter<"DebateForum"> | Date | string
    updatedAt?: DateTimeFilter<"DebateForum"> | Date | string
    metadata?: JsonNullableFilter<"DebateForum">
    challengeId?: StringFilter<"DebateForum"> | string
    status?: EnumForumStatusFilter<"DebateForum"> | $Enums.ForumStatus
    moderationLevel?: StringFilter<"DebateForum"> | string
    messageCount?: IntFilter<"DebateForum"> | number
    lastActivityAt?: DateTimeNullableFilter<"DebateForum"> | Date | string | null
    challenge?: XOR<CivicChallengeScalarRelationFilter, CivicChallengeWhereInput>
    messages?: ForumMessageListRelationFilter
    participants?: ForumParticipantListRelationFilter
  }

  export type DebateForumOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    moderationLevel?: SortOrder
    messageCount?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    challenge?: CivicChallengeOrderByWithRelationInput
    messages?: ForumMessageOrderByRelationAggregateInput
    participants?: ForumParticipantOrderByRelationAggregateInput
  }

  export type DebateForumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    challengeId?: string
    AND?: DebateForumWhereInput | DebateForumWhereInput[]
    OR?: DebateForumWhereInput[]
    NOT?: DebateForumWhereInput | DebateForumWhereInput[]
    createdAt?: DateTimeFilter<"DebateForum"> | Date | string
    updatedAt?: DateTimeFilter<"DebateForum"> | Date | string
    metadata?: JsonNullableFilter<"DebateForum">
    status?: EnumForumStatusFilter<"DebateForum"> | $Enums.ForumStatus
    moderationLevel?: StringFilter<"DebateForum"> | string
    messageCount?: IntFilter<"DebateForum"> | number
    lastActivityAt?: DateTimeNullableFilter<"DebateForum"> | Date | string | null
    challenge?: XOR<CivicChallengeScalarRelationFilter, CivicChallengeWhereInput>
    messages?: ForumMessageListRelationFilter
    participants?: ForumParticipantListRelationFilter
  }, "id" | "challengeId">

  export type DebateForumOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    moderationLevel?: SortOrder
    messageCount?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    _count?: DebateForumCountOrderByAggregateInput
    _avg?: DebateForumAvgOrderByAggregateInput
    _max?: DebateForumMaxOrderByAggregateInput
    _min?: DebateForumMinOrderByAggregateInput
    _sum?: DebateForumSumOrderByAggregateInput
  }

  export type DebateForumScalarWhereWithAggregatesInput = {
    AND?: DebateForumScalarWhereWithAggregatesInput | DebateForumScalarWhereWithAggregatesInput[]
    OR?: DebateForumScalarWhereWithAggregatesInput[]
    NOT?: DebateForumScalarWhereWithAggregatesInput | DebateForumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DebateForum"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DebateForum"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DebateForum"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"DebateForum">
    challengeId?: StringWithAggregatesFilter<"DebateForum"> | string
    status?: EnumForumStatusWithAggregatesFilter<"DebateForum"> | $Enums.ForumStatus
    moderationLevel?: StringWithAggregatesFilter<"DebateForum"> | string
    messageCount?: IntWithAggregatesFilter<"DebateForum"> | number
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"DebateForum"> | Date | string | null
  }

  export type ForumParticipantWhereInput = {
    AND?: ForumParticipantWhereInput | ForumParticipantWhereInput[]
    OR?: ForumParticipantWhereInput[]
    NOT?: ForumParticipantWhereInput | ForumParticipantWhereInput[]
    id?: StringFilter<"ForumParticipant"> | string
    createdAt?: DateTimeFilter<"ForumParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"ForumParticipant"> | Date | string
    forumId?: StringFilter<"ForumParticipant"> | string
    studentId?: StringFilter<"ForumParticipant"> | string
    stance?: StringNullableFilter<"ForumParticipant"> | string | null
    messagesSent?: IntFilter<"ForumParticipant"> | number
    forum?: XOR<DebateForumScalarRelationFilter, DebateForumWhereInput>
  }

  export type ForumParticipantOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    forumId?: SortOrder
    studentId?: SortOrder
    stance?: SortOrderInput | SortOrder
    messagesSent?: SortOrder
    forum?: DebateForumOrderByWithRelationInput
  }

  export type ForumParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    forumId_studentId?: ForumParticipantForumIdStudentIdCompoundUniqueInput
    AND?: ForumParticipantWhereInput | ForumParticipantWhereInput[]
    OR?: ForumParticipantWhereInput[]
    NOT?: ForumParticipantWhereInput | ForumParticipantWhereInput[]
    createdAt?: DateTimeFilter<"ForumParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"ForumParticipant"> | Date | string
    forumId?: StringFilter<"ForumParticipant"> | string
    studentId?: StringFilter<"ForumParticipant"> | string
    stance?: StringNullableFilter<"ForumParticipant"> | string | null
    messagesSent?: IntFilter<"ForumParticipant"> | number
    forum?: XOR<DebateForumScalarRelationFilter, DebateForumWhereInput>
  }, "id" | "forumId_studentId">

  export type ForumParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    forumId?: SortOrder
    studentId?: SortOrder
    stance?: SortOrderInput | SortOrder
    messagesSent?: SortOrder
    _count?: ForumParticipantCountOrderByAggregateInput
    _avg?: ForumParticipantAvgOrderByAggregateInput
    _max?: ForumParticipantMaxOrderByAggregateInput
    _min?: ForumParticipantMinOrderByAggregateInput
    _sum?: ForumParticipantSumOrderByAggregateInput
  }

  export type ForumParticipantScalarWhereWithAggregatesInput = {
    AND?: ForumParticipantScalarWhereWithAggregatesInput | ForumParticipantScalarWhereWithAggregatesInput[]
    OR?: ForumParticipantScalarWhereWithAggregatesInput[]
    NOT?: ForumParticipantScalarWhereWithAggregatesInput | ForumParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumParticipant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ForumParticipant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ForumParticipant"> | Date | string
    forumId?: StringWithAggregatesFilter<"ForumParticipant"> | string
    studentId?: StringWithAggregatesFilter<"ForumParticipant"> | string
    stance?: StringNullableWithAggregatesFilter<"ForumParticipant"> | string | null
    messagesSent?: IntWithAggregatesFilter<"ForumParticipant"> | number
  }

  export type ForumMessageWhereInput = {
    AND?: ForumMessageWhereInput | ForumMessageWhereInput[]
    OR?: ForumMessageWhereInput[]
    NOT?: ForumMessageWhereInput | ForumMessageWhereInput[]
    id?: StringFilter<"ForumMessage"> | string
    createdAt?: DateTimeFilter<"ForumMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ForumMessage"> | Date | string
    metadata?: JsonNullableFilter<"ForumMessage">
    forumId?: StringFilter<"ForumMessage"> | string
    authorType?: EnumMessageAuthorTypeFilter<"ForumMessage"> | $Enums.MessageAuthorType
    authorId?: StringNullableFilter<"ForumMessage"> | string | null
    agentRole?: EnumAgentRoleNullableFilter<"ForumMessage"> | $Enums.AgentRole | null
    body?: StringFilter<"ForumMessage"> | string
    replyToId?: StringNullableFilter<"ForumMessage"> | string | null
    moderationStatus?: EnumModerationStatusFilter<"ForumMessage"> | $Enums.ModerationStatus
    flaggedReason?: StringNullableFilter<"ForumMessage"> | string | null
    forum?: XOR<DebateForumScalarRelationFilter, DebateForumWhereInput>
    replyTo?: XOR<ForumMessageNullableScalarRelationFilter, ForumMessageWhereInput> | null
    replies?: ForumMessageListRelationFilter
    citations?: FactCheckCitationListRelationFilter
  }

  export type ForumMessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    forumId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrderInput | SortOrder
    agentRole?: SortOrderInput | SortOrder
    body?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    moderationStatus?: SortOrder
    flaggedReason?: SortOrderInput | SortOrder
    forum?: DebateForumOrderByWithRelationInput
    replyTo?: ForumMessageOrderByWithRelationInput
    replies?: ForumMessageOrderByRelationAggregateInput
    citations?: FactCheckCitationOrderByRelationAggregateInput
  }

  export type ForumMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumMessageWhereInput | ForumMessageWhereInput[]
    OR?: ForumMessageWhereInput[]
    NOT?: ForumMessageWhereInput | ForumMessageWhereInput[]
    createdAt?: DateTimeFilter<"ForumMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ForumMessage"> | Date | string
    metadata?: JsonNullableFilter<"ForumMessage">
    forumId?: StringFilter<"ForumMessage"> | string
    authorType?: EnumMessageAuthorTypeFilter<"ForumMessage"> | $Enums.MessageAuthorType
    authorId?: StringNullableFilter<"ForumMessage"> | string | null
    agentRole?: EnumAgentRoleNullableFilter<"ForumMessage"> | $Enums.AgentRole | null
    body?: StringFilter<"ForumMessage"> | string
    replyToId?: StringNullableFilter<"ForumMessage"> | string | null
    moderationStatus?: EnumModerationStatusFilter<"ForumMessage"> | $Enums.ModerationStatus
    flaggedReason?: StringNullableFilter<"ForumMessage"> | string | null
    forum?: XOR<DebateForumScalarRelationFilter, DebateForumWhereInput>
    replyTo?: XOR<ForumMessageNullableScalarRelationFilter, ForumMessageWhereInput> | null
    replies?: ForumMessageListRelationFilter
    citations?: FactCheckCitationListRelationFilter
  }, "id">

  export type ForumMessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    forumId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrderInput | SortOrder
    agentRole?: SortOrderInput | SortOrder
    body?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    moderationStatus?: SortOrder
    flaggedReason?: SortOrderInput | SortOrder
    _count?: ForumMessageCountOrderByAggregateInput
    _max?: ForumMessageMaxOrderByAggregateInput
    _min?: ForumMessageMinOrderByAggregateInput
  }

  export type ForumMessageScalarWhereWithAggregatesInput = {
    AND?: ForumMessageScalarWhereWithAggregatesInput | ForumMessageScalarWhereWithAggregatesInput[]
    OR?: ForumMessageScalarWhereWithAggregatesInput[]
    NOT?: ForumMessageScalarWhereWithAggregatesInput | ForumMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ForumMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ForumMessage"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"ForumMessage">
    forumId?: StringWithAggregatesFilter<"ForumMessage"> | string
    authorType?: EnumMessageAuthorTypeWithAggregatesFilter<"ForumMessage"> | $Enums.MessageAuthorType
    authorId?: StringNullableWithAggregatesFilter<"ForumMessage"> | string | null
    agentRole?: EnumAgentRoleNullableWithAggregatesFilter<"ForumMessage"> | $Enums.AgentRole | null
    body?: StringWithAggregatesFilter<"ForumMessage"> | string
    replyToId?: StringNullableWithAggregatesFilter<"ForumMessage"> | string | null
    moderationStatus?: EnumModerationStatusWithAggregatesFilter<"ForumMessage"> | $Enums.ModerationStatus
    flaggedReason?: StringNullableWithAggregatesFilter<"ForumMessage"> | string | null
  }

  export type FactCheckCitationWhereInput = {
    AND?: FactCheckCitationWhereInput | FactCheckCitationWhereInput[]
    OR?: FactCheckCitationWhereInput[]
    NOT?: FactCheckCitationWhereInput | FactCheckCitationWhereInput[]
    id?: StringFilter<"FactCheckCitation"> | string
    createdAt?: DateTimeFilter<"FactCheckCitation"> | Date | string
    updatedAt?: DateTimeFilter<"FactCheckCitation"> | Date | string
    metadata?: JsonNullableFilter<"FactCheckCitation">
    messageId?: StringFilter<"FactCheckCitation"> | string
    sourceUrl?: StringNullableFilter<"FactCheckCitation"> | string | null
    sourceTitle?: StringNullableFilter<"FactCheckCitation"> | string | null
    claim?: StringFilter<"FactCheckCitation"> | string
    verdict?: EnumFactVerdictFilter<"FactCheckCitation"> | $Enums.FactVerdict
    confidence?: FloatFilter<"FactCheckCitation"> | number
    rationale?: StringNullableFilter<"FactCheckCitation"> | string | null
    supportingSources?: JsonNullableFilter<"FactCheckCitation">
    message?: XOR<ForumMessageScalarRelationFilter, ForumMessageWhereInput>
  }

  export type FactCheckCitationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    messageId?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    sourceTitle?: SortOrderInput | SortOrder
    claim?: SortOrder
    verdict?: SortOrder
    confidence?: SortOrder
    rationale?: SortOrderInput | SortOrder
    supportingSources?: SortOrderInput | SortOrder
    message?: ForumMessageOrderByWithRelationInput
  }

  export type FactCheckCitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FactCheckCitationWhereInput | FactCheckCitationWhereInput[]
    OR?: FactCheckCitationWhereInput[]
    NOT?: FactCheckCitationWhereInput | FactCheckCitationWhereInput[]
    createdAt?: DateTimeFilter<"FactCheckCitation"> | Date | string
    updatedAt?: DateTimeFilter<"FactCheckCitation"> | Date | string
    metadata?: JsonNullableFilter<"FactCheckCitation">
    messageId?: StringFilter<"FactCheckCitation"> | string
    sourceUrl?: StringNullableFilter<"FactCheckCitation"> | string | null
    sourceTitle?: StringNullableFilter<"FactCheckCitation"> | string | null
    claim?: StringFilter<"FactCheckCitation"> | string
    verdict?: EnumFactVerdictFilter<"FactCheckCitation"> | $Enums.FactVerdict
    confidence?: FloatFilter<"FactCheckCitation"> | number
    rationale?: StringNullableFilter<"FactCheckCitation"> | string | null
    supportingSources?: JsonNullableFilter<"FactCheckCitation">
    message?: XOR<ForumMessageScalarRelationFilter, ForumMessageWhereInput>
  }, "id">

  export type FactCheckCitationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    messageId?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    sourceTitle?: SortOrderInput | SortOrder
    claim?: SortOrder
    verdict?: SortOrder
    confidence?: SortOrder
    rationale?: SortOrderInput | SortOrder
    supportingSources?: SortOrderInput | SortOrder
    _count?: FactCheckCitationCountOrderByAggregateInput
    _avg?: FactCheckCitationAvgOrderByAggregateInput
    _max?: FactCheckCitationMaxOrderByAggregateInput
    _min?: FactCheckCitationMinOrderByAggregateInput
    _sum?: FactCheckCitationSumOrderByAggregateInput
  }

  export type FactCheckCitationScalarWhereWithAggregatesInput = {
    AND?: FactCheckCitationScalarWhereWithAggregatesInput | FactCheckCitationScalarWhereWithAggregatesInput[]
    OR?: FactCheckCitationScalarWhereWithAggregatesInput[]
    NOT?: FactCheckCitationScalarWhereWithAggregatesInput | FactCheckCitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FactCheckCitation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FactCheckCitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FactCheckCitation"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"FactCheckCitation">
    messageId?: StringWithAggregatesFilter<"FactCheckCitation"> | string
    sourceUrl?: StringNullableWithAggregatesFilter<"FactCheckCitation"> | string | null
    sourceTitle?: StringNullableWithAggregatesFilter<"FactCheckCitation"> | string | null
    claim?: StringWithAggregatesFilter<"FactCheckCitation"> | string
    verdict?: EnumFactVerdictWithAggregatesFilter<"FactCheckCitation"> | $Enums.FactVerdict
    confidence?: FloatWithAggregatesFilter<"FactCheckCitation"> | number
    rationale?: StringNullableWithAggregatesFilter<"FactCheckCitation"> | string | null
    supportingSources?: JsonNullableWithAggregatesFilter<"FactCheckCitation">
  }

  export type CitizenProposalWhereInput = {
    AND?: CitizenProposalWhereInput | CitizenProposalWhereInput[]
    OR?: CitizenProposalWhereInput[]
    NOT?: CitizenProposalWhereInput | CitizenProposalWhereInput[]
    id?: StringFilter<"CitizenProposal"> | string
    createdAt?: DateTimeFilter<"CitizenProposal"> | Date | string
    updatedAt?: DateTimeFilter<"CitizenProposal"> | Date | string
    metadata?: JsonNullableFilter<"CitizenProposal">
    challengeId?: StringFilter<"CitizenProposal"> | string
    generatedByAgent?: BoolFilter<"CitizenProposal"> | boolean
    title?: StringFilter<"CitizenProposal"> | string
    summary?: StringFilter<"CitizenProposal"> | string
    problemRestatement?: StringFilter<"CitizenProposal"> | string
    proposedActions?: JsonFilter<"CitizenProposal">
    agreements?: StringNullableListFilter<"CitizenProposal">
    tensions?: StringNullableListFilter<"CitizenProposal">
    citedMessageIds?: StringNullableListFilter<"CitizenProposal">
    status?: EnumProposalStatusFilter<"CitizenProposal"> | $Enums.ProposalStatus
    approvedByTeacherId?: StringNullableFilter<"CitizenProposal"> | string | null
    challenge?: XOR<CivicChallengeScalarRelationFilter, CivicChallengeWhereInput>
  }

  export type CitizenProposalOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    challengeId?: SortOrder
    generatedByAgent?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    problemRestatement?: SortOrder
    proposedActions?: SortOrder
    agreements?: SortOrder
    tensions?: SortOrder
    citedMessageIds?: SortOrder
    status?: SortOrder
    approvedByTeacherId?: SortOrderInput | SortOrder
    challenge?: CivicChallengeOrderByWithRelationInput
  }

  export type CitizenProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CitizenProposalWhereInput | CitizenProposalWhereInput[]
    OR?: CitizenProposalWhereInput[]
    NOT?: CitizenProposalWhereInput | CitizenProposalWhereInput[]
    createdAt?: DateTimeFilter<"CitizenProposal"> | Date | string
    updatedAt?: DateTimeFilter<"CitizenProposal"> | Date | string
    metadata?: JsonNullableFilter<"CitizenProposal">
    challengeId?: StringFilter<"CitizenProposal"> | string
    generatedByAgent?: BoolFilter<"CitizenProposal"> | boolean
    title?: StringFilter<"CitizenProposal"> | string
    summary?: StringFilter<"CitizenProposal"> | string
    problemRestatement?: StringFilter<"CitizenProposal"> | string
    proposedActions?: JsonFilter<"CitizenProposal">
    agreements?: StringNullableListFilter<"CitizenProposal">
    tensions?: StringNullableListFilter<"CitizenProposal">
    citedMessageIds?: StringNullableListFilter<"CitizenProposal">
    status?: EnumProposalStatusFilter<"CitizenProposal"> | $Enums.ProposalStatus
    approvedByTeacherId?: StringNullableFilter<"CitizenProposal"> | string | null
    challenge?: XOR<CivicChallengeScalarRelationFilter, CivicChallengeWhereInput>
  }, "id">

  export type CitizenProposalOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    challengeId?: SortOrder
    generatedByAgent?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    problemRestatement?: SortOrder
    proposedActions?: SortOrder
    agreements?: SortOrder
    tensions?: SortOrder
    citedMessageIds?: SortOrder
    status?: SortOrder
    approvedByTeacherId?: SortOrderInput | SortOrder
    _count?: CitizenProposalCountOrderByAggregateInput
    _max?: CitizenProposalMaxOrderByAggregateInput
    _min?: CitizenProposalMinOrderByAggregateInput
  }

  export type CitizenProposalScalarWhereWithAggregatesInput = {
    AND?: CitizenProposalScalarWhereWithAggregatesInput | CitizenProposalScalarWhereWithAggregatesInput[]
    OR?: CitizenProposalScalarWhereWithAggregatesInput[]
    NOT?: CitizenProposalScalarWhereWithAggregatesInput | CitizenProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CitizenProposal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CitizenProposal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CitizenProposal"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"CitizenProposal">
    challengeId?: StringWithAggregatesFilter<"CitizenProposal"> | string
    generatedByAgent?: BoolWithAggregatesFilter<"CitizenProposal"> | boolean
    title?: StringWithAggregatesFilter<"CitizenProposal"> | string
    summary?: StringWithAggregatesFilter<"CitizenProposal"> | string
    problemRestatement?: StringWithAggregatesFilter<"CitizenProposal"> | string
    proposedActions?: JsonWithAggregatesFilter<"CitizenProposal">
    agreements?: StringNullableListFilter<"CitizenProposal">
    tensions?: StringNullableListFilter<"CitizenProposal">
    citedMessageIds?: StringNullableListFilter<"CitizenProposal">
    status?: EnumProposalStatusWithAggregatesFilter<"CitizenProposal"> | $Enums.ProposalStatus
    approvedByTeacherId?: StringNullableWithAggregatesFilter<"CitizenProposal"> | string | null
  }

  export type CivicChallengeCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    classroomId?: string | null
    title: string
    problemStatement: string
    context?: string | null
    category: string
    gradeLevel?: string | null
    status?: $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeCreateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: Date | string | null
    closesAt?: Date | string | null
    forum?: DebateForumCreateNestedOneWithoutChallengeInput
    proposals?: CitizenProposalCreateNestedManyWithoutChallengeInput
  }

  export type CivicChallengeUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    classroomId?: string | null
    title: string
    problemStatement: string
    context?: string | null
    category: string
    gradeLevel?: string | null
    status?: $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeCreateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: Date | string | null
    closesAt?: Date | string | null
    forum?: DebateForumUncheckedCreateNestedOneWithoutChallengeInput
    proposals?: CitizenProposalUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type CivicChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    problemStatement?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    gradeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeUpdateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closesAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forum?: DebateForumUpdateOneWithoutChallengeNestedInput
    proposals?: CitizenProposalUpdateManyWithoutChallengeNestedInput
  }

  export type CivicChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    problemStatement?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    gradeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeUpdateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closesAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forum?: DebateForumUncheckedUpdateOneWithoutChallengeNestedInput
    proposals?: CitizenProposalUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type CivicChallengeCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    classroomId?: string | null
    title: string
    problemStatement: string
    context?: string | null
    category: string
    gradeLevel?: string | null
    status?: $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeCreateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: Date | string | null
    closesAt?: Date | string | null
  }

  export type CivicChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    problemStatement?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    gradeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeUpdateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closesAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CivicChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    problemStatement?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    gradeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeUpdateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closesAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DebateForumCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ForumStatus
    moderationLevel?: string
    messageCount?: number
    lastActivityAt?: Date | string | null
    challenge: CivicChallengeCreateNestedOneWithoutForumInput
    messages?: ForumMessageCreateNestedManyWithoutForumInput
    participants?: ForumParticipantCreateNestedManyWithoutForumInput
  }

  export type DebateForumUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId: string
    status?: $Enums.ForumStatus
    moderationLevel?: string
    messageCount?: number
    lastActivityAt?: Date | string | null
    messages?: ForumMessageUncheckedCreateNestedManyWithoutForumInput
    participants?: ForumParticipantUncheckedCreateNestedManyWithoutForumInput
  }

  export type DebateForumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge?: CivicChallengeUpdateOneRequiredWithoutForumNestedInput
    messages?: ForumMessageUpdateManyWithoutForumNestedInput
    participants?: ForumParticipantUpdateManyWithoutForumNestedInput
  }

  export type DebateForumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: ForumMessageUncheckedUpdateManyWithoutForumNestedInput
    participants?: ForumParticipantUncheckedUpdateManyWithoutForumNestedInput
  }

  export type DebateForumCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId: string
    status?: $Enums.ForumStatus
    moderationLevel?: string
    messageCount?: number
    lastActivityAt?: Date | string | null
  }

  export type DebateForumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DebateForumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ForumParticipantCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
    stance?: string | null
    messagesSent?: number
    forum: DebateForumCreateNestedOneWithoutParticipantsInput
  }

  export type ForumParticipantUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    forumId: string
    studentId: string
    stance?: string | null
    messagesSent?: number
  }

  export type ForumParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    stance?: NullableStringFieldUpdateOperationsInput | string | null
    messagesSent?: IntFieldUpdateOperationsInput | number
    forum?: DebateForumUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ForumParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forumId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    stance?: NullableStringFieldUpdateOperationsInput | string | null
    messagesSent?: IntFieldUpdateOperationsInput | number
  }

  export type ForumParticipantCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    forumId: string
    studentId: string
    stance?: string | null
    messagesSent?: number
  }

  export type ForumParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    stance?: NullableStringFieldUpdateOperationsInput | string | null
    messagesSent?: IntFieldUpdateOperationsInput | number
  }

  export type ForumParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forumId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    stance?: NullableStringFieldUpdateOperationsInput | string | null
    messagesSent?: IntFieldUpdateOperationsInput | number
  }

  export type ForumMessageCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    forum: DebateForumCreateNestedOneWithoutMessagesInput
    replyTo?: ForumMessageCreateNestedOneWithoutRepliesInput
    replies?: ForumMessageCreateNestedManyWithoutReplyToInput
    citations?: FactCheckCitationCreateNestedManyWithoutMessageInput
  }

  export type ForumMessageUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId: string
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    replyToId?: string | null
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    replies?: ForumMessageUncheckedCreateNestedManyWithoutReplyToInput
    citations?: FactCheckCitationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ForumMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    forum?: DebateForumUpdateOneRequiredWithoutMessagesNestedInput
    replyTo?: ForumMessageUpdateOneWithoutRepliesNestedInput
    replies?: ForumMessageUpdateManyWithoutReplyToNestedInput
    citations?: FactCheckCitationUpdateManyWithoutMessageNestedInput
  }

  export type ForumMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId?: StringFieldUpdateOperationsInput | string
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ForumMessageUncheckedUpdateManyWithoutReplyToNestedInput
    citations?: FactCheckCitationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ForumMessageCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId: string
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    replyToId?: string | null
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
  }

  export type ForumMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ForumMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId?: StringFieldUpdateOperationsInput | string
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FactCheckCitationCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceUrl?: string | null
    sourceTitle?: string | null
    claim: string
    verdict?: $Enums.FactVerdict
    confidence?: number
    rationale?: string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
    message: ForumMessageCreateNestedOneWithoutCitationsInput
  }

  export type FactCheckCitationUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    messageId: string
    sourceUrl?: string | null
    sourceTitle?: string | null
    claim: string
    verdict?: $Enums.FactVerdict
    confidence?: number
    rationale?: string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FactCheckCitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    claim?: StringFieldUpdateOperationsInput | string
    verdict?: EnumFactVerdictFieldUpdateOperationsInput | $Enums.FactVerdict
    confidence?: FloatFieldUpdateOperationsInput | number
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
    message?: ForumMessageUpdateOneRequiredWithoutCitationsNestedInput
  }

  export type FactCheckCitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    messageId?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    claim?: StringFieldUpdateOperationsInput | string
    verdict?: EnumFactVerdictFieldUpdateOperationsInput | $Enums.FactVerdict
    confidence?: FloatFieldUpdateOperationsInput | number
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FactCheckCitationCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    messageId: string
    sourceUrl?: string | null
    sourceTitle?: string | null
    claim: string
    verdict?: $Enums.FactVerdict
    confidence?: number
    rationale?: string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FactCheckCitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    claim?: StringFieldUpdateOperationsInput | string
    verdict?: EnumFactVerdictFieldUpdateOperationsInput | $Enums.FactVerdict
    confidence?: FloatFieldUpdateOperationsInput | number
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FactCheckCitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    messageId?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    claim?: StringFieldUpdateOperationsInput | string
    verdict?: EnumFactVerdictFieldUpdateOperationsInput | $Enums.FactVerdict
    confidence?: FloatFieldUpdateOperationsInput | number
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CitizenProposalCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    generatedByAgent?: boolean
    title: string
    summary: string
    problemRestatement: string
    proposedActions: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalCreateagreementsInput | string[]
    tensions?: CitizenProposalCreatetensionsInput | string[]
    citedMessageIds?: CitizenProposalCreatecitedMessageIdsInput | string[]
    status?: $Enums.ProposalStatus
    approvedByTeacherId?: string | null
    challenge: CivicChallengeCreateNestedOneWithoutProposalsInput
  }

  export type CitizenProposalUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId: string
    generatedByAgent?: boolean
    title: string
    summary: string
    problemRestatement: string
    proposedActions: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalCreateagreementsInput | string[]
    tensions?: CitizenProposalCreatetensionsInput | string[]
    citedMessageIds?: CitizenProposalCreatecitedMessageIdsInput | string[]
    status?: $Enums.ProposalStatus
    approvedByTeacherId?: string | null
  }

  export type CitizenProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    generatedByAgent?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemRestatement?: StringFieldUpdateOperationsInput | string
    proposedActions?: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalUpdateagreementsInput | string[]
    tensions?: CitizenProposalUpdatetensionsInput | string[]
    citedMessageIds?: CitizenProposalUpdatecitedMessageIdsInput | string[]
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    approvedByTeacherId?: NullableStringFieldUpdateOperationsInput | string | null
    challenge?: CivicChallengeUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type CitizenProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId?: StringFieldUpdateOperationsInput | string
    generatedByAgent?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemRestatement?: StringFieldUpdateOperationsInput | string
    proposedActions?: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalUpdateagreementsInput | string[]
    tensions?: CitizenProposalUpdatetensionsInput | string[]
    citedMessageIds?: CitizenProposalUpdatecitedMessageIdsInput | string[]
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    approvedByTeacherId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitizenProposalCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId: string
    generatedByAgent?: boolean
    title: string
    summary: string
    problemRestatement: string
    proposedActions: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalCreateagreementsInput | string[]
    tensions?: CitizenProposalCreatetensionsInput | string[]
    citedMessageIds?: CitizenProposalCreatecitedMessageIdsInput | string[]
    status?: $Enums.ProposalStatus
    approvedByTeacherId?: string | null
  }

  export type CitizenProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    generatedByAgent?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemRestatement?: StringFieldUpdateOperationsInput | string
    proposedActions?: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalUpdateagreementsInput | string[]
    tensions?: CitizenProposalUpdatetensionsInput | string[]
    citedMessageIds?: CitizenProposalUpdatecitedMessageIdsInput | string[]
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    approvedByTeacherId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitizenProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId?: StringFieldUpdateOperationsInput | string
    generatedByAgent?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemRestatement?: StringFieldUpdateOperationsInput | string
    proposedActions?: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalUpdateagreementsInput | string[]
    tensions?: CitizenProposalUpdatetensionsInput | string[]
    citedMessageIds?: CitizenProposalUpdatecitedMessageIdsInput | string[]
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    approvedByTeacherId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumChallengeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusFilter<$PrismaModel> | $Enums.ChallengeStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type DebateForumNullableScalarRelationFilter = {
    is?: DebateForumWhereInput | null
    isNot?: DebateForumWhereInput | null
  }

  export type CitizenProposalListRelationFilter = {
    every?: CitizenProposalWhereInput
    some?: CitizenProposalWhereInput
    none?: CitizenProposalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CitizenProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CivicChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    teacherId?: SortOrder
    classroomId?: SortOrder
    title?: SortOrder
    problemStatement?: SortOrder
    context?: SortOrder
    category?: SortOrder
    gradeLevel?: SortOrder
    status?: SortOrder
    guidingQuestions?: SortOrder
    rubric?: SortOrder
    opensAt?: SortOrder
    closesAt?: SortOrder
  }

  export type CivicChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    classroomId?: SortOrder
    title?: SortOrder
    problemStatement?: SortOrder
    context?: SortOrder
    category?: SortOrder
    gradeLevel?: SortOrder
    status?: SortOrder
    opensAt?: SortOrder
    closesAt?: SortOrder
  }

  export type CivicChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    classroomId?: SortOrder
    title?: SortOrder
    problemStatement?: SortOrder
    context?: SortOrder
    category?: SortOrder
    gradeLevel?: SortOrder
    status?: SortOrder
    opensAt?: SortOrder
    closesAt?: SortOrder
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

  export type EnumChallengeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChallengeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallengeStatusFilter<$PrismaModel>
    _max?: NestedEnumChallengeStatusFilter<$PrismaModel>
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

  export type EnumForumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ForumStatus | EnumForumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ForumStatus[] | ListEnumForumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ForumStatus[] | ListEnumForumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumForumStatusFilter<$PrismaModel> | $Enums.ForumStatus
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

  export type CivicChallengeScalarRelationFilter = {
    is?: CivicChallengeWhereInput
    isNot?: CivicChallengeWhereInput
  }

  export type ForumMessageListRelationFilter = {
    every?: ForumMessageWhereInput
    some?: ForumMessageWhereInput
    none?: ForumMessageWhereInput
  }

  export type ForumParticipantListRelationFilter = {
    every?: ForumParticipantWhereInput
    some?: ForumParticipantWhereInput
    none?: ForumParticipantWhereInput
  }

  export type ForumMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DebateForumCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    moderationLevel?: SortOrder
    messageCount?: SortOrder
    lastActivityAt?: SortOrder
  }

  export type DebateForumAvgOrderByAggregateInput = {
    messageCount?: SortOrder
  }

  export type DebateForumMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    moderationLevel?: SortOrder
    messageCount?: SortOrder
    lastActivityAt?: SortOrder
  }

  export type DebateForumMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
    status?: SortOrder
    moderationLevel?: SortOrder
    messageCount?: SortOrder
    lastActivityAt?: SortOrder
  }

  export type DebateForumSumOrderByAggregateInput = {
    messageCount?: SortOrder
  }

  export type EnumForumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ForumStatus | EnumForumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ForumStatus[] | ListEnumForumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ForumStatus[] | ListEnumForumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumForumStatusWithAggregatesFilter<$PrismaModel> | $Enums.ForumStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumForumStatusFilter<$PrismaModel>
    _max?: NestedEnumForumStatusFilter<$PrismaModel>
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

  export type DebateForumScalarRelationFilter = {
    is?: DebateForumWhereInput
    isNot?: DebateForumWhereInput
  }

  export type ForumParticipantForumIdStudentIdCompoundUniqueInput = {
    forumId: string
    studentId: string
  }

  export type ForumParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    forumId?: SortOrder
    studentId?: SortOrder
    stance?: SortOrder
    messagesSent?: SortOrder
  }

  export type ForumParticipantAvgOrderByAggregateInput = {
    messagesSent?: SortOrder
  }

  export type ForumParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    forumId?: SortOrder
    studentId?: SortOrder
    stance?: SortOrder
    messagesSent?: SortOrder
  }

  export type ForumParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    forumId?: SortOrder
    studentId?: SortOrder
    stance?: SortOrder
    messagesSent?: SortOrder
  }

  export type ForumParticipantSumOrderByAggregateInput = {
    messagesSent?: SortOrder
  }

  export type EnumMessageAuthorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageAuthorType | EnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageAuthorType[] | ListEnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageAuthorType[] | ListEnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageAuthorTypeFilter<$PrismaModel> | $Enums.MessageAuthorType
  }

  export type EnumAgentRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgentRoleNullableFilter<$PrismaModel> | $Enums.AgentRole | null
  }

  export type EnumModerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusFilter<$PrismaModel> | $Enums.ModerationStatus
  }

  export type ForumMessageNullableScalarRelationFilter = {
    is?: ForumMessageWhereInput | null
    isNot?: ForumMessageWhereInput | null
  }

  export type FactCheckCitationListRelationFilter = {
    every?: FactCheckCitationWhereInput
    some?: FactCheckCitationWhereInput
    none?: FactCheckCitationWhereInput
  }

  export type FactCheckCitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumMessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    forumId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrder
    agentRole?: SortOrder
    body?: SortOrder
    replyToId?: SortOrder
    moderationStatus?: SortOrder
    flaggedReason?: SortOrder
  }

  export type ForumMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    forumId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrder
    agentRole?: SortOrder
    body?: SortOrder
    replyToId?: SortOrder
    moderationStatus?: SortOrder
    flaggedReason?: SortOrder
  }

  export type ForumMessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    forumId?: SortOrder
    authorType?: SortOrder
    authorId?: SortOrder
    agentRole?: SortOrder
    body?: SortOrder
    replyToId?: SortOrder
    moderationStatus?: SortOrder
    flaggedReason?: SortOrder
  }

  export type EnumMessageAuthorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageAuthorType | EnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageAuthorType[] | ListEnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageAuthorType[] | ListEnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageAuthorTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageAuthorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageAuthorTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageAuthorTypeFilter<$PrismaModel>
  }

  export type EnumAgentRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgentRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.AgentRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAgentRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumAgentRoleNullableFilter<$PrismaModel>
  }

  export type EnumModerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModerationStatusFilter<$PrismaModel>
    _max?: NestedEnumModerationStatusFilter<$PrismaModel>
  }

  export type EnumFactVerdictFilter<$PrismaModel = never> = {
    equals?: $Enums.FactVerdict | EnumFactVerdictFieldRefInput<$PrismaModel>
    in?: $Enums.FactVerdict[] | ListEnumFactVerdictFieldRefInput<$PrismaModel>
    notIn?: $Enums.FactVerdict[] | ListEnumFactVerdictFieldRefInput<$PrismaModel>
    not?: NestedEnumFactVerdictFilter<$PrismaModel> | $Enums.FactVerdict
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

  export type ForumMessageScalarRelationFilter = {
    is?: ForumMessageWhereInput
    isNot?: ForumMessageWhereInput
  }

  export type FactCheckCitationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    messageId?: SortOrder
    sourceUrl?: SortOrder
    sourceTitle?: SortOrder
    claim?: SortOrder
    verdict?: SortOrder
    confidence?: SortOrder
    rationale?: SortOrder
    supportingSources?: SortOrder
  }

  export type FactCheckCitationAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type FactCheckCitationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messageId?: SortOrder
    sourceUrl?: SortOrder
    sourceTitle?: SortOrder
    claim?: SortOrder
    verdict?: SortOrder
    confidence?: SortOrder
    rationale?: SortOrder
  }

  export type FactCheckCitationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messageId?: SortOrder
    sourceUrl?: SortOrder
    sourceTitle?: SortOrder
    claim?: SortOrder
    verdict?: SortOrder
    confidence?: SortOrder
    rationale?: SortOrder
  }

  export type FactCheckCitationSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type EnumFactVerdictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FactVerdict | EnumFactVerdictFieldRefInput<$PrismaModel>
    in?: $Enums.FactVerdict[] | ListEnumFactVerdictFieldRefInput<$PrismaModel>
    notIn?: $Enums.FactVerdict[] | ListEnumFactVerdictFieldRefInput<$PrismaModel>
    not?: NestedEnumFactVerdictWithAggregatesFilter<$PrismaModel> | $Enums.FactVerdict
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFactVerdictFilter<$PrismaModel>
    _max?: NestedEnumFactVerdictFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type CitizenProposalCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
    challengeId?: SortOrder
    generatedByAgent?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    problemRestatement?: SortOrder
    proposedActions?: SortOrder
    agreements?: SortOrder
    tensions?: SortOrder
    citedMessageIds?: SortOrder
    status?: SortOrder
    approvedByTeacherId?: SortOrder
  }

  export type CitizenProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
    generatedByAgent?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    problemRestatement?: SortOrder
    status?: SortOrder
    approvedByTeacherId?: SortOrder
  }

  export type CitizenProposalMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
    generatedByAgent?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    problemRestatement?: SortOrder
    status?: SortOrder
    approvedByTeacherId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type CivicChallengeCreateguidingQuestionsInput = {
    set: string[]
  }

  export type DebateForumCreateNestedOneWithoutChallengeInput = {
    create?: XOR<DebateForumCreateWithoutChallengeInput, DebateForumUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: DebateForumCreateOrConnectWithoutChallengeInput
    connect?: DebateForumWhereUniqueInput
  }

  export type CitizenProposalCreateNestedManyWithoutChallengeInput = {
    create?: XOR<CitizenProposalCreateWithoutChallengeInput, CitizenProposalUncheckedCreateWithoutChallengeInput> | CitizenProposalCreateWithoutChallengeInput[] | CitizenProposalUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: CitizenProposalCreateOrConnectWithoutChallengeInput | CitizenProposalCreateOrConnectWithoutChallengeInput[]
    createMany?: CitizenProposalCreateManyChallengeInputEnvelope
    connect?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
  }

  export type DebateForumUncheckedCreateNestedOneWithoutChallengeInput = {
    create?: XOR<DebateForumCreateWithoutChallengeInput, DebateForumUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: DebateForumCreateOrConnectWithoutChallengeInput
    connect?: DebateForumWhereUniqueInput
  }

  export type CitizenProposalUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<CitizenProposalCreateWithoutChallengeInput, CitizenProposalUncheckedCreateWithoutChallengeInput> | CitizenProposalCreateWithoutChallengeInput[] | CitizenProposalUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: CitizenProposalCreateOrConnectWithoutChallengeInput | CitizenProposalCreateOrConnectWithoutChallengeInput[]
    createMany?: CitizenProposalCreateManyChallengeInputEnvelope
    connect?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
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

  export type EnumChallengeStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChallengeStatus
  }

  export type CivicChallengeUpdateguidingQuestionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DebateForumUpdateOneWithoutChallengeNestedInput = {
    create?: XOR<DebateForumCreateWithoutChallengeInput, DebateForumUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: DebateForumCreateOrConnectWithoutChallengeInput
    upsert?: DebateForumUpsertWithoutChallengeInput
    disconnect?: DebateForumWhereInput | boolean
    delete?: DebateForumWhereInput | boolean
    connect?: DebateForumWhereUniqueInput
    update?: XOR<XOR<DebateForumUpdateToOneWithWhereWithoutChallengeInput, DebateForumUpdateWithoutChallengeInput>, DebateForumUncheckedUpdateWithoutChallengeInput>
  }

  export type CitizenProposalUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<CitizenProposalCreateWithoutChallengeInput, CitizenProposalUncheckedCreateWithoutChallengeInput> | CitizenProposalCreateWithoutChallengeInput[] | CitizenProposalUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: CitizenProposalCreateOrConnectWithoutChallengeInput | CitizenProposalCreateOrConnectWithoutChallengeInput[]
    upsert?: CitizenProposalUpsertWithWhereUniqueWithoutChallengeInput | CitizenProposalUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: CitizenProposalCreateManyChallengeInputEnvelope
    set?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
    disconnect?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
    delete?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
    connect?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
    update?: CitizenProposalUpdateWithWhereUniqueWithoutChallengeInput | CitizenProposalUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: CitizenProposalUpdateManyWithWhereWithoutChallengeInput | CitizenProposalUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: CitizenProposalScalarWhereInput | CitizenProposalScalarWhereInput[]
  }

  export type DebateForumUncheckedUpdateOneWithoutChallengeNestedInput = {
    create?: XOR<DebateForumCreateWithoutChallengeInput, DebateForumUncheckedCreateWithoutChallengeInput>
    connectOrCreate?: DebateForumCreateOrConnectWithoutChallengeInput
    upsert?: DebateForumUpsertWithoutChallengeInput
    disconnect?: DebateForumWhereInput | boolean
    delete?: DebateForumWhereInput | boolean
    connect?: DebateForumWhereUniqueInput
    update?: XOR<XOR<DebateForumUpdateToOneWithWhereWithoutChallengeInput, DebateForumUpdateWithoutChallengeInput>, DebateForumUncheckedUpdateWithoutChallengeInput>
  }

  export type CitizenProposalUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<CitizenProposalCreateWithoutChallengeInput, CitizenProposalUncheckedCreateWithoutChallengeInput> | CitizenProposalCreateWithoutChallengeInput[] | CitizenProposalUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: CitizenProposalCreateOrConnectWithoutChallengeInput | CitizenProposalCreateOrConnectWithoutChallengeInput[]
    upsert?: CitizenProposalUpsertWithWhereUniqueWithoutChallengeInput | CitizenProposalUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: CitizenProposalCreateManyChallengeInputEnvelope
    set?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
    disconnect?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
    delete?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
    connect?: CitizenProposalWhereUniqueInput | CitizenProposalWhereUniqueInput[]
    update?: CitizenProposalUpdateWithWhereUniqueWithoutChallengeInput | CitizenProposalUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: CitizenProposalUpdateManyWithWhereWithoutChallengeInput | CitizenProposalUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: CitizenProposalScalarWhereInput | CitizenProposalScalarWhereInput[]
  }

  export type CivicChallengeCreateNestedOneWithoutForumInput = {
    create?: XOR<CivicChallengeCreateWithoutForumInput, CivicChallengeUncheckedCreateWithoutForumInput>
    connectOrCreate?: CivicChallengeCreateOrConnectWithoutForumInput
    connect?: CivicChallengeWhereUniqueInput
  }

  export type ForumMessageCreateNestedManyWithoutForumInput = {
    create?: XOR<ForumMessageCreateWithoutForumInput, ForumMessageUncheckedCreateWithoutForumInput> | ForumMessageCreateWithoutForumInput[] | ForumMessageUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumMessageCreateOrConnectWithoutForumInput | ForumMessageCreateOrConnectWithoutForumInput[]
    createMany?: ForumMessageCreateManyForumInputEnvelope
    connect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
  }

  export type ForumParticipantCreateNestedManyWithoutForumInput = {
    create?: XOR<ForumParticipantCreateWithoutForumInput, ForumParticipantUncheckedCreateWithoutForumInput> | ForumParticipantCreateWithoutForumInput[] | ForumParticipantUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumParticipantCreateOrConnectWithoutForumInput | ForumParticipantCreateOrConnectWithoutForumInput[]
    createMany?: ForumParticipantCreateManyForumInputEnvelope
    connect?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
  }

  export type ForumMessageUncheckedCreateNestedManyWithoutForumInput = {
    create?: XOR<ForumMessageCreateWithoutForumInput, ForumMessageUncheckedCreateWithoutForumInput> | ForumMessageCreateWithoutForumInput[] | ForumMessageUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumMessageCreateOrConnectWithoutForumInput | ForumMessageCreateOrConnectWithoutForumInput[]
    createMany?: ForumMessageCreateManyForumInputEnvelope
    connect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
  }

  export type ForumParticipantUncheckedCreateNestedManyWithoutForumInput = {
    create?: XOR<ForumParticipantCreateWithoutForumInput, ForumParticipantUncheckedCreateWithoutForumInput> | ForumParticipantCreateWithoutForumInput[] | ForumParticipantUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumParticipantCreateOrConnectWithoutForumInput | ForumParticipantCreateOrConnectWithoutForumInput[]
    createMany?: ForumParticipantCreateManyForumInputEnvelope
    connect?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
  }

  export type EnumForumStatusFieldUpdateOperationsInput = {
    set?: $Enums.ForumStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CivicChallengeUpdateOneRequiredWithoutForumNestedInput = {
    create?: XOR<CivicChallengeCreateWithoutForumInput, CivicChallengeUncheckedCreateWithoutForumInput>
    connectOrCreate?: CivicChallengeCreateOrConnectWithoutForumInput
    upsert?: CivicChallengeUpsertWithoutForumInput
    connect?: CivicChallengeWhereUniqueInput
    update?: XOR<XOR<CivicChallengeUpdateToOneWithWhereWithoutForumInput, CivicChallengeUpdateWithoutForumInput>, CivicChallengeUncheckedUpdateWithoutForumInput>
  }

  export type ForumMessageUpdateManyWithoutForumNestedInput = {
    create?: XOR<ForumMessageCreateWithoutForumInput, ForumMessageUncheckedCreateWithoutForumInput> | ForumMessageCreateWithoutForumInput[] | ForumMessageUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumMessageCreateOrConnectWithoutForumInput | ForumMessageCreateOrConnectWithoutForumInput[]
    upsert?: ForumMessageUpsertWithWhereUniqueWithoutForumInput | ForumMessageUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: ForumMessageCreateManyForumInputEnvelope
    set?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    disconnect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    delete?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    connect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    update?: ForumMessageUpdateWithWhereUniqueWithoutForumInput | ForumMessageUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: ForumMessageUpdateManyWithWhereWithoutForumInput | ForumMessageUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: ForumMessageScalarWhereInput | ForumMessageScalarWhereInput[]
  }

  export type ForumParticipantUpdateManyWithoutForumNestedInput = {
    create?: XOR<ForumParticipantCreateWithoutForumInput, ForumParticipantUncheckedCreateWithoutForumInput> | ForumParticipantCreateWithoutForumInput[] | ForumParticipantUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumParticipantCreateOrConnectWithoutForumInput | ForumParticipantCreateOrConnectWithoutForumInput[]
    upsert?: ForumParticipantUpsertWithWhereUniqueWithoutForumInput | ForumParticipantUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: ForumParticipantCreateManyForumInputEnvelope
    set?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
    disconnect?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
    delete?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
    connect?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
    update?: ForumParticipantUpdateWithWhereUniqueWithoutForumInput | ForumParticipantUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: ForumParticipantUpdateManyWithWhereWithoutForumInput | ForumParticipantUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: ForumParticipantScalarWhereInput | ForumParticipantScalarWhereInput[]
  }

  export type ForumMessageUncheckedUpdateManyWithoutForumNestedInput = {
    create?: XOR<ForumMessageCreateWithoutForumInput, ForumMessageUncheckedCreateWithoutForumInput> | ForumMessageCreateWithoutForumInput[] | ForumMessageUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumMessageCreateOrConnectWithoutForumInput | ForumMessageCreateOrConnectWithoutForumInput[]
    upsert?: ForumMessageUpsertWithWhereUniqueWithoutForumInput | ForumMessageUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: ForumMessageCreateManyForumInputEnvelope
    set?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    disconnect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    delete?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    connect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    update?: ForumMessageUpdateWithWhereUniqueWithoutForumInput | ForumMessageUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: ForumMessageUpdateManyWithWhereWithoutForumInput | ForumMessageUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: ForumMessageScalarWhereInput | ForumMessageScalarWhereInput[]
  }

  export type ForumParticipantUncheckedUpdateManyWithoutForumNestedInput = {
    create?: XOR<ForumParticipantCreateWithoutForumInput, ForumParticipantUncheckedCreateWithoutForumInput> | ForumParticipantCreateWithoutForumInput[] | ForumParticipantUncheckedCreateWithoutForumInput[]
    connectOrCreate?: ForumParticipantCreateOrConnectWithoutForumInput | ForumParticipantCreateOrConnectWithoutForumInput[]
    upsert?: ForumParticipantUpsertWithWhereUniqueWithoutForumInput | ForumParticipantUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: ForumParticipantCreateManyForumInputEnvelope
    set?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
    disconnect?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
    delete?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
    connect?: ForumParticipantWhereUniqueInput | ForumParticipantWhereUniqueInput[]
    update?: ForumParticipantUpdateWithWhereUniqueWithoutForumInput | ForumParticipantUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: ForumParticipantUpdateManyWithWhereWithoutForumInput | ForumParticipantUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: ForumParticipantScalarWhereInput | ForumParticipantScalarWhereInput[]
  }

  export type DebateForumCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<DebateForumCreateWithoutParticipantsInput, DebateForumUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DebateForumCreateOrConnectWithoutParticipantsInput
    connect?: DebateForumWhereUniqueInput
  }

  export type DebateForumUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<DebateForumCreateWithoutParticipantsInput, DebateForumUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DebateForumCreateOrConnectWithoutParticipantsInput
    upsert?: DebateForumUpsertWithoutParticipantsInput
    connect?: DebateForumWhereUniqueInput
    update?: XOR<XOR<DebateForumUpdateToOneWithWhereWithoutParticipantsInput, DebateForumUpdateWithoutParticipantsInput>, DebateForumUncheckedUpdateWithoutParticipantsInput>
  }

  export type DebateForumCreateNestedOneWithoutMessagesInput = {
    create?: XOR<DebateForumCreateWithoutMessagesInput, DebateForumUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DebateForumCreateOrConnectWithoutMessagesInput
    connect?: DebateForumWhereUniqueInput
  }

  export type ForumMessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ForumMessageCreateWithoutRepliesInput, ForumMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ForumMessageCreateOrConnectWithoutRepliesInput
    connect?: ForumMessageWhereUniqueInput
  }

  export type ForumMessageCreateNestedManyWithoutReplyToInput = {
    create?: XOR<ForumMessageCreateWithoutReplyToInput, ForumMessageUncheckedCreateWithoutReplyToInput> | ForumMessageCreateWithoutReplyToInput[] | ForumMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ForumMessageCreateOrConnectWithoutReplyToInput | ForumMessageCreateOrConnectWithoutReplyToInput[]
    createMany?: ForumMessageCreateManyReplyToInputEnvelope
    connect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
  }

  export type FactCheckCitationCreateNestedManyWithoutMessageInput = {
    create?: XOR<FactCheckCitationCreateWithoutMessageInput, FactCheckCitationUncheckedCreateWithoutMessageInput> | FactCheckCitationCreateWithoutMessageInput[] | FactCheckCitationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: FactCheckCitationCreateOrConnectWithoutMessageInput | FactCheckCitationCreateOrConnectWithoutMessageInput[]
    createMany?: FactCheckCitationCreateManyMessageInputEnvelope
    connect?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
  }

  export type ForumMessageUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<ForumMessageCreateWithoutReplyToInput, ForumMessageUncheckedCreateWithoutReplyToInput> | ForumMessageCreateWithoutReplyToInput[] | ForumMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ForumMessageCreateOrConnectWithoutReplyToInput | ForumMessageCreateOrConnectWithoutReplyToInput[]
    createMany?: ForumMessageCreateManyReplyToInputEnvelope
    connect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
  }

  export type FactCheckCitationUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<FactCheckCitationCreateWithoutMessageInput, FactCheckCitationUncheckedCreateWithoutMessageInput> | FactCheckCitationCreateWithoutMessageInput[] | FactCheckCitationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: FactCheckCitationCreateOrConnectWithoutMessageInput | FactCheckCitationCreateOrConnectWithoutMessageInput[]
    createMany?: FactCheckCitationCreateManyMessageInputEnvelope
    connect?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
  }

  export type EnumMessageAuthorTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageAuthorType
  }

  export type NullableEnumAgentRoleFieldUpdateOperationsInput = {
    set?: $Enums.AgentRole | null
  }

  export type EnumModerationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ModerationStatus
  }

  export type DebateForumUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<DebateForumCreateWithoutMessagesInput, DebateForumUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DebateForumCreateOrConnectWithoutMessagesInput
    upsert?: DebateForumUpsertWithoutMessagesInput
    connect?: DebateForumWhereUniqueInput
    update?: XOR<XOR<DebateForumUpdateToOneWithWhereWithoutMessagesInput, DebateForumUpdateWithoutMessagesInput>, DebateForumUncheckedUpdateWithoutMessagesInput>
  }

  export type ForumMessageUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ForumMessageCreateWithoutRepliesInput, ForumMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ForumMessageCreateOrConnectWithoutRepliesInput
    upsert?: ForumMessageUpsertWithoutRepliesInput
    disconnect?: ForumMessageWhereInput | boolean
    delete?: ForumMessageWhereInput | boolean
    connect?: ForumMessageWhereUniqueInput
    update?: XOR<XOR<ForumMessageUpdateToOneWithWhereWithoutRepliesInput, ForumMessageUpdateWithoutRepliesInput>, ForumMessageUncheckedUpdateWithoutRepliesInput>
  }

  export type ForumMessageUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<ForumMessageCreateWithoutReplyToInput, ForumMessageUncheckedCreateWithoutReplyToInput> | ForumMessageCreateWithoutReplyToInput[] | ForumMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ForumMessageCreateOrConnectWithoutReplyToInput | ForumMessageCreateOrConnectWithoutReplyToInput[]
    upsert?: ForumMessageUpsertWithWhereUniqueWithoutReplyToInput | ForumMessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: ForumMessageCreateManyReplyToInputEnvelope
    set?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    disconnect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    delete?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    connect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    update?: ForumMessageUpdateWithWhereUniqueWithoutReplyToInput | ForumMessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: ForumMessageUpdateManyWithWhereWithoutReplyToInput | ForumMessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: ForumMessageScalarWhereInput | ForumMessageScalarWhereInput[]
  }

  export type FactCheckCitationUpdateManyWithoutMessageNestedInput = {
    create?: XOR<FactCheckCitationCreateWithoutMessageInput, FactCheckCitationUncheckedCreateWithoutMessageInput> | FactCheckCitationCreateWithoutMessageInput[] | FactCheckCitationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: FactCheckCitationCreateOrConnectWithoutMessageInput | FactCheckCitationCreateOrConnectWithoutMessageInput[]
    upsert?: FactCheckCitationUpsertWithWhereUniqueWithoutMessageInput | FactCheckCitationUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: FactCheckCitationCreateManyMessageInputEnvelope
    set?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
    disconnect?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
    delete?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
    connect?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
    update?: FactCheckCitationUpdateWithWhereUniqueWithoutMessageInput | FactCheckCitationUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: FactCheckCitationUpdateManyWithWhereWithoutMessageInput | FactCheckCitationUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: FactCheckCitationScalarWhereInput | FactCheckCitationScalarWhereInput[]
  }

  export type ForumMessageUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<ForumMessageCreateWithoutReplyToInput, ForumMessageUncheckedCreateWithoutReplyToInput> | ForumMessageCreateWithoutReplyToInput[] | ForumMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: ForumMessageCreateOrConnectWithoutReplyToInput | ForumMessageCreateOrConnectWithoutReplyToInput[]
    upsert?: ForumMessageUpsertWithWhereUniqueWithoutReplyToInput | ForumMessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: ForumMessageCreateManyReplyToInputEnvelope
    set?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    disconnect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    delete?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    connect?: ForumMessageWhereUniqueInput | ForumMessageWhereUniqueInput[]
    update?: ForumMessageUpdateWithWhereUniqueWithoutReplyToInput | ForumMessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: ForumMessageUpdateManyWithWhereWithoutReplyToInput | ForumMessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: ForumMessageScalarWhereInput | ForumMessageScalarWhereInput[]
  }

  export type FactCheckCitationUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<FactCheckCitationCreateWithoutMessageInput, FactCheckCitationUncheckedCreateWithoutMessageInput> | FactCheckCitationCreateWithoutMessageInput[] | FactCheckCitationUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: FactCheckCitationCreateOrConnectWithoutMessageInput | FactCheckCitationCreateOrConnectWithoutMessageInput[]
    upsert?: FactCheckCitationUpsertWithWhereUniqueWithoutMessageInput | FactCheckCitationUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: FactCheckCitationCreateManyMessageInputEnvelope
    set?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
    disconnect?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
    delete?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
    connect?: FactCheckCitationWhereUniqueInput | FactCheckCitationWhereUniqueInput[]
    update?: FactCheckCitationUpdateWithWhereUniqueWithoutMessageInput | FactCheckCitationUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: FactCheckCitationUpdateManyWithWhereWithoutMessageInput | FactCheckCitationUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: FactCheckCitationScalarWhereInput | FactCheckCitationScalarWhereInput[]
  }

  export type ForumMessageCreateNestedOneWithoutCitationsInput = {
    create?: XOR<ForumMessageCreateWithoutCitationsInput, ForumMessageUncheckedCreateWithoutCitationsInput>
    connectOrCreate?: ForumMessageCreateOrConnectWithoutCitationsInput
    connect?: ForumMessageWhereUniqueInput
  }

  export type EnumFactVerdictFieldUpdateOperationsInput = {
    set?: $Enums.FactVerdict
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ForumMessageUpdateOneRequiredWithoutCitationsNestedInput = {
    create?: XOR<ForumMessageCreateWithoutCitationsInput, ForumMessageUncheckedCreateWithoutCitationsInput>
    connectOrCreate?: ForumMessageCreateOrConnectWithoutCitationsInput
    upsert?: ForumMessageUpsertWithoutCitationsInput
    connect?: ForumMessageWhereUniqueInput
    update?: XOR<XOR<ForumMessageUpdateToOneWithWhereWithoutCitationsInput, ForumMessageUpdateWithoutCitationsInput>, ForumMessageUncheckedUpdateWithoutCitationsInput>
  }

  export type CitizenProposalCreateagreementsInput = {
    set: string[]
  }

  export type CitizenProposalCreatetensionsInput = {
    set: string[]
  }

  export type CitizenProposalCreatecitedMessageIdsInput = {
    set: string[]
  }

  export type CivicChallengeCreateNestedOneWithoutProposalsInput = {
    create?: XOR<CivicChallengeCreateWithoutProposalsInput, CivicChallengeUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: CivicChallengeCreateOrConnectWithoutProposalsInput
    connect?: CivicChallengeWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CitizenProposalUpdateagreementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CitizenProposalUpdatetensionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CitizenProposalUpdatecitedMessageIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumProposalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProposalStatus
  }

  export type CivicChallengeUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<CivicChallengeCreateWithoutProposalsInput, CivicChallengeUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: CivicChallengeCreateOrConnectWithoutProposalsInput
    upsert?: CivicChallengeUpsertWithoutProposalsInput
    connect?: CivicChallengeWhereUniqueInput
    update?: XOR<XOR<CivicChallengeUpdateToOneWithWhereWithoutProposalsInput, CivicChallengeUpdateWithoutProposalsInput>, CivicChallengeUncheckedUpdateWithoutProposalsInput>
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

  export type NestedEnumChallengeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusFilter<$PrismaModel> | $Enums.ChallengeStatus
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

  export type NestedEnumChallengeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallengeStatus | EnumChallengeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallengeStatus[] | ListEnumChallengeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallengeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChallengeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallengeStatusFilter<$PrismaModel>
    _max?: NestedEnumChallengeStatusFilter<$PrismaModel>
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

  export type NestedEnumForumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ForumStatus | EnumForumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ForumStatus[] | ListEnumForumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ForumStatus[] | ListEnumForumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumForumStatusFilter<$PrismaModel> | $Enums.ForumStatus
  }

  export type NestedEnumForumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ForumStatus | EnumForumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ForumStatus[] | ListEnumForumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ForumStatus[] | ListEnumForumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumForumStatusWithAggregatesFilter<$PrismaModel> | $Enums.ForumStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumForumStatusFilter<$PrismaModel>
    _max?: NestedEnumForumStatusFilter<$PrismaModel>
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

  export type NestedEnumMessageAuthorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageAuthorType | EnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageAuthorType[] | ListEnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageAuthorType[] | ListEnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageAuthorTypeFilter<$PrismaModel> | $Enums.MessageAuthorType
  }

  export type NestedEnumAgentRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgentRoleNullableFilter<$PrismaModel> | $Enums.AgentRole | null
  }

  export type NestedEnumModerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusFilter<$PrismaModel> | $Enums.ModerationStatus
  }

  export type NestedEnumMessageAuthorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageAuthorType | EnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageAuthorType[] | ListEnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageAuthorType[] | ListEnumMessageAuthorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageAuthorTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageAuthorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageAuthorTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageAuthorTypeFilter<$PrismaModel>
  }

  export type NestedEnumAgentRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAgentRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.AgentRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAgentRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumAgentRoleNullableFilter<$PrismaModel>
  }

  export type NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModerationStatusFilter<$PrismaModel>
    _max?: NestedEnumModerationStatusFilter<$PrismaModel>
  }

  export type NestedEnumFactVerdictFilter<$PrismaModel = never> = {
    equals?: $Enums.FactVerdict | EnumFactVerdictFieldRefInput<$PrismaModel>
    in?: $Enums.FactVerdict[] | ListEnumFactVerdictFieldRefInput<$PrismaModel>
    notIn?: $Enums.FactVerdict[] | ListEnumFactVerdictFieldRefInput<$PrismaModel>
    not?: NestedEnumFactVerdictFilter<$PrismaModel> | $Enums.FactVerdict
  }

  export type NestedEnumFactVerdictWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FactVerdict | EnumFactVerdictFieldRefInput<$PrismaModel>
    in?: $Enums.FactVerdict[] | ListEnumFactVerdictFieldRefInput<$PrismaModel>
    notIn?: $Enums.FactVerdict[] | ListEnumFactVerdictFieldRefInput<$PrismaModel>
    not?: NestedEnumFactVerdictWithAggregatesFilter<$PrismaModel> | $Enums.FactVerdict
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFactVerdictFilter<$PrismaModel>
    _max?: NestedEnumFactVerdictFilter<$PrismaModel>
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

  export type NestedEnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalStatus[] | ListEnumProposalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type DebateForumCreateWithoutChallengeInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ForumStatus
    moderationLevel?: string
    messageCount?: number
    lastActivityAt?: Date | string | null
    messages?: ForumMessageCreateNestedManyWithoutForumInput
    participants?: ForumParticipantCreateNestedManyWithoutForumInput
  }

  export type DebateForumUncheckedCreateWithoutChallengeInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ForumStatus
    moderationLevel?: string
    messageCount?: number
    lastActivityAt?: Date | string | null
    messages?: ForumMessageUncheckedCreateNestedManyWithoutForumInput
    participants?: ForumParticipantUncheckedCreateNestedManyWithoutForumInput
  }

  export type DebateForumCreateOrConnectWithoutChallengeInput = {
    where: DebateForumWhereUniqueInput
    create: XOR<DebateForumCreateWithoutChallengeInput, DebateForumUncheckedCreateWithoutChallengeInput>
  }

  export type CitizenProposalCreateWithoutChallengeInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    generatedByAgent?: boolean
    title: string
    summary: string
    problemRestatement: string
    proposedActions: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalCreateagreementsInput | string[]
    tensions?: CitizenProposalCreatetensionsInput | string[]
    citedMessageIds?: CitizenProposalCreatecitedMessageIdsInput | string[]
    status?: $Enums.ProposalStatus
    approvedByTeacherId?: string | null
  }

  export type CitizenProposalUncheckedCreateWithoutChallengeInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    generatedByAgent?: boolean
    title: string
    summary: string
    problemRestatement: string
    proposedActions: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalCreateagreementsInput | string[]
    tensions?: CitizenProposalCreatetensionsInput | string[]
    citedMessageIds?: CitizenProposalCreatecitedMessageIdsInput | string[]
    status?: $Enums.ProposalStatus
    approvedByTeacherId?: string | null
  }

  export type CitizenProposalCreateOrConnectWithoutChallengeInput = {
    where: CitizenProposalWhereUniqueInput
    create: XOR<CitizenProposalCreateWithoutChallengeInput, CitizenProposalUncheckedCreateWithoutChallengeInput>
  }

  export type CitizenProposalCreateManyChallengeInputEnvelope = {
    data: CitizenProposalCreateManyChallengeInput | CitizenProposalCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type DebateForumUpsertWithoutChallengeInput = {
    update: XOR<DebateForumUpdateWithoutChallengeInput, DebateForumUncheckedUpdateWithoutChallengeInput>
    create: XOR<DebateForumCreateWithoutChallengeInput, DebateForumUncheckedCreateWithoutChallengeInput>
    where?: DebateForumWhereInput
  }

  export type DebateForumUpdateToOneWithWhereWithoutChallengeInput = {
    where?: DebateForumWhereInput
    data: XOR<DebateForumUpdateWithoutChallengeInput, DebateForumUncheckedUpdateWithoutChallengeInput>
  }

  export type DebateForumUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: ForumMessageUpdateManyWithoutForumNestedInput
    participants?: ForumParticipantUpdateManyWithoutForumNestedInput
  }

  export type DebateForumUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: ForumMessageUncheckedUpdateManyWithoutForumNestedInput
    participants?: ForumParticipantUncheckedUpdateManyWithoutForumNestedInput
  }

  export type CitizenProposalUpsertWithWhereUniqueWithoutChallengeInput = {
    where: CitizenProposalWhereUniqueInput
    update: XOR<CitizenProposalUpdateWithoutChallengeInput, CitizenProposalUncheckedUpdateWithoutChallengeInput>
    create: XOR<CitizenProposalCreateWithoutChallengeInput, CitizenProposalUncheckedCreateWithoutChallengeInput>
  }

  export type CitizenProposalUpdateWithWhereUniqueWithoutChallengeInput = {
    where: CitizenProposalWhereUniqueInput
    data: XOR<CitizenProposalUpdateWithoutChallengeInput, CitizenProposalUncheckedUpdateWithoutChallengeInput>
  }

  export type CitizenProposalUpdateManyWithWhereWithoutChallengeInput = {
    where: CitizenProposalScalarWhereInput
    data: XOR<CitizenProposalUpdateManyMutationInput, CitizenProposalUncheckedUpdateManyWithoutChallengeInput>
  }

  export type CitizenProposalScalarWhereInput = {
    AND?: CitizenProposalScalarWhereInput | CitizenProposalScalarWhereInput[]
    OR?: CitizenProposalScalarWhereInput[]
    NOT?: CitizenProposalScalarWhereInput | CitizenProposalScalarWhereInput[]
    id?: StringFilter<"CitizenProposal"> | string
    createdAt?: DateTimeFilter<"CitizenProposal"> | Date | string
    updatedAt?: DateTimeFilter<"CitizenProposal"> | Date | string
    metadata?: JsonNullableFilter<"CitizenProposal">
    challengeId?: StringFilter<"CitizenProposal"> | string
    generatedByAgent?: BoolFilter<"CitizenProposal"> | boolean
    title?: StringFilter<"CitizenProposal"> | string
    summary?: StringFilter<"CitizenProposal"> | string
    problemRestatement?: StringFilter<"CitizenProposal"> | string
    proposedActions?: JsonFilter<"CitizenProposal">
    agreements?: StringNullableListFilter<"CitizenProposal">
    tensions?: StringNullableListFilter<"CitizenProposal">
    citedMessageIds?: StringNullableListFilter<"CitizenProposal">
    status?: EnumProposalStatusFilter<"CitizenProposal"> | $Enums.ProposalStatus
    approvedByTeacherId?: StringNullableFilter<"CitizenProposal"> | string | null
  }

  export type CivicChallengeCreateWithoutForumInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    classroomId?: string | null
    title: string
    problemStatement: string
    context?: string | null
    category: string
    gradeLevel?: string | null
    status?: $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeCreateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: Date | string | null
    closesAt?: Date | string | null
    proposals?: CitizenProposalCreateNestedManyWithoutChallengeInput
  }

  export type CivicChallengeUncheckedCreateWithoutForumInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    classroomId?: string | null
    title: string
    problemStatement: string
    context?: string | null
    category: string
    gradeLevel?: string | null
    status?: $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeCreateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: Date | string | null
    closesAt?: Date | string | null
    proposals?: CitizenProposalUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type CivicChallengeCreateOrConnectWithoutForumInput = {
    where: CivicChallengeWhereUniqueInput
    create: XOR<CivicChallengeCreateWithoutForumInput, CivicChallengeUncheckedCreateWithoutForumInput>
  }

  export type ForumMessageCreateWithoutForumInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    replyTo?: ForumMessageCreateNestedOneWithoutRepliesInput
    replies?: ForumMessageCreateNestedManyWithoutReplyToInput
    citations?: FactCheckCitationCreateNestedManyWithoutMessageInput
  }

  export type ForumMessageUncheckedCreateWithoutForumInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    replyToId?: string | null
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    replies?: ForumMessageUncheckedCreateNestedManyWithoutReplyToInput
    citations?: FactCheckCitationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ForumMessageCreateOrConnectWithoutForumInput = {
    where: ForumMessageWhereUniqueInput
    create: XOR<ForumMessageCreateWithoutForumInput, ForumMessageUncheckedCreateWithoutForumInput>
  }

  export type ForumMessageCreateManyForumInputEnvelope = {
    data: ForumMessageCreateManyForumInput | ForumMessageCreateManyForumInput[]
    skipDuplicates?: boolean
  }

  export type ForumParticipantCreateWithoutForumInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
    stance?: string | null
    messagesSent?: number
  }

  export type ForumParticipantUncheckedCreateWithoutForumInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
    stance?: string | null
    messagesSent?: number
  }

  export type ForumParticipantCreateOrConnectWithoutForumInput = {
    where: ForumParticipantWhereUniqueInput
    create: XOR<ForumParticipantCreateWithoutForumInput, ForumParticipantUncheckedCreateWithoutForumInput>
  }

  export type ForumParticipantCreateManyForumInputEnvelope = {
    data: ForumParticipantCreateManyForumInput | ForumParticipantCreateManyForumInput[]
    skipDuplicates?: boolean
  }

  export type CivicChallengeUpsertWithoutForumInput = {
    update: XOR<CivicChallengeUpdateWithoutForumInput, CivicChallengeUncheckedUpdateWithoutForumInput>
    create: XOR<CivicChallengeCreateWithoutForumInput, CivicChallengeUncheckedCreateWithoutForumInput>
    where?: CivicChallengeWhereInput
  }

  export type CivicChallengeUpdateToOneWithWhereWithoutForumInput = {
    where?: CivicChallengeWhereInput
    data: XOR<CivicChallengeUpdateWithoutForumInput, CivicChallengeUncheckedUpdateWithoutForumInput>
  }

  export type CivicChallengeUpdateWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    problemStatement?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    gradeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeUpdateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closesAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proposals?: CitizenProposalUpdateManyWithoutChallengeNestedInput
  }

  export type CivicChallengeUncheckedUpdateWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    problemStatement?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    gradeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeUpdateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closesAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proposals?: CitizenProposalUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ForumMessageUpsertWithWhereUniqueWithoutForumInput = {
    where: ForumMessageWhereUniqueInput
    update: XOR<ForumMessageUpdateWithoutForumInput, ForumMessageUncheckedUpdateWithoutForumInput>
    create: XOR<ForumMessageCreateWithoutForumInput, ForumMessageUncheckedCreateWithoutForumInput>
  }

  export type ForumMessageUpdateWithWhereUniqueWithoutForumInput = {
    where: ForumMessageWhereUniqueInput
    data: XOR<ForumMessageUpdateWithoutForumInput, ForumMessageUncheckedUpdateWithoutForumInput>
  }

  export type ForumMessageUpdateManyWithWhereWithoutForumInput = {
    where: ForumMessageScalarWhereInput
    data: XOR<ForumMessageUpdateManyMutationInput, ForumMessageUncheckedUpdateManyWithoutForumInput>
  }

  export type ForumMessageScalarWhereInput = {
    AND?: ForumMessageScalarWhereInput | ForumMessageScalarWhereInput[]
    OR?: ForumMessageScalarWhereInput[]
    NOT?: ForumMessageScalarWhereInput | ForumMessageScalarWhereInput[]
    id?: StringFilter<"ForumMessage"> | string
    createdAt?: DateTimeFilter<"ForumMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ForumMessage"> | Date | string
    metadata?: JsonNullableFilter<"ForumMessage">
    forumId?: StringFilter<"ForumMessage"> | string
    authorType?: EnumMessageAuthorTypeFilter<"ForumMessage"> | $Enums.MessageAuthorType
    authorId?: StringNullableFilter<"ForumMessage"> | string | null
    agentRole?: EnumAgentRoleNullableFilter<"ForumMessage"> | $Enums.AgentRole | null
    body?: StringFilter<"ForumMessage"> | string
    replyToId?: StringNullableFilter<"ForumMessage"> | string | null
    moderationStatus?: EnumModerationStatusFilter<"ForumMessage"> | $Enums.ModerationStatus
    flaggedReason?: StringNullableFilter<"ForumMessage"> | string | null
  }

  export type ForumParticipantUpsertWithWhereUniqueWithoutForumInput = {
    where: ForumParticipantWhereUniqueInput
    update: XOR<ForumParticipantUpdateWithoutForumInput, ForumParticipantUncheckedUpdateWithoutForumInput>
    create: XOR<ForumParticipantCreateWithoutForumInput, ForumParticipantUncheckedCreateWithoutForumInput>
  }

  export type ForumParticipantUpdateWithWhereUniqueWithoutForumInput = {
    where: ForumParticipantWhereUniqueInput
    data: XOR<ForumParticipantUpdateWithoutForumInput, ForumParticipantUncheckedUpdateWithoutForumInput>
  }

  export type ForumParticipantUpdateManyWithWhereWithoutForumInput = {
    where: ForumParticipantScalarWhereInput
    data: XOR<ForumParticipantUpdateManyMutationInput, ForumParticipantUncheckedUpdateManyWithoutForumInput>
  }

  export type ForumParticipantScalarWhereInput = {
    AND?: ForumParticipantScalarWhereInput | ForumParticipantScalarWhereInput[]
    OR?: ForumParticipantScalarWhereInput[]
    NOT?: ForumParticipantScalarWhereInput | ForumParticipantScalarWhereInput[]
    id?: StringFilter<"ForumParticipant"> | string
    createdAt?: DateTimeFilter<"ForumParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"ForumParticipant"> | Date | string
    forumId?: StringFilter<"ForumParticipant"> | string
    studentId?: StringFilter<"ForumParticipant"> | string
    stance?: StringNullableFilter<"ForumParticipant"> | string | null
    messagesSent?: IntFilter<"ForumParticipant"> | number
  }

  export type DebateForumCreateWithoutParticipantsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ForumStatus
    moderationLevel?: string
    messageCount?: number
    lastActivityAt?: Date | string | null
    challenge: CivicChallengeCreateNestedOneWithoutForumInput
    messages?: ForumMessageCreateNestedManyWithoutForumInput
  }

  export type DebateForumUncheckedCreateWithoutParticipantsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId: string
    status?: $Enums.ForumStatus
    moderationLevel?: string
    messageCount?: number
    lastActivityAt?: Date | string | null
    messages?: ForumMessageUncheckedCreateNestedManyWithoutForumInput
  }

  export type DebateForumCreateOrConnectWithoutParticipantsInput = {
    where: DebateForumWhereUniqueInput
    create: XOR<DebateForumCreateWithoutParticipantsInput, DebateForumUncheckedCreateWithoutParticipantsInput>
  }

  export type DebateForumUpsertWithoutParticipantsInput = {
    update: XOR<DebateForumUpdateWithoutParticipantsInput, DebateForumUncheckedUpdateWithoutParticipantsInput>
    create: XOR<DebateForumCreateWithoutParticipantsInput, DebateForumUncheckedCreateWithoutParticipantsInput>
    where?: DebateForumWhereInput
  }

  export type DebateForumUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: DebateForumWhereInput
    data: XOR<DebateForumUpdateWithoutParticipantsInput, DebateForumUncheckedUpdateWithoutParticipantsInput>
  }

  export type DebateForumUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge?: CivicChallengeUpdateOneRequiredWithoutForumNestedInput
    messages?: ForumMessageUpdateManyWithoutForumNestedInput
  }

  export type DebateForumUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: ForumMessageUncheckedUpdateManyWithoutForumNestedInput
  }

  export type DebateForumCreateWithoutMessagesInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.ForumStatus
    moderationLevel?: string
    messageCount?: number
    lastActivityAt?: Date | string | null
    challenge: CivicChallengeCreateNestedOneWithoutForumInput
    participants?: ForumParticipantCreateNestedManyWithoutForumInput
  }

  export type DebateForumUncheckedCreateWithoutMessagesInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId: string
    status?: $Enums.ForumStatus
    moderationLevel?: string
    messageCount?: number
    lastActivityAt?: Date | string | null
    participants?: ForumParticipantUncheckedCreateNestedManyWithoutForumInput
  }

  export type DebateForumCreateOrConnectWithoutMessagesInput = {
    where: DebateForumWhereUniqueInput
    create: XOR<DebateForumCreateWithoutMessagesInput, DebateForumUncheckedCreateWithoutMessagesInput>
  }

  export type ForumMessageCreateWithoutRepliesInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    forum: DebateForumCreateNestedOneWithoutMessagesInput
    replyTo?: ForumMessageCreateNestedOneWithoutRepliesInput
    citations?: FactCheckCitationCreateNestedManyWithoutMessageInput
  }

  export type ForumMessageUncheckedCreateWithoutRepliesInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId: string
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    replyToId?: string | null
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    citations?: FactCheckCitationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ForumMessageCreateOrConnectWithoutRepliesInput = {
    where: ForumMessageWhereUniqueInput
    create: XOR<ForumMessageCreateWithoutRepliesInput, ForumMessageUncheckedCreateWithoutRepliesInput>
  }

  export type ForumMessageCreateWithoutReplyToInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    forum: DebateForumCreateNestedOneWithoutMessagesInput
    replies?: ForumMessageCreateNestedManyWithoutReplyToInput
    citations?: FactCheckCitationCreateNestedManyWithoutMessageInput
  }

  export type ForumMessageUncheckedCreateWithoutReplyToInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId: string
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    replies?: ForumMessageUncheckedCreateNestedManyWithoutReplyToInput
    citations?: FactCheckCitationUncheckedCreateNestedManyWithoutMessageInput
  }

  export type ForumMessageCreateOrConnectWithoutReplyToInput = {
    where: ForumMessageWhereUniqueInput
    create: XOR<ForumMessageCreateWithoutReplyToInput, ForumMessageUncheckedCreateWithoutReplyToInput>
  }

  export type ForumMessageCreateManyReplyToInputEnvelope = {
    data: ForumMessageCreateManyReplyToInput | ForumMessageCreateManyReplyToInput[]
    skipDuplicates?: boolean
  }

  export type FactCheckCitationCreateWithoutMessageInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceUrl?: string | null
    sourceTitle?: string | null
    claim: string
    verdict?: $Enums.FactVerdict
    confidence?: number
    rationale?: string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FactCheckCitationUncheckedCreateWithoutMessageInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceUrl?: string | null
    sourceTitle?: string | null
    claim: string
    verdict?: $Enums.FactVerdict
    confidence?: number
    rationale?: string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FactCheckCitationCreateOrConnectWithoutMessageInput = {
    where: FactCheckCitationWhereUniqueInput
    create: XOR<FactCheckCitationCreateWithoutMessageInput, FactCheckCitationUncheckedCreateWithoutMessageInput>
  }

  export type FactCheckCitationCreateManyMessageInputEnvelope = {
    data: FactCheckCitationCreateManyMessageInput | FactCheckCitationCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type DebateForumUpsertWithoutMessagesInput = {
    update: XOR<DebateForumUpdateWithoutMessagesInput, DebateForumUncheckedUpdateWithoutMessagesInput>
    create: XOR<DebateForumCreateWithoutMessagesInput, DebateForumUncheckedCreateWithoutMessagesInput>
    where?: DebateForumWhereInput
  }

  export type DebateForumUpdateToOneWithWhereWithoutMessagesInput = {
    where?: DebateForumWhereInput
    data: XOR<DebateForumUpdateWithoutMessagesInput, DebateForumUncheckedUpdateWithoutMessagesInput>
  }

  export type DebateForumUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challenge?: CivicChallengeUpdateOneRequiredWithoutForumNestedInput
    participants?: ForumParticipantUpdateManyWithoutForumNestedInput
  }

  export type DebateForumUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    challengeId?: StringFieldUpdateOperationsInput | string
    status?: EnumForumStatusFieldUpdateOperationsInput | $Enums.ForumStatus
    moderationLevel?: StringFieldUpdateOperationsInput | string
    messageCount?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participants?: ForumParticipantUncheckedUpdateManyWithoutForumNestedInput
  }

  export type ForumMessageUpsertWithoutRepliesInput = {
    update: XOR<ForumMessageUpdateWithoutRepliesInput, ForumMessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<ForumMessageCreateWithoutRepliesInput, ForumMessageUncheckedCreateWithoutRepliesInput>
    where?: ForumMessageWhereInput
  }

  export type ForumMessageUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ForumMessageWhereInput
    data: XOR<ForumMessageUpdateWithoutRepliesInput, ForumMessageUncheckedUpdateWithoutRepliesInput>
  }

  export type ForumMessageUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    forum?: DebateForumUpdateOneRequiredWithoutMessagesNestedInput
    replyTo?: ForumMessageUpdateOneWithoutRepliesNestedInput
    citations?: FactCheckCitationUpdateManyWithoutMessageNestedInput
  }

  export type ForumMessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId?: StringFieldUpdateOperationsInput | string
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    citations?: FactCheckCitationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ForumMessageUpsertWithWhereUniqueWithoutReplyToInput = {
    where: ForumMessageWhereUniqueInput
    update: XOR<ForumMessageUpdateWithoutReplyToInput, ForumMessageUncheckedUpdateWithoutReplyToInput>
    create: XOR<ForumMessageCreateWithoutReplyToInput, ForumMessageUncheckedCreateWithoutReplyToInput>
  }

  export type ForumMessageUpdateWithWhereUniqueWithoutReplyToInput = {
    where: ForumMessageWhereUniqueInput
    data: XOR<ForumMessageUpdateWithoutReplyToInput, ForumMessageUncheckedUpdateWithoutReplyToInput>
  }

  export type ForumMessageUpdateManyWithWhereWithoutReplyToInput = {
    where: ForumMessageScalarWhereInput
    data: XOR<ForumMessageUpdateManyMutationInput, ForumMessageUncheckedUpdateManyWithoutReplyToInput>
  }

  export type FactCheckCitationUpsertWithWhereUniqueWithoutMessageInput = {
    where: FactCheckCitationWhereUniqueInput
    update: XOR<FactCheckCitationUpdateWithoutMessageInput, FactCheckCitationUncheckedUpdateWithoutMessageInput>
    create: XOR<FactCheckCitationCreateWithoutMessageInput, FactCheckCitationUncheckedCreateWithoutMessageInput>
  }

  export type FactCheckCitationUpdateWithWhereUniqueWithoutMessageInput = {
    where: FactCheckCitationWhereUniqueInput
    data: XOR<FactCheckCitationUpdateWithoutMessageInput, FactCheckCitationUncheckedUpdateWithoutMessageInput>
  }

  export type FactCheckCitationUpdateManyWithWhereWithoutMessageInput = {
    where: FactCheckCitationScalarWhereInput
    data: XOR<FactCheckCitationUpdateManyMutationInput, FactCheckCitationUncheckedUpdateManyWithoutMessageInput>
  }

  export type FactCheckCitationScalarWhereInput = {
    AND?: FactCheckCitationScalarWhereInput | FactCheckCitationScalarWhereInput[]
    OR?: FactCheckCitationScalarWhereInput[]
    NOT?: FactCheckCitationScalarWhereInput | FactCheckCitationScalarWhereInput[]
    id?: StringFilter<"FactCheckCitation"> | string
    createdAt?: DateTimeFilter<"FactCheckCitation"> | Date | string
    updatedAt?: DateTimeFilter<"FactCheckCitation"> | Date | string
    metadata?: JsonNullableFilter<"FactCheckCitation">
    messageId?: StringFilter<"FactCheckCitation"> | string
    sourceUrl?: StringNullableFilter<"FactCheckCitation"> | string | null
    sourceTitle?: StringNullableFilter<"FactCheckCitation"> | string | null
    claim?: StringFilter<"FactCheckCitation"> | string
    verdict?: EnumFactVerdictFilter<"FactCheckCitation"> | $Enums.FactVerdict
    confidence?: FloatFilter<"FactCheckCitation"> | number
    rationale?: StringNullableFilter<"FactCheckCitation"> | string | null
    supportingSources?: JsonNullableFilter<"FactCheckCitation">
  }

  export type ForumMessageCreateWithoutCitationsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    forum: DebateForumCreateNestedOneWithoutMessagesInput
    replyTo?: ForumMessageCreateNestedOneWithoutRepliesInput
    replies?: ForumMessageCreateNestedManyWithoutReplyToInput
  }

  export type ForumMessageUncheckedCreateWithoutCitationsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId: string
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    replyToId?: string | null
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
    replies?: ForumMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type ForumMessageCreateOrConnectWithoutCitationsInput = {
    where: ForumMessageWhereUniqueInput
    create: XOR<ForumMessageCreateWithoutCitationsInput, ForumMessageUncheckedCreateWithoutCitationsInput>
  }

  export type ForumMessageUpsertWithoutCitationsInput = {
    update: XOR<ForumMessageUpdateWithoutCitationsInput, ForumMessageUncheckedUpdateWithoutCitationsInput>
    create: XOR<ForumMessageCreateWithoutCitationsInput, ForumMessageUncheckedCreateWithoutCitationsInput>
    where?: ForumMessageWhereInput
  }

  export type ForumMessageUpdateToOneWithWhereWithoutCitationsInput = {
    where?: ForumMessageWhereInput
    data: XOR<ForumMessageUpdateWithoutCitationsInput, ForumMessageUncheckedUpdateWithoutCitationsInput>
  }

  export type ForumMessageUpdateWithoutCitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    forum?: DebateForumUpdateOneRequiredWithoutMessagesNestedInput
    replyTo?: ForumMessageUpdateOneWithoutRepliesNestedInput
    replies?: ForumMessageUpdateManyWithoutReplyToNestedInput
  }

  export type ForumMessageUncheckedUpdateWithoutCitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId?: StringFieldUpdateOperationsInput | string
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ForumMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type CivicChallengeCreateWithoutProposalsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    classroomId?: string | null
    title: string
    problemStatement: string
    context?: string | null
    category: string
    gradeLevel?: string | null
    status?: $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeCreateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: Date | string | null
    closesAt?: Date | string | null
    forum?: DebateForumCreateNestedOneWithoutChallengeInput
  }

  export type CivicChallengeUncheckedCreateWithoutProposalsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId: string
    classroomId?: string | null
    title: string
    problemStatement: string
    context?: string | null
    category: string
    gradeLevel?: string | null
    status?: $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeCreateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: Date | string | null
    closesAt?: Date | string | null
    forum?: DebateForumUncheckedCreateNestedOneWithoutChallengeInput
  }

  export type CivicChallengeCreateOrConnectWithoutProposalsInput = {
    where: CivicChallengeWhereUniqueInput
    create: XOR<CivicChallengeCreateWithoutProposalsInput, CivicChallengeUncheckedCreateWithoutProposalsInput>
  }

  export type CivicChallengeUpsertWithoutProposalsInput = {
    update: XOR<CivicChallengeUpdateWithoutProposalsInput, CivicChallengeUncheckedUpdateWithoutProposalsInput>
    create: XOR<CivicChallengeCreateWithoutProposalsInput, CivicChallengeUncheckedCreateWithoutProposalsInput>
    where?: CivicChallengeWhereInput
  }

  export type CivicChallengeUpdateToOneWithWhereWithoutProposalsInput = {
    where?: CivicChallengeWhereInput
    data: XOR<CivicChallengeUpdateWithoutProposalsInput, CivicChallengeUncheckedUpdateWithoutProposalsInput>
  }

  export type CivicChallengeUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    problemStatement?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    gradeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeUpdateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closesAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forum?: DebateForumUpdateOneWithoutChallengeNestedInput
  }

  export type CivicChallengeUncheckedUpdateWithoutProposalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    teacherId?: StringFieldUpdateOperationsInput | string
    classroomId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    problemStatement?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    gradeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumChallengeStatusFieldUpdateOperationsInput | $Enums.ChallengeStatus
    guidingQuestions?: CivicChallengeUpdateguidingQuestionsInput | string[]
    rubric?: NullableJsonNullValueInput | InputJsonValue
    opensAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closesAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forum?: DebateForumUncheckedUpdateOneWithoutChallengeNestedInput
  }

  export type CitizenProposalCreateManyChallengeInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    generatedByAgent?: boolean
    title: string
    summary: string
    problemRestatement: string
    proposedActions: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalCreateagreementsInput | string[]
    tensions?: CitizenProposalCreatetensionsInput | string[]
    citedMessageIds?: CitizenProposalCreatecitedMessageIdsInput | string[]
    status?: $Enums.ProposalStatus
    approvedByTeacherId?: string | null
  }

  export type CitizenProposalUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    generatedByAgent?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemRestatement?: StringFieldUpdateOperationsInput | string
    proposedActions?: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalUpdateagreementsInput | string[]
    tensions?: CitizenProposalUpdatetensionsInput | string[]
    citedMessageIds?: CitizenProposalUpdatecitedMessageIdsInput | string[]
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    approvedByTeacherId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitizenProposalUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    generatedByAgent?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemRestatement?: StringFieldUpdateOperationsInput | string
    proposedActions?: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalUpdateagreementsInput | string[]
    tensions?: CitizenProposalUpdatetensionsInput | string[]
    citedMessageIds?: CitizenProposalUpdatecitedMessageIdsInput | string[]
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    approvedByTeacherId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CitizenProposalUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    generatedByAgent?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemRestatement?: StringFieldUpdateOperationsInput | string
    proposedActions?: JsonNullValueInput | InputJsonValue
    agreements?: CitizenProposalUpdateagreementsInput | string[]
    tensions?: CitizenProposalUpdatetensionsInput | string[]
    citedMessageIds?: CitizenProposalUpdatecitedMessageIdsInput | string[]
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    approvedByTeacherId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ForumMessageCreateManyForumInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    replyToId?: string | null
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
  }

  export type ForumParticipantCreateManyForumInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
    stance?: string | null
    messagesSent?: number
  }

  export type ForumMessageUpdateWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    replyTo?: ForumMessageUpdateOneWithoutRepliesNestedInput
    replies?: ForumMessageUpdateManyWithoutReplyToNestedInput
    citations?: FactCheckCitationUpdateManyWithoutMessageNestedInput
  }

  export type ForumMessageUncheckedUpdateWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ForumMessageUncheckedUpdateManyWithoutReplyToNestedInput
    citations?: FactCheckCitationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ForumMessageUncheckedUpdateManyWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ForumParticipantUpdateWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    stance?: NullableStringFieldUpdateOperationsInput | string | null
    messagesSent?: IntFieldUpdateOperationsInput | number
  }

  export type ForumParticipantUncheckedUpdateWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    stance?: NullableStringFieldUpdateOperationsInput | string | null
    messagesSent?: IntFieldUpdateOperationsInput | number
  }

  export type ForumParticipantUncheckedUpdateManyWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    stance?: NullableStringFieldUpdateOperationsInput | string | null
    messagesSent?: IntFieldUpdateOperationsInput | number
  }

  export type ForumMessageCreateManyReplyToInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId: string
    authorType: $Enums.MessageAuthorType
    authorId?: string | null
    agentRole?: $Enums.AgentRole | null
    body: string
    moderationStatus?: $Enums.ModerationStatus
    flaggedReason?: string | null
  }

  export type FactCheckCitationCreateManyMessageInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceUrl?: string | null
    sourceTitle?: string | null
    claim: string
    verdict?: $Enums.FactVerdict
    confidence?: number
    rationale?: string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ForumMessageUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    forum?: DebateForumUpdateOneRequiredWithoutMessagesNestedInput
    replies?: ForumMessageUpdateManyWithoutReplyToNestedInput
    citations?: FactCheckCitationUpdateManyWithoutMessageNestedInput
  }

  export type ForumMessageUncheckedUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId?: StringFieldUpdateOperationsInput | string
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ForumMessageUncheckedUpdateManyWithoutReplyToNestedInput
    citations?: FactCheckCitationUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type ForumMessageUncheckedUpdateManyWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    forumId?: StringFieldUpdateOperationsInput | string
    authorType?: EnumMessageAuthorTypeFieldUpdateOperationsInput | $Enums.MessageAuthorType
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    agentRole?: NullableEnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole | null
    body?: StringFieldUpdateOperationsInput | string
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    flaggedReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FactCheckCitationUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    claim?: StringFieldUpdateOperationsInput | string
    verdict?: EnumFactVerdictFieldUpdateOperationsInput | $Enums.FactVerdict
    confidence?: FloatFieldUpdateOperationsInput | number
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FactCheckCitationUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    claim?: StringFieldUpdateOperationsInput | string
    verdict?: EnumFactVerdictFieldUpdateOperationsInput | $Enums.FactVerdict
    confidence?: FloatFieldUpdateOperationsInput | number
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FactCheckCitationUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceTitle?: NullableStringFieldUpdateOperationsInput | string | null
    claim?: StringFieldUpdateOperationsInput | string
    verdict?: EnumFactVerdictFieldUpdateOperationsInput | $Enums.FactVerdict
    confidence?: FloatFieldUpdateOperationsInput | number
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    supportingSources?: NullableJsonNullValueInput | InputJsonValue
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