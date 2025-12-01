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
import type { Account } from './Account';
import {
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
    AccountToJSONTyped,
} from './Account';
import type { Permission } from './Permission';
import {
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
    PermissionToJSONTyped,
} from './Permission';
import type { RoleState } from './RoleState';
import {
    RoleStateFromJSON,
    RoleStateFromJSONTyped,
    RoleStateToJSON,
    RoleStateToJSONTyped,
} from './RoleState';

/**
 * 
 * @export
 * @interface Role
 */
export interface Role {
    /**
     * The permissions granted to users with this role.
     * @type {Set<Permission>}
     * @memberof Role
     */
    readonly permissions?: Set<Permission>;
    /**
     * The name used to identify the role.
     * @type {{ [key: string]: string; }}
     * @memberof Role
     */
    readonly name?: { [key: string]: string; };
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Role
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Role
     */
    readonly id?: number;
    /**
     * 
     * @type {RoleState}
     * @memberof Role
     */
    state?: RoleState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Role
     */
    readonly version?: number;
    /**
     * 
     * @type {Account}
     * @memberof Role
     */
    account?: Account;
    /**
     * Whether users with this role are required to use two-factor authentication.
     * @type {boolean}
     * @memberof Role
     */
    readonly twoFactorRequired?: boolean;
}



/**
 * Check if a given object implements the Role interface.
 */
export function instanceOfRole(value: object): value is Role {
    return true;
}

export function RoleFromJSON(json: any): Role {
    return RoleFromJSONTyped(json, false);
}

export function RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Role {
    if (json == null) {
        return json;
    }
    return {
        
        'permissions': json['permissions'] == null ? undefined : (new Set((json['permissions'] as Array<any>).map(PermissionFromJSON))),
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : RoleStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
        'account': json['account'] == null ? undefined : AccountFromJSON(json['account']),
        'twoFactorRequired': json['twoFactorRequired'] == null ? undefined : json['twoFactorRequired'],
    };
}

export function RoleToJSON(json: any): Role {
    return RoleToJSONTyped(json, false);
}

export function RoleToJSONTyped(value?: Omit<Role, 'permissions'|'name'|'plannedPurgeDate'|'id'|'version'|'twoFactorRequired'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': RoleStateToJSON(value['state']),
        'account': AccountToJSON(value['account']),
    };
}

