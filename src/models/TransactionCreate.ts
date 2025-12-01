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
import type { CustomersPresence } from './CustomersPresence';
import {
    CustomersPresenceFromJSON,
    CustomersPresenceFromJSONTyped,
    CustomersPresenceToJSON,
    CustomersPresenceToJSONTyped,
} from './CustomersPresence';
import type { LineItemCreate } from './LineItemCreate';
import {
    LineItemCreateFromJSON,
    LineItemCreateFromJSONTyped,
    LineItemCreateToJSON,
    LineItemCreateToJSONTyped,
} from './LineItemCreate';
import type { TransactionEnvironmentSelectionStrategy } from './TransactionEnvironmentSelectionStrategy';
import {
    TransactionEnvironmentSelectionStrategyFromJSON,
    TransactionEnvironmentSelectionStrategyFromJSONTyped,
    TransactionEnvironmentSelectionStrategyToJSON,
    TransactionEnvironmentSelectionStrategyToJSONTyped,
} from './TransactionEnvironmentSelectionStrategy';
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
import type { Environment } from './Environment';
import {
    EnvironmentFromJSON,
    EnvironmentFromJSONTyped,
    EnvironmentToJSON,
    EnvironmentToJSONTyped,
} from './Environment';

/**
 * 
 * @export
 * @interface TransactionCreate
 */
export interface TransactionCreate {
    /**
     * The customer's email address.
     * @type {string}
     * @memberof TransactionCreate
     */
    customerEmailAddress?: string;
    /**
     * The name of the shipping method used to ship the products.
     * @type {string}
     * @memberof TransactionCreate
     */
    shippingMethod?: string;
    /**
     * The merchant's reference used to identify the invoice.
     * @type {string}
     * @memberof TransactionCreate
     */
    invoiceMerchantReference?: string;
    /**
     * The URL to redirect the customer back to after they successfully authenticated their payment.
     * @type {string}
     * @memberof TransactionCreate
     */
    successUrl?: string;
    /**
     * The customer's time zone, which affects how dates and times are formatted when communicating with the customer.
     * @type {string}
     * @memberof TransactionCreate
     */
    timeZone?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof TransactionCreate
     */
    language?: string;
    /**
     * 
     * @type {TokenizationMode}
     * @memberof TransactionCreate
     */
    tokenizationMode?: TokenizationMode;
    /**
     * The payment method brands that can be used to authorize the transaction.
     * @type {Array<number>}
     * @memberof TransactionCreate
     */
    allowedPaymentMethodBrands?: Array<number>;
    /**
     * 
     * @type {TransactionCompletionBehavior}
     * @memberof TransactionCreate
     */
    completionBehavior?: TransactionCompletionBehavior;
    /**
     * The payment token that should be used to charge the customer.
     * @type {number}
     * @memberof TransactionCreate
     */
    token?: number;
    /**
     * The line items purchased by the customer.
     * @type {Array<LineItemCreate>}
     * @memberof TransactionCreate
     */
    lineItems: Array<LineItemCreate>;
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof TransactionCreate
     */
    metaData?: { [key: string]: string; };
    /**
     * The unique identifier of the customer in the external system.
     * @type {string}
     * @memberof TransactionCreate
     */
    customerId?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof TransactionCreate
     */
    shippingAddress?: AddressCreate;
    /**
     * The three-letter code (ISO 4217 format) of the transaction's currency.
     * @type {string}
     * @memberof TransactionCreate
     */
    currency?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof TransactionCreate
     */
    billingAddress?: AddressCreate;
    /**
     * The merchant's reference used to identify the transaction.
     * @type {string}
     * @memberof TransactionCreate
     */
    merchantReference?: string;
    /**
     * The payment method configurations that can be used to authorize the transaction.
     * @type {Array<number>}
     * @memberof TransactionCreate
     */
    allowedPaymentMethodConfigurations?: Array<number>;
    /**
     * The URL to redirect the customer back to after they canceled or failed to authenticated their payment.
     * @type {string}
     * @memberof TransactionCreate
     */
    failedUrl?: string;
    /**
     * Whether the customer can make further payment attempts if the first one has failed. Default is true.
     * @type {boolean}
     * @memberof TransactionCreate
     */
    chargeRetryEnabled?: boolean;
    /**
     * Whether email sending is deactivated for the transaction. Default is false.
     * @type {boolean}
     * @memberof TransactionCreate
     */
    emailsDisabled?: boolean;
    /**
     * 
     * @type {Environment}
     * @memberof TransactionCreate
     */
    environment?: Environment;
    /**
     * 
     * @type {TransactionEnvironmentSelectionStrategy}
     * @memberof TransactionCreate
     */
    environmentSelectionStrategy?: TransactionEnvironmentSelectionStrategy;
    /**
     * Allows to link the transaction to the data collected from the customer's device.
     * @type {string}
     * @memberof TransactionCreate
     */
    deviceSessionIdentifier?: string;
    /**
     * Whether the transaction can be confirmed automatically or whether this must be done explicitly via the API. Default is true.
     * @type {boolean}
     * @memberof TransactionCreate
     */
    autoConfirmationEnabled?: boolean;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof TransactionCreate
     */
    spaceViewId?: number;
    /**
     * 
     * @type {CustomersPresence}
     * @memberof TransactionCreate
     */
    customersPresence?: CustomersPresence;
}



