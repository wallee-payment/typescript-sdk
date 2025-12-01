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
  ProductPeriodFee,
  ProductPeriodFeeListResponse,
  ProductPeriodFeeSearchResponse,
  ProductPeriodFeeUpdate,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    ProductPeriodFeeFromJSON,
    ProductPeriodFeeToJSON,
    ProductPeriodFeeListResponseFromJSON,
    ProductPeriodFeeListResponseToJSON,
    ProductPeriodFeeSearchResponseFromJSON,
    ProductPeriodFeeSearchResponseToJSON,
    ProductPeriodFeeUpdateFromJSON,
    ProductPeriodFeeUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSubscriptionsProductsPeriodFeesIdRequest {
    id: number;
    space: number;
}

export interface GetSubscriptionsProductsPeriodFeesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsProductsPeriodFeesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsProductsPeriodFeesSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsProductsPeriodFeesIdRequest {
    id: number;
    space: number;
    productPeriodFeeUpdate: ProductPeriodFeeUpdate;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsPeriodFeesRequest {
    space: number;
    productPeriodFeeUpdate: ProductPeriodFeeUpdate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionProductPeriodFeesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a period fee
     
     */
    async deleteSubscriptionsProductsPeriodFeesIdRaw(requestParameters: DeleteSubscriptionsProductsPeriodFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSubscriptionsProductsPeriodFeesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSubscriptionsProductsPeriodFeesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/subscriptions/products/period-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/period-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a period fee
     
     */
    async deleteSubscriptionsProductsPeriodFeesId(requestParameters: DeleteSubscriptionsProductsPeriodFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSubscriptionsProductsPeriodFeesIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all period fees
     
     */
    async getSubscriptionsProductsPeriodFeesRaw(requestParameters: GetSubscriptionsProductsPeriodFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPeriodFeeListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsPeriodFees().'
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
        const path = `/subscriptions/products/period-fees`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/period-fees`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductPeriodFeeListResponseFromJSON(jsonValue));
    }

    /**
     * List all period fees
     
     */
    async getSubscriptionsProductsPeriodFees(requestParameters: GetSubscriptionsProductsPeriodFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPeriodFeeListResponse> {
        const response = await this.getSubscriptionsProductsPeriodFeesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a period fee
     
     */
    async getSubscriptionsProductsPeriodFeesIdRaw(requestParameters: GetSubscriptionsProductsPeriodFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPeriodFee>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsProductsPeriodFeesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsPeriodFeesId().'
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
        const path = `/subscriptions/products/period-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/period-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductPeriodFeeFromJSON(jsonValue));
    }

    /**
     * Retrieve a period fee
     
     */
    async getSubscriptionsProductsPeriodFeesId(requestParameters: GetSubscriptionsProductsPeriodFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPeriodFee> {
        const response = await this.getSubscriptionsProductsPeriodFeesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search period fees
     
     */
    async getSubscriptionsProductsPeriodFeesSearchRaw(requestParameters: GetSubscriptionsProductsPeriodFeesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPeriodFeeSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsPeriodFeesSearch().'
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
        const path = `/subscriptions/products/period-fees/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/period-fees/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductPeriodFeeSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search period fees
     
     */
    async getSubscriptionsProductsPeriodFeesSearch(requestParameters: GetSubscriptionsProductsPeriodFeesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPeriodFeeSearchResponse> {
        const response = await this.getSubscriptionsProductsPeriodFeesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a period fee
     
     */
    async patchSubscriptionsProductsPeriodFeesIdRaw(requestParameters: PatchSubscriptionsProductsPeriodFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPeriodFee>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsProductsPeriodFeesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsProductsPeriodFeesId().'
            );
        }

        if (requestParameters['productPeriodFeeUpdate'] == null) {
            throw new runtime.RequiredError(
                'productPeriodFeeUpdate',
                'Required parameter "productPeriodFeeUpdate" was null or undefined when calling patchSubscriptionsProductsPeriodFeesId().'
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
        const path = `/subscriptions/products/period-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/period-fees/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProductPeriodFeeUpdateToJSON(requestParameters['productPeriodFeeUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductPeriodFeeFromJSON(jsonValue));
    }

    /**
     * Update a period fee
     
     */
    async patchSubscriptionsProductsPeriodFeesId(requestParameters: PatchSubscriptionsProductsPeriodFeesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPeriodFee> {
        const response = await this.patchSubscriptionsProductsPeriodFeesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a period fee
     
     */
    async postSubscriptionsProductsPeriodFeesRaw(requestParameters: PostSubscriptionsProductsPeriodFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductPeriodFee>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsPeriodFees().'
            );
        }

        if (requestParameters['productPeriodFeeUpdate'] == null) {
            throw new runtime.RequiredError(
                'productPeriodFeeUpdate',
                'Required parameter "productPeriodFeeUpdate" was null or undefined when calling postSubscriptionsProductsPeriodFees().'
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
        const path = `/subscriptions/products/period-fees`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/period-fees`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductPeriodFeeUpdateToJSON(requestParameters['productPeriodFeeUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductPeriodFeeFromJSON(jsonValue));
    }

    /**
     * Create a period fee
     
     */
    async postSubscriptionsProductsPeriodFees(requestParameters: PostSubscriptionsProductsPeriodFeesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductPeriodFee> {
        const response = await this.postSubscriptionsProductsPeriodFeesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
