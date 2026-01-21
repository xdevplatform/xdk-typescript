/**
 * Environment-aware HTTP client for the X API SDK.
 *
 * This module provides a universal HTTP client that works in Node.js, browser,
 * and React Native environments without requiring manual polyfills.
 */
interface RequestOptions$1 {
    method?: string;
    headers?: Record<string, string> | Headers;
    body?: string | Buffer | ArrayBuffer | ArrayBufferView;
    signal?: AbortSignal;
    timeout?: number;
}
interface HttpResponse {
    ok: boolean;
    status: number;
    statusText: string;
    headers: Headers;
    url: string;
    json(): Promise<any>;
    text(): Promise<string>;
    arrayBuffer(): Promise<ArrayBuffer>;
}
/**
 * Universal HTTP client that works in both Node.js and browser environments
 */
declare class HttpClient {
    private fetch;
    private HeadersClass;
    constructor();
    private initializeEnvironment;
    private initializeNodeEnvironment;
    /**
     * Create a new Headers instance
     */
    createHeaders(init?: Record<string, string> | Headers): Headers;
    /**
     * Make an HTTP request
     */
    request(url: string, options?: RequestOptions$1): Promise<HttpResponse>;
    /**
     * Make a GET request
     */
    get(url: string, headers?: Record<string, string>): Promise<HttpResponse>;
    /**
     * Make a POST request
     */
    post(url: string, body?: string, headers?: Record<string, string>): Promise<HttpResponse>;
    /**
     * Make a PUT request
     */
    put(url: string, body?: string, headers?: Record<string, string>): Promise<HttpResponse>;
    /**
     * Make a DELETE request
     */
    delete(url: string, headers?: Record<string, string>): Promise<HttpResponse>;
    /**
     * Make a PATCH request
     */
    patch(url: string, body?: string, headers?: Record<string, string>): Promise<HttpResponse>;
}
declare const httpClient: HttpClient;

/**
 * Response for getOpenApiSpec
 *
 * @public
 */
type GetOpenApiSpecResponse = Record<string, any>;

type models$h_GetOpenApiSpecResponse = GetOpenApiSpecResponse;
declare namespace models$h {
  export {
    models$h_GetOpenApiSpecResponse as GetOpenApiSpecResponse,
  };
}

/**
 * general client for the X API.
 *
 * This module provides a client for interacting with the general endpoints of the X API.
 */

/**
 * Client for general operations
 *
 * This client provides methods for interacting with the general endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all general related operations.
 *
 * @category general
 */
declare class GeneralClient {
    private client;
    /**
     * Creates a new general client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get OpenAPI Spec.
     * Retrieves the full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
  
  
  
     * @returns {Promise<GetOpenApiSpecResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getOpenApiSpec(options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getOpenApiSpec(): Promise<GetOpenApiSpecResponse>;
}

/**
 * OpenAPI Schema Types
 * Auto-generated from OpenAPI components/schemas
 *
 * @internal
 */
/**
The unique identifier of an Activity event.
 *
 * @public
 */
type ActivityEventId = string; /**
An activity event or error that can be returned by the x activity streaming API.
 *
 * @public
 */
interface ActivityStreamingResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
}
/**
Schema type for ActivityStreamingResponsePayload
 *
 * @public
 */
type ActivityStreamingResponsePayload = any; /**
An XActivity subscription.
 *
 * @public
 */
interface ActivitySubscription {
    createdAt: string; /** none */
    eventType: string; /** An XAA subscription. */
    filter: ActivitySubscriptionFilter; /** The unique identifier of this subscription. */
    subscriptionId: ActivitySubscriptionId; /** none */
    tag?: string; /** none */
    updatedAt: string; /** The unique identifier of this webhook config. */
    webhookId?: WebhookConfigId;
} /**
Schema type for ActivitySubscriptionCreateRequest
 *
 * @public
 */
interface ActivitySubscriptionCreateRequest {
    eventType: "profile.update.bio" | "profile.update.profile_picture" | "profile.update.banner_picture" | "profile.update.screenname" | "profile.update.geo" | "profile.update.url" | "profile.update.verified_badge" | "news.new" | "follow.follow" | "follow.unfollow" | "ProfileBioUpdate" | "ProfilePictureUpdate" | "ProfileBannerPictureUpdate" | "ProfileScreennameUpdate" | "ProfileGeoUpdate" | "ProfileUrlUpdate" | "ProfileVerifiedBadgeUpdate" | "NewsNew" | "FollowFollow" | "FollowUnfollow"; /** An XAA subscription. */
    filter: ActivitySubscriptionFilter; /** none */
    tag?: string; /** The unique identifier of this webhook config. */
    webhookId?: WebhookConfigId;
} /**
Schema type for ActivitySubscriptionCreateResponse
 *
 * @public
 */
interface ActivitySubscriptionCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for ActivitySubscriptionDeleteResponse
 *
 * @public
 */
interface ActivitySubscriptionDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
An XAA subscription.
 *
 * @public
 */
