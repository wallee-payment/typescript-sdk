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
  ProductComponentListResponse,
  ProductComponentSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  SubscriptionProductComponent,
  SubscriptionProductComponentUpdate,
} from '../models/index';
import {
    ProductComponentListResponseFromJSON,
    ProductComponentListResponseToJSON,
    ProductComponentSearchResponseFromJSON,
    ProductComponentSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionProductComponentFromJSON,
    SubscriptionProductComponentToJSON,
    SubscriptionProductComponentUpdateFromJSON,
    SubscriptionProductComponentUpdateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSubscriptionsProductsComponentsIdRequest {
    id: number;
    space: number;
}

export interface GetSubscriptionsProductsComponentsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsProductsComponentsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsProductsComponentsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsProductsComponentsIdRequest {
    id: number;
    space: number;
    subscriptionProductComponentUpdate: SubscriptionProductComponentUpdate;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsComponentsRequest {
    space: number;
    subscriptionProductComponentUpdate: SubscriptionProductComponentUpdate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionProductComponentsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a component
     
     */
    async deleteSubscriptionsProductsComponentsIdRaw(requestParameters: DeleteSubscriptionsProductsComponentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSubscriptionsProductsComponentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSubscriptionsProductsComponentsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/subscriptions/products/components/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/components/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a component
     
     */
    async deleteSubscriptionsProductsComponentsId(requestParameters: DeleteSubscriptionsProductsComponentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSubscriptionsProductsComponentsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all components
     
     */
    async getSubscriptionsProductsComponentsRaw(requestParameters: GetSubscriptionsProductsComponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductComponentListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsComponents().'
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
        const path = `/subscriptions/products/components`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/components`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductComponentListResponseFromJSON(jsonValue));
    }

    /**
     * List all components
     
     */
    async getSubscriptionsProductsComponents(requestParameters: GetSubscriptionsProductsComponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductComponentListResponse> {
        const response = await this.getSubscriptionsProductsComponentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a component
     
     */
    async getSubscriptionsProductsComponentsIdRaw(requestParameters: GetSubscriptionsProductsComponentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductComponent>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsProductsComponentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsComponentsId().'
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
        const path = `/subscriptions/products/components/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/components/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductComponentFromJSON(jsonValue));
    }

    /**
     * Retrieve a component
     
     */
    async getSubscriptionsProductsComponentsId(requestParameters: GetSubscriptionsProductsComponentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductComponent> {
        const response = await this.getSubscriptionsProductsComponentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search components
     
     */
    async getSubscriptionsProductsComponentsSearchRaw(requestParameters: GetSubscriptionsProductsComponentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductComponentSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsComponentsSearch().'
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
        const path = `/subscriptions/products/components/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/components/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductComponentSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search components
     
     */
    async getSubscriptionsProductsComponentsSearch(requestParameters: GetSubscriptionsProductsComponentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductComponentSearchResponse> {
        const response = await this.getSubscriptionsProductsComponentsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a component
     
     */
    async patchSubscriptionsProductsComponentsIdRaw(requestParameters: PatchSubscriptionsProductsComponentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductComponent>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsProductsComponentsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsProductsComponentsId().'
            );
        }

        if (requestParameters['subscriptionProductComponentUpdate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductComponentUpdate',
                'Required parameter "subscriptionProductComponentUpdate" was null or undefined when calling patchSubscriptionsProductsComponentsId().'
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
        const path = `/subscriptions/products/components/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/components/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionProductComponentUpdateToJSON(requestParameters['subscriptionProductComponentUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductComponentFromJSON(jsonValue));
    }

    /**
     * Update a component
     
     */
    async patchSubscriptionsProductsComponentsId(requestParameters: PatchSubscriptionsProductsComponentsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductComponent> {
        const response = await this.patchSubscriptionsProductsComponentsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a component
     
     */
    async postSubscriptionsProductsComponentsRaw(requestParameters: PostSubscriptionsProductsComponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionProductComponent>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsComponents().'
            );
        }

        if (requestParameters['subscriptionProductComponentUpdate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionProductComponentUpdate',
                'Required parameter "subscriptionProductComponentUpdate" was null or undefined when calling postSubscriptionsProductsComponents().'
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
        const path = `/subscriptions/products/components`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/components`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionProductComponentUpdateToJSON(requestParameters['subscriptionProductComponentUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionProductComponentFromJSON(jsonValue));
    }

    /**
     * Create a component
     
     */
    async postSubscriptionsProductsComponents(requestParameters: PostSubscriptionsProductsComponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionProductComponent> {
        const response = await this.postSubscriptionsProductsComponentsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
