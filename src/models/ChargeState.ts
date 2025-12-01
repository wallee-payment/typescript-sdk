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
export const ChargeState = {
    Pending: 'PENDING',
    Failed: 'FAILED',
    Successful: 'SUCCESSFUL'
} as const;
export type ChargeState = typeof ChargeState[keyof typeof ChargeState];


export function instanceOfChargeState(value: any): boolean {
    for (const key in ChargeState) {
        if (Object.prototype.hasOwnProperty.call(ChargeState, key)) {
            if (ChargeState[key as keyof typeof ChargeState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ChargeStateFromJSON(json: any): ChargeState {
    return ChargeStateFromJSONTyped(json, false);
}

export function ChargeStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeState {
    return json as ChargeState;
}

export function ChargeStateToJSON(value?: ChargeState | null): any {
    return value as any;
}

export function ChargeStateToJSONTyped(value: any, ignoreDiscriminator: boolean): ChargeState {
    return value as ChargeState;
}

