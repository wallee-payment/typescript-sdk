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
import type { RefundRecoveryBankTransaction } from './RefundRecoveryBankTransaction';
import {
    RefundRecoveryBankTransactionFromJSON,
    RefundRecoveryBankTransactionFromJSONTyped,
    RefundRecoveryBankTransactionToJSON,
} from './RefundRecoveryBankTransaction';

/**
 * 
 * @export
 * @interface RefundRecoveryBankTransactionListResponse
 */
export interface RefundRecoveryBankTransactionListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<RefundRecoveryBankTransaction>}
     * @memberof RefundRecoveryBankTransactionListResponse
     */
    readonly data?: Array<RefundRecoveryBankTransaction>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof RefundRecoveryBankTransactionListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof RefundRecoveryBankTransactionListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the RefundRecoveryBankTransactionListResponse interface.
 */
export function instanceOfRefundRecoveryBankTransactionListResponse(value: object): value is RefundRecoveryBankTransactionListResponse {
    return true;
}

export function RefundRecoveryBankTransactionListResponseFromJSON(json: any): RefundRecoveryBankTransactionListResponse {
    return RefundRecoveryBankTransactionListResponseFromJSONTyped(json, false);
}

export function RefundRecoveryBankTransactionListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundRecoveryBankTransactionListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(RefundRecoveryBankTransactionFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function RefundRecoveryBankTransactionListResponseToJSON(value?: Omit<RefundRecoveryBankTransactionListResponse, 'data'|'hasMore'|'limit'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

