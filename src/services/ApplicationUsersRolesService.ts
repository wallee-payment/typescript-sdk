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

export interface DeleteApplicationUsersUserIdAccountRolesRequest {
    userId: number;
    roleId: number;
    account: number;
}

export interface DeleteApplicationUsersUserIdSpaceRolesRequest {
    userId: number;
    roleId: number;
    space: number;
}

export interface GetApplicationUsersUserIdAccountRolesRequest {
    userId: number;
    account: number;
}

export interface GetApplicationUsersUserIdSpaceRolesRequest {
    userId: number;
    space: number;
}

export interface PostApplicationUsersUserIdAccountRolesRequest {
    userId: number;
    roleId: number;
    account: number;
    appliesOnSubAccount?: boolean;
}

export interface PostApplicationUsersUserIdSpaceRolesRequest {
    userId: number;
    roleId: number;
    space: number;
}

/**
 * 
 */
export class ApplicationUsersRolesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Unassign a role from an application user for an account
     
     */
    async deleteApplicationUsersUserIdAccountRolesRaw(requestParameters: DeleteApplicationUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteApplicationUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling deleteApplicationUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling deleteApplicationUsersUserIdAccountRoles().'
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
        const path = `/application-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/application-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unassign a role from an application user for an account
     
     */
    async deleteApplicationUsersUserIdAccountRoles(requestParameters: DeleteApplicationUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApplicationUsersUserIdAccountRolesRaw(requestParameters, initOverrides);
    }

    /**
     * Unassign a role from an application user for a space
     
     */
    async deleteApplicationUsersUserIdSpaceRolesRaw(requestParameters: DeleteApplicationUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteApplicationUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling deleteApplicationUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteApplicationUsersUserIdSpaceRoles().'
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
        const path = `/application-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/application-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unassign a role from an application user for a space
     
     */
    async deleteApplicationUsersUserIdSpaceRoles(requestParameters: DeleteApplicationUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApplicationUsersUserIdSpaceRolesRaw(requestParameters, initOverrides);
    }

    /**
     * List all roles of an application user for an account
     
     */
    async getApplicationUsersUserIdAccountRolesRaw(requestParameters: GetApplicationUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserAccountRoleListResponse>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getApplicationUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getApplicationUsersUserIdAccountRoles().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/application-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/application-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserAccountRoleListResponseFromJSON(jsonValue));
    }

    /**
     * List all roles of an application user for an account
     
     */
    async getApplicationUsersUserIdAccountRoles(requestParameters: GetApplicationUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserAccountRoleListResponse> {
        const response = await this.getApplicationUsersUserIdAccountRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all roles of an application user for a space
     
     */
    async getApplicationUsersUserIdSpaceRolesRaw(requestParameters: GetApplicationUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSpaceRoleListResponse>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getApplicationUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getApplicationUsersUserIdSpaceRoles().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/application-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/application-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSpaceRoleListResponseFromJSON(jsonValue));
    }

    /**
     * List all roles of an application user for a space
     
     */
    async getApplicationUsersUserIdSpaceRoles(requestParameters: GetApplicationUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSpaceRoleListResponse> {
        const response = await this.getApplicationUsersUserIdSpaceRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a role to an application user for an account
     
     */
    async postApplicationUsersUserIdAccountRolesRaw(requestParameters: PostApplicationUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserAccountRole>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling postApplicationUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling postApplicationUsersUserIdAccountRoles().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postApplicationUsersUserIdAccountRoles().'
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
        const path = `/application-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/application-users/{userId}/account-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserAccountRoleFromJSON(jsonValue));
    }

    /**
     * Assign a role to an application user for an account
     
     */
    async postApplicationUsersUserIdAccountRoles(requestParameters: PostApplicationUsersUserIdAccountRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserAccountRole> {
        const response = await this.postApplicationUsersUserIdAccountRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a role to an application user for a space
     
     */
    async postApplicationUsersUserIdSpaceRolesRaw(requestParameters: PostApplicationUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSpaceRole>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling postApplicationUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['roleId'] == null) {
            throw new runtime.RequiredError(
                'roleId',
                'Required parameter "roleId" was null or undefined when calling postApplicationUsersUserIdSpaceRoles().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postApplicationUsersUserIdSpaceRoles().'
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
        const path = `/application-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/application-users/{userId}/space-roles`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSpaceRoleFromJSON(jsonValue));
    }

    /**
     * Assign a role to an application user for a space
     
     */
    async postApplicationUsersUserIdSpaceRoles(requestParameters: PostApplicationUsersUserIdSpaceRolesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSpaceRole> {
        const response = await this.postApplicationUsersUserIdSpaceRolesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
