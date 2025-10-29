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
export const SubscriptionSuspensionState = {
    Running: 'RUNNING',
    Ended: 'ENDED'
} as const;
export type SubscriptionSuspensionState = typeof SubscriptionSuspensionState[keyof typeof SubscriptionSuspensionState];


export function instanceOfSubscriptionSuspensionState(value: any): boolean {
    for (const key in SubscriptionSuspensionState) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionSuspensionState, key)) {
            if (SubscriptionSuspensionState[key as keyof typeof SubscriptionSuspensionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionSuspensionStateFromJSON(json: any): SubscriptionSuspensionState {
    return SubscriptionSuspensionStateFromJSONTyped(json, false);
}

export function SubscriptionSuspensionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionSuspensionState {
    return json as SubscriptionSuspensionState;
}

export function SubscriptionSuspensionStateToJSON(value?: SubscriptionSuspensionState | null): any {
    return value as any;
}

