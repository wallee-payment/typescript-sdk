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
 * @interface TokenizedCardDataCreate
 */
export interface TokenizedCardDataCreate {
    /**
     * The expiry date of the card, indicating its validity period in yyyy-mm format (e.g., 2023-09).
     * @type {string}
     * @memberof TokenizedCardDataCreate
     */
    expiryDate?: string;
    /**
     * 
     * @type {PanType}
     * @memberof TokenizedCardDataCreate
     */
    panType?: PanType;
    /**
     * The name of the cardholder, as printed on the card, identifying the card owner.
     * @type {string}
     * @memberof TokenizedCardDataCreate
     */
    cardHolderName?: string;
    /**
     * The security code used to validate the card during transactions.
     * @type {string}
     * @memberof TokenizedCardDataCreate
     */
    cardVerificationCode?: string;
    /**
     * The card's primary account number (PAN), the unique identifier of the card.
     * @type {string}
     * @memberof TokenizedCardDataCreate
     */
    primaryAccountNumber: string;
    /**
     * 
     * @type {RecurringIndicator}
     * @memberof TokenizedCardDataCreate
     */
    recurringIndicator?: RecurringIndicator;
    /**
     * A reference specific to the card's transaction within its payment scheme.
     * @type {string}
     * @memberof TokenizedCardDataCreate
     */
    schemeTransactionReference?: string;
    /**
     * The token requestor identifier (TRID) identifies the entity requesting tokenization for a card transaction.
     * @type {string}
     * @memberof TokenizedCardDataCreate
     */
    tokenRequestorId?: string;
    /**
     * 
     * @type {CardCryptogramCreate}
     * @memberof TokenizedCardDataCreate
     */
    cryptogram?: CardCryptogramCreate;
}



/**
 * Check if a given object implements the TokenizedCardDataCreate interface.
 */
export function instanceOfTokenizedCardDataCreate(value: object): value is TokenizedCardDataCreate {
    if (!('primaryAccountNumber' in value) || value['primaryAccountNumber'] === undefined) return false;
    return true;
}

export function TokenizedCardDataCreateFromJSON(json: any): TokenizedCardDataCreate {
    return TokenizedCardDataCreateFromJSONTyped(json, false);
}

export function TokenizedCardDataCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenizedCardDataCreate {
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
        'tokenRequestorId': json['tokenRequestorId'] == null ? undefined : json['tokenRequestorId'],
        'cryptogram': json['cryptogram'] == null ? undefined : CardCryptogramCreateFromJSON(json['cryptogram']),
    };
}

export function TokenizedCardDataCreateToJSON(json: any): TokenizedCardDataCreate {
    return TokenizedCardDataCreateToJSONTyped(json, false);
}

export function TokenizedCardDataCreateToJSONTyped(value?: TokenizedCardDataCreate | null, ignoreDiscriminator: boolean = false): any {
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
        'tokenRequestorId': value['tokenRequestorId'],
        'cryptogram': CardCryptogramCreateToJSON(value['cryptogram']),
    };
}

