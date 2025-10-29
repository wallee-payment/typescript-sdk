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
 * @interface Customer
 */
export interface Customer {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof Customer
     */
    readonly linkedSpaceId?: number;
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof Customer
     */
    readonly metaData?: { [key: string]: string; };
    /**
     * The customer's email address.
     * @type {string}
     * @memberof Customer
     */
    readonly emailAddress?: string;
    /**
     * The customer's family or last name.
     * @type {string}
     * @memberof Customer
     */
    readonly familyName?: string;
    /**
     * The customer's given or first name.
     * @type {string}
     * @memberof Customer
     */
    readonly givenName?: string;
    /**
     * The customer's preferred currency.
     * @type {string}
     * @memberof Customer
     */
    readonly preferredCurrency?: string;
    /**
     * The customer's ID in the merchant's system.
     * @type {string}
     * @memberof Customer
     */
    readonly customerId?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof Customer
     */
    readonly language?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Customer
     */
    readonly id?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof Customer
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Customer
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the Customer interface.
 */
export function instanceOfCustomer(value: object): value is Customer {
    return true;
}

export function CustomerFromJSON(json: any): Customer {
    return CustomerFromJSONTyped(json, false);
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'familyName': json['familyName'] == null ? undefined : json['familyName'],
        'givenName': json['givenName'] == null ? undefined : json['givenName'],
        'preferredCurrency': json['preferredCurrency'] == null ? undefined : json['preferredCurrency'],
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'language': json['language'] == null ? undefined : json['language'],
        'id': json['id'] == null ? undefined : json['id'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function CustomerToJSON(value?: Omit<Customer, 'linkedSpaceId'|'metaData'|'emailAddress'|'familyName'|'givenName'|'preferredCurrency'|'customerId'|'language'|'id'|'createdOn'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

