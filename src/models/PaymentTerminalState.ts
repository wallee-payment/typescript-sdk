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
export const PaymentTerminalState = {
    Create: 'CREATE',
    Preparing: 'PREPARING',
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
    Decommissioning: 'DECOMMISSIONING',
    Decommissioned: 'DECOMMISSIONED'
} as const;
export type PaymentTerminalState = typeof PaymentTerminalState[keyof typeof PaymentTerminalState];


export function instanceOfPaymentTerminalState(value: any): boolean {
    for (const key in PaymentTerminalState) {
        if (Object.prototype.hasOwnProperty.call(PaymentTerminalState, key)) {
            if (PaymentTerminalState[key as keyof typeof PaymentTerminalState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentTerminalStateFromJSON(json: any): PaymentTerminalState {
    return PaymentTerminalStateFromJSONTyped(json, false);
}

export function PaymentTerminalStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalState {
    return json as PaymentTerminalState;
}

export function PaymentTerminalStateToJSON(value?: PaymentTerminalState | null): any {
    return value as any;
}

