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
    CustomerAddressTypeToJSONTyped,
} from './CustomerAddressType';
import type { CustomerPostalAddressCreate } from './CustomerPostalAddressCreate';
import {
    CustomerPostalAddressCreateFromJSON,
    CustomerPostalAddressCreateFromJSONTyped,
    CustomerPostalAddressCreateToJSON,
    CustomerPostalAddressCreateToJSONTyped,
} from './CustomerPostalAddressCreate';

/**
 * 
 * @export
 * @interface CustomerAddressActive
 */
export interface CustomerAddressActive {
    /**
     * 
     * @type {CustomerPostalAddressCreate}
     * @memberof CustomerAddressActive
     */
    address?: CustomerPostalAddressCreate;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof CustomerAddressActive
     */
    addressType?: CustomerAddressType;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof CustomerAddressActive
     */
    version: number;
}



/**
 * Check if a given object implements the CustomerAddressActive interface.
 */
export function instanceOfCustomerAddressActive(value: object): value is CustomerAddressActive {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function CustomerAddressActiveFromJSON(json: any): CustomerAddressActive {
    return CustomerAddressActiveFromJSONTyped(json, false);
}

export function CustomerAddressActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAddressActive {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : CustomerPostalAddressCreateFromJSON(json['address']),
        'addressType': json['addressType'] == null ? undefined : CustomerAddressTypeFromJSON(json['addressType']),
        'version': json['version'],
    };
}

export function CustomerAddressActiveToJSON(json: any): CustomerAddressActive {
    return CustomerAddressActiveToJSONTyped(json, false);
}

export function CustomerAddressActiveToJSONTyped(value?: CustomerAddressActive | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': CustomerPostalAddressCreateToJSON(value['address']),
        'addressType': CustomerAddressTypeToJSON(value['addressType']),
        'version': value['version'],
    };
}

