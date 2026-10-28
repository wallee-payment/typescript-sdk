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
export const PersonSalutation = {
    Mr: 'MR',
    Ms: 'MS',
    Mx: 'MX',
    Dr: 'DR',
    Prof: 'PROF',
    PreferNot: 'PREFER_NOT'
} as const;
export type PersonSalutation = typeof PersonSalutation[keyof typeof PersonSalutation];


export function instanceOfPersonSalutation(value: any): boolean {
    for (const key in PersonSalutation) {
        if (Object.prototype.hasOwnProperty.call(PersonSalutation, key)) {
            if (PersonSalutation[key as keyof typeof PersonSalutation] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PersonSalutationFromJSON(json: any): PersonSalutation {
    return PersonSalutationFromJSONTyped(json, false);
}

export function PersonSalutationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonSalutation {
    return json as PersonSalutation;
}

export function PersonSalutationToJSON(value?: PersonSalutation | null): any {
    return value as any;
}

export function PersonSalutationToJSONTyped(value: any, ignoreDiscriminator: boolean): PersonSalutation {
    return value as PersonSalutation;
}

