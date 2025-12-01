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
  PaymentConnectorConfiguration,
  PaymentConnectorConfigurationCreate,
  PaymentConnectorConfigurationListResponse,
  PaymentConnectorConfigurationSearchResponse,
  PaymentConnectorConfigurationUpdate,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    PaymentConnectorConfigurationFromJSON,
    PaymentConnectorConfigurationToJSON,
    PaymentConnectorConfigurationCreateFromJSON,
    PaymentConnectorConfigurationCreateToJSON,
    PaymentConnectorConfigurationListResponseFromJSON,
    PaymentConnectorConfigurationListResponseToJSON,
    PaymentConnectorConfigurationSearchResponseFromJSON,
    PaymentConnectorConfigurationSearchResponseToJSON,
    PaymentConnectorConfigurationUpdateFromJSON,
    PaymentConnectorConfigurationUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentConnectorConfigurationsIdRequest {
    id: number;
    space: number;
}

export interface GetPaymentConnectorConfigurationsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentConnectorConfigurationsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentConnectorConfigurationsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentConnectorConfigurationsIdRequest {
    id: number;
    space: number;
    paymentConnectorConfigurationUpdate: PaymentConnectorConfigurationUpdate;
    expand?: Set<string>;
}

export interface PostPaymentConnectorConfigurationsRequest {
    space: number;
    paymentConnectorConfigurationCreate: PaymentConnectorConfigurationCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class PaymentConnectorConfigurationsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a payment connector configuration. It cannot be undone.
     * Delete a payment connector configuration
     
     */
    async deletePaymentConnectorConfigurationsIdRaw(requestParameters: DeletePaymentConnectorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePaymentConnectorConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentConnectorConfigurationsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/connector-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/connector-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a payment connector configuration. It cannot be undone.
     * Delete a payment connector configuration
     
     */
    async deletePaymentConnectorConfigurationsId(requestParameters: DeletePaymentConnectorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentConnectorConfigurationsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all payment connector configurations
     
     */
    async getPaymentConnectorConfigurationsRaw(requestParameters: GetPaymentConnectorConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentConnectorConfigurationListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentConnectorConfigurations().'
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
        const path = `/payment/connector-configurations`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/connector-configurations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentConnectorConfigurationListResponseFromJSON(jsonValue));
    }

    /**
     * List all payment connector configurations
     
     */
    async getPaymentConnectorConfigurations(requestParameters: GetPaymentConnectorConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentConnectorConfigurationListResponse> {
        const response = await this.getPaymentConnectorConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a payment connector configuration
     
     */
    async getPaymentConnectorConfigurationsIdRaw(requestParameters: GetPaymentConnectorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentConnectorConfiguration>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentConnectorConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentConnectorConfigurationsId().'
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
        const path = `/payment/connector-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/connector-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentConnectorConfigurationFromJSON(jsonValue));
    }

    /**
     * Retrieve a payment connector configuration
     
     */
    async getPaymentConnectorConfigurationsId(requestParameters: GetPaymentConnectorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentConnectorConfiguration> {
        const response = await this.getPaymentConnectorConfigurationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search payment connector configurations
     
     */
    async getPaymentConnectorConfigurationsSearchRaw(requestParameters: GetPaymentConnectorConfigurationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentConnectorConfigurationSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentConnectorConfigurationsSearch().'
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
        const path = `/payment/connector-configurations/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/connector-configurations/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentConnectorConfigurationSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search payment connector configurations
     
     */
    async getPaymentConnectorConfigurationsSearch(requestParameters: GetPaymentConnectorConfigurationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentConnectorConfigurationSearchResponse> {
        const response = await this.getPaymentConnectorConfigurationsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a payment connector configuration
     
     */
    async patchPaymentConnectorConfigurationsIdRaw(requestParameters: PatchPaymentConnectorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentConnectorConfiguration>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentConnectorConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentConnectorConfigurationsId().'
            );
        }

        if (requestParameters['paymentConnectorConfigurationUpdate'] == null) {
            throw new runtime.RequiredError(
                'paymentConnectorConfigurationUpdate',
                'Required parameter "paymentConnectorConfigurationUpdate" was null or undefined when calling patchPaymentConnectorConfigurationsId().'
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
        const path = `/payment/connector-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/connector-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentConnectorConfigurationUpdateToJSON(requestParameters['paymentConnectorConfigurationUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentConnectorConfigurationFromJSON(jsonValue));
    }

    /**
     * Update a payment connector configuration
     
     */
    async patchPaymentConnectorConfigurationsId(requestParameters: PatchPaymentConnectorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentConnectorConfiguration> {
        const response = await this.patchPaymentConnectorConfigurationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a payment connector configuration
     
     */
    async postPaymentConnectorConfigurationsRaw(requestParameters: PostPaymentConnectorConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentConnectorConfiguration>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentConnectorConfigurations().'
            );
        }

        if (requestParameters['paymentConnectorConfigurationCreate'] == null) {
            throw new runtime.RequiredError(
                'paymentConnectorConfigurationCreate',
                'Required parameter "paymentConnectorConfigurationCreate" was null or undefined when calling postPaymentConnectorConfigurations().'
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
        const path = `/payment/connector-configurations`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/connector-configurations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentConnectorConfigurationCreateToJSON(requestParameters['paymentConnectorConfigurationCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentConnectorConfigurationFromJSON(jsonValue));
    }

    /**
     * Create a payment connector configuration
     
     */
    async postPaymentConnectorConfigurations(requestParameters: PostPaymentConnectorConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentConnectorConfiguration> {
        const response = await this.postPaymentConnectorConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
