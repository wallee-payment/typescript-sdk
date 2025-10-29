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
  SortingOrder,
  Space,
  SpaceCreate,
  SpaceListResponse,
  SpaceSearchResponse,
  SpaceUpdate,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SpaceFromJSON,
    SpaceToJSON,
    SpaceCreateFromJSON,
    SpaceCreateToJSON,
    SpaceListResponseFromJSON,
    SpaceListResponseToJSON,
    SpaceSearchResponseFromJSON,
    SpaceSearchResponseToJSON,
    SpaceUpdateFromJSON,
    SpaceUpdateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSpacesIdRequest {
    id: number;
}

export interface GetSpacesRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSpacesIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetSpacesSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSpacesIdRequest {
    id: number;
    spaceUpdate: SpaceUpdate;
    expand?: Set<string>;
}

export interface PostSpacesRequest {
    spaceCreate: SpaceCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SpacesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a space. It cannot be undone.
     * Delete a space
     
     */
    async deleteSpacesIdRaw(requestParameters: DeleteSpacesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSpacesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'DELETE';
        const path = `/spaces/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Permanently deletes a space. It cannot be undone.
     * Delete a space
     
     */
    async deleteSpacesId(requestParameters: DeleteSpacesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSpacesIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all spaces
     
     */
    async getSpacesRaw(requestParameters: GetSpacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpaceListResponse>> {
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
        const path = `/spaces`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SpaceListResponseFromJSON(jsonValue));
    }

    /**
     * List all spaces
     
     */
    async getSpaces(requestParameters: GetSpacesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpaceListResponse> {
        const response = await this.getSpacesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a space
     
     */
    async getSpacesIdRaw(requestParameters: GetSpacesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Space>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSpacesId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/spaces/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SpaceFromJSON(jsonValue));
    }

    /**
     * Retrieve a space
     
     */
    async getSpacesId(requestParameters: GetSpacesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Space> {
        const response = await this.getSpacesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search spaces
     
     */
    async getSpacesSearchRaw(requestParameters: GetSpacesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpaceSearchResponse>> {
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
        const path = `/spaces/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SpaceSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search spaces
     
     */
    async getSpacesSearch(requestParameters: GetSpacesSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpaceSearchResponse> {
        const response = await this.getSpacesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a space
     
     */
    async patchSpacesIdRaw(requestParameters: PatchSpacesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Space>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSpacesId().'
            );
        }

        if (requestParameters['spaceUpdate'] == null) {
            throw new runtime.RequiredError(
                'spaceUpdate',
                'Required parameter "spaceUpdate" was null or undefined when calling patchSpacesId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        const method = 'PATCH';
        const path = `/spaces/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: SpaceUpdateToJSON(requestParameters['spaceUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SpaceFromJSON(jsonValue));
    }

    /**
     * Update a space
     
     */
    async patchSpacesId(requestParameters: PatchSpacesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Space> {
        const response = await this.patchSpacesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a space
     
     */
    async postSpacesRaw(requestParameters: PostSpacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Space>> {
        if (requestParameters['spaceCreate'] == null) {
            throw new runtime.RequiredError(
                'spaceCreate',
                'Required parameter "spaceCreate" was null or undefined when calling postSpaces().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        const method = 'POST';
        const path = `/spaces`;

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
            body: SpaceCreateToJSON(requestParameters['spaceCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SpaceFromJSON(jsonValue));
    }

    /**
     * Create a space
     
     */
    async postSpaces(requestParameters: PostSpacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Space> {
        const response = await this.postSpacesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
