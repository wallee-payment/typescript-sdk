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
 * @interface ExpressCheckoutSessionProcessRequest
 */
export interface ExpressCheckoutSessionProcessRequest {
    /**
     * Mandatory URL to redirect the customer to after a successful payment for Express Checkout.
     * @type {string}
     * @memberof ExpressCheckoutSessionProcessRequest
     */
    successUrl: string;
    /**
     * The Express Checkout session identifier returned by create-session.
     * @type {number}
     * @memberof ExpressCheckoutSessionProcessRequest
     */
    sessionId: number;
    /**
     * Mandatory merchant order identifier used as merchantReference on the created transaction.
     * @type {string}
     * @memberof ExpressCheckoutSessionProcessRequest
     */
    merchantReference: string;
    /**
     * Mandatory URL to redirect the customer to after a failed payment for Express Checkout.
     * @type {string}
     * @memberof ExpressCheckoutSessionProcessRequest
     */
    failureUrl: string;
}

/**
 * Check if a given object implements the ExpressCheckoutSessionProcessRequest interface.
 */
export function instanceOfExpressCheckoutSessionProcessRequest(value: object): value is ExpressCheckoutSessionProcessRequest {
    if (!('successUrl' in value) || value['successUrl'] === undefined) return false;
    if (!('sessionId' in value) || value['sessionId'] === undefined) return false;
    if (!('merchantReference' in value) || value['merchantReference'] === undefined) return false;
    if (!('failureUrl' in value) || value['failureUrl'] === undefined) return false;
    return true;
}

export function ExpressCheckoutSessionProcessRequestFromJSON(json: any): ExpressCheckoutSessionProcessRequest {
    return ExpressCheckoutSessionProcessRequestFromJSONTyped(json, false);
}

export function ExpressCheckoutSessionProcessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutSessionProcessRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'successUrl': json['successUrl'],
        'sessionId': json['sessionId'],
        'merchantReference': json['merchantReference'],
        'failureUrl': json['failureUrl'],
    };
}

export function ExpressCheckoutSessionProcessRequestToJSON(json: any): ExpressCheckoutSessionProcessRequest {
    return ExpressCheckoutSessionProcessRequestToJSONTyped(json, false);
}

export function ExpressCheckoutSessionProcessRequestToJSONTyped(value?: ExpressCheckoutSessionProcessRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'successUrl': value['successUrl'],
        'sessionId': value['sessionId'],
        'merchantReference': value['merchantReference'],
        'failureUrl': value['failureUrl'],
    };
}

