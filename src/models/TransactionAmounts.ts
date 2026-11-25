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
/**
 * 
 * @export
 * @interface TransactionAmounts
 */
export interface TransactionAmounts {
    /**
     * 
     * @type {number}
     * @memberof TransactionAmounts
     */
    readonly completedAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAmounts
     */
    readonly authorizationAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionAmounts
     */
    readonly currency?: string;
    /**
     * 
     * @type {number}
     * @memberof TransactionAmounts
     */
    readonly refundedAmount?: number;
}

/**
 * Check if a given object implements the TransactionAmounts interface.
 */
export function instanceOfTransactionAmounts(value: object): value is TransactionAmounts {
    return true;
}

export function TransactionAmountsFromJSON(json: any): TransactionAmounts {
    return TransactionAmountsFromJSONTyped(json, false);
}

export function TransactionAmountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAmounts {
    if (json == null) {
        return json;
    }
    return {
        
        'completedAmount': json['completedAmount'] == null ? undefined : json['completedAmount'],
        'authorizationAmount': json['authorizationAmount'] == null ? undefined : json['authorizationAmount'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'refundedAmount': json['refundedAmount'] == null ? undefined : json['refundedAmount'],
    };
}

export function TransactionAmountsToJSON(json: any): TransactionAmounts {
    return TransactionAmountsToJSONTyped(json, false);
}

export function TransactionAmountsToJSONTyped(value?: Omit<TransactionAmounts, 'completedAmount'|'authorizationAmount'|'currency'|'refundedAmount'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

