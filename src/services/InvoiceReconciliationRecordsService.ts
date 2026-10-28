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
  InvoiceReconciliationRecord,
  InvoiceReconciliationRecordListResponse,
  InvoiceReconciliationRecordSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    InvoiceReconciliationRecordFromJSON,
    InvoiceReconciliationRecordToJSON,
    InvoiceReconciliationRecordListResponseFromJSON,
    InvoiceReconciliationRecordListResponseToJSON,
    InvoiceReconciliationRecordSearchResponseFromJSON,
    InvoiceReconciliationRecordSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentInvoiceReconciliationRecordsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentInvoiceReconciliationRecordsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentInvoiceReconciliationRecordsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostPaymentInvoiceReconciliationRecordsIdDiscardRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentInvoiceReconciliationRecordsIdResolveRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class InvoiceReconciliationRecordsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all invoice reconciliation records
     
     */
    async getPaymentInvoiceReconciliationRecordsRaw(requestParameters: GetPaymentInvoiceReconciliationRecordsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReconciliationRecordListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentInvoiceReconciliationRecords().'
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
        const path = `/payment/invoice-reconciliation-records`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-records`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReconciliationRecordListResponseFromJSON(jsonValue));
    }

    /**
     * List all invoice reconciliation records
     
     */
    async getPaymentInvoiceReconciliationRecords(requestParameters: GetPaymentInvoiceReconciliationRecordsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReconciliationRecordListResponse> {
        const response = await this.getPaymentInvoiceReconciliationRecordsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an invoice reconciliation record
     
     */
    async getPaymentInvoiceReconciliationRecordsIdRaw(requestParameters: GetPaymentInvoiceReconciliationRecordsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReconciliationRecord>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentInvoiceReconciliationRecordsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentInvoiceReconciliationRecordsId().'
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
        const path = `/payment/invoice-reconciliation-records/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-records/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReconciliationRecordFromJSON(jsonValue));
    }

    /**
     * Retrieve an invoice reconciliation record
     
     */
    async getPaymentInvoiceReconciliationRecordsId(requestParameters: GetPaymentInvoiceReconciliationRecordsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReconciliationRecord> {
        const response = await this.getPaymentInvoiceReconciliationRecordsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search invoice reconciliation records
     
     */
    async getPaymentInvoiceReconciliationRecordsSearchRaw(requestParameters: GetPaymentInvoiceReconciliationRecordsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReconciliationRecordSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentInvoiceReconciliationRecordsSearch().'
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
        const path = `/payment/invoice-reconciliation-records/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-records/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReconciliationRecordSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search invoice reconciliation records
     
     */
    async getPaymentInvoiceReconciliationRecordsSearch(requestParameters: GetPaymentInvoiceReconciliationRecordsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReconciliationRecordSearchResponse> {
        const response = await this.getPaymentInvoiceReconciliationRecordsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Discard an invoice reconciliation record
     
     */
    async postPaymentInvoiceReconciliationRecordsIdDiscardRaw(requestParameters: PostPaymentInvoiceReconciliationRecordsIdDiscardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReconciliationRecord>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentInvoiceReconciliationRecordsIdDiscard().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentInvoiceReconciliationRecordsIdDiscard().'
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
        const path = `/payment/invoice-reconciliation-records/{id}/discard`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-records/{id}/discard`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReconciliationRecordFromJSON(jsonValue));
    }

    /**
     * Discard an invoice reconciliation record
     
     */
    async postPaymentInvoiceReconciliationRecordsIdDiscard(requestParameters: PostPaymentInvoiceReconciliationRecordsIdDiscardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReconciliationRecord> {
        const response = await this.postPaymentInvoiceReconciliationRecordsIdDiscardRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Resolve an invoice reconciliation record
     
     */
    async postPaymentInvoiceReconciliationRecordsIdResolveRaw(requestParameters: PostPaymentInvoiceReconciliationRecordsIdResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReconciliationRecord>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentInvoiceReconciliationRecordsIdResolve().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentInvoiceReconciliationRecordsIdResolve().'
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
        const path = `/payment/invoice-reconciliation-records/{id}/resolve`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reconciliation-records/{id}/resolve`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReconciliationRecordFromJSON(jsonValue));
    }

    /**
     * Resolve an invoice reconciliation record
     
     */
    async postPaymentInvoiceReconciliationRecordsIdResolve(requestParameters: PostPaymentInvoiceReconciliationRecordsIdResolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReconciliationRecord> {
        const response = await this.postPaymentInvoiceReconciliationRecordsIdResolveRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
