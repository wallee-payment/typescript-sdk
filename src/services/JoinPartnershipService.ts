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
  WalleejoinCreatePartnershipApiRequestDto,
  WalleejoinPartnershipCreate,
  WalleejoinPartnershipResponseDto,
  WalleejoinPartnershipResponseDtoListResponse,
  WalleejoinPartnershipResponseDtoSearchResponse,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    WalleejoinCreatePartnershipApiRequestDtoFromJSON,
    WalleejoinCreatePartnershipApiRequestDtoToJSON,
    WalleejoinPartnershipCreateFromJSON,
    WalleejoinPartnershipCreateToJSON,
    WalleejoinPartnershipResponseDtoFromJSON,
    WalleejoinPartnershipResponseDtoToJSON,
    WalleejoinPartnershipResponseDtoListResponseFromJSON,
    WalleejoinPartnershipResponseDtoListResponseToJSON,
    WalleejoinPartnershipResponseDtoSearchResponseFromJSON,
    WalleejoinPartnershipResponseDtoSearchResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteJoinProgramPartnershipsIdRequest {
    id: number;
    account: number;
}

export interface GetJoinProgramPartnershipsRequest {
    account: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetJoinProgramPartnershipsIdRequest {
    id: number;
    account: number;
    expand?: Set<string>;
}

export interface GetJoinProgramPartnershipsSearchRequest {
    account: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostJoinProgramPartnershipsCreateAffiliateRequest {
    account: number;
    walleejoinCreatePartnershipApiRequestDto: WalleejoinCreatePartnershipApiRequestDto;
}

export interface PostJoinProgramPartnershipsCreateIsvRequest {
    account: number;
    walleejoinCreatePartnershipApiRequestDto: WalleejoinCreatePartnershipApiRequestDto;
    expand?: Set<string>;
}

export interface PostJoinProgramPartnershipsCreateSimpleRequest {
    account: number;
    walleejoinPartnershipCreate: WalleejoinPartnershipCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class JoinPartnershipService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a join partnership
     
