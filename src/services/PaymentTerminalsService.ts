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
  PaymentTerminal,
  PaymentTerminalActivationStatusDetailSearchResponse,
  PaymentTerminalCreationRequest,
  PaymentTerminalTransactionSummaryReference,
  PaymentTerminalUpdate,
  RestApiErrorResponse,
  SortingOrder,
  TerminalListResponse,
  TerminalSearchResponse,
  Transaction,
  TransactionVoid,
} from '../models/index';
import {
    PaymentTerminalFromJSON,
    PaymentTerminalToJSON,
    PaymentTerminalActivationStatusDetailSearchResponseFromJSON,
    PaymentTerminalActivationStatusDetailSearchResponseToJSON,
    PaymentTerminalCreationRequestFromJSON,
    PaymentTerminalCreationRequestToJSON,
    PaymentTerminalTransactionSummaryReferenceFromJSON,
    PaymentTerminalTransactionSummaryReferenceToJSON,
    PaymentTerminalUpdateFromJSON,
    PaymentTerminalUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    TerminalListResponseFromJSON,
    TerminalListResponseToJSON,
    TerminalSearchResponseFromJSON,
    TerminalSearchResponseToJSON,
    TransactionFromJSON,
    TransactionToJSON,
    TransactionVoidFromJSON,
    TransactionVoidToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentTerminalsIdRequest {
    id: number;
    space: number;
}

export interface GetPaymentTerminalsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentTerminalsActivationStatusRequest {
    space: number;
    activationCodeActive?: boolean;
    configurationId?: number;
    environment?: string;
    hasActivationCode?: boolean;
    limit?: number;
    locationId?: number;
    offset?: number;
}

export interface GetPaymentTerminalsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTerminalsIdTillConnectionCredentialsRequest {
    id: number;
    transactionId: number;
    space: number;
    language?: string;
}

export interface GetPaymentTerminalsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentTerminalsIdRequest {
    id: number;
    space: number;
    paymentTerminalUpdate: PaymentTerminalUpdate;
    expand?: Set<string>;
}

export interface PostPaymentTerminalsRequest {
    space: number;
    paymentTerminalCreationRequest: PaymentTerminalCreationRequest;
    expand?: Set<string>;
}

export interface PostPaymentTerminalsByIdentifierIdentifierPerformTransactionRequest {
    transactionId: number;
    identifier: string;
    space: number;
    language?: string;
    expand?: Set<string>;
}

export interface PostPaymentTerminalsByIdentifierIdentifierRefreshRequest {
    identifier: string;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTerminalsByIdentifierIdentifierTriggerConfigurationRequest {
    identifier: string;
    space: number;
}

export interface PostPaymentTerminalsByIdentifierIdentifierTriggerFinalBalanceRequest {
    identifier: string;
    space: number;
}

export interface PostPaymentTerminalsIdLinkRequest {
    id: number;
    serialNumber: string;
    space: number;
}

export interface PostPaymentTerminalsIdPerformTransactionRequest {
    id: number;
    transactionId: number;
    space: number;
    language?: string;
    expand?: Set<string>;
}

export interface PostPaymentTerminalsIdRefreshRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTerminalsIdTriggerConfigurationRequest {
    id: number;
    space: number;
}

export interface PostPaymentTerminalsIdTriggerFinalBalanceRequest {
    id: number;
    space: number;
}

export interface PostPaymentTerminalsIdUnlinkRequest {
    id: number;
    space: number;
}

export interface PostPaymentTerminalsTriggerReversalRequest {
    transactionId: number;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class PaymentTerminalsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a payment terminal. It cannot be undone.
     * Delete a payment terminal
     
     */
    async deletePaymentTerminalsIdRaw(requestParameters: DeletePaymentTerminalsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePaymentTerminalsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentTerminalsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/terminals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a payment terminal. It cannot be undone.
     * Delete a payment terminal
     
     */
    async deletePaymentTerminalsId(requestParameters: DeletePaymentTerminalsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentTerminalsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all payment terminals
     
     */
    async getPaymentTerminalsRaw(requestParameters: GetPaymentTerminalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TerminalListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTerminals().'
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
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/terminals`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TerminalListResponseFromJSON(jsonValue));
    }

    /**
     * List all payment terminals
     
     */
    async getPaymentTerminals(requestParameters: GetPaymentTerminalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TerminalListResponse> {
        const response = await this.getPaymentTerminalsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search payment terminal activation status
     
     */
    async getPaymentTerminalsActivationStatusRaw(requestParameters: GetPaymentTerminalsActivationStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminalActivationStatusDetailSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTerminalsActivationStatus().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['activationCodeActive'] != null) {
            queryParameters['activationCodeActive'] = requestParameters['activationCodeActive'];
        }

        if (requestParameters['configurationId'] != null) {
            queryParameters['configurationId'] = requestParameters['configurationId'];
        }

        if (requestParameters['environment'] != null) {
            queryParameters['environment'] = requestParameters['environment'];
        }

        if (requestParameters['hasActivationCode'] != null) {
            queryParameters['hasActivationCode'] = requestParameters['hasActivationCode'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['locationId'] != null) {
            queryParameters['locationId'] = requestParameters['locationId'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/terminals/activation-status`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/activation-status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalActivationStatusDetailSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search payment terminal activation status
     
     */
    async getPaymentTerminalsActivationStatus(requestParameters: GetPaymentTerminalsActivationStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminalActivationStatusDetailSearchResponse> {
        const response = await this.getPaymentTerminalsActivationStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a payment terminal
     
     */
    async getPaymentTerminalsIdRaw(requestParameters: GetPaymentTerminalsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminal>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTerminalsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTerminalsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/terminals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalFromJSON(jsonValue));
    }

    /**
     * Retrieve a payment terminal
     
     */
    async getPaymentTerminalsId(requestParameters: GetPaymentTerminalsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminal> {
        const response = await this.getPaymentTerminalsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve till connection credentials
     
     */
    async getPaymentTerminalsIdTillConnectionCredentialsRaw(requestParameters: GetPaymentTerminalsIdTillConnectionCredentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTerminalsIdTillConnectionCredentials().'
            );
        }

        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling getPaymentTerminalsIdTillConnectionCredentials().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTerminalsIdTillConnectionCredentials().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['transactionId'] != null) {
            queryParameters['transactionId'] = requestParameters['transactionId'];
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/terminals/{id}/till-connection-credentials`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}/till-connection-credentials`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Retrieve till connection credentials
     
     */
    async getPaymentTerminalsIdTillConnectionCredentials(requestParameters: GetPaymentTerminalsIdTillConnectionCredentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPaymentTerminalsIdTillConnectionCredentialsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search payment terminals
     
     */
    async getPaymentTerminalsSearchRaw(requestParameters: GetPaymentTerminalsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TerminalSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTerminalsSearch().'
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
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/terminals/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TerminalSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search payment terminals
     
     */
    async getPaymentTerminalsSearch(requestParameters: GetPaymentTerminalsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TerminalSearchResponse> {
        const response = await this.getPaymentTerminalsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a payment terminal
     
     */
    async patchPaymentTerminalsIdRaw(requestParameters: PatchPaymentTerminalsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminal>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentTerminalsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentTerminalsId().'
            );
        }

        if (requestParameters['paymentTerminalUpdate'] == null) {
            throw new runtime.RequiredError(
                'paymentTerminalUpdate',
                'Required parameter "paymentTerminalUpdate" was null or undefined when calling patchPaymentTerminalsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/payment/terminals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentTerminalUpdateToJSON(requestParameters['paymentTerminalUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalFromJSON(jsonValue));
    }

    /**
     * Update a payment terminal
     
     */
    async patchPaymentTerminalsId(requestParameters: PatchPaymentTerminalsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminal> {
        const response = await this.patchPaymentTerminalsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a payment terminal
     
     */
    async postPaymentTerminalsRaw(requestParameters: PostPaymentTerminalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminal>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminals().'
            );
        }

        if (requestParameters['paymentTerminalCreationRequest'] == null) {
            throw new runtime.RequiredError(
                'paymentTerminalCreationRequest',
                'Required parameter "paymentTerminalCreationRequest" was null or undefined when calling postPaymentTerminals().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentTerminalCreationRequestToJSON(requestParameters['paymentTerminalCreationRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalFromJSON(jsonValue));
    }

    /**
     * Create a payment terminal
     
     */
    async postPaymentTerminals(requestParameters: PostPaymentTerminalsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminal> {
        const response = await this.postPaymentTerminalsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Initiates a payment terminal transaction and waits for its completion. If a timeout occurs, retrying will resume the transaction from where it left off.
     * Perform a payment terminal transaction by identifier
     
     * (The read time out for this request is 90 seconds)
     */
    async postPaymentTerminalsByIdentifierIdentifierPerformTransactionRaw(requestParameters: PostPaymentTerminalsByIdentifierIdentifierPerformTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling postPaymentTerminalsByIdentifierIdentifierPerformTransaction().'
            );
        }

        if (requestParameters['identifier'] == null) {
            throw new runtime.RequiredError(
                'identifier',
                'Required parameter "identifier" was null or undefined when calling postPaymentTerminalsByIdentifierIdentifierPerformTransaction().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsByIdentifierIdentifierPerformTransaction().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['transactionId'] != null) {
            queryParameters['transactionId'] = requestParameters['transactionId'];
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/by-identifier/{identifier}/perform-transaction`.replace(`{${"identifier"}}`, encodeURIComponent(String(requestParameters['identifier'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = 90;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/by-identifier/{identifier}/perform-transaction`.replace(`{${"identifier"}}`, encodeURIComponent(String(requestParameters['identifier']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Initiates a payment terminal transaction and waits for its completion. If a timeout occurs, retrying will resume the transaction from where it left off.
     * Perform a payment terminal transaction by identifier
     
     * (The read time out for this request is 90 seconds)
     */
    async postPaymentTerminalsByIdentifierIdentifierPerformTransaction(requestParameters: PostPaymentTerminalsByIdentifierIdentifierPerformTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.postPaymentTerminalsByIdentifierIdentifierPerformTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Refresh a physical terminal state by identifier
     
     * (The read time out for this request is 30 seconds)
     */
    async postPaymentTerminalsByIdentifierIdentifierRefreshRaw(requestParameters: PostPaymentTerminalsByIdentifierIdentifierRefreshRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminal>> {
        if (requestParameters['identifier'] == null) {
            throw new runtime.RequiredError(
                'identifier',
                'Required parameter "identifier" was null or undefined when calling postPaymentTerminalsByIdentifierIdentifierRefresh().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsByIdentifierIdentifierRefresh().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/by-identifier/{identifier}/refresh`.replace(`{${"identifier"}}`, encodeURIComponent(String(requestParameters['identifier'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = 30;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/by-identifier/{identifier}/refresh`.replace(`{${"identifier"}}`, encodeURIComponent(String(requestParameters['identifier']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalFromJSON(jsonValue));
    }

    /**
     * Refresh a physical terminal state by identifier
     
     * (The read time out for this request is 30 seconds)
     */
    async postPaymentTerminalsByIdentifierIdentifierRefresh(requestParameters: PostPaymentTerminalsByIdentifierIdentifierRefreshRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminal> {
        const response = await this.postPaymentTerminalsByIdentifierIdentifierRefreshRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remotely trigger the configuration by identifier
     
     */
    async postPaymentTerminalsByIdentifierIdentifierTriggerConfigurationRaw(requestParameters: PostPaymentTerminalsByIdentifierIdentifierTriggerConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['identifier'] == null) {
            throw new runtime.RequiredError(
                'identifier',
                'Required parameter "identifier" was null or undefined when calling postPaymentTerminalsByIdentifierIdentifierTriggerConfiguration().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsByIdentifierIdentifierTriggerConfiguration().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/by-identifier/{identifier}/trigger-configuration`.replace(`{${"identifier"}}`, encodeURIComponent(String(requestParameters['identifier'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/by-identifier/{identifier}/trigger-configuration`.replace(`{${"identifier"}}`, encodeURIComponent(String(requestParameters['identifier']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remotely trigger the configuration by identifier
     
     */
    async postPaymentTerminalsByIdentifierIdentifierTriggerConfiguration(requestParameters: PostPaymentTerminalsByIdentifierIdentifierTriggerConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentTerminalsByIdentifierIdentifierTriggerConfigurationRaw(requestParameters, initOverrides);
    }

    /**
     * Remotely trigger the final balance by identifier
     
     */
    async postPaymentTerminalsByIdentifierIdentifierTriggerFinalBalanceRaw(requestParameters: PostPaymentTerminalsByIdentifierIdentifierTriggerFinalBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminalTransactionSummaryReference>> {
        if (requestParameters['identifier'] == null) {
            throw new runtime.RequiredError(
                'identifier',
                'Required parameter "identifier" was null or undefined when calling postPaymentTerminalsByIdentifierIdentifierTriggerFinalBalance().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsByIdentifierIdentifierTriggerFinalBalance().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/by-identifier/{identifier}/trigger-final-balance`.replace(`{${"identifier"}}`, encodeURIComponent(String(requestParameters['identifier'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/by-identifier/{identifier}/trigger-final-balance`.replace(`{${"identifier"}}`, encodeURIComponent(String(requestParameters['identifier']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalTransactionSummaryReferenceFromJSON(jsonValue));
    }

    /**
     * Remotely trigger the final balance by identifier
     
     */
    async postPaymentTerminalsByIdentifierIdentifierTriggerFinalBalance(requestParameters: PostPaymentTerminalsByIdentifierIdentifierTriggerFinalBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminalTransactionSummaryReference> {
        const response = await this.postPaymentTerminalsByIdentifierIdentifierTriggerFinalBalanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Link a device with a payment terminal
     
     */
    async postPaymentTerminalsIdLinkRaw(requestParameters: PostPaymentTerminalsIdLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTerminalsIdLink().'
            );
        }

        if (requestParameters['serialNumber'] == null) {
            throw new runtime.RequiredError(
                'serialNumber',
                'Required parameter "serialNumber" was null or undefined when calling postPaymentTerminalsIdLink().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsIdLink().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['serialNumber'] != null) {
            queryParameters['serialNumber'] = requestParameters['serialNumber'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/{id}/link`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}/link`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Link a device with a payment terminal
     
     */
    async postPaymentTerminalsIdLink(requestParameters: PostPaymentTerminalsIdLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentTerminalsIdLinkRaw(requestParameters, initOverrides);
    }

    /**
     * Initiates a payment terminal transaction and waits for its completion. If a timeout occurs, retrying will resume the transaction from where it left off.
     * Perform a payment terminal transaction
     
     * (The read time out for this request is 90 seconds)
     */
    async postPaymentTerminalsIdPerformTransactionRaw(requestParameters: PostPaymentTerminalsIdPerformTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTerminalsIdPerformTransaction().'
            );
        }

        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling postPaymentTerminalsIdPerformTransaction().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsIdPerformTransaction().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['transactionId'] != null) {
            queryParameters['transactionId'] = requestParameters['transactionId'];
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/{id}/perform-transaction`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = 90;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}/perform-transaction`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Initiates a payment terminal transaction and waits for its completion. If a timeout occurs, retrying will resume the transaction from where it left off.
     * Perform a payment terminal transaction
     
     * (The read time out for this request is 90 seconds)
     */
    async postPaymentTerminalsIdPerformTransaction(requestParameters: PostPaymentTerminalsIdPerformTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.postPaymentTerminalsIdPerformTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Refresh a physical terminal state
     
     * (The read time out for this request is 30 seconds)
     */
    async postPaymentTerminalsIdRefreshRaw(requestParameters: PostPaymentTerminalsIdRefreshRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminal>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTerminalsIdRefresh().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsIdRefresh().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/{id}/refresh`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = 30;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}/refresh`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalFromJSON(jsonValue));
    }

    /**
     * Refresh a physical terminal state
     
     * (The read time out for this request is 30 seconds)
     */
    async postPaymentTerminalsIdRefresh(requestParameters: PostPaymentTerminalsIdRefreshRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminal> {
        const response = await this.postPaymentTerminalsIdRefreshRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remotely trigger the configuration
     
     */
    async postPaymentTerminalsIdTriggerConfigurationRaw(requestParameters: PostPaymentTerminalsIdTriggerConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTerminalsIdTriggerConfiguration().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsIdTriggerConfiguration().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/{id}/trigger-configuration`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}/trigger-configuration`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remotely trigger the configuration
     
     */
    async postPaymentTerminalsIdTriggerConfiguration(requestParameters: PostPaymentTerminalsIdTriggerConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentTerminalsIdTriggerConfigurationRaw(requestParameters, initOverrides);
    }

    /**
     * Remotely trigger the final balance
     
     */
    async postPaymentTerminalsIdTriggerFinalBalanceRaw(requestParameters: PostPaymentTerminalsIdTriggerFinalBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminalTransactionSummaryReference>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTerminalsIdTriggerFinalBalance().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsIdTriggerFinalBalance().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/{id}/trigger-final-balance`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}/trigger-final-balance`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalTransactionSummaryReferenceFromJSON(jsonValue));
    }

    /**
     * Remotely trigger the final balance
     
     */
    async postPaymentTerminalsIdTriggerFinalBalance(requestParameters: PostPaymentTerminalsIdTriggerFinalBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminalTransactionSummaryReference> {
        const response = await this.postPaymentTerminalsIdTriggerFinalBalanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unlink any device from a payment terminal
     
     */
    async postPaymentTerminalsIdUnlinkRaw(requestParameters: PostPaymentTerminalsIdUnlinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTerminalsIdUnlink().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsIdUnlink().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/{id}/unlink`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/{id}/unlink`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unlink any device from a payment terminal
     
     */
    async postPaymentTerminalsIdUnlink(requestParameters: PostPaymentTerminalsIdUnlinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentTerminalsIdUnlinkRaw(requestParameters, initOverrides);
    }

    /**
     * This function communicates with the payment terminal to cancel the authorization hold and remove the transaction from the current open batch. It must be executed before the settlement (Submission) occurs.
     * Revert terminal transaction
     
     * (The read time out for this request is 90 seconds)
     */
    async postPaymentTerminalsTriggerReversalRaw(requestParameters: PostPaymentTerminalsTriggerReversalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionVoid>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling postPaymentTerminalsTriggerReversal().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTerminalsTriggerReversal().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['transactionId'] != null) {
            queryParameters['transactionId'] = requestParameters['transactionId'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/terminals/trigger-reversal`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = 90;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/trigger-reversal`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionVoidFromJSON(jsonValue));
    }

    /**
     * This function communicates with the payment terminal to cancel the authorization hold and remove the transaction from the current open batch. It must be executed before the settlement (Submission) occurs.
     * Revert terminal transaction
     
     * (The read time out for this request is 90 seconds)
     */
    async postPaymentTerminalsTriggerReversal(requestParameters: PostPaymentTerminalsTriggerReversalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionVoid> {
        const response = await this.postPaymentTerminalsTriggerReversalRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
