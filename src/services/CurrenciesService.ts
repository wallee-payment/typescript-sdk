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
  CurrencyListResponse,
  CurrencySearchResponse,
  RestApiErrorResponse,
  RestCurrency,
} from '../models/index';
import {
    CurrencyListResponseFromJSON,
    CurrencyListResponseToJSON,
    CurrencySearchResponseFromJSON,
    CurrencySearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    RestCurrencyFromJSON,
    RestCurrencyToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetCurrenciesRequest {
    expand?: Set<string>;
}

export interface GetCurrenciesCodeRequest {
    code: string;
}

export interface GetCurrenciesSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class CurrenciesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all currencies
     
     */
    async getCurrenciesRaw(requestParameters: GetCurrenciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyListResponse>> {
        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/currencies`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/currencies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencyListResponseFromJSON(jsonValue));
    }

    /**
     * List all currencies
     
     */
    async getCurrencies(requestParameters: GetCurrenciesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyListResponse> {
        const response = await this.getCurrenciesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a currency
     
     */
    async getCurrenciesCodeRaw(requestParameters: GetCurrenciesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestCurrency>> {
        if (requestParameters['code'] == null) {
            throw new runtime.RequiredError(
                'code',
                'Required parameter "code" was null or undefined when calling getCurrenciesCode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/currencies/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters['code'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/currencies/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters['code']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestCurrencyFromJSON(jsonValue));
    }

    /**
     * Retrieve a currency
     
     */
    async getCurrenciesCode(requestParameters: GetCurrenciesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestCurrency> {
        const response = await this.getCurrenciesCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search currencies
     
     */
    async getCurrenciesSearchRaw(requestParameters: GetCurrenciesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencySearchResponse>> {
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
        const path = `/currencies/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/currencies/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrencySearchResponseFromJSON(jsonValue));
    }

    /**
     * Search currencies
     
     */
    async getCurrenciesSearch(requestParameters: GetCurrenciesSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencySearchResponse> {
        const response = await this.getCurrenciesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
