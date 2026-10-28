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
  WebUiAccountTheme,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    WebUiAccountThemeFromJSON,
    WebUiAccountThemeToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteAccountUiThemesAccountIdRequest {
    accountId: number;
    account: number;
}

export interface DeleteAccountUiThemesAccountIdLogoRequest {
    accountId: number;
    account: number;
}

export interface PostAccountUiThemesCreateRequest {
    account: number;
    body: object;
}

/**
 * 
 */
export class WebUiAccountThemeService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete account UI theme
     
     */
    async deleteAccountUiThemesAccountIdRaw(requestParameters: DeleteAccountUiThemesAccountIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling deleteAccountUiThemesAccountId().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling deleteAccountUiThemesAccountId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'DELETE';
        const path = `/account/ui-themes/{accountId}`.replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters['accountId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/account/ui-themes/{accountId}`.replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters['accountId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete account UI theme
     
     */
    async deleteAccountUiThemesAccountId(requestParameters: DeleteAccountUiThemesAccountIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAccountUiThemesAccountIdRaw(requestParameters, initOverrides);
    }

    /**
     * Delete account theme logo
     
     */
    async deleteAccountUiThemesAccountIdLogoRaw(requestParameters: DeleteAccountUiThemesAccountIdLogoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling deleteAccountUiThemesAccountIdLogo().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling deleteAccountUiThemesAccountIdLogo().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'DELETE';
        const path = `/account/ui-themes/{accountId}/logo`.replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters['accountId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/account/ui-themes/{accountId}/logo`.replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters['accountId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete account theme logo
     
     */
    async deleteAccountUiThemesAccountIdLogo(requestParameters: DeleteAccountUiThemesAccountIdLogoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAccountUiThemesAccountIdLogoRaw(requestParameters, initOverrides);
    }

    /**
     * Create account UI theme
     
     */
    async postAccountUiThemesCreateRaw(requestParameters: PostAccountUiThemesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebUiAccountTheme>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postAccountUiThemesCreate().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling postAccountUiThemesCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'POST';
        const path = `/account/ui-themes/create`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/account/ui-themes/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebUiAccountThemeFromJSON(jsonValue));
    }

    /**
     * Create account UI theme
     
     */
    async postAccountUiThemesCreate(requestParameters: PostAccountUiThemesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebUiAccountTheme> {
        const response = await this.postAccountUiThemesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
