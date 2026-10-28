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
  CreateFulfillmentRequest,
  Fulfillment,
  FulfillmentSearchResponse,
  RestApiErrorResponse,
  TrackingNumberRequest,
} from '../models/index';
import {
    CreateFulfillmentRequestFromJSON,
    CreateFulfillmentRequestToJSON,
    FulfillmentFromJSON,
    FulfillmentToJSON,
    FulfillmentSearchResponseFromJSON,
    FulfillmentSearchResponseToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    TrackingNumberRequestFromJSON,
    TrackingNumberRequestToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface GetPaymentFacilitatorFulfillmentsSearchRequest {
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchPaymentFacilitatorFulfillmentsIdTrackingNumberRequest {
    id: number;
    space: number;
    trackingNumberRequest: TrackingNumberRequest;
    expand?: Set<string>;
}

export interface PostPaymentFacilitatorFulfillmentsRequest {
    space: number;
    createFulfillmentRequest: CreateFulfillmentRequest;
    expand?: Set<string>;
}

export interface PostPaymentFacilitatorFulfillmentsIdConfirmInStorePickupRequest {
    id: number;
    space: number;
    expand?: Set<string>;
}

/**
 * 
 */
export class FulfillmentsService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Search fulfillments
     
     */
    async getPaymentFacilitatorFulfillmentsSearchRaw(requestParameters: GetPaymentFacilitatorFulfillmentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FulfillmentSearchResponse>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getPaymentFacilitatorFulfillmentsSearch().'
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
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'GET';
        const path = `/payment/facilitator/fulfillments/search`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/facilitator/fulfillments/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FulfillmentSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search fulfillments
     
     */
    async getPaymentFacilitatorFulfillmentsSearch(requestParameters: GetPaymentFacilitatorFulfillmentsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FulfillmentSearchResponse> {
        const response = await this.getPaymentFacilitatorFulfillmentsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update tracking number
     
     */
    async patchPaymentFacilitatorFulfillmentsIdTrackingNumberRaw(requestParameters: PatchPaymentFacilitatorFulfillmentsIdTrackingNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Fulfillment>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchPaymentFacilitatorFulfillmentsIdTrackingNumber().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchPaymentFacilitatorFulfillmentsIdTrackingNumber().'
            );
        }

        if (requestParameters['trackingNumberRequest'] == null) {
            throw new runtime.RequiredError(
                'trackingNumberRequest',
                'Required parameter "trackingNumberRequest" was null or undefined when calling patchPaymentFacilitatorFulfillmentsIdTrackingNumber().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'PATCH';
        const path = `/payment/facilitator/fulfillments/{id}/tracking-number`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/facilitator/fulfillments/{id}/tracking-number`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TrackingNumberRequestToJSON(requestParameters['trackingNumberRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FulfillmentFromJSON(jsonValue));
    }

    /**
     * Update tracking number
     
     */
    async patchPaymentFacilitatorFulfillmentsIdTrackingNumber(requestParameters: PatchPaymentFacilitatorFulfillmentsIdTrackingNumberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Fulfillment> {
        const response = await this.patchPaymentFacilitatorFulfillmentsIdTrackingNumberRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a fulfillment
     
     */
    async postPaymentFacilitatorFulfillmentsRaw(requestParameters: PostPaymentFacilitatorFulfillmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Fulfillment>> {
        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentFacilitatorFulfillments().'
            );
        }

        if (requestParameters['createFulfillmentRequest'] == null) {
            throw new runtime.RequiredError(
                'createFulfillmentRequest',
                'Required parameter "createFulfillmentRequest" was null or undefined when calling postPaymentFacilitatorFulfillments().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/facilitator/fulfillments`;

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/facilitator/fulfillments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFulfillmentRequestToJSON(requestParameters['createFulfillmentRequest']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FulfillmentFromJSON(jsonValue));
    }

    /**
     * Create a fulfillment
     
     */
    async postPaymentFacilitatorFulfillments(requestParameters: PostPaymentFacilitatorFulfillmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Fulfillment> {
        const response = await this.postPaymentFacilitatorFulfillmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Confirm in-store pickup
     
     */
    async postPaymentFacilitatorFulfillmentsIdConfirmInStorePickupRaw(requestParameters: PostPaymentFacilitatorFulfillmentsIdConfirmInStorePickupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Fulfillment>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling postPaymentFacilitatorFulfillmentsIdConfirmInStorePickup().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postPaymentFacilitatorFulfillmentsIdConfirmInStorePickup().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['space'] = String(requestParameters['space']);
        }

        const method = 'POST';
        const path = `/payment/facilitator/fulfillments/{id}/confirm-in-store-pickup`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/payment/facilitator/fulfillments/{id}/confirm-in-store-pickup`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FulfillmentFromJSON(jsonValue));
    }

    /**
     * Confirm in-store pickup
     
     */
    async postPaymentFacilitatorFulfillmentsIdConfirmInStorePickup(requestParameters: PostPaymentFacilitatorFulfillmentsIdConfirmInStorePickupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Fulfillment> {
        const response = await this.postPaymentFacilitatorFulfillmentsIdConfirmInStorePickupRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
