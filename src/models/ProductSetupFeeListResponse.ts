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
import type { ProductSetupFee } from './ProductSetupFee';
import {
    ProductSetupFeeFromJSON,
    ProductSetupFeeFromJSONTyped,
    ProductSetupFeeToJSON,
} from './ProductSetupFee';

/**
 * 
 * @export
 * @interface ProductSetupFeeListResponse
 */
export interface ProductSetupFeeListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<ProductSetupFee>}
     * @memberof ProductSetupFeeListResponse
     */
    readonly data?: Array<ProductSetupFee>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ProductSetupFeeListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ProductSetupFeeListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ProductSetupFeeListResponse interface.
 */
export function instanceOfProductSetupFeeListResponse(value: object): value is ProductSetupFeeListResponse {
    return true;
}

export function ProductSetupFeeListResponseFromJSON(json: any): ProductSetupFeeListResponse {
    return ProductSetupFeeListResponseFromJSONTyped(json, false);
}

export function ProductSetupFeeListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSetupFeeListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ProductSetupFeeFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ProductSetupFeeListResponseToJSON(value?: Omit<ProductSetupFeeListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

