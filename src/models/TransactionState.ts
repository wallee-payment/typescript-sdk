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
export const TransactionState = {
    Create: 'CREATE',
    Pending: 'PENDING',
    Confirmed: 'CONFIRMED',
    Processing: 'PROCESSING',
    Failed: 'FAILED',
    Authorized: 'AUTHORIZED',
    Voided: 'VOIDED',
    Completed: 'COMPLETED',
    Fulfill: 'FULFILL',
    Decline: 'DECLINE'
} as const;
export type TransactionState = typeof TransactionState[keyof typeof TransactionState];


export function instanceOfTransactionState(value: any): boolean {
    for (const key in TransactionState) {
        if (Object.prototype.hasOwnProperty.call(TransactionState, key)) {
            if (TransactionState[key as keyof typeof TransactionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionStateFromJSON(json: any): TransactionState {
    return TransactionStateFromJSONTyped(json, false);
}

export function TransactionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionState {
    return json as TransactionState;
}

export function TransactionStateToJSON(value?: TransactionState | null): any {
    return value as any;
}

