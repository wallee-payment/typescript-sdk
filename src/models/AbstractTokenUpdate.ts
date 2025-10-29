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
 * @interface AbstractTokenUpdate
 */
export interface AbstractTokenUpdate {
    /**
     * Whether the token is enabled for one-click payments, which simplify the payment process for the customer. One-click tokens are linked to customers via the customer ID.
     * @type {boolean}
     * @memberof AbstractTokenUpdate
     */
    enabledForOneClickPayment?: boolean;
    /**
     * The customer's email address.
     * @type {string}
     * @memberof AbstractTokenUpdate
     */
    customerEmailAddress?: string;
    /**
     * The reference used to identify the payment token (e.g. the customer's ID or email address).
     * @type {string}
     * @memberof AbstractTokenUpdate
     */
    tokenReference?: string;
    /**
     * The unique identifier of the customer in the external system.
     * @type {string}
     * @memberof AbstractTokenUpdate
     */
    customerId?: string;
    /**
     * The customer's time zone, which affects how dates and times are formatted when communicating with the customer.
     * @type {string}
     * @memberof AbstractTokenUpdate
     */
    timeZone?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof AbstractTokenUpdate
     */
    language?: string;
}

/**
 * Check if a given object implements the AbstractTokenUpdate interface.
 */
export function instanceOfAbstractTokenUpdate(value: object): value is AbstractTokenUpdate {
    return true;
}

export function AbstractTokenUpdateFromJSON(json: any): AbstractTokenUpdate {
    return AbstractTokenUpdateFromJSONTyped(json, false);
}

export function AbstractTokenUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractTokenUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'enabledForOneClickPayment': json['enabledForOneClickPayment'] == null ? undefined : json['enabledForOneClickPayment'],
        'customerEmailAddress': json['customerEmailAddress'] == null ? undefined : json['customerEmailAddress'],
        'tokenReference': json['tokenReference'] == null ? undefined : json['tokenReference'],
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
    };
}

export function AbstractTokenUpdateToJSON(value?: AbstractTokenUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'enabledForOneClickPayment': value['enabledForOneClickPayment'],
        'customerEmailAddress': value['customerEmailAddress'],
        'tokenReference': value['tokenReference'],
        'customerId': value['customerId'],
        'timeZone': value['timeZone'],
        'language': value['language'],
    };
}

