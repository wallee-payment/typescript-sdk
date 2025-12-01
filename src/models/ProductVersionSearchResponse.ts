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
import type { SubscriptionProductVersion } from './SubscriptionProductVersion';
import {
    SubscriptionProductVersionFromJSON,
    SubscriptionProductVersionFromJSONTyped,
    SubscriptionProductVersionToJSON,
    SubscriptionProductVersionToJSONTyped,
} from './SubscriptionProductVersion';

/**
 * 
 * @export
 * @interface ProductVersionSearchResponse
 */
export interface ProductVersionSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionProductVersion>}
     * @memberof ProductVersionSearchResponse
     */
    readonly data?: Array<SubscriptionProductVersion>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof ProductVersionSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof ProductVersionSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof ProductVersionSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the ProductVersionSearchResponse interface.
 */
export function instanceOfProductVersionSearchResponse(value: object): value is ProductVersionSearchResponse {
    return true;
}

export function ProductVersionSearchResponseFromJSON(json: any): ProductVersionSearchResponse {
    return ProductVersionSearchResponseFromJSONTyped(json, false);
}

export function ProductVersionSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductVersionSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionProductVersionFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function ProductVersionSearchResponseToJSON(json: any): ProductVersionSearchResponse {
    return ProductVersionSearchResponseToJSONTyped(json, false);
}

export function ProductVersionSearchResponseToJSONTyped(value?: Omit<ProductVersionSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

