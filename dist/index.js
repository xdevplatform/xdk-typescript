var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/http-client.ts
var isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isNode = !isReactNative && typeof process !== "undefined" && process.versions && process.versions.node;
var isBrowser = !isReactNative && !isNode && typeof window !== "undefined" && typeof window.fetch === "function";
var HttpClient = class {
  fetch;
  HeadersClass;
  constructor() {
    this.initializeEnvironment();
  }
  initializeEnvironment() {
    if (isReactNative) {
      this.fetch = globalThis.fetch.bind(globalThis);
      this.HeadersClass = globalThis.Headers;
    } else if (isNode) {
      this.initializeNodeEnvironment();
    } else if (isBrowser) {
      this.fetch = globalThis.fetch.bind(globalThis);
      this.HeadersClass = globalThis.Headers;
    } else {
      this.fetch = globalThis.fetch.bind(globalThis);
      this.HeadersClass = globalThis.Headers;
    }
  }
  initializeNodeEnvironment() {
    if (typeof globalThis.fetch === "function" && typeof globalThis.Headers === "function") {
      this.fetch = globalThis.fetch.bind(globalThis);
      this.HeadersClass = globalThis.Headers;
      return;
    }
    try {
      const nodeFetch = __require("node-fetch");
      const { Headers: NodeHeaders } = nodeFetch;
      this.fetch = nodeFetch.default || nodeFetch;
      this.HeadersClass = NodeHeaders;
    } catch (error) {
      throw new Error(
        "X API SDK: node-fetch not found. For Node.js environments, please install node-fetch:\nnpm install node-fetch\nOr upgrade to Node.js 18+ for native fetch support."
      );
    }
  }
  /**
   * Create a new Headers instance
   */
  createHeaders(init) {
    return new this.HeadersClass(init);
  }
  /**
   * Make an HTTP request
   */
  async request(url, options = {}) {
    let body = options.body;
    if (body && typeof body !== "string") {
      if (isNode && typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(body)) {
        body = body.toString();
      } else if (body instanceof ArrayBuffer) {
        body = new TextDecoder().decode(body);
      } else if (ArrayBuffer.isView(body)) {
        body = new TextDecoder().decode(body);
      }
    }
    let signal = options.signal;
    if (options.timeout && options.timeout > 0 && !signal) {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), options.timeout);
      signal = controller.signal;
    }
    const response = await this.fetch(url, {
      method: options.method || "GET",
      headers: options.headers,
      body,
      signal
    });
    return response;
  }
  /**
   * Make a GET request
   */
  async get(url, headers) {
    return this.request(url, {
      method: "GET",
      headers
    });
  }
  /**
   * Make a POST request
   */
  async post(url, body, headers) {
    return this.request(url, {
      method: "POST",
      headers,
      body
    });
  }
  /**
   * Make a PUT request
   */
  async put(url, body, headers) {
    return this.request(url, {
      method: "PUT",
      headers,
      body
    });
  }
  /**
   * Make a DELETE request
   */
  async delete(url, headers) {
    return this.request(url, {
      method: "DELETE",
      headers
    });
  }
  /**
   * Make a PATCH request
   */
  async patch(url, body, headers) {
    return this.request(url, {
      method: "PATCH",
      headers,
      body
    });
  }
};
var httpClient = new HttpClient();

