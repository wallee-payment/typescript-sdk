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
  InvoiceListResponse,
  InvoiceSearchResponse,
  RenderedDocument,
  RestApiErrorResponse,
  SortingOrder,
  TransactionInvoice,
  TransactionInvoiceReplacement,
} from '../models/index';
import {
    InvoiceListResponseFromJSON,
    InvoiceListResponseToJSON,
    InvoiceSearchResponseFromJSON,
    InvoiceSearchResponseToJSON,
    RenderedDocumentFromJSON,
    RenderedDocumentToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    TransactionInvoiceFromJSON,
    TransactionInvoiceToJSON,
    TransactionInvoiceReplacementFromJSON,
    TransactionInvoiceReplacementToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentTransactionsInvoicesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentTransactionsInvoicesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsInvoicesIdCheckReplacementPossibleRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsInvoicesIdDocumentRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsInvoicesSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostPaymentTransactionsInvoicesIdDerecognizeRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsInvoicesIdMarkPaidRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsInvoicesIdReplaceRequest {
    id: number;
    space: number;
    transactionInvoiceReplacement: TransactionInvoiceReplacement;
    expand?: Set<string>;
}

/**
 * 
 */
export class TransactionInvoicesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all transaction invoices
     
     */
    async getPaymentTransactionsInvoicesRaw(requestParameters: GetPaymentTransactionsInvoicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsInvoices().'
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
        const path = `/payment/transactions/invoices`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceListResponseFromJSON(jsonValue));
    }

    /**
     * List all transaction invoices
     
     */
    async getPaymentTransactionsInvoices(requestParameters: GetPaymentTransactionsInvoicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceListResponse> {
        const response = await this.getPaymentTransactionsInvoicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a transaction invoice
     
     */
    async getPaymentTransactionsInvoicesIdRaw(requestParameters: GetPaymentTransactionsInvoicesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInvoice>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsInvoicesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsInvoicesId().'
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
        const path = `/payment/transactions/invoices/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInvoiceFromJSON(jsonValue));
    }

    /**
     * Retrieve a transaction invoice
     
     */
    async getPaymentTransactionsInvoicesId(requestParameters: GetPaymentTransactionsInvoicesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInvoice> {
        const response = await this.getPaymentTransactionsInvoicesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Check if a transaction invoice can be replaced
     
     */
    async getPaymentTransactionsInvoicesIdCheckReplacementPossibleRaw(requestParameters: GetPaymentTransactionsInvoicesIdCheckReplacementPossibleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsInvoicesIdCheckReplacementPossible().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsInvoicesIdCheckReplacementPossible().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/invoices/{id}/check-replacement-possible`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<boolean>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Check if a transaction invoice can be replaced
     
     */
    async getPaymentTransactionsInvoicesIdCheckReplacementPossible(requestParameters: GetPaymentTransactionsInvoicesIdCheckReplacementPossibleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.getPaymentTransactionsInvoicesIdCheckReplacementPossibleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an invoice document
     
     */
    async getPaymentTransactionsInvoicesIdDocumentRaw(requestParameters: GetPaymentTransactionsInvoicesIdDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RenderedDocument>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsInvoicesIdDocument().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsInvoicesIdDocument().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/invoices/{id}/document`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => RenderedDocumentFromJSON(jsonValue));
    }

    /**
     * Retrieve an invoice document
     
     */
    async getPaymentTransactionsInvoicesIdDocument(requestParameters: GetPaymentTransactionsInvoicesIdDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RenderedDocument> {
        const response = await this.getPaymentTransactionsInvoicesIdDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search transaction invoices
     
     */
    async getPaymentTransactionsInvoicesSearchRaw(requestParameters: GetPaymentTransactionsInvoicesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsInvoicesSearch().'
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
        const path = `/payment/transactions/invoices/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search transaction invoices
     
     */
    async getPaymentTransactionsInvoicesSearch(requestParameters: GetPaymentTransactionsInvoicesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceSearchResponse> {
        const response = await this.getPaymentTransactionsInvoicesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Derecognize a transaction invoice
     
     */
    async postPaymentTransactionsInvoicesIdDerecognizeRaw(requestParameters: PostPaymentTransactionsInvoicesIdDerecognizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInvoice>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsInvoicesIdDerecognize().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsInvoicesIdDerecognize().'
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

        const method = 'POST';
        const path = `/payment/transactions/invoices/{id}/derecognize`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInvoiceFromJSON(jsonValue));
    }

    /**
     * Derecognize a transaction invoice
     
     */
    async postPaymentTransactionsInvoicesIdDerecognize(requestParameters: PostPaymentTransactionsInvoicesIdDerecognizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInvoice> {
        const response = await this.postPaymentTransactionsInvoicesIdDerecognizeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a transaction invoice as paid
     
     */
    async postPaymentTransactionsInvoicesIdMarkPaidRaw(requestParameters: PostPaymentTransactionsInvoicesIdMarkPaidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInvoice>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsInvoicesIdMarkPaid().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsInvoicesIdMarkPaid().'
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

        const method = 'POST';
        const path = `/payment/transactions/invoices/{id}/mark-paid`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInvoiceFromJSON(jsonValue));
    }

    /**
     * Mark a transaction invoice as paid
     
     */
    async postPaymentTransactionsInvoicesIdMarkPaid(requestParameters: PostPaymentTransactionsInvoicesIdMarkPaidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInvoice> {
        const response = await this.postPaymentTransactionsInvoicesIdMarkPaidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Replace a transaction invoice
     
     */
    async postPaymentTransactionsInvoicesIdReplaceRaw(requestParameters: PostPaymentTransactionsInvoicesIdReplaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInvoice>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsInvoicesIdReplace().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsInvoicesIdReplace().'
            );
        }

        if (requestParameters['transactionInvoiceReplacement'] == null) {
            throw new runtime.RequiredError(
                'transactionInvoiceReplacement',
                'Required parameter "transactionInvoiceReplacement" was null or undefined when calling postPaymentTransactionsInvoicesIdReplace().'
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
        const path = `/payment/transactions/invoices/{id}/replace`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: TransactionInvoiceReplacementToJSON(requestParameters['transactionInvoiceReplacement']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInvoiceFromJSON(jsonValue));
    }

    /**
     * Replace a transaction invoice
     
     */
    async postPaymentTransactionsInvoicesIdReplace(requestParameters: PostPaymentTransactionsInvoicesIdReplaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInvoice> {
        const response = await this.postPaymentTransactionsInvoicesIdReplaceRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
