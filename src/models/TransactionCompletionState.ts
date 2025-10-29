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
export const TransactionCompletionState = {
    Create: 'CREATE',
    Scheduled: 'SCHEDULED',
    Pending: 'PENDING',
    Failed: 'FAILED',
    Successful: 'SUCCESSFUL'
} as const;
export type TransactionCompletionState = typeof TransactionCompletionState[keyof typeof TransactionCompletionState];


export function instanceOfTransactionCompletionState(value: any): boolean {
    for (const key in TransactionCompletionState) {
        if (Object.prototype.hasOwnProperty.call(TransactionCompletionState, key)) {
            if (TransactionCompletionState[key as keyof typeof TransactionCompletionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionCompletionStateFromJSON(json: any): TransactionCompletionState {
    return TransactionCompletionStateFromJSONTyped(json, false);
}

export function TransactionCompletionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCompletionState {
    return json as TransactionCompletionState;
}

export function TransactionCompletionStateToJSON(value?: TransactionCompletionState | null): any {
    return value as any;
}

