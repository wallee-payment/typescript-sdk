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
 * @interface AccountCreateWithOwner
 */
export interface AccountCreateWithOwner {
    /**
     * The name used to identify the account.
     * @type {string}
     * @memberof AccountCreateWithOwner
     */
    name?: string;
    /**
     * The number of sub-accounts that can be created within this account.
     * @type {number}
     * @memberof AccountCreateWithOwner
     */
    subaccountLimit?: number;
    /**
     * The scope that the account belongs to.
     * @type {number}
     * @memberof AccountCreateWithOwner
     */
    scope: number;
    /**
     * The parent account responsible for administering this account.
     * @type {number}
     * @memberof AccountCreateWithOwner
     */
    parentAccount?: number;
    /**
     * The email address for the person who will be invited to assume the role of account admin.
     * @type {string}
     * @memberof AccountCreateWithOwner
     */
    ownerEmailAddress?: string;
}

/**
 * Check if a given object implements the AccountCreateWithOwner interface.
 */
export function instanceOfAccountCreateWithOwner(value: object): value is AccountCreateWithOwner {
    if (!('scope' in value) || value['scope'] === undefined) return false;
    return true;
}

export function AccountCreateWithOwnerFromJSON(json: any): AccountCreateWithOwner {
    return AccountCreateWithOwnerFromJSONTyped(json, false);
}

export function AccountCreateWithOwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountCreateWithOwner {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'subaccountLimit': json['subaccountLimit'] == null ? undefined : json['subaccountLimit'],
        'scope': json['scope'],
        'parentAccount': json['parentAccount'] == null ? undefined : json['parentAccount'],
        'ownerEmailAddress': json['ownerEmailAddress'] == null ? undefined : json['ownerEmailAddress'],
    };
}

export function AccountCreateWithOwnerToJSON(json: any): AccountCreateWithOwner {
    return AccountCreateWithOwnerToJSONTyped(json, false);
}

export function AccountCreateWithOwnerToJSONTyped(value?: AccountCreateWithOwner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'subaccountLimit': value['subaccountLimit'],
        'scope': value['scope'],
        'parentAccount': value['parentAccount'],
        'ownerEmailAddress': value['ownerEmailAddress'],
    };
}

