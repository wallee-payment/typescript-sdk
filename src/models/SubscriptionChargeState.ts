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
export const SubscriptionChargeState = {
    Scheduled: 'SCHEDULED',
    Discarded: 'DISCARDED',
    Processing: 'PROCESSING',
    Successful: 'SUCCESSFUL',
    Failed: 'FAILED'
} as const;
export type SubscriptionChargeState = typeof SubscriptionChargeState[keyof typeof SubscriptionChargeState];


export function instanceOfSubscriptionChargeState(value: any): boolean {
    for (const key in SubscriptionChargeState) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionChargeState, key)) {
            if (SubscriptionChargeState[key as keyof typeof SubscriptionChargeState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionChargeStateFromJSON(json: any): SubscriptionChargeState {
    return SubscriptionChargeStateFromJSONTyped(json, false);
}

export function SubscriptionChargeStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionChargeState {
    return json as SubscriptionChargeState;
}

export function SubscriptionChargeStateToJSON(value?: SubscriptionChargeState | null): any {
    return value as any;
}

export function SubscriptionChargeStateToJSONTyped(value: any, ignoreDiscriminator: boolean): SubscriptionChargeState {
    return value as SubscriptionChargeState;
}

