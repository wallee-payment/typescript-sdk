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
  RefundComment,
  RefundCommentActive,
  RefundCommentCreate,
  RefundCommentListResponse,
  RefundCommentSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    RefundCommentFromJSON,
    RefundCommentToJSON,
    RefundCommentActiveFromJSON,
    RefundCommentActiveToJSON,
    RefundCommentCreateFromJSON,
    RefundCommentCreateToJSON,
    RefundCommentListResponseFromJSON,
    RefundCommentListResponseToJSON,
    RefundCommentSearchResponseFromJSON,
    RefundCommentSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentRefundsRefundIdCommentsIdRequest {
    refundId: number;
    id: number;
    space: number;
}

export interface GetPaymentRefundsRefundIdCommentsRequest {
    refundId: number;
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentRefundsRefundIdCommentsIdRequest {
    refundId: number;
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentRefundsRefundIdCommentsSearchRequest {
    refundId: number;
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentRefundsRefundIdCommentsIdRequest {
    refundId: number;
    id: number;
    space: number;
    refundCommentActive: RefundCommentActive;
    expand?: Set<string>;
}

export interface PostPaymentRefundsRefundIdCommentsRequest {
    refundId: number;
    space: number;
    refundCommentCreate: RefundCommentCreate;
    expand?: Set<string>;
}

export interface PostPaymentRefundsRefundIdCommentsIdPinRequest {
    refundId: number;
    id: number;
    space: number;
}

export interface PostPaymentRefundsRefundIdCommentsIdUnpinRequest {
    refundId: number;
    id: number;
    space: number;
}

/**
 * 
 */
export class RefundCommentsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a refund comment
     
     */
    async deletePaymentRefundsRefundIdCommentsIdRaw(requestParameters: DeletePaymentRefundsRefundIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['refundId'] == null) {
            throw new runtime.RequiredError(
                'refundId',
                'Required parameter "refundId" was null or undefined when calling deletePaymentRefundsRefundIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePaymentRefundsRefundIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentRefundsRefundIdCommentsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/refunds/{refundId}/comments/{id}`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{refundId}/comments/{id}`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a refund comment
     
     */
    async deletePaymentRefundsRefundIdCommentsId(requestParameters: DeletePaymentRefundsRefundIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentRefundsRefundIdCommentsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all refund comments
     
     */
    async getPaymentRefundsRefundIdCommentsRaw(requestParameters: GetPaymentRefundsRefundIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundCommentListResponse>> {
        if (requestParameters['refundId'] == null) {
            throw new runtime.RequiredError(
                'refundId',
                'Required parameter "refundId" was null or undefined when calling getPaymentRefundsRefundIdComments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentRefundsRefundIdComments().'
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
        const path = `/payment/refunds/{refundId}/comments`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{refundId}/comments`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundCommentListResponseFromJSON(jsonValue));
    }

    /**
     * List all refund comments
     
     */
    async getPaymentRefundsRefundIdComments(requestParameters: GetPaymentRefundsRefundIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundCommentListResponse> {
        const response = await this.getPaymentRefundsRefundIdCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a refund comment
     
     */
    async getPaymentRefundsRefundIdCommentsIdRaw(requestParameters: GetPaymentRefundsRefundIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundComment>> {
        if (requestParameters['refundId'] == null) {
            throw new runtime.RequiredError(
                'refundId',
                'Required parameter "refundId" was null or undefined when calling getPaymentRefundsRefundIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentRefundsRefundIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentRefundsRefundIdCommentsId().'
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
        const path = `/payment/refunds/{refundId}/comments/{id}`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{refundId}/comments/{id}`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundCommentFromJSON(jsonValue));
    }

    /**
     * Retrieve a refund comment
     
     */
    async getPaymentRefundsRefundIdCommentsId(requestParameters: GetPaymentRefundsRefundIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundComment> {
        const response = await this.getPaymentRefundsRefundIdCommentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search refund comments
     
     */
    async getPaymentRefundsRefundIdCommentsSearchRaw(requestParameters: GetPaymentRefundsRefundIdCommentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundCommentSearchResponse>> {
        if (requestParameters['refundId'] == null) {
            throw new runtime.RequiredError(
                'refundId',
                'Required parameter "refundId" was null or undefined when calling getPaymentRefundsRefundIdCommentsSearch().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentRefundsRefundIdCommentsSearch().'
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
        const path = `/payment/refunds/{refundId}/comments/search`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{refundId}/comments/search`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundCommentSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search refund comments
     
     */
    async getPaymentRefundsRefundIdCommentsSearch(requestParameters: GetPaymentRefundsRefundIdCommentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundCommentSearchResponse> {
        const response = await this.getPaymentRefundsRefundIdCommentsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a refund comment
     
     */
    async patchPaymentRefundsRefundIdCommentsIdRaw(requestParameters: PatchPaymentRefundsRefundIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundComment>> {
        if (requestParameters['refundId'] == null) {
            throw new runtime.RequiredError(
                'refundId',
                'Required parameter "refundId" was null or undefined when calling patchPaymentRefundsRefundIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentRefundsRefundIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentRefundsRefundIdCommentsId().'
            );
        }

        if (requestParameters['refundCommentActive'] == null) {
            throw new runtime.RequiredError(
                'refundCommentActive',
                'Required parameter "refundCommentActive" was null or undefined when calling patchPaymentRefundsRefundIdCommentsId().'
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
        const path = `/payment/refunds/{refundId}/comments/{id}`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{refundId}/comments/{id}`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: RefundCommentActiveToJSON(requestParameters['refundCommentActive']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundCommentFromJSON(jsonValue));
    }

    /**
     * Update a refund comment
     
     */
    async patchPaymentRefundsRefundIdCommentsId(requestParameters: PatchPaymentRefundsRefundIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundComment> {
        const response = await this.patchPaymentRefundsRefundIdCommentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a refund comment
     
     */
    async postPaymentRefundsRefundIdCommentsRaw(requestParameters: PostPaymentRefundsRefundIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefundComment>> {
        if (requestParameters['refundId'] == null) {
            throw new runtime.RequiredError(
                'refundId',
                'Required parameter "refundId" was null or undefined when calling postPaymentRefundsRefundIdComments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentRefundsRefundIdComments().'
            );
        }

        if (requestParameters['refundCommentCreate'] == null) {
            throw new runtime.RequiredError(
                'refundCommentCreate',
                'Required parameter "refundCommentCreate" was null or undefined when calling postPaymentRefundsRefundIdComments().'
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
        const path = `/payment/refunds/{refundId}/comments`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{refundId}/comments`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RefundCommentCreateToJSON(requestParameters['refundCommentCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefundCommentFromJSON(jsonValue));
    }

    /**
     * Create a refund comment
     
     */
    async postPaymentRefundsRefundIdComments(requestParameters: PostPaymentRefundsRefundIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefundComment> {
        const response = await this.postPaymentRefundsRefundIdCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pin a comment to the top
     
     */
    async postPaymentRefundsRefundIdCommentsIdPinRaw(requestParameters: PostPaymentRefundsRefundIdCommentsIdPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['refundId'] == null) {
            throw new runtime.RequiredError(
                'refundId',
                'Required parameter "refundId" was null or undefined when calling postPaymentRefundsRefundIdCommentsIdPin().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentRefundsRefundIdCommentsIdPin().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentRefundsRefundIdCommentsIdPin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/refunds/{refundId}/comments/{id}/pin`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{refundId}/comments/{id}/pin`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Pin a comment to the top
     
     */
    async postPaymentRefundsRefundIdCommentsIdPin(requestParameters: PostPaymentRefundsRefundIdCommentsIdPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentRefundsRefundIdCommentsIdPinRaw(requestParameters, initOverrides);
    }

    /**
     * Remove the pinned comment from the top
     
     */
    async postPaymentRefundsRefundIdCommentsIdUnpinRaw(requestParameters: PostPaymentRefundsRefundIdCommentsIdUnpinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['refundId'] == null) {
            throw new runtime.RequiredError(
                'refundId',
                'Required parameter "refundId" was null or undefined when calling postPaymentRefundsRefundIdCommentsIdUnpin().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentRefundsRefundIdCommentsIdUnpin().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentRefundsRefundIdCommentsIdUnpin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/refunds/{refundId}/comments/{id}/unpin`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/refunds/{refundId}/comments/{id}/unpin`.replace(`{${"refundId"}}`, encodeURIComponent(String(requestParameters['refundId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove the pinned comment from the top
     
     */
    async postPaymentRefundsRefundIdCommentsIdUnpin(requestParameters: PostPaymentRefundsRefundIdCommentsIdUnpinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postPaymentRefundsRefundIdCommentsIdUnpinRaw(requestParameters, initOverrides);
    }


}
