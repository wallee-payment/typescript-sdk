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
  ExternalTransferBankTransaction,
  ExternalTransferBankTransactionListResponse,
  ExternalTransferBankTransactionSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    ExternalTransferBankTransactionFromJSON,
    ExternalTransferBankTransactionToJSON,
    ExternalTransferBankTransactionListResponseFromJSON,
    ExternalTransferBankTransactionListResponseToJSON,
    ExternalTransferBankTransactionSearchResponseFromJSON,
    ExternalTransferBankTransactionSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentBankTransactionsExternalTransfersRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentBankTransactionsExternalTransfersIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentBankTransactionsExternalTransfersSearchRequest {
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
export class ExternalTransferBankTransactionsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all external transfer bank transactions
     
     */
    async getPaymentBankTransactionsExternalTransfersRaw(requestParameters: GetPaymentBankTransactionsExternalTransfersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExternalTransferBankTransactionListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentBankTransactionsExternalTransfers().'
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
        const path = `/payment/bank-transactions/external-transfers`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/bank-transactions/external-transfers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExternalTransferBankTransactionListResponseFromJSON(jsonValue));
    }

    /**
     * List all external transfer bank transactions
     
     */
    async getPaymentBankTransactionsExternalTransfers(requestParameters: GetPaymentBankTransactionsExternalTransfersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExternalTransferBankTransactionListResponse> {
        const response = await this.getPaymentBankTransactionsExternalTransfersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an external transfer bank transaction
     
     */
    async getPaymentBankTransactionsExternalTransfersIdRaw(requestParameters: GetPaymentBankTransactionsExternalTransfersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExternalTransferBankTransaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentBankTransactionsExternalTransfersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentBankTransactionsExternalTransfersId().'
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
        const path = `/payment/bank-transactions/external-transfers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/bank-transactions/external-transfers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExternalTransferBankTransactionFromJSON(jsonValue));
    }

    /**
     * Retrieve an external transfer bank transaction
     
     */
    async getPaymentBankTransactionsExternalTransfersId(requestParameters: GetPaymentBankTransactionsExternalTransfersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExternalTransferBankTransaction> {
        const response = await this.getPaymentBankTransactionsExternalTransfersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search external transfer bank transactions
     
     */
    async getPaymentBankTransactionsExternalTransfersSearchRaw(requestParameters: GetPaymentBankTransactionsExternalTransfersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExternalTransferBankTransactionSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentBankTransactionsExternalTransfersSearch().'
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
        const path = `/payment/bank-transactions/external-transfers/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/bank-transactions/external-transfers/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExternalTransferBankTransactionSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search external transfer bank transactions
     
     */
    async getPaymentBankTransactionsExternalTransfersSearch(requestParameters: GetPaymentBankTransactionsExternalTransfersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExternalTransferBankTransactionSearchResponse> {
        const response = await this.getPaymentBankTransactionsExternalTransfersSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
