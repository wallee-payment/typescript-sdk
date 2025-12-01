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
  Customer,
  CustomerActive,
  CustomerCreate,
  CustomerEmailAddressListResponse,
  CustomerListResponse,
  CustomerSearchResponse,
  RestApiBulkOperationResult,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    CustomerFromJSON,
    CustomerToJSON,
    CustomerActiveFromJSON,
    CustomerActiveToJSON,
    CustomerCreateFromJSON,
    CustomerCreateToJSON,
    CustomerEmailAddressListResponseFromJSON,
    CustomerEmailAddressListResponseToJSON,
    CustomerListResponseFromJSON,
    CustomerListResponseToJSON,
    CustomerSearchResponseFromJSON,
    CustomerSearchResponseToJSON,
    RestApiBulkOperationResultFromJSON,
    RestApiBulkOperationResultToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteCustomersBulkRequest {
    space: number;
    requestBody: Array<number>;
}

export interface DeleteCustomersIdRequest {
    id: number;
    space: number;
}

export interface GetCustomersRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetCustomersIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetCustomersIdEmailAddressesRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetCustomersSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchCustomersBulkRequest {
    space: number;
    customerActive: Array<CustomerActive>;
}

export interface PatchCustomersIdRequest {
    id: number;
    space: number;
    customerActive: CustomerActive;
    expand?: Set<string>;
}

export interface PostCustomersRequest {
    space: number;
    customerCreate: CustomerCreate;
    expand?: Set<string>;
}

export interface PostCustomersBulkRequest {
    space: number;
    customerCreate: Array<CustomerCreate>;
}

export interface PostCustomersIdMergeOtherRequest {
    id: number;
    other: number;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class CustomersService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete multiple customers
     
     */
    async deleteCustomersBulkRaw(requestParameters: DeleteCustomersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApiBulkOperationResult>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteCustomersBulk().'
            );
        }

        if (requestParameters['requestBody'] == null) {
            throw new runtime.RequiredError(
                'requestBody',
                'Required parameter "requestBody" was null or undefined when calling deleteCustomersBulk().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/customers/bulk`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/bulk`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApiBulkOperationResultFromJSON));
    }

    /**
     * Delete multiple customers
     
     */
    async deleteCustomersBulk(requestParameters: DeleteCustomersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApiBulkOperationResult>> {
        const response = await this.deleteCustomersBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Permanently deletes a customer. It cannot be undone.
     * Delete a customer
     
     */
    async deleteCustomersIdRaw(requestParameters: DeleteCustomersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteCustomersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteCustomersId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes a customer. It cannot be undone.
     * Delete a customer
     
     */
    async deleteCustomersId(requestParameters: DeleteCustomersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomersIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all customers
     
     */
    async getCustomersRaw(requestParameters: GetCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomers().'
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
        const path = `/customers`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerListResponseFromJSON(jsonValue));
    }

    /**
     * List all customers
     
     */
    async getCustomers(requestParameters: GetCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerListResponse> {
        const response = await this.getCustomersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a customer
     
     */
    async getCustomersIdRaw(requestParameters: GetCustomersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getCustomersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomersId().'
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
        const path = `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Retrieve a customer
     
     */
    async getCustomersId(requestParameters: GetCustomersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.getCustomersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List a customer\'s email addresses
     
     */
    async getCustomersIdEmailAddressesRaw(requestParameters: GetCustomersIdEmailAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerEmailAddressListResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getCustomersIdEmailAddresses().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomersIdEmailAddresses().'
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
        const path = `/customers/{id}/email-addresses`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{id}/email-addresses`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerEmailAddressListResponseFromJSON(jsonValue));
    }

    /**
     * List a customer\'s email addresses
     
     */
    async getCustomersIdEmailAddresses(requestParameters: GetCustomersIdEmailAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerEmailAddressListResponse> {
        const response = await this.getCustomersIdEmailAddressesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search customers
     
     */
    async getCustomersSearchRaw(requestParameters: GetCustomersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getCustomersSearch().'
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
        const path = `/customers/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search customers
     
     */
    async getCustomersSearch(requestParameters: GetCustomersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerSearchResponse> {
        const response = await this.getCustomersSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update multiple customers
     
     */
    async patchCustomersBulkRaw(requestParameters: PatchCustomersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApiBulkOperationResult>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchCustomersBulk().'
            );
        }

        if (requestParameters['customerActive'] == null) {
            throw new runtime.RequiredError(
                'customerActive',
                'Required parameter "customerActive" was null or undefined when calling patchCustomersBulk().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/customers/bulk`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/bulk`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['customerActive']!.map(CustomerActiveToJSON),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApiBulkOperationResultFromJSON));
    }

    /**
     * Update multiple customers
     
     */
    async patchCustomersBulk(requestParameters: PatchCustomersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApiBulkOperationResult>> {
        const response = await this.patchCustomersBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a customer
     
     */
    async patchCustomersIdRaw(requestParameters: PatchCustomersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchCustomersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchCustomersId().'
            );
        }

        if (requestParameters['customerActive'] == null) {
            throw new runtime.RequiredError(
                'customerActive',
                'Required parameter "customerActive" was null or undefined when calling patchCustomersId().'
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
        const path = `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerActiveToJSON(requestParameters['customerActive']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Update a customer
     
     */
    async patchCustomersId(requestParameters: PatchCustomersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.patchCustomersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a customer
     
     */
    async postCustomersRaw(requestParameters: PostCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postCustomers().'
            );
        }

        if (requestParameters['customerCreate'] == null) {
            throw new runtime.RequiredError(
                'customerCreate',
                'Required parameter "customerCreate" was null or undefined when calling postCustomers().'
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
        const path = `/customers`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerCreateToJSON(requestParameters['customerCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Create a customer
     
     */
    async postCustomers(requestParameters: PostCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.postCustomersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create multiple customers
     
     */
    async postCustomersBulkRaw(requestParameters: PostCustomersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RestApiBulkOperationResult>>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postCustomersBulk().'
            );
        }

        if (requestParameters['customerCreate'] == null) {
            throw new runtime.RequiredError(
                'customerCreate',
                'Required parameter "customerCreate" was null or undefined when calling postCustomersBulk().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/customers/bulk`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/bulk`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['customerCreate']!.map(CustomerCreateToJSON),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RestApiBulkOperationResultFromJSON));
    }

    /**
     * Create multiple customers
     
     */
    async postCustomersBulk(requestParameters: PostCustomersBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RestApiBulkOperationResult>> {
        const response = await this.postCustomersBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Merge two customers
     
     */
    async postCustomersIdMergeOtherRaw(requestParameters: PostCustomersIdMergeOtherRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postCustomersIdMergeOther().'
            );
        }

        if (requestParameters['other'] == null) {
            throw new runtime.RequiredError(
                'other',
                'Required parameter "other" was null or undefined when calling postCustomersIdMergeOther().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postCustomersIdMergeOther().'
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
        const path = `/customers/{id}/merge/{other}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"other"}}`, encodeURIComponent(String(requestParameters['other'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/customers/{id}/merge/{other}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"other"}}`, encodeURIComponent(String(requestParameters['other']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Merge two customers
     
     */
    async postCustomersIdMergeOther(requestParameters: PostCustomersIdMergeOtherRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.postCustomersIdMergeOtherRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
