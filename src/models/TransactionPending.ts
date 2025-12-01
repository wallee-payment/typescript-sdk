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
import type { AddressCreate } from './AddressCreate';
import {
    AddressCreateFromJSON,
    AddressCreateFromJSONTyped,
    AddressCreateToJSON,
    AddressCreateToJSONTyped,
} from './AddressCreate';
import type { LineItemCreate } from './LineItemCreate';
import {
    LineItemCreateFromJSON,
    LineItemCreateFromJSONTyped,
    LineItemCreateToJSON,
    LineItemCreateToJSONTyped,
} from './LineItemCreate';
import type { TokenizationMode } from './TokenizationMode';
import {
    TokenizationModeFromJSON,
    TokenizationModeFromJSONTyped,
    TokenizationModeToJSON,
    TokenizationModeToJSONTyped,
} from './TokenizationMode';
import type { TransactionCompletionBehavior } from './TransactionCompletionBehavior';
import {
    TransactionCompletionBehaviorFromJSON,
    TransactionCompletionBehaviorFromJSONTyped,
    TransactionCompletionBehaviorToJSON,
    TransactionCompletionBehaviorToJSONTyped,
} from './TransactionCompletionBehavior';

/**
 * 
 * @export
 * @interface TransactionPending
 */
export interface TransactionPending {
    /**
     * The customer's email address.
     * @type {string}
     * @memberof TransactionPending
     */
    customerEmailAddress?: string;
    /**
     * The name of the shipping method used to ship the products.
     * @type {string}
     * @memberof TransactionPending
     */
    shippingMethod?: string;
    /**
     * The merchant's reference used to identify the invoice.
     * @type {string}
     * @memberof TransactionPending
     */
    invoiceMerchantReference?: string;
    /**
     * The URL to redirect the customer back to after they successfully authenticated their payment.
     * @type {string}
     * @memberof TransactionPending
     */
    successUrl?: string;
    /**
     * The customer's time zone, which affects how dates and times are formatted when communicating with the customer.
     * @type {string}
     * @memberof TransactionPending
     */
    timeZone?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof TransactionPending
     */
    language?: string;
    /**
     * 
     * @type {TokenizationMode}
     * @memberof TransactionPending
     */
    tokenizationMode?: TokenizationMode;
    /**
     * The payment method brands that can be used to authorize the transaction.
     * @type {Array<number>}
     * @memberof TransactionPending
     */
    allowedPaymentMethodBrands?: Array<number>;
    /**
     * 
     * @type {TransactionCompletionBehavior}
     * @memberof TransactionPending
     */
    completionBehavior?: TransactionCompletionBehavior;
    /**
     * The payment token that should be used to charge the customer.
     * @type {number}
     * @memberof TransactionPending
     */
    token?: number;
    /**
     * The line items purchased by the customer.
     * @type {Array<LineItemCreate>}
     * @memberof TransactionPending
     */
    lineItems?: Array<LineItemCreate>;
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof TransactionPending
     */
    metaData?: { [key: string]: string; };
    /**
     * The unique identifier of the customer in the external system.
     * @type {string}
     * @memberof TransactionPending
     */
    customerId?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof TransactionPending
     */
    shippingAddress?: AddressCreate;
    /**
     * The three-letter code (ISO 4217 format) of the transaction's currency.
     * @type {string}
     * @memberof TransactionPending
     */
    currency?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof TransactionPending
     */
    billingAddress?: AddressCreate;
    /**
     * The merchant's reference used to identify the transaction.
     * @type {string}
     * @memberof TransactionPending
     */
    merchantReference?: string;
    /**
     * The payment method configurations that can be used to authorize the transaction.
     * @type {Array<number>}
     * @memberof TransactionPending
     */
    allowedPaymentMethodConfigurations?: Array<number>;
    /**
     * The URL to redirect the customer back to after they canceled or failed to authenticated their payment.
     * @type {string}
     * @memberof TransactionPending
     */
    failedUrl?: string;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof TransactionPending
     */
    version: number;
}



/**
 * Check if a given object implements the TransactionPending interface.
 */
export function instanceOfTransactionPending(value: object): value is TransactionPending {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function TransactionPendingFromJSON(json: any): TransactionPending {
    return TransactionPendingFromJSONTyped(json, false);
}

export function TransactionPendingFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPending {
    if (json == null) {
        return json;
    }
    return {
        
        'customerEmailAddress': json['customerEmailAddress'] == null ? undefined : json['customerEmailAddress'],
        'shippingMethod': json['shippingMethod'] == null ? undefined : json['shippingMethod'],
        'invoiceMerchantReference': json['invoiceMerchantReference'] == null ? undefined : json['invoiceMerchantReference'],
        'successUrl': json['successUrl'] == null ? undefined : json['successUrl'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'tokenizationMode': json['tokenizationMode'] == null ? undefined : TokenizationModeFromJSON(json['tokenizationMode']),
        'allowedPaymentMethodBrands': json['allowedPaymentMethodBrands'] == null ? undefined : json['allowedPaymentMethodBrands'],
        'completionBehavior': json['completionBehavior'] == null ? undefined : TransactionCompletionBehaviorFromJSON(json['completionBehavior']),
        'token': json['token'] == null ? undefined : json['token'],
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemCreateFromJSON)),
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'shippingAddress': json['shippingAddress'] == null ? undefined : AddressCreateFromJSON(json['shippingAddress']),
        'currency': json['currency'] == null ? undefined : json['currency'],
        'billingAddress': json['billingAddress'] == null ? undefined : AddressCreateFromJSON(json['billingAddress']),
        'merchantReference': json['merchantReference'] == null ? undefined : json['merchantReference'],
        'allowedPaymentMethodConfigurations': json['allowedPaymentMethodConfigurations'] == null ? undefined : json['allowedPaymentMethodConfigurations'],
        'failedUrl': json['failedUrl'] == null ? undefined : json['failedUrl'],
        'version': json['version'],
    };
}

export function TransactionPendingToJSON(json: any): TransactionPending {
    return TransactionPendingToJSONTyped(json, false);
}

export function TransactionPendingToJSONTyped(value?: TransactionPending | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'customerEmailAddress': value['customerEmailAddress'],
        'shippingMethod': value['shippingMethod'],
        'invoiceMerchantReference': value['invoiceMerchantReference'],
        'successUrl': value['successUrl'],
        'timeZone': value['timeZone'],
        'language': value['language'],
        'tokenizationMode': TokenizationModeToJSON(value['tokenizationMode']),
        'allowedPaymentMethodBrands': value['allowedPaymentMethodBrands'],
        'completionBehavior': TransactionCompletionBehaviorToJSON(value['completionBehavior']),
        'token': value['token'],
        'lineItems': value['lineItems'] == null ? undefined : ((value['lineItems'] as Array<any>).map(LineItemCreateToJSON)),
        'metaData': value['metaData'],
        'customerId': value['customerId'],
        'shippingAddress': AddressCreateToJSON(value['shippingAddress']),
        'currency': value['currency'],
        'billingAddress': AddressCreateToJSON(value['billingAddress']),
        'merchantReference': value['merchantReference'],
        'allowedPaymentMethodConfigurations': value['allowedPaymentMethodConfigurations'],
        'failedUrl': value['failedUrl'],
        'version': value['version'],
    };
}

