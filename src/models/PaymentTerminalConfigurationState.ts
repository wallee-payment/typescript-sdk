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
export const PaymentTerminalConfigurationState = {
    Create: 'CREATE',
    Active: 'ACTIVE',
    Deleting: 'DELETING',
    Deleted: 'DELETED'
} as const;
export type PaymentTerminalConfigurationState = typeof PaymentTerminalConfigurationState[keyof typeof PaymentTerminalConfigurationState];


export function instanceOfPaymentTerminalConfigurationState(value: any): boolean {
    for (const key in PaymentTerminalConfigurationState) {
        if (Object.prototype.hasOwnProperty.call(PaymentTerminalConfigurationState, key)) {
            if (PaymentTerminalConfigurationState[key as keyof typeof PaymentTerminalConfigurationState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentTerminalConfigurationStateFromJSON(json: any): PaymentTerminalConfigurationState {
    return PaymentTerminalConfigurationStateFromJSONTyped(json, false);
}

export function PaymentTerminalConfigurationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalConfigurationState {
    return json as PaymentTerminalConfigurationState;
}

export function PaymentTerminalConfigurationStateToJSON(value?: PaymentTerminalConfigurationState | null): any {
    return value as any;
}

export function PaymentTerminalConfigurationStateToJSONTyped(value: any, ignoreDiscriminator: boolean): PaymentTerminalConfigurationState {
    return value as PaymentTerminalConfigurationState;
}

