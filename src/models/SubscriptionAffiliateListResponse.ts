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
import type { SubscriptionAffiliate } from './SubscriptionAffiliate';
import {
    SubscriptionAffiliateFromJSON,
    SubscriptionAffiliateFromJSONTyped,
    SubscriptionAffiliateToJSON,
    SubscriptionAffiliateToJSONTyped,
} from './SubscriptionAffiliate';

/**
 * 
 * @export
 * @interface SubscriptionAffiliateListResponse
 */
export interface SubscriptionAffiliateListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionAffiliate>}
     * @memberof SubscriptionAffiliateListResponse
     */
    readonly data?: Array<SubscriptionAffiliate>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof SubscriptionAffiliateListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof SubscriptionAffiliateListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the SubscriptionAffiliateListResponse interface.
 */
export function instanceOfSubscriptionAffiliateListResponse(value: object): value is SubscriptionAffiliateListResponse {
    return true;
}

export function SubscriptionAffiliateListResponseFromJSON(json: any): SubscriptionAffiliateListResponse {
    return SubscriptionAffiliateListResponseFromJSONTyped(json, false);
}

export function SubscriptionAffiliateListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAffiliateListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionAffiliateFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function SubscriptionAffiliateListResponseToJSON(json: any): SubscriptionAffiliateListResponse {
    return SubscriptionAffiliateListResponseToJSONTyped(json, false);
}

export function SubscriptionAffiliateListResponseToJSONTyped(value?: Omit<SubscriptionAffiliateListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

