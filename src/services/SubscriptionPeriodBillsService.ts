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
  RestApiErrorResponse,
  SortingOrder,
  SubscriptionPeriodBill,
  SubscriptionPeriodBillListResponse,
  SubscriptionPeriodBillSearchResponse,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionPeriodBillFromJSON,
    SubscriptionPeriodBillToJSON,
    SubscriptionPeriodBillListResponseFromJSON,
    SubscriptionPeriodBillListResponseToJSON,
    SubscriptionPeriodBillSearchResponseFromJSON,
    SubscriptionPeriodBillSearchResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetSubscriptionsPeriodBillsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsPeriodBillsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsPeriodBillsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostSubscriptionsPeriodBillsIdCloseRequest {
    id: number;
    currentDate: Date;
    createNextPeriod: boolean;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionPeriodBillsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all subscription period bills
     
     */
    async getSubscriptionsPeriodBillsRaw(requestParameters: GetSubscriptionsPeriodBillsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPeriodBillListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsPeriodBills().'
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
        const path = `/subscriptions/period-bills`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPeriodBillListResponseFromJSON(jsonValue));
    }

    /**
     * List all subscription period bills
     
     */
    async getSubscriptionsPeriodBills(requestParameters: GetSubscriptionsPeriodBillsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPeriodBillListResponse> {
        const response = await this.getSubscriptionsPeriodBillsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a subscription period bill
     
     */
    async getSubscriptionsPeriodBillsIdRaw(requestParameters: GetSubscriptionsPeriodBillsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPeriodBill>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsPeriodBillsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsPeriodBillsId().'
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
        const path = `/subscriptions/period-bills/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPeriodBillFromJSON(jsonValue));
    }

    /**
     * Retrieve a subscription period bill
     
     */
    async getSubscriptionsPeriodBillsId(requestParameters: GetSubscriptionsPeriodBillsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPeriodBill> {
        const response = await this.getSubscriptionsPeriodBillsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search subscription period bills
     
     */
    async getSubscriptionsPeriodBillsSearchRaw(requestParameters: GetSubscriptionsPeriodBillsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPeriodBillSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsPeriodBillsSearch().'
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
        const path = `/subscriptions/period-bills/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPeriodBillSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search subscription period bills
     
     */
    async getSubscriptionsPeriodBillsSearch(requestParameters: GetSubscriptionsPeriodBillsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPeriodBillSearchResponse> {
        const response = await this.getSubscriptionsPeriodBillsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Close a subscription period bill
     
     */
    async postSubscriptionsPeriodBillsIdCloseRaw(requestParameters: PostSubscriptionsPeriodBillsIdCloseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPeriodBill>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsPeriodBillsIdClose().'
            );
        }

        if (requestParameters['currentDate'] == null) {
            throw new runtime.RequiredError(
                'currentDate',
                'Required parameter "currentDate" was null or undefined when calling postSubscriptionsPeriodBillsIdClose().'
            );
        }

        if (requestParameters['createNextPeriod'] == null) {
            throw new runtime.RequiredError(
                'createNextPeriod',
                'Required parameter "createNextPeriod" was null or undefined when calling postSubscriptionsPeriodBillsIdClose().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsPeriodBillsIdClose().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['currentDate'] != null) {
            queryParameters['currentDate'] = (requestParameters['currentDate'] as any).toISOString();
        }

        if (requestParameters['createNextPeriod'] != null) {
            queryParameters['createNextPeriod'] = requestParameters['createNextPeriod'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/subscriptions/period-bills/{id}/close`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPeriodBillFromJSON(jsonValue));
    }

    /**
     * Close a subscription period bill
     
     */
    async postSubscriptionsPeriodBillsIdClose(requestParameters: PostSubscriptionsPeriodBillsIdCloseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPeriodBill> {
        const response = await this.postSubscriptionsPeriodBillsIdCloseRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
