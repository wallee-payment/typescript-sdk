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
export const PaymentContractState = {
    Pending: 'PENDING',
    Active: 'ACTIVE',
    Terminating: 'TERMINATING',
    Terminated: 'TERMINATED',
    Rejected: 'REJECTED'
} as const;
export type PaymentContractState = typeof PaymentContractState[keyof typeof PaymentContractState];


export function instanceOfPaymentContractState(value: any): boolean {
    for (const key in PaymentContractState) {
        if (Object.prototype.hasOwnProperty.call(PaymentContractState, key)) {
            if (PaymentContractState[key as keyof typeof PaymentContractState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentContractStateFromJSON(json: any): PaymentContractState {
    return PaymentContractStateFromJSONTyped(json, false);
}

export function PaymentContractStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentContractState {
    return json as PaymentContractState;
}

export function PaymentContractStateToJSON(value?: PaymentContractState | null): any {
    return value as any;
}

