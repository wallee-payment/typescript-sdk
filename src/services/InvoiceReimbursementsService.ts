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
  InvoiceReimbursement,
  InvoiceReimbursementListResponse,
  InvoiceReimbursementSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    InvoiceReimbursementFromJSON,
    InvoiceReimbursementToJSON,
    InvoiceReimbursementListResponseFromJSON,
    InvoiceReimbursementListResponseToJSON,
    InvoiceReimbursementSearchResponseFromJSON,
    InvoiceReimbursementSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentInvoiceReimbursementsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentInvoiceReimbursementsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentInvoiceReimbursementsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostPaymentInvoiceReimbursementsIdConnectorRequest {
    id: number;
    paymentConnectorConfigurationId: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentInvoiceReimbursementsIdIbanRequest {
    id: number;
    space: number;
    recipientIban?: string;
    senderIban?: string;
    expand?: Set<string>;
}

/**
 * 
 */
export class InvoiceReimbursementsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all invoice reimbursements
     
     */
    async getPaymentInvoiceReimbursementsRaw(requestParameters: GetPaymentInvoiceReimbursementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReimbursementListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentInvoiceReimbursements().'
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
        const path = `/payment/invoice-reimbursements`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reimbursements`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReimbursementListResponseFromJSON(jsonValue));
    }

    /**
     * List all invoice reimbursements
     
     */
    async getPaymentInvoiceReimbursements(requestParameters: GetPaymentInvoiceReimbursementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReimbursementListResponse> {
        const response = await this.getPaymentInvoiceReimbursementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an invoice reimbursement
     
     */
    async getPaymentInvoiceReimbursementsIdRaw(requestParameters: GetPaymentInvoiceReimbursementsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReimbursement>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentInvoiceReimbursementsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentInvoiceReimbursementsId().'
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
        const path = `/payment/invoice-reimbursements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reimbursements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReimbursementFromJSON(jsonValue));
    }

    /**
     * Retrieve an invoice reimbursement
     
     */
    async getPaymentInvoiceReimbursementsId(requestParameters: GetPaymentInvoiceReimbursementsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReimbursement> {
        const response = await this.getPaymentInvoiceReimbursementsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search invoice reimbursements
     
     */
    async getPaymentInvoiceReimbursementsSearchRaw(requestParameters: GetPaymentInvoiceReimbursementsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReimbursementSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentInvoiceReimbursementsSearch().'
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
        const path = `/payment/invoice-reimbursements/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reimbursements/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReimbursementSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search invoice reimbursements
     
     */
    async getPaymentInvoiceReimbursementsSearch(requestParameters: GetPaymentInvoiceReimbursementsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReimbursementSearchResponse> {
        const response = await this.getPaymentInvoiceReimbursementsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates payment connector configuration for a reimbursement which is in manual review.
     * Update payment connector configuration
     
     */
    async postPaymentInvoiceReimbursementsIdConnectorRaw(requestParameters: PostPaymentInvoiceReimbursementsIdConnectorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReimbursement>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentInvoiceReimbursementsIdConnector().'
            );
        }

        if (requestParameters['paymentConnectorConfigurationId'] == null) {
            throw new runtime.RequiredError(
                'paymentConnectorConfigurationId',
                'Required parameter "paymentConnectorConfigurationId" was null or undefined when calling postPaymentInvoiceReimbursementsIdConnector().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentInvoiceReimbursementsIdConnector().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['paymentConnectorConfigurationId'] != null) {
            queryParameters['paymentConnectorConfigurationId'] = requestParameters['paymentConnectorConfigurationId'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/invoice-reimbursements/{id}/connector`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reimbursements/{id}/connector`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReimbursementFromJSON(jsonValue));
    }

    /**
     * Updates payment connector configuration for a reimbursement which is in manual review.
     * Update payment connector configuration
     
     */
    async postPaymentInvoiceReimbursementsIdConnector(requestParameters: PostPaymentInvoiceReimbursementsIdConnectorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReimbursement> {
        const response = await this.postPaymentInvoiceReimbursementsIdConnectorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates recipient and/or sender IBAN for a reimbursement which is in manual review.
     * Update IBAN
     
     */
    async postPaymentInvoiceReimbursementsIdIbanRaw(requestParameters: PostPaymentInvoiceReimbursementsIdIbanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceReimbursement>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentInvoiceReimbursementsIdIban().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentInvoiceReimbursementsIdIban().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['recipientIban'] != null) {
            queryParameters['recipientIban'] = requestParameters['recipientIban'];
        }

        if (requestParameters['senderIban'] != null) {
            queryParameters['senderIban'] = requestParameters['senderIban'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/invoice-reimbursements/{id}/iban`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/invoice-reimbursements/{id}/iban`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceReimbursementFromJSON(jsonValue));
    }

    /**
     * Updates recipient and/or sender IBAN for a reimbursement which is in manual review.
     * Update IBAN
     
     */
    async postPaymentInvoiceReimbursementsIdIban(requestParameters: PostPaymentInvoiceReimbursementsIdIbanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceReimbursement> {
        const response = await this.postPaymentInvoiceReimbursementsIdIbanRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
