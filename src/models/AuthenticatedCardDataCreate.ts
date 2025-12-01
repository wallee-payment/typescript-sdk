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
import type { CardCryptogramCreate } from './CardCryptogramCreate';
import {
    CardCryptogramCreateFromJSON,
    CardCryptogramCreateFromJSONTyped,
    CardCryptogramCreateToJSON,
    CardCryptogramCreateToJSONTyped,
} from './CardCryptogramCreate';
import type { PanType } from './PanType';
import {
    PanTypeFromJSON,
    PanTypeFromJSONTyped,
    PanTypeToJSON,
    PanTypeToJSONTyped,
} from './PanType';
import type { CardholderAuthenticationCreate } from './CardholderAuthenticationCreate';
import {
    CardholderAuthenticationCreateFromJSON,
    CardholderAuthenticationCreateFromJSONTyped,
    CardholderAuthenticationCreateToJSON,
    CardholderAuthenticationCreateToJSONTyped,
} from './CardholderAuthenticationCreate';
import type { RecurringIndicator } from './RecurringIndicator';
import {
    RecurringIndicatorFromJSON,
    RecurringIndicatorFromJSONTyped,
    RecurringIndicatorToJSON,
    RecurringIndicatorToJSONTyped,
} from './RecurringIndicator';

/**
 * 
 * @export
 * @interface AuthenticatedCardDataCreate
 */
export interface AuthenticatedCardDataCreate {
    /**
     * The expiry date of the card, indicating its validity period in yyyy-mm format (e.g., 2023-09).
     * @type {string}
     * @memberof AuthenticatedCardDataCreate
     */
    expiryDate?: string;
    /**
     * 
     * @type {PanType}
     * @memberof AuthenticatedCardDataCreate
     */
    panType?: PanType;
    /**
     * The name of the cardholder, as printed on the card, identifying the card owner.
     * @type {string}
     * @memberof AuthenticatedCardDataCreate
     */
    cardHolderName?: string;
    /**
     * The security code used to validate the card during transactions.
     * @type {string}
     * @memberof AuthenticatedCardDataCreate
     */
    cardVerificationCode?: string;
    /**
     * The card's primary account number (PAN), the unique identifier of the card.
     * @type {string}
     * @memberof AuthenticatedCardDataCreate
     */
    primaryAccountNumber: string;
    /**
     * 
     * @type {RecurringIndicator}
     * @memberof AuthenticatedCardDataCreate
     */
    recurringIndicator?: RecurringIndicator;
    /**
     * A reference specific to the card's transaction within its payment scheme.
     * @type {string}
     * @memberof AuthenticatedCardDataCreate
     */
    schemeTransactionReference?: string;
    /**
     * 
     * @type {CardholderAuthenticationCreate}
     * @memberof AuthenticatedCardDataCreate
     */
    cardholderAuthentication?: CardholderAuthenticationCreate;
    /**
     * The token requestor identifier (TRID) identifies the entity requesting tokenization for a card transaction.
     * @type {string}
     * @memberof AuthenticatedCardDataCreate
     */
    tokenRequestorId?: string;
    /**
     * 
     * @type {CardCryptogramCreate}
     * @memberof AuthenticatedCardDataCreate
     */
    cryptogram?: CardCryptogramCreate;
}



/**
 * Check if a given object implements the AuthenticatedCardDataCreate interface.
 */
export function instanceOfAuthenticatedCardDataCreate(value: object): value is AuthenticatedCardDataCreate {
    if (!('primaryAccountNumber' in value) || value['primaryAccountNumber'] === undefined) return false;
    return true;
}

export function AuthenticatedCardDataCreateFromJSON(json: any): AuthenticatedCardDataCreate {
    return AuthenticatedCardDataCreateFromJSONTyped(json, false);
}

export function AuthenticatedCardDataCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticatedCardDataCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'expiryDate': json['expiryDate'] == null ? undefined : json['expiryDate'],
        'panType': json['panType'] == null ? undefined : PanTypeFromJSON(json['panType']),
        'cardHolderName': json['cardHolderName'] == null ? undefined : json['cardHolderName'],
        'cardVerificationCode': json['cardVerificationCode'] == null ? undefined : json['cardVerificationCode'],
        'primaryAccountNumber': json['primaryAccountNumber'],
        'recurringIndicator': json['recurringIndicator'] == null ? undefined : RecurringIndicatorFromJSON(json['recurringIndicator']),
        'schemeTransactionReference': json['schemeTransactionReference'] == null ? undefined : json['schemeTransactionReference'],
        'cardholderAuthentication': json['cardholderAuthentication'] == null ? undefined : CardholderAuthenticationCreateFromJSON(json['cardholderAuthentication']),
        'tokenRequestorId': json['tokenRequestorId'] == null ? undefined : json['tokenRequestorId'],
        'cryptogram': json['cryptogram'] == null ? undefined : CardCryptogramCreateFromJSON(json['cryptogram']),
    };
}

export function AuthenticatedCardDataCreateToJSON(json: any): AuthenticatedCardDataCreate {
    return AuthenticatedCardDataCreateToJSONTyped(json, false);
}

export function AuthenticatedCardDataCreateToJSONTyped(value?: AuthenticatedCardDataCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'expiryDate': value['expiryDate'],
        'panType': PanTypeToJSON(value['panType']),
        'cardHolderName': value['cardHolderName'],
        'cardVerificationCode': value['cardVerificationCode'],
        'primaryAccountNumber': value['primaryAccountNumber'],
        'recurringIndicator': RecurringIndicatorToJSON(value['recurringIndicator']),
        'schemeTransactionReference': value['schemeTransactionReference'],
        'cardholderAuthentication': CardholderAuthenticationCreateToJSON(value['cardholderAuthentication']),
        'tokenRequestorId': value['tokenRequestorId'],
        'cryptogram': CardCryptogramCreateToJSON(value['cryptogram']),
    };
}

