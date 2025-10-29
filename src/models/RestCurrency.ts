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
 * @interface RestCurrency
 */
export interface RestCurrency {
    /**
     * The name of the currency.
     * @type {string}
     * @memberof RestCurrency
     */
    readonly name?: string;
    /**
     * The currency's number of decimals. When calculating amounts in this currency, the fraction digits determine the accuracy.
     * @type {number}
     * @memberof RestCurrency
     */
    readonly fractionDigits?: number;
    /**
     * The currency's three-letter code (ISO 4217 format).
     * @type {string}
     * @memberof RestCurrency
     */
    readonly currencyCode?: string;
    /**
     * The currency's three-digit code (ISO 4217 format).
     * @type {number}
     * @memberof RestCurrency
     */
    readonly numericCode?: number;
}

/**
 * Check if a given object implements the RestCurrency interface.
 */
export function instanceOfRestCurrency(value: object): value is RestCurrency {
    return true;
}

export function RestCurrencyFromJSON(json: any): RestCurrency {
    return RestCurrencyFromJSONTyped(json, false);
}

export function RestCurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestCurrency {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'fractionDigits': json['fractionDigits'] == null ? undefined : json['fractionDigits'],
        'currencyCode': json['currencyCode'] == null ? undefined : json['currencyCode'],
        'numericCode': json['numericCode'] == null ? undefined : json['numericCode'],
    };
}

export function RestCurrencyToJSON(value?: Omit<RestCurrency, 'name'|'fractionDigits'|'currencyCode'|'numericCode'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

