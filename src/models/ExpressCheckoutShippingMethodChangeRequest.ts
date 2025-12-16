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
/**
 * 
 * @export
 * @interface ExpressCheckoutShippingMethodChangeRequest
 */
export interface ExpressCheckoutShippingMethodChangeRequest {
    /**
     * Identifier of the selected shipping option.
     * @type {string}
     * @memberof ExpressCheckoutShippingMethodChangeRequest
     */
    readonly shippingMethodId?: string;
}

/**
 * Check if a given object implements the ExpressCheckoutShippingMethodChangeRequest interface.
 */
export function instanceOfExpressCheckoutShippingMethodChangeRequest(value: object): value is ExpressCheckoutShippingMethodChangeRequest {
    return true;
}

export function ExpressCheckoutShippingMethodChangeRequestFromJSON(json: any): ExpressCheckoutShippingMethodChangeRequest {
    return ExpressCheckoutShippingMethodChangeRequestFromJSONTyped(json, false);
}

export function ExpressCheckoutShippingMethodChangeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutShippingMethodChangeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'shippingMethodId': json['shippingMethodId'] == null ? undefined : json['shippingMethodId'],
    };
}

export function ExpressCheckoutShippingMethodChangeRequestToJSON(json: any): ExpressCheckoutShippingMethodChangeRequest {
    return ExpressCheckoutShippingMethodChangeRequestToJSONTyped(json, false);
}

export function ExpressCheckoutShippingMethodChangeRequestToJSONTyped(value?: Omit<ExpressCheckoutShippingMethodChangeRequest, 'shippingMethodId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

