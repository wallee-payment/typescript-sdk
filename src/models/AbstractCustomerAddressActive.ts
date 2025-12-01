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
 * @interface AbstractCustomerAddressActive
 */
export interface AbstractCustomerAddressActive {
    /**
     * 
     * @type {CustomerPostalAddressCreate}
     * @memberof AbstractCustomerAddressActive
     */
    address?: CustomerPostalAddressCreate;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof AbstractCustomerAddressActive
     */
    addressType?: CustomerAddressType;
}



/**
 * Check if a given object implements the AbstractCustomerAddressActive interface.
 */
export function instanceOfAbstractCustomerAddressActive(value: object): value is AbstractCustomerAddressActive {
    return true;
}

export function AbstractCustomerAddressActiveFromJSON(json: any): AbstractCustomerAddressActive {
    return AbstractCustomerAddressActiveFromJSONTyped(json, false);
}

export function AbstractCustomerAddressActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractCustomerAddressActive {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : CustomerPostalAddressCreateFromJSON(json['address']),
        'addressType': json['addressType'] == null ? undefined : CustomerAddressTypeFromJSON(json['addressType']),
    };
}

export function AbstractCustomerAddressActiveToJSON(json: any): AbstractCustomerAddressActive {
    return AbstractCustomerAddressActiveToJSONTyped(json, false);
}

export function AbstractCustomerAddressActiveToJSONTyped(value?: AbstractCustomerAddressActive | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': CustomerPostalAddressCreateToJSON(value['address']),
        'addressType': CustomerAddressTypeToJSON(value['addressType']),
    };
}

