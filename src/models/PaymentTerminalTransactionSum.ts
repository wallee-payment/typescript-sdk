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
 * Represents the aggregated transaction data for a specific brand and currency, including regular and DCC (Dynamic Currency Conversion) transactions.
 * @export
 * @interface PaymentTerminalTransactionSum
 */
export interface PaymentTerminalTransactionSum {
    /**
     * The total amount of tips from regular (non-DCC) transactions in the transaction currency.
     * @type {number}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly transactionTipAmount?: number;
    /**
     * The product within the brand for which transactions are summarized.
     * @type {string}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly product?: string;
    /**
     * The base currency in which the transactions were processed and settled, excluding any DCC conversions.
     * @type {string}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly transactionCurrency?: string;
    /**
     * The total monetary value of all transactions in the transaction currency, excluding DCC transactions.
     * @type {number}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly transactionAmount?: number;
    /**
     * The total amount of tips from DCC transactions, converted and presented in the transaction currency.
     * @type {number}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly dccTipAmount?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly id?: number;
    /**
     * The total count of regular (non-DCC) transactions processed within this summary period.
     * @type {number}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly transactionCount?: number;
    /**
     * The payment brand for which the transactions are summarized.
     * @type {string}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly brand?: string;
    /**
     * The number of transactions where Dynamic Currency Conversion (DCC) was applied, allowing customers to pay in their home currency.
     * @type {number}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly dccTransactionCount?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly version?: number;
    /**
     * The total monetary value of DCC transactions, converted and presented in the transaction currency.
     * @type {number}
     * @memberof PaymentTerminalTransactionSum
     */
    readonly dccTransactionAmount?: number;
}

/**
 * Check if a given object implements the PaymentTerminalTransactionSum interface.
 */
export function instanceOfPaymentTerminalTransactionSum(value: object): value is PaymentTerminalTransactionSum {
    return true;
}

export function PaymentTerminalTransactionSumFromJSON(json: any): PaymentTerminalTransactionSum {
    return PaymentTerminalTransactionSumFromJSONTyped(json, false);
}

export function PaymentTerminalTransactionSumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalTransactionSum {
    if (json == null) {
        return json;
    }
    return {
        
        'transactionTipAmount': json['transactionTipAmount'] == null ? undefined : json['transactionTipAmount'],
        'product': json['product'] == null ? undefined : json['product'],
        'transactionCurrency': json['transactionCurrency'] == null ? undefined : json['transactionCurrency'],
        'transactionAmount': json['transactionAmount'] == null ? undefined : json['transactionAmount'],
        'dccTipAmount': json['dccTipAmount'] == null ? undefined : json['dccTipAmount'],
        'id': json['id'] == null ? undefined : json['id'],
        'transactionCount': json['transactionCount'] == null ? undefined : json['transactionCount'],
        'brand': json['brand'] == null ? undefined : json['brand'],
        'dccTransactionCount': json['dccTransactionCount'] == null ? undefined : json['dccTransactionCount'],
        'version': json['version'] == null ? undefined : json['version'],
        'dccTransactionAmount': json['dccTransactionAmount'] == null ? undefined : json['dccTransactionAmount'],
    };
}

export function PaymentTerminalTransactionSumToJSON(json: any): PaymentTerminalTransactionSum {
    return PaymentTerminalTransactionSumToJSONTyped(json, false);
}

export function PaymentTerminalTransactionSumToJSONTyped(value?: Omit<PaymentTerminalTransactionSum, 'transactionTipAmount'|'product'|'transactionCurrency'|'transactionAmount'|'dccTipAmount'|'id'|'transactionCount'|'brand'|'dccTransactionCount'|'version'|'dccTransactionAmount'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

