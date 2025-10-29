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
 * The target state indicates the state that should be set on the completion.
 * @export
 */
export const PaymentAppCompletionTargetState = {
    Successful: 'SUCCESSFUL',
    Failed: 'FAILED'
} as const;
export type PaymentAppCompletionTargetState = typeof PaymentAppCompletionTargetState[keyof typeof PaymentAppCompletionTargetState];


export function instanceOfPaymentAppCompletionTargetState(value: any): boolean {
    for (const key in PaymentAppCompletionTargetState) {
        if (Object.prototype.hasOwnProperty.call(PaymentAppCompletionTargetState, key)) {
            if (PaymentAppCompletionTargetState[key as keyof typeof PaymentAppCompletionTargetState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentAppCompletionTargetStateFromJSON(json: any): PaymentAppCompletionTargetState {
    return PaymentAppCompletionTargetStateFromJSONTyped(json, false);
}

export function PaymentAppCompletionTargetStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppCompletionTargetState {
    return json as PaymentAppCompletionTargetState;
}

export function PaymentAppCompletionTargetStateToJSON(value?: PaymentAppCompletionTargetState | null): any {
    return value as any;
}