/**
 * Check if a given object implements the TransactionCreate interface.
 */
export function instanceOfTransactionCreate(value: object): value is TransactionCreate {
    if (!('lineItems' in value) || value['lineItems'] === undefined) return false;
    return true;
}

export function TransactionCreateFromJSON(json: any): TransactionCreate {
    return TransactionCreateFromJSONTyped(json, false);
}

export function TransactionCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCreate {
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
        'lineItems': ((json['lineItems'] as Array<any>).map(LineItemCreateFromJSON)),
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'shippingAddress': json['shippingAddress'] == null ? undefined : AddressCreateFromJSON(json['shippingAddress']),
        'currency': json['currency'] == null ? undefined : json['currency'],
        'billingAddress': json['billingAddress'] == null ? undefined : AddressCreateFromJSON(json['billingAddress']),
        'merchantReference': json['merchantReference'] == null ? undefined : json['merchantReference'],
        'allowedPaymentMethodConfigurations': json['allowedPaymentMethodConfigurations'] == null ? undefined : json['allowedPaymentMethodConfigurations'],
        'failedUrl': json['failedUrl'] == null ? undefined : json['failedUrl'],
        'chargeRetryEnabled': json['chargeRetryEnabled'] == null ? undefined : json['chargeRetryEnabled'],
        'emailsDisabled': json['emailsDisabled'] == null ? undefined : json['emailsDisabled'],
        'environment': json['environment'] == null ? undefined : EnvironmentFromJSON(json['environment']),
        'environmentSelectionStrategy': json['environmentSelectionStrategy'] == null ? undefined : TransactionEnvironmentSelectionStrategyFromJSON(json['environmentSelectionStrategy']),
        'deviceSessionIdentifier': json['deviceSessionIdentifier'] == null ? undefined : json['deviceSessionIdentifier'],
        'autoConfirmationEnabled': json['autoConfirmationEnabled'] == null ? undefined : json['autoConfirmationEnabled'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'customersPresence': json['customersPresence'] == null ? undefined : CustomersPresenceFromJSON(json['customersPresence']),
    };
}

export function TransactionCreateToJSON(json: any): TransactionCreate {
    return TransactionCreateToJSONTyped(json, false);
}

export function TransactionCreateToJSONTyped(value?: TransactionCreate | null, ignoreDiscriminator: boolean = false): any {
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
        'lineItems': ((value['lineItems'] as Array<any>).map(LineItemCreateToJSON)),
        'metaData': value['metaData'],
        'customerId': value['customerId'],
        'shippingAddress': AddressCreateToJSON(value['shippingAddress']),
        'currency': value['currency'],
        'billingAddress': AddressCreateToJSON(value['billingAddress']),
        'merchantReference': value['merchantReference'],
        'allowedPaymentMethodConfigurations': value['allowedPaymentMethodConfigurations'],
        'failedUrl': value['failedUrl'],
        'chargeRetryEnabled': value['chargeRetryEnabled'],
        'emailsDisabled': value['emailsDisabled'],
        'environment': EnvironmentToJSON(value['environment']),
        'environmentSelectionStrategy': TransactionEnvironmentSelectionStrategyToJSON(value['environmentSelectionStrategy']),
        'deviceSessionIdentifier': value['deviceSessionIdentifier'],
        'autoConfirmationEnabled': value['autoConfirmationEnabled'],
        'spaceViewId': value['spaceViewId'],
        'customersPresence': CustomersPresenceToJSON(value['customersPresence']),
    };
}

