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
  DunningCase,
  DunningCaseListResponse,
  DunningCaseSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    DunningCaseFromJSON,
    DunningCaseToJSON,
    DunningCaseListResponseFromJSON,
    DunningCaseListResponseToJSON,
    DunningCaseSearchResponseFromJSON,
    DunningCaseSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentDunningCasesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentDunningCasesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentDunningCasesSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostPaymentDunningCasesIdSuspendRequest {
    id: number;
    space: number;
    plannedEndDate?: Date;
}

export interface PostPaymentDunningCasesInvoiceInvoiceIdRequest {
    invoiceId: number;
    space: number;
}

/**
 * 
 */
export class DunningCasesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all dunning cases
     
     */
    async getPaymentDunningCasesRaw(requestParameters: GetPaymentDunningCasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DunningCaseListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentDunningCases().'
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
        const path = `/payment/dunning-cases`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/dunning-cases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DunningCaseListResponseFromJSON(jsonValue));
    }

    /**
     * List all dunning cases
     
     */
    async getPaymentDunningCases(requestParameters: GetPaymentDunningCasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DunningCaseListResponse> {
        const response = await this.getPaymentDunningCasesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a dunning case
     
     */
    async getPaymentDunningCasesIdRaw(requestParameters: GetPaymentDunningCasesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DunningCase>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentDunningCasesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentDunningCasesId().'
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
        const path = `/payment/dunning-cases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/dunning-cases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DunningCaseFromJSON(jsonValue));
    }

    /**
     * Retrieve a dunning case
     
     */
    async getPaymentDunningCasesId(requestParameters: GetPaymentDunningCasesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DunningCase> {
        const response = await this.getPaymentDunningCasesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search dunning cases
     
     */
    async getPaymentDunningCasesSearchRaw(requestParameters: GetPaymentDunningCasesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DunningCaseSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentDunningCasesSearch().'
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
        const path = `/payment/dunning-cases/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/dunning-cases/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DunningCaseSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search dunning cases
     
     */
    async getPaymentDunningCasesSearch(requestParameters: GetPaymentDunningCasesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DunningCaseSearchResponse> {
        const response = await this.getPaymentDunningCasesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Suspend a dunning case
     
     */
    async postPaymentDunningCasesIdSuspendRaw(requestParameters: PostPaymentDunningCasesIdSuspendRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentDunningCasesIdSuspend().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentDunningCasesIdSuspend().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['plannedEndDate'] != null) {
            queryParameters['plannedEndDate'] = (requestParameters['plannedEndDate'] as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/dunning-cases/{id}/suspend`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/dunning-cases/{id}/suspend`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Suspend a dunning case
     
     */
    async postPaymentDunningCasesIdSuspend(requestParameters: PostPaymentDunningCasesIdSuspendRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentDunningCasesIdSuspendRaw(requestParameters, initOverrides);
    }

    /**
     * Create a dunning case for an invoice
     
     */
    async postPaymentDunningCasesInvoiceInvoiceIdRaw(requestParameters: PostPaymentDunningCasesInvoiceInvoiceIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['invoiceId'] == null) {
            throw new runtime.RequiredError(
                'invoiceId',
                'Required parameter "invoiceId" was null or undefined when calling postPaymentDunningCasesInvoiceInvoiceId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentDunningCasesInvoiceInvoiceId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/dunning-cases/invoice/{invoiceId}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/dunning-cases/invoice/{invoiceId}`.replace(`{${"invoiceId"}}`, encodeURIComponent(String(requestParameters['invoiceId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a dunning case for an invoice
     
     */
    async postPaymentDunningCasesInvoiceInvoiceId(requestParameters: PostPaymentDunningCasesInvoiceInvoiceIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentDunningCasesInvoiceInvoiceIdRaw(requestParameters, initOverrides);
    }


}
