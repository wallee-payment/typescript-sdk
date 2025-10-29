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
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
} from './LineItem';

/**
 * 
 * @export
 * @interface RefundRecoveryBankTransaction
 */
export interface RefundRecoveryBankTransaction {
    /**
     * The line items that were recovered.
     * @type {Array<LineItem>}
     * @memberof RefundRecoveryBankTransaction
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof RefundRecoveryBankTransaction
     */
    readonly linkedSpaceId?: number;
    /**
     * The value amount represents the net monetary value of the bank transaction, recorded in the refund's currency, after applicable deductions.
     * @type {number}
     * @memberof RefundRecoveryBankTransaction
     */
    readonly refundCurrencyValueAmount?: number;
    /**
     * The posting amount represents the monetary value of the bank transaction, recorded in the refund's currency, before applying any adjustments.
     * @type {number}
     * @memberof RefundRecoveryBankTransaction
     */
    readonly refundCurrencyAmount?: number;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof RefundRecoveryBankTransaction
     */
    readonly language?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof RefundRecoveryBankTransaction
     */
    readonly id?: number;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof RefundRecoveryBankTransaction
     */
    readonly spaceViewId?: number;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof RefundRecoveryBankTransaction
     */
    readonly linkedTransaction?: number;
    /**
     * 
     * @type {BankTransaction}
     * @memberof RefundRecoveryBankTransaction
     */
    bankTransaction?: BankTransaction;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof RefundRecoveryBankTransaction
     */
    readonly version?: number;
    /**
     * 
     * @type {Refund}
     * @memberof RefundRecoveryBankTransaction
     */
    refund?: Refund;
}

/**
 * Check if a given object implements the RefundRecoveryBankTransaction interface.
 */
export function instanceOfRefundRecoveryBankTransaction(value: object): value is RefundRecoveryBankTransaction {
    return true;
}

export function RefundRecoveryBankTransactionFromJSON(json: any): RefundRecoveryBankTransaction {
    return RefundRecoveryBankTransactionFromJSONTyped(json, false);
}

export function RefundRecoveryBankTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundRecoveryBankTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
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

export function RefundRecoveryBankTransactionToJSON(value?: Omit<RefundRecoveryBankTransaction, 'lineItems'|'linkedSpaceId'|'refundCurrencyValueAmount'|'refundCurrencyAmount'|'language'|'id'|'spaceViewId'|'linkedTransaction'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bankTransaction': BankTransactionToJSON(value['bankTransaction']),
        'refund': RefundToJSON(value['refund']),
    };
}

