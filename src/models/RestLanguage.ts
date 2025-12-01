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
 * @interface RestLanguage
 */
export interface RestLanguage {
    /**
     * Whether this is the primary language in a group of languages.
     * @type {boolean}
     * @memberof RestLanguage
     */
    readonly primaryOfGroup?: boolean;
    /**
     * The two-letter code of the language's region (ISO 3166-1 alpha-2 format).
     * @type {string}
     * @memberof RestLanguage
     */
    readonly countryCode?: string;
    /**
     * The language's two-letter code (ISO 639-1 format).
     * @type {string}
     * @memberof RestLanguage
     */
    readonly iso2Code?: string;
    /**
     * The name of the language.
     * @type {string}
     * @memberof RestLanguage
     */
    readonly name?: string;
    /**
     * The language's IETF tag consisting of the two-letter ISO code and region e.g. en-US, de-CH.
     * @type {string}
     * @memberof RestLanguage
     */
    readonly ietfCode?: string;
    /**
     * The language's three-letter code (ISO 639-2/T format).
     * @type {string}
     * @memberof RestLanguage
     */
    readonly iso3Code?: string;
    /**
     * The expression to determine the plural index for a given number of items used to find the proper plural form for translations.
     * @type {string}
     * @memberof RestLanguage
     */
    readonly pluralExpression?: string;
}

/**
 * Check if a given object implements the RestLanguage interface.
 */
export function instanceOfRestLanguage(value: object): value is RestLanguage {
    return true;
}

export function RestLanguageFromJSON(json: any): RestLanguage {
    return RestLanguageFromJSONTyped(json, false);
}

export function RestLanguageFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestLanguage {
    if (json == null) {
        return json;
    }
    return {
        
        'primaryOfGroup': json['primaryOfGroup'] == null ? undefined : json['primaryOfGroup'],
        'countryCode': json['countryCode'] == null ? undefined : json['countryCode'],
        'iso2Code': json['iso2Code'] == null ? undefined : json['iso2Code'],
        'name': json['name'] == null ? undefined : json['name'],
        'ietfCode': json['ietfCode'] == null ? undefined : json['ietfCode'],
        'iso3Code': json['iso3Code'] == null ? undefined : json['iso3Code'],
        'pluralExpression': json['pluralExpression'] == null ? undefined : json['pluralExpression'],
    };
}

export function RestLanguageToJSON(json: any): RestLanguage {
    return RestLanguageToJSONTyped(json, false);
}

export function RestLanguageToJSONTyped(value?: Omit<RestLanguage, 'primaryOfGroup'|'countryCode'|'iso2Code'|'name'|'ietfCode'|'iso3Code'|'pluralExpression'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

