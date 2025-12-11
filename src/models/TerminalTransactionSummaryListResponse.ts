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
 * @interface TerminalTransactionSummaryListResponse
 */
export interface TerminalTransactionSummaryListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<PaymentTerminalTransactionSummary>}
     * @memberof TerminalTransactionSummaryListResponse
     */
    readonly data?: Array<PaymentTerminalTransactionSummary>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof TerminalTransactionSummaryListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof TerminalTransactionSummaryListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the TerminalTransactionSummaryListResponse interface.
 */
export function instanceOfTerminalTransactionSummaryListResponse(value: object): value is TerminalTransactionSummaryListResponse {
    return true;
}

export function TerminalTransactionSummaryListResponseFromJSON(json: any): TerminalTransactionSummaryListResponse {
    return TerminalTransactionSummaryListResponseFromJSONTyped(json, false);
}

export function TerminalTransactionSummaryListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerminalTransactionSummaryListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(PaymentTerminalTransactionSummaryFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function TerminalTransactionSummaryListResponseToJSON(json: any): TerminalTransactionSummaryListResponse {
    return TerminalTransactionSummaryListResponseToJSONTyped(json, false);
}

export function TerminalTransactionSummaryListResponseToJSONTyped(value?: Omit<TerminalTransactionSummaryListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