// src/general/client.ts
var GeneralClient = class {
  client;
  /**
   * Creates a new general client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getOpenApiSpec() {
    let path = "/2/openapi.json";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/general/models.ts
var models_exports = {};

// src/account_activity/client.ts
var AccountActivityClient = class {
  client;
  /**
   * Creates a new account activity client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getSubscriptions(webhookId) {
    let path = "/2/account_activity/webhooks/{webhook_id}/subscriptions/all/list";
    path = path.replace("{webhook_id}", encodeURIComponent(String(webhookId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async deleteSubscription(webhookId, userId) {
    let path = "/2/account_activity/webhooks/{webhook_id}/subscriptions/{user_id}/all";
    path = path.replace("{webhook_id}", encodeURIComponent(String(webhookId)));
    path = path.replace("{user_id}", encodeURIComponent(String(userId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async validateSubscription(webhookId) {
    let path = "/2/account_activity/webhooks/{webhook_id}/subscriptions/all";
    path = path.replace("{webhook_id}", encodeURIComponent(String(webhookId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.read", "dm.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createSubscription(webhookId, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/account_activity/webhooks/{webhook_id}/subscriptions/all";
    path = path.replace("{webhook_id}", encodeURIComponent(String(webhookId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.read", "dm.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createReplayJob(webhookId, fromDate, toDate) {
    let path = "/2/account_activity/replay/webhooks/{webhook_id}/subscriptions/all";
    path = path.replace("{webhook_id}", encodeURIComponent(String(webhookId)));
    const params = new URLSearchParams();
    if (fromDate !== void 0) {
      params.append("from_date", String(fromDate));
    }
    if (toDate !== void 0) {
      params.append("to_date", String(toDate));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getSubscriptionCount() {
    let path = "/2/account_activity/subscriptions/count";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/account_activity/models.ts
var models_exports2 = {};

// src/community_notes/client.ts
var CommunityNotesClient = class {
  client;
  /**
   * Creates a new community notes client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async searchEligiblePosts(testMode, options = {}) {
    const paramMappings = {
      "pagination_token": "paginationToken",
      "max_results": "maxResults",
      "post_selection": "postSelection",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      paginationToken = void 0,
      maxResults = void 0,
      postSelection = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/notes/search/posts_eligible_for_notes";
    const params = new URLSearchParams();
    if (testMode !== void 0) {
      params.append("test_mode", String(testMode));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (postSelection !== void 0) {
      params.append("post_selection", String(postSelection));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async evaluate(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/evaluate_note";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.write"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async searchWritten(testMode, options = {}) {
    const paramMappings = {
      "pagination_token": "paginationToken",
      "max_results": "maxResults",
      "note.fields": "noteFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      paginationToken = void 0,
      maxResults = void 0,
      noteFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/notes/search/notes_written";
    const params = new URLSearchParams();
    if (testMode !== void 0) {
      params.append("test_mode", String(testMode));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (noteFields !== void 0 && noteFields.length > 0) {
      params.append("note.fields", normalizeFields2(noteFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async delete(id) {
    let path = "/2/notes/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.write"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async create(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/notes";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.write"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/community_notes/models.ts
var models_exports3 = {};

// src/compliance/client.ts
var ComplianceClient = class {
  client;
  /**
   * Creates a new compliance client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getJobsById(id, options = {}) {
    const paramMappings = {
      "compliance_job.fields": "complianceJobFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      complianceJobFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/compliance/jobs/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (complianceJobFields !== void 0 && complianceJobFields.length > 0) {
      params.append("compliance_job.fields", normalizeFields2(complianceJobFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getJobs(type, options = {}) {
    const paramMappings = {
      "compliance_job.fields": "complianceJobFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      status = void 0,
      complianceJobFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/compliance/jobs";
    const params = new URLSearchParams();
    if (type !== void 0) {
      params.append("type", String(type));
    }
    if (status !== void 0) {
      params.append("status", String(status));
    }
    if (complianceJobFields !== void 0 && complianceJobFields.length > 0) {
      params.append("compliance_job.fields", normalizeFields2(complianceJobFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createJobs(body) {
    let path = "/2/compliance/jobs";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: JSON.stringify(transformKeysToSnake(body || {})),
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/compliance/models.ts
var models_exports4 = {};

// src/connections/client.ts
var ConnectionsClient = class {
  client;
  /**
   * Creates a new connections client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getConnectionHistory(options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "connection.fields": "connectionFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      status = void 0,
      endpoints = [],
      maxResults = void 0,
      paginationToken = void 0,
      connectionFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/connections";
    const params = new URLSearchParams();
    if (status !== void 0) {
      params.append("status", String(status));
    }
    if (endpoints !== void 0 && endpoints.length > 0) {
      params.append("endpoints", endpoints.join(","));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (connectionFields !== void 0 && connectionFields.length > 0) {
      params.append("connection.fields", normalizeFields2(connectionFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async deleteAll() {
    let path = "/2/connections/all";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/connections/models.ts
var models_exports5 = {};

// src/users/client.ts
var UsersClient = class {
  client;
  /**
   * Creates a new users client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getByUsernames(usernames, options = {}) {
    const paramMappings = {
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/by";
    const params = new URLSearchParams();
    if (usernames !== void 0 && usernames.length > 0) {
      params.append("usernames", usernames.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getRepostsOfMe(options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/reposts_of_me";
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["timeline.read", "tweet.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async unlikePost(id, tweetId) {
    let path = "/2/users/{id}/likes/{tweet_id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    path = path.replace("{tweet_id}", encodeURIComponent(String(tweetId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["like.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getBookmarks(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/bookmarks";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["bookmark.read", "tweet.read", "users.read"]
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createBookmark(id, body) {
    let path = "/2/users/{id}/bookmarks";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: JSON.stringify(transformKeysToSnake(body || {})),
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["bookmark.write", "tweet.read", "users.read"]
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getFollowers(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/followers";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["follows.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async unpinList(id, listId) {
    let path = "/2/users/{id}/pinned_lists/{list_id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    path = path.replace("{list_id}", encodeURIComponent(String(listId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getById(id, options = {}) {
    const paramMappings = {
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getMentions(id, options = {}) {
    const paramMappings = {
      "since_id": "sinceId",
      "until_id": "untilId",
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      sinceId = void 0,
      untilId = void 0,
      maxResults = void 0,
      paginationToken = void 0,
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/mentions";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (sinceId !== void 0) {
      params.append("since_id", String(sinceId));
    }
    if (untilId !== void 0) {
      params.append("until_id", String(untilId));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async unrepostPost(id, sourceTweetId) {
    let path = "/2/users/{id}/retweets/{source_tweet_id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    path = path.replace("{source_tweet_id}", encodeURIComponent(String(sourceTweetId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "tweet.write", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async deleteBookmark(id, tweetId) {
    let path = "/2/users/{id}/bookmarks/{tweet_id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    path = path.replace("{tweet_id}", encodeURIComponent(String(tweetId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["bookmark.write", "tweet.read", "users.read"]
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async unfollowList(id, listId) {
    let path = "/2/users/{id}/followed_lists/{list_id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    path = path.replace("{list_id}", encodeURIComponent(String(listId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async unmuteUser(sourceUserId, targetUserId) {
    let path = "/2/users/{source_user_id}/muting/{target_user_id}";
    path = path.replace("{source_user_id}", encodeURIComponent(String(sourceUserId)));
    path = path.replace("{target_user_id}", encodeURIComponent(String(targetUserId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["mute.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getMe(options = {}) {
    const paramMappings = {
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/me";
    const params = new URLSearchParams();
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getMuting(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/muting";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["mute.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async muteUser(id, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/muting";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["mute.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async search(query, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "next_token": "nextToken",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      nextToken = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/search";
    const params = new URLSearchParams();
    if (query !== void 0) {
      params.append("query", String(query));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (nextToken !== void 0) {
      params.append("next_token", String(nextToken));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getBlocking(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/blocking";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["block.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getByIds(ids, options = {}) {
    const paramMappings = {
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users";
    const params = new URLSearchParams();
    if (ids !== void 0 && ids.length > 0) {
      params.append("ids", ids.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getFollowing(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/following";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["follows.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async followUser(id, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/following";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["follows.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async likePost(id, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/likes";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["like.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getLikedPosts(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/liked_tweets";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["like.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getPosts(id, options = {}) {
    const paramMappings = {
      "since_id": "sinceId",
      "until_id": "untilId",
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      sinceId = void 0,
      untilId = void 0,
      maxResults = void 0,
      paginationToken = void 0,
      exclude = [],
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/tweets";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (sinceId !== void 0) {
      params.append("since_id", String(sinceId));
    }
    if (untilId !== void 0) {
      params.append("until_id", String(untilId));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (exclude !== void 0 && exclude.length > 0) {
      params.append("exclude", exclude.join(","));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async blockDms(id) {
    let path = "/2/users/{id}/dm/block";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getListMemberships(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "list.fields": "listFields",
      "user.fields": "userFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      listFields = [],
      expansions = [],
      userFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/list_memberships";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (listFields !== void 0 && listFields.length > 0) {
      params.append("list.fields", normalizeFields2(listFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["list.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getPinnedLists(id, options = {}) {
    const paramMappings = {
      "list.fields": "listFields",
      "user.fields": "userFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      listFields = [],
      expansions = [],
      userFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/pinned_lists";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (listFields !== void 0 && listFields.length > 0) {
      params.append("list.fields", normalizeFields2(listFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async pinList(id, body) {
    let path = "/2/users/{id}/pinned_lists";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: JSON.stringify(transformKeysToSnake(body || {})),
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getByUsername(username, options = {}) {
    const paramMappings = {
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/by/username/{username}";
    path = path.replace("{username}", encodeURIComponent(String(username)));
    const params = new URLSearchParams();
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async unfollowUser(sourceUserId, targetUserId) {
    let path = "/2/users/{source_user_id}/following/{target_user_id}";
    path = path.replace("{source_user_id}", encodeURIComponent(String(sourceUserId)));
    path = path.replace("{target_user_id}", encodeURIComponent(String(targetUserId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["follows.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getTimeline(id, options = {}) {
    const paramMappings = {
      "since_id": "sinceId",
      "until_id": "untilId",
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      sinceId = void 0,
      untilId = void 0,
      maxResults = void 0,
      paginationToken = void 0,
      exclude = [],
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/timelines/reverse_chronological";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (sinceId !== void 0) {
      params.append("since_id", String(sinceId));
    }
    if (untilId !== void 0) {
      params.append("until_id", String(untilId));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (exclude !== void 0 && exclude.length > 0) {
      params.append("exclude", exclude.join(","));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getFollowedLists(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "list.fields": "listFields",
      "user.fields": "userFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      listFields = [],
      expansions = [],
      userFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/followed_lists";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (listFields !== void 0 && listFields.length > 0) {
      params.append("list.fields", normalizeFields2(listFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["list.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async followList(id, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/followed_lists";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async unblockDms(id) {
    let path = "/2/users/{id}/dm/unblock";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async repostPost(id, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/retweets";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "tweet.write", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getBookmarkFolders(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/bookmarks/folders";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["bookmark.read", "users.read"]
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getOwnedLists(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "list.fields": "listFields",
      "user.fields": "userFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      listFields = [],
      expansions = [],
      userFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/{id}/owned_lists";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (listFields !== void 0 && listFields.length > 0) {
      params.append("list.fields", normalizeFields2(listFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["list.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getBookmarksByFolderId(id, folderId) {
    let path = "/2/users/{id}/bookmarks/folders/{folder_id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    path = path.replace("{folder_id}", encodeURIComponent(String(folderId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["bookmark.read", "tweet.read", "users.read"]
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/users/models.ts
var models_exports6 = {};

// src/news/client.ts
var NewsClient = class {
  client;
  /**
   * Creates a new news client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async get(id, options = {}) {
    const paramMappings = {
      "news.fields": "newsFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      newsFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/news/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (newsFields !== void 0 && newsFields.length > 0) {
      params.append("news.fields", normalizeFields2(newsFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async search(query, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "max_age_hours": "maxAgeHours",
      "news.fields": "newsFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      maxAgeHours = void 0,
      newsFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/news/search";
    const params = new URLSearchParams();
    if (query !== void 0) {
      params.append("query", String(query));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (maxAgeHours !== void 0) {
      params.append("max_age_hours", String(maxAgeHours));
    }
    if (newsFields !== void 0 && newsFields.length > 0) {
      params.append("news.fields", normalizeFields2(newsFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/news/models.ts
var models_exports7 = {};

// src/spaces/client.ts
var SpacesClient = class {
  client;
  /**
   * Creates a new spaces client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getByIds(ids, options = {}) {
    const paramMappings = {
      "space.fields": "spaceFields",
      "user.fields": "userFields",
      "topic.fields": "topicFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      spaceFields = [],
      expansions = [],
      userFields = [],
      topicFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/spaces";
    const params = new URLSearchParams();
    if (ids !== void 0 && ids.length > 0) {
      params.append("ids", ids.join(","));
    }
    if (spaceFields !== void 0 && spaceFields.length > 0) {
      params.append("space.fields", normalizeFields2(spaceFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (topicFields !== void 0 && topicFields.length > 0) {
      params.append("topic.fields", normalizeFields2(topicFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["space.read", "tweet.read", "users.read"]
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getPosts(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/spaces/{id}/tweets";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["space.read", "tweet.read", "users.read"]
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async search(query, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "space.fields": "spaceFields",
      "user.fields": "userFields",
      "topic.fields": "topicFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      state = void 0,
      maxResults = void 0,
      spaceFields = [],
      expansions = [],
      userFields = [],
      topicFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/spaces/search";
    const params = new URLSearchParams();
    if (query !== void 0) {
      params.append("query", String(query));
    }
    if (state !== void 0) {
      params.append("state", String(state));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (spaceFields !== void 0 && spaceFields.length > 0) {
      params.append("space.fields", normalizeFields2(spaceFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (topicFields !== void 0 && topicFields.length > 0) {
      params.append("topic.fields", normalizeFields2(topicFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["space.read", "tweet.read", "users.read"]
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getBuyers(id, options = {}) {
    const paramMappings = {
      "pagination_token": "paginationToken",
      "max_results": "maxResults",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      paginationToken = void 0,
      maxResults = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/spaces/{id}/buyers";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["space.read", "tweet.read", "users.read"]
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getById(id, options = {}) {
    const paramMappings = {
      "space.fields": "spaceFields",
      "user.fields": "userFields",
      "topic.fields": "topicFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      spaceFields = [],
      expansions = [],
      userFields = [],
      topicFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/spaces/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (spaceFields !== void 0 && spaceFields.length > 0) {
      params.append("space.fields", normalizeFields2(spaceFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (topicFields !== void 0 && topicFields.length > 0) {
      params.append("topic.fields", normalizeFields2(topicFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["space.read", "tweet.read", "users.read"]
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getByCreatorIds(userIds, options = {}) {
    const paramMappings = {
      "space.fields": "spaceFields",
      "user.fields": "userFields",
      "topic.fields": "topicFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      spaceFields = [],
      expansions = [],
      userFields = [],
      topicFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/spaces/by/creator_ids";
    const params = new URLSearchParams();
    if (userIds !== void 0 && userIds.length > 0) {
      params.append("user_ids", userIds.join(","));
    }
    if (spaceFields !== void 0 && spaceFields.length > 0) {
      params.append("space.fields", normalizeFields2(spaceFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (topicFields !== void 0 && topicFields.length > 0) {
      params.append("topic.fields", normalizeFields2(topicFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["space.read", "tweet.read", "users.read"]
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/spaces/models.ts
var models_exports8 = {};

// src/activity/client.ts
var ActivityClient = class {
  client;
  /**
   * Creates a new activity client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getSubscriptions() {
    let path = "/2/activity/subscriptions";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createSubscription(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/activity/subscriptions";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async stream(options = {}) {
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/activity/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async updateSubscription(subscriptionId, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/activity/subscriptions/{subscription_id}";
    path = path.replace("{subscription_id}", encodeURIComponent(String(subscriptionId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "PUT",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async deleteSubscription(subscriptionId) {
    let path = "/2/activity/subscriptions/{subscription_id}";
    path = path.replace("{subscription_id}", encodeURIComponent(String(subscriptionId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/activity/models.ts
var models_exports9 = {};

// src/usage/client.ts
var UsageClient = class {
  client;
  /**
   * Creates a new usage client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async get(options = {}) {
    const paramMappings = {
      "usage.fields": "usageFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      days = void 0,
      usageFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/usage/tweets";
    const params = new URLSearchParams();
    if (days !== void 0) {
      params.append("days", String(days));
    }
    if (usageFields !== void 0 && usageFields.length > 0) {
      params.append("usage.fields", normalizeFields2(usageFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/usage/models.ts
var models_exports10 = {};

// src/trends/client.ts
var TrendsClient = class {
  client;
  /**
   * Creates a new trends client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getByWoeid(woeid, options = {}) {
    const paramMappings = {
      "max_trends": "maxTrends",
      "trend.fields": "trendFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxTrends = void 0,
      trendFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/trends/by/woeid/{woeid}";
    path = path.replace("{woeid}", encodeURIComponent(String(woeid)));
    const params = new URLSearchParams();
    if (maxTrends !== void 0) {
      params.append("max_trends", String(maxTrends));
    }
    if (trendFields !== void 0 && trendFields.length > 0) {
      params.append("trend.fields", normalizeFields2(trendFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getPersonalized(options = {}) {
    const paramMappings = {
      "personalized_trend.fields": "personalizedTrendFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      personalizedTrendFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/personalized_trends";
    const params = new URLSearchParams();
    if (personalizedTrendFields !== void 0 && personalizedTrendFields.length > 0) {
      params.append("personalized_trend.fields", normalizeFields2(personalizedTrendFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/trends/models.ts
var models_exports11 = {};

// src/posts/client.ts
var PostsClient = class {
  client;
  /**
   * Creates a new posts client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getInsights28hr(tweetIds, granularity, requestedMetrics, options = {}) {
    const paramMappings = {
      "engagement.fields": "engagementFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      engagementFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/insights/28hr";
    const params = new URLSearchParams();
    if (tweetIds !== void 0 && tweetIds.length > 0) {
      params.append("tweet_ids", tweetIds.join(","));
    }
    if (granularity !== void 0) {
      params.append("granularity", String(granularity));
    }
    if (requestedMetrics !== void 0 && requestedMetrics.length > 0) {
      params.append("requested_metrics", requestedMetrics.join(","));
    }
    if (engagementFields !== void 0 && engagementFields.length > 0) {
      params.append("engagement.fields", normalizeFields2(engagementFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getAnalytics(ids, endTime, startTime, granularity, options = {}) {
    const paramMappings = {
      "analytics.fields": "analyticsFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      analyticsFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/analytics";
    const params = new URLSearchParams();
    if (ids !== void 0 && ids.length > 0) {
      params.append("ids", ids.join(","));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (granularity !== void 0) {
      params.append("granularity", String(granularity));
    }
    if (analyticsFields !== void 0 && analyticsFields.length > 0) {
      params.append("analytics.fields", normalizeFields2(analyticsFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getReposts(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/{id}/retweets";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async searchRecent(query, options = {}) {
    const paramMappings = {
      "start_time": "startTime",
      "end_time": "endTime",
      "since_id": "sinceId",
      "until_id": "untilId",
      "max_results": "maxResults",
      "next_token": "nextToken",
      "pagination_token": "paginationToken",
      "sort_order": "sortOrder",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      startTime = void 0,
      endTime = void 0,
      sinceId = void 0,
      untilId = void 0,
      maxResults = void 0,
      nextToken = void 0,
      paginationToken = void 0,
      sortOrder = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/search/recent";
    const params = new URLSearchParams();
    if (query !== void 0) {
      params.append("query", String(query));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (sinceId !== void 0) {
      params.append("since_id", String(sinceId));
    }
    if (untilId !== void 0) {
      params.append("until_id", String(untilId));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (nextToken !== void 0) {
      params.append("next_token", String(nextToken));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (sortOrder !== void 0) {
      params.append("sort_order", String(sortOrder));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async searchAll(query, options = {}) {
    const paramMappings = {
      "start_time": "startTime",
      "end_time": "endTime",
      "since_id": "sinceId",
      "until_id": "untilId",
      "max_results": "maxResults",
      "next_token": "nextToken",
      "pagination_token": "paginationToken",
      "sort_order": "sortOrder",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      startTime = void 0,
      endTime = void 0,
      sinceId = void 0,
      untilId = void 0,
      maxResults = void 0,
      nextToken = void 0,
      paginationToken = void 0,
      sortOrder = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/search/all";
    const params = new URLSearchParams();
    if (query !== void 0) {
      params.append("query", String(query));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (sinceId !== void 0) {
      params.append("since_id", String(sinceId));
    }
    if (untilId !== void 0) {
      params.append("until_id", String(untilId));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (nextToken !== void 0) {
      params.append("next_token", String(nextToken));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (sortOrder !== void 0) {
      params.append("sort_order", String(sortOrder));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getByIds(ids, options = {}) {
    const paramMappings = {
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets";
    const params = new URLSearchParams();
    if (ids !== void 0 && ids.length > 0) {
      params.append("ids", ids.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async create(body) {
    let path = "/2/tweets";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: JSON.stringify(transformKeysToSnake(body || {})),
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "tweet.write", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getQuoted(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      exclude = [],
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/{id}/quote_tweets";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (exclude !== void 0 && exclude.length > 0) {
      params.append("exclude", exclude.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getCountsRecent(query, options = {}) {
    const paramMappings = {
      "start_time": "startTime",
      "end_time": "endTime",
      "since_id": "sinceId",
      "until_id": "untilId",
      "next_token": "nextToken",
      "pagination_token": "paginationToken",
      "search_count.fields": "searchCountFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      startTime = void 0,
      endTime = void 0,
      sinceId = void 0,
      untilId = void 0,
      nextToken = void 0,
      paginationToken = void 0,
      granularity = void 0,
      searchCountFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/counts/recent";
    const params = new URLSearchParams();
    if (query !== void 0) {
      params.append("query", String(query));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (sinceId !== void 0) {
      params.append("since_id", String(sinceId));
    }
    if (untilId !== void 0) {
      params.append("until_id", String(untilId));
    }
    if (nextToken !== void 0) {
      params.append("next_token", String(nextToken));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (granularity !== void 0) {
      params.append("granularity", String(granularity));
    }
    if (searchCountFields !== void 0 && searchCountFields.length > 0) {
      params.append("search_count.fields", normalizeFields2(searchCountFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async hideReply(tweetId, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/{tweet_id}/hidden";
    path = path.replace("{tweet_id}", encodeURIComponent(String(tweetId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.moderate.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "PUT",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getInsightsHistorical(tweetIds, endTime, startTime, granularity, requestedMetrics, options = {}) {
    const paramMappings = {
      "engagement.fields": "engagementFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      engagementFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/insights/historical";
    const params = new URLSearchParams();
    if (tweetIds !== void 0 && tweetIds.length > 0) {
      params.append("tweet_ids", tweetIds.join(","));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (granularity !== void 0) {
      params.append("granularity", String(granularity));
    }
    if (requestedMetrics !== void 0 && requestedMetrics.length > 0) {
      params.append("requested_metrics", requestedMetrics.join(","));
    }
    if (engagementFields !== void 0 && engagementFields.length > 0) {
      params.append("engagement.fields", normalizeFields2(engagementFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getCountsAll(query, options = {}) {
    const paramMappings = {
      "start_time": "startTime",
      "end_time": "endTime",
      "since_id": "sinceId",
      "until_id": "untilId",
      "next_token": "nextToken",
      "pagination_token": "paginationToken",
      "search_count.fields": "searchCountFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      startTime = void 0,
      endTime = void 0,
      sinceId = void 0,
      untilId = void 0,
      nextToken = void 0,
      paginationToken = void 0,
      granularity = void 0,
      searchCountFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/counts/all";
    const params = new URLSearchParams();
    if (query !== void 0) {
      params.append("query", String(query));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (sinceId !== void 0) {
      params.append("since_id", String(sinceId));
    }
    if (untilId !== void 0) {
      params.append("until_id", String(untilId));
    }
    if (nextToken !== void 0) {
      params.append("next_token", String(nextToken));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (granularity !== void 0) {
      params.append("granularity", String(granularity));
    }
    if (searchCountFields !== void 0 && searchCountFields.length > 0) {
      params.append("search_count.fields", normalizeFields2(searchCountFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getById(id, options = {}) {
    const paramMappings = {
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async delete(id) {
    let path = "/2/tweets/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "tweet.write", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getLikingUsers(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/{id}/liking_users";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["like.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getRepostedBy(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/{id}/retweeted_by";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/posts/models.ts
var models_exports12 = {};

// src/direct_messages/client.ts
var DirectMessagesClient = class {
  client;
  /**
   * Creates a new direct messages client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async createByConversationId(dmConversationId, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/dm_conversations/{dm_conversation_id}/messages";
    path = path.replace("{dm_conversation_id}", encodeURIComponent(String(dmConversationId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getEventsByConversationId(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "event_types": "eventTypes",
      "dm_event.fields": "dmEventFields",
      "media.fields": "mediaFields",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      eventTypes = [],
      dmEventFields = [],
      expansions = [],
      mediaFields = [],
      userFields = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/dm_conversations/{id}/dm_events";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (eventTypes !== void 0 && eventTypes.length > 0) {
      params.append("event_types", eventTypes.join(","));
    }
    if (dmEventFields !== void 0 && dmEventFields.length > 0) {
      params.append("dm_event.fields", normalizeFields2(dmEventFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createConversation(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/dm_conversations";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getEventsByParticipantId(participantId, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "event_types": "eventTypes",
      "dm_event.fields": "dmEventFields",
      "media.fields": "mediaFields",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      eventTypes = [],
      dmEventFields = [],
      expansions = [],
      mediaFields = [],
      userFields = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/dm_conversations/with/{participant_id}/dm_events";
    path = path.replace("{participant_id}", encodeURIComponent(String(participantId)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (eventTypes !== void 0 && eventTypes.length > 0) {
      params.append("event_types", eventTypes.join(","));
    }
    if (dmEventFields !== void 0 && dmEventFields.length > 0) {
      params.append("dm_event.fields", normalizeFields2(dmEventFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getEvents(options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "event_types": "eventTypes",
      "dm_event.fields": "dmEventFields",
      "media.fields": "mediaFields",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      eventTypes = [],
      dmEventFields = [],
      expansions = [],
      mediaFields = [],
      userFields = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/dm_events";
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (eventTypes !== void 0 && eventTypes.length > 0) {
      params.append("event_types", eventTypes.join(","));
    }
    if (dmEventFields !== void 0 && dmEventFields.length > 0) {
      params.append("dm_event.fields", normalizeFields2(dmEventFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getEventsById(eventId, options = {}) {
    const paramMappings = {
      "dm_event.fields": "dmEventFields",
      "media.fields": "mediaFields",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      dmEventFields = [],
      expansions = [],
      mediaFields = [],
      userFields = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/dm_events/{event_id}";
    path = path.replace("{event_id}", encodeURIComponent(String(eventId)));
    const params = new URLSearchParams();
    if (dmEventFields !== void 0 && dmEventFields.length > 0) {
      params.append("dm_event.fields", normalizeFields2(dmEventFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async deleteEvents(eventId) {
    let path = "/2/dm_events/{event_id}";
    path = path.replace("{event_id}", encodeURIComponent(String(eventId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.read", "dm.write"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createByParticipantId(participantId, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/dm_conversations/with/{participant_id}/messages";
    path = path.replace("{participant_id}", encodeURIComponent(String(participantId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["dm.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/direct_messages/models.ts
var models_exports13 = {};

// src/communities/client.ts
var CommunitiesClient = class {
  client;
  /**
   * Creates a new communities client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async search(query, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "next_token": "nextToken",
      "pagination_token": "paginationToken",
      "community.fields": "communityFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      nextToken = void 0,
      paginationToken = void 0,
      communityFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/communities/search";
    const params = new URLSearchParams();
    if (query !== void 0) {
      params.append("query", String(query));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (nextToken !== void 0) {
      params.append("next_token", String(nextToken));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (communityFields !== void 0 && communityFields.length > 0) {
      params.append("community.fields", normalizeFields2(communityFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getById(id, options = {}) {
    const paramMappings = {
      "community.fields": "communityFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      communityFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/communities/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (communityFields !== void 0 && communityFields.length > 0) {
      params.append("community.fields", normalizeFields2(communityFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["list.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/communities/models.ts
var models_exports14 = {};

// src/media/client.ts
var MediaClient = class {
  client;
  /**
   * Creates a new media client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getByKey(mediaKey, options = {}) {
    const paramMappings = {
      "media.fields": "mediaFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      mediaFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media/{media_key}";
    path = path.replace("{media_key}", encodeURIComponent(String(mediaKey)));
    const params = new URLSearchParams();
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getUploadStatus(mediaId, options = {}) {
    const paramMappings = {};
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      command = void 0,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media/upload";
    const params = new URLSearchParams();
    if (mediaId !== void 0) {
      params.append("media_id", String(mediaId));
    }
    if (command !== void 0) {
      params.append("command", String(command));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["media.write"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async upload(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media/upload";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["media.write"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getAnalytics(mediaKeys, endTime, startTime, granularity, options = {}) {
    const paramMappings = {
      "media_analytics.fields": "mediaAnalyticsFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      mediaAnalyticsFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media/analytics";
    const params = new URLSearchParams();
    if (mediaKeys !== void 0 && mediaKeys.length > 0) {
      params.append("media_keys", mediaKeys.join(","));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (granularity !== void 0) {
      params.append("granularity", String(granularity));
    }
    if (mediaAnalyticsFields !== void 0 && mediaAnalyticsFields.length > 0) {
      params.append("media_analytics.fields", normalizeFields2(mediaAnalyticsFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["tweet.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async appendUpload(id, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media/upload/{id}/append";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["media.write"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getByKeys(mediaKeys, options = {}) {
    const paramMappings = {
      "media.fields": "mediaFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      mediaFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media";
    const params = new URLSearchParams();
    if (mediaKeys !== void 0 && mediaKeys.length > 0) {
      params.append("media_keys", mediaKeys.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["tweet.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createMetadata(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media/metadata";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["media.write"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async finalizeUpload(id) {
    let path = "/2/media/upload/{id}/finalize";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["media.write"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async initializeUpload(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media/upload/initialize";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["media.write"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createSubtitles(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media/subtitles";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["media.write"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async deleteSubtitles(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/media/subtitles";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["media.write"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/media/models.ts
var models_exports15 = {};

// src/webhooks/client.ts
var WebhooksClient = class {
  client;
  /**
   * Creates a new webhooks client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async createStreamLink(webhookId, options = {}) {
    const paramMappings = {
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      tweetFields = void 0,
      expansions = void 0,
      mediaFields = void 0,
      pollFields = void 0,
      userFields = void 0,
      placeFields = void 0,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/search/webhooks/{webhook_id}";
    path = path.replace("{webhook_id}", encodeURIComponent(String(webhookId)));
    const params = new URLSearchParams();
    if (tweetFields !== void 0) {
      params.append("tweet.fields", String(tweetFields));
    }
    if (expansions !== void 0) {
      params.append("expansions", String(expansions));
    }
    if (mediaFields !== void 0) {
      params.append("media.fields", String(mediaFields));
    }
    if (pollFields !== void 0) {
      params.append("poll.fields", String(pollFields));
    }
    if (userFields !== void 0) {
      params.append("user.fields", String(userFields));
    }
    if (placeFields !== void 0) {
      params.append("place.fields", String(placeFields));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async deleteStreamLink(webhookId) {
    let path = "/2/tweets/search/webhooks/{webhook_id}";
    path = path.replace("{webhook_id}", encodeURIComponent(String(webhookId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getStreamLinks() {
    let path = "/2/tweets/search/webhooks";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async createWebhookReplayJob(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/webhooks/replay";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async validate(webhookId) {
    let path = "/2/webhooks/{webhook_id}";
    path = path.replace("{webhook_id}", encodeURIComponent(String(webhookId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "PUT",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async delete(webhookId) {
    let path = "/2/webhooks/{webhook_id}";
    path = path.replace("{webhook_id}", encodeURIComponent(String(webhookId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async get(options = {}) {
    const paramMappings = {
      "webhook_config.fields": "webhookConfigFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      webhookConfigFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/webhooks";
    const params = new URLSearchParams();
    if (webhookConfigFields !== void 0 && webhookConfigFields.length > 0) {
      params.append("webhook_config.fields", normalizeFields2(webhookConfigFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async create(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/webhooks";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/webhooks/models.ts
var models_exports16 = {};

// src/stream/event_driven_stream.ts
var StreamEvent = {
  Data: "data",
  // When JSON data arrives
  KeepAlive: "keepAlive",
  // 20-second heartbeat (newline character)
  Error: "error",
  // HTTP errors, ConnectionException, operational-disconnect
  Close: "close"
  // When stream ends
};
var EventDrivenStream = class {
  webStream = null;
  reader = null;
  decoder;
  isConnected = false;
  isClosed = false;
  buffer = "";
  eventListeners = /* @__PURE__ */ new Map();
  autoReconnect = false;
  reconnectAttempts = 0;
  maxReconnectAttempts = 5;
  reconnectDelay = 1e3;
  constructor() {
    this.decoder = new TextDecoder();
    this.setupEventListeners();
  }
  /**
   * Initialize the stream with a Web ReadableStream
   */
  async connect(webStream) {
    if (this.isConnected) {
      throw new Error("Stream is already connected");
    }
    this.webStream = webStream;
    this.isConnected = true;
    this.isClosed = false;
    this.reconnectAttempts = 0;
    this.emit(StreamEvent.Data, { message: "Stream connected" });
    this.startReading();
  }
  /**
   * Start reading from the stream
   */
  async startReading() {
    if (!this.webStream || !this.isConnected) {
      return;
    }
    this.reader = this.webStream.getReader();
    try {
      while (this.isConnected && !this.isClosed) {
        const { done, value } = await this.reader.read();
        if (done) {
          this.handleConnectionClosed();
          break;
        }
        if (value) {
          await this.processChunk(value);
        }
      }
    } catch (error) {
      this.handleConnectionError(error);
    } finally {
      this.cleanup();
    }
  }
  /**
   * Process incoming data chunks
   */
  async processChunk(value) {
    const chunk = this.decoder.decode(value, { stream: true });
    this.buffer += chunk;
    let boundary;
    while ((boundary = this.buffer.indexOf("\n")) !== -1) {
      const line = this.buffer.substring(0, boundary);
      this.buffer = this.buffer.substring(boundary + 1);
      if (line.trim()) {
        try {
          const data = JSON.parse(line);
          if (this.isKeepAlive(data)) {
            this.emit(StreamEvent.KeepAlive, { data });
            continue;
          }
          this.emit(StreamEvent.Data, data);
        } catch (parseError) {
          console.warn("Skipping invalid JSON:", line.substring(0, 100));
        }
      }
    }
  }
  /**
   * Check if data is a keep-alive signal (20-second heartbeat)
   * Twitter sends newline characters every 20 seconds to prevent timeouts
   */
  isKeepAlive(data) {
    return !data.data && !data.includes && !data.matching_rules && !data.errors;
  }
  /**
   * Handle connection errors
   */
  handleConnectionError(error) {
    this.isConnected = false;
    this.emit(StreamEvent.Error, { error });
    if (this.autoReconnect && this.reconnectAttempts < this.maxReconnectAttempts) {
      this.attemptReconnect();
    }
  }
  /**
   * Handle connection closed
   */
  handleConnectionClosed() {
    this.isConnected = false;
    this.emit(StreamEvent.Close, { message: "Connection closed" });
  }
  /**
   * Attempt to reconnect
   */
  async attemptReconnect() {
    this.reconnectAttempts++;
    this.emit(StreamEvent.Data, {
      message: `Reconnect attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts}`
    });
    await new Promise((resolve) => setTimeout(resolve, this.reconnectDelay * this.reconnectAttempts));
    try {
      this.emit(StreamEvent.Error, {
        error: new Error("Reconnect not implemented in this example")
      });
    } catch (error) {
      this.emit(StreamEvent.Error, { error });
    }
  }
  /**
   * Clean up resources
   */
  cleanup() {
    if (this.reader) {
      try {
        this.reader.releaseLock();
      } catch (error) {
        console.debug("Reader lock already released or error:", error);
      }
      this.reader = null;
    }
    this.buffer = "";
  }
  /**
   * Close the stream
   */
  close() {
    this.isClosed = true;
    this.isConnected = false;
    this.cleanup();
    this.emit(StreamEvent.Close, { message: "Stream closed by user" });
  }
  /**
   * Add event listener
   */
  on(event, listener) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event).push(listener);
    return this;
  }
  /**
   * Remove event listener
   */
  off(event, listener) {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
    return this;
  }
  /**
   * Emit event to listeners
   */
  emit(event, data) {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.forEach((listener) => {
        try {
          listener(data);
        } catch (error) {
          console.error(`Error in ${event} listener:`, error);
        }
      });
    }
  }
  /**
   * Setup default event listeners
   */
  setupEventListeners() {
    this.on(StreamEvent.Error, (eventData) => {
      console.error("Stream error:", eventData.error);
    });
  }
  /**
   * Enable/disable auto-reconnect
   */
  set autoReconnectEnabled(enabled) {
    this.autoReconnect = enabled;
  }
  get autoReconnectEnabled() {
    return this.autoReconnect;
  }
  /**
   * Set max reconnect attempts
   */
  set maxReconnectAttemptsCount(count) {
    this.maxReconnectAttempts = count;
  }
  get maxReconnectAttemptsCount() {
    return this.maxReconnectAttempts;
  }
  /**
   * Async iterator for tweets
   */
  async *[Symbol.asyncIterator]() {
    const dataQueue = [];
    let isComplete = false;
    let hasError = false;
    let error = null;
    const dataListener = (eventData) => {
      dataQueue.push(eventData);
    };
    const errorListener = (eventData) => {
      hasError = true;
      error = eventData.error;
    };
    const closeListener = () => {
      isComplete = true;
    };
    this.on(StreamEvent.Data, dataListener);
    this.on(StreamEvent.Error, errorListener);
    this.on(StreamEvent.Close, closeListener);
    try {
      while (!isComplete && !hasError) {
        if (dataQueue.length > 0) {
          yield dataQueue.shift();
        } else {
          await new Promise((resolve) => setTimeout(resolve, 10));
        }
      }
      if (hasError && error) {
        throw error;
      }
    } finally {
      this.off(StreamEvent.Data, dataListener);
      this.off(StreamEvent.Error, errorListener);
      this.off(StreamEvent.Close, closeListener);
    }
  }
};

