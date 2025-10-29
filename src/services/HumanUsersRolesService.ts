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
  UserAccountRole,
  UserAccountRoleListResponse,
  UserSpaceRole,
  UserSpaceRoleListResponse,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    UserAccountRoleFromJSON,
    UserAccountRoleToJSON,
    UserAccountRoleListResponseFromJSON,
    UserAccountRoleListResponseToJSON,
    UserSpaceRoleFromJSON,
    UserSpaceRoleToJSON,
    UserSpaceRoleListResponseFromJSON,
    UserSpaceRoleListResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteHumanUsersUserIdAccountRolesRequest {
    userId: number;
    roleId: number;
    account: number;
}

export interface DeleteHumanUsersUserIdSpaceRolesRequest {
    userId: number;
    roleId: number;
    space: number;
}

export interface GetHumanUsersUserIdAccountRolesRequest {
    userId: number;
    account: number;
}

export interface GetHumanUsersUserIdSpaceRolesRequest {
    userId: number;
    space: number;
}

export interface PostHumanUsersUserIdAccountRolesRequest {
    userId: number;
    roleId: number;
    account: number;
    appliesOnSubAccount?: boolean;
}

export interface PostHumanUsersUserIdSpaceRolesRequest {
    userId: number;
    roleId: number;
    space: number;
}

/**
 * 
 */
export class HumanUsersRolesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Unassign a role from a human user for an account
     
     */
    async deleteHumanUsersUserIdAccountRolesRaw(requestParameters: DeleteHumanUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteHumanUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling deleteHumanUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling deleteHumanUsersUserIdAccountRoles().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['roleId'] != null) {
            queryParameters['roleId'] = requestParameters['roleId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'DELETE';
        const path = `/human-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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
     * Unassign a role from a human user for an account
     
     */
    async deleteHumanUsersUserIdAccountRoles(requestParameters: DeleteHumanUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteHumanUsersUserIdAccountRolesRaw(requestParameters, initOverrides);
    }

    /**
     * Unassign a role from a human user for a space
     
     */
    async deleteHumanUsersUserIdSpaceRolesRaw(requestParameters: DeleteHumanUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteHumanUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling deleteHumanUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteHumanUsersUserIdSpaceRoles().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['roleId'] != null) {
            queryParameters['roleId'] = requestParameters['roleId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/human-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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
     * Unassign a role from a human user for a space
     
     */
    async deleteHumanUsersUserIdSpaceRoles(requestParameters: DeleteHumanUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteHumanUsersUserIdSpaceRolesRaw(requestParameters, initOverrides);
    }

    /**
     * List all roles of a human user for an account
     
     */
    async getHumanUsersUserIdAccountRolesRaw(requestParameters: GetHumanUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserAccountRoleListResponse>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getHumanUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getHumanUsersUserIdAccountRoles().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/human-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => UserAccountRoleListResponseFromJSON(jsonValue));
    }

    /**
     * List all roles of a human user for an account
     
     */
    async getHumanUsersUserIdAccountRoles(requestParameters: GetHumanUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserAccountRoleListResponse> {
        const response = await this.getHumanUsersUserIdAccountRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all roles of a human user for a space
     
     */
    async getHumanUsersUserIdSpaceRolesRaw(requestParameters: GetHumanUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSpaceRoleListResponse>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getHumanUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getHumanUsersUserIdSpaceRoles().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/human-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSpaceRoleListResponseFromJSON(jsonValue));
    }

    /**
     * List all roles of a human user for a space
     
     */
    async getHumanUsersUserIdSpaceRoles(requestParameters: GetHumanUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSpaceRoleListResponse> {
        const response = await this.getHumanUsersUserIdSpaceRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a role to a human user for an account
     
     */
    async postHumanUsersUserIdAccountRolesRaw(requestParameters: PostHumanUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserAccountRole>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling postHumanUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling postHumanUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postHumanUsersUserIdAccountRoles().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['roleId'] != null) {
            queryParameters['roleId'] = requestParameters['roleId'];
        }

        if (requestParameters['appliesOnSubAccount'] != null) {
            queryParameters['appliesOnSubAccount'] = requestParameters['appliesOnSubAccount'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'POST';
        const path = `/human-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => UserAccountRoleFromJSON(jsonValue));
    }

    /**
     * Assign a role to a human user for an account
     
     */
    async postHumanUsersUserIdAccountRoles(requestParameters: PostHumanUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserAccountRole> {
        const response = await this.postHumanUsersUserIdAccountRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a role to a human user for a space
     
     */
    async postHumanUsersUserIdSpaceRolesRaw(requestParameters: PostHumanUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSpaceRole>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling postHumanUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling postHumanUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postHumanUsersUserIdSpaceRoles().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['roleId'] != null) {
            queryParameters['roleId'] = requestParameters['roleId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/human-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSpaceRoleFromJSON(jsonValue));
    }

    /**
     * Assign a role to a human user for a space
     
     */
    async postHumanUsersUserIdSpaceRoles(requestParameters: PostHumanUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSpaceRole> {
        const response = await this.postHumanUsersUserIdSpaceRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
