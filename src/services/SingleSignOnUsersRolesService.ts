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

export interface DeleteSingleSignOnUsersUserIdAccountRolesRequest {
    userId: number;
    roleId: number;
    account: number;
}

export interface DeleteSingleSignOnUsersUserIdSpaceRolesRequest {
    userId: number;
    roleId: number;
    space: number;
}

export interface GetSingleSignOnUsersUserIdAccountRolesRequest {
    userId: number;
    account: number;
}

export interface GetSingleSignOnUsersUserIdSpaceRolesRequest {
    userId: number;
    space: number;
}

export interface PostSingleSignOnUsersUserIdAccountRolesRequest {
    userId: number;
    roleId: number;
    account: number;
    appliesOnSubAccount?: boolean;
}

export interface PostSingleSignOnUsersUserIdSpaceRolesRequest {
    userId: number;
    roleId: number;
    space: number;
}

/**
 * 
 */
export class SingleSignOnUsersRolesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Unassign a role from a single sign-on user for an account
     
     */
    async deleteSingleSignOnUsersUserIdAccountRolesRaw(requestParameters: DeleteSingleSignOnUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteSingleSignOnUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling deleteSingleSignOnUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling deleteSingleSignOnUsersUserIdAccountRoles().'
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
        const path = `/single-sign-on-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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
     * Unassign a role from a single sign-on user for an account
     
     */
    async deleteSingleSignOnUsersUserIdAccountRoles(requestParameters: DeleteSingleSignOnUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSingleSignOnUsersUserIdAccountRolesRaw(requestParameters, initOverrides);
    }

    /**
     * Unassign a role from a single sign-on user for a space
     
     */
    async deleteSingleSignOnUsersUserIdSpaceRolesRaw(requestParameters: DeleteSingleSignOnUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteSingleSignOnUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling deleteSingleSignOnUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSingleSignOnUsersUserIdSpaceRoles().'
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
        const path = `/single-sign-on-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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
     * Unassign a role from a single sign-on user for a space
     
     */
    async deleteSingleSignOnUsersUserIdSpaceRoles(requestParameters: DeleteSingleSignOnUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSingleSignOnUsersUserIdSpaceRolesRaw(requestParameters, initOverrides);
    }

    /**
     * List all roles of a single sign-on user for an account
     
     */
    async getSingleSignOnUsersUserIdAccountRolesRaw(requestParameters: GetSingleSignOnUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserAccountRoleListResponse>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getSingleSignOnUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getSingleSignOnUsersUserIdAccountRoles().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/single-sign-on-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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
     * List all roles of a single sign-on user for an account
     
     */
    async getSingleSignOnUsersUserIdAccountRoles(requestParameters: GetSingleSignOnUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserAccountRoleListResponse> {
        const response = await this.getSingleSignOnUsersUserIdAccountRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all roles of a single sign-on user for a space
     
     */
    async getSingleSignOnUsersUserIdSpaceRolesRaw(requestParameters: GetSingleSignOnUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSpaceRoleListResponse>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getSingleSignOnUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSingleSignOnUsersUserIdSpaceRoles().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/single-sign-on-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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
     * List all roles of a single sign-on user for a space
     
     */
    async getSingleSignOnUsersUserIdSpaceRoles(requestParameters: GetSingleSignOnUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSpaceRoleListResponse> {
        const response = await this.getSingleSignOnUsersUserIdSpaceRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a role to a single sign-on user for an account
     
     */
    async postSingleSignOnUsersUserIdAccountRolesRaw(requestParameters: PostSingleSignOnUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserAccountRole>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling postSingleSignOnUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling postSingleSignOnUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postSingleSignOnUsersUserIdAccountRoles().'
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
        const path = `/single-sign-on-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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
     * Assign a role to a single sign-on user for an account
     
     */
    async postSingleSignOnUsersUserIdAccountRoles(requestParameters: PostSingleSignOnUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserAccountRole> {
        const response = await this.postSingleSignOnUsersUserIdAccountRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a role to a single sign-on user for a space
     
     */
    async postSingleSignOnUsersUserIdSpaceRolesRaw(requestParameters: PostSingleSignOnUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSpaceRole>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling postSingleSignOnUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling postSingleSignOnUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSingleSignOnUsersUserIdSpaceRoles().'
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
        const path = `/single-sign-on-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

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
     * Assign a role to a single sign-on user for a space
     
     */
    async postSingleSignOnUsersUserIdSpaceRoles(requestParameters: PostSingleSignOnUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSpaceRole> {
        const response = await this.postSingleSignOnUsersUserIdSpaceRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
