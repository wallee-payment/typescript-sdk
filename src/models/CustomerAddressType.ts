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
export const CustomerAddressType = {
    Billing: 'BILLING',
    Shipping: 'SHIPPING',
    Both: 'BOTH'
} as const;
export type CustomerAddressType = typeof CustomerAddressType[keyof typeof CustomerAddressType];


export function instanceOfCustomerAddressType(value: any): boolean {
    for (const key in CustomerAddressType) {
        if (Object.prototype.hasOwnProperty.call(CustomerAddressType, key)) {
            if (CustomerAddressType[key as keyof typeof CustomerAddressType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CustomerAddressTypeFromJSON(json: any): CustomerAddressType {
    return CustomerAddressTypeFromJSONTyped(json, false);
}

export function CustomerAddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAddressType {
    return json as CustomerAddressType;
}

export function CustomerAddressTypeToJSON(value?: CustomerAddressType | null): any {
    return value as any;
}

