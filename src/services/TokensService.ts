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
  Token,
  TokenCreate,
  TokenListResponse,
  TokenSearchResponse,
  TokenUpdate,
  TokenVersion,
  Transaction,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    TokenFromJSON,
    TokenToJSON,
    TokenCreateFromJSON,
    TokenCreateToJSON,
    TokenListResponseFromJSON,
    TokenListResponseToJSON,
    TokenSearchResponseFromJSON,
    TokenSearchResponseToJSON,
    TokenUpdateFromJSON,
    TokenUpdateToJSON,
    TokenVersionFromJSON,
    TokenVersionToJSON,
    TransactionFromJSON,
    TransactionToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentTokensIdRequest {
    id: number;
    space: number;
}

export interface GetPaymentTokensRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentTokensIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTokensIdActiveVersionRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTokensSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentTokensIdRequest {
    id: number;
    space: number;
    tokenUpdate: TokenUpdate;
    expand?: Set<string>;
}

export interface PostPaymentTokensRequest {
    space: number;
    tokenCreate: TokenCreate;
    expand?: Set<string>;
}

export interface PostPaymentTokensIdCreateTransactionForTokenUpdateRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class TokensService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a token. It cannot be undone.
     * Delete a token
     
     */
    async deletePaymentTokensIdRaw(requestParameters: DeletePaymentTokensIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePaymentTokensId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentTokensId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/tokens/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Permanently deletes a token. It cannot be undone.
     * Delete a token
     
     */
    async deletePaymentTokensId(requestParameters: DeletePaymentTokensIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentTokensIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all tokens
     
     */
    async getPaymentTokensRaw(requestParameters: GetPaymentTokensRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTokens().'
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
        const path = `/payment/tokens`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenListResponseFromJSON(jsonValue));
    }

    /**
     * List all tokens
     
     */
    async getPaymentTokens(requestParameters: GetPaymentTokensRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenListResponse> {
        const response = await this.getPaymentTokensRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a token
     
     */
    async getPaymentTokensIdRaw(requestParameters: GetPaymentTokensIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTokensId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTokensId().'
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
        const path = `/payment/tokens/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     * Retrieve a token
     
     */
    async getPaymentTokensId(requestParameters: GetPaymentTokensIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.getPaymentTokensIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the active token version
     
     */
    async getPaymentTokensIdActiveVersionRaw(requestParameters: GetPaymentTokensIdActiveVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenVersion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTokensIdActiveVersion().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTokensIdActiveVersion().'
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
        const path = `/payment/tokens/{id}/active-version`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenVersionFromJSON(jsonValue));
    }

    /**
     * Retrieve the active token version
     
     */
    async getPaymentTokensIdActiveVersion(requestParameters: GetPaymentTokensIdActiveVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenVersion> {
        const response = await this.getPaymentTokensIdActiveVersionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search tokens
     
     */
    async getPaymentTokensSearchRaw(requestParameters: GetPaymentTokensSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTokensSearch().'
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
        const path = `/payment/tokens/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search tokens
     
     */
    async getPaymentTokensSearch(requestParameters: GetPaymentTokensSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenSearchResponse> {
        const response = await this.getPaymentTokensSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a token
     
     */
    async patchPaymentTokensIdRaw(requestParameters: PatchPaymentTokensIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentTokensId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentTokensId().'
            );
        }

        if (requestParameters['tokenUpdate'] == null) {
            throw new runtime.RequiredError(
                'tokenUpdate',
                'Required parameter "tokenUpdate" was null or undefined when calling patchPaymentTokensId().'
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
        const path = `/payment/tokens/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: TokenUpdateToJSON(requestParameters['tokenUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     * Update a token
     
     */
    async patchPaymentTokensId(requestParameters: PatchPaymentTokensIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.patchPaymentTokensIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a token
     
     */
    async postPaymentTokensRaw(requestParameters: PostPaymentTokensRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTokens().'
            );
        }

        if (requestParameters['tokenCreate'] == null) {
            throw new runtime.RequiredError(
                'tokenCreate',
                'Required parameter "tokenCreate" was null or undefined when calling postPaymentTokens().'
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
        const path = `/payment/tokens`;

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
            body: TokenCreateToJSON(requestParameters['tokenCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     * Create a token
     
     */
    async postPaymentTokens(requestParameters: PostPaymentTokensRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.postPaymentTokensRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a transaction for token update
     
     */
    async postPaymentTokensIdCreateTransactionForTokenUpdateRaw(requestParameters: PostPaymentTokensIdCreateTransactionForTokenUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTokensIdCreateTransactionForTokenUpdate().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTokensIdCreateTransactionForTokenUpdate().'
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
        const path = `/payment/tokens/{id}/create-transaction-for-token-update`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Create a transaction for token update
     
     */
    async postPaymentTokensIdCreateTransactionForTokenUpdate(requestParameters: PostPaymentTokensIdCreateTransactionForTokenUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.postPaymentTokensIdCreateTransactionForTokenUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
