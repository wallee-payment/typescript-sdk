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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressToJSONTyped,
} from './Address';

/**
 * 
 * @export
 * @interface ExpressCheckoutShippingAddressChangeRequest
 */
export interface ExpressCheckoutShippingAddressChangeRequest {
    /**
     * 
     * @type {Address}
     * @memberof ExpressCheckoutShippingAddressChangeRequest
     */
    shippingAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof ExpressCheckoutShippingAddressChangeRequest
     */
    billingAddress?: Address;
}

/**
 * Check if a given object implements the ExpressCheckoutShippingAddressChangeRequest interface.
 */
export function instanceOfExpressCheckoutShippingAddressChangeRequest(value: object): value is ExpressCheckoutShippingAddressChangeRequest {
    return true;
}

export function ExpressCheckoutShippingAddressChangeRequestFromJSON(json: any): ExpressCheckoutShippingAddressChangeRequest {
    return ExpressCheckoutShippingAddressChangeRequestFromJSONTyped(json, false);
}

export function ExpressCheckoutShippingAddressChangeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutShippingAddressChangeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'shippingAddress': json['shippingAddress'] == null ? undefined : AddressFromJSON(json['shippingAddress']),
        'billingAddress': json['billingAddress'] == null ? undefined : AddressFromJSON(json['billingAddress']),
    };
}

export function ExpressCheckoutShippingAddressChangeRequestToJSON(json: any): ExpressCheckoutShippingAddressChangeRequest {
    return ExpressCheckoutShippingAddressChangeRequestToJSONTyped(json, false);
}

export function ExpressCheckoutShippingAddressChangeRequestToJSONTyped(value?: ExpressCheckoutShippingAddressChangeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'shippingAddress': AddressToJSON(value['shippingAddress']),
        'billingAddress': AddressToJSON(value['billingAddress']),
    };
}

