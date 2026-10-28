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
  InvoiceReconciliationRecordInvoiceLink,
  InvoiceReconciliationRecordInvoiceLinkListResponse,
  InvoiceReconciliationRecordInvoiceLinkSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    InvoiceReconciliationRecordInvoiceLinkFromJSON,
    InvoiceReconciliationRecordInvoiceLinkToJSON,
    InvoiceReconciliationRecordInvoiceLinkListResponseFromJSON,
    InvoiceReconciliationRecordInvoiceLinkListResponseToJSON,
    InvoiceReconciliationRecordInvoiceLinkSearchResponseFromJSON,
    InvoiceReconciliationRecordInvoiceLinkSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentInvoiceReconciliationRecordInvoiceLinksRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentInvoiceReconciliationRecordInvoiceLinksIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentInvoiceReconciliationRecordInvoiceLinksSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostPaymentInvoiceReconciliationRecordInvoiceLinksRequest {
    recordId: number;
    completionId: number;
    space: number;
    amount?: number;
    expand?: Set<string>;
}

export interface PostPaymentInvoiceReconciliationRecordInvoiceLinksUnlinkRequest {
    recordId: number;
    completionId: number;
    space: number;
}

/**
 * 
 */
export class InvoiceReconciliationRecordInvoiceLinksService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all invoice reconciliation record invoice links
     
     */
    async getPaymentInvoiceReconciliationRecordInvoiceLinksRaw(requestParameters: GetPaymentInvoiceReconciliationRecordInvoiceLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReconciliationRecordInvoiceLinkListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentInvoiceReconciliationRecordInvoiceLinks().'
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
        const path = `/payment/invoice-reconciliation-record-invoice-links`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-record-invoice-links`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReconciliationRecordInvoiceLinkListResponseFromJSON(jsonValue));
    }

    /**
     * List all invoice reconciliation record invoice links
     
     */
    async getPaymentInvoiceReconciliationRecordInvoiceLinks(requestParameters: GetPaymentInvoiceReconciliationRecordInvoiceLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReconciliationRecordInvoiceLinkListResponse> {
        const response = await this.getPaymentInvoiceReconciliationRecordInvoiceLinksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an invoice reconciliation record invoice link
     
     */
    async getPaymentInvoiceReconciliationRecordInvoiceLinksIdRaw(requestParameters: GetPaymentInvoiceReconciliationRecordInvoiceLinksIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReconciliationRecordInvoiceLink>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentInvoiceReconciliationRecordInvoiceLinksId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentInvoiceReconciliationRecordInvoiceLinksId().'
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
        const path = `/payment/invoice-reconciliation-record-invoice-links/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-record-invoice-links/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReconciliationRecordInvoiceLinkFromJSON(jsonValue));
    }

    /**
     * Retrieve an invoice reconciliation record invoice link
     
     */
    async getPaymentInvoiceReconciliationRecordInvoiceLinksId(requestParameters: GetPaymentInvoiceReconciliationRecordInvoiceLinksIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReconciliationRecordInvoiceLink> {
        const response = await this.getPaymentInvoiceReconciliationRecordInvoiceLinksIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search invoice reconciliation record invoice links
     
     */
    async getPaymentInvoiceReconciliationRecordInvoiceLinksSearchRaw(requestParameters: GetPaymentInvoiceReconciliationRecordInvoiceLinksSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReconciliationRecordInvoiceLinkSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentInvoiceReconciliationRecordInvoiceLinksSearch().'
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
        const path = `/payment/invoice-reconciliation-record-invoice-links/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-record-invoice-links/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReconciliationRecordInvoiceLinkSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search invoice reconciliation record invoice links
     
     */
    async getPaymentInvoiceReconciliationRecordInvoiceLinksSearch(requestParameters: GetPaymentInvoiceReconciliationRecordInvoiceLinksSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReconciliationRecordInvoiceLinkSearchResponse> {
        const response = await this.getPaymentInvoiceReconciliationRecordInvoiceLinksSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Links the invoice reconciliation record with the provided invoice completion.
     * Link an invoice
     
     */
    async postPaymentInvoiceReconciliationRecordInvoiceLinksRaw(requestParameters: PostPaymentInvoiceReconciliationRecordInvoiceLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReconciliationRecordInvoiceLink>> {
        if (requestParameters['recordId'] == null) {
            throw new runtime.RequiredError(
                'recordId',
                'Required parameter "recordId" was null or undefined when calling postPaymentInvoiceReconciliationRecordInvoiceLinks().'
            );
        }

        if (requestParameters['completionId'] == null) {
            throw new runtime.RequiredError(
                'completionId',
                'Required parameter "completionId" was null or undefined when calling postPaymentInvoiceReconciliationRecordInvoiceLinks().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentInvoiceReconciliationRecordInvoiceLinks().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['recordId'] != null) {
            queryParameters['recordId'] = requestParameters['recordId'];
        }

        if (requestParameters['completionId'] != null) {
            queryParameters['completionId'] = requestParameters['completionId'];
        }

        if (requestParameters['amount'] != null) {
            queryParameters['amount'] = requestParameters['amount'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/invoice-reconciliation-record-invoice-links`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-record-invoice-links`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReconciliationRecordInvoiceLinkFromJSON(jsonValue));
    }

    /**
     * Links the invoice reconciliation record with the provided invoice completion.
     * Link an invoice
     
     */
    async postPaymentInvoiceReconciliationRecordInvoiceLinks(requestParameters: PostPaymentInvoiceReconciliationRecordInvoiceLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReconciliationRecordInvoiceLink> {
        const response = await this.postPaymentInvoiceReconciliationRecordInvoiceLinksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unlinks the invoice reconciliation record from the provided invoice completion.
     * Unlink an invoice
     
     */
    async postPaymentInvoiceReconciliationRecordInvoiceLinksUnlinkRaw(requestParameters: PostPaymentInvoiceReconciliationRecordInvoiceLinksUnlinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['recordId'] == null) {
            throw new runtime.RequiredError(
                'recordId',
                'Required parameter "recordId" was null or undefined when calling postPaymentInvoiceReconciliationRecordInvoiceLinksUnlink().'
            );
        }

        if (requestParameters['completionId'] == null) {
            throw new runtime.RequiredError(
                'completionId',
                'Required parameter "completionId" was null or undefined when calling postPaymentInvoiceReconciliationRecordInvoiceLinksUnlink().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentInvoiceReconciliationRecordInvoiceLinksUnlink().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['recordId'] != null) {
            queryParameters['recordId'] = requestParameters['recordId'];
        }

        if (requestParameters['completionId'] != null) {
            queryParameters['completionId'] = requestParameters['completionId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/invoice-reconciliation-record-invoice-links/unlink`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-record-invoice-links/unlink`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unlinks the invoice reconciliation record from the provided invoice completion.
     * Unlink an invoice
     
     */
    async postPaymentInvoiceReconciliationRecordInvoiceLinksUnlink(requestParameters: PostPaymentInvoiceReconciliationRecordInvoiceLinksUnlinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentInvoiceReconciliationRecordInvoiceLinksUnlinkRaw(requestParameters, initOverrides);
    }


}
