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
import { mapValues } from '../runtime';
import type { ProductMeteredFee } from './ProductMeteredFee';
import {
    ProductMeteredFeeFromJSON,
    ProductMeteredFeeFromJSONTyped,
    ProductMeteredFeeToJSON,
    ProductMeteredFeeToJSONTyped,
} from './ProductMeteredFee';

/**
 * 
 * @export
 * @interface ProductMeteredFeeListResponse
 */
export interface ProductMeteredFeeListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<ProductMeteredFee>}
     * @memberof ProductMeteredFeeListResponse
     */
    readonly data?: Array<ProductMeteredFee>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ProductMeteredFeeListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ProductMeteredFeeListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ProductMeteredFeeListResponse interface.
 */
export function instanceOfProductMeteredFeeListResponse(value: object): value is ProductMeteredFeeListResponse {
    return true;
}

export function ProductMeteredFeeListResponseFromJSON(json: any): ProductMeteredFeeListResponse {
    return ProductMeteredFeeListResponseFromJSONTyped(json, false);
}

export function ProductMeteredFeeListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeteredFeeListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ProductMeteredFeeFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ProductMeteredFeeListResponseToJSON(json: any): ProductMeteredFeeListResponse {
    return ProductMeteredFeeListResponseToJSONTyped(json, false);
}

export function ProductMeteredFeeListResponseToJSONTyped(value?: Omit<ProductMeteredFeeListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

