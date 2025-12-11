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
import type { PaymentTerminalTransactionSummary } from './PaymentTerminalTransactionSummary';
import {
    PaymentTerminalTransactionSummaryFromJSON,
    PaymentTerminalTransactionSummaryFromJSONTyped,
    PaymentTerminalTransactionSummaryToJSON,
    PaymentTerminalTransactionSummaryToJSONTyped,
} from './PaymentTerminalTransactionSummary';

/**
 * 
 * @export
 * @interface TerminalTransactionSummarySearchResponse
 */
export interface TerminalTransactionSummarySearchResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<PaymentTerminalTransactionSummary>}
     * @memberof TerminalTransactionSummarySearchResponse
     */
    readonly data?: Array<PaymentTerminalTransactionSummary>;
    /**
     * The number of skipped objects.
     * @type {number}
     * @memberof TerminalTransactionSummarySearchResponse
     */
    readonly offset?: number;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof TerminalTransactionSummarySearchResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof TerminalTransactionSummarySearchResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the TerminalTransactionSummarySearchResponse interface.
 */
export function instanceOfTerminalTransactionSummarySearchResponse(value: object): value is TerminalTransactionSummarySearchResponse {
    return true;
}

export function TerminalTransactionSummarySearchResponseFromJSON(json: any): TerminalTransactionSummarySearchResponse {
    return TerminalTransactionSummarySearchResponseFromJSONTyped(json, false);
}

export function TerminalTransactionSummarySearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerminalTransactionSummarySearchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(PaymentTerminalTransactionSummaryFromJSON)),
        'offset': json['offset'] == null ? undefined : json['offset'],
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function TerminalTransactionSummarySearchResponseToJSON(json: any): TerminalTransactionSummarySearchResponse {
    return TerminalTransactionSummarySearchResponseToJSONTyped(json, false);
}

export function TerminalTransactionSummarySearchResponseToJSONTyped(value?: Omit<TerminalTransactionSummarySearchResponse, 'data'|'offset'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

