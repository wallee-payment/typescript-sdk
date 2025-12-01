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
  Refund,
  RefundCreate,
  RefundListResponse,
  RefundSearchResponse,
  RenderedDocument,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    RefundFromJSON,
    RefundToJSON,
    RefundCreateFromJSON,
    RefundCreateToJSON,
    RefundListResponseFromJSON,
    RefundListResponseToJSON,
    RefundSearchResponseFromJSON,
    RefundSearchResponseToJSON,
    RenderedDocumentFromJSON,
    RenderedDocumentToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentRefundsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentRefundsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentRefundsIdDocumentRequest {
    id: number;
    space: number;
}

export interface GetPaymentRefundsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostPaymentRefundsRequest {
    space: number;
    refundCreate: RefundCreate;
    expand?: Set<string>;
}

export interface PostPaymentRefundsIdMarkFailedRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentRefundsIdMarkSucceededRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class RefundsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all refunds
     
     */
    async getPaymentRefundsRaw(requestParameters: GetPaymentRefundsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentRefunds().'
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
        const path = `/payment/refunds`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundListResponseFromJSON(jsonValue));
    }

    /**
     * List all refunds
     
     */
    async getPaymentRefunds(requestParameters: GetPaymentRefundsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundListResponse> {
        const response = await this.getPaymentRefundsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a refund
     
     */
    async getPaymentRefundsIdRaw(requestParameters: GetPaymentRefundsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Refund>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentRefundsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentRefundsId().'
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
        const path = `/payment/refunds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundFromJSON(jsonValue));
    }

    /**
     * Retrieve a refund
     
     */
    async getPaymentRefundsId(requestParameters: GetPaymentRefundsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Refund> {
        const response = await this.getPaymentRefundsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a refund document
     
     */
    async getPaymentRefundsIdDocumentRaw(requestParameters: GetPaymentRefundsIdDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RenderedDocument>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentRefundsIdDocument().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentRefundsIdDocument().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/refunds/{id}/document`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{id}/document`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RenderedDocumentFromJSON(jsonValue));
    }

    /**
     * Retrieve a refund document
     
     */
    async getPaymentRefundsIdDocument(requestParameters: GetPaymentRefundsIdDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RenderedDocument> {
        const response = await this.getPaymentRefundsIdDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search refunds
     
     */
    async getPaymentRefundsSearchRaw(requestParameters: GetPaymentRefundsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentRefundsSearch().'
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
        const path = `/payment/refunds/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search refunds
     
     */
    async getPaymentRefundsSearch(requestParameters: GetPaymentRefundsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundSearchResponse> {
        const response = await this.getPaymentRefundsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a refund
     
     */
    async postPaymentRefundsRaw(requestParameters: PostPaymentRefundsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Refund>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentRefunds().'
            );
        }

        if (requestParameters['refundCreate'] == null) {
            throw new runtime.RequiredError(
                'refundCreate',
                'Required parameter "refundCreate" was null or undefined when calling postPaymentRefunds().'
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
        const path = `/payment/refunds`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RefundCreateToJSON(requestParameters['refundCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundFromJSON(jsonValue));
    }

    /**
     * Create a refund
     
     */
    async postPaymentRefunds(requestParameters: PostPaymentRefundsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Refund> {
        const response = await this.postPaymentRefundsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a refund as failed
     
     */
    async postPaymentRefundsIdMarkFailedRaw(requestParameters: PostPaymentRefundsIdMarkFailedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Refund>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentRefundsIdMarkFailed().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentRefundsIdMarkFailed().'
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
        const path = `/payment/refunds/{id}/mark-failed`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{id}/mark-failed`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundFromJSON(jsonValue));
    }

    /**
     * Mark a refund as failed
     
     */
    async postPaymentRefundsIdMarkFailed(requestParameters: PostPaymentRefundsIdMarkFailedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Refund> {
        const response = await this.postPaymentRefundsIdMarkFailedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a refund as successful
     
     */
    async postPaymentRefundsIdMarkSucceededRaw(requestParameters: PostPaymentRefundsIdMarkSucceededRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Refund>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentRefundsIdMarkSucceeded().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentRefundsIdMarkSucceeded().'
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
        const path = `/payment/refunds/{id}/mark-succeeded`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{id}/mark-succeeded`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundFromJSON(jsonValue));
    }

    /**
     * Mark a refund as successful
     
     */
    async postPaymentRefundsIdMarkSucceeded(requestParameters: PostPaymentRefundsIdMarkSucceededRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Refund> {
        const response = await this.postPaymentRefundsIdMarkSucceededRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
