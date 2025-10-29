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
  HumanUser,
  HumanUserCreate,
  HumanUserListResponse,
  HumanUserSearchResponse,
  HumanUserUpdate,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    HumanUserFromJSON,
    HumanUserToJSON,
    HumanUserCreateFromJSON,
    HumanUserCreateToJSON,
    HumanUserListResponseFromJSON,
    HumanUserListResponseToJSON,
    HumanUserSearchResponseFromJSON,
    HumanUserSearchResponseToJSON,
    HumanUserUpdateFromJSON,
    HumanUserUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteHumanUsersIdRequest {
    id: number;
}

export interface GetHumanUsersRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetHumanUsersExportRequest {
    fields?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface GetHumanUsersIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetHumanUsersSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchHumanUsersIdRequest {
    id: number;
    humanUserUpdate: HumanUserUpdate;
    expand?: Set<string>;
}

export interface PostHumanUsersRequest {
    humanUserCreate: HumanUserCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class HumanUsersService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a human user. It cannot be undone.
     * Delete a human user
     
     */
    async deleteHumanUsersIdRaw(requestParameters: DeleteHumanUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteHumanUsersId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'DELETE';
        const path = `/human-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Permanently deletes a human user. It cannot be undone.
     * Delete a human user
     
     */
    async deleteHumanUsersId(requestParameters: DeleteHumanUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteHumanUsersIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all human users
     
     */
    async getHumanUsersRaw(requestParameters: GetHumanUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HumanUserListResponse>> {
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
        const path = `/human-users`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => HumanUserListResponseFromJSON(jsonValue));
    }

    /**
     * List all human users
     
     */
    async getHumanUsers(requestParameters: GetHumanUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HumanUserListResponse> {
        const response = await this.getHumanUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Export human users into a CSV file.
     * Export human users
     
     * (The read time out for this request is 60 seconds)
     */
    async getHumanUsersExportRaw(requestParameters: GetHumanUsersExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
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
        const path = `/human-users/export`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = 60;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Export human users into a CSV file.
     * Export human users
     
     * (The read time out for this request is 60 seconds)
     */
    async getHumanUsersExport(requestParameters: GetHumanUsersExportRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getHumanUsersExportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a human user
     
     */
    async getHumanUsersIdRaw(requestParameters: GetHumanUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HumanUser>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getHumanUsersId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/human-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => HumanUserFromJSON(jsonValue));
    }

    /**
     * Retrieve a human user
     
     */
    async getHumanUsersId(requestParameters: GetHumanUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HumanUser> {
        const response = await this.getHumanUsersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search human users
     
     */
    async getHumanUsersSearchRaw(requestParameters: GetHumanUsersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HumanUserSearchResponse>> {
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
        const path = `/human-users/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => HumanUserSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search human users
     
     */
    async getHumanUsersSearch(requestParameters: GetHumanUsersSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HumanUserSearchResponse> {
        const response = await this.getHumanUsersSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a human user
     
     */
    async patchHumanUsersIdRaw(requestParameters: PatchHumanUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HumanUser>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchHumanUsersId().'
            );
        }

        if (requestParameters['humanUserUpdate'] == null) {
            throw new runtime.RequiredError(
                'humanUserUpdate',
                'Required parameter "humanUserUpdate" was null or undefined when calling patchHumanUsersId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        const method = 'PATCH';
        const path = `/human-users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: HumanUserUpdateToJSON(requestParameters['humanUserUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HumanUserFromJSON(jsonValue));
    }

    /**
     * Update a human user
     
     */
    async patchHumanUsersId(requestParameters: PatchHumanUsersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HumanUser> {
        const response = await this.patchHumanUsersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a human user
     
     */
    async postHumanUsersRaw(requestParameters: PostHumanUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HumanUser>> {
        if (requestParameters['humanUserCreate'] == null) {
            throw new runtime.RequiredError(
                'humanUserCreate',
                'Required parameter "humanUserCreate" was null or undefined when calling postHumanUsers().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        const method = 'POST';
        const path = `/human-users`;

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
            body: HumanUserCreateToJSON(requestParameters['humanUserCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HumanUserFromJSON(jsonValue));
    }

    /**
     * Create a human user
     
     */
    async postHumanUsers(requestParameters: PostHumanUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HumanUser> {
        const response = await this.postHumanUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
