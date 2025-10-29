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
  ProductMeteredFee,
  ProductMeteredFeeListResponse,
  ProductMeteredFeeSearchResponse,
  ProductMeteredFeeUpdate,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    ProductMeteredFeeFromJSON,
    ProductMeteredFeeToJSON,
    ProductMeteredFeeListResponseFromJSON,
    ProductMeteredFeeListResponseToJSON,
    ProductMeteredFeeSearchResponseFromJSON,
    ProductMeteredFeeSearchResponseToJSON,
    ProductMeteredFeeUpdateFromJSON,
    ProductMeteredFeeUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSubscriptionsProductsMeteredFeesIdRequest {
    id: number;
    space: number;
}

export interface GetSubscriptionsProductsMeteredFeesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsProductsMeteredFeesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsProductsMeteredFeesSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsProductsMeteredFeesIdRequest {
    id: number;
    space: number;
    productMeteredFeeUpdate: ProductMeteredFeeUpdate;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsMeteredFeesRequest {
    space: number;
    productMeteredFeeUpdate: ProductMeteredFeeUpdate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionProductMeteredFeesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a metered fee
     
     */
    async deleteSubscriptionsProductsMeteredFeesIdRaw(requestParameters: DeleteSubscriptionsProductsMeteredFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSubscriptionsProductsMeteredFeesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSubscriptionsProductsMeteredFeesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/subscriptions/products/metered-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Delete a metered fee
     
     */
    async deleteSubscriptionsProductsMeteredFeesId(requestParameters: DeleteSubscriptionsProductsMeteredFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSubscriptionsProductsMeteredFeesIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all metered fees
     
     */
    async getSubscriptionsProductsMeteredFeesRaw(requestParameters: GetSubscriptionsProductsMeteredFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredFeeListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsMeteredFees().'
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
        const path = `/subscriptions/products/metered-fees`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredFeeListResponseFromJSON(jsonValue));
    }

    /**
     * List all metered fees
     
     */
    async getSubscriptionsProductsMeteredFees(requestParameters: GetSubscriptionsProductsMeteredFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredFeeListResponse> {
        const response = await this.getSubscriptionsProductsMeteredFeesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a metered fee
     
     */
    async getSubscriptionsProductsMeteredFeesIdRaw(requestParameters: GetSubscriptionsProductsMeteredFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredFee>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsProductsMeteredFeesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsMeteredFeesId().'
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
        const path = `/subscriptions/products/metered-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredFeeFromJSON(jsonValue));
    }

    /**
     * Retrieve a metered fee
     
     */
    async getSubscriptionsProductsMeteredFeesId(requestParameters: GetSubscriptionsProductsMeteredFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredFee> {
        const response = await this.getSubscriptionsProductsMeteredFeesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search metered fees
     
     */
    async getSubscriptionsProductsMeteredFeesSearchRaw(requestParameters: GetSubscriptionsProductsMeteredFeesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredFeeSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsMeteredFeesSearch().'
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
        const path = `/subscriptions/products/metered-fees/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredFeeSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search metered fees
     
     */
    async getSubscriptionsProductsMeteredFeesSearch(requestParameters: GetSubscriptionsProductsMeteredFeesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredFeeSearchResponse> {
        const response = await this.getSubscriptionsProductsMeteredFeesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a metered fee
     
     */
    async patchSubscriptionsProductsMeteredFeesIdRaw(requestParameters: PatchSubscriptionsProductsMeteredFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredFee>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsProductsMeteredFeesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsProductsMeteredFeesId().'
            );
        }

        if (requestParameters['productMeteredFeeUpdate'] == null) {
            throw new runtime.RequiredError(
                'productMeteredFeeUpdate',
                'Required parameter "productMeteredFeeUpdate" was null or undefined when calling patchSubscriptionsProductsMeteredFeesId().'
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
        const path = `/subscriptions/products/metered-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: ProductMeteredFeeUpdateToJSON(requestParameters['productMeteredFeeUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredFeeFromJSON(jsonValue));
    }

    /**
     * Update a metered fee
     
     */
    async patchSubscriptionsProductsMeteredFeesId(requestParameters: PatchSubscriptionsProductsMeteredFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredFee> {
        const response = await this.patchSubscriptionsProductsMeteredFeesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a metered fee
     
     */
    async postSubscriptionsProductsMeteredFeesRaw(requestParameters: PostSubscriptionsProductsMeteredFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredFee>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsMeteredFees().'
            );
        }

        if (requestParameters['productMeteredFeeUpdate'] == null) {
            throw new runtime.RequiredError(
                'productMeteredFeeUpdate',
                'Required parameter "productMeteredFeeUpdate" was null or undefined when calling postSubscriptionsProductsMeteredFees().'
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
        const path = `/subscriptions/products/metered-fees`;

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
            body: ProductMeteredFeeUpdateToJSON(requestParameters['productMeteredFeeUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredFeeFromJSON(jsonValue));
    }

    /**
     * Create a metered fee
     
     */
    async postSubscriptionsProductsMeteredFees(requestParameters: PostSubscriptionsProductsMeteredFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredFee> {
        const response = await this.postSubscriptionsProductsMeteredFeesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
