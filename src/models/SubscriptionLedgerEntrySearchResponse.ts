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
import type { SubscriptionLedgerEntry } from './SubscriptionLedgerEntry';
import {
    SubscriptionLedgerEntryFromJSON,
    SubscriptionLedgerEntryFromJSONTyped,
    SubscriptionLedgerEntryToJSON,
} from './SubscriptionLedgerEntry';

/**
 * 
 * @export
 * @interface SubscriptionLedgerEntrySearchResponse
 */
export interface SubscriptionLedgerEntrySearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionLedgerEntry>}
     * @memberof SubscriptionLedgerEntrySearchResponse
     */
    readonly data?: Array<SubscriptionLedgerEntry>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof SubscriptionLedgerEntrySearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof SubscriptionLedgerEntrySearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof SubscriptionLedgerEntrySearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the SubscriptionLedgerEntrySearchResponse interface.
 */
export function instanceOfSubscriptionLedgerEntrySearchResponse(value: object): value is SubscriptionLedgerEntrySearchResponse {
    return true;
}

export function SubscriptionLedgerEntrySearchResponseFromJSON(json: any): SubscriptionLedgerEntrySearchResponse {
    return SubscriptionLedgerEntrySearchResponseFromJSONTyped(json, false);
}

export function SubscriptionLedgerEntrySearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLedgerEntrySearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionLedgerEntryFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function SubscriptionLedgerEntrySearchResponseToJSON(value?: Omit<SubscriptionLedgerEntrySearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

