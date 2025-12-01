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
  InvoiceSearchResponse,
  RestApiErrorResponse,
  SortingOrder,
  Subscription,
  SubscriptionCharge,
  SubscriptionCreateRequest,
  SubscriptionInitializeSubscriberPresentRequest,
  SubscriptionListResponse,
  SubscriptionSearchResponse,
  SubscriptionSuspension,
  SubscriptionUpdateRequest,
  SubscriptionVersion,
  SuspensionCreationRequest,
} from '../models/index';
import {
    InvoiceSearchResponseFromJSON,
    InvoiceSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
    SubscriptionFromJSON,
    SubscriptionToJSON,
    SubscriptionChargeFromJSON,
    SubscriptionChargeToJSON,
    SubscriptionCreateRequestFromJSON,
    SubscriptionCreateRequestToJSON,
    SubscriptionInitializeSubscriberPresentRequestFromJSON,
    SubscriptionInitializeSubscriberPresentRequestToJSON,
    SubscriptionListResponseFromJSON,
    SubscriptionListResponseToJSON,
    SubscriptionSearchResponseFromJSON,
    SubscriptionSearchResponseToJSON,
    SubscriptionSuspensionFromJSON,
    SubscriptionSuspensionToJSON,
    SubscriptionUpdateRequestFromJSON,
    SubscriptionUpdateRequestToJSON,
    SubscriptionVersionFromJSON,
    SubscriptionVersionToJSON,
    SuspensionCreationRequestFromJSON,
    SuspensionCreationRequestToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetSubscriptionsRequest {
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsIdRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsIdInvoicesRequest {
    id: number;
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface GetSubscriptionsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsIdRequest {
    id: number;
    space: number;
    subscriptionUpdateRequest: SubscriptionUpdateRequest;
    expand?: Set<string>;
}

export interface PostSubscriptionsRequest {
    space: number;
    subscriptionCreateRequest: SubscriptionCreateRequest;
    expand?: Set<string>;
}

export interface PostSubscriptionsIdApplyChangesRequest {
    id: number;
    space: number;
    subscriptionUpdateRequest: SubscriptionUpdateRequest;
    expand?: Set<string>;
}

export interface PostSubscriptionsIdInitializeRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface PostSubscriptionsIdInitializeSubscriberPresentRequest {
    id: number;
    space: number;
    subscriptionInitializeSubscriberPresentRequest: SubscriptionInitializeSubscriberPresentRequest;
    expand?: Set<string>;
}

export interface PostSubscriptionsIdReactivateRequest {
    id: number;
    space: number;
}

export interface PostSubscriptionsIdSuspendRequest {
    id: number;
    space: number;
    suspensionCreationRequest: SuspensionCreationRequest;
    expand?: Set<string>;
}

export interface PostSubscriptionsIdTerminateRequest {
    id: number;
    respectTerminationPeriod: boolean;
    space: number;
}

export interface PostSubscriptionsIdUpgradeProductRequest {
    id: number;
    respectTerminationPeriod: boolean;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * List all subscriptions
     
     */
    async getSubscriptionsRaw(requestParameters: GetSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionListResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptions().'
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
        const path = `/subscriptions`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionListResponseFromJSON(jsonValue));
    }

    /**
     * List all subscriptions
     
     */
    async getSubscriptions(requestParameters: GetSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionListResponse> {
        const response = await this.getSubscriptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a subscription
     
     */
    async getSubscriptionsIdRaw(requestParameters: GetSubscriptionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscription>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsId().'
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
        const path = `/subscriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionFromJSON(jsonValue));
    }

    /**
     * Retrieve a subscription
     
     */
    async getSubscriptionsId(requestParameters: GetSubscriptionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscription> {
        const response = await this.getSubscriptionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search subscription invoices
     
     */
    async getSubscriptionsIdInvoicesRaw(requestParameters: GetSubscriptionsIdInvoicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InvoiceSearchResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsIdInvoices().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsIdInvoices().'
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
        const path = `/subscriptions/{id}/invoices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}/invoices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search subscription invoices
     
     */
    async getSubscriptionsIdInvoices(requestParameters: GetSubscriptionsIdInvoicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InvoiceSearchResponse> {
        const response = await this.getSubscriptionsIdInvoicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search subscriptions
     
     */
    async getSubscriptionsSearchRaw(requestParameters: GetSubscriptionsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsSearch().'
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
        const path = `/subscriptions/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search subscriptions
     
     */
    async getSubscriptionsSearch(requestParameters: GetSubscriptionsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSearchResponse> {
        const response = await this.getSubscriptionsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a subscription
     
     */
    async patchSubscriptionsIdRaw(requestParameters: PatchSubscriptionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscription>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsId().'
            );
        }

        if (requestParameters['subscriptionUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'subscriptionUpdateRequest',
                'Required parameter "subscriptionUpdateRequest" was null or undefined when calling patchSubscriptionsId().'
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
        const path = `/subscriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionUpdateRequestToJSON(requestParameters['subscriptionUpdateRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionFromJSON(jsonValue));
    }

    /**
     * Update a subscription
     
     */
    async patchSubscriptionsId(requestParameters: PatchSubscriptionsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscription> {
        const response = await this.patchSubscriptionsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a subscription
     
     */
    async postSubscriptionsRaw(requestParameters: PostSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionVersion>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptions().'
            );
        }

        if (requestParameters['subscriptionCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'subscriptionCreateRequest',
                'Required parameter "subscriptionCreateRequest" was null or undefined when calling postSubscriptions().'
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
        const path = `/subscriptions`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionCreateRequestToJSON(requestParameters['subscriptionCreateRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionVersionFromJSON(jsonValue));
    }

    /**
     * Create a subscription
     
     */
    async postSubscriptions(requestParameters: PostSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionVersion> {
        const response = await this.postSubscriptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Apply changes to a subscription
     
     */
    async postSubscriptionsIdApplyChangesRaw(requestParameters: PostSubscriptionsIdApplyChangesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionVersion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsIdApplyChanges().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsIdApplyChanges().'
            );
        }

        if (requestParameters['subscriptionUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'subscriptionUpdateRequest',
                'Required parameter "subscriptionUpdateRequest" was null or undefined when calling postSubscriptionsIdApplyChanges().'
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
        const path = `/subscriptions/{id}/apply-changes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}/apply-changes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionUpdateRequestToJSON(requestParameters['subscriptionUpdateRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionVersionFromJSON(jsonValue));
    }

    /**
     * Apply changes to a subscription
     
     */
    async postSubscriptionsIdApplyChanges(requestParameters: PostSubscriptionsIdApplyChangesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionVersion> {
        const response = await this.postSubscriptionsIdApplyChangesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Initialize a subscription
     
     */
    async postSubscriptionsIdInitializeRaw(requestParameters: PostSubscriptionsIdInitializeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionCharge>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsIdInitialize().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsIdInitialize().'
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
        const path = `/subscriptions/{id}/initialize`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}/initialize`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionChargeFromJSON(jsonValue));
    }

    /**
     * Initialize a subscription
     
     */
    async postSubscriptionsIdInitialize(requestParameters: PostSubscriptionsIdInitializeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionCharge> {
        const response = await this.postSubscriptionsIdInitializeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Initialize a subscription with the subscriber present
     
     */
    async postSubscriptionsIdInitializeSubscriberPresentRaw(requestParameters: PostSubscriptionsIdInitializeSubscriberPresentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionCharge>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsIdInitializeSubscriberPresent().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsIdInitializeSubscriberPresent().'
            );
        }

        if (requestParameters['subscriptionInitializeSubscriberPresentRequest'] == null) {
            throw new runtime.RequiredError(
                'subscriptionInitializeSubscriberPresentRequest',
                'Required parameter "subscriptionInitializeSubscriberPresentRequest" was null or undefined when calling postSubscriptionsIdInitializeSubscriberPresent().'
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
        const path = `/subscriptions/{id}/initialize-subscriber-present`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}/initialize-subscriber-present`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionInitializeSubscriberPresentRequestToJSON(requestParameters['subscriptionInitializeSubscriberPresentRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionChargeFromJSON(jsonValue));
    }

    /**
     * Initialize a subscription with the subscriber present
     
     */
    async postSubscriptionsIdInitializeSubscriberPresent(requestParameters: PostSubscriptionsIdInitializeSubscriberPresentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionCharge> {
        const response = await this.postSubscriptionsIdInitializeSubscriberPresentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reactivate a suspended subscription
     
     */
    async postSubscriptionsIdReactivateRaw(requestParameters: PostSubscriptionsIdReactivateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsIdReactivate().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsIdReactivate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/subscriptions/{id}/reactivate`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}/reactivate`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Reactivate a suspended subscription
     
     */
    async postSubscriptionsIdReactivate(requestParameters: PostSubscriptionsIdReactivateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSubscriptionsIdReactivateRaw(requestParameters, initOverrides);
    }

    /**
     * Suspend a subscription
     
     */
    async postSubscriptionsIdSuspendRaw(requestParameters: PostSubscriptionsIdSuspendRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSuspension>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsIdSuspend().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsIdSuspend().'
            );
        }

        if (requestParameters['suspensionCreationRequest'] == null) {
            throw new runtime.RequiredError(
                'suspensionCreationRequest',
                'Required parameter "suspensionCreationRequest" was null or undefined when calling postSubscriptionsIdSuspend().'
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
        const path = `/subscriptions/{id}/suspend`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}/suspend`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SuspensionCreationRequestToJSON(requestParameters['suspensionCreationRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionSuspensionFromJSON(jsonValue));
    }

    /**
     * Suspend a subscription
     
     */
    async postSubscriptionsIdSuspend(requestParameters: PostSubscriptionsIdSuspendRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSuspension> {
        const response = await this.postSubscriptionsIdSuspendRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Terminate a subscription
     
     */
    async postSubscriptionsIdTerminateRaw(requestParameters: PostSubscriptionsIdTerminateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsIdTerminate().'
            );
        }

        if (requestParameters['respectTerminationPeriod'] == null) {
            throw new runtime.RequiredError(
                'respectTerminationPeriod',
                'Required parameter "respectTerminationPeriod" was null or undefined when calling postSubscriptionsIdTerminate().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsIdTerminate().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['respectTerminationPeriod'] != null) {
            queryParameters['respectTerminationPeriod'] = requestParameters['respectTerminationPeriod'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/subscriptions/{id}/terminate`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}/terminate`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Terminate a subscription
     
     */
    async postSubscriptionsIdTerminate(requestParameters: PostSubscriptionsIdTerminateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postSubscriptionsIdTerminateRaw(requestParameters, initOverrides);
    }

    /**
     * Upgrade a subscription\'s product
     
     */
    async postSubscriptionsIdUpgradeProductRaw(requestParameters: PostSubscriptionsIdUpgradeProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionVersion>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postSubscriptionsIdUpgradeProduct().'
            );
        }

        if (requestParameters['respectTerminationPeriod'] == null) {
            throw new runtime.RequiredError(
                'respectTerminationPeriod',
                'Required parameter "respectTerminationPeriod" was null or undefined when calling postSubscriptionsIdUpgradeProduct().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsIdUpgradeProduct().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['respectTerminationPeriod'] != null) {
            queryParameters['respectTerminationPeriod'] = requestParameters['respectTerminationPeriod'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/subscriptions/{id}/upgrade-product`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/{id}/upgrade-product`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionVersionFromJSON(jsonValue));
    }

    /**
     * Upgrade a subscription\'s product
     
     */
    async postSubscriptionsIdUpgradeProduct(requestParameters: PostSubscriptionsIdUpgradeProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionVersion> {
        const response = await this.postSubscriptionsIdUpgradeProductRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
