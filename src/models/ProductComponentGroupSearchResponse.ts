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
    SubscriptionProductComponentGroupToJSONTyped,
} from './SubscriptionProductComponentGroup';

/**
 * 
 * @export
 * @interface ProductComponentGroupSearchResponse
 */
export interface ProductComponentGroupSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionProductComponentGroup>}
     * @memberof ProductComponentGroupSearchResponse
     */
    readonly data?: Array<SubscriptionProductComponentGroup>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof ProductComponentGroupSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ProductComponentGroupSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ProductComponentGroupSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ProductComponentGroupSearchResponse interface.
 */
export function instanceOfProductComponentGroupSearchResponse(value: object): value is ProductComponentGroupSearchResponse {
    return true;
}

export function ProductComponentGroupSearchResponseFromJSON(json: any): ProductComponentGroupSearchResponse {
    return ProductComponentGroupSearchResponseFromJSONTyped(json, false);
}

export function ProductComponentGroupSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductComponentGroupSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionProductComponentGroupFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ProductComponentGroupSearchResponseToJSON(json: any): ProductComponentGroupSearchResponse {
    return ProductComponentGroupSearchResponseToJSONTyped(json, false);
}

export function ProductComponentGroupSearchResponseToJSONTyped(value?: Omit<ProductComponentGroupSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

