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
  RestApiErrorResponse,
  SingleSignOnUser,
  SingleSignOnUserCreate,
  SingleSignOnUserListResponse,
  SingleSignOnUserSearchResponse,
  SingleSignOnUserUpdate,
  SortingOrder,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SingleSignOnUserFromJSON,
    SingleSignOnUserToJSON,
    SingleSignOnUserCreateFromJSON,
    SingleSignOnUserCreateToJSON,
    SingleSignOnUserListResponseFromJSON,
    SingleSignOnUserListResponseToJSON,
    SingleSignOnUserSearchResponseFromJSON,
    SingleSignOnUserSearchResponseToJSON,
    SingleSignOnUserUpdateFromJSON,
    SingleSignOnUserUpdateToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSingleSignOnUsersIdRequest {
    id: number;
}

export interface GetSingleSignOnUsersRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSingleSignOnUsersIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetSingleSignOnUsersSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSingleSignOnUsersIdRequest {
    id: number;
    singleSignOnUserUpdate: SingleSignOnUserUpdate;
    expand?: Set<string>;
}

export interface PostSingleSignOnUsersRequest {
    singleSignOnUserCreate: SingleSignOnUserCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SingleSignOnUsersService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a single sign-on user. It cannot be undone.
     * Delete a single sign-on user
     
     */
    async deleteSingleSignOnUsersIdRaw(requestParameters: DeleteSingleSignOnUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSingleSignOnUsersId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'DELETE';
        const path = `/single-sign-on-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/single-sign-on-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a single sign-on user. It cannot be undone.
     * Delete a single sign-on user
     
     */
    async deleteSingleSignOnUsersId(requestParameters: DeleteSingleSignOnUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSingleSignOnUsersIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all single sign-on users
     
     */
    async getSingleSignOnUsersRaw(requestParameters: GetSingleSignOnUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SingleSignOnUserListResponse>> {
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

        const method = 'GET';
        const path = `/single-sign-on-users`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/single-sign-on-users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SingleSignOnUserListResponseFromJSON(jsonValue));
    }

    /**
     * List all single sign-on users
     
     */
    async getSingleSignOnUsers(requestParameters: GetSingleSignOnUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SingleSignOnUserListResponse> {
        const response = await this.getSingleSignOnUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a single sign-on user
     
     */
    async getSingleSignOnUsersIdRaw(requestParameters: GetSingleSignOnUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SingleSignOnUser>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSingleSignOnUsersId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/single-sign-on-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/single-sign-on-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SingleSignOnUserFromJSON(jsonValue));
    }

    /**
     * Retrieve a single sign-on user
     
     */
    async getSingleSignOnUsersId(requestParameters: GetSingleSignOnUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SingleSignOnUser> {
        const response = await this.getSingleSignOnUsersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search single sign-on users
     
     */
    async getSingleSignOnUsersSearchRaw(requestParameters: GetSingleSignOnUsersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SingleSignOnUserSearchResponse>> {
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

        const method = 'GET';
        const path = `/single-sign-on-users/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/single-sign-on-users/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SingleSignOnUserSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search single sign-on users
     
     */
    async getSingleSignOnUsersSearch(requestParameters: GetSingleSignOnUsersSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SingleSignOnUserSearchResponse> {
        const response = await this.getSingleSignOnUsersSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a single sign-on user
     
     */
    async patchSingleSignOnUsersIdRaw(requestParameters: PatchSingleSignOnUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SingleSignOnUser>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSingleSignOnUsersId().'
            );
        }

        if (requestParameters['singleSignOnUserUpdate'] == null) {
            throw new runtime.RequiredError(
                'singleSignOnUserUpdate',
                'Required parameter "singleSignOnUserUpdate" was null or undefined when calling patchSingleSignOnUsersId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const method = 'PATCH';
        const path = `/single-sign-on-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/single-sign-on-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SingleSignOnUserUpdateToJSON(requestParameters['singleSignOnUserUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SingleSignOnUserFromJSON(jsonValue));
    }

    /**
     * Update a single sign-on user
     
     */
    async patchSingleSignOnUsersId(requestParameters: PatchSingleSignOnUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SingleSignOnUser> {
        const response = await this.patchSingleSignOnUsersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a single sign-on user
     
     */
    async postSingleSignOnUsersRaw(requestParameters: PostSingleSignOnUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SingleSignOnUser>> {
        if (requestParameters['singleSignOnUserCreate'] == null) {
            throw new runtime.RequiredError(
                'singleSignOnUserCreate',
                'Required parameter "singleSignOnUserCreate" was null or undefined when calling postSingleSignOnUsers().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const method = 'POST';
        const path = `/single-sign-on-users`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/single-sign-on-users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SingleSignOnUserCreateToJSON(requestParameters['singleSignOnUserCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SingleSignOnUserFromJSON(jsonValue));
    }

    /**
     * Create a single sign-on user
     
     */
    async postSingleSignOnUsers(requestParameters: PostSingleSignOnUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SingleSignOnUser> {
        const response = await this.postSingleSignOnUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
