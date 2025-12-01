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
  AuthenticatedCardRequest,
  Charge,
  PaymentMethodConfigurationListResponse,
  RenderedDocument,
  RenderedTerminalReceiptListResponse,
  RestApiErrorResponse,
  SortingOrder,
  TerminalReceiptFormat,
  TokenVersionListResponse,
  TokenizedCardRequest,
  Transaction,
  TransactionCompletion,
  TransactionCompletionDetails,
  TransactionCreate,
  TransactionLineItemVersion,
  TransactionListResponse,
  TransactionPending,
  TransactionSearchResponse,
  TransactionVoid,
} from '../models/index';
import {
    AuthenticatedCardRequestFromJSON,
    AuthenticatedCardRequestToJSON,
    ChargeFromJSON,
    ChargeToJSON,
    PaymentMethodConfigurationListResponseFromJSON,
    PaymentMethodConfigurationListResponseToJSON,
    RenderedDocumentFromJSON,
    RenderedDocumentToJSON,
    RenderedTerminalReceiptListResponseFromJSON,
    RenderedTerminalReceiptListResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    TerminalReceiptFormatFromJSON,
    TerminalReceiptFormatToJSON,
    TokenVersionListResponseFromJSON,
    TokenVersionListResponseToJSON,
    TokenizedCardRequestFromJSON,
    TokenizedCardRequestToJSON,
    TransactionFromJSON,
    TransactionToJSON,
    TransactionCompletionFromJSON,
    TransactionCompletionToJSON,
    TransactionCompletionDetailsFromJSON,
    TransactionCompletionDetailsToJSON,
    TransactionCreateFromJSON,
    TransactionCreateToJSON,
    TransactionLineItemVersionFromJSON,
    TransactionLineItemVersionToJSON,
    TransactionListResponseFromJSON,
    TransactionListResponseToJSON,
    TransactionPendingFromJSON,
    TransactionPendingToJSON,
    TransactionSearchResponseFromJSON,
    TransactionSearchResponseToJSON,
    TransactionVoidFromJSON,
    TransactionVoidToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentTransactionsByCredentialsCredentialsOneClickTokensIdRequest {
    credentials: string;
    id: number;
    space: number;
}

export interface GetPaymentTransactionsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentTransactionsByCredentialsCredentialsRequest {
    credentials: string;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsByCredentialsCredentialsMobileSdkUrlRequest {
    credentials: string;
    space: number;
}

export interface GetPaymentTransactionsByCredentialsCredentialsOneClickTokensRequest {
    credentials: string;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurationsRequest {
    credentials: string;
    integrationMode: string;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsExportRequest {
    space: number;
    fields?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface GetPaymentTransactionsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsIdChargeFlowPaymentPageUrlRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsIdCheckTokenCreationPossibleRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsIdCredentialsRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsIdIframeJavascriptUrlRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsIdInvoiceDocumentRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsIdLatestLineItemVersionRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsIdLightboxJavascriptUrlRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsIdPackingSlipDocumentRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsIdPaymentMethodConfigurationsRequest {
    id: number;
    integrationMode: string;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTransactionsIdPaymentPageUrlRequest {
    id: number;
    space: number;
}

export interface GetPaymentTransactionsIdTerminalReceiptsRequest {
    id: number;
    format: TerminalReceiptFormat;
    width: number;
    space: number;
}

export interface GetPaymentTransactionsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentTransactionsIdRequest {
    id: number;
    space: number;
    transactionPending: TransactionPending;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsRequest {
    space: number;
    transactionCreate: TransactionCreate;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcessRequest {
    credentials: string;
    id: number;
    space: number;
}

export interface PostPaymentTransactionsIdChargeFlowApplyRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdChargeFlowCancelRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdChargeFlowUpdateRecipientRequest {
    id: number;
    type: number;
    recipient: string;
    space: number;
}

export interface PostPaymentTransactionsIdCompleteOfflineRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdCompleteOnlineRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdCompletePartiallyOfflineRequest {
    id: number;
    space: number;
    transactionCompletionDetails: TransactionCompletionDetails;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdCompletePartiallyOnlineRequest {
    id: number;
    space: number;
    transactionCompletionDetails: TransactionCompletionDetails;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdConfirmRequest {
    id: number;
    space: number;
    transactionPending: TransactionPending;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdProcessCardDetailsRequest {
    id: number;
    space: number;
    authenticatedCardRequest: AuthenticatedCardRequest;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdProcessCardDetailsThreedRequest {
    id: number;
    space: number;
    tokenizedCardRequest: TokenizedCardRequest;
}

export interface PostPaymentTransactionsIdProcessWithTokenRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdProcessWithoutInteractionRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdVoidOfflineRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentTransactionsIdVoidOnlineRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class TransactionsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a one-click token by credentials
     
     */
    async deletePaymentTransactionsByCredentialsCredentialsOneClickTokensIdRaw(requestParameters: DeletePaymentTransactionsByCredentialsCredentialsOneClickTokensIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['credentials'] == null) {
            throw new runtime.RequiredError(
                'credentials',
                'Required parameter "credentials" was null or undefined when calling deletePaymentTransactionsByCredentialsCredentialsOneClickTokensId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePaymentTransactionsByCredentialsCredentialsOneClickTokensId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentTransactionsByCredentialsCredentialsOneClickTokensId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/transactions/by-credentials/{credentials}/one-click-tokens/{id}`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/by-credentials/{credentials}/one-click-tokens/{id}`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a one-click token by credentials
     
     */
    async deletePaymentTransactionsByCredentialsCredentialsOneClickTokensId(requestParameters: DeletePaymentTransactionsByCredentialsCredentialsOneClickTokensIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentTransactionsByCredentialsCredentialsOneClickTokensIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all transactions
     
     */
    async getPaymentTransactionsRaw(requestParameters: GetPaymentTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactions().'
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
        const path = `/payment/transactions`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionListResponseFromJSON(jsonValue));
    }

    /**
     * List all transactions
     
     */
    async getPaymentTransactions(requestParameters: GetPaymentTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionListResponse> {
        const response = await this.getPaymentTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a transaction by credentials
     
     */
    async getPaymentTransactionsByCredentialsCredentialsRaw(requestParameters: GetPaymentTransactionsByCredentialsCredentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['credentials'] == null) {
            throw new runtime.RequiredError(
                'credentials',
                'Required parameter "credentials" was null or undefined when calling getPaymentTransactionsByCredentialsCredentials().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsByCredentialsCredentials().'
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
        const path = `/payment/transactions/by-credentials/{credentials}`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/by-credentials/{credentials}`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Retrieve a transaction by credentials
     
     */
    async getPaymentTransactionsByCredentialsCredentials(requestParameters: GetPaymentTransactionsByCredentialsCredentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.getPaymentTransactionsByCredentialsCredentialsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a Mobile SDK URL by credentials
     
     */
    async getPaymentTransactionsByCredentialsCredentialsMobileSdkUrlRaw(requestParameters: GetPaymentTransactionsByCredentialsCredentialsMobileSdkUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['credentials'] == null) {
            throw new runtime.RequiredError(
                'credentials',
                'Required parameter "credentials" was null or undefined when calling getPaymentTransactionsByCredentialsCredentialsMobileSdkUrl().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsByCredentialsCredentialsMobileSdkUrl().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/by-credentials/{credentials}/mobile-sdk-url`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/by-credentials/{credentials}/mobile-sdk-url`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials']))),
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
     * Retrieve a Mobile SDK URL by credentials
     
     */
    async getPaymentTransactionsByCredentialsCredentialsMobileSdkUrl(requestParameters: GetPaymentTransactionsByCredentialsCredentialsMobileSdkUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPaymentTransactionsByCredentialsCredentialsMobileSdkUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List one-click tokens by credentials
     
     */
    async getPaymentTransactionsByCredentialsCredentialsOneClickTokensRaw(requestParameters: GetPaymentTransactionsByCredentialsCredentialsOneClickTokensRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenVersionListResponse>> {
        if (requestParameters['credentials'] == null) {
            throw new runtime.RequiredError(
                'credentials',
                'Required parameter "credentials" was null or undefined when calling getPaymentTransactionsByCredentialsCredentialsOneClickTokens().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsByCredentialsCredentialsOneClickTokens().'
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
        const path = `/payment/transactions/by-credentials/{credentials}/one-click-tokens`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/by-credentials/{credentials}/one-click-tokens`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenVersionListResponseFromJSON(jsonValue));
    }

    /**
     * List one-click tokens by credentials
     
     */
    async getPaymentTransactionsByCredentialsCredentialsOneClickTokens(requestParameters: GetPaymentTransactionsByCredentialsCredentialsOneClickTokensRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenVersionListResponse> {
        const response = await this.getPaymentTransactionsByCredentialsCredentialsOneClickTokensRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List available payment method configurations by credentials
     
     */
    async getPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurationsRaw(requestParameters: GetPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodConfigurationListResponse>> {
        if (requestParameters['credentials'] == null) {
            throw new runtime.RequiredError(
                'credentials',
                'Required parameter "credentials" was null or undefined when calling getPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurations().'
            );
        }

        if (requestParameters['integrationMode'] == null) {
            throw new runtime.RequiredError(
                'integrationMode',
                'Required parameter "integrationMode" was null or undefined when calling getPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurations().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurations().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['integrationMode'] != null) {
            queryParameters['integrationMode'] = requestParameters['integrationMode'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/by-credentials/{credentials}/payment-method-configurations`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/by-credentials/{credentials}/payment-method-configurations`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodConfigurationListResponseFromJSON(jsonValue));
    }

    /**
     * List available payment method configurations by credentials
     
     */
    async getPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurations(requestParameters: GetPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodConfigurationListResponse> {
        const response = await this.getPaymentTransactionsByCredentialsCredentialsPaymentMethodConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Export transactions
     
     * (The read time out for this request is 60 seconds)
     */
    async getPaymentTransactionsExportRaw(requestParameters: GetPaymentTransactionsExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsExport().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
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
        const path = `/payment/transactions/export`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = 60;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Export transactions
     
     * (The read time out for this request is 60 seconds)
     */
    async getPaymentTransactionsExport(requestParameters: GetPaymentTransactionsExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getPaymentTransactionsExportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a transaction
     
     */
    async getPaymentTransactionsIdRaw(requestParameters: GetPaymentTransactionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsId().'
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
        const path = `/payment/transactions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Retrieve a transaction
     
     */
    async getPaymentTransactionsId(requestParameters: GetPaymentTransactionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.getPaymentTransactionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a charge flow payment page URL
     
     */
    async getPaymentTransactionsIdChargeFlowPaymentPageUrlRaw(requestParameters: GetPaymentTransactionsIdChargeFlowPaymentPageUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdChargeFlowPaymentPageUrl().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdChargeFlowPaymentPageUrl().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/charge-flow/payment-page-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/charge-flow/payment-page-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
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
     * Retrieve a charge flow payment page URL
     
     */
    async getPaymentTransactionsIdChargeFlowPaymentPageUrl(requestParameters: GetPaymentTransactionsIdChargeFlowPaymentPageUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPaymentTransactionsIdChargeFlowPaymentPageUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Check if token can be created
     
     */
    async getPaymentTransactionsIdCheckTokenCreationPossibleRaw(requestParameters: GetPaymentTransactionsIdCheckTokenCreationPossibleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdCheckTokenCreationPossible().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdCheckTokenCreationPossible().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/check-token-creation-possible`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/check-token-creation-possible`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
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
     * Check if token can be created
     
     */
    async getPaymentTransactionsIdCheckTokenCreationPossible(requestParameters: GetPaymentTransactionsIdCheckTokenCreationPossibleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.getPaymentTransactionsIdCheckTokenCreationPossibleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generates temporary transaction credentials to delegate access to the REST API for the specified transaction.
     * Retrieve transaction credentials
     
     */
    async getPaymentTransactionsIdCredentialsRaw(requestParameters: GetPaymentTransactionsIdCredentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdCredentials().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdCredentials().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/credentials`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/credentials`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
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
     * Generates temporary transaction credentials to delegate access to the REST API for the specified transaction.
     * Retrieve transaction credentials
     
     */
    async getPaymentTransactionsIdCredentials(requestParameters: GetPaymentTransactionsIdCredentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPaymentTransactionsIdCredentialsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an iFrame JavaScript URL
     
     */
    async getPaymentTransactionsIdIframeJavascriptUrlRaw(requestParameters: GetPaymentTransactionsIdIframeJavascriptUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdIframeJavascriptUrl().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdIframeJavascriptUrl().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/iframe-javascript-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/iframe-javascript-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
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
     * Retrieve an iFrame JavaScript URL
     
     */
    async getPaymentTransactionsIdIframeJavascriptUrl(requestParameters: GetPaymentTransactionsIdIframeJavascriptUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPaymentTransactionsIdIframeJavascriptUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an invoice document
     
     */
    async getPaymentTransactionsIdInvoiceDocumentRaw(requestParameters: GetPaymentTransactionsIdInvoiceDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RenderedDocument>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdInvoiceDocument().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdInvoiceDocument().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/invoice-document`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/invoice-document`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RenderedDocumentFromJSON(jsonValue));
    }

    /**
     * Retrieve an invoice document
     
     */
    async getPaymentTransactionsIdInvoiceDocument(requestParameters: GetPaymentTransactionsIdInvoiceDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RenderedDocument> {
        const response = await this.getPaymentTransactionsIdInvoiceDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the latest line item version
     
     */
    async getPaymentTransactionsIdLatestLineItemVersionRaw(requestParameters: GetPaymentTransactionsIdLatestLineItemVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionLineItemVersion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdLatestLineItemVersion().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdLatestLineItemVersion().'
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
        const path = `/payment/transactions/{id}/latest-line-item-version`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/latest-line-item-version`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionLineItemVersionFromJSON(jsonValue));
    }

    /**
     * Retrieve the latest line item version
     
     */
    async getPaymentTransactionsIdLatestLineItemVersion(requestParameters: GetPaymentTransactionsIdLatestLineItemVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionLineItemVersion> {
        const response = await this.getPaymentTransactionsIdLatestLineItemVersionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a Lightbox JavaScript URL
     
     */
    async getPaymentTransactionsIdLightboxJavascriptUrlRaw(requestParameters: GetPaymentTransactionsIdLightboxJavascriptUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdLightboxJavascriptUrl().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdLightboxJavascriptUrl().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/lightbox-javascript-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/lightbox-javascript-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
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
     * Retrieve a Lightbox JavaScript URL
     
     */
    async getPaymentTransactionsIdLightboxJavascriptUrl(requestParameters: GetPaymentTransactionsIdLightboxJavascriptUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPaymentTransactionsIdLightboxJavascriptUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a packing slip document
     
     */
    async getPaymentTransactionsIdPackingSlipDocumentRaw(requestParameters: GetPaymentTransactionsIdPackingSlipDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RenderedDocument>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdPackingSlipDocument().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdPackingSlipDocument().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/packing-slip-document`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/packing-slip-document`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RenderedDocumentFromJSON(jsonValue));
    }

    /**
     * Retrieve a packing slip document
     
     */
    async getPaymentTransactionsIdPackingSlipDocument(requestParameters: GetPaymentTransactionsIdPackingSlipDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RenderedDocument> {
        const response = await this.getPaymentTransactionsIdPackingSlipDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List available payment method configurations
     
     */
    async getPaymentTransactionsIdPaymentMethodConfigurationsRaw(requestParameters: GetPaymentTransactionsIdPaymentMethodConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodConfigurationListResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdPaymentMethodConfigurations().'
            );
        }

        if (requestParameters['integrationMode'] == null) {
            throw new runtime.RequiredError(
                'integrationMode',
                'Required parameter "integrationMode" was null or undefined when calling getPaymentTransactionsIdPaymentMethodConfigurations().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdPaymentMethodConfigurations().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['integrationMode'] != null) {
            queryParameters['integrationMode'] = requestParameters['integrationMode'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/payment-method-configurations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/payment-method-configurations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodConfigurationListResponseFromJSON(jsonValue));
    }

    /**
     * List available payment method configurations
     
     */
    async getPaymentTransactionsIdPaymentMethodConfigurations(requestParameters: GetPaymentTransactionsIdPaymentMethodConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodConfigurationListResponse> {
        const response = await this.getPaymentTransactionsIdPaymentMethodConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a payment page URL
     
     */
    async getPaymentTransactionsIdPaymentPageUrlRaw(requestParameters: GetPaymentTransactionsIdPaymentPageUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdPaymentPageUrl().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdPaymentPageUrl().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/payment-page-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/payment-page-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
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
     * Retrieve a payment page URL
     
     */
    async getPaymentTransactionsIdPaymentPageUrl(requestParameters: GetPaymentTransactionsIdPaymentPageUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getPaymentTransactionsIdPaymentPageUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List terminal receipts
     
     */
    async getPaymentTransactionsIdTerminalReceiptsRaw(requestParameters: GetPaymentTransactionsIdTerminalReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RenderedTerminalReceiptListResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTransactionsIdTerminalReceipts().'
            );
        }

        if (requestParameters['format'] == null) {
            throw new runtime.RequiredError(
                'format',
                'Required parameter "format" was null or undefined when calling getPaymentTransactionsIdTerminalReceipts().'
            );
        }

        if (requestParameters['width'] == null) {
            throw new runtime.RequiredError(
                'width',
                'Required parameter "width" was null or undefined when calling getPaymentTransactionsIdTerminalReceipts().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsIdTerminalReceipts().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        if (requestParameters['width'] != null) {
            queryParameters['width'] = requestParameters['width'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/transactions/{id}/terminal-receipts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/terminal-receipts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RenderedTerminalReceiptListResponseFromJSON(jsonValue));
    }

    /**
     * List terminal receipts
     
     */
    async getPaymentTransactionsIdTerminalReceipts(requestParameters: GetPaymentTransactionsIdTerminalReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RenderedTerminalReceiptListResponse> {
        const response = await this.getPaymentTransactionsIdTerminalReceiptsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search transactions
     
     */
    async getPaymentTransactionsSearchRaw(requestParameters: GetPaymentTransactionsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTransactionsSearch().'
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
        const path = `/payment/transactions/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search transactions
     
     */
    async getPaymentTransactionsSearch(requestParameters: GetPaymentTransactionsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionSearchResponse> {
        const response = await this.getPaymentTransactionsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a transaction
     
     */
    async patchPaymentTransactionsIdRaw(requestParameters: PatchPaymentTransactionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentTransactionsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentTransactionsId().'
            );
        }

        if (requestParameters['transactionPending'] == null) {
            throw new runtime.RequiredError(
                'transactionPending',
                'Required parameter "transactionPending" was null or undefined when calling patchPaymentTransactionsId().'
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
        const path = `/payment/transactions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionPendingToJSON(requestParameters['transactionPending']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Update a transaction
     
     */
    async patchPaymentTransactionsId(requestParameters: PatchPaymentTransactionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.patchPaymentTransactionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a transaction
     
     */
    async postPaymentTransactionsRaw(requestParameters: PostPaymentTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactions().'
            );
        }

        if (requestParameters['transactionCreate'] == null) {
            throw new runtime.RequiredError(
                'transactionCreate',
                'Required parameter "transactionCreate" was null or undefined when calling postPaymentTransactions().'
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
        const path = `/payment/transactions`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionCreateToJSON(requestParameters['transactionCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Create a transaction
     
     */
    async postPaymentTransactions(requestParameters: PostPaymentTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.postPaymentTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assigns the provided token to the transaction, processes it, and returns a URL for customer redirection to complete the transaction.
     * Process via one-click token by credentials
     
     */
    async postPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcessRaw(requestParameters: PostPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['credentials'] == null) {
            throw new runtime.RequiredError(
                'credentials',
                'Required parameter "credentials" was null or undefined when calling postPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcess().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcess().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcess().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/transactions/by-credentials/{credentials}/one-click-tokens/{id}/process`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/by-credentials/{credentials}/one-click-tokens/{id}/process`.replace(`{${"credentials"}}`, encodeURIComponent(String(requestParameters['credentials']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
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
     * Assigns the provided token to the transaction, processes it, and returns a URL for customer redirection to complete the transaction.
     * Process via one-click token by credentials
     
     */
    async postPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcess(requestParameters: PostPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.postPaymentTransactionsByCredentialsCredentialsOneClickTokensIdProcessRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Process a transaction via charge flow
     
     */
    async postPaymentTransactionsIdChargeFlowApplyRaw(requestParameters: PostPaymentTransactionsIdChargeFlowApplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdChargeFlowApply().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdChargeFlowApply().'
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
        const path = `/payment/transactions/{id}/charge-flow/apply`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/charge-flow/apply`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Process a transaction via charge flow
     
     */
    async postPaymentTransactionsIdChargeFlowApply(requestParameters: PostPaymentTransactionsIdChargeFlowApplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.postPaymentTransactionsIdChargeFlowApplyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Cancel a charge flow
     
     */
    async postPaymentTransactionsIdChargeFlowCancelRaw(requestParameters: PostPaymentTransactionsIdChargeFlowCancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdChargeFlowCancel().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdChargeFlowCancel().'
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
        const path = `/payment/transactions/{id}/charge-flow/cancel`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/charge-flow/cancel`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Cancel a charge flow
     
     */
    async postPaymentTransactionsIdChargeFlowCancel(requestParameters: PostPaymentTransactionsIdChargeFlowCancelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.postPaymentTransactionsIdChargeFlowCancelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a charge flow recipient
     
     */
    async postPaymentTransactionsIdChargeFlowUpdateRecipientRaw(requestParameters: PostPaymentTransactionsIdChargeFlowUpdateRecipientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdChargeFlowUpdateRecipient().'
            );
        }

        if (requestParameters['type'] == null) {
            throw new runtime.RequiredError(
                'type',
                'Required parameter "type" was null or undefined when calling postPaymentTransactionsIdChargeFlowUpdateRecipient().'
            );
        }

        if (requestParameters['recipient'] == null) {
            throw new runtime.RequiredError(
                'recipient',
                'Required parameter "recipient" was null or undefined when calling postPaymentTransactionsIdChargeFlowUpdateRecipient().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdChargeFlowUpdateRecipient().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['recipient'] != null) {
            queryParameters['recipient'] = requestParameters['recipient'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/transactions/{id}/charge-flow/update-recipient`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/charge-flow/update-recipient`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update a charge flow recipient
     
     */
    async postPaymentTransactionsIdChargeFlowUpdateRecipient(requestParameters: PostPaymentTransactionsIdChargeFlowUpdateRecipientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentTransactionsIdChargeFlowUpdateRecipientRaw(requestParameters, initOverrides);
    }

    /**
     * Complete a transaction offline
     
     */
    async postPaymentTransactionsIdCompleteOfflineRaw(requestParameters: PostPaymentTransactionsIdCompleteOfflineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionCompletion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdCompleteOffline().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdCompleteOffline().'
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
        const path = `/payment/transactions/{id}/complete-offline`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/complete-offline`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCompletionFromJSON(jsonValue));
    }

    /**
     * Complete a transaction offline
     
     */
    async postPaymentTransactionsIdCompleteOffline(requestParameters: PostPaymentTransactionsIdCompleteOfflineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionCompletion> {
        const response = await this.postPaymentTransactionsIdCompleteOfflineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Complete a transaction online
     
     */
    async postPaymentTransactionsIdCompleteOnlineRaw(requestParameters: PostPaymentTransactionsIdCompleteOnlineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionCompletion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdCompleteOnline().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdCompleteOnline().'
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
        const path = `/payment/transactions/{id}/complete-online`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/complete-online`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCompletionFromJSON(jsonValue));
    }

    /**
     * Complete a transaction online
     
     */
    async postPaymentTransactionsIdCompleteOnline(requestParameters: PostPaymentTransactionsIdCompleteOnlineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionCompletion> {
        const response = await this.postPaymentTransactionsIdCompleteOnlineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Complete a transaction offline partially
     
     */
    async postPaymentTransactionsIdCompletePartiallyOfflineRaw(requestParameters: PostPaymentTransactionsIdCompletePartiallyOfflineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionCompletion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdCompletePartiallyOffline().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdCompletePartiallyOffline().'
            );
        }

        if (requestParameters['transactionCompletionDetails'] == null) {
            throw new runtime.RequiredError(
                'transactionCompletionDetails',
                'Required parameter "transactionCompletionDetails" was null or undefined when calling postPaymentTransactionsIdCompletePartiallyOffline().'
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
        const path = `/payment/transactions/{id}/complete-partially-offline`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/complete-partially-offline`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionCompletionDetailsToJSON(requestParameters['transactionCompletionDetails']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCompletionFromJSON(jsonValue));
    }

    /**
     * Complete a transaction offline partially
     
     */
    async postPaymentTransactionsIdCompletePartiallyOffline(requestParameters: PostPaymentTransactionsIdCompletePartiallyOfflineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionCompletion> {
        const response = await this.postPaymentTransactionsIdCompletePartiallyOfflineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Complete a transaction online partially
     
     */
    async postPaymentTransactionsIdCompletePartiallyOnlineRaw(requestParameters: PostPaymentTransactionsIdCompletePartiallyOnlineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionCompletion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdCompletePartiallyOnline().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdCompletePartiallyOnline().'
            );
        }

        if (requestParameters['transactionCompletionDetails'] == null) {
            throw new runtime.RequiredError(
                'transactionCompletionDetails',
                'Required parameter "transactionCompletionDetails" was null or undefined when calling postPaymentTransactionsIdCompletePartiallyOnline().'
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
        const path = `/payment/transactions/{id}/complete-partially-online`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/complete-partially-online`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionCompletionDetailsToJSON(requestParameters['transactionCompletionDetails']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionCompletionFromJSON(jsonValue));
    }

    /**
     * Complete a transaction online partially
     
     */
    async postPaymentTransactionsIdCompletePartiallyOnline(requestParameters: PostPaymentTransactionsIdCompletePartiallyOnlineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionCompletion> {
        const response = await this.postPaymentTransactionsIdCompletePartiallyOnlineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Confirm a transaction
     
     */
    async postPaymentTransactionsIdConfirmRaw(requestParameters: PostPaymentTransactionsIdConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdConfirm().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdConfirm().'
            );
        }

        if (requestParameters['transactionPending'] == null) {
            throw new runtime.RequiredError(
                'transactionPending',
                'Required parameter "transactionPending" was null or undefined when calling postPaymentTransactionsIdConfirm().'
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
        const path = `/payment/transactions/{id}/confirm`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/confirm`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionPendingToJSON(requestParameters['transactionPending']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Confirm a transaction
     
     */
    async postPaymentTransactionsIdConfirm(requestParameters: PostPaymentTransactionsIdConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.postPaymentTransactionsIdConfirmRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Process a card transaction
     
     */
    async postPaymentTransactionsIdProcessCardDetailsRaw(requestParameters: PostPaymentTransactionsIdProcessCardDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdProcessCardDetails().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdProcessCardDetails().'
            );
        }

        if (requestParameters['authenticatedCardRequest'] == null) {
            throw new runtime.RequiredError(
                'authenticatedCardRequest',
                'Required parameter "authenticatedCardRequest" was null or undefined when calling postPaymentTransactionsIdProcessCardDetails().'
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
        const path = `/payment/transactions/{id}/process-card-details`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/process-card-details`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthenticatedCardRequestToJSON(requestParameters['authenticatedCardRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Process a card transaction
     
     */
    async postPaymentTransactionsIdProcessCardDetails(requestParameters: PostPaymentTransactionsIdProcessCardDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.postPaymentTransactionsIdProcessCardDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Processes the transaction using the provided card details, potentially utilizing 3-D Secure. Returns a URL where the buyer must be redirected to complete the transaction.
     * Process a card transaction with 3-D Secure
     
     */
    async postPaymentTransactionsIdProcessCardDetailsThreedRaw(requestParameters: PostPaymentTransactionsIdProcessCardDetailsThreedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdProcessCardDetailsThreed().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdProcessCardDetailsThreed().'
            );
        }

        if (requestParameters['tokenizedCardRequest'] == null) {
            throw new runtime.RequiredError(
                'tokenizedCardRequest',
                'Required parameter "tokenizedCardRequest" was null or undefined when calling postPaymentTransactionsIdProcessCardDetailsThreed().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/transactions/{id}/process-card-details-threed`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/process-card-details-threed`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TokenizedCardRequestToJSON(requestParameters['tokenizedCardRequest']),
        }, updatedInitOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Processes the transaction using the provided card details, potentially utilizing 3-D Secure. Returns a URL where the buyer must be redirected to complete the transaction.
     * Process a card transaction with 3-D Secure
     
     */
    async postPaymentTransactionsIdProcessCardDetailsThreed(requestParameters: PostPaymentTransactionsIdProcessCardDetailsThreedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.postPaymentTransactionsIdProcessCardDetailsThreedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Process a transaction via token
     
     */
    async postPaymentTransactionsIdProcessWithTokenRaw(requestParameters: PostPaymentTransactionsIdProcessWithTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Charge>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdProcessWithToken().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdProcessWithToken().'
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
        const path = `/payment/transactions/{id}/process-with-token`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/process-with-token`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeFromJSON(jsonValue));
    }

    /**
     * Process a transaction via token
     
     */
    async postPaymentTransactionsIdProcessWithToken(requestParameters: PostPaymentTransactionsIdProcessWithTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Charge> {
        const response = await this.postPaymentTransactionsIdProcessWithTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Process a transaction without user-interaction
     
     */
    async postPaymentTransactionsIdProcessWithoutInteractionRaw(requestParameters: PostPaymentTransactionsIdProcessWithoutInteractionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdProcessWithoutInteraction().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdProcessWithoutInteraction().'
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
        const path = `/payment/transactions/{id}/process-without-interaction`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/process-without-interaction`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Process a transaction without user-interaction
     
     */
    async postPaymentTransactionsIdProcessWithoutInteraction(requestParameters: PostPaymentTransactionsIdProcessWithoutInteractionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.postPaymentTransactionsIdProcessWithoutInteractionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Void a transaction offline
     
     */
    async postPaymentTransactionsIdVoidOfflineRaw(requestParameters: PostPaymentTransactionsIdVoidOfflineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionVoid>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdVoidOffline().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdVoidOffline().'
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
        const path = `/payment/transactions/{id}/void-offline`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/void-offline`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionVoidFromJSON(jsonValue));
    }

    /**
     * Void a transaction offline
     
     */
    async postPaymentTransactionsIdVoidOffline(requestParameters: PostPaymentTransactionsIdVoidOfflineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionVoid> {
        const response = await this.postPaymentTransactionsIdVoidOfflineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Void a transaction online
     
     */
    async postPaymentTransactionsIdVoidOnlineRaw(requestParameters: PostPaymentTransactionsIdVoidOnlineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionVoid>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentTransactionsIdVoidOnline().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentTransactionsIdVoidOnline().'
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
        const path = `/payment/transactions/{id}/void-online`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/transactions/{id}/void-online`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionVoidFromJSON(jsonValue));
    }

    /**
     * Void a transaction online
     
     */
    async postPaymentTransactionsIdVoidOnline(requestParameters: PostPaymentTransactionsIdVoidOnlineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionVoid> {
        const response = await this.postPaymentTransactionsIdVoidOnlineRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
