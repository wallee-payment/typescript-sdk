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
import type { PaymentTerminalTransactionSum } from './PaymentTerminalTransactionSum';
import {
    PaymentTerminalTransactionSumFromJSON,
    PaymentTerminalTransactionSumFromJSONTyped,
    PaymentTerminalTransactionSumToJSON,
    PaymentTerminalTransactionSumToJSONTyped,
} from './PaymentTerminalTransactionSum';
import type { PaymentTerminalDccTransactionSum } from './PaymentTerminalDccTransactionSum';
import {
    PaymentTerminalDccTransactionSumFromJSON,
    PaymentTerminalDccTransactionSumFromJSONTyped,
    PaymentTerminalDccTransactionSumToJSON,
    PaymentTerminalDccTransactionSumToJSONTyped,
} from './PaymentTerminalDccTransactionSum';

/**
 * 
 * @export
 * @interface PaymentTerminalTransactionSummary
 */
export interface PaymentTerminalTransactionSummary {
    /**
     * The unique reference assigned to this transaction summary.
     * @type {number}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly reference?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly linkedSpaceId?: number;
    /**
     * The total monetary amounts of all transactions, organized and grouped by brand and currency.
     * @type {Array<PaymentTerminalTransactionSum>}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly transactionSums?: Array<PaymentTerminalTransactionSum>;
    /**
     * Detailed breakdown of Dynamic Currency Conversion (DCC) transactions, showing transaction amounts in both original and converted currencies, grouped by payment brand.
     * @type {Array<PaymentTerminalDccTransactionSum>}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly dccTransactionSums?: Array<PaymentTerminalDccTransactionSum>;
    /**
     * The end of the time period covered by this summary report.
     * @type {Date}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly endedOn?: Date;
    /**
     * The overall transaction volume in each processed currency.
     * @type {{ [key: string]: number; }}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly balanceAmountPerCurrency?: { [key: string]: number; };
    /**
     * The payment terminal that processed the transactions included in this summary report.
     * @type {number}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly paymentTerminal?: number;
    /**
     * The HTML content of the transaction summary receipt.
     * @type {string}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly receipt?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly id?: number;
    /**
     * The total count of all transactions processed by the terminal during the summary period.
     * @type {number}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly numberOfTransactions?: number;
    /**
     * The beginning of the time period covered by this summary report.
     * @type {Date}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly startedOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentTerminalTransactionSummary
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the PaymentTerminalTransactionSummary interface.
 */
export function instanceOfPaymentTerminalTransactionSummary(value: object): value is PaymentTerminalTransactionSummary {
    return true;
}

export function PaymentTerminalTransactionSummaryFromJSON(json: any): PaymentTerminalTransactionSummary {
    return PaymentTerminalTransactionSummaryFromJSONTyped(json, false);
}

export function PaymentTerminalTransactionSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalTransactionSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'transactionSums': json['transactionSums'] == null ? undefined : ((json['transactionSums'] as Array<any>).map(PaymentTerminalTransactionSumFromJSON)),
        'dccTransactionSums': json['dccTransactionSums'] == null ? undefined : ((json['dccTransactionSums'] as Array<any>).map(PaymentTerminalDccTransactionSumFromJSON)),
        'endedOn': json['endedOn'] == null ? undefined : (new Date(json['endedOn'])),
        'balanceAmountPerCurrency': json['balanceAmountPerCurrency'] == null ? undefined : json['balanceAmountPerCurrency'],
        'paymentTerminal': json['paymentTerminal'] == null ? undefined : json['paymentTerminal'],
        'receipt': json['receipt'] == null ? undefined : json['receipt'],
        'id': json['id'] == null ? undefined : json['id'],
        'numberOfTransactions': json['numberOfTransactions'] == null ? undefined : json['numberOfTransactions'],
        'startedOn': json['startedOn'] == null ? undefined : (new Date(json['startedOn'])),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PaymentTerminalTransactionSummaryToJSON(json: any): PaymentTerminalTransactionSummary {
    return PaymentTerminalTransactionSummaryToJSONTyped(json, false);
}

export function PaymentTerminalTransactionSummaryToJSONTyped(value?: Omit<PaymentTerminalTransactionSummary, 'reference'|'linkedSpaceId'|'transactionSums'|'dccTransactionSums'|'endedOn'|'balanceAmountPerCurrency'|'paymentTerminal'|'receipt'|'id'|'numberOfTransactions'|'startedOn'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

