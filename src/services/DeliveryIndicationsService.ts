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
  DeliveryIndication,
  DeliveryIndicationListResponse,
  DeliveryIndicationSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    DeliveryIndicationFromJSON,
    DeliveryIndicationToJSON,
    DeliveryIndicationListResponseFromJSON,
    DeliveryIndicationListResponseToJSON,
    DeliveryIndicationSearchResponseFromJSON,
    DeliveryIndicationSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentDeliveryIndicationsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetPaymentDeliveryIndicationsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetPaymentDeliveryIndicationsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostPaymentDeliveryIndicationsIdMarkNotSuitableRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostPaymentDeliveryIndicationsIdMarkSuitableRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class DeliveryIndicationsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all delivery indications
     
     */
    async getPaymentDeliveryIndicationsRaw(requestParameters: GetPaymentDeliveryIndicationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeliveryIndicationListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentDeliveryIndications().'
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
        const path = `/payment/delivery-indications`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeliveryIndicationListResponseFromJSON(jsonValue));
    }

    /**
     * List all delivery indications
     
     */
    async getPaymentDeliveryIndications(requestParameters: GetPaymentDeliveryIndicationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeliveryIndicationListResponse> {
        const response = await this.getPaymentDeliveryIndicationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a delivery indication
     
     */
    async getPaymentDeliveryIndicationsIdRaw(requestParameters: GetPaymentDeliveryIndicationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeliveryIndication>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPaymentDeliveryIndicationsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentDeliveryIndicationsId().'
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
        const path = `/payment/delivery-indications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeliveryIndicationFromJSON(jsonValue));
    }

    /**
     * Retrieve a delivery indication
     
     */
    async getPaymentDeliveryIndicationsId(requestParameters: GetPaymentDeliveryIndicationsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeliveryIndication> {
        const response = await this.getPaymentDeliveryIndicationsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search delivery indications
     
     */
    async getPaymentDeliveryIndicationsSearchRaw(requestParameters: GetPaymentDeliveryIndicationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeliveryIndicationSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentDeliveryIndicationsSearch().'
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
        const path = `/payment/delivery-indications/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeliveryIndicationSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search delivery indications
     
     */
    async getPaymentDeliveryIndicationsSearch(requestParameters: GetPaymentDeliveryIndicationsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeliveryIndicationSearchResponse> {
        const response = await this.getPaymentDeliveryIndicationsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a delivery indication as not suitable.
     
     */
    async postPaymentDeliveryIndicationsIdMarkNotSuitableRaw(requestParameters: PostPaymentDeliveryIndicationsIdMarkNotSuitableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeliveryIndication>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentDeliveryIndicationsIdMarkNotSuitable().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentDeliveryIndicationsIdMarkNotSuitable().'
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

        const method = 'POST';
        const path = `/payment/delivery-indications/{id}/mark-not-suitable`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeliveryIndicationFromJSON(jsonValue));
    }

    /**
     * Mark a delivery indication as not suitable.
     
     */
    async postPaymentDeliveryIndicationsIdMarkNotSuitable(requestParameters: PostPaymentDeliveryIndicationsIdMarkNotSuitableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeliveryIndication> {
        const response = await this.postPaymentDeliveryIndicationsIdMarkNotSuitableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a delivery indication as suitable.
     
     */
    async postPaymentDeliveryIndicationsIdMarkSuitableRaw(requestParameters: PostPaymentDeliveryIndicationsIdMarkSuitableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeliveryIndication>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentDeliveryIndicationsIdMarkSuitable().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentDeliveryIndicationsIdMarkSuitable().'
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

        const method = 'POST';
        const path = `/payment/delivery-indications/{id}/mark-suitable`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeliveryIndicationFromJSON(jsonValue));
    }

    /**
     * Mark a delivery indication as suitable.
     
     */
    async postPaymentDeliveryIndicationsIdMarkSuitable(requestParameters: PostPaymentDeliveryIndicationsIdMarkSuitableRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeliveryIndication> {
        const response = await this.postPaymentDeliveryIndicationsIdMarkSuitableRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
