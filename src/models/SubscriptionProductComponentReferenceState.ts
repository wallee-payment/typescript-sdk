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
export const SubscriptionProductComponentReferenceState = {
    Create: 'CREATE',
    Active: 'ACTIVE',
    Deleting: 'DELETING',
    Deleted: 'DELETED'
} as const;
export type SubscriptionProductComponentReferenceState = typeof SubscriptionProductComponentReferenceState[keyof typeof SubscriptionProductComponentReferenceState];


export function instanceOfSubscriptionProductComponentReferenceState(value: any): boolean {
    for (const key in SubscriptionProductComponentReferenceState) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionProductComponentReferenceState, key)) {
            if (SubscriptionProductComponentReferenceState[key as keyof typeof SubscriptionProductComponentReferenceState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionProductComponentReferenceStateFromJSON(json: any): SubscriptionProductComponentReferenceState {
    return SubscriptionProductComponentReferenceStateFromJSONTyped(json, false);
}

export function SubscriptionProductComponentReferenceStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductComponentReferenceState {
    return json as SubscriptionProductComponentReferenceState;
}

export function SubscriptionProductComponentReferenceStateToJSON(value?: SubscriptionProductComponentReferenceState | null): any {
    return value as any;
}

