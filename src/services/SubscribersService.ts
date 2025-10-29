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
  RestApiErrorResponse,
  SortingOrder,
  Subscriber,
  SubscriberCreate,
  SubscriberListResponse,
  SubscriberSearchResponse,
  SubscriberUpdate,
} from '../models/index';
import {
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriberFromJSON,
    SubscriberToJSON,
    SubscriberCreateFromJSON,
    SubscriberCreateToJSON,
    SubscriberListResponseFromJSON,
    SubscriberListResponseToJSON,
    SubscriberSearchResponseFromJSON,
    SubscriberSearchResponseToJSON,
    SubscriberUpdateFromJSON,
    SubscriberUpdateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSubscriptionsSubscribersIdRequest {
    id: number;
    space: number;
}

export interface GetSubscriptionsSubscribersRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsSubscribersIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsSubscribersSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsSubscribersIdRequest {
    id: number;
    space: number;
    subscriberUpdate: SubscriberUpdate;
    expand?: Set<string>;
}

export interface PostSubscriptionsSubscribersRequest {
    space: number;
    subscriberCreate: SubscriberCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscribersService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a subscriber
     
     */
    async deleteSubscriptionsSubscribersIdRaw(requestParameters: DeleteSubscriptionsSubscribersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSubscriptionsSubscribersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSubscriptionsSubscribersId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/subscriptions/subscribers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
     * Delete a subscriber
     
     */
    async deleteSubscriptionsSubscribersId(requestParameters: DeleteSubscriptionsSubscribersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSubscriptionsSubscribersIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all subscribers
     
     */
    async getSubscriptionsSubscribersRaw(requestParameters: GetSubscriptionsSubscribersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriberListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsSubscribers().'
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
        const path = `/subscriptions/subscribers`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberListResponseFromJSON(jsonValue));
    }

    /**
     * List all subscribers
     
     */
    async getSubscriptionsSubscribers(requestParameters: GetSubscriptionsSubscribersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriberListResponse> {
        const response = await this.getSubscriptionsSubscribersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a subscriber
     
     */
    async getSubscriptionsSubscribersIdRaw(requestParameters: GetSubscriptionsSubscribersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscriber>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsSubscribersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsSubscribersId().'
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
        const path = `/subscriptions/subscribers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberFromJSON(jsonValue));
    }

    /**
     * Retrieve a subscriber
     
     */
    async getSubscriptionsSubscribersId(requestParameters: GetSubscriptionsSubscribersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscriber> {
        const response = await this.getSubscriptionsSubscribersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search subscribers
     
     */
    async getSubscriptionsSubscribersSearchRaw(requestParameters: GetSubscriptionsSubscribersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriberSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsSubscribersSearch().'
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
        const path = `/subscriptions/subscribers/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search subscribers
     
     */
    async getSubscriptionsSubscribersSearch(requestParameters: GetSubscriptionsSubscribersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriberSearchResponse> {
        const response = await this.getSubscriptionsSubscribersSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a subscriber
     
     */
    async patchSubscriptionsSubscribersIdRaw(requestParameters: PatchSubscriptionsSubscribersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscriber>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsSubscribersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsSubscribersId().'
            );
        }

        if (requestParameters['subscriberUpdate'] == null) {
            throw new runtime.RequiredError(
                'subscriberUpdate',
                'Required parameter "subscriberUpdate" was null or undefined when calling patchSubscriptionsSubscribersId().'
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
        const path = `/subscriptions/subscribers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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
            body: SubscriberUpdateToJSON(requestParameters['subscriberUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberFromJSON(jsonValue));
    }

    /**
     * Update a subscriber
     
     */
    async patchSubscriptionsSubscribersId(requestParameters: PatchSubscriptionsSubscribersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscriber> {
        const response = await this.patchSubscriptionsSubscribersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a subscriber
     
     */
    async postSubscriptionsSubscribersRaw(requestParameters: PostSubscriptionsSubscribersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscriber>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsSubscribers().'
            );
        }

        if (requestParameters['subscriberCreate'] == null) {
            throw new runtime.RequiredError(
                'subscriberCreate',
                'Required parameter "subscriberCreate" was null or undefined when calling postSubscriptionsSubscribers().'
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
        const path = `/subscriptions/subscribers`;

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
            body: SubscriberCreateToJSON(requestParameters['subscriberCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriberFromJSON(jsonValue));
    }

    /**
     * Create a subscriber
     
     */
    async postSubscriptionsSubscribers(requestParameters: PostSubscriptionsSubscribersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscriber> {
        const response = await this.postSubscriptionsSubscribersRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
