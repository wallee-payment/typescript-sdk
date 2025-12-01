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
  ProductMeteredFeeTierListResponse,
  ProductMeteredFeeTierSearchResponse,
  ProductMeteredTierFee,
  ProductMeteredTierFeeUpdate,
  RestApiErrorResponse,
  SortingOrder,
} from '../models/index';
import {
    ProductMeteredFeeTierListResponseFromJSON,
    ProductMeteredFeeTierListResponseToJSON,
    ProductMeteredFeeTierSearchResponseFromJSON,
    ProductMeteredFeeTierSearchResponseToJSON,
    ProductMeteredTierFeeFromJSON,
    ProductMeteredTierFeeToJSON,
    ProductMeteredTierFeeUpdateFromJSON,
    ProductMeteredTierFeeUpdateToJSON,
    RestApiErrorResponseFromJSON,
    RestApiErrorResponseToJSON,
    SortingOrderFromJSON,
    SortingOrderToJSON,
} from '../models/index';
import {ServiceApiUtils} from "../utils/ServiceApiUtils";

export interface DeleteSubscriptionsProductsMeteredFeesFeeIdTiersIdRequest {
    feeId: number;
    id: number;
    space: number;
}

export interface GetSubscriptionsProductsMeteredFeesFeeIdTiersRequest {
    feeId: number;
    space: number;
    after?: number;
    before?: number;
    expand?: Set<string>;
    limit?: number;
    order?: SortingOrder;
}

export interface GetSubscriptionsProductsMeteredFeesFeeIdTiersIdRequest {
    feeId: number;
    id: number;
    space: number;
    expand?: Set<string>;
}

export interface GetSubscriptionsProductsMeteredFeesFeeIdTiersSearchRequest {
    feeId: number;
    space: number;
    expand?: Set<string>;
    limit?: number;
    offset?: number;
    order?: string;
    query?: string;
}

export interface PatchSubscriptionsProductsMeteredFeesFeeIdTiersIdRequest {
    feeId: number;
    id: number;
    space: number;
    productMeteredTierFeeUpdate: ProductMeteredTierFeeUpdate;
    expand?: Set<string>;
}

export interface PostSubscriptionsProductsMeteredFeesFeeIdTiersRequest {
    feeId: number;
    space: number;
    productMeteredTierFeeUpdate: ProductMeteredTierFeeUpdate;
    expand?: Set<string>;
}

/**
 * 
 */
export class SubscriptionProductMeteredFeeTiersService extends runtime.BaseAPI {

    constructor(configuration: runtime.Configuration) {
        super(configuration);
    }

