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
export const ChargeType = {
    Asynchronous: 'ASYNCHRONOUS',
    Synchronous: 'SYNCHRONOUS',
    Token: 'TOKEN',
    Terminal: 'TERMINAL'
} as const;
export type ChargeType = typeof ChargeType[keyof typeof ChargeType];


export function instanceOfChargeType(value: any): boolean {
    for (const key in ChargeType) {
        if (Object.prototype.hasOwnProperty.call(ChargeType, key)) {
            if (ChargeType[key as keyof typeof ChargeType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ChargeTypeFromJSON(json: any): ChargeType {
    return ChargeTypeFromJSONTyped(json, false);
}

export function ChargeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeType {
    return json as ChargeType;
}

export function ChargeTypeToJSON(value?: ChargeType | null): any {
    return value as any;
}

export function ChargeTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): ChargeType {
    return value as ChargeType;
}

