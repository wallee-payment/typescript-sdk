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
import type { BankTransaction } from './BankTransaction';
import {
    BankTransactionFromJSON,
    BankTransactionFromJSONTyped,
    BankTransactionToJSON,
} from './BankTransaction';
import type { Refund } from './Refund';
import {
    RefundFromJSON,
    RefundFromJSONTyped,
    RefundToJSON,
} from './Refund';

/**
 * 
 * @export
 * @interface RefundBankTransaction
 */
export interface RefundBankTransaction {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof RefundBankTransaction
     */
    readonly linkedSpaceId?: number;
    /**
     * The value amount represents the net monetary value of the bank transaction, recorded in the refund's currency, after applicable deductions.
     * @type {number}
     * @memberof RefundBankTransaction
     */
    readonly refundCurrencyValueAmount?: number;
    /**
     * The posting amount represents the monetary value of the bank transaction, recorded in the refund's currency, before applying any adjustments.
     * @type {number}
     * @memberof RefundBankTransaction
     */
    readonly refundCurrencyAmount?: number;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof RefundBankTransaction
     */
    readonly language?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof RefundBankTransaction
     */
    readonly id?: number;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof RefundBankTransaction
     */
    readonly spaceViewId?: number;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof RefundBankTransaction
     */
    readonly linkedTransaction?: number;
    /**
     * 
     * @type {BankTransaction}
     * @memberof RefundBankTransaction
     */
    bankTransaction?: BankTransaction;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof RefundBankTransaction
     */
    readonly version?: number;
    /**
     * 
     * @type {Refund}
     * @memberof RefundBankTransaction
     */
    refund?: Refund;
}

/**
 * Check if a given object implements the RefundBankTransaction interface.
 */
export function instanceOfRefundBankTransaction(value: object): value is RefundBankTransaction {
    return true;
}

export function RefundBankTransactionFromJSON(json: any): RefundBankTransaction {
    return RefundBankTransactionFromJSONTyped(json, false);
}

export function RefundBankTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundBankTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'refundCurrencyValueAmount': json['refundCurrencyValueAmount'] == null ? undefined : json['refundCurrencyValueAmount'],
        'refundCurrencyAmount': json['refundCurrencyAmount'] == null ? undefined : json['refundCurrencyAmount'],
        'language': json['language'] == null ? undefined : json['language'],
        'id': json['id'] == null ? undefined : json['id'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'bankTransaction': json['bankTransaction'] == null ? undefined : BankTransactionFromJSON(json['bankTransaction']),
        'version': json['version'] == null ? undefined : json['version'],
        'refund': json['refund'] == null ? undefined : RefundFromJSON(json['refund']),
    };
}

export function RefundBankTransactionToJSON(value?: Omit<RefundBankTransaction, 'linkedSpaceId'|'refundCurrencyValueAmount'|'refundCurrencyAmount'|'language'|'id'|'spaceViewId'|'linkedTransaction'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bankTransaction': BankTransactionToJSON(value['bankTransaction']),
        'refund': RefundToJSON(value['refund']),
    };
}

