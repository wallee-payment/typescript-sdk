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
import type { CardholderAuthentication } from './CardholderAuthentication';
import {
    CardholderAuthenticationFromJSON,
    CardholderAuthenticationFromJSONTyped,
    CardholderAuthenticationToJSON,
} from './CardholderAuthentication';
import type { CardCryptogram } from './CardCryptogram';
import {
    CardCryptogramFromJSON,
    CardCryptogramFromJSONTyped,
    CardCryptogramToJSON,
} from './CardCryptogram';
import type { RecurringIndicator } from './RecurringIndicator';
import {
    RecurringIndicatorFromJSON,
    RecurringIndicatorFromJSONTyped,
    RecurringIndicatorToJSON,
} from './RecurringIndicator';

/**
 * 
 * @export
 * @interface AuthenticatedCardData
 */
export interface AuthenticatedCardData {
    /**
     * Whether the transaction is an initial recurring transaction, based on the recurring indicator. This is used to identify the first transaction in a recurring payment setup.
     * @type {boolean}
     * @memberof AuthenticatedCardData
     */
    readonly initialRecurringTransaction?: boolean;
    /**
     * 
     * @type {RecurringIndicator}
     * @memberof AuthenticatedCardData
     */
    recurringIndicator?: RecurringIndicator;
    /**
     * The token requestor identifier (TRID) identifies the entity requesting tokenization for a card transaction.
     * @type {string}
     * @memberof AuthenticatedCardData
     */
    readonly tokenRequestorId?: string;
    /**
     * 
     * @type {CardCryptogram}
     * @memberof AuthenticatedCardData
     */
    cryptogram?: CardCryptogram;
    /**
     * 
     * @type {CardholderAuthentication}
     * @memberof AuthenticatedCardData
     */
    cardholderAuthentication?: CardholderAuthentication;
}

/**
 * Check if a given object implements the AuthenticatedCardData interface.
 */
export function instanceOfAuthenticatedCardData(value: object): value is AuthenticatedCardData {
    return true;
}

export function AuthenticatedCardDataFromJSON(json: any): AuthenticatedCardData {
    return AuthenticatedCardDataFromJSONTyped(json, false);
}

export function AuthenticatedCardDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticatedCardData {
    if (json == null) {
        return json;
    }
    return {
        
        'initialRecurringTransaction': json['initialRecurringTransaction'] == null ? undefined : json['initialRecurringTransaction'],
        'recurringIndicator': json['recurringIndicator'] == null ? undefined : RecurringIndicatorFromJSON(json['recurringIndicator']),
        'tokenRequestorId': json['tokenRequestorId'] == null ? undefined : json['tokenRequestorId'],
        'cryptogram': json['cryptogram'] == null ? undefined : CardCryptogramFromJSON(json['cryptogram']),
        'cardholderAuthentication': json['cardholderAuthentication'] == null ? undefined : CardholderAuthenticationFromJSON(json['cardholderAuthentication']),
    };
}

export function AuthenticatedCardDataToJSON(value?: Omit<AuthenticatedCardData, 'initialRecurringTransaction'|'tokenRequestorId'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'recurringIndicator': RecurringIndicatorToJSON(value['recurringIndicator']),
        'cryptogram': CardCryptogramToJSON(value['cryptogram']),
        'cardholderAuthentication': CardholderAuthenticationToJSON(value['cardholderAuthentication']),
    };
}

