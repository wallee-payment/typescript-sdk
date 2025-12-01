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
  WebAppConfirmationResponse,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    WebAppConfirmationResponseFromJSON,
    WebAppConfirmationResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetWebAppsInstalledRequest {
    space: number;
}

export interface PostWebAppsConfirmCodeRequest {
    code: string;
    expand?: Set<string>;
}

export interface PostWebAppsUninstallRequest {
    space: number;
}

/**
 * 
 */
export class WebAppsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Return true if the web app is installed in the provided space.
     * Check whether the web app is installed
     
     */
    async getWebAppsInstalledRaw(requestParameters: GetWebAppsInstalledRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getWebAppsInstalled().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/web-apps/installed`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/web-apps/installed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<boolean>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Return true if the web app is installed in the provided space.
     * Check whether the web app is installed
     
     */
    async getWebAppsInstalled(requestParameters: GetWebAppsInstalledRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.getWebAppsInstalledRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Confirm the installation of a web app. This has to be done when the user returns to the web app after granting permissions, using the activation code provided in the request.
     * Confirm a web app installation
     
     */
    async postWebAppsConfirmCodeRaw(requestParameters: PostWebAppsConfirmCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebAppConfirmationResponse>> {
        if (requestParameters['code'] == null) {
            throw new runtime.RequiredError(
                'code',
                'Required parameter "code" was null or undefined when calling postWebAppsConfirmCode().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'POST';
        const path = `/web-apps/confirm/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters['code'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/web-apps/confirm/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters['code']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebAppConfirmationResponseFromJSON(jsonValue));
    }

    /**
     * Confirm the installation of a web app. This has to be done when the user returns to the web app after granting permissions, using the activation code provided in the request.
     * Confirm a web app installation
     
     */
    async postWebAppsConfirmCode(requestParameters: PostWebAppsConfirmCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebAppConfirmationResponse> {
        const response = await this.postWebAppsConfirmCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Uninstall the web app from the provided space.
     * Uninstall a web app
     
     */
    async postWebAppsUninstallRaw(requestParameters: PostWebAppsUninstallRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postWebAppsUninstall().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/web-apps/uninstall`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/web-apps/uninstall`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Uninstall the web app from the provided space.
     * Uninstall a web app
     
     */
    async postWebAppsUninstall(requestParameters: PostWebAppsUninstallRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postWebAppsUninstallRaw(requestParameters, initOverrides);
    }


}
