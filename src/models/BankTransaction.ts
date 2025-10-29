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
import type { BankTransactionFlowDirection } from './BankTransactionFlowDirection';
import {
    BankTransactionFlowDirectionFromJSON,
    BankTransactionFlowDirectionFromJSONTyped,
    BankTransactionFlowDirectionToJSON,
} from './BankTransactionFlowDirection';
import type { BankTransactionState } from './BankTransactionState';
import {
    BankTransactionStateFromJSON,
    BankTransactionStateFromJSONTyped,
    BankTransactionStateToJSON,
} from './BankTransactionState';
import type { CurrencyBankAccount } from './CurrencyBankAccount';
import {
    CurrencyBankAccountFromJSON,
    CurrencyBankAccountFromJSONTyped,
    CurrencyBankAccountToJSON,
} from './CurrencyBankAccount';
import type { PaymentAdjustment } from './PaymentAdjustment';
import {
    PaymentAdjustmentFromJSON,
    PaymentAdjustmentFromJSONTyped,
    PaymentAdjustmentToJSON,
} from './PaymentAdjustment';

/**
 * 
 * @export
 * @interface BankTransaction
 */
export interface BankTransaction {
    /**
     * Adjustments are changes made to the initial transaction amount, such as fees or corrections.
     * @type {Array<PaymentAdjustment>}
     * @memberof BankTransaction
     */
    readonly adjustments?: Array<PaymentAdjustment>;
    /**
     * 
     * @type {CurrencyBankAccount}
     * @memberof BankTransaction
     */
    currencyBankAccount?: CurrencyBankAccount;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof BankTransaction
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
     * @type {string}
     * @memberof BankTransaction
     */
    readonly externalId?: string;
    /**
     * The posting amount refers to the monetary value recorded for the bank transaction prior to any adjustments.
     * @type {number}
     * @memberof BankTransaction
     */
    readonly postingAmount?: number;
    /**
     * The source indicates how the bank transaction was created.
     * @type {number}
     * @memberof BankTransaction
     */
    readonly source?: number;
    /**
     * The value date indicates the date on which the transaction amount becomes effective.
     * @type {Date}
     * @memberof BankTransaction
     */
    readonly valueDate?: Date;
    /**
     * The bank transaction's type.
     * @type {number}
     * @memberof BankTransaction
     */
    readonly type?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof BankTransaction
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof BankTransaction
     */
    readonly version?: number;
    /**
     * A unique reference to identify the bank transaction.
     * @type {string}
     * @memberof BankTransaction
     */
    readonly reference?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof BankTransaction
     */
    readonly linkedSpaceId?: number;
    /**
     * The value amount represents the net monetary value of the transaction after applicable deductions.
     * @type {number}
     * @memberof BankTransaction
     */
    readonly valueAmount?: number;
    /**
     * 
     * @type {BankTransactionFlowDirection}
     * @memberof BankTransaction
     */
    flowDirection?: BankTransactionFlowDirection;
    /**
     * The ID of the user the bank transaction was created by.
     * @type {number}
     * @memberof BankTransaction
     */
    readonly createdBy?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof BankTransaction
     */
    readonly id?: number;
    /**
     * 
     * @type {BankTransactionState}
     * @memberof BankTransaction
     */
    state?: BankTransactionState;
    /**
     * The payment date specifies the date on which the payment was processed.
     * @type {Date}
     * @memberof BankTransaction
     */
    readonly paymentDate?: Date;
    /**
     * Represents the total value of all adjustments to the bank transaction, including tax.
     * @type {number}
     * @memberof BankTransaction
     */
    readonly totalAdjustmentAmountIncludingTax?: number;
}

/**
 * Check if a given object implements the BankTransaction interface.
 */
export function instanceOfBankTransaction(value: object): value is BankTransaction {
    return true;
}

export function BankTransactionFromJSON(json: any): BankTransaction {
    return BankTransactionFromJSONTyped(json, false);
}

export function BankTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'adjustments': json['adjustments'] == null ? undefined : ((json['adjustments'] as Array<any>).map(PaymentAdjustmentFromJSON)),
        'currencyBankAccount': json['currencyBankAccount'] == null ? undefined : CurrencyBankAccountFromJSON(json['currencyBankAccount']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'postingAmount': json['postingAmount'] == null ? undefined : json['postingAmount'],
        'source': json['source'] == null ? undefined : json['source'],
        'valueDate': json['valueDate'] == null ? undefined : (new Date(json['valueDate'])),
        'type': json['type'] == null ? undefined : json['type'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'reference': json['reference'] == null ? undefined : json['reference'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'valueAmount': json['valueAmount'] == null ? undefined : json['valueAmount'],
        'flowDirection': json['flowDirection'] == null ? undefined : BankTransactionFlowDirectionFromJSON(json['flowDirection']),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : BankTransactionStateFromJSON(json['state']),
        'paymentDate': json['paymentDate'] == null ? undefined : (new Date(json['paymentDate'])),
        'totalAdjustmentAmountIncludingTax': json['totalAdjustmentAmountIncludingTax'] == null ? undefined : json['totalAdjustmentAmountIncludingTax'],
    };
}

export function BankTransactionToJSON(value?: Omit<BankTransaction, 'adjustments'|'plannedPurgeDate'|'externalId'|'postingAmount'|'source'|'valueDate'|'type'|'createdOn'|'version'|'reference'|'linkedSpaceId'|'valueAmount'|'createdBy'|'id'|'paymentDate'|'totalAdjustmentAmountIncludingTax'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'currencyBankAccount': CurrencyBankAccountToJSON(value['currencyBankAccount']),
        'flowDirection': BankTransactionFlowDirectionToJSON(value['flowDirection']),
        'state': BankTransactionStateToJSON(value['state']),
    };
}

