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
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
    LineItemToJSONTyped,
} from './LineItem';

/**
 * 
 * @export
 * @interface ExpressCheckoutShippingMethodChangeResponse
 */
export interface ExpressCheckoutShippingMethodChangeResponse {
    /**
     * 
     * @type {Array<LineItem>}
     * @memberof ExpressCheckoutShippingMethodChangeResponse
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * 
     * @type {number}
     * @memberof ExpressCheckoutShippingMethodChangeResponse
     */
    readonly orderTotal?: number;
}

/**
 * Check if a given object implements the ExpressCheckoutShippingMethodChangeResponse interface.
 */
export function instanceOfExpressCheckoutShippingMethodChangeResponse(value: object): value is ExpressCheckoutShippingMethodChangeResponse {
    return true;
}

export function ExpressCheckoutShippingMethodChangeResponseFromJSON(json: any): ExpressCheckoutShippingMethodChangeResponse {
    return ExpressCheckoutShippingMethodChangeResponseFromJSONTyped(json, false);
}

export function ExpressCheckoutShippingMethodChangeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutShippingMethodChangeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'orderTotal': json['orderTotal'] == null ? undefined : json['orderTotal'],
    };
}

export function ExpressCheckoutShippingMethodChangeResponseToJSON(json: any): ExpressCheckoutShippingMethodChangeResponse {
    return ExpressCheckoutShippingMethodChangeResponseToJSONTyped(json, false);
}

export function ExpressCheckoutShippingMethodChangeResponseToJSONTyped(value?: Omit<ExpressCheckoutShippingMethodChangeResponse, 'lineItems'|'orderTotal'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

