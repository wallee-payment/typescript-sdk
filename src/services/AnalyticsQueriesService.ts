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
  AnalyticsQueryExecutionRequest,
  AnalyticsQueryExecutionResponse,
  RestApiErrorResponse,
  ResultPortionModel,
  SubmittedAnalyticsQueryExecution,
} from '../models/index';
import {
    AnalyticsQueryExecutionRequestFromJSON,
    AnalyticsQueryExecutionRequestToJSON,
    AnalyticsQueryExecutionResponseFromJSON,
    AnalyticsQueryExecutionResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    ResultPortionModelFromJSON,
    ResultPortionModelToJSON,
    SubmittedAnalyticsQueryExecutionFromJSON,
    SubmittedAnalyticsQueryExecutionToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteAnalyticsQueriesQueryExternalIdQueryExternalIdRequest {
    queryExternalId: string;
    account: number;
}

export interface DeleteAnalyticsQueriesQueryTokenQueryTokenRequest {
    queryToken: string;
    account: number;
}

export interface GetAnalyticsQueriesRequest {
    offset: number;
    limit: number;
    account: number;
}

export interface GetAnalyticsQueriesQueryExternalIdQueryExternalIdRequest {
    queryExternalId: string;
    account: number;
}

export interface GetAnalyticsQueriesQueryExternalIdQueryExternalIdResultRequest {
    queryExternalId: string;
    account: number;
}

export interface GetAnalyticsQueriesQueryTokenQueryTokenRequest {
    queryToken: string;
    account: number;
}

export interface GetAnalyticsQueriesQueryTokenQueryTokenResultRequest {
    queryToken: string;
    account: number;
}

export interface PostAnalyticsQueriesSubmitRequest {
    queryExternalId: string;
    account: number;
    analyticsQueryExecutionRequest: AnalyticsQueryExecutionRequest;
}

/**
 * 
 */
export class AnalyticsQueriesService extends runtime.BaseAPI {
    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Cancel a query execution, identifying it by its external id.
     
     */
    async deleteAnalyticsQueriesQueryExternalIdQueryExternalIdRaw(requestParameters: DeleteAnalyticsQueriesQueryExternalIdQueryExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['queryExternalId'] == null) {
            throw new runtime.RequiredError(
                'queryExternalId',
                'Required parameter "queryExternalId" was null or undefined when calling deleteAnalyticsQueriesQueryExternalIdQueryExternalId().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling deleteAnalyticsQueriesQueryExternalIdQueryExternalId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'DELETE';
        const path = `/analytics/queries/queryExternalId/{queryExternalId}`.replace(`{${"queryExternalId"}}`, encodeURIComponent(String(requestParameters['queryExternalId'])));

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
     * Cancel a query execution, identifying it by its external id.
     
     */
    async deleteAnalyticsQueriesQueryExternalIdQueryExternalId(requestParameters: DeleteAnalyticsQueriesQueryExternalIdQueryExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAnalyticsQueriesQueryExternalIdQueryExternalIdRaw(requestParameters, initOverrides);
    }

    /**
     * Cancel a query execution, identifying it by its query token.
     
     */
    async deleteAnalyticsQueriesQueryTokenQueryTokenRaw(requestParameters: DeleteAnalyticsQueriesQueryTokenQueryTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['queryToken'] == null) {
            throw new runtime.RequiredError(
                'queryToken',
                'Required parameter "queryToken" was null or undefined when calling deleteAnalyticsQueriesQueryTokenQueryToken().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling deleteAnalyticsQueriesQueryTokenQueryToken().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'DELETE';
        const path = `/analytics/queries/queryToken/{queryToken}`.replace(`{${"queryToken"}}`, encodeURIComponent(String(requestParameters['queryToken'])));

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
     * Cancel a query execution, identifying it by its query token.
     
     */
    async deleteAnalyticsQueriesQueryTokenQueryToken(requestParameters: DeleteAnalyticsQueriesQueryTokenQueryTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAnalyticsQueriesQueryTokenQueryTokenRaw(requestParameters, initOverrides);
    }

    /**
     * Get portion of query executions for account
     
     */
    async getAnalyticsQueriesRaw(requestParameters: GetAnalyticsQueriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultPortionModel>> {
        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling getAnalyticsQueries().'
            );
        }

        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling getAnalyticsQueries().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getAnalyticsQueries().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/analytics/queries`;

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

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultPortionModelFromJSON(jsonValue));
    }

    /**
     * Get portion of query executions for account
     
     */
    async getAnalyticsQueries(requestParameters: GetAnalyticsQueriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultPortionModel> {
        const response = await this.getAnalyticsQueriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Queries are processed asynchronously and may take several minutes to complete. Avoid frequent requests, as they will not speed up processing.
     * Retrieve a query execution information by its external id
     
     * (The read time out for this request is 97 seconds)
     */
    async getAnalyticsQueriesQueryExternalIdQueryExternalIdRaw(requestParameters: GetAnalyticsQueriesQueryExternalIdQueryExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubmittedAnalyticsQueryExecution>> {
        if (requestParameters['queryExternalId'] == null) {
            throw new runtime.RequiredError(
                'queryExternalId',
                'Required parameter "queryExternalId" was null or undefined when calling getAnalyticsQueriesQueryExternalIdQueryExternalId().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getAnalyticsQueriesQueryExternalIdQueryExternalId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/analytics/queries/queryExternalId/{queryExternalId}`.replace(`{${"queryExternalId"}}`, encodeURIComponent(String(requestParameters['queryExternalId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = 97;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubmittedAnalyticsQueryExecutionFromJSON(jsonValue));
    }

    /**
     * Queries are processed asynchronously and may take several minutes to complete. Avoid frequent requests, as they will not speed up processing.
     * Retrieve a query execution information by its external id
     
     * (The read time out for this request is 97 seconds)
     */
    async getAnalyticsQueriesQueryExternalIdQueryExternalId(requestParameters: GetAnalyticsQueriesQueryExternalIdQueryExternalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubmittedAnalyticsQueryExecution> {
        const response = await this.getAnalyticsQueriesQueryExternalIdQueryExternalIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate a short-lived (5-minute) URL for downloading the Analytics query result file. Note that each URL generation is counted as a potential download and will be billed accordingly. Do not use this endpoint for periodic checks of file availability. Instead, use the \'Retrieve a query execution\' endpoint for status checks.
     * Generate a temporary URL to download the query result. It retrieves the query by its external id
     
     */
    async getAnalyticsQueriesQueryExternalIdQueryExternalIdResultRaw(requestParameters: GetAnalyticsQueriesQueryExternalIdQueryExternalIdResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['queryExternalId'] == null) {
            throw new runtime.RequiredError(
                'queryExternalId',
                'Required parameter "queryExternalId" was null or undefined when calling getAnalyticsQueriesQueryExternalIdQueryExternalIdResult().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getAnalyticsQueriesQueryExternalIdQueryExternalIdResult().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/analytics/queries/queryExternalId/{queryExternalId}/result`.replace(`{${"queryExternalId"}}`, encodeURIComponent(String(requestParameters['queryExternalId'])));

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

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Generate a short-lived (5-minute) URL for downloading the Analytics query result file. Note that each URL generation is counted as a potential download and will be billed accordingly. Do not use this endpoint for periodic checks of file availability. Instead, use the \'Retrieve a query execution\' endpoint for status checks.
     * Generate a temporary URL to download the query result. It retrieves the query by its external id
     
     */
    async getAnalyticsQueriesQueryExternalIdQueryExternalIdResult(requestParameters: GetAnalyticsQueriesQueryExternalIdQueryExternalIdResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string | null | undefined > {
        const response = await this.getAnalyticsQueriesQueryExternalIdQueryExternalIdResultRaw(requestParameters, initOverrides);
        switch (response.raw.status) {
            case 200:
                return await response.value();
            case 202:
                return null;
            case 204:
                return null;
            default:
                return await response.value();
        }
    }

    /**
     * Queries are processed asynchronously and may take several minutes to complete. Avoid frequent requests, as they will not speed up processing.
     * Retrieve a query execution information by its query token
     
     * (The read time out for this request is 97 seconds)
     */
    async getAnalyticsQueriesQueryTokenQueryTokenRaw(requestParameters: GetAnalyticsQueriesQueryTokenQueryTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubmittedAnalyticsQueryExecution>> {
        if (requestParameters['queryToken'] == null) {
            throw new runtime.RequiredError(
                'queryToken',
                'Required parameter "queryToken" was null or undefined when calling getAnalyticsQueriesQueryTokenQueryToken().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getAnalyticsQueriesQueryTokenQueryToken().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/analytics/queries/queryToken/{queryToken}`.replace(`{${"queryToken"}}`, encodeURIComponent(String(requestParameters['queryToken'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = 97;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: path,
            method: method,
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubmittedAnalyticsQueryExecutionFromJSON(jsonValue));
    }

    /**
     * Queries are processed asynchronously and may take several minutes to complete. Avoid frequent requests, as they will not speed up processing.
     * Retrieve a query execution information by its query token
     
     * (The read time out for this request is 97 seconds)
     */
    async getAnalyticsQueriesQueryTokenQueryToken(requestParameters: GetAnalyticsQueriesQueryTokenQueryTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubmittedAnalyticsQueryExecution> {
        const response = await this.getAnalyticsQueriesQueryTokenQueryTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate a short-lived (5-minute) URL for downloading the Analytics query result file. Note that each URL generation is counted as a potential download and will be billed accordingly. Do not use this endpoint for periodic checks of file availability. Instead, use the \'Retrieve a query execution\' endpoint for status checks.
     * Generate a temporary URL to download the query result. It retrieves the query by its query token
     
     */
    async getAnalyticsQueriesQueryTokenQueryTokenResultRaw(requestParameters: GetAnalyticsQueriesQueryTokenQueryTokenResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['queryToken'] == null) {
            throw new runtime.RequiredError(
                'queryToken',
                'Required parameter "queryToken" was null or undefined when calling getAnalyticsQueriesQueryTokenQueryTokenResult().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling getAnalyticsQueriesQueryTokenQueryTokenResult().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'GET';
        const path = `/analytics/queries/queryToken/{queryToken}/result`.replace(`{${"queryToken"}}`, encodeURIComponent(String(requestParameters['queryToken'])));

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

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Generate a short-lived (5-minute) URL for downloading the Analytics query result file. Note that each URL generation is counted as a potential download and will be billed accordingly. Do not use this endpoint for periodic checks of file availability. Instead, use the \'Retrieve a query execution\' endpoint for status checks.
     * Generate a temporary URL to download the query result. It retrieves the query by its query token
     
     */
    async getAnalyticsQueriesQueryTokenQueryTokenResult(requestParameters: GetAnalyticsQueriesQueryTokenQueryTokenResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string | null | undefined > {
        const response = await this.getAnalyticsQueriesQueryTokenQueryTokenResultRaw(requestParameters, initOverrides);
        switch (response.raw.status) {
            case 200:
                return await response.value();
            case 202:
                return null;
            case 204:
                return null;
            default:
                return await response.value();
        }
    }

    /**
     * Submit a query execution
     
     */
    async postAnalyticsQueriesSubmitRaw(requestParameters: PostAnalyticsQueriesSubmitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyticsQueryExecutionResponse>> {
        if (requestParameters['queryExternalId'] == null) {
            throw new runtime.RequiredError(
                'queryExternalId',
                'Required parameter "queryExternalId" was null or undefined when calling postAnalyticsQueriesSubmit().'
            );
        }

        if (requestParameters['account'] == null) {
            throw new runtime.RequiredError(
                'account',
                'Required parameter "account" was null or undefined when calling postAnalyticsQueriesSubmit().'
            );
        }

        if (requestParameters['analyticsQueryExecutionRequest'] == null) {
            throw new runtime.RequiredError(
                'analyticsQueryExecutionRequest',
                'Required parameter "analyticsQueryExecutionRequest" was null or undefined when calling postAnalyticsQueriesSubmit().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['queryExternalId'] != null) {
            queryParameters['queryExternalId'] = requestParameters['queryExternalId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (requestParameters['account'] != null) {
            headerParameters['Account'] = String(requestParameters['account']);
        }

        const method = 'POST';
        const path = `/analytics/queries/submit`;

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
            body: AnalyticsQueryExecutionRequestToJSON(requestParameters['analyticsQueryExecutionRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnalyticsQueryExecutionResponseFromJSON(jsonValue));
    }

    /**
     * Submit a query execution
     
     */
    async postAnalyticsQueriesSubmit(requestParameters: PostAnalyticsQueriesSubmitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyticsQueryExecutionResponse> {
        const response = await this.postAnalyticsQueriesSubmitRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
