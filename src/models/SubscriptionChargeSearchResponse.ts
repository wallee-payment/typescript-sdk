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
import type { SubscriptionCharge } from './SubscriptionCharge';
import {
    SubscriptionChargeFromJSON,
    SubscriptionChargeFromJSONTyped,
    SubscriptionChargeToJSON,
} from './SubscriptionCharge';

/**
 * 
 * @export
 * @interface SubscriptionChargeSearchResponse
 */
export interface SubscriptionChargeSearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionCharge>}
     * @memberof SubscriptionChargeSearchResponse
     */
    readonly data?: Array<SubscriptionCharge>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof SubscriptionChargeSearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof SubscriptionChargeSearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof SubscriptionChargeSearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the SubscriptionChargeSearchResponse interface.
 */
export function instanceOfSubscriptionChargeSearchResponse(value: object): value is SubscriptionChargeSearchResponse {
    return true;
}

export function SubscriptionChargeSearchResponseFromJSON(json: any): SubscriptionChargeSearchResponse {
    return SubscriptionChargeSearchResponseFromJSONTyped(json, false);
}

export function SubscriptionChargeSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionChargeSearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionChargeFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function SubscriptionChargeSearchResponseToJSON(value?: Omit<SubscriptionChargeSearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

