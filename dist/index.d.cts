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
 * OpenAPI Schema Types
 * Auto-generated from OpenAPI components/schemas
 *
 * @internal
 */
/**
 * The unique identifier of an Activity event.
 *
 * @public
 */
type ActivityEventId = string;
/**
 * An activity event or error that can be returned by the x activity streaming API.
 *
 * @public
 */
interface ActivityStreamResponse {
    data?: {
        eventType?: string;
        eventUuid?: ActivityEventId;
        filter?: ActivitySubscriptionFilter;
        includes?: Expansions;
        payload?: ActivityStreamingResponsePayload;
        tag?: string;
    };
    errors?: Array<Problem>;
}
/**
 * Schema type for ActivityStreamingResponsePayload
 *
 * @public
 */
type ActivityStreamingResponsePayload = ProfileUpdateActivityResponsePayload | NewsActivityResponsePayload | FollowActivityResponsePayload | Post | PostDeleteActivityResponsePayload | LikeWithPostAuthor;
/**
 * An XAA subscription filter.
 *
 * @public
 */
interface ActivitySubscriptionFilter {
    /** Optional direction filter for directional events. */
    direction?: "inbound" | "outbound";
    /** A keyword to filter on. */
    keyword?: Keyword;
    /** Unique identifier of a User */
    userId?: UserId;
}
/**
 * Schema type for AddChatGroupMembersActionSignatures
 *
 * @public
 */
interface AddChatGroupMembersActionSignatures {
    /** Base64-encoded message event detail. */
    encodedMessageEventDetail: string;
    messageEventSignature: AddChatGroupMembersActionSignaturesMessageEventSignature;
    /** Client-generated ID of the message being signed. */
    messageId: string;
    /** Payload string the client signed; used only in server-side failure logs. */
    signaturePayload?: string;
}
/**
 * Schema type for AddChatGroupMembersActionSignaturesMessageEventSignature
 *
 * @public
 */
interface AddChatGroupMembersActionSignaturesMessageEventSignature {
    /** List of signing key information for message verification. */
    messageSigningKeyInfoList?: Array<AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
    /** The version of the public key used for signing. */
    publicKeyVersion: string;
    /** The signature of the message event. */
    signature: string;
    /** The version of the signature algorithm. */
    signatureVersion: string;
    /** The public key used for signing. */
    signingPublicKey?: string;
}
/**
 * Schema type for AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList
 *
 * @public
 */
interface AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
    /** The member ID associated with this signing key. */
    memberId?: string;
    /** The version of the public key. */
    publicKeyVersion?: string;
    /** The signing public key. */
    signingPublicKey?: string;
}
/**
 * Schema type for AddChatGroupMembersConversationParticipantKeys
 *
 * @public
 */
interface AddChatGroupMembersConversationParticipantKeys {
    /** Conversation key encrypted with this participant's public key. */
    encryptedConversationKey?: string;
    /** Version of the participant's public key used for encryption. */
    publicKeyVersion?: string;
    /** Participant user ID. */
    userId?: string;
}
/**
 * Schema type for AddChatGroupMembersRequest
 *
 * @public
 */
interface AddChatGroupMembersRequest {
    /** Cryptographic signatures for the action. */
    actionSignatures?: Array<AddChatGroupMembersActionSignatures>;
    /** Version of the new rotated conversation key. */
    conversationKeyVersion?: string;
    /** Encrypted conversation keys for each participant. */
    conversationParticipantKeys?: Array<AddChatGroupMembersConversationParticipantKeys>;
    /** Re-encrypted group avatar URL with new conversation key. */
    encryptedAvatarUrl?: string;
    /** Re-encrypted group title with new conversation key. */
    encryptedTitle?: string;
    /** List of user IDs to add to the group conversation. */
    userIds: Array<string>;
}
/**
 * Schema type for AddChatGroupMembersResponse
 *
 * @public
 */
interface AddChatGroupMembersResponse {
    data?: Post;
    errors?: Array<Problem>;
}
/**
 * Schema type for AddConversationKeysActionSignatures
 *
 * @public
 */
interface AddConversationKeysActionSignatures {
    /** Base64-encoded message event detail. */
    encodedMessageEventDetail: string;
    messageEventSignature: AddConversationKeysActionSignaturesMessageEventSignature;
    /** Client-generated ID of the message being signed. */
    messageId: string;
    /** Payload string the client signed; used only in server-side failure logs. */
    signaturePayload?: string;
}
/**
 * Schema type for AddConversationKeysActionSignaturesMessageEventSignature
 *
 * @public
 */
interface AddConversationKeysActionSignaturesMessageEventSignature {
    /** List of signing key information for message verification. */
    messageSigningKeyInfoList?: Array<AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
    /** The version of the public key used for signing. */
    publicKeyVersion: string;
    /** The signature of the message event. */
    signature: string;
    /** The version of the signature algorithm. */
    signatureVersion: string;
    /** The public key used for signing. */
    signingPublicKey?: string;
}
/**
 * Schema type for AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList
 *
 * @public
 */
interface AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
    /** The member ID associated with this signing key. */
    memberId?: string;
    /** The version of the public key. */
    publicKeyVersion?: string;
    /** The signing public key. */
    signingPublicKey?: string;
}
/**
 * Schema type for AddConversationKeysConversationParticipantKeys
 *
 * @public
 */
interface AddConversationKeysConversationParticipantKeys {
    /** Conversation key encrypted with this participant's public key. */
    encryptedConversationKey?: string;
    /** Version of the participant's public key used for encryption. */
    publicKeyVersion?: string;
    /** Participant user ID. */
    userId?: string;
}
/**
 * Schema type for AddConversationKeysRequest
 *
 * @public
 */
interface AddConversationKeysRequest$1 {
    /** Cryptographic signatures for the action. */
    actionSignatures?: Array<AddConversationKeysActionSignatures>;
    /** Base64-encoded key rotation payload for ratchet tree key management. */
    base64EncodedKeyRotation?: string;
    /** Version of the conversation encryption key (typically a timestamp in milliseconds). */
    conversationKeyVersion: string;
    /** Encrypted conversation keys for each participant. */
    conversationParticipantKeys: Array<AddConversationKeysConversationParticipantKeys>;
}
/**
 * Schema type for AddConversationKeysResponse
 *
 * @public
 */
interface AddConversationKeysResponse$1 {
    data?: AddConversationKeysResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for AddConversationKeysResponseData
 *
 * @public
 */
interface AddConversationKeysResponseData {
    /** Canonical ID of the conversation. */
    conversationId?: string;
    /** Sequence ID of the key change. */
    sequenceId?: string;
}
/**
 * Schema type for AddListsMemberRequest
 *
 * @public
 */
interface AddListsMemberRequest {
    userId: string;
}
/**
 * Schema type for AddListsMemberResponse
 *
 * @public
 */
interface AddListsMemberResponse {
    data?: AddListsMemberResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for AddListsMemberResponseData
 *
 * @public
 */
interface AddListsMemberResponseData {
    /** Indicates whether the user is a member of the List. */
    isMember: boolean;
}
/**
 * Schema type for AddUserPublicKeyPublicKey
 *
 * @public
 */
interface AddUserPublicKeyPublicKey {
    /** Signature over the identity public key. */
    identityPublicKeySignature?: string;
    /** Identity public key (base64 encoded). */
    publicKey?: string;
    /** Fingerprint of the identity public key. */
    publicKeyFingerprint?: string;
    /** Registration method for the public key. */
    registrationMethod?: string;
    /** Signing public key (base64 encoded). */
    signingPublicKey?: string;
    /** Signature over the signing public key. */
    signingPublicKeySignature?: string;
}
/**
 * Schema type for AddUserPublicKeyRequest
 *
 * @public
 */
interface AddUserPublicKeyRequest$1 {
    /** When true, the server generates a new version. */
    generateVersion?: boolean;
    publicKey: AddUserPublicKeyPublicKey;
    /** Public key version. */
    version: string;
}
/**
 * Schema type for AddUserPublicKeyResponse
 *
 * @public
 */
interface AddUserPublicKeyResponse$1 {
    data?: AddUserPublicKeyResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for AddUserPublicKeyResponseData
 *
 * @public
 */
interface AddUserPublicKeyResponseData {
    /** Juicebox recovery-service configuration for this key. */
    juiceboxConfig?: Record<string, any>;
    /** Version assigned to the registered public key. */
    publicKeyVersion?: string;
}
/**
 * Schema type for Analytics
 *
 * @public
 */
interface Analytics {
    appInstallAttempts?: number;
    appOpens?: number;
    bookmarks?: number;
    detailExpands?: number;
    emailTweet?: number;
    engagements?: number;
    follows?: number;
    hashtagClicks?: number;
    id?: string;
    impressions?: number;
    likes?: number;
    mediaViews?: number;
    permalinkClicks?: number;
    quoteTweets?: number;
    replies?: number;
    retweets?: number;
    shares?: number;
    timestamp?: string;
    /** Time-bucketed engagement metrics for the Post, one entry per granularity bucket. */
    timestampedMetrics?: AnalyticsTimestampedMetrics;
    unfollows?: number;
    unlikes?: number;
    urlClicks?: number;
    userProfileClicks?: number;
}
/**
 * Unique identifier of a Analytics
 *
 * @public
 */
type AnalyticsId = string;
/**
 * Time-bucketed engagement metrics for the Post, one entry per granularity bucket.
 *
 * @public
 */
type AnalyticsTimestampedMetrics = Array<{
    metrics?: {
        appInstallAttempts?: number | null;
        appOpens?: number | null;
        bookmarks?: number | null;
        detailExpands?: number | null;
        emailTweet?: number | null;
        engagements?: number | null;
        follows?: number | null;
        hashtagClicks?: number | null;
        impressions?: number | null;
        likes?: number | null;
        mediaViews?: number | null;
        permalinkClicks?: number | null;
        quoteTweets?: number | null;
        replies?: number | null;
        retweets?: number | null;
        shares?: number | null;
        unfollows?: number | null;
        unlikes?: number | null;
        urlClicks?: number | null;
        userProfileClicks?: number | null;
    } | null;
    timestamp?: string | null;
}>;
/**
 * Schema type for AppendMediaUploadRequest
 *
 * @public
 */
interface AppendMediaUploadRequest {
    /** The media chunk to upload. */
    media: string;
    /** The index of this segment in the upload sequence. */
    segmentIndex: number;
}
/**
 * Schema type for AppendMediaUploadResponse
 *
 * @public
 */
interface AppendMediaUploadResponse {
    data?: AppendMediaUploadResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for AppendMediaUploadResponseData
 *
 * @public
 */
interface AppendMediaUploadResponseData {
    /** Epoch seconds when the upload session expires. */
    expiresAt?: number;
}
/**
 * Schema type for ArticleCreateDraftContentState
 *
 * @public
 */
interface ArticleCreateDraftContentState {
    /** The text blocks that make up the article body. */
    blocks: Array<ArticleCreateDraftContentStateBlocks>;
    /** Non-text entities referenced by blocks (links, embedded posts, images, emoji,          markdown/code/tables, dividers, LaTeX). Full set matches article storage. */
    entities: Array<ArticleCreateDraftContentStateEntities>;
}
/**
 * Schema type for ArticleCreateDraftContentStateBlocks
 *
 * @public
 */
interface ArticleCreateDraftContentStateBlocks {
    data?: ArticleCreateDraftContentStateBlocksData;
    /** References to entries in entities. */
    entityRanges?: Array<ArticleCreateDraftContentStateBlocksEntityRanges>;
    /** Inline formatting ranges. */
    inlineStyleRanges?: Array<ArticleCreateDraftContentStateBlocksInlineStyleRanges>;
    /** Optional block key. */
    key?: string;
    /** The text content of this block. For latex entities, this holds the LaTeX source;          for divider/markdown/image/post atomic placeholders, typically a single space. */
    text: string;
    /** The block type. Use atomic for non-text embeds (image, post, markdown, divider, latex). */
    type: "unstyled" | "header-one" | "header-two" | "header-three" | "unordered-list-item" | "ordered-list-item" | "blockquote" | "atomic";
}
/**
 * Schema type for ArticleCreateDraftContentStateBlocksData
 *
 * @public
 */
interface ArticleCreateDraftContentStateBlocksData {
    /** Cashtag spans in this block. */
    cashtags?: Array<ArticleCreateDraftContentStateBlocksDataCashtags>;
    /** Hashtag spans in this block. */
    hashtags?: Array<ArticleCreateDraftContentStateBlocksDataHashtags>;
    /** Mention spans in this block. */
    mentions?: Array<ArticleCreateDraftContentStateBlocksDataMentions>;
    /** URL spans in this block. */
    urls?: Array<ArticleCreateDraftContentStateBlocksDataUrls>;
}
/**
 * Schema type for ArticleCreateDraftContentStateBlocksDataCashtags
 *
 * @public
 */
interface ArticleCreateDraftContentStateBlocksDataCashtags {
    /** Start index of the tagged span. */
    fromIndex: number;
    /** The tagged text. */
    text: string;
    /** End index of the tagged span. */
    toIndex: number;
}
/**
 * Schema type for ArticleCreateDraftContentStateBlocksDataHashtags
 *
 * @public
 */
interface ArticleCreateDraftContentStateBlocksDataHashtags {
    /** Start index of the tagged span. */
    fromIndex: number;
    /** The tagged text. */
    text: string;
    /** End index of the tagged span. */
    toIndex: number;
}
/**
 * Schema type for ArticleCreateDraftContentStateBlocksDataMentions
 *
 * @public
 */
interface ArticleCreateDraftContentStateBlocksDataMentions {
    /** Start index of the tagged span. */
    fromIndex: number;
    /** The tagged text. */
    text: string;
    /** End index of the tagged span. */
    toIndex: number;
}
/**
 * Schema type for ArticleCreateDraftContentStateBlocksDataUrls
 *
 * @public
 */
interface ArticleCreateDraftContentStateBlocksDataUrls {
    /** Start index of the tagged span. */
    fromIndex: number;
    /** The tagged text. */
    text: string;
    /** End index of the tagged span. */
    toIndex: number;
}
/**
 * Schema type for ArticleCreateDraftContentStateBlocksEntityRanges
 *
 * @public
 */
interface ArticleCreateDraftContentStateBlocksEntityRanges {
    /** Index into the entities array. */
    key: number;
    /** Length of the entity range. */
    length: number;
    /** Start offset in the text. */
    offset: number;
}
/**
 * Schema type for ArticleCreateDraftContentStateBlocksInlineStyleRanges
 *
 * @public
 */
interface ArticleCreateDraftContentStateBlocksInlineStyleRanges {
    /** Length of the styled range. */
    length: number;
    /** Start offset in the text. */
    offset: number;
    /** The inline style. */
    style: "bold" | "italic" | "strikethrough";
}
/**
 * Schema type for ArticleCreateDraftContentStateEntities
 *
 * @public
 */
interface ArticleCreateDraftContentStateEntities {
    /** The entity key referenced by entity_ranges. */
    key: string;
    value: ArticleCreateDraftContentStateEntitiesValue;
}
/**
 * Schema type for ArticleCreateDraftContentStateEntitiesValue
 *
 * @public
 */
interface ArticleCreateDraftContentStateEntitiesValue {
    data: ArticleCreateDraftContentStateEntitiesValueData;
    /** Whether the entity can be edited. Recommended: immutable for post, image, divider, latex; mutable for link and markdown (matches the in-app Articles composer). */
    mutability: "immutable" | "mutable" | "segmented";
    /** The entity type. markdown carries code blocks, GFM tables, and other Markdown;          emoji maps to backend TWEMOJI (Twemoji is internal); divider is a horizontal rule;          latex renders TeX from the block text. Tables are not a separate enum value — use          type markdown with a pipe table in data.markdown. */
    type: "post" | "link" | "image" | "emoji" | "markdown" | "divider" | "latex";
}
/**
 * Schema type for ArticleCreateDraftContentStateEntitiesValueData
 *
 * @public
 */
interface ArticleCreateDraftContentStateEntitiesValueData {
    /** Caption text. */
    caption?: string;
    /** Opaque entity key. Used with type emoji (and reserved for other keyed embeds) to match in-app Articles composer payloads. */
    entityKey?: string;
    /** Markdown body for type markdown. Use fenced code blocks (```lang ... ```) for code. Max weighted length is enforced by the Articles backend (10,000 per article). */
    markdown?: string;
    /** Media keys. Used with type image. */
    mediaItems?: Array<ArticleCreateDraftContentStateEntitiesValueDataMediaItems>;
    /** The ID of the post to embed. Used with type post. */
    postId?: string;
    /** The URL. Used with type link. */
    url?: string;
}
/**
 * Schema type for ArticleCreateDraftContentStateEntitiesValueDataMediaItems
 *
 * @public
 */
interface ArticleCreateDraftContentStateEntitiesValueDataMediaItems {
    mediaCategory: string;
    mediaId: string;
}
/**
 * Schema type for ArticleCreateDraftCoverMedia
 *
 * @public
 */
interface ArticleCreateDraftCoverMedia {
    /** The media category (e.g. tweet_image). */
    mediaCategory: string;
    /** The media ID from the media upload endpoint. */
    mediaId: string;
}
/**
 * Schema type for ArticleCreateDraftRequest
 *
 * @public
 */
interface ArticleCreateDraftRequest$1 {
    contentState: ArticleCreateDraftContentState;
    coverMedia?: ArticleCreateDraftCoverMedia;
    /** The title of the Article. */
    title: string;
}
/**
 * Schema type for ArticleCreateDraftResponse
 *
 * @public
 */
interface ArticleCreateDraftResponse$1 {
    data?: ArticleCreateDraftResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for ArticleCreateDraftResponseData
 *
 * @public
 */
interface ArticleCreateDraftResponseData {
    /** Unique identifier of the created draft Article. */
    id: string;
    /** The title of the draft Article. */
    title: string;
}
/**
 * Schema type for ArticlePublishResponse
 *
 * @public
 */
interface ArticlePublishResponse$1 {
    data?: ArticlePublishResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for ArticlePublishResponseData
 *
 * @public
 */
interface ArticlePublishResponseData {
    /** The ID of the post created for the published Article. */
    postId: string;
}
/**
 * Schema type for BlockUsersDmsResponse
 *
 * @public
 */
interface BlockUsersDmsResponse {
    data?: BlockUsersDmsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for BlockUsersDmsResponseData
 *
 * @public
 */
interface BlockUsersDmsResponseData {
    /** Indicates whether the target user is DM-blocked. */
    blocked: boolean;
}
/**
 * Schema type for ChatConversation
 *
 * @public
 */
interface ChatConversation {
    adminIds?: Array<string>;
    createdAt?: string;
    groupAvatarUrl?: string;
    groupName?: string;
    id?: string;
    isMuted?: boolean;
    memberIds?: Array<string>;
    messageTtlMs?: number;
    participantIds?: Array<string>;
    screenCaptureBlockingEnabled?: boolean;
    screenCaptureDetectionEnabled?: boolean;
    type?: string;
    updatedAt?: string;
}
/**
 * Schema type for ChatMediaUploadAppendRequest
 *
 * @public
 */
interface ChatMediaUploadAppendRequest {
    /** The XChat conversation the upload belongs to. */
    conversationId: string;
    /** The media segment bytes: base64-encoded in JSON bodies, raw bytes in multipart bodies. */
    media: string;
    /** The media hash key returned by the initialize step. */
    mediaHashKey: string;
    /** The index of this segment in the upload sequence. */
    segmentIndex: number;
}
/**
 * Schema type for ChatMediaUploadAppendResponse
 *
 * @public
 */
interface ChatMediaUploadAppendResponse {
    data?: ChatMediaUploadAppendResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for ChatMediaUploadAppendResponseData
 *
 * @public
 */
interface ChatMediaUploadAppendResponseData {
    /** Epoch seconds when the upload session expires. */
    expiresAt?: number;
}
/**
 * Schema type for ChatMediaUploadFinalizeRequest
 *
 * @public
 */
interface ChatMediaUploadFinalizeRequest {
    /** The XChat conversation the upload belongs to. */
    conversationId: string;
    /** The media hash key returned by the initialize step. */
    mediaHashKey: string;
    /** Optional message identifier associated with the upload. */
    messageId?: string;
    /** Total number of uploaded parts, as a numeric string. */
    numParts: string;
    /** Optional TTL for the media in milliseconds, as a numeric string. */
    ttlMsec?: string;
}
/**
 * Schema type for ChatMediaUploadFinalizeResponse
 *
 * @public
 */
interface ChatMediaUploadFinalizeResponse {
    data?: ChatMediaUploadFinalizeResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for ChatMediaUploadFinalizeResponseData
 *
 * @public
 */
interface ChatMediaUploadFinalizeResponseData {
    /** Whether the upload was finalized. */
    success: boolean;
}
/**
 * Schema type for ChatMediaUploadInitializeRequest
 *
 * @public
 */
interface ChatMediaUploadInitializeRequest {
    /** The XChat conversation the upload belongs to. */
    conversationId: string;
    /** Total size of the media upload in bytes. */
    totalBytes: number;
}
/**
 * Schema type for ChatMediaUploadInitializeResponse
 *
 * @public
 */
interface ChatMediaUploadInitializeResponse {
    data?: ChatMediaUploadInitializeResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for ChatMediaUploadInitializeResponseData
 *
 * @public
 */
interface ChatMediaUploadInitializeResponseData {
    /** Canonical ID of the conversation. */
    conversationId: string;
    /** Hash key addressing the uploaded media. */
    mediaHashKey: string;
    /** Upload session ID. */
    sessionId: string;
}
/**
 * Schema type for ChatMessageEvent
 *
 * @public
 */
interface ChatMessageEvent {
    conversationId?: string;
    conversationToken?: string;
    createdAt?: string;
    encodedEvent?: string;
    id?: string;
    isTrusted?: boolean;
    messageEventSignature?: Record<string, any>;
    previousId?: string;
    senderId?: string;
}
/**
 * Schema type for Community
 *
 * @public
 */
interface Community {
    access?: string;
    createdAt?: string;
    description?: string;
    id?: string;
    joinPolicy?: string;
    memberCount?: number;
    name?: string;
}
/**
 * Unique identifier of a Community
 *
 * @public
 */
type CommunityId = string;
/**
 * Schema type for ComplianceJob
 *
 * @public
 */
interface ComplianceJob {
    createdAt?: string;
    downloadExpiresAt?: string;
    downloadUrl?: string;
    id?: string;
    name?: string;
    resumable?: boolean;
    status?: string;
    type?: string;
    uploadExpiresAt?: string;
    uploadUrl?: string;
}
/**
 * Schema type for Connection
 *
 * @public
 */
interface Connection {
    clientIp?: string;
    connectedAt?: string;
    disconnectReason?: string;
    disconnectedAt?: string;
    endpointName?: string;
    id?: string;
}
/**
 * A two-letter ISO 3166-1 alpha-2 country code.
 *
 * @public
 */
type CountryCode = string;
/**
 * Schema type for CreateAccountActivitySubscriptionRequest
 *
 * @public
 */
type CreateAccountActivitySubscriptionRequest = Record<string, any>;
/**
 * Schema type for CreateAccountActivitySubscriptionResponse
 *
 * @public
 */
interface CreateAccountActivitySubscriptionResponse {
    data?: CreateAccountActivitySubscriptionResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateAccountActivitySubscriptionResponseData
 *
 * @public
 */
interface CreateAccountActivitySubscriptionResponseData {
    /** Whether the subscription is active. */
    subscribed: boolean;
}
/**
 * Schema type for CreateActivitySubscriptionFilter
 *
 * @public
 */
interface CreateActivitySubscriptionFilter {
    /** Optional direction filter for directional events. Not supported for mute.* or block.* events. */
    direction?: "inbound" | "outbound";
    /** Optional keyword filter. */
    keyword?: string;
    /** User the subscription is scoped to. For mute.* and block.* events, this must be the authenticated source user. */
    userId?: string;
}
/**
 * Schema type for CreateActivitySubscriptionRequest
 *
 * @public
 */
interface CreateActivitySubscriptionRequest {
    /** Activity event type in dot notation. */
    eventType: "profile.update.bio" | "profile.update.profile_picture" | "profile.update.banner_picture" | "profile.update.screenname" | "profile.update.geo" | "profile.update.url" | "profile.update.verified_badge" | "profile.update.affiliate_badge" | "profile.update.handle" | "news.new" | "follow.follow" | "follow.unfollow" | "spaces.start" | "spaces.end" | "chat.received" | "chat.sent" | "chat.conversation_join" | "dm.sent" | "dm.received" | "dm.indicate_typing" | "dm.read" | "post.create" | "post.delete" | "post.mention.create" | "like.create" | "mute.mute" | "mute.unmute" | "block.block" | "block.unblock";
    filter: CreateActivitySubscriptionFilter;
    /** Optional caller-defined tag. */
    tag?: string;
    /** Webhook to deliver the subscription events to. */
    webhookId?: string;
}
/**
 * Schema type for CreateActivitySubscriptionResponse
 *
 * @public
 */
interface CreateActivitySubscriptionResponse {
    data?: CreateActivitySubscriptionResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateActivitySubscriptionResponseData
 *
 * @public
 */
interface CreateActivitySubscriptionResponseData {
    subscription?: CreateActivitySubscriptionResponseDataSubscription;
}
/**
 * Schema type for CreateActivitySubscriptionResponseDataSubscription
 *
 * @public
 */
interface CreateActivitySubscriptionResponseDataSubscription {
    /** Subscription creation time. */
    createdAt?: string;
    /** Activity event type in dot notation. */
    eventType?: string;
    filter?: CreateActivitySubscriptionResponseDataSubscriptionFilter;
    /** Unique identifier of the subscription. */
    subscriptionId?: string;
    /** Optional caller-defined tag. */
    tag?: string;
    /** Subscription last-update time. */
    updatedAt?: string;
    /** Webhook receiving the subscription events. */
    webhookId?: string;
}
/**
 * Schema type for CreateActivitySubscriptionResponseDataSubscriptionFilter
 *
 * @public
 */
interface CreateActivitySubscriptionResponseDataSubscriptionFilter {
    /** Optional direction filter for directional events. Not present for mute.* or block.* events. */
    direction?: string;
    /** Optional keyword filter. */
    keyword?: string;
    /** User the subscription is scoped to. */
    userId?: string;
}
/**
 * Schema type for CreateChatConversationActionSignatures
 *
 * @public
 */
interface CreateChatConversationActionSignatures {
    /** Base64-encoded message event detail. */
    encodedMessageEventDetail: string;
    messageEventSignature: CreateChatConversationActionSignaturesMessageEventSignature;
    /** Client-generated ID of the message being signed. */
    messageId: string;
    /** Payload string the client signed; used only in server-side failure logs. */
    signaturePayload?: string;
}
/**
 * Schema type for CreateChatConversationActionSignaturesMessageEventSignature
 *
 * @public
 */
interface CreateChatConversationActionSignaturesMessageEventSignature {
    /** List of signing key information for message verification. */
    messageSigningKeyInfoList?: Array<CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
    /** The version of the public key used for signing. */
    publicKeyVersion: string;
    /** The signature of the message event. */
    signature: string;
    /** The version of the signature algorithm. */
    signatureVersion: string;
    /** The public key used for signing. */
    signingPublicKey?: string;
}
/**
 * Schema type for CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList
 *
 * @public
 */
interface CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
    /** The member ID associated with this signing key. */
    memberId?: string;
    /** The version of the public key. */
    publicKeyVersion?: string;
    /** The signing public key. */
    signingPublicKey?: string;
}
/**
 * Schema type for CreateChatConversationConversationParticipantKeys
 *
 * @public
 */
interface CreateChatConversationConversationParticipantKeys {
    /** Conversation key encrypted with this participant's public key. */
    encryptedConversationKey?: string;
    /** Version of the participant's public key used for encryption. */
    publicKeyVersion?: string;
    /** Participant user ID. */
    userId?: string;
}
/**
 * Schema type for CreateChatConversationRequest
 *
 * @public
 */
interface CreateChatConversationRequest {
    /** Cryptographic signatures for the action. */
    actionSignatures?: Array<CreateChatConversationActionSignatures>;
    /** Base64-encoded key rotation payload. */
    base64EncodedKeyRotation?: string;
    /** Client-generated conversation ID. */
    conversationId: string;
    /** Version of the conversation encryption key. */
    conversationKeyVersion: string;
    /** Encrypted conversation keys for each participant. */
    conversationParticipantKeys: Array<CreateChatConversationConversationParticipantKeys>;
    /** User IDs of group admins. Defaults to the creator if omitted. */
    groupAdmins?: Array<string>;
    /** URL of the avatar image for the group conversation. */
    groupAvatarUrl?: string;
    /** Description for the group conversation. */
    groupDescription?: string;
    /** User IDs of group members to include in the conversation. */
    groupMembers: Array<string>;
    /** Display name for the group conversation. */
    groupName?: string;
    /** Message time-to-live in milliseconds. Messages expire after this duration. */
    ttlMsec?: string;
}
/**
 * Schema type for CreateChatConversationResponse
 *
 * @public
 */
interface CreateChatConversationResponse {
    data?: CreateChatConversationResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateChatConversationResponseData
 *
 * @public
 */
interface CreateChatConversationResponseData {
    /** Canonical ID of the created conversation. */
    conversationId: string;
    /** Sequence ID of the conversation key change. */
    conversationKeyChangeSequenceId?: string;
}
/**
 * Schema type for CreateCommunityNotesInfo
 *
 * @public
 */
interface CreateCommunityNotesInfo {
    /** Community Note classification. */
    classification: "misinformed_or_potentially_misleading" | "not_misleading";
    /** Whether the note is a media note. */
    isMediaNote?: boolean;
    /** Tags describing why the Post is misleading. */
    misleadingTags: Array<"disputed_claim_as_fact" | "factual_error" | "manipulated_media" | "misinterpreted_satire" | "missing_important_context" | "other" | "outdated_information">;
    /** The text summary of the Community Note (must contain a URL). */
    text: string;
    /** Whether the note cites trustworthy sources. */
    trustworthySources: boolean;
}
/**
 * Schema type for CreateCommunityNotesRequest
 *
 * @public
 */
interface CreateCommunityNotesRequest {
    info: CreateCommunityNotesInfo;
    /** ID of the Post the note is about. */
    postId: string;
    /** If true, the note is only for testing and is not publicly visible. */
    testMode: boolean;
}
/**
 * Schema type for CreateCommunityNotesResponse
 *
 * @public
 */
interface CreateCommunityNotesResponse {
    data?: CreateCommunityNotesResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateCommunityNotesResponseData
 *
 * @public
 */
interface CreateCommunityNotesResponseData {
    /** Unique identifier of the created Community Note. */
    id: string;
}
/**
 * Schema type for CreateComplianceJobsRequest
 *
 * @public
 */
interface CreateComplianceJobsRequest {
    /** A user-provided name for this job. */
    name?: string;
    /** Whether to enable the upload URL with support for resumable uploads. */
    resumable?: boolean;
    /** Type of compliance job to list. */
    type: "tweets" | "users";
}
/**
 * Schema type for CreateComplianceJobsResponse
 *
 * @public
 */
interface CreateComplianceJobsResponse {
    data?: ComplianceJob;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateDirectMessagesByConversationIdAttachments
 *
 * @public
 */
interface CreateDirectMessagesByConversationIdAttachments {
    /** A media id to attach to the message. */
    mediaId: string;
}
/**
 * At least one of `text`, `attachments` is required.
 *
 * @public
 */
interface CreateDirectMessagesByConversationIdRequest {
    /** Attachments to include with the message. */
    attachments?: Array<CreateDirectMessagesByConversationIdAttachments>;
    /** Text of the Direct Message. */
    text?: string;
}
/**
 * Schema type for CreateDirectMessagesByConversationIdResponse
 *
 * @public
 */
interface CreateDirectMessagesByConversationIdResponse {
    data?: CreateDirectMessagesByConversationIdResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateDirectMessagesByConversationIdResponseData
 *
 * @public
 */
interface CreateDirectMessagesByConversationIdResponseData {
    /** The conversation the message was sent to. */
    dmConversationId: string;
    /** The id of the created DM event. */
    dmEventId: string;
}
/**
 * Schema type for CreateDirectMessagesByParticipantIdAttachments
 *
 * @public
 */
interface CreateDirectMessagesByParticipantIdAttachments {
    /** A media id to attach to the message. */
    mediaId: string;
}
/**
 * At least one of `text`, `attachments` is required.
 *
 * @public
 */
interface CreateDirectMessagesByParticipantIdRequest {
    /** Attachments to include with the message. */
    attachments?: Array<CreateDirectMessagesByParticipantIdAttachments>;
    /** Text of the Direct Message. */
    text?: string;
}
/**
 * Schema type for CreateDirectMessagesByParticipantIdResponse
 *
 * @public
 */
interface CreateDirectMessagesByParticipantIdResponse {
    data?: CreateDirectMessagesByParticipantIdResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateDirectMessagesByParticipantIdResponseData
 *
 * @public
 */
interface CreateDirectMessagesByParticipantIdResponseData {
    /** The conversation the message was sent to. */
    dmConversationId: string;
    /** The id of the created DM event. */
    dmEventId: string;
}
/**
 * Schema type for CreateDirectMessagesConversationMessage
 *
 * @public
 */
interface CreateDirectMessagesConversationMessage {
    /** Attachments to include with the message. */
    attachments?: Array<CreateDirectMessagesConversationMessageAttachments>;
    /** Text of the Direct Message. */
    text?: string;
}
/**
 * Schema type for CreateDirectMessagesConversationMessageAttachments
 *
 * @public
 */
interface CreateDirectMessagesConversationMessageAttachments {
    /** A media id to attach to the message. */
    mediaId: string;
}
/**
 * Schema type for CreateDirectMessagesConversationRequest
 *
 * @public
 */
interface CreateDirectMessagesConversationRequest {
    /** The conversation type to create. Supports `Group` only. */
    conversationType: "Group";
    message: CreateDirectMessagesConversationMessage;
    /** Participants for the conversation. */
    participantIds: Array<string>;
}
/**
 * Schema type for CreateDirectMessagesConversationResponse
 *
 * @public
 */
interface CreateDirectMessagesConversationResponse {
    data?: CreateDirectMessagesConversationResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateDirectMessagesConversationResponseData
 *
 * @public
 */
interface CreateDirectMessagesConversationResponseData {
    /** The id of the created conversation. */
    dmConversationId: string;
    /** The id of the created DM event. */
    dmEventId: string;
}
/**
 * Schema type for CreateListsRequest
 *
 * @public
 */
interface CreateListsRequest {
    /** Description of the List (up to 100 characters). */
    description?: string;
    /** Name of the List (1-25 characters). */
    name: string;
    /** Whether the List is private. */
    private?: boolean;
}
/**
 * Schema type for CreateListsResponse
 *
 * @public
 */
interface CreateListsResponse {
    data?: CreateListsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateListsResponseData
 *
 * @public
 */
interface CreateListsResponseData {
    /** Unique identifier of the created List. */
    id: string;
    /** The name of the created List. */
    name: string;
}
/**
 * Schema type for CreateMediaMetadataMetadata
 *
 * @public
 */
interface CreateMediaMetadataMetadata {
    allowDownloadStatus?: CreateMediaMetadataMetadataAllowDownloadStatus;
    altText?: CreateMediaMetadataMetadataAltText;
    audiencePolicy?: Record<string, any>;
    contentExpiration?: CreateMediaMetadataMetadataContentExpiration;
    domainRestrictions?: CreateMediaMetadataMetadataDomainRestrictions;
    foundMediaOrigin?: CreateMediaMetadataMetadataFoundMediaOrigin;
    geoRestrictions?: Record<string, any>;
    managementInfo?: CreateMediaMetadataMetadataManagementInfo;
    previewImage?: CreateMediaMetadataMetadataPreviewImage;
    sensitiveMediaWarning?: Record<string, any>;
    sharedInfo?: CreateMediaMetadataMetadataSharedInfo;
    stickerInfo?: CreateMediaMetadataMetadataStickerInfo;
    uploadSource?: CreateMediaMetadataMetadataUploadSource;
}
/**
 * Schema type for CreateMediaMetadataMetadataAllowDownloadStatus
 *
 * @public
 */
interface CreateMediaMetadataMetadataAllowDownloadStatus {
    allowDownload?: boolean;
}
/**
 * Schema type for CreateMediaMetadataMetadataAltText
 *
 * @public
 */
interface CreateMediaMetadataMetadataAltText {
    text: string;
}
/**
 * Schema type for CreateMediaMetadataMetadataContentExpiration
 *
 * @public
 */
interface CreateMediaMetadataMetadataContentExpiration {
    timestampSec: number;
}
/**
 * Schema type for CreateMediaMetadataMetadataDomainRestrictions
 *
 * @public
 */
interface CreateMediaMetadataMetadataDomainRestrictions {
    whitelist: Array<string>;
}
/**
 * Schema type for CreateMediaMetadataMetadataFoundMediaOrigin
 *
 * @public
 */
interface CreateMediaMetadataMetadataFoundMediaOrigin {
    id: string;
    provider: string;
}
/**
 * Schema type for CreateMediaMetadataMetadataManagementInfo
 *
 * @public
 */
interface CreateMediaMetadataMetadataManagementInfo {
    managed: boolean;
}
/**
 * Schema type for CreateMediaMetadataMetadataPreviewImage
 *
 * @public
 */
interface CreateMediaMetadataMetadataPreviewImage {
    mediaKey: Record<string, any>;
}
/**
 * Schema type for CreateMediaMetadataMetadataSharedInfo
 *
 * @public
 */
interface CreateMediaMetadataMetadataSharedInfo {
    shared: boolean;
}
/**
 * Schema type for CreateMediaMetadataMetadataStickerInfo
 *
 * @public
 */
interface CreateMediaMetadataMetadataStickerInfo {
    stickers: Array<CreateMediaMetadataMetadataStickerInfoStickers>;
}
/**
 * Schema type for CreateMediaMetadataMetadataStickerInfoStickers
 *
 * @public
 */
type CreateMediaMetadataMetadataStickerInfoStickers = Record<string, any>;
/**
 * Schema type for CreateMediaMetadataMetadataUploadSource
 *
 * @public
 */
interface CreateMediaMetadataMetadataUploadSource {
    uploadSource: string;
}
/**
 * Schema type for CreateMediaMetadataRequest
 *
 * @public
 */
interface CreateMediaMetadataRequest {
    /** The media id the metadata is attached to. */
    id: string;
    metadata?: CreateMediaMetadataMetadata;
}
/**
 * Schema type for CreateMediaMetadataResponse
 *
 * @public
 */
interface CreateMediaMetadataResponse {
    data?: CreateMediaMetadataResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateMediaMetadataResponseData
 *
 * @public
 */
interface CreateMediaMetadataResponseData {
    /** The metadata now associated with the media. */
    associatedMetadata?: Record<string, any>;
    /** The media id the metadata was attached to. */
    id: string;
}
/**
 * Schema type for CreateMediaSubtitlesRequest
 *
 * @public
 */
interface CreateMediaSubtitlesRequest {
    /** The media id of the video the subtitles belong to. */
    id?: string;
    /** The media category of the target media. */
    mediaCategory?: "AmplifyVideo" | "TweetVideo";
    subtitles?: CreateMediaSubtitlesSubtitles;
}
/**
 * Schema type for CreateMediaSubtitlesResponse
 *
 * @public
 */
interface CreateMediaSubtitlesResponse {
    data?: CreateMediaSubtitlesResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateMediaSubtitlesResponseData
 *
 * @public
 */
interface CreateMediaSubtitlesResponseData {
    /** The subtitles now associated with the media. */
    associatedSubtitles?: Record<string, any>;
    /** The media id. */
    id?: string;
    /** The media category. */
    mediaCategory?: string;
}
/**
 * Schema type for CreateMediaSubtitlesSubtitles
 *
 * @public
 */
interface CreateMediaSubtitlesSubtitles {
    /** Language name in a human readable form. */
    displayName?: string;
    /** The media id of the subtitle track. */
    id?: string;
    /** BCP47 language code of the subtitle track. */
    languageCode?: string;
}
/**
 * Schema type for CreatePostsEditOptions
 *
 * @public
 */
interface CreatePostsEditOptions {
    /** The ID of the Post being edited. */
    previousPostId: string;
}
/**
 * Schema type for CreatePostsGeo
 *
 * @public
 */
interface CreatePostsGeo {
    /** Place ID for geo tagging. */
    placeId: string;
}
/**
 * Schema type for CreatePostsMedia
 *
 * @public
 */
interface CreatePostsMedia {
    callToActions?: CreatePostsMediaCallToActions;
    /** Description for the media, rendered on the Post card for video and Amplify content. */
    description?: string;
    /** When true, the media's asset URLs do not expire and external syndicated playback is allowed. */
    embeddable?: boolean;
    /** Media IDs to attach to the tweet. */
    mediaIds: Array<string>;
    /** Media id whose asset is used as the preview image. */
    previewMediaId?: string;
    /** User IDs tagged in the media. */
    taggedUserIds?: Array<string>;
    /** Title for the media, rendered on the Post card for video and Amplify content. */
    title?: string;
}
/**
 * Schema type for CreatePostsMediaCallToActions
 *
 * @public
 */
interface CreatePostsMediaCallToActions {
    appInstall?: CreatePostsMediaCallToActionsAppInstall;
    visitSite?: CreatePostsMediaCallToActionsVisitSite;
    watchNow?: CreatePostsMediaCallToActionsWatchNow;
}
/**
 * Schema type for CreatePostsMediaCallToActionsAppInstall
 *
 * @public
 */
interface CreatePostsMediaCallToActionsAppInstall {
    /** Apple App Store iPhone app id. */
    appStoreId?: string;
    /** Apple App Store iPad app id. */
    ipadAppStoreId?: string;
    /** Google Play Store app id. */
    playStoreId?: string;
}
/**
 * Schema type for CreatePostsMediaCallToActionsVisitSite
 *
 * @public
 */
interface CreatePostsMediaCallToActionsVisitSite {
    /** HTTPS URL the CTA links to. */
    url: string;
}
/**
 * Schema type for CreatePostsMediaCallToActionsWatchNow
 *
 * @public
 */
interface CreatePostsMediaCallToActionsWatchNow {
    /** HTTPS URL the CTA links to. */
    url: string;
}
/**
 * Schema type for CreatePostsPoll
 *
 * @public
 */
interface CreatePostsPoll {
    /** Duration of the poll in minutes. */
    durationMinutes: number;
    /** Poll options (2-4 choices, 1-25 characters each). */
    options: Array<string>;
    /** Who can reply to the poll Tweet. Accepted for compatibility; it carries no backend argument and is dropped before the mutation is issued (see `translate_body`). */
    replySettings?: "following" | "mentionedUsers" | "subscribers" | "verified";
}
/**
 * Schema type for CreatePostsReply
 *
 * @public
 */
interface CreatePostsReply {
    /** If true, reply metadata is automatically populated. Accepted for compatibility; it carries no backend argument and is dropped before the mutation is issued (see `translate_body`). */
    autoPopulateReplyMetadata?: boolean;
    /** User IDs to exclude from the reply thread. */
    excludeReplyUserIds?: Array<string>;
    /** The ID of the tweet being replied to. */
    inReplyToTweetId: string;
}
/**
 * Schema type for CreatePostsRequest
 *
 * @public
 */
interface CreatePostsRequest {
    /** Card URI parameter. */
    cardUri?: string;
    /** Community to post the tweet to. */
    communityId?: string;
    /** Direct message deep link. */
    directMessageDeepLink?: string;
    editOptions?: CreatePostsEditOptions;
    /** Restrict tweet to super followers. */
    forSuperFollowersOnly?: boolean;
    geo?: CreatePostsGeo;
    /** Disclose that the tweet contains AI-generated media. */
    madeWithAi?: boolean;
    media?: CreatePostsMedia;
    /** If true, the tweet is not shown in the public timeline. */
    nullcast?: boolean;
    /** Disclose that the tweet is a paid partnership. */
    paidPartnership?: boolean;
    poll?: CreatePostsPoll;
    /** Tweet ID to quote. */
    quoteTweetId?: string;
    reply?: CreatePostsReply;
    /** Who can reply to this tweet. */
    replySettings?: "following" | "mentionedUsers" | "subscribers" | "verified";
    /** Share an exclusive (super-follower) tweet with all followers. */
    shareWithFollowers?: boolean;
    /** Text of the tweet. Required unless media is provided.  Defaulted to an empty string so it is always sent: the backend's `tweet_text` variable is non-null and rejects an absent value. */
    text?: string;
}
/**
 * Schema type for CreatePostsResponse
 *
 * @public
 */
interface CreatePostsResponse {
    data?: CreatePostsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreatePostsResponseData
 *
 * @public
 */
interface CreatePostsResponseData {
    /** Post IDs in this Post's edit history chain. */
    editHistoryPostIds?: Array<string>;
    /** Unique identifier of the created Post. */
    id: string;
    /** The content of the created Post. */
    text: string;
}
/**
 * Schema type for CreateScheduledBroadcastRecurrence
 *
 * @public
 */
interface CreateScheduledBroadcastRecurrence {
    /** Recurrence frequency. */
    frequency: "Daily" | "Weekly";
    /** Number of repeats (numeric string). */
    repeats: string;
}
/**
 * Schema type for CreateScheduledBroadcastRequest
 *
 * @public
 */
interface CreateScheduledBroadcastRequest$1 {
    /** Enable replay. */
    availableForReplay?: boolean;
    /** Chat permission option (numeric string). */
    chatOption?: string;
    /** Description. */
    description?: string;
    /** Lock the broadcast. */
    isLocked?: boolean;
    /** Locale. */
    locale?: string;
    /** If true, do not auto-publish at start; call POST .../live when ready. */
    manualPublish?: boolean;
    recurrence?: CreateScheduledBroadcastRecurrence;
    /** End time, ms since Unix epoch (decimal string). */
    scheduledEndMs: string;
    /** Start time, ms since Unix epoch (decimal string). */
    scheduledStartMs: string;
    /** Ingest / source id to bind (same as sources `rtmp_stream_key`). */
    sourceId: string;
    /** Optional telecast id (numeric string). */
    telecastId?: string;
    /** Pre-live slate media id (numeric string). */
    thumbnailMediaId?: string;
    /** Title / status text. */
    title?: string;
}
/**
 * Schema type for CreateScheduledBroadcastResponse
 *
 * @public
 */
interface CreateScheduledBroadcastResponse$1 {
    data?: CreateScheduledBroadcastResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateScheduledBroadcastResponseData
 *
 * @public
 */
interface CreateScheduledBroadcastResponseData {
    /** Whether replay is enabled. */
    availableForReplay?: boolean;
    /** Alphanumeric UBS broadcast id (path `:id` for get/update/delete/live). */
    broadcastId?: string;
    /** Optional chat permission option. */
    chatOption?: string;
    /** Optional description. */
    description?: string;
    /** Optional locale. */
    locale?: string;
    /** When true, coordinator will not auto-publish; call POST .../live when ready. */
    manualPublish?: boolean;
    /** Set when this occurrence belongs to a recurrence. */
    recurringScheduleId?: string;
    /** Numeric scheduler id. Required in the update request body. */
    scheduledBroadcastId?: string;
    /** Scheduled end, milliseconds since Unix epoch (decimal string). */
    scheduledEndMs?: string;
    /** Scheduled start, milliseconds since Unix epoch (decimal string). */
    scheduledStartMs?: string;
    /** Bound ingest / source id (`rtmp_stream_key`). */
    sourceId?: string;
    /** Scheduler state (Created, Scheduled, Running, …). */
    state?: string;
    /** Optional telecast association. */
    telecastId?: string;
    /** Optional pre-live slate media id. */
    thumbnailMediaId?: string;
    /** Broadcast title / status text. */
    title?: string;
}
/**
 * Schema type for CreateUsersBookmarkFolderRequest
 *
 * @public
 */
interface CreateUsersBookmarkFolderRequest {
    /** Name of the Bookmark folder (1-25 characters). */
    name: string;
}
/**
 * Schema type for CreateUsersBookmarkFolderResponse
 *
 * @public
 */
interface CreateUsersBookmarkFolderResponse {
    data?: CreateUsersBookmarkFolderResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateUsersBookmarkFolderResponseData
 *
 * @public
 */
interface CreateUsersBookmarkFolderResponseData {
    /** Unique identifier of the created Bookmark folder. */
    id: string;
    /** The name of the created Bookmark folder. */
    name: string;
}
/**
 * Schema type for CreateUsersBookmarkRequest
 *
 * @public
 */
interface CreateUsersBookmarkRequest {
    /** Optional ID of the Bookmark folder to add the Post to. When omitted, the Post is added to the user's top-level Bookmarks only. */
    folderId?: string;
    /** The ID of the Post to add to the user's Bookmarks. */
    tweetId: string;
}
/**
 * Schema type for CreateUsersBookmarkResponse
 *
 * @public
 */
interface CreateUsersBookmarkResponse {
    data?: CreateUsersBookmarkResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateUsersBookmarkResponseData
 *
 * @public
 */
interface CreateUsersBookmarkResponseData {
    /** Indicates whether the Post is bookmarked by the user. */
    bookmarked: boolean;
}
/**
 * Schema type for CreateWebhookReplayJobRequest
 *
 * @public
 */
interface CreateWebhookReplayJobRequest$1 {
    /** The oldest (inclusive) UTC timestamp from which events are replayed, in yyyymmddhhmm format. */
    fromDate: string;
    /** The newest (inclusive) UTC timestamp up to which events are replayed, in yyyymmddhhmm format. */
    toDate: string;
    /** The ID of the webhook to replay events to. */
    webhookId: string;
}
/**
 * Schema type for CreateWebhookReplayJobResponse
 *
 * @public
 */
interface CreateWebhookReplayJobResponse$1 {
    data?: CreateWebhookReplayJobResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateWebhookReplayJobResponseData
 *
 * @public
 */
interface CreateWebhookReplayJobResponseData {
    /** The UTC timestamp when the replay job was created. */
    createdAt: string;
    /** The unique identifier for the initiated replay job. */
    jobId: string;
}
/**
 * Schema type for CreateWebhooksRequest
 *
 * @public
 */
interface CreateWebhooksRequest {
    /** The URL the webhook delivers events to. */
    url: string;
}
/**
 * Schema type for CreateWebhooksResponse
 *
 * @public
 */
interface CreateWebhooksResponse {
    data?: CreateWebhooksResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateWebhooksResponseData
 *
 * @public
 */
interface CreateWebhooksResponseData {
    /** Creation time of the webhook configuration. */
    createdAt: string;
    /** Unique identifier of the webhook configuration. */
    id: string;
    /** The URL the webhook delivers events to. */
    url: string;
    /** Indicates whether the webhook URL passed validation. */
    valid: boolean;
}
/**
 * Schema type for CreateWebhooksStreamLinkResponse
 *
 * @public
 */
interface CreateWebhooksStreamLinkResponse {
    data?: CreateWebhooksStreamLinkResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for CreateWebhooksStreamLinkResponseData
 *
 * @public
 */
interface CreateWebhooksStreamLinkResponseData {
    /** Indicates whether the stream link was provisioned. */
    provisioned: boolean;
}
/**
 * Schema type for DeleteAccountActivitySubscriptionResponse
 *
 * @public
 */
interface DeleteAccountActivitySubscriptionResponse {
    data?: DeleteAccountActivitySubscriptionResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteAccountActivitySubscriptionResponseData
 *
 * @public
 */
interface DeleteAccountActivitySubscriptionResponseData {
    /** Whether the user has an active subscription. */
    subscribed: boolean;
}
/**
 * Schema type for DeleteActivitySubscriptionResponse
 *
 * @public
 */
interface DeleteActivitySubscriptionResponse {
    data?: DeleteActivitySubscriptionResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteActivitySubscriptionResponseData
 *
 * @public
 */
interface DeleteActivitySubscriptionResponseData {
    /** Whether the subscription was deleted. */
    deleted: boolean;
}
/**
 * Schema type for DeleteActivitySubscriptionsByIdsResponse
 *
 * @public
 */
interface DeleteActivitySubscriptionsByIdsResponse {
    data?: Array<{
        deleted?: boolean;
        subscriptionId?: string;
    }>;
    /** Per-id failures; deletion continues for the remaining ids. */
    errors?: Array<{
        message?: string;
        reason?: string;
        subscriptionId?: string;
    }>;
    meta?: {
        totalSubscriptions?: number;
    };
}
/**
 * Schema type for DeleteAllConnectionsResponse
 *
 * @public
 */
interface DeleteAllConnectionsResponse {
    data?: DeleteAllConnectionsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteAllConnectionsResponseData
 *
 * @public
 */
interface DeleteAllConnectionsResponseData {
    /** Number of connections that could not be terminated. */
    failedKills: number;
    results?: Array<DeleteAllConnectionsResponseDataResults>;
    /** Number of connections successfully terminated. */
    successfulKills: number;
}
/**
 * Schema type for DeleteAllConnectionsResponseDataResults
 *
 * @public
 */
interface DeleteAllConnectionsResponseDataResults {
    errorMessage?: string;
    success: boolean;
    uuid: string;
}
/**
 * Schema type for DeleteChatMessagesActionSignatures
 *
 * @public
 */
interface DeleteChatMessagesActionSignatures {
    /** Base64-encoded message event detail. */
    encodedMessageEventDetail: string;
    messageEventSignature: DeleteChatMessagesActionSignaturesMessageEventSignature;
    /** Client-generated ID of the message being signed. */
    messageId: string;
    /** Payload string the client signed; used only in server-side failure logs. */
    signaturePayload?: string;
}
/**
 * Schema type for DeleteChatMessagesActionSignaturesMessageEventSignature
 *
 * @public
 */
interface DeleteChatMessagesActionSignaturesMessageEventSignature {
    /** List of signing key information for message verification. */
    messageSigningKeyInfoList?: Array<DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList>;
    /** The version of the public key used for signing. */
    publicKeyVersion: string;
    /** The signature of the message event. */
    signature: string;
    /** The version of the signature algorithm. */
    signatureVersion: string;
    /** The public key used for signing. */
    signingPublicKey?: string;
}
/**
 * Schema type for DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList
 *
 * @public
 */
interface DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList {
    /** The member ID associated with this signing key. */
    memberId?: string;
    /** The version of the public key. */
    publicKeyVersion?: string;
    /** The signing public key. */
    signingPublicKey?: string;
}
/**
 * Schema type for DeleteChatMessagesRequest
 *
 * @public
 */
interface DeleteChatMessagesRequest {
    /** Cryptographic signatures for the action. */
    actionSignatures: Array<DeleteChatMessagesActionSignatures>;
    /** delete_for_all removes the messages for every participant; delete_for_self removes them only from the authenticated user's view. */
    deleteMessageAction: "delete_for_all" | "delete_for_self";
    /** Hash keys of encrypted media blobs to delete alongside the messages (delete_for_all only). */
    mediaHashKeys?: Array<string>;
    /** Sequence IDs of the messages to delete. */
    sequenceIds: Array<string>;
}
/**
 * Schema type for DeleteChatMessagesResponse
 *
 * @public
 */
interface DeleteChatMessagesResponse {
    data?: DeleteChatMessagesResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteChatMessagesResponseData
 *
 * @public
 */
interface DeleteChatMessagesResponseData {
    /** Whether the messages were deleted. */
    deleted: boolean;
}
/**
 * Schema type for DeleteCommunityNotesResponse
 *
 * @public
 */
interface DeleteCommunityNotesResponse {
    data?: DeleteCommunityNotesResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteCommunityNotesResponseData
 *
 * @public
 */
interface DeleteCommunityNotesResponseData {
    /** Indicates whether the Community Note was deleted. */
    deleted: boolean;
}
/**
 * Schema type for DeleteConnectionsByEndpointResponse
 *
 * @public
 */
interface DeleteConnectionsByEndpointResponse {
    data?: DeleteConnectionsByEndpointResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteConnectionsByEndpointResponseData
 *
 * @public
 */
interface DeleteConnectionsByEndpointResponseData {
    /** Number of connections that could not be terminated. */
    failedKills: number;
    results?: Array<DeleteConnectionsByEndpointResponseDataResults>;
    /** Number of connections successfully terminated. */
    successfulKills: number;
}
/**
 * Schema type for DeleteConnectionsByEndpointResponseDataResults
 *
 * @public
 */
interface DeleteConnectionsByEndpointResponseDataResults {
    errorMessage?: string;
    success: boolean;
    uuid: string;
}
/**
 * Schema type for DeleteConnectionsByUuidsRequest
 *
 * @public
 */
interface DeleteConnectionsByUuidsRequest {
    /** Connection UUIDs to terminate (1-100). */
    uuids: Array<string>;
}
/**
 * Schema type for DeleteConnectionsByUuidsResponse
 *
 * @public
 */
interface DeleteConnectionsByUuidsResponse {
    data?: DeleteConnectionsByUuidsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteConnectionsByUuidsResponseData
 *
 * @public
 */
interface DeleteConnectionsByUuidsResponseData {
    /** Number of connections that could not be terminated. */
    failedKills: number;
    results?: Array<DeleteConnectionsByUuidsResponseDataResults>;
    /** Number of connections successfully terminated. */
    successfulKills: number;
}
/**
 * Schema type for DeleteConnectionsByUuidsResponseDataResults
 *
 * @public
 */
interface DeleteConnectionsByUuidsResponseDataResults {
    errorMessage?: string;
    success: boolean;
    uuid: string;
}
/**
 * Schema type for DeleteDirectMessagesEventsResponse
 *
 * @public
 */
interface DeleteDirectMessagesEventsResponse {
    data?: DeleteDirectMessagesEventsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteDirectMessagesEventsResponseData
 *
 * @public
 */
interface DeleteDirectMessagesEventsResponseData {
    /** Whether the event was deleted. */
    deleted: boolean;
}
/**
 * Schema type for DeleteListsResponse
 *
 * @public
 */
interface DeleteListsResponse {
    data?: DeleteListsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteListsResponseData
 *
 * @public
 */
interface DeleteListsResponseData {
    /** Indicates whether the List was deleted. */
    deleted: boolean;
}
/**
 * Schema type for DeleteMediaSubtitlesRequest
 *
 * @public
 */
interface DeleteMediaSubtitlesRequest {
    /** The media id of the video the subtitles belong to. */
    id: string;
    /** The language code of the subtitles to delete. */
    languageCode: string;
    /** The media category of the target media. */
    mediaCategory: string;
}
/**
 * Schema type for DeleteMediaSubtitlesResponse
 *
 * @public
 */
interface DeleteMediaSubtitlesResponse {
    data?: DeleteMediaSubtitlesResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteMediaSubtitlesResponseData
 *
 * @public
 */
interface DeleteMediaSubtitlesResponseData {
    /** Indicates whether the subtitles were deleted. */
    deleted: boolean;
}
/**
 * Schema type for DeletePostsResponse
 *
 * @public
 */
interface DeletePostsResponse {
    data?: DeletePostsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeletePostsResponseData
 *
 * @public
 */
interface DeletePostsResponseData {
    /** Whether the Post was deleted. */
    deleted: boolean;
}
/**
 * Schema type for DeleteScheduledBroadcastResponse
 *
 * @public
 */
interface DeleteScheduledBroadcastResponse$1 {
    data?: DeleteScheduledBroadcastResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteScheduledBroadcastResponseData
 *
 * @public
 */
interface DeleteScheduledBroadcastResponseData {
    /** Whether the scheduled broadcast was deleted. */
    deleted: boolean;
}
/**
 * Schema type for DeleteUsersBookmarkResponse
 *
 * @public
 */
interface DeleteUsersBookmarkResponse {
    data?: DeleteUsersBookmarkResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteUsersBookmarkResponseData
 *
 * @public
 */
interface DeleteUsersBookmarkResponseData {
    /** Whether the Post is bookmarked. */
    bookmarked: boolean;
}
/**
 * Schema type for DeleteWebhooksResponse
 *
 * @public
 */
interface DeleteWebhooksResponse {
    data?: DeleteWebhooksResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteWebhooksResponseData
 *
 * @public
 */
interface DeleteWebhooksResponseData {
    /** Indicates whether the webhook configuration was deleted. */
    deleted: boolean;
}
/**
 * Schema type for DeleteWebhooksStreamLinkResponse
 *
 * @public
 */
interface DeleteWebhooksStreamLinkResponse {
    data?: DeleteWebhooksStreamLinkResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for DeleteWebhooksStreamLinkResponseData
 *
 * @public
 */
interface DeleteWebhooksStreamLinkResponseData {
    /** Indicates whether the stream link was deleted. */
    deleted: boolean;
}
/**
 * Schema type for DisallowedResourceProblem
 *
 * @public
 */
interface DisallowedResourceProblem {
    detail: string;
    resourceId?: string;
    resourceType?: string;
    section?: string;
    status?: number;
    title: string;
    type: "https://api.x.com/2/problems/disallowed-resource";
}
/**
 * Schema type for DmEvent
 *
 * @public
 */
interface DmEvent {
    /** Media and card attachments present in this Direct Message event. */
    attachments?: DmEventAttachments;
    createdAt?: string;
    dmConversationId?: string;
    /** A list of metadata entities (hashtags, cashtags, mentions, URLs) found in the Direct Message text. */
    entities?: DmEventEntities;
    eventType?: string;
    id?: string;
    participantIds?: Array<string>;
    referencedPosts?: DmEventReferencedPosts;
    senderId?: string;
    text?: string;
}
/**
 * Media and card attachments present in this Direct Message event.
 *
 * @public
 */
interface DmEventAttachments {
    /** IDs of cards attached to this Direct Message. */
    cardIds?: Array<string> | null;
    /** Media keys of media (including audio) attached to this Direct Message. */
    mediaKeys?: Array<string> | null;
}
/**
 * A list of metadata entities (hashtags, cashtags, mentions, URLs) found in the Direct Message text.
 *
 * @public
 */
interface DmEventEntities {
    cashtags?: Array<{
        end: number;
        start: number;
        tag: string;
    }> | null;
    hashtags?: Array<{
        end: number;
        start: number;
        tag: string;
    }> | null;
    mentions?: Array<{
        end: number;
        id?: string | null;
        start: number;
        username: string;
    }> | null;
    urls?: Array<{
        displayUrl?: string | null;
        end: number;
        expandedUrl?: string | null;
        start: number;
        url: string;
    }> | null;
}
/**
 * Schema type for DmEventReferencedPosts
 *
 * @public
 */
type DmEventReferencedPosts = Array<{
    id: string;
}>;
/**
 * Schema type for Error
 *
 * @public
 */
interface Error$1 {
    code: number;
    message: string;
}
/**
 * Schema type for EvaluateCommunityNotesRequest
 *
 * @public
 */
interface EvaluateCommunityNotesRequest {
    /** Text of the community note to evaluate. */
    noteText: string;
    /** ID of the Post the note evaluates. */
    postId: string;
}
/**
 * Schema type for EvaluateCommunityNotesResponse
 *
 * @public
 */
interface EvaluateCommunityNotesResponse {
    data?: EvaluateCommunityNotesResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for EvaluateCommunityNotesResponseData
 *
 * @public
 */
interface EvaluateCommunityNotesResponseData {
    /** The evaluated claim-opinion score for the note. */
    claimOpinionScore?: number;
}
/**
 * Schema type for Expansions
 *
 * @public
 */
interface Expansions {
    media?: Array<Media>;
    places?: Array<Place>;
    polls?: Array<Poll>;
    posts?: Array<Post>;
    topics?: Array<Topic>;
    users?: Array<User>;
}
/**
 * Schema type for FieldHydrationFailureProblem
 *
 * @public
 */
interface FieldHydrationFailureProblem {
    detail: string;
    field: string;
    resourceType?: string;
    section?: string;
    status?: number;
    title: string;
    type: "https://api.x.com/2/problems/field-hydration-failure";
}
/**
 * Schema type for FieldUnauthorizedProblem
 *
 * @public
 */
interface FieldUnauthorizedProblem {
    detail: string;
    field: string;
    resourceType?: string;
    section?: string;
    status?: number;
    title: string;
    type: "https://api.x.com/2/problems/field-unauthorized";
}
/**
 * Schema type for FinalizeMediaUploadResponse
 *
 * @public
 */
interface FinalizeMediaUploadResponse {
    data?: FinalizeMediaUploadResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for FinalizeMediaUploadResponseData
 *
 * @public
 */
interface FinalizeMediaUploadResponseData {
    /** Seconds until the upload session expires. */
    expiresAfterSecs?: number;
    /** Unique identifier of the media. */
    id: string;
    image?: FinalizeMediaUploadResponseDataImage;
    /** The media key for the uploaded media. */
    mediaKey?: string;
    processingInfo?: FinalizeMediaUploadResponseDataProcessingInfo;
    /** Total size of the media in bytes. */
    size?: number;
    video?: FinalizeMediaUploadResponseDataVideo;
}
/**
 * Schema type for FinalizeMediaUploadResponseDataImage
 *
 * @public
 */
interface FinalizeMediaUploadResponseDataImage {
    /** Height in pixels. */
    h?: number;
    /** MIME type of the uploaded image. */
    imageType?: string;
    /** Width in pixels. */
    w?: number;
}
/**
 * Schema type for FinalizeMediaUploadResponseDataProcessingInfo
 *
 * @public
 */
interface FinalizeMediaUploadResponseDataProcessingInfo {
    /** Seconds to wait before polling status again. */
    checkAfterSecs?: number;
    /** Processing completion percentage. */
    progressPercent?: number;
    /** Processing state (pending, in_progress, failed, succeeded). */
    state?: string;
}
/**
 * Schema type for FinalizeMediaUploadResponseDataVideo
 *
 * @public
 */
interface FinalizeMediaUploadResponseDataVideo {
    /** MIME type of the processed video. */
    videoType?: string;
}
/**
 * Schema type for FollowActivityResponsePayload
 *
 * @public
 */
interface FollowActivityResponsePayload {
    source?: User;
    target?: User;
}
/**
 * Schema type for FollowListRequest
 *
 * @public
 */
interface FollowListRequest$1 {
    listId: string;
}
/**
 * Schema type for FollowListResponse
 *
 * @public
 */
interface FollowListResponse$1 {
    data?: FollowListResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for FollowListResponseData
 *
 * @public
 */
interface FollowListResponseData {
    /** Whether the user is following the List. */
    following: boolean;
}
/**
 * Schema type for FollowUserRequest
 *
 * @public
 */
interface FollowUserRequest$1 {
    targetUserId: string;
}
/**
 * Schema type for FollowUserResponse
 *
 * @public
 */
interface FollowUserResponse$1 {
    data?: FollowUserResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for FollowUserResponseData
 *
 * @public
 */
interface FollowUserResponseData {
    /** Whether the source User is following the target User. */
    following: boolean;
    /** Whether the follow request is pending the target User's approval. */
    pendingFollow: boolean;
}
/**
 * Schema type for GetAccountActivitySubscriptionCountResponse
 *
 * @public
 */
interface GetAccountActivitySubscriptionCountResponse {
    data?: GetAccountActivitySubscriptionCountResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetAccountActivitySubscriptionCountResponseData
 *
 * @public
 */
interface GetAccountActivitySubscriptionCountResponseData {
    /** Name of the subscribing account. */
    accountName?: string;
    /** Number of subscriptions provisioned for the app. */
    provisionedCount?: string;
    /** Number of active subscriptions across all event types. */
    subscriptionsCountAll?: string;
    /** Number of active Direct Message subscriptions. */
    subscriptionsCountDirectMessages?: string;
}
/**
 * Schema type for GetAccountActivitySubscriptionsResponse
 *
 * @public
 */
interface GetAccountActivitySubscriptionsResponse {
    data?: GetAccountActivitySubscriptionsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetAccountActivitySubscriptionsResponseData
 *
 * @public
 */
interface GetAccountActivitySubscriptionsResponseData {
    /** App the subscriptions belong to. */
    applicationId?: string;
    subscriptions?: Array<GetAccountActivitySubscriptionsResponseDataSubscriptions>;
    /** Webhook receiving the subscription events. */
    webhookId?: string;
    /** URL the webhook delivers events to. */
    webhookUrl?: string;
}
/**
 * Schema type for GetAccountActivitySubscriptionsResponseDataSubscriptions
 *
 * @public
 */
interface GetAccountActivitySubscriptionsResponseDataSubscriptions {
    /** Subscribed user. */
    userId?: string;
}
/**
 * Schema type for GetActivitySubscriptionsResponse
 *
 * @public
 */
interface GetActivitySubscriptionsResponse {
    data?: Array<GetActivitySubscriptionsResponseData>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetActivitySubscriptionsResponseData
 *
 * @public
 */
interface GetActivitySubscriptionsResponseData {
    /** Subscription creation time. */
    createdAt?: string;
    /** Activity event type in dot notation. */
    eventType?: string;
    filter?: GetActivitySubscriptionsResponseDataFilter;
    /** Unique identifier of the subscription. */
    subscriptionId?: string;
    /** Optional caller-defined tag. */
    tag?: string;
    /** Subscription last-update time. */
    updatedAt?: string;
    /** Webhook receiving the subscription events. */
    webhookId?: string;
}
/**
 * Schema type for GetActivitySubscriptionsResponseDataFilter
 *
 * @public
 */
interface GetActivitySubscriptionsResponseDataFilter {
    /** Optional direction filter for directional events. Not present for mute.* or block.* events. */
    direction?: string;
    /** Optional keyword filter. */
    keyword?: string;
    /** User the subscription is scoped to. */
    userId?: string;
}
/**
 * Schema type for GetChatConversationEventsResponse
 *
 * @public
 */
interface GetChatConversationEventsResponse {
    data?: Array<ChatMessageEvent>;
    errors?: Array<Problem>;
    meta?: {
        conversationKeyEvents?: Array<string>;
        hasMore?: boolean;
        nextToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetChatConversationResponse
 *
 * @public
 */
interface GetChatConversationResponse {
    data?: ChatConversation;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetChatConversationsResponse
 *
 * @public
 */
interface GetChatConversationsResponse {
    data?: Array<ChatConversation>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        hasMessageRequests?: boolean;
        hasMore?: boolean;
        nextToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetCommunitiesByIdResponse
 *
 * @public
 */
interface GetCommunitiesByIdResponse {
    data?: Community;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetComplianceJobsByIdResponse
 *
 * @public
 */
interface GetComplianceJobsByIdResponse {
    data?: ComplianceJob;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetComplianceJobsResponse
 *
 * @public
 */
interface GetComplianceJobsResponse {
    data?: Array<ComplianceJob>;
    errors?: Array<Problem>;
    meta?: {
        resultCount?: number;
    };
}
/**
 * Schema type for GetConnectionHistoryResponse
 *
 * @public
 */
interface GetConnectionHistoryResponse$1 {
    data?: Array<Connection>;
    errors?: Array<Problem>;
    meta?: {
        nextToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetDirectMessagesEventsByConversationIdResponse
 *
 * @public
 */
interface GetDirectMessagesEventsByConversationIdResponse {
    data?: Array<DmEvent>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetDirectMessagesEventsByIdResponse
 *
 * @public
 */
interface GetDirectMessagesEventsByIdResponse {
    data?: DmEvent;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetDirectMessagesEventsByParticipantIdResponse
 *
 * @public
 */
interface GetDirectMessagesEventsByParticipantIdResponse {
    data?: Array<DmEvent>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetDirectMessagesEventsResponse
 *
 * @public
 */
interface GetDirectMessagesEventsResponse {
    data?: Array<DmEvent>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetListsByIdResponse
 *
 * @public
 */
interface GetListsByIdResponse {
    data?: List;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetListsFollowersResponse
 *
 * @public
 */
interface GetListsFollowersResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetListsMembersResponse
 *
 * @public
 */
interface GetListsMembersResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetListsPostsResponse
 *
 * @public
 */
interface GetListsPostsResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetMediaAnalyticsResponse
 *
 * @public
 */
interface GetMediaAnalyticsResponse {
    data?: Array<MediaAnalytics>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetMediaByMediaKeyResponse
 *
 * @public
 */
interface GetMediaByMediaKeyResponse {
    data?: Media;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetMediaByMediaKeysResponse
 *
 * @public
 */
interface GetMediaByMediaKeysResponse {
    data?: Array<Media>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetMediaUploadStatusResponse
 *
 * @public
 */
interface GetMediaUploadStatusResponse {
    data?: GetMediaUploadStatusResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetMediaUploadStatusResponseData
 *
 * @public
 */
interface GetMediaUploadStatusResponseData {
    /** Seconds until the upload session expires. */
    expiresAfterSecs?: number;
    /** Unique identifier of the media. */
    id: string;
    image?: GetMediaUploadStatusResponseDataImage;
    /** The media key for the uploaded media. */
    mediaKey?: string;
    processingInfo?: GetMediaUploadStatusResponseDataProcessingInfo;
    /** Total size of the media in bytes. */
    size?: number;
    video?: GetMediaUploadStatusResponseDataVideo;
}
/**
 * Schema type for GetMediaUploadStatusResponseDataImage
 *
 * @public
 */
interface GetMediaUploadStatusResponseDataImage {
    /** Height in pixels. */
    h?: number;
    /** MIME type of the uploaded image. */
    imageType?: string;
    /** Width in pixels. */
    w?: number;
}
/**
 * Schema type for GetMediaUploadStatusResponseDataProcessingInfo
 *
 * @public
 */
interface GetMediaUploadStatusResponseDataProcessingInfo {
    /** Seconds to wait before polling status again. */
    checkAfterSecs?: number;
    /** Processing completion percentage. */
    progressPercent?: number;
    /** Processing state (pending, in_progress, failed, succeeded). */
    state?: string;
}
/**
 * Schema type for GetMediaUploadStatusResponseDataVideo
 *
 * @public
 */
interface GetMediaUploadStatusResponseDataVideo {
    /** MIME type of the processed video. */
    videoType?: string;
}
/**
 * Schema type for GetNewsResponse
 *
 * @public
 */
interface GetNewsResponse {
    data?: News;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetPostsAnalyticsResponse
 *
 * @public
 */
interface GetPostsAnalyticsResponse {
    data?: Array<Analytics>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetPostsByIdResponse
 *
 * @public
 */
interface GetPostsByIdResponse {
    data?: Post;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetPostsByIdsResponse
 *
 * @public
 */
interface GetPostsByIdsResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        resultCount?: number;
    };
}
/**
 * Schema type for GetPostsCountsAllResponse
 *
 * @public
 */
interface GetPostsCountsAllResponse {
    data?: Array<GetPostsCountsAllResponseData>;
    errors?: Array<Problem>;
    meta?: {
        nextToken?: string;
        totalPostCount?: number;
    };
}
/**
 * Schema type for GetPostsCountsAllResponseData
 *
 * @public
 */
interface GetPostsCountsAllResponseData {
    /** End of the count bucket (exclusive), RFC 3339. */
    end: string;
    /** Number of Posts in the bucket. */
    postCount: number;
    /** Start of the count bucket (inclusive), RFC 3339. */
    start: string;
}
/**
 * Schema type for GetPostsCountsRecentResponse
 *
 * @public
 */
interface GetPostsCountsRecentResponse {
    data?: Array<GetPostsCountsRecentResponseData>;
    errors?: Array<Problem>;
    meta?: {
        nextToken?: string;
        totalPostCount?: number;
    };
}
/**
 * Schema type for GetPostsCountsRecentResponseData
 *
 * @public
 */
interface GetPostsCountsRecentResponseData {
    /** End of the count bucket (exclusive), RFC 3339. */
    end: string;
    /** Number of Posts in the bucket. */
    postCount: number;
    /** Start of the count bucket (inclusive), RFC 3339. */
    start: string;
}
/**
 * Schema type for GetPostsLikingUsersResponse
 *
 * @public
 */
interface GetPostsLikingUsersResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetPostsQuotedPostsResponse
 *
 * @public
 */
interface GetPostsQuotedPostsResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetPostsRepostedByResponse
 *
 * @public
 */
interface GetPostsRepostedByResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetPostsRepostsResponse
 *
 * @public
 */
interface GetPostsRepostsResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetRuleCountsResponse
 *
 * @public
 */
interface GetRuleCountsResponse$1 {
    data?: GetRuleCountsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetRuleCountsResponseData
 *
 * @public
 */
interface GetRuleCountsResponseData {
    /** Per-client-app rule counts across the project. */
    allProjectClientApps?: Array<GetRuleCountsResponseDataAllProjectClientApps>;
    /** Maximum number of rules allowed per client application. */
    capPerClientApp: string;
    /** Maximum number of rules allowed across the project. */
    capPerProject: string;
    clientAppRulesCount: GetRuleCountsResponseDataClientAppRulesCount;
    /** Number of rules across every client application in the project. */
    projectRulesCount: string;
}
/**
 * Schema type for GetRuleCountsResponseDataAllProjectClientApps
 *
 * @public
 */
interface GetRuleCountsResponseDataAllProjectClientApps {
    /** Unique identifier of the client application. */
    clientAppId?: string;
    /** Number of rules configured for the client application. */
    ruleCount: number;
}
/**
 * Schema type for GetRuleCountsResponseDataClientAppRulesCount
 *
 * @public
 */
interface GetRuleCountsResponseDataClientAppRulesCount {
    /** Unique identifier of the client application. */
    clientAppId?: string;
    /** Number of rules configured for the client application. */
    ruleCount: number;
}
/**
 * Schema type for GetRulesResponse
 *
 * @public
 */
interface GetRulesResponse$1 {
    data?: Array<GetRulesResponseData>;
    errors?: Array<Problem>;
    meta?: {
        nextToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetRulesResponseData
 *
 * @public
 */
interface GetRulesResponseData {
    /** Unique identifier of the rule. */
    id?: string;
    /** Optional caller-defined label for the rule. */
    tag?: string;
    /** The rule's filter expression. */
    value?: string;
}
/**
 * Schema type for GetScheduledBroadcastResponse
 *
 * @public
 */
interface GetScheduledBroadcastResponse$1 {
    data?: GetScheduledBroadcastResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetScheduledBroadcastResponseData
 *
 * @public
 */
interface GetScheduledBroadcastResponseData {
    /** Whether replay is enabled. */
    availableForReplay?: boolean;
    /** Alphanumeric UBS broadcast id (path `:id` for get/update/delete/live). */
    broadcastId?: string;
    /** Optional chat permission option. */
    chatOption?: string;
    /** Optional description. */
    description?: string;
    /** Optional locale. */
    locale?: string;
    /** When true, coordinator will not auto-publish; call POST .../live when ready. */
    manualPublish?: boolean;
    /** Set when this occurrence belongs to a recurrence. */
    recurringScheduleId?: string;
    /** Numeric scheduler id. Required in the update request body. */
    scheduledBroadcastId?: string;
    /** Scheduled end, milliseconds since Unix epoch (decimal string). */
    scheduledEndMs?: string;
    /** Scheduled start, milliseconds since Unix epoch (decimal string). */
    scheduledStartMs?: string;
    /** Bound ingest / source id (`rtmp_stream_key`). */
    sourceId?: string;
    /** Scheduler state (Created, Scheduled, Running, …). */
    state?: string;
    /** Optional telecast association. */
    telecastId?: string;
    /** Optional pre-live slate media id. */
    thumbnailMediaId?: string;
    /** Broadcast title / status text. */
    title?: string;
}
/**
 * Schema type for GetSpacesBuyersResponse
 *
 * @public
 */
interface GetSpacesBuyersResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetSpacesByCreatorIdsResponse
 *
 * @public
 */
interface GetSpacesByCreatorIdsResponse {
    data?: Array<Space>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        resultCount?: number;
    };
}
/**
 * Schema type for GetSpacesByIdResponse
 *
 * @public
 */
interface GetSpacesByIdResponse {
    data?: Space;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetSpacesByIdsResponse
 *
 * @public
 */
interface GetSpacesByIdsResponse {
    data?: Array<Space>;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetSpacesPostsResponse
 *
 * @public
 */
interface GetSpacesPostsResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetTrendsByWoeidResponse
 *
 * @public
 */
interface GetTrendsByWoeidResponse {
    data?: Array<Trend>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetTrendsPersonalizedTrendsResponse
 *
 * @public
 */
interface GetTrendsPersonalizedTrendsResponse {
    data?: Array<PersonalizedTrend>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetUsageResponse
 *
 * @public
 */
interface GetUsageResponse {
    data?: Usage;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetUsersAffiliatesResponse
 *
 * @public
 */
interface GetUsersAffiliatesResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersBlockingResponse
 *
 * @public
 */
interface GetUsersBlockingResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersBookmarkFoldersResponse
 *
 * @public
 */
interface GetUsersBookmarkFoldersResponse {
    data?: Array<GetUsersBookmarkFoldersResponseData>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetUsersBookmarkFoldersResponseData
 *
 * @public
 */
interface GetUsersBookmarkFoldersResponseData {
    /** Unique identifier of the bookmark folder. */
    id: string;
    /** Display name of the bookmark folder. */
    name: string;
}
/**
 * Schema type for GetUsersBookmarksByFolderIdResponse
 *
 * @public
 */
interface GetUsersBookmarksByFolderIdResponse {
    /** The Posts in this bookmark folder, by ID. */
    data?: Array<{
        id: PostId;
    }>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetUsersBookmarksResponse
 *
 * @public
 */
interface GetUsersBookmarksResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersByIdResponse
 *
 * @public
 */
interface GetUsersByIdResponse {
    data?: User;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetUsersByIdsResponse
 *
 * @public
 */
interface GetUsersByIdsResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetUsersByUsernameResponse
 *
 * @public
 */
interface GetUsersByUsernameResponse {
    data?: User;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetUsersByUsernamesResponse
 *
 * @public
 */
interface GetUsersByUsernamesResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetUsersFollowedListsResponse
 *
 * @public
 */
interface GetUsersFollowedListsResponse {
    data?: Array<List>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersFollowersResponse
 *
 * @public
 */
interface GetUsersFollowersResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersFollowingResponse
 *
 * @public
 */
interface GetUsersFollowingResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersLikedPostsResponse
 *
 * @public
 */
interface GetUsersLikedPostsResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersListMembershipsResponse
 *
 * @public
 */
interface GetUsersListMembershipsResponse {
    data?: Array<List>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersMeResponse
 *
 * @public
 */
interface GetUsersMeResponse {
    data?: User;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for GetUsersMentionsResponse
 *
 * @public
 */
interface GetUsersMentionsResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        newestId?: string;
        nextToken?: string;
        oldestId?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersMutingResponse
 *
 * @public
 */
interface GetUsersMutingResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersOwnedListsResponse
 *
 * @public
 */
interface GetUsersOwnedListsResponse {
    data?: Array<List>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersPinnedListsResponse
 *
 * @public
 */
interface GetUsersPinnedListsResponse {
    data?: Array<List>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersPostsResponse
 *
 * @public
 */
interface GetUsersPostsResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        newestId?: string;
        nextToken?: string;
        oldestId?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersPublicKeyResponse
 *
 * @public
 */
interface GetUsersPublicKeyResponse {
    data?: Array<PublicKey>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetUsersPublicKeysResponse
 *
 * @public
 */
interface GetUsersPublicKeysResponse {
    data?: Array<PublicKey>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetUsersRepostsOfMeResponse
 *
 * @public
 */
interface GetUsersRepostsOfMeResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetUsersTimelineResponse
 *
 * @public
 */
interface GetUsersTimelineResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        newestId?: string;
        nextToken?: string;
        oldestId?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for GetWebhooksResponse
 *
 * @public
 */
interface GetWebhooksResponse {
    data?: Array<WebhookConfig>;
    errors?: Array<Problem>;
    meta?: {
        resultCount?: number;
    };
}
/**
 * Schema type for GetWebhooksStreamLinksResponse
 *
 * @public
 */
interface GetWebhooksStreamLinksResponse {
    data?: Array<GetWebhooksStreamLinksResponseData>;
    errors?: Array<Problem>;
}
/**
 * Schema type for GetWebhooksStreamLinksResponseData
 *
 * @public
 */
interface GetWebhooksStreamLinksResponseData {
    /** The application ID */
    applicationId?: string;
    /** The user ID */
    businessUserId?: string;
    /** The datetime the webhook was linked to the stream */
    createdAt?: string;
    /** Requested fields to be rendered */
    fields?: Array<string>;
    /** The stream ID associated with the FilteredStream instance */
    instanceId?: string;
    /** The unique identifier for the webhook */
    webhookId?: string;
}
/**
 * Schema type for GoLiveScheduledBroadcastResponse
 *
 * @public
 */
interface GoLiveScheduledBroadcastResponse$1 {
    data?: GoLiveScheduledBroadcastResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for GoLiveScheduledBroadcastResponseData
 *
 * @public
 */
interface GoLiveScheduledBroadcastResponseData {
    /** Whether replay is enabled. */
    availableForReplay?: boolean;
    /** Alphanumeric UBS broadcast id (path `:id` for get/update/delete/live). */
    broadcastId?: string;
    /** Optional chat permission option. */
    chatOption?: string;
    /** Optional description. */
    description?: string;
    /** Optional locale. */
    locale?: string;
    /** When true, coordinator will not auto-publish; call POST .../live when ready. */
    manualPublish?: boolean;
    /** Set when this occurrence belongs to a recurrence. */
    recurringScheduleId?: string;
    /** Numeric scheduler id. Required in the update request body. */
    scheduledBroadcastId?: string;
    /** Scheduled end, milliseconds since Unix epoch (decimal string). */
    scheduledEndMs?: string;
    /** Scheduled start, milliseconds since Unix epoch (decimal string). */
    scheduledStartMs?: string;
    /** Bound ingest / source id (`rtmp_stream_key`). */
    sourceId?: string;
    /** Scheduler state (Created, Scheduled, Running, …). */
    state?: string;
    /** Optional telecast association. */
    telecastId?: string;
    /** Optional pre-live slate media id. */
    thumbnailMediaId?: string;
    /** Broadcast title / status text. */
    title?: string;
}
/**
 * Schema type for HidePostsReplyRequest
 *
 * @public
 */
interface HidePostsReplyRequest {
    /** Whether the reply should be hidden. */
    hidden: boolean;
}
/**
 * Schema type for HidePostsReplyResponse
 *
 * @public
 */
interface HidePostsReplyResponse {
    data?: HidePostsReplyResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for HidePostsReplyResponseData
 *
 * @public
 */
interface HidePostsReplyResponseData {
    /** Whether the reply is hidden. */
    hidden?: boolean;
}
/**
 * Schema type for InitializeChatGroupResponse
 *
 * @public
 */
interface InitializeChatGroupResponse {
    data?: InitializeChatGroupResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for InitializeChatGroupResponseData
 *
 * @public
 */
interface InitializeChatGroupResponseData {
    /** Unique ID for the new group conversation. */
    conversationId: string;
}
/**
 * Schema type for InitializeMediaUploadRequest
 *
 * @public
 */
interface InitializeMediaUploadRequest {
    /** User ids granted access to the uploaded media. */
    additionalOwners?: Array<string>;
    /** The media category of the upload. */
    mediaCategory?: "amplify_video" | "tweet_gif" | "tweet_image" | "tweet_video" | "dm_gif" | "dm_image" | "dm_video" | "subtitles";
    /** The type of media. */
    mediaType?: "video/mp4" | "video/webm" | "video/mp2t" | "video/quicktime" | "text/srt" | "text/vtt" | "image/jpeg" | "image/gif" | "image/bmp" | "image/png" | "image/webp" | "image/pjpeg" | "image/tiff" | "model/gltf-binary" | "model/vnd.usdz+zip";
    /** Whether this media is shared or not. */
    shared?: boolean;
    /** The total size of the media upload in bytes. */
    totalBytes?: number;
}
/**
 * Schema type for InitializeMediaUploadResponse
 *
 * @public
 */
interface InitializeMediaUploadResponse {
    data?: InitializeMediaUploadResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for InitializeMediaUploadResponseData
 *
 * @public
 */
interface InitializeMediaUploadResponseData {
    /** Seconds until the upload session expires. */
    expiresAfterSecs?: number;
    /** Unique identifier of the upload session. */
    id: string;
    /** The media key for the uploaded media. */
    mediaKey?: string;
}
/**
 * Schema type for InternalErrorProblem
 *
 * @public
 */
interface InternalErrorProblem {
    detail: string;
    status?: number;
    title: string;
    type: "https://api.x.com/2/problems/internal-error";
}
/**
 * Schema type for InvalidRequestProblem
 *
 * @public
 */
interface InvalidRequestProblem {
    detail: string;
    parameter?: string;
    status?: number;
    title: string;
    type: "https://api.x.com/2/problems/invalid-request";
    value?: string;
}
/**
 * A keyword to filter on.
 *
 * @public
 */
type Keyword = string;
/**
 * Schema type for LikeComplianceSchema
 *
 * @public
 */
interface LikeComplianceSchema {
    delete: UnlikeComplianceSchema;
}
/**
 * The unique identifier of this Like.
 *
 * @public
 */
type LikeId = string;
/**
 * Schema type for LikePostRequest
 *
 * @public
 */
interface LikePostRequest$1 {
    tweetId: string;
}
/**
 * Schema type for LikePostResponse
 *
 * @public
 */
interface LikePostResponse$1 {
    data?: LikePostResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for LikePostResponseData
 *
 * @public
 */
interface LikePostResponseData {
    /** Whether the User likes the Post. */
    liked: boolean;
}
/**
 * A Like event, with the tweet author user and the tweet being liked
 *
 * @public
 */
interface LikeWithPostAuthor {
    /** Creation time of the Tweet. */
    createdAt?: string;
    /** The unique identifier of this Like. */
    id?: LikeId;
    /** Unique identifier of a Post */
    likedTweetId?: PostId;
    /** Timestamp in milliseconds of creation. */
    timestampMs?: number;
    /** Unique identifier of a User */
    tweetAuthorId?: UserId;
}
/**
 * Schema type for List
 *
 * @public
 */
interface List {
    createdAt?: string;
    description?: string;
    /** The number of users who follow this List. */
    followerCount?: ListFollowerCount;
    id?: string;
    /** The number of members in this List. */
    memberCount?: ListMemberCount;
    name?: string;
    ownerId?: string;
    private?: boolean;
}
/**
 * The number of users who follow this List.
 *
 * @public
 */
type ListFollowerCount = number;
/**
 * Unique identifier of a List
 *
 * @public
 */
type ListId = string;
/**
 * The number of members in this List.
 *
 * @public
 */
type ListMemberCount = number;
/**
 * Schema type for ListScheduledBroadcastsResponse
 *
 * @public
 */
interface ListScheduledBroadcastsResponse {
    data?: Array<ListScheduledBroadcastsResponseData>;
    errors?: Array<Problem>;
}
/**
 * Schema type for ListScheduledBroadcastsResponseData
 *
 * @public
 */
interface ListScheduledBroadcastsResponseData {
    /** Whether replay is enabled. */
    availableForReplay?: boolean;
    /** Alphanumeric UBS broadcast id (path `:id` for get/update/delete/live). */
    broadcastId?: string;
    /** Optional chat permission option. */
    chatOption?: string;
    /** Optional description. */
    description?: string;
    /** Optional locale. */
    locale?: string;
    /** When true, coordinator will not auto-publish; call POST .../live when ready. */
    manualPublish?: boolean;
    /** Set when this occurrence belongs to a recurrence. */
    recurringScheduleId?: string;
    /** Numeric scheduler id. Required in the update request body. */
    scheduledBroadcastId?: string;
    /** Scheduled end, milliseconds since Unix epoch (decimal string). */
    scheduledEndMs?: string;
    /** Scheduled start, milliseconds since Unix epoch (decimal string). */
    scheduledStartMs?: string;
    /** Bound ingest / source id (`rtmp_stream_key`). */
    sourceId?: string;
    /** Scheduler state (Created, Scheduled, Running, …). */
    state?: string;
    /** Optional telecast association. */
    telecastId?: string;
    /** Optional pre-live slate media id. */
    thumbnailMediaId?: string;
    /** Broadcast title / status text. */
    title?: string;
}
/**
 * Schema type for MarkChatConversationReadRequest
 *
 * @public
 */
interface MarkChatConversationReadRequest {
    /** The sequence ID of the last message to mark as read up to. */
    seenUntilSequenceId: string;
}
/**
 * Schema type for MarkChatConversationReadResponse
 *
 * @public
 */
interface MarkChatConversationReadResponse {
    data?: MarkChatConversationReadResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for MarkChatConversationReadResponseData
 *
 * @public
 */
interface MarkChatConversationReadResponseData {
    /** Whether the conversation was marked read. */
    success: boolean;
}
/**
 * Schema type for Media
 *
 * @public
 */
interface Media {
    altText?: string;
    durationMs?: number;
    height?: number;
    mediaKey?: string;
    /** Nonpublic engagement metrics for the media at the time of the request. */
    nonPublicMetrics?: MediaNonPublicMetrics;
    /** Organic nonpublic engagement metrics for the media at the time of the request. */
    organicMetrics?: MediaOrganicMetrics;
    previewImageUrl?: string;
    /** Promoted nonpublic engagement metrics for the media at the time of the request. */
    promotedMetrics?: MediaPromotedMetrics;
    /** Public engagement metrics for the media at the time of the request. */
    publicMetrics?: MediaPublicMetrics;
    type?: string;
    url?: string;
    /** Each media object may have multiple display or playback variants, with different resolutions or formats. */
    variants?: MediaVariants;
    width?: number;
}
/**
 * Schema type for MediaAnalytics
 *
 * @public
 */
interface MediaAnalytics {
    ctaUrlClicks?: number;
    ctaWatchClicks?: number;
    mediaKey?: string;
    playFromTap?: number;
    playback25?: number;
    playback50?: number;
    playback75?: number;
    playbackComplete?: number;
    playbackStart?: number;
    timestamp?: string;
    /** Time-bucketed video metrics for the media, one entry per granularity bucket. */
    timestampedMetrics?: MediaAnalyticsTimestampedMetrics;
    videoViews?: number;
    watchTimeMs?: number;
}
/**
 * Time-bucketed video metrics for the media, one entry per granularity bucket.
 *
 * @public
 */
type MediaAnalyticsTimestampedMetrics = Array<{
    metrics?: {
        ctaUrlClicks?: number | string | null;
        ctaWatchClicks?: number | string | null;
        playFromTap?: number | string | null;
        playback25?: number | string | null;
        playback50?: number | string | null;
        playback75?: number | string | null;
        playbackComplete?: number | string | null;
        playbackStart?: number | string | null;
        videoViews?: number | string | null;
        watchTimeMs?: number | string | null;
    } | null;
    timestamp?: string | null;
}>;
/**
 * Unique identifier of a Media
 *
 * @public
 */
type MediaId = string;
/**
 * Nonpublic engagement metrics for the media at the time of the request.
 *
 * @public
 */
interface MediaNonPublicMetrics {
    /** Number of users who started playback (0% quartile) of this video. */
    playback_0Count?: number | null;
    /** Number of users who completed playback (100% quartile) of this video. */
    playback_100Count?: number | null;
    /** Number of users who watched at least 25% of this video. */
    playback_25Count?: number | null;
    /** Number of users who watched at least 50% of this video. */
    playback_50Count?: number | null;
    /** Number of users who watched at least 75% of this video. */
    playback_75Count?: number | null;
}
/**
 * Organic nonpublic engagement metrics for the media at the time of the request.
 *
 * @public
 */
interface MediaOrganicMetrics {
    /** Number of users who started playback (0% quartile) of this video. */
    playback_0Count?: number | null;
    /** Number of users who completed playback (100% quartile) of this video. */
    playback_100Count?: number | null;
    /** Number of users who watched at least 25% of this video. */
    playback_25Count?: number | null;
    /** Number of users who watched at least 50% of this video. */
    playback_50Count?: number | null;
    /** Number of users who watched at least 75% of this video. */
    playback_75Count?: number | null;
    /** The number of organic views of this video. Null when the backend returns quartile data without a view count. */
    viewCount?: number | null;
}
/**
 * Promoted nonpublic engagement metrics for the media at the time of the request.
 *
 * @public
 */
interface MediaPromotedMetrics {
    /** Number of users who started playback (0% quartile) of this video. */
    playback_0Count?: number | null;
    /** Number of users who completed playback (100% quartile) of this video. */
    playback_100Count?: number | null;
    /** Number of users who watched at least 25% of this video. */
    playback_25Count?: number | null;
    /** Number of users who watched at least 50% of this video. */
    playback_50Count?: number | null;
    /** Number of users who watched at least 75% of this video. */
    playback_75Count?: number | null;
    /** The number of promoted views of this video. Null when the backend returns quartile data without a view count. */
    viewCount?: number | null;
}
/**
 * Public engagement metrics for the media at the time of the request.
 *
 * @public
 */
interface MediaPublicMetrics {
    /** The number of times this video has been viewed. */
    viewCount: number;
}
/**
 * Schema type for MediaUploadRequest
 *
 * @public
 */
interface MediaUploadRequest {
    /** Comma-separated list of user IDs who can use this media. */
    additionalOwners?: string;
    /** The media file to upload: base64-encoded in JSON bodies, raw bytes in multipart bodies. */
    media: string;
    /** The category of the media being uploaded. */
    mediaCategory: "tweet_image" | "tweet_video" | "tweet_gif" | "dm_image" | "dm_video" | "dm_gif" | "subtitles";
}
/**
 * Schema type for MediaUploadResponse
 *
 * @public
 */
interface MediaUploadResponse {
    data?: MediaUploadResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for MediaUploadResponseData
 *
 * @public
 */
interface MediaUploadResponseData {
    /** Seconds until the upload session expires. */
    expiresAfterSecs?: number;
    /** Unique identifier of the media. */
    id: string;
    image?: MediaUploadResponseDataImage;
    /** The media key for the uploaded media. */
    mediaKey?: string;
    processingInfo?: MediaUploadResponseDataProcessingInfo;
    /** Total size of the media in bytes. */
    size?: number;
    video?: MediaUploadResponseDataVideo;
}
/**
 * Schema type for MediaUploadResponseDataImage
 *
 * @public
 */
interface MediaUploadResponseDataImage {
    /** Height in pixels. */
    h?: number;
    /** MIME type of the uploaded image. */
    imageType?: string;
    /** Width in pixels. */
    w?: number;
}
/**
 * Schema type for MediaUploadResponseDataProcessingInfo
 *
 * @public
 */
interface MediaUploadResponseDataProcessingInfo {
    /** Seconds to wait before polling status again. */
    checkAfterSecs?: number;
    /** Processing completion percentage. */
    progressPercent?: number;
    /** Processing state (pending, in_progress, failed, succeeded). */
    state?: string;
}
/**
 * Schema type for MediaUploadResponseDataVideo
 *
 * @public
 */
interface MediaUploadResponseDataVideo {
    /** MIME type of the processed video. */
    videoType?: string;
}
/**
 * Each media object may have multiple display or playback variants, with different resolutions or formats.
 *
 * @public
 */
type MediaVariants = Array<{
    bitRate?: number | null;
    contentType?: string | null;
    url?: string | null;
}>;
/**
 * Schema type for MuteUserRequest
 *
 * @public
 */
interface MuteUserRequest$1 {
    targetUserId: string;
}
/**
 * Schema type for MuteUserResponse
 *
 * @public
 */
interface MuteUserResponse$1 {
    data?: MuteUserResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for MuteUserResponseData
 *
 * @public
 */
interface MuteUserResponseData {
    /** Whether the source User is muting the target User. */
    muting: boolean;
}
/**
 * Schema type for News
 *
 * @public
 */
interface News {
    category?: string;
    clusterPostsResults?: NewsClusterPostsResults;
    contexts?: Record<string, any>;
    disclaimer?: string;
    hook?: string;
    id?: string;
    keywords?: Record<string, any>;
    name?: string;
    summary?: string;
    updatedAt?: string;
}
/**
 * Schema type for NewsActivityResponsePayload
 *
 * @public
 */
interface NewsActivityResponsePayload {
    category?: string;
    headline?: string;
    hook?: string;
    summary?: string;
}
/**
 * Schema type for NewsClusterPostsResults
 *
 * @public
 */
type NewsClusterPostsResults = Array<{
    postId: string;
}>;
/**
 * Schema type for NotAuthorizedForFieldProblem
 *
 * @public
 */
interface NotAuthorizedForFieldProblem {
    detail: string;
    field: string;
    parameter?: string;
    resourceId?: string;
    resourceType?: string;
    section?: string;
    status?: number;
    title: string;
    type: "https://api.x.com/2/problems/not-authorized-for-field";
    value?: string;
}
/**
 * Schema type for NotAuthorizedForResourceProblem
 *
 * @public
 */
interface NotAuthorizedForResourceProblem {
    detail: string;
    parameter?: string;
    resourceId?: string;
    resourceType: string;
    section?: string;
    status?: number;
    title: string;
    type: "https://api.x.com/2/problems/not-authorized-for-resource";
    value?: string;
}
/**
 * Schema type for Note
 *
 * @public
 */
interface Note {
    id?: string;
    /** Details about the Community Note's content, classification and source. */
    info?: NoteInfo;
    /** Per-model scoring breakdown for the Community Note. */
    scoringStatus?: NoteScoringStatus;
    status?: string;
    /** AI evaluation results for the Community Note (returned in test mode). */
    testResult?: NoteTestResult;
}
/**
 * Unique identifier of a Note
 *
 * @public
 */
type NoteId = string;
/**
 * Details about the Community Note's content, classification and source.
 *
 * @public
 */
interface NoteInfo {
    /** How the noted Post was classified (snake_case). */
    classification?: string | null;
    /** Reasons the noted Post may be misleading (snake_case). */
    misleadingTags?: Array<string> | null;
    /** Unique identifier of the Post this note is about. */
    postId?: string | null;
    /** Current rating status of the note. */
    ratingStatus?: string | null;
    /** The text of the Community Note. */
    text?: string | null;
    /** Whether the note cites trustworthy sources. */
    trustworthySources?: boolean | null;
}
/**
 * Per-model scoring breakdown for the Community Note.
 *
 * @public
 */
interface NoteScoringStatus {
    /** Whether the caller has access to the scoring details. */
    hasAccess?: boolean | null;
    /** Rating counts broken down per scoring model. */
    ratingCountsPerModel?: Array<{
        modelName?: string | null;
        value?: {
            negativeFactorBucketCounts?: {
                helpfulCount?: number | null;
                helpfulTagCounts?: Array<{
                    tagCount?: number | null;
                    tagName?: string | null;
                }> | null;
                notHelpfulCount?: number | null;
                notHelpfulTagCounts?: Array<{
                    tagCount?: number | null;
                    tagName?: string | null;
                }> | null;
                somewhatHelpfulCount?: number | null;
            } | null;
            neutralFactorBucketCounts?: {
                helpfulCount?: number | null;
                helpfulTagCounts?: Array<{
                    tagCount?: number | null;
                    tagName?: string | null;
                }> | null;
                notHelpfulCount?: number | null;
                notHelpfulTagCounts?: Array<{
                    tagCount?: number | null;
                    tagName?: string | null;
                }> | null;
                somewhatHelpfulCount?: number | null;
            } | null;
            positiveFactorBucketCounts?: {
                helpfulCount?: number | null;
                helpfulTagCounts?: Array<{
                    tagCount?: number | null;
                    tagName?: string | null;
                }> | null;
                notHelpfulCount?: number | null;
                notHelpfulTagCounts?: Array<{
                    tagCount?: number | null;
                    tagName?: string | null;
                }> | null;
                somewhatHelpfulCount?: number | null;
            } | null;
        } | null;
    }> | null;
}
/**
 * AI evaluation results for the Community Note (returned in test mode).
 *
 * @public
 */
interface NoteTestResult {
    /** Per-evaluator outcomes for the note. */
    evaluationOutcome?: Array<{
        evaluatorScoreBucket: string;
        evaluatorType: string;
    }> | null;
}
/**
 * Schema type for PersonalizedTrend
 *
 * @public
 */
interface PersonalizedTrend {
    category?: string;
    postCount?: string;
    trendName?: string;
    trendingSince?: string;
}
/**
 * Schema type for PinListRequest
 *
 * @public
 */
interface PinListRequest$1 {
    listId: string;
}
/**
 * Schema type for PinListResponse
 *
 * @public
 */
interface PinListResponse$1 {
    data?: PinListResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for PinListResponseData
 *
 * @public
 */
interface PinListResponseData {
    /** Indicates whether the List is pinned by the authenticated user. */
    pinned: boolean;
}
/**
 * Schema type for Place
 *
 * @public
 */
interface Place {
    /** A list of unique identifiers of the Places that contain this place. */
    containedWithin?: PlaceContainedWithin;
    country?: string;
    countryCode?: string;
    fullName?: string;
    /** The geographic location of this place, expressed as a GeoJSON Feature. */
    geo?: PlaceGeo;
    id?: string;
    name?: string;
    placeType?: string;
}
/**
 * A list of unique identifiers of the Places that contain this place.
 *
 * @public
 */
type PlaceContainedWithin = Array<string>;
/**
 * The geographic location of this place, expressed as a GeoJSON Feature.
 *
 * @public
 */
interface PlaceGeo {
    /** The bounding box as [southwest_longitude, southwest_latitude, northeast_longitude, northeast_latitude]. */
    bbox: Array<number>;
    /** Additional GeoJSON feature properties. */
    properties: Record<string, any>;
    /** The GeoJSON feature type. */
    type: "Feature";
}
/**
 * Schema type for Poll
 *
 * @public
 */
interface Poll {
    durationMinutes?: number;
    endDatetime?: string;
    id?: string;
    /** The list of options (choices) available in this poll. */
    options?: PollOptions;
    votingStatus?: string;
}
/**
 * The list of options (choices) available in this poll.
 *
 * @public
 */
type PollOptions = Array<{
    label: string;
    position: number;
    votes: number;
}>;
/**
 * Schema type for Post
 *
 * @public
 */
interface Post {
    article?: Record<string, any>;
    /** Metadata about the long-form Article attached to this Post, if any. */
    articleTitle?: Record<string, any>;
    /** Specifies the type of attachments (if any) present in this Post. */
    attachments?: PostAttachments;
    /** Unique identifier of the author of this Post. */
    authorId?: string;
    cardUri?: string;
    /** The unique identifier of the Community this Post belongs to, if any. */
    communityId?: string;
    /** Annotations inferred about the Post (domain and entity context). */
    contextAnnotations?: PostContextAnnotations;
    /** The ID of the conversation this Post belongs to (matches the root Post's ID). */
    conversationId?: string;
    /** Creation time of the Post. */
    createdAt?: string;
    /** The inclusive start and exclusive end indices of the displayable content of the Post. */
    displayTextRange?: PostDisplayTextRange;
    /** Indicates how much longer (if at all) this Post can be edited. */
    editControls?: PostEditControls;
    /** A list of Post IDs in this Post's edit history chain. */
    editHistoryPostIds?: Array<string>;
    /** A list of metadata entities (hashtags, mentions, URLs) found in the Post text. */
    entities?: PostEntities;
    /** The location tagged on the Post, if the user provided one. */
    geo?: PostGeo;
    /** Unique identifier of this Post. */
    id?: string;
    /** Unique identifier of the User this Post is replying to. */
    inReplyToUserId?: string;
    /** Language of the Post, if detected by X. Returned as a BCP47 language tag. */
    lang?: string;
    /** Community-Notes media matches for this Post. */
    matchedMediaNotes?: PostMatchedMediaNotes;
    /** Metadata for media attached to this Post. */
    mediaMetadata?: PostMediaMetadata;
    /** Nonpublic engagement metrics for the Post at the time of the request. */
    nonPublicMetrics?: Record<string, any>;
    /** The full content of the Post, including text beyond 280 characters. */
    notePost?: PostNotePost;
    /** Community-Notes request suggestions for this Post. */
    noteRequestSuggestions?: PostNoteRequestSuggestions;
    /** Organic nonpublic engagement metrics for the Post at the time of the request. */
    organicMetrics?: Record<string, any>;
    /** Indicates if this Post is a paid partnership, i.e. it has been disclosed by the author as containing paid promotion. */
    paidPartnership?: boolean;
    /** Indicates if this Post contains URLs marked as sensitive, for example content suitable for mature audiences. */
    possiblySensitive?: boolean;
    /** Promoted nonpublic engagement metrics for the Post at the time of the request. */
    promotedMetrics?: Record<string, any>;
    /** Engagement metrics for the Post at the time of the request. */
    publicMetrics?: PostPublicMetrics;
    /** A list of Posts this Post refers to. If the Post is a Retweet, Quote or Reply, it includes the referenced Post's type and ID. */
    referencedPosts?: PostReferencedPosts;
    /** Shows who can reply to this Post. */
    replySettings?: string;
    /** The scopes for this Post. */
    scopes?: PostScopes;
    /** The name of the app the user posted from. This is deprecated. */
    source?: string;
    /** URLs suggested as sources for this Post. */
    suggestedSourceLinks?: PostSuggestedSourceLinks;
    /** Suggested source URLs for this Post, each with the number of times it was suggested. */
    suggestedSourceLinksWithCounts?: PostSuggestedSourceLinksWithCounts;
    /** The content of the Post. */
    text?: string;
    username?: string;
    /** Withholding details for withheld content. */
    withheld?: PostWithheld;
}
/**
 * Specifies the type of attachments (if any) present in this Post.
 *
 * @public
 */
interface PostAttachments {
    /** Media keys of media attached to this Post. */
    mediaKeys?: Array<string> | null;
    /** IDs of the source Posts the attached media originated from. */
    mediaSourceTweetId?: Array<string> | null;
    /** IDs of polls attached to this Post. */
    pollIds?: Array<string> | null;
}
/**
 * Tweet compliance data.
 *
 * @public
 */
type PostComplianceData = PostDeleteComplianceSchema | PostWithheldComplianceSchema | PostDropComplianceSchema | PostUndropComplianceSchema | PostEditComplianceSchema;
/**
 * Schema type for PostComplianceSchema
 *
 * @public
 */
interface PostComplianceSchema {
    /** Event time. */
    eventAt: string;
    /** Unique identifier of a Post */
    quoteTweetId?: PostId;
    tweet: {
        authorId: UserId;
        id: PostId;
    };
}
/**
 * Annotations inferred about the Post (domain and entity context).
 *
 * @public
 */
type PostContextAnnotations = Array<{
    domain: ({
        description?: string | null;
        id?: string | null;
        name?: string | null;
    });
    entity: ({
        description?: string | null;
        id?: string | null;
        name?: string | null;
    });
}>;
/**
 * The identity of a deleted Post.
 *
 * @public
 */
interface PostDeleteActivityResponsePayload {
    /** Unique identifier of a User */
    authorId: UserId;
    /** Unique identifier of a Post */
    id: PostId;
}
/**
 * Schema type for PostDeleteComplianceSchema
 *
 * @public
 */
interface PostDeleteComplianceSchema {
    delete: PostComplianceSchema;
}
/**
 * The inclusive start and exclusive end indices of the displayable content of the Post.
 *
 * @public
 */
type PostDisplayTextRange = Array<number>;
/**
 * Schema type for PostDropComplianceSchema
 *
 * @public
 */
interface PostDropComplianceSchema {
    drop: PostComplianceSchema;
}
/**
 * Schema type for PostEditComplianceObjectSchema
 *
 * @public
 */
interface PostEditComplianceObjectSchema {
    editTweetIds: Array<PostId>;
    /** Event time. */
    eventAt: string;
    /** Unique identifier of a Post */
    initialTweetId: PostId;
    tweet: {
        id: PostId;
    };
}
/**
 * Schema type for PostEditComplianceSchema
 *
 * @public
 */
interface PostEditComplianceSchema {
    tweetEdit: PostEditComplianceObjectSchema;
}
/**
 * Indicates how much longer (if at all) this Post can be edited.
 *
 * @public
 */
interface PostEditControls {
    /** The time until which this Post can be edited. */
    editableUntil?: string | null;
    /** Number of edits still allowed for this Post. */
    editsRemaining?: number | null;
    /** Indicates whether this Post is eligible to be edited. */
    isEditEligible?: boolean | null;
}
/**
 * A list of metadata entities (hashtags, mentions, URLs) found in the Post text.
 *
 * @public
 */
interface PostEntities {
    cashtags?: Array<{
        end: number;
        start: number;
        tag: string;
    }> | null;
    hashtags?: Array<{
        end: number;
        start: number;
        tag: string;
    }> | null;
    mentions?: Array<{
        end: number;
        id?: string | null;
        start: number;
        username?: string | null;
    }> | null;
    urls?: Array<{
        description?: string | null;
        displayUrl?: string | null;
        end: number;
        expandedUrl?: string | null;
        images?: Array<{
            height?: number | null;
            url?: string | null;
            width?: number | null;
        }> | null;
        mediaKey?: string | null;
        start: number;
        status?: number | null;
        title?: string | null;
        unwoundUrl?: string | null;
        url?: string | null;
    }> | null;
}
/**
 * The location tagged on the Post, if the user provided one.
 *
 * @public
 */
interface PostGeo {
    /** A GeoJSON Point geometry. */
    coordinates?: {
        coordinates: Array<number>;
        type: "Point";
    } | null;
    /** The unique identifier of the tagged place. */
    placeId?: string | null;
}
/**
 * Unique identifier of a Post
 *
 * @public
 */
type PostId = string;
/**
 * Tweet label data.
 *
 * @public
 */
type PostLabelData = PostNoticeSchema | PostUnviewableSchema;
/**
 * Community-Notes media matches for this Post.
 *
 * @public
 */
type PostMatchedMediaNotes = Array<{
    matchStatus?: string | null;
    noteId?: string | null;
}>;
/**
 * Metadata for media attached to this Post.
 *
 * @public
 */
type PostMediaMetadata = Array<{
    altText?: string | null;
    description?: string | null;
    mediaKey?: string | null;
    title?: string | null;
}>;
/**
 * The full content of the Post, including text beyond 280 characters.
 *
 * @public
 */
interface PostNotePost {
    /** Metadata entities (hashtags, cashtags, mentions, URLs) found in the note Post text. */
    entities?: {
        cashtags?: Array<{
            end: number;
            start: number;
            tag: string;
        }> | null;
        hashtags?: Array<{
            end: number;
            start: number;
            tag: string;
        }> | null;
        mentions?: Array<{
            end: number;
            id?: string | null;
            start: number;
            username?: string | null;
        }> | null;
        urls?: Array<{
            displayUrl?: string | null;
            end: number;
            expandedUrl?: string | null;
            start: number;
            url?: string | null;
        }> | null;
    } | null;
    /** The full note text of the Post. */
    text: string;
}
/**
 * Community-Notes request suggestions for this Post.
 *
 * @public
 */
type PostNoteRequestSuggestions = Array<{
    sourceLink?: string | null;
    suggestion?: string | null;
    suggestionId?: string | null;
}>;
/**
 * Schema type for PostNotice
 *
 * @public
 */
interface PostNotice {
    /** If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’. */
    application: string;
    /** Information shown on the Tweet label */
    details?: string;
    /** Event time. */
    eventAt: string;
    /** The type of label on the Tweet */
    eventType: string;
    /** Link to more information about this kind of label */
    extendedDetailsUrl?: string;
    /** Title/header of the Tweet label */
    labelTitle?: string;
    tweet: {
        authorId: UserId;
        id: PostId;
    };
}
/**
 * Schema type for PostNoticeSchema
 *
 * @public
 */
interface PostNoticeSchema {
    publicTweetNotice: PostNotice;
}
/**
 * Engagement metrics for the Post at the time of the request.
 *
 * @public
 */
interface PostPublicMetrics {
    /** Number of times this Post has been bookmarked. */
    bookmarkCount: number;
    /** Number of times this Post has been viewed. */
    impressionCount: number;
    /** Number of likes on this Post. */
    likeCount: number;
    /** Number of quote Posts of this Post. */
    quoteCount: number;
    /** Number of replies to this Post. */
    replyCount: number;
    /** Number of times this Post has been reposted. */
    repostCount: number;
}
/**
 * A list of Posts this Post refers to. If the Post is a Retweet, Quote or Reply, it includes the referenced Post's type and ID.
 *
 * @public
 */
type PostReferencedPosts = Array<{
    id: string;
    type: ("retweeted" | "quoted" | "replied_to");
}>;
/**
 * The scopes for this Post.
 *
 * @public
 */
interface PostScopes {
    /** Indicates whether visibility of this Post is limited to the author's followers. */
    followers: boolean;
}
/**
 * URLs suggested as sources for this Post.
 *
 * @public
 */
type PostSuggestedSourceLinks = Array<string>;
/**
 * Suggested source URLs for this Post, each with the number of times it was suggested.
 *
 * @public
 */
type PostSuggestedSourceLinksWithCounts = Array<{
    count?: number | null;
    url?: string | null;
}>;
/**
 * Schema type for PostTakedownComplianceSchema
 *
 * @public
 */
interface PostTakedownComplianceSchema {
    /** Event time. */
    eventAt: string;
    /** Unique identifier of a Post */
    quoteTweetId?: PostId;
    tweet: {
        authorId: UserId;
        id: PostId;
    };
    withheldInCountries: Array<CountryCode>;
}
/**
 * Schema type for PostUndropComplianceSchema
 *
 * @public
 */
interface PostUndropComplianceSchema {
    undrop: PostComplianceSchema;
}
/**
 * Schema type for PostUnviewable
 *
 * @public
 */
interface PostUnviewable {
    /** If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’. */
    application: string;
    /** Event time. */
    eventAt: string;
    tweet: {
        authorId: UserId;
        id: PostId;
    };
}
/**
 * Schema type for PostUnviewableSchema
 *
 * @public
 */
interface PostUnviewableSchema {
    publicTweetUnviewable: PostUnviewable;
}
/**
 * Withholding details for withheld content.
 *
 * @public
 */
interface PostWithheld {
    /** Indicates whether this content is withheld due to a copyright claim. */
    copyright: boolean;
    /** Uppercase ISO 3166-1 alpha-2 country codes where this content is withheld. */
    countryCodes: Array<string>;
    /** Whether the withholding applies to a Post or a User. */
    scope?: "post" | "user" | null;
}
/**
 * Schema type for PostWithheldComplianceSchema
 *
 * @public
 */
interface PostWithheldComplianceSchema {
    withheld: PostTakedownComplianceSchema;
}
/**
 * Schema type for Problem
 *
 * @public
 */
type Problem = ResourceNotFoundProblem | InvalidRequestProblem | NotAuthorizedForResourceProblem | NotAuthorizedForFieldProblem | FieldUnauthorizedProblem | FieldHydrationFailureProblem | ResourceUnavailableProblem | DisallowedResourceProblem | InternalErrorProblem;
/**
 * Schema type for ProfileUpdateActivityResponsePayload
 *
 * @public
 */
interface ProfileUpdateActivityResponsePayload {
    after?: string;
    before?: string;
}
/**
 * Schema type for PublicKey
 *
 * @public
 */
interface PublicKey {
    identityPublicKeySignature?: string;
    juiceboxConfig?: Record<string, any>;
    publicKey?: string;
    publicKeyVersion?: string;
    signingPublicKey?: string;
}
/**
 * Unique identifier of a PublicKey
 *
 * @public
 */
type PublicKeyId = string;
/**
 * Schema type for RemoveListsMemberByUserIdResponse
 *
 * @public
 */
interface RemoveListsMemberByUserIdResponse {
    data?: RemoveListsMemberByUserIdResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for RemoveListsMemberByUserIdResponseData
 *
 * @public
 */
interface RemoveListsMemberByUserIdResponseData {
    /** Indicates whether the user is a member of the List. */
    isMember: boolean;
}
/**
 * Schema type for RepostPostRequest
 *
 * @public
 */
interface RepostPostRequest$1 {
    tweetId: string;
}
/**
 * Schema type for RepostPostResponse
 *
 * @public
 */
interface RepostPostResponse$1 {
    data?: RepostPostResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for RepostPostResponseData
 *
 * @public
 */
interface RepostPostResponseData {
    /** The ID of the reposted Post. */
    restId: string;
    /** Indicates whether the user reposted the Post. */
    retweeted: boolean;
}
/**
 * Schema type for ResourceNotFoundProblem
 *
 * @public
 */
interface ResourceNotFoundProblem {
    detail: string;
    parameter?: string;
    resourceId?: string;
    resourceType: string;
    status?: number;
    title: string;
    type: "https://api.x.com/2/problems/resource-not-found";
    value?: string;
}
/**
 * Schema type for ResourceUnavailableProblem
 *
 * @public
 */
interface ResourceUnavailableProblem {
    detail: string;
    resourceId?: string;
    resourceType: string;
    status?: number;
    title: string;
    type: "https://api.x.com/2/problems/resource-unavailable";
}
/**
 * Unique identifier of this rule.
 *
 * @public
 */
type RuleId = string;
/**
 * A tag meant for the labeling of user provided rules.
 *
 * @public
 */
type RuleTag = string;
/**
 * Schema type for RulesCount
 *
 * @public
 */
interface RulesCount {
    allProjectClientApps?: RulesCountAllProjectClientApps;
    capPerClientApp?: string;
    capPerProject?: string;
    /** A count of filtered-stream rules for a single client application. */
    clientAppRulesCount?: RulesCountClientAppRulesCount;
    projectRulesCount?: string;
}
/**
 * Schema type for RulesCountAllProjectClientApps
 *
 * @public
 */
type RulesCountAllProjectClientApps = Array<{
    clientAppId?: string | null;
    ruleCount: number;
}>;
/**
 * A count of filtered-stream rules for a single client application.
 *
 * @public
 */
interface RulesCountClientAppRulesCount {
    /** Unique identifier of the client application. */
    clientAppId?: string | null;
    /** Number of rules configured for the client application. */
    ruleCount: number;
}
/**
 * Schema type for SearchCommunitiesResponse
 *
 * @public
 */
interface SearchCommunitiesResponse {
    data?: Array<Community>;
    errors?: Array<Problem>;
    meta?: {
        nextToken?: string;
    };
}
/**
 * Schema type for SearchCommunityNotesWrittenResponse
 *
 * @public
 */
interface SearchCommunityNotesWrittenResponse {
    data?: Array<Note>;
    errors?: Array<Problem>;
    meta?: {
        nextToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for SearchEligiblePostsResponse
 *
 * @public
 */
interface SearchEligiblePostsResponse$1 {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for SearchNewsResponse
 *
 * @public
 */
interface SearchNewsResponse {
    data?: Array<News>;
    errors?: Array<Problem>;
    meta?: {
        resultCount?: number;
    };
}
/**
 * Schema type for SearchPostsAllResponse
 *
 * @public
 */
interface SearchPostsAllResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        newestId?: string;
        nextToken?: string;
        oldestId?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for SearchPostsRecentResponse
 *
 * @public
 */
interface SearchPostsRecentResponse {
    data?: Array<Post>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        newestId?: string;
        nextToken?: string;
        oldestId?: string;
        previousToken?: string;
        resultCount?: number;
    };
}
/**
 * Schema type for SearchSpacesResponse
 *
 * @public
 */
interface SearchSpacesResponse {
    data?: Array<Space>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        resultCount?: number;
    };
}
/**
 * Schema type for SearchUsersResponse
 *
 * @public
 */
interface SearchUsersResponse {
    data?: Array<User>;
    errors?: Array<Problem>;
    includes?: Expansions;
    meta?: {
        nextToken?: string;
        previousToken?: string;
    };
}
/**
 * Schema type for SendBroadcastChatRequest
 *
 * @public
 */
interface SendBroadcastChatRequest$1 {
    /** The chat message text. */
    text: string;
}
/**
 * Schema type for SendBroadcastChatResponse
 *
 * @public
 */
interface SendBroadcastChatResponse$1 {
    data?: SendBroadcastChatResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for SendBroadcastChatResponseData
 *
 * @public
 */
interface SendBroadcastChatResponseData {
    /** Whether the chat message was sent. */
    success: boolean;
    /** Server timestamp of the message, in nanoseconds. */
    timestamp: string;
}
/**
 * Schema type for SendChatMessageRequest
 *
 * @public
 */
interface SendChatMessageRequest {
    /** Optional conversation token. */
    conversationToken?: string;
    /** Base64-encoded Thrift MessageCreateEvent containing encrypted message contents. */
    encodedMessageCreateEvent: string;
    /** Base64-encoded Thrift MessageEventSignature for message verification. */
    encodedMessageEventSignature?: string;
    /** Unique identifier for this message. */
    messageId: string;
}
/**
 * Schema type for SendChatMessageResponse
 *
 * @public
 */
interface SendChatMessageResponse {
    data?: SendChatMessageResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for SendChatMessageResponseData
 *
 * @public
 */
interface SendChatMessageResponseData {
    /** Base64-encoded Thrift message event for the sent message. */
    encodedMessageEvent: string;
}
/**
 * Schema type for SendChatTypingIndicatorResponse
 *
 * @public
 */
interface SendChatTypingIndicatorResponse {
    data?: SendChatTypingIndicatorResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for SendChatTypingIndicatorResponseData
 *
 * @public
 */
interface SendChatTypingIndicatorResponseData {
    /** Whether the typing indicator was sent. */
    success: boolean;
}
/**
 * Schema type for Space
 *
 * @public
 */
interface Space {
    createdAt?: string;
    creatorId?: string;
    endedAt?: string;
    /** A list of unique identifiers of the Users who host this Space. */
    hostIds?: SpaceHostIds;
    id?: string;
    /** A list of unique identifiers of the Users invited to this Space. */
    invitedUserIds?: SpaceInvitedUserIds;
    isTicketed?: boolean;
    lang?: string;
    participantCount?: number;
    scheduledStart?: string;
    /** A list of unique identifiers of the Users who are speakers in this Space. */
    speakerIds?: SpaceSpeakerIds;
    startedAt?: string;
    state?: string;
    subscriberCount?: number;
    title?: string;
    /** A list of unique identifiers of the Topics associated with this Space. */
    topicIds?: SpaceTopicIds;
    updatedAt?: string;
}
/**
 * A list of unique identifiers of the Users who host this Space.
 *
 * @public
 */
type SpaceHostIds = Array<string>;
/**
 * A list of unique identifiers of the Users invited to this Space.
 *
 * @public
 */
type SpaceInvitedUserIds = Array<string>;
/**
 * A list of unique identifiers of the Users who are speakers in this Space.
 *
 * @public
 */
type SpaceSpeakerIds = Array<string>;
/**
 * A list of unique identifiers of the Topics associated with this Space.
 *
 * @public
 */
type SpaceTopicIds = Array<string>;
/**
 * Tweet label stream events.
 *
 * @public
 */
type StreamLabelsComplianceResponse = {
    data: PostLabelData;
} | {
    errors: Array<Problem>;
};
/**
 * Likes compliance stream events.
 *
 * @public
 */
type StreamLikesComplianceResponse = {
    data: LikeComplianceSchema;
} | {
    errors: Array<Problem>;
};
/**
 * Schema type for StreamLikesFirehoseResponse
 *
 * @public
 */
interface StreamLikesFirehoseResponse {
    /** A Like event, with the tweet author user and the tweet being liked */
    data?: LikeWithPostAuthor;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for StreamLikesSample10Response
 *
 * @public
 */
interface StreamLikesSample10Response {
    /** A Like event, with the tweet author user and the tweet being liked */
    data?: LikeWithPostAuthor;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Tweet compliance stream events.
 *
 * @public
 */
type StreamPostsComplianceResponse = {
    data: PostComplianceData;
} | {
    errors: Array<Problem>;
};
/**
 * Schema type for StreamPostsFirehoseEnResponse
 *
 * @public
 */
interface StreamPostsFirehoseEnResponse {
    data?: Post;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for StreamPostsFirehoseJaResponse
 *
 * @public
 */
interface StreamPostsFirehoseJaResponse {
    data?: Post;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for StreamPostsFirehoseKoResponse
 *
 * @public
 */
interface StreamPostsFirehoseKoResponse {
    data?: Post;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for StreamPostsFirehosePtResponse
 *
 * @public
 */
interface StreamPostsFirehosePtResponse {
    data?: Post;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for StreamPostsFirehoseResponse
 *
 * @public
 */
interface StreamPostsFirehoseResponse {
    data?: Post;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched.
 *
 * @public
 */
interface StreamPostsResponse {
    data?: Post;
    errors?: Array<Problem>;
    includes?: Expansions;
    /** The list of rules which matched the Tweet */
    matchingRules?: Array<{
        id: RuleId;
        tag?: RuleTag;
    }>;
}
/**
 * Schema type for StreamPostsSample10Response
 *
 * @public
 */
interface StreamPostsSample10Response {
    data?: Post;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * Schema type for StreamPostsSampleResponse
 *
 * @public
 */
interface StreamPostsSampleResponse {
    data?: Post;
    errors?: Array<Problem>;
    includes?: Expansions;
}
/**
 * User compliance stream events.
 *
 * @public
 */
type StreamUsersComplianceResponse = {
    data: UserComplianceData;
} | {
    errors: Array<Problem>;
};
/**
 * Schema type for Topic
 *
 * @public
 */
interface Topic {
    description?: string;
    id?: string;
    name?: string;
}
/**
 * Schema type for Trend
 *
 * @public
 */
interface Trend {
    trendName?: string;
    tweetCount?: number;
}
/**
 * Schema type for UnblockUsersDmsResponse
 *
 * @public
 */
interface UnblockUsersDmsResponse {
    data?: UnblockUsersDmsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UnblockUsersDmsResponseData
 *
 * @public
 */
interface UnblockUsersDmsResponseData {
    /** Indicates whether the target user is DM-blocked. */
    blocked: boolean;
}
/**
 * Schema type for UnfollowListResponse
 *
 * @public
 */
interface UnfollowListResponse$1 {
    data?: UnfollowListResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UnfollowListResponseData
 *
 * @public
 */
interface UnfollowListResponseData {
    /** Indicates whether the user is following the List. */
    following: boolean;
}
/**
 * Schema type for UnfollowUserResponse
 *
 * @public
 */
interface UnfollowUserResponse$1 {
    data?: UnfollowUserResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UnfollowUserResponseData
 *
 * @public
 */
interface UnfollowUserResponseData {
    /** Whether the user is followed. */
    following: boolean;
}
/**
 * Schema type for UnlikeComplianceSchema
 *
 * @public
 */
interface UnlikeComplianceSchema {
    /** Event time. */
    eventAt: string;
    favorite: {
        id: PostId;
        userId: UserId;
    };
}
/**
 * Schema type for UnlikePostResponse
 *
 * @public
 */
interface UnlikePostResponse$1 {
    data?: UnlikePostResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UnlikePostResponseData
 *
 * @public
 */
interface UnlikePostResponseData {
    /** Whether the Post is liked. */
    liked: boolean;
}
/**
 * Schema type for UnmuteUserResponse
 *
 * @public
 */
interface UnmuteUserResponse$1 {
    data?: UnmuteUserResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UnmuteUserResponseData
 *
 * @public
 */
interface UnmuteUserResponseData {
    /** Whether the user is muted. */
    muting: boolean;
}
/**
 * Schema type for UnpinListResponse
 *
 * @public
 */
interface UnpinListResponse$1 {
    data?: UnpinListResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UnpinListResponseData
 *
 * @public
 */
interface UnpinListResponseData {
    /** Indicates whether the List is pinned by the authenticated user. */
    pinned: boolean;
}
/**
 * Schema type for UnrepostPostResponse
 *
 * @public
 */
interface UnrepostPostResponse$1 {
    data?: UnrepostPostResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UnrepostPostResponseData
 *
 * @public
 */
interface UnrepostPostResponseData {
    /** Whether the Post is reposted. */
    retweeted: boolean;
}
/**
 * Schema type for UpdateActivitySubscriptionRequest
 *
 * @public
 */
interface UpdateActivitySubscriptionRequest {
    /** Optional caller-defined tag. */
    tag?: string;
    /** Webhook to deliver the subscription events to. */
    webhookId?: string;
}
/**
 * Schema type for UpdateActivitySubscriptionResponse
 *
 * @public
 */
interface UpdateActivitySubscriptionResponse {
    data?: UpdateActivitySubscriptionResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UpdateActivitySubscriptionResponseData
 *
 * @public
 */
interface UpdateActivitySubscriptionResponseData {
    subscription?: UpdateActivitySubscriptionResponseDataSubscription;
    /** Total active subscriptions for the instance. */
    totalSubscriptions?: number;
}
/**
 * Schema type for UpdateActivitySubscriptionResponseDataSubscription
 *
 * @public
 */
interface UpdateActivitySubscriptionResponseDataSubscription {
    /** Subscription creation time. */
    createdAt?: string;
    /** Activity event type in dot notation. */
    eventType?: string;
    filter?: UpdateActivitySubscriptionResponseDataSubscriptionFilter;
    /** Unique identifier of the subscription. */
    subscriptionId?: string;
    /** Optional caller-defined tag. */
    tag?: string;
    /** Subscription last-update time. */
    updatedAt?: string;
    /** Webhook receiving the subscription events. */
    webhookId?: string;
}
/**
 * Schema type for UpdateActivitySubscriptionResponseDataSubscriptionFilter
 *
 * @public
 */
interface UpdateActivitySubscriptionResponseDataSubscriptionFilter {
    /** Optional direction filter for directional events. Not present for mute.* or block.* events. */
    direction?: string;
    /** Optional keyword filter. */
    keyword?: string;
    /** User the subscription is scoped to. */
    userId?: string;
}
/**
 * Schema type for UpdateListsRequest
 *
 * @public
 */
interface UpdateListsRequest {
    /** New description for the List (up to 100 characters). */
    description?: string;
    /** New name for the List (1-25 characters). */
    name?: string;
    /** Whether the List is private. */
    private?: boolean;
}
/**
 * Schema type for UpdateListsResponse
 *
 * @public
 */
interface UpdateListsResponse {
    data?: UpdateListsResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UpdateListsResponseData
 *
 * @public
 */
interface UpdateListsResponseData {
    /** Indicates whether the List was updated. */
    updated: boolean;
}
/**
 * Schema type for UpdateRulesAdd
 *
 * @public
 */
interface UpdateRulesAdd {
    /** Optional caller-defined label for the rule. */
    tag?: string;
    /** Rule filter expression. */
    value: string;
}
/**
 * Schema type for UpdateRulesDelete
 *
 * @public
 */
interface UpdateRulesDelete {
    /** Rule ids (Snowflake external ids) to delete. */
    ids?: Array<string>;
    /** Rule values to delete. */
    values?: Array<string>;
}
/**
 * Schema type for UpdateRulesRequest
 *
 * @public
 */
interface UpdateRulesRequest$1 {
    /** Rules to add. */
    add?: Array<UpdateRulesAdd>;
    delete?: UpdateRulesDelete;
}
/**
 * Schema type for UpdateRulesResponse
 *
 * @public
 */
interface UpdateRulesResponse$1 {
    data?: Array<UpdateRulesResponseData>;
    errors?: Array<Problem>;
    meta?: {
        sent?: string;
        summary?: Record<string, any>;
    };
}
/**
 * Schema type for UpdateRulesResponseData
 *
 * @public
 */
interface UpdateRulesResponseData {
    /** Unique identifier of the rule. */
    id?: string;
    /** Optional caller-defined label for the rule. */
    tag?: string;
    /** The rule's filter expression. */
    value?: string;
}
/**
 * Schema type for UpdateScheduledBroadcastRequest
 *
 * @public
 */
interface UpdateScheduledBroadcastRequest$1 {
    /** Enable replay. */
    availableForReplay?: boolean;
    /** Chat permission option (numeric string). */
    chatOption?: string;
    /** Description. */
    description?: string;
    /** Lock the broadcast. */
    isLocked?: boolean;
    /** Locale. */
    locale?: string;
    /** If true, do not auto-publish at start; call POST .../live when ready. */
    manualPublish?: boolean;
    /** When true, shift the head of a recurring series. */
    rollForward?: boolean;
    /** Numeric scheduler id from create/list/get. */
    scheduledBroadcastId: string;
    /** End time, ms since Unix epoch (decimal string). */
    scheduledEndMs: string;
    /** Start time, ms since Unix epoch (decimal string). */
    scheduledStartMs: string;
    /** Ingest / source id. */
    sourceId?: string;
    /** Pre-live slate media id (numeric string). */
    thumbnailMediaId?: string;
    /** Title / status text. */
    title?: string;
}
/**
 * Schema type for UpdateScheduledBroadcastResponse
 *
 * @public
 */
interface UpdateScheduledBroadcastResponse$1 {
    data?: UpdateScheduledBroadcastResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for UpdateScheduledBroadcastResponseData
 *
 * @public
 */
interface UpdateScheduledBroadcastResponseData {
    /** Whether replay is enabled. */
    availableForReplay?: boolean;
    /** Alphanumeric UBS broadcast id (path `:id` for get/update/delete/live). */
    broadcastId?: string;
    /** Optional chat permission option. */
    chatOption?: string;
    /** Optional description. */
    description?: string;
    /** Optional locale. */
    locale?: string;
    /** When true, coordinator will not auto-publish; call POST .../live when ready. */
    manualPublish?: boolean;
    /** Set when this occurrence belongs to a recurrence. */
    recurringScheduleId?: string;
    /** Numeric scheduler id. Required in the update request body. */
    scheduledBroadcastId?: string;
    /** Scheduled end, milliseconds since Unix epoch (decimal string). */
    scheduledEndMs?: string;
    /** Scheduled start, milliseconds since Unix epoch (decimal string). */
    scheduledStartMs?: string;
    /** Bound ingest / source id (`rtmp_stream_key`). */
    sourceId?: string;
    /** Scheduler state (Created, Scheduled, Running, …). */
    state?: string;
    /** Optional telecast association. */
    telecastId?: string;
    /** Optional pre-live slate media id. */
    thumbnailMediaId?: string;
    /** Broadcast title / status text. */
    title?: string;
}
/**
 * Schema type for Usage
 *
 * @public
 */
interface Usage {
    capResetDay?: number;
    /** Per-client-app daily Post usage for the caller's project. */
    dailyClientAppUsage?: UsageDailyClientAppUsage;
    /** Project-level daily Post usage for the caller's project. */
    dailyProjectUsage?: UsageDailyProjectUsage;
    projectCap?: string;
    projectId?: string;
    projectUsage?: string;
}
/**
 * Per-client-app daily Post usage for the caller's project.
 *
 * @public
 */
type UsageDailyClientAppUsage = Array<{
    clientAppId?: string | null;
    usage?: Array<{
        date: string;
        usage?: string | null;
    }>;
    usageResultCount: number;
}>;
/**
 * Project-level daily Post usage for the caller's project.
 *
 * @public
 */
interface UsageDailyProjectUsage {
    /** Unique identifier of the project. */
    projectId?: string | null;
    /** Daily usage entries for the project. */
    usage?: Array<{
        date: string;
        usage?: string | null;
    }> | null;
}
/**
 * Schema type for User
 *
 * @public
 */
interface User {
    /** Metadata about a user's affiliation. */
    affiliation?: UserAffiliation;
    confirmedEmail?: string;
    /** Returns detailed information about the relationship between two users. */
    connectionStatus?: UserConnectionStatus;
    /** Creation time of this User. */
    createdAt?: string;
    /** The text of this User's profile description (also known as bio), if the User provided one. */
    description?: string;
    /** A list of metadata found in the User's profile description. */
    entities?: UserEntities;
    /** Unique identifier of this User. */
    id?: string;
    /** Indicates if this User has completed identity verification. */
    isIdentityVerified?: boolean;
    /** The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location. */
    location?: string;
    /** Unique identifier of this User's most recent Post. */
    mostRecentPostId?: string;
    /** The friendly name of this User, as shown on their profile. */
    name?: string;
    /** Indicates if this User is a parody account. */
    parody?: boolean;
    /** Unique identifier of this User's pinned Post. */
    pinnedPostId?: string;
    /** The URL to the profile banner for this User. */
    profileBannerUrl?: string;
    /** The URL to the profile image for this User. */
    profileImageUrl?: string;
    /** Indicates if this User has chosen to protect their Posts (in other words, if this User's Posts are private). */
    protected?: boolean;
    /** A list of metrics for this User. */
    publicMetrics?: UserPublicMetrics;
    /** Indicates if you can send a DM to this User. */
    receivesYourDm?: boolean;
    /** Indicates if this User subscribes to you. */
    subscribesToYou?: boolean;
    /** The subscription relationship between this User and you. */
    subscription?: UserSubscription;
    /** The X Blue subscription type of the user, e.g.: Basic, Premium, PremiumPlus or None. */
    subscriptionType?: string;
    /** The URL specified in the User's profile. */
    url?: string;
    /** The X handle (screen name) of this User. */
    username?: string;
    /** Indicates if this User is a verified X User. */
    verified?: boolean;
    /** The number of verified followers of this User. */
    verifiedFollowersCount?: number;
    /** The X Blue verified type of the user, e.g.: blue, government, business or none. */
    verifiedType?: string;
    /** Withholding details for withheld content. */
    withheld?: UserWithheld;
}
/**
 * Metadata about a user's affiliation.
 *
 * @public
 */
interface UserAffiliation {
    /** URL of the affiliation badge image shown on the User's profile. */
    badgeUrl?: string | null;
    /** Description of the affiliation. */
    description?: string | null;
    /** URL associated with the affiliation. */
    url?: string | null;
    /** A list of unique identifiers of the accounts this User is affiliated with. */
    userId?: Array<string> | null;
}
/**
 * User compliance data.
 *
 * @public
 */
type UserComplianceData = UserProtectComplianceSchema | UserUnprotectComplianceSchema | UserDeleteComplianceSchema | UserUndeleteComplianceSchema | UserSuspendComplianceSchema | UserUnsuspendComplianceSchema | UserWithheldComplianceSchema | UserScrubGeoSchema | UserProfileModificationComplianceSchema;
/**
 * Schema type for UserComplianceSchema
 *
 * @public
 */
interface UserComplianceSchema {
    /** Event time. */
    eventAt: string;
    user: {
        id: UserId;
    };
}
/**
 * Returns detailed information about the relationship between two users.
 *
 * @public
 */
type UserConnectionStatus = Array<"blocking" | "follow_request_received" | "follow_request_sent" | "followed_by" | "following" | "muting">;
/**
 * Schema type for UserDeleteComplianceSchema
 *
 * @public
 */
interface UserDeleteComplianceSchema {
    userDelete: UserComplianceSchema;
}
/**
 * A list of metadata found in the User's profile description.
 *
 * @public
 */
interface UserEntities {
    /** Entities found in the User's bio. */
    description?: {
        cashtags?: Array<{
            end: number;
            start: number;
            tag: string;
        }> | null;
        hashtags?: Array<{
            end: number;
            start: number;
            tag: string;
        }> | null;
        mentions?: Array<{
            end: number;
            id?: string | null;
            start: number;
            username: string;
        }> | null;
        urls?: Array<{
            description?: string | null;
            displayUrl?: string | null;
            end: number;
            expandedUrl?: string | null;
            images?: Array<{
                height?: number | null;
                url?: string | null;
                width?: number | null;
            }> | null;
            mediaKey?: string | null;
            start: number;
            status?: number | null;
            title?: string | null;
            unwoundUrl?: string | null;
            url: string;
        }> | null;
    } | null;
    /** Entities for the User's profile website URL. */
    url?: {
        urls?: Array<{
            description?: string | null;
            displayUrl?: string | null;
            end: number;
            expandedUrl?: string | null;
            images?: Array<{
                height?: number | null;
                url?: string | null;
                width?: number | null;
            }> | null;
            mediaKey?: string | null;
            start: number;
            status?: number | null;
            title?: string | null;
            unwoundUrl?: string | null;
            url: string;
        }> | null;
    } | null;
}
/**
 * Unique identifier of a User
 *
 * @public
 */
type UserId = string;
/**
 * Schema type for UserProfileModificationComplianceSchema
 *
 * @public
 */
interface UserProfileModificationComplianceSchema {
    userProfileModification: UserProfileModificationObjectSchema;
}
/**
 * Schema type for UserProfileModificationObjectSchema
 *
 * @public
 */
interface UserProfileModificationObjectSchema {
    /** Event time. */
    eventAt: string;
    newValue: string;
    profileField: string;
    user: {
        id: UserId;
    };
}
/**
 * Schema type for UserProtectComplianceSchema
 *
 * @public
 */
interface UserProtectComplianceSchema {
    userProtect: UserComplianceSchema;
}
/**
 * A list of metrics for this User.
 *
 * @public
 */
interface UserPublicMetrics {
    /** Number of Users who follow this User. */
    followersCount: number;
    /** Number of Users this User follows. */
    followingCount: number;
    /** Number of Posts this User has liked. */
    likeCount?: number | null;
    /** Number of Lists that include this User. */
    listedCount: number;
    /** Number of media items posted by this User. */
    mediaCount?: number | null;
    /** Number of Posts (including Reposts) created by this User. */
    postCount: number;
}
/**
 * Schema type for UserScrubGeoObjectSchema
 *
 * @public
 */
interface UserScrubGeoObjectSchema {
    /** Event time. */
    eventAt: string;
    /** Unique identifier of a Post */
    upToTweetId: PostId;
    user: {
        id: UserId;
    };
}
/**
 * Schema type for UserScrubGeoSchema
 *
 * @public
 */
interface UserScrubGeoSchema {
    scrubGeo: UserScrubGeoObjectSchema;
}
/**
 * The subscription relationship between this User and you.
 *
 * @public
 */
interface UserSubscription {
    /** Indicates if this User subscribes to you. */
    subscribesToYou: boolean;
}
/**
 * Schema type for UserSuspendComplianceSchema
 *
 * @public
 */
interface UserSuspendComplianceSchema {
    userSuspend: UserComplianceSchema;
}
/**
 * Schema type for UserTakedownComplianceSchema
 *
 * @public
 */
interface UserTakedownComplianceSchema {
    /** Event time. */
    eventAt: string;
    user: {
        id: UserId;
    };
    withheldInCountries: Array<CountryCode>;
}
/**
 * Schema type for UserUndeleteComplianceSchema
 *
 * @public
 */
interface UserUndeleteComplianceSchema {
    userUndelete: UserComplianceSchema;
}
/**
 * Schema type for UserUnprotectComplianceSchema
 *
 * @public
 */
interface UserUnprotectComplianceSchema {
    userUnprotect: UserComplianceSchema;
}
/**
 * Schema type for UserUnsuspendComplianceSchema
 *
 * @public
 */
interface UserUnsuspendComplianceSchema {
    userUnsuspend: UserComplianceSchema;
}
/**
 * Withholding details for withheld content.
 *
 * @public
 */
interface UserWithheld {
    /** A list of countries (as ISO 3166-1 alpha-2 codes) where this content is withheld. */
    countryCodes?: Array<string> | null;
    /** The scope of the withholding. Only present, with the value "user", when the entire User is withheld. */
    scope?: "user" | null;
}
/**
 * Schema type for UserWithheldComplianceSchema
 *
 * @public
 */
interface UserWithheldComplianceSchema {
    userWithheld: UserTakedownComplianceSchema;
}
/**
 * Schema type for ValidateAccountActivitySubscriptionResponse
 *
 * @public
 */
interface ValidateAccountActivitySubscriptionResponse {
    data?: ValidateAccountActivitySubscriptionResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for ValidateAccountActivitySubscriptionResponseData
 *
 * @public
 */
interface ValidateAccountActivitySubscriptionResponseData {
    /** Whether the user has an active subscription. */
    subscribed: boolean;
}
/**
 * Schema type for ValidateWebhooksResponse
 *
 * @public
 */
interface ValidateWebhooksResponse {
    data?: ValidateWebhooksResponseData;
    errors?: Array<Problem>;
}
/**
 * Schema type for ValidateWebhooksResponseData
 *
 * @public
 */
interface ValidateWebhooksResponseData {
    /** Indicates whether the CRC validation check was triggered. */
    valid: boolean;
}
/**
 * Schema type for WebhookConfig
 *
 * @public
 */
interface WebhookConfig {
    createdAt?: string;
    id?: string;
    url?: string;
    valid?: boolean;
}
/**
 * Unique identifier of a WebhookConfig
 *
 * @public
 */
type WebhookConfigId = string;

type schemas_ActivityEventId = ActivityEventId;
type schemas_ActivityStreamResponse = ActivityStreamResponse;
type schemas_ActivityStreamingResponsePayload = ActivityStreamingResponsePayload;
type schemas_ActivitySubscriptionFilter = ActivitySubscriptionFilter;
type schemas_AddChatGroupMembersActionSignatures = AddChatGroupMembersActionSignatures;
type schemas_AddChatGroupMembersActionSignaturesMessageEventSignature = AddChatGroupMembersActionSignaturesMessageEventSignature;
type schemas_AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList = AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList;
type schemas_AddChatGroupMembersConversationParticipantKeys = AddChatGroupMembersConversationParticipantKeys;
type schemas_AddChatGroupMembersRequest = AddChatGroupMembersRequest;
type schemas_AddChatGroupMembersResponse = AddChatGroupMembersResponse;
type schemas_AddConversationKeysActionSignatures = AddConversationKeysActionSignatures;
type schemas_AddConversationKeysActionSignaturesMessageEventSignature = AddConversationKeysActionSignaturesMessageEventSignature;
type schemas_AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList = AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList;
type schemas_AddConversationKeysConversationParticipantKeys = AddConversationKeysConversationParticipantKeys;
type schemas_AddConversationKeysResponseData = AddConversationKeysResponseData;
type schemas_AddListsMemberRequest = AddListsMemberRequest;
type schemas_AddListsMemberResponse = AddListsMemberResponse;
type schemas_AddListsMemberResponseData = AddListsMemberResponseData;
type schemas_AddUserPublicKeyPublicKey = AddUserPublicKeyPublicKey;
type schemas_AddUserPublicKeyResponseData = AddUserPublicKeyResponseData;
type schemas_Analytics = Analytics;
type schemas_AnalyticsId = AnalyticsId;
type schemas_AnalyticsTimestampedMetrics = AnalyticsTimestampedMetrics;
type schemas_AppendMediaUploadRequest = AppendMediaUploadRequest;
type schemas_AppendMediaUploadResponse = AppendMediaUploadResponse;
type schemas_AppendMediaUploadResponseData = AppendMediaUploadResponseData;
type schemas_ArticleCreateDraftContentState = ArticleCreateDraftContentState;
type schemas_ArticleCreateDraftContentStateBlocks = ArticleCreateDraftContentStateBlocks;
type schemas_ArticleCreateDraftContentStateBlocksData = ArticleCreateDraftContentStateBlocksData;
type schemas_ArticleCreateDraftContentStateBlocksDataCashtags = ArticleCreateDraftContentStateBlocksDataCashtags;
type schemas_ArticleCreateDraftContentStateBlocksDataHashtags = ArticleCreateDraftContentStateBlocksDataHashtags;
type schemas_ArticleCreateDraftContentStateBlocksDataMentions = ArticleCreateDraftContentStateBlocksDataMentions;
type schemas_ArticleCreateDraftContentStateBlocksDataUrls = ArticleCreateDraftContentStateBlocksDataUrls;
type schemas_ArticleCreateDraftContentStateBlocksEntityRanges = ArticleCreateDraftContentStateBlocksEntityRanges;
type schemas_ArticleCreateDraftContentStateBlocksInlineStyleRanges = ArticleCreateDraftContentStateBlocksInlineStyleRanges;
type schemas_ArticleCreateDraftContentStateEntities = ArticleCreateDraftContentStateEntities;
type schemas_ArticleCreateDraftContentStateEntitiesValue = ArticleCreateDraftContentStateEntitiesValue;
type schemas_ArticleCreateDraftContentStateEntitiesValueData = ArticleCreateDraftContentStateEntitiesValueData;
type schemas_ArticleCreateDraftContentStateEntitiesValueDataMediaItems = ArticleCreateDraftContentStateEntitiesValueDataMediaItems;
type schemas_ArticleCreateDraftCoverMedia = ArticleCreateDraftCoverMedia;
type schemas_ArticleCreateDraftResponseData = ArticleCreateDraftResponseData;
type schemas_ArticlePublishResponseData = ArticlePublishResponseData;
type schemas_BlockUsersDmsResponse = BlockUsersDmsResponse;
type schemas_BlockUsersDmsResponseData = BlockUsersDmsResponseData;
type schemas_ChatConversation = ChatConversation;
type schemas_ChatMediaUploadAppendRequest = ChatMediaUploadAppendRequest;
type schemas_ChatMediaUploadAppendResponse = ChatMediaUploadAppendResponse;
type schemas_ChatMediaUploadAppendResponseData = ChatMediaUploadAppendResponseData;
type schemas_ChatMediaUploadFinalizeRequest = ChatMediaUploadFinalizeRequest;
type schemas_ChatMediaUploadFinalizeResponse = ChatMediaUploadFinalizeResponse;
type schemas_ChatMediaUploadFinalizeResponseData = ChatMediaUploadFinalizeResponseData;
type schemas_ChatMediaUploadInitializeRequest = ChatMediaUploadInitializeRequest;
type schemas_ChatMediaUploadInitializeResponse = ChatMediaUploadInitializeResponse;
type schemas_ChatMediaUploadInitializeResponseData = ChatMediaUploadInitializeResponseData;
type schemas_ChatMessageEvent = ChatMessageEvent;
type schemas_Community = Community;
type schemas_CommunityId = CommunityId;
type schemas_ComplianceJob = ComplianceJob;
type schemas_Connection = Connection;
type schemas_CountryCode = CountryCode;
type schemas_CreateAccountActivitySubscriptionRequest = CreateAccountActivitySubscriptionRequest;
type schemas_CreateAccountActivitySubscriptionResponse = CreateAccountActivitySubscriptionResponse;
type schemas_CreateAccountActivitySubscriptionResponseData = CreateAccountActivitySubscriptionResponseData;
type schemas_CreateActivitySubscriptionFilter = CreateActivitySubscriptionFilter;
type schemas_CreateActivitySubscriptionRequest = CreateActivitySubscriptionRequest;
type schemas_CreateActivitySubscriptionResponse = CreateActivitySubscriptionResponse;
type schemas_CreateActivitySubscriptionResponseData = CreateActivitySubscriptionResponseData;
type schemas_CreateActivitySubscriptionResponseDataSubscription = CreateActivitySubscriptionResponseDataSubscription;
type schemas_CreateActivitySubscriptionResponseDataSubscriptionFilter = CreateActivitySubscriptionResponseDataSubscriptionFilter;
type schemas_CreateChatConversationActionSignatures = CreateChatConversationActionSignatures;
type schemas_CreateChatConversationActionSignaturesMessageEventSignature = CreateChatConversationActionSignaturesMessageEventSignature;
type schemas_CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList = CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList;
type schemas_CreateChatConversationConversationParticipantKeys = CreateChatConversationConversationParticipantKeys;
type schemas_CreateChatConversationRequest = CreateChatConversationRequest;
type schemas_CreateChatConversationResponse = CreateChatConversationResponse;
type schemas_CreateChatConversationResponseData = CreateChatConversationResponseData;
type schemas_CreateCommunityNotesInfo = CreateCommunityNotesInfo;
type schemas_CreateCommunityNotesRequest = CreateCommunityNotesRequest;
type schemas_CreateCommunityNotesResponse = CreateCommunityNotesResponse;
type schemas_CreateCommunityNotesResponseData = CreateCommunityNotesResponseData;
type schemas_CreateComplianceJobsRequest = CreateComplianceJobsRequest;
type schemas_CreateComplianceJobsResponse = CreateComplianceJobsResponse;
type schemas_CreateDirectMessagesByConversationIdAttachments = CreateDirectMessagesByConversationIdAttachments;
type schemas_CreateDirectMessagesByConversationIdRequest = CreateDirectMessagesByConversationIdRequest;
type schemas_CreateDirectMessagesByConversationIdResponse = CreateDirectMessagesByConversationIdResponse;
type schemas_CreateDirectMessagesByConversationIdResponseData = CreateDirectMessagesByConversationIdResponseData;
type schemas_CreateDirectMessagesByParticipantIdAttachments = CreateDirectMessagesByParticipantIdAttachments;
type schemas_CreateDirectMessagesByParticipantIdRequest = CreateDirectMessagesByParticipantIdRequest;
type schemas_CreateDirectMessagesByParticipantIdResponse = CreateDirectMessagesByParticipantIdResponse;
type schemas_CreateDirectMessagesByParticipantIdResponseData = CreateDirectMessagesByParticipantIdResponseData;
type schemas_CreateDirectMessagesConversationMessage = CreateDirectMessagesConversationMessage;
type schemas_CreateDirectMessagesConversationMessageAttachments = CreateDirectMessagesConversationMessageAttachments;
type schemas_CreateDirectMessagesConversationRequest = CreateDirectMessagesConversationRequest;
type schemas_CreateDirectMessagesConversationResponse = CreateDirectMessagesConversationResponse;
type schemas_CreateDirectMessagesConversationResponseData = CreateDirectMessagesConversationResponseData;
type schemas_CreateListsRequest = CreateListsRequest;
type schemas_CreateListsResponse = CreateListsResponse;
type schemas_CreateListsResponseData = CreateListsResponseData;
type schemas_CreateMediaMetadataMetadata = CreateMediaMetadataMetadata;
type schemas_CreateMediaMetadataMetadataAllowDownloadStatus = CreateMediaMetadataMetadataAllowDownloadStatus;
type schemas_CreateMediaMetadataMetadataAltText = CreateMediaMetadataMetadataAltText;
type schemas_CreateMediaMetadataMetadataContentExpiration = CreateMediaMetadataMetadataContentExpiration;
type schemas_CreateMediaMetadataMetadataDomainRestrictions = CreateMediaMetadataMetadataDomainRestrictions;
type schemas_CreateMediaMetadataMetadataFoundMediaOrigin = CreateMediaMetadataMetadataFoundMediaOrigin;
type schemas_CreateMediaMetadataMetadataManagementInfo = CreateMediaMetadataMetadataManagementInfo;
type schemas_CreateMediaMetadataMetadataPreviewImage = CreateMediaMetadataMetadataPreviewImage;
type schemas_CreateMediaMetadataMetadataSharedInfo = CreateMediaMetadataMetadataSharedInfo;
type schemas_CreateMediaMetadataMetadataStickerInfo = CreateMediaMetadataMetadataStickerInfo;
type schemas_CreateMediaMetadataMetadataStickerInfoStickers = CreateMediaMetadataMetadataStickerInfoStickers;
type schemas_CreateMediaMetadataMetadataUploadSource = CreateMediaMetadataMetadataUploadSource;
type schemas_CreateMediaMetadataRequest = CreateMediaMetadataRequest;
type schemas_CreateMediaMetadataResponse = CreateMediaMetadataResponse;
type schemas_CreateMediaMetadataResponseData = CreateMediaMetadataResponseData;
type schemas_CreateMediaSubtitlesRequest = CreateMediaSubtitlesRequest;
type schemas_CreateMediaSubtitlesResponse = CreateMediaSubtitlesResponse;
type schemas_CreateMediaSubtitlesResponseData = CreateMediaSubtitlesResponseData;
type schemas_CreateMediaSubtitlesSubtitles = CreateMediaSubtitlesSubtitles;
type schemas_CreatePostsEditOptions = CreatePostsEditOptions;
type schemas_CreatePostsGeo = CreatePostsGeo;
type schemas_CreatePostsMedia = CreatePostsMedia;
type schemas_CreatePostsMediaCallToActions = CreatePostsMediaCallToActions;
type schemas_CreatePostsMediaCallToActionsAppInstall = CreatePostsMediaCallToActionsAppInstall;
type schemas_CreatePostsMediaCallToActionsVisitSite = CreatePostsMediaCallToActionsVisitSite;
type schemas_CreatePostsMediaCallToActionsWatchNow = CreatePostsMediaCallToActionsWatchNow;
type schemas_CreatePostsPoll = CreatePostsPoll;
type schemas_CreatePostsReply = CreatePostsReply;
type schemas_CreatePostsRequest = CreatePostsRequest;
type schemas_CreatePostsResponse = CreatePostsResponse;
type schemas_CreatePostsResponseData = CreatePostsResponseData;
type schemas_CreateScheduledBroadcastRecurrence = CreateScheduledBroadcastRecurrence;
type schemas_CreateScheduledBroadcastResponseData = CreateScheduledBroadcastResponseData;
type schemas_CreateUsersBookmarkFolderRequest = CreateUsersBookmarkFolderRequest;
type schemas_CreateUsersBookmarkFolderResponse = CreateUsersBookmarkFolderResponse;
type schemas_CreateUsersBookmarkFolderResponseData = CreateUsersBookmarkFolderResponseData;
type schemas_CreateUsersBookmarkRequest = CreateUsersBookmarkRequest;
type schemas_CreateUsersBookmarkResponse = CreateUsersBookmarkResponse;
type schemas_CreateUsersBookmarkResponseData = CreateUsersBookmarkResponseData;
type schemas_CreateWebhookReplayJobResponseData = CreateWebhookReplayJobResponseData;
type schemas_CreateWebhooksRequest = CreateWebhooksRequest;
type schemas_CreateWebhooksResponse = CreateWebhooksResponse;
type schemas_CreateWebhooksResponseData = CreateWebhooksResponseData;
type schemas_CreateWebhooksStreamLinkResponse = CreateWebhooksStreamLinkResponse;
type schemas_CreateWebhooksStreamLinkResponseData = CreateWebhooksStreamLinkResponseData;
type schemas_DeleteAccountActivitySubscriptionResponse = DeleteAccountActivitySubscriptionResponse;
type schemas_DeleteAccountActivitySubscriptionResponseData = DeleteAccountActivitySubscriptionResponseData;
type schemas_DeleteActivitySubscriptionResponse = DeleteActivitySubscriptionResponse;
type schemas_DeleteActivitySubscriptionResponseData = DeleteActivitySubscriptionResponseData;
type schemas_DeleteActivitySubscriptionsByIdsResponse = DeleteActivitySubscriptionsByIdsResponse;
type schemas_DeleteAllConnectionsResponse = DeleteAllConnectionsResponse;
type schemas_DeleteAllConnectionsResponseData = DeleteAllConnectionsResponseData;
type schemas_DeleteAllConnectionsResponseDataResults = DeleteAllConnectionsResponseDataResults;
type schemas_DeleteChatMessagesActionSignatures = DeleteChatMessagesActionSignatures;
type schemas_DeleteChatMessagesActionSignaturesMessageEventSignature = DeleteChatMessagesActionSignaturesMessageEventSignature;
type schemas_DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList = DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList;
type schemas_DeleteChatMessagesRequest = DeleteChatMessagesRequest;
type schemas_DeleteChatMessagesResponse = DeleteChatMessagesResponse;
type schemas_DeleteChatMessagesResponseData = DeleteChatMessagesResponseData;
type schemas_DeleteCommunityNotesResponse = DeleteCommunityNotesResponse;
type schemas_DeleteCommunityNotesResponseData = DeleteCommunityNotesResponseData;
type schemas_DeleteConnectionsByEndpointResponse = DeleteConnectionsByEndpointResponse;
type schemas_DeleteConnectionsByEndpointResponseData = DeleteConnectionsByEndpointResponseData;
type schemas_DeleteConnectionsByEndpointResponseDataResults = DeleteConnectionsByEndpointResponseDataResults;
type schemas_DeleteConnectionsByUuidsRequest = DeleteConnectionsByUuidsRequest;
type schemas_DeleteConnectionsByUuidsResponse = DeleteConnectionsByUuidsResponse;
type schemas_DeleteConnectionsByUuidsResponseData = DeleteConnectionsByUuidsResponseData;
type schemas_DeleteConnectionsByUuidsResponseDataResults = DeleteConnectionsByUuidsResponseDataResults;
type schemas_DeleteDirectMessagesEventsResponse = DeleteDirectMessagesEventsResponse;
type schemas_DeleteDirectMessagesEventsResponseData = DeleteDirectMessagesEventsResponseData;
type schemas_DeleteListsResponse = DeleteListsResponse;
type schemas_DeleteListsResponseData = DeleteListsResponseData;
type schemas_DeleteMediaSubtitlesRequest = DeleteMediaSubtitlesRequest;
type schemas_DeleteMediaSubtitlesResponse = DeleteMediaSubtitlesResponse;
type schemas_DeleteMediaSubtitlesResponseData = DeleteMediaSubtitlesResponseData;
type schemas_DeletePostsResponse = DeletePostsResponse;
type schemas_DeletePostsResponseData = DeletePostsResponseData;
type schemas_DeleteScheduledBroadcastResponseData = DeleteScheduledBroadcastResponseData;
type schemas_DeleteUsersBookmarkResponse = DeleteUsersBookmarkResponse;
type schemas_DeleteUsersBookmarkResponseData = DeleteUsersBookmarkResponseData;
type schemas_DeleteWebhooksResponse = DeleteWebhooksResponse;
type schemas_DeleteWebhooksResponseData = DeleteWebhooksResponseData;
type schemas_DeleteWebhooksStreamLinkResponse = DeleteWebhooksStreamLinkResponse;
type schemas_DeleteWebhooksStreamLinkResponseData = DeleteWebhooksStreamLinkResponseData;
type schemas_DisallowedResourceProblem = DisallowedResourceProblem;
type schemas_DmEvent = DmEvent;
type schemas_DmEventAttachments = DmEventAttachments;
type schemas_DmEventEntities = DmEventEntities;
type schemas_DmEventReferencedPosts = DmEventReferencedPosts;
type schemas_EvaluateCommunityNotesRequest = EvaluateCommunityNotesRequest;
type schemas_EvaluateCommunityNotesResponse = EvaluateCommunityNotesResponse;
type schemas_EvaluateCommunityNotesResponseData = EvaluateCommunityNotesResponseData;
type schemas_Expansions = Expansions;
type schemas_FieldHydrationFailureProblem = FieldHydrationFailureProblem;
type schemas_FieldUnauthorizedProblem = FieldUnauthorizedProblem;
type schemas_FinalizeMediaUploadResponse = FinalizeMediaUploadResponse;
type schemas_FinalizeMediaUploadResponseData = FinalizeMediaUploadResponseData;
type schemas_FinalizeMediaUploadResponseDataImage = FinalizeMediaUploadResponseDataImage;
type schemas_FinalizeMediaUploadResponseDataProcessingInfo = FinalizeMediaUploadResponseDataProcessingInfo;
type schemas_FinalizeMediaUploadResponseDataVideo = FinalizeMediaUploadResponseDataVideo;
type schemas_FollowActivityResponsePayload = FollowActivityResponsePayload;
type schemas_FollowListResponseData = FollowListResponseData;
type schemas_FollowUserResponseData = FollowUserResponseData;
type schemas_GetAccountActivitySubscriptionCountResponse = GetAccountActivitySubscriptionCountResponse;
type schemas_GetAccountActivitySubscriptionCountResponseData = GetAccountActivitySubscriptionCountResponseData;
type schemas_GetAccountActivitySubscriptionsResponse = GetAccountActivitySubscriptionsResponse;
type schemas_GetAccountActivitySubscriptionsResponseData = GetAccountActivitySubscriptionsResponseData;
type schemas_GetAccountActivitySubscriptionsResponseDataSubscriptions = GetAccountActivitySubscriptionsResponseDataSubscriptions;
type schemas_GetActivitySubscriptionsResponse = GetActivitySubscriptionsResponse;
type schemas_GetActivitySubscriptionsResponseData = GetActivitySubscriptionsResponseData;
type schemas_GetActivitySubscriptionsResponseDataFilter = GetActivitySubscriptionsResponseDataFilter;
type schemas_GetChatConversationEventsResponse = GetChatConversationEventsResponse;
type schemas_GetChatConversationResponse = GetChatConversationResponse;
type schemas_GetChatConversationsResponse = GetChatConversationsResponse;
type schemas_GetCommunitiesByIdResponse = GetCommunitiesByIdResponse;
type schemas_GetComplianceJobsByIdResponse = GetComplianceJobsByIdResponse;
type schemas_GetComplianceJobsResponse = GetComplianceJobsResponse;
type schemas_GetDirectMessagesEventsByConversationIdResponse = GetDirectMessagesEventsByConversationIdResponse;
type schemas_GetDirectMessagesEventsByIdResponse = GetDirectMessagesEventsByIdResponse;
type schemas_GetDirectMessagesEventsByParticipantIdResponse = GetDirectMessagesEventsByParticipantIdResponse;
type schemas_GetDirectMessagesEventsResponse = GetDirectMessagesEventsResponse;
type schemas_GetListsByIdResponse = GetListsByIdResponse;
type schemas_GetListsFollowersResponse = GetListsFollowersResponse;
type schemas_GetListsMembersResponse = GetListsMembersResponse;
type schemas_GetListsPostsResponse = GetListsPostsResponse;
type schemas_GetMediaAnalyticsResponse = GetMediaAnalyticsResponse;
type schemas_GetMediaByMediaKeyResponse = GetMediaByMediaKeyResponse;
type schemas_GetMediaByMediaKeysResponse = GetMediaByMediaKeysResponse;
type schemas_GetMediaUploadStatusResponse = GetMediaUploadStatusResponse;
type schemas_GetMediaUploadStatusResponseData = GetMediaUploadStatusResponseData;
type schemas_GetMediaUploadStatusResponseDataImage = GetMediaUploadStatusResponseDataImage;
type schemas_GetMediaUploadStatusResponseDataProcessingInfo = GetMediaUploadStatusResponseDataProcessingInfo;
type schemas_GetMediaUploadStatusResponseDataVideo = GetMediaUploadStatusResponseDataVideo;
type schemas_GetNewsResponse = GetNewsResponse;
type schemas_GetPostsAnalyticsResponse = GetPostsAnalyticsResponse;
type schemas_GetPostsByIdResponse = GetPostsByIdResponse;
type schemas_GetPostsByIdsResponse = GetPostsByIdsResponse;
type schemas_GetPostsCountsAllResponse = GetPostsCountsAllResponse;
type schemas_GetPostsCountsAllResponseData = GetPostsCountsAllResponseData;
type schemas_GetPostsCountsRecentResponse = GetPostsCountsRecentResponse;
type schemas_GetPostsCountsRecentResponseData = GetPostsCountsRecentResponseData;
type schemas_GetPostsLikingUsersResponse = GetPostsLikingUsersResponse;
type schemas_GetPostsQuotedPostsResponse = GetPostsQuotedPostsResponse;
type schemas_GetPostsRepostedByResponse = GetPostsRepostedByResponse;
type schemas_GetPostsRepostsResponse = GetPostsRepostsResponse;
type schemas_GetRuleCountsResponseData = GetRuleCountsResponseData;
type schemas_GetRuleCountsResponseDataAllProjectClientApps = GetRuleCountsResponseDataAllProjectClientApps;
type schemas_GetRuleCountsResponseDataClientAppRulesCount = GetRuleCountsResponseDataClientAppRulesCount;
type schemas_GetRulesResponseData = GetRulesResponseData;
type schemas_GetScheduledBroadcastResponseData = GetScheduledBroadcastResponseData;
type schemas_GetSpacesBuyersResponse = GetSpacesBuyersResponse;
type schemas_GetSpacesByCreatorIdsResponse = GetSpacesByCreatorIdsResponse;
type schemas_GetSpacesByIdResponse = GetSpacesByIdResponse;
type schemas_GetSpacesByIdsResponse = GetSpacesByIdsResponse;
type schemas_GetSpacesPostsResponse = GetSpacesPostsResponse;
type schemas_GetTrendsByWoeidResponse = GetTrendsByWoeidResponse;
type schemas_GetTrendsPersonalizedTrendsResponse = GetTrendsPersonalizedTrendsResponse;
type schemas_GetUsageResponse = GetUsageResponse;
type schemas_GetUsersAffiliatesResponse = GetUsersAffiliatesResponse;
type schemas_GetUsersBlockingResponse = GetUsersBlockingResponse;
type schemas_GetUsersBookmarkFoldersResponse = GetUsersBookmarkFoldersResponse;
type schemas_GetUsersBookmarkFoldersResponseData = GetUsersBookmarkFoldersResponseData;
type schemas_GetUsersBookmarksByFolderIdResponse = GetUsersBookmarksByFolderIdResponse;
type schemas_GetUsersBookmarksResponse = GetUsersBookmarksResponse;
type schemas_GetUsersByIdResponse = GetUsersByIdResponse;
type schemas_GetUsersByIdsResponse = GetUsersByIdsResponse;
type schemas_GetUsersByUsernameResponse = GetUsersByUsernameResponse;
type schemas_GetUsersByUsernamesResponse = GetUsersByUsernamesResponse;
type schemas_GetUsersFollowedListsResponse = GetUsersFollowedListsResponse;
type schemas_GetUsersFollowersResponse = GetUsersFollowersResponse;
type schemas_GetUsersFollowingResponse = GetUsersFollowingResponse;
type schemas_GetUsersLikedPostsResponse = GetUsersLikedPostsResponse;
type schemas_GetUsersListMembershipsResponse = GetUsersListMembershipsResponse;
type schemas_GetUsersMeResponse = GetUsersMeResponse;
type schemas_GetUsersMentionsResponse = GetUsersMentionsResponse;
type schemas_GetUsersMutingResponse = GetUsersMutingResponse;
type schemas_GetUsersOwnedListsResponse = GetUsersOwnedListsResponse;
type schemas_GetUsersPinnedListsResponse = GetUsersPinnedListsResponse;
type schemas_GetUsersPostsResponse = GetUsersPostsResponse;
type schemas_GetUsersPublicKeyResponse = GetUsersPublicKeyResponse;
type schemas_GetUsersPublicKeysResponse = GetUsersPublicKeysResponse;
type schemas_GetUsersRepostsOfMeResponse = GetUsersRepostsOfMeResponse;
type schemas_GetUsersTimelineResponse = GetUsersTimelineResponse;
type schemas_GetWebhooksResponse = GetWebhooksResponse;
type schemas_GetWebhooksStreamLinksResponse = GetWebhooksStreamLinksResponse;
type schemas_GetWebhooksStreamLinksResponseData = GetWebhooksStreamLinksResponseData;
type schemas_GoLiveScheduledBroadcastResponseData = GoLiveScheduledBroadcastResponseData;
type schemas_HidePostsReplyRequest = HidePostsReplyRequest;
type schemas_HidePostsReplyResponse = HidePostsReplyResponse;
type schemas_HidePostsReplyResponseData = HidePostsReplyResponseData;
type schemas_InitializeChatGroupResponse = InitializeChatGroupResponse;
type schemas_InitializeChatGroupResponseData = InitializeChatGroupResponseData;
type schemas_InitializeMediaUploadRequest = InitializeMediaUploadRequest;
type schemas_InitializeMediaUploadResponse = InitializeMediaUploadResponse;
type schemas_InitializeMediaUploadResponseData = InitializeMediaUploadResponseData;
type schemas_InternalErrorProblem = InternalErrorProblem;
type schemas_InvalidRequestProblem = InvalidRequestProblem;
type schemas_Keyword = Keyword;
type schemas_LikeComplianceSchema = LikeComplianceSchema;
type schemas_LikeId = LikeId;
type schemas_LikePostResponseData = LikePostResponseData;
type schemas_LikeWithPostAuthor = LikeWithPostAuthor;
type schemas_List = List;
type schemas_ListFollowerCount = ListFollowerCount;
type schemas_ListId = ListId;
type schemas_ListMemberCount = ListMemberCount;
type schemas_ListScheduledBroadcastsResponse = ListScheduledBroadcastsResponse;
type schemas_ListScheduledBroadcastsResponseData = ListScheduledBroadcastsResponseData;
type schemas_MarkChatConversationReadRequest = MarkChatConversationReadRequest;
type schemas_MarkChatConversationReadResponse = MarkChatConversationReadResponse;
type schemas_MarkChatConversationReadResponseData = MarkChatConversationReadResponseData;
type schemas_Media = Media;
type schemas_MediaAnalytics = MediaAnalytics;
type schemas_MediaAnalyticsTimestampedMetrics = MediaAnalyticsTimestampedMetrics;
type schemas_MediaId = MediaId;
type schemas_MediaNonPublicMetrics = MediaNonPublicMetrics;
type schemas_MediaOrganicMetrics = MediaOrganicMetrics;
type schemas_MediaPromotedMetrics = MediaPromotedMetrics;
type schemas_MediaPublicMetrics = MediaPublicMetrics;
type schemas_MediaUploadRequest = MediaUploadRequest;
type schemas_MediaUploadResponse = MediaUploadResponse;
type schemas_MediaUploadResponseData = MediaUploadResponseData;
type schemas_MediaUploadResponseDataImage = MediaUploadResponseDataImage;
type schemas_MediaUploadResponseDataProcessingInfo = MediaUploadResponseDataProcessingInfo;
type schemas_MediaUploadResponseDataVideo = MediaUploadResponseDataVideo;
type schemas_MediaVariants = MediaVariants;
type schemas_MuteUserResponseData = MuteUserResponseData;
type schemas_News = News;
type schemas_NewsActivityResponsePayload = NewsActivityResponsePayload;
type schemas_NewsClusterPostsResults = NewsClusterPostsResults;
type schemas_NotAuthorizedForFieldProblem = NotAuthorizedForFieldProblem;
type schemas_NotAuthorizedForResourceProblem = NotAuthorizedForResourceProblem;
type schemas_Note = Note;
type schemas_NoteId = NoteId;
type schemas_NoteInfo = NoteInfo;
type schemas_NoteScoringStatus = NoteScoringStatus;
type schemas_NoteTestResult = NoteTestResult;
type schemas_PersonalizedTrend = PersonalizedTrend;
type schemas_PinListResponseData = PinListResponseData;
type schemas_Place = Place;
type schemas_PlaceContainedWithin = PlaceContainedWithin;
type schemas_PlaceGeo = PlaceGeo;
type schemas_Poll = Poll;
type schemas_PollOptions = PollOptions;
type schemas_Post = Post;
type schemas_PostAttachments = PostAttachments;
type schemas_PostComplianceData = PostComplianceData;
type schemas_PostComplianceSchema = PostComplianceSchema;
type schemas_PostContextAnnotations = PostContextAnnotations;
type schemas_PostDeleteActivityResponsePayload = PostDeleteActivityResponsePayload;
type schemas_PostDeleteComplianceSchema = PostDeleteComplianceSchema;
type schemas_PostDisplayTextRange = PostDisplayTextRange;
type schemas_PostDropComplianceSchema = PostDropComplianceSchema;
type schemas_PostEditComplianceObjectSchema = PostEditComplianceObjectSchema;
type schemas_PostEditComplianceSchema = PostEditComplianceSchema;
type schemas_PostEditControls = PostEditControls;
type schemas_PostEntities = PostEntities;
type schemas_PostGeo = PostGeo;
type schemas_PostId = PostId;
type schemas_PostLabelData = PostLabelData;
type schemas_PostMatchedMediaNotes = PostMatchedMediaNotes;
type schemas_PostMediaMetadata = PostMediaMetadata;
type schemas_PostNotePost = PostNotePost;
type schemas_PostNoteRequestSuggestions = PostNoteRequestSuggestions;
type schemas_PostNotice = PostNotice;
type schemas_PostNoticeSchema = PostNoticeSchema;
type schemas_PostPublicMetrics = PostPublicMetrics;
type schemas_PostReferencedPosts = PostReferencedPosts;
type schemas_PostScopes = PostScopes;
type schemas_PostSuggestedSourceLinks = PostSuggestedSourceLinks;
type schemas_PostSuggestedSourceLinksWithCounts = PostSuggestedSourceLinksWithCounts;
type schemas_PostTakedownComplianceSchema = PostTakedownComplianceSchema;
type schemas_PostUndropComplianceSchema = PostUndropComplianceSchema;
type schemas_PostUnviewable = PostUnviewable;
type schemas_PostUnviewableSchema = PostUnviewableSchema;
type schemas_PostWithheld = PostWithheld;
type schemas_PostWithheldComplianceSchema = PostWithheldComplianceSchema;
type schemas_Problem = Problem;
type schemas_ProfileUpdateActivityResponsePayload = ProfileUpdateActivityResponsePayload;
type schemas_PublicKey = PublicKey;
type schemas_PublicKeyId = PublicKeyId;
type schemas_RemoveListsMemberByUserIdResponse = RemoveListsMemberByUserIdResponse;
type schemas_RemoveListsMemberByUserIdResponseData = RemoveListsMemberByUserIdResponseData;
type schemas_RepostPostResponseData = RepostPostResponseData;
type schemas_ResourceNotFoundProblem = ResourceNotFoundProblem;
type schemas_ResourceUnavailableProblem = ResourceUnavailableProblem;
type schemas_RuleId = RuleId;
type schemas_RuleTag = RuleTag;
type schemas_RulesCount = RulesCount;
type schemas_RulesCountAllProjectClientApps = RulesCountAllProjectClientApps;
type schemas_RulesCountClientAppRulesCount = RulesCountClientAppRulesCount;
type schemas_SearchCommunitiesResponse = SearchCommunitiesResponse;
type schemas_SearchCommunityNotesWrittenResponse = SearchCommunityNotesWrittenResponse;
type schemas_SearchNewsResponse = SearchNewsResponse;
type schemas_SearchPostsAllResponse = SearchPostsAllResponse;
type schemas_SearchPostsRecentResponse = SearchPostsRecentResponse;
type schemas_SearchSpacesResponse = SearchSpacesResponse;
type schemas_SearchUsersResponse = SearchUsersResponse;
type schemas_SendBroadcastChatResponseData = SendBroadcastChatResponseData;
type schemas_SendChatMessageRequest = SendChatMessageRequest;
type schemas_SendChatMessageResponse = SendChatMessageResponse;
type schemas_SendChatMessageResponseData = SendChatMessageResponseData;
type schemas_SendChatTypingIndicatorResponse = SendChatTypingIndicatorResponse;
type schemas_SendChatTypingIndicatorResponseData = SendChatTypingIndicatorResponseData;
type schemas_Space = Space;
type schemas_SpaceHostIds = SpaceHostIds;
type schemas_SpaceInvitedUserIds = SpaceInvitedUserIds;
type schemas_SpaceSpeakerIds = SpaceSpeakerIds;
type schemas_SpaceTopicIds = SpaceTopicIds;
type schemas_StreamLabelsComplianceResponse = StreamLabelsComplianceResponse;
type schemas_StreamLikesComplianceResponse = StreamLikesComplianceResponse;
type schemas_StreamLikesFirehoseResponse = StreamLikesFirehoseResponse;
type schemas_StreamLikesSample10Response = StreamLikesSample10Response;
type schemas_StreamPostsComplianceResponse = StreamPostsComplianceResponse;
type schemas_StreamPostsFirehoseEnResponse = StreamPostsFirehoseEnResponse;
type schemas_StreamPostsFirehoseJaResponse = StreamPostsFirehoseJaResponse;
type schemas_StreamPostsFirehoseKoResponse = StreamPostsFirehoseKoResponse;
type schemas_StreamPostsFirehosePtResponse = StreamPostsFirehosePtResponse;
type schemas_StreamPostsFirehoseResponse = StreamPostsFirehoseResponse;
type schemas_StreamPostsResponse = StreamPostsResponse;
type schemas_StreamPostsSample10Response = StreamPostsSample10Response;
type schemas_StreamPostsSampleResponse = StreamPostsSampleResponse;
type schemas_StreamUsersComplianceResponse = StreamUsersComplianceResponse;
type schemas_Topic = Topic;
type schemas_Trend = Trend;
type schemas_UnblockUsersDmsResponse = UnblockUsersDmsResponse;
type schemas_UnblockUsersDmsResponseData = UnblockUsersDmsResponseData;
type schemas_UnfollowListResponseData = UnfollowListResponseData;
type schemas_UnfollowUserResponseData = UnfollowUserResponseData;
type schemas_UnlikeComplianceSchema = UnlikeComplianceSchema;
type schemas_UnlikePostResponseData = UnlikePostResponseData;
type schemas_UnmuteUserResponseData = UnmuteUserResponseData;
type schemas_UnpinListResponseData = UnpinListResponseData;
type schemas_UnrepostPostResponseData = UnrepostPostResponseData;
type schemas_UpdateActivitySubscriptionRequest = UpdateActivitySubscriptionRequest;
type schemas_UpdateActivitySubscriptionResponse = UpdateActivitySubscriptionResponse;
type schemas_UpdateActivitySubscriptionResponseData = UpdateActivitySubscriptionResponseData;
type schemas_UpdateActivitySubscriptionResponseDataSubscription = UpdateActivitySubscriptionResponseDataSubscription;
type schemas_UpdateActivitySubscriptionResponseDataSubscriptionFilter = UpdateActivitySubscriptionResponseDataSubscriptionFilter;
type schemas_UpdateListsRequest = UpdateListsRequest;
type schemas_UpdateListsResponse = UpdateListsResponse;
type schemas_UpdateListsResponseData = UpdateListsResponseData;
type schemas_UpdateRulesAdd = UpdateRulesAdd;
type schemas_UpdateRulesDelete = UpdateRulesDelete;
type schemas_UpdateRulesResponseData = UpdateRulesResponseData;
type schemas_UpdateScheduledBroadcastResponseData = UpdateScheduledBroadcastResponseData;
type schemas_Usage = Usage;
type schemas_UsageDailyClientAppUsage = UsageDailyClientAppUsage;
type schemas_UsageDailyProjectUsage = UsageDailyProjectUsage;
type schemas_User = User;
type schemas_UserAffiliation = UserAffiliation;
type schemas_UserComplianceData = UserComplianceData;
type schemas_UserComplianceSchema = UserComplianceSchema;
type schemas_UserConnectionStatus = UserConnectionStatus;
type schemas_UserDeleteComplianceSchema = UserDeleteComplianceSchema;
type schemas_UserEntities = UserEntities;
type schemas_UserId = UserId;
type schemas_UserProfileModificationComplianceSchema = UserProfileModificationComplianceSchema;
type schemas_UserProfileModificationObjectSchema = UserProfileModificationObjectSchema;
type schemas_UserProtectComplianceSchema = UserProtectComplianceSchema;
type schemas_UserPublicMetrics = UserPublicMetrics;
type schemas_UserScrubGeoObjectSchema = UserScrubGeoObjectSchema;
type schemas_UserScrubGeoSchema = UserScrubGeoSchema;
type schemas_UserSubscription = UserSubscription;
type schemas_UserSuspendComplianceSchema = UserSuspendComplianceSchema;
type schemas_UserTakedownComplianceSchema = UserTakedownComplianceSchema;
type schemas_UserUndeleteComplianceSchema = UserUndeleteComplianceSchema;
type schemas_UserUnprotectComplianceSchema = UserUnprotectComplianceSchema;
type schemas_UserUnsuspendComplianceSchema = UserUnsuspendComplianceSchema;
type schemas_UserWithheld = UserWithheld;
type schemas_UserWithheldComplianceSchema = UserWithheldComplianceSchema;
type schemas_ValidateAccountActivitySubscriptionResponse = ValidateAccountActivitySubscriptionResponse;
type schemas_ValidateAccountActivitySubscriptionResponseData = ValidateAccountActivitySubscriptionResponseData;
type schemas_ValidateWebhooksResponse = ValidateWebhooksResponse;
type schemas_ValidateWebhooksResponseData = ValidateWebhooksResponseData;
type schemas_WebhookConfig = WebhookConfig;
type schemas_WebhookConfigId = WebhookConfigId;
declare namespace schemas {
  export {
    schemas_ActivityEventId as ActivityEventId,
    schemas_ActivityStreamResponse as ActivityStreamResponse,
    schemas_ActivityStreamingResponsePayload as ActivityStreamingResponsePayload,
    schemas_ActivitySubscriptionFilter as ActivitySubscriptionFilter,
    schemas_AddChatGroupMembersActionSignatures as AddChatGroupMembersActionSignatures,
    schemas_AddChatGroupMembersActionSignaturesMessageEventSignature as AddChatGroupMembersActionSignaturesMessageEventSignature,
    schemas_AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList as AddChatGroupMembersActionSignaturesMessageEventSignatureMessageSigningKeyInfoList,
    schemas_AddChatGroupMembersConversationParticipantKeys as AddChatGroupMembersConversationParticipantKeys,
    schemas_AddChatGroupMembersRequest as AddChatGroupMembersRequest,
    schemas_AddChatGroupMembersResponse as AddChatGroupMembersResponse,
    schemas_AddConversationKeysActionSignatures as AddConversationKeysActionSignatures,
    schemas_AddConversationKeysActionSignaturesMessageEventSignature as AddConversationKeysActionSignaturesMessageEventSignature,
    schemas_AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList as AddConversationKeysActionSignaturesMessageEventSignatureMessageSigningKeyInfoList,
    schemas_AddConversationKeysConversationParticipantKeys as AddConversationKeysConversationParticipantKeys,
    AddConversationKeysRequest$1 as AddConversationKeysRequest,
    AddConversationKeysResponse$1 as AddConversationKeysResponse,
    schemas_AddConversationKeysResponseData as AddConversationKeysResponseData,
    schemas_AddListsMemberRequest as AddListsMemberRequest,
    schemas_AddListsMemberResponse as AddListsMemberResponse,
    schemas_AddListsMemberResponseData as AddListsMemberResponseData,
    schemas_AddUserPublicKeyPublicKey as AddUserPublicKeyPublicKey,
    AddUserPublicKeyRequest$1 as AddUserPublicKeyRequest,
    AddUserPublicKeyResponse$1 as AddUserPublicKeyResponse,
    schemas_AddUserPublicKeyResponseData as AddUserPublicKeyResponseData,
    schemas_Analytics as Analytics,
    schemas_AnalyticsId as AnalyticsId,
    schemas_AnalyticsTimestampedMetrics as AnalyticsTimestampedMetrics,
    schemas_AppendMediaUploadRequest as AppendMediaUploadRequest,
    schemas_AppendMediaUploadResponse as AppendMediaUploadResponse,
    schemas_AppendMediaUploadResponseData as AppendMediaUploadResponseData,
    schemas_ArticleCreateDraftContentState as ArticleCreateDraftContentState,
    schemas_ArticleCreateDraftContentStateBlocks as ArticleCreateDraftContentStateBlocks,
    schemas_ArticleCreateDraftContentStateBlocksData as ArticleCreateDraftContentStateBlocksData,
    schemas_ArticleCreateDraftContentStateBlocksDataCashtags as ArticleCreateDraftContentStateBlocksDataCashtags,
    schemas_ArticleCreateDraftContentStateBlocksDataHashtags as ArticleCreateDraftContentStateBlocksDataHashtags,
    schemas_ArticleCreateDraftContentStateBlocksDataMentions as ArticleCreateDraftContentStateBlocksDataMentions,
    schemas_ArticleCreateDraftContentStateBlocksDataUrls as ArticleCreateDraftContentStateBlocksDataUrls,
    schemas_ArticleCreateDraftContentStateBlocksEntityRanges as ArticleCreateDraftContentStateBlocksEntityRanges,
    schemas_ArticleCreateDraftContentStateBlocksInlineStyleRanges as ArticleCreateDraftContentStateBlocksInlineStyleRanges,
    schemas_ArticleCreateDraftContentStateEntities as ArticleCreateDraftContentStateEntities,
    schemas_ArticleCreateDraftContentStateEntitiesValue as ArticleCreateDraftContentStateEntitiesValue,
    schemas_ArticleCreateDraftContentStateEntitiesValueData as ArticleCreateDraftContentStateEntitiesValueData,
    schemas_ArticleCreateDraftContentStateEntitiesValueDataMediaItems as ArticleCreateDraftContentStateEntitiesValueDataMediaItems,
    schemas_ArticleCreateDraftCoverMedia as ArticleCreateDraftCoverMedia,
    ArticleCreateDraftRequest$1 as ArticleCreateDraftRequest,
    ArticleCreateDraftResponse$1 as ArticleCreateDraftResponse,
    schemas_ArticleCreateDraftResponseData as ArticleCreateDraftResponseData,
    ArticlePublishResponse$1 as ArticlePublishResponse,
    schemas_ArticlePublishResponseData as ArticlePublishResponseData,
    schemas_BlockUsersDmsResponse as BlockUsersDmsResponse,
    schemas_BlockUsersDmsResponseData as BlockUsersDmsResponseData,
    schemas_ChatConversation as ChatConversation,
    schemas_ChatMediaUploadAppendRequest as ChatMediaUploadAppendRequest,
    schemas_ChatMediaUploadAppendResponse as ChatMediaUploadAppendResponse,
    schemas_ChatMediaUploadAppendResponseData as ChatMediaUploadAppendResponseData,
    schemas_ChatMediaUploadFinalizeRequest as ChatMediaUploadFinalizeRequest,
    schemas_ChatMediaUploadFinalizeResponse as ChatMediaUploadFinalizeResponse,
    schemas_ChatMediaUploadFinalizeResponseData as ChatMediaUploadFinalizeResponseData,
    schemas_ChatMediaUploadInitializeRequest as ChatMediaUploadInitializeRequest,
    schemas_ChatMediaUploadInitializeResponse as ChatMediaUploadInitializeResponse,
    schemas_ChatMediaUploadInitializeResponseData as ChatMediaUploadInitializeResponseData,
    schemas_ChatMessageEvent as ChatMessageEvent,
    schemas_Community as Community,
    schemas_CommunityId as CommunityId,
    schemas_ComplianceJob as ComplianceJob,
    schemas_Connection as Connection,
    schemas_CountryCode as CountryCode,
    schemas_CreateAccountActivitySubscriptionRequest as CreateAccountActivitySubscriptionRequest,
    schemas_CreateAccountActivitySubscriptionResponse as CreateAccountActivitySubscriptionResponse,
    schemas_CreateAccountActivitySubscriptionResponseData as CreateAccountActivitySubscriptionResponseData,
    schemas_CreateActivitySubscriptionFilter as CreateActivitySubscriptionFilter,
    schemas_CreateActivitySubscriptionRequest as CreateActivitySubscriptionRequest,
    schemas_CreateActivitySubscriptionResponse as CreateActivitySubscriptionResponse,
    schemas_CreateActivitySubscriptionResponseData as CreateActivitySubscriptionResponseData,
    schemas_CreateActivitySubscriptionResponseDataSubscription as CreateActivitySubscriptionResponseDataSubscription,
    schemas_CreateActivitySubscriptionResponseDataSubscriptionFilter as CreateActivitySubscriptionResponseDataSubscriptionFilter,
    schemas_CreateChatConversationActionSignatures as CreateChatConversationActionSignatures,
    schemas_CreateChatConversationActionSignaturesMessageEventSignature as CreateChatConversationActionSignaturesMessageEventSignature,
    schemas_CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList as CreateChatConversationActionSignaturesMessageEventSignatureMessageSigningKeyInfoList,
    schemas_CreateChatConversationConversationParticipantKeys as CreateChatConversationConversationParticipantKeys,
    schemas_CreateChatConversationRequest as CreateChatConversationRequest,
    schemas_CreateChatConversationResponse as CreateChatConversationResponse,
    schemas_CreateChatConversationResponseData as CreateChatConversationResponseData,
    schemas_CreateCommunityNotesInfo as CreateCommunityNotesInfo,
    schemas_CreateCommunityNotesRequest as CreateCommunityNotesRequest,
    schemas_CreateCommunityNotesResponse as CreateCommunityNotesResponse,
    schemas_CreateCommunityNotesResponseData as CreateCommunityNotesResponseData,
    schemas_CreateComplianceJobsRequest as CreateComplianceJobsRequest,
    schemas_CreateComplianceJobsResponse as CreateComplianceJobsResponse,
    schemas_CreateDirectMessagesByConversationIdAttachments as CreateDirectMessagesByConversationIdAttachments,
    schemas_CreateDirectMessagesByConversationIdRequest as CreateDirectMessagesByConversationIdRequest,
    schemas_CreateDirectMessagesByConversationIdResponse as CreateDirectMessagesByConversationIdResponse,
    schemas_CreateDirectMessagesByConversationIdResponseData as CreateDirectMessagesByConversationIdResponseData,
    schemas_CreateDirectMessagesByParticipantIdAttachments as CreateDirectMessagesByParticipantIdAttachments,
    schemas_CreateDirectMessagesByParticipantIdRequest as CreateDirectMessagesByParticipantIdRequest,
    schemas_CreateDirectMessagesByParticipantIdResponse as CreateDirectMessagesByParticipantIdResponse,
    schemas_CreateDirectMessagesByParticipantIdResponseData as CreateDirectMessagesByParticipantIdResponseData,
    schemas_CreateDirectMessagesConversationMessage as CreateDirectMessagesConversationMessage,
    schemas_CreateDirectMessagesConversationMessageAttachments as CreateDirectMessagesConversationMessageAttachments,
    schemas_CreateDirectMessagesConversationRequest as CreateDirectMessagesConversationRequest,
    schemas_CreateDirectMessagesConversationResponse as CreateDirectMessagesConversationResponse,
    schemas_CreateDirectMessagesConversationResponseData as CreateDirectMessagesConversationResponseData,
    schemas_CreateListsRequest as CreateListsRequest,
    schemas_CreateListsResponse as CreateListsResponse,
    schemas_CreateListsResponseData as CreateListsResponseData,
    schemas_CreateMediaMetadataMetadata as CreateMediaMetadataMetadata,
    schemas_CreateMediaMetadataMetadataAllowDownloadStatus as CreateMediaMetadataMetadataAllowDownloadStatus,
    schemas_CreateMediaMetadataMetadataAltText as CreateMediaMetadataMetadataAltText,
    schemas_CreateMediaMetadataMetadataContentExpiration as CreateMediaMetadataMetadataContentExpiration,
    schemas_CreateMediaMetadataMetadataDomainRestrictions as CreateMediaMetadataMetadataDomainRestrictions,
    schemas_CreateMediaMetadataMetadataFoundMediaOrigin as CreateMediaMetadataMetadataFoundMediaOrigin,
    schemas_CreateMediaMetadataMetadataManagementInfo as CreateMediaMetadataMetadataManagementInfo,
    schemas_CreateMediaMetadataMetadataPreviewImage as CreateMediaMetadataMetadataPreviewImage,
    schemas_CreateMediaMetadataMetadataSharedInfo as CreateMediaMetadataMetadataSharedInfo,
    schemas_CreateMediaMetadataMetadataStickerInfo as CreateMediaMetadataMetadataStickerInfo,
    schemas_CreateMediaMetadataMetadataStickerInfoStickers as CreateMediaMetadataMetadataStickerInfoStickers,
    schemas_CreateMediaMetadataMetadataUploadSource as CreateMediaMetadataMetadataUploadSource,
    schemas_CreateMediaMetadataRequest as CreateMediaMetadataRequest,
    schemas_CreateMediaMetadataResponse as CreateMediaMetadataResponse,
    schemas_CreateMediaMetadataResponseData as CreateMediaMetadataResponseData,
    schemas_CreateMediaSubtitlesRequest as CreateMediaSubtitlesRequest,
    schemas_CreateMediaSubtitlesResponse as CreateMediaSubtitlesResponse,
    schemas_CreateMediaSubtitlesResponseData as CreateMediaSubtitlesResponseData,
    schemas_CreateMediaSubtitlesSubtitles as CreateMediaSubtitlesSubtitles,
    schemas_CreatePostsEditOptions as CreatePostsEditOptions,
    schemas_CreatePostsGeo as CreatePostsGeo,
    schemas_CreatePostsMedia as CreatePostsMedia,
    schemas_CreatePostsMediaCallToActions as CreatePostsMediaCallToActions,
    schemas_CreatePostsMediaCallToActionsAppInstall as CreatePostsMediaCallToActionsAppInstall,
    schemas_CreatePostsMediaCallToActionsVisitSite as CreatePostsMediaCallToActionsVisitSite,
    schemas_CreatePostsMediaCallToActionsWatchNow as CreatePostsMediaCallToActionsWatchNow,
    schemas_CreatePostsPoll as CreatePostsPoll,
    schemas_CreatePostsReply as CreatePostsReply,
    schemas_CreatePostsRequest as CreatePostsRequest,
    schemas_CreatePostsResponse as CreatePostsResponse,
    schemas_CreatePostsResponseData as CreatePostsResponseData,
    schemas_CreateScheduledBroadcastRecurrence as CreateScheduledBroadcastRecurrence,
    CreateScheduledBroadcastRequest$1 as CreateScheduledBroadcastRequest,
    CreateScheduledBroadcastResponse$1 as CreateScheduledBroadcastResponse,
    schemas_CreateScheduledBroadcastResponseData as CreateScheduledBroadcastResponseData,
    schemas_CreateUsersBookmarkFolderRequest as CreateUsersBookmarkFolderRequest,
    schemas_CreateUsersBookmarkFolderResponse as CreateUsersBookmarkFolderResponse,
    schemas_CreateUsersBookmarkFolderResponseData as CreateUsersBookmarkFolderResponseData,
    schemas_CreateUsersBookmarkRequest as CreateUsersBookmarkRequest,
    schemas_CreateUsersBookmarkResponse as CreateUsersBookmarkResponse,
    schemas_CreateUsersBookmarkResponseData as CreateUsersBookmarkResponseData,
    CreateWebhookReplayJobRequest$1 as CreateWebhookReplayJobRequest,
    CreateWebhookReplayJobResponse$1 as CreateWebhookReplayJobResponse,
    schemas_CreateWebhookReplayJobResponseData as CreateWebhookReplayJobResponseData,
    schemas_CreateWebhooksRequest as CreateWebhooksRequest,
    schemas_CreateWebhooksResponse as CreateWebhooksResponse,
    schemas_CreateWebhooksResponseData as CreateWebhooksResponseData,
    schemas_CreateWebhooksStreamLinkResponse as CreateWebhooksStreamLinkResponse,
    schemas_CreateWebhooksStreamLinkResponseData as CreateWebhooksStreamLinkResponseData,
    schemas_DeleteAccountActivitySubscriptionResponse as DeleteAccountActivitySubscriptionResponse,
    schemas_DeleteAccountActivitySubscriptionResponseData as DeleteAccountActivitySubscriptionResponseData,
    schemas_DeleteActivitySubscriptionResponse as DeleteActivitySubscriptionResponse,
    schemas_DeleteActivitySubscriptionResponseData as DeleteActivitySubscriptionResponseData,
    schemas_DeleteActivitySubscriptionsByIdsResponse as DeleteActivitySubscriptionsByIdsResponse,
    schemas_DeleteAllConnectionsResponse as DeleteAllConnectionsResponse,
    schemas_DeleteAllConnectionsResponseData as DeleteAllConnectionsResponseData,
    schemas_DeleteAllConnectionsResponseDataResults as DeleteAllConnectionsResponseDataResults,
    schemas_DeleteChatMessagesActionSignatures as DeleteChatMessagesActionSignatures,
    schemas_DeleteChatMessagesActionSignaturesMessageEventSignature as DeleteChatMessagesActionSignaturesMessageEventSignature,
    schemas_DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList as DeleteChatMessagesActionSignaturesMessageEventSignatureMessageSigningKeyInfoList,
    schemas_DeleteChatMessagesRequest as DeleteChatMessagesRequest,
    schemas_DeleteChatMessagesResponse as DeleteChatMessagesResponse,
    schemas_DeleteChatMessagesResponseData as DeleteChatMessagesResponseData,
    schemas_DeleteCommunityNotesResponse as DeleteCommunityNotesResponse,
    schemas_DeleteCommunityNotesResponseData as DeleteCommunityNotesResponseData,
    schemas_DeleteConnectionsByEndpointResponse as DeleteConnectionsByEndpointResponse,
    schemas_DeleteConnectionsByEndpointResponseData as DeleteConnectionsByEndpointResponseData,
    schemas_DeleteConnectionsByEndpointResponseDataResults as DeleteConnectionsByEndpointResponseDataResults,
    schemas_DeleteConnectionsByUuidsRequest as DeleteConnectionsByUuidsRequest,
    schemas_DeleteConnectionsByUuidsResponse as DeleteConnectionsByUuidsResponse,
    schemas_DeleteConnectionsByUuidsResponseData as DeleteConnectionsByUuidsResponseData,
    schemas_DeleteConnectionsByUuidsResponseDataResults as DeleteConnectionsByUuidsResponseDataResults,
    schemas_DeleteDirectMessagesEventsResponse as DeleteDirectMessagesEventsResponse,
    schemas_DeleteDirectMessagesEventsResponseData as DeleteDirectMessagesEventsResponseData,
    schemas_DeleteListsResponse as DeleteListsResponse,
    schemas_DeleteListsResponseData as DeleteListsResponseData,
    schemas_DeleteMediaSubtitlesRequest as DeleteMediaSubtitlesRequest,
    schemas_DeleteMediaSubtitlesResponse as DeleteMediaSubtitlesResponse,
    schemas_DeleteMediaSubtitlesResponseData as DeleteMediaSubtitlesResponseData,
    schemas_DeletePostsResponse as DeletePostsResponse,
    schemas_DeletePostsResponseData as DeletePostsResponseData,
    DeleteScheduledBroadcastResponse$1 as DeleteScheduledBroadcastResponse,
    schemas_DeleteScheduledBroadcastResponseData as DeleteScheduledBroadcastResponseData,
    schemas_DeleteUsersBookmarkResponse as DeleteUsersBookmarkResponse,
    schemas_DeleteUsersBookmarkResponseData as DeleteUsersBookmarkResponseData,
    schemas_DeleteWebhooksResponse as DeleteWebhooksResponse,
    schemas_DeleteWebhooksResponseData as DeleteWebhooksResponseData,
    schemas_DeleteWebhooksStreamLinkResponse as DeleteWebhooksStreamLinkResponse,
    schemas_DeleteWebhooksStreamLinkResponseData as DeleteWebhooksStreamLinkResponseData,
    schemas_DisallowedResourceProblem as DisallowedResourceProblem,
    schemas_DmEvent as DmEvent,
    schemas_DmEventAttachments as DmEventAttachments,
    schemas_DmEventEntities as DmEventEntities,
    schemas_DmEventReferencedPosts as DmEventReferencedPosts,
    Error$1 as Error,
    schemas_EvaluateCommunityNotesRequest as EvaluateCommunityNotesRequest,
    schemas_EvaluateCommunityNotesResponse as EvaluateCommunityNotesResponse,
    schemas_EvaluateCommunityNotesResponseData as EvaluateCommunityNotesResponseData,
    schemas_Expansions as Expansions,
    schemas_FieldHydrationFailureProblem as FieldHydrationFailureProblem,
    schemas_FieldUnauthorizedProblem as FieldUnauthorizedProblem,
    schemas_FinalizeMediaUploadResponse as FinalizeMediaUploadResponse,
    schemas_FinalizeMediaUploadResponseData as FinalizeMediaUploadResponseData,
    schemas_FinalizeMediaUploadResponseDataImage as FinalizeMediaUploadResponseDataImage,
    schemas_FinalizeMediaUploadResponseDataProcessingInfo as FinalizeMediaUploadResponseDataProcessingInfo,
    schemas_FinalizeMediaUploadResponseDataVideo as FinalizeMediaUploadResponseDataVideo,
    schemas_FollowActivityResponsePayload as FollowActivityResponsePayload,
    FollowListRequest$1 as FollowListRequest,
    FollowListResponse$1 as FollowListResponse,
    schemas_FollowListResponseData as FollowListResponseData,
    FollowUserRequest$1 as FollowUserRequest,
    FollowUserResponse$1 as FollowUserResponse,
    schemas_FollowUserResponseData as FollowUserResponseData,
    schemas_GetAccountActivitySubscriptionCountResponse as GetAccountActivitySubscriptionCountResponse,
    schemas_GetAccountActivitySubscriptionCountResponseData as GetAccountActivitySubscriptionCountResponseData,
    schemas_GetAccountActivitySubscriptionsResponse as GetAccountActivitySubscriptionsResponse,
    schemas_GetAccountActivitySubscriptionsResponseData as GetAccountActivitySubscriptionsResponseData,
    schemas_GetAccountActivitySubscriptionsResponseDataSubscriptions as GetAccountActivitySubscriptionsResponseDataSubscriptions,
    schemas_GetActivitySubscriptionsResponse as GetActivitySubscriptionsResponse,
    schemas_GetActivitySubscriptionsResponseData as GetActivitySubscriptionsResponseData,
    schemas_GetActivitySubscriptionsResponseDataFilter as GetActivitySubscriptionsResponseDataFilter,
    schemas_GetChatConversationEventsResponse as GetChatConversationEventsResponse,
    schemas_GetChatConversationResponse as GetChatConversationResponse,
    schemas_GetChatConversationsResponse as GetChatConversationsResponse,
    schemas_GetCommunitiesByIdResponse as GetCommunitiesByIdResponse,
    schemas_GetComplianceJobsByIdResponse as GetComplianceJobsByIdResponse,
    schemas_GetComplianceJobsResponse as GetComplianceJobsResponse,
    GetConnectionHistoryResponse$1 as GetConnectionHistoryResponse,
    schemas_GetDirectMessagesEventsByConversationIdResponse as GetDirectMessagesEventsByConversationIdResponse,
    schemas_GetDirectMessagesEventsByIdResponse as GetDirectMessagesEventsByIdResponse,
    schemas_GetDirectMessagesEventsByParticipantIdResponse as GetDirectMessagesEventsByParticipantIdResponse,
    schemas_GetDirectMessagesEventsResponse as GetDirectMessagesEventsResponse,
    schemas_GetListsByIdResponse as GetListsByIdResponse,
    schemas_GetListsFollowersResponse as GetListsFollowersResponse,
    schemas_GetListsMembersResponse as GetListsMembersResponse,
    schemas_GetListsPostsResponse as GetListsPostsResponse,
    schemas_GetMediaAnalyticsResponse as GetMediaAnalyticsResponse,
    schemas_GetMediaByMediaKeyResponse as GetMediaByMediaKeyResponse,
    schemas_GetMediaByMediaKeysResponse as GetMediaByMediaKeysResponse,
    schemas_GetMediaUploadStatusResponse as GetMediaUploadStatusResponse,
    schemas_GetMediaUploadStatusResponseData as GetMediaUploadStatusResponseData,
    schemas_GetMediaUploadStatusResponseDataImage as GetMediaUploadStatusResponseDataImage,
    schemas_GetMediaUploadStatusResponseDataProcessingInfo as GetMediaUploadStatusResponseDataProcessingInfo,
    schemas_GetMediaUploadStatusResponseDataVideo as GetMediaUploadStatusResponseDataVideo,
    schemas_GetNewsResponse as GetNewsResponse,
    schemas_GetPostsAnalyticsResponse as GetPostsAnalyticsResponse,
    schemas_GetPostsByIdResponse as GetPostsByIdResponse,
    schemas_GetPostsByIdsResponse as GetPostsByIdsResponse,
    schemas_GetPostsCountsAllResponse as GetPostsCountsAllResponse,
    schemas_GetPostsCountsAllResponseData as GetPostsCountsAllResponseData,
    schemas_GetPostsCountsRecentResponse as GetPostsCountsRecentResponse,
    schemas_GetPostsCountsRecentResponseData as GetPostsCountsRecentResponseData,
    schemas_GetPostsLikingUsersResponse as GetPostsLikingUsersResponse,
    schemas_GetPostsQuotedPostsResponse as GetPostsQuotedPostsResponse,
    schemas_GetPostsRepostedByResponse as GetPostsRepostedByResponse,
    schemas_GetPostsRepostsResponse as GetPostsRepostsResponse,
    GetRuleCountsResponse$1 as GetRuleCountsResponse,
    schemas_GetRuleCountsResponseData as GetRuleCountsResponseData,
    schemas_GetRuleCountsResponseDataAllProjectClientApps as GetRuleCountsResponseDataAllProjectClientApps,
    schemas_GetRuleCountsResponseDataClientAppRulesCount as GetRuleCountsResponseDataClientAppRulesCount,
    GetRulesResponse$1 as GetRulesResponse,
    schemas_GetRulesResponseData as GetRulesResponseData,
    GetScheduledBroadcastResponse$1 as GetScheduledBroadcastResponse,
    schemas_GetScheduledBroadcastResponseData as GetScheduledBroadcastResponseData,
    schemas_GetSpacesBuyersResponse as GetSpacesBuyersResponse,
    schemas_GetSpacesByCreatorIdsResponse as GetSpacesByCreatorIdsResponse,
    schemas_GetSpacesByIdResponse as GetSpacesByIdResponse,
    schemas_GetSpacesByIdsResponse as GetSpacesByIdsResponse,
    schemas_GetSpacesPostsResponse as GetSpacesPostsResponse,
    schemas_GetTrendsByWoeidResponse as GetTrendsByWoeidResponse,
    schemas_GetTrendsPersonalizedTrendsResponse as GetTrendsPersonalizedTrendsResponse,
    schemas_GetUsageResponse as GetUsageResponse,
    schemas_GetUsersAffiliatesResponse as GetUsersAffiliatesResponse,
    schemas_GetUsersBlockingResponse as GetUsersBlockingResponse,
    schemas_GetUsersBookmarkFoldersResponse as GetUsersBookmarkFoldersResponse,
    schemas_GetUsersBookmarkFoldersResponseData as GetUsersBookmarkFoldersResponseData,
    schemas_GetUsersBookmarksByFolderIdResponse as GetUsersBookmarksByFolderIdResponse,
    schemas_GetUsersBookmarksResponse as GetUsersBookmarksResponse,
    schemas_GetUsersByIdResponse as GetUsersByIdResponse,
    schemas_GetUsersByIdsResponse as GetUsersByIdsResponse,
    schemas_GetUsersByUsernameResponse as GetUsersByUsernameResponse,
    schemas_GetUsersByUsernamesResponse as GetUsersByUsernamesResponse,
    schemas_GetUsersFollowedListsResponse as GetUsersFollowedListsResponse,
    schemas_GetUsersFollowersResponse as GetUsersFollowersResponse,
    schemas_GetUsersFollowingResponse as GetUsersFollowingResponse,
    schemas_GetUsersLikedPostsResponse as GetUsersLikedPostsResponse,
    schemas_GetUsersListMembershipsResponse as GetUsersListMembershipsResponse,
    schemas_GetUsersMeResponse as GetUsersMeResponse,
    schemas_GetUsersMentionsResponse as GetUsersMentionsResponse,
    schemas_GetUsersMutingResponse as GetUsersMutingResponse,
    schemas_GetUsersOwnedListsResponse as GetUsersOwnedListsResponse,
    schemas_GetUsersPinnedListsResponse as GetUsersPinnedListsResponse,
    schemas_GetUsersPostsResponse as GetUsersPostsResponse,
    schemas_GetUsersPublicKeyResponse as GetUsersPublicKeyResponse,
    schemas_GetUsersPublicKeysResponse as GetUsersPublicKeysResponse,
    schemas_GetUsersRepostsOfMeResponse as GetUsersRepostsOfMeResponse,
    schemas_GetUsersTimelineResponse as GetUsersTimelineResponse,
    schemas_GetWebhooksResponse as GetWebhooksResponse,
    schemas_GetWebhooksStreamLinksResponse as GetWebhooksStreamLinksResponse,
    schemas_GetWebhooksStreamLinksResponseData as GetWebhooksStreamLinksResponseData,
    GoLiveScheduledBroadcastResponse$1 as GoLiveScheduledBroadcastResponse,
    schemas_GoLiveScheduledBroadcastResponseData as GoLiveScheduledBroadcastResponseData,
    schemas_HidePostsReplyRequest as HidePostsReplyRequest,
    schemas_HidePostsReplyResponse as HidePostsReplyResponse,
    schemas_HidePostsReplyResponseData as HidePostsReplyResponseData,
    schemas_InitializeChatGroupResponse as InitializeChatGroupResponse,
    schemas_InitializeChatGroupResponseData as InitializeChatGroupResponseData,
    schemas_InitializeMediaUploadRequest as InitializeMediaUploadRequest,
    schemas_InitializeMediaUploadResponse as InitializeMediaUploadResponse,
    schemas_InitializeMediaUploadResponseData as InitializeMediaUploadResponseData,
    schemas_InternalErrorProblem as InternalErrorProblem,
    schemas_InvalidRequestProblem as InvalidRequestProblem,
    schemas_Keyword as Keyword,
    schemas_LikeComplianceSchema as LikeComplianceSchema,
    schemas_LikeId as LikeId,
    LikePostRequest$1 as LikePostRequest,
    LikePostResponse$1 as LikePostResponse,
    schemas_LikePostResponseData as LikePostResponseData,
    schemas_LikeWithPostAuthor as LikeWithPostAuthor,
    schemas_List as List,
    schemas_ListFollowerCount as ListFollowerCount,
    schemas_ListId as ListId,
    schemas_ListMemberCount as ListMemberCount,
    schemas_ListScheduledBroadcastsResponse as ListScheduledBroadcastsResponse,
    schemas_ListScheduledBroadcastsResponseData as ListScheduledBroadcastsResponseData,
    schemas_MarkChatConversationReadRequest as MarkChatConversationReadRequest,
    schemas_MarkChatConversationReadResponse as MarkChatConversationReadResponse,
    schemas_MarkChatConversationReadResponseData as MarkChatConversationReadResponseData,
    schemas_Media as Media,
    schemas_MediaAnalytics as MediaAnalytics,
    schemas_MediaAnalyticsTimestampedMetrics as MediaAnalyticsTimestampedMetrics,
    schemas_MediaId as MediaId,
    schemas_MediaNonPublicMetrics as MediaNonPublicMetrics,
    schemas_MediaOrganicMetrics as MediaOrganicMetrics,
    schemas_MediaPromotedMetrics as MediaPromotedMetrics,
    schemas_MediaPublicMetrics as MediaPublicMetrics,
    schemas_MediaUploadRequest as MediaUploadRequest,
    schemas_MediaUploadResponse as MediaUploadResponse,
    schemas_MediaUploadResponseData as MediaUploadResponseData,
    schemas_MediaUploadResponseDataImage as MediaUploadResponseDataImage,
    schemas_MediaUploadResponseDataProcessingInfo as MediaUploadResponseDataProcessingInfo,
    schemas_MediaUploadResponseDataVideo as MediaUploadResponseDataVideo,
    schemas_MediaVariants as MediaVariants,
    MuteUserRequest$1 as MuteUserRequest,
    MuteUserResponse$1 as MuteUserResponse,
    schemas_MuteUserResponseData as MuteUserResponseData,
    schemas_News as News,
    schemas_NewsActivityResponsePayload as NewsActivityResponsePayload,
    schemas_NewsClusterPostsResults as NewsClusterPostsResults,
    schemas_NotAuthorizedForFieldProblem as NotAuthorizedForFieldProblem,
    schemas_NotAuthorizedForResourceProblem as NotAuthorizedForResourceProblem,
    schemas_Note as Note,
    schemas_NoteId as NoteId,
    schemas_NoteInfo as NoteInfo,
    schemas_NoteScoringStatus as NoteScoringStatus,
    schemas_NoteTestResult as NoteTestResult,
    schemas_PersonalizedTrend as PersonalizedTrend,
    PinListRequest$1 as PinListRequest,
    PinListResponse$1 as PinListResponse,
    schemas_PinListResponseData as PinListResponseData,
    schemas_Place as Place,
    schemas_PlaceContainedWithin as PlaceContainedWithin,
    schemas_PlaceGeo as PlaceGeo,
    schemas_Poll as Poll,
    schemas_PollOptions as PollOptions,
    schemas_Post as Post,
    schemas_PostAttachments as PostAttachments,
    schemas_PostComplianceData as PostComplianceData,
    schemas_PostComplianceSchema as PostComplianceSchema,
    schemas_PostContextAnnotations as PostContextAnnotations,
    schemas_PostDeleteActivityResponsePayload as PostDeleteActivityResponsePayload,
    schemas_PostDeleteComplianceSchema as PostDeleteComplianceSchema,
    schemas_PostDisplayTextRange as PostDisplayTextRange,
    schemas_PostDropComplianceSchema as PostDropComplianceSchema,
    schemas_PostEditComplianceObjectSchema as PostEditComplianceObjectSchema,
    schemas_PostEditComplianceSchema as PostEditComplianceSchema,
    schemas_PostEditControls as PostEditControls,
    schemas_PostEntities as PostEntities,
    schemas_PostGeo as PostGeo,
    schemas_PostId as PostId,
    schemas_PostLabelData as PostLabelData,
    schemas_PostMatchedMediaNotes as PostMatchedMediaNotes,
    schemas_PostMediaMetadata as PostMediaMetadata,
    schemas_PostNotePost as PostNotePost,
    schemas_PostNoteRequestSuggestions as PostNoteRequestSuggestions,
    schemas_PostNotice as PostNotice,
    schemas_PostNoticeSchema as PostNoticeSchema,
    schemas_PostPublicMetrics as PostPublicMetrics,
    schemas_PostReferencedPosts as PostReferencedPosts,
    schemas_PostScopes as PostScopes,
    schemas_PostSuggestedSourceLinks as PostSuggestedSourceLinks,
    schemas_PostSuggestedSourceLinksWithCounts as PostSuggestedSourceLinksWithCounts,
    schemas_PostTakedownComplianceSchema as PostTakedownComplianceSchema,
    schemas_PostUndropComplianceSchema as PostUndropComplianceSchema,
    schemas_PostUnviewable as PostUnviewable,
    schemas_PostUnviewableSchema as PostUnviewableSchema,
    schemas_PostWithheld as PostWithheld,
    schemas_PostWithheldComplianceSchema as PostWithheldComplianceSchema,
    schemas_Problem as Problem,
    schemas_ProfileUpdateActivityResponsePayload as ProfileUpdateActivityResponsePayload,
    schemas_PublicKey as PublicKey,
    schemas_PublicKeyId as PublicKeyId,
    schemas_RemoveListsMemberByUserIdResponse as RemoveListsMemberByUserIdResponse,
    schemas_RemoveListsMemberByUserIdResponseData as RemoveListsMemberByUserIdResponseData,
    RepostPostRequest$1 as RepostPostRequest,
    RepostPostResponse$1 as RepostPostResponse,
    schemas_RepostPostResponseData as RepostPostResponseData,
    schemas_ResourceNotFoundProblem as ResourceNotFoundProblem,
    schemas_ResourceUnavailableProblem as ResourceUnavailableProblem,
    schemas_RuleId as RuleId,
    schemas_RuleTag as RuleTag,
    schemas_RulesCount as RulesCount,
    schemas_RulesCountAllProjectClientApps as RulesCountAllProjectClientApps,
    schemas_RulesCountClientAppRulesCount as RulesCountClientAppRulesCount,
    schemas_SearchCommunitiesResponse as SearchCommunitiesResponse,
    schemas_SearchCommunityNotesWrittenResponse as SearchCommunityNotesWrittenResponse,
    SearchEligiblePostsResponse$1 as SearchEligiblePostsResponse,
    schemas_SearchNewsResponse as SearchNewsResponse,
    schemas_SearchPostsAllResponse as SearchPostsAllResponse,
    schemas_SearchPostsRecentResponse as SearchPostsRecentResponse,
    schemas_SearchSpacesResponse as SearchSpacesResponse,
    schemas_SearchUsersResponse as SearchUsersResponse,
    SendBroadcastChatRequest$1 as SendBroadcastChatRequest,
    SendBroadcastChatResponse$1 as SendBroadcastChatResponse,
    schemas_SendBroadcastChatResponseData as SendBroadcastChatResponseData,
    schemas_SendChatMessageRequest as SendChatMessageRequest,
    schemas_SendChatMessageResponse as SendChatMessageResponse,
    schemas_SendChatMessageResponseData as SendChatMessageResponseData,
    schemas_SendChatTypingIndicatorResponse as SendChatTypingIndicatorResponse,
    schemas_SendChatTypingIndicatorResponseData as SendChatTypingIndicatorResponseData,
    schemas_Space as Space,
    schemas_SpaceHostIds as SpaceHostIds,
    schemas_SpaceInvitedUserIds as SpaceInvitedUserIds,
    schemas_SpaceSpeakerIds as SpaceSpeakerIds,
    schemas_SpaceTopicIds as SpaceTopicIds,
    schemas_StreamLabelsComplianceResponse as StreamLabelsComplianceResponse,
    schemas_StreamLikesComplianceResponse as StreamLikesComplianceResponse,
    schemas_StreamLikesFirehoseResponse as StreamLikesFirehoseResponse,
    schemas_StreamLikesSample10Response as StreamLikesSample10Response,
    schemas_StreamPostsComplianceResponse as StreamPostsComplianceResponse,
    schemas_StreamPostsFirehoseEnResponse as StreamPostsFirehoseEnResponse,
    schemas_StreamPostsFirehoseJaResponse as StreamPostsFirehoseJaResponse,
    schemas_StreamPostsFirehoseKoResponse as StreamPostsFirehoseKoResponse,
    schemas_StreamPostsFirehosePtResponse as StreamPostsFirehosePtResponse,
    schemas_StreamPostsFirehoseResponse as StreamPostsFirehoseResponse,
    schemas_StreamPostsResponse as StreamPostsResponse,
    schemas_StreamPostsSample10Response as StreamPostsSample10Response,
    schemas_StreamPostsSampleResponse as StreamPostsSampleResponse,
    schemas_StreamUsersComplianceResponse as StreamUsersComplianceResponse,
    schemas_Topic as Topic,
    schemas_Trend as Trend,
    schemas_UnblockUsersDmsResponse as UnblockUsersDmsResponse,
    schemas_UnblockUsersDmsResponseData as UnblockUsersDmsResponseData,
    UnfollowListResponse$1 as UnfollowListResponse,
    schemas_UnfollowListResponseData as UnfollowListResponseData,
    UnfollowUserResponse$1 as UnfollowUserResponse,
    schemas_UnfollowUserResponseData as UnfollowUserResponseData,
    schemas_UnlikeComplianceSchema as UnlikeComplianceSchema,
    UnlikePostResponse$1 as UnlikePostResponse,
    schemas_UnlikePostResponseData as UnlikePostResponseData,
    UnmuteUserResponse$1 as UnmuteUserResponse,
    schemas_UnmuteUserResponseData as UnmuteUserResponseData,
    UnpinListResponse$1 as UnpinListResponse,
    schemas_UnpinListResponseData as UnpinListResponseData,
    UnrepostPostResponse$1 as UnrepostPostResponse,
    schemas_UnrepostPostResponseData as UnrepostPostResponseData,
    schemas_UpdateActivitySubscriptionRequest as UpdateActivitySubscriptionRequest,
    schemas_UpdateActivitySubscriptionResponse as UpdateActivitySubscriptionResponse,
    schemas_UpdateActivitySubscriptionResponseData as UpdateActivitySubscriptionResponseData,
    schemas_UpdateActivitySubscriptionResponseDataSubscription as UpdateActivitySubscriptionResponseDataSubscription,
    schemas_UpdateActivitySubscriptionResponseDataSubscriptionFilter as UpdateActivitySubscriptionResponseDataSubscriptionFilter,
    schemas_UpdateListsRequest as UpdateListsRequest,
    schemas_UpdateListsResponse as UpdateListsResponse,
    schemas_UpdateListsResponseData as UpdateListsResponseData,
    schemas_UpdateRulesAdd as UpdateRulesAdd,
    schemas_UpdateRulesDelete as UpdateRulesDelete,
    UpdateRulesRequest$1 as UpdateRulesRequest,
    UpdateRulesResponse$1 as UpdateRulesResponse,
    schemas_UpdateRulesResponseData as UpdateRulesResponseData,
    UpdateScheduledBroadcastRequest$1 as UpdateScheduledBroadcastRequest,
    UpdateScheduledBroadcastResponse$1 as UpdateScheduledBroadcastResponse,
    schemas_UpdateScheduledBroadcastResponseData as UpdateScheduledBroadcastResponseData,
    schemas_Usage as Usage,
    schemas_UsageDailyClientAppUsage as UsageDailyClientAppUsage,
    schemas_UsageDailyProjectUsage as UsageDailyProjectUsage,
    schemas_User as User,
    schemas_UserAffiliation as UserAffiliation,
    schemas_UserComplianceData as UserComplianceData,
    schemas_UserComplianceSchema as UserComplianceSchema,
    schemas_UserConnectionStatus as UserConnectionStatus,
    schemas_UserDeleteComplianceSchema as UserDeleteComplianceSchema,
    schemas_UserEntities as UserEntities,
    schemas_UserId as UserId,
    schemas_UserProfileModificationComplianceSchema as UserProfileModificationComplianceSchema,
    schemas_UserProfileModificationObjectSchema as UserProfileModificationObjectSchema,
    schemas_UserProtectComplianceSchema as UserProtectComplianceSchema,
    schemas_UserPublicMetrics as UserPublicMetrics,
    schemas_UserScrubGeoObjectSchema as UserScrubGeoObjectSchema,
    schemas_UserScrubGeoSchema as UserScrubGeoSchema,
    schemas_UserSubscription as UserSubscription,
    schemas_UserSuspendComplianceSchema as UserSuspendComplianceSchema,
    schemas_UserTakedownComplianceSchema as UserTakedownComplianceSchema,
    schemas_UserUndeleteComplianceSchema as UserUndeleteComplianceSchema,
    schemas_UserUnprotectComplianceSchema as UserUnprotectComplianceSchema,
    schemas_UserUnsuspendComplianceSchema as UserUnsuspendComplianceSchema,
    schemas_UserWithheld as UserWithheld,
    schemas_UserWithheldComplianceSchema as UserWithheldComplianceSchema,
    schemas_ValidateAccountActivitySubscriptionResponse as ValidateAccountActivitySubscriptionResponse,
    schemas_ValidateAccountActivitySubscriptionResponseData as ValidateAccountActivitySubscriptionResponseData,
    schemas_ValidateWebhooksResponse as ValidateWebhooksResponse,
    schemas_ValidateWebhooksResponseData as ValidateWebhooksResponseData,
    schemas_WebhookConfig as WebhookConfig,
    schemas_WebhookConfigId as WebhookConfigId,
  };
}

/**
 * Models for stream operations
 */

/**
 * Response for postsCompliance
 *
 * @public
 */
type PostsComplianceResponse = StreamPostsComplianceResponse;
/**
 * Response for postsFirehoseKo
 *
 * @public
 */
type PostsFirehoseKoResponse = StreamPostsFirehoseKoResponse;
/**
 * Response for postsFirehose
 *
 * @public
 */
type PostsFirehoseResponse = StreamPostsFirehoseResponse;
/**
 * Response for likesFirehose
 *
 * @public
 */
type LikesFirehoseResponse = StreamLikesFirehoseResponse;
/**
 * Response for getRuleCounts
 *
 * @public
 */
type GetRuleCountsResponse = GetRuleCountsResponse$1;
/**
 * Response for getRules
 *
 * @public
 */
type GetRulesResponse = GetRulesResponse$1;
/**
 * Request for updateRules
 *
 * @public
 */
type UpdateRulesRequest = UpdateRulesRequest$1;
/**
 * Response for updateRules
 *
 * @public
 */
type UpdateRulesResponse = UpdateRulesResponse$1;
/**
 * Response for postsFirehoseJa
 *
 * @public
 */
type PostsFirehoseJaResponse = StreamPostsFirehoseJaResponse;
/**
 * Response for likesCompliance
 *
 * @public
 */
type LikesComplianceResponse = StreamLikesComplianceResponse;
/**
 * Response for likesSample10
 *
 * @public
 */
type LikesSample10Response = StreamLikesSample10Response;
/**
 * Response for posts
 *
 * @public
 */
type PostsResponse = StreamPostsResponse;
/**
 * Response for postsFirehoseEn
 *
 * @public
 */
type PostsFirehoseEnResponse = StreamPostsFirehoseEnResponse;
/**
 * Response for labelsCompliance
 *
 * @public
 */
type LabelsComplianceResponse = StreamLabelsComplianceResponse;
/**
 * Response for postsSample10
 *
 * @public
 */
type PostsSample10Response = StreamPostsSample10Response;
/**
 * Response for activity
 *
 * @public
 */
type ActivityResponse = ActivityStreamResponse;
/**
 * Response for usersCompliance
 *
 * @public
 */
type UsersComplianceResponse = StreamUsersComplianceResponse;
/**
 * Response for postsFirehosePt
 *
 * @public
 */
type PostsFirehosePtResponse = StreamPostsFirehosePtResponse;
/**
 * Response for postsSample
 *
 * @public
 */
type PostsSampleResponse = StreamPostsSampleResponse;

type models$k_ActivityResponse = ActivityResponse;
type models$k_GetRuleCountsResponse = GetRuleCountsResponse;
type models$k_GetRulesResponse = GetRulesResponse;
type models$k_LabelsComplianceResponse = LabelsComplianceResponse;
type models$k_LikesComplianceResponse = LikesComplianceResponse;
type models$k_LikesFirehoseResponse = LikesFirehoseResponse;
type models$k_LikesSample10Response = LikesSample10Response;
type models$k_PostsComplianceResponse = PostsComplianceResponse;
type models$k_PostsFirehoseEnResponse = PostsFirehoseEnResponse;
type models$k_PostsFirehoseJaResponse = PostsFirehoseJaResponse;
type models$k_PostsFirehoseKoResponse = PostsFirehoseKoResponse;
type models$k_PostsFirehosePtResponse = PostsFirehosePtResponse;
type models$k_PostsFirehoseResponse = PostsFirehoseResponse;
type models$k_PostsResponse = PostsResponse;
type models$k_PostsSample10Response = PostsSample10Response;
type models$k_PostsSampleResponse = PostsSampleResponse;
type models$k_UpdateRulesRequest = UpdateRulesRequest;
type models$k_UpdateRulesResponse = UpdateRulesResponse;
type models$k_UsersComplianceResponse = UsersComplianceResponse;
declare namespace models$k {
  export {
    models$k_ActivityResponse as ActivityResponse,
    models$k_GetRuleCountsResponse as GetRuleCountsResponse,
    models$k_GetRulesResponse as GetRulesResponse,
    models$k_LabelsComplianceResponse as LabelsComplianceResponse,
    models$k_LikesComplianceResponse as LikesComplianceResponse,
    models$k_LikesFirehoseResponse as LikesFirehoseResponse,
    models$k_LikesSample10Response as LikesSample10Response,
    models$k_PostsComplianceResponse as PostsComplianceResponse,
    models$k_PostsFirehoseEnResponse as PostsFirehoseEnResponse,
    models$k_PostsFirehoseJaResponse as PostsFirehoseJaResponse,
    models$k_PostsFirehoseKoResponse as PostsFirehoseKoResponse,
    models$k_PostsFirehosePtResponse as PostsFirehosePtResponse,
    models$k_PostsFirehoseResponse as PostsFirehoseResponse,
    models$k_PostsResponse as PostsResponse,
    models$k_PostsSample10Response as PostsSample10Response,
    models$k_PostsSampleResponse as PostsSampleResponse,
    models$k_UpdateRulesRequest as UpdateRulesRequest,
    models$k_UpdateRulesResponse as UpdateRulesResponse,
    models$k_UsersComplianceResponse as UsersComplianceResponse,
  };
}

/**
 * Stream client for the X API.
 *
 * This module provides a client for interacting with the streaming endpoints of the X API.
 */

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
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Post Compliance events will be provided.
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
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_tweet_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "entities.note.mentions.username" | "referenced_tweets.id" | "referenced_tweets.id.attachments.media_keys" | "referenced_tweets.id.author_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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
 * Options for postsFirehose method
 *
 * @public
 */
interface PostsFirehoseStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_tweet_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "entities.note.mentions.username" | "referenced_tweets.id" | "referenced_tweets.id.attachments.media_keys" | "referenced_tweets.id.author_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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
    likeWithTweetAuthorFields?: Array<"attachments_media_keys" | "created_at" | "id" | "liked_tweet_author_id" | "liked_tweet_id" | "timestamp_ms">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"attachments.media_keys" | "liked_tweet_author_id" | "liked_tweet_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    /** rules_count.fields
     * Also accepts: rules_count.fields or proper camelCase (e.g., rulesCountFields) */
    rulesCountFields?: string;
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
    /** ids
     * Also accepts: ids or proper camelCase (e.g., ids) */
    ids?: Array<string>;
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
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
    /** dry_run
     * Also accepts: dry_run or proper camelCase (e.g., dryRun) */
    dryRun?: boolean;
    /** delete_all
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
 * Options for postsFirehoseJa method
 *
 * @public
 */
interface PostsFirehoseJaStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_tweet_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "entities.note.mentions.username" | "referenced_tweets.id" | "referenced_tweets.id.attachments.media_keys" | "referenced_tweets.id.author_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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
    likeWithTweetAuthorFields?: Array<"attachments_media_keys" | "created_at" | "id" | "liked_tweet_author_id" | "liked_tweet_id" | "timestamp_ms">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"attachments.media_keys" | "liked_tweet_author_id" | "liked_tweet_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_tweet_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "entities.note.mentions.username" | "referenced_tweets.id" | "referenced_tweets.id.attachments.media_keys" | "referenced_tweets.id.author_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_tweet_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "entities.note.mentions.username" | "referenced_tweets.id" | "referenced_tweets.id.attachments.media_keys" | "referenced_tweets.id.author_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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
 * Options for postsSample10 method
 *
 * @public
 */
interface PostsSample10StreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_tweet_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "entities.note.mentions.username" | "referenced_tweets.id" | "referenced_tweets.id.attachments.media_keys" | "referenced_tweets.id.author_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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
 * Options for activity method
 *
 * @public
 */
interface ActivityStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the activities will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the activities will be provided.
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
 * Options for postsFirehosePt method
 *
 * @public
 */
interface PostsFirehosePtStreamingOptions {
    /** The number of minutes of backfill requested.
     * Also accepts: backfill_minutes or proper camelCase (e.g., backfillMinutes) */
    backfillMinutes?: number;
    /** A comma separated list of Tweet fields to display.
     * Also accepts: tweet.fields or proper camelCase (e.g., tweetFields) */
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_tweet_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "entities.note.mentions.username" | "referenced_tweets.id" | "referenced_tweets.id.attachments.media_keys" | "referenced_tweets.id.author_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
    /** YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
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
    tweetFields?: Array<"article" | "attachments" | "author_id" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "edit_history_tweet_ids" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_request_suggestions" | "note_tweet" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "referenced_tweets" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_tweet_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "entities.note.mentions.username" | "referenced_tweets.id" | "referenced_tweets.id.attachments.media_keys" | "referenced_tweets.id.author_id">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"affiliation" | "confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "most_recent_tweet_id" | "name" | "parody" | "pinned_tweet_id" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
     * Activity Stream
     * Stream of X Activities
     *
     * Returns an event-driven stream that's easy to use.
     * Use .on() to listen for events like 'data', 'error', 'close'.
     * Also supports async iteration with for await...of.



     * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
     */
    activity(options?: ActivityStreamingOptions): Promise<EventDrivenStream>;
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
     * Get Rule Counts
     *
     * @returns Promise with the API response
     */
    getRuleCounts(options?: GetRuleCountsStreamingOptions): Promise<GetRuleCountsResponse>;
    /**
     * Get filtered-stream rules
     * Returns the active filtered-stream rules for the authenticated app. Provide `ids` to fetch specific rules; omit it to list all rules.
     *
     * @returns Promise with the API response
     */
    getRules(options?: GetRulesStreamingOptions): Promise<GetRulesResponse>;
    /**
     * Update stream rules
     * Adds or deletes rules from the active rule set for the filtered stream. Exactly one of `add`, `delete`, or `?delete_all=true` must be specified. Use `?dry_run=true` to validate without committing.
     *
     * @returns Promise with the API response
     */
    updateRules(body: any, options?: UpdateRulesStreamingOptions): Promise<UpdateRulesResponse>;
}

/**
 * Models for usage operations
 */

/**
 * Response for get
 *
 * @public
 */
type GetResponse$2 = GetUsageResponse;

declare namespace models$j {
  export {
    GetResponse$2 as GetResponse,
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
interface GetOptions$2 {
    /** days
     * Also accepts: days or proper camelCase (e.g., days) */
    days?: number;
    /** A comma separated list of Usage fields to display.
     * Also accepts: usage.fields or proper camelCase (e.g., usageFields) */
    usageFields?: Array<"cap_reset_day" | "daily_client_app_usage" | "daily_project_usage" | "project_cap" | "project_id" | "project_usage">;
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
     * Get Usage
  
  
  
     * @returns {Promise<GetResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    get(options: GetOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    get(options?: GetOptions$2): Promise<GetResponse$2>;
}

/**
 * Models for community notes operations
 */

/**
 * Response for delete
 *
 * @public
 */
type DeleteResponse$3 = DeleteCommunityNotesResponse;
/**
 * Response for searchWritten
 *
 * @public
 */
type SearchWrittenResponse = SearchCommunityNotesWrittenResponse;
/**
 * Response for searchEligiblePosts
 *
 * @public
 */
type SearchEligiblePostsResponse = SearchEligiblePostsResponse$1;
/**
 * Request for create
 *
 * @public
 */
type CreateRequest$3 = CreateCommunityNotesRequest;
/**
 * Response for create
 *
 * @public
 */
type CreateResponse$3 = CreateCommunityNotesResponse;
/**
 * Request for evaluate
 *
 * @public
 */
type EvaluateRequest = EvaluateCommunityNotesRequest;
/**
 * Response for evaluate
 *
 * @public
 */
type EvaluateResponse = EvaluateCommunityNotesResponse;

type models$i_EvaluateRequest = EvaluateRequest;
type models$i_EvaluateResponse = EvaluateResponse;
type models$i_SearchEligiblePostsResponse = SearchEligiblePostsResponse;
type models$i_SearchWrittenResponse = SearchWrittenResponse;
declare namespace models$i {
  export {
    CreateRequest$3 as CreateRequest,
    CreateResponse$3 as CreateResponse,
    DeleteResponse$3 as DeleteResponse,
    models$i_EvaluateRequest as EvaluateRequest,
    models$i_EvaluateResponse as EvaluateResponse,
    models$i_SearchEligiblePostsResponse as SearchEligiblePostsResponse,
    models$i_SearchWrittenResponse as SearchWrittenResponse,
  };
}

/**
 * community notes client for the X API.
 *
 * This module provides a client for interacting with the community notes endpoints of the X API.
 */

/**
 * Options for searchWritten method
 *
 * @public
 */
interface SearchWrittenOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Note fields to display.
     * Also accepts: note.fields or proper camelCase (e.g., noteFields) */
    noteFields?: Array<"id" | "info" | "scoring_status" | "status" | "test_result">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for searchEligiblePosts method
 *
 * @public
 */
interface SearchEligiblePostsOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** post_selection
     * Also accepts: post_selection or proper camelCase (e.g., postSelection) */
    postSelection?: string;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
     * Delete a Community Note
     * Deletes a community note.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<DeleteResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    delete(id: NoteId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    delete(id: NoteId): Promise<DeleteResponse$3>;
    /**
     * Search Community Notes Written
  
  
  
     * @param testMode test_mode
  
  
  
     * @returns {Promise<SearchWrittenResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    searchWritten(testMode: boolean, options: SearchWrittenOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    searchWritten(testMode: boolean, options?: SearchWrittenOptions): Promise<SearchWrittenResponse>;
    /**
     * Search Eligible Posts
  
  
  
     * @param testMode test_mode
  
  
  
     * @returns {Promise<SearchEligiblePostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    searchEligiblePosts(testMode: boolean, options: SearchEligiblePostsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    searchEligiblePosts(testMode: boolean, options?: SearchEligiblePostsOptions): Promise<SearchEligiblePostsResponse>;
    /**
     * Create Community Notes
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    create(body: CreateRequest$3, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    create(body: CreateRequest$3): Promise<CreateResponse$3>;
    /**
     * Evaluate Community Notes
  
  
  
     * @param body Request body
  
     * @returns {Promise<EvaluateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    evaluate(body: EvaluateRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    evaluate(body: EvaluateRequest): Promise<EvaluateResponse>;
}

/**
 * Models for spaces operations
 */

/**
 * Response for getByIds
 *
 * @public
 */
type GetByIdsResponse$2 = GetSpacesByIdsResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse$4 = GetSpacesByIdResponse;
/**
 * Response for getByCreatorIds
 *
 * @public
 */
type GetByCreatorIdsResponse = GetSpacesByCreatorIdsResponse;
/**
 * Response for getPosts
 *
 * @public
 */
type GetPostsResponse$2 = GetSpacesPostsResponse;
/**
 * Response for search
 *
 * @public
 */
type SearchResponse$3 = SearchSpacesResponse;
/**
 * Response for getBuyers
 *
 * @public
 */
type GetBuyersResponse = GetSpacesBuyersResponse;

type models$h_GetBuyersResponse = GetBuyersResponse;
type models$h_GetByCreatorIdsResponse = GetByCreatorIdsResponse;
declare namespace models$h {
  export {
    models$h_GetBuyersResponse as GetBuyersResponse,
    models$h_GetByCreatorIdsResponse as GetByCreatorIdsResponse,
    GetByIdResponse$4 as GetByIdResponse,
    GetByIdsResponse$2 as GetByIdsResponse,
    GetPostsResponse$2 as GetPostsResponse,
    SearchResponse$3 as SearchResponse,
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
interface GetByIdsOptions$2 {
    /** A comma separated list of Space fields to display.
     * Also accepts: space.fields or proper camelCase (e.g., spaceFields) */
    spaceFields?: Array<"created_at" | "ended_at" | "id" | "is_ticketed" | "lang" | "participant_count" | "scheduled_start" | "started_at" | "state" | "subscriber_count" | "title" | "updated_at">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"creator_id" | "host_ids" | "invited_user_ids" | "speaker_ids" | "topic_ids">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Topic fields to display.
     * Also accepts: topic.fields or proper camelCase (e.g., topicFields) */
    topicFields?: Array<"description" | "id" | "name">;
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
    /** A comma separated list of Space fields to display.
     * Also accepts: space.fields or proper camelCase (e.g., spaceFields) */
    spaceFields?: Array<"created_at" | "ended_at" | "id" | "is_ticketed" | "lang" | "participant_count" | "scheduled_start" | "started_at" | "state" | "subscriber_count" | "title" | "updated_at">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"creator_id" | "host_ids" | "invited_user_ids" | "speaker_ids" | "topic_ids">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Topic fields to display.
     * Also accepts: topic.fields or proper camelCase (e.g., topicFields) */
    topicFields?: Array<"description" | "id" | "name">;
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
    spaceFields?: Array<"created_at" | "ended_at" | "id" | "is_ticketed" | "lang" | "participant_count" | "scheduled_start" | "started_at" | "state" | "subscriber_count" | "title" | "updated_at">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"creator_id" | "host_ids" | "invited_user_ids" | "speaker_ids" | "topic_ids">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Topic fields to display.
     * Also accepts: topic.fields or proper camelCase (e.g., topicFields) */
    topicFields?: Array<"description" | "id" | "name">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** state
     * Also accepts: state or proper camelCase (e.g., state) */
    state?: "live" | "scheduled" | "all";
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A comma separated list of Space fields to display.
     * Also accepts: space.fields or proper camelCase (e.g., spaceFields) */
    spaceFields?: Array<"created_at" | "ended_at" | "id" | "is_ticketed" | "lang" | "participant_count" | "scheduled_start" | "started_at" | "state" | "subscriber_count" | "title" | "updated_at">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"creator_id" | "host_ids" | "invited_user_ids" | "speaker_ids" | "topic_ids">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Topic fields to display.
     * Also accepts: topic.fields or proper camelCase (e.g., topicFields) */
    topicFields?: Array<"description" | "id" | "name">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
  
  
  
     * @param ids ids
  
  
  
     * @returns {Promise<GetByIdsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByIds(ids: Array<string>, options: GetByIdsOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByIds(ids: Array<string>, options?: GetByIdsOptions$2): Promise<GetByIdsResponse$2>;
    /**
     * Get Spaces by ID
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: string, options: GetByIdOptions$4 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: string, options?: GetByIdOptions$4): Promise<GetByIdResponse$4>;
    /**
     * Get Spaces by Creator IDs
  
  
  
     * @param userIds user_ids
  
  
  
     * @returns {Promise<GetByCreatorIdsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByCreatorIds(userIds: Array<string>, options: GetByCreatorIdsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByCreatorIds(userIds: Array<string>, options?: GetByCreatorIdsOptions): Promise<GetByCreatorIdsResponse>;
    /**
     * Get Space Posts
     * Retrieves a list of Posts shared in a specific Space by its ID.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetPostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPosts(id: string, options: GetPostsOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPosts(id: string, options?: GetPostsOptions$2): Promise<GetPostsResponse$2>;
    /**
     * Search Spaces
     * Retrieves a list of Spaces matching the specified search query.
  
  
  
     * @param query query
  
  
  
     * @returns {Promise<SearchResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    search(query: string, options: SearchOptions$3 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    search(query: string, options?: SearchOptions$3): Promise<SearchResponse$3>;
    /**
     * Get Space ticket buyers
     * Retrieves a list of Users who purchased tickets to a specific Space by its ID.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetBuyersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBuyers(id: string, options: GetBuyersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBuyers(id: string, options?: GetBuyersOptions): Promise<GetBuyersResponse>;
}

/**
 * Models for broadcasts operations
 */

/**
 * Response for getScheduledBroadcast
 *
 * @public
 */
type GetScheduledBroadcastResponse = GetScheduledBroadcastResponse$1;
/**
 * Request for updateScheduledBroadcast
 *
 * @public
 */
type UpdateScheduledBroadcastRequest = UpdateScheduledBroadcastRequest$1;
/**
 * Response for updateScheduledBroadcast
 *
 * @public
 */
type UpdateScheduledBroadcastResponse = UpdateScheduledBroadcastResponse$1;
/**
 * Response for deleteScheduledBroadcast
 *
 * @public
 */
type DeleteScheduledBroadcastResponse = DeleteScheduledBroadcastResponse$1;
/**
 * Request for sendBroadcastChat
 *
 * @public
 */
type SendBroadcastChatRequest = SendBroadcastChatRequest$1;
/**
 * Response for sendBroadcastChat
 *
 * @public
 */
type SendBroadcastChatResponse = SendBroadcastChatResponse$1;
/**
 * Response for listScheduled
 *
 * @public
 */
type ListScheduledResponse = ListScheduledBroadcastsResponse;
/**
 * Request for createScheduledBroadcast
 *
 * @public
 */
type CreateScheduledBroadcastRequest = CreateScheduledBroadcastRequest$1;
/**
 * Response for createScheduledBroadcast
 *
 * @public
 */
type CreateScheduledBroadcastResponse = CreateScheduledBroadcastResponse$1;
/**
 * Response for goLiveScheduledBroadcast
 *
 * @public
 */
type GoLiveScheduledBroadcastResponse = GoLiveScheduledBroadcastResponse$1;

type models$g_CreateScheduledBroadcastRequest = CreateScheduledBroadcastRequest;
type models$g_CreateScheduledBroadcastResponse = CreateScheduledBroadcastResponse;
type models$g_DeleteScheduledBroadcastResponse = DeleteScheduledBroadcastResponse;
type models$g_GetScheduledBroadcastResponse = GetScheduledBroadcastResponse;
type models$g_GoLiveScheduledBroadcastResponse = GoLiveScheduledBroadcastResponse;
type models$g_ListScheduledResponse = ListScheduledResponse;
type models$g_SendBroadcastChatRequest = SendBroadcastChatRequest;
type models$g_SendBroadcastChatResponse = SendBroadcastChatResponse;
type models$g_UpdateScheduledBroadcastRequest = UpdateScheduledBroadcastRequest;
type models$g_UpdateScheduledBroadcastResponse = UpdateScheduledBroadcastResponse;
declare namespace models$g {
  export {
    models$g_CreateScheduledBroadcastRequest as CreateScheduledBroadcastRequest,
    models$g_CreateScheduledBroadcastResponse as CreateScheduledBroadcastResponse,
    models$g_DeleteScheduledBroadcastResponse as DeleteScheduledBroadcastResponse,
    models$g_GetScheduledBroadcastResponse as GetScheduledBroadcastResponse,
    models$g_GoLiveScheduledBroadcastResponse as GoLiveScheduledBroadcastResponse,
    models$g_ListScheduledResponse as ListScheduledResponse,
    models$g_SendBroadcastChatRequest as SendBroadcastChatRequest,
    models$g_SendBroadcastChatResponse as SendBroadcastChatResponse,
    models$g_UpdateScheduledBroadcastRequest as UpdateScheduledBroadcastRequest,
    models$g_UpdateScheduledBroadcastResponse as UpdateScheduledBroadcastResponse,
  };
}

/**
 * broadcasts client for the X API.
 *
 * This module provides a client for interacting with the broadcasts endpoints of the X API.
 */

/**
 * Options for deleteScheduledBroadcast method
 *
 * @public
 */
interface DeleteScheduledBroadcastOptions {
    /** roll_forward
     * Also accepts: roll_forward or proper camelCase (e.g., rollForward) */
    rollForward?: boolean;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for listScheduled method
 *
 * @public
 */
interface ListScheduledOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** oldest_start_time
     * Also accepts: oldest_start_time or proper camelCase (e.g., oldestStartTime) */
    oldestStartTime?: string;
    /** newest_start_time
     * Also accepts: newest_start_time or proper camelCase (e.g., newestStartTime) */
    newestStartTime?: string;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for broadcasts operations
 *
 * This client provides methods for interacting with the broadcasts endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all broadcasts related operations.
 *
 * @category broadcasts
 */
declare class BroadcastsClient {
    private client;
    /**
     * Creates a new broadcasts client instance
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
     * Get a scheduled broadcast
     * Returns a single scheduled broadcast by its alphanumeric UBS broadcast id.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetScheduledBroadcastResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getScheduledBroadcast(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getScheduledBroadcast(id: string): Promise<GetScheduledBroadcastResponse>;
    /**
     * Update a scheduled broadcast
     * Fully replaces schedule fields for a broadcast. Path `:id` is the UBS broadcast id; the body must include `scheduled_broadcast_id` and re-send any fields that should be kept.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<UpdateScheduledBroadcastResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    updateScheduledBroadcast(id: string, body: UpdateScheduledBroadcastRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    updateScheduledBroadcast(id: string, body: UpdateScheduledBroadcastRequest): Promise<UpdateScheduledBroadcastResponse>;
    /**
     * Delete a scheduled broadcast
     * Deletes a scheduled broadcast by its alphanumeric UBS broadcast id.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<DeleteScheduledBroadcastResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteScheduledBroadcast(id: string, options: DeleteScheduledBroadcastOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteScheduledBroadcast(id: string, options?: DeleteScheduledBroadcastOptions): Promise<DeleteScheduledBroadcastResponse>;
    /**
     * Send a chat message to a live broadcast
     * Posts a chat message to a running broadcast, attributed to the authenticated user.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<SendBroadcastChatResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    sendBroadcastChat(id: string, body: SendBroadcastChatRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    sendBroadcastChat(id: string, body: SendBroadcastChatRequest): Promise<SendBroadcastChatResponse>;
    /**
     * List scheduled broadcasts
     * Returns scheduled broadcasts owned by the authenticated user.
  
  
  
     * @returns {Promise<ListScheduledResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    listScheduled(options: ListScheduledOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    listScheduled(options?: ListScheduledOptions): Promise<ListScheduledResponse>;
    /**
     * Create a scheduled broadcast
     * Schedules a one-off or recurring broadcast for the authenticated user. A `source_id` (ingest) is required at create time.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateScheduledBroadcastResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createScheduledBroadcast(body: CreateScheduledBroadcastRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createScheduledBroadcast(body: CreateScheduledBroadcastRequest): Promise<CreateScheduledBroadcastResponse>;
    /**
     * Go live on a scheduled broadcast
     * Publishes a schedule that was created or updated with `manual_publish: true`. Without that flag the coordinator auto-publishes at start and this call is rejected.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GoLiveScheduledBroadcastResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    goLiveScheduledBroadcast(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    goLiveScheduledBroadcast(id: string): Promise<GoLiveScheduledBroadcastResponse>;
}

/**
 * Models for media operations
 */

/**
 * Response for getByKey
 *
 * @public
 */
type GetByKeyResponse = GetMediaByMediaKeyResponse;
/**
 * Response for finalizeUpload
 *
 * @public
 */
type FinalizeUploadResponse = FinalizeMediaUploadResponse;
/**
 * Request for appendUpload
 *
 * @public
 */
type AppendUploadRequest = AppendMediaUploadRequest;
/**
 * Response for appendUpload
 *
 * @public
 */
type AppendUploadResponse = AppendMediaUploadResponse;
/**
 * Request for initializeUpload
 *
 * @public
 */
type InitializeUploadRequest = InitializeMediaUploadRequest;
/**
 * Response for initializeUpload
 *
 * @public
 */
type InitializeUploadResponse = InitializeMediaUploadResponse;
/**
 * Response for getByKeys
 *
 * @public
 */
type GetByKeysResponse = GetMediaByMediaKeysResponse;
/**
 * Response for getUploadStatus
 *
 * @public
 */
type GetUploadStatusResponse = GetMediaUploadStatusResponse;
/**
 * Request for upload
 *
 * @public
 */
type UploadRequest = MediaUploadRequest;
/**
 * Response for upload
 *
 * @public
 */
type UploadResponse = MediaUploadResponse;
/**
 * Request for createSubtitles
 *
 * @public
 */
type CreateSubtitlesRequest = CreateMediaSubtitlesRequest;
/**
 * Response for createSubtitles
 *
 * @public
 */
type CreateSubtitlesResponse = CreateMediaSubtitlesResponse;
/**
 * Request for deleteSubtitles
 *
 * @public
 */
type DeleteSubtitlesRequest = DeleteMediaSubtitlesRequest;
/**
 * Response for deleteSubtitles
 *
 * @public
 */
type DeleteSubtitlesResponse = DeleteMediaSubtitlesResponse;
/**
 * Response for getAnalytics
 *
 * @public
 */
type GetAnalyticsResponse$1 = GetMediaAnalyticsResponse;
/**
 * Request for createMetadata
 *
 * @public
 */
type CreateMetadataRequest = CreateMediaMetadataRequest;
/**
 * Response for createMetadata
 *
 * @public
 */
type CreateMetadataResponse = CreateMediaMetadataResponse;

type models$f_AppendUploadRequest = AppendUploadRequest;
type models$f_AppendUploadResponse = AppendUploadResponse;
type models$f_CreateMetadataRequest = CreateMetadataRequest;
type models$f_CreateMetadataResponse = CreateMetadataResponse;
type models$f_CreateSubtitlesRequest = CreateSubtitlesRequest;
type models$f_CreateSubtitlesResponse = CreateSubtitlesResponse;
type models$f_DeleteSubtitlesRequest = DeleteSubtitlesRequest;
type models$f_DeleteSubtitlesResponse = DeleteSubtitlesResponse;
type models$f_FinalizeUploadResponse = FinalizeUploadResponse;
type models$f_GetByKeyResponse = GetByKeyResponse;
type models$f_GetByKeysResponse = GetByKeysResponse;
type models$f_GetUploadStatusResponse = GetUploadStatusResponse;
type models$f_InitializeUploadRequest = InitializeUploadRequest;
type models$f_InitializeUploadResponse = InitializeUploadResponse;
type models$f_UploadRequest = UploadRequest;
type models$f_UploadResponse = UploadResponse;
declare namespace models$f {
  export {
    models$f_AppendUploadRequest as AppendUploadRequest,
    models$f_AppendUploadResponse as AppendUploadResponse,
    models$f_CreateMetadataRequest as CreateMetadataRequest,
    models$f_CreateMetadataResponse as CreateMetadataResponse,
    models$f_CreateSubtitlesRequest as CreateSubtitlesRequest,
    models$f_CreateSubtitlesResponse as CreateSubtitlesResponse,
    models$f_DeleteSubtitlesRequest as DeleteSubtitlesRequest,
    models$f_DeleteSubtitlesResponse as DeleteSubtitlesResponse,
    models$f_FinalizeUploadResponse as FinalizeUploadResponse,
    GetAnalyticsResponse$1 as GetAnalyticsResponse,
    models$f_GetByKeyResponse as GetByKeyResponse,
    models$f_GetByKeysResponse as GetByKeysResponse,
    models$f_GetUploadStatusResponse as GetUploadStatusResponse,
    models$f_InitializeUploadRequest as InitializeUploadRequest,
    models$f_InitializeUploadResponse as InitializeUploadResponse,
    models$f_UploadRequest as UploadRequest,
    models$f_UploadResponse as UploadResponse,
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
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
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
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
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
    /** command
     * Also accepts: command or proper camelCase (e.g., command) */
    command?: "STATUS";
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
    /** granularity
     * Also accepts: granularity or proper camelCase (e.g., granularity) */
    granularity?: "hourly" | "daily" | "total";
    /** A comma separated list of MediaAnalytics fields to display.
     * Also accepts: media_analytics.fields or proper camelCase (e.g., mediaAnalyticsFields) */
    mediaAnalyticsFields?: Array<"cta_url_clicks" | "cta_watch_clicks" | "media_key" | "play_from_tap" | "playback25" | "playback50" | "playback75" | "playback_complete" | "playback_start" | "timestamp" | "timestamped_metrics" | "video_views" | "watch_time_ms">;
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
  
  
     * @param mediaKey media_key
  
  
  
  
     * @returns {Promise<GetByKeyResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByKey(mediaKey: string, options: GetByKeyOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByKey(mediaKey: string, options?: GetByKeyOptions): Promise<GetByKeyResponse>;
    /**
     * Finalize Media upload
     * Finalizes a Media upload request.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<FinalizeUploadResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    finalizeUpload(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    finalizeUpload(id: string): Promise<FinalizeUploadResponse>;
    /**
     * Append Media Upload
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<AppendUploadResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    appendUpload(id: string, body: AppendUploadRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    appendUpload(id: string, body: AppendUploadRequest): Promise<AppendUploadResponse>;
    /**
     * Initialize media upload
     * Initializes a media upload.
  
  
  
     * @param body Request body
  
     * @returns {Promise<InitializeUploadResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    initializeUpload(body: InitializeUploadRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    initializeUpload(body: InitializeUploadRequest): Promise<InitializeUploadResponse>;
    /**
     * Get Media by media keys
  
  
  
     * @param mediaKeys media_keys
  
  
  
     * @returns {Promise<GetByKeysResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByKeys(mediaKeys: Array<string>, options: GetByKeysOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByKeys(mediaKeys: Array<string>, options?: GetByKeysOptions): Promise<GetByKeysResponse>;
    /**
     * Get Media upload status
     * Retrieves the status of a Media upload by its ID.
  
  
  
     * @param mediaId media_id
  
  
  
     * @returns {Promise<GetUploadStatusResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getUploadStatus(mediaId: MediaId, options: GetUploadStatusOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getUploadStatus(mediaId: MediaId, options?: GetUploadStatusOptions): Promise<GetUploadStatusResponse>;
    /**
     * Upload media
     * Uploads a media file for use in posts or other content.
  
  
  
     * @param body Request body
  
     * @returns {Promise<UploadResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    upload(body: UploadRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    upload(body: UploadRequest): Promise<UploadResponse>;
    /**
     * Create Media subtitles
     * Creates subtitles for a specific Media file.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateSubtitlesResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createSubtitles(body: CreateSubtitlesRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createSubtitles(body: CreateSubtitlesRequest): Promise<CreateSubtitlesResponse>;
    /**
     * Delete Media subtitles
     * Deletes subtitles for a specific Media file.
  
  
  
     * @param body Request body
  
     * @returns {Promise<DeleteSubtitlesResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteSubtitles(body: DeleteSubtitlesRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteSubtitles(body: DeleteSubtitlesRequest): Promise<DeleteSubtitlesResponse>;
    /**
     * Get Media analytics
  
  
  
     * @param mediaKeys media_keys
  
  
  
     * @param startTime start_time
  
  
  
     * @param endTime end_time
  
  
  
     * @returns {Promise<GetAnalyticsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getAnalytics(mediaKeys: Array<string>, startTime: string, endTime: string, options: GetAnalyticsOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getAnalytics(mediaKeys: Array<string>, startTime: string, endTime: string, options?: GetAnalyticsOptions$1): Promise<GetAnalyticsResponse$1>;
    /**
     * Create Media metadata
     * Creates metadata for a Media file.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateMetadataResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createMetadata(body: CreateMetadataRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createMetadata(body: CreateMetadataRequest): Promise<CreateMetadataResponse>;
}

/**
 * Models for users operations
 */

/**
 * Response for getRepostsOfMe
 *
 * @public
 */
type GetRepostsOfMeResponse = GetUsersRepostsOfMeResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse$3 = GetUsersByIdResponse;
/**
 * Response for unpinList
 *
 * @public
 */
type UnpinListResponse = UnpinListResponse$1;
/**
 * Response for unmuteUser
 *
 * @public
 */
type UnmuteUserResponse = UnmuteUserResponse$1;
/**
 * Response for getAffiliates
 *
 * @public
 */
type GetAffiliatesResponse = GetUsersAffiliatesResponse;
/**
 * Response for getLikedPosts
 *
 * @public
 */
type GetLikedPostsResponse = GetUsersLikedPostsResponse;
/**
 * Response for unfollowList
 *
 * @public
 */
type UnfollowListResponse = UnfollowListResponse$1;
/**
 * Response for getMentions
 *
 * @public
 */
type GetMentionsResponse = GetUsersMentionsResponse;
/**
 * Response for deleteBookmark
 *
 * @public
 */
type DeleteBookmarkResponse = DeleteUsersBookmarkResponse;
/**
 * Request for repostPost
 *
 * @public
 */
type RepostPostRequest = RepostPostRequest$1;
/**
 * Response for repostPost
 *
 * @public
 */
type RepostPostResponse = RepostPostResponse$1;
/**
 * Response for getByUsernames
 *
 * @public
 */
type GetByUsernamesResponse = GetUsersByUsernamesResponse;
/**
 * Response for getBookmarksByFolderId
 *
 * @public
 */
type GetBookmarksByFolderIdResponse = GetUsersBookmarksByFolderIdResponse;
/**
 * Response for blockDms
 *
 * @public
 */
type BlockDmsResponse = BlockUsersDmsResponse;
/**
 * Response for getBookmarks
 *
 * @public
 */
type GetBookmarksResponse = GetUsersBookmarksResponse;
/**
 * Request for createBookmark
 *
 * @public
 */
type CreateBookmarkRequest = CreateUsersBookmarkRequest;
/**
 * Response for createBookmark
 *
 * @public
 */
type CreateBookmarkResponse = CreateUsersBookmarkResponse;
/**
 * Response for unfollowUser
 *
 * @public
 */
type UnfollowUserResponse = UnfollowUserResponse$1;
/**
 * Response for unblockDms
 *
 * @public
 */
type UnblockDmsResponse = UnblockUsersDmsResponse;
/**
 * Response for unrepostPost
 *
 * @public
 */
type UnrepostPostResponse = UnrepostPostResponse$1;
/**
 * Request for likePost
 *
 * @public
 */
type LikePostRequest = LikePostRequest$1;
/**
 * Response for likePost
 *
 * @public
 */
type LikePostResponse = LikePostResponse$1;
/**
 * Response for getBlocking
 *
 * @public
 */
type GetBlockingResponse = GetUsersBlockingResponse;
/**
 * Response for search
 *
 * @public
 */
type SearchResponse$2 = SearchUsersResponse;
/**
 * Response for getFollowedLists
 *
 * @public
 */
type GetFollowedListsResponse = GetUsersFollowedListsResponse;
/**
 * Request for followList
 *
 * @public
 */
type FollowListRequest = FollowListRequest$1;
/**
 * Response for followList
 *
 * @public
 */
type FollowListResponse = FollowListResponse$1;
/**
 * Response for unlikePost
 *
 * @public
 */
type UnlikePostResponse = UnlikePostResponse$1;
/**
 * Response for getTimeline
 *
 * @public
 */
type GetTimelineResponse = GetUsersTimelineResponse;
/**
 * Response for getFollowers
 *
 * @public
 */
type GetFollowersResponse$1 = GetUsersFollowersResponse;
/**
 * Response for getFollowing
 *
 * @public
 */
type GetFollowingResponse = GetUsersFollowingResponse;
/**
 * Request for followUser
 *
 * @public
 */
type FollowUserRequest = FollowUserRequest$1;
/**
 * Response for followUser
 *
 * @public
 */
type FollowUserResponse = FollowUserResponse$1;
/**
 * Response for getListMemberships
 *
 * @public
 */
type GetListMembershipsResponse = GetUsersListMembershipsResponse;
/**
 * Response for getBookmarkFolders
 *
 * @public
 */
type GetBookmarkFoldersResponse = GetUsersBookmarkFoldersResponse;
/**
 * Request for createBookmarkFolder
 *
 * @public
 */
type CreateBookmarkFolderRequest = CreateUsersBookmarkFolderRequest;
/**
 * Response for createBookmarkFolder
 *
 * @public
 */
type CreateBookmarkFolderResponse = CreateUsersBookmarkFolderResponse;
/**
 * Response for getPublicKey
 *
 * @public
 */
type GetPublicKeyResponse = GetUsersPublicKeyResponse;
/**
 * Response for getByIds
 *
 * @public
 */
type GetByIdsResponse$1 = GetUsersByIdsResponse;
/**
 * Response for getPublicKeys
 *
 * @public
 */
type GetPublicKeysResponse = GetUsersPublicKeysResponse;
/**
 * Response for getPinnedLists
 *
 * @public
 */
type GetPinnedListsResponse = GetUsersPinnedListsResponse;
/**
 * Request for pinList
 *
 * @public
 */
type PinListRequest = PinListRequest$1;
/**
 * Response for pinList
 *
 * @public
 */
type PinListResponse = PinListResponse$1;
/**
 * Response for getOwnedLists
 *
 * @public
 */
type GetOwnedListsResponse = GetUsersOwnedListsResponse;
/**
 * Response for getPosts
 *
 * @public
 */
type GetPostsResponse$1 = GetUsersPostsResponse;
/**
 * Response for getMuting
 *
 * @public
 */
type GetMutingResponse = GetUsersMutingResponse;
/**
 * Request for muteUser
 *
 * @public
 */
type MuteUserRequest = MuteUserRequest$1;
/**
 * Response for muteUser
 *
 * @public
 */
type MuteUserResponse = MuteUserResponse$1;
/**
 * Response for getMe
 *
 * @public
 */
type GetMeResponse = GetUsersMeResponse;
/**
 * Response for getByUsername
 *
 * @public
 */
type GetByUsernameResponse = GetUsersByUsernameResponse;

type models$e_BlockDmsResponse = BlockDmsResponse;
type models$e_CreateBookmarkFolderRequest = CreateBookmarkFolderRequest;
type models$e_CreateBookmarkFolderResponse = CreateBookmarkFolderResponse;
type models$e_CreateBookmarkRequest = CreateBookmarkRequest;
type models$e_CreateBookmarkResponse = CreateBookmarkResponse;
type models$e_DeleteBookmarkResponse = DeleteBookmarkResponse;
type models$e_FollowListRequest = FollowListRequest;
type models$e_FollowListResponse = FollowListResponse;
type models$e_FollowUserRequest = FollowUserRequest;
type models$e_FollowUserResponse = FollowUserResponse;
type models$e_GetAffiliatesResponse = GetAffiliatesResponse;
type models$e_GetBlockingResponse = GetBlockingResponse;
type models$e_GetBookmarkFoldersResponse = GetBookmarkFoldersResponse;
type models$e_GetBookmarksByFolderIdResponse = GetBookmarksByFolderIdResponse;
type models$e_GetBookmarksResponse = GetBookmarksResponse;
type models$e_GetByUsernameResponse = GetByUsernameResponse;
type models$e_GetByUsernamesResponse = GetByUsernamesResponse;
type models$e_GetFollowedListsResponse = GetFollowedListsResponse;
type models$e_GetFollowingResponse = GetFollowingResponse;
type models$e_GetLikedPostsResponse = GetLikedPostsResponse;
type models$e_GetListMembershipsResponse = GetListMembershipsResponse;
type models$e_GetMeResponse = GetMeResponse;
type models$e_GetMentionsResponse = GetMentionsResponse;
type models$e_GetMutingResponse = GetMutingResponse;
type models$e_GetOwnedListsResponse = GetOwnedListsResponse;
type models$e_GetPinnedListsResponse = GetPinnedListsResponse;
type models$e_GetPublicKeyResponse = GetPublicKeyResponse;
type models$e_GetPublicKeysResponse = GetPublicKeysResponse;
type models$e_GetRepostsOfMeResponse = GetRepostsOfMeResponse;
type models$e_GetTimelineResponse = GetTimelineResponse;
type models$e_LikePostRequest = LikePostRequest;
type models$e_LikePostResponse = LikePostResponse;
type models$e_MuteUserRequest = MuteUserRequest;
type models$e_MuteUserResponse = MuteUserResponse;
type models$e_PinListRequest = PinListRequest;
type models$e_PinListResponse = PinListResponse;
type models$e_RepostPostRequest = RepostPostRequest;
type models$e_RepostPostResponse = RepostPostResponse;
type models$e_UnblockDmsResponse = UnblockDmsResponse;
type models$e_UnfollowListResponse = UnfollowListResponse;
type models$e_UnfollowUserResponse = UnfollowUserResponse;
type models$e_UnlikePostResponse = UnlikePostResponse;
type models$e_UnmuteUserResponse = UnmuteUserResponse;
type models$e_UnpinListResponse = UnpinListResponse;
type models$e_UnrepostPostResponse = UnrepostPostResponse;
declare namespace models$e {
  export {
    models$e_BlockDmsResponse as BlockDmsResponse,
    models$e_CreateBookmarkFolderRequest as CreateBookmarkFolderRequest,
    models$e_CreateBookmarkFolderResponse as CreateBookmarkFolderResponse,
    models$e_CreateBookmarkRequest as CreateBookmarkRequest,
    models$e_CreateBookmarkResponse as CreateBookmarkResponse,
    models$e_DeleteBookmarkResponse as DeleteBookmarkResponse,
    models$e_FollowListRequest as FollowListRequest,
    models$e_FollowListResponse as FollowListResponse,
    models$e_FollowUserRequest as FollowUserRequest,
    models$e_FollowUserResponse as FollowUserResponse,
    models$e_GetAffiliatesResponse as GetAffiliatesResponse,
    models$e_GetBlockingResponse as GetBlockingResponse,
    models$e_GetBookmarkFoldersResponse as GetBookmarkFoldersResponse,
    models$e_GetBookmarksByFolderIdResponse as GetBookmarksByFolderIdResponse,
    models$e_GetBookmarksResponse as GetBookmarksResponse,
    GetByIdResponse$3 as GetByIdResponse,
    GetByIdsResponse$1 as GetByIdsResponse,
    models$e_GetByUsernameResponse as GetByUsernameResponse,
    models$e_GetByUsernamesResponse as GetByUsernamesResponse,
    models$e_GetFollowedListsResponse as GetFollowedListsResponse,
    GetFollowersResponse$1 as GetFollowersResponse,
    models$e_GetFollowingResponse as GetFollowingResponse,
    models$e_GetLikedPostsResponse as GetLikedPostsResponse,
    models$e_GetListMembershipsResponse as GetListMembershipsResponse,
    models$e_GetMeResponse as GetMeResponse,
    models$e_GetMentionsResponse as GetMentionsResponse,
    models$e_GetMutingResponse as GetMutingResponse,
    models$e_GetOwnedListsResponse as GetOwnedListsResponse,
    models$e_GetPinnedListsResponse as GetPinnedListsResponse,
    GetPostsResponse$1 as GetPostsResponse,
    models$e_GetPublicKeyResponse as GetPublicKeyResponse,
    models$e_GetPublicKeysResponse as GetPublicKeysResponse,
    models$e_GetRepostsOfMeResponse as GetRepostsOfMeResponse,
    models$e_GetTimelineResponse as GetTimelineResponse,
    models$e_LikePostRequest as LikePostRequest,
    models$e_LikePostResponse as LikePostResponse,
    models$e_MuteUserRequest as MuteUserRequest,
    models$e_MuteUserResponse as MuteUserResponse,
    models$e_PinListRequest as PinListRequest,
    models$e_PinListResponse as PinListResponse,
    models$e_RepostPostRequest as RepostPostRequest,
    models$e_RepostPostResponse as RepostPostResponse,
    SearchResponse$2 as SearchResponse,
    models$e_UnblockDmsResponse as UnblockDmsResponse,
    models$e_UnfollowListResponse as UnfollowListResponse,
    models$e_UnfollowUserResponse as UnfollowUserResponse,
    models$e_UnlikePostResponse as UnlikePostResponse,
    models$e_UnmuteUserResponse as UnmuteUserResponse,
    models$e_UnpinListResponse as UnpinListResponse,
    models$e_UnrepostPostResponse as UnrepostPostResponse,
  };
}

/**
 * users client for the X API.
 *
 * This module provides a client for interacting with the users endpoints of the X API.
 */

/**
 * Options for getRepostsOfMe method
 *
 * @public
 */
interface GetRepostsOfMeOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getAffiliates method
 *
 * @public
 */
interface GetAffiliatesOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A 64-bit signed integer.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Must be on or after 2010-11-06.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** Must be on or after 2010-11-06.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** since_id
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** until_id
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getByUsernames method
 *
 * @public
 */
interface GetByUsernamesOptions {
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getBookmarksByFolderId method
 *
 * @public
 */
interface GetBookmarksByFolderIdOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** next_token
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A 64-bit signed integer.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of List fields to display.
     * Also accepts: list.fields or proper camelCase (e.g., listFields) */
    listFields?: Array<"created_at" | "description" | "follower_count" | "id" | "member_count" | "name" | "private">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"owner_id">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Must be on or after 2010-11-06.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** Must be on or after 2010-11-06.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** since_id
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** until_id
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** exclude
     * Also accepts: exclude or proper camelCase (e.g., exclude) */
    exclude?: Array<"replies" | "retweets">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of List fields to display.
     * Also accepts: list.fields or proper camelCase (e.g., listFields) */
    listFields?: Array<"created_at" | "description" | "follower_count" | "id" | "member_count" | "name" | "private">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"owner_id">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getPublicKey method
 *
 * @public
 */
interface GetPublicKeyOptions {
    /** A comma separated list of PublicKey fields to display.
     * Also accepts: public_key.fields or proper camelCase (e.g., publicKeyFields) */
    publicKeyFields?: Array<"identity_public_key_signature" | "juicebox_config" | "public_key" | "public_key_version" | "signing_public_key">;
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
interface GetByIdsOptions$1 {
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getPublicKeys method
 *
 * @public
 */
interface GetPublicKeysOptions {
    /** A comma separated list of PublicKey fields to display.
     * Also accepts: public_key.fields or proper camelCase (e.g., publicKeyFields) */
    publicKeyFields?: Array<"identity_public_key_signature" | "juicebox_config" | "public_key" | "public_key_version" | "signing_public_key">;
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
    listFields?: Array<"created_at" | "description" | "follower_count" | "id" | "member_count" | "name" | "private">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"owner_id">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A 64-bit signed integer.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of List fields to display.
     * Also accepts: list.fields or proper camelCase (e.g., listFields) */
    listFields?: Array<"created_at" | "description" | "follower_count" | "id" | "member_count" | "name" | "private">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"owner_id">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Must be on or after 2010-11-06.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** Must be on or after 2010-11-06.
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** since_id
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** until_id
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** exclude
     * Also accepts: exclude or proper camelCase (e.g., exclude) */
    exclude?: Array<"replies" | "retweets">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
     * Get Users Reposts of Me
  
  
  
     * @returns {Promise<GetRepostsOfMeResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getRepostsOfMe(options: GetRepostsOfMeOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getRepostsOfMe(options?: GetRepostsOfMeOptions): Promise<GetRepostsOfMeResponse>;
    /**
     * Get Users by ID
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: UserId, options: GetByIdOptions$3 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: UserId, options?: GetByIdOptions$3): Promise<GetByIdResponse$3>;
    /**
     * Unpin a List
     * Causes the authenticated user to unpin a List by its ID.
  
  
     * @param id id
  
  
  
     * @param listId list_id
  
  
  
  
     * @returns {Promise<UnpinListResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unpinList(id: UserId, listId: ListId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unpinList(id: UserId, listId: ListId): Promise<UnpinListResponse>;
    /**
     * Unmute User
     * Causes the authenticated user to unmute the target user.
  
  
     * @param sourceUserId source_user_id
  
  
  
     * @param targetUserId target_user_id
  
  
  
  
     * @returns {Promise<UnmuteUserResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unmuteUser(sourceUserId: UserId, targetUserId: UserId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unmuteUser(sourceUserId: UserId, targetUserId: UserId): Promise<UnmuteUserResponse>;
    /**
     * Get Users Affiliates
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetAffiliatesResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getAffiliates(id: UserId, options: GetAffiliatesOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getAffiliates(id: UserId, options?: GetAffiliatesOptions): Promise<GetAffiliatesResponse>;
    /**
     * Get Users Liked Posts
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetLikedPostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getLikedPosts(id: UserId, options: GetLikedPostsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getLikedPosts(id: UserId, options?: GetLikedPostsOptions): Promise<GetLikedPostsResponse>;
    /**
     * Unfollow a List
     * Causes the authenticated user to unfollow a List by its ID.
  
  
     * @param id id
  
  
  
     * @param listId list_id
  
  
  
  
     * @returns {Promise<UnfollowListResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unfollowList(id: UserId, listId: ListId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unfollowList(id: UserId, listId: ListId): Promise<UnfollowListResponse>;
    /**
     * Get Users Mentions
     * When both are provided, `start_time` must be earlier than `end_time`. When both are provided, `since_id` must be less than `until_id`.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetMentionsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getMentions(id: UserId, options: GetMentionsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getMentions(id: UserId, options?: GetMentionsOptions): Promise<GetMentionsResponse>;
    /**
     * Delete Bookmark
     * Removes a Post from the authenticated user's Bookmarks by its ID.
  
  
     * @param id id
  
  
  
     * @param tweetId tweet_id
  
  
  
  
     * @returns {Promise<DeleteBookmarkResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteBookmark(id: UserId, tweetId: PostId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteBookmark(id: UserId, tweetId: PostId): Promise<DeleteBookmarkResponse>;
    /**
     * Repost Post
     * Causes the authenticated user to repost a specific Post by its ID.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<RepostPostResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    repostPost(id: UserId, body: RepostPostRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    repostPost(id: UserId, body: RepostPostRequest): Promise<RepostPostResponse>;
    /**
     * Get Users by Usernames
  
  
  
     * @param usernames usernames
  
  
  
     * @returns {Promise<GetByUsernamesResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByUsernames(usernames: Array<string>, options: GetByUsernamesOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByUsernames(usernames: Array<string>, options?: GetByUsernamesOptions): Promise<GetByUsernamesResponse>;
    /**
     * Get Users Bookmarks by Folder ID
  
  
     * @param id id
  
  
  
     * @param folderId folder_id
  
  
  
  
     * @returns {Promise<GetBookmarksByFolderIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBookmarksByFolderId(id: UserId, folderId: string, options: GetBookmarksByFolderIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBookmarksByFolderId(id: UserId, folderId: string, options?: GetBookmarksByFolderIdOptions): Promise<GetBookmarksByFolderIdResponse>;
    /**
     * Block Users Dms
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<BlockDmsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    blockDms(id: UserId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    blockDms(id: UserId): Promise<BlockDmsResponse>;
    /**
     * Get Users Bookmarks
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetBookmarksResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBookmarks(id: UserId, options: GetBookmarksOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBookmarks(id: UserId, options?: GetBookmarksOptions): Promise<GetBookmarksResponse>;
    /**
     * Create Users Bookmark
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateBookmarkResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createBookmark(id: UserId, body: CreateBookmarkRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createBookmark(id: UserId, body: CreateBookmarkRequest): Promise<CreateBookmarkResponse>;
    /**
     * Unfollow User
     * Causes the authenticated user to unfollow a specific user by their ID.
  
  
     * @param sourceUserId source_user_id
  
  
  
     * @param targetUserId target_user_id
  
  
  
  
     * @returns {Promise<UnfollowUserResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unfollowUser(sourceUserId: UserId, targetUserId: UserId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unfollowUser(sourceUserId: UserId, targetUserId: UserId): Promise<UnfollowUserResponse>;
    /**
     * Unblock Users Dms
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<UnblockDmsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unblockDms(id: UserId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unblockDms(id: UserId): Promise<UnblockDmsResponse>;
    /**
     * Unrepost Post
     * Causes the authenticated user to unrepost a specific Post by its ID.
  
  
     * @param id id
  
  
  
     * @param sourceTweetId source_tweet_id
  
  
  
  
     * @returns {Promise<UnrepostPostResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unrepostPost(id: UserId, sourceTweetId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unrepostPost(id: UserId, sourceTweetId: string): Promise<UnrepostPostResponse>;
    /**
     * Like Post
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<LikePostResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    likePost(id: UserId, body: LikePostRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    likePost(id: UserId, body: LikePostRequest): Promise<LikePostResponse>;
    /**
     * Get Users Blocking
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetBlockingResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBlocking(id: UserId, options: GetBlockingOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBlocking(id: UserId, options?: GetBlockingOptions): Promise<GetBlockingResponse>;
    /**
     * Search Users
  
  
  
     * @param query query
  
  
  
     * @returns {Promise<SearchResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    search(query: string, options: SearchOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    search(query: string, options?: SearchOptions$2): Promise<SearchResponse$2>;
    /**
     * Get Users Followed Lists
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetFollowedListsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getFollowedLists(id: UserId, options: GetFollowedListsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getFollowedLists(id: UserId, options?: GetFollowedListsOptions): Promise<GetFollowedListsResponse>;
    /**
     * Follow List
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<FollowListResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    followList(id: UserId, body: FollowListRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    followList(id: UserId, body: FollowListRequest): Promise<FollowListResponse>;
    /**
     * Unlike Post
  
  
     * @param id id
  
  
  
     * @param tweetId tweet_id
  
  
  
  
     * @returns {Promise<UnlikePostResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    unlikePost(id: UserId, tweetId: PostId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    unlikePost(id: UserId, tweetId: PostId): Promise<UnlikePostResponse>;
    /**
     * Get Users Timeline
     * When both are provided, `start_time` must be earlier than `end_time`. When both are provided, `since_id` must be less than `until_id`.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetTimelineResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getTimeline(id: UserId, options: GetTimelineOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getTimeline(id: UserId, options?: GetTimelineOptions): Promise<GetTimelineResponse>;
    /**
     * Get Users Followers
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetFollowersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getFollowers(id: UserId, options: GetFollowersOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getFollowers(id: UserId, options?: GetFollowersOptions$1): Promise<GetFollowersResponse$1>;
    /**
     * Get Users Following
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetFollowingResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getFollowing(id: UserId, options: GetFollowingOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getFollowing(id: UserId, options?: GetFollowingOptions): Promise<GetFollowingResponse>;
    /**
     * Follow User
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<FollowUserResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    followUser(id: UserId, body: FollowUserRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    followUser(id: UserId, body: FollowUserRequest): Promise<FollowUserResponse>;
    /**
     * Get Users List Memberships
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetListMembershipsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getListMemberships(id: UserId, options: GetListMembershipsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getListMemberships(id: UserId, options?: GetListMembershipsOptions): Promise<GetListMembershipsResponse>;
    /**
     * Get Users Bookmark Folders
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetBookmarkFoldersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getBookmarkFolders(id: UserId, options: GetBookmarkFoldersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getBookmarkFolders(id: UserId, options?: GetBookmarkFoldersOptions): Promise<GetBookmarkFoldersResponse>;
    /**
     * Create Bookmark Folder
     * Creates a new Bookmark folder for the authenticated user.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateBookmarkFolderResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createBookmarkFolder(id: UserId, body: CreateBookmarkFolderRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createBookmarkFolder(id: UserId, body: CreateBookmarkFolderRequest): Promise<CreateBookmarkFolderResponse>;
    /**
     * Get public keys
     * Returns a user's registered public keys for X Chat encryption.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetPublicKeyResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPublicKey(id: UserId, options: GetPublicKeyOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPublicKey(id: UserId, options?: GetPublicKeyOptions): Promise<GetPublicKeyResponse>;
    /**
     * Get Users by IDs
  
  
  
     * @param ids ids
  
  
  
     * @returns {Promise<GetByIdsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByIds(ids: Array<UserId>, options: GetByIdsOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByIds(ids: Array<UserId>, options?: GetByIdsOptions$1): Promise<GetByIdsResponse$1>;
    /**
     * Get public keys
     * Returns registered public keys for X Chat encryption for the specified users.
  
  
  
     * @param ids ids
  
  
  
     * @returns {Promise<GetPublicKeysResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPublicKeys(ids: Array<PublicKeyId>, options: GetPublicKeysOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPublicKeys(ids: Array<PublicKeyId>, options?: GetPublicKeysOptions): Promise<GetPublicKeysResponse>;
    /**
     * Get Users Pinned Lists
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetPinnedListsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPinnedLists(id: UserId, options: GetPinnedListsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPinnedLists(id: UserId, options?: GetPinnedListsOptions): Promise<GetPinnedListsResponse>;
    /**
     * Pin List
     * Causes the authenticated user to pin a specific List by its ID.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<PinListResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    pinList(id: UserId, body: PinListRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    pinList(id: UserId, body: PinListRequest): Promise<PinListResponse>;
    /**
     * Get Users Owned Lists
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetOwnedListsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getOwnedLists(id: UserId, options: GetOwnedListsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getOwnedLists(id: UserId, options?: GetOwnedListsOptions): Promise<GetOwnedListsResponse>;
    /**
     * Get Users Posts
     * When both are provided, `start_time` must be earlier than `end_time`. When both are provided, `since_id` must be less than `until_id`.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetPostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPosts(id: UserId, options: GetPostsOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPosts(id: UserId, options?: GetPostsOptions$1): Promise<GetPostsResponse$1>;
    /**
     * Get Users Muting
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetMutingResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getMuting(id: UserId, options: GetMutingOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getMuting(id: UserId, options?: GetMutingOptions): Promise<GetMutingResponse>;
    /**
     * Mute User
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<MuteUserResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    muteUser(id: UserId, body: MuteUserRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    muteUser(id: UserId, body: MuteUserRequest): Promise<MuteUserResponse>;
    /**
     * Get Users Me
  
  
  
     * @returns {Promise<GetMeResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getMe(options: GetMeOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getMe(options?: GetMeOptions): Promise<GetMeResponse>;
    /**
     * Get Users by Username
  
  
     * @param username username
  
  
  
  
     * @returns {Promise<GetByUsernameResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByUsername(username: string, options: GetByUsernameOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByUsername(username: string, options?: GetByUsernameOptions): Promise<GetByUsernameResponse>;
}

/**
 * Models for chat operations
 */

/**
 * Request for createConversation
 *
 * @public
 */
type CreateConversationRequest$1 = CreateChatConversationRequest;
/**
 * Response for createConversation
 *
 * @public
 */
type CreateConversationResponse$1 = CreateChatConversationResponse;
/**
 * Request for markConversationRead
 *
 * @public
 */
type MarkConversationReadRequest = MarkChatConversationReadRequest;
/**
 * Response for markConversationRead
 *
 * @public
 */
type MarkConversationReadResponse = MarkChatConversationReadResponse;
/**
 * Request for deleteMessages
 *
 * @public
 */
type DeleteMessagesRequest = DeleteChatMessagesRequest;
/**
 * Response for deleteMessages
 *
 * @public
 */
type DeleteMessagesResponse = DeleteChatMessagesResponse;
/**
 * Request for addConversationKeys
 *
 * @public
 */
type AddConversationKeysRequest = AddConversationKeysRequest$1;
/**
 * Response for addConversationKeys
 *
 * @public
 */
type AddConversationKeysResponse = AddConversationKeysResponse$1;
/**
 * Response for sendTypingIndicator
 *
 * @public
 */
type SendTypingIndicatorResponse = SendChatTypingIndicatorResponse;
/**
 * Response for initializeGroup
 *
 * @public
 */
type InitializeGroupResponse = InitializeChatGroupResponse;
/**
 * Request for addUserPublicKey
 *
 * @public
 */
type AddUserPublicKeyRequest = AddUserPublicKeyRequest$1;
/**
 * Response for addUserPublicKey
 *
 * @public
 */
type AddUserPublicKeyResponse = AddUserPublicKeyResponse$1;
/**
 * Request for mediaUploadFinalize
 *
 * @public
 */
type MediaUploadFinalizeRequest = ChatMediaUploadFinalizeRequest;
/**
 * Response for mediaUploadFinalize
 *
 * @public
 */
type MediaUploadFinalizeResponse = ChatMediaUploadFinalizeResponse;
/**
 * Response for getConversations
 *
 * @public
 */
type GetConversationsResponse = GetChatConversationsResponse;
/**
 * Request for addGroupMembers
 *
 * @public
 */
type AddGroupMembersRequest = AddChatGroupMembersRequest;
/**
 * Response for addGroupMembers
 *
 * @public
 */
type AddGroupMembersResponse = AddChatGroupMembersResponse;
/**
 * Request for mediaUploadAppend
 *
 * @public
 */
type MediaUploadAppendRequest = ChatMediaUploadAppendRequest;
/**
 * Response for mediaUploadAppend
 *
 * @public
 */
type MediaUploadAppendResponse = ChatMediaUploadAppendResponse;
/**
 * Request for mediaUploadInitialize
 *
 * @public
 */
type MediaUploadInitializeRequest = ChatMediaUploadInitializeRequest;
/**
 * Response for mediaUploadInitialize
 *
 * @public
 */
type MediaUploadInitializeResponse = ChatMediaUploadInitializeResponse;
/**
 * Request for sendMessage
 *
 * @public
 */
type SendMessageRequest = SendChatMessageRequest;
/**
 * Response for sendMessage
 *
 * @public
 */
type SendMessageResponse = SendChatMessageResponse;
/**
 * Response for getConversation
 *
 * @public
 */
type GetConversationResponse = GetChatConversationResponse;
/**
 * Response for getConversationEvents
 *
 * @public
 */
type GetConversationEventsResponse = GetChatConversationEventsResponse;

type models$d_AddConversationKeysRequest = AddConversationKeysRequest;
type models$d_AddConversationKeysResponse = AddConversationKeysResponse;
type models$d_AddGroupMembersRequest = AddGroupMembersRequest;
type models$d_AddGroupMembersResponse = AddGroupMembersResponse;
type models$d_AddUserPublicKeyRequest = AddUserPublicKeyRequest;
type models$d_AddUserPublicKeyResponse = AddUserPublicKeyResponse;
type models$d_DeleteMessagesRequest = DeleteMessagesRequest;
type models$d_DeleteMessagesResponse = DeleteMessagesResponse;
type models$d_GetConversationEventsResponse = GetConversationEventsResponse;
type models$d_GetConversationResponse = GetConversationResponse;
type models$d_GetConversationsResponse = GetConversationsResponse;
type models$d_InitializeGroupResponse = InitializeGroupResponse;
type models$d_MarkConversationReadRequest = MarkConversationReadRequest;
type models$d_MarkConversationReadResponse = MarkConversationReadResponse;
type models$d_MediaUploadAppendRequest = MediaUploadAppendRequest;
type models$d_MediaUploadAppendResponse = MediaUploadAppendResponse;
type models$d_MediaUploadFinalizeRequest = MediaUploadFinalizeRequest;
type models$d_MediaUploadFinalizeResponse = MediaUploadFinalizeResponse;
type models$d_MediaUploadInitializeRequest = MediaUploadInitializeRequest;
type models$d_MediaUploadInitializeResponse = MediaUploadInitializeResponse;
type models$d_SendMessageRequest = SendMessageRequest;
type models$d_SendMessageResponse = SendMessageResponse;
type models$d_SendTypingIndicatorResponse = SendTypingIndicatorResponse;
declare namespace models$d {
  export {
    models$d_AddConversationKeysRequest as AddConversationKeysRequest,
    models$d_AddConversationKeysResponse as AddConversationKeysResponse,
    models$d_AddGroupMembersRequest as AddGroupMembersRequest,
    models$d_AddGroupMembersResponse as AddGroupMembersResponse,
    models$d_AddUserPublicKeyRequest as AddUserPublicKeyRequest,
    models$d_AddUserPublicKeyResponse as AddUserPublicKeyResponse,
    CreateConversationRequest$1 as CreateConversationRequest,
    CreateConversationResponse$1 as CreateConversationResponse,
    models$d_DeleteMessagesRequest as DeleteMessagesRequest,
    models$d_DeleteMessagesResponse as DeleteMessagesResponse,
    models$d_GetConversationEventsResponse as GetConversationEventsResponse,
    models$d_GetConversationResponse as GetConversationResponse,
    models$d_GetConversationsResponse as GetConversationsResponse,
    models$d_InitializeGroupResponse as InitializeGroupResponse,
    models$d_MarkConversationReadRequest as MarkConversationReadRequest,
    models$d_MarkConversationReadResponse as MarkConversationReadResponse,
    models$d_MediaUploadAppendRequest as MediaUploadAppendRequest,
    models$d_MediaUploadAppendResponse as MediaUploadAppendResponse,
    models$d_MediaUploadFinalizeRequest as MediaUploadFinalizeRequest,
    models$d_MediaUploadFinalizeResponse as MediaUploadFinalizeResponse,
    models$d_MediaUploadInitializeRequest as MediaUploadInitializeRequest,
    models$d_MediaUploadInitializeResponse as MediaUploadInitializeResponse,
    models$d_SendMessageRequest as SendMessageRequest,
    models$d_SendMessageResponse as SendMessageResponse,
    models$d_SendTypingIndicatorResponse as SendTypingIndicatorResponse,
  };
}

/**
 * chat client for the X API.
 *
 * This module provides a client for interacting with the chat endpoints of the X API.
 */

/**
 * Options for getConversations method
 *
 * @public
 */
interface GetConversationsOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of ChatConversation fields to display.
     * Also accepts: chat_conversation.fields or proper camelCase (e.g., chatConversationFields) */
    chatConversationFields?: Array<"created_at" | "group_avatar_url" | "group_name" | "id" | "is_muted" | "message_ttl_ms" | "screen_capture_blocking_enabled" | "screen_capture_detection_enabled" | "type" | "updated_at">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"admin_ids" | "member_ids" | "participant_ids">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getConversation method
 *
 * @public
 */
interface GetConversationOptions {
    /** A comma separated list of ChatConversation fields to display.
     * Also accepts: chat_conversation.fields or proper camelCase (e.g., chatConversationFields) */
    chatConversationFields?: Array<"created_at" | "group_avatar_url" | "group_name" | "id" | "is_muted" | "message_ttl_ms" | "screen_capture_blocking_enabled" | "screen_capture_detection_enabled" | "type" | "updated_at">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"admin_ids" | "member_ids" | "participant_ids">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getConversationEvents method
 *
 * @public
 */
interface GetConversationEventsOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of ChatMessageEvent fields to display.
     * Also accepts: chat_message_event.fields or proper camelCase (e.g., chatMessageEventFields) */
    chatMessageEventFields?: Array<"conversation_id" | "conversation_token" | "created_at" | "encoded_event" | "id" | "is_trusted" | "message_event_signature" | "previous_id" | "sender_id">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Client for chat operations
 *
 * This client provides methods for interacting with the chat endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all chat related operations.
 *
 * @category chat
 */
declare class ChatClient {
    private client;
    /**
     * Creates a new chat client instance
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
     * Create Chat Group Conversation
     * Creates a new encrypted Chat group conversation on behalf of the authenticated user.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateConversationResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createConversation(body: CreateConversationRequest$1, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createConversation(body: CreateConversationRequest$1): Promise<CreateConversationResponse$1>;
    /**
     * Mark Conversation as Read
     * Marks a specific Chat conversation as read on behalf of the authenticated user. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<MarkConversationReadResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    markConversationRead(id: string, body: MarkConversationReadRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    markConversationRead(id: string, body: MarkConversationReadRequest): Promise<MarkConversationReadResponse>;
    /**
     * Download Chat Media
     * Downloads encrypted media bytes from an XChat conversation. The response body contains raw binary bytes.
  
  
     * @param id id
  
  
  
     * @param mediaHashKey media_hash_key
  
  
  
  
     * @returns {Promise<ArrayBuffer>} Promise resolving to the API response as binary ArrayBuffer, or raw Response if requestOptions.raw is true
     */
    mediaDownload(id: string, mediaHashKey: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    mediaDownload(id: string, mediaHashKey: string): Promise<ArrayBuffer>;
    /**
     * Delete Chat messages
     * Deletes one or more messages from a Chat conversation. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient. Delete for all removes a message you sent (or, in groups you administer, any message) for every participant; delete for self removes any message only from your own view.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<DeleteMessagesResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteMessages(id: string, body: DeleteMessagesRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteMessages(id: string, body: DeleteMessagesRequest): Promise<DeleteMessagesResponse>;
    /**
     * Add Conversation Keys
     * Adds (initializes or rotates) the encryption keys for a Chat conversation. Call this before sending messages in a new 1:1 conversation, and again with a newer key version to rotate the conversation key. For 1:1 conversations, provide the recipient's user ID as the conversation id; the server constructs the canonical conversation ID from the authenticated user and recipient. The request body must contain the conversation key version and participant keys (the conversation key encrypted for each participant using their public key).
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<AddConversationKeysResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    addConversationKeys(id: string, body: AddConversationKeysRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    addConversationKeys(id: string, body: AddConversationKeysRequest): Promise<AddConversationKeysResponse>;
    /**
     * Send Typing Indicator
     * Sends a typing indicator to a specific Chat conversation on behalf of the authenticated user. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<SendTypingIndicatorResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    sendTypingIndicator(id: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    sendTypingIndicator(id: string): Promise<SendTypingIndicatorResponse>;
    /**
     * Initialize Chat Group
     * Initializes a new Chat group conversation and returns a unique conversation ID. Use the returned conversation_id in a subsequent POST /chat/conversations/group call to fully create and configure the group.
  
  
  
     * @returns {Promise<InitializeGroupResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    initializeGroup(options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    initializeGroup(): Promise<InitializeGroupResponse>;
    /**
     * Add public key
     * Registers a user's public key for X Chat encryption.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<AddUserPublicKeyResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    addUserPublicKey(id: UserId, body: AddUserPublicKeyRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    addUserPublicKey(id: UserId, body: AddUserPublicKeyRequest): Promise<AddUserPublicKeyResponse>;
    /**
     * Finalize Chat Media Upload
     * Finalizes an XChat media upload session.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<MediaUploadFinalizeResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    mediaUploadFinalize(id: string, body: MediaUploadFinalizeRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    mediaUploadFinalize(id: string, body: MediaUploadFinalizeRequest): Promise<MediaUploadFinalizeResponse>;
    /**
     * Get Chat Conversations
     * Retrieves a list of Chat conversations for the authenticated user's inbox.
  
  
  
     * @returns {Promise<GetConversationsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getConversations(options: GetConversationsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getConversations(options?: GetConversationsOptions): Promise<GetConversationsResponse>;
    /**
     * Add members to a Chat group conversation
     * Adds one or more members to an existing encrypted Chat group conversation, rotating the conversation key.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<AddGroupMembersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    addGroupMembers(id: string, body: AddGroupMembersRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    addGroupMembers(id: string, body: AddGroupMembersRequest): Promise<AddGroupMembersResponse>;
    /**
     * Append Chat Media Upload
     * Appends media data to an XChat upload session.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<MediaUploadAppendResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    mediaUploadAppend(id: string, body: MediaUploadAppendRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    mediaUploadAppend(id: string, body: MediaUploadAppendRequest): Promise<MediaUploadAppendResponse>;
    /**
     * Initialize Chat Media Upload
     * Initializes an XChat media upload session.
  
  
  
     * @param body Request body
  
     * @returns {Promise<MediaUploadInitializeResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    mediaUploadInitialize(body: MediaUploadInitializeRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    mediaUploadInitialize(body: MediaUploadInitializeRequest): Promise<MediaUploadInitializeResponse>;
    /**
     * Send Chat Message
     * Sends an encrypted message to a specific Chat conversation. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<SendMessageResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    sendMessage(id: string, body: SendMessageRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    sendMessage(id: string, body: SendMessageRequest): Promise<SendMessageResponse>;
    /**
     * Get Chat Conversation
     * Returns metadata for a Chat conversation including type, muted status, and group details. Use chat_conversation.fields to select which fields are returned. Use expansions to hydrate member, admin, or participant user objects. Use user.fields to control which profile fields are returned for expanded users.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetConversationResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getConversation(id: string, options: GetConversationOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getConversation(id: string, options?: GetConversationOptions): Promise<GetConversationResponse>;
    /**
     * Get Chat Conversation Events
     * Retrieves messages and key change events for a specific Chat conversation with pagination support. For 1:1 conversations, provide the recipient's user ID; the server constructs the canonical conversation ID from the authenticated user and recipient.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetConversationEventsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getConversationEvents(id: string, options: GetConversationEventsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getConversationEvents(id: string, options?: GetConversationEventsOptions): Promise<GetConversationEventsResponse>;
}

/**
 * Models for posts operations
 */

/**
 * Response for searchRecent
 *
 * @public
 */
type SearchRecentResponse = SearchPostsRecentResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse$2 = GetPostsByIdResponse;
/**
 * Response for delete
 *
 * @public
 */
type DeleteResponse$2 = DeletePostsResponse;
/**
 * Response for searchAll
 *
 * @public
 */
type SearchAllResponse = SearchPostsAllResponse;
/**
 * Response for getReposts
 *
 * @public
 */
type GetRepostsResponse = GetPostsRepostsResponse;
/**
 * Response for getByIds
 *
 * @public
 */
type GetByIdsResponse = GetPostsByIdsResponse;
/**
 * Request for create
 *
 * @public
 */
type CreateRequest$2 = CreatePostsRequest;
/**
 * Response for create
 *
 * @public
 */
type CreateResponse$2 = CreatePostsResponse;
/**
 * Response for getLikingUsers
 *
 * @public
 */
type GetLikingUsersResponse = GetPostsLikingUsersResponse;
/**
 * Request for hideReply
 *
 * @public
 */
type HideReplyRequest = HidePostsReplyRequest;
/**
 * Response for hideReply
 *
 * @public
 */
type HideReplyResponse = HidePostsReplyResponse;
/**
 * Response for getQuoted
 *
 * @public
 */
type GetQuotedResponse = GetPostsQuotedPostsResponse;
/**
 * Response for getCountsAll
 *
 * @public
 */
type GetCountsAllResponse = GetPostsCountsAllResponse;
/**
 * Response for getAnalytics
 *
 * @public
 */
type GetAnalyticsResponse = GetPostsAnalyticsResponse;
/**
 * Response for getCountsRecent
 *
 * @public
 */
type GetCountsRecentResponse = GetPostsCountsRecentResponse;
/**
 * Response for getRepostedBy
 *
 * @public
 */
type GetRepostedByResponse = GetPostsRepostedByResponse;

type models$c_GetAnalyticsResponse = GetAnalyticsResponse;
type models$c_GetByIdsResponse = GetByIdsResponse;
type models$c_GetCountsAllResponse = GetCountsAllResponse;
type models$c_GetCountsRecentResponse = GetCountsRecentResponse;
type models$c_GetLikingUsersResponse = GetLikingUsersResponse;
type models$c_GetQuotedResponse = GetQuotedResponse;
type models$c_GetRepostedByResponse = GetRepostedByResponse;
type models$c_GetRepostsResponse = GetRepostsResponse;
type models$c_HideReplyRequest = HideReplyRequest;
type models$c_HideReplyResponse = HideReplyResponse;
type models$c_SearchAllResponse = SearchAllResponse;
type models$c_SearchRecentResponse = SearchRecentResponse;
declare namespace models$c {
  export {
    CreateRequest$2 as CreateRequest,
    CreateResponse$2 as CreateResponse,
    DeleteResponse$2 as DeleteResponse,
    models$c_GetAnalyticsResponse as GetAnalyticsResponse,
    GetByIdResponse$2 as GetByIdResponse,
    models$c_GetByIdsResponse as GetByIdsResponse,
    models$c_GetCountsAllResponse as GetCountsAllResponse,
    models$c_GetCountsRecentResponse as GetCountsRecentResponse,
    models$c_GetLikingUsersResponse as GetLikingUsersResponse,
    models$c_GetQuotedResponse as GetQuotedResponse,
    models$c_GetRepostedByResponse as GetRepostedByResponse,
    models$c_GetRepostsResponse as GetRepostsResponse,
    models$c_HideReplyRequest as HideReplyRequest,
    models$c_HideReplyResponse as HideReplyResponse,
    models$c_SearchAllResponse as SearchAllResponse,
    models$c_SearchRecentResponse as SearchRecentResponse,
  };
}

/**
 * posts client for the X API.
 *
 * This module provides a client for interacting with the posts endpoints of the X API.
 */

/**
 * Options for searchRecent method
 *
 * @public
 */
interface SearchRecentOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** Must be within the last 7 days.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** end_time
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** since_id
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** until_id
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** sort_order
     * Also accepts: sort_order or proper camelCase (e.g., sortOrder) */
    sortOrder?: "recency" | "relevancy";
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** start_time
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** end_time
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** since_id
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** until_id
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** sort_order
     * Also accepts: sort_order or proper camelCase (e.g., sortOrder) */
    sortOrder?: "recency" | "relevancy";
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** exclude
     * Also accepts: exclude or proper camelCase (e.g., exclude) */
    exclude?: Array<"replies" | "retweets">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** start_time
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** end_time
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** since_id
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** until_id
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** A base32hex-encoded pagination token.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** granularity
     * Also accepts: granularity or proper camelCase (e.g., granularity) */
    granularity?: "minute" | "hour" | "day";
    /** search_count.fields
     * Also accepts: search_count.fields or proper camelCase (e.g., searchCountFields) */
    searchCountFields?: string;
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
    /** granularity
     * Also accepts: granularity or proper camelCase (e.g., granularity) */
    granularity?: "hourly" | "weekly" | "daily" | "total";
    /** A comma separated list of Analytics fields to display.
     * Also accepts: analytics.fields or proper camelCase (e.g., analyticsFields) */
    analyticsFields?: Array<"app_install_attempts" | "app_opens" | "bookmarks" | "detail_expands" | "email_tweet" | "engagements" | "follows" | "hashtag_clicks" | "id" | "impressions" | "likes" | "media_views" | "permalink_clicks" | "quote_tweets" | "replies" | "retweets" | "shares" | "timestamp" | "timestamped_metrics" | "unfollows" | "unlikes" | "url_clicks" | "user_profile_clicks">;
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
    /** Must be within the last 7 days.
     * Also accepts: start_time or proper camelCase (e.g., startTime) */
    startTime?: string;
    /** end_time
     * Also accepts: end_time or proper camelCase (e.g., endTime) */
    endTime?: string;
    /** since_id
     * Also accepts: since_id or proper camelCase (e.g., sinceId) */
    sinceId?: string;
    /** until_id
     * Also accepts: until_id or proper camelCase (e.g., untilId) */
    untilId?: string;
    /** A base32hex-encoded pagination token.
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** granularity
     * Also accepts: granularity or proper camelCase (e.g., granularity) */
    granularity?: "minute" | "hour" | "day";
    /** search_count.fields
     * Also accepts: search_count.fields or proper camelCase (e.g., searchCountFields) */
    searchCountFields?: string;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
     * Search Posts Recent
     * At most one of `start_time`, `since_id` may be provided. At most one of `end_time`, `until_id` may be provided. At most one of `pagination_token`, `next_token` may be provided.
  
  
  
     * @param query query
  
  
  
     * @returns {Promise<SearchRecentResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    searchRecent(query: string, options: SearchRecentOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    searchRecent(query: string, options?: SearchRecentOptions): Promise<SearchRecentResponse>;
    /**
     * Get Posts by ID
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: PostId, options: GetByIdOptions$2 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: PostId, options?: GetByIdOptions$2): Promise<GetByIdResponse$2>;
    /**
     * Delete Posts
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<DeleteResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    delete(id: PostId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    delete(id: PostId): Promise<DeleteResponse$2>;
    /**
     * Search Posts All
     * At most one of `start_time`, `since_id` may be provided. At most one of `end_time`, `until_id` may be provided. At most one of `pagination_token`, `next_token` may be provided.
  
  
  
     * @param query query
  
  
  
     * @returns {Promise<SearchAllResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    searchAll(query: string, options: SearchAllOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    searchAll(query: string, options?: SearchAllOptions): Promise<SearchAllResponse>;
    /**
     * Get Posts Reposts
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetRepostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getReposts(id: PostId, options: GetRepostsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getReposts(id: PostId, options?: GetRepostsOptions): Promise<GetRepostsResponse>;
    /**
     * Get Posts by IDs
  
  
  
     * @param ids ids
  
  
  
     * @returns {Promise<GetByIdsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByIds(ids: Array<PostId>, options: GetByIdsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByIds(ids: Array<PostId>, options?: GetByIdsOptions): Promise<GetByIdsResponse>;
    /**
     * Create Posts
  
  
  
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
     * Get Posts Liking Users
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetLikingUsersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getLikingUsers(id: PostId, options: GetLikingUsersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getLikingUsers(id: PostId, options?: GetLikingUsersOptions): Promise<GetLikingUsersResponse>;
    /**
     * Hide reply
     * Hides or unhides a reply to a conversation owned by the authenticated user.
  
  
     * @param tweetId tweet_id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<HideReplyResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    hideReply(tweetId: PostId, body: HideReplyRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    hideReply(tweetId: PostId, body: HideReplyRequest): Promise<HideReplyResponse>;
    /**
     * Get Posts Quoted Posts
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetQuotedResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getQuoted(id: PostId, options: GetQuotedOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getQuoted(id: PostId, options?: GetQuotedOptions): Promise<GetQuotedResponse>;
    /**
     * Get Posts Counts All
     * At most one of `pagination_token`, `next_token` may be provided.
  
  
  
     * @param query query
  
  
  
     * @returns {Promise<GetCountsAllResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getCountsAll(query: string, options: GetCountsAllOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getCountsAll(query: string, options?: GetCountsAllOptions): Promise<GetCountsAllResponse>;
    /**
     * Get Posts Analytics
  
  
  
     * @param ids ids
  
  
  
     * @param startTime start_time
  
  
  
     * @param endTime end_time
  
  
  
     * @returns {Promise<GetAnalyticsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getAnalytics(ids: Array<AnalyticsId>, startTime: string, endTime: string, options: GetAnalyticsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getAnalytics(ids: Array<AnalyticsId>, startTime: string, endTime: string, options?: GetAnalyticsOptions): Promise<GetAnalyticsResponse>;
    /**
     * Get Posts Counts Recent
     * At most one of `pagination_token`, `next_token` may be provided.
  
  
  
     * @param query query
  
  
  
     * @returns {Promise<GetCountsRecentResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getCountsRecent(query: string, options: GetCountsRecentOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getCountsRecent(query: string, options?: GetCountsRecentOptions): Promise<GetCountsRecentResponse>;
    /**
     * Get Posts Reposted by
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetRepostedByResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getRepostedBy(id: PostId, options: GetRepostedByOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getRepostedBy(id: PostId, options?: GetRepostedByOptions): Promise<GetRepostedByResponse>;
}

/**
 * Models for account activity operations
 */

/**
 * Response for validateSubscription
 *
 * @public
 */
type ValidateSubscriptionResponse = ValidateAccountActivitySubscriptionResponse;
/**
 * Request for createSubscription
 *
 * @public
 */
type CreateSubscriptionRequest$1 = CreateAccountActivitySubscriptionRequest;
/**
 * Response for createSubscription
 *
 * @public
 */
type CreateSubscriptionResponse$1 = CreateAccountActivitySubscriptionResponse;
/**
 * Response for deleteSubscription
 *
 * @public
 */
type DeleteSubscriptionResponse$1 = DeleteAccountActivitySubscriptionResponse;
/**
 * Response for getSubscriptionCount
 *
 * @public
 */
type GetSubscriptionCountResponse = GetAccountActivitySubscriptionCountResponse;
/**
 * Response for getSubscriptions
 *
 * @public
 */
type GetSubscriptionsResponse$1 = GetAccountActivitySubscriptionsResponse;

type models$b_GetSubscriptionCountResponse = GetSubscriptionCountResponse;
type models$b_ValidateSubscriptionResponse = ValidateSubscriptionResponse;
declare namespace models$b {
  export {
    CreateSubscriptionRequest$1 as CreateSubscriptionRequest,
    CreateSubscriptionResponse$1 as CreateSubscriptionResponse,
    DeleteSubscriptionResponse$1 as DeleteSubscriptionResponse,
    models$b_GetSubscriptionCountResponse as GetSubscriptionCountResponse,
    GetSubscriptionsResponse$1 as GetSubscriptionsResponse,
    models$b_ValidateSubscriptionResponse as ValidateSubscriptionResponse,
  };
}

/**
 * account activity client for the X API.
 *
 * This module provides a client for interacting with the account activity endpoints of the X API.
 */

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
     * Validate Account Activity Subscription
  
  
     * @param webhookId webhook_id
  
  
  
  
     * @returns {Promise<ValidateSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    validateSubscription(webhookId: WebhookConfigId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    validateSubscription(webhookId: WebhookConfigId): Promise<ValidateSubscriptionResponse>;
    /**
     * Create subscription
     * Creates an Account Activity subscription for the user and the given webhook.
  
  
     * @param webhookId webhook_id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createSubscription(webhookId: WebhookConfigId, body: CreateSubscriptionRequest$1, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createSubscription(webhookId: WebhookConfigId, body: CreateSubscriptionRequest$1): Promise<CreateSubscriptionResponse$1>;
    /**
     * Delete subscription
     * Deletes an Account Activity subscription for the given webhook and user ID.
  
  
     * @param webhookId webhook_id
  
  
  
     * @param userId user_id
  
  
  
  
     * @returns {Promise<DeleteSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteSubscription(webhookId: WebhookConfigId, userId: UserId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteSubscription(webhookId: WebhookConfigId, userId: UserId): Promise<DeleteSubscriptionResponse$1>;
    /**
     * Get Account Activity Subscription Count
  
  
  
     * @returns {Promise<GetSubscriptionCountResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getSubscriptionCount(options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getSubscriptionCount(): Promise<GetSubscriptionCountResponse>;
    /**
     * Get Account Activity Subscriptions
  
  
     * @param webhookId webhook_id
  
  
  
  
     * @returns {Promise<GetSubscriptionsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getSubscriptions(webhookId: WebhookConfigId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getSubscriptions(webhookId: WebhookConfigId): Promise<GetSubscriptionsResponse$1>;
}

/**
 * Models for webhooks operations
 */

/**
 * Request for createWebhookReplayJob
 *
 * @public
 */
type CreateWebhookReplayJobRequest = CreateWebhookReplayJobRequest$1;
/**
 * Response for createWebhookReplayJob
 *
 * @public
 */
type CreateWebhookReplayJobResponse = CreateWebhookReplayJobResponse$1;
/**
 * Response for get
 *
 * @public
 */
type GetResponse$1 = GetWebhooksResponse;
/**
 * Request for create
 *
 * @public
 */
type CreateRequest$1 = CreateWebhooksRequest;
/**
 * Response for create
 *
 * @public
 */
type CreateResponse$1 = CreateWebhooksResponse;
/**
 * Response for createStreamLink
 *
 * @public
 */
type CreateStreamLinkResponse = CreateWebhooksStreamLinkResponse;
/**
 * Response for deleteStreamLink
 *
 * @public
 */
type DeleteStreamLinkResponse = DeleteWebhooksStreamLinkResponse;
/**
 * Response for getStreamLinks
 *
 * @public
 */
type GetStreamLinksResponse = GetWebhooksStreamLinksResponse;
/**
 * Response for validate
 *
 * @public
 */
type ValidateResponse = ValidateWebhooksResponse;
/**
 * Response for delete
 *
 * @public
 */
type DeleteResponse$1 = DeleteWebhooksResponse;

type models$a_CreateStreamLinkResponse = CreateStreamLinkResponse;
type models$a_CreateWebhookReplayJobRequest = CreateWebhookReplayJobRequest;
type models$a_CreateWebhookReplayJobResponse = CreateWebhookReplayJobResponse;
type models$a_DeleteStreamLinkResponse = DeleteStreamLinkResponse;
type models$a_GetStreamLinksResponse = GetStreamLinksResponse;
type models$a_ValidateResponse = ValidateResponse;
declare namespace models$a {
  export {
    CreateRequest$1 as CreateRequest,
    CreateResponse$1 as CreateResponse,
    models$a_CreateStreamLinkResponse as CreateStreamLinkResponse,
    models$a_CreateWebhookReplayJobRequest as CreateWebhookReplayJobRequest,
    models$a_CreateWebhookReplayJobResponse as CreateWebhookReplayJobResponse,
    DeleteResponse$1 as DeleteResponse,
    models$a_DeleteStreamLinkResponse as DeleteStreamLinkResponse,
    GetResponse$1 as GetResponse,
    models$a_GetStreamLinksResponse as GetStreamLinksResponse,
    models$a_ValidateResponse as ValidateResponse,
  };
}

/**
 * webhooks client for the X API.
 *
 * This module provides a client for interacting with the webhooks endpoints of the X API.
 */

/**
 * Options for get method
 *
 * @public
 */
interface GetOptions$1 {
    /** A comma separated list of WebhookConfig fields to display.
     * Also accepts: webhook_config.fields or proper camelCase (e.g., webhookConfigFields) */
    webhookConfigFields?: Array<"created_at" | "id" | "url" | "valid">;
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
     * Create replay job for webhook
     * Creates a replay job to retrieve events from up to the past 24 hours for all events delivered or attempted to be delivered to the webhook.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateWebhookReplayJobResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createWebhookReplayJob(body: CreateWebhookReplayJobRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createWebhookReplayJob(body: CreateWebhookReplayJobRequest): Promise<CreateWebhookReplayJobResponse>;
    /**
     * Get webhook
     * Get a list of webhook configs associated with a client app.
  
  
  
     * @returns {Promise<GetResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    get(options: GetOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    get(options?: GetOptions$1): Promise<GetResponse$1>;
    /**
     * Create webhook
     * Creates a new webhook configuration.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    create(body: CreateRequest$1, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    create(body: CreateRequest$1): Promise<CreateResponse$1>;
    /**
     * Create stream link
     * Creates a link to deliver FilteredStream events to the given webhook.
  
  
     * @param webhookId webhook_id
  
  
  
  
     * @returns {Promise<CreateStreamLinkResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createStreamLink(webhookId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createStreamLink(webhookId: string): Promise<CreateStreamLinkResponse>;
    /**
     * Delete stream link
     * Deletes the link delivering FilteredStream events to the given webhook.
  
  
     * @param webhookId webhook_id
  
  
  
  
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
     * Validate webhook
     * Triggers a CRC check for a given webhook.
  
  
     * @param webhookId webhook_id
  
  
  
  
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
  
  
     * @param webhookId webhook_id
  
  
  
  
     * @returns {Promise<DeleteResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    delete(webhookId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    delete(webhookId: string): Promise<DeleteResponse$1>;
}

/**
 * Models for lists operations
 */

/**
 * Response for removeMemberByUserId
 *
 * @public
 */
type RemoveMemberByUserIdResponse = RemoveListsMemberByUserIdResponse;
/**
 * Response for getFollowers
 *
 * @public
 */
type GetFollowersResponse = GetListsFollowersResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse$1 = GetListsByIdResponse;
/**
 * Request for update
 *
 * @public
 */
type UpdateRequest = UpdateListsRequest;
/**
 * Response for update
 *
 * @public
 */
type UpdateResponse = UpdateListsResponse;
/**
 * Response for delete
 *
 * @public
 */
type DeleteResponse = DeleteListsResponse;
/**
 * Response for getPosts
 *
 * @public
 */
type GetPostsResponse = GetListsPostsResponse;
/**
 * Request for create
 *
 * @public
 */
type CreateRequest = CreateListsRequest;
/**
 * Response for create
 *
 * @public
 */
type CreateResponse = CreateListsResponse;
/**
 * Response for getMembers
 *
 * @public
 */
type GetMembersResponse = GetListsMembersResponse;
/**
 * Request for addMember
 *
 * @public
 */
type AddMemberRequest = AddListsMemberRequest;
/**
 * Response for addMember
 *
 * @public
 */
type AddMemberResponse = AddListsMemberResponse;

type models$9_AddMemberRequest = AddMemberRequest;
type models$9_AddMemberResponse = AddMemberResponse;
type models$9_CreateRequest = CreateRequest;
type models$9_CreateResponse = CreateResponse;
type models$9_DeleteResponse = DeleteResponse;
type models$9_GetFollowersResponse = GetFollowersResponse;
type models$9_GetMembersResponse = GetMembersResponse;
type models$9_GetPostsResponse = GetPostsResponse;
type models$9_RemoveMemberByUserIdResponse = RemoveMemberByUserIdResponse;
type models$9_UpdateRequest = UpdateRequest;
type models$9_UpdateResponse = UpdateResponse;
declare namespace models$9 {
  export {
    models$9_AddMemberRequest as AddMemberRequest,
    models$9_AddMemberResponse as AddMemberResponse,
    models$9_CreateRequest as CreateRequest,
    models$9_CreateResponse as CreateResponse,
    models$9_DeleteResponse as DeleteResponse,
    GetByIdResponse$1 as GetByIdResponse,
    models$9_GetFollowersResponse as GetFollowersResponse,
    models$9_GetMembersResponse as GetMembersResponse,
    models$9_GetPostsResponse as GetPostsResponse,
    models$9_RemoveMemberByUserIdResponse as RemoveMemberByUserIdResponse,
    models$9_UpdateRequest as UpdateRequest,
    models$9_UpdateResponse as UpdateResponse,
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A 64-bit signed integer.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
    /** A comma separated list of List fields to display.
     * Also accepts: list.fields or proper camelCase (e.g., listFields) */
    listFields?: Array<"created_at" | "description" | "follower_count" | "id" | "member_count" | "name" | "private">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"owner_id">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"article.cover_media" | "article.media_entities" | "attachments.media_keys" | "attachments.media_source_tweet" | "attachments.poll_ids" | "author_id" | "edit_history_post_ids" | "entities.mentions.username" | "geo.place_id" | "in_reply_to_user_id" | "referenced_posts" | "username">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
    /** A comma separated list of Poll fields to display.
     * Also accepts: poll.fields or proper camelCase (e.g., pollFields) */
    pollFields?: Array<"duration_minutes" | "end_datetime" | "id" | "options" | "voting_status">;
    /** A comma separated list of Place fields to display.
     * Also accepts: place.fields or proper camelCase (e.g., placeFields) */
    placeFields?: Array<"contained_within" | "country" | "country_code" | "full_name" | "geo" | "id" | "name" | "place_type">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A 64-bit signed integer.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"affiliation" | "most_recent_post_id" | "pinned_post_id">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
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
     * Remove a List member
     * Removes a User from a List by their ID.
  
  
     * @param id id
  
  
  
     * @param userId user_id
  
  
  
  
     * @returns {Promise<RemoveMemberByUserIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    removeMemberByUserId(id: ListId, userId: UserId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    removeMemberByUserId(id: ListId, userId: UserId): Promise<RemoveMemberByUserIdResponse>;
    /**
     * Get Lists Followers
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetFollowersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getFollowers(id: ListId, options: GetFollowersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getFollowers(id: ListId, options?: GetFollowersOptions): Promise<GetFollowersResponse>;
    /**
     * Get Lists by ID
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: ListId, options: GetByIdOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: ListId, options?: GetByIdOptions$1): Promise<GetByIdResponse$1>;
    /**
     * Update List
     * Updates the details of a specific List owned by the authenticated user by its ID.
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<UpdateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    update(id: ListId, body: UpdateRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    update(id: ListId, body: UpdateRequest): Promise<UpdateResponse>;
    /**
     * Delete List
     * Deletes a specific List owned by the authenticated user by its ID.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<DeleteResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    delete(id: ListId, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    delete(id: ListId): Promise<DeleteResponse>;
    /**
     * Get Lists Posts
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetPostsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPosts(id: ListId, options: GetPostsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPosts(id: ListId, options?: GetPostsOptions): Promise<GetPostsResponse>;
    /**
     * Create Lists
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    create(body: CreateRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    create(body: CreateRequest): Promise<CreateResponse>;
    /**
     * Get Lists Members
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetMembersResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getMembers(id: ListId, options: GetMembersOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getMembers(id: ListId, options?: GetMembersOptions): Promise<GetMembersResponse>;
    /**
     * Add Lists Member
  
  
     * @param id id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<AddMemberResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    addMember(id: ListId, body: AddMemberRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    addMember(id: ListId, body: AddMemberRequest): Promise<AddMemberResponse>;
}

/**
 * Response for getOpenApiSpec
 *
 * @public
 */
type GetOpenApiSpecResponse = Record<string, any>;

type models$8_GetOpenApiSpecResponse = GetOpenApiSpecResponse;
declare namespace models$8 {
  export {
    models$8_GetOpenApiSpecResponse as GetOpenApiSpecResponse,
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
 * Models for compliance operations
 */

/**
 * Response for getJobsById
 *
 * @public
 */
type GetJobsByIdResponse = GetComplianceJobsByIdResponse;
/**
 * Response for getJobs
 *
 * @public
 */
type GetJobsResponse = GetComplianceJobsResponse;
/**
 * Request for createJobs
 *
 * @public
 */
type CreateJobsRequest = CreateComplianceJobsRequest;
/**
 * Response for createJobs
 *
 * @public
 */
type CreateJobsResponse = CreateComplianceJobsResponse;

type models$7_CreateJobsRequest = CreateJobsRequest;
type models$7_CreateJobsResponse = CreateJobsResponse;
type models$7_GetJobsByIdResponse = GetJobsByIdResponse;
type models$7_GetJobsResponse = GetJobsResponse;
declare namespace models$7 {
  export {
    models$7_CreateJobsRequest as CreateJobsRequest,
    models$7_CreateJobsResponse as CreateJobsResponse,
    models$7_GetJobsByIdResponse as GetJobsByIdResponse,
    models$7_GetJobsResponse as GetJobsResponse,
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
    complianceJobFields?: Array<"created_at" | "download_expires_at" | "download_url" | "id" | "name" | "resumable" | "status" | "type" | "upload_expires_at" | "upload_url">;
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
    /** status
     * Also accepts: status or proper camelCase (e.g., status) */
    status?: "created" | "in_progress" | "failed" | "complete";
    /** A comma separated list of ComplianceJob fields to display.
     * Also accepts: compliance_job.fields or proper camelCase (e.g., complianceJobFields) */
    complianceJobFields?: Array<"created_at" | "download_expires_at" | "download_url" | "id" | "name" | "resumable" | "status" | "type" | "upload_expires_at" | "upload_url">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for createJobs method
 *
 * @public
 */
interface CreateJobsOptions {
    /** A comma separated list of ComplianceJob fields to display.
     * Also accepts: compliance_job.fields or proper camelCase (e.g., complianceJobFields) */
    complianceJobFields?: Array<"created_at" | "download_expires_at" | "download_url" | "id" | "name" | "resumable" | "status" | "type" | "upload_expires_at" | "upload_url">;
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
  
  
     * @param id id
  
  
  
  
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
  
  
  
     * @param type type
  
  
  
     * @returns {Promise<GetJobsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getJobs(type: "tweets" | "users", options: GetJobsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getJobs(type: "tweets" | "users", options?: GetJobsOptions): Promise<GetJobsResponse>;
    /**
     * Create Compliance Job
     * Creates a new Compliance Job for the specified job type.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateJobsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createJobs(body: CreateJobsRequest, options: CreateJobsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createJobs(body: CreateJobsRequest, options?: CreateJobsOptions): Promise<CreateJobsResponse>;
}

/**
 * Models for activity operations
 */

/**
 * Response for getSubscriptions
 *
 * @public
 */
type GetSubscriptionsResponse = GetActivitySubscriptionsResponse;
/**
 * Request for createSubscription
 *
 * @public
 */
type CreateSubscriptionRequest = CreateActivitySubscriptionRequest;
/**
 * Response for createSubscription
 *
 * @public
 */
type CreateSubscriptionResponse = CreateActivitySubscriptionResponse;
/**
 * Response for deleteSubscriptionsByIds
 *
 * @public
 */
type DeleteSubscriptionsByIdsResponse = DeleteActivitySubscriptionsByIdsResponse;
/**
 * Request for updateSubscription
 *
 * @public
 */
type UpdateSubscriptionRequest = UpdateActivitySubscriptionRequest;
/**
 * Response for updateSubscription
 *
 * @public
 */
type UpdateSubscriptionResponse = UpdateActivitySubscriptionResponse;
/**
 * Response for deleteSubscription
 *
 * @public
 */
type DeleteSubscriptionResponse = DeleteActivitySubscriptionResponse;

type models$6_CreateSubscriptionRequest = CreateSubscriptionRequest;
type models$6_CreateSubscriptionResponse = CreateSubscriptionResponse;
type models$6_DeleteSubscriptionResponse = DeleteSubscriptionResponse;
type models$6_DeleteSubscriptionsByIdsResponse = DeleteSubscriptionsByIdsResponse;
type models$6_GetSubscriptionsResponse = GetSubscriptionsResponse;
type models$6_UpdateSubscriptionRequest = UpdateSubscriptionRequest;
type models$6_UpdateSubscriptionResponse = UpdateSubscriptionResponse;
declare namespace models$6 {
  export {
    models$6_CreateSubscriptionRequest as CreateSubscriptionRequest,
    models$6_CreateSubscriptionResponse as CreateSubscriptionResponse,
    models$6_DeleteSubscriptionResponse as DeleteSubscriptionResponse,
    models$6_DeleteSubscriptionsByIdsResponse as DeleteSubscriptionsByIdsResponse,
    models$6_GetSubscriptionsResponse as GetSubscriptionsResponse,
    models$6_UpdateSubscriptionRequest as UpdateSubscriptionRequest,
    models$6_UpdateSubscriptionResponse as UpdateSubscriptionResponse,
  };
}

/**
 * activity client for the X API.
 *
 * This module provides a client for interacting with the activity endpoints of the X API.
 */

/**
 * Options for getSubscriptions method
 *
 * @public
 */
interface GetSubscriptionsOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
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
    getSubscriptions(options: GetSubscriptionsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getSubscriptions(options?: GetSubscriptionsOptions): Promise<GetSubscriptionsResponse>;
    /**
     * Create X activity subscription
     * Creates a subscription for an X activity event. OAuth2 user-context tokens must hold the scope matching the requested event_type: dm.read for chat.* and dm.* events, like.read for like.* events, mute.read for mute.* events, block.read for block.* events, and tweet.read for all other event types. Mute and block subscriptions are actor-only: filter.user_id must identify the authenticated user and direction is not supported.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createSubscription(body: CreateSubscriptionRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createSubscription(body: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse>;
    /**
     * Delete X activity subscriptions by IDs
     * Deletes multiple subscriptions for X activity events by their IDs
  
  
  
     * @param ids ids
  
  
  
     * @returns {Promise<DeleteSubscriptionsByIdsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteSubscriptionsByIds(ids: Array<string>, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteSubscriptionsByIds(ids: Array<string>): Promise<DeleteSubscriptionsByIdsResponse>;
    /**
     * Update X activity subscription
     * Updates a subscription for an X activity event
  
  
     * @param subscriptionId subscription_id
  
  
  
  
     * @param body Request body
  
     * @returns {Promise<UpdateSubscriptionResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    updateSubscription(subscriptionId: string, body: UpdateSubscriptionRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    updateSubscription(subscriptionId: string, body: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse>;
    /**
     * Deletes X activity subscription
     * Deletes a subscription for an X activity event
  
  
     * @param subscriptionId subscription_id
  
  
  
  
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
 * Models for articles operations
 */

/**
 * Response for articlePublish
 *
 * @public
 */
type ArticlePublishResponse = ArticlePublishResponse$1;
/**
 * Request for articleCreateDraft
 *
 * @public
 */
type ArticleCreateDraftRequest = ArticleCreateDraftRequest$1;
/**
 * Response for articleCreateDraft
 *
 * @public
 */
type ArticleCreateDraftResponse = ArticleCreateDraftResponse$1;

type models$5_ArticleCreateDraftRequest = ArticleCreateDraftRequest;
type models$5_ArticleCreateDraftResponse = ArticleCreateDraftResponse;
type models$5_ArticlePublishResponse = ArticlePublishResponse;
declare namespace models$5 {
  export {
    models$5_ArticleCreateDraftRequest as ArticleCreateDraftRequest,
    models$5_ArticleCreateDraftResponse as ArticleCreateDraftResponse,
    models$5_ArticlePublishResponse as ArticlePublishResponse,
  };
}

/**
 * articles client for the X API.
 *
 * This module provides a client for interacting with the articles endpoints of the X API.
 */

/**
 * Client for articles operations
 *
 * This client provides methods for interacting with the articles endpoints
 * of the X API. It handles authentication, request formatting, and response
 * parsing for all articles related operations.
 *
 * @category articles
 */
declare class ArticlesClient {
    private client;
    /**
     * Creates a new articles client instance
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
     * Publish Article
     * Publishes a draft Article, making it publicly visible.
  
  
     * @param articleId article_id
  
  
  
  
     * @returns {Promise<ArticlePublishResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    articlePublish(articleId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    articlePublish(articleId: string): Promise<ArticlePublishResponse>;
    /**
     * Create draft Article
     * Creates a new Article draft that can later be published.
  
  
  
     * @param body Request body
  
     * @returns {Promise<ArticleCreateDraftResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    articleCreateDraft(body: ArticleCreateDraftRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    articleCreateDraft(body: ArticleCreateDraftRequest): Promise<ArticleCreateDraftResponse>;
}

/**
 * Models for trends operations
 */

/**
 * Response for getPersonalized
 *
 * @public
 */
type GetPersonalizedResponse = GetTrendsPersonalizedTrendsResponse;
/**
 * Response for getByWoeid
 *
 * @public
 */
type GetByWoeidResponse = GetTrendsByWoeidResponse;

type models$4_GetByWoeidResponse = GetByWoeidResponse;
type models$4_GetPersonalizedResponse = GetPersonalizedResponse;
declare namespace models$4 {
  export {
    models$4_GetByWoeidResponse as GetByWoeidResponse,
    models$4_GetPersonalizedResponse as GetPersonalizedResponse,
  };
}

/**
 * trends client for the X API.
 *
 * This module provides a client for interacting with the trends endpoints of the X API.
 */

/**
 * Options for getPersonalized method
 *
 * @public
 */
interface GetPersonalizedOptions {
    /** A comma separated list of PersonalizedTrend fields to display.
     * Also accepts: personalized_trend.fields or proper camelCase (e.g., personalizedTrendFields) */
    personalizedTrendFields?: Array<"category" | "post_count" | "trend_name" | "trending_since">;
    /** Additional request options */
    requestOptions?: RequestOptions;
    /** Allow original API parameter names (e.g., 'tweet.fields', 'user.fields') and proper camelCase (e.g., 'tweetFields', 'userFields') */
    [key: string]: any;
}
/**
 * Options for getByWoeid method
 *
 * @public
 */
interface GetByWoeidOptions {
    /** max_trends
     * Also accepts: max_trends or proper camelCase (e.g., maxTrends) */
    maxTrends?: number;
    /** A comma separated list of Trend fields to display.
     * Also accepts: trend.fields or proper camelCase (e.g., trendFields) */
    trendFields?: Array<"trend_name" | "tweet_count">;
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
     * Get Trends Personalized Trends
  
  
  
     * @returns {Promise<GetPersonalizedResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getPersonalized(options: GetPersonalizedOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getPersonalized(options?: GetPersonalizedOptions): Promise<GetPersonalizedResponse>;
    /**
     * Get Trends by Woeid
  
  
     * @param woeid woeid
  
  
  
  
     * @returns {Promise<GetByWoeidResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getByWoeid(woeid: number, options: GetByWoeidOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getByWoeid(woeid: number, options?: GetByWoeidOptions): Promise<GetByWoeidResponse>;
}

/**
 * Models for connections operations
 */

/**
 * Response for getConnectionHistory
 *
 * @public
 */
type GetConnectionHistoryResponse = GetConnectionHistoryResponse$1;
/**
 * Request for deleteByUuids
 *
 * @public
 */
type DeleteByUuidsRequest = DeleteConnectionsByUuidsRequest;
/**
 * Response for deleteByUuids
 *
 * @public
 */
type DeleteByUuidsResponse = DeleteConnectionsByUuidsResponse;
/**
 * Response for deleteAll
 *
 * @public
 */
type DeleteAllResponse = DeleteAllConnectionsResponse;
/**
 * Response for deleteByEndpoint
 *
 * @public
 */
type DeleteByEndpointResponse = DeleteConnectionsByEndpointResponse;

type models$3_DeleteAllResponse = DeleteAllResponse;
type models$3_DeleteByEndpointResponse = DeleteByEndpointResponse;
type models$3_DeleteByUuidsRequest = DeleteByUuidsRequest;
type models$3_DeleteByUuidsResponse = DeleteByUuidsResponse;
type models$3_GetConnectionHistoryResponse = GetConnectionHistoryResponse;
declare namespace models$3 {
  export {
    models$3_DeleteAllResponse as DeleteAllResponse,
    models$3_DeleteByEndpointResponse as DeleteByEndpointResponse,
    models$3_DeleteByUuidsRequest as DeleteByUuidsRequest,
    models$3_DeleteByUuidsResponse as DeleteByUuidsResponse,
    models$3_GetConnectionHistoryResponse as GetConnectionHistoryResponse,
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
    /** status
     * Also accepts: status or proper camelCase (e.g., status) */
    status?: "active" | "inactive" | "all";
    /** endpoints
     * Also accepts: endpoints or proper camelCase (e.g., endpoints) */
    endpoints?: Array<"filtered_stream" | "sample_stream" | "sample10_stream" | "firehose_stream" | "tweets_compliance_stream" | "users_compliance_stream" | "tweet_label_stream" | "firehose_stream_lang_en" | "firehose_stream_lang_ja" | "firehose_stream_lang_ko" | "firehose_stream_lang_pt" | "likes_firehose_stream" | "likes_sample10_stream" | "likes_compliance_stream">;
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Connection fields to display.
     * Also accepts: connection.fields or proper camelCase (e.g., connectionFields) */
    connectionFields?: Array<"client_ip" | "connected_at" | "disconnect_reason" | "disconnected_at" | "endpoint_name" | "id">;
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
     * Terminate multiple connections
     * Terminates multiple streaming connections by their UUIDs for the authenticated application.
  
  
  
     * @param body Request body
  
     * @returns {Promise<DeleteByUuidsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteByUuids(body: DeleteByUuidsRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteByUuids(body: DeleteByUuidsRequest): Promise<DeleteByUuidsResponse>;
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
    /**
     * Terminate connections by endpoint
     * Terminates all streaming connections for a specific endpoint ID for the authenticated application.
  
  
     * @param endpointId endpoint_id
  
  
  
  
     * @returns {Promise<DeleteByEndpointResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteByEndpoint(endpointId: "filtered_stream" | "sample_stream" | "sample10_stream" | "firehose_stream" | "tweets_compliance_stream" | "users_compliance_stream" | "tweet_label_stream" | "firehose_stream_lang_en" | "firehose_stream_lang_ja" | "firehose_stream_lang_ko" | "firehose_stream_lang_pt" | "likes_firehose_stream" | "likes_sample10_stream" | "likes_compliance_stream", options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteByEndpoint(endpointId: "filtered_stream" | "sample_stream" | "sample10_stream" | "firehose_stream" | "tweets_compliance_stream" | "users_compliance_stream" | "tweet_label_stream" | "firehose_stream_lang_en" | "firehose_stream_lang_ja" | "firehose_stream_lang_ko" | "firehose_stream_lang_pt" | "likes_firehose_stream" | "likes_sample10_stream" | "likes_compliance_stream"): Promise<DeleteByEndpointResponse>;
}

/**
 * Models for direct messages operations
 */

/**
 * Response for getEventsById
 *
 * @public
 */
type GetEventsByIdResponse = GetDirectMessagesEventsByIdResponse;
/**
 * Response for deleteEvents
 *
 * @public
 */
type DeleteEventsResponse = DeleteDirectMessagesEventsResponse;
/**
 * Response for getEvents
 *
 * @public
 */
type GetEventsResponse = GetDirectMessagesEventsResponse;
/**
 * Request for createByConversationId
 *
 * @public
 */
type CreateByConversationIdRequest = CreateDirectMessagesByConversationIdRequest;
/**
 * Response for createByConversationId
 *
 * @public
 */
type CreateByConversationIdResponse = CreateDirectMessagesByConversationIdResponse;
/**
 * Response for getEventsByConversationId
 *
 * @public
 */
type GetEventsByConversationIdResponse = GetDirectMessagesEventsByConversationIdResponse;
/**
 * Request for createByParticipantId
 *
 * @public
 */
type CreateByParticipantIdRequest = CreateDirectMessagesByParticipantIdRequest;
/**
 * Response for createByParticipantId
 *
 * @public
 */
type CreateByParticipantIdResponse = CreateDirectMessagesByParticipantIdResponse;
/**
 * Response for getEventsByParticipantId
 *
 * @public
 */
type GetEventsByParticipantIdResponse = GetDirectMessagesEventsByParticipantIdResponse;
/**
 * Request for createConversation
 *
 * @public
 */
type CreateConversationRequest = CreateDirectMessagesConversationRequest;
/**
 * Response for createConversation
 *
 * @public
 */
type CreateConversationResponse = CreateDirectMessagesConversationResponse;

type models$2_CreateByConversationIdRequest = CreateByConversationIdRequest;
type models$2_CreateByConversationIdResponse = CreateByConversationIdResponse;
type models$2_CreateByParticipantIdRequest = CreateByParticipantIdRequest;
type models$2_CreateByParticipantIdResponse = CreateByParticipantIdResponse;
type models$2_CreateConversationRequest = CreateConversationRequest;
type models$2_CreateConversationResponse = CreateConversationResponse;
type models$2_DeleteEventsResponse = DeleteEventsResponse;
type models$2_GetEventsByConversationIdResponse = GetEventsByConversationIdResponse;
type models$2_GetEventsByIdResponse = GetEventsByIdResponse;
type models$2_GetEventsByParticipantIdResponse = GetEventsByParticipantIdResponse;
type models$2_GetEventsResponse = GetEventsResponse;
declare namespace models$2 {
  export {
    models$2_CreateByConversationIdRequest as CreateByConversationIdRequest,
    models$2_CreateByConversationIdResponse as CreateByConversationIdResponse,
    models$2_CreateByParticipantIdRequest as CreateByParticipantIdRequest,
    models$2_CreateByParticipantIdResponse as CreateByParticipantIdResponse,
    models$2_CreateConversationRequest as CreateConversationRequest,
    models$2_CreateConversationResponse as CreateConversationResponse,
    models$2_DeleteEventsResponse as DeleteEventsResponse,
    models$2_GetEventsByConversationIdResponse as GetEventsByConversationIdResponse,
    models$2_GetEventsByIdResponse as GetEventsByIdResponse,
    models$2_GetEventsByParticipantIdResponse as GetEventsByParticipantIdResponse,
    models$2_GetEventsResponse as GetEventsResponse,
  };
}

/**
 * direct messages client for the X API.
 *
 * This module provides a client for interacting with the direct messages endpoints of the X API.
 */

/**
 * Options for getEventsById method
 *
 * @public
 */
interface GetEventsByIdOptions {
    /** A comma separated list of DmEvent fields to display.
     * Also accepts: dm_event.fields or proper camelCase (e.g., dmEventFields) */
    dmEventFields?: Array<"attachments" | "created_at" | "dm_conversation_id" | "entities" | "event_type" | "id" | "text">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"attachments.media_keys" | "attachments.media_keys" | "participant_ids" | "referenced_posts" | "sender_id">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** event_types
     * Also accepts: event_types or proper camelCase (e.g., eventTypes) */
    eventTypes?: Array<"MessageCreate" | "ParticipantsJoin" | "ParticipantsLeave">;
    /** A comma separated list of DmEvent fields to display.
     * Also accepts: dm_event.fields or proper camelCase (e.g., dmEventFields) */
    dmEventFields?: Array<"attachments" | "created_at" | "dm_conversation_id" | "entities" | "event_type" | "id" | "text">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"attachments.media_keys" | "attachments.media_keys" | "participant_ids" | "referenced_posts" | "sender_id">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** event_types
     * Also accepts: event_types or proper camelCase (e.g., eventTypes) */
    eventTypes?: Array<"MessageCreate" | "ParticipantsJoin" | "ParticipantsLeave">;
    /** A comma separated list of DmEvent fields to display.
     * Also accepts: dm_event.fields or proper camelCase (e.g., dmEventFields) */
    dmEventFields?: Array<"attachments" | "created_at" | "dm_conversation_id" | "entities" | "event_type" | "id" | "text">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"attachments.media_keys" | "attachments.media_keys" | "participant_ids" | "referenced_posts" | "sender_id">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
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
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** A base32hex-encoded pagination token.
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** event_types
     * Also accepts: event_types or proper camelCase (e.g., eventTypes) */
    eventTypes?: Array<"MessageCreate" | "ParticipantsJoin" | "ParticipantsLeave">;
    /** A comma separated list of DmEvent fields to display.
     * Also accepts: dm_event.fields or proper camelCase (e.g., dmEventFields) */
    dmEventFields?: Array<"attachments" | "created_at" | "dm_conversation_id" | "entities" | "event_type" | "id" | "text">;
    /** A comma separated list of fields to expand.
     * Also accepts: expansions or proper camelCase (e.g., expansions) */
    expansions?: Array<"attachments.media_keys" | "attachments.media_keys" | "participant_ids" | "referenced_posts" | "sender_id">;
    /** A comma separated list of User fields to display.
     * Also accepts: user.fields or proper camelCase (e.g., userFields) */
    userFields?: Array<"confirmed_email" | "connection_status" | "created_at" | "description" | "entities" | "id" | "is_identity_verified" | "location" | "name" | "parody" | "profile_banner_url" | "profile_image_url" | "protected" | "public_metrics" | "receives_your_dm" | "subscribes_to_you" | "subscription" | "subscription_type" | "url" | "username" | "verified" | "verified_followers_count" | "verified_type" | "withheld">;
    /** A comma separated list of Post fields to display.
     * Also accepts: post.fields or proper camelCase (e.g., postFields) */
    postFields?: Array<"article" | "article_title" | "attachments" | "card_uri" | "community_id" | "context_annotations" | "conversation_id" | "created_at" | "display_text_range" | "edit_controls" | "entities" | "geo" | "id" | "lang" | "matched_media_notes" | "media_metadata" | "non_public_metrics" | "note_post" | "note_request_suggestions" | "organic_metrics" | "paid_partnership" | "possibly_sensitive" | "promoted_metrics" | "public_metrics" | "reply_settings" | "scopes" | "source" | "suggested_source_links" | "suggested_source_links_with_counts" | "text" | "withheld">;
    /** A comma separated list of Media fields to display.
     * Also accepts: media.fields or proper camelCase (e.g., mediaFields) */
    mediaFields?: Array<"alt_text" | "duration_ms" | "height" | "media_key" | "non_public_metrics" | "organic_metrics" | "preview_image_url" | "promoted_metrics" | "public_metrics" | "type" | "url" | "variants" | "width">;
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
     * Get Direct Messages Events by ID
  
  
     * @param eventId event_id
  
  
  
  
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
  
  
     * @param eventId event_id
  
  
  
  
     * @returns {Promise<DeleteEventsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    deleteEvents(eventId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    deleteEvents(eventId: string): Promise<DeleteEventsResponse>;
    /**
     * Download DM Media
     * Downloads media attached to a legacy Direct Message. The requesting user must be a participant in the conversation containing the specified DM event. The response body contains raw binary bytes.
  
  
     * @param dmId dm_id
  
  
  
     * @param mediaId media_id
  
  
  
     * @param resourceId resource_id
  
  
  
  
     * @returns {Promise<ArrayBuffer>} Promise resolving to the API response as binary ArrayBuffer, or raw Response if requestOptions.raw is true
     */
    dmConversationsMediaDownload(dmId: string, mediaId: string, resourceId: string, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    dmConversationsMediaDownload(dmId: string, mediaId: string, resourceId: string): Promise<ArrayBuffer>;
    /**
     * Get Direct Messages Events
  
  
  
     * @returns {Promise<GetEventsResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getEvents(options: GetEventsOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getEvents(options?: GetEventsOptions): Promise<GetEventsResponse>;
    /**
     * Create Direct Messages by Conversation ID
  
  
     * @param dmConversationId dm_conversation_id
  
  
  
  
     * @param body At least one of `text`, `attachments` is required.
  
     * @returns {Promise<CreateByConversationIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createByConversationId(dmConversationId: string, body: CreateByConversationIdRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createByConversationId(dmConversationId: string, body: CreateByConversationIdRequest): Promise<CreateByConversationIdResponse>;
    /**
     * Get Direct Messages Events by Conversation ID
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetEventsByConversationIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getEventsByConversationId(id: string, options: GetEventsByConversationIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getEventsByConversationId(id: string, options?: GetEventsByConversationIdOptions): Promise<GetEventsByConversationIdResponse>;
    /**
     * Create DM message by participant ID
     * Sends a new direct message to a specific participant by their ID.
  
  
     * @param participantId participant_id
  
  
  
  
     * @param body At least one of `text`, `attachments` is required.
  
     * @returns {Promise<CreateByParticipantIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createByParticipantId(participantId: string, body: CreateByParticipantIdRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createByParticipantId(participantId: string, body: CreateByParticipantIdRequest): Promise<CreateByParticipantIdResponse>;
    /**
     * Get Direct Messages Events by Participant ID
  
  
     * @param participantId participant_id
  
  
  
  
     * @returns {Promise<GetEventsByParticipantIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getEventsByParticipantId(participantId: string, options: GetEventsByParticipantIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getEventsByParticipantId(participantId: string, options?: GetEventsByParticipantIdOptions): Promise<GetEventsByParticipantIdResponse>;
    /**
     * Create DM conversation
     * Initiates a new direct message conversation with specified participants.
  
  
  
     * @param body Request body
  
     * @returns {Promise<CreateConversationResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    createConversation(body: CreateConversationRequest, options: {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    createConversation(body: CreateConversationRequest): Promise<CreateConversationResponse>;
}

/**
 * Models for communities operations
 */

/**
 * Response for search
 *
 * @public
 */
type SearchResponse$1 = SearchCommunitiesResponse;
/**
 * Response for getById
 *
 * @public
 */
type GetByIdResponse = GetCommunitiesByIdResponse;

type models$1_GetByIdResponse = GetByIdResponse;
declare namespace models$1 {
  export {
    models$1_GetByIdResponse as GetByIdResponse,
    SearchResponse$1 as SearchResponse,
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
interface SearchOptions$1 {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** next_token
     * Also accepts: next_token or proper camelCase (e.g., nextToken) */
    nextToken?: string;
    /** pagination_token
     * Also accepts: pagination_token or proper camelCase (e.g., paginationToken) */
    paginationToken?: string;
    /** A comma separated list of Community fields to display.
     * Also accepts: community.fields or proper camelCase (e.g., communityFields) */
    communityFields?: Array<"access" | "created_at" | "description" | "id" | "join_policy" | "member_count" | "name">;
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
    /** A comma separated list of Community fields to display.
     * Also accepts: community.fields or proper camelCase (e.g., communityFields) */
    communityFields?: Array<"access" | "created_at" | "description" | "id" | "join_policy" | "member_count" | "name">;
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
  
  
  
     * @param query query
  
  
  
     * @returns {Promise<SearchResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    search(query: string, options: SearchOptions$1 & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    search(query: string, options?: SearchOptions$1): Promise<SearchResponse$1>;
    /**
     * Get Communities by ID
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetByIdResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    getById(id: CommunityId, options: GetByIdOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    getById(id: CommunityId, options?: GetByIdOptions): Promise<GetByIdResponse>;
}

/**
 * Models for news operations
 */

/**
 * Response for search
 *
 * @public
 */
type SearchResponse = SearchNewsResponse;
/**
 * Response for get
 *
 * @public
 */
type GetResponse = GetNewsResponse;

type models_GetResponse = GetResponse;
type models_SearchResponse = SearchResponse;
declare namespace models {
  export {
    models_GetResponse as GetResponse,
    models_SearchResponse as SearchResponse,
  };
}

/**
 * news client for the X API.
 *
 * This module provides a client for interacting with the news endpoints of the X API.
 */

/**
 * Options for search method
 *
 * @public
 */
interface SearchOptions {
    /** max_results
     * Also accepts: max_results or proper camelCase (e.g., maxResults) */
    maxResults?: number;
    /** max_age_hours
     * Also accepts: max_age_hours or proper camelCase (e.g., maxAgeHours) */
    maxAgeHours?: number;
    /** A comma separated list of News fields to display.
     * Also accepts: news.fields or proper camelCase (e.g., newsFields) */
    newsFields?: Array<"category" | "cluster_posts_results" | "contexts" | "contexts" | "contexts" | "contexts" | "disclaimer" | "hook" | "id" | "keywords" | "name" | "summary" | "updated_at">;
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
    /** A comma separated list of News fields to display.
     * Also accepts: news.fields or proper camelCase (e.g., newsFields) */
    newsFields?: Array<"category" | "cluster_posts_results" | "contexts" | "contexts" | "contexts" | "contexts" | "disclaimer" | "hook" | "id" | "keywords" | "name" | "summary" | "updated_at">;
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
     * Search News
  
  
  
     * @param query query
  
  
  
     * @returns {Promise<SearchResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    search(query: string, options: SearchOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    search(query: string, options?: SearchOptions): Promise<SearchResponse>;
    /**
     * Get news stories by ID
     * Retrieves news story by its ID.
  
  
     * @param id id
  
  
  
  
     * @returns {Promise<GetResponse>} Promise resolving to the API response, or raw Response if requestOptions.raw is true
     */
    get(id: string, options: GetOptions & {
        requestOptions: {
            raw: true;
        };
    }): Promise<Response>;
    get(id: string, options?: GetOptions): Promise<GetResponse>;
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
    /** Whether this endpoint returns binary data (ArrayBuffer) - determined from OpenAPI spec */
    binary?: boolean;
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
    /** stream client */
    readonly stream: StreamClient;
    /** usage client */
    readonly usage: UsageClient;
    /** community notes client */
    readonly communityNotes: CommunityNotesClient;
    /** spaces client */
    readonly spaces: SpacesClient;
    /** broadcasts client */
    readonly broadcasts: BroadcastsClient;
    /** media client */
    readonly media: MediaClient;
    /** users client */
    readonly users: UsersClient;
    /** chat client */
    readonly chat: ChatClient;
    /** posts client */
    readonly posts: PostsClient;
    /** account activity client */
    readonly accountActivity: AccountActivityClient;
    /** webhooks client */
    readonly webhooks: WebhooksClient;
    /** lists client */
    readonly lists: ListsClient;
    /** general client */
    readonly general: GeneralClient;
    /** compliance client */
    readonly compliance: ComplianceClient;
    /** activity client */
    readonly activity: ActivityClient;
    /** articles client */
    readonly articles: ArticlesClient;
    /** trends client */
    readonly trends: TrendsClient;
    /** connections client */
    readonly connections: ConnectionsClient;
    /** direct messages client */
    readonly directMessages: DirectMessagesClient;
    /** communities client */
    readonly communities: CommunitiesClient;
    /** news client */
    readonly news: NewsClient;
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

export { models$b as AccountActivity, AccountActivityClient, models$6 as Activity, ActivityClient, ApiError, ApiResponse, models$5 as Articles, ArticlesClient, models$g as Broadcasts, BroadcastsClient, models$d as Chat, ChatClient, Client, ClientConfig, models$1 as Communities, CommunitiesClient, models$i as CommunityNotes, CommunityNotesClient, models$7 as Compliance, ComplianceClient, models$3 as Connections, ConnectionsClient, CryptoUtils, models$2 as DirectMessages, DirectMessagesClient, EventPaginator, models$8 as General, GeneralClient, HttpClient, RequestOptions$1 as HttpClientRequestOptions, HttpResponse, models$9 as Lists, ListsClient, models$f as Media, MediaClient, models as News, NewsClient, OAuth1, OAuth1AccessToken, OAuth1Config, OAuth1RequestToken, OAuth2, OAuth2Config, OAuth2Token, PaginatedResponse, PaginationMeta, Paginator, PostPaginator, models$c as Posts, PostsClient, RequestOptions, schemas as Schemas, models$h as Spaces, SpacesClient, models$k as Stream, StreamClient, StreamListener, models$4 as Trends, TrendsClient, TweetStreamListener, models$j as Usage, UsageClient, UserPaginator, models$e as Users, UsersClient, models$a as Webhooks, WebhooksClient, generateCodeChallenge, generateCodeVerifier, generateNonce, generateTimestamp, hmacSha1, httpClient };
