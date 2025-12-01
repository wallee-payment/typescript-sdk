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
export const Gender = {
    Male: 'MALE',
    Female: 'FEMALE'
} as const;
export type Gender = typeof Gender[keyof typeof Gender];


export function instanceOfGender(value: any): boolean {
    for (const key in Gender) {
        if (Object.prototype.hasOwnProperty.call(Gender, key)) {
            if (Gender[key as keyof typeof Gender] === value) {
                return true;
            }
        }
    }
    return false;
}

export function GenderFromJSON(json: any): Gender {
    return GenderFromJSONTyped(json, false);
}

export function GenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Gender {
    return json as Gender;
}

export function GenderToJSON(value?: Gender | null): any {
    return value as any;
}

export function GenderToJSONTyped(value: any, ignoreDiscriminator: boolean): Gender {
    return value as Gender;
}

