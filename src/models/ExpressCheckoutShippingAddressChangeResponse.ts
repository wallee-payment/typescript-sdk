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
import type { ExpressCheckoutShippingOption } from './ExpressCheckoutShippingOption';
import {
    ExpressCheckoutShippingOptionFromJSON,
    ExpressCheckoutShippingOptionFromJSONTyped,
    ExpressCheckoutShippingOptionToJSON,
    ExpressCheckoutShippingOptionToJSONTyped,
} from './ExpressCheckoutShippingOption';

/**
 * 
 * @export
 * @interface ExpressCheckoutShippingAddressChangeResponse
 */
export interface ExpressCheckoutShippingAddressChangeResponse {
    /**
     * 
     * @type {number}
     * @memberof ExpressCheckoutShippingAddressChangeResponse
     */
    readonly orderTotal?: number;
    /**
     * 
     * @type {Array<ExpressCheckoutShippingOption>}
     * @memberof ExpressCheckoutShippingAddressChangeResponse
     */
    readonly shippingOptions?: Array<ExpressCheckoutShippingOption>;
}

/**
 * Check if a given object implements the ExpressCheckoutShippingAddressChangeResponse interface.
 */
export function instanceOfExpressCheckoutShippingAddressChangeResponse(value: object): value is ExpressCheckoutShippingAddressChangeResponse {
    return true;
}

export function ExpressCheckoutShippingAddressChangeResponseFromJSON(json: any): ExpressCheckoutShippingAddressChangeResponse {
    return ExpressCheckoutShippingAddressChangeResponseFromJSONTyped(json, false);
}

export function ExpressCheckoutShippingAddressChangeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutShippingAddressChangeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'orderTotal': json['orderTotal'] == null ? undefined : json['orderTotal'],
        'shippingOptions': json['shippingOptions'] == null ? undefined : ((json['shippingOptions'] as Array<any>).map(ExpressCheckoutShippingOptionFromJSON)),
    };
}

export function ExpressCheckoutShippingAddressChangeResponseToJSON(json: any): ExpressCheckoutShippingAddressChangeResponse {
    return ExpressCheckoutShippingAddressChangeResponseToJSONTyped(json, false);
}

export function ExpressCheckoutShippingAddressChangeResponseToJSONTyped(value?: Omit<ExpressCheckoutShippingAddressChangeResponse, 'orderTotal'|'shippingOptions'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

