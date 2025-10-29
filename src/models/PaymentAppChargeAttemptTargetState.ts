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
 * The target state indicates the state that should be set on the charge attempt.
 * @export
 */
export const PaymentAppChargeAttemptTargetState = {
    Successful: 'SUCCESSFUL',
    Failed: 'FAILED'
} as const;
export type PaymentAppChargeAttemptTargetState = typeof PaymentAppChargeAttemptTargetState[keyof typeof PaymentAppChargeAttemptTargetState];


export function instanceOfPaymentAppChargeAttemptTargetState(value: any): boolean {
    for (const key in PaymentAppChargeAttemptTargetState) {
        if (Object.prototype.hasOwnProperty.call(PaymentAppChargeAttemptTargetState, key)) {
            if (PaymentAppChargeAttemptTargetState[key as keyof typeof PaymentAppChargeAttemptTargetState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentAppChargeAttemptTargetStateFromJSON(json: any): PaymentAppChargeAttemptTargetState {
    return PaymentAppChargeAttemptTargetStateFromJSONTyped(json, false);
}

export function PaymentAppChargeAttemptTargetStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppChargeAttemptTargetState {
    return json as PaymentAppChargeAttemptTargetState;
}

export function PaymentAppChargeAttemptTargetStateToJSON(value?: PaymentAppChargeAttemptTargetState | null): any {
    return value as any;
}

