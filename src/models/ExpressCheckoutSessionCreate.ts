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
import type { ChargeAttemptEnvironment } from './ChargeAttemptEnvironment';
import {
    ChargeAttemptEnvironmentFromJSON,
    ChargeAttemptEnvironmentFromJSONTyped,
    ChargeAttemptEnvironmentToJSON,
    ChargeAttemptEnvironmentToJSONTyped,
} from './ChargeAttemptEnvironment';

/**
 * 
 * @export
 * @interface ExpressCheckoutSessionCreate
 */
export interface ExpressCheckoutSessionCreate {
    /**
     * 
     * @type {Array<LineItem>}
     * @memberof ExpressCheckoutSessionCreate
     */
    lineItems: Array<LineItem>;
    /**
     * The URL to fetch the shipping options from.
     * @type {string}
     * @memberof ExpressCheckoutSessionCreate
     */
    merchantShippingCallbackUrl?: string;
    /**
     * The base URL on the merchant shop used to create the order.
     * @type {string}
     * @memberof ExpressCheckoutSessionCreate
     */
    merchantRedirectUrl: string;
    /**
     * 
     * @type {ChargeAttemptEnvironment}
     * @memberof ExpressCheckoutSessionCreate
     */
    authorizationEnvironment: ChargeAttemptEnvironment;
    /**
     * Customer time zone for presentation and cutoffs (same semantics as on Transaction).
     * @type {string}
     * @memberof ExpressCheckoutSessionCreate
     */
    timeZone?: string;
    /**
     * The currency of the session.
     * @type {string}
     * @memberof ExpressCheckoutSessionCreate
     */
    currency: string;
    /**
     * Preferred language for customer-facing content (same semantics as on Transaction).
     * @type {string}
     * @memberof ExpressCheckoutSessionCreate
     */
    language?: string;
}



/**
 * Check if a given object implements the ExpressCheckoutSessionCreate interface.
 */
export function instanceOfExpressCheckoutSessionCreate(value: object): value is ExpressCheckoutSessionCreate {
    if (!('lineItems' in value) || value['lineItems'] === undefined) return false;
    if (!('merchantRedirectUrl' in value) || value['merchantRedirectUrl'] === undefined) return false;
    if (!('authorizationEnvironment' in value) || value['authorizationEnvironment'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    return true;
}

export function ExpressCheckoutSessionCreateFromJSON(json: any): ExpressCheckoutSessionCreate {
    return ExpressCheckoutSessionCreateFromJSONTyped(json, false);
}

export function ExpressCheckoutSessionCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutSessionCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItems': ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'merchantShippingCallbackUrl': json['merchantShippingCallbackUrl'] == null ? undefined : json['merchantShippingCallbackUrl'],
        'merchantRedirectUrl': json['merchantRedirectUrl'],
        'authorizationEnvironment': ChargeAttemptEnvironmentFromJSON(json['authorizationEnvironment']),
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'currency': json['currency'],
        'language': json['language'] == null ? undefined : json['language'],
    };
}

export function ExpressCheckoutSessionCreateToJSON(json: any): ExpressCheckoutSessionCreate {
    return ExpressCheckoutSessionCreateToJSONTyped(json, false);
}

export function ExpressCheckoutSessionCreateToJSONTyped(value?: ExpressCheckoutSessionCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lineItems': ((value['lineItems'] as Array<any>).map(LineItemToJSON)),
        'merchantShippingCallbackUrl': value['merchantShippingCallbackUrl'],
        'merchantRedirectUrl': value['merchantRedirectUrl'],
        'authorizationEnvironment': ChargeAttemptEnvironmentToJSON(value['authorizationEnvironment']),
        'timeZone': value['timeZone'],
        'currency': value['currency'],
        'language': value['language'],
    };
}

