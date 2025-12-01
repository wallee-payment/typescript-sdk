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
  DebtCollectorConfiguration,
  DebtCollectorConfigurationCreate,
  DebtCollectorConfigurationListResponse,
  DebtCollectorConfigurationSearchResponse,
  DebtCollectorConfigurationUpdate,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    DebtCollectorConfigurationFromJSON,
    DebtCollectorConfigurationToJSON,
    DebtCollectorConfigurationCreateFromJSON,
    DebtCollectorConfigurationCreateToJSON,
    DebtCollectorConfigurationListResponseFromJSON,
    DebtCollectorConfigurationListResponseToJSON,
    DebtCollectorConfigurationSearchResponseFromJSON,
    DebtCollectorConfigurationSearchResponseToJSON,
    DebtCollectorConfigurationUpdateFromJSON,
    DebtCollectorConfigurationUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteDebtCollectionConfigurationsIdRequest {
    id: number;
    space: number;
}

export interface GetDebtCollectionConfigurationsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetDebtCollectionConfigurationsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetDebtCollectionConfigurationsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchDebtCollectionConfigurationsIdRequest {
    id: number;
    space: number;
    debtCollectorConfigurationUpdate: DebtCollectorConfigurationUpdate;
    expand?: Set<string>;
}

export interface PostDebtCollectionConfigurationsRequest {
    space: number;
    debtCollectorConfigurationCreate: DebtCollectorConfigurationCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class DebtCollectorConfigurationsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a debt collector configuration
     
     */
    async deleteDebtCollectionConfigurationsIdRaw(requestParameters: DeleteDebtCollectionConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteDebtCollectionConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteDebtCollectionConfigurationsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/debt-collection/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a debt collector configuration
     
     */
    async deleteDebtCollectionConfigurationsId(requestParameters: DeleteDebtCollectionConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDebtCollectionConfigurationsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all debt collector configurations
     
     */
    async getDebtCollectionConfigurationsRaw(requestParameters: GetDebtCollectionConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectorConfigurationListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getDebtCollectionConfigurations().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['after'] != null) {
            queryParameters['after'] = requestParameters['after'];
        }

        if (requestParameters['before'] != null) {
            queryParameters['before'] = requestParameters['before'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/debt-collection/configurations`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/configurations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectorConfigurationListResponseFromJSON(jsonValue));
    }

    /**
     * List all debt collector configurations
     
     */
    async getDebtCollectionConfigurations(requestParameters: GetDebtCollectionConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectorConfigurationListResponse> {
        const response = await this.getDebtCollectionConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a debt collector configuration
     
     */
    async getDebtCollectionConfigurationsIdRaw(requestParameters: GetDebtCollectionConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectorConfiguration>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getDebtCollectionConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getDebtCollectionConfigurationsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/debt-collection/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectorConfigurationFromJSON(jsonValue));
    }

    /**
     * Retrieve a debt collector configuration
     
     */
    async getDebtCollectionConfigurationsId(requestParameters: GetDebtCollectionConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectorConfiguration> {
        const response = await this.getDebtCollectionConfigurationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search debt collector configurations
     
     */
    async getDebtCollectionConfigurationsSearchRaw(requestParameters: GetDebtCollectionConfigurationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectorConfigurationSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getDebtCollectionConfigurationsSearch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/debt-collection/configurations/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/configurations/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectorConfigurationSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search debt collector configurations
     
     */
    async getDebtCollectionConfigurationsSearch(requestParameters: GetDebtCollectionConfigurationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectorConfigurationSearchResponse> {
        const response = await this.getDebtCollectionConfigurationsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a debt collector configuration
     
     */
    async patchDebtCollectionConfigurationsIdRaw(requestParameters: PatchDebtCollectionConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectorConfiguration>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchDebtCollectionConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchDebtCollectionConfigurationsId().'
            );
        }

        if (requestParameters['debtCollectorConfigurationUpdate'] == null) {
            throw new runtime.RequiredError(
                'debtCollectorConfigurationUpdate',
                'Required parameter "debtCollectorConfigurationUpdate" was null or undefined when calling patchDebtCollectionConfigurationsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/debt-collection/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: DebtCollectorConfigurationUpdateToJSON(requestParameters['debtCollectorConfigurationUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectorConfigurationFromJSON(jsonValue));
    }

    /**
     * Update a debt collector configuration
     
     */
    async patchDebtCollectionConfigurationsId(requestParameters: PatchDebtCollectionConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectorConfiguration> {
        const response = await this.patchDebtCollectionConfigurationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a debt collector configuration
     
     */
    async postDebtCollectionConfigurationsRaw(requestParameters: PostDebtCollectionConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectorConfiguration>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postDebtCollectionConfigurations().'
            );
        }

        if (requestParameters['debtCollectorConfigurationCreate'] == null) {
            throw new runtime.RequiredError(
                'debtCollectorConfigurationCreate',
                'Required parameter "debtCollectorConfigurationCreate" was null or undefined when calling postDebtCollectionConfigurations().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/debt-collection/configurations`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/configurations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DebtCollectorConfigurationCreateToJSON(requestParameters['debtCollectorConfigurationCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectorConfigurationFromJSON(jsonValue));
    }

    /**
     * Create a debt collector configuration
     
     */
    async postDebtCollectionConfigurations(requestParameters: PostDebtCollectionConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectorConfiguration> {
        const response = await this.postDebtCollectionConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
