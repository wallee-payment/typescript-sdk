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
  ChargeFlowLevel,
  ChargeFlowLevelListResponse,
  ChargeFlowLevelSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    ChargeFlowLevelFromJSON,
    ChargeFlowLevelToJSON,
    ChargeFlowLevelListResponseFromJSON,
    ChargeFlowLevelListResponseToJSON,
    ChargeFlowLevelSearchResponseFromJSON,
    ChargeFlowLevelSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentChargeFlowsLevelsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentChargeFlowsLevelsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentChargeFlowsLevelsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostPaymentChargeFlowsLevelsIdSendMessageRequest {
    id: number;
    space: number;
}

/**
 * 
 */
export class ChargeFlowLevelsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all charge flow levels
     
     */
    async getPaymentChargeFlowsLevelsRaw(requestParameters: GetPaymentChargeFlowsLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargeFlowLevelListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentChargeFlowsLevels().'
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
        const path = `/payment/charge-flows/levels`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeFlowLevelListResponseFromJSON(jsonValue));
    }

    /**
     * List all charge flow levels
     
     */
    async getPaymentChargeFlowsLevels(requestParameters: GetPaymentChargeFlowsLevelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargeFlowLevelListResponse> {
        const response = await this.getPaymentChargeFlowsLevelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a charge flow level
     
     */
    async getPaymentChargeFlowsLevelsIdRaw(requestParameters: GetPaymentChargeFlowsLevelsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargeFlowLevel>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentChargeFlowsLevelsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentChargeFlowsLevelsId().'
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
        const path = `/payment/charge-flows/levels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeFlowLevelFromJSON(jsonValue));
    }

    /**
     * Retrieve a charge flow level
     
     */
    async getPaymentChargeFlowsLevelsId(requestParameters: GetPaymentChargeFlowsLevelsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargeFlowLevel> {
        const response = await this.getPaymentChargeFlowsLevelsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search charge flow levels
     
     */
    async getPaymentChargeFlowsLevelsSearchRaw(requestParameters: GetPaymentChargeFlowsLevelsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargeFlowLevelSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentChargeFlowsLevelsSearch().'
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
        const path = `/payment/charge-flows/levels/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeFlowLevelSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search charge flow levels
     
     */
    async getPaymentChargeFlowsLevelsSearch(requestParameters: GetPaymentChargeFlowsLevelsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargeFlowLevelSearchResponse> {
        const response = await this.getPaymentChargeFlowsLevelsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Send a payment link
     
     */
    async postPaymentChargeFlowsLevelsIdSendMessageRaw(requestParameters: PostPaymentChargeFlowsLevelsIdSendMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentChargeFlowsLevelsIdSendMessage().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentChargeFlowsLevelsIdSendMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/charge-flows/levels/{id}/send-message`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Send a payment link
     
     */
    async postPaymentChargeFlowsLevelsIdSendMessage(requestParameters: PostPaymentChargeFlowsLevelsIdSendMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentChargeFlowsLevelsIdSendMessageRaw(requestParameters, initOverrides);
    }


}
