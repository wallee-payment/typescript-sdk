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
  LanguageListResponse,
  LanguageSearchResponse,
  RestApiErrorResponse,
  RestLanguage,
} from '../models/index';
import {
    LanguageListResponseFromJSON,
    LanguageListResponseToJSON,
    LanguageSearchResponseFromJSON,
    LanguageSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    RestLanguageFromJSON,
    RestLanguageToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetLanguagesRequest {
    expand?: Set<string>;
}

export interface GetLanguagesCodeRequest {
    code: string;
}

export interface GetLanguagesSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class LanguagesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all languages
     
     */
    async getLanguagesRaw(requestParameters: GetLanguagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LanguageListResponse>> {
        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/languages`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/languages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LanguageListResponseFromJSON(jsonValue));
    }

    /**
     * List all languages
     
     */
    async getLanguages(requestParameters: GetLanguagesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LanguageListResponse> {
        const response = await this.getLanguagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a language
     
     */
    async getLanguagesCodeRaw(requestParameters: GetLanguagesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestLanguage>> {
        if (requestParameters['code'] == null) {
            throw new runtime.RequiredError(
                'code',
                'Required parameter "code" was null or undefined when calling getLanguagesCode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/languages/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters['code'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/languages/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters['code']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestLanguageFromJSON(jsonValue));
    }

    /**
     * Retrieve a language
     
     */
    async getLanguagesCode(requestParameters: GetLanguagesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestLanguage> {
        const response = await this.getLanguagesCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search languages
     
     */
    async getLanguagesSearchRaw(requestParameters: GetLanguagesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LanguageSearchResponse>> {
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
        const path = `/languages/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/languages/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LanguageSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search languages
     
     */
    async getLanguagesSearch(requestParameters: GetLanguagesSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LanguageSearchResponse> {
        const response = await this.getLanguagesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
