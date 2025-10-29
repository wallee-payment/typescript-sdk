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
import type { PaymentLinkAddressHandlingMode } from './PaymentLinkAddressHandlingMode';
import {
    PaymentLinkAddressHandlingModeFromJSON,
    PaymentLinkAddressHandlingModeFromJSONTyped,
    PaymentLinkAddressHandlingModeToJSON,
} from './PaymentLinkAddressHandlingMode';
import type { PaymentLinkProtectionMode } from './PaymentLinkProtectionMode';
import {
    PaymentLinkProtectionModeFromJSON,
    PaymentLinkProtectionModeFromJSONTyped,
    PaymentLinkProtectionModeToJSON,
} from './PaymentLinkProtectionMode';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
} from './LineItem';
import type { PaymentMethodConfiguration } from './PaymentMethodConfiguration';
import {
    PaymentMethodConfigurationFromJSON,
    PaymentMethodConfigurationFromJSONTyped,
    PaymentMethodConfigurationToJSON,
} from './PaymentMethodConfiguration';

/**
 * 
 * @export
 * @interface PaymentLink
 */
export interface PaymentLink {
    /**
     * 
     * @type {PaymentLinkAddressHandlingMode}
     * @memberof PaymentLink
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
     * @memberof PaymentLink
     */
    readonly allowedRedirectionDomains?: Set<string>;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentLink
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentLink
     */
    readonly externalId?: string;
    /**
     * The language for displaying the payment page. If not specified, it can be supplied via the 'language' request parameter.
     * @type {string}
     * @memberof PaymentLink
     */
    readonly language?: string;
    /**
     * The earliest date the payment link can be used to initiate a transaction. If no date is provided, the link will be available immediately.
     * @type {Date}
     * @memberof PaymentLink
     */
    readonly availableFrom?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentLink
     */
    readonly version?: number;
    /**
     * The public URL to share with customers for making payments.
     * @type {string}
     * @memberof PaymentLink
     */
    readonly url?: string;
    /**
     * The line items representing what is being sold. If not specified, they can be supplied via request parameters.
     * @type {Array<LineItem>}
     * @memberof PaymentLink
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * 
     * @type {PaymentLinkProtectionMode}
     * @memberof PaymentLink
     */
    protectionMode?: PaymentLinkProtectionMode;
    /**
     * The latest date the payment link can be used to initiate a transaction. If no date is provided, the link will remain available indefinitely.
     * @type {Date}
     * @memberof PaymentLink
     */
    readonly availableUntil?: Date;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentLink
     */
    readonly linkedSpaceId?: number;
    /**
     * The name used to identify the payment link.
     * @type {string}
     * @memberof PaymentLink
     */
    readonly name?: string;
    /**
     * The three-letter currency code (ISO 4217). If not specified, it must be provided in the 'currency' request parameter.
     * @type {string}
     * @memberof PaymentLink
     */
    readonly currency?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentLink
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof PaymentLink
     */
    state?: CreationEntityState;
    /**
     * The maximum number of transactions that can be initiated using the payment link.
     * @type {number}
     * @memberof PaymentLink
     */
    readonly maximalNumberOfTransactions?: number;
    /**
     * The payment method configurations that customers can use for making payments.
     * @type {Set<PaymentMethodConfiguration>}
     * @memberof PaymentLink
     */
    readonly allowedPaymentMethodConfigurations?: Set<PaymentMethodConfiguration>;
    /**
     * The payment link can be used within a specific space view, which may apply a customized design to the payment page.
     * @type {number}
     * @memberof PaymentLink
     */
    readonly appliedSpaceView?: number;
    /**
     * 
     * @type {PaymentLinkAddressHandlingMode}
     * @memberof PaymentLink
     */
    billingAddressHandlingMode?: PaymentLinkAddressHandlingMode;
}

/**
 * Check if a given object implements the PaymentLink interface.
 */
export function instanceOfPaymentLink(value: object): value is PaymentLink {
    return true;
}

export function PaymentLinkFromJSON(json: any): PaymentLink {
    return PaymentLinkFromJSONTyped(json, false);
}

export function PaymentLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentLink {
    if (json == null) {
        return json;
    }
    return {
        
        'shippingAddressHandlingMode': json['shippingAddressHandlingMode'] == null ? undefined : PaymentLinkAddressHandlingModeFromJSON(json['shippingAddressHandlingMode']),
        'allowedRedirectionDomains': json['allowedRedirectionDomains'] == null ? undefined : json['allowedRedirectionDomains'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'language': json['language'] == null ? undefined : json['language'],
        'availableFrom': json['availableFrom'] == null ? undefined : (new Date(json['availableFrom'])),
        'version': json['version'] == null ? undefined : json['version'],
        'url': json['url'] == null ? undefined : json['url'],
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'protectionMode': json['protectionMode'] == null ? undefined : PaymentLinkProtectionModeFromJSON(json['protectionMode']),
        'availableUntil': json['availableUntil'] == null ? undefined : (new Date(json['availableUntil'])),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'maximalNumberOfTransactions': json['maximalNumberOfTransactions'] == null ? undefined : json['maximalNumberOfTransactions'],
        'allowedPaymentMethodConfigurations': json['allowedPaymentMethodConfigurations'] == null ? undefined : (new Set((json['allowedPaymentMethodConfigurations'] as Array<any>).map(PaymentMethodConfigurationFromJSON))),
        'appliedSpaceView': json['appliedSpaceView'] == null ? undefined : json['appliedSpaceView'],
        'billingAddressHandlingMode': json['billingAddressHandlingMode'] == null ? undefined : PaymentLinkAddressHandlingModeFromJSON(json['billingAddressHandlingMode']),
    };
}

export function PaymentLinkToJSON(value?: Omit<PaymentLink, 'allowedRedirectionDomains'|'plannedPurgeDate'|'externalId'|'language'|'availableFrom'|'version'|'url'|'lineItems'|'availableUntil'|'linkedSpaceId'|'name'|'currency'|'id'|'maximalNumberOfTransactions'|'allowedPaymentMethodConfigurations'|'appliedSpaceView'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'shippingAddressHandlingMode': PaymentLinkAddressHandlingModeToJSON(value['shippingAddressHandlingMode']),
        'protectionMode': PaymentLinkProtectionModeToJSON(value['protectionMode']),
        'state': CreationEntityStateToJSON(value['state']),
        'billingAddressHandlingMode': PaymentLinkAddressHandlingModeToJSON(value['billingAddressHandlingMode']),
    };
}

