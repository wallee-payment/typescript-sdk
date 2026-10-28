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
  MerchantApplicationDataDto,
  MerchantApplicationStatusDto,
  RestApiErrorResponse,
} from '../models/index';
import {
    MerchantApplicationDataDtoFromJSON,
    MerchantApplicationDataDtoToJSON,
    MerchantApplicationStatusDtoFromJSON,
    MerchantApplicationStatusDtoToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetOnboardingMerchantApplicationsIdStatusRequest {
    id: number;
    account: number;
    expand?: Set<string>;
}

export interface GetOnboardingMerchantApplicationsIdSubmissionUrlRequest {
    id: number;
    account: number;
}

export interface PatchOnboardingMerchantApplicationsIdRequest {
    id: number;
    account: number;
    merchantApplicationDataDto: MerchantApplicationDataDto;
    expand?: Set<string>;
}

export interface PostOnboardingMerchantApplicationsRequest {
    account: number;
    expand?: Set<string>;
    merchantApplicationDataDto?: MerchantApplicationDataDto;
}

/**
 * 
 */
export class MerchantApplicationsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Retrieve a merchant application status
     
     */
    async getOnboardingMerchantApplicationsIdStatusRaw(requestParameters: GetOnboardingMerchantApplicationsIdStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerchantApplicationStatusDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getOnboardingMerchantApplicationsIdStatus().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getOnboardingMerchantApplicationsIdStatus().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/onboarding/merchant-applications/{id}/status`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/onboarding/merchant-applications/{id}/status`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantApplicationStatusDtoFromJSON(jsonValue));
    }

    /**
     * Retrieve a merchant application status
     
     */
    async getOnboardingMerchantApplicationsIdStatus(requestParameters: GetOnboardingMerchantApplicationsIdStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerchantApplicationStatusDto> {
        const response = await this.getOnboardingMerchantApplicationsIdStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the URL where the merchant can review the application and complete the submission.
     * Return merchant application submission URL
     
     */
    async getOnboardingMerchantApplicationsIdSubmissionUrlRaw(requestParameters: GetOnboardingMerchantApplicationsIdSubmissionUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getOnboardingMerchantApplicationsIdSubmissionUrl().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getOnboardingMerchantApplicationsIdSubmissionUrl().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/onboarding/merchant-applications/{id}/submission-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/onboarding/merchant-applications/{id}/submission-url`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Returns the URL where the merchant can review the application and complete the submission.
     * Return merchant application submission URL
     
     */
    async getOnboardingMerchantApplicationsIdSubmissionUrl(requestParameters: GetOnboardingMerchantApplicationsIdSubmissionUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getOnboardingMerchantApplicationsIdSubmissionUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a merchant application
     
     */
    async patchOnboardingMerchantApplicationsIdRaw(requestParameters: PatchOnboardingMerchantApplicationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerchantApplicationDataDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchOnboardingMerchantApplicationsId().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling patchOnboardingMerchantApplicationsId().'
            );
        }

        if (requestParameters['merchantApplicationDataDto'] == null) {
            throw new runtime.RequiredError(
                'merchantApplicationDataDto',
                'Required parameter "merchantApplicationDataDto" was null or undefined when calling patchOnboardingMerchantApplicationsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'PATCH';
        const path = `/onboarding/merchant-applications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/onboarding/merchant-applications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: MerchantApplicationDataDtoToJSON(requestParameters['merchantApplicationDataDto']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantApplicationDataDtoFromJSON(jsonValue));
    }

    /**
     * Update a merchant application
     
     */
    async patchOnboardingMerchantApplicationsId(requestParameters: PatchOnboardingMerchantApplicationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerchantApplicationDataDto> {
        const response = await this.patchOnboardingMerchantApplicationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a merchant application. The request body is optional. Send an empty body to create a draft application, or send the full application payload to create it with initial data
     * Create a merchant application
     
     */
    async postOnboardingMerchantApplicationsRaw(requestParameters: PostOnboardingMerchantApplicationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerchantApplicationDataDto>> {
        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postOnboardingMerchantApplications().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['account'] != null) {
            headerParameters['account'] = String(requestParameters['account']);
        }

        const method = 'POST';
        const path = `/onboarding/merchant-applications`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/onboarding/merchant-applications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MerchantApplicationDataDtoToJSON(requestParameters['merchantApplicationDataDto']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerchantApplicationDataDtoFromJSON(jsonValue));
    }

    /**
     * Creates a merchant application. The request body is optional. Send an empty body to create a draft application, or send the full application payload to create it with initial data
     * Create a merchant application
     
     */
    async postOnboardingMerchantApplications(requestParameters: PostOnboardingMerchantApplicationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerchantApplicationDataDto> {
        const response = await this.postOnboardingMerchantApplicationsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
