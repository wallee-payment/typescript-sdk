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
  ApplicationUser,
  ApplicationUserCreate,
  ApplicationUserCreateWithMacKey,
  ApplicationUserListResponse,
  ApplicationUserSearchResponse,
  ApplicationUserUpdate,
  RestApiErrorResponse,
  RestApplicationUserMacKey,
  RestApplicationUserMacKeyCreated,
  SortingOrder,
} from '../models/index';
import {
    ApplicationUserFromJSON,
    ApplicationUserToJSON,
    ApplicationUserCreateFromJSON,
    ApplicationUserCreateToJSON,
    ApplicationUserCreateWithMacKeyFromJSON,
    ApplicationUserCreateWithMacKeyToJSON,
    ApplicationUserListResponseFromJSON,
    ApplicationUserListResponseToJSON,
    ApplicationUserSearchResponseFromJSON,
    ApplicationUserSearchResponseToJSON,
    ApplicationUserUpdateFromJSON,
    ApplicationUserUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    RestApplicationUserMacKeyFromJSON,
    RestApplicationUserMacKeyToJSON,
    RestApplicationUserMacKeyCreatedFromJSON,
    RestApplicationUserMacKeyCreatedToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteApplicationUsersIdRequest {
    id: number;
}

export interface DeleteApplicationUsersUserIdKeysIdRequest {
    userId: number;
    id: number;
}

export interface GetApplicationUsersRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetApplicationUsersIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetApplicationUsersSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface GetApplicationUsersUserIdKeysRequest {
    userId: number;
}

export interface PatchApplicationUsersIdRequest {
    id: number;
    applicationUserUpdate: ApplicationUserUpdate;
    expand?: Set<string>;
}

export interface PostApplicationUsersRequest {
    applicationUserCreate: ApplicationUserCreate;
    expand?: Set<string>;
}

export interface PostApplicationUsersUserIdKeysRequest {
    userId: number;
}

/**
 * 
 */
export class ApplicationUsersService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a application user. It cannot be undone.
     * Delete an application user
     
     */
    async deleteApplicationUsersIdRaw(requestParameters: DeleteApplicationUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteApplicationUsersId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'DELETE';
        const path = `/application-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a application user. It cannot be undone.
     * Delete an application user
     
     */
    async deleteApplicationUsersId(requestParameters: DeleteApplicationUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApplicationUsersIdRaw(requestParameters, initOverrides);
    }

    /**
     * Deactivate an authentication key
     
     */
    async deleteApplicationUsersUserIdKeysIdRaw(requestParameters: DeleteApplicationUsersUserIdKeysIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteApplicationUsersUserIdKeysId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteApplicationUsersUserIdKeysId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'DELETE';
        const path = `/application-users/{userId}/keys/{id}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deactivate an authentication key
     
     */
    async deleteApplicationUsersUserIdKeysId(requestParameters: DeleteApplicationUsersUserIdKeysIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApplicationUsersUserIdKeysIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all application users
     
     */
    async getApplicationUsersRaw(requestParameters: GetApplicationUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationUserListResponse>> {
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
        const path = `/application-users`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationUserListResponseFromJSON(jsonValue));
    }

    /**
     * List all application users
     
     */
    async getApplicationUsers(requestParameters: GetApplicationUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationUserListResponse> {
        const response = await this.getApplicationUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an application user
     
     */
    async getApplicationUsersIdRaw(requestParameters: GetApplicationUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationUser>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getApplicationUsersId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/application-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationUserFromJSON(jsonValue));
    }

    /**
     * Retrieve an application user
     
     */
    async getApplicationUsersId(requestParameters: GetApplicationUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationUser> {
        const response = await this.getApplicationUsersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search application users
     
     */
    async getApplicationUsersSearchRaw(requestParameters: GetApplicationUsersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationUserSearchResponse>> {
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
        const path = `/application-users/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationUserSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search application users
     
     */
    async getApplicationUsersSearch(requestParameters: GetApplicationUsersSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationUserSearchResponse> {
        const response = await this.getApplicationUsersSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List a user\'s authentication keys
     
     */
    async getApplicationUsersUserIdKeysRaw(requestParameters: GetApplicationUsersUserIdKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApplicationUserMacKey>>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getApplicationUsersUserIdKeys().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/application-users/{userId}/keys`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApplicationUserMacKeyFromJSON));
    }

    /**
     * List a user\'s authentication keys
     
     */
    async getApplicationUsersUserIdKeys(requestParameters: GetApplicationUsersUserIdKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApplicationUserMacKey>> {
        const response = await this.getApplicationUsersUserIdKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an application user
     
     */
    async patchApplicationUsersIdRaw(requestParameters: PatchApplicationUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationUser>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchApplicationUsersId().'
            );
        }

        if (requestParameters['applicationUserUpdate'] == null) {
            throw new runtime.RequiredError(
                'applicationUserUpdate',
                'Required parameter "applicationUserUpdate" was null or undefined when calling patchApplicationUsersId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        const method = 'PATCH';
        const path = `/application-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: ApplicationUserUpdateToJSON(requestParameters['applicationUserUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationUserFromJSON(jsonValue));
    }

    /**
     * Update an application user
     
     */
    async patchApplicationUsersId(requestParameters: PatchApplicationUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationUser> {
        const response = await this.patchApplicationUsersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an application user
     
     */
    async postApplicationUsersRaw(requestParameters: PostApplicationUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationUserCreateWithMacKey>> {
        if (requestParameters['applicationUserCreate'] == null) {
            throw new runtime.RequiredError(
                'applicationUserCreate',
                'Required parameter "applicationUserCreate" was null or undefined when calling postApplicationUsers().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        const method = 'POST';
        const path = `/application-users`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
            body: ApplicationUserCreateToJSON(requestParameters['applicationUserCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationUserCreateWithMacKeyFromJSON(jsonValue));
    }

    /**
     * Create an application user
     
     */
    async postApplicationUsers(requestParameters: PostApplicationUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationUserCreateWithMacKey> {
        const response = await this.postApplicationUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate a new authentication key
     
     */
    async postApplicationUsersUserIdKeysRaw(requestParameters: PostApplicationUsersUserIdKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestApplicationUserMacKeyCreated>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling postApplicationUsersUserIdKeys().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'POST';
        const path = `/application-users/{userId}/keys`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestApplicationUserMacKeyCreatedFromJSON(jsonValue));
    }

    /**
     * Generate a new authentication key
     
     */
    async postApplicationUsersUserIdKeys(requestParameters: PostApplicationUsersUserIdKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestApplicationUserMacKeyCreated> {
        const response = await this.postApplicationUsersUserIdKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
