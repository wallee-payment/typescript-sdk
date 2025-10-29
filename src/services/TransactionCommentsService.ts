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
  TransactionComment,
  TransactionCommentActive,
  TransactionCommentCreate,
  TransactionCommentListResponse,
  TransactionCommentSearchResponse,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    TransactionCommentFromJSON,
    TransactionCommentToJSON,
    TransactionCommentActiveFromJSON,
    TransactionCommentActiveToJSON,
    TransactionCommentCreateFromJSON,
    TransactionCommentCreateToJSON,
    TransactionCommentListResponseFromJSON,
    TransactionCommentListResponseToJSON,
    TransactionCommentSearchResponseFromJSON,
    TransactionCommentSearchResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentTransactionsTransactionIdCommentsIdRequest {
    transactionId: number;
    id: number;
    space: number;
}

export interface GetPaymentTransactionsTransactionIdCommentsRequest {
    transactionId: number;
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentTransactionsTransactionIdCommentsIdRequest {
    transactionId: number;
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsTransactionIdCommentsSearchRequest {
    transactionId: number;
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentTransactionsTransactionIdCommentsIdRequest {
    transactionId: number;
    id: number;
    space: number;
    transactionCommentActive: TransactionCommentActive;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsTransactionIdCommentsRequest {
    transactionId: number;
    space: number;
    transactionCommentCreate: TransactionCommentCreate;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsTransactionIdCommentsIdPinRequest {
    transactionId: number;
    id: number;
    space: number;
}

export interface PostPaymentTransactionsTransactionIdCommentsIdUnpinRequest {
    transactionId: number;
    id: number;
    space: number;
}

/**
 * 
 */
export class TransactionCommentsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a transaction comment
     
     */
    async deletePaymentTransactionsTransactionIdCommentsIdRaw(requestParameters: DeletePaymentTransactionsTransactionIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling deletePaymentTransactionsTransactionIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePaymentTransactionsTransactionIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentTransactionsTransactionIdCommentsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/transactions/{transactionId}/comments/{id}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Delete a transaction comment
     
     */
    async deletePaymentTransactionsTransactionIdCommentsId(requestParameters: DeletePaymentTransactionsTransactionIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentTransactionsTransactionIdCommentsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all transaction comments
     
     */
    async getPaymentTransactionsTransactionIdCommentsRaw(requestParameters: GetPaymentTransactionsTransactionIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionCommentListResponse>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling getPaymentTransactionsTransactionIdComments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsTransactionIdComments().'
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
        const path = `/payment/transactions/{transactionId}/comments`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCommentListResponseFromJSON(jsonValue));
    }

    /**
     * List all transaction comments
     
     */
    async getPaymentTransactionsTransactionIdComments(requestParameters: GetPaymentTransactionsTransactionIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionCommentListResponse> {
        const response = await this.getPaymentTransactionsTransactionIdCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a transaction comment
     
     */
    async getPaymentTransactionsTransactionIdCommentsIdRaw(requestParameters: GetPaymentTransactionsTransactionIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionComment>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling getPaymentTransactionsTransactionIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsTransactionIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsTransactionIdCommentsId().'
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
        const path = `/payment/transactions/{transactionId}/comments/{id}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCommentFromJSON(jsonValue));
    }

    /**
     * Retrieve a transaction comment
     
     */
    async getPaymentTransactionsTransactionIdCommentsId(requestParameters: GetPaymentTransactionsTransactionIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionComment> {
        const response = await this.getPaymentTransactionsTransactionIdCommentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search transaction comments
     
     */
    async getPaymentTransactionsTransactionIdCommentsSearchRaw(requestParameters: GetPaymentTransactionsTransactionIdCommentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionCommentSearchResponse>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling getPaymentTransactionsTransactionIdCommentsSearch().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsTransactionIdCommentsSearch().'
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
        const path = `/payment/transactions/{transactionId}/comments/search`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCommentSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search transaction comments
     
     */
    async getPaymentTransactionsTransactionIdCommentsSearch(requestParameters: GetPaymentTransactionsTransactionIdCommentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionCommentSearchResponse> {
        const response = await this.getPaymentTransactionsTransactionIdCommentsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a transaction comment
     
     */
    async patchPaymentTransactionsTransactionIdCommentsIdRaw(requestParameters: PatchPaymentTransactionsTransactionIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionComment>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling patchPaymentTransactionsTransactionIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentTransactionsTransactionIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentTransactionsTransactionIdCommentsId().'
            );
        }

        if (requestParameters['transactionCommentActive'] == null) {
            throw new runtime.RequiredError(
                'transactionCommentActive',
                'Required parameter "transactionCommentActive" was null or undefined when calling patchPaymentTransactionsTransactionIdCommentsId().'
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
        const path = `/payment/transactions/{transactionId}/comments/{id}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: TransactionCommentActiveToJSON(requestParameters['transactionCommentActive']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCommentFromJSON(jsonValue));
    }

    /**
     * Update a transaction comment
     
     */
    async patchPaymentTransactionsTransactionIdCommentsId(requestParameters: PatchPaymentTransactionsTransactionIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionComment> {
        const response = await this.patchPaymentTransactionsTransactionIdCommentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a transaction comment
     
     */
    async postPaymentTransactionsTransactionIdCommentsRaw(requestParameters: PostPaymentTransactionsTransactionIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionComment>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling postPaymentTransactionsTransactionIdComments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsTransactionIdComments().'
            );
        }

        if (requestParameters['transactionCommentCreate'] == null) {
            throw new runtime.RequiredError(
                'transactionCommentCreate',
                'Required parameter "transactionCommentCreate" was null or undefined when calling postPaymentTransactionsTransactionIdComments().'
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
        const path = `/payment/transactions/{transactionId}/comments`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId'])));

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
            body: TransactionCommentCreateToJSON(requestParameters['transactionCommentCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCommentFromJSON(jsonValue));
    }

    /**
     * Create a transaction comment
     
     */
    async postPaymentTransactionsTransactionIdComments(requestParameters: PostPaymentTransactionsTransactionIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionComment> {
        const response = await this.postPaymentTransactionsTransactionIdCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pin a comment to the top
     
     */
    async postPaymentTransactionsTransactionIdCommentsIdPinRaw(requestParameters: PostPaymentTransactionsTransactionIdCommentsIdPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling postPaymentTransactionsTransactionIdCommentsIdPin().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsTransactionIdCommentsIdPin().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsTransactionIdCommentsIdPin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/transactions/{transactionId}/comments/{id}/pin`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Pin a comment to the top
     
     */
    async postPaymentTransactionsTransactionIdCommentsIdPin(requestParameters: PostPaymentTransactionsTransactionIdCommentsIdPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentTransactionsTransactionIdCommentsIdPinRaw(requestParameters, initOverrides);
    }

    /**
     * Remove the pinned comment from the top
     
     */
    async postPaymentTransactionsTransactionIdCommentsIdUnpinRaw(requestParameters: PostPaymentTransactionsTransactionIdCommentsIdUnpinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling postPaymentTransactionsTransactionIdCommentsIdUnpin().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsTransactionIdCommentsIdUnpin().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsTransactionIdCommentsIdUnpin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/transactions/{transactionId}/comments/{id}/unpin`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Remove the pinned comment from the top
     
     */
    async postPaymentTransactionsTransactionIdCommentsIdUnpin(requestParameters: PostPaymentTransactionsTransactionIdCommentsIdUnpinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentTransactionsTransactionIdCommentsIdUnpinRaw(requestParameters, initOverrides);
    }


}
