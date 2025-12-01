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
  ChargeFlowLevelPaymentLink,
  ChargeFlowLevelPaymentLinkListResponse,
  ChargeFlowLevelPaymentLinkSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    ChargeFlowLevelPaymentLinkFromJSON,
    ChargeFlowLevelPaymentLinkToJSON,
    ChargeFlowLevelPaymentLinkListResponseFromJSON,
    ChargeFlowLevelPaymentLinkListResponseToJSON,
    ChargeFlowLevelPaymentLinkSearchResponseFromJSON,
    ChargeFlowLevelPaymentLinkSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentChargeFlowsLevelsPaymentLinksRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentChargeFlowsLevelsPaymentLinksIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentChargeFlowsLevelsPaymentLinksSearchRequest {
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
export class ChargeFlowsLevelPaymentLinksService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all charge flow payment links
     
     */
    async getPaymentChargeFlowsLevelsPaymentLinksRaw(requestParameters: GetPaymentChargeFlowsLevelsPaymentLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargeFlowLevelPaymentLinkListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentChargeFlowsLevelsPaymentLinks().'
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
        const path = `/payment/charge-flows/levels/payment-links`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/charge-flows/levels/payment-links`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeFlowLevelPaymentLinkListResponseFromJSON(jsonValue));
    }

    /**
     * List all charge flow payment links
     
     */
    async getPaymentChargeFlowsLevelsPaymentLinks(requestParameters: GetPaymentChargeFlowsLevelsPaymentLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargeFlowLevelPaymentLinkListResponse> {
        const response = await this.getPaymentChargeFlowsLevelsPaymentLinksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a charge flow payment link
     
     */
    async getPaymentChargeFlowsLevelsPaymentLinksIdRaw(requestParameters: GetPaymentChargeFlowsLevelsPaymentLinksIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargeFlowLevelPaymentLink>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentChargeFlowsLevelsPaymentLinksId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentChargeFlowsLevelsPaymentLinksId().'
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
        const path = `/payment/charge-flows/levels/payment-links/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/charge-flows/levels/payment-links/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeFlowLevelPaymentLinkFromJSON(jsonValue));
    }

    /**
     * Retrieve a charge flow payment link
     
     */
    async getPaymentChargeFlowsLevelsPaymentLinksId(requestParameters: GetPaymentChargeFlowsLevelsPaymentLinksIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargeFlowLevelPaymentLink> {
        const response = await this.getPaymentChargeFlowsLevelsPaymentLinksIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search charge flow payment links
     
     */
    async getPaymentChargeFlowsLevelsPaymentLinksSearchRaw(requestParameters: GetPaymentChargeFlowsLevelsPaymentLinksSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargeFlowLevelPaymentLinkSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentChargeFlowsLevelsPaymentLinksSearch().'
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
        const path = `/payment/charge-flows/levels/payment-links/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/charge-flows/levels/payment-links/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeFlowLevelPaymentLinkSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search charge flow payment links
     
     */
    async getPaymentChargeFlowsLevelsPaymentLinksSearch(requestParameters: GetPaymentChargeFlowsLevelsPaymentLinksSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargeFlowLevelPaymentLinkSearchResponse> {
        const response = await this.getPaymentChargeFlowsLevelsPaymentLinksSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
