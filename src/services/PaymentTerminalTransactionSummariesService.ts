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
  PaymentTerminalTransactionSummary,
  RenderedTerminalTransactionSummary,
  RestApiErrorResponse,
  SortingOrder,
  TerminalReceiptFormat,
  TerminalTransactionSummaryListResponse,
  TerminalTransactionSummarySearchResponse,
} from '../models/index';
import {
    PaymentTerminalTransactionSummaryFromJSON,
    PaymentTerminalTransactionSummaryToJSON,
    RenderedTerminalTransactionSummaryFromJSON,
    RenderedTerminalTransactionSummaryToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    TerminalReceiptFormatFromJSON,
    TerminalReceiptFormatToJSON,
    TerminalTransactionSummaryListResponseFromJSON,
    TerminalTransactionSummaryListResponseToJSON,
    TerminalTransactionSummarySearchResponseFromJSON,
    TerminalTransactionSummarySearchResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentTerminalsTransactionSummariesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentTerminalsTransactionSummariesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentTerminalsTransactionSummariesIdReceiptRequest {
    id: number;
    format: TerminalReceiptFormat;
    width: number;
    space: number;
}

export interface GetPaymentTerminalsTransactionSummariesSearchRequest {
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
export class PaymentTerminalTransactionSummariesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all summaries
     
     */
    async getPaymentTerminalsTransactionSummariesRaw(requestParameters: GetPaymentTerminalsTransactionSummariesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TerminalTransactionSummaryListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTerminalsTransactionSummaries().'
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
        const path = `/payment/terminals/transaction-summaries`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/transaction-summaries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TerminalTransactionSummaryListResponseFromJSON(jsonValue));
    }

    /**
     * List all summaries
     
     */
    async getPaymentTerminalsTransactionSummaries(requestParameters: GetPaymentTerminalsTransactionSummariesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TerminalTransactionSummaryListResponse> {
        const response = await this.getPaymentTerminalsTransactionSummariesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a summary
     
     */
    async getPaymentTerminalsTransactionSummariesIdRaw(requestParameters: GetPaymentTerminalsTransactionSummariesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminalTransactionSummary>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTerminalsTransactionSummariesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTerminalsTransactionSummariesId().'
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
        const path = `/payment/terminals/transaction-summaries/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/transaction-summaries/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalTransactionSummaryFromJSON(jsonValue));
    }

    /**
     * Retrieve a summary
     
     */
    async getPaymentTerminalsTransactionSummariesId(requestParameters: GetPaymentTerminalsTransactionSummariesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminalTransactionSummary> {
        const response = await this.getPaymentTerminalsTransactionSummariesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a rendered summary receipt
     
     */
    async getPaymentTerminalsTransactionSummariesIdReceiptRaw(requestParameters: GetPaymentTerminalsTransactionSummariesIdReceiptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RenderedTerminalTransactionSummary>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentTerminalsTransactionSummariesIdReceipt().'
            );
        }

        if (requestParameters['format'] == null) {
            throw new runtime.RequiredError(
                'format',
                'Required parameter "format" was null or undefined when calling getPaymentTerminalsTransactionSummariesIdReceipt().'
            );
        }

        if (requestParameters['width'] == null) {
            throw new runtime.RequiredError(
                'width',
                'Required parameter "width" was null or undefined when calling getPaymentTerminalsTransactionSummariesIdReceipt().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTerminalsTransactionSummariesIdReceipt().'
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
        const path = `/payment/terminals/transaction-summaries/{id}/receipt`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/transaction-summaries/{id}/receipt`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RenderedTerminalTransactionSummaryFromJSON(jsonValue));
    }

    /**
     * Retrieve a rendered summary receipt
     
     */
    async getPaymentTerminalsTransactionSummariesIdReceipt(requestParameters: GetPaymentTerminalsTransactionSummariesIdReceiptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RenderedTerminalTransactionSummary> {
        const response = await this.getPaymentTerminalsTransactionSummariesIdReceiptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search summaries
     
     */
    async getPaymentTerminalsTransactionSummariesSearchRaw(requestParameters: GetPaymentTerminalsTransactionSummariesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TerminalTransactionSummarySearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentTerminalsTransactionSummariesSearch().'
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
        const path = `/payment/terminals/transaction-summaries/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/terminals/transaction-summaries/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TerminalTransactionSummarySearchResponseFromJSON(jsonValue));
    }

    /**
     * Search summaries
     
     */
    async getPaymentTerminalsTransactionSummariesSearch(requestParameters: GetPaymentTerminalsTransactionSummariesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TerminalTransactionSummarySearchResponse> {
        const response = await this.getPaymentTerminalsTransactionSummariesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
