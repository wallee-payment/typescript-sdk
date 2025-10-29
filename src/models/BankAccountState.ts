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
export const BankAccountState = {
    Create: 'CREATE',
    Active: 'ACTIVE',
    Deleting: 'DELETING',
    Deleted: 'DELETED'
} as const;
export type BankAccountState = typeof BankAccountState[keyof typeof BankAccountState];


export function instanceOfBankAccountState(value: any): boolean {
    for (const key in BankAccountState) {
        if (Object.prototype.hasOwnProperty.call(BankAccountState, key)) {
            if (BankAccountState[key as keyof typeof BankAccountState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BankAccountStateFromJSON(json: any): BankAccountState {
    return BankAccountStateFromJSONTyped(json, false);
}

export function BankAccountStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccountState {
    return json as BankAccountState;
}

export function BankAccountStateToJSON(value?: BankAccountState | null): any {
    return value as any;
}

