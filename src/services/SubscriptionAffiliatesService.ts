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
  RestApiErrorResponse,
  SortingOrder,
  SubscriptionAffiliate,
  SubscriptionAffiliateCreate,
  SubscriptionAffiliateListResponse,
  SubscriptionAffiliateSearchResponse,
  SubscriptionAffiliateUpdate,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionAffiliateFromJSON,
    SubscriptionAffiliateToJSON,
    SubscriptionAffiliateCreateFromJSON,
    SubscriptionAffiliateCreateToJSON,
    SubscriptionAffiliateListResponseFromJSON,
    SubscriptionAffiliateListResponseToJSON,
    SubscriptionAffiliateSearchResponseFromJSON,
    SubscriptionAffiliateSearchResponseToJSON,
    SubscriptionAffiliateUpdateFromJSON,
    SubscriptionAffiliateUpdateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSubscriptionsAffiliatesIdRequest {
    id: number;
    space: number;
}

export interface GetSubscriptionsAffiliatesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsAffiliatesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsAffiliatesSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsAffiliatesIdRequest {
    id: number;
    space: number;
    subscriptionAffiliateUpdate: SubscriptionAffiliateUpdate;
    expand?: Set<string>;
}

export interface PostSubscriptionsAffiliatesRequest {
    space: number;
    subscriptionAffiliateCreate: SubscriptionAffiliateCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionAffiliatesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete an affiliate
     
     */
    async deleteSubscriptionsAffiliatesIdRaw(requestParameters: DeleteSubscriptionsAffiliatesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSubscriptionsAffiliatesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSubscriptionsAffiliatesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/subscriptions/affiliates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Delete an affiliate
     
     */
    async deleteSubscriptionsAffiliatesId(requestParameters: DeleteSubscriptionsAffiliatesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSubscriptionsAffiliatesIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all affiliates
     
     */
    async getSubscriptionsAffiliatesRaw(requestParameters: GetSubscriptionsAffiliatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionAffiliateListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsAffiliates().'
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
        const path = `/subscriptions/affiliates`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionAffiliateListResponseFromJSON(jsonValue));
    }

    /**
     * List all affiliates
     
     */
    async getSubscriptionsAffiliates(requestParameters: GetSubscriptionsAffiliatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionAffiliateListResponse> {
        const response = await this.getSubscriptionsAffiliatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an affiliate
     
     */
    async getSubscriptionsAffiliatesIdRaw(requestParameters: GetSubscriptionsAffiliatesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionAffiliate>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsAffiliatesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsAffiliatesId().'
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
        const path = `/subscriptions/affiliates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionAffiliateFromJSON(jsonValue));
    }

    /**
     * Retrieve an affiliate
     
     */
    async getSubscriptionsAffiliatesId(requestParameters: GetSubscriptionsAffiliatesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionAffiliate> {
        const response = await this.getSubscriptionsAffiliatesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search affiliates
     
     */
    async getSubscriptionsAffiliatesSearchRaw(requestParameters: GetSubscriptionsAffiliatesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionAffiliateSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsAffiliatesSearch().'
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
        const path = `/subscriptions/affiliates/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionAffiliateSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search affiliates
     
     */
    async getSubscriptionsAffiliatesSearch(requestParameters: GetSubscriptionsAffiliatesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionAffiliateSearchResponse> {
        const response = await this.getSubscriptionsAffiliatesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an affiliate
     
     */
    async patchSubscriptionsAffiliatesIdRaw(requestParameters: PatchSubscriptionsAffiliatesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionAffiliate>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsAffiliatesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsAffiliatesId().'
            );
        }

        if (requestParameters['subscriptionAffiliateUpdate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionAffiliateUpdate',
                'Required parameter "subscriptionAffiliateUpdate" was null or undefined when calling patchSubscriptionsAffiliatesId().'
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
        const path = `/subscriptions/affiliates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: SubscriptionAffiliateUpdateToJSON(requestParameters['subscriptionAffiliateUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionAffiliateFromJSON(jsonValue));
    }

    /**
     * Update an affiliate
     
     */
    async patchSubscriptionsAffiliatesId(requestParameters: PatchSubscriptionsAffiliatesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionAffiliate> {
        const response = await this.patchSubscriptionsAffiliatesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an affiliate
     
     */
    async postSubscriptionsAffiliatesRaw(requestParameters: PostSubscriptionsAffiliatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionAffiliate>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsAffiliates().'
            );
        }

        if (requestParameters['subscriptionAffiliateCreate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionAffiliateCreate',
                'Required parameter "subscriptionAffiliateCreate" was null or undefined when calling postSubscriptionsAffiliates().'
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
        const path = `/subscriptions/affiliates`;

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
            body: SubscriptionAffiliateCreateToJSON(requestParameters['subscriptionAffiliateCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionAffiliateFromJSON(jsonValue));
    }

    /**
     * Create an affiliate
     
     */
    async postSubscriptionsAffiliates(requestParameters: PostSubscriptionsAffiliatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionAffiliate> {
        const response = await this.postSubscriptionsAffiliatesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
