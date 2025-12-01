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
  MetricUsageListResponse,
  RestApiErrorResponse,
} from '../models/index';
import {
    MetricUsageListResponseFromJSON,
    MetricUsageListResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetSpacesConsumedResourcesRequest {
    startDate: Date;
    endDate: Date;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class ConsumedResourcesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List consumed resources
     
     */
    async getSpacesConsumedResourcesRaw(requestParameters: GetSpacesConsumedResourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricUsageListResponse>> {
        if (requestParameters['startDate'] == null) {
            throw new runtime.RequiredError(
                'startDate',
                'Required parameter "startDate" was null or undefined when calling getSpacesConsumedResources().'
            );
        }

        if (requestParameters['endDate'] == null) {
            throw new runtime.RequiredError(
                'endDate',
                'Required parameter "endDate" was null or undefined when calling getSpacesConsumedResources().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSpacesConsumedResources().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['startDate'] != null) {
            queryParameters['startDate'] = (requestParameters['startDate'] as any).toISOString();
        }

        if (requestParameters['endDate'] != null) {
            queryParameters['endDate'] = (requestParameters['endDate'] as any).toISOString();
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/spaces/consumed-resources`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/spaces/consumed-resources`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricUsageListResponseFromJSON(jsonValue));
    }

    /**
     * List consumed resources
     
     */
    async getSpacesConsumedResources(requestParameters: GetSpacesConsumedResourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricUsageListResponse> {
        const response = await this.getSpacesConsumedResourcesRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