// src/stream/stream_client.ts
var StreamClient = class {
  client;
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  /**
       * Stream Likes compliance data
       * Streams all compliance data related to Likes for Users.
       * 
       * Returns an event-driven stream that's easy to use.
       * Use .on() to listen for events like 'data', 'error', 'close'.
       * Also supports async iteration with for await...of.
  
  
  
       * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
       */
  async likesCompliance(options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "likesCompliance");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/likes/compliance/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async usersCompliance(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "usersCompliance");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/users/compliance/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async postsFirehoseKo(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "postsFirehoseKo");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/firehose/stream/lang/ko";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", mediaFields.join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", pollFields.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", placeFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async likesSample10(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "likesSample10");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime",
      "like_with_tweet_author.fields": "likeWithTweetAuthorFields",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      likeWithTweetAuthorFields = [],
      expansions = [],
      userFields = [],
      tweetFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/likes/sample10/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (likeWithTweetAuthorFields !== void 0 && likeWithTweetAuthorFields.length > 0) {
      params.append("like_with_tweet_author.fields", likeWithTweetAuthorFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async likesFirehose(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "likesFirehose");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime",
      "like_with_tweet_author.fields": "likeWithTweetAuthorFields",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      likeWithTweetAuthorFields = [],
      expansions = [],
      userFields = [],
      tweetFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/likes/firehose/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (likeWithTweetAuthorFields !== void 0 && likeWithTweetAuthorFields.length > 0) {
      params.append("like_with_tweet_author.fields", likeWithTweetAuthorFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async postsFirehoseJa(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "postsFirehoseJa");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/firehose/stream/lang/ja";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", mediaFields.join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", pollFields.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", placeFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async postsFirehoseEn(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "postsFirehoseEn");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/firehose/stream/lang/en";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", mediaFields.join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", pollFields.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", placeFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
  /**
       * Stream sampled Posts
       * Streams a 1% sample of public Posts in real-time.
       * 
       * Returns an event-driven stream that's easy to use.
       * Use .on() to listen for events like 'data', 'error', 'close'.
       * Also supports async iteration with for await...of.
  
  
  
       * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
       */
  async postsSample(options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "postsSample");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/sample/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", mediaFields.join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", pollFields.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", placeFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async postsSample10(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "postsSample10");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/sample10/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", mediaFields.join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", pollFields.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", placeFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async postsCompliance(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "postsCompliance");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/compliance/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
  /**
       * Stream Post labels
       * Streams all labeling events applied to Posts.
       * 
       * Returns an event-driven stream that's easy to use.
       * Use .on() to listen for events like 'data', 'error', 'close'.
       * Also supports async iteration with for await...of.
  
  
  
       * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
       */
  async labelsCompliance(options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "labelsCompliance");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/label/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
  /**
       * Stream filtered Posts
       * Streams Posts in real-time matching the active rule set.
       * 
       * Returns an event-driven stream that's easy to use.
       * Use .on() to listen for events like 'data', 'error', 'close'.
       * Also supports async iteration with for await...of.
  
  
  
       * @returns {Promise<EventDrivenStream>} Event-driven stream for handling streaming data
       */
  async posts(options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "posts");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/search/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", mediaFields.join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", pollFields.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", placeFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async postsFirehose(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "postsFirehose");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/firehose/stream";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", mediaFields.join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", pollFields.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", placeFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
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
  async postsFirehosePt(partition, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "postsFirehosePt");
    const paramMappings = {
      "backfill_minutes": "backfillMinutes",
      "start_time": "startTime",
      "end_time": "endTime",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      backfillMinutes = void 0,
      startTime = void 0,
      endTime = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/firehose/stream/lang/pt";
    const params = new URLSearchParams();
    if (backfillMinutes !== void 0) {
      params.append("backfill_minutes", String(backfillMinutes));
    }
    if (partition !== void 0) {
      params.append("partition", String(partition));
    }
    if (startTime !== void 0) {
      params.append("start_time", String(startTime));
    }
    if (endTime !== void 0) {
      params.append("end_time", String(endTime));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", tweetFields.join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", mediaFields.join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", pollFields.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", userFields.join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", placeFields.join(","));
    }
    const url = path + (params.toString() ? `?${params.toString()}` : "");
    const response = await this.client.request(
      "GET",
      url,
      {
        headers: {
          "Content-Type": "application/json",
          ...headers
        },
        // Pass security requirements for smart auth selection
        security: [
          {
            "BearerToken": []
          }
        ],
        signal,
        raw: true,
        // Get raw Response object for streaming
        timeout: 0,
        // Disable timeout for streaming requests
        ...requestOptions
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${response.statusText}`
      );
    }
    if (!response.body) {
      throw new Error("Response body is not available for streaming");
    }
    const eventStream = new EventDrivenStream();
    await eventStream.connect(response.body);
    return eventStream;
  }
  /**
   * Get stream rule counts
   * Retrieves the count of rules in the active rule set for the filtered stream.
   * 
   * @returns Promise with the API response
   */
  async getRuleCounts(options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "getRuleCounts");
    const paramMappings = {
      "rules_count.fields": "rulesCountFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      rulesCountFields = [],
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/search/stream/rules/counts";
    const params = new URLSearchParams();
    if (rulesCountFields !== void 0 && rulesCountFields.length > 0) {
      params.append("rules_count.fields", rulesCountFields.join(","));
    }
    const finalRequestOptions = {
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      signal,
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  /**
   * Get stream rules
   * Retrieves the active rule set or a subset of rules for the filtered stream.
   * 
   * @returns Promise with the API response
   */
  async getRules(options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "getRules");
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      ids = [],
      maxResults = void 0,
      paginationToken = void 0,
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/search/stream/rules";
    const params = new URLSearchParams();
    if (ids !== void 0 && ids.length > 0) {
      params.append("ids", ids.join(","));
    }
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    const finalRequestOptions = {
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      signal,
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  /**
   * Update stream rules
   * Adds or deletes rules from the active rule set for the filtered stream.
   * 
   * @returns Promise with the API response
   */
  async updateRules(body, options = {}) {
    const requiredAuthTypes = [];
    requiredAuthTypes.push("BearerToken");
    this.client.validateAuthentication(requiredAuthTypes, "updateRules");
    const paramMappings = {
      "dry_run": "dryRun",
      "delete_all": "deleteAll"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      dryRun = void 0,
      deleteAll = void 0,
      headers = {},
      signal,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/tweets/search/stream/rules";
    const params = new URLSearchParams();
    if (dryRun !== void 0) {
      params.append("dry_run", String(dryRun));
    }
    if (deleteAll !== void 0) {
      params.append("delete_all", String(deleteAll));
    }
    const finalRequestOptions = {
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      signal,
      body: JSON.stringify(body),
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/lists/client.ts
var ListsClient = class {
  client;
  /**
   * Creates a new lists client instance
   * 
   * @param client - The main X API client instance
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * Normalize options object to handle both camelCase and original API parameter names
   * Only accepts: proper camelCase (tweetFields) and original API format (tweet.fields)
   */
  _normalizeOptions(options, paramMappings) {
    if (!options || typeof options !== "object") {
      return options;
    }
    const normalized = { ...options };
    for (const [originalName, camelName] of Object.entries(paramMappings)) {
      if (originalName in normalized && !(camelName in normalized)) {
        normalized[camelName] = normalized[originalName];
        delete normalized[originalName];
      }
    }
    return normalized;
  }
  // Implementation
  async getFollowers(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/lists/{id}/followers";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["list.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async create(options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/lists";
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.read", "list.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getMembers(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "user.fields": "userFields",
      "tweet.fields": "tweetFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      userFields = [],
      expansions = [],
      tweetFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/lists/{id}/members";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["list.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async addMember(id, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/lists/{id}/members";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "POST",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getPosts(id, options = {}) {
    const paramMappings = {
      "max_results": "maxResults",
      "pagination_token": "paginationToken",
      "tweet.fields": "tweetFields",
      "media.fields": "mediaFields",
      "poll.fields": "pollFields",
      "user.fields": "userFields",
      "place.fields": "placeFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      maxResults = void 0,
      paginationToken = void 0,
      tweetFields = [],
      expansions = [],
      mediaFields = [],
      pollFields = [],
      userFields = [],
      placeFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/lists/{id}/tweets";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (maxResults !== void 0) {
      params.append("max_results", String(maxResults));
    }
    if (paginationToken !== void 0) {
      params.append("pagination_token", String(paginationToken));
    }
    if (tweetFields !== void 0 && tweetFields.length > 0) {
      params.append("tweet.fields", normalizeFields2(tweetFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (mediaFields !== void 0 && mediaFields.length > 0) {
      params.append("media.fields", normalizeFields2(mediaFields).join(","));
    }
    if (pollFields !== void 0 && pollFields.length > 0) {
      params.append("poll.fields", normalizeFields2(pollFields).join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    if (placeFields !== void 0 && placeFields.length > 0) {
      params.append("place.fields", normalizeFields2(placeFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["list.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async removeMemberByUserId(id, userId) {
    let path = "/2/lists/{id}/members/{user_id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    path = path.replace("{user_id}", encodeURIComponent(String(userId)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async getById(id, options = {}) {
    const paramMappings = {
      "list.fields": "listFields",
      "user.fields": "userFields"
    };
    const normalizedOptions = this._normalizeOptions(options || {}, paramMappings);
    const {
      listFields = [],
      expansions = [],
      userFields = [],
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/lists/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    if (listFields !== void 0 && listFields.length > 0) {
      params.append("list.fields", normalizeFields2(listFields).join(","));
    }
    if (expansions !== void 0 && expansions.length > 0) {
      params.append("expansions", expansions.join(","));
    }
    if (userFields !== void 0 && userFields.length > 0) {
      params.append("user.fields", normalizeFields2(userFields).join(","));
    }
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "BearerToken": []
        },
        {
          "OAuth2UserToken": ["list.read", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "GET",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async update(id, options = {}) {
    const normalizedOptions = options || {};
    const {
      body,
      requestOptions = {}
    } = normalizedOptions;
    let path = "/2/lists/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      body: body ? JSON.stringify(transformKeysToSnake(body)) : void 0,
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ],
      ...requestOptions
    };
    return this.client.request(
      "PUT",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
  // Implementation
  async delete(id) {
    let path = "/2/lists/{id}";
    path = path.replace("{id}", encodeURIComponent(String(id)));
    const params = new URLSearchParams();
    const finalRequestOptions = {
      // Pass security requirements for smart auth selection
      security: [
        {
          "OAuth2UserToken": ["list.write", "tweet.read", "users.read"]
        },
        {
          "UserToken": []
        }
      ]
      // No optional parameters, using empty request options
    };
    return this.client.request(
      "DELETE",
      path + (params.toString() ? `?${params.toString()}` : ""),
      finalRequestOptions
    );
  }
};

// src/lists/models.ts
var models_exports17 = {};

// src/client.ts
var ApiError = class extends Error {
  status;
  statusText;
  headers;
  data;
  constructor(message, status, statusText, headers, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.headers = headers;
    this.data = data;
  }
};
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
function camelToSnake(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
function normalizeFields2(fields) {
  return fields.map((field) => {
    if (field.includes("_")) {
      return field;
    }
    return camelToSnake(field);
  });
}
function transformKeys(obj) {
  if (obj === null || obj === void 0) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => transformKeys(item));
  }
  if (typeof obj === "object") {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      const camelKey = snakeToCamel(key);
      result[camelKey] = transformKeys(value);
    }
    return result;
  }
  return obj;
}
function transformKeysToSnake(obj) {
  if (obj === null || obj === void 0) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => transformKeysToSnake(item));
  }
  if (typeof obj === "object") {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      const snakeKey = camelToSnake(key);
      result[snakeKey] = transformKeysToSnake(value);
    }
    return result;
  }
  return obj;
}
var Client17 = class {
  /** Base URL for API requests */
  baseUrl;
  /** Bearer token for authentication */
  bearerToken;
  /** OAuth2 access token */
  accessToken;
  /** OAuth1 instance for authentication */
  oauth1;
  /** Headers for requests */
  headers;
  /** Request timeout in milliseconds */
  timeout;
  /** Whether to automatically retry failed requests */
  retry;
  /** Maximum number of retry attempts */
  maxRetries;
  /** HTTP client for making requests */
  httpClient = httpClient;
  /** general client */
  general;
  /** account activity client */
  accountActivity;
  /** community notes client */
  communityNotes;
  /** compliance client */
  compliance;
  /** connections client */
  connections;
  /** users client */
  users;
  /** news client */
  news;
  /** spaces client */
  spaces;
  /** activity client */
  activity;
  /** usage client */
  usage;
  /** trends client */
  trends;
  /** posts client */
  posts;
  /** direct messages client */
  directMessages;
  /** communities client */
  communities;
  /** media client */
  media;
  /** webhooks client */
  webhooks;
  /** stream client */
  stream;
  /** lists client */
  lists;
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
  constructor(config) {
    if (config && typeof config === "object" && config.accessToken && config.accessToken.accessToken && config.accessToken.accessTokenSecret) {
      this.oauth1 = config;
      this.baseUrl = "https://api.x.com";
    } else {
      const clientConfig = config;
      this.baseUrl = clientConfig.baseUrl || "https://api.x.com";
      this.bearerToken = clientConfig.bearerToken;
      this.accessToken = clientConfig.accessToken;
      this.oauth1 = clientConfig.oauth1;
    }
    this.timeout = config.timeout || 3e4;
    this.retry = config.retry ?? true;
    this.maxRetries = config.maxRetries || 3;
    const defaultHeaders = {
      "User-Agent": "xdk-typescript/0.4.0",
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...config.headers || {}
    };
    this.headers = httpClient.createHeaders(defaultHeaders);
    this.general = new GeneralClient(this);
    this.accountActivity = new AccountActivityClient(this);
    this.communityNotes = new CommunityNotesClient(this);
    this.compliance = new ComplianceClient(this);
    this.connections = new ConnectionsClient(this);
    this.users = new UsersClient(this);
    this.news = new NewsClient(this);
    this.spaces = new SpacesClient(this);
    this.activity = new ActivityClient(this);
    this.usage = new UsageClient(this);
    this.trends = new TrendsClient(this);
    this.posts = new PostsClient(this);
    this.directMessages = new DirectMessagesClient(this);
    this.communities = new CommunitiesClient(this);
    this.media = new MediaClient(this);
    this.webhooks = new WebhooksClient(this);
    this.stream = new StreamClient(this);
    this.lists = new ListsClient(this);
  }
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
  async request(method, path, options = {}) {
    const url = `${this.baseUrl}${path}`;
    const headers = new Headers(this.headers);
    const selectedAuth = this.selectAuthMethod(method, options.security);
    if (selectedAuth === "bearer_token" && this.bearerToken) {
      headers.set("Authorization", `Bearer ${this.bearerToken}`);
    } else if (selectedAuth === "oauth2_user_context" && this.accessToken) {
      headers.set("Authorization", `Bearer ${this.accessToken}`);
    } else if (selectedAuth === "oauth1" && this.oauth1 && this.oauth1.accessToken) {
      try {
        const oauthHeader = await this.oauth1.buildRequestHeader(method, url, options.body || "");
        headers.set("Authorization", oauthHeader);
      } catch (error) {
        throw new Error(`Failed to build OAuth1 header: ${error instanceof Error ? error.message : "Unknown error"}`);
      }
    } else if (!selectedAuth) {
      const requiredSchemes = options.security ? options.security.flatMap((req) => Object.keys(req)) : [];
      if (requiredSchemes.length > 0) {
        this.validateAuthentication(requiredSchemes, path);
      }
    }
    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.set(key, value);
      });
    }
    try {
      const response = await this.httpClient.request(url, {
        method,
        headers,
        signal: options.signal,
        body: options.body,
        timeout: options.timeout !== void 0 ? options.timeout : this.timeout
      });
      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = await response.text();
        }
        throw new ApiError(
          errorData && errorData.message ? errorData.message : `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          response.statusText,
          response.headers,
          errorData
        );
      }
      if (options.raw) {
        return response;
      }
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const rawData = await response.json();
        data = transformKeys(rawData);
      } else {
        data = await response.text();
      }
      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        error instanceof Error ? error.message : "Request failed",
        0,
        "NETWORK_ERROR",
        new Headers(),
        error
      );
    }
  }
  /**
   * Check if the OAuth2 token is expired
   */
  isTokenExpired() {
    return false;
  }
  /**
   * Refresh the OAuth2 token
   */
  async refreshToken() {
  }
  /**
   * Get the current authentication status
   */
  isAuthenticated() {
    return !!(this.bearerToken || this.accessToken || this.oauth1 && this.oauth1.accessToken);
  }
  /**
   * Map OpenAPI security scheme names to internal authentication types
   * @param securitySchemeName The security scheme name from OpenAPI
   * @returns Array of internal authentication types
   */
  mapSecuritySchemeToAuthTypes(securitySchemeName) {
    const schemeMapping = {
      "BearerToken": ["bearer_token"],
      // App-only OAuth2.0
      "OAuth2UserToken": ["oauth2_user_context"],
      // OAuth2.0 User Context
      "UserToken": ["oauth1"],
      // OAuth1.0a User Context
      // Fallback mappings for common variations
      "OAuth2": ["bearer_token", "oauth2_user_context"],
      "OAuth1": ["oauth1"],
      "Bearer": ["bearer_token"],
      "OAuth2User": ["oauth2_user_context"],
      "OAuth1User": ["oauth1"]
    };
    return schemeMapping[securitySchemeName] || [securitySchemeName.toLowerCase()];
  }
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
  selectAuthMethod(method, securityRequirements) {
    if (!securityRequirements || securityRequirements.length === 0) {
      if (this.bearerToken)
        return "bearer_token";
      if (this.accessToken)
        return "oauth2_user_context";
      if (this.oauth1 && this.oauth1.accessToken)
        return "oauth1";
      return null;
    }
    const acceptableSchemes = /* @__PURE__ */ new Set();
    for (const requirement of securityRequirements) {
      for (const schemeName of Object.keys(requirement)) {
        acceptableSchemes.add(schemeName);
      }
    }
    const availableAuth = {
      "BearerToken": !!this.bearerToken,
      "OAuth2UserToken": !!this.accessToken,
      "UserToken": !!(this.oauth1 && this.oauth1.accessToken)
    };
    if (acceptableSchemes.size === 1) {
      const scheme = Array.from(acceptableSchemes)[0];
      if (availableAuth[scheme]) {
        return this.mapSecuritySchemeToAuthTypes(scheme)[0];
      }
      return null;
    }
    const isWriteOperation = ["POST", "PUT", "DELETE", "PATCH"].includes(method.toUpperCase());
    if (isWriteOperation) {
      if (acceptableSchemes.has("UserToken") && availableAuth["UserToken"]) {
        return "oauth1";
      }
      if (acceptableSchemes.has("OAuth2UserToken") && availableAuth["OAuth2UserToken"]) {
        return "oauth2_user_context";
      }
      if (acceptableSchemes.has("BearerToken") && availableAuth["BearerToken"]) {
        return "bearer_token";
      }
    } else {
      if (acceptableSchemes.has("BearerToken") && availableAuth["BearerToken"]) {
        return "bearer_token";
      }
      if (acceptableSchemes.has("OAuth2UserToken") && availableAuth["OAuth2UserToken"]) {
        return "oauth2_user_context";
      }
      if (acceptableSchemes.has("UserToken") && availableAuth["UserToken"]) {
        return "oauth1";
      }
    }
    return null;
  }
  /**
   * Validate that the required authentication method is available
   * @param requiredAuthTypes Array of required authentication types (OpenAPI security scheme names)
   * @param operationName Name of the operation for error messages
   */
  validateAuthentication(requiredAuthTypes, operationName) {
    if (requiredAuthTypes.length === 0) {
      return;
    }
    const availableAuthTypes = [];
    if (this.bearerToken) {
      availableAuthTypes.push("bearer_token");
    }
    if (this.accessToken) {
      availableAuthTypes.push("oauth2_user_context");
    }
    if (this.oauth1 && this.oauth1.accessToken) {
      availableAuthTypes.push("oauth1");
    }
    const mappedRequiredTypes = requiredAuthTypes.flatMap(
      (scheme) => this.mapSecuritySchemeToAuthTypes(scheme)
    );
    const hasRequiredAuth = mappedRequiredTypes.some(
      (required) => availableAuthTypes.includes(required)
    );
    if (!hasRequiredAuth) {
      const availableStr = availableAuthTypes.length > 0 ? availableAuthTypes.join(", ") : "none";
      const requiredStr = requiredAuthTypes.join(", ");
      throw new Error(
        `Authentication required for ${operationName}. Required: ${requiredStr}. Available: ${availableStr}. Please configure the appropriate authentication method.`
      );
    }
  }
  /**
   * Get available authentication types
   */
  getAvailableAuthTypes() {
    const authTypes = [];
    if (this.bearerToken)
      authTypes.push("bearer_token");
    if (this.accessToken)
      authTypes.push("oauth2_user_context");
    if (this.oauth1 && this.oauth1.accessToken)
      authTypes.push("oauth1");
    return authTypes;
  }
};

// src/crypto_utils.ts
var isReactNative2 = typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isNode2 = !isReactNative2 && typeof process !== "undefined" && process.versions && process.versions.node;
var CryptoUtils = class {
  /**
   * Generate HMAC-SHA1 signature
   * @param key Signing key
   * @param message Message to sign
   * @returns Base64 encoded signature
   */
  static async hmacSha1(key, message) {
    if (isReactNative2) {
      if (typeof crypto !== "undefined" && crypto.subtle) {
        try {
          return await this._webCryptoHmacSha1(key, message);
        } catch (error) {
        }
      }
      return this._polyfillHmacSha1(key, message);
    }
    if (isNode2) {
      try {
        return await this._nodeHmacSha1(key, message);
      } catch (error) {
        console.warn("Node.js crypto failed, falling back:", error);
      }
    }
    if (typeof crypto !== "undefined" && crypto.subtle) {
      try {
        return await this._webCryptoHmacSha1(key, message);
      } catch (error) {
        console.warn("Web Crypto API failed, falling back:", error);
      }
    }
    return this._polyfillHmacSha1(key, message);
  }
  /**
   * Node.js native HMAC-SHA1 implementation
   */
  static async _nodeHmacSha1(key, message) {
    const crypto2 = await import('crypto');
    const hmac = crypto2.createHmac("sha1", key);
    hmac.update(message);
    return hmac.digest("base64");
  }
  /**
   * Web Crypto API HMAC-SHA1 implementation
   */
  static async _webCryptoHmacSha1(key, message) {
    const keyBuffer = this._stringToArrayBuffer(key);
    const messageBuffer = this._stringToArrayBuffer(message);
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyBuffer,
      { name: "HMAC", hash: "SHA-1" },
      false,
      ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", cryptoKey, messageBuffer);
    return this._arrayBufferToBase64(signature);
  }
  /**
   * Polyfill HMAC-SHA1 implementation using pure JavaScript
   * This is a fallback that works everywhere including React Native
   */
  static _polyfillHmacSha1(key, message) {
    const sha1 = this._sha1;
    const blockSize = 64;
    let keyBytes = this._stringToBytes(key);
    if (keyBytes.length > blockSize) {
      keyBytes = sha1(keyBytes);
    }
    while (keyBytes.length < blockSize) {
      keyBytes.push(0);
    }
    const innerPad = [];
    const outerPad = [];
    for (let i = 0; i < blockSize; i++) {
      innerPad.push(keyBytes[i] ^ 54);
      outerPad.push(keyBytes[i] ^ 92);
    }
    const messageBytes = this._stringToBytes(message);
    const innerHash = sha1(innerPad.concat(messageBytes));
    const hmacBytes = sha1(outerPad.concat(innerHash));
    let binary = "";
    for (let i = 0; i < hmacBytes.length; i++) {
      binary += String.fromCharCode(hmacBytes[i]);
    }
    return btoa(binary);
  }
  /**
   * Pure JavaScript SHA-1 implementation
   */
  static _sha1(message) {
    const msgLen = message.length;
    const bitLen = msgLen * 8;
    message.push(128);
    while (message.length % 64 !== 56) {
      message.push(0);
    }
    for (let i = 56; i >= 0; i -= 8) {
      message.push(bitLen >>> i & 255);
    }
    let h0 = 1732584193;
    let h1 = 4023233417;
    let h2 = 2562383102;
    let h3 = 271733878;
    let h4 = 3285377520;
    for (let i = 0; i < message.length; i += 64) {
      const w = [];
      for (let j = 0; j < 16; j++) {
        w[j] = message[i + j * 4] << 24 | message[i + j * 4 + 1] << 16 | message[i + j * 4 + 2] << 8 | message[i + j * 4 + 3];
      }
      for (let j = 16; j < 80; j++) {
        const n = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
        w[j] = n << 1 | n >>> 31;
      }
      let a = h0, b = h1, c = h2, d = h3, e = h4;
      for (let j = 0; j < 80; j++) {
        let f, k;
        if (j < 20) {
          f = b & c | ~b & d;
          k = 1518500249;
        } else if (j < 40) {
          f = b ^ c ^ d;
          k = 1859775393;
        } else if (j < 60) {
          f = b & c | b & d | c & d;
          k = 2400959708;
        } else {
          f = b ^ c ^ d;
          k = 3395469782;
        }
        const temp = (a << 5 | a >>> 27) + f + e + k + w[j] >>> 0;
        e = d;
        d = c;
        c = (b << 30 | b >>> 2) >>> 0;
        b = a;
        a = temp;
      }
      h0 = h0 + a >>> 0;
      h1 = h1 + b >>> 0;
      h2 = h2 + c >>> 0;
      h3 = h3 + d >>> 0;
      h4 = h4 + e >>> 0;
    }
    const hash = [];
    for (const h of [h0, h1, h2, h3, h4]) {
      hash.push(h >>> 24 & 255);
      hash.push(h >>> 16 & 255);
      hash.push(h >>> 8 & 255);
      hash.push(h & 255);
    }
    return hash;
  }
  /**
   * Convert string to byte array
   */
  static _stringToBytes(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      bytes.push(str.charCodeAt(i) & 255);
    }
    return bytes;
  }
  /**
   * Convert string to ArrayBuffer
   */
  static _stringToArrayBuffer(str) {
    const buffer = new ArrayBuffer(str.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < str.length; i++) {
      view[i] = str.charCodeAt(i);
    }
    return buffer;
  }
  /**
   * Convert ArrayBuffer to base64 string
   */
  static _arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  /**
   * Generate a random nonce for OAuth
   * @param length Length of the nonce
   * @returns Random nonce string
   */
  static generateNonce(length = 32) {
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      const array = new Uint8Array(length);
      crypto.getRandomValues(array);
      return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
    } else {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  }
  /**
   * Generate timestamp for OAuth
   * @returns Unix timestamp as string
   */
  static generateTimestamp() {
    return Math.floor(Date.now() / 1e3).toString();
  }
  /**
   * Generate a cryptographically secure random string for PKCE code verifier
   * @param length Length of the code verifier (43-128 characters recommended)
   * @returns Random code verifier string
   */
  static generateCodeVerifier(length = 128) {
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      const array = new Uint8Array(length);
      crypto.getRandomValues(array);
      return this._base64UrlEncode(array);
    } else {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  }
  /**
   * Generate PKCE code challenge from code verifier
   * @param codeVerifier The code verifier string
   * @returns Base64url encoded SHA256 hash of the code verifier
   */
  static async generateCodeChallenge(codeVerifier) {
    if (isReactNative2) {
      if (typeof crypto !== "undefined" && crypto.subtle) {
        try {
          return await this._webCryptoSha256(codeVerifier);
        } catch (error) {
        }
      }
      return this._polyfillSha256(codeVerifier);
    }
    if (isNode2) {
      try {
        return await this._nodeSha256(codeVerifier);
      } catch (error) {
        console.warn("Node.js crypto failed for SHA256, falling back:", error);
      }
    }
    if (typeof crypto !== "undefined" && crypto.subtle) {
      try {
        return await this._webCryptoSha256(codeVerifier);
      } catch (error) {
        console.warn("Web Crypto API failed for SHA256, falling back:", error);
      }
    }
    return this._polyfillSha256(codeVerifier);
  }
  /**
   * Node.js native SHA256 implementation for PKCE
   */
  static async _nodeSha256(message) {
    const crypto2 = await import('crypto');
    const hash = crypto2.createHash("sha256");
    hash.update(message);
    const digest = hash.digest();
    return this._base64UrlEncode(digest);
  }
  /**
   * Web Crypto API SHA256 implementation for PKCE
   */
  static async _webCryptoSha256(message) {
    const messageBuffer = this._stringToArrayBuffer(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", messageBuffer);
    return this._base64UrlEncode(hashBuffer);
  }
  /**
   * Polyfill SHA256 implementation for PKCE
   * Pure JavaScript implementation that works in React Native and other environments
   */
  static _polyfillSha256(message) {
    const msgBytes = this._stringToBytes(message);
    const hashBytes = this._sha256(msgBytes);
    return this._base64UrlEncode(new Uint8Array(hashBytes));
  }
  /**
   * Pure JavaScript SHA-256 implementation
   */
  static _sha256(message) {
    const K = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ];
    const msgLen = message.length;
    const bitLen = msgLen * 8;
    message.push(128);
    while (message.length % 64 !== 56) {
      message.push(0);
    }
    message.push(0, 0, 0, 0);
    message.push(bitLen >>> 24 & 255);
    message.push(bitLen >>> 16 & 255);
    message.push(bitLen >>> 8 & 255);
    message.push(bitLen & 255);
    let h0 = 1779033703;
    let h1 = 3144134277;
    let h2 = 1013904242;
    let h3 = 2773480762;
    let h4 = 1359893119;
    let h5 = 2600822924;
    let h6 = 528734635;
    let h7 = 1541459225;
    const rotr = (n, x) => (x >>> n | x << 32 - n) >>> 0;
    const ch = (x, y, z) => (x & y ^ ~x & z) >>> 0;
    const maj = (x, y, z) => (x & y ^ x & z ^ y & z) >>> 0;
    const sigma0 = (x) => (rotr(2, x) ^ rotr(13, x) ^ rotr(22, x)) >>> 0;
    const sigma1 = (x) => (rotr(6, x) ^ rotr(11, x) ^ rotr(25, x)) >>> 0;
    const gamma0 = (x) => (rotr(7, x) ^ rotr(18, x) ^ x >>> 3) >>> 0;
    const gamma1 = (x) => (rotr(17, x) ^ rotr(19, x) ^ x >>> 10) >>> 0;
    for (let i = 0; i < message.length; i += 64) {
      const w = [];
      for (let j = 0; j < 16; j++) {
        w[j] = (message[i + j * 4] << 24 | message[i + j * 4 + 1] << 16 | message[i + j * 4 + 2] << 8 | message[i + j * 4 + 3]) >>> 0;
      }
      for (let j = 16; j < 64; j++) {
        w[j] = gamma1(w[j - 2]) + w[j - 7] + gamma0(w[j - 15]) + w[j - 16] >>> 0;
      }
      let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
      for (let j = 0; j < 64; j++) {
        const t1 = h + sigma1(e) + ch(e, f, g) + K[j] + w[j] >>> 0;
        const t2 = sigma0(a) + maj(a, b, c) >>> 0;
        h = g;
        g = f;
        f = e;
        e = d + t1 >>> 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 >>> 0;
      }
      h0 = h0 + a >>> 0;
      h1 = h1 + b >>> 0;
      h2 = h2 + c >>> 0;
      h3 = h3 + d >>> 0;
      h4 = h4 + e >>> 0;
      h5 = h5 + f >>> 0;
      h6 = h6 + g >>> 0;
      h7 = h7 + h >>> 0;
    }
    const hash = [];
    for (const hVal of [h0, h1, h2, h3, h4, h5, h6, h7]) {
      hash.push(hVal >>> 24 & 255);
      hash.push(hVal >>> 16 & 255);
      hash.push(hVal >>> 8 & 255);
      hash.push(hVal & 255);
    }
    return hash;
  }
  /**
   * Convert ArrayBuffer or Uint8Array to base64url encoding (RFC 7636)
   */
  static _base64UrlEncode(buffer) {
    const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
};
async function hmacSha1(key, message) {
  return CryptoUtils.hmacSha1(key, message);
}
function generateNonce(length = 32) {
  return CryptoUtils.generateNonce(length);
}
function generateTimestamp() {
  return CryptoUtils.generateTimestamp();
}
function generateCodeVerifier(length = 128) {
  return CryptoUtils.generateCodeVerifier(length);
}
async function generateCodeChallenge(codeVerifier) {
  return CryptoUtils.generateCodeChallenge(codeVerifier);
}

// src/oauth2_auth.ts
var OAuth2 = class {
  config;
  token;
  tokenExpiresAt;
  codeVerifier;
  codeChallenge;
  constructor(config) {
    this.config = {
      scope: ["tweet.read", "users.read"],
      ...config
    };
  }
  /**
   * Get the authorization URL
   * @param state Optional state parameter for security
   * @returns Authorization URL
   */
  async getAuthorizationUrl(state) {
    const params = new URLSearchParams({
      response_type: "code",
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      scope: this.config.scope?.join(" ") || "",
      state: state || ""
    });
    if (this.codeChallenge) {
      params.append("code_challenge", this.codeChallenge);
      params.append("code_challenge_method", "S256");
    }
    return `https://x.com/i/oauth2/authorize?${params.toString()}`;
  }
  /**
   * Exchange authorization code for tokens
   * @param code Authorization code from callback
   * @param codeVerifier Optional code verifier for PKCE
   * @returns Promise with OAuth2 token
   */
  async exchangeCode(code, codeVerifier) {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: this.config.redirectUri
    });
    if (codeVerifier) {
      params.append("code_verifier", codeVerifier);
    }
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    if (this.config.clientSecret) {
      const credentials = this._base64Encode(`${this.config.clientId}:${this.config.clientSecret}`);
      headers["Authorization"] = `Basic ${credentials}`;
    } else {
      params.append("client_id", this.config.clientId);
    }
    const response = await fetch("https://api.x.com/2/oauth2/token", {
      method: "POST",
      headers,
      body: params.toString()
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => response.text());
      throw new Error(`HTTP error! status: ${response.status}, body: ${JSON.stringify(errorData)}`);
    }
    const data = await response.json();
    this.token = {
      access_token: data.access_token,
      token_type: data.token_type,
      expires_in: data.expires_in,
      refresh_token: data.refresh_token,
      scope: data.scope
    };
    return this.token;
  }
  /**
   * Refresh an access token using a refresh token
   * @param refreshToken The refresh token to use (uses stored token if not provided)
   * @returns Promise with new OAuth2 token
   */
  async refreshToken(refreshToken) {
    const tokenToUse = refreshToken || this.token?.refresh_token;
    if (!tokenToUse) {
      throw new Error("No refresh token available. Please provide a refresh token or complete the OAuth2 flow first.");
    }
    const params = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: tokenToUse
    });
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    if (this.config.clientSecret) {
      const credentials = this._base64Encode(`${this.config.clientId}:${this.config.clientSecret}`);
      headers["Authorization"] = `Basic ${credentials}`;
    } else {
      params.append("client_id", this.config.clientId);
    }
    const response = await fetch("https://api.x.com/2/oauth2/token", {
      method: "POST",
      headers,
      body: params.toString()
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => response.text());
      throw new Error(`Failed to refresh token: ${response.status}, body: ${JSON.stringify(errorData)}`);
    }
    const data = await response.json();
    this.token = {
      access_token: data.access_token,
      token_type: data.token_type,
      expires_in: data.expires_in,
      refresh_token: data.refresh_token,
      scope: data.scope
    };
    if (data.expires_in) {
      this.tokenExpiresAt = Date.now() + data.expires_in * 1e3;
    }
    return this.token;
  }
  /**
   * Get the current token
   * @returns Current OAuth2 token if available
   */
  getToken() {
    return this.token;
  }
  /**
   * Set a token directly (useful for restoring from storage)
   * @param token The OAuth2 token to set
   * @param expiresAt Optional timestamp (ms) when the token expires
   */
  setToken(token, expiresAt) {
    this.token = token;
    if (expiresAt) {
      this.tokenExpiresAt = expiresAt;
    } else if (token.expires_in) {
      this.tokenExpiresAt = Date.now() + token.expires_in * 1e3;
    }
  }
  /**
   * Check if the current token is expired or about to expire
   * @param bufferSeconds Number of seconds before expiry to consider as "expiring" (default: 60)
   * @returns True if token is expired or missing
   */
  isTokenExpired(bufferSeconds = 60) {
    if (!this.token) {
      return true;
    }
    if (!this.tokenExpiresAt) {
      return false;
    }
    return Date.now() >= this.tokenExpiresAt - bufferSeconds * 1e3;
  }
  /**
   * Get the current code verifier (for PKCE)
   * @returns Current code verifier if available
   */
  getCodeVerifier() {
    return this.codeVerifier;
  }
  /**
   * Manually set PKCE parameters
   * @param codeVerifier The code verifier to use
   * @param codeChallenge Optional code challenge (will be generated if not provided)
   */
  async setPkceParameters(codeVerifier, codeChallenge) {
    this.codeVerifier = codeVerifier;
    if (codeChallenge) {
      this.codeChallenge = codeChallenge;
    } else {
      this.codeChallenge = await generateCodeChallenge(codeVerifier);
    }
  }
  /**
   * Get the current code challenge (for PKCE)
   * @returns Current code challenge if available
   */
  getCodeChallenge() {
    return this.codeChallenge;
  }
  /**
   * Base64 encode a string (with fallback for environments without btoa)
   * @param str String to encode
   * @returns Base64 encoded string
   */
  _base64Encode(str) {
    if (typeof btoa !== "undefined") {
      return btoa(str);
    } else if (typeof Buffer !== "undefined") {
      return Buffer.from(str, "utf8").toString("base64");
    } else {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      let result = "";
      let i = 0;
      while (i < str.length) {
        const a = str.charCodeAt(i++);
        const b = i < str.length ? str.charCodeAt(i++) : 0;
        const c = i < str.length ? str.charCodeAt(i++) : 0;
        const bitmap = a << 16 | b << 8 | c;
        result += chars.charAt(bitmap >> 18 & 63);
        result += chars.charAt(bitmap >> 12 & 63);
        result += i - 2 < str.length ? chars.charAt(bitmap >> 6 & 63) : "=";
        result += i - 1 < str.length ? chars.charAt(bitmap & 63) : "=";
      }
      return result;
    }
  }
};