     */
    async deleteJoinProgramPartnershipsIdRaw(requestParameters: DeleteJoinProgramPartnershipsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteJoinProgramPartnershipsId().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling deleteJoinProgramPartnershipsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'DELETE';
        const path = `/join-program/partnerships/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/join-program/partnerships/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a join partnership
     
     */
    async deleteJoinProgramPartnershipsId(requestParameters: DeleteJoinProgramPartnershipsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteJoinProgramPartnershipsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all join partnerships
     
     */
    async getJoinProgramPartnershipsRaw(requestParameters: GetJoinProgramPartnershipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalleejoinPartnershipResponseDtoListResponse>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getJoinProgramPartnerships().'
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

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/join-program/partnerships`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/join-program/partnerships`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalleejoinPartnershipResponseDtoListResponseFromJSON(jsonValue));
    }

    /**
     * List all join partnerships
     
     */
    async getJoinProgramPartnerships(requestParameters: GetJoinProgramPartnershipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalleejoinPartnershipResponseDtoListResponse> {
        const response = await this.getJoinProgramPartnershipsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a join partnership
     
     */
    async getJoinProgramPartnershipsIdRaw(requestParameters: GetJoinProgramPartnershipsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalleejoinPartnershipResponseDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getJoinProgramPartnershipsId().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getJoinProgramPartnershipsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/join-program/partnerships/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/join-program/partnerships/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalleejoinPartnershipResponseDtoFromJSON(jsonValue));
    }

    /**
     * Retrieve a join partnership
     
     */
    async getJoinProgramPartnershipsId(requestParameters: GetJoinProgramPartnershipsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalleejoinPartnershipResponseDto> {
        const response = await this.getJoinProgramPartnershipsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search join partnerships
     
     */
    async getJoinProgramPartnershipsSearchRaw(requestParameters: GetJoinProgramPartnershipsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalleejoinPartnershipResponseDtoSearchResponse>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getJoinProgramPartnershipsSearch().'
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

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/join-program/partnerships/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/join-program/partnerships/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalleejoinPartnershipResponseDtoSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search join partnerships
     
     */
    async getJoinProgramPartnershipsSearch(requestParameters: GetJoinProgramPartnershipsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalleejoinPartnershipResponseDtoSearchResponse> {
        const response = await this.getJoinProgramPartnershipsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a join account partnership
     
     */
    async postJoinProgramPartnershipsCreateAffiliateRaw(requestParameters: PostJoinProgramPartnershipsCreateAffiliateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postJoinProgramPartnershipsCreateAffiliate().'
            );
        }

        if (requestParameters['walleejoinCreatePartnershipApiRequestDto'] == null) {
            throw new runtime.RequiredError(
                'walleejoinCreatePartnershipApiRequestDto',
                'Required parameter "walleejoinCreatePartnershipApiRequestDto" was null or undefined when calling postJoinProgramPartnershipsCreateAffiliate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'POST';
        const path = `/join-program/partnerships/create-affiliate`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/join-program/partnerships/create-affiliate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WalleejoinCreatePartnershipApiRequestDtoToJSON(requestParameters['walleejoinCreatePartnershipApiRequestDto']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Create a join account partnership
     
     */
    async postJoinProgramPartnershipsCreateAffiliate(requestParameters: PostJoinProgramPartnershipsCreateAffiliateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.postJoinProgramPartnershipsCreateAffiliateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a join platform partnership
     
     */
    async postJoinProgramPartnershipsCreateIsvRaw(requestParameters: PostJoinProgramPartnershipsCreateIsvRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalleejoinPartnershipResponseDto>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postJoinProgramPartnershipsCreateIsv().'
            );
        }

        if (requestParameters['walleejoinCreatePartnershipApiRequestDto'] == null) {
            throw new runtime.RequiredError(
                'walleejoinCreatePartnershipApiRequestDto',
                'Required parameter "walleejoinCreatePartnershipApiRequestDto" was null or undefined when calling postJoinProgramPartnershipsCreateIsv().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'POST';
        const path = `/join-program/partnerships/create-isv`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/join-program/partnerships/create-isv`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WalleejoinCreatePartnershipApiRequestDtoToJSON(requestParameters['walleejoinCreatePartnershipApiRequestDto']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalleejoinPartnershipResponseDtoFromJSON(jsonValue));
    }

    /**
     * Create a join platform partnership
     
     */
    async postJoinProgramPartnershipsCreateIsv(requestParameters: PostJoinProgramPartnershipsCreateIsvRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalleejoinPartnershipResponseDto> {
        const response = await this.postJoinProgramPartnershipsCreateIsvRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a join partnership for an existing merchant
     
     */
    async postJoinProgramPartnershipsCreateSimpleRaw(requestParameters: PostJoinProgramPartnershipsCreateSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalleejoinPartnershipResponseDto>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postJoinProgramPartnershipsCreateSimple().'
            );
        }

        if (requestParameters['walleejoinPartnershipCreate'] == null) {
            throw new runtime.RequiredError(
                'walleejoinPartnershipCreate',
                'Required parameter "walleejoinPartnershipCreate" was null or undefined when calling postJoinProgramPartnershipsCreateSimple().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'POST';
        const path = `/join-program/partnerships/create-simple`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/join-program/partnerships/create-simple`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WalleejoinPartnershipCreateToJSON(requestParameters['walleejoinPartnershipCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalleejoinPartnershipResponseDtoFromJSON(jsonValue));
    }

    /**
     * Create a join partnership for an existing merchant
     
     */
    async postJoinProgramPartnershipsCreateSimple(requestParameters: PostJoinProgramPartnershipsCreateSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalleejoinPartnershipResponseDto> {
        const response = await this.postJoinProgramPartnershipsCreateSimpleRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
