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
import type { ExpressCheckoutWalletType } from './ExpressCheckoutWalletType';
import {
    ExpressCheckoutWalletTypeFromJSON,
    ExpressCheckoutWalletTypeFromJSONTyped,
    ExpressCheckoutWalletTypeToJSON,
    ExpressCheckoutWalletTypeToJSONTyped,
} from './ExpressCheckoutWalletType';
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressToJSONTyped,
} from './Address';
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
    TransactionToJSONTyped,
} from './Transaction';
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
    FailureReasonToJSONTyped,
} from './FailureReason';
import type { ExpressCheckoutSessionState } from './ExpressCheckoutSessionState';
import {
    ExpressCheckoutSessionStateFromJSON,
    ExpressCheckoutSessionStateFromJSONTyped,
    ExpressCheckoutSessionStateToJSON,
    ExpressCheckoutSessionStateToJSONTyped,
} from './ExpressCheckoutSessionState';
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
    LineItemToJSONTyped,
} from './LineItem';
import type { ExpressCheckoutShippingOption } from './ExpressCheckoutShippingOption';
import {
    ExpressCheckoutShippingOptionFromJSON,
    ExpressCheckoutShippingOptionFromJSONTyped,
    ExpressCheckoutShippingOptionToJSON,
    ExpressCheckoutShippingOptionToJSONTyped,
} from './ExpressCheckoutShippingOption';
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
 * @interface ExpressCheckoutSession
 */
export interface ExpressCheckoutSession {
    /**
     * The URL to fetch the shipping options from.
     * @type {string}
     * @memberof ExpressCheckoutSession
     */
    readonly merchantShippingCallbackUrl?: string;
    /**
     * The total amount of the session.
     * @type {number}
     * @memberof ExpressCheckoutSession
     */
    readonly authorizationAmount?: number;
    /**
     * 
     * @type {ExpressCheckoutWalletType}
     * @memberof ExpressCheckoutSession
     */
    walletType?: ExpressCheckoutWalletType;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof ExpressCheckoutSession
     */
    readonly plannedPurgeDate?: Date;
    /**
     * Customer time zone for presentation and cutoffs (same semantics as on Transaction).
     * @type {string}
     * @memberof ExpressCheckoutSession
     */
    readonly timeZone?: string;
    /**
     * Preferred language for customer-facing content (same semantics as on Transaction).
     * @type {string}
     * @memberof ExpressCheckoutSession
     */
    readonly language?: string;
    /**
     * The date and time when the session was created.
     * @type {Date}
     * @memberof ExpressCheckoutSession
     */
    readonly createdOn?: Date;
    /**
     * 
     * @type {Array<LineItem>}
     * @memberof ExpressCheckoutSession
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * The spaceId linked to the entity.
     * @type {number}
     * @memberof ExpressCheckoutSession
     */
    readonly linkedSpaceId?: number;
    /**
     * The base URL on the merchant shop used to create the order.
     * @type {string}
     * @memberof ExpressCheckoutSession
     */
    readonly merchantRedirectUrl?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ExpressCheckoutSession
     */
    readonly metaData?: { [key: string]: string; };
    /**
     * 
     * @type {ChargeAttemptEnvironment}
     * @memberof ExpressCheckoutSession
     */
    authorizationEnvironment?: ChargeAttemptEnvironment;
    /**
     * 
     * @type {FailureReason}
     * @memberof ExpressCheckoutSession
     */
    failureReason?: FailureReason;
    /**
     * 
     * @type {Address}
     * @memberof ExpressCheckoutSession
     */
    shippingAddress?: Address;
    /**
     * The currency of the session.
     * @type {string}
     * @memberof ExpressCheckoutSession
     */
    readonly currency?: string;
    /**
     * 
     * @type {Address}
     * @memberof ExpressCheckoutSession
     */
    billingAddress?: Address;
    /**
     * Id of the entity.
     * @type {number}
     * @memberof ExpressCheckoutSession
     */
    readonly id?: number;
    /**
     * 
     * @type {ExpressCheckoutSessionState}
     * @memberof ExpressCheckoutSession
     */
    state?: ExpressCheckoutSessionState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof ExpressCheckoutSession
     */
    readonly linkedTransaction?: number;
    /**
     * 
     * @type {Array<ExpressCheckoutShippingOption>}
     * @memberof ExpressCheckoutSession
     */
    readonly shippingOptions?: Array<ExpressCheckoutShippingOption>;
    /**
     * 
     * @type {Transaction}
     * @memberof ExpressCheckoutSession
     */
    transaction?: Transaction;
}



/**
 * Check if a given object implements the ExpressCheckoutSession interface.
 */
export function instanceOfExpressCheckoutSession(value: object): value is ExpressCheckoutSession {
    return true;
}

export function ExpressCheckoutSessionFromJSON(json: any): ExpressCheckoutSession {
    return ExpressCheckoutSessionFromJSONTyped(json, false);
}

export function ExpressCheckoutSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutSession {
    if (json == null) {
        return json;
    }
    return {
        
        'merchantShippingCallbackUrl': json['merchantShippingCallbackUrl'] == null ? undefined : json['merchantShippingCallbackUrl'],
        'authorizationAmount': json['authorizationAmount'] == null ? undefined : json['authorizationAmount'],
        'walletType': json['walletType'] == null ? undefined : ExpressCheckoutWalletTypeFromJSON(json['walletType']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'merchantRedirectUrl': json['merchantRedirectUrl'] == null ? undefined : json['merchantRedirectUrl'],
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'authorizationEnvironment': json['authorizationEnvironment'] == null ? undefined : ChargeAttemptEnvironmentFromJSON(json['authorizationEnvironment']),
        'failureReason': json['failureReason'] == null ? undefined : FailureReasonFromJSON(json['failureReason']),
        'shippingAddress': json['shippingAddress'] == null ? undefined : AddressFromJSON(json['shippingAddress']),
        'currency': json['currency'] == null ? undefined : json['currency'],
        'billingAddress': json['billingAddress'] == null ? undefined : AddressFromJSON(json['billingAddress']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : ExpressCheckoutSessionStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'shippingOptions': json['shippingOptions'] == null ? undefined : ((json['shippingOptions'] as Array<any>).map(ExpressCheckoutShippingOptionFromJSON)),
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
    };
}

export function ExpressCheckoutSessionToJSON(json: any): ExpressCheckoutSession {
    return ExpressCheckoutSessionToJSONTyped(json, false);
}

export function ExpressCheckoutSessionToJSONTyped(value?: Omit<ExpressCheckoutSession, 'merchantShippingCallbackUrl'|'authorizationAmount'|'plannedPurgeDate'|'timeZone'|'language'|'createdOn'|'lineItems'|'linkedSpaceId'|'merchantRedirectUrl'|'metaData'|'currency'|'id'|'linkedTransaction'|'shippingOptions'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'walletType': ExpressCheckoutWalletTypeToJSON(value['walletType']),
        'authorizationEnvironment': ChargeAttemptEnvironmentToJSON(value['authorizationEnvironment']),
        'failureReason': FailureReasonToJSON(value['failureReason']),
        'shippingAddress': AddressToJSON(value['shippingAddress']),
        'billingAddress': AddressToJSON(value['billingAddress']),
        'state': ExpressCheckoutSessionStateToJSON(value['state']),
        'transaction': TransactionToJSON(value['transaction']),
    };
}

