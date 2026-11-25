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
  ExpressCheckoutSession,
  ExpressCheckoutSessionCreate,
  ExpressCheckoutSessionCreateResponse,
  ExpressCheckoutSessionProcessRequest,
  ExpressCheckoutSessionProcessResponse,
  RestApiErrorResponse,
} from '../models/index';
import {
    ExpressCheckoutSessionFromJSON,
    ExpressCheckoutSessionToJSON,
    ExpressCheckoutSessionCreateFromJSON,
    ExpressCheckoutSessionCreateToJSON,
    ExpressCheckoutSessionCreateResponseFromJSON,
    ExpressCheckoutSessionCreateResponseToJSON,
    ExpressCheckoutSessionProcessRequestFromJSON,
    ExpressCheckoutSessionProcessRequestToJSON,
    ExpressCheckoutSessionProcessResponseFromJSON,
    ExpressCheckoutSessionProcessResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetExpressCheckoutSessionRequest {
    sessionId: number;
    space: number;
}

export interface PostExpressCheckoutSessionCreateRequest {
    space: number;
    expressCheckoutSessionCreate: ExpressCheckoutSessionCreate;
}

export interface PostExpressCheckoutSessionProcessRequest {
    space: number;
    expressCheckoutSessionProcessRequest: ExpressCheckoutSessionProcessRequest;
}

/**
 * 
 */
export class ExpressCheckoutSessionService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Get Express Checkout Session details
     
     */
    async getExpressCheckoutSessionRaw(requestParameters: GetExpressCheckoutSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpressCheckoutSession>> {
        if (requestParameters['sessionId'] == null) {
            throw new runtime.RequiredError(
                'sessionId',
                'Required parameter "sessionId" was null or undefined when calling getExpressCheckoutSession().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getExpressCheckoutSession().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['sessionId'] != null) {
            queryParameters['sessionId'] = requestParameters['sessionId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/express-checkout/session`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/express-checkout/session`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpressCheckoutSessionFromJSON(jsonValue));
    }

    /**
     * Get Express Checkout Session details
     
     */
    async getExpressCheckoutSession(requestParameters: GetExpressCheckoutSessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpressCheckoutSession> {
        const response = await this.getExpressCheckoutSessionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new Express Checkout session and returns both sessionId and sessionToken. Use the sessionToken to render the wallet widget, and persist the sessionId for the later process call.
     * Create a new Express Checkout Session
     
     */
    async postExpressCheckoutSessionCreateRaw(requestParameters: PostExpressCheckoutSessionCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpressCheckoutSessionCreateResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postExpressCheckoutSessionCreate().'
            );
        }

        if (requestParameters['expressCheckoutSessionCreate'] == null) {
            throw new runtime.RequiredError(
                'expressCheckoutSessionCreate',
                'Required parameter "expressCheckoutSessionCreate" was null or undefined when calling postExpressCheckoutSessionCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/express-checkout/session/create`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/express-checkout/session/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExpressCheckoutSessionCreateToJSON(requestParameters['expressCheckoutSessionCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpressCheckoutSessionCreateResponseFromJSON(jsonValue));
    }

    /**
     * Creates a new Express Checkout session and returns both sessionId and sessionToken. Use the sessionToken to render the wallet widget, and persist the sessionId for the later process call.
     * Create a new Express Checkout Session
     
     */
    async postExpressCheckoutSessionCreate(requestParameters: PostExpressCheckoutSessionCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpressCheckoutSessionCreateResponse> {
        const response = await this.postExpressCheckoutSessionCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Processes the approved session and returns the redirect URL to continue checkout. Customer language and time zone are automatically derived from the HTTP request when available.
     * Process Express Checkout Session
     
     */
    async postExpressCheckoutSessionProcessRaw(requestParameters: PostExpressCheckoutSessionProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpressCheckoutSessionProcessResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postExpressCheckoutSessionProcess().'
            );
        }

        if (requestParameters['expressCheckoutSessionProcessRequest'] == null) {
            throw new runtime.RequiredError(
                'expressCheckoutSessionProcessRequest',
                'Required parameter "expressCheckoutSessionProcessRequest" was null or undefined when calling postExpressCheckoutSessionProcess().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/express-checkout/session/process`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/express-checkout/session/process`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExpressCheckoutSessionProcessRequestToJSON(requestParameters['expressCheckoutSessionProcessRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpressCheckoutSessionProcessResponseFromJSON(jsonValue));
    }

    /**
     * Processes the approved session and returns the redirect URL to continue checkout. Customer language and time zone are automatically derived from the HTTP request when available.
     * Process Express Checkout Session
     
     */
    async postExpressCheckoutSessionProcess(requestParameters: PostExpressCheckoutSessionProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpressCheckoutSessionProcessResponse> {
        const response = await this.postExpressCheckoutSessionProcessRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
