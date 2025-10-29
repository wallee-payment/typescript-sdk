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
  RefundRecoveryBankTransaction,
  RefundRecoveryBankTransactionListResponse,
  RefundRecoveryBankTransactionSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    RefundRecoveryBankTransactionFromJSON,
    RefundRecoveryBankTransactionToJSON,
    RefundRecoveryBankTransactionListResponseFromJSON,
    RefundRecoveryBankTransactionListResponseToJSON,
    RefundRecoveryBankTransactionSearchResponseFromJSON,
    RefundRecoveryBankTransactionSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentBankTransactionsRefundRecoveriesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentBankTransactionsRefundRecoveriesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentBankTransactionsRefundRecoveriesSearchRequest {
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
export class RefundRecoveryBankTransactionsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all refund recovery bank transactions
     
     */
    async getPaymentBankTransactionsRefundRecoveriesRaw(requestParameters: GetPaymentBankTransactionsRefundRecoveriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundRecoveryBankTransactionListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentBankTransactionsRefundRecoveries().'
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
        const path = `/payment/bank-transactions/refund-recoveries`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundRecoveryBankTransactionListResponseFromJSON(jsonValue));
    }

    /**
     * List all refund recovery bank transactions
     
     */
    async getPaymentBankTransactionsRefundRecoveries(requestParameters: GetPaymentBankTransactionsRefundRecoveriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundRecoveryBankTransactionListResponse> {
        const response = await this.getPaymentBankTransactionsRefundRecoveriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a refund recovery bank transaction
     
     */
    async getPaymentBankTransactionsRefundRecoveriesIdRaw(requestParameters: GetPaymentBankTransactionsRefundRecoveriesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundRecoveryBankTransaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentBankTransactionsRefundRecoveriesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentBankTransactionsRefundRecoveriesId().'
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
        const path = `/payment/bank-transactions/refund-recoveries/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundRecoveryBankTransactionFromJSON(jsonValue));
    }

    /**
     * Retrieve a refund recovery bank transaction
     
     */
    async getPaymentBankTransactionsRefundRecoveriesId(requestParameters: GetPaymentBankTransactionsRefundRecoveriesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundRecoveryBankTransaction> {
        const response = await this.getPaymentBankTransactionsRefundRecoveriesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search refund recovery bank transactions
     
     */
    async getPaymentBankTransactionsRefundRecoveriesSearchRaw(requestParameters: GetPaymentBankTransactionsRefundRecoveriesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundRecoveryBankTransactionSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentBankTransactionsRefundRecoveriesSearch().'
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
        const path = `/payment/bank-transactions/refund-recoveries/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundRecoveryBankTransactionSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search refund recovery bank transactions
     
     */
    async getPaymentBankTransactionsRefundRecoveriesSearch(requestParameters: GetPaymentBankTransactionsRefundRecoveriesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundRecoveryBankTransactionSearchResponse> {
        const response = await this.getPaymentBankTransactionsRefundRecoveriesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
