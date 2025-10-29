/* tslint:disable */
/* eslint-disable */
/**
 * Wallee AG TypeScript SDK
 *
 * This library allows to interact with the Wallee AG payment service.
 *
 * Copyright owner: Wallee AG
 * Website: https://en.wallee.com
 * Developer email: ecosystem-team@wallee.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as runtime from '../runtime';
import type {
  RestApiBulkOperationResult,
  RestApiErrorResponse,
  SortingOrder,
  WebhookListener,
  WebhookListenerCreate,
  WebhookListenerListResponse,
  WebhookListenerSearchResponse,
  WebhookListenerUpdate,
} from '../models/index';
import {
    RestApiBulkOperationResultFromJSON,
    RestApiBulkOperationResultToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    WebhookListenerFromJSON,
    WebhookListenerToJSON,
    WebhookListenerCreateFromJSON,
    WebhookListenerCreateToJSON,
    WebhookListenerListResponseFromJSON,
    WebhookListenerListResponseToJSON,
    WebhookListenerSearchResponseFromJSON,
    WebhookListenerSearchResponseToJSON,
    WebhookListenerUpdateFromJSON,
    WebhookListenerUpdateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteWebhooksListenersBulkRequest {
    space: number;
    requestBody: Array<number>;
}

export interface DeleteWebhooksListenersIdRequest {
    id: number;
    space: number;
}

export interface GetWebhooksListenersRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetWebhooksListenersIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetWebhooksListenersSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchWebhooksListenersBulkRequest {
    space: number;
    webhookListenerUpdate: Array<WebhookListenerUpdate>;
}

export interface PatchWebhooksListenersIdRequest {
    id: number;
    space: number;
    webhookListenerUpdate: WebhookListenerUpdate;
    expand?: Set<string>;
}

export interface PostWebhooksListenersRequest {
    space: number;
    webhookListenerCreate: WebhookListenerCreate;
    expand?: Set<string>;
}

export interface PostWebhooksListenersBulkRequest {
    space: number;
    webhookListenerCreate: Array<WebhookListenerCreate>;
}

/**
 * 
 */
