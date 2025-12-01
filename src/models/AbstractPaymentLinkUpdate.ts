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
import type { LineItemCreate } from './LineItemCreate';
import {
    LineItemCreateFromJSON,
    LineItemCreateFromJSONTyped,
    LineItemCreateToJSON,
    LineItemCreateToJSONTyped,
} from './LineItemCreate';
import type { PaymentLinkAddressHandlingMode } from './PaymentLinkAddressHandlingMode';
import {
    PaymentLinkAddressHandlingModeFromJSON,
    PaymentLinkAddressHandlingModeFromJSONTyped,
    PaymentLinkAddressHandlingModeToJSON,
    PaymentLinkAddressHandlingModeToJSONTyped,
} from './PaymentLinkAddressHandlingMode';
import type { PaymentMethodConfiguration } from './PaymentMethodConfiguration';
import {
    PaymentMethodConfigurationFromJSON,
    PaymentMethodConfigurationFromJSONTyped,
    PaymentMethodConfigurationToJSON,
    PaymentMethodConfigurationToJSONTyped,
} from './PaymentMethodConfiguration';

/**
 * 
 * @export
 * @interface AbstractPaymentLinkUpdate
 */
export interface AbstractPaymentLinkUpdate {
    /**
     * The line items representing what is being sold. If not specified, they can be supplied via request parameters.
     * @type {Array<LineItemCreate>}
     * @memberof AbstractPaymentLinkUpdate
     */
    lineItems?: Array<LineItemCreate>;
    /**
     * The latest date the payment link can be used to initiate a transaction. If no date is provided, the link will remain available indefinitely.
     * @type {Date}
     * @memberof AbstractPaymentLinkUpdate
     */
    availableUntil?: Date;
    /**
     * 
     * @type {PaymentLinkAddressHandlingMode}
     * @memberof AbstractPaymentLinkUpdate
     */
    shippingAddressHandlingMode?: PaymentLinkAddressHandlingMode;
    /**
     * The domains to which the user is allowed to be redirected after the payment is completed.
     * The following options can be configured:
     * Exact domain: enter a full domain, e.g. (https://example.com).
     * Wildcard domain: use to allow subdomains, e.g. (https://*.example.com).
     * All domains: use (ALL) to allow redirection to any domain (not recommended for security reasons).
     * No domains : use (NONE) to disallow any redirection.
     * Only one option per line is allowed. Invalid entries will be rejected.
     * 
     * @type {Set<string>}
     * @memberof AbstractPaymentLinkUpdate
     */
    allowedRedirectionDomains?: Set<string>;
    /**
     * The name used to identify the payment link.
     * @type {string}
     * @memberof AbstractPaymentLinkUpdate
     */
    name?: string;
    /**
     * The three-letter currency code (ISO 4217). If not specified, it must be provided in the 'currency' request parameter.
     * @type {string}
     * @memberof AbstractPaymentLinkUpdate
     */
    currency?: string;
    /**
     * The language for displaying the payment page. If not specified, it can be supplied via the 'language' request parameter.
     * @type {string}
     * @memberof AbstractPaymentLinkUpdate
     */
    language?: string;
    /**
     * The maximum number of transactions that can be initiated using the payment link.
     * @type {number}
     * @memberof AbstractPaymentLinkUpdate
     */
    maximalNumberOfTransactions?: number;
    /**
     * The earliest date the payment link can be used to initiate a transaction. If no date is provided, the link will be available immediately.
     * @type {Date}
     * @memberof AbstractPaymentLinkUpdate
     */
    availableFrom?: Date;
    /**
     * The payment method configurations that customers can use for making payments.
     * @type {Set<PaymentMethodConfiguration>}
     * @memberof AbstractPaymentLinkUpdate
     */
    allowedPaymentMethodConfigurations?: Set<PaymentMethodConfiguration>;
    /**
     * The payment link can be used within a specific space view, which may apply a customized design to the payment page.
     * @type {number}
     * @memberof AbstractPaymentLinkUpdate
     */
    appliedSpaceView?: number;
    /**
     * 
     * @type {PaymentLinkAddressHandlingMode}
     * @memberof AbstractPaymentLinkUpdate
     */
    billingAddressHandlingMode?: PaymentLinkAddressHandlingMode;
}



/**
 * Check if a given object implements the AbstractPaymentLinkUpdate interface.
 */
export function instanceOfAbstractPaymentLinkUpdate(value: object): value is AbstractPaymentLinkUpdate {
    return true;
}

export function AbstractPaymentLinkUpdateFromJSON(json: any): AbstractPaymentLinkUpdate {
    return AbstractPaymentLinkUpdateFromJSONTyped(json, false);
}

export function AbstractPaymentLinkUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractPaymentLinkUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemCreateFromJSON)),
        'availableUntil': json['availableUntil'] == null ? undefined : (new Date(json['availableUntil'])),
        'shippingAddressHandlingMode': json['shippingAddressHandlingMode'] == null ? undefined : PaymentLinkAddressHandlingModeFromJSON(json['shippingAddressHandlingMode']),
        'allowedRedirectionDomains': json['allowedRedirectionDomains'] == null ? undefined : new Set(json['allowedRedirectionDomains']),
        'name': json['name'] == null ? undefined : json['name'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'language': json['language'] == null ? undefined : json['language'],
        'maximalNumberOfTransactions': json['maximalNumberOfTransactions'] == null ? undefined : json['maximalNumberOfTransactions'],
        'availableFrom': json['availableFrom'] == null ? undefined : (new Date(json['availableFrom'])),
        'allowedPaymentMethodConfigurations': json['allowedPaymentMethodConfigurations'] == null ? undefined : (new Set((json['allowedPaymentMethodConfigurations'] as Array<any>).map(PaymentMethodConfigurationFromJSON))),
        'appliedSpaceView': json['appliedSpaceView'] == null ? undefined : json['appliedSpaceView'],
        'billingAddressHandlingMode': json['billingAddressHandlingMode'] == null ? undefined : PaymentLinkAddressHandlingModeFromJSON(json['billingAddressHandlingMode']),
    };
}

export function AbstractPaymentLinkUpdateToJSON(json: any): AbstractPaymentLinkUpdate {
    return AbstractPaymentLinkUpdateToJSONTyped(json, false);
}

export function AbstractPaymentLinkUpdateToJSONTyped(value?: AbstractPaymentLinkUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lineItems': value['lineItems'] == null ? undefined : ((value['lineItems'] as Array<any>).map(LineItemCreateToJSON)),
        'availableUntil': value['availableUntil'] == null ? undefined : ((value['availableUntil']).toISOString()),
        'shippingAddressHandlingMode': PaymentLinkAddressHandlingModeToJSON(value['shippingAddressHandlingMode']),
        'allowedRedirectionDomains': value['allowedRedirectionDomains'] == null ? undefined : Array.from(value['allowedRedirectionDomains'] as Set<any>),
        'name': value['name'],
        'currency': value['currency'],
        'language': value['language'],
        'maximalNumberOfTransactions': value['maximalNumberOfTransactions'],
        'availableFrom': value['availableFrom'] == null ? undefined : ((value['availableFrom']).toISOString()),
        'allowedPaymentMethodConfigurations': value['allowedPaymentMethodConfigurations'] == null ? undefined : (Array.from(value['allowedPaymentMethodConfigurations'] as Set<any>).map(PaymentMethodConfigurationToJSON)),
        'appliedSpaceView': value['appliedSpaceView'],
        'billingAddressHandlingMode': PaymentLinkAddressHandlingModeToJSON(value['billingAddressHandlingMode']),
    };
}

