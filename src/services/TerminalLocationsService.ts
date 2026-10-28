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
  PaymentTerminalLocationCrudModel,
  PaymentTerminalLocationCrudModelRestApiCreate,
  PaymentTerminalLocationListResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    PaymentTerminalLocationCrudModelFromJSON,
    PaymentTerminalLocationCrudModelToJSON,
    PaymentTerminalLocationCrudModelRestApiCreateFromJSON,
    PaymentTerminalLocationCrudModelRestApiCreateToJSON,
    PaymentTerminalLocationListResponseFromJSON,
    PaymentTerminalLocationListResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentPointOfSaleLocationsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentPointOfSaleLocationsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentPointOfSaleLocationsRequest {
    space: number;
    paymentTerminalLocationCrudModelRestApiCreate: PaymentTerminalLocationCrudModelRestApiCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class TerminalLocationsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List terminal locations
     
     */
    async getPaymentPointOfSaleLocationsRaw(requestParameters: GetPaymentPointOfSaleLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminalLocationListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentPointOfSaleLocations().'
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
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/point-of-sale/locations`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/point-of-sale/locations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalLocationListResponseFromJSON(jsonValue));
    }

    /**
     * List terminal locations
     
     */
    async getPaymentPointOfSaleLocations(requestParameters: GetPaymentPointOfSaleLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminalLocationListResponse> {
        const response = await this.getPaymentPointOfSaleLocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a terminal location
     
     */
    async getPaymentPointOfSaleLocationsIdRaw(requestParameters: GetPaymentPointOfSaleLocationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminalLocationCrudModel>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentPointOfSaleLocationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentPointOfSaleLocationsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/point-of-sale/locations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/point-of-sale/locations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalLocationCrudModelFromJSON(jsonValue));
    }

    /**
     * Retrieve a terminal location
     
     */
    async getPaymentPointOfSaleLocationsId(requestParameters: GetPaymentPointOfSaleLocationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminalLocationCrudModel> {
        const response = await this.getPaymentPointOfSaleLocationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a terminal location
     
     */
    async postPaymentPointOfSaleLocationsRaw(requestParameters: PostPaymentPointOfSaleLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentTerminalLocationCrudModel>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentPointOfSaleLocations().'
            );
        }

        if (requestParameters['paymentTerminalLocationCrudModelRestApiCreate'] == null) {
            throw new runtime.RequiredError(
                'paymentTerminalLocationCrudModelRestApiCreate',
                'Required parameter "paymentTerminalLocationCrudModelRestApiCreate" was null or undefined when calling postPaymentPointOfSaleLocations().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/point-of-sale/locations`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/point-of-sale/locations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentTerminalLocationCrudModelRestApiCreateToJSON(requestParameters['paymentTerminalLocationCrudModelRestApiCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentTerminalLocationCrudModelFromJSON(jsonValue));
    }

    /**
     * Create a terminal location
     
     */
    async postPaymentPointOfSaleLocations(requestParameters: PostPaymentPointOfSaleLocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentTerminalLocationCrudModel> {
        const response = await this.postPaymentPointOfSaleLocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
