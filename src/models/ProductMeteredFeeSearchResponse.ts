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
 * @interface ProductMeteredFeeSearchResponse
 */
export interface ProductMeteredFeeSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<ProductMeteredFee>}
     * @memberof ProductMeteredFeeSearchResponse
     */
    readonly data?: Array<ProductMeteredFee>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof ProductMeteredFeeSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ProductMeteredFeeSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ProductMeteredFeeSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ProductMeteredFeeSearchResponse interface.
 */
export function instanceOfProductMeteredFeeSearchResponse(value: object): value is ProductMeteredFeeSearchResponse {
    return true;
}

export function ProductMeteredFeeSearchResponseFromJSON(json: any): ProductMeteredFeeSearchResponse {
    return ProductMeteredFeeSearchResponseFromJSONTyped(json, false);
}

export function ProductMeteredFeeSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeteredFeeSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ProductMeteredFeeFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ProductMeteredFeeSearchResponseToJSON(json: any): ProductMeteredFeeSearchResponse {
    return ProductMeteredFeeSearchResponseToJSONTyped(json, false);
}

export function ProductMeteredFeeSearchResponseToJSONTyped(value?: Omit<ProductMeteredFeeSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

