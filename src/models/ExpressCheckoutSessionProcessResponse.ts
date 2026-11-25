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
 * @interface ExpressCheckoutSessionProcessResponse
 */
export interface ExpressCheckoutSessionProcessResponse {
    /**
     * URL to which the shop must redirect the customer to continue the flow.
     * @type {string}
     * @memberof ExpressCheckoutSessionProcessResponse
     */
    readonly redirectUrl?: string;
}

/**
 * Check if a given object implements the ExpressCheckoutSessionProcessResponse interface.
 */
export function instanceOfExpressCheckoutSessionProcessResponse(value: object): value is ExpressCheckoutSessionProcessResponse {
    return true;
}

export function ExpressCheckoutSessionProcessResponseFromJSON(json: any): ExpressCheckoutSessionProcessResponse {
    return ExpressCheckoutSessionProcessResponseFromJSONTyped(json, false);
}

export function ExpressCheckoutSessionProcessResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutSessionProcessResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'redirectUrl': json['redirectUrl'] == null ? undefined : json['redirectUrl'],
    };
}

export function ExpressCheckoutSessionProcessResponseToJSON(json: any): ExpressCheckoutSessionProcessResponse {
    return ExpressCheckoutSessionProcessResponseToJSONTyped(json, false);
}

export function ExpressCheckoutSessionProcessResponseToJSONTyped(value?: Omit<ExpressCheckoutSessionProcessResponse, 'redirectUrl'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

