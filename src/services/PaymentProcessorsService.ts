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
  PaymentProcessor,
  PaymentProcessorListResponse,
  PaymentProcessorSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    PaymentProcessorFromJSON,
    PaymentProcessorToJSON,
    PaymentProcessorListResponseFromJSON,
    PaymentProcessorListResponseToJSON,
    PaymentProcessorSearchResponseFromJSON,
    PaymentProcessorSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentProcessorsRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentProcessorsIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetPaymentProcessorsSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class PaymentProcessorsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all payment processors.
     
     */
    async getPaymentProcessorsRaw(requestParameters: GetPaymentProcessorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentProcessorListResponse>> {
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
        const path = `/payment/processors`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentProcessorListResponseFromJSON(jsonValue));
    }

    /**
     * List all payment processors.
     
     */
    async getPaymentProcessors(requestParameters: GetPaymentProcessorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentProcessorListResponse> {
        const response = await this.getPaymentProcessorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a payment processor.
     
     */
    async getPaymentProcessorsIdRaw(requestParameters: GetPaymentProcessorsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentProcessor>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentProcessorsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/payment/processors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentProcessorFromJSON(jsonValue));
    }

    /**
     * Retrieve a payment processor.
     
     */
    async getPaymentProcessorsId(requestParameters: GetPaymentProcessorsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentProcessor> {
        const response = await this.getPaymentProcessorsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search payment processors.
     
     */
    async getPaymentProcessorsSearchRaw(requestParameters: GetPaymentProcessorsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentProcessorSearchResponse>> {
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
        const path = `/payment/processors/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentProcessorSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search payment processors.
     
     */
    async getPaymentProcessorsSearch(requestParameters: GetPaymentProcessorsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentProcessorSearchResponse> {
        const response = await this.getPaymentProcessorsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
