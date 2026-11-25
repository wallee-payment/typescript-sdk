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
 * @interface ExpressCheckoutSessionCreateResponse
 */
export interface ExpressCheckoutSessionCreateResponse {
    /**
     * Security token used to render the widget and continue the checkout flow.
     * @type {string}
     * @memberof ExpressCheckoutSessionCreateResponse
     */
    readonly sessionToken?: string;
    /**
     * Identifier of the newly created Express Checkout session.
     * @type {number}
     * @memberof ExpressCheckoutSessionCreateResponse
     */
    readonly sessionId?: number;
}

/**
 * Check if a given object implements the ExpressCheckoutSessionCreateResponse interface.
 */
export function instanceOfExpressCheckoutSessionCreateResponse(value: object): value is ExpressCheckoutSessionCreateResponse {
    return true;
}

export function ExpressCheckoutSessionCreateResponseFromJSON(json: any): ExpressCheckoutSessionCreateResponse {
    return ExpressCheckoutSessionCreateResponseFromJSONTyped(json, false);
}

export function ExpressCheckoutSessionCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutSessionCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'sessionToken': json['sessionToken'] == null ? undefined : json['sessionToken'],
        'sessionId': json['sessionId'] == null ? undefined : json['sessionId'],
    };
}

export function ExpressCheckoutSessionCreateResponseToJSON(json: any): ExpressCheckoutSessionCreateResponse {
    return ExpressCheckoutSessionCreateResponseToJSONTyped(json, false);
}

export function ExpressCheckoutSessionCreateResponseToJSONTyped(value?: Omit<ExpressCheckoutSessionCreateResponse, 'sessionToken'|'sessionId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

