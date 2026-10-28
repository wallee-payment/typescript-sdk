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
  ExtendedRestOAuthClient,
  OAuthClient,
  OAuthClientCreate,
  OAuthClientListResponse,
  OAuthClientSearchResponse,
  OAuthClientUpdate,
  RestApiErrorResponse,
  RestOAuthClientSecret,
  SortingOrder,
} from '../models/index';
import {
    ExtendedRestOAuthClientFromJSON,
    ExtendedRestOAuthClientToJSON,
    OAuthClientFromJSON,
    OAuthClientToJSON,
    OAuthClientCreateFromJSON,
    OAuthClientCreateToJSON,
    OAuthClientListResponseFromJSON,
    OAuthClientListResponseToJSON,
    OAuthClientSearchResponseFromJSON,
    OAuthClientSearchResponseToJSON,
    OAuthClientUpdateFromJSON,
    OAuthClientUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    RestOAuthClientSecretFromJSON,
    RestOAuthClientSecretToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteOauth2ClientsClientIdSecretsIdRequest {
    clientId: number;
    id: number;
}

export interface DeleteOauth2ClientsIdRequest {
    id: number;
}

export interface GetOauth2ClientsRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetOauth2ClientsIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetOauth2ClientsSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchOauth2ClientsIdRequest {
    id: number;
    oAuthClientUpdate: OAuthClientUpdate;
    expand?: Set<string>;
}

export interface PostOauth2ClientsRequest {
    oAuthClientCreate: OAuthClientCreate;
    expand?: Set<string>;
}

export interface PostOauth2ClientsClientIdSecretsRequest {
    clientId: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class OAuthClientsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Deactivate a client secret
     
     */
    async deleteOauth2ClientsClientIdSecretsIdRaw(requestParameters: DeleteOauth2ClientsClientIdSecretsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['clientId'] == null) {
            throw new runtime.RequiredError(
                'clientId',
                'Required parameter "clientId" was null or undefined when calling deleteOauth2ClientsClientIdSecretsId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteOauth2ClientsClientIdSecretsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'DELETE';
        const path = `/oauth2/clients/{clientId}/secrets/{id}`.replace(`{${"clientId"}}`, encodeURIComponent(String(requestParameters['clientId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/clients/{clientId}/secrets/{id}`.replace(`{${"clientId"}}`, encodeURIComponent(String(requestParameters['clientId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deactivate a client secret
     
     */
    async deleteOauth2ClientsClientIdSecretsId(requestParameters: DeleteOauth2ClientsClientIdSecretsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteOauth2ClientsClientIdSecretsIdRaw(requestParameters, initOverrides);
    }

    /**
     * Permanently deletes a OAuth Client. It cannot be undone.
     * Delete a OAuth Client
     
     */
    async deleteOauth2ClientsIdRaw(requestParameters: DeleteOauth2ClientsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteOauth2ClientsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'DELETE';
        const path = `/oauth2/clients/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/clients/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a OAuth Client. It cannot be undone.
     * Delete a OAuth Client
     
     */
    async deleteOauth2ClientsId(requestParameters: DeleteOauth2ClientsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteOauth2ClientsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all OAuth Clients
     
     */
    async getOauth2ClientsRaw(requestParameters: GetOauth2ClientsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthClientListResponse>> {
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
        const path = `/oauth2/clients`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/clients`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthClientListResponseFromJSON(jsonValue));
    }

    /**
     * List all OAuth Clients
     
     */
    async getOauth2Clients(requestParameters: GetOauth2ClientsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthClientListResponse> {
        const response = await this.getOauth2ClientsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an OAuth Client
     
     */
    async getOauth2ClientsIdRaw(requestParameters: GetOauth2ClientsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExtendedRestOAuthClient>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getOauth2ClientsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/oauth2/clients/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/clients/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtendedRestOAuthClientFromJSON(jsonValue));
    }

    /**
     * Retrieve an OAuth Client
     
     */
    async getOauth2ClientsId(requestParameters: GetOauth2ClientsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExtendedRestOAuthClient> {
        const response = await this.getOauth2ClientsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search OAuth Clients
     
     */
    async getOauth2ClientsSearchRaw(requestParameters: GetOauth2ClientsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthClientSearchResponse>> {
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
        const path = `/oauth2/clients/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/clients/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthClientSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search OAuth Clients
     
     */
    async getOauth2ClientsSearch(requestParameters: GetOauth2ClientsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthClientSearchResponse> {
        const response = await this.getOauth2ClientsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a OAuth Client
     
     */
    async patchOauth2ClientsIdRaw(requestParameters: PatchOauth2ClientsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthClient>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchOauth2ClientsId().'
            );
        }

        if (requestParameters['oAuthClientUpdate'] == null) {
            throw new runtime.RequiredError(
                'oAuthClientUpdate',
                'Required parameter "oAuthClientUpdate" was null or undefined when calling patchOauth2ClientsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const method = 'PATCH';
        const path = `/oauth2/clients/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/clients/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: OAuthClientUpdateToJSON(requestParameters['oAuthClientUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthClientFromJSON(jsonValue));
    }

    /**
     * Update a OAuth Client
     
     */
    async patchOauth2ClientsId(requestParameters: PatchOauth2ClientsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthClient> {
        const response = await this.patchOauth2ClientsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a OAuth Client
     
     */
    async postOauth2ClientsRaw(requestParameters: PostOauth2ClientsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuthClient>> {
        if (requestParameters['oAuthClientCreate'] == null) {
            throw new runtime.RequiredError(
                'oAuthClientCreate',
                'Required parameter "oAuthClientCreate" was null or undefined when calling postOauth2Clients().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const method = 'POST';
        const path = `/oauth2/clients`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/clients`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OAuthClientCreateToJSON(requestParameters['oAuthClientCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthClientFromJSON(jsonValue));
    }

    /**
     * Create a OAuth Client
     
     */
    async postOauth2Clients(requestParameters: PostOauth2ClientsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuthClient> {
        const response = await this.postOauth2ClientsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate a new client secret
     
     */
    async postOauth2ClientsClientIdSecretsRaw(requestParameters: PostOauth2ClientsClientIdSecretsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestOAuthClientSecret>> {
        if (requestParameters['clientId'] == null) {
            throw new runtime.RequiredError(
                'clientId',
                'Required parameter "clientId" was null or undefined when calling postOauth2ClientsClientIdSecrets().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'POST';
        const path = `/oauth2/clients/{clientId}/secrets`.replace(`{${"clientId"}}`, encodeURIComponent(String(requestParameters['clientId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/oauth2/clients/{clientId}/secrets`.replace(`{${"clientId"}}`, encodeURIComponent(String(requestParameters['clientId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RestOAuthClientSecretFromJSON(jsonValue));
    }

    /**
     * Generate a new client secret
     
     */
    async postOauth2ClientsClientIdSecrets(requestParameters: PostOauth2ClientsClientIdSecretsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestOAuthClientSecret> {
        const response = await this.postOauth2ClientsClientIdSecretsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
