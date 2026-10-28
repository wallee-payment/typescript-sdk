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
  DunningCaseLevel,
  DunningCaseLevelListResponse,
  DunningCaseLevelSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    DunningCaseLevelFromJSON,
    DunningCaseLevelToJSON,
    DunningCaseLevelListResponseFromJSON,
    DunningCaseLevelListResponseToJSON,
    DunningCaseLevelSearchResponseFromJSON,
    DunningCaseLevelSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentDunningCasesLevelsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentDunningCasesLevelsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentDunningCasesLevelsSearchRequest {
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
export class DunningCaseLevelsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all dunning case levels
     
     */
    async getPaymentDunningCasesLevelsRaw(requestParameters: GetPaymentDunningCasesLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DunningCaseLevelListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentDunningCasesLevels().'
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
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/dunning-cases/levels`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/dunning-cases/levels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DunningCaseLevelListResponseFromJSON(jsonValue));
    }

    /**
     * List all dunning case levels
     
     */
    async getPaymentDunningCasesLevels(requestParameters: GetPaymentDunningCasesLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DunningCaseLevelListResponse> {
        const response = await this.getPaymentDunningCasesLevelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a dunning case level
     
     */
    async getPaymentDunningCasesLevelsIdRaw(requestParameters: GetPaymentDunningCasesLevelsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DunningCaseLevel>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentDunningCasesLevelsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentDunningCasesLevelsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/dunning-cases/levels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/dunning-cases/levels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DunningCaseLevelFromJSON(jsonValue));
    }

    /**
     * Retrieve a dunning case level
     
     */
    async getPaymentDunningCasesLevelsId(requestParameters: GetPaymentDunningCasesLevelsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DunningCaseLevel> {
        const response = await this.getPaymentDunningCasesLevelsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search dunning case levels. Filter by dunningCase.id, mostRecentLevel and state to identify the currently active level of a case, e.g. query=dunningCase.id:123 and mostRecentLevel:true
     * Search dunning case levels
     
     */
    async getPaymentDunningCasesLevelsSearchRaw(requestParameters: GetPaymentDunningCasesLevelsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DunningCaseLevelSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentDunningCasesLevelsSearch().'
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
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/dunning-cases/levels/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/dunning-cases/levels/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DunningCaseLevelSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search dunning case levels. Filter by dunningCase.id, mostRecentLevel and state to identify the currently active level of a case, e.g. query=dunningCase.id:123 and mostRecentLevel:true
     * Search dunning case levels
     
     */
    async getPaymentDunningCasesLevelsSearch(requestParameters: GetPaymentDunningCasesLevelsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DunningCaseLevelSearchResponse> {
        const response = await this.getPaymentDunningCasesLevelsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