export class WebhookListenersService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete multiple webhook listeners
     
     */
    async deleteWebhooksListenersBulkRaw(requestParameters: DeleteWebhooksListenersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApiBulkOperationResult>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteWebhooksListenersBulk().'
            );
        }

        if (requestParameters['requestBody'] == null) {
            throw new runtime.RequiredError(
                'requestBody',
                'Required parameter "requestBody" was null or undefined when calling deleteWebhooksListenersBulk().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/webhooks/listeners/bulk`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApiBulkOperationResultFromJSON));
    }

    /**
     * Delete multiple webhook listeners
     
     */
    async deleteWebhooksListenersBulk(requestParameters: DeleteWebhooksListenersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApiBulkOperationResult>> {
        const response = await this.deleteWebhooksListenersBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a webhook listener
     
     */
    async deleteWebhooksListenersIdRaw(requestParameters: DeleteWebhooksListenersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteWebhooksListenersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteWebhooksListenersId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/webhooks/listeners/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a webhook listener
     
     */
    async deleteWebhooksListenersId(requestParameters: DeleteWebhooksListenersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWebhooksListenersIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all webhook listeners
     
     */
    async getWebhooksListenersRaw(requestParameters: GetWebhooksListenersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookListenerListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getWebhooksListeners().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['after'] != null) {
            queryParameters['after'] = requestParameters['after'];
        }

        if (requestParameters['before'] != null) {
            queryParameters['before'] = requestParameters['before'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/webhooks/listeners`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookListenerListResponseFromJSON(jsonValue));
    }

    /**
     * List all webhook listeners
     
     */
    async getWebhooksListeners(requestParameters: GetWebhooksListenersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookListenerListResponse> {
        const response = await this.getWebhooksListenersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a webhook listener
     
     */
    async getWebhooksListenersIdRaw(requestParameters: GetWebhooksListenersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookListener>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getWebhooksListenersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getWebhooksListenersId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/webhooks/listeners/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookListenerFromJSON(jsonValue));
    }

    /**
     * Retrieve a webhook listener
     
     */
    async getWebhooksListenersId(requestParameters: GetWebhooksListenersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookListener> {
        const response = await this.getWebhooksListenersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search webhook listeners
     
     */
    async getWebhooksListenersSearchRaw(requestParameters: GetWebhooksListenersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookListenerSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getWebhooksListenersSearch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/webhooks/listeners/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookListenerSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search webhook listeners
     
     */
    async getWebhooksListenersSearch(requestParameters: GetWebhooksListenersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookListenerSearchResponse> {
        const response = await this.getWebhooksListenersSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update multiple webhook listeners
     
     */
    async patchWebhooksListenersBulkRaw(requestParameters: PatchWebhooksListenersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApiBulkOperationResult>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchWebhooksListenersBulk().'
            );
        }

        if (requestParameters['webhookListenerUpdate'] == null) {
            throw new runtime.RequiredError(
                'webhookListenerUpdate',
                'Required parameter "webhookListenerUpdate" was null or undefined when calling patchWebhooksListenersBulk().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/webhooks/listeners/bulk`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['webhookListenerUpdate']!.map(WebhookListenerUpdateToJSON),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApiBulkOperationResultFromJSON));
    }

    /**
     * Update multiple webhook listeners
     
     */
    async patchWebhooksListenersBulk(requestParameters: PatchWebhooksListenersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApiBulkOperationResult>> {
        const response = await this.patchWebhooksListenersBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a webhook listener
     
     */
    async patchWebhooksListenersIdRaw(requestParameters: PatchWebhooksListenersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookListener>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchWebhooksListenersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchWebhooksListenersId().'
            );
        }

        if (requestParameters['webhookListenerUpdate'] == null) {
            throw new runtime.RequiredError(
                'webhookListenerUpdate',
                'Required parameter "webhookListenerUpdate" was null or undefined when calling patchWebhooksListenersId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/webhooks/listeners/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: WebhookListenerUpdateToJSON(requestParameters['webhookListenerUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookListenerFromJSON(jsonValue));
    }

    /**
     * Update a webhook listener
     
     */
    async patchWebhooksListenersId(requestParameters: PatchWebhooksListenersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookListener> {
        const response = await this.patchWebhooksListenersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a webhook listener
     
     */
    async postWebhooksListenersRaw(requestParameters: PostWebhooksListenersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookListener>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postWebhooksListeners().'
            );
        }

        if (requestParameters['webhookListenerCreate'] == null) {
            throw new runtime.RequiredError(
                'webhookListenerCreate',
                'Required parameter "webhookListenerCreate" was null or undefined when calling postWebhooksListeners().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/webhooks/listeners`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: WebhookListenerCreateToJSON(requestParameters['webhookListenerCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookListenerFromJSON(jsonValue));
    }

    /**
     * Create a webhook listener
     
     */
    async postWebhooksListeners(requestParameters: PostWebhooksListenersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookListener> {
        const response = await this.postWebhooksListenersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create multiple webhook listeners
     
     */
    async postWebhooksListenersBulkRaw(requestParameters: PostWebhooksListenersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApiBulkOperationResult>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postWebhooksListenersBulk().'
            );
        }

        if (requestParameters['webhookListenerCreate'] == null) {
            throw new runtime.RequiredError(
                'webhookListenerCreate',
                'Required parameter "webhookListenerCreate" was null or undefined when calling postWebhooksListenersBulk().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/webhooks/listeners/bulk`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['webhookListenerCreate']!.map(WebhookListenerCreateToJSON),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApiBulkOperationResultFromJSON));
    }

    /**
     * Create multiple webhook listeners
     
     */
    async postWebhooksListenersBulk(requestParameters: PostWebhooksListenersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApiBulkOperationResult>> {
        const response = await this.postWebhooksListenersBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
