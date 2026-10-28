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
  WalleejoinAdminPartnerConfigurationRequestDto,
  WalleejoinAdminPartnerConfigurationResponseDto,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    WalleejoinAdminPartnerConfigurationRequestDtoFromJSON,
    WalleejoinAdminPartnerConfigurationRequestDtoToJSON,
    WalleejoinAdminPartnerConfigurationResponseDtoFromJSON,
    WalleejoinAdminPartnerConfigurationResponseDtoToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteScopeJoinProgramPartnersConfigurationsIdRequest {
    id: number;
}

export interface GetScopeJoinProgramPartnersConfigurationsIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface PatchScopeJoinProgramPartnersConfigurationsPartnerAccountIdRequest {
    partnerAccountId: number;
    walleejoinAdminPartnerConfigurationRequestDto: WalleejoinAdminPartnerConfigurationRequestDto;
    expand?: Set<string>;
}

export interface PostScopeJoinProgramPartnersConfigurationsRequest {
    walleejoinAdminPartnerConfigurationRequestDto: WalleejoinAdminPartnerConfigurationRequestDto;
    expand?: Set<string>;
}

/**
 * 
 */
export class JoinAdminPartnerConfigurationService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a join admin partner configuration
     
     */
    async deleteScopeJoinProgramPartnersConfigurationsIdRaw(requestParameters: DeleteScopeJoinProgramPartnersConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteScopeJoinProgramPartnersConfigurationsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'DELETE';
        const path = `/scope/join-program/partners/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/scope/join-program/partners/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a join admin partner configuration
     
     */
    async deleteScopeJoinProgramPartnersConfigurationsId(requestParameters: DeleteScopeJoinProgramPartnersConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteScopeJoinProgramPartnersConfigurationsIdRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve a join admin partner configuration
     
     */
    async getScopeJoinProgramPartnersConfigurationsIdRaw(requestParameters: GetScopeJoinProgramPartnersConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalleejoinAdminPartnerConfigurationResponseDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getScopeJoinProgramPartnersConfigurationsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/scope/join-program/partners/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/scope/join-program/partners/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalleejoinAdminPartnerConfigurationResponseDtoFromJSON(jsonValue));
    }

    /**
     * Retrieve a join admin partner configuration
     
     */
    async getScopeJoinProgramPartnersConfigurationsId(requestParameters: GetScopeJoinProgramPartnersConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalleejoinAdminPartnerConfigurationResponseDto> {
        const response = await this.getScopeJoinProgramPartnersConfigurationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a join admin partner configuration
     
     */
    async patchScopeJoinProgramPartnersConfigurationsPartnerAccountIdRaw(requestParameters: PatchScopeJoinProgramPartnersConfigurationsPartnerAccountIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalleejoinAdminPartnerConfigurationResponseDto>> {
        if (requestParameters['partnerAccountId'] == null) {
            throw new runtime.RequiredError(
                'partnerAccountId',
                'Required parameter "partnerAccountId" was null or undefined when calling patchScopeJoinProgramPartnersConfigurationsPartnerAccountId().'
            );
        }

        if (requestParameters['walleejoinAdminPartnerConfigurationRequestDto'] == null) {
            throw new runtime.RequiredError(
                'walleejoinAdminPartnerConfigurationRequestDto',
                'Required parameter "walleejoinAdminPartnerConfigurationRequestDto" was null or undefined when calling patchScopeJoinProgramPartnersConfigurationsPartnerAccountId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const method = 'PATCH';
        const path = `/scope/join-program/partners/configurations/{partnerAccountId}`.replace(`{${"partnerAccountId"}}`, encodeURIComponent(String(requestParameters['partnerAccountId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/scope/join-program/partners/configurations/{partnerAccountId}`.replace(`{${"partnerAccountId"}}`, encodeURIComponent(String(requestParameters['partnerAccountId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WalleejoinAdminPartnerConfigurationRequestDtoToJSON(requestParameters['walleejoinAdminPartnerConfigurationRequestDto']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalleejoinAdminPartnerConfigurationResponseDtoFromJSON(jsonValue));
    }

    /**
     * Update a join admin partner configuration
     
     */
    async patchScopeJoinProgramPartnersConfigurationsPartnerAccountId(requestParameters: PatchScopeJoinProgramPartnersConfigurationsPartnerAccountIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalleejoinAdminPartnerConfigurationResponseDto> {
        const response = await this.patchScopeJoinProgramPartnersConfigurationsPartnerAccountIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a join admin partner configuration
     
     */
    async postScopeJoinProgramPartnersConfigurationsRaw(requestParameters: PostScopeJoinProgramPartnersConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalleejoinAdminPartnerConfigurationResponseDto>> {
        if (requestParameters['walleejoinAdminPartnerConfigurationRequestDto'] == null) {
            throw new runtime.RequiredError(
                'walleejoinAdminPartnerConfigurationRequestDto',
                'Required parameter "walleejoinAdminPartnerConfigurationRequestDto" was null or undefined when calling postScopeJoinProgramPartnersConfigurations().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const method = 'POST';
        const path = `/scope/join-program/partners/configurations`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/scope/join-program/partners/configurations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WalleejoinAdminPartnerConfigurationRequestDtoToJSON(requestParameters['walleejoinAdminPartnerConfigurationRequestDto']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalleejoinAdminPartnerConfigurationResponseDtoFromJSON(jsonValue));
    }

    /**
     * Create a join admin partner configuration
     
     */
    async postScopeJoinProgramPartnersConfigurations(requestParameters: PostScopeJoinProgramPartnersConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalleejoinAdminPartnerConfigurationResponseDto> {
        const response = await this.postScopeJoinProgramPartnersConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
