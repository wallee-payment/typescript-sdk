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
export const SubscriptionSuspensionReason = {
    FailedCharge: 'FAILED_CHARGE',
    SubscriberInitiatedRefund: 'SUBSCRIBER_INITIATED_REFUND',
    Manual: 'MANUAL'
} as const;
export type SubscriptionSuspensionReason = typeof SubscriptionSuspensionReason[keyof typeof SubscriptionSuspensionReason];


export function instanceOfSubscriptionSuspensionReason(value: any): boolean {
    for (const key in SubscriptionSuspensionReason) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionSuspensionReason, key)) {
            if (SubscriptionSuspensionReason[key as keyof typeof SubscriptionSuspensionReason] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionSuspensionReasonFromJSON(json: any): SubscriptionSuspensionReason {
    return SubscriptionSuspensionReasonFromJSONTyped(json, false);
}

export function SubscriptionSuspensionReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionSuspensionReason {
    return json as SubscriptionSuspensionReason;
}

export function SubscriptionSuspensionReasonToJSON(value?: SubscriptionSuspensionReason | null): any {
    return value as any;
}