    /**
     * Delete a metered fee tier
     
     */
    async deleteSubscriptionsProductsMeteredFeesFeeIdTiersIdRaw(requestParameters: DeleteSubscriptionsProductsMeteredFeesFeeIdTiersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['feeId'] == null) {
            throw new runtime.RequiredError(
                'feeId',
                'Required parameter "feeId" was null or undefined when calling deleteSubscriptionsProductsMeteredFeesFeeIdTiersId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteSubscriptionsProductsMeteredFeesFeeIdTiersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling deleteSubscriptionsProductsMeteredFeesFeeIdTiersId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['space'] != null) {
            headerParameters['Space'] = String(requestParameters['space']);
        }

        const method = 'DELETE';
        const path = `/subscriptions/products/metered-fees/{feeId}/tiers/{id}`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/metered-fees/{feeId}/tiers/{id}`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a metered fee tier
     
     */
    async deleteSubscriptionsProductsMeteredFeesFeeIdTiersId(requestParameters: DeleteSubscriptionsProductsMeteredFeesFeeIdTiersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSubscriptionsProductsMeteredFeesFeeIdTiersIdRaw(requestParameters, initOverrides);
    }

    /**
     * List all metered fee tiers
     
     */
    async getSubscriptionsProductsMeteredFeesFeeIdTiersRaw(requestParameters: GetSubscriptionsProductsMeteredFeesFeeIdTiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredFeeTierListResponse>> {
        if (requestParameters['feeId'] == null) {
            throw new runtime.RequiredError(
                'feeId',
                'Required parameter "feeId" was null or undefined when calling getSubscriptionsProductsMeteredFeesFeeIdTiers().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsMeteredFeesFeeIdTiers().'
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
        const path = `/subscriptions/products/metered-fees/{feeId}/tiers`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/metered-fees/{feeId}/tiers`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredFeeTierListResponseFromJSON(jsonValue));
    }

    /**
     * List all metered fee tiers
     
     */
    async getSubscriptionsProductsMeteredFeesFeeIdTiers(requestParameters: GetSubscriptionsProductsMeteredFeesFeeIdTiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredFeeTierListResponse> {
        const response = await this.getSubscriptionsProductsMeteredFeesFeeIdTiersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a metered fee tier
     
     */
    async getSubscriptionsProductsMeteredFeesFeeIdTiersIdRaw(requestParameters: GetSubscriptionsProductsMeteredFeesFeeIdTiersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredTierFee>> {
        if (requestParameters['feeId'] == null) {
            throw new runtime.RequiredError(
                'feeId',
                'Required parameter "feeId" was null or undefined when calling getSubscriptionsProductsMeteredFeesFeeIdTiersId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSubscriptionsProductsMeteredFeesFeeIdTiersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsMeteredFeesFeeIdTiersId().'
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
        const path = `/subscriptions/products/metered-fees/{feeId}/tiers/{id}`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/metered-fees/{feeId}/tiers/{id}`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredTierFeeFromJSON(jsonValue));
    }

    /**
     * Retrieve a metered fee tier
     
     */
    async getSubscriptionsProductsMeteredFeesFeeIdTiersId(requestParameters: GetSubscriptionsProductsMeteredFeesFeeIdTiersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredTierFee> {
        const response = await this.getSubscriptionsProductsMeteredFeesFeeIdTiersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search metered fee tiers
     
     */
    async getSubscriptionsProductsMeteredFeesFeeIdTiersSearchRaw(requestParameters: GetSubscriptionsProductsMeteredFeesFeeIdTiersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredFeeTierSearchResponse>> {
        if (requestParameters['feeId'] == null) {
            throw new runtime.RequiredError(
                'feeId',
                'Required parameter "feeId" was null or undefined when calling getSubscriptionsProductsMeteredFeesFeeIdTiersSearch().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling getSubscriptionsProductsMeteredFeesFeeIdTiersSearch().'
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
        const path = `/subscriptions/products/metered-fees/{feeId}/tiers/search`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/metered-fees/{feeId}/tiers/search`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredFeeTierSearchResponseFromJSON(jsonValue));
    }

    /**
     * Search metered fee tiers
     
     */
    async getSubscriptionsProductsMeteredFeesFeeIdTiersSearch(requestParameters: GetSubscriptionsProductsMeteredFeesFeeIdTiersSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredFeeTierSearchResponse> {
        const response = await this.getSubscriptionsProductsMeteredFeesFeeIdTiersSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a metered fee tier
     
     */
    async patchSubscriptionsProductsMeteredFeesFeeIdTiersIdRaw(requestParameters: PatchSubscriptionsProductsMeteredFeesFeeIdTiersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredTierFee>> {
        if (requestParameters['feeId'] == null) {
            throw new runtime.RequiredError(
                'feeId',
                'Required parameter "feeId" was null or undefined when calling patchSubscriptionsProductsMeteredFeesFeeIdTiersId().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling patchSubscriptionsProductsMeteredFeesFeeIdTiersId().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling patchSubscriptionsProductsMeteredFeesFeeIdTiersId().'
            );
        }

        if (requestParameters['productMeteredTierFeeUpdate'] == null) {
            throw new runtime.RequiredError(
                'productMeteredTierFeeUpdate',
                'Required parameter "productMeteredTierFeeUpdate" was null or undefined when calling patchSubscriptionsProductsMeteredFeesFeeIdTiersId().'
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
        const path = `/subscriptions/products/metered-fees/{feeId}/tiers/{id}`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/metered-fees/{feeId}/tiers/{id}`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProductMeteredTierFeeUpdateToJSON(requestParameters['productMeteredTierFeeUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredTierFeeFromJSON(jsonValue));
    }

    /**
     * Update a metered fee tier
     
     */
    async patchSubscriptionsProductsMeteredFeesFeeIdTiersId(requestParameters: PatchSubscriptionsProductsMeteredFeesFeeIdTiersIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredTierFee> {
        const response = await this.patchSubscriptionsProductsMeteredFeesFeeIdTiersIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a metered fee tier
     
     */
    async postSubscriptionsProductsMeteredFeesFeeIdTiersRaw(requestParameters: PostSubscriptionsProductsMeteredFeesFeeIdTiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductMeteredTierFee>> {
        if (requestParameters['feeId'] == null) {
            throw new runtime.RequiredError(
                'feeId',
                'Required parameter "feeId" was null or undefined when calling postSubscriptionsProductsMeteredFeesFeeIdTiers().'
            );
        }

        if (requestParameters['space'] == null) {
            throw new runtime.RequiredError(
                'space',
                'Required parameter "space" was null or undefined when calling postSubscriptionsProductsMeteredFeesFeeIdTiers().'
            );
        }

        if (requestParameters['productMeteredTierFeeUpdate'] == null) {
            throw new runtime.RequiredError(
                'productMeteredTierFeeUpdate',
                'Required parameter "productMeteredTierFeeUpdate" was null or undefined when calling postSubscriptionsProductsMeteredFeesFeeIdTiers().'
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
        const path = `/subscriptions/products/metered-fees/{feeId}/tiers`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId'])));

        if (this.configuration.httpBearerAuth) {
            await this.configuration.httpBearerAuth.applyToRequest(path, method, queryParameters, headerParameters);
        }

        // Set per-request timeout in initOverrides: use the incoming parameter or fall back to the Configuration value
        const requestTimeoutInSeconds = this.configuration.requestTimeout;
        const updatedInitOverrides = await ServiceApiUtils.adjustRequestSignalAsync(initOverrides, requestTimeoutInSeconds);

        const response = await this.request({
            path: `/subscriptions/products/metered-fees/{feeId}/tiers`.replace(`{${"feeId"}}`, encodeURIComponent(String(requestParameters['feeId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductMeteredTierFeeUpdateToJSON(requestParameters['productMeteredTierFeeUpdate']),
        }, updatedInitOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductMeteredTierFeeFromJSON(jsonValue));
    }

    /**
     * Create a metered fee tier
     
     */
    async postSubscriptionsProductsMeteredFeesFeeIdTiers(requestParameters: PostSubscriptionsProductsMeteredFeesFeeIdTiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductMeteredTierFee> {
        const response = await this.postSubscriptionsProductsMeteredFeesFeeIdTiersRaw(requestParameters, initOverrides);
        return await response.value();
    }


}
