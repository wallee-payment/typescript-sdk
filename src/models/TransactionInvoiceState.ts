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

/**
 * 
 * @export
 */
export const TransactionInvoiceState = {
    Create: 'CREATE',
    Open: 'OPEN',
    Overdue: 'OVERDUE',
    Canceled: 'CANCELED',
    Paid: 'PAID',
    Derecognized: 'DERECOGNIZED',
    NotApplicable: 'NOT_APPLICABLE'
} as const;
export type TransactionInvoiceState = typeof TransactionInvoiceState[keyof typeof TransactionInvoiceState];


export function instanceOfTransactionInvoiceState(value: any): boolean {
    for (const key in TransactionInvoiceState) {
        if (Object.prototype.hasOwnProperty.call(TransactionInvoiceState, key)) {
            if (TransactionInvoiceState[key as keyof typeof TransactionInvoiceState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionInvoiceStateFromJSON(json: any): TransactionInvoiceState {
    return TransactionInvoiceStateFromJSONTyped(json, false);
}

export function TransactionInvoiceStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInvoiceState {
    return json as TransactionInvoiceState;
}

export function TransactionInvoiceStateToJSON(value?: TransactionInvoiceState | null): any {
    return value as any;
}

