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
export const SubscriptionState = {
    Pending: 'PENDING',
    Initializing: 'INITIALIZING',
    Failed: 'FAILED',
    Active: 'ACTIVE',
    Suspended: 'SUSPENDED',
    TerminationScheduled: 'TERMINATION_SCHEDULED',
    Terminating: 'TERMINATING',
    Terminated: 'TERMINATED'
} as const;
export type SubscriptionState = typeof SubscriptionState[keyof typeof SubscriptionState];


export function instanceOfSubscriptionState(value: any): boolean {
    for (const key in SubscriptionState) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionState, key)) {
            if (SubscriptionState[key as keyof typeof SubscriptionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionStateFromJSON(json: any): SubscriptionState {
    return SubscriptionStateFromJSONTyped(json, false);
}

export function SubscriptionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionState {
    return json as SubscriptionState;
}

export function SubscriptionStateToJSON(value?: SubscriptionState | null): any {
    return value as any;
}

export function SubscriptionStateToJSONTyped(value: any, ignoreDiscriminator: boolean): SubscriptionState {
    return value as SubscriptionState;
}

