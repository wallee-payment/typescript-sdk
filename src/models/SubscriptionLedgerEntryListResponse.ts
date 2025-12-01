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
    SubscriptionLedgerEntryToJSONTyped,
} from './SubscriptionLedgerEntry';

/**
 * 
 * @export
 * @interface SubscriptionLedgerEntryListResponse
 */
export interface SubscriptionLedgerEntryListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<SubscriptionLedgerEntry>}
     * @memberof SubscriptionLedgerEntryListResponse
     */
    readonly data?: Array<SubscriptionLedgerEntry>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof SubscriptionLedgerEntryListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof SubscriptionLedgerEntryListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the SubscriptionLedgerEntryListResponse interface.
 */
export function instanceOfSubscriptionLedgerEntryListResponse(value: object): value is SubscriptionLedgerEntryListResponse {
    return true;
}

export function SubscriptionLedgerEntryListResponseFromJSON(json: any): SubscriptionLedgerEntryListResponse {
    return SubscriptionLedgerEntryListResponseFromJSONTyped(json, false);
}

export function SubscriptionLedgerEntryListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLedgerEntryListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SubscriptionLedgerEntryFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function SubscriptionLedgerEntryListResponseToJSON(json: any): SubscriptionLedgerEntryListResponse {
    return SubscriptionLedgerEntryListResponseToJSONTyped(json, false);
}

export function SubscriptionLedgerEntryListResponseToJSONTyped(value?: Omit<SubscriptionLedgerEntryListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

