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
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
    CreationEntityStateToJSONTyped,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface TokenCreate
 */
export interface TokenCreate {
    /**
     * Whether the token is enabled for one-click payments, which simplify the payment process for the customer. One-click tokens are linked to customers via the customer ID.
     * @type {boolean}
     * @memberof TokenCreate
     */
    enabledForOneClickPayment?: boolean;
    /**
     * The customer's email address.
     * @type {string}
     * @memberof TokenCreate
     */
    customerEmailAddress?: string;
    /**
     * The reference used to identify the payment token (e.g. the customer's ID or email address).
     * @type {string}
     * @memberof TokenCreate
     */
    tokenReference?: string;
    /**
     * The unique identifier of the customer in the external system.
     * @type {string}
     * @memberof TokenCreate
     */
    customerId?: string;
    /**
     * The customer's time zone, which affects how dates and times are formatted when communicating with the customer.
     * @type {string}
     * @memberof TokenCreate
     */
    timeZone?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof TokenCreate
     */
    language?: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof TokenCreate
     */
    externalId: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof TokenCreate
     */
    state?: CreationEntityState;
}



/**
 * Check if a given object implements the TokenCreate interface.
 */
export function instanceOfTokenCreate(value: object): value is TokenCreate {
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    return true;
}

export function TokenCreateFromJSON(json: any): TokenCreate {
    return TokenCreateFromJSONTyped(json, false);
}

export function TokenCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenCreate {
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
        'externalId': json['externalId'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
    };
}

export function TokenCreateToJSON(json: any): TokenCreate {
    return TokenCreateToJSONTyped(json, false);
}

export function TokenCreateToJSONTyped(value?: TokenCreate | null, ignoreDiscriminator: boolean = false): any {
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
        'externalId': value['externalId'],
        'state': CreationEntityStateToJSON(value['state']),
    };
}

