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
export const WalleejoinPartnershipState = {
    Pending: 'PENDING',
    Active: 'ACTIVE',
    Terminated: 'TERMINATED'
} as const;
export type WalleejoinPartnershipState = typeof WalleejoinPartnershipState[keyof typeof WalleejoinPartnershipState];


export function instanceOfWalleejoinPartnershipState(value: any): boolean {
    for (const key in WalleejoinPartnershipState) {
        if (Object.prototype.hasOwnProperty.call(WalleejoinPartnershipState, key)) {
            if (WalleejoinPartnershipState[key as keyof typeof WalleejoinPartnershipState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function WalleejoinPartnershipStateFromJSON(json: any): WalleejoinPartnershipState {
    return WalleejoinPartnershipStateFromJSONTyped(json, false);
}

export function WalleejoinPartnershipStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalleejoinPartnershipState {
    return json as WalleejoinPartnershipState;
}

export function WalleejoinPartnershipStateToJSON(value?: WalleejoinPartnershipState | null): any {
    return value as any;
}

export function WalleejoinPartnershipStateToJSONTyped(value: any, ignoreDiscriminator: boolean): WalleejoinPartnershipState {
    return value as WalleejoinPartnershipState;
}

