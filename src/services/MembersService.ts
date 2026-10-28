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
  RestMember,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    RestMemberFromJSON,
    RestMemberToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetMembersAccountRequest {
    account: number;
}

export interface GetMembersSpaceRequest {
    space: number;
}

/**
 * 
 */
export class MembersService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all members of the account
     
     */
    async getMembersAccountRaw(requestParameters: GetMembersAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestMember>>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getMembersAccount().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/members/account`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/members/account`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestMemberFromJSON));
    }

    /**
     * List all members of the account
     
     */
    async getMembersAccount(requestParameters: GetMembersAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestMember>> {
        const response = await this.getMembersAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all members of the scope
     
     */
    async getMembersScopeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestMember>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/members/scope`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/members/scope`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestMemberFromJSON));
    }

    /**
     * List all members of the scope
     
     */
    async getMembersScope(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestMember>> {
        const response = await this.getMembersScopeRaw(initOverrides);
        return await response.value();
    }

    /**
     * List all members of the space
     
     */
    async getMembersSpaceRaw(requestParameters: GetMembersSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestMember>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getMembersSpace().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/members/space`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/members/space`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestMemberFromJSON));
    }

    /**
     * List all members of the space
     
     */
    async getMembersSpace(requestParameters: GetMembersSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestMember>> {
        const response = await this.getMembersSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
