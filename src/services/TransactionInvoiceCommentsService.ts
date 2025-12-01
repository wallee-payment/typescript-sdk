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
  InvoiceCommentListResponse,
  InvoiceCommentSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  TransactionInvoiceComment,
  TransactionInvoiceCommentActive,
  TransactionInvoiceCommentCreate,
} from '../models/index';
import {
    InvoiceCommentListResponseFromJSON,
    InvoiceCommentListResponseToJSON,
    InvoiceCommentSearchResponseFromJSON,
    InvoiceCommentSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    TransactionInvoiceCommentFromJSON,
    TransactionInvoiceCommentToJSON,
    TransactionInvoiceCommentActiveFromJSON,
    TransactionInvoiceCommentActiveToJSON,
    TransactionInvoiceCommentCreateFromJSON,
    TransactionInvoiceCommentCreateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentTransactionsInvoicesInvoiceIdCommentsIdRequest {
    invoiceId: number;
    id: number;
    space: number;
}

export interface GetPaymentTransactionsInvoicesInvoiceIdCommentsRequest {
    invoiceId: number;
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentTransactionsInvoicesInvoiceIdCommentsIdRequest {
    invoiceId: number;
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsInvoicesInvoiceIdCommentsSearchRequest {
    invoiceId: number;
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentTransactionsInvoicesInvoiceIdCommentsIdRequest {
    invoiceId: number;
    id: number;
    space: number;
    transactionInvoiceCommentActive: TransactionInvoiceCommentActive;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsInvoicesInvoiceIdCommentsRequest {
    invoiceId: number;
    space: number;
    transactionInvoiceCommentCreate: TransactionInvoiceCommentCreate;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsInvoicesInvoiceIdCommentsIdPinRequest {
    invoiceId: number;
    id: number;
    space: number;
}

export interface PostPaymentTransactionsInvoicesInvoiceIdCommentsIdUnpinRequest {
    invoiceId: number;
    id: number;
    space: number;
}

/**
 * 
 */
export class TransactionInvoiceCommentsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a transaction comment
     
     */
    async deletePaymentTransactionsInvoicesInvoiceIdCommentsIdRaw(requestParameters: DeletePaymentTransactionsInvoicesInvoiceIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling deletePaymentTransactionsInvoicesInvoiceIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePaymentTransactionsInvoicesInvoiceIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentTransactionsInvoicesInvoiceIdCommentsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/transactions/invoices/{invoiceId}/comments/{id}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/invoices/{invoiceId}/comments/{id}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a transaction comment
     
     */
    async deletePaymentTransactionsInvoicesInvoiceIdCommentsId(requestParameters: DeletePaymentTransactionsInvoicesInvoiceIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentTransactionsInvoicesInvoiceIdCommentsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all transaction invoice comments
     
     */
    async getPaymentTransactionsInvoicesInvoiceIdCommentsRaw(requestParameters: GetPaymentTransactionsInvoicesInvoiceIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceCommentListResponse>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling getPaymentTransactionsInvoicesInvoiceIdComments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsInvoicesInvoiceIdComments().'
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
        const path = `/payment/transactions/invoices/{invoiceId}/comments`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/invoices/{invoiceId}/comments`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceCommentListResponseFromJSON(jsonValue));
    }

    /**
     * List all transaction invoice comments
     
     */
    async getPaymentTransactionsInvoicesInvoiceIdComments(requestParameters: GetPaymentTransactionsInvoicesInvoiceIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceCommentListResponse> {
        const response = await this.getPaymentTransactionsInvoicesInvoiceIdCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a transaction invoice comment
     
     */
    async getPaymentTransactionsInvoicesInvoiceIdCommentsIdRaw(requestParameters: GetPaymentTransactionsInvoicesInvoiceIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInvoiceComment>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling getPaymentTransactionsInvoicesInvoiceIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsInvoicesInvoiceIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsInvoicesInvoiceIdCommentsId().'
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
        const path = `/payment/transactions/invoices/{invoiceId}/comments/{id}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/invoices/{invoiceId}/comments/{id}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInvoiceCommentFromJSON(jsonValue));
    }

    /**
     * Retrieve a transaction invoice comment
     
     */
    async getPaymentTransactionsInvoicesInvoiceIdCommentsId(requestParameters: GetPaymentTransactionsInvoicesInvoiceIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInvoiceComment> {
        const response = await this.getPaymentTransactionsInvoicesInvoiceIdCommentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search transaction invoice comments
     
     */
    async getPaymentTransactionsInvoicesInvoiceIdCommentsSearchRaw(requestParameters: GetPaymentTransactionsInvoicesInvoiceIdCommentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceCommentSearchResponse>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling getPaymentTransactionsInvoicesInvoiceIdCommentsSearch().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsInvoicesInvoiceIdCommentsSearch().'
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
        const path = `/payment/transactions/invoices/{invoiceId}/comments/search`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/invoices/{invoiceId}/comments/search`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceCommentSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search transaction invoice comments
     
     */
    async getPaymentTransactionsInvoicesInvoiceIdCommentsSearch(requestParameters: GetPaymentTransactionsInvoicesInvoiceIdCommentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceCommentSearchResponse> {
        const response = await this.getPaymentTransactionsInvoicesInvoiceIdCommentsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a transaction comment
     
     */
    async patchPaymentTransactionsInvoicesInvoiceIdCommentsIdRaw(requestParameters: PatchPaymentTransactionsInvoicesInvoiceIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInvoiceComment>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling patchPaymentTransactionsInvoicesInvoiceIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentTransactionsInvoicesInvoiceIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentTransactionsInvoicesInvoiceIdCommentsId().'
            );
        }

        if (requestParameters['transactionInvoiceCommentActive'] == null) {
            throw new runtime.RequiredError(
                'transactionInvoiceCommentActive',
                'Required parameter "transactionInvoiceCommentActive" was null or undefined when calling patchPaymentTransactionsInvoicesInvoiceIdCommentsId().'
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

        const method = 'PATCH';
        const path = `/payment/transactions/invoices/{invoiceId}/comments/{id}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/invoices/{invoiceId}/comments/{id}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionInvoiceCommentActiveToJSON(requestParameters['transactionInvoiceCommentActive']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInvoiceCommentFromJSON(jsonValue));
    }

    /**
     * Update a transaction comment
     
     */
    async patchPaymentTransactionsInvoicesInvoiceIdCommentsId(requestParameters: PatchPaymentTransactionsInvoicesInvoiceIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInvoiceComment> {
        const response = await this.patchPaymentTransactionsInvoicesInvoiceIdCommentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a transaction invoice comment
     
     */
    async postPaymentTransactionsInvoicesInvoiceIdCommentsRaw(requestParameters: PostPaymentTransactionsInvoicesInvoiceIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionInvoiceComment>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling postPaymentTransactionsInvoicesInvoiceIdComments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsInvoicesInvoiceIdComments().'
            );
        }

        if (requestParameters['transactionInvoiceCommentCreate'] == null) {
            throw new runtime.RequiredError(
                'transactionInvoiceCommentCreate',
                'Required parameter "transactionInvoiceCommentCreate" was null or undefined when calling postPaymentTransactionsInvoicesInvoiceIdComments().'
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
        const path = `/payment/transactions/invoices/{invoiceId}/comments`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/invoices/{invoiceId}/comments`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionInvoiceCommentCreateToJSON(requestParameters['transactionInvoiceCommentCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionInvoiceCommentFromJSON(jsonValue));
    }

    /**
     * Create a transaction invoice comment
     
     */
    async postPaymentTransactionsInvoicesInvoiceIdComments(requestParameters: PostPaymentTransactionsInvoicesInvoiceIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionInvoiceComment> {
        const response = await this.postPaymentTransactionsInvoicesInvoiceIdCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pin a comment to the top
     
     */
    async postPaymentTransactionsInvoicesInvoiceIdCommentsIdPinRaw(requestParameters: PostPaymentTransactionsInvoicesInvoiceIdCommentsIdPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling postPaymentTransactionsInvoicesInvoiceIdCommentsIdPin().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsInvoicesInvoiceIdCommentsIdPin().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsInvoicesInvoiceIdCommentsIdPin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/transactions/invoices/{invoiceId}/comments/{id}/pin`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/invoices/{invoiceId}/comments/{id}/pin`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Pin a comment to the top
     
     */
    async postPaymentTransactionsInvoicesInvoiceIdCommentsIdPin(requestParameters: PostPaymentTransactionsInvoicesInvoiceIdCommentsIdPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentTransactionsInvoicesInvoiceIdCommentsIdPinRaw(requestParameters, initOverrides);
    }

    /**
     * Remove the pinned comment from the top
     
     */
    async postPaymentTransactionsInvoicesInvoiceIdCommentsIdUnpinRaw(requestParameters: PostPaymentTransactionsInvoicesInvoiceIdCommentsIdUnpinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling postPaymentTransactionsInvoicesInvoiceIdCommentsIdUnpin().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsInvoicesInvoiceIdCommentsIdUnpin().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsInvoicesInvoiceIdCommentsIdUnpin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/transactions/invoices/{invoiceId}/comments/{id}/unpin`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/invoices/{invoiceId}/comments/{id}/unpin`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove the pinned comment from the top
     
     */
    async postPaymentTransactionsInvoicesInvoiceIdCommentsIdUnpin(requestParameters: PostPaymentTransactionsInvoicesInvoiceIdCommentsIdUnpinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentTransactionsInvoicesInvoiceIdCommentsIdUnpinRaw(requestParameters, initOverrides);
    }


}
