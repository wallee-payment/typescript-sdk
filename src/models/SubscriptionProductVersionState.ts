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
export const SubscriptionProductVersionState = {
    Pending: 'PENDING',
    Active: 'ACTIVE',
    Obsolete: 'OBSOLETE',
    Retiring: 'RETIRING',
    Retired: 'RETIRED'
} as const;
export type SubscriptionProductVersionState = typeof SubscriptionProductVersionState[keyof typeof SubscriptionProductVersionState];


export function instanceOfSubscriptionProductVersionState(value: any): boolean {
    for (const key in SubscriptionProductVersionState) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionProductVersionState, key)) {
            if (SubscriptionProductVersionState[key as keyof typeof SubscriptionProductVersionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionProductVersionStateFromJSON(json: any): SubscriptionProductVersionState {
    return SubscriptionProductVersionStateFromJSONTyped(json, false);
}

export function SubscriptionProductVersionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductVersionState {
    return json as SubscriptionProductVersionState;
}

export function SubscriptionProductVersionStateToJSON(value?: SubscriptionProductVersionState | null): any {
    return value as any;
}

