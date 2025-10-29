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
  ProductSetupFee,
  ProductSetupFeeListResponse,
  ProductSetupFeeSearchResponse,
  ProductSetupFeeUpdate,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    ProductSetupFeeFromJSON,
    ProductSetupFeeToJSON,
    ProductSetupFeeListResponseFromJSON,
    ProductSetupFeeListResponseToJSON,
    ProductSetupFeeSearchResponseFromJSON,
    ProductSetupFeeSearchResponseToJSON,
    ProductSetupFeeUpdateFromJSON,
    ProductSetupFeeUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSubscriptionsProductsSetupFeesIdRequest {
    id: number;
    space: number;
}

export interface GetSubscriptionsProductsSetupFeesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsProductsSetupFeesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsProductsSetupFeesSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsProductsSetupFeesIdRequest {
    id: number;
    space: number;
    productSetupFeeUpdate: ProductSetupFeeUpdate;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsSetupFeesRequest {
    space: number;
    productSetupFeeUpdate: ProductSetupFeeUpdate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionProductSetupFeesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a setup fee
     
     */
    async deleteSubscriptionsProductsSetupFeesIdRaw(requestParameters: DeleteSubscriptionsProductsSetupFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSubscriptionsProductsSetupFeesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSubscriptionsProductsSetupFeesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/subscriptions/products/setup-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Delete a setup fee
     
     */
    async deleteSubscriptionsProductsSetupFeesId(requestParameters: DeleteSubscriptionsProductsSetupFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSubscriptionsProductsSetupFeesIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all setup fees
     
     */
    async getSubscriptionsProductsSetupFeesRaw(requestParameters: GetSubscriptionsProductsSetupFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSetupFeeListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsSetupFees().'
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
        const path = `/subscriptions/products/setup-fees`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSetupFeeListResponseFromJSON(jsonValue));
    }

    /**
     * List all setup fees
     
     */
    async getSubscriptionsProductsSetupFees(requestParameters: GetSubscriptionsProductsSetupFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSetupFeeListResponse> {
        const response = await this.getSubscriptionsProductsSetupFeesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a setup fee
     
     */
    async getSubscriptionsProductsSetupFeesIdRaw(requestParameters: GetSubscriptionsProductsSetupFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSetupFee>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsProductsSetupFeesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsSetupFeesId().'
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
        const path = `/subscriptions/products/setup-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSetupFeeFromJSON(jsonValue));
    }

    /**
     * Retrieve a setup fee
     
     */
    async getSubscriptionsProductsSetupFeesId(requestParameters: GetSubscriptionsProductsSetupFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSetupFee> {
        const response = await this.getSubscriptionsProductsSetupFeesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search setup fees
     
     */
    async getSubscriptionsProductsSetupFeesSearchRaw(requestParameters: GetSubscriptionsProductsSetupFeesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSetupFeeSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsSetupFeesSearch().'
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
        const path = `/subscriptions/products/setup-fees/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSetupFeeSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search setup fees
     
     */
    async getSubscriptionsProductsSetupFeesSearch(requestParameters: GetSubscriptionsProductsSetupFeesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSetupFeeSearchResponse> {
        const response = await this.getSubscriptionsProductsSetupFeesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a setup fee
     
     */
    async patchSubscriptionsProductsSetupFeesIdRaw(requestParameters: PatchSubscriptionsProductsSetupFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSetupFee>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsProductsSetupFeesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsProductsSetupFeesId().'
            );
        }

        if (requestParameters['productSetupFeeUpdate'] == null) {
            throw new runtime.RequiredError(
                'productSetupFeeUpdate',
                'Required parameter "productSetupFeeUpdate" was null or undefined when calling patchSubscriptionsProductsSetupFeesId().'
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
        const path = `/subscriptions/products/setup-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: ProductSetupFeeUpdateToJSON(requestParameters['productSetupFeeUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSetupFeeFromJSON(jsonValue));
    }

    /**
     * Update a setup fee
     
     */
    async patchSubscriptionsProductsSetupFeesId(requestParameters: PatchSubscriptionsProductsSetupFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSetupFee> {
        const response = await this.patchSubscriptionsProductsSetupFeesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a setup fee
     
     */
    async postSubscriptionsProductsSetupFeesRaw(requestParameters: PostSubscriptionsProductsSetupFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSetupFee>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsSetupFees().'
            );
        }

        if (requestParameters['productSetupFeeUpdate'] == null) {
            throw new runtime.RequiredError(
                'productSetupFeeUpdate',
                'Required parameter "productSetupFeeUpdate" was null or undefined when calling postSubscriptionsProductsSetupFees().'
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
        const path = `/subscriptions/products/setup-fees`;

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
            body: ProductSetupFeeUpdateToJSON(requestParameters['productSetupFeeUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductSetupFeeFromJSON(jsonValue));
    }

    /**
     * Create a setup fee
     
     */
    async postSubscriptionsProductsSetupFees(requestParameters: PostSubscriptionsProductsSetupFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSetupFee> {
        const response = await this.postSubscriptionsProductsSetupFeesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
