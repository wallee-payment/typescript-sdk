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
export const MerchantApplicationState = {
    Draft: 'DRAFT',
    Submitted: 'SUBMITTED'
} as const;
export type MerchantApplicationState = typeof MerchantApplicationState[keyof typeof MerchantApplicationState];


export function instanceOfMerchantApplicationState(value: any): boolean {
    for (const key in MerchantApplicationState) {
        if (Object.prototype.hasOwnProperty.call(MerchantApplicationState, key)) {
            if (MerchantApplicationState[key as keyof typeof MerchantApplicationState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function MerchantApplicationStateFromJSON(json: any): MerchantApplicationState {
    return MerchantApplicationStateFromJSONTyped(json, false);
}

export function MerchantApplicationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantApplicationState {
    return json as MerchantApplicationState;
}

export function MerchantApplicationStateToJSON(value?: MerchantApplicationState | null): any {
    return value as any;
}

export function MerchantApplicationStateToJSONTyped(value: any, ignoreDiscriminator: boolean): MerchantApplicationState {
    return value as MerchantApplicationState;
}

