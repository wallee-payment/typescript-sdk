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
export const SubscriptionProductState = {
    Create: 'CREATE',
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
    Retiring: 'RETIRING',
    Retired: 'RETIRED'
} as const;
export type SubscriptionProductState = typeof SubscriptionProductState[keyof typeof SubscriptionProductState];


export function instanceOfSubscriptionProductState(value: any): boolean {
    for (const key in SubscriptionProductState) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionProductState, key)) {
            if (SubscriptionProductState[key as keyof typeof SubscriptionProductState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionProductStateFromJSON(json: any): SubscriptionProductState {
    return SubscriptionProductStateFromJSONTyped(json, false);
}

export function SubscriptionProductStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductState {
    return json as SubscriptionProductState;
}

export function SubscriptionProductStateToJSON(value?: SubscriptionProductState | null): any {
    return value as any;
}

