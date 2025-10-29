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
  BankAccount,
  BankAccountListResponse,
  BankAccountSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    BankAccountFromJSON,
    BankAccountToJSON,
    BankAccountListResponseFromJSON,
    BankAccountListResponseToJSON,
    BankAccountSearchResponseFromJSON,
    BankAccountSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentBankAccountsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentBankAccountsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentBankAccountsSearchRequest {
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
export class BankAccountsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all bank accounts
     
     */
    async getPaymentBankAccountsRaw(requestParameters: GetPaymentBankAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankAccountListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentBankAccounts().'
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
        const path = `/payment/bank-accounts`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => BankAccountListResponseFromJSON(jsonValue));
    }

    /**
     * List all bank accounts
     
     */
    async getPaymentBankAccounts(requestParameters: GetPaymentBankAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankAccountListResponse> {
        const response = await this.getPaymentBankAccountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a bank account
     
     */
    async getPaymentBankAccountsIdRaw(requestParameters: GetPaymentBankAccountsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankAccount>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentBankAccountsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentBankAccountsId().'
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
        const path = `/payment/bank-accounts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => BankAccountFromJSON(jsonValue));
    }

    /**
     * Retrieve a bank account
     
     */
    async getPaymentBankAccountsId(requestParameters: GetPaymentBankAccountsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankAccount> {
        const response = await this.getPaymentBankAccountsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search bank accounts
     
     */
    async getPaymentBankAccountsSearchRaw(requestParameters: GetPaymentBankAccountsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankAccountSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentBankAccountsSearch().'
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
        const path = `/payment/bank-accounts/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => BankAccountSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search bank accounts
     
     */
    async getPaymentBankAccountsSearch(requestParameters: GetPaymentBankAccountsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankAccountSearchResponse> {
        const response = await this.getPaymentBankAccountsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
