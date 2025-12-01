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
  DebtCollectionCase,
  DebtCollectionCaseCreate,
  DebtCollectionCaseDocument,
  DebtCollectionCaseDocumentListResponse,
  DebtCollectionCaseListResponse,
  DebtCollectionCaseSearchResponse,
  DebtCollectionCaseUpdate,
  DebtCollectionReceipt,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    DebtCollectionCaseFromJSON,
    DebtCollectionCaseToJSON,
    DebtCollectionCaseCreateFromJSON,
    DebtCollectionCaseCreateToJSON,
    DebtCollectionCaseDocumentFromJSON,
    DebtCollectionCaseDocumentToJSON,
    DebtCollectionCaseDocumentListResponseFromJSON,
    DebtCollectionCaseDocumentListResponseToJSON,
    DebtCollectionCaseListResponseFromJSON,
    DebtCollectionCaseListResponseToJSON,
    DebtCollectionCaseSearchResponseFromJSON,
    DebtCollectionCaseSearchResponseToJSON,
    DebtCollectionCaseUpdateFromJSON,
    DebtCollectionCaseUpdateToJSON,
    DebtCollectionReceiptFromJSON,
    DebtCollectionReceiptToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteDebtCollectionCasesIdRequest {
    id: number;
    space: number;
}

export interface GetDebtCollectionCasesRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetDebtCollectionCasesIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetDebtCollectionCasesIdDocumentsRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetDebtCollectionCasesSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchDebtCollectionCasesIdRequest {
    id: number;
    space: number;
    debtCollectionCaseUpdate: DebtCollectionCaseUpdate;
    expand?: Set<string>;
}

export interface PostDebtCollectionCasesRequest {
    space: number;
    debtCollectionCaseCreate: DebtCollectionCaseCreate;
    expand?: Set<string>;
}

export interface PostDebtCollectionCasesIdCloseRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostDebtCollectionCasesIdDocumentsRequest {
    id: number;
    fileName: string;
    content: string;
    space: number;
    expand?: Set<string>;
}

export interface PostDebtCollectionCasesIdMarkPreparedRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostDebtCollectionCasesIdMarkReviewedRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostDebtCollectionCasesIdPaymentReceiptsRequest {
    id: number;
    collectedAmount: number;
    externalId: string;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class DebtCollectionCasesService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a debt collection case
     
