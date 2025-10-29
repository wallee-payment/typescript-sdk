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
export const PaymentTerminalLocationVersionState = {
    Pending: 'PENDING',
    Scheduling: 'SCHEDULING',
    Active: 'ACTIVE',
    Deleting: 'DELETING',
    Deleted: 'DELETED'
} as const;
export type PaymentTerminalLocationVersionState = typeof PaymentTerminalLocationVersionState[keyof typeof PaymentTerminalLocationVersionState];


export function instanceOfPaymentTerminalLocationVersionState(value: any): boolean {
    for (const key in PaymentTerminalLocationVersionState) {
        if (Object.prototype.hasOwnProperty.call(PaymentTerminalLocationVersionState, key)) {
            if (PaymentTerminalLocationVersionState[key as keyof typeof PaymentTerminalLocationVersionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentTerminalLocationVersionStateFromJSON(json: any): PaymentTerminalLocationVersionState {
    return PaymentTerminalLocationVersionStateFromJSONTyped(json, false);
}

export function PaymentTerminalLocationVersionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalLocationVersionState {
    return json as PaymentTerminalLocationVersionState;
}

export function PaymentTerminalLocationVersionStateToJSON(value?: PaymentTerminalLocationVersionState | null): any {
    return value as any;
}

