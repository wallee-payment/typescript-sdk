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
  ConditionType,
  ConditionTypeListResponse,
  ConditionTypeSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    ConditionTypeFromJSON,
    ConditionTypeToJSON,
    ConditionTypeListResponseFromJSON,
    ConditionTypeListResponseToJSON,
    ConditionTypeSearchResponseFromJSON,
    ConditionTypeSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentConditionTypesRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentConditionTypesIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetPaymentConditionTypesSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class ConditionTypesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all condition types.
     
     */
    async getPaymentConditionTypesRaw(requestParameters: GetPaymentConditionTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConditionTypeListResponse>> {
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
        const path = `/payment/condition-types`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ConditionTypeListResponseFromJSON(jsonValue));
    }

    /**
     * List all condition types.
     
     */
    async getPaymentConditionTypes(requestParameters: GetPaymentConditionTypesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConditionTypeListResponse> {
        const response = await this.getPaymentConditionTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a condition type.
     
     */
    async getPaymentConditionTypesIdRaw(requestParameters: GetPaymentConditionTypesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConditionType>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentConditionTypesId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/payment/condition-types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ConditionTypeFromJSON(jsonValue));
    }

    /**
     * Retrieve a condition type.
     
     */
    async getPaymentConditionTypesId(requestParameters: GetPaymentConditionTypesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConditionType> {
        const response = await this.getPaymentConditionTypesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search condition types.
     
     */
    async getPaymentConditionTypesSearchRaw(requestParameters: GetPaymentConditionTypesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConditionTypeSearchResponse>> {
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
        const path = `/payment/condition-types/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ConditionTypeSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search condition types.
     
     */
    async getPaymentConditionTypesSearch(requestParameters: GetPaymentConditionTypesSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConditionTypeSearchResponse> {
        const response = await this.getPaymentConditionTypesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
