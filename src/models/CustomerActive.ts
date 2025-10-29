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
 * @interface CustomerActive
 */
export interface CustomerActive {
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof CustomerActive
     */
    metaData?: { [key: string]: string; };
    /**
     * The customer's email address.
     * @type {string}
     * @memberof CustomerActive
     */
    emailAddress?: string;
    /**
     * The customer's family or last name.
     * @type {string}
     * @memberof CustomerActive
     */
    familyName?: string;
    /**
     * The customer's given or first name.
     * @type {string}
     * @memberof CustomerActive
     */
    givenName?: string;
    /**
     * The customer's preferred currency.
     * @type {string}
     * @memberof CustomerActive
     */
    preferredCurrency?: string;
    /**
     * The customer's ID in the merchant's system.
     * @type {string}
     * @memberof CustomerActive
     */
    customerId?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof CustomerActive
     */
    language?: string;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof CustomerActive
     */
    version: number;
}

/**
 * Check if a given object implements the CustomerActive interface.
 */
export function instanceOfCustomerActive(value: object): value is CustomerActive {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function CustomerActiveFromJSON(json: any): CustomerActive {
    return CustomerActiveFromJSONTyped(json, false);
}

export function CustomerActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerActive {
    if (json == null) {
        return json;
    }
    return {
        
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'familyName': json['familyName'] == null ? undefined : json['familyName'],
        'givenName': json['givenName'] == null ? undefined : json['givenName'],
        'preferredCurrency': json['preferredCurrency'] == null ? undefined : json['preferredCurrency'],
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'language': json['language'] == null ? undefined : json['language'],
        'version': json['version'],
    };
}

export function CustomerActiveToJSON(value?: CustomerActive | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'metaData': value['metaData'],
        'emailAddress': value['emailAddress'],
        'familyName': value['familyName'],
        'givenName': value['givenName'],
        'preferredCurrency': value['preferredCurrency'],
        'customerId': value['customerId'],
        'language': value['language'],
        'version': value['version'],
    };
}

