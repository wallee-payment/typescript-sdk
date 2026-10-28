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
export const SoleProprietorOwnershipType = {
    RunBusinessForOwnName: 'RUN_BUSINESS_FOR_OWN_NAME',
    IOrMyFamilyIsPep: 'I_OR_MY_FAMILY_IS_PEP',
    RunBusinessForThirdParty: 'RUN_BUSINESS_FOR_THIRD_PARTY'
} as const;
export type SoleProprietorOwnershipType = typeof SoleProprietorOwnershipType[keyof typeof SoleProprietorOwnershipType];


export function instanceOfSoleProprietorOwnershipType(value: any): boolean {
    for (const key in SoleProprietorOwnershipType) {
        if (Object.prototype.hasOwnProperty.call(SoleProprietorOwnershipType, key)) {
            if (SoleProprietorOwnershipType[key as keyof typeof SoleProprietorOwnershipType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SoleProprietorOwnershipTypeFromJSON(json: any): SoleProprietorOwnershipType {
    return SoleProprietorOwnershipTypeFromJSONTyped(json, false);
}

export function SoleProprietorOwnershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SoleProprietorOwnershipType {
    return json as SoleProprietorOwnershipType;
}

export function SoleProprietorOwnershipTypeToJSON(value?: SoleProprietorOwnershipType | null): any {
    return value as any;
}

export function SoleProprietorOwnershipTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): SoleProprietorOwnershipType {
    return value as SoleProprietorOwnershipType;
}

