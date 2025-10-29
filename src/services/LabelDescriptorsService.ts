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
  LabelDescriptor,
  LabelDescriptorGroup,
  LabelDescriptorGroupListResponse,
  LabelDescriptorGroupSearchResponse,
  LabelDescriptorListResponse,
  LabelDescriptorSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    LabelDescriptorFromJSON,
    LabelDescriptorToJSON,
    LabelDescriptorGroupFromJSON,
    LabelDescriptorGroupToJSON,
    LabelDescriptorGroupListResponseFromJSON,
    LabelDescriptorGroupListResponseToJSON,
    LabelDescriptorGroupSearchResponseFromJSON,
    LabelDescriptorGroupSearchResponseToJSON,
    LabelDescriptorListResponseFromJSON,
    LabelDescriptorListResponseToJSON,
    LabelDescriptorSearchResponseFromJSON,
    LabelDescriptorSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetLabelDescriptorsRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetLabelDescriptorsGroupsRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetLabelDescriptorsGroupsIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetLabelDescriptorsGroupsSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface GetLabelDescriptorsIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetLabelDescriptorsSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class LabelDescriptorsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all label descriptors
     
     */
    async getLabelDescriptorsRaw(requestParameters: GetLabelDescriptorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LabelDescriptorListResponse>> {
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
        const path = `/label-descriptors`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => LabelDescriptorListResponseFromJSON(jsonValue));
    }

    /**
     * List all label descriptors
     
     */
    async getLabelDescriptors(requestParameters: GetLabelDescriptorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LabelDescriptorListResponse> {
        const response = await this.getLabelDescriptorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all label descriptor groups
     
     */
    async getLabelDescriptorsGroupsRaw(requestParameters: GetLabelDescriptorsGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LabelDescriptorGroupListResponse>> {
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
        const path = `/label-descriptors/groups`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => LabelDescriptorGroupListResponseFromJSON(jsonValue));
    }

    /**
     * List all label descriptor groups
     
     */
    async getLabelDescriptorsGroups(requestParameters: GetLabelDescriptorsGroupsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LabelDescriptorGroupListResponse> {
        const response = await this.getLabelDescriptorsGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a label descriptor group
     
     */
    async getLabelDescriptorsGroupsIdRaw(requestParameters: GetLabelDescriptorsGroupsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LabelDescriptorGroup>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getLabelDescriptorsGroupsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/label-descriptors/groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => LabelDescriptorGroupFromJSON(jsonValue));
    }

    /**
     * Retrieve a label descriptor group
     
     */
    async getLabelDescriptorsGroupsId(requestParameters: GetLabelDescriptorsGroupsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LabelDescriptorGroup> {
        const response = await this.getLabelDescriptorsGroupsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search label descriptor groups
     
     */
    async getLabelDescriptorsGroupsSearchRaw(requestParameters: GetLabelDescriptorsGroupsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LabelDescriptorGroupSearchResponse>> {
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
        const path = `/label-descriptors/groups/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => LabelDescriptorGroupSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search label descriptor groups
     
     */
    async getLabelDescriptorsGroupsSearch(requestParameters: GetLabelDescriptorsGroupsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LabelDescriptorGroupSearchResponse> {
        const response = await this.getLabelDescriptorsGroupsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a label descriptor
     
     */
    async getLabelDescriptorsIdRaw(requestParameters: GetLabelDescriptorsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LabelDescriptor>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getLabelDescriptorsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        const method = 'GET';
        const path = `/label-descriptors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => LabelDescriptorFromJSON(jsonValue));
    }

    /**
     * Retrieve a label descriptor
     
     */
    async getLabelDescriptorsId(requestParameters: GetLabelDescriptorsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LabelDescriptor> {
        const response = await this.getLabelDescriptorsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search label descriptors
     
     */
    async getLabelDescriptorsSearchRaw(requestParameters: GetLabelDescriptorsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LabelDescriptorSearchResponse>> {
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
        const path = `/label-descriptors/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => LabelDescriptorSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search label descriptors
     
     */
    async getLabelDescriptorsSearch(requestParameters: GetLabelDescriptorsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LabelDescriptorSearchResponse> {
        const response = await this.getLabelDescriptorsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
