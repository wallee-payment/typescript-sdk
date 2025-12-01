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
/**
 * 
 * @export
 * @interface PersistableCurrencyAmount
 */
export interface PersistableCurrencyAmount {
    /**
     * 
     * @type {number}
     * @memberof PersistableCurrencyAmount
     */
    readonly amount?: number;
    /**
     * 
     * @type {string}
     * @memberof PersistableCurrencyAmount
     */
    readonly currency?: string;
}

/**
 * Check if a given object implements the PersistableCurrencyAmount interface.
 */
export function instanceOfPersistableCurrencyAmount(value: object): value is PersistableCurrencyAmount {
    return true;
}

export function PersistableCurrencyAmountFromJSON(json: any): PersistableCurrencyAmount {
    return PersistableCurrencyAmountFromJSONTyped(json, false);
}

export function PersistableCurrencyAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersistableCurrencyAmount {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'currency': json['currency'] == null ? undefined : json['currency'],
    };
}

export function PersistableCurrencyAmountToJSON(json: any): PersistableCurrencyAmount {
    return PersistableCurrencyAmountToJSONTyped(json, false);
}

export function PersistableCurrencyAmountToJSONTyped(value?: Omit<PersistableCurrencyAmount, 'amount'|'currency'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

