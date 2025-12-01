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
export const CustomersPresence = {
    NotPresent: 'NOT_PRESENT',
    VirtualPresent: 'VIRTUAL_PRESENT',
    PhysicalPresent: 'PHYSICAL_PRESENT'
} as const;
export type CustomersPresence = typeof CustomersPresence[keyof typeof CustomersPresence];


export function instanceOfCustomersPresence(value: any): boolean {
    for (const key in CustomersPresence) {
        if (Object.prototype.hasOwnProperty.call(CustomersPresence, key)) {
            if (CustomersPresence[key as keyof typeof CustomersPresence] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CustomersPresenceFromJSON(json: any): CustomersPresence {
    return CustomersPresenceFromJSONTyped(json, false);
}

export function CustomersPresenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomersPresence {
    return json as CustomersPresence;
}

export function CustomersPresenceToJSON(value?: CustomersPresence | null): any {
    return value as any;
}

export function CustomersPresenceToJSONTyped(value: any, ignoreDiscriminator: boolean): CustomersPresence {
    return value as CustomersPresence;
}

