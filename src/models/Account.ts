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
import type { Scope } from './Scope';
import {
    ScopeFromJSON,
    ScopeFromJSONTyped,
    ScopeToJSON,
    ScopeToJSONTyped,
} from './Scope';
import type { AccountState } from './AccountState';
import {
    AccountStateFromJSON,
    AccountStateFromJSONTyped,
    AccountStateToJSON,
    AccountStateToJSONTyped,
} from './AccountState';
import type { AccountType } from './AccountType';
import {
    AccountTypeFromJSON,
    AccountTypeFromJSONTyped,
    AccountTypeToJSON,
    AccountTypeToJSONTyped,
} from './AccountType';

/**
 * 
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * Whether this account and all its parent accounts are active or restricted active.
     * @type {boolean}
     * @memberof Account
     */
    readonly activeOrRestrictedActive?: boolean;
    /**
     * The date and time when the account was deleted.
     * @type {Date}
     * @memberof Account
     */
    readonly deletedOn?: Date;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Account
     */
    readonly plannedPurgeDate?: Date;
    /**
     * Whether this account and all its parent accounts are active.
     * @type {boolean}
     * @memberof Account
     */
    readonly active?: boolean;
    /**
     * 
     * @type {Account}
     * @memberof Account
     */
    parentAccount?: Account;
    /**
     * 
     * @type {AccountType}
     * @memberof Account
     */
    type?: AccountType;
    /**
     * The date and time when the account was created.
     * @type {Date}
     * @memberof Account
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Account
     */
    readonly version?: number;
    /**
     * The ID of a user the account was deleted by.
     * @type {number}
     * @memberof Account
     */
    readonly deletedBy?: number;
    /**
     * Whether this account and all its parent accounts are active or restricted active. There is at least one account that is restricted active.
     * @type {boolean}
     * @memberof Account
     */
    readonly restrictedActive?: boolean;
    /**
     * The ID of the user the account was created by.
     * @type {number}
     * @memberof Account
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {Scope}
     * @memberof Account
     */
    scope?: Scope;
    /**
     * The name used to identify the account.
     * @type {string}
     * @memberof Account
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Account
     */
    readonly id?: number;
    /**
     * 
     * @type {AccountState}
     * @memberof Account
     */
    state?: AccountState;
    /**
     * The number of sub-accounts that can be created within this account.
     * @type {number}
     * @memberof Account
     */
    readonly subaccountLimit?: number;
}



/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): value is Account {
    return true;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if (json == null) {
        return json;
    }
    return {
        
        'activeOrRestrictedActive': json['activeOrRestrictedActive'] == null ? undefined : json['activeOrRestrictedActive'],
        'deletedOn': json['deletedOn'] == null ? undefined : (new Date(json['deletedOn'])),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'active': json['active'] == null ? undefined : json['active'],
        'parentAccount': json['parentAccount'] == null ? undefined : AccountFromJSON(json['parentAccount']),
        'type': json['type'] == null ? undefined : AccountTypeFromJSON(json['type']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'deletedBy': json['deletedBy'] == null ? undefined : json['deletedBy'],
        'restrictedActive': json['restrictedActive'] == null ? undefined : json['restrictedActive'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'scope': json['scope'] == null ? undefined : ScopeFromJSON(json['scope']),
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : AccountStateFromJSON(json['state']),
        'subaccountLimit': json['subaccountLimit'] == null ? undefined : json['subaccountLimit'],
    };
}

export function AccountToJSON(json: any): Account {
    return AccountToJSONTyped(json, false);
}

export function AccountToJSONTyped(value?: Omit<Account, 'activeOrRestrictedActive'|'deletedOn'|'plannedPurgeDate'|'active'|'createdOn'|'version'|'deletedBy'|'restrictedActive'|'createdBy'|'name'|'id'|'subaccountLimit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'parentAccount': AccountToJSON(value['parentAccount']),
        'type': AccountTypeToJSON(value['type']),
        'scope': ScopeToJSON(value['scope']),
        'state': AccountStateToJSON(value['state']),
    };
}

