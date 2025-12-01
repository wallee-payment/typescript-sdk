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
  CustomerComment,
  CustomerCommentActive,
  CustomerCommentCreate,
  CustomerCommentListResponse,
  CustomerCommentSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    CustomerCommentFromJSON,
    CustomerCommentToJSON,
    CustomerCommentActiveFromJSON,
    CustomerCommentActiveToJSON,
    CustomerCommentCreateFromJSON,
    CustomerCommentCreateToJSON,
    CustomerCommentListResponseFromJSON,
    CustomerCommentListResponseToJSON,
    CustomerCommentSearchResponseFromJSON,
    CustomerCommentSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteCustomersCustomerIdCommentsIdRequest {
    customerId: number;
    id: number;
    space: number;
}

export interface GetCustomersCustomerIdCommentsRequest {
    customerId: number;
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetCustomersCustomerIdCommentsIdRequest {
    customerId: number;
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetCustomersCustomerIdCommentsSearchRequest {
    customerId: number;
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchCustomersCustomerIdCommentsIdRequest {
    customerId: number;
    id: number;
    space: number;
    customerCommentActive: CustomerCommentActive;
    expand?: Set<string>;
}

export interface PostCustomersCustomerIdCommentsRequest {
    customerId: number;
    space: number;
    customerCommentCreate: CustomerCommentCreate;
    expand?: Set<string>;
}

export interface PostCustomersCustomerIdCommentsIdPinRequest {
    customerId: number;
    id: number;
    space: number;
}

export interface PostCustomersCustomerIdCommentsIdUnpinRequest {
    customerId: number;
    id: number;
    space: number;
}

/**
 * 
 */
export class CustomerCommentsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a customer comment
     
     */
    async deleteCustomersCustomerIdCommentsIdRaw(requestParameters: DeleteCustomersCustomerIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling deleteCustomersCustomerIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteCustomersCustomerIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteCustomersCustomerIdCommentsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/customers/{customerId}/comments/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/comments/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a customer comment
     
     */
    async deleteCustomersCustomerIdCommentsId(requestParameters: DeleteCustomersCustomerIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomersCustomerIdCommentsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all customer comments
     
     */
    async getCustomersCustomerIdCommentsRaw(requestParameters: GetCustomersCustomerIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCommentListResponse>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling getCustomersCustomerIdComments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomersCustomerIdComments().'
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
        const path = `/customers/{customerId}/comments`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/comments`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerCommentListResponseFromJSON(jsonValue));
    }

    /**
     * List all customer comments
     
     */
    async getCustomersCustomerIdComments(requestParameters: GetCustomersCustomerIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCommentListResponse> {
        const response = await this.getCustomersCustomerIdCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a customer comment
     
     */
    async getCustomersCustomerIdCommentsIdRaw(requestParameters: GetCustomersCustomerIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerComment>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling getCustomersCustomerIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getCustomersCustomerIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomersCustomerIdCommentsId().'
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
        const path = `/customers/{customerId}/comments/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/comments/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerCommentFromJSON(jsonValue));
    }

    /**
     * Retrieve a customer comment
     
     */
    async getCustomersCustomerIdCommentsId(requestParameters: GetCustomersCustomerIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerComment> {
        const response = await this.getCustomersCustomerIdCommentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search customer comments
     
     */
    async getCustomersCustomerIdCommentsSearchRaw(requestParameters: GetCustomersCustomerIdCommentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCommentSearchResponse>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling getCustomersCustomerIdCommentsSearch().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomersCustomerIdCommentsSearch().'
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
        const path = `/customers/{customerId}/comments/search`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/comments/search`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerCommentSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search customer comments
     
     */
    async getCustomersCustomerIdCommentsSearch(requestParameters: GetCustomersCustomerIdCommentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCommentSearchResponse> {
        const response = await this.getCustomersCustomerIdCommentsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a customer comment
     
     */
    async patchCustomersCustomerIdCommentsIdRaw(requestParameters: PatchCustomersCustomerIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerComment>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling patchCustomersCustomerIdCommentsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchCustomersCustomerIdCommentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchCustomersCustomerIdCommentsId().'
            );
        }

        if (requestParameters['customerCommentActive'] == null) {
            throw new runtime.RequiredError(
                'customerCommentActive',
                'Required parameter "customerCommentActive" was null or undefined when calling patchCustomersCustomerIdCommentsId().'
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
        const path = `/customers/{customerId}/comments/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/comments/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerCommentActiveToJSON(requestParameters['customerCommentActive']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerCommentFromJSON(jsonValue));
    }

    /**
     * Update a customer comment
     
     */
    async patchCustomersCustomerIdCommentsId(requestParameters: PatchCustomersCustomerIdCommentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerComment> {
        const response = await this.patchCustomersCustomerIdCommentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a customer comment
     
     */
    async postCustomersCustomerIdCommentsRaw(requestParameters: PostCustomersCustomerIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerComment>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling postCustomersCustomerIdComments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postCustomersCustomerIdComments().'
            );
        }

        if (requestParameters['customerCommentCreate'] == null) {
            throw new runtime.RequiredError(
                'customerCommentCreate',
                'Required parameter "customerCommentCreate" was null or undefined when calling postCustomersCustomerIdComments().'
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
        const path = `/customers/{customerId}/comments`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/comments`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerCommentCreateToJSON(requestParameters['customerCommentCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerCommentFromJSON(jsonValue));
    }

    /**
     * Create a customer comment
     
     */
    async postCustomersCustomerIdComments(requestParameters: PostCustomersCustomerIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerComment> {
        const response = await this.postCustomersCustomerIdCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pin a comment to the top
     
     */
    async postCustomersCustomerIdCommentsIdPinRaw(requestParameters: PostCustomersCustomerIdCommentsIdPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling postCustomersCustomerIdCommentsIdPin().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postCustomersCustomerIdCommentsIdPin().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postCustomersCustomerIdCommentsIdPin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/customers/{customerId}/comments/{id}/pin`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/comments/{id}/pin`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Pin a comment to the top
     
     */
    async postCustomersCustomerIdCommentsIdPin(requestParameters: PostCustomersCustomerIdCommentsIdPinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCustomersCustomerIdCommentsIdPinRaw(requestParameters, initOverrides);
    }

    /**
     * Remove a pinned comment from the top
     
     */
    async postCustomersCustomerIdCommentsIdUnpinRaw(requestParameters: PostCustomersCustomerIdCommentsIdUnpinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling postCustomersCustomerIdCommentsIdUnpin().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postCustomersCustomerIdCommentsIdUnpin().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postCustomersCustomerIdCommentsIdUnpin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/customers/{customerId}/comments/{id}/unpin`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/comments/{id}/unpin`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove a pinned comment from the top
     
     */
    async postCustomersCustomerIdCommentsIdUnpin(requestParameters: PostCustomersCustomerIdCommentsIdUnpinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCustomersCustomerIdCommentsIdUnpinRaw(requestParameters, initOverrides);
    }


}
