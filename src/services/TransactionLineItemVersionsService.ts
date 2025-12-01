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
  LineItemVersionListResponse,
  LineItemVersionSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  TransactionLineItemVersion,
  TransactionLineItemVersionCreate,
} from '../models/index';
import {
    LineItemVersionListResponseFromJSON,
    LineItemVersionListResponseToJSON,
    LineItemVersionSearchResponseFromJSON,
    LineItemVersionSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    TransactionLineItemVersionFromJSON,
    TransactionLineItemVersionToJSON,
    TransactionLineItemVersionCreateFromJSON,
    TransactionLineItemVersionCreateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentTransactionsLineItemVersionsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentTransactionsLineItemVersionsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsLineItemVersionsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostPaymentTransactionsLineItemVersionsRequest {
    space: number;
    transactionLineItemVersionCreate: TransactionLineItemVersionCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class TransactionLineItemVersionsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all transaction line item versions
     
     */
    async getPaymentTransactionsLineItemVersionsRaw(requestParameters: GetPaymentTransactionsLineItemVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LineItemVersionListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsLineItemVersions().'
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
        const path = `/payment/transactions/line-item-versions`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/line-item-versions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LineItemVersionListResponseFromJSON(jsonValue));
    }

    /**
     * List all transaction line item versions
     
     */
    async getPaymentTransactionsLineItemVersions(requestParameters: GetPaymentTransactionsLineItemVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LineItemVersionListResponse> {
        const response = await this.getPaymentTransactionsLineItemVersionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a transaction line item version
     
     */
    async getPaymentTransactionsLineItemVersionsIdRaw(requestParameters: GetPaymentTransactionsLineItemVersionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionLineItemVersion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsLineItemVersionsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsLineItemVersionsId().'
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
        const path = `/payment/transactions/line-item-versions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/line-item-versions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionLineItemVersionFromJSON(jsonValue));
    }

    /**
     * Retrieve a transaction line item version
     
     */
    async getPaymentTransactionsLineItemVersionsId(requestParameters: GetPaymentTransactionsLineItemVersionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionLineItemVersion> {
        const response = await this.getPaymentTransactionsLineItemVersionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search transaction line item versions
     
     */
    async getPaymentTransactionsLineItemVersionsSearchRaw(requestParameters: GetPaymentTransactionsLineItemVersionsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LineItemVersionSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsLineItemVersionsSearch().'
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
        const path = `/payment/transactions/line-item-versions/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/line-item-versions/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LineItemVersionSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search transaction line item versions
     
     */
    async getPaymentTransactionsLineItemVersionsSearch(requestParameters: GetPaymentTransactionsLineItemVersionsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LineItemVersionSearchResponse> {
        const response = await this.getPaymentTransactionsLineItemVersionsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a transaction line item version
     
     */
    async postPaymentTransactionsLineItemVersionsRaw(requestParameters: PostPaymentTransactionsLineItemVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionLineItemVersion>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsLineItemVersions().'
            );
        }

        if (requestParameters['transactionLineItemVersionCreate'] == null) {
            throw new runtime.RequiredError(
                'transactionLineItemVersionCreate',
                'Required parameter "transactionLineItemVersionCreate" was null or undefined when calling postPaymentTransactionsLineItemVersions().'
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
        const path = `/payment/transactions/line-item-versions`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/line-item-versions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionLineItemVersionCreateToJSON(requestParameters['transactionLineItemVersionCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionLineItemVersionFromJSON(jsonValue));
    }

    /**
     * Create a transaction line item version
     
     */
    async postPaymentTransactionsLineItemVersions(requestParameters: PostPaymentTransactionsLineItemVersionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionLineItemVersion> {
        const response = await this.postPaymentTransactionsLineItemVersionsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
