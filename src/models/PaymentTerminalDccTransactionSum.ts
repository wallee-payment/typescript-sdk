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
 * Represents the aggregated summary of Dynamic Currency Conversion (DCC) transactions grouped by brand and currency combinations in a transaction summary receipt.
 * @export
 * @interface PaymentTerminalDccTransactionSum
 */
export interface PaymentTerminalDccTransactionSum {
    /**
     * The original currency of the transactions before DCC conversion (typically the merchant's local currency).
     * @type {string}
     * @memberof PaymentTerminalDccTransactionSum
     */
    readonly transactionCurrency?: string;
    /**
     * The total sum of all transactions in the original transaction currency (the amount in merchant's local currency before DCC conversion).
     * @type {number}
     * @memberof PaymentTerminalDccTransactionSum
     */
    readonly transactionAmount?: number;
    /**
     * The total sum of all transactions in the converted DCC currency (the amount paid by customers in their chosen currency).
     * @type {number}
     * @memberof PaymentTerminalDccTransactionSum
     */
    readonly dccAmount?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalDccTransactionSum
     */
    readonly id?: number;
    /**
     * The total count of DCC transactions processed for this specific brand and currency combination.
     * @type {number}
     * @memberof PaymentTerminalDccTransactionSum
     */
    readonly transactionCount?: number;
    /**
     * The converted currency used in DCC transactions (the currency chosen by the customer for payment).
     * @type {string}
     * @memberof PaymentTerminalDccTransactionSum
     */
    readonly dccCurrency?: string;
    /**
     * The payment brand for which these DCC transactions are summarized.
     * @type {string}
     * @memberof PaymentTerminalDccTransactionSum
     */
    readonly brand?: string;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentTerminalDccTransactionSum
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the PaymentTerminalDccTransactionSum interface.
 */
export function instanceOfPaymentTerminalDccTransactionSum(value: object): value is PaymentTerminalDccTransactionSum {
    return true;
}

export function PaymentTerminalDccTransactionSumFromJSON(json: any): PaymentTerminalDccTransactionSum {
    return PaymentTerminalDccTransactionSumFromJSONTyped(json, false);
}

export function PaymentTerminalDccTransactionSumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalDccTransactionSum {
    if (json == null) {
        return json;
    }
    return {
        
        'transactionCurrency': json['transactionCurrency'] == null ? undefined : json['transactionCurrency'],
        'transactionAmount': json['transactionAmount'] == null ? undefined : json['transactionAmount'],
        'dccAmount': json['dccAmount'] == null ? undefined : json['dccAmount'],
        'id': json['id'] == null ? undefined : json['id'],
        'transactionCount': json['transactionCount'] == null ? undefined : json['transactionCount'],
        'dccCurrency': json['dccCurrency'] == null ? undefined : json['dccCurrency'],
        'brand': json['brand'] == null ? undefined : json['brand'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PaymentTerminalDccTransactionSumToJSON(json: any): PaymentTerminalDccTransactionSum {
    return PaymentTerminalDccTransactionSumToJSONTyped(json, false);
}

export function PaymentTerminalDccTransactionSumToJSONTyped(value?: Omit<PaymentTerminalDccTransactionSum, 'transactionCurrency'|'transactionAmount'|'dccAmount'|'id'|'transactionCount'|'dccCurrency'|'brand'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

