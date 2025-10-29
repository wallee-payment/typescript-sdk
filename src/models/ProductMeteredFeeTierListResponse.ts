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
import type { ProductMeteredTierFee } from './ProductMeteredTierFee';
import {
    ProductMeteredTierFeeFromJSON,
    ProductMeteredTierFeeFromJSONTyped,
    ProductMeteredTierFeeToJSON,
} from './ProductMeteredTierFee';

/**
 * 
 * @export
 * @interface ProductMeteredFeeTierListResponse
 */
export interface ProductMeteredFeeTierListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<ProductMeteredTierFee>}
     * @memberof ProductMeteredFeeTierListResponse
     */
    readonly data?: Array<ProductMeteredTierFee>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ProductMeteredFeeTierListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ProductMeteredFeeTierListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ProductMeteredFeeTierListResponse interface.
 */
export function instanceOfProductMeteredFeeTierListResponse(value: object): value is ProductMeteredFeeTierListResponse {
    return true;
}

export function ProductMeteredFeeTierListResponseFromJSON(json: any): ProductMeteredFeeTierListResponse {
    return ProductMeteredFeeTierListResponseFromJSONTyped(json, false);
}

export function ProductMeteredFeeTierListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeteredFeeTierListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ProductMeteredTierFeeFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ProductMeteredFeeTierListResponseToJSON(value?: Omit<ProductMeteredFeeTierListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

