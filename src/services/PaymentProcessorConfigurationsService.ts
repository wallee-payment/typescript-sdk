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
  PaymentProcessorConfiguration,
  PaymentProcessorConfigurationActive,
  PaymentProcessorConfigurationCreate,
  PaymentProcessorConfigurationListResponse,
  PaymentProcessorConfigurationSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    PaymentProcessorConfigurationFromJSON,
    PaymentProcessorConfigurationToJSON,
    PaymentProcessorConfigurationActiveFromJSON,
    PaymentProcessorConfigurationActiveToJSON,
    PaymentProcessorConfigurationCreateFromJSON,
    PaymentProcessorConfigurationCreateToJSON,
    PaymentProcessorConfigurationListResponseFromJSON,
    PaymentProcessorConfigurationListResponseToJSON,
    PaymentProcessorConfigurationSearchResponseFromJSON,
    PaymentProcessorConfigurationSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentProcessorConfigurationsIdRequest {
    id: number;
    space: number;
}

export interface GetPaymentProcessorConfigurationsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentProcessorConfigurationsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentProcessorConfigurationsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentProcessorConfigurationsIdRequest {
    id: number;
    space: number;
    paymentProcessorConfigurationActive: PaymentProcessorConfigurationActive;
    expand?: Set<string>;
}

export interface PostPaymentProcessorConfigurationsRequest {
    space: number;
    paymentProcessorConfigurationCreate: PaymentProcessorConfigurationCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class PaymentProcessorConfigurationsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a payment processor configuration.
     * Delete a payment processor configuration
     
     */
    async deletePaymentProcessorConfigurationsIdRaw(requestParameters: DeletePaymentProcessorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePaymentProcessorConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentProcessorConfigurationsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/processor-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a payment processor configuration.
     * Delete a payment processor configuration
     
     */
    async deletePaymentProcessorConfigurationsId(requestParameters: DeletePaymentProcessorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentProcessorConfigurationsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all payment processor configurations
     
     */
    async getPaymentProcessorConfigurationsRaw(requestParameters: GetPaymentProcessorConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentProcessorConfigurationListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentProcessorConfigurations().'
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
        const path = `/payment/processor-configurations`;

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
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentProcessorConfigurationListResponseFromJSON(jsonValue));
    }

    /**
     * List all payment processor configurations
     
     */
    async getPaymentProcessorConfigurations(requestParameters: GetPaymentProcessorConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentProcessorConfigurationListResponse> {
        const response = await this.getPaymentProcessorConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a payment processor configuration
     
     */
    async getPaymentProcessorConfigurationsIdRaw(requestParameters: GetPaymentProcessorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentProcessorConfiguration>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentProcessorConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentProcessorConfigurationsId().'
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
        const path = `/payment/processor-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentProcessorConfigurationFromJSON(jsonValue));
    }

    /**
     * Retrieve a payment processor configuration
     
     */
    async getPaymentProcessorConfigurationsId(requestParameters: GetPaymentProcessorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentProcessorConfiguration> {
        const response = await this.getPaymentProcessorConfigurationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search payment processor configurations
     
     */
    async getPaymentProcessorConfigurationsSearchRaw(requestParameters: GetPaymentProcessorConfigurationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentProcessorConfigurationSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentProcessorConfigurationsSearch().'
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
        const path = `/payment/processor-configurations/search`;

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
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentProcessorConfigurationSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search payment processor configurations
     
     */
    async getPaymentProcessorConfigurationsSearch(requestParameters: GetPaymentProcessorConfigurationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentProcessorConfigurationSearchResponse> {
        const response = await this.getPaymentProcessorConfigurationsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a payment processor configuration
     
     */
    async patchPaymentProcessorConfigurationsIdRaw(requestParameters: PatchPaymentProcessorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentProcessorConfiguration>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentProcessorConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentProcessorConfigurationsId().'
            );
        }

        if (requestParameters['paymentProcessorConfigurationActive'] == null) {
            throw new runtime.RequiredError(
                'paymentProcessorConfigurationActive',
                'Required parameter "paymentProcessorConfigurationActive" was null or undefined when calling patchPaymentProcessorConfigurationsId().'
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
        const path = `/payment/processor-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: PaymentProcessorConfigurationActiveToJSON(requestParameters['paymentProcessorConfigurationActive']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentProcessorConfigurationFromJSON(jsonValue));
    }

    /**
     * Update a payment processor configuration
     
     */
    async patchPaymentProcessorConfigurationsId(requestParameters: PatchPaymentProcessorConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentProcessorConfiguration> {
        const response = await this.patchPaymentProcessorConfigurationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a payment processor configuration
     
     */
    async postPaymentProcessorConfigurationsRaw(requestParameters: PostPaymentProcessorConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentProcessorConfiguration>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentProcessorConfigurations().'
            );
        }

        if (requestParameters['paymentProcessorConfigurationCreate'] == null) {
            throw new runtime.RequiredError(
                'paymentProcessorConfigurationCreate',
                'Required parameter "paymentProcessorConfigurationCreate" was null or undefined when calling postPaymentProcessorConfigurations().'
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
        const path = `/payment/processor-configurations`;

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
            body: PaymentProcessorConfigurationCreateToJSON(requestParameters['paymentProcessorConfigurationCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentProcessorConfigurationFromJSON(jsonValue));
    }

    /**
     * Create a payment processor configuration
     
     */
    async postPaymentProcessorConfigurations(requestParameters: PostPaymentProcessorConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentProcessorConfiguration> {
        const response = await this.postPaymentProcessorConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
