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
  MetricUsageReportListResponse,
  MetricUsageReportSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  SubscriptionMetricUsageReport,
  SubscriptionMetricUsageReportCreate,
} from '../models/index';
import {
    MetricUsageReportListResponseFromJSON,
    MetricUsageReportListResponseToJSON,
    MetricUsageReportSearchResponseFromJSON,
    MetricUsageReportSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionMetricUsageReportFromJSON,
    SubscriptionMetricUsageReportToJSON,
    SubscriptionMetricUsageReportCreateFromJSON,
    SubscriptionMetricUsageReportCreateToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetSubscriptionsMetricUsageReportsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsMetricUsageReportsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsMetricUsageReportsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PostSubscriptionsMetricUsageReportsRequest {
    space: number;
    subscriptionMetricUsageReportCreate: SubscriptionMetricUsageReportCreate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionMetricUsageReportsService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all metric usage reports
     
     */
    async getSubscriptionsMetricUsageReportsRaw(requestParameters: GetSubscriptionsMetricUsageReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricUsageReportListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsMetricUsageReports().'
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
        const path = `/subscriptions/metric-usage-reports`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricUsageReportListResponseFromJSON(jsonValue));
    }

    /**
     * List all metric usage reports
     
     */
    async getSubscriptionsMetricUsageReports(requestParameters: GetSubscriptionsMetricUsageReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricUsageReportListResponse> {
        const response = await this.getSubscriptionsMetricUsageReportsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a metric usage report
     
     */
    async getSubscriptionsMetricUsageReportsIdRaw(requestParameters: GetSubscriptionsMetricUsageReportsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionMetricUsageReport>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsMetricUsageReportsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsMetricUsageReportsId().'
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
        const path = `/subscriptions/metric-usage-reports/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

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

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionMetricUsageReportFromJSON(jsonValue));
    }

    /**
     * Retrieve a metric usage report
     
     */
    async getSubscriptionsMetricUsageReportsId(requestParameters: GetSubscriptionsMetricUsageReportsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionMetricUsageReport> {
        const response = await this.getSubscriptionsMetricUsageReportsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search metric usage reports
     
     */
    async getSubscriptionsMetricUsageReportsSearchRaw(requestParameters: GetSubscriptionsMetricUsageReportsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricUsageReportSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsMetricUsageReportsSearch().'
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
        const path = `/subscriptions/metric-usage-reports/search`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricUsageReportSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search metric usage reports
     
     */
    async getSubscriptionsMetricUsageReportsSearch(requestParameters: GetSubscriptionsMetricUsageReportsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricUsageReportSearchResponse> {
        const response = await this.getSubscriptionsMetricUsageReportsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a metric usage report
     
     */
    async postSubscriptionsMetricUsageReportsRaw(requestParameters: PostSubscriptionsMetricUsageReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionMetricUsageReport>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsMetricUsageReports().'
            );
        }

        if (requestParameters['subscriptionMetricUsageReportCreate'] == null) {
            throw new runtime.RequiredError(
                'subscriptionMetricUsageReportCreate',
                'Required parameter "subscriptionMetricUsageReportCreate" was null or undefined when calling postSubscriptionsMetricUsageReports().'
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
        const path = `/subscriptions/metric-usage-reports`;

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
            body: SubscriptionMetricUsageReportCreateToJSON(requestParameters['subscriptionMetricUsageReportCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionMetricUsageReportFromJSON(jsonValue));
    }

    /**
     * Create a metric usage report
     
     */
    async postSubscriptionsMetricUsageReports(requestParameters: PostSubscriptionsMetricUsageReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionMetricUsageReport> {
        const response = await this.postSubscriptionsMetricUsageReportsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
