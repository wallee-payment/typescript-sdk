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
export const PaymentInitiationAdviceFileState = {
    Creating: 'CREATING',
    Failed: 'FAILED',
    Created: 'CREATED',
    Overdue: 'OVERDUE',
    Uploaded: 'UPLOADED',
    Downloaded: 'DOWNLOADED',
    Processed: 'PROCESSED'
} as const;
export type PaymentInitiationAdviceFileState = typeof PaymentInitiationAdviceFileState[keyof typeof PaymentInitiationAdviceFileState];


export function instanceOfPaymentInitiationAdviceFileState(value: any): boolean {
    for (const key in PaymentInitiationAdviceFileState) {
        if (Object.prototype.hasOwnProperty.call(PaymentInitiationAdviceFileState, key)) {
            if (PaymentInitiationAdviceFileState[key as keyof typeof PaymentInitiationAdviceFileState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PaymentInitiationAdviceFileStateFromJSON(json: any): PaymentInitiationAdviceFileState {
    return PaymentInitiationAdviceFileStateFromJSONTyped(json, false);
}

export function PaymentInitiationAdviceFileStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationAdviceFileState {
    return json as PaymentInitiationAdviceFileState;
}

export function PaymentInitiationAdviceFileStateToJSON(value?: PaymentInitiationAdviceFileState | null): any {
    return value as any;
}

export function PaymentInitiationAdviceFileStateToJSONTyped(value: any, ignoreDiscriminator: boolean): PaymentInitiationAdviceFileState {
    return value as PaymentInitiationAdviceFileState;
}

