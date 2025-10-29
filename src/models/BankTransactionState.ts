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
export const BankTransactionState = {
    Upcoming: 'UPCOMING',
    Settled: 'SETTLED'
} as const;
export type BankTransactionState = typeof BankTransactionState[keyof typeof BankTransactionState];


export function instanceOfBankTransactionState(value: any): boolean {
    for (const key in BankTransactionState) {
        if (Object.prototype.hasOwnProperty.call(BankTransactionState, key)) {
            if (BankTransactionState[key as keyof typeof BankTransactionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BankTransactionStateFromJSON(json: any): BankTransactionState {
    return BankTransactionStateFromJSONTyped(json, false);
}

export function BankTransactionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransactionState {
    return json as BankTransactionState;
}

export function BankTransactionStateToJSON(value?: BankTransactionState | null): any {
    return value as any;
}

