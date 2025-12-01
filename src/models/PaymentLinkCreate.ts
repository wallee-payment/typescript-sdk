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
import type { PaymentLinkProtectionMode } from './PaymentLinkProtectionMode';
import {
    PaymentLinkProtectionModeFromJSON,
    PaymentLinkProtectionModeFromJSONTyped,
    PaymentLinkProtectionModeToJSON,
    PaymentLinkProtectionModeToJSONTyped,
} from './PaymentLinkProtectionMode';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
    CreationEntityStateToJSONTyped,
} from './CreationEntityState';
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
 * @interface PaymentLinkCreate
 */
export interface PaymentLinkCreate {
    /**
     * The line items representing what is being sold. If not specified, they can be supplied via request parameters.
     * @type {Array<LineItemCreate>}
     * @memberof PaymentLinkCreate
     */
    lineItems?: Array<LineItemCreate>;
    /**
     * The latest date the payment link can be used to initiate a transaction. If no date is provided, the link will remain available indefinitely.
     * @type {Date}
     * @memberof PaymentLinkCreate
     */
    availableUntil?: Date;
    /**
     * 
     * @type {PaymentLinkAddressHandlingMode}
     * @memberof PaymentLinkCreate
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
     * @memberof PaymentLinkCreate
     */
    allowedRedirectionDomains?: Set<string>;
    /**
     * The name used to identify the payment link.
     * @type {string}
     * @memberof PaymentLinkCreate
     */
    name?: string;
    /**
     * The three-letter currency code (ISO 4217). If not specified, it must be provided in the 'currency' request parameter.
     * @type {string}
     * @memberof PaymentLinkCreate
     */
    currency?: string;
    /**
     * The language for displaying the payment page. If not specified, it can be supplied via the 'language' request parameter.
     * @type {string}
     * @memberof PaymentLinkCreate
     */
    language?: string;
    /**
     * The maximum number of transactions that can be initiated using the payment link.
     * @type {number}
     * @memberof PaymentLinkCreate
     */
    maximalNumberOfTransactions?: number;
    /**
     * The earliest date the payment link can be used to initiate a transaction. If no date is provided, the link will be available immediately.
     * @type {Date}
     * @memberof PaymentLinkCreate
     */
    availableFrom?: Date;
    /**
     * The payment method configurations that customers can use for making payments.
     * @type {Set<PaymentMethodConfiguration>}
     * @memberof PaymentLinkCreate
     */
    allowedPaymentMethodConfigurations?: Set<PaymentMethodConfiguration>;
    /**
     * The payment link can be used within a specific space view, which may apply a customized design to the payment page.
     * @type {number}
     * @memberof PaymentLinkCreate
     */
    appliedSpaceView?: number;
    /**
     * 
     * @type {PaymentLinkAddressHandlingMode}
     * @memberof PaymentLinkCreate
     */
    billingAddressHandlingMode?: PaymentLinkAddressHandlingMode;
    /**
     * 
     * @type {PaymentLinkProtectionMode}
     * @memberof PaymentLinkCreate
     */
    protectionMode: PaymentLinkProtectionMode;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentLinkCreate
     */
    externalId: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof PaymentLinkCreate
     */
    state?: CreationEntityState;
}



/**
 * Check if a given object implements the PaymentLinkCreate interface.
 */
export function instanceOfPaymentLinkCreate(value: object): value is PaymentLinkCreate {
    if (!('protectionMode' in value) || value['protectionMode'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    return true;
}

export function PaymentLinkCreateFromJSON(json: any): PaymentLinkCreate {
    return PaymentLinkCreateFromJSONTyped(json, false);
}

export function PaymentLinkCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentLinkCreate {
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
        'protectionMode': PaymentLinkProtectionModeFromJSON(json['protectionMode']),
        'externalId': json['externalId'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
    };
}

export function PaymentLinkCreateToJSON(json: any): PaymentLinkCreate {
    return PaymentLinkCreateToJSONTyped(json, false);
}

export function PaymentLinkCreateToJSONTyped(value?: PaymentLinkCreate | null, ignoreDiscriminator: boolean = false): any {
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
        'protectionMode': PaymentLinkProtectionModeToJSON(value['protectionMode']),
        'externalId': value['externalId'],
        'state': CreationEntityStateToJSON(value['state']),
    };
}

