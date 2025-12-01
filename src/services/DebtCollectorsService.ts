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
  DebtCollector,
  DebtCollectorListResponse,
  DebtCollectorSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    DebtCollectorFromJSON,
    DebtCollectorToJSON,
    DebtCollectorListResponseFromJSON,
    DebtCollectorListResponseToJSON,
    DebtCollectorSearchResponseFromJSON,
    DebtCollectorSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetDebtCollectionCollectorsRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetDebtCollectionCollectorsIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetDebtCollectionCollectorsSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class DebtCollectorsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all debt collectors
     
     */
    async getDebtCollectionCollectorsRaw(requestParameters: GetDebtCollectionCollectorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectorListResponse>> {
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

        const method = 'GET';
        const path = `/debt-collection/collectors`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/collectors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectorListResponseFromJSON(jsonValue));
    }

    /**
     * List all debt collectors
     
     */
    async getDebtCollectionCollectors(requestParameters: GetDebtCollectionCollectorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectorListResponse> {
        const response = await this.getDebtCollectionCollectorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a debt collector
     
     */
    async getDebtCollectionCollectorsIdRaw(requestParameters: GetDebtCollectionCollectorsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollector>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getDebtCollectionCollectorsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/debt-collection/collectors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/collectors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectorFromJSON(jsonValue));
    }

    /**
     * Retrieve a debt collector
     
     */
    async getDebtCollectionCollectorsId(requestParameters: GetDebtCollectionCollectorsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollector> {
        const response = await this.getDebtCollectionCollectorsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search debt collectors
     
     */
    async getDebtCollectionCollectorsSearchRaw(requestParameters: GetDebtCollectionCollectorsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectorSearchResponse>> {
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

        const method = 'GET';
        const path = `/debt-collection/collectors/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/collectors/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectorSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search debt collectors
     
     */
    async getDebtCollectionCollectorsSearch(requestParameters: GetDebtCollectionCollectorsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectorSearchResponse> {
        const response = await this.getDebtCollectionCollectorsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
