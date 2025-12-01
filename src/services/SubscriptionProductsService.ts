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
  ProductListResponse,
  ProductSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  SubscriptionProduct,
  SubscriptionProductActive,
  SubscriptionProductCreate,
  SubscriptionProductRetirement,
  SubscriptionProductRetirementRequest,
} from '../models/index';
import {
    ProductListResponseFromJSON,
    ProductListResponseToJSON,
    ProductSearchResponseFromJSON,
    ProductSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionProductFromJSON,
    SubscriptionProductToJSON,
    SubscriptionProductActiveFromJSON,
    SubscriptionProductActiveToJSON,
    SubscriptionProductCreateFromJSON,
    SubscriptionProductCreateToJSON,
    SubscriptionProductRetirementFromJSON,
    SubscriptionProductRetirementToJSON,
    SubscriptionProductRetirementRequestFromJSON,
    SubscriptionProductRetirementRequestToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetSubscriptionsProductsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsProductsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsProductsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsProductsIdRequest {
    id: number;
    space: number;
    subscriptionProductActive: SubscriptionProductActive;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsRequest {
    space: number;
    subscriptionProductCreate: SubscriptionProductCreate;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsIdRetireRequest {
    id: number;
    space: number;
    subscriptionProductRetirementRequest: SubscriptionProductRetirementRequest;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionProductsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all products
     
     */
    async getSubscriptionsProductsRaw(requestParameters: GetSubscriptionsProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProducts().'
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
        const path = `/subscriptions/products`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductListResponseFromJSON(jsonValue));
    }

    /**
     * List all products
     
     */
    async getSubscriptionsProducts(requestParameters: GetSubscriptionsProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductListResponse> {
        const response = await this.getSubscriptionsProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a product
     
     */
    async getSubscriptionsProductsIdRaw(requestParameters: GetSubscriptionsProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProduct>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsProductsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsId().'
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
        const path = `/subscriptions/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductFromJSON(jsonValue));
    }

    /**
     * Retrieve a product
     
     */
    async getSubscriptionsProductsId(requestParameters: GetSubscriptionsProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProduct> {
        const response = await this.getSubscriptionsProductsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search products
     
     */
    async getSubscriptionsProductsSearchRaw(requestParameters: GetSubscriptionsProductsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsSearch().'
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
        const path = `/subscriptions/products/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search products
     
     */
    async getSubscriptionsProductsSearch(requestParameters: GetSubscriptionsProductsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSearchResponse> {
        const response = await this.getSubscriptionsProductsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a product
     
     */
    async patchSubscriptionsProductsIdRaw(requestParameters: PatchSubscriptionsProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProduct>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsProductsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsProductsId().'
            );
        }

        if (requestParameters['subscriptionProductActive'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductActive',
                'Required parameter "subscriptionProductActive" was null or undefined when calling patchSubscriptionsProductsId().'
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
        const path = `/subscriptions/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionProductActiveToJSON(requestParameters['subscriptionProductActive']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductFromJSON(jsonValue));
    }

    /**
     * Update a product
     
     */
    async patchSubscriptionsProductsId(requestParameters: PatchSubscriptionsProductsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProduct> {
        const response = await this.patchSubscriptionsProductsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a product
     
     */
    async postSubscriptionsProductsRaw(requestParameters: PostSubscriptionsProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProduct>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProducts().'
            );
        }

        if (requestParameters['subscriptionProductCreate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductCreate',
                'Required parameter "subscriptionProductCreate" was null or undefined when calling postSubscriptionsProducts().'
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
        const path = `/subscriptions/products`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionProductCreateToJSON(requestParameters['subscriptionProductCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductFromJSON(jsonValue));
    }

    /**
     * Create a product
     
     */
    async postSubscriptionsProducts(requestParameters: PostSubscriptionsProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProduct> {
        const response = await this.postSubscriptionsProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retire a product
     
     */
    async postSubscriptionsProductsIdRetireRaw(requestParameters: PostSubscriptionsProductsIdRetireRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductRetirement>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsProductsIdRetire().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsIdRetire().'
            );
        }

        if (requestParameters['subscriptionProductRetirementRequest'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductRetirementRequest',
                'Required parameter "subscriptionProductRetirementRequest" was null or undefined when calling postSubscriptionsProductsIdRetire().'
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
        const path = `/subscriptions/products/{id}/retire`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/{id}/retire`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionProductRetirementRequestToJSON(requestParameters['subscriptionProductRetirementRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductRetirementFromJSON(jsonValue));
    }

    /**
     * Retire a product
     
     */
    async postSubscriptionsProductsIdRetire(requestParameters: PostSubscriptionsProductsIdRetireRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductRetirement> {
        const response = await this.postSubscriptionsProductsIdRetireRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
