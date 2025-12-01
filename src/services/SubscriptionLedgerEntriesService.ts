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
  SubscriptionLedgerEntry,
  SubscriptionLedgerEntryCreate,
  SubscriptionLedgerEntryListResponse,
  SubscriptionLedgerEntrySearchResponse,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionLedgerEntryFromJSON,
    SubscriptionLedgerEntryToJSON,
    SubscriptionLedgerEntryCreateFromJSON,
    SubscriptionLedgerEntryCreateToJSON,
    SubscriptionLedgerEntryListResponseFromJSON,
    SubscriptionLedgerEntryListResponseToJSON,
    SubscriptionLedgerEntrySearchResponseFromJSON,
    SubscriptionLedgerEntrySearchResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetSubscriptionsLedgerEntriesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsLedgerEntriesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsLedgerEntriesSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostSubscriptionsLedgerEntriesRequest {
    space: number;
    subscriptionLedgerEntryCreate: SubscriptionLedgerEntryCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionLedgerEntriesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all ledger entries
     
     */
    async getSubscriptionsLedgerEntriesRaw(requestParameters: GetSubscriptionsLedgerEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionLedgerEntryListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsLedgerEntries().'
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
        const path = `/subscriptions/ledger-entries`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/ledger-entries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionLedgerEntryListResponseFromJSON(jsonValue));
    }

    /**
     * List all ledger entries
     
     */
    async getSubscriptionsLedgerEntries(requestParameters: GetSubscriptionsLedgerEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionLedgerEntryListResponse> {
        const response = await this.getSubscriptionsLedgerEntriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a ledger entry
     
     */
    async getSubscriptionsLedgerEntriesIdRaw(requestParameters: GetSubscriptionsLedgerEntriesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionLedgerEntry>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsLedgerEntriesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsLedgerEntriesId().'
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
        const path = `/subscriptions/ledger-entries/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/ledger-entries/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionLedgerEntryFromJSON(jsonValue));
    }

    /**
     * Retrieve a ledger entry
     
     */
    async getSubscriptionsLedgerEntriesId(requestParameters: GetSubscriptionsLedgerEntriesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionLedgerEntry> {
        const response = await this.getSubscriptionsLedgerEntriesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search ledger entries
     
     */
    async getSubscriptionsLedgerEntriesSearchRaw(requestParameters: GetSubscriptionsLedgerEntriesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionLedgerEntrySearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsLedgerEntriesSearch().'
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
        const path = `/subscriptions/ledger-entries/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/ledger-entries/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionLedgerEntrySearchResponseFromJSON(jsonValue));
    }

    /**
     * Search ledger entries
     
     */
    async getSubscriptionsLedgerEntriesSearch(requestParameters: GetSubscriptionsLedgerEntriesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionLedgerEntrySearchResponse> {
        const response = await this.getSubscriptionsLedgerEntriesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a ledger entry
     
     */
    async postSubscriptionsLedgerEntriesRaw(requestParameters: PostSubscriptionsLedgerEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionLedgerEntry>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsLedgerEntries().'
            );
        }

        if (requestParameters['subscriptionLedgerEntryCreate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionLedgerEntryCreate',
                'Required parameter "subscriptionLedgerEntryCreate" was null or undefined when calling postSubscriptionsLedgerEntries().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/subscriptions/ledger-entries`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/ledger-entries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionLedgerEntryCreateToJSON(requestParameters['subscriptionLedgerEntryCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionLedgerEntryFromJSON(jsonValue));
    }

    /**
     * Create a ledger entry
     
     */
    async postSubscriptionsLedgerEntries(requestParameters: PostSubscriptionsLedgerEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionLedgerEntry> {
        const response = await this.postSubscriptionsLedgerEntriesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
