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
  MetricListResponse,
  MetricSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  SubscriptionMetric,
  SubscriptionMetricActive,
  SubscriptionMetricCreate,
} from '../models/index';
import {
    MetricListResponseFromJSON,
    MetricListResponseToJSON,
    MetricSearchResponseFromJSON,
    MetricSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionMetricFromJSON,
    SubscriptionMetricToJSON,
    SubscriptionMetricActiveFromJSON,
    SubscriptionMetricActiveToJSON,
    SubscriptionMetricCreateFromJSON,
    SubscriptionMetricCreateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSubscriptionsMetricsIdRequest {
    id: number;
    space: number;
}

export interface GetSubscriptionsMetricsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsMetricsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsMetricsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsMetricsIdRequest {
    id: number;
    space: number;
    subscriptionMetricActive: SubscriptionMetricActive;
    expand?: Set<string>;
}

export interface PostSubscriptionsMetricsRequest {
    space: number;
    subscriptionMetricCreate: SubscriptionMetricCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionMetricsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a metric
     
     */
    async deleteSubscriptionsMetricsIdRaw(requestParameters: DeleteSubscriptionsMetricsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSubscriptionsMetricsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSubscriptionsMetricsId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/subscriptions/metrics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/metrics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a metric
     
     */
    async deleteSubscriptionsMetricsId(requestParameters: DeleteSubscriptionsMetricsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSubscriptionsMetricsIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all metrics
     
     */
    async getSubscriptionsMetricsRaw(requestParameters: GetSubscriptionsMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsMetrics().'
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
        const path = `/subscriptions/metrics`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/metrics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricListResponseFromJSON(jsonValue));
    }

    /**
     * List all metrics
     
     */
    async getSubscriptionsMetrics(requestParameters: GetSubscriptionsMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricListResponse> {
        const response = await this.getSubscriptionsMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a metric
     
     */
    async getSubscriptionsMetricsIdRaw(requestParameters: GetSubscriptionsMetricsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionMetric>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsMetricsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsMetricsId().'
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
        const path = `/subscriptions/metrics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/metrics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionMetricFromJSON(jsonValue));
    }

    /**
     * Retrieve a metric
     
     */
    async getSubscriptionsMetricsId(requestParameters: GetSubscriptionsMetricsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionMetric> {
        const response = await this.getSubscriptionsMetricsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search metrics
     
     */
    async getSubscriptionsMetricsSearchRaw(requestParameters: GetSubscriptionsMetricsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsMetricsSearch().'
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
        const path = `/subscriptions/metrics/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/metrics/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search metrics
     
     */
    async getSubscriptionsMetricsSearch(requestParameters: GetSubscriptionsMetricsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricSearchResponse> {
        const response = await this.getSubscriptionsMetricsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a metric
     
     */
    async patchSubscriptionsMetricsIdRaw(requestParameters: PatchSubscriptionsMetricsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionMetric>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsMetricsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsMetricsId().'
            );
        }

        if (requestParameters['subscriptionMetricActive'] == null) {
            throw new runtime.RequiredError(
                'subscriptionMetricActive',
                'Required parameter "subscriptionMetricActive" was null or undefined when calling patchSubscriptionsMetricsId().'
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
        const path = `/subscriptions/metrics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/metrics/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionMetricActiveToJSON(requestParameters['subscriptionMetricActive']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionMetricFromJSON(jsonValue));
    }

    /**
     * Update a metric
     
     */
    async patchSubscriptionsMetricsId(requestParameters: PatchSubscriptionsMetricsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionMetric> {
        const response = await this.patchSubscriptionsMetricsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a metric
     
     */
    async postSubscriptionsMetricsRaw(requestParameters: PostSubscriptionsMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionMetric>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsMetrics().'
            );
        }

        if (requestParameters['subscriptionMetricCreate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionMetricCreate',
                'Required parameter "subscriptionMetricCreate" was null or undefined when calling postSubscriptionsMetrics().'
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
        const path = `/subscriptions/metrics`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/metrics`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionMetricCreateToJSON(requestParameters['subscriptionMetricCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionMetricFromJSON(jsonValue));
    }

    /**
     * Create a metric
     
     */
    async postSubscriptionsMetrics(requestParameters: PostSubscriptionsMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionMetric> {
        const response = await this.postSubscriptionsMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
