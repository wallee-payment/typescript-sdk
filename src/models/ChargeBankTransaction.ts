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
    BankTransactionToJSONTyped,
} from './BankTransaction';
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
    TransactionToJSONTyped,
} from './Transaction';
import type { TransactionCompletion } from './TransactionCompletion';
import {
    TransactionCompletionFromJSON,
    TransactionCompletionFromJSONTyped,
    TransactionCompletionToJSON,
    TransactionCompletionToJSONTyped,
} from './TransactionCompletion';

/**
 * 
 * @export
 * @interface ChargeBankTransaction
 */
export interface ChargeBankTransaction {
    /**
     * The posting amount represents the monetary value of the bank transaction, recorded in the payment transaction's currency, before applying any adjustments.
     * @type {number}
     * @memberof ChargeBankTransaction
     */
    readonly transactionCurrencyAmount?: number;
    /**
     * 
     * @type {TransactionCompletion}
     * @memberof ChargeBankTransaction
     */
    completion?: TransactionCompletion;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ChargeBankTransaction
     */
    readonly linkedSpaceId?: number;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof ChargeBankTransaction
     */
    readonly language?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ChargeBankTransaction
     */
    readonly id?: number;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof ChargeBankTransaction
     */
    readonly spaceViewId?: number;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof ChargeBankTransaction
     */
    readonly linkedTransaction?: number;
    /**
     * 
     * @type {BankTransaction}
     * @memberof ChargeBankTransaction
     */
    bankTransaction?: BankTransaction;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ChargeBankTransaction
     */
    readonly version?: number;
    /**
     * 
     * @type {Transaction}
     * @memberof ChargeBankTransaction
     */
    transaction?: Transaction;
    /**
     * The value amount represents the net monetary value of the bank transaction, recorded in the payment transaction's currency, after applicable deductions.
     * @type {number}
     * @memberof ChargeBankTransaction
     */
    readonly transactionCurrencyValueAmount?: number;
}

/**
 * Check if a given object implements the ChargeBankTransaction interface.
 */
export function instanceOfChargeBankTransaction(value: object): value is ChargeBankTransaction {
    return true;
}

export function ChargeBankTransactionFromJSON(json: any): ChargeBankTransaction {
    return ChargeBankTransactionFromJSONTyped(json, false);
}

export function ChargeBankTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeBankTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'transactionCurrencyAmount': json['transactionCurrencyAmount'] == null ? undefined : json['transactionCurrencyAmount'],
        'completion': json['completion'] == null ? undefined : TransactionCompletionFromJSON(json['completion']),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'language': json['language'] == null ? undefined : json['language'],
        'id': json['id'] == null ? undefined : json['id'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'bankTransaction': json['bankTransaction'] == null ? undefined : BankTransactionFromJSON(json['bankTransaction']),
        'version': json['version'] == null ? undefined : json['version'],
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
        'transactionCurrencyValueAmount': json['transactionCurrencyValueAmount'] == null ? undefined : json['transactionCurrencyValueAmount'],
    };
}

export function ChargeBankTransactionToJSON(json: any): ChargeBankTransaction {
    return ChargeBankTransactionToJSONTyped(json, false);
}

export function ChargeBankTransactionToJSONTyped(value?: Omit<ChargeBankTransaction, 'transactionCurrencyAmount'|'linkedSpaceId'|'language'|'id'|'spaceViewId'|'linkedTransaction'|'version'|'transactionCurrencyValueAmount'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'completion': TransactionCompletionToJSON(value['completion']),
        'bankTransaction': BankTransactionToJSON(value['bankTransaction']),
        'transaction': TransactionToJSON(value['transaction']),
    };
}

