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
  CountryListResponse,
  CountrySearchResponse,
  RestApiErrorResponse,
  RestCountry,
  RestCountryState,
} from '../models/index';
import {
    CountryListResponseFromJSON,
    CountryListResponseToJSON,
    CountrySearchResponseFromJSON,
    CountrySearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    RestCountryFromJSON,
    RestCountryToJSON,
    RestCountryStateFromJSON,
    RestCountryStateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetCountriesRequest {
    expand?: Set<string>;
}

export interface GetCountriesCodeRequest {
    code: string;
    expand?: Set<string>;
}

export interface GetCountriesCountryCodeStatesRequest {
    countryCode: string;
}

export interface GetCountriesSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface GetCountriesStatesIdRequest {
    id: string;
}

/**
 * 
 */
export class CountriesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all countries
     
     */
    async getCountriesRaw(requestParameters: GetCountriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountryListResponse>> {
        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/countries`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => CountryListResponseFromJSON(jsonValue));
    }

    /**
     * List all countries
     
     */
    async getCountries(requestParameters: GetCountriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountryListResponse> {
        const response = await this.getCountriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a country
     
     */
    async getCountriesCodeRaw(requestParameters: GetCountriesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestCountry>> {
        if (requestParameters['code'] == null) {
            throw new runtime.RequiredError(
                'code',
                'Required parameter "code" was null or undefined when calling getCountriesCode().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/countries/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters['code'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => RestCountryFromJSON(jsonValue));
    }

    /**
     * Retrieve a country
     
     */
    async getCountriesCode(requestParameters: GetCountriesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestCountry> {
        const response = await this.getCountriesCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all states for a country
     
     */
    async getCountriesCountryCodeStatesRaw(requestParameters: GetCountriesCountryCodeStatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestCountryState>>> {
        if (requestParameters['countryCode'] == null) {
            throw new runtime.RequiredError(
                'countryCode',
                'Required parameter "countryCode" was null or undefined when calling getCountriesCountryCodeStates().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/countries/{countryCode}/states`.replace(`{${"countryCode"}}`, encodeURIComponent(String(requestParameters['countryCode'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestCountryStateFromJSON));
    }

    /**
     * List all states for a country
     
     */
    async getCountriesCountryCodeStates(requestParameters: GetCountriesCountryCodeStatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestCountryState>> {
        const response = await this.getCountriesCountryCodeStatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search countries
     
     */
    async getCountriesSearchRaw(requestParameters: GetCountriesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountrySearchResponse>> {
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
        const path = `/countries/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => CountrySearchResponseFromJSON(jsonValue));
    }

    /**
     * Search countries
     
     */
    async getCountriesSearch(requestParameters: GetCountriesSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountrySearchResponse> {
        const response = await this.getCountriesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all country states
     
     */
    async getCountriesStatesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestCountryState>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/countries/states`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestCountryStateFromJSON));
    }

    /**
     * List all country states
     
     */
    async getCountriesStates(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestCountryState>> {
        const response = await this.getCountriesStatesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a country state
     
     */
    async getCountriesStatesIdRaw(requestParameters: GetCountriesStatesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestCountryState>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getCountriesStatesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/countries/states/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => RestCountryStateFromJSON(jsonValue));
    }

    /**
     * Retrieve a country state
     
     */
    async getCountriesStatesId(requestParameters: GetCountriesStatesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestCountryState> {
        const response = await this.getCountriesStatesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
