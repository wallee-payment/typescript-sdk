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
  ExpressCheckoutShippingAddressChangeRequest,
  ExpressCheckoutShippingAddressChangeResponse,
  ExpressCheckoutShippingMethodChangeRequest,
  ExpressCheckoutShippingMethodChangeResponse,
  RestApiErrorResponse,
} from '../models/index';
import {
    ExpressCheckoutCreateResponseFromJSON,
    ExpressCheckoutCreateResponseToJSON,
    ExpressCheckoutSessionCreateFromJSON,
    ExpressCheckoutSessionCreateToJSON,
    ExpressCheckoutShippingAddressChangeRequestFromJSON,
    ExpressCheckoutShippingAddressChangeRequestToJSON,
    ExpressCheckoutShippingAddressChangeResponseFromJSON,
    ExpressCheckoutShippingAddressChangeResponseToJSON,
    ExpressCheckoutShippingMethodChangeRequestFromJSON,
    ExpressCheckoutShippingMethodChangeRequestToJSON,
    ExpressCheckoutShippingMethodChangeResponseFromJSON,
    ExpressCheckoutShippingMethodChangeResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface PatchExpressCheckoutShippingAddressChangeRequest {
    sessionToken: string;
    space: number;
    expressCheckoutShippingAddressChangeRequest: ExpressCheckoutShippingAddressChangeRequest;
}

export interface PatchExpressCheckoutShippingMethodChangeRequest {
    sessionToken: string;
    space: number;
    expressCheckoutShippingMethodChangeRequest: Omit<ExpressCheckoutShippingMethodChangeRequest, 'shippingMethodId'>;
}

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
     * Change shipping address
     
     */
    async patchExpressCheckoutShippingAddressChangeRaw(requestParameters: PatchExpressCheckoutShippingAddressChangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpressCheckoutShippingAddressChangeResponse>> {
        if (requestParameters['sessionToken'] == null) {
            throw new runtime.RequiredError(
                'sessionToken',
                'Required parameter "sessionToken" was null or undefined when calling patchExpressCheckoutShippingAddressChange().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchExpressCheckoutShippingAddressChange().'
            );
        }

        if (requestParameters['expressCheckoutShippingAddressChangeRequest'] == null) {
            throw new runtime.RequiredError(
                'expressCheckoutShippingAddressChangeRequest',
                'Required parameter "expressCheckoutShippingAddressChangeRequest" was null or undefined when calling patchExpressCheckoutShippingAddressChange().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['sessionToken'] != null) {
            queryParameters['sessionToken'] = requestParameters['sessionToken'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/express-checkout/shipping/address-change`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/express-checkout/shipping/address-change`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ExpressCheckoutShippingAddressChangeRequestToJSON(requestParameters['expressCheckoutShippingAddressChangeRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpressCheckoutShippingAddressChangeResponseFromJSON(jsonValue));
    }

    /**
     * Change shipping address
     
     */
    async patchExpressCheckoutShippingAddressChange(requestParameters: PatchExpressCheckoutShippingAddressChangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpressCheckoutShippingAddressChangeResponse> {
        const response = await this.patchExpressCheckoutShippingAddressChangeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Change shipping method
     
     */
    async patchExpressCheckoutShippingMethodChangeRaw(requestParameters: PatchExpressCheckoutShippingMethodChangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpressCheckoutShippingMethodChangeResponse>> {
        if (requestParameters['sessionToken'] == null) {
            throw new runtime.RequiredError(
                'sessionToken',
                'Required parameter "sessionToken" was null or undefined when calling patchExpressCheckoutShippingMethodChange().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchExpressCheckoutShippingMethodChange().'
            );
        }

        if (requestParameters['expressCheckoutShippingMethodChangeRequest'] == null) {
            throw new runtime.RequiredError(
                'expressCheckoutShippingMethodChangeRequest',
                'Required parameter "expressCheckoutShippingMethodChangeRequest" was null or undefined when calling patchExpressCheckoutShippingMethodChange().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['sessionToken'] != null) {
            queryParameters['sessionToken'] = requestParameters['sessionToken'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/express-checkout/shipping/method-change`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/express-checkout/shipping/method-change`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ExpressCheckoutShippingMethodChangeRequestToJSON(requestParameters['expressCheckoutShippingMethodChangeRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpressCheckoutShippingMethodChangeResponseFromJSON(jsonValue));
    }

    /**
     * Change shipping method
     
     */
    async patchExpressCheckoutShippingMethodChange(requestParameters: PatchExpressCheckoutShippingMethodChangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpressCheckoutShippingMethodChangeResponse> {
        const response = await this.patchExpressCheckoutShippingMethodChangeRaw(requestParameters, initOverrides);
        return await response.value();
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
            path: `/express-checkout/create-session`,
            method: 'POST',
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
