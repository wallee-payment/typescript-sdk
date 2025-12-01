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
export const SubscriptionVersionState = {
    Pending: 'PENDING',
    Initializing: 'INITIALIZING',
    Failed: 'FAILED',
    Active: 'ACTIVE',
    Terminating: 'TERMINATING',
    Terminated: 'TERMINATED'
} as const;
export type SubscriptionVersionState = typeof SubscriptionVersionState[keyof typeof SubscriptionVersionState];


export function instanceOfSubscriptionVersionState(value: any): boolean {
    for (const key in SubscriptionVersionState) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionVersionState, key)) {
            if (SubscriptionVersionState[key as keyof typeof SubscriptionVersionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionVersionStateFromJSON(json: any): SubscriptionVersionState {
    return SubscriptionVersionStateFromJSONTyped(json, false);
}

export function SubscriptionVersionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionVersionState {
    return json as SubscriptionVersionState;
}

export function SubscriptionVersionStateToJSON(value?: SubscriptionVersionState | null): any {
    return value as any;
}

export function SubscriptionVersionStateToJSONTyped(value: any, ignoreDiscriminator: boolean): SubscriptionVersionState {
    return value as SubscriptionVersionState;
}

