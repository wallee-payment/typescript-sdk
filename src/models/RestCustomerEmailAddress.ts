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
 * @interface RestCustomerEmailAddress
 */
export interface RestCustomerEmailAddress {
    /**
     * An email address associated with a customer.
     * @type {string}
     * @memberof RestCustomerEmailAddress
     */
    readonly emailAddress?: string;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof RestCustomerEmailAddress
     */
    readonly createdOn?: Date;
}

/**
 * Check if a given object implements the RestCustomerEmailAddress interface.
 */
export function instanceOfRestCustomerEmailAddress(value: object): value is RestCustomerEmailAddress {
    return true;
}

export function RestCustomerEmailAddressFromJSON(json: any): RestCustomerEmailAddress {
    return RestCustomerEmailAddressFromJSONTyped(json, false);
}

export function RestCustomerEmailAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestCustomerEmailAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
    };
}

export function RestCustomerEmailAddressToJSON(json: any): RestCustomerEmailAddress {
    return RestCustomerEmailAddressToJSONTyped(json, false);
}

export function RestCustomerEmailAddressToJSONTyped(value?: Omit<RestCustomerEmailAddress, 'emailAddress'|'createdOn'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

