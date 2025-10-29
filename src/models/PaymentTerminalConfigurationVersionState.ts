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
export const PaymentTerminalConfigurationVersionState = {
    Pending: 'PENDING',
    Scheduling: 'SCHEDULING',
    Active: 'ACTIVE',
    Deleting: 'DELETING',
    Deleted: 'DELETED'
} as const;
export type PaymentTerminalConfigurationVersionState = typeof PaymentTerminalConfigurationVersionState[keyof typeof PaymentTerminalConfigurationVersionState];


export function instanceOfPaymentTerminalConfigurationVersionState(value: any): boolean {
    for (const key in PaymentTerminalConfigurationVersionState) {
        if (Object.prototype.hasOwnProperty.call(PaymentTerminalConfigurationVersionState, key)) {
            if (PaymentTerminalConfigurationVersionState[key as keyof typeof PaymentTerminalConfigurationVersionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentTerminalConfigurationVersionStateFromJSON(json: any): PaymentTerminalConfigurationVersionState {
    return PaymentTerminalConfigurationVersionStateFromJSONTyped(json, false);
}

export function PaymentTerminalConfigurationVersionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalConfigurationVersionState {
    return json as PaymentTerminalConfigurationVersionState;
}

export function PaymentTerminalConfigurationVersionStateToJSON(value?: PaymentTerminalConfigurationVersionState | null): any {
    return value as any;
}

