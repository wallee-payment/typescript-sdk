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
import type { CardCryptogram } from './CardCryptogram';
import {
    CardCryptogramFromJSON,
    CardCryptogramFromJSONTyped,
    CardCryptogramToJSON,
    CardCryptogramToJSONTyped,
} from './CardCryptogram';
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
 * @interface TokenizedCardData
 */
export interface TokenizedCardData {
    /**
     * Whether the transaction is an initial recurring transaction, based on the recurring indicator. This is used to identify the first transaction in a recurring payment setup.
     * @type {boolean}
     * @memberof TokenizedCardData
     */
    readonly initialRecurringTransaction?: boolean;
    /**
     * 
     * @type {RecurringIndicator}
     * @memberof TokenizedCardData
     */
    recurringIndicator?: RecurringIndicator;
    /**
     * The token requestor identifier (TRID) identifies the entity requesting tokenization for a card transaction.
     * @type {string}
     * @memberof TokenizedCardData
     */
    readonly tokenRequestorId?: string;
    /**
     * 
     * @type {CardCryptogram}
     * @memberof TokenizedCardData
     */
    cryptogram?: CardCryptogram;
}



/**
 * Check if a given object implements the TokenizedCardData interface.
 */
export function instanceOfTokenizedCardData(value: object): value is TokenizedCardData {
    return true;
}

export function TokenizedCardDataFromJSON(json: any): TokenizedCardData {
    return TokenizedCardDataFromJSONTyped(json, false);
}

export function TokenizedCardDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenizedCardData {
    if (json == null) {
        return json;
    }
    return {
        
        'initialRecurringTransaction': json['initialRecurringTransaction'] == null ? undefined : json['initialRecurringTransaction'],
        'recurringIndicator': json['recurringIndicator'] == null ? undefined : RecurringIndicatorFromJSON(json['recurringIndicator']),
        'tokenRequestorId': json['tokenRequestorId'] == null ? undefined : json['tokenRequestorId'],
        'cryptogram': json['cryptogram'] == null ? undefined : CardCryptogramFromJSON(json['cryptogram']),
    };
}

export function TokenizedCardDataToJSON(json: any): TokenizedCardData {
    return TokenizedCardDataToJSONTyped(json, false);
}

export function TokenizedCardDataToJSONTyped(value?: Omit<TokenizedCardData, 'initialRecurringTransaction'|'tokenRequestorId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'recurringIndicator': RecurringIndicatorToJSON(value['recurringIndicator']),
        'cryptogram': CardCryptogramToJSON(value['cryptogram']),
    };
}

