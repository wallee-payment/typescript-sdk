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
  LegalOrganizationForm,
  LegalOrganizationFormListResponse,
  LegalOrganizationFormSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    LegalOrganizationFormFromJSON,
    LegalOrganizationFormToJSON,
    LegalOrganizationFormListResponseFromJSON,
    LegalOrganizationFormListResponseToJSON,
    LegalOrganizationFormSearchResponseFromJSON,
    LegalOrganizationFormSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetLegalOrganizationFormsRequest {
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetLegalOrganizationFormsIdRequest {
    id: number;
    expand?: Set<string>;
}

export interface GetLegalOrganizationFormsSearchRequest {
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

/**
 * 
 */
export class LegalOrganizationFormsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all legal organization forms
     
     */
    async getLegalOrganizationFormsRaw(requestParameters: GetLegalOrganizationFormsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LegalOrganizationFormListResponse>> {
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
        const path = `/legal-organization-forms`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/legal-organization-forms`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LegalOrganizationFormListResponseFromJSON(jsonValue));
    }

    /**
     * List all legal organization forms
     
     */
    async getLegalOrganizationForms(requestParameters: GetLegalOrganizationFormsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LegalOrganizationFormListResponse> {
        const response = await this.getLegalOrganizationFormsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a legal organization form
     
     */
    async getLegalOrganizationFormsIdRaw(requestParameters: GetLegalOrganizationFormsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LegalOrganizationForm>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getLegalOrganizationFormsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const method = 'GET';
        const path = `/legal-organization-forms/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/legal-organization-forms/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LegalOrganizationFormFromJSON(jsonValue));
    }

    /**
     * Retrieve a legal organization form
     
     */
    async getLegalOrganizationFormsId(requestParameters: GetLegalOrganizationFormsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LegalOrganizationForm> {
        const response = await this.getLegalOrganizationFormsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search legal organization forms
     
     */
    async getLegalOrganizationFormsSearchRaw(requestParameters: GetLegalOrganizationFormsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LegalOrganizationFormSearchResponse>> {
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
        const path = `/legal-organization-forms/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/legal-organization-forms/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LegalOrganizationFormSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search legal organization forms
     
     */
    async getLegalOrganizationFormsSearch(requestParameters: GetLegalOrganizationFormsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LegalOrganizationFormSearchResponse> {
        const response = await this.getLegalOrganizationFormsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
