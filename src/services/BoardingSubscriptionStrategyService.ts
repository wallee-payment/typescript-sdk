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
  BoardingStrategyInformationRequest,
  RestApiErrorResponse,
  StoreTrialSubscriptionRequestSetter,
} from '../models/index';
import {
    BoardingStrategyInformationRequestFromJSON,
    BoardingStrategyInformationRequestToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    StoreTrialSubscriptionRequestSetterFromJSON,
    StoreTrialSubscriptionRequestSetterToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface PostBoardingSubscriptionStrategyInformationRequest {
    account: number;
    boardingStrategyInformationRequest: BoardingStrategyInformationRequest;
}

export interface PostBoardingSubscriptionStrategyPlansRequest {
    account: number;
    storeTrialSubscriptionRequestSetter: StoreTrialSubscriptionRequestSetter;
}

/**
 * 
 */
export class BoardingSubscriptionStrategyService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Create a boarding subscription information for an account
     
     */
    async postBoardingSubscriptionStrategyInformationRaw(requestParameters: PostBoardingSubscriptionStrategyInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BoardingStrategyInformationRequest>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postBoardingSubscriptionStrategyInformation().'
            );
        }

        if (requestParameters['boardingStrategyInformationRequest'] == null) {
            throw new runtime.RequiredError(
                'boardingStrategyInformationRequest',
                'Required parameter "boardingStrategyInformationRequest" was null or undefined when calling postBoardingSubscriptionStrategyInformation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'POST';
        const path = `/boarding/subscription-strategy/information`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/boarding/subscription-strategy/information`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BoardingStrategyInformationRequestToJSON(requestParameters['boardingStrategyInformationRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BoardingStrategyInformationRequestFromJSON(jsonValue));
    }

    /**
     * Create a boarding subscription information for an account
     
     */
    async postBoardingSubscriptionStrategyInformation(requestParameters: PostBoardingSubscriptionStrategyInformationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BoardingStrategyInformationRequest> {
        const response = await this.postBoardingSubscriptionStrategyInformationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create new Boarding Trial Subscription to Account
     
     */
    async postBoardingSubscriptionStrategyPlansRaw(requestParameters: PostBoardingSubscriptionStrategyPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postBoardingSubscriptionStrategyPlans().'
            );
        }

        if (requestParameters['storeTrialSubscriptionRequestSetter'] == null) {
            throw new runtime.RequiredError(
                'storeTrialSubscriptionRequestSetter',
                'Required parameter "storeTrialSubscriptionRequestSetter" was null or undefined when calling postBoardingSubscriptionStrategyPlans().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'POST';
        const path = `/boarding/subscription-strategy/plans`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/boarding/subscription-strategy/plans`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StoreTrialSubscriptionRequestSetterToJSON(requestParameters['storeTrialSubscriptionRequestSetter']),
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create new Boarding Trial Subscription to Account
     
     */
    async postBoardingSubscriptionStrategyPlans(requestParameters: PostBoardingSubscriptionStrategyPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postBoardingSubscriptionStrategyPlansRaw(requestParameters, initOverrides);
    }


}
