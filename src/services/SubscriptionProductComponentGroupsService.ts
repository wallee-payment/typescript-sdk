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
  ProductComponentGroupListResponse,
  ProductComponentGroupSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  SubscriptionProductComponentGroup,
  SubscriptionProductComponentGroupUpdate,
} from '../models/index';
import {
    ProductComponentGroupListResponseFromJSON,
    ProductComponentGroupListResponseToJSON,
    ProductComponentGroupSearchResponseFromJSON,
    ProductComponentGroupSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionProductComponentGroupFromJSON,
    SubscriptionProductComponentGroupToJSON,
    SubscriptionProductComponentGroupUpdateFromJSON,
    SubscriptionProductComponentGroupUpdateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSubscriptionsProductsComponentGroupsIdRequest {
    id: number;
    space: number;
}

export interface GetSubscriptionsProductsComponentGroupsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsProductsComponentGroupsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsProductsComponentGroupsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsProductsComponentGroupsIdRequest {
    id: number;
    space: number;
    subscriptionProductComponentGroupUpdate: SubscriptionProductComponentGroupUpdate;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsComponentGroupsRequest {
    space: number;
    subscriptionProductComponentGroupUpdate: SubscriptionProductComponentGroupUpdate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionProductComponentGroupsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a component group
     
     */
    async deleteSubscriptionsProductsComponentGroupsIdRaw(requestParameters: DeleteSubscriptionsProductsComponentGroupsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSubscriptionsProductsComponentGroupsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSubscriptionsProductsComponentGroupsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/subscriptions/products/component-groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Delete a component group
     
     */
    async deleteSubscriptionsProductsComponentGroupsId(requestParameters: DeleteSubscriptionsProductsComponentGroupsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSubscriptionsProductsComponentGroupsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all component groups
     
     */
    async getSubscriptionsProductsComponentGroupsRaw(requestParameters: GetSubscriptionsProductsComponentGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductComponentGroupListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsComponentGroups().'
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
        const path = `/subscriptions/products/component-groups`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductComponentGroupListResponseFromJSON(jsonValue));
    }

    /**
     * List all component groups
     
     */
    async getSubscriptionsProductsComponentGroups(requestParameters: GetSubscriptionsProductsComponentGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductComponentGroupListResponse> {
        const response = await this.getSubscriptionsProductsComponentGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a component group
     
     */
    async getSubscriptionsProductsComponentGroupsIdRaw(requestParameters: GetSubscriptionsProductsComponentGroupsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductComponentGroup>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsProductsComponentGroupsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsComponentGroupsId().'
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
        const path = `/subscriptions/products/component-groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductComponentGroupFromJSON(jsonValue));
    }

    /**
     * Retrieve a component group
     
     */
    async getSubscriptionsProductsComponentGroupsId(requestParameters: GetSubscriptionsProductsComponentGroupsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductComponentGroup> {
        const response = await this.getSubscriptionsProductsComponentGroupsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search component groups
     
     */
    async getSubscriptionsProductsComponentGroupsSearchRaw(requestParameters: GetSubscriptionsProductsComponentGroupsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductComponentGroupSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsComponentGroupsSearch().'
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
        const path = `/subscriptions/products/component-groups/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductComponentGroupSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search component groups
     
     */
    async getSubscriptionsProductsComponentGroupsSearch(requestParameters: GetSubscriptionsProductsComponentGroupsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductComponentGroupSearchResponse> {
        const response = await this.getSubscriptionsProductsComponentGroupsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a component group
     
     */
    async patchSubscriptionsProductsComponentGroupsIdRaw(requestParameters: PatchSubscriptionsProductsComponentGroupsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductComponentGroup>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsProductsComponentGroupsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsProductsComponentGroupsId().'
            );
        }

        if (requestParameters['subscriptionProductComponentGroupUpdate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductComponentGroupUpdate',
                'Required parameter "subscriptionProductComponentGroupUpdate" was null or undefined when calling patchSubscriptionsProductsComponentGroupsId().'
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
        const path = `/subscriptions/products/component-groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: SubscriptionProductComponentGroupUpdateToJSON(requestParameters['subscriptionProductComponentGroupUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductComponentGroupFromJSON(jsonValue));
    }

    /**
     * Update a component group
     
     */
    async patchSubscriptionsProductsComponentGroupsId(requestParameters: PatchSubscriptionsProductsComponentGroupsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductComponentGroup> {
        const response = await this.patchSubscriptionsProductsComponentGroupsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a component group
     
     */
    async postSubscriptionsProductsComponentGroupsRaw(requestParameters: PostSubscriptionsProductsComponentGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductComponentGroup>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsComponentGroups().'
            );
        }

        if (requestParameters['subscriptionProductComponentGroupUpdate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductComponentGroupUpdate',
                'Required parameter "subscriptionProductComponentGroupUpdate" was null or undefined when calling postSubscriptionsProductsComponentGroups().'
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
        const path = `/subscriptions/products/component-groups`;

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
            body: SubscriptionProductComponentGroupUpdateToJSON(requestParameters['subscriptionProductComponentGroupUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductComponentGroupFromJSON(jsonValue));
    }

    /**
     * Create a component group
     
     */
    async postSubscriptionsProductsComponentGroups(requestParameters: PostSubscriptionsProductsComponentGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductComponentGroup> {
        const response = await this.postSubscriptionsProductsComponentGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