     */
    async deleteDebtCollectionCasesIdRaw(requestParameters: DeleteDebtCollectionCasesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteDebtCollectionCasesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteDebtCollectionCasesId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/debt-collection/cases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a debt collection case
     
     */
    async deleteDebtCollectionCasesId(requestParameters: DeleteDebtCollectionCasesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDebtCollectionCasesIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all debt collection cases
     
     */
    async getDebtCollectionCasesRaw(requestParameters: GetDebtCollectionCasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCaseListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getDebtCollectionCases().'
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
        const path = `/debt-collection/cases`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseListResponseFromJSON(jsonValue));
    }

    /**
     * List all debt collection cases
     
     */
    async getDebtCollectionCases(requestParameters: GetDebtCollectionCasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCaseListResponse> {
        const response = await this.getDebtCollectionCasesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a debt collection case
     
     */
    async getDebtCollectionCasesIdRaw(requestParameters: GetDebtCollectionCasesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCase>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getDebtCollectionCasesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getDebtCollectionCasesId().'
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
        const path = `/debt-collection/cases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseFromJSON(jsonValue));
    }

    /**
     * Retrieve a debt collection case
     
     */
    async getDebtCollectionCasesId(requestParameters: GetDebtCollectionCasesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCase> {
        const response = await this.getDebtCollectionCasesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve all documents of a debt collection case
     
     */
    async getDebtCollectionCasesIdDocumentsRaw(requestParameters: GetDebtCollectionCasesIdDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCaseDocumentListResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getDebtCollectionCasesIdDocuments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getDebtCollectionCasesIdDocuments().'
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
        const path = `/debt-collection/cases/{id}/documents`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/{id}/documents`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseDocumentListResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve all documents of a debt collection case
     
     */
    async getDebtCollectionCasesIdDocuments(requestParameters: GetDebtCollectionCasesIdDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCaseDocumentListResponse> {
        const response = await this.getDebtCollectionCasesIdDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search debt collection cases
     
     */
    async getDebtCollectionCasesSearchRaw(requestParameters: GetDebtCollectionCasesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCaseSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getDebtCollectionCasesSearch().'
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
        const path = `/debt-collection/cases/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search debt collection cases
     
     */
    async getDebtCollectionCasesSearch(requestParameters: GetDebtCollectionCasesSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCaseSearchResponse> {
        const response = await this.getDebtCollectionCasesSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a debt collection case
     
     */
    async patchDebtCollectionCasesIdRaw(requestParameters: PatchDebtCollectionCasesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCase>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchDebtCollectionCasesId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchDebtCollectionCasesId().'
            );
        }

        if (requestParameters['debtCollectionCaseUpdate'] == null) {
            throw new runtime.RequiredError(
                'debtCollectionCaseUpdate',
                'Required parameter "debtCollectionCaseUpdate" was null or undefined when calling patchDebtCollectionCasesId().'
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
        const path = `/debt-collection/cases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: DebtCollectionCaseUpdateToJSON(requestParameters['debtCollectionCaseUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseFromJSON(jsonValue));
    }

    /**
     * Update a debt collection case
     
     */
    async patchDebtCollectionCasesId(requestParameters: PatchDebtCollectionCasesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCase> {
        const response = await this.patchDebtCollectionCasesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a debt collection case
     
     */
    async postDebtCollectionCasesRaw(requestParameters: PostDebtCollectionCasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCase>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postDebtCollectionCases().'
            );
        }

        if (requestParameters['debtCollectionCaseCreate'] == null) {
            throw new runtime.RequiredError(
                'debtCollectionCaseCreate',
                'Required parameter "debtCollectionCaseCreate" was null or undefined when calling postDebtCollectionCases().'
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
        const path = `/debt-collection/cases`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DebtCollectionCaseCreateToJSON(requestParameters['debtCollectionCaseCreate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseFromJSON(jsonValue));
    }

    /**
     * Create a debt collection case
     
     */
    async postDebtCollectionCases(requestParameters: PostDebtCollectionCasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCase> {
        const response = await this.postDebtCollectionCasesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Close a debt collection case
     
     */
    async postDebtCollectionCasesIdCloseRaw(requestParameters: PostDebtCollectionCasesIdCloseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCase>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postDebtCollectionCasesIdClose().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postDebtCollectionCasesIdClose().'
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
        const path = `/debt-collection/cases/{id}/close`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/{id}/close`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseFromJSON(jsonValue));
    }

    /**
     * Close a debt collection case
     
     */
    async postDebtCollectionCasesIdClose(requestParameters: PostDebtCollectionCasesIdCloseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCase> {
        const response = await this.postDebtCollectionCasesIdCloseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Attach a document to a debt collection case
     
     */
    async postDebtCollectionCasesIdDocumentsRaw(requestParameters: PostDebtCollectionCasesIdDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCaseDocument>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postDebtCollectionCasesIdDocuments().'
            );
        }

        if (requestParameters['fileName'] == null) {
            throw new runtime.RequiredError(
                'fileName',
                'Required parameter "fileName" was null or undefined when calling postDebtCollectionCasesIdDocuments().'
            );
        }

        if (requestParameters['content'] == null) {
            throw new runtime.RequiredError(
                'content',
                'Required parameter "content" was null or undefined when calling postDebtCollectionCasesIdDocuments().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postDebtCollectionCasesIdDocuments().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fileName'] != null) {
            queryParameters['fileName'] = requestParameters['fileName'];
        }

        if (requestParameters['content'] != null) {
            queryParameters['content'] = requestParameters['content'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/debt-collection/cases/{id}/documents`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/{id}/documents`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseDocumentFromJSON(jsonValue));
    }

    /**
     * Attach a document to a debt collection case
     
     */
    async postDebtCollectionCasesIdDocuments(requestParameters: PostDebtCollectionCasesIdDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCaseDocument> {
        const response = await this.postDebtCollectionCasesIdDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a debt collection case as prepared
     
     */
    async postDebtCollectionCasesIdMarkPreparedRaw(requestParameters: PostDebtCollectionCasesIdMarkPreparedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCase>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postDebtCollectionCasesIdMarkPrepared().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postDebtCollectionCasesIdMarkPrepared().'
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
        const path = `/debt-collection/cases/{id}/mark-prepared`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/{id}/mark-prepared`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseFromJSON(jsonValue));
    }

    /**
     * Mark a debt collection case as prepared
     
     */
    async postDebtCollectionCasesIdMarkPrepared(requestParameters: PostDebtCollectionCasesIdMarkPreparedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCase> {
        const response = await this.postDebtCollectionCasesIdMarkPreparedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a debt collection case as reviewed
     
     */
    async postDebtCollectionCasesIdMarkReviewedRaw(requestParameters: PostDebtCollectionCasesIdMarkReviewedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionCase>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postDebtCollectionCasesIdMarkReviewed().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postDebtCollectionCasesIdMarkReviewed().'
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
        const path = `/debt-collection/cases/{id}/mark-reviewed`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/{id}/mark-reviewed`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionCaseFromJSON(jsonValue));
    }

    /**
     * Mark a debt collection case as reviewed
     
     */
    async postDebtCollectionCasesIdMarkReviewed(requestParameters: PostDebtCollectionCasesIdMarkReviewedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionCase> {
        const response = await this.postDebtCollectionCasesIdMarkReviewedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a payment receipt for a debt collection case
     
     */
    async postDebtCollectionCasesIdPaymentReceiptsRaw(requestParameters: PostDebtCollectionCasesIdPaymentReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtCollectionReceipt>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postDebtCollectionCasesIdPaymentReceipts().'
            );
        }

        if (requestParameters['collectedAmount'] == null) {
            throw new runtime.RequiredError(
                'collectedAmount',
                'Required parameter "collectedAmount" was null or undefined when calling postDebtCollectionCasesIdPaymentReceipts().'
            );
        }

        if (requestParameters['externalId'] == null) {
            throw new runtime.RequiredError(
                'externalId',
                'Required parameter "externalId" was null or undefined when calling postDebtCollectionCasesIdPaymentReceipts().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postDebtCollectionCasesIdPaymentReceipts().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['collectedAmount'] != null) {
            queryParameters['collectedAmount'] = requestParameters['collectedAmount'];
        }

        if (requestParameters['externalId'] != null) {
            queryParameters['externalId'] = requestParameters['externalId'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/debt-collection/cases/{id}/payment-receipts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/debt-collection/cases/{id}/payment-receipts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DebtCollectionReceiptFromJSON(jsonValue));
    }

    /**
     * Create a payment receipt for a debt collection case
     
     */
    async postDebtCollectionCasesIdPaymentReceipts(requestParameters: PostDebtCollectionCasesIdPaymentReceiptsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtCollectionReceipt> {
        const response = await this.postDebtCollectionCasesIdPaymentReceiptsRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