// src/oauth1_auth.ts
var OAuth1 = class {
  config;
  requestToken;
  accessToken;
  constructor(config) {
    this.config = config;
    if (config.accessToken && config.accessTokenSecret) {
      this.accessToken = {
        accessToken: config.accessToken,
        accessTokenSecret: config.accessTokenSecret
      };
    }
  }
  /**
   * Get the authorization URL for OAuth1 flow
   * @param loginWithX Whether to use "Log in with X" flow
   * @returns Authorization URL
   */
  getAuthorizationUrl(loginWithX = false) {
    if (!this.requestToken) {
      throw new Error("Request token not obtained. Call getRequestToken() first.");
    }
    const baseUrl = loginWithX ? "https://x.com/i/oauth/authenticate" : "https://x.com/oauth/authorize";
    const params = new URLSearchParams({
      oauth_token: this.requestToken.oauthToken
    });
    return `${baseUrl}?${params.toString()}`;
  }
  /**
   * Get request token to start OAuth1 flow
   * @returns Promise with request token
   */
  async getRequestToken() {
    const url = "https://api.x.com/oauth/request_token";
    const params = new URLSearchParams({
      oauth_callback: this.config.callback
    });
    const response = await fetch(`${url}?${params.toString()}`, {
      method: "POST",
      headers: {
        "Authorization": await this._buildOAuthHeader("POST", url, params.toString())
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to get request token: ${response.status} ${response.statusText}`);
    }
    const responseText = await response.text();
    const responseParams = new URLSearchParams(responseText);
    this.requestToken = {
      oauthToken: responseParams.get("oauth_token"),
      oauthTokenSecret: responseParams.get("oauth_token_secret")
    };
    return this.requestToken;
  }
  /**
   * Exchange verifier for access token
   * @param verifier OAuth verifier from callback or PIN
   * @returns Promise with access token
   */
  async getAccessToken(verifier) {
    if (!this.requestToken) {
      throw new Error("Request token not obtained. Call getRequestToken() first.");
    }
    const url = "https://api.x.com/oauth/access_token";
    const params = new URLSearchParams({
      oauth_token: this.requestToken.oauthToken,
      oauth_verifier: verifier
    });
    const response = await fetch(`${url}?${params.toString()}`, {
      method: "POST",
      headers: {
        "Authorization": await this._buildOAuthHeader("POST", url, params.toString())
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to get access token: ${response.status} ${response.statusText}`);
    }
    const responseText = await response.text();
    const responseParams = new URLSearchParams(responseText);
    this.accessToken = {
      accessToken: responseParams.get("oauth_token"),
      accessTokenSecret: responseParams.get("oauth_token_secret")
    };
    return this.accessToken;
  }
  /**
   * Build OAuth1 authorization header
   * @param method HTTP method
   * @param url Request URL
   * @param body Request body
   * @returns Promise that resolves to OAuth1 authorization header string
   */
  async _buildOAuthHeader(method, url, body) {
    const timestamp = generateTimestamp();
    const nonce = generateNonce();
    const oauthParams = {
      oauth_consumer_key: this.config.apiKey,
      oauth_nonce: nonce,
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: timestamp,
      oauth_version: "1.0"
    };
    if (this.requestToken) {
      oauthParams["oauth_token"] = this.requestToken.oauthToken;
    }
    if (this.accessToken) {
      oauthParams["oauth_token"] = this.accessToken.accessToken;
    }
    const paramString = this._buildParamString(oauthParams, body);
    const signatureBase = `${method.toUpperCase()}&${this._encode(url)}&${this._encode(paramString)}`;
    const signingKey = `${this._encode(this.config.apiSecret)}&${this._encode(
      this.requestToken?.oauthTokenSecret || this.accessToken?.accessTokenSecret || ""
    )}`;
    const signature = await CryptoUtils.hmacSha1(signingKey, signatureBase);
    oauthParams["oauth_signature"] = signature;
    const headerParams = Object.entries(oauthParams).map(([key, value]) => `${key}="${this._encode(value)}"`).join(", ");
    return `OAuth ${headerParams}`;
  }
  /**
   * Build parameter string for OAuth signature
   * @param oauthParams OAuth parameters
   * @param body Request body
   * @returns Parameter string
   */
  _buildParamString(oauthParams, body) {
    const allParams = { ...oauthParams };
    if (body) {
      let isJson = false;
      try {
        JSON.parse(body);
        isJson = true;
      } catch {
        isJson = false;
      }
      if (!isJson) {
        try {
          const bodyParams = new URLSearchParams(body);
          bodyParams.forEach((value, key) => {
            allParams[key] = value;
          });
        } catch (error) {
          console.warn("Failed to parse body parameters:", error);
        }
      }
    }
    const sortedParams = Object.entries(allParams).sort(([a], [b]) => a.localeCompare(b));
    return sortedParams.map(([key, value]) => `${this._encode(key)}=${this._encode(value)}`).join("&");
  }
  /**
   * URL encode string according to OAuth1 specification
   * @param str String to encode
   * @returns Encoded string
   */
  _encode(str) {
    return encodeURIComponent(str).replace(/!/g, "%21").replace(/\*/g, "%2A").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%7E/g, "~");
  }
  /**
   * Convenience method to start the OAuth1 flow
   * @param loginWithX Whether to use "Log in with X" flow
   * @returns Promise that resolves to the authorization URL
   */
  async startOAuthFlow(loginWithX = false) {
    await this.getRequestToken();
    return this.getAuthorizationUrl(loginWithX);
  }
  /**
   * Build OAuth1 authorization header for API requests
   * @param method HTTP method
   * @param url Request URL
   * @param body Request body
   * @returns Promise that resolves to OAuth1 authorization header string
   */
  async buildRequestHeader(method, url, body = "") {
    if (!this.accessToken) {
      throw new Error("Access token not available. Complete OAuth1 flow first.");
    }
    let urlWithoutQuery = url;
    let queryParams = "";
    try {
      const urlObj = new URL(url);
      if (urlObj.search) {
        queryParams = urlObj.search.substring(1);
        urlWithoutQuery = urlObj.origin + urlObj.pathname;
      }
    } catch (error) {
      console.warn("Failed to parse URL for OAuth1:", error);
    }
    let allParams = "";
    if (queryParams && body) {
      allParams = `${queryParams}&${body}`;
    } else if (queryParams) {
      allParams = queryParams;
    } else if (body) {
      allParams = body;
    }
    return this._buildOAuthHeader(method, urlWithoutQuery, allParams);
  }
};

