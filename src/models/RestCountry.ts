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
import type { RestAddressFormat } from './RestAddressFormat';
import {
    RestAddressFormatFromJSON,
    RestAddressFormatFromJSONTyped,
    RestAddressFormatToJSON,
    RestAddressFormatToJSONTyped,
} from './RestAddressFormat';

/**
 * 
 * @export
 * @interface RestCountry
 */
export interface RestCountry {
    /**
     * The country's two-letter code (ISO 3166-1 alpha-2 format).
     * @type {string}
     * @memberof RestCountry
     */
    readonly isoCode2?: string;
    /**
     * 
     * @type {RestAddressFormat}
     * @memberof RestCountry
     */
    addressFormat?: RestAddressFormat;
    /**
     * The country's three-letter code (ISO 3166-1 alpha-3 format).
     * @type {string}
     * @memberof RestCountry
     */
    readonly isoCode3?: string;
    /**
     * The codes of all regions (e.g. states, provinces) of the country (ISO 3166-2 format).
     * @type {Set<string>}
     * @memberof RestCountry
     */
    readonly stateCodes?: Set<string>;
    /**
     * The name of the country.
     * @type {string}
     * @memberof RestCountry
     */
    readonly name?: string;
    /**
     * The country's three-digit code (ISO 3166-1 numeric format).
     * @type {string}
     * @memberof RestCountry
     */
    readonly numericCode?: string;
}

/**
 * Check if a given object implements the RestCountry interface.
 */
export function instanceOfRestCountry(value: object): value is RestCountry {
    return true;
}

export function RestCountryFromJSON(json: any): RestCountry {
    return RestCountryFromJSONTyped(json, false);
}

export function RestCountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestCountry {
    if (json == null) {
        return json;
    }
    return {
        
        'isoCode2': json['isoCode2'] == null ? undefined : json['isoCode2'],
        'addressFormat': json['addressFormat'] == null ? undefined : RestAddressFormatFromJSON(json['addressFormat']),
        'isoCode3': json['isoCode3'] == null ? undefined : json['isoCode3'],
        'stateCodes': json['stateCodes'] == null ? undefined : new Set(json['stateCodes']),
        'name': json['name'] == null ? undefined : json['name'],
        'numericCode': json['numericCode'] == null ? undefined : json['numericCode'],
    };
}

export function RestCountryToJSON(json: any): RestCountry {
    return RestCountryToJSONTyped(json, false);
}

export function RestCountryToJSONTyped(value?: Omit<RestCountry, 'isoCode2'|'isoCode3'|'stateCodes'|'name'|'numericCode'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'addressFormat': RestAddressFormatToJSON(value['addressFormat']),
    };
}

