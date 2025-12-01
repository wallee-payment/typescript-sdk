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
import type { Customer } from './Customer';
import {
    CustomerFromJSON,
    CustomerFromJSONTyped,
    CustomerToJSON,
    CustomerToJSONTyped,
} from './Customer';
import type { CustomerAddressType } from './CustomerAddressType';
import {
    CustomerAddressTypeFromJSON,
    CustomerAddressTypeFromJSONTyped,
    CustomerAddressTypeToJSON,
    CustomerAddressTypeToJSONTyped,
} from './CustomerAddressType';
import type { CustomerPostalAddress } from './CustomerPostalAddress';
import {
    CustomerPostalAddressFromJSON,
    CustomerPostalAddressFromJSONTyped,
    CustomerPostalAddressToJSON,
    CustomerPostalAddressToJSONTyped,
} from './CustomerPostalAddress';

/**
 * 
 * @export
 * @interface CustomerAddress
 */
export interface CustomerAddress {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof CustomerAddress
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {CustomerPostalAddress}
     * @memberof CustomerAddress
     */
    address?: CustomerPostalAddress;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof CustomerAddress
     */
    addressType?: CustomerAddressType;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof CustomerAddress
     */
    readonly id?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof CustomerAddress
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof CustomerAddress
     */
    readonly version?: number;
    /**
     * 
     * @type {Customer}
     * @memberof CustomerAddress
     */
    customer?: Customer;
    /**
     * Whether this is the customer's default address.
     * @type {boolean}
     * @memberof CustomerAddress
     */
    readonly defaultAddress?: boolean;
}



/**
 * Check if a given object implements the CustomerAddress interface.
 */
export function instanceOfCustomerAddress(value: object): value is CustomerAddress {
    return true;
}

export function CustomerAddressFromJSON(json: any): CustomerAddress {
    return CustomerAddressFromJSONTyped(json, false);
}

export function CustomerAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'address': json['address'] == null ? undefined : CustomerPostalAddressFromJSON(json['address']),
        'addressType': json['addressType'] == null ? undefined : CustomerAddressTypeFromJSON(json['addressType']),
        'id': json['id'] == null ? undefined : json['id'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'customer': json['customer'] == null ? undefined : CustomerFromJSON(json['customer']),
        'defaultAddress': json['defaultAddress'] == null ? undefined : json['defaultAddress'],
    };
}

export function CustomerAddressToJSON(json: any): CustomerAddress {
    return CustomerAddressToJSONTyped(json, false);
}

export function CustomerAddressToJSONTyped(value?: Omit<CustomerAddress, 'linkedSpaceId'|'id'|'createdOn'|'version'|'defaultAddress'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': CustomerPostalAddressToJSON(value['address']),
        'addressType': CustomerAddressTypeToJSON(value['addressType']),
        'customer': CustomerToJSON(value['customer']),
    };
}