// src/schemas.ts
var schemas_exports = {};

// src/stream/models.ts
var models_exports18 = {};

// src/paginator.ts
var Paginator = class _Paginator {
  fetchPage;
  currentToken;
  previousToken;
  hasMore = true;
  isDone = false;
  allItems = [];
  currentMeta;
  currentIncludes;
  currentErrors;
  rateLimitHit = false;
  /**
   * Creates a new paginator instance
   * 
   * @param fetchPage - Function that fetches a page of data given a pagination token
   */
  constructor(fetchPage) {
    this.fetchPage = fetchPage;
  }
  /**
   * Get all fetched items
   */
  get items() {
    return [...this.allItems];
  }
  /**
   * Get current pagination metadata
   */
  get meta() {
    return this.currentMeta;
  }
  /**
   * Get current includes data
   */
  get includes() {
    return this.currentIncludes;
  }
  /**
   * Get current errors
   */
  get errors() {
    return this.currentErrors;
  }
  /**
   * Check if pagination is done
   */
  get done() {
    return this.isDone || this.rateLimitHit;
  }
  /**
   * Check if rate limit was hit
   */
  get rateLimited() {
    return this.rateLimitHit;
  }
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
  async fetchNext() {
    if (this.done) {
      return;
    }
    try {
      const response = await this.fetchPage(this.currentToken);
      this.previousToken = this.currentToken;
      this.currentToken = response.meta?.nextToken;
      this.hasMore = !!this.currentToken;
      this.isDone = !this.hasMore;
      if (response.data) {
        this.allItems.push(...response.data);
      }
      this.currentMeta = response.meta;
      this.currentIncludes = response.includes;
      this.currentErrors = response.errors;
    } catch (error) {
      if (error.status === 429 || error.message?.includes("rate limit")) {
        this.rateLimitHit = true;
      }
      throw error;
    }
  }
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
  async next() {
    if (this.done) {
      return new _Paginator(this.fetchPage);
    }
    const nextPaginator = new _Paginator(this.fetchPage);
    nextPaginator.currentToken = this.currentToken;
    await nextPaginator.fetchNext();
    return nextPaginator;
  }
  /**
   * Fetch previous page (if supported)
   */
  async fetchPrevious() {
    if (!this.previousToken) {
      return;
    }
    try {
      const response = await this.fetchPage(this.previousToken);
      this.currentToken = this.previousToken;
      this.previousToken = response.meta?.previousToken;
      this.hasMore = !!this.currentToken;
      this.isDone = !this.hasMore;
      this.allItems = response.data || [];
      this.currentMeta = response.meta;
      this.currentIncludes = response.includes;
      this.currentErrors = response.errors;
    } catch (error) {
      if (error.status === 429 || error.message?.includes("rate limit")) {
        this.rateLimitHit = true;
      }
      throw error;
    }
  }
  /**
   * Get previous page as a new instance
   */
  async previous() {
    if (!this.previousToken) {
      return new _Paginator(this.fetchPage);
    }
    const prevPaginator = new _Paginator(this.fetchPage);
    prevPaginator.currentToken = this.previousToken;
    await prevPaginator.fetchNext();
    return prevPaginator;
  }
  /**
   * Fetch up to a specified number of additional items
   */
  async fetchLast(count) {
    let fetched = 0;
    while (!this.done && fetched < count) {
      const beforeCount = this.allItems.length;
      await this.fetchNext();
      const afterCount = this.allItems.length;
      fetched += afterCount - beforeCount;
    }
  }
  /**
   * Reset paginator to initial state
   */
  reset() {
    this.currentToken = void 0;
    this.previousToken = void 0;
    this.hasMore = true;
    this.isDone = false;
    this.allItems = [];
    this.currentMeta = void 0;
    this.currentIncludes = void 0;
    this.currentErrors = void 0;
    this.rateLimitHit = false;
  }
  /**
   * Iterator for all fetched items
   */
  *[Symbol.iterator]() {
    for (const item of this.allItems) {
      yield item;
    }
  }
  /**
   * Async iterator that fetches pages automatically
   */
  async *[Symbol.asyncIterator]() {
    let lastYieldedIndex = 0;
    for (let i = lastYieldedIndex; i < this.allItems.length; i++) {
      yield this.allItems[i];
    }
    lastYieldedIndex = this.allItems.length;
    while (!this.done) {
      await this.fetchNext();
      for (let i = lastYieldedIndex; i < this.allItems.length; i++) {
        yield this.allItems[i];
      }
      lastYieldedIndex = this.allItems.length;
    }
  }
};
var PostPaginator = class extends Paginator {
  get posts() {
    return this.items;
  }
};
var UserPaginator = class extends Paginator {
  get users() {
    return this.items;
  }
};
var EventPaginator = class extends Paginator {
  get events() {
    return this.items;
  }
};

