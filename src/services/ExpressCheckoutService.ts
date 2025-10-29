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
  ExpressCheckoutCreateResponse,
  ExpressCheckoutSessionCreate,
  RestApiErrorResponse,
} from '../models/index';
import {
    ExpressCheckoutCreateResponseFromJSON,
    ExpressCheckoutCreateResponseToJSON,
    ExpressCheckoutSessionCreateFromJSON,
    ExpressCheckoutSessionCreateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface PostExpressCheckoutCreateSessionRequest {
    space: number;
    expressCheckoutSessionCreate: ExpressCheckoutSessionCreate;
}

/**
 * 
 */
export class ExpressCheckoutService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Create a new Express Checkout Session
     
     */
    async postExpressCheckoutCreateSessionRaw(requestParameters: PostExpressCheckoutCreateSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpressCheckoutCreateResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postExpressCheckoutCreateSession().'
            );
        }

        if (requestParameters['expressCheckoutSessionCreate'] == null) {
            throw new runtime.RequiredError(
                'expressCheckoutSessionCreate',
                'Required parameter "expressCheckoutSessionCreate" was null or undefined when calling postExpressCheckoutCreateSession().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/express-checkout/create-session`;

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
            body: ExpressCheckoutSessionCreateToJSON(requestParameters['expressCheckoutSessionCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpressCheckoutCreateResponseFromJSON(jsonValue));
    }

    /**
     * Create a new Express Checkout Session
     
     */
    async postExpressCheckoutCreateSession(requestParameters: PostExpressCheckoutCreateSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpressCheckoutCreateResponse> {
        const response = await this.postExpressCheckoutCreateSessionRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
