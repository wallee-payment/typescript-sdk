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
  PaymentMethodBrand,
  PaymentMethodBrandListResponse,
  PaymentMethodBrandSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    PaymentMethodBrandFromJSON,
    PaymentMethodBrandToJSON,
    PaymentMethodBrandListResponseFromJSON,
    PaymentMethodBrandListResponseToJSON,
    PaymentMethodBrandSearchResponseFromJSON,
    PaymentMethodBrandSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentMethodBrandsRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentMethodBrandsIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetPaymentMethodBrandsSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class PaymentMethodBrandsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all payment method brands.
     
     */
    async getPaymentMethodBrandsRaw(requestParameters: GetPaymentMethodBrandsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodBrandListResponse>> {
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

        const method = 'GET';
        const path = `/payment/method-brands`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/method-brands`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodBrandListResponseFromJSON(jsonValue));
    }

    /**
     * List all payment method brands.
     
     */
    async getPaymentMethodBrands(requestParameters: GetPaymentMethodBrandsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodBrandListResponse> {
        const response = await this.getPaymentMethodBrandsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a payment method brand.
     
     */
    async getPaymentMethodBrandsIdRaw(requestParameters: GetPaymentMethodBrandsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodBrand>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentMethodBrandsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/payment/method-brands/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/method-brands/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodBrandFromJSON(jsonValue));
    }

    /**
     * Retrieve a payment method brand.
     
     */
    async getPaymentMethodBrandsId(requestParameters: GetPaymentMethodBrandsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodBrand> {
        const response = await this.getPaymentMethodBrandsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search payment method brands.
     
     */
    async getPaymentMethodBrandsSearchRaw(requestParameters: GetPaymentMethodBrandsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodBrandSearchResponse>> {
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

        const method = 'GET';
        const path = `/payment/method-brands/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/method-brands/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodBrandSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search payment method brands.
     
     */
    async getPaymentMethodBrandsSearch(requestParameters: GetPaymentMethodBrandsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodBrandSearchResponse> {
        const response = await this.getPaymentMethodBrandsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
