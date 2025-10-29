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
  ProductRetirementListResponse,
  ProductRetirementSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  SubscriptionProductRetirement,
} from '../models/index';
import {
    ProductRetirementListResponseFromJSON,
    ProductRetirementListResponseToJSON,
    ProductRetirementSearchResponseFromJSON,
    ProductRetirementSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionProductRetirementFromJSON,
    SubscriptionProductRetirementToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetSubscriptionsProductsRetirementsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsProductsRetirementsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsProductsRetirementsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class SubscriptionProductRetirementsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all product retirements
     
     */
    async getSubscriptionsProductsRetirementsRaw(requestParameters: GetSubscriptionsProductsRetirementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductRetirementListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsRetirements().'
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
        const path = `/subscriptions/products/retirements`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductRetirementListResponseFromJSON(jsonValue));
    }

    /**
     * List all product retirements
     
     */
    async getSubscriptionsProductsRetirements(requestParameters: GetSubscriptionsProductsRetirementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductRetirementListResponse> {
        const response = await this.getSubscriptionsProductsRetirementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a product retirement
     
     */
    async getSubscriptionsProductsRetirementsIdRaw(requestParameters: GetSubscriptionsProductsRetirementsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductRetirement>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsProductsRetirementsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsRetirementsId().'
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
        const path = `/subscriptions/products/retirements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductRetirementFromJSON(jsonValue));
    }

    /**
     * Retrieve a product retirement
     
     */
    async getSubscriptionsProductsRetirementsId(requestParameters: GetSubscriptionsProductsRetirementsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductRetirement> {
        const response = await this.getSubscriptionsProductsRetirementsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search product retirements
     
     */
    async getSubscriptionsProductsRetirementsSearchRaw(requestParameters: GetSubscriptionsProductsRetirementsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductRetirementSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsRetirementsSearch().'
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
        const path = `/subscriptions/products/retirements/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductRetirementSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search product retirements
     
     */
    async getSubscriptionsProductsRetirementsSearch(requestParameters: GetSubscriptionsProductsRetirementsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductRetirementSearchResponse> {
        const response = await this.getSubscriptionsProductsRetirementsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
