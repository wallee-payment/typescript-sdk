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
  WebhookURLListResponse,
  WebhookURLSearchResponse,
  WebhookUrl,
  WebhookUrlCreate,
  WebhookUrlUpdate,
} from '../models/index';
import {
    RestApiBulkOperationResultFromJSON,
    RestApiBulkOperationResultToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    WebhookURLListResponseFromJSON,
    WebhookURLListResponseToJSON,
    WebhookURLSearchResponseFromJSON,
    WebhookURLSearchResponseToJSON,
    WebhookUrlFromJSON,
    WebhookUrlToJSON,
    WebhookUrlCreateFromJSON,
    WebhookUrlCreateToJSON,
    WebhookUrlUpdateFromJSON,
    WebhookUrlUpdateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteWebhooksUrlsBulkRequest {
    space: number;
    requestBody: Array<number>;
}

export interface DeleteWebhooksUrlsIdRequest {
    id: number;
    space: number;
}

export interface GetWebhooksUrlsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetWebhooksUrlsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetWebhooksUrlsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchWebhooksUrlsBulkRequest {
    space: number;
    webhookUrlUpdate: Array<WebhookUrlUpdate>;
}

export interface PatchWebhooksUrlsIdRequest {
    id: number;
    space: number;
    webhookUrlUpdate: WebhookUrlUpdate;
    expand?: Set<string>;
}

export interface PostWebhooksUrlsRequest {
    space: number;
    webhookUrlCreate: WebhookUrlCreate;
    expand?: Set<string>;
}

export interface PostWebhooksUrlsBulkRequest {
    space: number;
    webhookUrlCreate: Array<WebhookUrlCreate>;
}

/**
 * 
 */
export class WebhookURLsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete multiple webhook URLs
     
     */
    async deleteWebhooksUrlsBulkRaw(requestParameters: DeleteWebhooksUrlsBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApiBulkOperationResult>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteWebhooksUrlsBulk().'
            );
        }

        if (requestParameters['requestBody'] == null) {
            throw new runtime.RequiredError(
                'requestBody',
                'Required parameter "requestBody" was null or undefined when calling deleteWebhooksUrlsBulk().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/webhooks/urls/bulk`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/urls/bulk`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApiBulkOperationResultFromJSON));
    }

    /**
     * Delete multiple webhook URLs
     
     */
    async deleteWebhooksUrlsBulk(requestParameters: DeleteWebhooksUrlsBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApiBulkOperationResult>> {
        const response = await this.deleteWebhooksUrlsBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a webhook URL
     
     */
    async deleteWebhooksUrlsIdRaw(requestParameters: DeleteWebhooksUrlsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteWebhooksUrlsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteWebhooksUrlsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/webhooks/urls/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/urls/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a webhook URL
     
     */
    async deleteWebhooksUrlsId(requestParameters: DeleteWebhooksUrlsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWebhooksUrlsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all webhook URLs
     
     */
    async getWebhooksUrlsRaw(requestParameters: GetWebhooksUrlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookURLListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getWebhooksUrls().'
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
        const path = `/webhooks/urls`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/urls`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookURLListResponseFromJSON(jsonValue));
    }

    /**
     * List all webhook URLs
     
     */
    async getWebhooksUrls(requestParameters: GetWebhooksUrlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookURLListResponse> {
        const response = await this.getWebhooksUrlsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a webhook URL
     
     */
    async getWebhooksUrlsIdRaw(requestParameters: GetWebhooksUrlsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookUrl>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getWebhooksUrlsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getWebhooksUrlsId().'
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
        const path = `/webhooks/urls/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/urls/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookUrlFromJSON(jsonValue));
    }

    /**
     * Retrieve a webhook URL
     
     */
    async getWebhooksUrlsId(requestParameters: GetWebhooksUrlsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookUrl> {
        const response = await this.getWebhooksUrlsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search webhook URLs
     
     */
    async getWebhooksUrlsSearchRaw(requestParameters: GetWebhooksUrlsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookURLSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getWebhooksUrlsSearch().'
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
        const path = `/webhooks/urls/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/urls/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookURLSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search webhook URLs
     
     */
    async getWebhooksUrlsSearch(requestParameters: GetWebhooksUrlsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookURLSearchResponse> {
        const response = await this.getWebhooksUrlsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update multiple webhook URLs
     
     */
    async patchWebhooksUrlsBulkRaw(requestParameters: PatchWebhooksUrlsBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApiBulkOperationResult>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchWebhooksUrlsBulk().'
            );
        }

        if (requestParameters['webhookUrlUpdate'] == null) {
            throw new runtime.RequiredError(
                'webhookUrlUpdate',
                'Required parameter "webhookUrlUpdate" was null or undefined when calling patchWebhooksUrlsBulk().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/webhooks/urls/bulk`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/urls/bulk`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['webhookUrlUpdate']!.map(WebhookUrlUpdateToJSON),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApiBulkOperationResultFromJSON));
    }

    /**
     * Update multiple webhook URLs
     
     */
    async patchWebhooksUrlsBulk(requestParameters: PatchWebhooksUrlsBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApiBulkOperationResult>> {
        const response = await this.patchWebhooksUrlsBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a webhook URL
     
     */
    async patchWebhooksUrlsIdRaw(requestParameters: PatchWebhooksUrlsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookUrl>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchWebhooksUrlsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchWebhooksUrlsId().'
            );
        }

        if (requestParameters['webhookUrlUpdate'] == null) {
            throw new runtime.RequiredError(
                'webhookUrlUpdate',
                'Required parameter "webhookUrlUpdate" was null or undefined when calling patchWebhooksUrlsId().'
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
        const path = `/webhooks/urls/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/urls/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookUrlUpdateToJSON(requestParameters['webhookUrlUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookUrlFromJSON(jsonValue));
    }

    /**
     * Update a webhook URL
     
     */
    async patchWebhooksUrlsId(requestParameters: PatchWebhooksUrlsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookUrl> {
        const response = await this.patchWebhooksUrlsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a webhook URL
     
     */
    async postWebhooksUrlsRaw(requestParameters: PostWebhooksUrlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookUrl>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postWebhooksUrls().'
            );
        }

        if (requestParameters['webhookUrlCreate'] == null) {
            throw new runtime.RequiredError(
                'webhookUrlCreate',
                'Required parameter "webhookUrlCreate" was null or undefined when calling postWebhooksUrls().'
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
        const path = `/webhooks/urls`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/urls`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookUrlCreateToJSON(requestParameters['webhookUrlCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookUrlFromJSON(jsonValue));
    }

    /**
     * Create a webhook URL
     
     */
    async postWebhooksUrls(requestParameters: PostWebhooksUrlsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookUrl> {
        const response = await this.postWebhooksUrlsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create multiple webhook URLs
     
     */
    async postWebhooksUrlsBulkRaw(requestParameters: PostWebhooksUrlsBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApiBulkOperationResult>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postWebhooksUrlsBulk().'
            );
        }

        if (requestParameters['webhookUrlCreate'] == null) {
            throw new runtime.RequiredError(
                'webhookUrlCreate',
                'Required parameter "webhookUrlCreate" was null or undefined when calling postWebhooksUrlsBulk().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/webhooks/urls/bulk`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/webhooks/urls/bulk`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['webhookUrlCreate']!.map(WebhookUrlCreateToJSON),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApiBulkOperationResultFromJSON));
    }

    /**
     * Create multiple webhook URLs
     
     */
    async postWebhooksUrlsBulk(requestParameters: PostWebhooksUrlsBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApiBulkOperationResult>> {
        const response = await this.postWebhooksUrlsBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
