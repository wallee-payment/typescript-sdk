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
import { mapValues } from '../runtime';
import type { CustomerAddressType } from './CustomerAddressType';
import {
    CustomerAddressTypeFromJSON,
    CustomerAddressTypeFromJSONTyped,
    CustomerAddressTypeToJSON,
} from './CustomerAddressType';
import type { CustomerPostalAddressCreate } from './CustomerPostalAddressCreate';
import {
    CustomerPostalAddressCreateFromJSON,
    CustomerPostalAddressCreateFromJSONTyped,
    CustomerPostalAddressCreateToJSON,
} from './CustomerPostalAddressCreate';

/**
 * 
 * @export
 * @interface CustomerAddressCreate
 */
export interface CustomerAddressCreate {
    /**
     * 
     * @type {CustomerPostalAddressCreate}
     * @memberof CustomerAddressCreate
     */
    address?: CustomerPostalAddressCreate;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof CustomerAddressCreate
     */
    addressType?: CustomerAddressType;
    /**
     * The customer that the object belongs to.
     * @type {number}
     * @memberof CustomerAddressCreate
     */
    customer: number;
}

/**
 * Check if a given object implements the CustomerAddressCreate interface.
 */
export function instanceOfCustomerAddressCreate(value: object): value is CustomerAddressCreate {
    if (!('customer' in value) || value['customer'] === undefined) return false;
    return true;
}

export function CustomerAddressCreateFromJSON(json: any): CustomerAddressCreate {
    return CustomerAddressCreateFromJSONTyped(json, false);
}

export function CustomerAddressCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAddressCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : CustomerPostalAddressCreateFromJSON(json['address']),
        'addressType': json['addressType'] == null ? undefined : CustomerAddressTypeFromJSON(json['addressType']),
        'customer': json['customer'],
    };
}

export function CustomerAddressCreateToJSON(value?: CustomerAddressCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': CustomerPostalAddressCreateToJSON(value['address']),
        'addressType': CustomerAddressTypeToJSON(value['addressType']),
        'customer': value['customer'],
    };
}