interface ActivitySubscriptionFilter {
    keyword?: Keyword; /** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    userId?: UserId;
} /**
Schema type for ActivitySubscriptionGetResponse
 *
 * @public
 */
interface ActivitySubscriptionGetResponse {
    data?: Array<ActivitySubscription>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
The unique identifier of this subscription.
 *
 * @public
 */
type ActivitySubscriptionId = string; /**
Schema type for ActivitySubscriptionUpdateRequest
 *
 * @public
 */
interface ActivitySubscriptionUpdateRequest {
    tag?: string; /** The unique identifier of this webhook config. */
    webhookId?: WebhookConfigId;
} /**
Schema type for ActivitySubscriptionUpdateResponse
 *
 * @public
 */
interface ActivitySubscriptionUpdateResponse {
    data?: Record<string, any>;
}
/**
Schema type for AddOrDeleteRulesRequest
 *
 * @public
 */
type AddOrDeleteRulesRequest = any; /**
A response from modifying user-specified stream filtering rules.
 *
 * @public
 */
interface AddOrDeleteRulesResponse {
    data?: Array<Rule>; /** none */
    errors?: Array<Problem>; /** none */
    meta: RulesResponseMetadata;
} /**
A request to add a user-specified stream filtering rule.
 *
 * @public
 */
interface AddRulesRequest {
    add: Array<RuleNoId>;
} /**
The sum of results returned in this response.
 *
 * @public
 */
type Aggregate = number; /**
Schema type for AllowDownloadStatus
 *
 * @public
 */
interface AllowDownloadStatus {
    allowDownload?: boolean;
} /**
Client App Rule Counts for all applications in the project
 *
 * @public
 */
type AllProjectClientApps = Array<AppRulesCount>; /**
Schema type for AltText
 *
 * @public
 */
interface AltText {
    text: string;
} /**
Schema type for Analytics
 *
 * @public
 */
interface Analytics {
    data?: Array<Record<string, any>>; /** none */
    errors?: Array<Problem>;
}
/**
Schema type for AnimatedGif
 *
 * @public
 */
type AnimatedGif = any; /**
A count of user-provided stream filtering rules at the client application level.
 *
 * @public
 */
interface AppRulesCount {
    clientAppId?: ClientAppId; /** Number of rules for client application */
    ruleCount?: number;
} /**
Schema type for AudiencePolicy
 *
 * @public
 */
interface AudiencePolicy {
    creatorSubscriptions?: Array<"Any">; /** none */
    xSubscriptions?: Array<"Any">;
} /**
Schema type for BookmarkAddRequest
 *
 * @public
 */
interface BookmarkAddRequest {
    tweetId: TweetId;
} /**
The unique identifier of this Bookmark folder.
 *
 * @public
 */
type BookmarkFolderId = string; /**
Schema type for BookmarkFolderPostsResponse
 *
 * @public
 */
interface BookmarkFolderPostsResponse {
    data?: Array<Record<string, any>>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for BookmarkFoldersResponse
 *
 * @public
 */
interface BookmarkFoldersResponse {
    data?: Array<Record<string, any>>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for BookmarkMutationResponse
 *
 * @public
 */
interface BookmarkMutationResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
}
/**
Schema type for CashtagEntity
 *
 * @public
 */
type CashtagEntity = any; /**
Represent the portion of text recognized as a Cashtag, and its start and end position within the text.
 *
 * @public
 */
interface CashtagFields {
    tag: string;
} /**
The ID of the client application
 *
 * @public
 */
type ClientAppId = string; /**
Usage per client app
 *
 * @public
 */
interface ClientAppUsage {
    clientAppId?: string; /** The usage value */
    usage?: Array<UsageFields>; /** The number of results returned */
    usageResultCount?: number;
}
/**
Your client has gone away.
 *
 * @public
 */
type ClientDisconnectedProblem = any;
/**
A problem that indicates your client is forbidden from making this request.
 *
 * @public
 */
type ClientForbiddenProblem = any; /**
A X Community is a curated group of Posts.
 *
 * @public
 */
interface Community {
    createdAt?: string; /** The unique identifier of this Community. */
    id: CommunityId; /** The name of this Community. */
    name: string;
} /**
The unique identifier of this Community.
 *
 * @public
 */
type CommunityId = string; /**
Schema type for ComplianceJob
 *
 * @public
 */
interface ComplianceJob {
    createdAt: CreatedAt; /** Expiration time of the download URL. */
    downloadExpiresAt: DownloadExpiration; /** URL from which the user will retrieve their compliance results. */
    downloadUrl: DownloadUrl; /** Compliance Job ID. */
    id: JobId; /** User-provided name for a compliance job. */
    name?: ComplianceJobName; /** Status of a compliance job. */
    status: ComplianceJobStatus; /** Type of compliance job to list. */
    type: ComplianceJobType; /** Expiration time of the upload URL. */
    uploadExpiresAt: UploadExpiration; /** URL to which the user will upload their Tweet or user IDs. */
    uploadUrl: UploadUrl;
} /**
User-provided name for a compliance job.
 *
 * @public
 */
type ComplianceJobName = string; /**
Status of a compliance job.
 *
 * @public
 */
type ComplianceJobStatus = "created" | "in_progress" | "failed" | "complete" | "expired"; /**
Type of compliance job to list.
 *
 * @public
 */
type ComplianceJobType = "tweets" | "users";
/**
You cannot create a new job if one is already in progress.
 *
 * @public
 */
type ConflictProblem = any; /**
Schema type for Connection
 *
 * @public
 */
interface Connection {
    clientIp?: string; /** The timestamp when the connection was established. */
    connectedAt: string; /** The reason for disconnection, if the connection is inactive. */
    disconnectReason?: string; /** The timestamp when the connection was disconnected, if applicable. */
    disconnectedAt?: string; /** The name of the streaming endpoint. */
    endpointName: string;
}
/**
A problem that indicates something is wrong with the connection.
 *
 * @public
 */
type ConnectionExceptionProblem = any; /**
Schema type for ContentExpiration
 *
 * @public
 */
interface ContentExpiration {
    timestampSec: number;
} /**
Annotation inferred from the Tweet text.
 *
 * @public
 */
interface ContextAnnotation {
    domain: ContextAnnotationDomainFields; /** Represents the data for the context annotation entity. */
    entity: ContextAnnotationEntityFields;
} /**
Represents the data for the context annotation domain.
 *
 * @public
 */
interface ContextAnnotationDomainFields {
    description?: string; /** The unique id for a context annotation domain. */
    id: string; /** Name of the context annotation domain. */
    name?: string;
} /**
Represents the data for the context annotation entity.
 *
 * @public
 */
interface ContextAnnotationEntityFields {
    description?: string; /** The unique id for a context annotation entity. */
    id: string; /** Name of the context annotation entity. */
    name?: string;
} /**
A two-letter ISO 3166-1 alpha-2 country code.
 *
 * @public
 */
type CountryCode = string; /**
Schema type for CreateAttachmentsMessageRequest
 *
 * @public
 */
interface CreateAttachmentsMessageRequest {
    attachments: DmAttachments; /** Text of the message. */
    text?: string;
} /**
A request to create a new batch compliance job.
 *
 * @public
 */
interface CreateComplianceJobRequest {
    name?: ComplianceJobName; /** If true, this endpoint will return a pre-signed URL with resumable uploads enabled. */
    resumable?: boolean; /** Type of compliance job to list. */
    type: "tweets" | "users";
} /**
Schema type for CreateComplianceJobResponse
 *
 * @public
 */
interface CreateComplianceJobResponse {
    data?: ComplianceJob; /** none */
    errors?: Array<Problem>;
} /**
Creation time of the compliance job.
 *
 * @public
 */
type CreatedAt = string; /**
Schema type for CreateDmConversationRequest
 *
 * @public
 */
interface CreateDmConversationRequest {
    conversationType: "Group"; /** none */
    message: CreateMessageRequest; /** Participants for the DM Conversation. */
    participantIds: DmParticipants;
} /**
Schema type for CreateDmEventResponse
 *
 * @public
 */
interface CreateDmEventResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
}
/**
Schema type for CreateMessageRequest
 *
 * @public
 */
type CreateMessageRequest = any; /**
Schema type for CreateNoteRequest
 *
 * @public
 */
interface CreateNoteRequest {
    info: NoteInfo; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    postId: TweetId; /** If true, the note being submitted is only for testing the capability of the bot, and won't be publicly visible. If false, the note being submitted will be a new proposed note on the product. */
    testMode: boolean;
} /**
Schema type for CreateNoteResponse
 *
 * @public
 */
interface CreateNoteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for CreateTextMessageRequest
 *
 * @public
 */
interface CreateTextMessageRequest {
    attachments?: DmAttachments; /** Text of the message. */
    text: string;
} /**
Schema type for DeleteDmResponse
 *
 * @public
 */
interface DeleteDmResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for DeleteNoteResponse
 *
 * @public
 */
interface DeleteNoteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
A response from deleting user-specified stream filtering rules.
 *
 * @public
 */
interface DeleteRulesRequest {
    delete: Record<string, any>;
}
/**
A problem that indicates that the resource requested violates the precepts of this API.
 *
 * @public
 */
type DisallowedResourceProblem = any; /**
Represent a boundary range (start and end zero-based indices) for the portion of text that is displayed for a post. `start` must be smaller than `end`. The start index is inclusive, the end index is exclusive.
 *
 * @public
 */
type DisplayTextRange = Array<number>; /**
Attachments to a DM Event.
 *
 * @public
 */
type DmAttachments = Array<DmMediaAttachment>; /**
Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.
 *
 * @public
 */
type DmConversationId = string; /**
Schema type for DmEvent
 *
 * @public
 */
interface DmEvent {
    attachments?: Record<string, any>; /** none */
    cashtags?: Array<CashtagEntity>; /** none */
    createdAt?: string; /** Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations. */
    dmConversationId?: DmConversationId; /** none */
    eventType: string; /** none */
    hashtags?: Array<HashtagEntity>; /** Unique identifier of a DM Event. */
    id: DmEventId; /** none */
    mentions?: Array<MentionEntity>; /** A list of participants for a ParticipantsJoin or ParticipantsLeave event_type. */
    participantIds?: Array<UserId>; /** A list of Posts this DM refers to. */
    referencedTweets?: Array<Record<string, any>>; /** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    senderId?: UserId; /** none */
    text?: string; /** none */
    urls?: Array<UrlEntityDm>;
} /**
Unique identifier of a DM Event.
 *
 * @public
 */
type DmEventId = string; /**
Schema type for DmMediaAttachment
 *
 * @public
 */
interface DmMediaAttachment {
    mediaId: MediaId;
} /**
Participants for the DM Conversation.
 *
 * @public
 */
type DmParticipants = Array<UserId>; /**
Schema type for DomainRestrictions
 *
 * @public
 */
interface DomainRestrictions {
    whitelist: Array<string>;
} /**
Expiration time of the download URL.
 *
 * @public
 */
type DownloadExpiration = string; /**
URL from which the user will retrieve their compliance results.
 *
 * @public
 */
type DownloadUrl = string;
/**
The rule you have submitted is a duplicate.
 *
 * @public
 */
type DuplicateRuleProblem = any; /**
The end time of the bucket.
 *
 * @public
 */
type End = string; /**
An Engagement Api Response.
 *
 * @public
 */
interface Engagement {
    errors?: Array<Record<string, any>>; /** none */
    measurement?: Record<string, any>;
} /**
Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is exclusive.
 *
 * @public
 */
interface EntityIndicesInclusiveExclusive {
    end: number; /** Index (zero-based) at which position this entity starts.  The index is inclusive. */
    start: number;
} /**
Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is inclusive.
 *
 * @public
 */
interface EntityIndicesInclusiveInclusive {
    end: number; /** Index (zero-based) at which position this entity starts.  The index is inclusive. */
    start: number;
} /**
Schema type for Error
 *
 * @public
 */
interface Error$1 {
    code: number; /** none */
    message: string;
} /**
Schema type for EvaluateNoteRequest
 *
 * @public
 */
interface EvaluateNoteRequest {
    noteText: string; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    postId: TweetId;
} /**
Schema type for EvaluateNoteResponse
 *
 * @public
 */
interface EvaluateNoteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Expansions
 *
 * @public
 */
interface Expansions {
    media?: Array<Media>; /** none */
    places?: Array<Place>; /** none */
    polls?: Array<Poll>; /** none */
    topics?: Array<Topic>; /** none */
    tweets?: Array<Tweet>; /** none */
    users?: Array<User>;
}
/**
A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc.
 *
 * @public
 */
type FieldUnauthorizedProblem = any; /**
A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched.
 *
 * @public
 */
interface FilteredStreamingTweetResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** The list of rules which matched the Tweet */
    matchingRules?: Array<Record<string, any>>;
} /**
Schema type for FollowActivityResponsePayload
 *
 * @public
 */
interface FollowActivityResponsePayload {
    source?: User; /** The X User object. */
    target?: User;
} /**
Schema type for FoundMediaOrigin
 *
 * @public
 */
interface FoundMediaOrigin {
    id: string; /** The media provider (e.g., 'giphy') that sourced the media ( <= 8 Characters ) */
    provider: string;
} /**
Schema type for FullTextEntities
 *
 * @public
 */
interface FullTextEntities {
    annotations?: Array<any>; /** none */
    cashtags?: Array<CashtagEntity>; /** none */
    hashtags?: Array<HashtagEntity>; /** none */
    mentions?: Array<MentionEntity>; /** none */
    urls?: Array<UrlEntity>;
}
/**
A generic problem with no additional information beyond that provided by the HTTP status code.
 *
 * @public
 */
type GenericProblem = any; /**
Schema type for Geo
 *
 * @public
 */
interface Geo {
    bbox: Array<number>; /** A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object. */
    geometry?: Point; /** none */
    properties: Record<string, any>; /** none */
    type: "Feature";
}
/**
Schema type for GeoRestrictions
 *
 * @public
 */
type GeoRestrictions = any; /**
Schema type for Get2CommunitiesIdResponse
 *
 * @public
 */
interface Get2CommunitiesIdResponse {
    data?: Community; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2CommunitiesSearchResponse
 *
 * @public
 */
interface Get2CommunitiesSearchResponse {
    data?: Array<Community>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2ComplianceJobsIdResponse
 *
 * @public
 */
interface Get2ComplianceJobsIdResponse {
    data?: ComplianceJob; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2ComplianceJobsResponse
 *
 * @public
 */
interface Get2ComplianceJobsResponse {
    data?: Array<ComplianceJob>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2ConnectionsResponse
 *
 * @public
 */
interface Get2ConnectionsResponse {
    data?: Array<Connection>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2DmConversationsIdDmEventsResponse
 *
 * @public
 */
interface Get2DmConversationsIdDmEventsResponse {
    data?: Array<DmEvent>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2DmConversationsWithParticipantIdDmEventsResponse
 *
 * @public
 */
interface Get2DmConversationsWithParticipantIdDmEventsResponse {
    data?: Array<DmEvent>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2DmEventsEventIdResponse
 *
 * @public
 */
interface Get2DmEventsEventIdResponse {
    data?: DmEvent; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2DmEventsResponse
 *
 * @public
 */
interface Get2DmEventsResponse {
    data?: Array<DmEvent>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2FdxAccountsAccountidContactResponse
 *
 * @public
 */
interface Get2FdxAccountsAccountidContactResponse {
    data?: PlaidAccountContact; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2FdxAccountsAccountidPayment-networksResponse
 *
 * @public
 */
interface Get2FdxAccountsAccountidPayment_networksResponse {
    data?: Array<PlaidAccountPaymentNetwork>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2FdxAccountsAccountidResponse
 *
 * @public
 */
interface Get2FdxAccountsAccountidResponse {
    data?: PlaidAccount; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2FdxAccountsAccountidTransactionsResponse
 *
 * @public
 */
interface Get2FdxAccountsAccountidTransactionsResponse {
    data?: Array<PlaidAccountTransaction>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2FdxCustomersCurrentResponse
 *
 * @public
 */
interface Get2FdxCustomersCurrentResponse {
    data?: PlaidCustomer; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2Insights28hrResponse
 *
 * @public
 */
interface Get2Insights28hrResponse {
    data?: Array<Engagement>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2InsightsHistoricalResponse
 *
 * @public
 */
interface Get2InsightsHistoricalResponse {
    data?: Array<Engagement>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2LikesFirehoseStreamResponse
 *
 * @public
 */
interface Get2LikesFirehoseStreamResponse {
    data?: LikeWithTweetAuthor; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2LikesSample10StreamResponse
 *
 * @public
 */
interface Get2LikesSample10StreamResponse {
    data?: LikeWithTweetAuthor; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2ListsIdFollowersResponse
 *
 * @public
 */
interface Get2ListsIdFollowersResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2ListsIdMembersResponse
 *
 * @public
 */
interface Get2ListsIdMembersResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2ListsIdResponse
 *
 * @public
 */
interface Get2ListsIdResponse {
    data?: List; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2ListsIdTweetsResponse
 *
 * @public
 */
interface Get2ListsIdTweetsResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2MediaAnalyticsResponse
 *
 * @public
 */
interface Get2MediaAnalyticsResponse {
    data?: MediaAnalytics; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2MediaMediaKeyResponse
 *
 * @public
 */
interface Get2MediaMediaKeyResponse {
    data?: Media; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2MediaResponse
 *
 * @public
 */
interface Get2MediaResponse {
    data?: Array<Media>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2NewsIdResponse
 *
 * @public
 */
interface Get2NewsIdResponse {
    data?: News; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2NewsSearchResponse
 *
 * @public
 */
interface Get2NewsSearchResponse {
    data?: Array<News>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2NotesSearchNotesWrittenResponse
 *
 * @public
 */
interface Get2NotesSearchNotesWrittenResponse {
    data?: Array<Note>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2NotesSearchPostsEligibleForNotesResponse
 *
 * @public
 */
interface Get2NotesSearchPostsEligibleForNotesResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2SpacesByCreatorIdsResponse
 *
 * @public
 */
interface Get2SpacesByCreatorIdsResponse {
    data?: Array<Space>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2SpacesIdBuyersResponse
 *
 * @public
 */
interface Get2SpacesIdBuyersResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2SpacesIdResponse
 *
 * @public
 */
interface Get2SpacesIdResponse {
    data?: Space; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2SpacesIdTweetsResponse
 *
 * @public
 */
interface Get2SpacesIdTweetsResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2SpacesResponse
 *
 * @public
 */
interface Get2SpacesResponse {
    data?: Array<Space>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2SpacesSearchResponse
 *
 * @public
 */
interface Get2SpacesSearchResponse {
    data?: Array<Space>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2TrendsByWoeidWoeidResponse
 *
 * @public
 */
interface Get2TrendsByWoeidWoeidResponse {
    data?: Array<Trend>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2TweetsAnalyticsResponse
 *
 * @public
 */
interface Get2TweetsAnalyticsResponse {
    data?: Analytics; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2TweetsCountsAllResponse
 *
 * @public
 */
interface Get2TweetsCountsAllResponse {
    data?: Array<SearchCount>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2TweetsCountsRecentResponse
 *
 * @public
 */
interface Get2TweetsCountsRecentResponse {
    data?: Array<SearchCount>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2TweetsFirehoseStreamLangEnResponse
 *
 * @public
 */
interface Get2TweetsFirehoseStreamLangEnResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsFirehoseStreamLangJaResponse
 *
 * @public
 */
interface Get2TweetsFirehoseStreamLangJaResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsFirehoseStreamLangKoResponse
 *
 * @public
 */
interface Get2TweetsFirehoseStreamLangKoResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsFirehoseStreamLangPtResponse
 *
 * @public
 */
interface Get2TweetsFirehoseStreamLangPtResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsFirehoseStreamResponse
 *
 * @public
 */
interface Get2TweetsFirehoseStreamResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsIdLikingUsersResponse
 *
 * @public
 */
interface Get2TweetsIdLikingUsersResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2TweetsIdQuoteTweetsResponse
 *
 * @public
 */
interface Get2TweetsIdQuoteTweetsResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2TweetsIdResponse
 *
 * @public
 */
interface Get2TweetsIdResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsIdRetweetedByResponse
 *
 * @public
 */
interface Get2TweetsIdRetweetedByResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2TweetsIdRetweetsResponse
 *
 * @public
 */
interface Get2TweetsIdRetweetsResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2TweetsResponse
 *
 * @public
 */
interface Get2TweetsResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsSample10StreamResponse
 *
 * @public
 */
interface Get2TweetsSample10StreamResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsSampleStreamResponse
 *
 * @public
 */
interface Get2TweetsSampleStreamResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsSearchAllResponse
 *
 * @public
 */
interface Get2TweetsSearchAllResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2TweetsSearchRecentResponse
 *
 * @public
 */
interface Get2TweetsSearchRecentResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2TweetsSearchStreamResponse
 *
 * @public
 */
interface Get2TweetsSearchStreamResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2TweetsSearchStreamRulesCountsResponse
 *
 * @public
 */
interface Get2TweetsSearchStreamRulesCountsResponse {
    data?: RulesCount; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2UsageTweetsResponse
 *
 * @public
 */
interface Get2UsageTweetsResponse {
    data?: Usage; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2UsersByResponse
 *
 * @public
 */
interface Get2UsersByResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2UsersByUsernameUsernameResponse
 *
 * @public
 */
interface Get2UsersByUsernameUsernameResponse {
    data?: User; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2UsersIdBlockingResponse
 *
 * @public
 */
interface Get2UsersIdBlockingResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdBookmarksResponse
 *
 * @public
 */
interface Get2UsersIdBookmarksResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdFollowedListsResponse
 *
 * @public
 */
interface Get2UsersIdFollowedListsResponse {
    data?: Array<List>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdFollowersResponse
 *
 * @public
 */
interface Get2UsersIdFollowersResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdFollowingResponse
 *
 * @public
 */
interface Get2UsersIdFollowingResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdLikedTweetsResponse
 *
 * @public
 */
interface Get2UsersIdLikedTweetsResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdListMembershipsResponse
 *
 * @public
 */
interface Get2UsersIdListMembershipsResponse {
    data?: Array<List>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdMentionsResponse
 *
 * @public
 */
interface Get2UsersIdMentionsResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdMutingResponse
 *
 * @public
 */
interface Get2UsersIdMutingResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdOwnedListsResponse
 *
 * @public
 */
interface Get2UsersIdOwnedListsResponse {
    data?: Array<List>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdPinnedListsResponse
 *
 * @public
 */
interface Get2UsersIdPinnedListsResponse {
    data?: Array<List>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdResponse
 *
 * @public
 */
interface Get2UsersIdResponse {
    data?: User; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2UsersIdTimelinesReverseChronologicalResponse
 *
 * @public
 */
interface Get2UsersIdTimelinesReverseChronologicalResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersIdTweetsResponse
 *
 * @public
 */
interface Get2UsersIdTweetsResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersMeResponse
 *
 * @public
 */
interface Get2UsersMeResponse {
    data?: User; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2UsersPersonalizedTrendsResponse
 *
 * @public
 */
interface Get2UsersPersonalizedTrendsResponse {
    data?: Array<PersonalizedTrend>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Get2UsersRepostsOfMeResponse
 *
 * @public
 */
interface Get2UsersRepostsOfMeResponse {
    data?: Array<Tweet>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2UsersResponse
 *
 * @public
 */
interface Get2UsersResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for Get2UsersSearchResponse
 *
 * @public
 */
interface Get2UsersSearchResponse {
    data?: Array<User>; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions; /** none */
    meta?: Record<string, any>;
} /**
Schema type for Get2WebhooksResponse
 *
 * @public
 */
interface Get2WebhooksResponse {
    data?: Array<WebhookConfig>; /** none */
    errors?: Array<Problem>; /** none */
    meta?: Record<string, any>;
}
/**
Schema type for HashtagEntity
 *
 * @public
 */
type HashtagEntity = any; /**
Represent the portion of text recognized as a Hashtag, and its start and end position within the text.
 *
 * @public
 */
interface HashtagFields {
    tag: string;
} /**
HTTP Status Code.
 *
 * @public
 */
type HttpStatusCode = number;
/**
A problem that indicates this request is invalid.
 *
 * @public
 */
type InvalidRequestProblem = any;
/**
The rule you have submitted is invalid.
 *
 * @public
 */
type InvalidRuleProblem = any; /**
Compliance Job ID.
 *
 * @public
 */
type JobId = string; /**
A keyword to filter on.
 *
 * @public
 */
type Keyword = string; /**
Schema type for KillAllConnectionsResponse
 *
 * @public
 */
interface KillAllConnectionsResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for LikeComplianceSchema
 *
 * @public
 */
interface LikeComplianceSchema {
    delete: UnlikeComplianceSchema;
} /**
The unique identifier of this Like.
 *
 * @public
 */
type LikeId = string;
/**
Likes compliance stream events.
 *
 * @public
 */
type LikesComplianceStreamResponse = any; /**
A Like event, with the tweet author user and the tweet being liked
 *
 * @public
 */
interface LikeWithTweetAuthor {
    createdAt?: string; /** The unique identifier of this Like. */
    id?: LikeId; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    likedTweetId?: TweetId; /** Timestamp in milliseconds of creation. */
    timestampMs?: number; /** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    tweetAuthorId?: UserId;
} /**
A X List is a curated group of accounts.
 *
 * @public
 */
interface List {
    createdAt?: string; /** none */
    description?: string; /** none */
    followerCount?: number; /** The unique identifier of this List. */
    id: ListId; /** none */
    memberCount?: number; /** The name of this List. */
    name: string; /** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    ownerId?: UserId; /** none */
    private?: boolean;
} /**
Schema type for ListAddUserRequest
 *
 * @public
 */
interface ListAddUserRequest {
    userId: UserId;
} /**
Schema type for ListCreateRequest
 *
 * @public
 */
interface ListCreateRequest {
    description?: string; /** none */
    name: string; /** none */
    private?: boolean;
} /**
Schema type for ListCreateResponse
 *
 * @public
 */
interface ListCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for ListDeleteResponse
 *
 * @public
 */
interface ListDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for ListFollowedRequest
 *
 * @public
 */
interface ListFollowedRequest {
    listId: ListId;
} /**
Schema type for ListFollowedResponse
 *
 * @public
 */
interface ListFollowedResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
The unique identifier of this List.
 *
 * @public
 */
type ListId = string; /**
Schema type for ListMutateResponse
 *
 * @public
 */
interface ListMutateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for ListPinnedRequest
 *
 * @public
 */
interface ListPinnedRequest {
    listId: ListId;
} /**
Schema type for ListPinnedResponse
 *
 * @public
 */
interface ListPinnedResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for ListUnpinResponse
 *
 * @public
 */
interface ListUnpinResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for ListUpdateRequest
 *
 * @public
 */
interface ListUpdateRequest {
    description?: string; /** none */
    name?: string; /** none */
    private?: boolean;
} /**
Schema type for ListUpdateResponse
 *
 * @public
 */
interface ListUpdateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for ManagementInfo
 *
 * @public
 */
interface ManagementInfo {
    managed: boolean;
} /**
Schema type for Media
 *
 * @public
 */
interface Media {
    height?: MediaHeight; /** The Media Key identifier for this attachment. */
    mediaKey?: MediaKey; /** none */
    type: string; /** The width of the media in pixels. */
    width?: MediaWidth;
} /**
Schema type for MediaAnalytics
 *
 * @public
 */
interface MediaAnalytics {
    data?: Array<Record<string, any>>; /** none */
    errors?: Array<Problem>;
} /**
A string enum value which identifies a media use-case. This identifier is used to enforce use-case specific constraints (e.g. file size, video duration) and enable advanced features.
 *
 * @public
 */
type MediaCategory = "amplify_video" | "tweet_gif" | "tweet_image" | "tweet_video" | "dm_gif" | "dm_image" | "dm_video" | "subtitles"; /**
A string enum value which identifies a media use-case. This identifier is used to enforce use-case specific constraints (e.g. file size) and enable advanced features.
 *
 * @public
 */
type MediaCategoryOneShot = "tweet_image" | "dm_image" | "subtitles"; /**
The media category of uploaded media to which subtitles should be added/deleted
 *
 * @public
 */
type MediaCategorySubtitles = "AmplifyVideo" | "TweetVideo"; /**
The height of the media in pixels.
 *
 * @public
 */
type MediaHeight = number; /**
The unique identifier of this Media.
 *
 * @public
 */
type MediaId = string; /**
The Media Key identifier for this attachment.
 *
 * @public
 */
type MediaKey = string; /**
Schema type for MediaMetrics
 *
 * @public
 */
interface MediaMetrics {
    ctaUrlClicks?: number; /** Tracks the number of clicks to watch a video or media content */
    ctaWatchClicks?: number; /** Tracks the number of times a video or media is played from a user tap */
    playFromTap?: number; /** Tracks the number of times a video reaches 25% of its duration */
    playback25?: number; /** Tracks the number of times a video reaches 50% of its duration */
    playback50?: number; /** Tracks the number of times a video reaches 75% of its duration */
    playback75?: number; /** Tracks the number of times a video is played to completion */
    playbackComplete?: number; /** Tracks the number of times a video playback is initiated */
    playbackStart?: number; /** Tracks the number of times a video is viewed */
    videoViews?: number; /** Tracks the total time spent watching a video, measured in milliseconds */
    watchTimeMs?: number;
} /**
The file to upload.
 *
 * @public
 */
type MediaPayloadBinary = string; /**
The file to upload.
 *
 * @public
 */
type MediaPayloadByte = string;
/**
Schema type for MediaSegments
 *
 * @public
 */
type MediaSegments = any; /**
Schema type for MediaTimestampedMetrics
 *
 * @public
 */
interface MediaTimestampedMetrics {
    metrics?: MediaMetrics; /** ISO8601 Time */
    timestamp?: string;
}
/**
Schema type for MediaUploadAppendRequest
 *
 * @public
 */
type MediaUploadAppendRequest = any; /**
A response from getting a media upload request status.
 *
 * @public
 */
interface MediaUploadAppendResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for MediaUploadConfigRequest
 *
 * @public
 */
interface MediaUploadConfigRequest {
    additionalOwners?: Array<UserId>; /** A string enum value which identifies a media use-case. This identifier is used to enforce use-case specific constraints (e.g. file size, video duration) and enable advanced features. */
    mediaCategory?: MediaCategory; /** The type of media. */
    mediaType?: "video/mp4" | "video/webm" | "video/mp2t" | "video/quicktime" | "text/srt" | "text/vtt" | "image/jpeg" | "image/gif" | "image/bmp" | "image/png" | "image/webp" | "image/pjpeg" | "image/tiff" | "model/gltf-binary" | "model/vnd.usdz+zip"; /** Whether this media is shared or not. */
    shared?: boolean; /** The total size of the media upload in bytes. */
    totalBytes?: number;
} /**
Schema type for MediaUploadRequestOneShot
 *
 * @public
 */
interface MediaUploadRequestOneShot {
    additionalOwners?: Array<UserId>; /** none */
    media: any; /** A string enum value which identifies a media use-case. This identifier is used to enforce use-case specific constraints (e.g. file size) and enable advanced features. */
    mediaCategory: MediaCategoryOneShot; /** The type of image or subtitle. */
    mediaType?: "text/srt" | "text/vtt" | "image/jpeg" | "image/bmp" | "image/png" | "image/webp" | "image/pjpeg" | "image/tiff"; /** Whether this media is shared or not. */
    shared?: boolean;
} /**
A response from getting a media upload request status.
 *
 * @public
 */
interface MediaUploadResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
The width of the media in pixels.
 *
 * @public
 */
type MediaWidth = number;
/**
Schema type for MentionEntity
 *
 * @public
 */
type MentionEntity = any; /**
Represent the portion of text recognized as a User mention, and its start and end position within the text.
 *
 * @public
 */
interface MentionFields {
    id?: UserId; /** The X handle (screen name) of this user. */
    username: UserName;
} /**
Schema type for MetadataCreateRequest
 *
 * @public
 */
interface MetadataCreateRequest {
    id: MediaId; /** none */
    metadata?: Record<string, any>;
} /**
Schema type for MetadataCreateResponse
 *
 * @public
 */
interface MetadataCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for Metrics
 *
 * @public
 */
interface Metrics {
    appInstallAttempts?: number; /** Tracks number of App opens */
    appOpens?: number; /** Tracks number of Detail expands */
    detailExpands?: number; /** Tracks number of Email Tweet actions */
    emailTweet?: number; /** Tracks total Engagements */
    engagements?: number; /** Tracks number of Follows */
    follows?: number; /** Tracks number of Hashtag clicks */
    hashtagClicks?: number; /** Tracks number of Impressions */
    impressions?: number; /** Tracks number of Likes */
    likes?: number; /** Tracks number of Link clicks */
    linkClicks?: number; /** Tracks number of Media engagements */
    mediaEngagements?: number; /** Tracks number of Media views */
    mediaViews?: number; /** Tracks number of Permalink clicks */
    permalinkClicks?: number; /** Tracks number of Profile visits */
    profileVisits?: number; /** Tracks number of Quote Tweets */
    quoteTweets?: number; /** Tracks number of Replies */
    replies?: number; /** Tracks number of Retweets */
    retweets?: number; /** Tracks number of URL clicks */
    urlClicks?: number; /** Tracks number of User Profile clicks */
    userProfileClicks?: number;
} /**
Community Note misleading tags type.
 *
 * @public
 */
type MisleadingTags = "disputed_claim_as_fact" | "factual_error" | "manipulated_media" | "misinterpreted_satire" | "missing_important_context" | "other" | "outdated_information"; /**
Schema type for MuteUserMutationResponse
 *
 * @public
 */
interface MuteUserMutationResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for MuteUserRequest
 *
 * @public
 */
interface MuteUserRequest {
    targetUserId: UserId;
} /**
The newest id in this response.
 *
 * @public
 */
type NewestId = string; /**
An AI generated news story.
 *
 * @public
 */
interface News {
    category?: string; /** none */
    clusterPostsResults?: Array<Record<string, any>>; /** none */
    contexts?: Record<string, any>; /** none */
    disclaimer?: string; /** The news hook. */
    hook?: string; /** none */
    keywords?: Array<string>; /** none */
    lastUpdatedAtMs?: string; /** The headline. */
    name?: string; /** Unique identifier of news story. */
    restId: NewsId; /** The news summary. */
    summary?: string;
} /**
Schema type for NewsActivityResponsePayload
 *
 * @public
 */
interface NewsActivityResponsePayload {
    category?: string; /** none */
    headline?: string; /** none */
    hook?: string; /** none */
    summary?: string;
} /**
Unique identifier of news story.
 *
 * @public
 */
type NewsId = string; /**
The next token.
 *
 * @public
 */
type NextToken = string;
/**
A problem that indicates the user's rule set is not compliant.
 *
 * @public
 */
type NonCompliantRulesProblem = any; /**
A X Community Note is a note on a Post.
 *
 * @public
 */
interface Note {
    id: NoteId; /** A X Community Note is a note on a Post. */
    info?: NoteInfo; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    postId: TweetId; /** Community Note rating status */
    status?: NoteRatingStatus; /** The evaluation result of a community note. */
    testResult?: NoteTestResult;
} /**
Community Note classification type.
 *
 * @public
 */
type NoteClassification = "misinformed_or_potentially_misleading" | "not_misleading"; /**
The unique identifier of this Community Note.
 *
 * @public
 */
type NoteId = string; /**
A X Community Note is a note on a Post.
 *
 * @public
 */
interface NoteInfo {
    classification: NoteClassification; /** none */
    misleadingTags: Array<MisleadingTags>; /** The text summary in the Community Note. */
    text: string; /** Whether the note provided trustworthy links. */
    trustworthySources: boolean;
} /**
Community Note rating status
 *
 * @public
 */
type NoteRatingStatus = "currently_rated_helpful" | "currently_rated_not_helpful" | "firm_reject" | "insufficient_consensus" | "minimum_ratings_not_met" | "needs_more_ratings" | "needs_your_help"; /**
The evaluation result of a community note.
 *
 * @public
 */
interface NoteTestResult {
    evaluatorScoreBucket?: string; /** The type of the evaluator. */
    evaluatorType?: string;
} /**
The note content of the Tweet.
 *
 * @public
 */
type NoteTweetText = string;
/**
A problem that indicates your client application does not have the required OAuth1 permissions for the requested endpoint.
 *
 * @public
 */
type Oauth1PermissionsProblem = any; /**
The oldest id in this response.
 *
 * @public
 */
type OldestId = string;
/**
You have been disconnected for operational reasons.
 *
 * @public
 */
type OperationalDisconnectProblem = any; /**
A base32 pagination token.
 *
 * @public
 */
type PaginationToken32 = string; /**
A base36 pagination token.
 *
 * @public
 */
type PaginationToken36 = string; /**
A 'long' pagination token.
 *
 * @public
 */
type PaginationTokenLong = string; /**
A trend.
 *
 * @public
 */
interface PersonalizedTrend {
    category?: string; /** Number of posts pertaining to this trend. */
    postCount?: number; /** Name of the trend. */
    trendName?: string; /** Time since this is trending. */
    trendingSince?: string;
}
/**
Schema type for Photo
 *
 * @public
 */
type Photo = any; /**
Schema type for Place
 *
 * @public
 */
interface Place {
    containedWithin?: Array<PlaceId>; /** The full name of the county in which this place exists. */
    country?: string; /** A two-letter ISO 3166-1 alpha-2 country code. */
    countryCode?: CountryCode; /** The full name of this place. */
    fullName: string; /** none */
    geo?: Geo; /** The identifier for this place. */
    id: PlaceId; /** The human readable name of this place. */
    name?: string; /** none */
    placeType?: PlaceType;
} /**
The identifier for this place.
 *
 * @public
 */
type PlaceId = string; /**
Schema type for PlaceType
 *
 * @public
 */
type PlaceType = "poi" | "neighborhood" | "city" | "admin" | "country" | "unknown"; /**
Descriptor for a Plaid account.
 *
 * @public
 */
interface PlaidAccount {
    accountCategory: string; /** The Plaid account ID. */
    accountId: string; /** The last 2-4 digits of the account number. */
    accountNumberDisplay: string; /** The type of the account (e.g., checking, savings). */
    accountType: string; /** The available balance of the account. */
    availableBalance?: number; /** Currency information. */
    currency: PlaidCurrency; /** The current balance of the account. */
    currentBalance?: number; /** The nickname of the account. */
    nickname?: string; /** The name of the product associated with the account. */
    productName: string; /** The status of the account. */
    status: string;
} /**
Contact information associated with a Plaid account.
 *
 * @public
 */
interface PlaidAccountContact {
    addresses: Array<PlaidAddress>; /** List of email addresses associated with the account holder. */
    emails: Array<string>; /** Name information for the account holder. */
    name: PlaidName; /** Relationship of the contact to the account. */
    relationship?: string; /** List of telephone numbers associated with the account holder. */
    telephones: Array<PlaidTelephone>;
} /**
Payment network details associated with the account.
 *
 * @public
 */
interface PlaidAccountPaymentNetwork {
    bankId: string; /** The payment network identifier. */
    identifier: string; /** Indicates if transfers into the account are supported. */
    transferIn: boolean; /** Indicates if transfers out of the account are supported. */
    transferOut: boolean; /** The type of payment network (e.g., ACH, SEPA). */
    type: string;
} /**
Descriptor for a Plaid account.
 *
 * @public
 */
interface PlaidAccountTransaction {
    accountCategory: string; /** The amount transacted. */
    amount: number; /** Memo for transaction (e.g. CREDIT) */
    debitCreditMemo: string; /** The transaction description */
    description: string; /** The timestamp when the transaction was posted. */
    postedTimestamp?: string; /** The status of the transaction. */
    status: string; /** The identifier for the transaction. */
    transactionId: string; /** The timestamp when the transaction occurred. */
    transactionTimestamp: string;
} /**
Address information for the account holder.
 *
 * @public
 */
interface PlaidAddress {
    city: string; /** The country of the address (ISO 3166-1 alpha-2 code). */
    country: string; /** The first line of the address. */
    line1: string; /** The second line of the address. */
    line2?: string; /** The postal code of the address. */
    postalCode?: string; /** The region or state of the address. */
    region?: string;
} /**
Currency information.
 *
 * @public
 */
interface PlaidCurrency {
    currencyCode: string;
} /**
A user id for the plaid customer
 *
 * @public
 */
interface PlaidCustomer {
    customerId?: UserId;
} /**
Name information for the account holder.
 *
 * @public
 */
interface PlaidName {
    first: string; /** The last name of the account holder. */
    last: string;
} /**
Telephone information for the account holder.
 *
 * @public
 */
interface PlaidTelephone {
    country: string; /** The phone number. */
    number: string; /** The type of phone number (e.g., 'mobile'). */
    type: string;
} /**
A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.
 *
 * @public
 */
interface Point {
    coordinates: Position; /** none */
    type: "Point";
} /**
Represent a Poll attached to a Tweet.
 *
 * @public
 */
interface Poll {
    durationMinutes?: number; /** none */
    endDatetime?: string; /** Unique identifier of this poll. */
    id: PollId; /** none */
    options: Array<PollOption>; /** none */
    votingStatus?: "open" | "closed";
} /**
Unique identifier of this poll.
 *
 * @public
 */
type PollId = string; /**
Describes a choice in a Poll object.
 *
 * @public
 */
interface PollOption {
    label: PollOptionLabel; /** Position of this choice in the poll. */
    position: number; /** Number of users who voted for this choice. */
    votes: number;
} /**
The text of a poll choice.
 *
 * @public
 */
type PollOptionLabel = string; /**
A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.
 *
 * @public
 */
type Position = Array<number>; /**
Schema type for PreviewImage
 *
 * @public
 */
interface PreviewImage {
    mediaKey: Record<string, any>;
} /**
The previous token.
 *
 * @public
 */
type PreviousToken = string; /**
An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807).
 *
 * @public
 */
interface Problem {
    detail?: string; /** none */
    status?: number; /** none */
    title: string; /** none */
    type: string;
} /**
Schema type for ProcessingInfo
 *
 * @public
 */
interface ProcessingInfo {
    checkAfterSecs?: number; /** Percent of upload progress */
    progressPercent?: number; /** State of upload */
    state?: "succeeded" | "in_progress" | "pending" | "failed";
} /**
Schema type for ProfileUpdateActivityResponsePayload
 *
 * @public
 */
interface ProfileUpdateActivityResponsePayload {
    after?: string; /** none */
    before?: string;
} /**
Confirmation that the replay job request was accepted.
 *
 * @public
 */
interface ReplayJobCreateResponse {
    createdAt: string; /** The unique identifier for the initiated replay job. */
    jobId: string;
} /**
Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following.
 *
 * @public
 */
type ReplySettings = "everyone" | "mentionedUsers" | "following" | "other"; /**
Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following.
 *
 * @public
 */
type ReplySettingsWithVerifiedUsers = "everyone" | "mentionedUsers" | "following" | "other" | "subscribers" | "verified";
/**
A problem that indicates that a given Tweet, User, etc. does not exist.
 *
 * @public
 */
type ResourceNotFoundProblem = any;
/**
A problem that indicates you are not allowed to see a particular Tweet, User, etc.
 *
 * @public
 */
type ResourceUnauthorizedProblem = any;
/**
A problem that indicates a particular Tweet, User, etc. is not available to you.
 *
 * @public
 */
type ResourceUnavailableProblem = any; /**
The number of results returned in this response.
 *
 * @public
 */
type ResultCount = number; /**
A user-provided stream filtering rule.
 *
 * @public
 */
interface Rule {
    id?: RuleId; /** A tag meant for the labeling of user provided rules. */
    tag?: RuleTag; /** The filterlang value of the rule. */
    value: RuleValue;
} /**
Unique identifier of this rule.
 *
 * @public
 */
type RuleId = string; /**
A user-provided stream filtering rule.
 *
 * @public
 */
interface RuleNoId {
    tag?: RuleTag; /** The filterlang value of the rule. */
    value: RuleValue;
}
/**
You have exceeded the maximum number of rules.
 *
 * @public
 */
type RulesCapProblem = any; /**
A count of user-provided stream filtering rules at the application and project levels.
 *
 * @public
 */
interface RulesCount {
    allProjectClientApps?: AllProjectClientApps; /** Cap of number of rules allowed per client application */
    capPerClientApp?: number; /** Cap of number of rules allowed per project */
    capPerProject?: number; /** A count of user-provided stream filtering rules at the client application level. */
    clientAppRulesCount?: AppRulesCount; /** Number of rules for project */
    projectRulesCount?: number;
} /**
Schema type for RulesLookupResponse
 *
 * @public
 */
interface RulesLookupResponse {
    data?: Array<Rule>; /** none */
    meta: RulesResponseMetadata;
}
/**
Schema type for RulesRequestSummary
 *
 * @public
 */
type RulesRequestSummary = any; /**
Schema type for RulesResponseMetadata
 *
 * @public
 */
interface RulesResponseMetadata {
    nextToken?: NextToken; /** Number of Rules in result set. */
    resultCount?: number; /** none */
    sent: string; /** none */
    summary?: RulesRequestSummary;
} /**
A tag meant for the labeling of user provided rules.
 *
 * @public
 */
type RuleTag = string; /**
The filterlang value of the rule.
 *
 * @public
 */
type RuleValue = string; /**
Represent a Search Count Result.
 *
 * @public
 */
interface SearchCount {
    end: End; /** The start time of the bucket. */
    start: Start; /** The count for the bucket. */
    tweetCount: TweetCount;
} /**
Schema type for SensitiveMediaWarning
 *
 * @public
 */
interface SensitiveMediaWarning {
    adultContent?: boolean; /** Indicates if the content depicts graphic violence */
    graphicViolence?: boolean; /** Indicates if the content has other sensitive characteristics */
    other?: boolean;
} /**
Schema type for SharedInfo
 *
 * @public
 */
interface SharedInfo {
    shared: boolean;
} /**
Schema type for Space
 *
 * @public
 */
interface Space {
    createdAt?: string; /** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    creatorId?: UserId; /** End time of the Space. */
    endedAt?: string; /** The user ids for the hosts of the Space. */
    hostIds?: Array<UserId>; /** The unique identifier of this Space. */
    id: SpaceId; /** An array of user ids for people who were invited to a Space. */
    invitedUserIds?: Array<UserId>; /** Denotes if the Space is a ticketed Space. */
    isTicketed?: boolean; /** The language of the Space. */
    lang?: string; /** The number of participants in a Space. */
    participantCount?: number; /** A date time stamp for when a Space is scheduled to begin. */
    scheduledStart?: string; /** An array of user ids for people who were speakers in a Space. */
    speakerIds?: Array<UserId>; /** When the Space was started as a date string. */
    startedAt?: string; /** The current state of the Space. */
    state: "live" | "scheduled" | "ended"; /** The number of people who have either purchased a ticket or set a reminder for this Space. */
    subscriberCount?: number; /** The title of the Space. */
    title?: string; /** The topics of a Space, as selected by its creator. */
    topics?: Array<Record<string, any>>; /** When the Space was last updated. */
    updatedAt?: string;
} /**
The unique identifier of this Space.
 *
 * @public
 */
type SpaceId = string; /**
The start time of the bucket.
 *
 * @public
 */
type Start = string; /**
Schema type for Sticker
 *
 * @public
 */
interface Sticker {
    aspectRatio?: number; /** A unique identifier for the group of annotations associated with the media */
    groupAnnotationId?: number; /** Unique identifier for sticker */
    id?: string; /** A unique identifier for the sticker set associated with the media */
    stickerSetAnnotationId?: number; /** Scale or rotate the media on the x-axis */
    transformA?: number; /** Skew the media on the x-axis */
    transformB?: number; /** Skew the media on the y-axis */
    transformC?: number; /** Scale or rotate the media on the y-axis */
    transformD?: number; /** Scale or rotate the media on the x-axis */
    transformTx?: number; /** The vertical translation (shift) value for the media */
    transformTy?: number;
} /**
Schema type for StickerInfo
 *
 * @public
 */
interface StickerInfo {
    stickers: Array<Sticker>;
} /**
Schema type for StreamingLikeResponseV2
 *
 * @public
 */
interface StreamingLikeResponseV2 {
    data?: LikeWithTweetAuthor; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for StreamingTweetResponse
 *
 * @public
 */
interface StreamingTweetResponse {
    data?: Tweet; /** none */
    errors?: Array<Problem>; /** none */
    includes?: Expansions;
} /**
Schema type for SubscriptionsCountGetResponse
 *
 * @public
 */
interface SubscriptionsCountGetResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for SubscriptionsCreateRequest
 *
 * @public
 */
type SubscriptionsCreateRequest = Record<string, any>; /**
Schema type for SubscriptionsCreateResponse
 *
 * @public
 */
interface SubscriptionsCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for SubscriptionsDeleteResponse
 *
 * @public
 */
interface SubscriptionsDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for SubscriptionsGetResponse
 *
 * @public
 */
interface SubscriptionsGetResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for SubscriptionsListGetResponse
 *
 * @public
 */
interface SubscriptionsListGetResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
The language code should be a BCP47 code (e.g. 'EN", "SP")
 *
 * @public
 */
type SubtitleLanguageCode = string; /**
Schema type for Subtitles
 *
 * @public
 */
interface Subtitles {
    displayName?: string; /** The unique identifier of this Media. */
    id?: MediaId; /** The language code should be a BCP47 code (e.g. 'EN", "SP") */
    languageCode?: SubtitleLanguageCode;
} /**
Schema type for SubtitlesCreateRequest
 *
 * @public
 */
interface SubtitlesCreateRequest {
    id?: MediaId; /** The media category of uploaded media to which subtitles should be added/deleted */
    mediaCategory?: MediaCategorySubtitles; /** none */
    subtitles?: Subtitles;
} /**
Schema type for SubtitlesCreateResponse
 *
 * @public
 */
interface SubtitlesCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for SubtitlesDeleteRequest
 *
 * @public
 */
interface SubtitlesDeleteRequest {
    id?: MediaId; /** The language code should be a BCP47 code (e.g. 'EN", "SP") */
    languageCode?: SubtitleLanguageCode; /** The media category of uploaded media to which subtitles should be added/deleted */
    mediaCategory?: MediaCategorySubtitles;
} /**
Schema type for SubtitlesDeleteResponse
 *
 * @public
 */
interface SubtitlesDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for TimestampedMetrics
 *
 * @public
 */
interface TimestampedMetrics {
    metrics?: Metrics; /** ISO8601 Time */
    timestamp?: string;
} /**
The topic of a Space, as selected by its creator.
 *
 * @public
 */
interface Topic {
    description?: string; /** Unique identifier of this Topic. */
    id: TopicId; /** The name of the given topic. */
    name: string;
} /**
Unique identifier of this Topic.
 *
 * @public
 */
type TopicId = string; /**
A trend.
 *
 * @public
 */
interface Trend {
    trendName?: string; /** Number of Posts in this trend. */
    tweetCount?: number;
} /**
Schema type for Tweet
 *
 * @public
 */
interface Tweet {
    attachments?: Record<string, any>; /** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    authorId?: UserId; /** The unique identifier of this Community. */
    communityId?: CommunityId; /** none */
    contextAnnotations?: Array<ContextAnnotation>; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    conversationId?: TweetId; /** Creation time of the Tweet. */
    createdAt?: string; /** Represent a boundary range (start and end zero-based indices) for the portion of text that is displayed for a post. `start` must be smaller than `end`. The start index is inclusive, the end index is exclusive. */
    displayTextRange?: DisplayTextRange; /** none */
    editControls?: Record<string, any>; /** A list of Tweet Ids in this Tweet chain. */
    editHistoryTweetIds?: Array<TweetId>; /** none */
    entities?: FullTextEntities; /** The location tagged on the Tweet, if the user provided one. */
    geo?: Record<string, any>; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    id?: TweetId; /** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    inReplyToUserId?: UserId; /** Language of the Tweet, if detected by X. Returned as a BCP47 language tag. */
    lang?: string; /** Nonpublic engagement metrics for the Tweet at the time of the request. */
    nonPublicMetrics?: Record<string, any>; /** The full-content of the Tweet, including text beyond 280 characters. */
    noteTweet?: Record<string, any>; /** Organic nonpublic engagement metrics for the Tweet at the time of the request. */
    organicMetrics?: Record<string, any>; /** Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences. */
    possiblySensitive?: boolean; /** Promoted nonpublic engagement metrics for the Tweet at the time of the request. */
    promotedMetrics?: Record<string, any>; /** Engagement metrics for the Tweet at the time of the request. */
    publicMetrics?: Record<string, any>; /** A list of Posts this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent. */
    referencedTweets?: Array<Record<string, any>>; /** Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following. */
    replySettings?: ReplySettingsWithVerifiedUsers; /** The scopes for this tweet */
    scopes?: Record<string, any>; /** This is deprecated. */
    source?: string; /** none */
    suggestedSourceLinks?: Array<UrlEntity>; /** Suggested source links and the number of requests that included each link. */
    suggestedSourceLinksWithCounts?: Record<string, any>; /** The content of the Tweet. */
    text?: TweetText; /** The X handle (screen name) of this user. */
    username?: UserName; /** Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country). */
    withheld?: TweetWithheld;
}
/**
Tweet compliance data.
 *
 * @public
 */
type TweetComplianceData = any; /**
Schema type for TweetComplianceSchema
 *
 * @public
 */
interface TweetComplianceSchema {
    eventAt: string; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    quoteTweetId?: TweetId; /** none */
    tweet: Record<string, any>;
}
/**
Tweet compliance stream events.
 *
 * @public
 */
type TweetComplianceStreamResponse = any; /**
The count for the bucket.
 *
 * @public
 */
type TweetCount = number; /**
Schema type for TweetCreateRequest
 *
 * @public
 */
interface TweetCreateRequest {
    cardUri?: string; /** The unique identifier of this Community. */
    communityId?: CommunityId; /** Link to take the conversation from the public timeline to a private Direct Message. */
    directMessageDeepLink?: string; /** Options for editing an existing Post. When provided, this request will edit the specified Post instead of creating a new one. */
    editOptions?: Record<string, any>; /** Exclusive Tweet for super followers. */
    forSuperFollowersOnly?: boolean; /** Place ID being attached to the Tweet for geo location. */
    geo?: Record<string, any>; /** Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id, Poll, and Card URI. */
    media?: Record<string, any>; /** Nullcasted (promoted-only) Posts do not appear in the public timeline and are not served to followers. */
    nullcast?: boolean; /** Poll options for a Tweet with a poll. This is mutually exclusive from Media, Quote Tweet Id, and Card URI. */
    poll?: Record<string, any>; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    quoteTweetId?: TweetId; /** Tweet information of the Tweet being replied to. */
    reply?: Record<string, any>; /** Settings to indicate who can reply to the Tweet. */
    replySettings?: "following" | "mentionedUsers" | "subscribers" | "verified"; /** Share community post with followers too. */
    shareWithFollowers?: boolean; /** The content of the Tweet. */
    text?: TweetText;
} /**
Schema type for TweetCreateResponse
 *
 * @public
 */
interface TweetCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for TweetDeleteComplianceSchema
 *
 * @public
 */
interface TweetDeleteComplianceSchema {
    delete: TweetComplianceSchema;
} /**
Schema type for TweetDeleteResponse
 *
 * @public
 */
interface TweetDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for TweetDropComplianceSchema
 *
 * @public
 */
interface TweetDropComplianceSchema {
    drop: TweetComplianceSchema;
} /**
Schema type for TweetEditComplianceObjectSchema
 *
 * @public
 */
interface TweetEditComplianceObjectSchema {
    editTweetIds: Array<TweetId>; /** Event time. */
    eventAt: string; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    initialTweetId: TweetId; /** none */
    tweet: Record<string, any>;
} /**
Schema type for TweetEditComplianceSchema
 *
 * @public
 */
interface TweetEditComplianceSchema {
    tweetEdit: TweetEditComplianceObjectSchema;
} /**
Schema type for TweetHideRequest
 *
 * @public
 */
interface TweetHideRequest {
    hidden: boolean;
} /**
Schema type for TweetHideResponse
 *
 * @public
 */
interface TweetHideResponse {
    data?: Record<string, any>;
} /**
Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
 *
 * @public
 */
type TweetId = string;
/**
Tweet label data.
 *
 * @public
 */
type TweetLabelData = any;
/**
Tweet label stream events.
 *
 * @public
 */
type TweetLabelStreamResponse = any; /**
Schema type for TweetNotice
 *
 * @public
 */
interface TweetNotice {
    application: string; /** Information shown on the Tweet label */
    details?: string; /** Event time. */
    eventAt: string; /** The type of label on the Tweet */
    eventType: string; /** Link to more information about this kind of label */
    extendedDetailsUrl?: string; /** Title/header of the Tweet label */
    labelTitle?: string; /** none */
    tweet: Record<string, any>;
} /**
Schema type for TweetNoticeSchema
 *
 * @public
 */
interface TweetNoticeSchema {
    publicTweetNotice: TweetNotice;
} /**
Schema type for TweetTakedownComplianceSchema
 *
 * @public
 */
interface TweetTakedownComplianceSchema {
    eventAt: string; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    quoteTweetId?: TweetId; /** none */
    tweet: Record<string, any>; /** none */
    withheldInCountries: Array<CountryCode>;
} /**
The content of the Tweet.
 *
 * @public
 */
type TweetText = string; /**
Schema type for TweetUndropComplianceSchema
 *
 * @public
 */
interface TweetUndropComplianceSchema {
    undrop: TweetComplianceSchema;
} /**
Schema type for TweetUnviewable
 *
 * @public
 */
interface TweetUnviewable {
    application: string; /** Event time. */
    eventAt: string; /** none */
    tweet: Record<string, any>;
} /**
Schema type for TweetUnviewableSchema
 *
 * @public
 */
interface TweetUnviewableSchema {
    publicTweetUnviewable: TweetUnviewable;
} /**
Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 *
 * @public
 */
interface TweetWithheld {
    copyright: boolean; /** Provides a list of countries where this content is not available. */
    countryCodes: Array<CountryCode>; /** Indicates whether the content being withheld is the `tweet` or a `user`. */
    scope?: "tweet" | "user";
} /**
Schema type for TweetWithheldComplianceSchema
 *
 * @public
 */
interface TweetWithheldComplianceSchema {
    withheld: TweetTakedownComplianceSchema;
} /**
Schema type for UnlikeComplianceSchema
 *
 * @public
 */
interface UnlikeComplianceSchema {
    eventAt: string; /** none */
    favorite: Record<string, any>;
}
/**
A problem that indicates that the authentication used is not supported.
 *
 * @public
 */
type UnsupportedAuthenticationProblem = any; /**
Expiration time of the upload URL.
 *
 * @public
 */
type UploadExpiration = string; /**
Schema type for UploadSource
 *
 * @public
 */
interface UploadSource {
    uploadSource: string;
} /**
URL to which the user will upload their Tweet or user IDs.
 *
 * @public
 */
type UploadUrl = string; /**
A validly formatted URL.
 *
 * @public
 */
type Url = string;
/**
Represent the portion of text recognized as a URL, and its start and end position within the text.
 *
 * @public
 */
type UrlEntity = any;
/**
Represent the portion of text recognized as a URL, and its start and end position within the text.
 *
 * @public
 */
type UrlEntityDm = any; /**
Represent the portion of text recognized as a URL.
 *
 * @public
 */
interface UrlFields {
    description?: string; /** The URL as displayed in the X client. */
    displayUrl?: string; /** A validly formatted URL. */
    expandedUrl?: Url; /** none */
    images?: Array<UrlImage>; /** The Media Key identifier for this attachment. */
    mediaKey?: MediaKey; /** HTTP Status Code. */
    status?: HttpStatusCode; /** Title of the page the URL points to. */
    title?: string; /** Fully resolved url. */
    unwoundUrl?: string; /** A validly formatted URL. */
    url: Url;
} /**
Represent the information for the URL image.
 *
 * @public
 */
interface UrlImage {
    height?: MediaHeight; /** A validly formatted URL. */
    url?: Url; /** The width of the media in pixels. */
    width?: MediaWidth;
} /**
Usage per client app
 *
 * @public
 */
interface Usage {
    capResetDay?: number; /** The daily usage breakdown for each Client Application a project */
    dailyClientAppUsage?: Array<ClientAppUsage>; /** The daily usage breakdown for a project */
    dailyProjectUsage?: Record<string, any>; /** Total number of Posts that can be read in this project per month */
    projectCap?: number; /** The unique identifier for this project */
    projectId?: string; /** The number of Posts read in this project */
    projectUsage?: number;
}
/**
A problem that indicates that a usage cap has been exceeded.
 *
 * @public
 */
type UsageCapExceededProblem = any; /**
Represents the data for Usage
 *
 * @public
 */
interface UsageFields {
    date?: string; /** The usage value */
    usage?: number;
} /**
The X User object.
 *
 * @public
 */
interface User {
    affiliation?: Record<string, any>; /** Returns detailed information about the relationship between two users. */
    connectionStatus?: Array<"follow_request_received" | "follow_request_sent" | "blocking" | "followed_by" | "following" | "muting">; /** Creation time of this User. */
    createdAt?: string; /** The text of this User's profile description (also known as bio), if the User provided one. */
    description?: string; /** A list of metadata found in the User's profile description. */
    entities?: Record<string, any>; /** Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    id: UserId; /** The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries. */
    location?: string; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    mostRecentTweetId?: TweetId; /** The friendly name of this User, as shown on their profile. */
    name: string; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    pinnedTweetId?: TweetId; /** The URL to the profile banner for this User. */
    profileBannerUrl?: string; /** The URL to the profile image for this User. */
    profileImageUrl?: string; /** Indicates if this User has chosen to protect their Posts (in other words, if this User's Posts are private). */
    protected?: boolean; /** A list of metrics for this User. */
    publicMetrics?: Record<string, any>; /** Indicates if you can send a DM to this User */
    receivesYourDm?: boolean; /** The X Blue subscription type of the user, eg: Basic, Premium, PremiumPlus or None. */
    subscriptionType?: "Basic" | "Premium" | "PremiumPlus" | "None"; /** The URL specified in the User's profile. */
    url?: string; /** The X handle (screen name) of this user. */
    username: UserName; /** Indicate if this User is a verified X User. */
    verified?: boolean; /** The X Blue verified type of the user, eg: blue, government, business or none. */
    verifiedType?: "blue" | "government" | "business" | "none"; /** Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country). */
    withheld?: UserWithheld;
}
/**
User compliance data.
 *
 * @public
 */
type UserComplianceData = any; /**
Schema type for UserComplianceSchema
 *
 * @public
 */
interface UserComplianceSchema {
    eventAt: string; /** none */
    user: Record<string, any>;
}
/**
User compliance stream events.
 *
 * @public
 */
type UserComplianceStreamResponse = any; /**
Schema type for UserDeleteComplianceSchema
 *
 * @public
 */
interface UserDeleteComplianceSchema {
    userDelete: UserComplianceSchema;
} /**
Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
 *
 * @public
 */
type UserId = string; /**
Unique identifier of this User. The value must be the same as the authenticated user.
 *
 * @public
 */
type UserIdMatchesAuthenticatedUser = string; /**
The X handle (screen name) of this user.
 *
 * @public
 */
type UserName = string; /**
Schema type for UserProfileModificationComplianceSchema
 *
 * @public
 */
interface UserProfileModificationComplianceSchema {
    userProfileModification: UserProfileModificationObjectSchema;
} /**
Schema type for UserProfileModificationObjectSchema
 *
 * @public
 */
interface UserProfileModificationObjectSchema {
    eventAt: string; /** none */
    newValue: string; /** none */
    profileField: string; /** none */
    user: Record<string, any>;
} /**
Schema type for UserProtectComplianceSchema
 *
 * @public
 */
interface UserProtectComplianceSchema {
    userProtect: UserComplianceSchema;
} /**
Schema type for UserScrubGeoObjectSchema
 *
 * @public
 */
interface UserScrubGeoObjectSchema {
    eventAt: string; /** Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. */
    upToTweetId: TweetId; /** none */
    user: Record<string, any>;
} /**
Schema type for UserScrubGeoSchema
 *
 * @public
 */
interface UserScrubGeoSchema {
    scrubGeo: UserScrubGeoObjectSchema;
} /**
Schema type for UsersDMBlockCreateResponse
 *
 * @public
 */
interface UsersDMBlockCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for UsersDMUnBlockCreateResponse
 *
 * @public
 */
interface UsersDMUnBlockCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
The the search string by which to query for users.
 *
 * @public
 */
type UserSearchQueryVnext = string; /**
Schema type for UsersFollowingCreateRequest
 *
 * @public
 */
interface UsersFollowingCreateRequest {
    targetUserId: UserId;
} /**
Schema type for UsersFollowingCreateResponse
 *
 * @public
 */
interface UsersFollowingCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for UsersFollowingDeleteResponse
 *
 * @public
 */
interface UsersFollowingDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for UsersLikesCreateRequest
 *
 * @public
 */
interface UsersLikesCreateRequest {
    tweetId: TweetId;
} /**
Schema type for UsersLikesCreateResponse
 *
 * @public
 */
interface UsersLikesCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for UsersLikesDeleteResponse
 *
 * @public
 */
interface UsersLikesDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for UsersRetweetsCreateRequest
 *
 * @public
 */
interface UsersRetweetsCreateRequest {
    tweetId: TweetId;
} /**
Schema type for UsersRetweetsCreateResponse
 *
 * @public
 */
interface UsersRetweetsCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for UsersRetweetsDeleteResponse
 *
 * @public
 */
interface UsersRetweetsDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for UserSuspendComplianceSchema
 *
 * @public
 */
interface UserSuspendComplianceSchema {
    userSuspend: UserComplianceSchema;
} /**
Schema type for UserTakedownComplianceSchema
 *
 * @public
 */
interface UserTakedownComplianceSchema {
    eventAt: string; /** none */
    user: Record<string, any>; /** none */
    withheldInCountries: Array<CountryCode>;
} /**
Schema type for UserUndeleteComplianceSchema
 *
 * @public
 */
interface UserUndeleteComplianceSchema {
    userUndelete: UserComplianceSchema;
} /**
Schema type for UserUnprotectComplianceSchema
 *
 * @public
 */
interface UserUnprotectComplianceSchema {
    userUnprotect: UserComplianceSchema;
} /**
Schema type for UserUnsuspendComplianceSchema
 *
 * @public
 */
interface UserUnsuspendComplianceSchema {
    userUnsuspend: UserComplianceSchema;
} /**
Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 *
 * @public
 */
interface UserWithheld {
    countryCodes: Array<CountryCode>; /** Indicates that the content being withheld is a `user`. */
    scope?: "user";
} /**
Schema type for UserWithheldComplianceSchema
 *
 * @public
 */
interface UserWithheldComplianceSchema {
    userWithheld: UserTakedownComplianceSchema;
} /**
Schema type for Variant
 *
 * @public
 */
interface Variant {
    bitRate?: number; /** The content type of the media. */
    contentType?: string; /** The url to the media. */
    url?: string;
} /**
An array of all available variants of the media.
 *
 * @public
 */
type Variants = Array<Variant>;
/**
Schema type for Video
 *
 * @public
 */
type Video = any; /**
A Webhook Configuration
 *
 * @public
 */
interface WebhookConfig {
    createdAt: string; /** The unique identifier of this webhook config. */
    id: WebhookConfigId; /** The callback URL of the webhook. */
    url: string; /** none */
    valid: boolean;
} /**
Schema type for WebhookConfigCreateRequest
 *
 * @public
 */
interface WebhookConfigCreateRequest {
    url: string;
} /**
A Webhook Configuration
 *
 * @public
 */
interface WebhookConfigCreateResponse {
    createdAt: string; /** The unique identifier of this webhook config. */
    id: WebhookConfigId; /** The callback URL of the webhook. */
    url: string; /** none */
    valid: boolean;
} /**
Schema type for WebhookConfigDeleteResponse
 *
 * @public
 */
interface WebhookConfigDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
The unique identifier of this webhook config.
 *
 * @public
 */
type WebhookConfigId = string; /**
Schema type for WebhookConfigPutResponse
 *
 * @public
 */
interface WebhookConfigPutResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for WebhookLinksCreateResponse
 *
 * @public
 */
interface WebhookLinksCreateResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for WebhookLinksDeleteResponse
 *
 * @public
 */
interface WebhookLinksDeleteResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for WebhookLinksGetResponse
 *
 * @public
 */
interface WebhookLinksGetResponse {
    data?: Record<string, any>; /** none */
    errors?: Array<Problem>;
} /**
Schema type for WebhookReplayCreateRequest
 *
 * @public
 */
interface WebhookReplayCreateRequest {
    fromDate: string; /** The oldest (starting) UTC timestamp (inclusive) from which events will be provided, in yyyymmddhhmm format. */
    toDate: string; /** The unique identifier of this webhook config. */
    webhookId: WebhookConfigId;
}

type schemas_ActivityEventId = ActivityEventId;
type schemas_ActivityStreamingResponse = ActivityStreamingResponse;
type schemas_ActivityStreamingResponsePayload = ActivityStreamingResponsePayload;
type schemas_ActivitySubscription = ActivitySubscription;
type schemas_ActivitySubscriptionCreateRequest = ActivitySubscriptionCreateRequest;
type schemas_ActivitySubscriptionCreateResponse = ActivitySubscriptionCreateResponse;
type schemas_ActivitySubscriptionDeleteResponse = ActivitySubscriptionDeleteResponse;
type schemas_ActivitySubscriptionFilter = ActivitySubscriptionFilter;
type schemas_ActivitySubscriptionGetResponse = ActivitySubscriptionGetResponse;
type schemas_ActivitySubscriptionId = ActivitySubscriptionId;
type schemas_ActivitySubscriptionUpdateRequest = ActivitySubscriptionUpdateRequest;
type schemas_ActivitySubscriptionUpdateResponse = ActivitySubscriptionUpdateResponse;
type schemas_AddOrDeleteRulesRequest = AddOrDeleteRulesRequest;
type schemas_AddOrDeleteRulesResponse = AddOrDeleteRulesResponse;
type schemas_AddRulesRequest = AddRulesRequest;
type schemas_Aggregate = Aggregate;
type schemas_AllProjectClientApps = AllProjectClientApps;
type schemas_AllowDownloadStatus = AllowDownloadStatus;
type schemas_AltText = AltText;
type schemas_Analytics = Analytics;
type schemas_AnimatedGif = AnimatedGif;
type schemas_AppRulesCount = AppRulesCount;
type schemas_AudiencePolicy = AudiencePolicy;
type schemas_BookmarkAddRequest = BookmarkAddRequest;
type schemas_BookmarkFolderId = BookmarkFolderId;
type schemas_BookmarkFolderPostsResponse = BookmarkFolderPostsResponse;
type schemas_BookmarkFoldersResponse = BookmarkFoldersResponse;
type schemas_BookmarkMutationResponse = BookmarkMutationResponse;
type schemas_CashtagEntity = CashtagEntity;
type schemas_CashtagFields = CashtagFields;
type schemas_ClientAppId = ClientAppId;
type schemas_ClientAppUsage = ClientAppUsage;
type schemas_ClientDisconnectedProblem = ClientDisconnectedProblem;
type schemas_ClientForbiddenProblem = ClientForbiddenProblem;
type schemas_Community = Community;
type schemas_CommunityId = CommunityId;
type schemas_ComplianceJob = ComplianceJob;
type schemas_ComplianceJobName = ComplianceJobName;
type schemas_ComplianceJobStatus = ComplianceJobStatus;
type schemas_ComplianceJobType = ComplianceJobType;
type schemas_ConflictProblem = ConflictProblem;
type schemas_Connection = Connection;
type schemas_ConnectionExceptionProblem = ConnectionExceptionProblem;
type schemas_ContentExpiration = ContentExpiration;
type schemas_ContextAnnotation = ContextAnnotation;
type schemas_ContextAnnotationDomainFields = ContextAnnotationDomainFields;
type schemas_ContextAnnotationEntityFields = ContextAnnotationEntityFields;
type schemas_CountryCode = CountryCode;
type schemas_CreateAttachmentsMessageRequest = CreateAttachmentsMessageRequest;
type schemas_CreateComplianceJobRequest = CreateComplianceJobRequest;
type schemas_CreateComplianceJobResponse = CreateComplianceJobResponse;
type schemas_CreateDmConversationRequest = CreateDmConversationRequest;
type schemas_CreateDmEventResponse = CreateDmEventResponse;
type schemas_CreateMessageRequest = CreateMessageRequest;
type schemas_CreateNoteRequest = CreateNoteRequest;
type schemas_CreateNoteResponse = CreateNoteResponse;
type schemas_CreateTextMessageRequest = CreateTextMessageRequest;
type schemas_CreatedAt = CreatedAt;
type schemas_DeleteDmResponse = DeleteDmResponse;
type schemas_DeleteNoteResponse = DeleteNoteResponse;
type schemas_DeleteRulesRequest = DeleteRulesRequest;
type schemas_DisallowedResourceProblem = DisallowedResourceProblem;
type schemas_DisplayTextRange = DisplayTextRange;
type schemas_DmAttachments = DmAttachments;
type schemas_DmConversationId = DmConversationId;
type schemas_DmEvent = DmEvent;
type schemas_DmEventId = DmEventId;
type schemas_DmMediaAttachment = DmMediaAttachment;
type schemas_DmParticipants = DmParticipants;
type schemas_DomainRestrictions = DomainRestrictions;
type schemas_DownloadExpiration = DownloadExpiration;
type schemas_DownloadUrl = DownloadUrl;
type schemas_DuplicateRuleProblem = DuplicateRuleProblem;
type schemas_End = End;
type schemas_Engagement = Engagement;
type schemas_EntityIndicesInclusiveExclusive = EntityIndicesInclusiveExclusive;
type schemas_EntityIndicesInclusiveInclusive = EntityIndicesInclusiveInclusive;
type schemas_EvaluateNoteRequest = EvaluateNoteRequest;
type schemas_EvaluateNoteResponse = EvaluateNoteResponse;
type schemas_Expansions = Expansions;
type schemas_FieldUnauthorizedProblem = FieldUnauthorizedProblem;
type schemas_FilteredStreamingTweetResponse = FilteredStreamingTweetResponse;
type schemas_FollowActivityResponsePayload = FollowActivityResponsePayload;
type schemas_FoundMediaOrigin = FoundMediaOrigin;
type schemas_FullTextEntities = FullTextEntities;
type schemas_GenericProblem = GenericProblem;
type schemas_Geo = Geo;
type schemas_GeoRestrictions = GeoRestrictions;
type schemas_Get2CommunitiesIdResponse = Get2CommunitiesIdResponse;
type schemas_Get2CommunitiesSearchResponse = Get2CommunitiesSearchResponse;
type schemas_Get2ComplianceJobsIdResponse = Get2ComplianceJobsIdResponse;
type schemas_Get2ComplianceJobsResponse = Get2ComplianceJobsResponse;
type schemas_Get2ConnectionsResponse = Get2ConnectionsResponse;
type schemas_Get2DmConversationsIdDmEventsResponse = Get2DmConversationsIdDmEventsResponse;
type schemas_Get2DmConversationsWithParticipantIdDmEventsResponse = Get2DmConversationsWithParticipantIdDmEventsResponse;
type schemas_Get2DmEventsEventIdResponse = Get2DmEventsEventIdResponse;
type schemas_Get2DmEventsResponse = Get2DmEventsResponse;
type schemas_Get2FdxAccountsAccountidContactResponse = Get2FdxAccountsAccountidContactResponse;
type schemas_Get2FdxAccountsAccountidPayment_networksResponse = Get2FdxAccountsAccountidPayment_networksResponse;
type schemas_Get2FdxAccountsAccountidResponse = Get2FdxAccountsAccountidResponse;
type schemas_Get2FdxAccountsAccountidTransactionsResponse = Get2FdxAccountsAccountidTransactionsResponse;
type schemas_Get2FdxCustomersCurrentResponse = Get2FdxCustomersCurrentResponse;
type schemas_Get2Insights28hrResponse = Get2Insights28hrResponse;
type schemas_Get2InsightsHistoricalResponse = Get2InsightsHistoricalResponse;
type schemas_Get2LikesFirehoseStreamResponse = Get2LikesFirehoseStreamResponse;
type schemas_Get2LikesSample10StreamResponse = Get2LikesSample10StreamResponse;
type schemas_Get2ListsIdFollowersResponse = Get2ListsIdFollowersResponse;
type schemas_Get2ListsIdMembersResponse = Get2ListsIdMembersResponse;
type schemas_Get2ListsIdResponse = Get2ListsIdResponse;
type schemas_Get2ListsIdTweetsResponse = Get2ListsIdTweetsResponse;
type schemas_Get2MediaAnalyticsResponse = Get2MediaAnalyticsResponse;
type schemas_Get2MediaMediaKeyResponse = Get2MediaMediaKeyResponse;
type schemas_Get2MediaResponse = Get2MediaResponse;
type schemas_Get2NewsIdResponse = Get2NewsIdResponse;
type schemas_Get2NewsSearchResponse = Get2NewsSearchResponse;
type schemas_Get2NotesSearchNotesWrittenResponse = Get2NotesSearchNotesWrittenResponse;
type schemas_Get2NotesSearchPostsEligibleForNotesResponse = Get2NotesSearchPostsEligibleForNotesResponse;
type schemas_Get2SpacesByCreatorIdsResponse = Get2SpacesByCreatorIdsResponse;
type schemas_Get2SpacesIdBuyersResponse = Get2SpacesIdBuyersResponse;
type schemas_Get2SpacesIdResponse = Get2SpacesIdResponse;
type schemas_Get2SpacesIdTweetsResponse = Get2SpacesIdTweetsResponse;
type schemas_Get2SpacesResponse = Get2SpacesResponse;
type schemas_Get2SpacesSearchResponse = Get2SpacesSearchResponse;
type schemas_Get2TrendsByWoeidWoeidResponse = Get2TrendsByWoeidWoeidResponse;
type schemas_Get2TweetsAnalyticsResponse = Get2TweetsAnalyticsResponse;
type schemas_Get2TweetsCountsAllResponse = Get2TweetsCountsAllResponse;
type schemas_Get2TweetsCountsRecentResponse = Get2TweetsCountsRecentResponse;
type schemas_Get2TweetsFirehoseStreamLangEnResponse = Get2TweetsFirehoseStreamLangEnResponse;
type schemas_Get2TweetsFirehoseStreamLangJaResponse = Get2TweetsFirehoseStreamLangJaResponse;
type schemas_Get2TweetsFirehoseStreamLangKoResponse = Get2TweetsFirehoseStreamLangKoResponse;
type schemas_Get2TweetsFirehoseStreamLangPtResponse = Get2TweetsFirehoseStreamLangPtResponse;
type schemas_Get2TweetsFirehoseStreamResponse = Get2TweetsFirehoseStreamResponse;
type schemas_Get2TweetsIdLikingUsersResponse = Get2TweetsIdLikingUsersResponse;
type schemas_Get2TweetsIdQuoteTweetsResponse = Get2TweetsIdQuoteTweetsResponse;
type schemas_Get2TweetsIdResponse = Get2TweetsIdResponse;
type schemas_Get2TweetsIdRetweetedByResponse = Get2TweetsIdRetweetedByResponse;
type schemas_Get2TweetsIdRetweetsResponse = Get2TweetsIdRetweetsResponse;
type schemas_Get2TweetsResponse = Get2TweetsResponse;
type schemas_Get2TweetsSample10StreamResponse = Get2TweetsSample10StreamResponse;
type schemas_Get2TweetsSampleStreamResponse = Get2TweetsSampleStreamResponse;
type schemas_Get2TweetsSearchAllResponse = Get2TweetsSearchAllResponse;
type schemas_Get2TweetsSearchRecentResponse = Get2TweetsSearchRecentResponse;
type schemas_Get2TweetsSearchStreamResponse = Get2TweetsSearchStreamResponse;
type schemas_Get2TweetsSearchStreamRulesCountsResponse = Get2TweetsSearchStreamRulesCountsResponse;
type schemas_Get2UsageTweetsResponse = Get2UsageTweetsResponse;
type schemas_Get2UsersByResponse = Get2UsersByResponse;
type schemas_Get2UsersByUsernameUsernameResponse = Get2UsersByUsernameUsernameResponse;
type schemas_Get2UsersIdBlockingResponse = Get2UsersIdBlockingResponse;
type schemas_Get2UsersIdBookmarksResponse = Get2UsersIdBookmarksResponse;
type schemas_Get2UsersIdFollowedListsResponse = Get2UsersIdFollowedListsResponse;
type schemas_Get2UsersIdFollowersResponse = Get2UsersIdFollowersResponse;
type schemas_Get2UsersIdFollowingResponse = Get2UsersIdFollowingResponse;
type schemas_Get2UsersIdLikedTweetsResponse = Get2UsersIdLikedTweetsResponse;
type schemas_Get2UsersIdListMembershipsResponse = Get2UsersIdListMembershipsResponse;
type schemas_Get2UsersIdMentionsResponse = Get2UsersIdMentionsResponse;
type schemas_Get2UsersIdMutingResponse = Get2UsersIdMutingResponse;
type schemas_Get2UsersIdOwnedListsResponse = Get2UsersIdOwnedListsResponse;
type schemas_Get2UsersIdPinnedListsResponse = Get2UsersIdPinnedListsResponse;
type schemas_Get2UsersIdResponse = Get2UsersIdResponse;
type schemas_Get2UsersIdTimelinesReverseChronologicalResponse = Get2UsersIdTimelinesReverseChronologicalResponse;
type schemas_Get2UsersIdTweetsResponse = Get2UsersIdTweetsResponse;
type schemas_Get2UsersMeResponse = Get2UsersMeResponse;
type schemas_Get2UsersPersonalizedTrendsResponse = Get2UsersPersonalizedTrendsResponse;
type schemas_Get2UsersRepostsOfMeResponse = Get2UsersRepostsOfMeResponse;
type schemas_Get2UsersResponse = Get2UsersResponse;
type schemas_Get2UsersSearchResponse = Get2UsersSearchResponse;
type schemas_Get2WebhooksResponse = Get2WebhooksResponse;
type schemas_HashtagEntity = HashtagEntity;
type schemas_HashtagFields = HashtagFields;
type schemas_HttpStatusCode = HttpStatusCode;
type schemas_InvalidRequestProblem = InvalidRequestProblem;
type schemas_InvalidRuleProblem = InvalidRuleProblem;
type schemas_JobId = JobId;
type schemas_Keyword = Keyword;
type schemas_KillAllConnectionsResponse = KillAllConnectionsResponse;
type schemas_LikeComplianceSchema = LikeComplianceSchema;
type schemas_LikeId = LikeId;
type schemas_LikeWithTweetAuthor = LikeWithTweetAuthor;
type schemas_LikesComplianceStreamResponse = LikesComplianceStreamResponse;
type schemas_List = List;
type schemas_ListAddUserRequest = ListAddUserRequest;
type schemas_ListCreateRequest = ListCreateRequest;
type schemas_ListCreateResponse = ListCreateResponse;
type schemas_ListDeleteResponse = ListDeleteResponse;
type schemas_ListFollowedRequest = ListFollowedRequest;
type schemas_ListFollowedResponse = ListFollowedResponse;
type schemas_ListId = ListId;
type schemas_ListMutateResponse = ListMutateResponse;
type schemas_ListPinnedRequest = ListPinnedRequest;
type schemas_ListPinnedResponse = ListPinnedResponse;
type schemas_ListUnpinResponse = ListUnpinResponse;
type schemas_ListUpdateRequest = ListUpdateRequest;
type schemas_ListUpdateResponse = ListUpdateResponse;
type schemas_ManagementInfo = ManagementInfo;
type schemas_Media = Media;
type schemas_MediaAnalytics = MediaAnalytics;
type schemas_MediaCategory = MediaCategory;
type schemas_MediaCategoryOneShot = MediaCategoryOneShot;
type schemas_MediaCategorySubtitles = MediaCategorySubtitles;
type schemas_MediaHeight = MediaHeight;
type schemas_MediaId = MediaId;
type schemas_MediaKey = MediaKey;
type schemas_MediaMetrics = MediaMetrics;
type schemas_MediaPayloadBinary = MediaPayloadBinary;
type schemas_MediaPayloadByte = MediaPayloadByte;
type schemas_MediaSegments = MediaSegments;
type schemas_MediaTimestampedMetrics = MediaTimestampedMetrics;
type schemas_MediaUploadAppendRequest = MediaUploadAppendRequest;
type schemas_MediaUploadAppendResponse = MediaUploadAppendResponse;
type schemas_MediaUploadConfigRequest = MediaUploadConfigRequest;
type schemas_MediaUploadRequestOneShot = MediaUploadRequestOneShot;
type schemas_MediaUploadResponse = MediaUploadResponse;
type schemas_MediaWidth = MediaWidth;
type schemas_MentionEntity = MentionEntity;
type schemas_MentionFields = MentionFields;
type schemas_MetadataCreateRequest = MetadataCreateRequest;
type schemas_MetadataCreateResponse = MetadataCreateResponse;
type schemas_Metrics = Metrics;
type schemas_MisleadingTags = MisleadingTags;
type schemas_MuteUserMutationResponse = MuteUserMutationResponse;
type schemas_MuteUserRequest = MuteUserRequest;
type schemas_NewestId = NewestId;
type schemas_News = News;
type schemas_NewsActivityResponsePayload = NewsActivityResponsePayload;
type schemas_NewsId = NewsId;
type schemas_NextToken = NextToken;
type schemas_NonCompliantRulesProblem = NonCompliantRulesProblem;
type schemas_Note = Note;
type schemas_NoteClassification = NoteClassification;
type schemas_NoteId = NoteId;
type schemas_NoteInfo = NoteInfo;
type schemas_NoteRatingStatus = NoteRatingStatus;
type schemas_NoteTestResult = NoteTestResult;
type schemas_NoteTweetText = NoteTweetText;
type schemas_Oauth1PermissionsProblem = Oauth1PermissionsProblem;
type schemas_OldestId = OldestId;
type schemas_OperationalDisconnectProblem = OperationalDisconnectProblem;
type schemas_PaginationToken32 = PaginationToken32;
type schemas_PaginationToken36 = PaginationToken36;
type schemas_PaginationTokenLong = PaginationTokenLong;
type schemas_PersonalizedTrend = PersonalizedTrend;
type schemas_Photo = Photo;
type schemas_Place = Place;
type schemas_PlaceId = PlaceId;
type schemas_PlaceType = PlaceType;
type schemas_PlaidAccount = PlaidAccount;
type schemas_PlaidAccountContact = PlaidAccountContact;
type schemas_PlaidAccountPaymentNetwork = PlaidAccountPaymentNetwork;
type schemas_PlaidAccountTransaction = PlaidAccountTransaction;
type schemas_PlaidAddress = PlaidAddress;
type schemas_PlaidCurrency = PlaidCurrency;
type schemas_PlaidCustomer = PlaidCustomer;
type schemas_PlaidName = PlaidName;
type schemas_PlaidTelephone = PlaidTelephone;
type schemas_Point = Point;
type schemas_Poll = Poll;
type schemas_PollId = PollId;
type schemas_PollOption = PollOption;
type schemas_PollOptionLabel = PollOptionLabel;
type schemas_Position = Position;
type schemas_PreviewImage = PreviewImage;
type schemas_PreviousToken = PreviousToken;
type schemas_Problem = Problem;
type schemas_ProcessingInfo = ProcessingInfo;
type schemas_ProfileUpdateActivityResponsePayload = ProfileUpdateActivityResponsePayload;
type schemas_ReplayJobCreateResponse = ReplayJobCreateResponse;
type schemas_ReplySettings = ReplySettings;
type schemas_ReplySettingsWithVerifiedUsers = ReplySettingsWithVerifiedUsers;
type schemas_ResourceNotFoundProblem = ResourceNotFoundProblem;
type schemas_ResourceUnauthorizedProblem = ResourceUnauthorizedProblem;
type schemas_ResourceUnavailableProblem = ResourceUnavailableProblem;
type schemas_ResultCount = ResultCount;
type schemas_Rule = Rule;
type schemas_RuleId = RuleId;
type schemas_RuleNoId = RuleNoId;
type schemas_RuleTag = RuleTag;
type schemas_RuleValue = RuleValue;
type schemas_RulesCapProblem = RulesCapProblem;
type schemas_RulesCount = RulesCount;
type schemas_RulesLookupResponse = RulesLookupResponse;
type schemas_RulesRequestSummary = RulesRequestSummary;
type schemas_RulesResponseMetadata = RulesResponseMetadata;
type schemas_SearchCount = SearchCount;
type schemas_SensitiveMediaWarning = SensitiveMediaWarning;
type schemas_SharedInfo = SharedInfo;
type schemas_Space = Space;
type schemas_SpaceId = SpaceId;
type schemas_Start = Start;
type schemas_Sticker = Sticker;
type schemas_StickerInfo = StickerInfo;
type schemas_StreamingLikeResponseV2 = StreamingLikeResponseV2;
type schemas_StreamingTweetResponse = StreamingTweetResponse;
type schemas_SubscriptionsCountGetResponse = SubscriptionsCountGetResponse;
type schemas_SubscriptionsCreateRequest = SubscriptionsCreateRequest;
type schemas_SubscriptionsCreateResponse = SubscriptionsCreateResponse;
type schemas_SubscriptionsDeleteResponse = SubscriptionsDeleteResponse;
type schemas_SubscriptionsGetResponse = SubscriptionsGetResponse;
type schemas_SubscriptionsListGetResponse = SubscriptionsListGetResponse;
type schemas_SubtitleLanguageCode = SubtitleLanguageCode;
type schemas_Subtitles = Subtitles;
type schemas_SubtitlesCreateRequest = SubtitlesCreateRequest;
type schemas_SubtitlesCreateResponse = SubtitlesCreateResponse;
type schemas_SubtitlesDeleteRequest = SubtitlesDeleteRequest;
type schemas_SubtitlesDeleteResponse = SubtitlesDeleteResponse;
type schemas_TimestampedMetrics = TimestampedMetrics;
type schemas_Topic = Topic;
type schemas_TopicId = TopicId;
type schemas_Trend = Trend;
type schemas_Tweet = Tweet;
type schemas_TweetComplianceData = TweetComplianceData;
type schemas_TweetComplianceSchema = TweetComplianceSchema;
type schemas_TweetComplianceStreamResponse = TweetComplianceStreamResponse;
type schemas_TweetCount = TweetCount;
type schemas_TweetCreateRequest = TweetCreateRequest;
type schemas_TweetCreateResponse = TweetCreateResponse;
type schemas_TweetDeleteComplianceSchema = TweetDeleteComplianceSchema;
type schemas_TweetDeleteResponse = TweetDeleteResponse;
type schemas_TweetDropComplianceSchema = TweetDropComplianceSchema;
type schemas_TweetEditComplianceObjectSchema = TweetEditComplianceObjectSchema;
type schemas_TweetEditComplianceSchema = TweetEditComplianceSchema;
type schemas_TweetHideRequest = TweetHideRequest;
type schemas_TweetHideResponse = TweetHideResponse;
type schemas_TweetId = TweetId;
type schemas_TweetLabelData = TweetLabelData;
type schemas_TweetLabelStreamResponse = TweetLabelStreamResponse;
type schemas_TweetNotice = TweetNotice;
type schemas_TweetNoticeSchema = TweetNoticeSchema;
type schemas_TweetTakedownComplianceSchema = TweetTakedownComplianceSchema;
type schemas_TweetText = TweetText;
type schemas_TweetUndropComplianceSchema = TweetUndropComplianceSchema;
type schemas_TweetUnviewable = TweetUnviewable;
type schemas_TweetUnviewableSchema = TweetUnviewableSchema;
type schemas_TweetWithheld = TweetWithheld;
type schemas_TweetWithheldComplianceSchema = TweetWithheldComplianceSchema;
type schemas_UnlikeComplianceSchema = UnlikeComplianceSchema;
type schemas_UnsupportedAuthenticationProblem = UnsupportedAuthenticationProblem;
type schemas_UploadExpiration = UploadExpiration;
type schemas_UploadSource = UploadSource;
type schemas_UploadUrl = UploadUrl;
type schemas_Url = Url;
type schemas_UrlEntity = UrlEntity;
type schemas_UrlEntityDm = UrlEntityDm;
type schemas_UrlFields = UrlFields;
type schemas_UrlImage = UrlImage;
type schemas_Usage = Usage;
type schemas_UsageCapExceededProblem = UsageCapExceededProblem;
type schemas_UsageFields = UsageFields;
type schemas_User = User;
type schemas_UserComplianceData = UserComplianceData;
type schemas_UserComplianceSchema = UserComplianceSchema;
type schemas_UserComplianceStreamResponse = UserComplianceStreamResponse;
type schemas_UserDeleteComplianceSchema = UserDeleteComplianceSchema;
type schemas_UserId = UserId;
type schemas_UserIdMatchesAuthenticatedUser = UserIdMatchesAuthenticatedUser;
type schemas_UserName = UserName;
type schemas_UserProfileModificationComplianceSchema = UserProfileModificationComplianceSchema;
type schemas_UserProfileModificationObjectSchema = UserProfileModificationObjectSchema;
type schemas_UserProtectComplianceSchema = UserProtectComplianceSchema;
type schemas_UserScrubGeoObjectSchema = UserScrubGeoObjectSchema;
type schemas_UserScrubGeoSchema = UserScrubGeoSchema;
type schemas_UserSearchQueryVnext = UserSearchQueryVnext;
type schemas_UserSuspendComplianceSchema = UserSuspendComplianceSchema;
type schemas_UserTakedownComplianceSchema = UserTakedownComplianceSchema;
type schemas_UserUndeleteComplianceSchema = UserUndeleteComplianceSchema;
type schemas_UserUnprotectComplianceSchema = UserUnprotectComplianceSchema;
type schemas_UserUnsuspendComplianceSchema = UserUnsuspendComplianceSchema;
type schemas_UserWithheld = UserWithheld;
type schemas_UserWithheldComplianceSchema = UserWithheldComplianceSchema;
type schemas_UsersDMBlockCreateResponse = UsersDMBlockCreateResponse;
type schemas_UsersDMUnBlockCreateResponse = UsersDMUnBlockCreateResponse;
type schemas_UsersFollowingCreateRequest = UsersFollowingCreateRequest;
type schemas_UsersFollowingCreateResponse = UsersFollowingCreateResponse;
type schemas_UsersFollowingDeleteResponse = UsersFollowingDeleteResponse;
type schemas_UsersLikesCreateRequest = UsersLikesCreateRequest;
type schemas_UsersLikesCreateResponse = UsersLikesCreateResponse;
type schemas_UsersLikesDeleteResponse = UsersLikesDeleteResponse;
type schemas_UsersRetweetsCreateRequest = UsersRetweetsCreateRequest;
type schemas_UsersRetweetsCreateResponse = UsersRetweetsCreateResponse;
type schemas_UsersRetweetsDeleteResponse = UsersRetweetsDeleteResponse;
type schemas_Variant = Variant;
type schemas_Variants = Variants;
type schemas_Video = Video;
type schemas_WebhookConfig = WebhookConfig;
type schemas_WebhookConfigCreateRequest = WebhookConfigCreateRequest;
type schemas_WebhookConfigCreateResponse = WebhookConfigCreateResponse;
type schemas_WebhookConfigDeleteResponse = WebhookConfigDeleteResponse;
type schemas_WebhookConfigId = WebhookConfigId;
type schemas_WebhookConfigPutResponse = WebhookConfigPutResponse;
type schemas_WebhookLinksCreateResponse = WebhookLinksCreateResponse;
type schemas_WebhookLinksDeleteResponse = WebhookLinksDeleteResponse;
type schemas_WebhookLinksGetResponse = WebhookLinksGetResponse;
type schemas_WebhookReplayCreateRequest = WebhookReplayCreateRequest;
declare namespace schemas {
  export {
    schemas_ActivityEventId as ActivityEventId,
    schemas_ActivityStreamingResponse as ActivityStreamingResponse,
    schemas_ActivityStreamingResponsePayload as ActivityStreamingResponsePayload,
    schemas_ActivitySubscription as ActivitySubscription,
    schemas_ActivitySubscriptionCreateRequest as ActivitySubscriptionCreateRequest,
    schemas_ActivitySubscriptionCreateResponse as ActivitySubscriptionCreateResponse,
    schemas_ActivitySubscriptionDeleteResponse as ActivitySubscriptionDeleteResponse,
    schemas_ActivitySubscriptionFilter as ActivitySubscriptionFilter,
    schemas_ActivitySubscriptionGetResponse as ActivitySubscriptionGetResponse,
    schemas_ActivitySubscriptionId as ActivitySubscriptionId,
    schemas_ActivitySubscriptionUpdateRequest as ActivitySubscriptionUpdateRequest,
    schemas_ActivitySubscriptionUpdateResponse as ActivitySubscriptionUpdateResponse,
    schemas_AddOrDeleteRulesRequest as AddOrDeleteRulesRequest,
    schemas_AddOrDeleteRulesResponse as AddOrDeleteRulesResponse,
    schemas_AddRulesRequest as AddRulesRequest,
    schemas_Aggregate as Aggregate,
    schemas_AllProjectClientApps as AllProjectClientApps,
    schemas_AllowDownloadStatus as AllowDownloadStatus,
    schemas_AltText as AltText,
    schemas_Analytics as Analytics,
    schemas_AnimatedGif as AnimatedGif,
    schemas_AppRulesCount as AppRulesCount,
    schemas_AudiencePolicy as AudiencePolicy,
    schemas_BookmarkAddRequest as BookmarkAddRequest,
    schemas_BookmarkFolderId as BookmarkFolderId,
    schemas_BookmarkFolderPostsResponse as BookmarkFolderPostsResponse,
    schemas_BookmarkFoldersResponse as BookmarkFoldersResponse,
    schemas_BookmarkMutationResponse as BookmarkMutationResponse,
    schemas_CashtagEntity as CashtagEntity,
    schemas_CashtagFields as CashtagFields,
    schemas_ClientAppId as ClientAppId,
    schemas_ClientAppUsage as ClientAppUsage,
    schemas_ClientDisconnectedProblem as ClientDisconnectedProblem,
    schemas_ClientForbiddenProblem as ClientForbiddenProblem,
    schemas_Community as Community,
    schemas_CommunityId as CommunityId,
    schemas_ComplianceJob as ComplianceJob,
    schemas_ComplianceJobName as ComplianceJobName,
    schemas_ComplianceJobStatus as ComplianceJobStatus,
    schemas_ComplianceJobType as ComplianceJobType,
    schemas_ConflictProblem as ConflictProblem,
    schemas_Connection as Connection,
    schemas_ConnectionExceptionProblem as ConnectionExceptionProblem,
    schemas_ContentExpiration as ContentExpiration,
    schemas_ContextAnnotation as ContextAnnotation,
    schemas_ContextAnnotationDomainFields as ContextAnnotationDomainFields,
    schemas_ContextAnnotationEntityFields as ContextAnnotationEntityFields,
    schemas_CountryCode as CountryCode,
    schemas_CreateAttachmentsMessageRequest as CreateAttachmentsMessageRequest,
    schemas_CreateComplianceJobRequest as CreateComplianceJobRequest,
    schemas_CreateComplianceJobResponse as CreateComplianceJobResponse,
    schemas_CreateDmConversationRequest as CreateDmConversationRequest,
    schemas_CreateDmEventResponse as CreateDmEventResponse,
    schemas_CreateMessageRequest as CreateMessageRequest,
    schemas_CreateNoteRequest as CreateNoteRequest,
    schemas_CreateNoteResponse as CreateNoteResponse,
    schemas_CreateTextMessageRequest as CreateTextMessageRequest,
    schemas_CreatedAt as CreatedAt,
    schemas_DeleteDmResponse as DeleteDmResponse,
    schemas_DeleteNoteResponse as DeleteNoteResponse,
    schemas_DeleteRulesRequest as DeleteRulesRequest,
    schemas_DisallowedResourceProblem as DisallowedResourceProblem,
    schemas_DisplayTextRange as DisplayTextRange,
    schemas_DmAttachments as DmAttachments,
    schemas_DmConversationId as DmConversationId,
    schemas_DmEvent as DmEvent,
    schemas_DmEventId as DmEventId,
    schemas_DmMediaAttachment as DmMediaAttachment,
    schemas_DmParticipants as DmParticipants,
    schemas_DomainRestrictions as DomainRestrictions,
    schemas_DownloadExpiration as DownloadExpiration,
    schemas_DownloadUrl as DownloadUrl,
    schemas_DuplicateRuleProblem as DuplicateRuleProblem,
    schemas_End as End,
    schemas_Engagement as Engagement,
    schemas_EntityIndicesInclusiveExclusive as EntityIndicesInclusiveExclusive,
    schemas_EntityIndicesInclusiveInclusive as EntityIndicesInclusiveInclusive,
    Error$1 as Error,
    schemas_EvaluateNoteRequest as EvaluateNoteRequest,
    schemas_EvaluateNoteResponse as EvaluateNoteResponse,
    schemas_Expansions as Expansions,
    schemas_FieldUnauthorizedProblem as FieldUnauthorizedProblem,
    schemas_FilteredStreamingTweetResponse as FilteredStreamingTweetResponse,
    schemas_FollowActivityResponsePayload as FollowActivityResponsePayload,
    schemas_FoundMediaOrigin as FoundMediaOrigin,
    schemas_FullTextEntities as FullTextEntities,
    schemas_GenericProblem as GenericProblem,
    schemas_Geo as Geo,
    schemas_GeoRestrictions as GeoRestrictions,
    schemas_Get2CommunitiesIdResponse as Get2CommunitiesIdResponse,
    schemas_Get2CommunitiesSearchResponse as Get2CommunitiesSearchResponse,
    schemas_Get2ComplianceJobsIdResponse as Get2ComplianceJobsIdResponse,
    schemas_Get2ComplianceJobsResponse as Get2ComplianceJobsResponse,
    schemas_Get2ConnectionsResponse as Get2ConnectionsResponse,
    schemas_Get2DmConversationsIdDmEventsResponse as Get2DmConversationsIdDmEventsResponse,
    schemas_Get2DmConversationsWithParticipantIdDmEventsResponse as Get2DmConversationsWithParticipantIdDmEventsResponse,
    schemas_Get2DmEventsEventIdResponse as Get2DmEventsEventIdResponse,
    schemas_Get2DmEventsResponse as Get2DmEventsResponse,
    schemas_Get2FdxAccountsAccountidContactResponse as Get2FdxAccountsAccountidContactResponse,
    schemas_Get2FdxAccountsAccountidPayment_networksResponse as Get2FdxAccountsAccountidPayment_networksResponse,
    schemas_Get2FdxAccountsAccountidResponse as Get2FdxAccountsAccountidResponse,
    schemas_Get2FdxAccountsAccountidTransactionsResponse as Get2FdxAccountsAccountidTransactionsResponse,
    schemas_Get2FdxCustomersCurrentResponse as Get2FdxCustomersCurrentResponse,
    schemas_Get2Insights28hrResponse as Get2Insights28hrResponse,
    schemas_Get2InsightsHistoricalResponse as Get2InsightsHistoricalResponse,
    schemas_Get2LikesFirehoseStreamResponse as Get2LikesFirehoseStreamResponse,
    schemas_Get2LikesSample10StreamResponse as Get2LikesSample10StreamResponse,
    schemas_Get2ListsIdFollowersResponse as Get2ListsIdFollowersResponse,
    schemas_Get2ListsIdMembersResponse as Get2ListsIdMembersResponse,
    schemas_Get2ListsIdResponse as Get2ListsIdResponse,
    schemas_Get2ListsIdTweetsResponse as Get2ListsIdTweetsResponse,
    schemas_Get2MediaAnalyticsResponse as Get2MediaAnalyticsResponse,
    schemas_Get2MediaMediaKeyResponse as Get2MediaMediaKeyResponse,
    schemas_Get2MediaResponse as Get2MediaResponse,
    schemas_Get2NewsIdResponse as Get2NewsIdResponse,
    schemas_Get2NewsSearchResponse as Get2NewsSearchResponse,
    schemas_Get2NotesSearchNotesWrittenResponse as Get2NotesSearchNotesWrittenResponse,
    schemas_Get2NotesSearchPostsEligibleForNotesResponse as Get2NotesSearchPostsEligibleForNotesResponse,
    schemas_Get2SpacesByCreatorIdsResponse as Get2SpacesByCreatorIdsResponse,
    schemas_Get2SpacesIdBuyersResponse as Get2SpacesIdBuyersResponse,
    schemas_Get2SpacesIdResponse as Get2SpacesIdResponse,
    schemas_Get2SpacesIdTweetsResponse as Get2SpacesIdTweetsResponse,
    schemas_Get2SpacesResponse as Get2SpacesResponse,
    schemas_Get2SpacesSearchResponse as Get2SpacesSearchResponse,
    schemas_Get2TrendsByWoeidWoeidResponse as Get2TrendsByWoeidWoeidResponse,
    schemas_Get2TweetsAnalyticsResponse as Get2TweetsAnalyticsResponse,
    schemas_Get2TweetsCountsAllResponse as Get2TweetsCountsAllResponse,
    schemas_Get2TweetsCountsRecentResponse as Get2TweetsCountsRecentResponse,
    schemas_Get2TweetsFirehoseStreamLangEnResponse as Get2TweetsFirehoseStreamLangEnResponse,
    schemas_Get2TweetsFirehoseStreamLangJaResponse as Get2TweetsFirehoseStreamLangJaResponse,
    schemas_Get2TweetsFirehoseStreamLangKoResponse as Get2TweetsFirehoseStreamLangKoResponse,
    schemas_Get2TweetsFirehoseStreamLangPtResponse as Get2TweetsFirehoseStreamLangPtResponse,
    schemas_Get2TweetsFirehoseStreamResponse as Get2TweetsFirehoseStreamResponse,
    schemas_Get2TweetsIdLikingUsersResponse as Get2TweetsIdLikingUsersResponse,
    schemas_Get2TweetsIdQuoteTweetsResponse as Get2TweetsIdQuoteTweetsResponse,
    schemas_Get2TweetsIdResponse as Get2TweetsIdResponse,
    schemas_Get2TweetsIdRetweetedByResponse as Get2TweetsIdRetweetedByResponse,
    schemas_Get2TweetsIdRetweetsResponse as Get2TweetsIdRetweetsResponse,
    schemas_Get2TweetsResponse as Get2TweetsResponse,
    schemas_Get2TweetsSample10StreamResponse as Get2TweetsSample10StreamResponse,
    schemas_Get2TweetsSampleStreamResponse as Get2TweetsSampleStreamResponse,
    schemas_Get2TweetsSearchAllResponse as Get2TweetsSearchAllResponse,
    schemas_Get2TweetsSearchRecentResponse as Get2TweetsSearchRecentResponse,
    schemas_Get2TweetsSearchStreamResponse as Get2TweetsSearchStreamResponse,
    schemas_Get2TweetsSearchStreamRulesCountsResponse as Get2TweetsSearchStreamRulesCountsResponse,
    schemas_Get2UsageTweetsResponse as Get2UsageTweetsResponse,
    schemas_Get2UsersByResponse as Get2UsersByResponse,
    schemas_Get2UsersByUsernameUsernameResponse as Get2UsersByUsernameUsernameResponse,
    schemas_Get2UsersIdBlockingResponse as Get2UsersIdBlockingResponse,
    schemas_Get2UsersIdBookmarksResponse as Get2UsersIdBookmarksResponse,
    schemas_Get2UsersIdFollowedListsResponse as Get2UsersIdFollowedListsResponse,
    schemas_Get2UsersIdFollowersResponse as Get2UsersIdFollowersResponse,
    schemas_Get2UsersIdFollowingResponse as Get2UsersIdFollowingResponse,
    schemas_Get2UsersIdLikedTweetsResponse as Get2UsersIdLikedTweetsResponse,
    schemas_Get2UsersIdListMembershipsResponse as Get2UsersIdListMembershipsResponse,
    schemas_Get2UsersIdMentionsResponse as Get2UsersIdMentionsResponse,
    schemas_Get2UsersIdMutingResponse as Get2UsersIdMutingResponse,
    schemas_Get2UsersIdOwnedListsResponse as Get2UsersIdOwnedListsResponse,
    schemas_Get2UsersIdPinnedListsResponse as Get2UsersIdPinnedListsResponse,
    schemas_Get2UsersIdResponse as Get2UsersIdResponse,
    schemas_Get2UsersIdTimelinesReverseChronologicalResponse as Get2UsersIdTimelinesReverseChronologicalResponse,
    schemas_Get2UsersIdTweetsResponse as Get2UsersIdTweetsResponse,
    schemas_Get2UsersMeResponse as Get2UsersMeResponse,
    schemas_Get2UsersPersonalizedTrendsResponse as Get2UsersPersonalizedTrendsResponse,
    schemas_Get2UsersRepostsOfMeResponse as Get2UsersRepostsOfMeResponse,
    schemas_Get2UsersResponse as Get2UsersResponse,
    schemas_Get2UsersSearchResponse as Get2UsersSearchResponse,
    schemas_Get2WebhooksResponse as Get2WebhooksResponse,
    schemas_HashtagEntity as HashtagEntity,
    schemas_HashtagFields as HashtagFields,
    schemas_HttpStatusCode as HttpStatusCode,
    schemas_InvalidRequestProblem as InvalidRequestProblem,
    schemas_InvalidRuleProblem as InvalidRuleProblem,
    schemas_JobId as JobId,
    schemas_Keyword as Keyword,
    schemas_KillAllConnectionsResponse as KillAllConnectionsResponse,
    schemas_LikeComplianceSchema as LikeComplianceSchema,
    schemas_LikeId as LikeId,
    schemas_LikeWithTweetAuthor as LikeWithTweetAuthor,
    schemas_LikesComplianceStreamResponse as LikesComplianceStreamResponse,
    schemas_List as List,
    schemas_ListAddUserRequest as ListAddUserRequest,
    schemas_ListCreateRequest as ListCreateRequest,
    schemas_ListCreateResponse as ListCreateResponse,
    schemas_ListDeleteResponse as ListDeleteResponse,
    schemas_ListFollowedRequest as ListFollowedRequest,
    schemas_ListFollowedResponse as ListFollowedResponse,
    schemas_ListId as ListId,
    schemas_ListMutateResponse as ListMutateResponse,
    schemas_ListPinnedRequest as ListPinnedRequest,
    schemas_ListPinnedResponse as ListPinnedResponse,
    schemas_ListUnpinResponse as ListUnpinResponse,
    schemas_ListUpdateRequest as ListUpdateRequest,
    schemas_ListUpdateResponse as ListUpdateResponse,
    schemas_ManagementInfo as ManagementInfo,
    schemas_Media as Media,
    schemas_MediaAnalytics as MediaAnalytics,
    schemas_MediaCategory as MediaCategory,
    schemas_MediaCategoryOneShot as MediaCategoryOneShot,
    schemas_MediaCategorySubtitles as MediaCategorySubtitles,
    schemas_MediaHeight as MediaHeight,
    schemas_MediaId as MediaId,
    schemas_MediaKey as MediaKey,
    schemas_MediaMetrics as MediaMetrics,
    schemas_MediaPayloadBinary as MediaPayloadBinary,
    schemas_MediaPayloadByte as MediaPayloadByte,
    schemas_MediaSegments as MediaSegments,
    schemas_MediaTimestampedMetrics as MediaTimestampedMetrics,
    schemas_MediaUploadAppendRequest as MediaUploadAppendRequest,
    schemas_MediaUploadAppendResponse as MediaUploadAppendResponse,
    schemas_MediaUploadConfigRequest as MediaUploadConfigRequest,
    schemas_MediaUploadRequestOneShot as MediaUploadRequestOneShot,
    schemas_MediaUploadResponse as MediaUploadResponse,
    schemas_MediaWidth as MediaWidth,
    schemas_MentionEntity as MentionEntity,
    schemas_MentionFields as MentionFields,
    schemas_MetadataCreateRequest as MetadataCreateRequest,
    schemas_MetadataCreateResponse as MetadataCreateResponse,
    schemas_Metrics as Metrics,
    schemas_MisleadingTags as MisleadingTags,
    schemas_MuteUserMutationResponse as MuteUserMutationResponse,
    schemas_MuteUserRequest as MuteUserRequest,
    schemas_NewestId as NewestId,
    schemas_News as News,
    schemas_NewsActivityResponsePayload as NewsActivityResponsePayload,
    schemas_NewsId as NewsId,
    schemas_NextToken as NextToken,
    schemas_NonCompliantRulesProblem as NonCompliantRulesProblem,
    schemas_Note as Note,
    schemas_NoteClassification as NoteClassification,
    schemas_NoteId as NoteId,
    schemas_NoteInfo as NoteInfo,
    schemas_NoteRatingStatus as NoteRatingStatus,
    schemas_NoteTestResult as NoteTestResult,
    schemas_NoteTweetText as NoteTweetText,
    schemas_Oauth1PermissionsProblem as Oauth1PermissionsProblem,
    schemas_OldestId as OldestId,
    schemas_OperationalDisconnectProblem as OperationalDisconnectProblem,
    schemas_PaginationToken32 as PaginationToken32,
    schemas_PaginationToken36 as PaginationToken36,
    schemas_PaginationTokenLong as PaginationTokenLong,
    schemas_PersonalizedTrend as PersonalizedTrend,
    schemas_Photo as Photo,
    schemas_Place as Place,
    schemas_PlaceId as PlaceId,
    schemas_PlaceType as PlaceType,
    schemas_PlaidAccount as PlaidAccount,
    schemas_PlaidAccountContact as PlaidAccountContact,
    schemas_PlaidAccountPaymentNetwork as PlaidAccountPaymentNetwork,
    schemas_PlaidAccountTransaction as PlaidAccountTransaction,
    schemas_PlaidAddress as PlaidAddress,
    schemas_PlaidCurrency as PlaidCurrency,
    schemas_PlaidCustomer as PlaidCustomer,
    schemas_PlaidName as PlaidName,
    schemas_PlaidTelephone as PlaidTelephone,
    schemas_Point as Point,
    schemas_Poll as Poll,
    schemas_PollId as PollId,
    schemas_PollOption as PollOption,
    schemas_PollOptionLabel as PollOptionLabel,
    schemas_Position as Position,
    schemas_PreviewImage as PreviewImage,
    schemas_PreviousToken as PreviousToken,
    schemas_Problem as Problem,
    schemas_ProcessingInfo as ProcessingInfo,
    schemas_ProfileUpdateActivityResponsePayload as ProfileUpdateActivityResponsePayload,
    schemas_ReplayJobCreateResponse as ReplayJobCreateResponse,
    schemas_ReplySettings as ReplySettings,
    schemas_ReplySettingsWithVerifiedUsers as ReplySettingsWithVerifiedUsers,
    schemas_ResourceNotFoundProblem as ResourceNotFoundProblem,
    schemas_ResourceUnauthorizedProblem as ResourceUnauthorizedProblem,
    schemas_ResourceUnavailableProblem as ResourceUnavailableProblem,
    schemas_ResultCount as ResultCount,
    schemas_Rule as Rule,
    schemas_RuleId as RuleId,
    schemas_RuleNoId as RuleNoId,
    schemas_RuleTag as RuleTag,
    schemas_RuleValue as RuleValue,
    schemas_RulesCapProblem as RulesCapProblem,
    schemas_RulesCount as RulesCount,
    schemas_RulesLookupResponse as RulesLookupResponse,
    schemas_RulesRequestSummary as RulesRequestSummary,
    schemas_RulesResponseMetadata as RulesResponseMetadata,
    schemas_SearchCount as SearchCount,
    schemas_SensitiveMediaWarning as SensitiveMediaWarning,
    schemas_SharedInfo as SharedInfo,
    schemas_Space as Space,
    schemas_SpaceId as SpaceId,
    schemas_Start as Start,
    schemas_Sticker as Sticker,
    schemas_StickerInfo as StickerInfo,
    schemas_StreamingLikeResponseV2 as StreamingLikeResponseV2,
    schemas_StreamingTweetResponse as StreamingTweetResponse,
    schemas_SubscriptionsCountGetResponse as SubscriptionsCountGetResponse,
    schemas_SubscriptionsCreateRequest as SubscriptionsCreateRequest,
    schemas_SubscriptionsCreateResponse as SubscriptionsCreateResponse,
    schemas_SubscriptionsDeleteResponse as SubscriptionsDeleteResponse,
    schemas_SubscriptionsGetResponse as SubscriptionsGetResponse,
    schemas_SubscriptionsListGetResponse as SubscriptionsListGetResponse,
    schemas_SubtitleLanguageCode as SubtitleLanguageCode,
    schemas_Subtitles as Subtitles,
    schemas_SubtitlesCreateRequest as SubtitlesCreateRequest,
    schemas_SubtitlesCreateResponse as SubtitlesCreateResponse,
    schemas_SubtitlesDeleteRequest as SubtitlesDeleteRequest,
    schemas_SubtitlesDeleteResponse as SubtitlesDeleteResponse,
    schemas_TimestampedMetrics as TimestampedMetrics,
    schemas_Topic as Topic,
    schemas_TopicId as TopicId,
    schemas_Trend as Trend,
    schemas_Tweet as Tweet,
    schemas_TweetComplianceData as TweetComplianceData,
    schemas_TweetComplianceSchema as TweetComplianceSchema,
    schemas_TweetComplianceStreamResponse as TweetComplianceStreamResponse,
    schemas_TweetCount as TweetCount,
    schemas_TweetCreateRequest as TweetCreateRequest,
    schemas_TweetCreateResponse as TweetCreateResponse,
    schemas_TweetDeleteComplianceSchema as TweetDeleteComplianceSchema,
    schemas_TweetDeleteResponse as TweetDeleteResponse,
    schemas_TweetDropComplianceSchema as TweetDropComplianceSchema,
    schemas_TweetEditComplianceObjectSchema as TweetEditComplianceObjectSchema,
    schemas_TweetEditComplianceSchema as TweetEditComplianceSchema,
    schemas_TweetHideRequest as TweetHideRequest,
    schemas_TweetHideResponse as TweetHideResponse,
    schemas_TweetId as TweetId,
    schemas_TweetLabelData as TweetLabelData,
    schemas_TweetLabelStreamResponse as TweetLabelStreamResponse,
    schemas_TweetNotice as TweetNotice,
    schemas_TweetNoticeSchema as TweetNoticeSchema,
    schemas_TweetTakedownComplianceSchema as TweetTakedownComplianceSchema,
    schemas_TweetText as TweetText,
    schemas_TweetUndropComplianceSchema as TweetUndropComplianceSchema,
    schemas_TweetUnviewable as TweetUnviewable,
    schemas_TweetUnviewableSchema as TweetUnviewableSchema,
    schemas_TweetWithheld as TweetWithheld,
    schemas_TweetWithheldComplianceSchema as TweetWithheldComplianceSchema,
    schemas_UnlikeComplianceSchema as UnlikeComplianceSchema,
    schemas_UnsupportedAuthenticationProblem as UnsupportedAuthenticationProblem,
    schemas_UploadExpiration as UploadExpiration,
    schemas_UploadSource as UploadSource,
    schemas_UploadUrl as UploadUrl,
    schemas_Url as Url,
    schemas_UrlEntity as UrlEntity,
    schemas_UrlEntityDm as UrlEntityDm,
    schemas_UrlFields as UrlFields,
    schemas_UrlImage as UrlImage,
    schemas_Usage as Usage,
    schemas_UsageCapExceededProblem as UsageCapExceededProblem,
    schemas_UsageFields as UsageFields,
    schemas_User as User,
    schemas_UserComplianceData as UserComplianceData,
    schemas_UserComplianceSchema as UserComplianceSchema,
    schemas_UserComplianceStreamResponse as UserComplianceStreamResponse,
    schemas_UserDeleteComplianceSchema as UserDeleteComplianceSchema,
    schemas_UserId as UserId,
    schemas_UserIdMatchesAuthenticatedUser as UserIdMatchesAuthenticatedUser,
    schemas_UserName as UserName,
    schemas_UserProfileModificationComplianceSchema as UserProfileModificationComplianceSchema,
    schemas_UserProfileModificationObjectSchema as UserProfileModificationObjectSchema,
    schemas_UserProtectComplianceSchema as UserProtectComplianceSchema,
    schemas_UserScrubGeoObjectSchema as UserScrubGeoObjectSchema,
    schemas_UserScrubGeoSchema as UserScrubGeoSchema,
    schemas_UserSearchQueryVnext as UserSearchQueryVnext,
    schemas_UserSuspendComplianceSchema as UserSuspendComplianceSchema,
    schemas_UserTakedownComplianceSchema as UserTakedownComplianceSchema,
    schemas_UserUndeleteComplianceSchema as UserUndeleteComplianceSchema,
    schemas_UserUnprotectComplianceSchema as UserUnprotectComplianceSchema,
    schemas_UserUnsuspendComplianceSchema as UserUnsuspendComplianceSchema,
    schemas_UserWithheld as UserWithheld,
    schemas_UserWithheldComplianceSchema as UserWithheldComplianceSchema,
    schemas_UsersDMBlockCreateResponse as UsersDMBlockCreateResponse,
    schemas_UsersDMUnBlockCreateResponse as UsersDMUnBlockCreateResponse,
    schemas_UsersFollowingCreateRequest as UsersFollowingCreateRequest,
    schemas_UsersFollowingCreateResponse as UsersFollowingCreateResponse,
    schemas_UsersFollowingDeleteResponse as UsersFollowingDeleteResponse,
    schemas_UsersLikesCreateRequest as UsersLikesCreateRequest,
    schemas_UsersLikesCreateResponse as UsersLikesCreateResponse,
    schemas_UsersLikesDeleteResponse as UsersLikesDeleteResponse,
    schemas_UsersRetweetsCreateRequest as UsersRetweetsCreateRequest,
    schemas_UsersRetweetsCreateResponse as UsersRetweetsCreateResponse,
    schemas_UsersRetweetsDeleteResponse as UsersRetweetsDeleteResponse,
    schemas_Variant as Variant,
    schemas_Variants as Variants,
    schemas_Video as Video,
    schemas_WebhookConfig as WebhookConfig,
    schemas_WebhookConfigCreateRequest as WebhookConfigCreateRequest,
    schemas_WebhookConfigCreateResponse as WebhookConfigCreateResponse,
    schemas_WebhookConfigDeleteResponse as WebhookConfigDeleteResponse,
    schemas_WebhookConfigId as WebhookConfigId,
    schemas_WebhookConfigPutResponse as WebhookConfigPutResponse,
    schemas_WebhookLinksCreateResponse as WebhookLinksCreateResponse,
    schemas_WebhookLinksDeleteResponse as WebhookLinksDeleteResponse,
    schemas_WebhookLinksGetResponse as WebhookLinksGetResponse,
    schemas_WebhookReplayCreateRequest as WebhookReplayCreateRequest,
  };
}

/**
 * Models for account activity operations
 */

/**
 * Response for getSubscriptions
 *
 * @public
 */
type GetSubscriptionsResponse$1 = SubscriptionsListGetResponse;
/**
 * Response for deleteSubscription
 *
 * @public
 */
type DeleteSubscriptionResponse$1 = SubscriptionsDeleteResponse;
/**
 * Response for validateSubscription
 *
 * @public
 */
type ValidateSubscriptionResponse = SubscriptionsGetResponse;
/**
 * Request for createSubscription
 *
 * @public
 */
type CreateSubscriptionRequest$1 = SubscriptionsCreateRequest;
/**
 * Response for createSubscription
 *
 * @public
 */
type CreateSubscriptionResponse$1 = SubscriptionsCreateResponse;
/**
 * Response for createReplayJob
 *
 * @public
 */
type CreateReplayJobResponse = ReplayJobCreateResponse;
/**
 * Response for getSubscriptionCount
 *
 * @public
 */
type GetSubscriptionCountResponse = SubscriptionsCountGetResponse;

type models$g_CreateReplayJobResponse = CreateReplayJobResponse;
type models$g_GetSubscriptionCountResponse = GetSubscriptionCountResponse;
type models$g_ValidateSubscriptionResponse = ValidateSubscriptionResponse;
declare namespace models$g {
  export {
    models$g_CreateReplayJobResponse as CreateReplayJobResponse,
    CreateSubscriptionRequest$1 as CreateSubscriptionRequest,
    CreateSubscriptionResponse$1 as CreateSubscriptionResponse,
    DeleteSubscriptionResponse$1 as DeleteSubscriptionResponse,
    models$g_GetSubscriptionCountResponse as GetSubscriptionCountResponse,
    GetSubscriptionsResponse$1 as GetSubscriptionsResponse,
    models$g_ValidateSubscriptionResponse as ValidateSubscriptionResponse,
  };
}

/**
 * account activity client for the X API.
 *
 * This module provides a client for interacting with the account activity endpoints of the X API.
 */

/**
 * Options for createSubscription method
 *
 * @public
 */
interface CreateSubscriptionOptions$1 {
    /** Request body */
    body?: CreateSubscriptionRequest$1;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for account activity operations
 *
 * This client provides methods for interacting with the account activity endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all account activity related operations.
 *
 * @category account activity
 */
declare class AccountActivityClient {
    private client;
    /**
     * Creates a new account activity client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get subscriptions
     * Retrieves a list of all active subscriptions for a given webhook.
  
  
     * @param webhookId The webhook ID to pull subscriptions for.
  
  
  
  
     * @returns {Promise<GetSubscriptionsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getSubscriptions(webhookId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getSubscriptions(webhookId: string): Promise<GetSubscriptionsResponse$1>;
    /**
     * Delete subscription
     * Deletes an Account Activity subscription for the given webhook and user ID.
  
  
     * @param webhookId The webhook ID to check subscription against.
  
  
  
     * @param userId User ID to unsubscribe from.
  
  
  
  
     * @returns {Promise<DeleteSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteSubscription(webhookId: string, userId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteSubscription(webhookId: string, userId: string): Promise<DeleteSubscriptionResponse$1>;
    /**
     * Validate subscription
     * Checks a user’s Account Activity subscription for a given webhook.
  
  
     * @param webhookId The webhook ID to check subscription against.
  
  
  
  
     * @returns {Promise<ValidateSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    validateSubscription(webhookId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    validateSubscription(webhookId: string): Promise<ValidateSubscriptionResponse>;
    /**
     * Create subscription
     * Creates an Account Activity subscription for the user and the given webhook.
  
  
     * @param webhookId The webhook ID to check subscription against.
  
  
  
  
     * @returns {Promise<CreateSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createSubscription(webhookId: string, options: CreateSubscriptionOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createSubscription(webhookId: string, options?: CreateSubscriptionOptions$1): Promise<CreateSubscriptionResponse$1>;
    /**
     * Create replay job
     * Creates a replay job to retrieve activities from up to the past 5 days for all subscriptions associated with a given webhook.
  
  
     * @param webhookId The unique identifier for the webhook configuration.
  
  
  
  
     * @param fromDate The oldest (starting) UTC timestamp (inclusive) from which events will be provided, in `yyyymmddhhmm` format.
  
  
  
     * @param toDate The latest (ending) UTC timestamp (exclusive) up to which events will be provided, in `yyyymmddhhmm` format.
  
  
  
     * @returns {Promise<CreateReplayJobResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createReplayJob(webhookId: string, fromDate: string, toDate: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createReplayJob(webhookId: string, fromDate: string, toDate: string): Promise<CreateReplayJobResponse>;
    /**
     * Get subscription count
     * Retrieves a count of currently active Account Activity subscriptions.
  
  
  
     * @returns {Promise<GetSubscriptionCountResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getSubscriptionCount(options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getSubscriptionCount(): Promise<GetSubscriptionCountResponse>;
}

/**
 * Models for community notes operations
 */

/**
 * Response for searchEligiblePosts
 *
 * @public
 */
type SearchEligiblePostsResponse = Get2NotesSearchPostsEligibleForNotesResponse;
/**
 * Request for evaluate
 *
 * @public
 */
type EvaluateRequest = EvaluateNoteRequest;
/**
 * Response for evaluate
 *
 * @public
 */
type EvaluateResponse = EvaluateNoteResponse;
/**
 * Response for searchWritten
 *
 * @public
 */
type SearchWrittenResponse = Get2NotesSearchNotesWrittenResponse;
/**
 * Response for delete
 *
 * @public
 */
type DeleteResponse$3 = DeleteNoteResponse;
/**
 * Request for create
 *
 * @public
 */
type CreateRequest$3 = CreateNoteRequest;
/**
 * Response for create
 *
 * @public
 */
type CreateResponse$3 = CreateNoteResponse;

type models$f_EvaluateRequest = EvaluateRequest;
type models$f_EvaluateResponse = EvaluateResponse;
type models$f_SearchEligiblePostsResponse = SearchEligiblePostsResponse;
type models$f_SearchWrittenResponse = SearchWrittenResponse;
declare namespace models$f {
  export {
    CreateRequest$3 as CreateRequest,
    CreateResponse$3 as CreateResponse,
    DeleteResponse$3 as DeleteResponse,
    models$f_EvaluateRequest as EvaluateRequest,
    models$f_EvaluateResponse as EvaluateResponse,
    models$f_SearchEligiblePostsResponse as SearchEligiblePostsResponse,
    models$f_SearchWrittenResponse as SearchWrittenResponse,
  };
}

/**
 * community notes client for the X API.
 *
 * This module provides a client for interacting with the community notes endpoints of the X API.
 */

/**
 * Options for searchEligiblePosts method
 *
 * @public
 */
interface SearchEligiblePostsOptions {
    /** Pagination token to get next set of posts eligible for notes.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Max results to return.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** The selection of posts to return. Valid values are 'feed_size: small' and 'feed_size: large'. Default is 'feed_size: small', only top AI writers have access to large size feed.
     * Also accepts: post_selection or proper camelCase (e.g., postSelection) */
    postSelection?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for evaluate method
 *
 * @public
 */
interface EvaluateOptions {
    /** Request body */
    body?: EvaluateRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for searchWritten method
 *
 * @public
 */
interface SearchWrittenOptions {
    /** Pagination token to get next set of posts eligible for notes.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Max results to return.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A comma separated list of Note fields to display.
     * Also accepts: note.fields or proper camelCase (e.g., noteFields) */
    noteFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for create method
 *
 * @public
 */
interface CreateOptions$2 {
    /** Request body */
    body?: CreateRequest$3;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for community notes operations
 *
 * This client provides methods for interacting with the community notes endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all community notes related operations.
 *
 * @category community notes
 */
declare class CommunityNotesClient {
    private client;
    /**
     * Creates a new community notes client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Search for Posts Eligible for Community Notes
     * Returns all the posts that are eligible for community notes.
  
  
  
     * @param testMode If true, return a list of posts that are for the test. If false, return a list of posts that the bots can write proposed notes on the product.
  
  
  
     * @returns {Promise<SearchEligiblePostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    searchEligiblePosts(testMode: boolean, options: SearchEligiblePostsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    searchEligiblePosts(testMode: boolean, options?: SearchEligiblePostsOptions): Promise<SearchEligiblePostsResponse>;
    /**
     * Evaluate a Community Note
     * Endpoint to evaluate a community note.
  
  
  
     * @returns {Promise<EvaluateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    evaluate(options: EvaluateOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    evaluate(options?: EvaluateOptions): Promise<EvaluateResponse>;
    /**
     * Search for Community Notes Written
     * Returns all the community notes written by the user.
  
  
  
     * @param testMode If true, return the notes the caller wrote for the test. If false, return the notes the caller wrote on the product.
  
  
  
     * @returns {Promise<SearchWrittenResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    searchWritten(testMode: boolean, options: SearchWrittenOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    searchWritten(testMode: boolean, options?: SearchWrittenOptions): Promise<SearchWrittenResponse>;
    /**
     * Delete a Community Note
     * Deletes a community note.
  
  
     * @param id The community note id to delete.
  
  
  
  
     * @returns {Promise<DeleteResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    delete(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    delete(id: string): Promise<DeleteResponse$3>;
    /**
     * Create a Community Note
     * Creates a community note endpoint for LLM use case.
  
  
  
     * @returns {Promise<CreateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    create(options: CreateOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    create(options?: CreateOptions$2): Promise<CreateResponse$3>;
}

/**
 * Models for compliance operations
 */

/**
 * Response for getJobsById
 *
 * @public
 */
type GetJobsByIdResponse = Get2ComplianceJobsIdResponse;
/**
 * Response for getJobs
 *
 * @public
 */
type GetJobsResponse = Get2ComplianceJobsResponse;
/**
 * Request for createJobs
 *
 * @public
 */
type CreateJobsRequest = CreateComplianceJobRequest;
/**
 * Response for createJobs
 *
 * @public
 */
type CreateJobsResponse = CreateComplianceJobResponse;

type models$e_CreateJobsRequest = CreateJobsRequest;
type models$e_CreateJobsResponse = CreateJobsResponse;
type models$e_GetJobsByIdResponse = GetJobsByIdResponse;
type models$e_GetJobsResponse = GetJobsResponse;
declare namespace models$e {
  export {
    models$e_CreateJobsRequest as CreateJobsRequest,
    models$e_CreateJobsResponse as CreateJobsResponse,
    models$e_GetJobsByIdResponse as GetJobsByIdResponse,
    models$e_GetJobsResponse as GetJobsResponse,
  };
}

/**
 * compliance client for the X API.
 *
 * This module provides a client for interacting with the compliance endpoints of the X API.
 */

/**
 * Options for getJobsById method
 *
 * @public
 */
interface GetJobsByIdOptions {
    /** A comma separated list of ComplianceJob fields to display.
     * Also accepts: compliance_job.fields or proper camelCase (e.g., complianceJobFields) */
    complianceJobFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getJobs method
 *
 * @public
 */
interface GetJobsOptions {
    /** Status of Compliance Job to list.
     * Also accepts: status or proper camelCase (e.g., status) */
    status?: string;
    /** A comma separated list of ComplianceJob fields to display.
     * Also accepts: compliance_job.fields or proper camelCase (e.g., complianceJobFields) */
    complianceJobFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for compliance operations
 *
 * This client provides methods for interacting with the compliance endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all compliance related operations.
 *
 * @category compliance
 */
declare class ComplianceClient {
    private client;
    /**
     * Creates a new compliance client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get Compliance Job by ID
     * Retrieves details of a specific Compliance Job by its ID.
  
  
     * @param id The ID of the Compliance Job to retrieve.
  
  
  
  
     * @returns {Promise<GetJobsByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getJobsById(id: string, options: GetJobsByIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getJobsById(id: string, options?: GetJobsByIdOptions): Promise<GetJobsByIdResponse>;
    /**
     * Get Compliance Jobs
     * Retrieves a list of Compliance Jobs filtered by job type and optional status.
  
  
  
     * @param type Type of Compliance Job to list.
  
  
  
     * @returns {Promise<GetJobsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getJobs(type: string, options: GetJobsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getJobs(type: string, options?: GetJobsOptions): Promise<GetJobsResponse>;
    /**
     * Create Compliance Job
     * Creates a new Compliance Job for the specified job type.
  
  
  
     * @param body A request to create a new batch compliance job.
  
     * @returns {Promise<CreateJobsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createJobs(body: CreateJobsRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createJobs(body: CreateJobsRequest): Promise<CreateJobsResponse>;
}

/**
 * Models for connections operations
 */

/**
 * Response for getConnectionHistory
 *
 * @public
 */
type GetConnectionHistoryResponse = Get2ConnectionsResponse;
/**
 * Response for deleteAll
 *
 * @public
 */
type DeleteAllResponse = KillAllConnectionsResponse;

type models$d_DeleteAllResponse = DeleteAllResponse;
type models$d_GetConnectionHistoryResponse = GetConnectionHistoryResponse;
declare namespace models$d {
  export {
    models$d_DeleteAllResponse as DeleteAllResponse,
    models$d_GetConnectionHistoryResponse as GetConnectionHistoryResponse,
  };
}

/**
 * connections client for the X API.
 *
 * This module provides a client for interacting with the connections endpoints of the X API.
 */

/**
 * Options for getConnectionHistory method
 *
 * @public
 */
interface GetConnectionHistoryOptions {
    /** Filter by connection status. Use 'active' for current connections, 'inactive' for historical/disconnected connections, or 'all' for both.
     * Also accepts: status or proper camelCase (e.g., status) */
    status?: string;
    /** Filter by streaming endpoint. Specify one or more endpoint names to filter results.
     * Also accepts: endpoints or proper camelCase (e.g., endpoints) */
    endpoints?: Array<any>;
    /** The maximum number of results to return per page.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** Token for paginating through results. Use the value from 'next_token' in the previous response.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Connection fields to display.
     * Also accepts: connection.fields or proper camelCase (e.g., connectionFields) */
    connectionFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for connections operations
 *
 * This client provides methods for interacting with the connections endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all connections related operations.
 *
 * @category connections
 */
declare class ConnectionsClient {
    private client;
    /**
     * Creates a new connections client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get Connection History
     * Returns active and historical streaming connections with disconnect reasons for the authenticated application.
  
  
  
     * @returns {Promise<GetConnectionHistoryResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getConnectionHistory(options: GetConnectionHistoryOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getConnectionHistory(options?: GetConnectionHistoryOptions): Promise<GetConnectionHistoryResponse>;
    /**
     * Terminate all connections
     * Terminates all active streaming connections for the authenticated application.
  
  
  
     * @returns {Promise<DeleteAllResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteAll(options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteAll(): Promise<DeleteAllResponse>;
}

/**
 * Models for users operations
 */

/**
 * Response for getByUsernames
 *
 * @public
 */
type GetByUsernamesResponse = Get2UsersByResponse;
/**
 * Response for getRepostsOfMe
 *
 * @public
 */
type GetRepostsOfMeResponse = Get2UsersRepostsOfMeResponse;
/**
 * Response for unlikePost
 *
 * @public
 */
type UnlikePostResponse = UsersLikesDeleteResponse;
/**
 * Response for getBookmarks
 *
 * @public
 */
type GetBookmarksResponse = Get2UsersIdBookmarksResponse;
/**
 * Request for createBookmark
 *
 * @public
 */
type CreateBookmarkRequest = BookmarkAddRequest;
/**
 * Response for createBookmark
 *
 * @public
 */
type CreateBookmarkResponse = BookmarkMutationResponse;
/**
 * Response for getFollowers
 *
 * @public
 */
type GetFollowersResponse$1 = Get2UsersIdFollowersResponse;
/**
 * Response for unpinList
 *
 * @public
 */
type UnpinListResponse = ListUnpinResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse$4 = Get2UsersIdResponse;
/**
 * Response for getMentions
 *
 * @public
 */
type GetMentionsResponse = Get2UsersIdMentionsResponse;
/**
 * Response for unrepostPost
 *
 * @public
 */
type UnrepostPostResponse = UsersRetweetsDeleteResponse;
/**
 * Response for deleteBookmark
 *
 * @public
 */
type DeleteBookmarkResponse = BookmarkMutationResponse;
/**
 * Response for unfollowList
 *
 * @public
 */
type UnfollowListResponse = ListFollowedResponse;
/**
 * Response for unmuteUser
 *
 * @public
 */
type UnmuteUserResponse = MuteUserMutationResponse;
/**
 * Response for getMe
 *
 * @public
 */
type GetMeResponse = Get2UsersMeResponse;
/**
 * Response for getMuting
 *
 * @public
 */
type GetMutingResponse = Get2UsersIdMutingResponse;

/**
 * Response for muteUser
 *
 * @public
 */
type MuteUserResponse = MuteUserMutationResponse;
/**
 * Response for search
 *
 * @public
 */
type SearchResponse$3 = Get2UsersSearchResponse;
/**
 * Response for getBlocking
 *
 * @public
 */
type GetBlockingResponse = Get2UsersIdBlockingResponse;
/**
 * Response for getByIds
 *
 * @public
 */
type GetByIdsResponse$2 = Get2UsersResponse;
/**
 * Response for getFollowing
 *
 * @public
 */
type GetFollowingResponse = Get2UsersIdFollowingResponse;
/**
 * Request for followUser
 *
 * @public
 */
type FollowUserRequest = UsersFollowingCreateRequest;
/**
 * Response for followUser
 *
 * @public
 */
type FollowUserResponse = UsersFollowingCreateResponse;
/**
 * Request for likePost
 *
 * @public
 */
type LikePostRequest = UsersLikesCreateRequest;
/**
 * Response for likePost
 *
 * @public
 */
type LikePostResponse = UsersLikesCreateResponse;
/**
 * Response for getLikedPosts
 *
 * @public
 */
type GetLikedPostsResponse = Get2UsersIdLikedTweetsResponse;
/**
 * Response for getPosts
 *
 * @public
 */
type GetPostsResponse$2 = Get2UsersIdTweetsResponse;
/**
 * Response for blockDms
 *
 * @public
 */
type BlockDmsResponse = UsersDMBlockCreateResponse;
/**
 * Response for getListMemberships
 *
 * @public
 */
type GetListMembershipsResponse = Get2UsersIdListMembershipsResponse;
/**
 * Response for getPinnedLists
 *
 * @public
 */
type GetPinnedListsResponse = Get2UsersIdPinnedListsResponse;
/**
 * Request for pinList
 *
 * @public
 */
type PinListRequest = ListPinnedRequest;
/**
 * Response for pinList
 *
 * @public
 */
type PinListResponse = ListPinnedResponse;
/**
 * Response for getByUsername
 *
 * @public
 */
type GetByUsernameResponse = Get2UsersByUsernameUsernameResponse;
/**
 * Response for unfollowUser
 *
 * @public
 */
type UnfollowUserResponse = UsersFollowingDeleteResponse;
/**
 * Response for getTimeline
 *
 * @public
 */
type GetTimelineResponse = Get2UsersIdTimelinesReverseChronologicalResponse;
/**
 * Response for getFollowedLists
 *
 * @public
 */
type GetFollowedListsResponse = Get2UsersIdFollowedListsResponse;
/**
 * Request for followList
 *
 * @public
 */
type FollowListRequest = ListFollowedRequest;
/**
 * Response for followList
 *
 * @public
 */
type FollowListResponse = ListFollowedResponse;
/**
 * Response for unblockDms
 *
 * @public
 */
type UnblockDmsResponse = UsersDMUnBlockCreateResponse;
/**
 * Request for repostPost
 *
 * @public
 */
type RepostPostRequest = UsersRetweetsCreateRequest;
/**
 * Response for repostPost
 *
 * @public
 */
type RepostPostResponse = UsersRetweetsCreateResponse;
/**
 * Response for getBookmarkFolders
 *
 * @public
 */
type GetBookmarkFoldersResponse = BookmarkFoldersResponse;
/**
 * Response for getOwnedLists
 *
 * @public
 */
type GetOwnedListsResponse = Get2UsersIdOwnedListsResponse;
/**
 * Response for getBookmarksByFolderId
 *
 * @public
 */
type GetBookmarksByFolderIdResponse = BookmarkFolderPostsResponse;

type models$c_BlockDmsResponse = BlockDmsResponse;
type models$c_CreateBookmarkRequest = CreateBookmarkRequest;
type models$c_CreateBookmarkResponse = CreateBookmarkResponse;
type models$c_DeleteBookmarkResponse = DeleteBookmarkResponse;
type models$c_FollowListRequest = FollowListRequest;
type models$c_FollowListResponse = FollowListResponse;
type models$c_FollowUserRequest = FollowUserRequest;
type models$c_FollowUserResponse = FollowUserResponse;
type models$c_GetBlockingResponse = GetBlockingResponse;
type models$c_GetBookmarkFoldersResponse = GetBookmarkFoldersResponse;
type models$c_GetBookmarksByFolderIdResponse = GetBookmarksByFolderIdResponse;
type models$c_GetBookmarksResponse = GetBookmarksResponse;
type models$c_GetByUsernameResponse = GetByUsernameResponse;
type models$c_GetByUsernamesResponse = GetByUsernamesResponse;
type models$c_GetFollowedListsResponse = GetFollowedListsResponse;
type models$c_GetFollowingResponse = GetFollowingResponse;
type models$c_GetLikedPostsResponse = GetLikedPostsResponse;
type models$c_GetListMembershipsResponse = GetListMembershipsResponse;
type models$c_GetMeResponse = GetMeResponse;
type models$c_GetMentionsResponse = GetMentionsResponse;
type models$c_GetMutingResponse = GetMutingResponse;
type models$c_GetOwnedListsResponse = GetOwnedListsResponse;
type models$c_GetPinnedListsResponse = GetPinnedListsResponse;
type models$c_GetRepostsOfMeResponse = GetRepostsOfMeResponse;
type models$c_GetTimelineResponse = GetTimelineResponse;
type models$c_LikePostRequest = LikePostRequest;
type models$c_LikePostResponse = LikePostResponse;
type models$c_MuteUserRequest = MuteUserRequest;
type models$c_MuteUserResponse = MuteUserResponse;
type models$c_PinListRequest = PinListRequest;
type models$c_PinListResponse = PinListResponse;
type models$c_RepostPostRequest = RepostPostRequest;
type models$c_RepostPostResponse = RepostPostResponse;
type models$c_UnblockDmsResponse = UnblockDmsResponse;
type models$c_UnfollowListResponse = UnfollowListResponse;
type models$c_UnfollowUserResponse = UnfollowUserResponse;
type models$c_UnlikePostResponse = UnlikePostResponse;
type models$c_UnmuteUserResponse = UnmuteUserResponse;
type models$c_UnpinListResponse = UnpinListResponse;
type models$c_UnrepostPostResponse = UnrepostPostResponse;
declare namespace models$c {
  export {
    models$c_BlockDmsResponse as BlockDmsResponse,
    models$c_CreateBookmarkRequest as CreateBookmarkRequest,
    models$c_CreateBookmarkResponse as CreateBookmarkResponse,
    models$c_DeleteBookmarkResponse as DeleteBookmarkResponse,
    models$c_FollowListRequest as FollowListRequest,
    models$c_FollowListResponse as FollowListResponse,
    models$c_FollowUserRequest as FollowUserRequest,
    models$c_FollowUserResponse as FollowUserResponse,
    models$c_GetBlockingResponse as GetBlockingResponse,
    models$c_GetBookmarkFoldersResponse as GetBookmarkFoldersResponse,
    models$c_GetBookmarksByFolderIdResponse as GetBookmarksByFolderIdResponse,
    models$c_GetBookmarksResponse as GetBookmarksResponse,
    GetByIdResponse$4 as GetByIdResponse,
    GetByIdsResponse$2 as GetByIdsResponse,
    models$c_GetByUsernameResponse as GetByUsernameResponse,
    models$c_GetByUsernamesResponse as GetByUsernamesResponse,
    models$c_GetFollowedListsResponse as GetFollowedListsResponse,
    GetFollowersResponse$1 as GetFollowersResponse,
    models$c_GetFollowingResponse as GetFollowingResponse,
    models$c_GetLikedPostsResponse as GetLikedPostsResponse,
    models$c_GetListMembershipsResponse as GetListMembershipsResponse,
    models$c_GetMeResponse as GetMeResponse,
    models$c_GetMentionsResponse as GetMentionsResponse,
    models$c_GetMutingResponse as GetMutingResponse,
    models$c_GetOwnedListsResponse as GetOwnedListsResponse,
    models$c_GetPinnedListsResponse as GetPinnedListsResponse,
    GetPostsResponse$2 as GetPostsResponse,
    models$c_GetRepostsOfMeResponse as GetRepostsOfMeResponse,
    models$c_GetTimelineResponse as GetTimelineResponse,
    models$c_LikePostRequest as LikePostRequest,
    models$c_LikePostResponse as LikePostResponse,
    models$c_MuteUserRequest as MuteUserRequest,
    models$c_MuteUserResponse as MuteUserResponse,
    models$c_PinListRequest as PinListRequest,
    models$c_PinListResponse as PinListResponse,
    models$c_RepostPostRequest as RepostPostRequest,
    models$c_RepostPostResponse as RepostPostResponse,
    SearchResponse$3 as SearchResponse,
    models$c_UnblockDmsResponse as UnblockDmsResponse,
    models$c_UnfollowListResponse as UnfollowListResponse,
    models$c_UnfollowUserResponse as UnfollowUserResponse,
    models$c_UnlikePostResponse as UnlikePostResponse,
    models$c_UnmuteUserResponse as UnmuteUserResponse,
    models$c_UnpinListResponse as UnpinListResponse,
    models$c_UnrepostPostResponse as UnrepostPostResponse,
  };
}

/**
 * users client for the X API.
 *
 * This module provides a client for interacting with the users endpoints of the X API.
 */

/**
 * Options for getByUsernames method
 *
 * @public
 */
interface GetByUsernamesOptions {
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getRepostsOfMe method
 *
 * @public
 */
interface GetRepostsOfMeOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getBookmarks method
 *
 * @public
 */
interface GetBookmarksOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getFollowers method
 *
 * @public
 */
interface GetFollowersOptions$1 {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getById method
 *
 * @public
 */
interface GetByIdOptions$4 {
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getMentions method
 *
 * @public
 */
interface GetMentionsOptions {
    /** The minimum Post ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** The maximum Post ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided. The since_id parameter takes precedence if it is also specified.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided. The until_id parameter takes precedence if it is also specified.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getMe method
 *
 * @public
 */
interface GetMeOptions {
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getMuting method
 *
 * @public
 */
interface GetMutingOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for muteUser method
 *
 * @public
 */
interface MuteUserOptions {
    /** Request body */
    body?: MuteUserRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for search method
 *
 * @public
 */
interface SearchOptions$3 {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getBlocking method
 *
 * @public
 */
interface GetBlockingOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getByIds method
 *
 * @public
 */
interface GetByIdsOptions$2 {
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getFollowing method
 *
 * @public
 */
interface GetFollowingOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for followUser method
 *
 * @public
 */
interface FollowUserOptions {
    /** Request body */
    body?: FollowUserRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for likePost method
 *
 * @public
 */
interface LikePostOptions {
    /** Request body */
    body?: LikePostRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getLikedPosts method
 *
 * @public
 */
interface GetLikedPostsOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getPosts method
 *
 * @public
 */
interface GetPostsOptions$2 {
    /** The minimum Post ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** The maximum Post ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** The set of entities to exclude (e.g. 'replies' or 'retweets').
     * Also accepts: exclude or proper camelCase (e.g., exclude) */
    exclude?: Array<any>;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided. The since_id parameter takes precedence if it is also specified.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided. The until_id parameter takes precedence if it is also specified.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getListMemberships method
 *
 * @public
 */
interface GetListMembershipsOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of List fields to display.
     * Also accepts: list.fields or proper camelCase (e.g., listFields) */
    listFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getPinnedLists method
 *
 * @public
 */
interface GetPinnedListsOptions {
    /** A comma separated list of List fields to display.
     * Also accepts: list.fields or proper camelCase (e.g., listFields) */
    listFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getByUsername method
 *
 * @public
 */
interface GetByUsernameOptions {
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getTimeline method
 *
 * @public
 */
interface GetTimelineOptions {
    /** The minimum Post ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** The maximum Post ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** The set of entities to exclude (e.g. 'replies' or 'retweets').
     * Also accepts: exclude or proper camelCase (e.g., exclude) */
    exclude?: Array<any>;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided. The since_id parameter takes precedence if it is also specified.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided. The until_id parameter takes precedence if it is also specified.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getFollowedLists method
 *
 * @public
 */
interface GetFollowedListsOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of List fields to display.
     * Also accepts: list.fields or proper camelCase (e.g., listFields) */
    listFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for followList method
 *
 * @public
 */
interface FollowListOptions {
    /** Request body */
    body?: FollowListRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for repostPost method
 *
 * @public
 */
interface RepostPostOptions {
    /** Request body */
    body?: RepostPostRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getBookmarkFolders method
 *
 * @public
 */
interface GetBookmarkFoldersOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getOwnedLists method
 *
 * @public
 */
interface GetOwnedListsOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of List fields to display.
     * Also accepts: list.fields or proper camelCase (e.g., listFields) */
    listFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for users operations
 *
 * This client provides methods for interacting with the users endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all users related operations.
 *
 * @category users
 */
declare class UsersClient {
    private client;
    /**
     * Creates a new users client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get Users by usernames
     * Retrieves details of multiple Users by their usernames.
  
  
  
     * @param usernames A list of usernames, comma-separated.
  
  
  
     * @returns {Promise<GetByUsernamesResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByUsernames(usernames: Array<any>, options: GetByUsernamesOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByUsernames(usernames: Array<any>, options?: GetByUsernamesOptions): Promise<GetByUsernamesResponse>;
    /**
     * Get Reposts of me
     * Retrieves a list of Posts that repost content from the authenticated user.
  
  
  
     * @returns {Promise<GetRepostsOfMeResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getRepostsOfMe(options: GetRepostsOfMeOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getRepostsOfMe(options?: GetRepostsOfMeOptions): Promise<GetRepostsOfMeResponse>;
    /**
     * Unlike Post
     * Causes the authenticated user to Unlike a specific Post by its ID.
  
  
     * @param id The ID of the authenticated source User that is requesting to unlike the Post.
  
  
  
     * @param tweetId The ID of the Post that the User is requesting to unlike.
  
  
  
  
     * @returns {Promise<UnlikePostResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unlikePost(id: string, tweetId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unlikePost(id: string, tweetId: string): Promise<UnlikePostResponse>;
    /**
     * Get Bookmarks
     * Retrieves a list of Posts bookmarked by the authenticated user.
  
  
     * @param id The ID of the authenticated source User for whom to return results.
  
  
  
  
     * @returns {Promise<GetBookmarksResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBookmarks(id: string, options: GetBookmarksOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBookmarks(id: string, options?: GetBookmarksOptions): Promise<GetBookmarksResponse>;
    /**
     * Create Bookmark
     * Adds a post to the authenticated user’s bookmarks.
  
  
     * @param id The ID of the authenticated source User for whom to add bookmarks.
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateBookmarkResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createBookmark(id: string, body: CreateBookmarkRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createBookmark(id: string, body: CreateBookmarkRequest): Promise<CreateBookmarkResponse>;
    /**
     * Get followers
     * Retrieves a list of Users who follow a specific User by their ID.
  
  
     * @param id The ID of the User to lookup.
  
  
  
  
     * @returns {Promise<GetFollowersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getFollowers(id: string, options: GetFollowersOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getFollowers(id: string, options?: GetFollowersOptions$1): Promise<GetFollowersResponse$1>;
    /**
     * Unpin List
     * Causes the authenticated user to unpin a specific List by its ID.
  
  
     * @param id The ID of the authenticated source User for whom to return results.
  
  
  
     * @param listId The ID of the List to unpin.
  
  
  
  
     * @returns {Promise<UnpinListResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unpinList(id: string, listId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unpinList(id: string, listId: string): Promise<UnpinListResponse>;
    /**
     * Get User by ID
     * Retrieves details of a specific User by their ID.
  
  
     * @param id The ID of the User to lookup.
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: string, options: GetByIdOptions$4 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: string, options?: GetByIdOptions$4): Promise<GetByIdResponse$4>;
    /**
     * Get mentions
     * Retrieves a list of Posts that mention a specific User by their ID.
  
  
     * @param id The ID of the User to lookup.
  
  
  
  
     * @returns {Promise<GetMentionsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getMentions(id: string, options: GetMentionsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getMentions(id: string, options?: GetMentionsOptions): Promise<GetMentionsResponse>;
    /**
     * Unrepost Post
     * Causes the authenticated user to unrepost a specific Post by its ID.
  
  
     * @param id The ID of the authenticated source User that is requesting to repost the Post.
  
  
  
     * @param sourceTweetId The ID of the Post that the User is requesting to unretweet.
  
  
  
  
     * @returns {Promise<UnrepostPostResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unrepostPost(id: string, sourceTweetId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unrepostPost(id: string, sourceTweetId: string): Promise<UnrepostPostResponse>;
    /**
     * Delete Bookmark
     * Removes a Post from the authenticated user’s Bookmarks by its ID.
  
  
     * @param id The ID of the authenticated source User whose bookmark is to be removed.
  
  
  
     * @param tweetId The ID of the Post that the source User is removing from bookmarks.
  
  
  
  
     * @returns {Promise<DeleteBookmarkResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteBookmark(id: string, tweetId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteBookmark(id: string, tweetId: string): Promise<DeleteBookmarkResponse>;
    /**
     * Unfollow List
     * Causes the authenticated user to unfollow a specific List by its ID.
  
  
     * @param id The ID of the authenticated source User that will unfollow the List.
  
  
  
     * @param listId The ID of the List to unfollow.
  
  
  
  
     * @returns {Promise<UnfollowListResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unfollowList(id: string, listId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unfollowList(id: string, listId: string): Promise<UnfollowListResponse>;
    /**
     * Unmute User
     * Causes the authenticated user to unmute a specific user by their ID.
  
  
     * @param sourceUserId The ID of the authenticated source User that is requesting to unmute the target User.
  
  
  
     * @param targetUserId The ID of the User that the source User is requesting to unmute.
  
  
  
  
     * @returns {Promise<UnmuteUserResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unmuteUser(sourceUserId: string, targetUserId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unmuteUser(sourceUserId: string, targetUserId: string): Promise<UnmuteUserResponse>;
    /**
     * Get my User
     * Retrieves details of the authenticated user.
  
  
  
     * @returns {Promise<GetMeResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getMe(options: GetMeOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getMe(options?: GetMeOptions): Promise<GetMeResponse>;
    /**
     * Get muting
     * Retrieves a list of Users muted by the authenticated user.
  
  
     * @param id The ID of the authenticated source User for whom to return results.
  
  
  
  
     * @returns {Promise<GetMutingResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getMuting(id: string, options: GetMutingOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getMuting(id: string, options?: GetMutingOptions): Promise<GetMutingResponse>;
    /**
     * Mute User
     * Causes the authenticated user to mute a specific User by their ID.
  
  
     * @param id The ID of the authenticated source User that is requesting to mute the target User.
  
  
  
  
     * @returns {Promise<MuteUserResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    muteUser(id: string, options: MuteUserOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    muteUser(id: string, options?: MuteUserOptions): Promise<MuteUserResponse>;
    /**
     * Search Users
     * Retrieves a list of Users matching a search query.
  
  
  
     * @param query TThe the query string by which to query for users.
  
  
  
     * @returns {Promise<SearchResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    search(query: string, options: SearchOptions$3 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    search(query: string, options?: SearchOptions$3): Promise<SearchResponse$3>;
    /**
     * Get blocking
     * Retrieves a list of Users blocked by the specified User ID.
  
  
     * @param id The ID of the authenticated source User for whom to return results.
  
  
  
  
     * @returns {Promise<GetBlockingResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBlocking(id: string, options: GetBlockingOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBlocking(id: string, options?: GetBlockingOptions): Promise<GetBlockingResponse>;
    /**
     * Get Users by IDs
     * Retrieves details of multiple Users by their IDs.
  
  
  
     * @param ids A list of User IDs, comma-separated. You can specify up to 100 IDs.
  
  
  
     * @returns {Promise<GetByIdsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByIds(ids: Array<any>, options: GetByIdsOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByIds(ids: Array<any>, options?: GetByIdsOptions$2): Promise<GetByIdsResponse$2>;
    /**
     * Get following
     * Retrieves a list of Users followed by a specific User by their ID.
  
  
     * @param id The ID of the User to lookup.
  
  
  
  
     * @returns {Promise<GetFollowingResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getFollowing(id: string, options: GetFollowingOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getFollowing(id: string, options?: GetFollowingOptions): Promise<GetFollowingResponse>;
    /**
     * Follow User
     * Causes the authenticated user to follow a specific user by their ID.
  
  
     * @param id The ID of the authenticated source User that is requesting to follow the target User.
  
  
  
  
     * @returns {Promise<FollowUserResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    followUser(id: string, options: FollowUserOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    followUser(id: string, options?: FollowUserOptions): Promise<FollowUserResponse>;
    /**
     * Like Post
     * Causes the authenticated user to Like a specific Post by its ID.
  
  
     * @param id The ID of the authenticated source User that is requesting to like the Post.
  
  
  
  
     * @returns {Promise<LikePostResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    likePost(id: string, options: LikePostOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    likePost(id: string, options?: LikePostOptions): Promise<LikePostResponse>;
    /**
     * Get liked Posts
     * Retrieves a list of Posts liked by a specific User by their ID.
  
  
     * @param id The ID of the User to lookup.
  
  
  
  
     * @returns {Promise<GetLikedPostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getLikedPosts(id: string, options: GetLikedPostsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getLikedPosts(id: string, options?: GetLikedPostsOptions): Promise<GetLikedPostsResponse>;
    /**
     * Get Posts
     * Retrieves a list of posts authored by a specific User by their ID.
  
  
     * @param id The ID of the User to lookup.
  
  
  
  
     * @returns {Promise<GetPostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPosts(id: string, options: GetPostsOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPosts(id: string, options?: GetPostsOptions$2): Promise<GetPostsResponse$2>;
    /**
     * Block DMs
     * Blocks direct messages to or from a specific User by their ID for the authenticated user.
  
  
     * @param id The ID of the target User that the authenticated user requesting to block dms for.
  
  
  
  
     * @returns {Promise<BlockDmsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    blockDms(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    blockDms(id: string): Promise<BlockDmsResponse>;
    /**
     * Get List memberships
     * Retrieves a list of Lists that a specific User is a member of by their ID.
  
  
     * @param id The ID of the User to lookup.
  
  
  
  
     * @returns {Promise<GetListMembershipsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getListMemberships(id: string, options: GetListMembershipsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getListMemberships(id: string, options?: GetListMembershipsOptions): Promise<GetListMembershipsResponse>;
    /**
     * Get pinned Lists
     * Retrieves a list of Lists pinned by the authenticated user.
  
  
     * @param id The ID of the authenticated source User for whom to return results.
  
  
  
  
     * @returns {Promise<GetPinnedListsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPinnedLists(id: string, options: GetPinnedListsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPinnedLists(id: string, options?: GetPinnedListsOptions): Promise<GetPinnedListsResponse>;
    /**
     * Pin List
     * Causes the authenticated user to pin a specific List by its ID.
  
  
     * @param id The ID of the authenticated source User that will pin the List.
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<PinListResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    pinList(id: string, body: PinListRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    pinList(id: string, body: PinListRequest): Promise<PinListResponse>;
    /**
     * Get User by username
     * Retrieves details of a specific User by their username.
  
  
     * @param username A username.
  
  
  
  
     * @returns {Promise<GetByUsernameResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByUsername(username: string, options: GetByUsernameOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByUsername(username: string, options?: GetByUsernameOptions): Promise<GetByUsernameResponse>;
    /**
     * Unfollow User
     * Causes the authenticated user to unfollow a specific user by their ID.
  
  
     * @param sourceUserId The ID of the authenticated source User that is requesting to unfollow the target User.
  
  
  
     * @param targetUserId The ID of the User that the source User is requesting to unfollow.
  
  
  
  
     * @returns {Promise<UnfollowUserResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unfollowUser(sourceUserId: string, targetUserId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unfollowUser(sourceUserId: string, targetUserId: string): Promise<UnfollowUserResponse>;
    /**
     * Get Timeline
     * Retrieves a reverse chronological list of Posts in the authenticated User’s Timeline.
  
  
     * @param id The ID of the authenticated source User to list Reverse Chronological Timeline Posts of.
  
  
  
  
     * @returns {Promise<GetTimelineResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getTimeline(id: string, options: GetTimelineOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getTimeline(id: string, options?: GetTimelineOptions): Promise<GetTimelineResponse>;
    /**
     * Get followed Lists
     * Retrieves a list of Lists followed by a specific User by their ID.
  
  
     * @param id The ID of the User to lookup.
  
  
  
  
     * @returns {Promise<GetFollowedListsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getFollowedLists(id: string, options: GetFollowedListsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getFollowedLists(id: string, options?: GetFollowedListsOptions): Promise<GetFollowedListsResponse>;
    /**
     * Follow List
     * Causes the authenticated user to follow a specific List by its ID.
  
  
     * @param id The ID of the authenticated source User that will follow the List.
  
  
  
  
     * @returns {Promise<FollowListResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    followList(id: string, options: FollowListOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    followList(id: string, options?: FollowListOptions): Promise<FollowListResponse>;
    /**
     * Unblock DMs
     * Unblocks direct messages to or from a specific User by their ID for the authenticated user.
  
  
     * @param id The ID of the target User that the authenticated user requesting to unblock dms for.
  
  
  
  
     * @returns {Promise<UnblockDmsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unblockDms(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unblockDms(id: string): Promise<UnblockDmsResponse>;
    /**
     * Repost Post
     * Causes the authenticated user to repost a specific Post by its ID.
  
  
     * @param id The ID of the authenticated source User that is requesting to repost the Post.
  
  
  
  
     * @returns {Promise<RepostPostResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    repostPost(id: string, options: RepostPostOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    repostPost(id: string, options?: RepostPostOptions): Promise<RepostPostResponse>;
    /**
     * Get Bookmark folders
     * Retrieves a list of Bookmark folders created by the authenticated user.
  
  
     * @param id The ID of the authenticated source User for whom to return results.
  
  
  
  
     * @returns {Promise<GetBookmarkFoldersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBookmarkFolders(id: string, options: GetBookmarkFoldersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBookmarkFolders(id: string, options?: GetBookmarkFoldersOptions): Promise<GetBookmarkFoldersResponse>;
    /**
     * Get owned Lists
     * Retrieves a list of Lists owned by a specific User by their ID.
  
  
     * @param id The ID of the User to lookup.
  
  
  
  
     * @returns {Promise<GetOwnedListsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getOwnedLists(id: string, options: GetOwnedListsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getOwnedLists(id: string, options?: GetOwnedListsOptions): Promise<GetOwnedListsResponse>;
    /**
     * Get Bookmarks by folder ID
     * Retrieves Posts in a specific Bookmark folder by its ID for the authenticated user.
  
  
     * @param id The ID of the authenticated source User for whom to return results.
  
  
  
     * @param folderId The ID of the Bookmark Folder that the authenticated User is trying to fetch Posts for.
  
  
  
  
     * @returns {Promise<GetBookmarksByFolderIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBookmarksByFolderId(id: string, folderId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBookmarksByFolderId(id: string, folderId: string): Promise<GetBookmarksByFolderIdResponse>;
}

/**
 * Models for news operations
 */

/**
 * Response for get
 *
 * @public
 */
type GetResponse$2 = Get2NewsIdResponse;
/**
 * Response for search
 *
 * @public
 */
type SearchResponse$2 = Get2NewsSearchResponse;

declare namespace models$b {
  export {
    GetResponse$2 as GetResponse,
    SearchResponse$2 as SearchResponse,
  };
}

/**
 * news client for the X API.
 *
 * This module provides a client for interacting with the news endpoints of the X API.
 */

/**
 * Options for get method
 *
 * @public
 */
interface GetOptions$2 {
    /** A comma separated list of News fields to display.
     * Also accepts: news.fields or proper camelCase (e.g., newsFields) */
    newsFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for search method
 *
 * @public
 */
interface SearchOptions$2 {
    /** The number of results to return.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** The maximum age of the News story to search for.
     * Also accepts: max_age_hours or proper camelCase (e.g., maxAgeHours) */
    maxAgeHours?: number;
    /** A comma separated list of News fields to display.
     * Also accepts: news.fields or proper camelCase (e.g., newsFields) */
    newsFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for news operations
 *
 * This client provides methods for interacting with the news endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all news related operations.
 *
 * @category news
 */
declare class NewsClient {
    private client;
    /**
     * Creates a new news client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get news stories by ID
     * Retrieves news story by its ID.
  
  
     * @param id The ID of the news story.
  
  
  
  
     * @returns {Promise<GetResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    get(id: string, options: GetOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    get(id: string, options?: GetOptions$2): Promise<GetResponse$2>;
    /**
     * Search News
     * Retrieves a list of News stories matching the specified search query.
  
  
  
     * @param query The search query.
  
  
  
     * @returns {Promise<SearchResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    search(query: string, options: SearchOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    search(query: string, options?: SearchOptions$2): Promise<SearchResponse$2>;
}

/**
 * Models for spaces operations
 */

/**
 * Response for getByIds
 *
 * @public
 */
type GetByIdsResponse$1 = Get2SpacesResponse;
/**
 * Response for getPosts
 *
 * @public
 */
type GetPostsResponse$1 = Get2SpacesIdTweetsResponse;
/**
 * Response for search
 *
 * @public
 */
type SearchResponse$1 = Get2SpacesSearchResponse;
/**
 * Response for getBuyers
 *
 * @public
 */
type GetBuyersResponse = Get2SpacesIdBuyersResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse$3 = Get2SpacesIdResponse;
/**
 * Response for getByCreatorIds
 *
 * @public
 */
type GetByCreatorIdsResponse = Get2SpacesByCreatorIdsResponse;

type models$a_GetBuyersResponse = GetBuyersResponse;
type models$a_GetByCreatorIdsResponse = GetByCreatorIdsResponse;
declare namespace models$a {
  export {
    models$a_GetBuyersResponse as GetBuyersResponse,
    models$a_GetByCreatorIdsResponse as GetByCreatorIdsResponse,
    GetByIdResponse$3 as GetByIdResponse,
    GetByIdsResponse$1 as GetByIdsResponse,
    GetPostsResponse$1 as GetPostsResponse,
    SearchResponse$1 as SearchResponse,
  };
}

/**
 * spaces client for the X API.
 *
 * This module provides a client for interacting with the spaces endpoints of the X API.
 */

/**
 * Options for getByIds method
 *
 * @public
 */
interface GetByIdsOptions$1 {
    /** A comma separated list of Space fields to display.
     * Also accepts: space.fields or proper camelCase (e.g., spaceFields) */
    spaceFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Topic fields to display.
     * Also accepts: topic.fields or proper camelCase (e.g., topicFields) */
    topicFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getPosts method
 *
 * @public
 */
interface GetPostsOptions$1 {
    /** The number of Posts to fetch from the provided space. If not provided, the value will default to the maximum of 100.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for search method
 *
 * @public
 */
interface SearchOptions$1 {
    /** The state of Spaces to search for.
     * Also accepts: state or proper camelCase (e.g., state) */
    state?: string;
    /** The number of results to return.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A comma separated list of Space fields to display.
     * Also accepts: space.fields or proper camelCase (e.g., spaceFields) */
    spaceFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Topic fields to display.
     * Also accepts: topic.fields or proper camelCase (e.g., topicFields) */
    topicFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getBuyers method
 *
 * @public
 */
interface GetBuyersOptions {
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getById method
 *
 * @public
 */
interface GetByIdOptions$3 {
    /** A comma separated list of Space fields to display.
     * Also accepts: space.fields or proper camelCase (e.g., spaceFields) */
    spaceFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Topic fields to display.
     * Also accepts: topic.fields or proper camelCase (e.g., topicFields) */
    topicFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getByCreatorIds method
 *
 * @public
 */
interface GetByCreatorIdsOptions {
    /** A comma separated list of Space fields to display.
     * Also accepts: space.fields or proper camelCase (e.g., spaceFields) */
    spaceFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Topic fields to display.
     * Also accepts: topic.fields or proper camelCase (e.g., topicFields) */
    topicFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for spaces operations
 *
 * This client provides methods for interacting with the spaces endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all spaces related operations.
 *
 * @category spaces
 */
declare class SpacesClient {
    private client;
    /**
     * Creates a new spaces client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get Spaces by IDs
     * Retrieves details of multiple Spaces by their IDs.
  
  
  
     * @param ids The list of Space IDs to return.
  
  
  
     * @returns {Promise<GetByIdsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByIds(ids: Array<any>, options: GetByIdsOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByIds(ids: Array<any>, options?: GetByIdsOptions$1): Promise<GetByIdsResponse$1>;
    /**
     * Get Space Posts
     * Retrieves a list of Posts shared in a specific Space by its ID.
  
  
     * @param id The ID of the Space to be retrieved.
  
  
  
  
     * @returns {Promise<GetPostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPosts(id: string, options: GetPostsOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPosts(id: string, options?: GetPostsOptions$1): Promise<GetPostsResponse$1>;
    /**
     * Search Spaces
     * Retrieves a list of Spaces matching the specified search query.
  
  
  
     * @param query The search query.
  
  
  
     * @returns {Promise<SearchResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    search(query: string, options: SearchOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    search(query: string, options?: SearchOptions$1): Promise<SearchResponse$1>;
    /**
     * Get Space ticket buyers
     * Retrieves a list of Users who purchased tickets to a specific Space by its ID.
  
  
     * @param id The ID of the Space to be retrieved.
  
  
  
  
     * @returns {Promise<GetBuyersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBuyers(id: string, options: GetBuyersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBuyers(id: string, options?: GetBuyersOptions): Promise<GetBuyersResponse>;
    /**
     * Get space by ID
     * Retrieves details of a specific space by its ID.
  
  
     * @param id The ID of the Space to be retrieved.
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: string, options: GetByIdOptions$3 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: string, options?: GetByIdOptions$3): Promise<GetByIdResponse$3>;
    /**
     * Get Spaces by creator IDs
     * Retrieves details of Spaces created by specified User IDs.
  
  
  
     * @param userIds The IDs of Users to search through.
  
  
  
     * @returns {Promise<GetByCreatorIdsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByCreatorIds(userIds: Array<any>, options: GetByCreatorIdsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByCreatorIds(userIds: Array<any>, options?: GetByCreatorIdsOptions): Promise<GetByCreatorIdsResponse>;
}

/**
 * Models for activity operations
 */

/**
 * Response for getSubscriptions
 *
 * @public
 */
type GetSubscriptionsResponse = ActivitySubscriptionGetResponse;
/**
 * Request for createSubscription
 *
 * @public
 */
type CreateSubscriptionRequest = ActivitySubscriptionCreateRequest;
/**
 * Response for createSubscription
 *
 * @public
 */
type CreateSubscriptionResponse = ActivitySubscriptionCreateResponse;
/**
 * Response for stream
 *
 * @public
 */
type StreamResponse = ActivityStreamingResponse;
/**
 * Request for updateSubscription
 *
 * @public
 */
type UpdateSubscriptionRequest = ActivitySubscriptionUpdateRequest;
/**
 * Response for updateSubscription
 *
 * @public
 */
type UpdateSubscriptionResponse = ActivitySubscriptionUpdateResponse;
/**
 * Response for deleteSubscription
 *
 * @public
 */
type DeleteSubscriptionResponse = ActivitySubscriptionDeleteResponse;

type models$9_CreateSubscriptionRequest = CreateSubscriptionRequest;
type models$9_CreateSubscriptionResponse = CreateSubscriptionResponse;
type models$9_DeleteSubscriptionResponse = DeleteSubscriptionResponse;
type models$9_GetSubscriptionsResponse = GetSubscriptionsResponse;
type models$9_StreamResponse = StreamResponse;
type models$9_UpdateSubscriptionRequest = UpdateSubscriptionRequest;
type models$9_UpdateSubscriptionResponse = UpdateSubscriptionResponse;
declare namespace models$9 {
  export {
    models$9_CreateSubscriptionRequest as CreateSubscriptionRequest,
    models$9_CreateSubscriptionResponse as CreateSubscriptionResponse,
    models$9_DeleteSubscriptionResponse as DeleteSubscriptionResponse,
    models$9_GetSubscriptionsResponse as GetSubscriptionsResponse,
    models$9_StreamResponse as StreamResponse,
    models$9_UpdateSubscriptionRequest as UpdateSubscriptionRequest,
    models$9_UpdateSubscriptionResponse as UpdateSubscriptionResponse,
  };
}

/**
 * activity client for the X API.
 *
 * This module provides a client for interacting with the activity endpoints of the X API.
 */

/**
 * Options for createSubscription method
 *
 * @public
 */
interface CreateSubscriptionOptions {
    /** Request body */
    body?: CreateSubscriptionRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for stream method
 *
 * @public
 */
interface StreamOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Post labels will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Post labels will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for updateSubscription method
 *
 * @public
 */
interface UpdateSubscriptionOptions {
    /** Request body */
    body?: UpdateSubscriptionRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for activity operations
 *
 * This client provides methods for interacting with the activity endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all activity related operations.
 *
 * @category activity
 */
declare class ActivityClient {
    private client;
    /**
     * Creates a new activity client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get X activity subscriptions
     * Get a list of active subscriptions for XAA
  
  
  
     * @returns {Promise<GetSubscriptionsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getSubscriptions(options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getSubscriptions(): Promise<GetSubscriptionsResponse>;
    /**
     * Create X activity subscription
     * Creates a subscription for an X activity event
  
  
  
     * @returns {Promise<CreateSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createSubscription(options: CreateSubscriptionOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createSubscription(options?: CreateSubscriptionOptions): Promise<CreateSubscriptionResponse>;
    /**
     * Activity Stream
     * Stream of X Activities
  
  
  
     * @returns {Promise<StreamResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    stream(options: StreamOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    stream(options?: StreamOptions): Promise<StreamResponse>;
    /**
     * Update X activity subscription
     * Updates a subscription for an X activity event
  
  
     * @param subscriptionId The ID of the subscription to update.
  
  
  
  
     * @returns {Promise<UpdateSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    updateSubscription(subscriptionId: string, options: UpdateSubscriptionOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    updateSubscription(subscriptionId: string, options?: UpdateSubscriptionOptions): Promise<UpdateSubscriptionResponse>;
    /**
     * Deletes X activity subscription
     * Deletes a subscription for an X activity event
  
  
     * @param subscriptionId The ID of the subscription to delete.
  
  
  
  
     * @returns {Promise<DeleteSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteSubscription(subscriptionId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteSubscription(subscriptionId: string): Promise<DeleteSubscriptionResponse>;
}

/**
 * Models for usage operations
 */

/**
 * Response for get
 *
 * @public
 */
type GetResponse$1 = Get2UsageTweetsResponse;

declare namespace models$8 {
  export {
    GetResponse$1 as GetResponse,
  };
}

/**
 * usage client for the X API.
 *
 * This module provides a client for interacting with the usage endpoints of the X API.
 */

/**
 * Options for get method
 *
 * @public
 */
interface GetOptions$1 {
    /** The number of days for which you need usage for.
     * Also accepts: days or proper camelCase (e.g., days) */
    days?: number;
    /** A comma separated list of Usage fields to display.
     * Also accepts: usage.fields or proper camelCase (e.g., usageFields) */
    usageFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for usage operations
 *
 * This client provides methods for interacting with the usage endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all usage related operations.
 *
 * @category usage
 */
declare class UsageClient {
    private client;
    /**
     * Creates a new usage client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get usage
     * Retrieves usage statistics for Posts over a specified number of days.
  
  
  
     * @returns {Promise<GetResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    get(options: GetOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    get(options?: GetOptions$1): Promise<GetResponse$1>;
}

/**
 * Models for trends operations
 */

/**
 * Response for getByWoeid
 *
 * @public
 */
type GetByWoeidResponse = Get2TrendsByWoeidWoeidResponse;
/**
 * Response for getPersonalized
 *
 * @public
 */
type GetPersonalizedResponse = Get2UsersPersonalizedTrendsResponse;

type models$7_GetByWoeidResponse = GetByWoeidResponse;
type models$7_GetPersonalizedResponse = GetPersonalizedResponse;
declare namespace models$7 {
  export {
    models$7_GetByWoeidResponse as GetByWoeidResponse,
    models$7_GetPersonalizedResponse as GetPersonalizedResponse,
  };
}

/**
 * trends client for the X API.
 *
 * This module provides a client for interacting with the trends endpoints of the X API.
 */

/**
 * Options for getByWoeid method
 *
 * @public
 */
interface GetByWoeidOptions {
    /** The maximum number of results.
     * Also accepts: max_trends or proper camelCase (e.g., maxTrends) */
    maxTrends?: number;
    /** A comma separated list of Trend fields to display.
     * Also accepts: trend.fields or proper camelCase (e.g., trendFields) */
    trendFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getPersonalized method
 *
 * @public
 */
interface GetPersonalizedOptions {
    /** A comma separated list of PersonalizedTrend fields to display.
     * Also accepts: personalized_trend.fields or proper camelCase (e.g., personalizedTrendFields) */
    personalizedTrendFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for trends operations
 *
 * This client provides methods for interacting with the trends endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all trends related operations.
 *
 * @category trends
 */
declare class TrendsClient {
    private client;
    /**
     * Creates a new trends client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get Trends by WOEID
     * Retrieves trending topics for a specific location identified by its WOEID.
  
  
     * @param woeid The WOEID of the place to lookup a trend for.
  
  
  
  
     * @returns {Promise<GetByWoeidResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByWoeid(woeid: number, options: GetByWoeidOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByWoeid(woeid: number, options?: GetByWoeidOptions): Promise<GetByWoeidResponse>;
    /**
     * Get personalized Trends
     * Retrieves personalized trending topics for the authenticated user.
  
  
  
     * @returns {Promise<GetPersonalizedResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPersonalized(options: GetPersonalizedOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPersonalized(options?: GetPersonalizedOptions): Promise<GetPersonalizedResponse>;
}

/**
 * Models for posts operations
 */

/**
 * Response for getInsights28hr
 *
 * @public
 */
type GetInsights28hrResponse = Get2Insights28hrResponse;
/**
 * Response for getAnalytics
 *
 * @public
 */
type GetAnalyticsResponse$1 = Analytics;
/**
 * Response for getReposts
 *
 * @public
 */
type GetRepostsResponse = Get2TweetsIdRetweetsResponse;
/**
 * Response for searchRecent
 *
 * @public
 */
type SearchRecentResponse = Get2TweetsSearchRecentResponse;
/**
 * Response for searchAll
 *
 * @public
 */
type SearchAllResponse = Get2TweetsSearchAllResponse;
/**
 * Response for getByIds
 *
 * @public
 */
type GetByIdsResponse = Get2TweetsResponse;
/**
 * Request for create
 *
 * @public
 */
type CreateRequest$2 = TweetCreateRequest;
/**
 * Response for create
 *
 * @public
 */
type CreateResponse$2 = TweetCreateResponse;
/**
 * Response for getQuoted
 *
 * @public
 */
type GetQuotedResponse = Get2TweetsIdQuoteTweetsResponse;
/**
 * Response for getCountsRecent
 *
 * @public
 */
type GetCountsRecentResponse = Get2TweetsCountsRecentResponse;
/**
 * Request for hideReply
 *
 * @public
 */
type HideReplyRequest = TweetHideRequest;
/**
 * Response for hideReply
 *
 * @public
 */
type HideReplyResponse = TweetHideResponse;
/**
 * Response for getInsightsHistorical
 *
 * @public
 */
type GetInsightsHistoricalResponse = Get2InsightsHistoricalResponse;
/**
 * Response for getCountsAll
 *
 * @public
 */
type GetCountsAllResponse = Get2TweetsCountsAllResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse$2 = Get2TweetsIdResponse;
/**
 * Response for delete
 *
 * @public
 */
type DeleteResponse$2 = TweetDeleteResponse;
/**
 * Response for getLikingUsers
 *
 * @public
 */
type GetLikingUsersResponse = Get2TweetsIdLikingUsersResponse;
/**
 * Response for getRepostedBy
 *
 * @public
 */
type GetRepostedByResponse = Get2TweetsIdRetweetedByResponse;

type models$6_GetByIdsResponse = GetByIdsResponse;
type models$6_GetCountsAllResponse = GetCountsAllResponse;
type models$6_GetCountsRecentResponse = GetCountsRecentResponse;
type models$6_GetInsights28hrResponse = GetInsights28hrResponse;
type models$6_GetInsightsHistoricalResponse = GetInsightsHistoricalResponse;
type models$6_GetLikingUsersResponse = GetLikingUsersResponse;
type models$6_GetQuotedResponse = GetQuotedResponse;
type models$6_GetRepostedByResponse = GetRepostedByResponse;
type models$6_GetRepostsResponse = GetRepostsResponse;
type models$6_HideReplyRequest = HideReplyRequest;
type models$6_HideReplyResponse = HideReplyResponse;
type models$6_SearchAllResponse = SearchAllResponse;
type models$6_SearchRecentResponse = SearchRecentResponse;
declare namespace models$6 {
  export {
    CreateRequest$2 as CreateRequest,
    CreateResponse$2 as CreateResponse,
    DeleteResponse$2 as DeleteResponse,
    GetAnalyticsResponse$1 as GetAnalyticsResponse,
    GetByIdResponse$2 as GetByIdResponse,
    models$6_GetByIdsResponse as GetByIdsResponse,
    models$6_GetCountsAllResponse as GetCountsAllResponse,
    models$6_GetCountsRecentResponse as GetCountsRecentResponse,
    models$6_GetInsights28hrResponse as GetInsights28hrResponse,
    models$6_GetInsightsHistoricalResponse as GetInsightsHistoricalResponse,
    models$6_GetLikingUsersResponse as GetLikingUsersResponse,
    models$6_GetQuotedResponse as GetQuotedResponse,
    models$6_GetRepostedByResponse as GetRepostedByResponse,
    models$6_GetRepostsResponse as GetRepostsResponse,
    models$6_HideReplyRequest as HideReplyRequest,
    models$6_HideReplyResponse as HideReplyResponse,
    models$6_SearchAllResponse as SearchAllResponse,
    models$6_SearchRecentResponse as SearchRecentResponse,
  };
}

/**
 * posts client for the X API.
 *
 * This module provides a client for interacting with the posts endpoints of the X API.
 */

/**
 * Options for getInsights28hr method
 *
 * @public
 */
interface GetInsights28hrOptions {
    /** A comma separated list of Engagement fields to display.
     * Also accepts: engagement.fields or proper camelCase (e.g., engagementFields) */
    engagementFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getAnalytics method
 *
 * @public
 */
interface GetAnalyticsOptions$1 {
    /** A comma separated list of Analytics fields to display.
     * Also accepts: analytics.fields or proper camelCase (e.g., analyticsFields) */
    analyticsFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getReposts method
 *
 * @public
 */
interface GetRepostsOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for searchRecent method
 *
 * @public
 */
interface SearchRecentOptions {
    /** YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Posts will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Posts will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** Returns results with a Post ID greater than (that is, more recent than) the specified ID.
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** Returns results with a Post ID less than (that is, older than) the specified ID.
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** The maximum number of search results to be returned by a request.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** This order in which to return results.
     * Also accepts: sort_order or proper camelCase (e.g., sortOrder) */
    sortOrder?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for searchAll method
 *
 * @public
 */
interface SearchAllOptions {
    /** YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Posts will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Posts will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** Returns results with a Post ID greater than (that is, more recent than) the specified ID.
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** Returns results with a Post ID less than (that is, older than) the specified ID.
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** The maximum number of search results to be returned by a request.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** This order in which to return results.
     * Also accepts: sort_order or proper camelCase (e.g., sortOrder) */
    sortOrder?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getByIds method
 *
 * @public
 */
interface GetByIdsOptions {
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getQuoted method
 *
 * @public
 */
interface GetQuotedOptions {
    /** The maximum number of results to be returned.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** The set of entities to exclude (e.g. 'replies' or 'retweets').
     * Also accepts: exclude or proper camelCase (e.g., exclude) */
    exclude?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getCountsRecent method
 *
 * @public
 */
interface GetCountsRecentOptions {
    /** YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Posts will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Posts will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** Returns results with a Post ID greater than (that is, more recent than) the specified ID.
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** Returns results with a Post ID less than (that is, older than) the specified ID.
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** The granularity for the search counts results.
     * Also accepts: granularity or proper camelCase (e.g., granularity) */
    granularity?: string;
    /** A comma separated list of SearchCount fields to display.
     * Also accepts: search_count.fields or proper camelCase (e.g., searchCountFields) */
    searchCountFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for hideReply method
 *
 * @public
 */
interface HideReplyOptions {
    /** Request body */
    body?: HideReplyRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getInsightsHistorical method
 *
 * @public
 */
interface GetInsightsHistoricalOptions {
    /** A comma separated list of Engagement fields to display.
     * Also accepts: engagement.fields or proper camelCase (e.g., engagementFields) */
    engagementFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getCountsAll method
 *
 * @public
 */
interface GetCountsAllOptions {
    /** YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Posts will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Posts will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** Returns results with a Post ID greater than (that is, more recent than) the specified ID.
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** Returns results with a Post ID less than (that is, older than) the specified ID.
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** The granularity for the search counts results.
     * Also accepts: granularity or proper camelCase (e.g., granularity) */
    granularity?: string;
    /** A comma separated list of SearchCount fields to display.
     * Also accepts: search_count.fields or proper camelCase (e.g., searchCountFields) */
    searchCountFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getById method
 *
 * @public
 */
interface GetByIdOptions$2 {
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getLikingUsers method
 *
 * @public
 */
interface GetLikingUsersOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getRepostedBy method
 *
 * @public
 */
interface GetRepostedByOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for posts operations
 *
 * This client provides methods for interacting with the posts endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all posts related operations.
 *
 * @category posts
 */
declare class PostsClient {
    private client;
    /**
     * Creates a new posts client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get 28-hour Post insights
     * Retrieves engagement metrics for specified Posts over the last 28 hours.
  
  
  
     * @param tweetIds List of PostIds for 28hr metrics.
  
  
  
     * @param granularity granularity of metrics response.
  
  
  
     * @param requestedMetrics request metrics for historical request.
  
  
  
     * @returns {Promise<GetInsights28hrResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getInsights28hr(tweetIds: Array<any>, granularity: string, requestedMetrics: Array<any>, options: GetInsights28hrOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getInsights28hr(tweetIds: Array<any>, granularity: string, requestedMetrics: Array<any>, options?: GetInsights28hrOptions): Promise<GetInsights28hrResponse>;
    /**
     * Get Post analytics
     * Retrieves analytics data for specified Posts within a defined time range.
  
  
  
     * @param ids A comma separated list of Post IDs. Up to 100 are allowed in a single request.
  
  
  
     * @param endTime YYYY-MM-DDTHH:mm:ssZ. The UTC timestamp representing the end of the time range.
  
  
  
     * @param startTime YYYY-MM-DDTHH:mm:ssZ. The UTC timestamp representing the start of the time range.
  
  
  
     * @param granularity The granularity for the search counts results.
  
  
  
     * @returns {Promise<GetAnalyticsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getAnalytics(ids: Array<any>, endTime: string, startTime: string, granularity: string, options: GetAnalyticsOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getAnalytics(ids: Array<any>, endTime: string, startTime: string, granularity: string, options?: GetAnalyticsOptions$1): Promise<GetAnalyticsResponse$1>;
    /**
     * Get Reposts
     * Retrieves a list of Posts that repost a specific Post by its ID.
  
  
     * @param id A single Post ID.
  
  
  
  
     * @returns {Promise<GetRepostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getReposts(id: string, options: GetRepostsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getReposts(id: string, options?: GetRepostsOptions): Promise<GetRepostsResponse>;
    /**
     * Search recent Posts
     * Retrieves Posts from the last 7 days matching a search query.
  
  
  
     * @param query One query/rule/filter for matching Posts. Refer to https://t.co/rulelength to identify the max query length.
  
  
  
     * @returns {Promise<SearchRecentResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    searchRecent(query: string, options: SearchRecentOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    searchRecent(query: string, options?: SearchRecentOptions): Promise<SearchRecentResponse>;
    /**
     * Search all Posts
     * Retrieves Posts from the full archive matching a search query.
  
  
  
     * @param query One query/rule/filter for matching Posts. Refer to https://t.co/rulelength to identify the max query length.
  
  
  
     * @returns {Promise<SearchAllResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    searchAll(query: string, options: SearchAllOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    searchAll(query: string, options?: SearchAllOptions): Promise<SearchAllResponse>;
    /**
     * Get Posts by IDs
     * Retrieves details of multiple Posts by their IDs.
  
  
  
     * @param ids A comma separated list of Post IDs. Up to 100 are allowed in a single request.
  
  
  
     * @returns {Promise<GetByIdsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByIds(ids: Array<any>, options: GetByIdsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByIds(ids: Array<any>, options?: GetByIdsOptions): Promise<GetByIdsResponse>;
    /**
     * Create or Edit Post
     * Creates a new Post for the authenticated user, or edits an existing Post when edit_options are provided.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    create(body: CreateRequest$2, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    create(body: CreateRequest$2): Promise<CreateResponse$2>;
    /**
     * Get Quoted Posts
     * Retrieves a list of Posts that quote a specific Post by its ID.
  
  
     * @param id A single Post ID.
  
  
  
  
     * @returns {Promise<GetQuotedResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getQuoted(id: string, options: GetQuotedOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getQuoted(id: string, options?: GetQuotedOptions): Promise<GetQuotedResponse>;
    /**
     * Get count of recent Posts
     * Retrieves the count of Posts from the last 7 days matching a search query.
  
  
  
     * @param query One query/rule/filter for matching Posts. Refer to https://t.co/rulelength to identify the max query length.
  
  
  
     * @returns {Promise<GetCountsRecentResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getCountsRecent(query: string, options: GetCountsRecentOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getCountsRecent(query: string, options?: GetCountsRecentOptions): Promise<GetCountsRecentResponse>;
    /**
     * Hide reply
     * Hides or unhides a reply to a conversation owned by the authenticated user.
  
  
     * @param tweetId The ID of the reply that you want to hide or unhide.
  
  
  
  
     * @returns {Promise<HideReplyResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    hideReply(tweetId: string, options: HideReplyOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    hideReply(tweetId: string, options?: HideReplyOptions): Promise<HideReplyResponse>;
    /**
     * Get historical Post insights
     * Retrieves historical engagement metrics for specified Posts within a defined time range.
  
  
  
     * @param tweetIds List of PostIds for historical metrics.
  
  
  
     * @param endTime YYYY-MM-DDTHH:mm:ssZ. The UTC timestamp representing the end of the time range.
  
  
  
     * @param startTime YYYY-MM-DDTHH:mm:ssZ. The UTC timestamp representing the start of the time range.
  
  
  
     * @param granularity granularity of metrics response.
  
  
  
     * @param requestedMetrics request metrics for historical request.
  
  
  
     * @returns {Promise<GetInsightsHistoricalResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getInsightsHistorical(tweetIds: Array<any>, endTime: string, startTime: string, granularity: string, requestedMetrics: Array<any>, options: GetInsightsHistoricalOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getInsightsHistorical(tweetIds: Array<any>, endTime: string, startTime: string, granularity: string, requestedMetrics: Array<any>, options?: GetInsightsHistoricalOptions): Promise<GetInsightsHistoricalResponse>;
    /**
     * Get count of all Posts
     * Retrieves the count of Posts matching a search query from the full archive.
  
  
  
     * @param query One query/rule/filter for matching Posts. Refer to https://t.co/rulelength to identify the max query length.
  
  
  
     * @returns {Promise<GetCountsAllResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getCountsAll(query: string, options: GetCountsAllOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getCountsAll(query: string, options?: GetCountsAllOptions): Promise<GetCountsAllResponse>;
    /**
     * Get Post by ID
     * Retrieves details of a specific Post by its ID.
  
  
     * @param id A single Post ID.
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: string, options: GetByIdOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: string, options?: GetByIdOptions$2): Promise<GetByIdResponse$2>;
    /**
     * Delete Post
     * Deletes a specific Post by its ID, if owned by the authenticated user.
  
  
     * @param id The ID of the Post to be deleted.
  
  
  
  
     * @returns {Promise<DeleteResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    delete(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    delete(id: string): Promise<DeleteResponse$2>;
    /**
     * Get Liking Users
     * Retrieves a list of Users who liked a specific Post by its ID.
  
  
     * @param id A single Post ID.
  
  
  
  
     * @returns {Promise<GetLikingUsersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getLikingUsers(id: string, options: GetLikingUsersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getLikingUsers(id: string, options?: GetLikingUsersOptions): Promise<GetLikingUsersResponse>;
    /**
     * Get Reposted by
     * Retrieves a list of Users who reposted a specific Post by its ID.
  
  
     * @param id A single Post ID.
  
  
  
  
     * @returns {Promise<GetRepostedByResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getRepostedBy(id: string, options: GetRepostedByOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getRepostedBy(id: string, options?: GetRepostedByOptions): Promise<GetRepostedByResponse>;
}

/**
 * Models for direct messages operations
 */

/**
 * Request for createByConversationId
 *
 * @public
 */
type CreateByConversationIdRequest = CreateMessageRequest;
/**
 * Response for createByConversationId
 *
 * @public
 */
type CreateByConversationIdResponse = CreateDmEventResponse;
/**
 * Response for getEventsByConversationId
 *
 * @public
 */
type GetEventsByConversationIdResponse = Get2DmConversationsIdDmEventsResponse;
/**
 * Request for createConversation
 *
 * @public
 */
type CreateConversationRequest = CreateDmConversationRequest;
/**
 * Response for createConversation
 *
 * @public
 */
type CreateConversationResponse = CreateDmEventResponse;
/**
 * Response for getEventsByParticipantId
 *
 * @public
 */
type GetEventsByParticipantIdResponse = Get2DmConversationsWithParticipantIdDmEventsResponse;
/**
 * Response for getEvents
 *
 * @public
 */
type GetEventsResponse = Get2DmEventsResponse;
/**
 * Response for getEventsById
 *
 * @public
 */
type GetEventsByIdResponse = Get2DmEventsEventIdResponse;
/**
 * Response for deleteEvents
 *
 * @public
 */
type DeleteEventsResponse = DeleteDmResponse;
/**
 * Request for createByParticipantId
 *
 * @public
 */
type CreateByParticipantIdRequest = CreateMessageRequest;
/**
 * Response for createByParticipantId
 *
 * @public
 */
type CreateByParticipantIdResponse = CreateDmEventResponse;

type models$5_CreateByConversationIdRequest = CreateByConversationIdRequest;
type models$5_CreateByConversationIdResponse = CreateByConversationIdResponse;
type models$5_CreateByParticipantIdRequest = CreateByParticipantIdRequest;
type models$5_CreateByParticipantIdResponse = CreateByParticipantIdResponse;
type models$5_CreateConversationRequest = CreateConversationRequest;
type models$5_CreateConversationResponse = CreateConversationResponse;
type models$5_DeleteEventsResponse = DeleteEventsResponse;
type models$5_GetEventsByConversationIdResponse = GetEventsByConversationIdResponse;
type models$5_GetEventsByIdResponse = GetEventsByIdResponse;
type models$5_GetEventsByParticipantIdResponse = GetEventsByParticipantIdResponse;
type models$5_GetEventsResponse = GetEventsResponse;
declare namespace models$5 {
  export {
    models$5_CreateByConversationIdRequest as CreateByConversationIdRequest,
    models$5_CreateByConversationIdResponse as CreateByConversationIdResponse,
    models$5_CreateByParticipantIdRequest as CreateByParticipantIdRequest,
    models$5_CreateByParticipantIdResponse as CreateByParticipantIdResponse,
    models$5_CreateConversationRequest as CreateConversationRequest,
    models$5_CreateConversationResponse as CreateConversationResponse,
    models$5_DeleteEventsResponse as DeleteEventsResponse,
    models$5_GetEventsByConversationIdResponse as GetEventsByConversationIdResponse,
    models$5_GetEventsByIdResponse as GetEventsByIdResponse,
    models$5_GetEventsByParticipantIdResponse as GetEventsByParticipantIdResponse,
    models$5_GetEventsResponse as GetEventsResponse,
  };
}

/**
 * direct messages client for the X API.
 *
 * This module provides a client for interacting with the direct messages endpoints of the X API.
 */

/**
 * Options for createByConversationId method
 *
 * @public
 */
interface CreateByConversationIdOptions {
    /** Request body */
    body?: CreateByConversationIdRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getEventsByConversationId method
 *
 * @public
 */
interface GetEventsByConversationIdOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** The set of event_types to include in the results.
     * Also accepts: event_types or proper camelCase (e.g., eventTypes) */
    eventTypes?: Array<any>;
    /** A comma separated list of DmEvent fields to display.
     * Also accepts: dm_event.fields or proper camelCase (e.g., dmEventFields) */
    dmEventFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for createConversation method
 *
 * @public
 */
interface CreateConversationOptions {
    /** Request body */
    body?: CreateConversationRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getEventsByParticipantId method
 *
 * @public
 */
interface GetEventsByParticipantIdOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** The set of event_types to include in the results.
     * Also accepts: event_types or proper camelCase (e.g., eventTypes) */
    eventTypes?: Array<any>;
    /** A comma separated list of DmEvent fields to display.
     * Also accepts: dm_event.fields or proper camelCase (e.g., dmEventFields) */
    dmEventFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getEvents method
 *
 * @public
 */
interface GetEventsOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** The set of event_types to include in the results.
     * Also accepts: event_types or proper camelCase (e.g., eventTypes) */
    eventTypes?: Array<any>;
    /** A comma separated list of DmEvent fields to display.
     * Also accepts: dm_event.fields or proper camelCase (e.g., dmEventFields) */
    dmEventFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getEventsById method
 *
 * @public
 */
interface GetEventsByIdOptions {
    /** A comma separated list of DmEvent fields to display.
     * Also accepts: dm_event.fields or proper camelCase (e.g., dmEventFields) */
    dmEventFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for createByParticipantId method
 *
 * @public
 */
interface CreateByParticipantIdOptions {
    /** Request body */
    body?: CreateByParticipantIdRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for direct messages operations
 *
 * This client provides methods for interacting with the direct messages endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all direct messages related operations.
 *
 * @category direct messages
 */
declare class DirectMessagesClient {
    private client;
    /**
     * Creates a new direct messages client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Create DM message by conversation ID
     * Sends a new direct message to a specific conversation by its ID.
  
  
     * @param dmConversationId The DM Conversation ID.
  
  
  
  
     * @returns {Promise<CreateByConversationIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createByConversationId(dmConversationId: string, options: CreateByConversationIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createByConversationId(dmConversationId: string, options?: CreateByConversationIdOptions): Promise<CreateByConversationIdResponse>;
    /**
     * Get DM events for a DM conversation
     * Retrieves direct message events for a specific conversation.
  
  
     * @param id The DM conversation ID.
  
  
  
  
     * @returns {Promise<GetEventsByConversationIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getEventsByConversationId(id: string, options: GetEventsByConversationIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getEventsByConversationId(id: string, options?: GetEventsByConversationIdOptions): Promise<GetEventsByConversationIdResponse>;
    /**
     * Create DM conversation
     * Initiates a new direct message conversation with specified participants.
  
  
  
     * @returns {Promise<CreateConversationResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createConversation(options: CreateConversationOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createConversation(options?: CreateConversationOptions): Promise<CreateConversationResponse>;
    /**
     * Get DM events for a DM conversation
     * Retrieves direct message events for a specific conversation.
  
  
     * @param participantId The ID of the participant user for the One to One DM conversation.
  
  
  
  
     * @returns {Promise<GetEventsByParticipantIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getEventsByParticipantId(participantId: string, options: GetEventsByParticipantIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getEventsByParticipantId(participantId: string, options?: GetEventsByParticipantIdOptions): Promise<GetEventsByParticipantIdResponse>;
    /**
     * Get DM events
     * Retrieves a list of recent direct message events across all conversations.
  
  
  
     * @returns {Promise<GetEventsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getEvents(options: GetEventsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getEvents(options?: GetEventsOptions): Promise<GetEventsResponse>;
    /**
     * Get DM event by ID
     * Retrieves details of a specific direct message event by its ID.
  
  
     * @param eventId dm event id.
  
  
  
  
     * @returns {Promise<GetEventsByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getEventsById(eventId: string, options: GetEventsByIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getEventsById(eventId: string, options?: GetEventsByIdOptions): Promise<GetEventsByIdResponse>;
    /**
     * Delete DM event
     * Deletes a specific direct message event by its ID, if owned by the authenticated user.
  
  
     * @param eventId The ID of the direct-message event to delete.
  
  
  
  
     * @returns {Promise<DeleteEventsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteEvents(eventId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteEvents(eventId: string): Promise<DeleteEventsResponse>;
    /**
     * Create DM message by participant ID
     * Sends a new direct message to a specific participant by their ID.
  
  
     * @param participantId The ID of the recipient user that will receive the DM.
  
  
  
  
     * @returns {Promise<CreateByParticipantIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createByParticipantId(participantId: string, options: CreateByParticipantIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createByParticipantId(participantId: string, options?: CreateByParticipantIdOptions): Promise<CreateByParticipantIdResponse>;
}

/**
 * Models for communities operations
 */

/**
 * Response for search
 *
 * @public
 */
type SearchResponse = Get2CommunitiesSearchResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse$1 = Get2CommunitiesIdResponse;

type models$4_SearchResponse = SearchResponse;
declare namespace models$4 {
  export {
    GetByIdResponse$1 as GetByIdResponse,
    models$4_SearchResponse as SearchResponse,
  };
}

/**
 * communities client for the X API.
 *
 * This module provides a client for interacting with the communities endpoints of the X API.
 */

/**
 * Options for search method
 *
 * @public
 */
interface SearchOptions {
    /** The maximum number of search results to be returned by a request.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Community fields to display.
     * Also accepts: community.fields or proper camelCase (e.g., communityFields) */
    communityFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getById method
 *
 * @public
 */
interface GetByIdOptions$1 {
    /** A comma separated list of Community fields to display.
     * Also accepts: community.fields or proper camelCase (e.g., communityFields) */
    communityFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for communities operations
 *
 * This client provides methods for interacting with the communities endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all communities related operations.
 *
 * @category communities
 */
declare class CommunitiesClient {
    private client;
    /**
     * Creates a new communities client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Search Communities
     * Retrieves a list of Communities matching the specified search query.
  
  
  
     * @param query Query to search communities.
  
  
  
     * @returns {Promise<SearchResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    search(query: string, options: SearchOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    search(query: string, options?: SearchOptions): Promise<SearchResponse>;
    /**
     * Get Community by ID
     * Retrieves details of a specific Community by its ID.
  
  
     * @param id The ID of the Community.
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: string, options: GetByIdOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: string, options?: GetByIdOptions$1): Promise<GetByIdResponse$1>;
}

/**
 * Models for media operations
 */

/**
 * Response for getByKey
 *
 * @public
 */
type GetByKeyResponse = Get2MediaMediaKeyResponse;
/**
 * Response for getUploadStatus
 *
 * @public
 */
type GetUploadStatusResponse = MediaUploadResponse;
/**
 * Request for upload
 *
 * @public
 */
type UploadRequest = MediaUploadRequestOneShot;
/**
 * Response for upload
 *
 * @public
 */
type UploadResponse = MediaUploadResponse;
/**
 * Response for getAnalytics
 *
 * @public
 */
type GetAnalyticsResponse = MediaAnalytics;
/**
 * Request for appendUpload
 *
 * @public
 */
type AppendUploadRequest = MediaUploadAppendRequest;
/**
 * Response for appendUpload
 *
 * @public
 */
type AppendUploadResponse = MediaUploadAppendResponse;
/**
 * Response for getByKeys
 *
 * @public
 */
type GetByKeysResponse = Get2MediaResponse;
/**
 * Request for createMetadata
 *
 * @public
 */
type CreateMetadataRequest = MetadataCreateRequest;
/**
 * Response for createMetadata
 *
 * @public
 */
type CreateMetadataResponse = MetadataCreateResponse;
/**
 * Response for finalizeUpload
 *
 * @public
 */
type FinalizeUploadResponse = MediaUploadResponse;
/**
 * Request for initializeUpload
 *
 * @public
 */
type InitializeUploadRequest = MediaUploadConfigRequest;
/**
 * Response for initializeUpload
 *
 * @public
 */
type InitializeUploadResponse = MediaUploadResponse;
/**
 * Request for createSubtitles
 *
 * @public
 */
type CreateSubtitlesRequest = SubtitlesCreateRequest;
/**
 * Response for createSubtitles
 *
 * @public
 */
type CreateSubtitlesResponse = SubtitlesCreateResponse;
/**
 * Request for deleteSubtitles
 *
 * @public
 */
type DeleteSubtitlesRequest = SubtitlesDeleteRequest;
/**
 * Response for deleteSubtitles
 *
 * @public
 */
type DeleteSubtitlesResponse = SubtitlesDeleteResponse;

type models$3_AppendUploadRequest = AppendUploadRequest;
type models$3_AppendUploadResponse = AppendUploadResponse;
type models$3_CreateMetadataRequest = CreateMetadataRequest;
type models$3_CreateMetadataResponse = CreateMetadataResponse;
type models$3_CreateSubtitlesRequest = CreateSubtitlesRequest;
type models$3_CreateSubtitlesResponse = CreateSubtitlesResponse;
type models$3_DeleteSubtitlesRequest = DeleteSubtitlesRequest;
type models$3_DeleteSubtitlesResponse = DeleteSubtitlesResponse;
type models$3_FinalizeUploadResponse = FinalizeUploadResponse;
type models$3_GetAnalyticsResponse = GetAnalyticsResponse;
type models$3_GetByKeyResponse = GetByKeyResponse;
type models$3_GetByKeysResponse = GetByKeysResponse;
type models$3_GetUploadStatusResponse = GetUploadStatusResponse;
type models$3_InitializeUploadRequest = InitializeUploadRequest;
type models$3_InitializeUploadResponse = InitializeUploadResponse;
type models$3_UploadRequest = UploadRequest;
type models$3_UploadResponse = UploadResponse;
declare namespace models$3 {
  export {
    models$3_AppendUploadRequest as AppendUploadRequest,
    models$3_AppendUploadResponse as AppendUploadResponse,
    models$3_CreateMetadataRequest as CreateMetadataRequest,
    models$3_CreateMetadataResponse as CreateMetadataResponse,
    models$3_CreateSubtitlesRequest as CreateSubtitlesRequest,
    models$3_CreateSubtitlesResponse as CreateSubtitlesResponse,
    models$3_DeleteSubtitlesRequest as DeleteSubtitlesRequest,
    models$3_DeleteSubtitlesResponse as DeleteSubtitlesResponse,
    models$3_FinalizeUploadResponse as FinalizeUploadResponse,
    models$3_GetAnalyticsResponse as GetAnalyticsResponse,
    models$3_GetByKeyResponse as GetByKeyResponse,
    models$3_GetByKeysResponse as GetByKeysResponse,
    models$3_GetUploadStatusResponse as GetUploadStatusResponse,
    models$3_InitializeUploadRequest as InitializeUploadRequest,
    models$3_InitializeUploadResponse as InitializeUploadResponse,
    models$3_UploadRequest as UploadRequest,
    models$3_UploadResponse as UploadResponse,
  };
}

/**
 * media client for the X API.
 *
 * This module provides a client for interacting with the media endpoints of the X API.
 */

/**
 * Options for getByKey method
 *
 * @public
 */
interface GetByKeyOptions {
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getUploadStatus method
 *
 * @public
 */
interface GetUploadStatusOptions {
    /** The command for the media upload request.
     * Also accepts: command or proper camelCase (e.g., command) */
    command?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for upload method
 *
 * @public
 */
interface UploadOptions {
    /** Request body */
    body?: UploadRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getAnalytics method
 *
 * @public
 */
interface GetAnalyticsOptions {
    /** A comma separated list of MediaAnalytics fields to display.
     * Also accepts: media_analytics.fields or proper camelCase (e.g., mediaAnalyticsFields) */
    mediaAnalyticsFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for appendUpload method
 *
 * @public
 */
interface AppendUploadOptions {
    /** Request body */
    body?: AppendUploadRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getByKeys method
 *
 * @public
 */
interface GetByKeysOptions {
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for createMetadata method
 *
 * @public
 */
interface CreateMetadataOptions {
    /** Request body */
    body?: CreateMetadataRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for initializeUpload method
 *
 * @public
 */
interface InitializeUploadOptions {
    /** Request body */
    body?: InitializeUploadRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for createSubtitles method
 *
 * @public
 */
interface CreateSubtitlesOptions {
    /** Request body */
    body?: CreateSubtitlesRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for deleteSubtitles method
 *
 * @public
 */
interface DeleteSubtitlesOptions {
    /** Request body */
    body?: DeleteSubtitlesRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for media operations
 *
 * This client provides methods for interacting with the media endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all media related operations.
 *
 * @category media
 */
declare class MediaClient {
    private client;
    /**
     * Creates a new media client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get Media by media key
     * Retrieves details of a specific Media file by its media key.
  
  
     * @param mediaKey A single Media Key.
  
  
  
  
     * @returns {Promise<GetByKeyResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByKey(mediaKey: string, options: GetByKeyOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByKey(mediaKey: string, options?: GetByKeyOptions): Promise<GetByKeyResponse>;
    /**
     * Get Media upload status
     * Retrieves the status of a Media upload by its ID.
  
  
  
     * @param mediaId Media id for the requested media upload status.
  
  
  
     * @returns {Promise<GetUploadStatusResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getUploadStatus(mediaId: string, options: GetUploadStatusOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getUploadStatus(mediaId: string, options?: GetUploadStatusOptions): Promise<GetUploadStatusResponse>;
    /**
     * Upload media
     * Uploads a media file for use in posts or other content.
  
  
  
     * @returns {Promise<UploadResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    upload(options: UploadOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    upload(options?: UploadOptions): Promise<UploadResponse>;
    /**
     * Get Media analytics
     * Retrieves analytics data for media.
  
  
  
     * @param mediaKeys A comma separated list of Media Keys. Up to 100 are allowed in a single request.
  
  
  
     * @param endTime YYYY-MM-DDTHH:mm:ssZ. The UTC timestamp representing the end of the time range.
  
  
  
     * @param startTime YYYY-MM-DDTHH:mm:ssZ. The UTC timestamp representing the start of the time range.
  
  
  
     * @param granularity The granularity for the search counts results.
  
  
  
     * @returns {Promise<GetAnalyticsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getAnalytics(mediaKeys: Array<any>, endTime: string, startTime: string, granularity: string, options: GetAnalyticsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getAnalytics(mediaKeys: Array<any>, endTime: string, startTime: string, granularity: string, options?: GetAnalyticsOptions): Promise<GetAnalyticsResponse>;
    /**
     * Append Media upload
     * Appends data to a Media upload request.
  
  
     * @param id The media identifier for the media to perform the append operation.
  
  
  
  
     * @returns {Promise<AppendUploadResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    appendUpload(id: string, options: AppendUploadOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    appendUpload(id: string, options?: AppendUploadOptions): Promise<AppendUploadResponse>;
    /**
     * Get Media by media keys
     * Retrieves details of Media files by their media keys.
  
  
  
     * @param mediaKeys A comma separated list of Media Keys. Up to 100 are allowed in a single request.
  
  
  
     * @returns {Promise<GetByKeysResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByKeys(mediaKeys: Array<any>, options: GetByKeysOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByKeys(mediaKeys: Array<any>, options?: GetByKeysOptions): Promise<GetByKeysResponse>;
    /**
     * Create Media metadata
     * Creates metadata for a Media file.
  
  
  
     * @returns {Promise<CreateMetadataResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createMetadata(options: CreateMetadataOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createMetadata(options?: CreateMetadataOptions): Promise<CreateMetadataResponse>;
    /**
     * Finalize Media upload
     * Finalizes a Media upload request.
  
  
     * @param id The media id of the targeted media to finalize.
  
  
  
  
     * @returns {Promise<FinalizeUploadResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    finalizeUpload(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    finalizeUpload(id: string): Promise<FinalizeUploadResponse>;
    /**
     * Initialize media upload
     * Initializes a media upload.
  
  
  
     * @returns {Promise<InitializeUploadResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    initializeUpload(options: InitializeUploadOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    initializeUpload(options?: InitializeUploadOptions): Promise<InitializeUploadResponse>;
    /**
     * Create Media subtitles
     * Creates subtitles for a specific Media file.
  
  
  
     * @returns {Promise<CreateSubtitlesResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createSubtitles(options: CreateSubtitlesOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createSubtitles(options?: CreateSubtitlesOptions): Promise<CreateSubtitlesResponse>;
    /**
     * Delete Media subtitles
     * Deletes subtitles for a specific Media file.
  
  
  
     * @returns {Promise<DeleteSubtitlesResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteSubtitles(options: DeleteSubtitlesOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteSubtitles(options?: DeleteSubtitlesOptions): Promise<DeleteSubtitlesResponse>;
}

/**
 * Models for webhooks operations
 */

/**
 * Response for createStreamLink
 *
 * @public
 */
type CreateStreamLinkResponse = WebhookLinksCreateResponse;
/**
 * Response for deleteStreamLink
 *
 * @public
 */
type DeleteStreamLinkResponse = WebhookLinksDeleteResponse;
/**
 * Response for getStreamLinks
 *
 * @public
 */
type GetStreamLinksResponse = WebhookLinksGetResponse;
/**
 * Request for createWebhookReplayJob
 *
 * @public
 */
type CreateWebhookReplayJobRequest = WebhookReplayCreateRequest;
/**
 * Response for createWebhookReplayJob
 *
 * @public
 */
type CreateWebhookReplayJobResponse = ReplayJobCreateResponse;
/**
 * Response for validate
 *
 * @public
 */
type ValidateResponse = WebhookConfigPutResponse;
/**
 * Response for delete
 *
 * @public
 */
type DeleteResponse$1 = WebhookConfigDeleteResponse;
/**
 * Response for get
 *
 * @public
 */
type GetResponse = Get2WebhooksResponse;
/**
 * Request for create
 *
 * @public
 */
type CreateRequest$1 = WebhookConfigCreateRequest;
/**
 * Response for create
 *
 * @public
 */
type CreateResponse$1 = WebhookConfigCreateResponse;

type models$2_CreateStreamLinkResponse = CreateStreamLinkResponse;
type models$2_CreateWebhookReplayJobRequest = CreateWebhookReplayJobRequest;
type models$2_CreateWebhookReplayJobResponse = CreateWebhookReplayJobResponse;
type models$2_DeleteStreamLinkResponse = DeleteStreamLinkResponse;
type models$2_GetResponse = GetResponse;
type models$2_GetStreamLinksResponse = GetStreamLinksResponse;
type models$2_ValidateResponse = ValidateResponse;
declare namespace models$2 {
  export {
    CreateRequest$1 as CreateRequest,
    CreateResponse$1 as CreateResponse,
    models$2_CreateStreamLinkResponse as CreateStreamLinkResponse,
    models$2_CreateWebhookReplayJobRequest as CreateWebhookReplayJobRequest,
    models$2_CreateWebhookReplayJobResponse as CreateWebhookReplayJobResponse,
    DeleteResponse$1 as DeleteResponse,
    models$2_DeleteStreamLinkResponse as DeleteStreamLinkResponse,
    models$2_GetResponse as GetResponse,
    models$2_GetStreamLinksResponse as GetStreamLinksResponse,
    models$2_ValidateResponse as ValidateResponse,
  };
}

/**
 * webhooks client for the X API.
 *
 * This module provides a client for interacting with the webhooks endpoints of the X API.
 */

/**
 * Options for createStreamLink method
 *
 * @public
 */
interface CreateStreamLinkOptions {
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: string;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: string;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: string;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: string;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for createWebhookReplayJob method
 *
 * @public
 */
interface CreateWebhookReplayJobOptions {
    /** Request body */
    body?: CreateWebhookReplayJobRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for get method
 *
 * @public
 */
interface GetOptions {
    /** A comma separated list of WebhookConfig fields to display.
     * Also accepts: webhook_config.fields or proper camelCase (e.g., webhookConfigFields) */
    webhookConfigFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for create method
 *
 * @public
 */
interface CreateOptions$1 {
    /** Request body */
    body?: CreateRequest$1;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for webhooks operations
 *
 * This client provides methods for interacting with the webhooks endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all webhooks related operations.
 *
 * @category webhooks
 */
declare class WebhooksClient {
    private client;
    /**
     * Creates a new webhooks client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Create stream link
     * Creates a link to deliver FilteredStream events to the given webhook.
  
  
     * @param webhookId The webhook ID to link to your FilteredStream ruleset.
  
  
  
  
     * @returns {Promise<CreateStreamLinkResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createStreamLink(webhookId: string, options: CreateStreamLinkOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createStreamLink(webhookId: string, options?: CreateStreamLinkOptions): Promise<CreateStreamLinkResponse>;
    /**
     * Delete stream link
     * Deletes a link from FilteredStream events to the given webhook.
  
  
     * @param webhookId The webhook ID to link to your FilteredStream ruleset.
  
  
  
  
     * @returns {Promise<DeleteStreamLinkResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteStreamLink(webhookId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteStreamLink(webhookId: string): Promise<DeleteStreamLinkResponse>;
    /**
     * Get stream links
     * Get a list of webhook links associated with a filtered stream ruleset.
  
  
  
     * @returns {Promise<GetStreamLinksResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getStreamLinks(options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getStreamLinks(): Promise<GetStreamLinksResponse>;
    /**
     * Create replay job for webhook
     * Creates a replay job to retrieve events from up to the past 24 hours for all events delivered or attempted to be delivered to the webhook.
  
  
  
     * @returns {Promise<CreateWebhookReplayJobResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createWebhookReplayJob(options: CreateWebhookReplayJobOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createWebhookReplayJob(options?: CreateWebhookReplayJobOptions): Promise<CreateWebhookReplayJobResponse>;
    /**
     * Validate webhook
     * Triggers a CRC check for a given webhook.
  
  
     * @param webhookId The ID of the webhook to check.
  
  
  
  
     * @returns {Promise<ValidateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    validate(webhookId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    validate(webhookId: string): Promise<ValidateResponse>;
    /**
     * Delete webhook
     * Deletes an existing webhook configuration.
  
  
     * @param webhookId The ID of the webhook to delete.
  
  
  
  
     * @returns {Promise<DeleteResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    delete(webhookId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    delete(webhookId: string): Promise<DeleteResponse$1>;
    /**
     * Get webhook
     * Get a list of webhook configs associated with a client app.
  
  
  
     * @returns {Promise<GetResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    get(options: GetOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    get(options?: GetOptions): Promise<GetResponse>;
    /**
     * Create webhook
     * Creates a new webhook configuration.
  
  
  
     * @returns {Promise<CreateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    create(options: CreateOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    create(options?: CreateOptions$1): Promise<CreateResponse$1>;
}

interface StreamDataEvent {
    data: any;
    includes?: any;
    matching_rules?: any[];
}
/**
 * Event-driven stream class for handling streaming data from the X API.
 *
 * This class provides an event-driven interface for working with streaming endpoints,
 * allowing you to listen to 'data', 'keepAlive', 'error', and 'close' events.
 *
 * @public
 */
declare class EventDrivenStream {
    private webStream;
    private reader;
    private decoder;
    private isConnected;
    private isClosed;
    private buffer;
    private eventListeners;
    private autoReconnect;
    private reconnectAttempts;
    private maxReconnectAttempts;
    private reconnectDelay;
    constructor();
    /**
     * Initialize the stream with a Web ReadableStream
     */
    connect(webStream: ReadableStream<Uint8Array>): Promise<void>;
    /**
     * Start reading from the stream
     */
    private startReading;
    /**
     * Process incoming data chunks
     */
    private processChunk;
    /**
     * Check if data is a keep-alive signal (20-second heartbeat)
     * Twitter sends newline characters every 20 seconds to prevent timeouts
     */
    private isKeepAlive;
    /**
     * Handle connection errors
     */
    private handleConnectionError;
    /**
     * Handle connection closed
     */
    private handleConnectionClosed;
    /**
     * Attempt to reconnect
     */
    private attemptReconnect;
    /**
     * Clean up resources
     */
    private cleanup;
    /**
     * Close the stream
     */
    close(): void;
    /**
     * Add event listener
     */
    on(event: string, listener: Function): this;
    /**
     * Remove event listener
     */
    off(event: string, listener: Function): this;
    /**
     * Emit event to listeners
     */
    private emit;
    /**
     * Setup default event listeners
     */
    private setupEventListeners;
    /**
     * Enable/disable auto-reconnect
     */
    set autoReconnectEnabled(enabled: boolean);
    get autoReconnectEnabled(): boolean;
    /**
     * Set max reconnect attempts
     */
    set maxReconnectAttemptsCount(count: number);
    get maxReconnectAttemptsCount(): number;
    /**
     * Async iterator for tweets
     */
    [Symbol.asyncIterator](): AsyncGenerator<StreamDataEvent, void, unknown>;
}

/**
 * Models for stream operations
 */

/**
 * Response for likesCompliance
 *
 * @public
 */
type LikesComplianceResponse = LikesComplianceStreamResponse;
/**
 * Response for usersCompliance
 *
 * @public
 */
type UsersComplianceResponse = UserComplianceStreamResponse;
/**
 * Response for postsFirehoseKo
 *
 * @public
 */
type PostsFirehoseKoResponse = StreamingTweetResponse;
/**
 * Response for likesSample10
 *
 * @public
 */
type LikesSample10Response = StreamingLikeResponseV2;
/**
 * Response for getRuleCounts
 *
 * @public
 */
type GetRuleCountsResponse = Get2TweetsSearchStreamRulesCountsResponse;
/**
 * Response for likesFirehose
 *
 * @public
 */
type LikesFirehoseResponse = StreamingLikeResponseV2;
/**
 * Response for postsFirehoseJa
 *
 * @public
 */
type PostsFirehoseJaResponse = StreamingTweetResponse;
/**
 * Response for postsFirehoseEn
 *
 * @public
 */
type PostsFirehoseEnResponse = StreamingTweetResponse;
/**
 * Response for getRules
 *
 * @public
 */
type GetRulesResponse = RulesLookupResponse;
/**
 * Request for updateRules
 *
 * @public
 */
type UpdateRulesRequest = AddOrDeleteRulesRequest;
/**
 * Response for updateRules
 *
 * @public
 */
type UpdateRulesResponse = AddOrDeleteRulesResponse;
/**
 * Response for postsSample
 *
 * @public
 */
type PostsSampleResponse = StreamingTweetResponse;
/**
 * Response for postsSample10
 *
 * @public
 */
type PostsSample10Response = Get2TweetsSample10StreamResponse;
/**
 * Response for postsCompliance
 *
 * @public
 */
type PostsComplianceResponse = TweetComplianceStreamResponse;
/**
 * Response for labelsCompliance
 *
 * @public
 */
type LabelsComplianceResponse = TweetLabelStreamResponse;
/**
 * Response for posts
 *
 * @public
 */
type PostsResponse = FilteredStreamingTweetResponse;
/**
 * Response for postsFirehose
 *
 * @public
 */
type PostsFirehoseResponse = StreamingTweetResponse;
/**
 * Response for postsFirehosePt
 *
 * @public
 */
type PostsFirehosePtResponse = StreamingTweetResponse;

type models$1_GetRuleCountsResponse = GetRuleCountsResponse;
type models$1_GetRulesResponse = GetRulesResponse;
type models$1_LabelsComplianceResponse = LabelsComplianceResponse;
type models$1_LikesComplianceResponse = LikesComplianceResponse;
type models$1_LikesFirehoseResponse = LikesFirehoseResponse;
type models$1_LikesSample10Response = LikesSample10Response;
type models$1_PostsComplianceResponse = PostsComplianceResponse;
type models$1_PostsFirehoseEnResponse = PostsFirehoseEnResponse;
type models$1_PostsFirehoseJaResponse = PostsFirehoseJaResponse;
type models$1_PostsFirehoseKoResponse = PostsFirehoseKoResponse;
type models$1_PostsFirehosePtResponse = PostsFirehosePtResponse;
type models$1_PostsFirehoseResponse = PostsFirehoseResponse;
type models$1_PostsResponse = PostsResponse;
type models$1_PostsSample10Response = PostsSample10Response;
type models$1_PostsSampleResponse = PostsSampleResponse;
type models$1_UpdateRulesRequest = UpdateRulesRequest;
type models$1_UpdateRulesResponse = UpdateRulesResponse;
type models$1_UsersComplianceResponse = UsersComplianceResponse;
declare namespace models$1 {
  export {
    models$1_GetRuleCountsResponse as GetRuleCountsResponse,
    models$1_GetRulesResponse as GetRulesResponse,
    models$1_LabelsComplianceResponse as LabelsComplianceResponse,
    models$1_LikesComplianceResponse as LikesComplianceResponse,
    models$1_LikesFirehoseResponse as LikesFirehoseResponse,
    models$1_LikesSample10Response as LikesSample10Response,
    models$1_PostsComplianceResponse as PostsComplianceResponse,
    models$1_PostsFirehoseEnResponse as PostsFirehoseEnResponse,
    models$1_PostsFirehoseJaResponse as PostsFirehoseJaResponse,
    models$1_PostsFirehoseKoResponse as PostsFirehoseKoResponse,
    models$1_PostsFirehosePtResponse as PostsFirehosePtResponse,
    models$1_PostsFirehoseResponse as PostsFirehoseResponse,
    models$1_PostsResponse as PostsResponse,
    models$1_PostsSample10Response as PostsSample10Response,
    models$1_PostsSampleResponse as PostsSampleResponse,
    models$1_UpdateRulesRequest as UpdateRulesRequest,
    models$1_UpdateRulesResponse as UpdateRulesResponse,
    models$1_UsersComplianceResponse as UsersComplianceResponse,
  };
}

/**
 * Stream client for the X API.
 *
 * This module provides a client for interacting with the streaming endpoints of the X API.
 */

/**
 * Options for likesCompliance method
 *
 * @public
 */
interface LikesComplianceStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Likes Compliance events will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Likes Compliance events will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for usersCompliance method
 *
 * @public
 */
interface UsersComplianceStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for postsFirehoseKo method
 *
 * @public
 */
interface PostsFirehoseKoStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for likesSample10 method
 *
 * @public
 */
interface LikesSample10StreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Likes will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of LikeWithTweetAuthor fields to display.
     * Also accepts: like_with_tweet_author.fields or proper camelCase (e.g., likeWithTweetAuthorFields) */
    likeWithTweetAuthorFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getRuleCounts method
 *
 * @public
 */
interface GetRuleCountsStreamingOptions {
    /** A comma separated list of RulesCount fields to display.
     * Also accepts: rules_count.fields or proper camelCase (e.g., rulesCountFields) */
    rulesCountFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for likesFirehose method
 *
 * @public
 */
interface LikesFirehoseStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Likes will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of LikeWithTweetAuthor fields to display.
     * Also accepts: like_with_tweet_author.fields or proper camelCase (e.g., likeWithTweetAuthorFields) */
    likeWithTweetAuthorFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for postsFirehoseJa method
 *
 * @public
 */
interface PostsFirehoseJaStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for postsFirehoseEn method
 *
 * @public
 */
interface PostsFirehoseEnStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getRules method
 *
 * @public
 */
interface GetRulesStreamingOptions {
    /** A comma-separated list of Rule IDs.
     * Also accepts: ids or proper camelCase (e.g., ids) */
    ids?: Array<any>;
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This value is populated by passing the 'next_token' returned in a request to paginate through results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for updateRules method
 *
 * @public
 */
interface UpdateRulesStreamingOptions {
    /** Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes.
     * Also accepts: dry_run or proper camelCase (e.g., dryRun) */
    dryRun?: boolean;
    /** Delete All can be used to delete all of the rules associated this client app, it should be specified with no other parameters. Once deleted, rules cannot be recovered.
     * Also accepts: delete_all or proper camelCase (e.g., deleteAll) */
    deleteAll?: boolean;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for postsSample method
 *
 * @public
 */
interface PostsSampleStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for postsSample10 method
 *
 * @public
 */
interface PostsSample10StreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for postsCompliance method
 *
 * @public
 */
interface PostsComplianceStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Post Compliance events will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Post Compliance events will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for labelsCompliance method
 *
 * @public
 */
interface LabelsComplianceStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Post labels will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Post labels will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for posts method
 *
 * @public
 */
interface PostsStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for postsFirehose method
 *
 * @public
 */
interface PostsFirehoseStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for postsFirehosePt method
 *
 * @public
 */
interface PostsFirehosePtStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Additional headers */
    headers?: Record<string, string>;
    /** AbortSignal for cancelling the request */
    signal?: AbortSignal;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
declare class StreamClient {
    private client;
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Stream Likes compliance data
     * Streams all compliance data related to Likes for Users.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    likesCompliance(options?: LikesComplianceStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream Users compliance data
     * Streams all compliance data related to Users.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    usersCompliance(partition: number, options?: UsersComplianceStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream Korean Posts
     * Streams all public Korean-language Posts in real-time.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    postsFirehoseKo(partition: number, options?: PostsFirehoseKoStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream sampled Likes
     * Streams a 10% sample of public Likes in real-time.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    likesSample10(partition: number, options?: LikesSample10StreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream all Likes
     * Streams all public Likes in real-time.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    likesFirehose(partition: number, options?: LikesFirehoseStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream Japanese Posts
     * Streams all public Japanese-language Posts in real-time.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    postsFirehoseJa(partition: number, options?: PostsFirehoseJaStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream English Posts
     * Streams all public English-language Posts in real-time.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    postsFirehoseEn(partition: number, options?: PostsFirehoseEnStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream sampled Posts
     * Streams a 1% sample of public Posts in real-time.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    postsSample(options?: PostsSampleStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream 10% sampled Posts
     * Streams a 10% sample of public Posts in real-time.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    postsSample10(partition: number, options?: PostsSample10StreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream Posts compliance data
     * Streams all compliance data related to Posts.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    postsCompliance(partition: number, options?: PostsComplianceStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream Post labels
     * Streams all labeling events applied to Posts.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    labelsCompliance(options?: LabelsComplianceStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream filtered Posts
     * Streams Posts in real-time matching the active rule set.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    posts(options?: PostsStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream all Posts
     * Streams all public Posts in real-time.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    postsFirehose(partition: number, options?: PostsFirehoseStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Stream Portuguese Posts
     * Streams all public Portuguese-language Posts in real-time.
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @param partition The partition number.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    postsFirehosePt(partition: number, options?: PostsFirehosePtStreamingOptions): Promise<EventDrivenStream>;
    /**
     * Get stream rule counts
     * Retrieves the count of rules in the active rule set for the filtered stream.
     *
     * @returns Promise with the API response
     */
    getRuleCounts(options?: GetRuleCountsStreamingOptions): Promise<GetRuleCountsResponse>;
    /**
     * Get stream rules
     * Retrieves the active rule set or a subset of rules for the filtered stream.
     *
     * @returns Promise with the API response
     */
    getRules(options?: GetRulesStreamingOptions): Promise<GetRulesResponse>;
    /**
     * Update stream rules
     * Adds or deletes rules from the active rule set for the filtered stream.
     *
     * @returns Promise with the API response
     */
    updateRules(body: any, options?: UpdateRulesStreamingOptions): Promise<UpdateRulesResponse>;
}

/**
 * Models for lists operations
 */

/**
 * Response for getFollowers
 *
 * @public
 */
type GetFollowersResponse = Get2ListsIdFollowersResponse;
/**
 * Request for create
 *
 * @public
 */
type CreateRequest = ListCreateRequest;
/**
 * Response for create
 *
 * @public
 */
type CreateResponse = ListCreateResponse;
/**
 * Response for getMembers
 *
 * @public
 */
type GetMembersResponse = Get2ListsIdMembersResponse;
/**
 * Request for addMember
 *
 * @public
 */
type AddMemberRequest = ListAddUserRequest;
/**
 * Response for addMember
 *
 * @public
 */
type AddMemberResponse = ListMutateResponse;
/**
 * Response for getPosts
 *
 * @public
 */
type GetPostsResponse = Get2ListsIdTweetsResponse;
/**
 * Response for removeMemberByUserId
 *
 * @public
 */
type RemoveMemberByUserIdResponse = ListMutateResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse = Get2ListsIdResponse;
/**
 * Request for update
 *
 * @public
 */
type UpdateRequest = ListUpdateRequest;
/**
 * Response for update
 *
 * @public
 */
type UpdateResponse = ListUpdateResponse;
/**
 * Response for delete
 *
 * @public
 */
type DeleteResponse = ListDeleteResponse;

type models_AddMemberRequest = AddMemberRequest;
type models_AddMemberResponse = AddMemberResponse;
type models_CreateRequest = CreateRequest;
type models_CreateResponse = CreateResponse;
type models_DeleteResponse = DeleteResponse;
type models_GetByIdResponse = GetByIdResponse;
type models_GetFollowersResponse = GetFollowersResponse;
type models_GetMembersResponse = GetMembersResponse;
type models_GetPostsResponse = GetPostsResponse;
type models_RemoveMemberByUserIdResponse = RemoveMemberByUserIdResponse;
type models_UpdateRequest = UpdateRequest;
type models_UpdateResponse = UpdateResponse;
declare namespace models {
  export {
    models_AddMemberRequest as AddMemberRequest,
    models_AddMemberResponse as AddMemberResponse,
    models_CreateRequest as CreateRequest,
    models_CreateResponse as CreateResponse,
    models_DeleteResponse as DeleteResponse,
    models_GetByIdResponse as GetByIdResponse,
    models_GetFollowersResponse as GetFollowersResponse,
    models_GetMembersResponse as GetMembersResponse,
    models_GetPostsResponse as GetPostsResponse,
    models_RemoveMemberByUserIdResponse as RemoveMemberByUserIdResponse,
    models_UpdateRequest as UpdateRequest,
    models_UpdateResponse as UpdateResponse,
  };
}

/**
 * lists client for the X API.
 *
 * This module provides a client for interacting with the lists endpoints of the X API.
 */

/**
 * Options for getFollowers method
 *
 * @public
 */
interface GetFollowersOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for create method
 *
 * @public
 */
interface CreateOptions {
    /** Request body */
    body?: CreateRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getMembers method
 *
 * @public
 */
interface GetMembersOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get a specified 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for addMember method
 *
 * @public
 */
interface AddMemberOptions {
    /** Request body */
    body?: AddMemberRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getPosts method
 *
 * @public
 */
interface GetPostsOptions {
    /** The maximum number of results.
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** This parameter is used to get the next 'page' of results.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<any>;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getById method
 *
 * @public
 */
interface GetByIdOptions {
    /** A comma separated list of List fields to display.
     * Also accepts: list.fields or proper camelCase (e.g., listFields) */
    listFields?: Array<any>;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<any>;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<any>;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for update method
 *
 * @public
 */
interface UpdateOptions {
    /** Request body */
    body?: UpdateRequest;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for lists operations
 *
 * This client provides methods for interacting with the lists endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all lists related operations.
 *
 * @category lists
 */
declare class ListsClient {
    private client;
    /**
     * Creates a new lists client instance
     *
     * @param client - The main X API client instance
     */
    constructor(client: Client);
    /**
     * Normalize options object to handle both camelCase and original API parameter names
     * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
     */
    private _normalizeOptions;
    /**
     * Get List followers
     * Retrieves a list of Users who follow a specific List by its ID.
  
  
     * @param id The ID of the List.
  
  
  
  
     * @returns {Promise<GetFollowersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getFollowers(id: string, options: GetFollowersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getFollowers(id: string, options?: GetFollowersOptions): Promise<GetFollowersResponse>;
    /**
     * Create List
     * Creates a new List for the authenticated user.
  
  
  
     * @returns {Promise<CreateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    create(options: CreateOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    create(options?: CreateOptions): Promise<CreateResponse>;
    /**
     * Get List members
     * Retrieves a list of Users who are members of a specific List by its ID.
  
  
     * @param id The ID of the List.
  
  
  
  
     * @returns {Promise<GetMembersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getMembers(id: string, options: GetMembersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getMembers(id: string, options?: GetMembersOptions): Promise<GetMembersResponse>;
    /**
     * Add List member
     * Adds a User to a specific List by its ID.
  
  
     * @param id The ID of the List for which to add a member.
  
  
  
  
     * @returns {Promise<AddMemberResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    addMember(id: string, options: AddMemberOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    addMember(id: string, options?: AddMemberOptions): Promise<AddMemberResponse>;
    /**
     * Get List Posts
     * Retrieves a list of Posts associated with a specific List by its ID.
  
  
     * @param id The ID of the List.
  
  
  
  
     * @returns {Promise<GetPostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPosts(id: string, options: GetPostsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPosts(id: string, options?: GetPostsOptions): Promise<GetPostsResponse>;
    /**
     * Remove List member
     * Removes a User from a specific List by its ID and the User’s ID.
  
  
     * @param id The ID of the List to remove a member.
  
  
  
     * @param userId The ID of User that will be removed from the List.
  
  
  
  
     * @returns {Promise<RemoveMemberByUserIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    removeMemberByUserId(id: string, userId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    removeMemberByUserId(id: string, userId: string): Promise<RemoveMemberByUserIdResponse>;
    /**
     * Get List by ID
     * Retrieves details of a specific List by its ID.
  
  
     * @param id The ID of the List.
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: string, options: GetByIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: string, options?: GetByIdOptions): Promise<GetByIdResponse>;
    /**
     * Update List
     * Updates the details of a specific List owned by the authenticated user by its ID.
  
  
     * @param id The ID of the List to modify.
  
  
  
  
     * @returns {Promise<UpdateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    update(id: string, options: UpdateOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    update(id: string, options?: UpdateOptions): Promise<UpdateResponse>;
    /**
     * Delete List
     * Deletes a specific List owned by the authenticated user by its ID.
  
  
     * @param id The ID of the List to delete.
  
  
  
  
     * @returns {Promise<DeleteResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    delete(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    delete(id: string): Promise<DeleteResponse>;
}

/**
 * Configuration options for the X API client
 */
interface ClientConfig {
    /** Base URL for API requests */
    baseUrl?: string;
    /** Bearer token for authentication */
    bearerToken?: string;
    /** OAuth2 access token */
    accessToken?: string;
    /** OAuth1 instance for authentication */
    oauth1?: any;
    /** Custom headers to include in requests */
    headers?: Record<string, string>;
    /** Request timeout in milliseconds */
    timeout?: number;
    /** Whether to automatically retry failed requests */
    retry?: boolean;
    /** Maximum number of retry attempts */
    maxRetries?: number;
}
/**
 * API Error class for handling X API errors
 */
declare class ApiError extends Error {
    readonly status: number;
    readonly statusText: string;
    readonly headers: Headers;
    readonly data?: any;
    constructor(message: string, status: number, statusText: string, headers: Headers, data?: any);
}
/**
 * Request options for API calls
 */
interface RequestOptions {
    /** Request timeout in milliseconds */
    timeout?: number;
    /** Additional headers */
    headers?: Record<string, string>;
    /** Request signal for cancellation */
    signal?: AbortSignal;
    /** Request body */
    body?: string;
    /** Return raw HTTP wrapper instead of parsed body */
    raw?: boolean;
    /** Security requirements for the endpoint (from OpenAPI spec) - used for smart auth selection */
    security?: Array<Record<string, string[]>>;
}
/**
 * Response wrapper with metadata
 */
interface ApiResponse<T = any> {
    /** Response body */
    body: T;
    /** Response headers */
    headers: Headers;
    /** HTTP status code */
    status: number;
    /** HTTP status text */
    statusText: string;
    /** Response URL */
    url: string;
}
/**
 * Pagination metadata
 */
interface PaginationMeta {
    /** Next page token */
    nextToken?: string;
    /** Previous page token */
    previousToken?: string;
    /** Total count */
    totalCount?: number;
    /** Result count */
    resultCount?: number;
}
/**
 * Main client class for the X API
 *
 * This is the primary entry point for interacting with the X API. It provides
 * access to all API endpoints through specialized client modules and handles
 * authentication, request configuration, and error handling.
 *
 * @example
 * ```typescript
 * import { Client } from 'x-api-sdk';
 *
 * const client = new Client({
 *   bearerToken: 'your-bearer-token'
 * });
 *
 * // Get user information
 * const user = await client.users.getUser('783214');
 *
 * // Get followers with pagination
 * const followers = await client.users.getFollowers('783214', {
 *   maxResults: 10,
 *   userFields: ['id', 'name', 'username']
 * });
 *
 * // Iterate through followers
 * for await (const follower of followers) {
 *   console.log(follower.username);
 * }
 * ```
 *
 * @category Client
 */
declare class Client {
    /** Base URL for API requests */
    readonly baseUrl: string;
    /** Bearer token for authentication */
    readonly bearerToken?: string;
    /** OAuth2 access token */
    readonly accessToken?: string;
    /** OAuth1 instance for authentication */
    readonly oauth1?: any;
    /** Headers for requests */
    readonly headers: Headers;
    /** Request timeout in milliseconds */
    readonly timeout: number;
    /** Whether to automatically retry failed requests */
    readonly retry: boolean;
    /** Maximum number of retry attempts */
    readonly maxRetries: number;
    /** HTTP client for making requests */
    readonly httpClient: HttpClient;
    /** general client */
    readonly general: GeneralClient;
    /** account activity client */
    readonly accountActivity: AccountActivityClient;
    /** community notes client */
    readonly communityNotes: CommunityNotesClient;
    /** compliance client */
    readonly compliance: ComplianceClient;
    /** connections client */
    readonly connections: ConnectionsClient;
    /** users client */
    readonly users: UsersClient;
    /** news client */
    readonly news: NewsClient;
    /** spaces client */
    readonly spaces: SpacesClient;
    /** activity client */
    readonly activity: ActivityClient;
    /** usage client */
    readonly usage: UsageClient;
    /** trends client */
    readonly trends: TrendsClient;
    /** posts client */
    readonly posts: PostsClient;
    /** direct messages client */
    readonly directMessages: DirectMessagesClient;
    /** communities client */
    readonly communities: CommunitiesClient;
    /** media client */
    readonly media: MediaClient;
    /** webhooks client */
    readonly webhooks: WebhooksClient;
    /** stream client */
    readonly stream: StreamClient;
    /** lists client */
    readonly lists: ListsClient;
    /**
     * Creates a new X API client instance
     *
     * @param config - Configuration options for the client
     *
     * @example
     * ```typescript
     * // Bearer token authentication
     * const client = new Client({
     *   bearerToken: 'your-bearer-token'
     * });
     *
     * // OAuth2 authentication
     * const client = new Client({
     *   accessToken: 'your-access-token'
     * });
     *
     * // OAuth1 authentication
     * const client = new Client({
     *   oauth1: oauth1Instance
     * });
     * ```
     */
    constructor(config: ClientConfig | any);
    /**
     * Make an authenticated request to the X API
     *
     * This method handles authentication, request formatting, and error handling
     * for all API requests. It automatically adds the appropriate authentication
     * headers based on the client configuration.
     *
     * @param method - HTTP method (GET, POST, PUT, DELETE, etc.)
     * @param path - API endpoint path (e.g., '/2/users/by/username/username')
     * @param options - Request options including timeout, headers, and body
     * @returns Promise that resolves to the parsed response data
     *
     * @example
     * ```typescript
     * // GET request
     * const user = await client.request('GET', '/2/users/by/username/username', {
     *   timeout: 5000
     * });
     *
     * // POST request with body
     * const result = await client.request('POST', '/2/tweets', {
     *   body: JSON.stringify({ text: 'Hello World!' })
     * });
     * ```
     *
     * @throws {ApiError} When the API returns an error response
     */
    request<T = any>(method: string, path: string, options?: RequestOptions): Promise<T>;
    /**
     * Check if the OAuth2 token is expired
     */
    isTokenExpired(): boolean;
    /**
     * Refresh the OAuth2 token
     */
    refreshToken(): Promise<void>;
    /**
     * Get the current authentication status
     */
    isAuthenticated(): boolean;
    /**
     * Map OpenAPI security scheme names to internal authentication types
     * @param securitySchemeName The security scheme name from OpenAPI
     * @returns Array of internal authentication types
     */
    mapSecuritySchemeToAuthTypes(securitySchemeName: string): string[];
    /**
     * Select the best authentication method based on endpoint requirements and available credentials
     *
     * Priority strategy:
     * 1. If endpoint only accepts one method, use that (if available)
     * 2. If endpoint accepts multiple methods:
     *    - For write operations (POST/PUT/DELETE): Prefer OAuth1 > OAuth2 User Token > Bearer Token
     *    - For read operations (GET): Prefer Bearer Token > OAuth2 User Token > OAuth1
     *    - This allows Bearer Token for read-only operations while using user context for writes
     *
     * @param method HTTP method (GET, POST, etc.)
     * @param securityRequirements Security requirements from OpenAPI spec (array of security requirement objects)
     * @returns Selected auth method: 'bearer_token', 'oauth2_user_context', 'oauth1', or null if none available
     */
    private selectAuthMethod;
    /**
     * Validate that the required authentication method is available
     * @param requiredAuthTypes Array of required authentication types (OpenAPI security scheme names)
     * @param operationName Name of the operation for error messages
     */
    validateAuthentication(requiredAuthTypes: string[], operationName: string): void;
    /**
     * Get available authentication types
     */
    getAvailableAuthTypes(): string[];
}

/**
 * OAuth2 authentication utilities for the X API.
 */
/**
 * OAuth2 configuration options
 */
interface OAuth2Config {
    /** Client ID */
    clientId: string;
    /** Client secret (optional for public clients) */
    clientSecret?: string;
    /** Redirect URI */
    redirectUri: string;
    /** Scopes to request */
    scope?: string[];
}
/**
 * OAuth2 token response
 */
interface OAuth2Token {
    /** Access token */
    access_token: string;
    /** Token type */
    token_type: string;
    /** Expiration time in seconds */
    expires_in: number;
    /** Refresh token */
    refresh_token?: string;
    /** Scopes granted */
    scope?: string;
}
/**
 * OAuth2 authentication handler
 */
declare class OAuth2 {
    private config;
    private token?;
    private tokenExpiresAt?;
    private codeVerifier?;
    private codeChallenge?;
    constructor(config: OAuth2Config);
    /**
     * Get the authorization URL
     * @param state Optional state parameter for security
     * @returns Authorization URL
     */
    getAuthorizationUrl(state?: string): Promise<string>;
    /**
     * Exchange authorization code for tokens
     * @param code Authorization code from callback
     * @param codeVerifier Optional code verifier for PKCE
     * @returns Promise with OAuth2 token
     */
    exchangeCode(code: string, codeVerifier?: string): Promise<OAuth2Token>;
    /**
     * Refresh an access token using a refresh token
     * @param refreshToken The refresh token to use (uses stored token if not provided)
     * @returns Promise with new OAuth2 token
     */
    refreshToken(refreshToken?: string): Promise<OAuth2Token>;
    /**
     * Get the current token
     * @returns Current OAuth2 token if available
     */
    getToken(): OAuth2Token | undefined;
    /**
     * Set a token directly (useful for restoring from storage)
     * @param token The OAuth2 token to set
     * @param expiresAt Optional timestamp (ms) when the token expires
     */
    setToken(token: OAuth2Token, expiresAt?: number): void;
    /**
     * Check if the current token is expired or about to expire
     * @param bufferSeconds Number of seconds before expiry to consider as "expiring" (default: 60)
     * @returns True if token is expired or missing
     */
    isTokenExpired(bufferSeconds?: number): boolean;
    /**
     * Get the current code verifier (for PKCE)
     * @returns Current code verifier if available
     */
    getCodeVerifier(): string | undefined;
    /**
     * Manually set PKCE parameters
     * @param codeVerifier The code verifier to use
     * @param codeChallenge Optional code challenge (will be generated if not provided)
     */
    setPkceParameters(codeVerifier: string, codeChallenge?: string): Promise<void>;
    /**
     * Get the current code challenge (for PKCE)
     * @returns Current code challenge if available
     */
    getCodeChallenge(): string | undefined;
    /**
     * Base64 encode a string (with fallback for environments without btoa)
     * @param str String to encode
     * @returns Base64 encoded string
     */
    private _base64Encode;
}

/**
 * OAuth1 authentication utilities for the X API.
 */
/**
 * OAuth1 configuration options
 */
interface OAuth1Config {
    /** API Key (Consumer Key) */
    apiKey: string;
    /** API Secret (Consumer Secret) */
    apiSecret: string;
    /** Callback URL for OAuth flow */
    callback: string;
    /** Access Token (if already obtained) */
    accessToken?: string;
    /** Access Token Secret (if already obtained) */
    accessTokenSecret?: string;
}
/**
 * OAuth1 request token response
 */
interface OAuth1RequestToken {
    /** OAuth token */
    oauthToken: string;
    /** OAuth token secret */
    oauthTokenSecret: string;
}
/**
 * OAuth1 access token response
 */
interface OAuth1AccessToken {
    /** Access token */
    accessToken: string;
    /** Access token secret */
    accessTokenSecret: string;
}
/**
 * OAuth1 authentication handler
 */
declare class OAuth1 {
    private config;
    requestToken?: OAuth1RequestToken;
    accessToken?: OAuth1AccessToken;
    constructor(config: OAuth1Config);
    /**
     * Get the authorization URL for OAuth1 flow
     * @param loginWithX Whether to use "Log in with X" flow
     * @returns Authorization URL
     */
    getAuthorizationUrl(loginWithX?: boolean): string;
    /**
     * Get request token to start OAuth1 flow
     * @returns Promise with request token
     */
    getRequestToken(): Promise<OAuth1RequestToken>;
    /**
     * Exchange verifier for access token
     * @param verifier OAuth verifier from callback or PIN
     * @returns Promise with access token
     */
    getAccessToken(verifier: string): Promise<OAuth1AccessToken>;
    /**
     * Build OAuth1 authorization header
     * @param method HTTP method
     * @param url Request URL
     * @param body Request body
     * @returns Promise that resolves to OAuth1 authorization header string
     */
    private _buildOAuthHeader;
    /**
     * Build parameter string for OAuth signature
     * @param oauthParams OAuth parameters
     * @param body Request body
     * @returns Parameter string
     */
    private _buildParamString;
    /**
     * URL encode string according to OAuth1 specification
     * @param str String to encode
     * @returns Encoded string
     */
    private _encode;
    /**
     * Convenience method to start the OAuth1 flow
     * @param loginWithX Whether to use "Log in with X" flow
     * @returns Promise that resolves to the authorization URL
     */
    startOAuthFlow(loginWithX?: boolean): Promise<string>;
    /**
     * Build OAuth1 authorization header for API requests
     * @param method HTTP method
     * @param url Request URL
     * @param body Request body
     * @returns Promise that resolves to OAuth1 authorization header string
     */
    buildRequestHeader(method: string, url: string, body?: string): Promise<string>;
}

/**
 * Environment-agnostic cryptographic utilities for the X API SDK.
 * Provides HMAC-SHA1 implementation that works in Node.js, browser, and React Native environments.
 */
/**
 * HMAC-SHA1 implementation that works in Node.js, browser, and React Native environments
 */
declare class CryptoUtils {
    /**
     * Generate HMAC-SHA1 signature
     * @param key Signing key
     * @param message Message to sign
     * @returns Base64 encoded signature
     */
    static hmacSha1(key: string, message: string): Promise<string>;
    /**
     * Node.js native HMAC-SHA1 implementation
     */
    private static _nodeHmacSha1;
    /**
     * Web Crypto API HMAC-SHA1 implementation
     */
    private static _webCryptoHmacSha1;
    /**
     * Polyfill HMAC-SHA1 implementation using pure JavaScript
     * This is a fallback that works everywhere including React Native
     */
    private static _polyfillHmacSha1;
    /**
     * Pure JavaScript SHA-1 implementation
     */
    private static _sha1;
    /**
     * Convert string to byte array
     */
    private static _stringToBytes;
    /**
     * Convert string to ArrayBuffer
     */
    private static _stringToArrayBuffer;
    /**
     * Convert ArrayBuffer to base64 string
     */
    private static _arrayBufferToBase64;
    /**
     * Generate a random nonce for OAuth
     * @param length Length of the nonce
     * @returns Random nonce string
     */
    static generateNonce(length?: number): string;
    /**
     * Generate timestamp for OAuth
     * @returns Unix timestamp as string
     */
    static generateTimestamp(): string;
    /**
     * Generate a cryptographically secure random string for PKCE code verifier
     * @param length Length of the code verifier (43-128 characters recommended)
     * @returns Random code verifier string
     */
    static generateCodeVerifier(length?: number): string;
    /**
     * Generate PKCE code challenge from code verifier
     * @param codeVerifier The code verifier string
     * @returns Base64url encoded SHA256 hash of the code verifier
     */
    static generateCodeChallenge(codeVerifier: string): Promise<string>;
    /**
     * Node.js native SHA256 implementation for PKCE
     */
    private static _nodeSha256;
    /**
     * Web Crypto API SHA256 implementation for PKCE
     */
    private static _webCryptoSha256;
    /**
     * Polyfill SHA256 implementation for PKCE
     * Pure JavaScript implementation that works in React Native and other environments
     */
    private static _polyfillSha256;
    /**
     * Pure JavaScript SHA-256 implementation
     */
    private static _sha256;
    /**
     * Convert ArrayBuffer or Uint8Array to base64url encoding (RFC 7636)
     */
    private static _base64UrlEncode;
}
/**
 * Convenience function for HMAC-SHA1
 * @param key Signing key
 * @param message Message to sign
 * @returns Promise that resolves to base64 encoded signature
 */
declare function hmacSha1(key: string, message: string): Promise<string>;
/**
 * Convenience function for generating nonce
 * @param length Length of the nonce
 * @returns Random nonce string
 */
declare function generateNonce(length?: number): string;
/**
 * Convenience function for generating timestamp
 * @returns Unix timestamp as string
 */
declare function generateTimestamp(): string;
/**
 * Convenience function for generating PKCE code verifier
 * @param length Length of the code verifier
 * @returns Random code verifier string
 */
declare function generateCodeVerifier(length?: number): string;
/**
 * Convenience function for generating PKCE code challenge
 * @param codeVerifier The code verifier string
 * @returns Promise that resolves to base64url encoded SHA256 hash
 */
declare function generateCodeChallenge(codeVerifier: string): Promise<string>;

/**
 * Stream listener interfaces for event-driven streaming.
 *
 * This module provides interfaces for handling streaming events in an event-driven manner,
 * similar to how Tweepy works in Python.
 */
/**
 * Base stream listener interface for handling streaming events
 */
interface StreamListener<T = any> {
    /** Called when new data is received from the stream */
    onData?(data: T): void;
    /** Called when an error occurs in the stream */
    onError?(error: Error): void;
    /** Called when the stream connects successfully */
    onConnect?(): void;
    /** Called when the stream disconnects */
    onDisconnect?(): void;
}
/**
 * Tweet-specific stream listener interface
 */
interface TweetStreamListener extends StreamListener<any> {
    onData?(tweet: any): void;
}

/**
 * Pagination utilities for the X API.
 *
 * This module provides comprehensive pagination support for the X API, including
 * automatic iteration, manual page control, and metadata access.
 *
 * @category Pagination
 */
/**
 * Paginated response interface
 *
 * Represents the structure of a paginated API response from the X API.
 *
 * @template T - The type of items in the response
 */
interface PaginatedResponse<T> {
    /** Array of items in the current page */
    data: T[];
    /** Pagination metadata */
    meta?: {
        /** Number of results in the current page */
        resultCount?: number;
        /** Token for fetching the next page */
        nextToken?: string;
        /** Token for fetching the previous page */
        previousToken?: string;
    };
    /** Additional included objects (users, tweets, etc.) */
    includes?: Record<string, any>;
    /** Any errors in the response */
    errors?: Array<any>;
}
/**
 * X API paginator with rich functionality
 *
 * This class provides comprehensive pagination support for the X API, including:
 * - Automatic iteration with `for await...of` loops
 * - Manual page control with `fetchNext()` and `fetchPrevious()`
 * - Metadata access for pagination tokens and counts
 * - Error handling and rate limit detection
 * - Support for both forward and backward pagination
 *
 * @template T - The type of items being paginated
 *
 * @example
 * ```typescript
 * // Automatic iteration
 * const followers = await client.users.getFollowers('783214');
 * for await (const follower of followers) {
 *   console.log(follower.username);
 * }
 *
 * // Manual control
 * const followers = await client.users.getFollowers('783214');
 * await followers.fetchNext();
 * console.log(followers.items.length); // Number of followers
 * console.log(followers.meta.nextToken); // Next page token
 *
 * // Check status
 * if (!followers.done) {
 *   await followers.fetchNext();
 * }
 * ```
 *
 * @category Pagination
 */
declare class Paginator<T> implements AsyncIterable<T> {
    private fetchPage;
    private currentToken?;
    private previousToken?;
    private hasMore;
    private isDone;
    private allItems;
    private currentMeta?;
    private currentIncludes?;
    private currentErrors?;
    private rateLimitHit;
    /**
     * Creates a new paginator instance
     *
     * @param fetchPage - Function that fetches a page of data given a pagination token
     */
    constructor(fetchPage: (token?: string) => Promise<PaginatedResponse<T>>);
    /**
     * Get all fetched items
     */
    get items(): T[];
    /**
     * Get current pagination metadata
     */
    get meta(): any;
    /**
     * Get current includes data
     */
    get includes(): Record<string, any> | undefined;
    /**
     * Get current errors
     */
    get errors(): Array<any> | undefined;
    /**
     * Check if pagination is done
     */
    get done(): boolean;
    /**
     * Check if rate limit was hit
     */
    get rateLimited(): boolean;
    /**
     * Fetch the next page and add items to current instance
     *
     * This method fetches the next page of data and appends the items to the
     * current paginator instance. It updates the pagination state and metadata.
     *
     * @example
     * ```typescript
     * const followers = await client.users.getFollowers('783214');
     * await followers.fetchNext(); // Fetch first page
     * console.log(followers.items.length); // Number of followers
     *
     * if (!followers.done) {
     *   await followers.fetchNext(); // Fetch second page
     *   console.log(followers.items.length); // Total followers across pages
     * }
     * ```
     *
     * @throws {Error} When the API request fails
     */
    fetchNext(): Promise<void>;
    /**
     * Get next page as a new instance
     *
     * This method creates a new paginator instance that starts from the next page,
     * without affecting the current paginator's state.
     *
     * @example
     * ```typescript
     * const followers = await client.users.getFollowers('783214');
     * await followers.fetchNext(); // Fetch first page
     *
     * if (!followers.done) {
     *   const nextPage = await followers.next(); // Get next page as new instance
     *   console.log(followers.items.length); // Still first page
     *   console.log(nextPage.items.length); // Second page
     * }
     * ```
     *
     * @returns New paginator instance for the next page
     */
    next(): Promise<Paginator<T>>;
    /**
     * Fetch previous page (if supported)
     */
    fetchPrevious(): Promise<void>;
    /**
     * Get previous page as a new instance
     */
    previous(): Promise<Paginator<T>>;
    /**
     * Fetch up to a specified number of additional items
     */
    fetchLast(count: number): Promise<void>;
    /**
     * Reset paginator to initial state
     */
    reset(): void;
    /**
     * Iterator for all fetched items
     */
    [Symbol.iterator](): Iterator<T>;
    /**
     * Async iterator that fetches pages automatically
     */
    [Symbol.asyncIterator](): AsyncIterator<T>;
}
/**
 * Specialized paginators for different data types
 */
/**
 * Paginator for posts
 */
declare class PostPaginator extends Paginator<any> {
    get posts(): any[];
}
/**
 * Paginator for users
 */
declare class UserPaginator extends Paginator<any> {
    get users(): any[];
}
/**
 * Paginator for events (like DM events)
 */
declare class EventPaginator extends Paginator<any> {
    get events(): any[];
}

export { models$g as AccountActivity, AccountActivityClient, models$9 as Activity, ActivityClient, ApiError, ApiResponse, Client, ClientConfig, models$4 as Communities, CommunitiesClient, models$f as CommunityNotes, CommunityNotesClient, models$e as Compliance, ComplianceClient, models$d as Connections, ConnectionsClient, CryptoUtils, models$5 as DirectMessages, DirectMessagesClient, EventPaginator, models$h as General, GeneralClient, HttpClient, RequestOptions$1 as HttpClientRequestOptions, HttpResponse, models as Lists, ListsClient, models$3 as Media, MediaClient, models$b as News, NewsClient, OAuth1, OAuth1AccessToken, OAuth1Config, OAuth1RequestToken, OAuth2, OAuth2Config, OAuth2Token, PaginatedResponse, PaginationMeta, Paginator, PostPaginator, models$6 as Posts, PostsClient, RequestOptions, schemas as Schemas, models$a as Spaces, SpacesClient, models$1 as Stream, StreamClient, StreamListener, models$7 as Trends, TrendsClient, TweetStreamListener, models$8 as Usage, UsageClient, UserPaginator, models$c as Users, UsersClient, models$2 as Webhooks, WebhooksClient, generateCodeChallenge, generateCodeVerifier, generateNonce, generateTimestamp, hmacSha1, httpClient };
