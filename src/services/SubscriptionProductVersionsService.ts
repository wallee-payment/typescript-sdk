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
  ProductVersionListResponse,
  ProductVersionSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  SubscriptionProductVersion,
  SubscriptionProductVersionPending,
  SubscriptionProductVersionRetirement,
  SubscriptionProductVersionRetirementRequest,
} from '../models/index';
import {
    ProductVersionListResponseFromJSON,
    ProductVersionListResponseToJSON,
    ProductVersionSearchResponseFromJSON,
    ProductVersionSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionProductVersionFromJSON,
    SubscriptionProductVersionToJSON,
    SubscriptionProductVersionPendingFromJSON,
    SubscriptionProductVersionPendingToJSON,
    SubscriptionProductVersionRetirementFromJSON,
    SubscriptionProductVersionRetirementToJSON,
    SubscriptionProductVersionRetirementRequestFromJSON,
    SubscriptionProductVersionRetirementRequestToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetSubscriptionsProductsVersionsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsProductsVersionsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsProductsVersionsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsProductsVersionsIdRequest {
    id: number;
    space: number;
    subscriptionProductVersionPending: SubscriptionProductVersionPending;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsVersionsRequest {
    space: number;
    subscriptionProductVersionPending: SubscriptionProductVersionPending;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsVersionsIdActivateRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsVersionsIdRetireRequest {
    id: number;
    space: number;
    subscriptionProductVersionRetirementRequest: SubscriptionProductVersionRetirementRequest;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionProductVersionsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all product versions
     
     */
    async getSubscriptionsProductsVersionsRaw(requestParameters: GetSubscriptionsProductsVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVersionListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsVersions().'
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
        const path = `/subscriptions/products/versions`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductVersionListResponseFromJSON(jsonValue));
    }

    /**
     * List all product versions
     
     */
    async getSubscriptionsProductsVersions(requestParameters: GetSubscriptionsProductsVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVersionListResponse> {
        const response = await this.getSubscriptionsProductsVersionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a product version
     
     */
    async getSubscriptionsProductsVersionsIdRaw(requestParameters: GetSubscriptionsProductsVersionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductVersion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsProductsVersionsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsVersionsId().'
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
        const path = `/subscriptions/products/versions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductVersionFromJSON(jsonValue));
    }

    /**
     * Retrieve a product version
     
     */
    async getSubscriptionsProductsVersionsId(requestParameters: GetSubscriptionsProductsVersionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductVersion> {
        const response = await this.getSubscriptionsProductsVersionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search product versions
     
     */
    async getSubscriptionsProductsVersionsSearchRaw(requestParameters: GetSubscriptionsProductsVersionsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductVersionSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsVersionsSearch().'
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
        const path = `/subscriptions/products/versions/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductVersionSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search product versions
     
     */
    async getSubscriptionsProductsVersionsSearch(requestParameters: GetSubscriptionsProductsVersionsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductVersionSearchResponse> {
        const response = await this.getSubscriptionsProductsVersionsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a product version
     
     */
    async patchSubscriptionsProductsVersionsIdRaw(requestParameters: PatchSubscriptionsProductsVersionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductVersion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsProductsVersionsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsProductsVersionsId().'
            );
        }

        if (requestParameters['subscriptionProductVersionPending'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductVersionPending',
                'Required parameter "subscriptionProductVersionPending" was null or undefined when calling patchSubscriptionsProductsVersionsId().'
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
        const path = `/subscriptions/products/versions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: SubscriptionProductVersionPendingToJSON(requestParameters['subscriptionProductVersionPending']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductVersionFromJSON(jsonValue));
    }

    /**
     * Update a product version
     
     */
    async patchSubscriptionsProductsVersionsId(requestParameters: PatchSubscriptionsProductsVersionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductVersion> {
        const response = await this.patchSubscriptionsProductsVersionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a product version
     
     */
    async postSubscriptionsProductsVersionsRaw(requestParameters: PostSubscriptionsProductsVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductVersion>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsVersions().'
            );
        }

        if (requestParameters['subscriptionProductVersionPending'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductVersionPending',
                'Required parameter "subscriptionProductVersionPending" was null or undefined when calling postSubscriptionsProductsVersions().'
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
        const path = `/subscriptions/products/versions`;

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
            body: SubscriptionProductVersionPendingToJSON(requestParameters['subscriptionProductVersionPending']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductVersionFromJSON(jsonValue));
    }

    /**
     * Create a product version
     
     */
    async postSubscriptionsProductsVersions(requestParameters: PostSubscriptionsProductsVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductVersion> {
        const response = await this.postSubscriptionsProductsVersionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Activate a product version
     
     */
    async postSubscriptionsProductsVersionsIdActivateRaw(requestParameters: PostSubscriptionsProductsVersionsIdActivateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductVersion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsProductsVersionsIdActivate().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsVersionsIdActivate().'
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

        const method = 'POST';
        const path = `/subscriptions/products/versions/{id}/activate`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductVersionFromJSON(jsonValue));
    }

    /**
     * Activate a product version
     
     */
    async postSubscriptionsProductsVersionsIdActivate(requestParameters: PostSubscriptionsProductsVersionsIdActivateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductVersion> {
        const response = await this.postSubscriptionsProductsVersionsIdActivateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retire a product version
     
     */
    async postSubscriptionsProductsVersionsIdRetireRaw(requestParameters: PostSubscriptionsProductsVersionsIdRetireRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductVersionRetirement>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsProductsVersionsIdRetire().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsVersionsIdRetire().'
            );
        }

        if (requestParameters['subscriptionProductVersionRetirementRequest'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductVersionRetirementRequest',
                'Required parameter "subscriptionProductVersionRetirementRequest" was null or undefined when calling postSubscriptionsProductsVersionsIdRetire().'
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
        const path = `/subscriptions/products/versions/{id}/retire`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: SubscriptionProductVersionRetirementRequestToJSON(requestParameters['subscriptionProductVersionRetirementRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductVersionRetirementFromJSON(jsonValue));
    }

    /**
     * Retire a product version
     
     */
    async postSubscriptionsProductsVersionsIdRetire(requestParameters: PostSubscriptionsProductsVersionsIdRetireRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductVersionRetirement> {
        const response = await this.postSubscriptionsProductsVersionsIdRetireRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
