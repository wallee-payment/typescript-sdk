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
 * @interface Token
 */
export interface Token {
    /**
     * Whether the token is enabled for one-click payments, which simplify the payment process for the customer. One-click tokens are linked to customers via the customer ID.
     * @type {boolean}
     * @memberof Token
     */
    readonly enabledForOneClickPayment?: boolean;
    /**
     * The customer's email address.
     * @type {string}
     * @memberof Token
     */
    readonly customerEmailAddress?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Token
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof Token
     */
    readonly externalId?: string;
    /**
     * The customer's time zone, which affects how dates and times are formatted when communicating with the customer.
     * @type {string}
     * @memberof Token
     */
    readonly timeZone?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof Token
     */
    readonly language?: string;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof Token
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Token
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof Token
     */
    readonly linkedSpaceId?: number;
    /**
     * The reference used to identify the payment token (e.g. the customer's ID or email address).
     * @type {string}
     * @memberof Token
     */
    readonly tokenReference?: string;
    /**
     * The unique identifier of the customer in the external system.
     * @type {string}
     * @memberof Token
     */
    readonly customerId?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Token
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof Token
     */
    state?: CreationEntityState;
}



/**
 * Check if a given object implements the Token interface.
 */
export function instanceOfToken(value: object): value is Token {
    return true;
}

export function TokenFromJSON(json: any): Token {
    return TokenFromJSONTyped(json, false);
}

export function TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Token {
    if (json == null) {
        return json;
    }
    return {
        
        'enabledForOneClickPayment': json['enabledForOneClickPayment'] == null ? undefined : json['enabledForOneClickPayment'],
        'customerEmailAddress': json['customerEmailAddress'] == null ? undefined : json['customerEmailAddress'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'tokenReference': json['tokenReference'] == null ? undefined : json['tokenReference'],
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
    };
}

export function TokenToJSON(json: any): Token {
    return TokenToJSONTyped(json, false);
}

export function TokenToJSONTyped(value?: Omit<Token, 'enabledForOneClickPayment'|'customerEmailAddress'|'plannedPurgeDate'|'externalId'|'timeZone'|'language'|'createdOn'|'version'|'linkedSpaceId'|'tokenReference'|'customerId'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