// src/index.ts
if (typeof process !== "undefined" && process.versions && process.versions.node) {
  if (typeof globalThis.fetch === "undefined" || typeof globalThis.Headers === "undefined") {
    try {
      if (typeof globalThis.fetch === "function" && typeof globalThis.Headers === "function") {
      } else {
        const nodeFetch = __require("node-fetch");
        const { Headers: NodeHeaders } = nodeFetch;
        if (typeof globalThis.fetch === "undefined") {
          globalThis.fetch = nodeFetch.default || nodeFetch;
        }
        if (typeof globalThis.Headers === "undefined") {
          globalThis.Headers = NodeHeaders;
        }
      }
    } catch (error) {
      console.warn(
        "X API SDK: node-fetch not found. For Node.js environments, please install node-fetch:\nnpm install node-fetch\nOr upgrade to Node.js 18+ for native fetch support."
      );
    }
  }
}

export { models_exports2 as AccountActivity, AccountActivityClient, models_exports9 as Activity, ActivityClient, ApiError, Client17 as Client, models_exports14 as Communities, CommunitiesClient, models_exports3 as CommunityNotes, CommunityNotesClient, models_exports4 as Compliance, ComplianceClient, models_exports5 as Connections, ConnectionsClient, CryptoUtils, models_exports13 as DirectMessages, DirectMessagesClient, EventPaginator, models_exports as General, GeneralClient, HttpClient, models_exports17 as Lists, ListsClient, models_exports15 as Media, MediaClient, models_exports7 as News, NewsClient, OAuth1, OAuth2, Paginator, PostPaginator, models_exports12 as Posts, PostsClient, schemas_exports as Schemas, models_exports8 as Spaces, SpacesClient, models_exports18 as Stream, StreamClient, models_exports11 as Trends, TrendsClient, models_exports10 as Usage, UsageClient, UserPaginator, models_exports6 as Users, UsersClient, models_exports16 as Webhooks, WebhooksClient, generateCodeChallenge, generateCodeVerifier, generateNonce, generateTimestamp, hmacSha1, httpClient };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map