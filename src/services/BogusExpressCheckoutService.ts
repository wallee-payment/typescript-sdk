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
  BogusExpressCheckoutApprovalRequest,
  ExpressCheckoutApprovalResponse,
  RestApiErrorResponse,
} from '../models/index';
import {
    BogusExpressCheckoutApprovalRequestFromJSON,
    BogusExpressCheckoutApprovalRequestToJSON,
    ExpressCheckoutApprovalResponseFromJSON,
    ExpressCheckoutApprovalResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface PostBogusExpressCheckoutOnApproveRequest {
    sessionToken: string;
    space: number;
    bogusExpressCheckoutApprovalRequest: BogusExpressCheckoutApprovalRequest;
}

/**
 * 
 */
export class BogusExpressCheckoutService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Approve express checkout wallet payment
     
     */
    async postBogusExpressCheckoutOnApproveRaw(requestParameters: PostBogusExpressCheckoutOnApproveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpressCheckoutApprovalResponse>> {
        if (requestParameters['sessionToken'] == null) {
            throw new runtime.RequiredError(
                'sessionToken',
                'Required parameter "sessionToken" was null or undefined when calling postBogusExpressCheckoutOnApprove().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postBogusExpressCheckoutOnApprove().'
            );
        }

        if (requestParameters['bogusExpressCheckoutApprovalRequest'] == null) {
            throw new runtime.RequiredError(
                'bogusExpressCheckoutApprovalRequest',
                'Required parameter "bogusExpressCheckoutApprovalRequest" was null or undefined when calling postBogusExpressCheckoutOnApprove().'
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

        const method = 'POST';
        const path = `/bogus-express-checkout/on-approve`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/bogus-express-checkout/on-approve`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BogusExpressCheckoutApprovalRequestToJSON(requestParameters['bogusExpressCheckoutApprovalRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpressCheckoutApprovalResponseFromJSON(jsonValue));
    }

    /**
     * Approve express checkout wallet payment
     
     */
    async postBogusExpressCheckoutOnApprove(requestParameters: PostBogusExpressCheckoutOnApproveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpressCheckoutApprovalResponse> {
        const response = await this.postBogusExpressCheckoutOnApproveRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
