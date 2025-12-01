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
  CustomerAddress,
  CustomerAddressActive,
  CustomerAddressCreate,
  CustomerAddressListResponse,
  CustomerAddressSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    CustomerAddressFromJSON,
    CustomerAddressToJSON,
    CustomerAddressActiveFromJSON,
    CustomerAddressActiveToJSON,
    CustomerAddressCreateFromJSON,
    CustomerAddressCreateToJSON,
    CustomerAddressListResponseFromJSON,
    CustomerAddressListResponseToJSON,
    CustomerAddressSearchResponseFromJSON,
    CustomerAddressSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteCustomersCustomerIdAddressesIdRequest {
    customerId: number;
    id: number;
    space: number;
}

export interface GetCustomersCustomerIdAddressesRequest {
    customerId: number;
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetCustomersCustomerIdAddressesIdRequest {
    customerId: number;
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetCustomersCustomerIdAddressesSearchRequest {
    customerId: number;
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchCustomersCustomerIdAddressesIdRequest {
    customerId: number;
    id: number;
    space: number;
    customerAddressActive: CustomerAddressActive;
    expand?: Set<string>;
}

export interface PostCustomersCustomerIdAddressesRequest {
    customerId: number;
    space: number;
    customerAddressCreate: CustomerAddressCreate;
    expand?: Set<string>;
}

export interface PostCustomersCustomerIdAddressesIdDefaultRequest {
    customerId: number;
    id: number;
    space: number;
}

/**
 * 
 */
export class CustomerAddressesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a customer address
     
     */
    async deleteCustomersCustomerIdAddressesIdRaw(requestParameters: DeleteCustomersCustomerIdAddressesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling deleteCustomersCustomerIdAddressesId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteCustomersCustomerIdAddressesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteCustomersCustomerIdAddressesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/customers/{customerId}/addresses/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/addresses/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a customer address
     
     */
    async deleteCustomersCustomerIdAddressesId(requestParameters: DeleteCustomersCustomerIdAddressesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomersCustomerIdAddressesIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all customer addresses
     
     */
    async getCustomersCustomerIdAddressesRaw(requestParameters: GetCustomersCustomerIdAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAddressListResponse>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling getCustomersCustomerIdAddresses().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomersCustomerIdAddresses().'
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
        const path = `/customers/{customerId}/addresses`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/addresses`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAddressListResponseFromJSON(jsonValue));
    }

    /**
     * List all customer addresses
     
     */
    async getCustomersCustomerIdAddresses(requestParameters: GetCustomersCustomerIdAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAddressListResponse> {
        const response = await this.getCustomersCustomerIdAddressesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a customer address
     
     */
    async getCustomersCustomerIdAddressesIdRaw(requestParameters: GetCustomersCustomerIdAddressesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAddress>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling getCustomersCustomerIdAddressesId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getCustomersCustomerIdAddressesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomersCustomerIdAddressesId().'
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
        const path = `/customers/{customerId}/addresses/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/addresses/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAddressFromJSON(jsonValue));
    }

    /**
     * Retrieve a customer address
     
     */
    async getCustomersCustomerIdAddressesId(requestParameters: GetCustomersCustomerIdAddressesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAddress> {
        const response = await this.getCustomersCustomerIdAddressesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search customer addresses
     
     */
    async getCustomersCustomerIdAddressesSearchRaw(requestParameters: GetCustomersCustomerIdAddressesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAddressSearchResponse>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling getCustomersCustomerIdAddressesSearch().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomersCustomerIdAddressesSearch().'
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
        const path = `/customers/{customerId}/addresses/search`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/addresses/search`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAddressSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search customer addresses
     
     */
    async getCustomersCustomerIdAddressesSearch(requestParameters: GetCustomersCustomerIdAddressesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAddressSearchResponse> {
        const response = await this.getCustomersCustomerIdAddressesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a customer address
     
     */
    async patchCustomersCustomerIdAddressesIdRaw(requestParameters: PatchCustomersCustomerIdAddressesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAddress>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling patchCustomersCustomerIdAddressesId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchCustomersCustomerIdAddressesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchCustomersCustomerIdAddressesId().'
            );
        }

        if (requestParameters['customerAddressActive'] == null) {
            throw new runtime.RequiredError(
                'customerAddressActive',
                'Required parameter "customerAddressActive" was null or undefined when calling patchCustomersCustomerIdAddressesId().'
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
        const path = `/customers/{customerId}/addresses/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/addresses/{id}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerAddressActiveToJSON(requestParameters['customerAddressActive']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAddressFromJSON(jsonValue));
    }

    /**
     * Update a customer address
     
     */
    async patchCustomersCustomerIdAddressesId(requestParameters: PatchCustomersCustomerIdAddressesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAddress> {
        const response = await this.patchCustomersCustomerIdAddressesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a customer address
     
     */
    async postCustomersCustomerIdAddressesRaw(requestParameters: PostCustomersCustomerIdAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAddress>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling postCustomersCustomerIdAddresses().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postCustomersCustomerIdAddresses().'
            );
        }

        if (requestParameters['customerAddressCreate'] == null) {
            throw new runtime.RequiredError(
                'customerAddressCreate',
                'Required parameter "customerAddressCreate" was null or undefined when calling postCustomersCustomerIdAddresses().'
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
        const path = `/customers/{customerId}/addresses`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/addresses`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerAddressCreateToJSON(requestParameters['customerAddressCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAddressFromJSON(jsonValue));
    }

    /**
     * Create a customer address
     
     */
    async postCustomersCustomerIdAddresses(requestParameters: PostCustomersCustomerIdAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAddress> {
        const response = await this.postCustomersCustomerIdAddressesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Set the default address for a customer
     
     */
    async postCustomersCustomerIdAddressesIdDefaultRaw(requestParameters: PostCustomersCustomerIdAddressesIdDefaultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling postCustomersCustomerIdAddressesIdDefault().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postCustomersCustomerIdAddressesIdDefault().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postCustomersCustomerIdAddressesIdDefault().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/customers/{customerId}/addresses/{id}/default`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{customerId}/addresses/{id}/default`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Set the default address for a customer
     
     */
    async postCustomersCustomerIdAddressesIdDefault(requestParameters: PostCustomersCustomerIdAddressesIdDefaultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCustomersCustomerIdAddressesIdDefaultRaw(requestParameters, initOverrides);
    }


}
