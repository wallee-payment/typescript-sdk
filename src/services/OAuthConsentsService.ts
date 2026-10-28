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
  OAuthConsent,
  OAuthConsentListResponse,
  OAuthConsentSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    OAuthConsentFromJSON,
    OAuthConsentToJSON,
    OAuthConsentListResponseFromJSON,
    OAuthConsentListResponseToJSON,
    OAuthConsentSearchResponseFromJSON,
    OAuthConsentSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteOauth2ConsentsIdRequest {
    id: number;
}

export interface GetOauth2ConsentsRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetOauth2ConsentsIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetOauth2ConsentsSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class OAuthConsentsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Revokes a specific OAuth consent. This will mark the consent as DELETED.
     * Revoke an OAuth Consent
     
     */
    async deleteOauth2ConsentsIdRaw(requestParameters: DeleteOauth2ConsentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteOauth2ConsentsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'DELETE';
        const path = `/oauth2/consents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/consents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Revokes a specific OAuth consent. This will mark the consent as DELETED.
     * Revoke an OAuth Consent
     
     */
    async deleteOauth2ConsentsId(requestParameters: DeleteOauth2ConsentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteOauth2ConsentsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all OAuth Consents
     
     */
    async getOauth2ConsentsRaw(requestParameters: GetOauth2ConsentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthConsentListResponse>> {
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
        const path = `/oauth2/consents`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/consents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthConsentListResponseFromJSON(jsonValue));
    }

    /**
     * List all OAuth Consents
     
     */
    async getOauth2Consents(requestParameters: GetOauth2ConsentsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthConsentListResponse> {
        const response = await this.getOauth2ConsentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an OAuth Consent
     
     */
    async getOauth2ConsentsIdRaw(requestParameters: GetOauth2ConsentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthConsent>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getOauth2ConsentsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/oauth2/consents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/consents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthConsentFromJSON(jsonValue));
    }

    /**
     * Retrieve an OAuth Consent
     
     */
    async getOauth2ConsentsId(requestParameters: GetOauth2ConsentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthConsent> {
        const response = await this.getOauth2ConsentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search OAuth Consents
     
     */
    async getOauth2ConsentsSearchRaw(requestParameters: GetOauth2ConsentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthConsentSearchResponse>> {
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
        const path = `/oauth2/consents/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/consents/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthConsentSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search OAuth Consents
     
     */
    async getOauth2ConsentsSearch(requestParameters: GetOauth2ConsentsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthConsentSearchResponse> {
        const response = await this.getOauth2ConsentsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
