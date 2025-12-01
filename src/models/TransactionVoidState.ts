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
export const TransactionVoidState = {
    Create: 'CREATE',
    Pending: 'PENDING',
    Failed: 'FAILED',
    Successful: 'SUCCESSFUL'
} as const;
export type TransactionVoidState = typeof TransactionVoidState[keyof typeof TransactionVoidState];


export function instanceOfTransactionVoidState(value: any): boolean {
    for (const key in TransactionVoidState) {
        if (Object.prototype.hasOwnProperty.call(TransactionVoidState, key)) {
            if (TransactionVoidState[key as keyof typeof TransactionVoidState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionVoidStateFromJSON(json: any): TransactionVoidState {
    return TransactionVoidStateFromJSONTyped(json, false);
}

export function TransactionVoidStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionVoidState {
    return json as TransactionVoidState;
}

export function TransactionVoidStateToJSON(value?: TransactionVoidState | null): any {
    return value as any;
}

export function TransactionVoidStateToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionVoidState {
    return value as TransactionVoidState;
}

