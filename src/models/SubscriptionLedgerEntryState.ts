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
export const SubscriptionLedgerEntryState = {
    Open: 'OPEN',
    Scheduled: 'SCHEDULED',
    Paid: 'PAID'
} as const;
export type SubscriptionLedgerEntryState = typeof SubscriptionLedgerEntryState[keyof typeof SubscriptionLedgerEntryState];


export function instanceOfSubscriptionLedgerEntryState(value: any): boolean {
    for (const key in SubscriptionLedgerEntryState) {
        if (Object.prototype.hasOwnProperty.call(SubscriptionLedgerEntryState, key)) {
            if (SubscriptionLedgerEntryState[key as keyof typeof SubscriptionLedgerEntryState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SubscriptionLedgerEntryStateFromJSON(json: any): SubscriptionLedgerEntryState {
    return SubscriptionLedgerEntryStateFromJSONTyped(json, false);
}

export function SubscriptionLedgerEntryStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLedgerEntryState {
    return json as SubscriptionLedgerEntryState;
}

export function SubscriptionLedgerEntryStateToJSON(value?: SubscriptionLedgerEntryState | null): any {
    return value as any;
}

export function SubscriptionLedgerEntryStateToJSONTyped(value: any, ignoreDiscriminator: boolean): SubscriptionLedgerEntryState {
    return value as SubscriptionLedgerEntryState;
}

