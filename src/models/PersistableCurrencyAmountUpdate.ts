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
 * @interface PersistableCurrencyAmountUpdate
 */
export interface PersistableCurrencyAmountUpdate {
    /**
     * 
     * @type {number}
     * @memberof PersistableCurrencyAmountUpdate
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof PersistableCurrencyAmountUpdate
     */
    currency?: string;
}

/**
 * Check if a given object implements the PersistableCurrencyAmountUpdate interface.
 */
export function instanceOfPersistableCurrencyAmountUpdate(value: object): value is PersistableCurrencyAmountUpdate {
    return true;
}

export function PersistableCurrencyAmountUpdateFromJSON(json: any): PersistableCurrencyAmountUpdate {
    return PersistableCurrencyAmountUpdateFromJSONTyped(json, false);
}

export function PersistableCurrencyAmountUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersistableCurrencyAmountUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'currency': json['currency'] == null ? undefined : json['currency'],
    };
}

export function PersistableCurrencyAmountUpdateToJSON(json: any): PersistableCurrencyAmountUpdate {
    return PersistableCurrencyAmountUpdateToJSONTyped(json, false);
}

export function PersistableCurrencyAmountUpdateToJSONTyped(value?: PersistableCurrencyAmountUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'currency': value['currency'],
    };
}

