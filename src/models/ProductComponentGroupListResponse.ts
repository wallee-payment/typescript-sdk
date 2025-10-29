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
import type { SubscriptionProductComponentGroup } from './SubscriptionProductComponentGroup';
import {
    SubscriptionProductComponentGroupFromJSON,
    SubscriptionProductComponentGroupFromJSONTyped,
    SubscriptionProductComponentGroupToJSON,
} from './SubscriptionProductComponentGroup';

/**
 * 
 * @export
 * @interface ProductComponentGroupListResponse
 */
export interface ProductComponentGroupListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionProductComponentGroup>}
     * @memberof ProductComponentGroupListResponse
     */
    readonly data?: Array<SubscriptionProductComponentGroup>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ProductComponentGroupListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ProductComponentGroupListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ProductComponentGroupListResponse interface.
 */
export function instanceOfProductComponentGroupListResponse(value: object): value is ProductComponentGroupListResponse {
    return true;
}

export function ProductComponentGroupListResponseFromJSON(json: any): ProductComponentGroupListResponse {
    return ProductComponentGroupListResponseFromJSONTyped(json, false);
}

export function ProductComponentGroupListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductComponentGroupListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionProductComponentGroupFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ProductComponentGroupListResponseToJSON(value?: Omit<ProductComponentGroupListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

