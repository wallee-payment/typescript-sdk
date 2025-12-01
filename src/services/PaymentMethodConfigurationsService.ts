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
  PaymentMethodConfiguration,
  PaymentMethodConfigurationCreate,
  PaymentMethodConfigurationListResponse,
  PaymentMethodConfigurationSearchResponse,
  PaymentMethodConfigurationUpdate,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    PaymentMethodConfigurationFromJSON,
    PaymentMethodConfigurationToJSON,
    PaymentMethodConfigurationCreateFromJSON,
    PaymentMethodConfigurationCreateToJSON,
    PaymentMethodConfigurationListResponseFromJSON,
    PaymentMethodConfigurationListResponseToJSON,
    PaymentMethodConfigurationSearchResponseFromJSON,
    PaymentMethodConfigurationSearchResponseToJSON,
    PaymentMethodConfigurationUpdateFromJSON,
    PaymentMethodConfigurationUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeletePaymentMethodConfigurationsIdRequest {
    id: number;
    space: number;
}

export interface GetPaymentMethodConfigurationsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentMethodConfigurationsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentMethodConfigurationsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentMethodConfigurationsIdRequest {
    id: number;
    space: number;
    paymentMethodConfigurationUpdate: PaymentMethodConfigurationUpdate;
    expand?: Set<string>;
}

export interface PostPaymentMethodConfigurationsRequest {
    space: number;
    paymentMethodConfigurationCreate: PaymentMethodConfigurationCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class PaymentMethodConfigurationsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Permanently deletes a payment method configuration.
     * Delete a payment method configuration
     
     */
    async deletePaymentMethodConfigurationsIdRaw(requestParameters: DeletePaymentMethodConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePaymentMethodConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deletePaymentMethodConfigurationsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/payment/method-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/method-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a payment method configuration.
     * Delete a payment method configuration
     
     */
    async deletePaymentMethodConfigurationsId(requestParameters: DeletePaymentMethodConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePaymentMethodConfigurationsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all payment method configurations
     
     */
    async getPaymentMethodConfigurationsRaw(requestParameters: GetPaymentMethodConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodConfigurationListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentMethodConfigurations().'
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
        const path = `/payment/method-configurations`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/method-configurations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodConfigurationListResponseFromJSON(jsonValue));
    }

    /**
     * List all payment method configurations
     
     */
    async getPaymentMethodConfigurations(requestParameters: GetPaymentMethodConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodConfigurationListResponse> {
        const response = await this.getPaymentMethodConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a payment method configuration
     
     */
    async getPaymentMethodConfigurationsIdRaw(requestParameters: GetPaymentMethodConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodConfiguration>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentMethodConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentMethodConfigurationsId().'
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
        const path = `/payment/method-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/method-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodConfigurationFromJSON(jsonValue));
    }

    /**
     * Retrieve a payment method configuration
     
     */
    async getPaymentMethodConfigurationsId(requestParameters: GetPaymentMethodConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodConfiguration> {
        const response = await this.getPaymentMethodConfigurationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search payment method configurations
     
     */
    async getPaymentMethodConfigurationsSearchRaw(requestParameters: GetPaymentMethodConfigurationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodConfigurationSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentMethodConfigurationsSearch().'
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
        const path = `/payment/method-configurations/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/method-configurations/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodConfigurationSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search payment method configurations
     
     */
    async getPaymentMethodConfigurationsSearch(requestParameters: GetPaymentMethodConfigurationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodConfigurationSearchResponse> {
        const response = await this.getPaymentMethodConfigurationsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a payment method configuration
     
     */
    async patchPaymentMethodConfigurationsIdRaw(requestParameters: PatchPaymentMethodConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodConfiguration>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentMethodConfigurationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentMethodConfigurationsId().'
            );
        }

        if (requestParameters['paymentMethodConfigurationUpdate'] == null) {
            throw new runtime.RequiredError(
                'paymentMethodConfigurationUpdate',
                'Required parameter "paymentMethodConfigurationUpdate" was null or undefined when calling patchPaymentMethodConfigurationsId().'
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
        const path = `/payment/method-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/method-configurations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentMethodConfigurationUpdateToJSON(requestParameters['paymentMethodConfigurationUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodConfigurationFromJSON(jsonValue));
    }

    /**
     * Update a payment method configuration
     
     */
    async patchPaymentMethodConfigurationsId(requestParameters: PatchPaymentMethodConfigurationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodConfiguration> {
        const response = await this.patchPaymentMethodConfigurationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a payment method configuration
     
     */
    async postPaymentMethodConfigurationsRaw(requestParameters: PostPaymentMethodConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentMethodConfiguration>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentMethodConfigurations().'
            );
        }

        if (requestParameters['paymentMethodConfigurationCreate'] == null) {
            throw new runtime.RequiredError(
                'paymentMethodConfigurationCreate',
                'Required parameter "paymentMethodConfigurationCreate" was null or undefined when calling postPaymentMethodConfigurations().'
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
        const path = `/payment/method-configurations`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/method-configurations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentMethodConfigurationCreateToJSON(requestParameters['paymentMethodConfigurationCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodConfigurationFromJSON(jsonValue));
    }

    /**
     * Create a payment method configuration
     
     */
    async postPaymentMethodConfigurations(requestParameters: PostPaymentMethodConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentMethodConfiguration> {
        const response = await this.postPaymentMethodConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
