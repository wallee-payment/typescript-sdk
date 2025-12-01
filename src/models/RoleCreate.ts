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
import type { Permission } from './Permission';
import {
    PermissionFromJSON,
    PermissionFromJSONTyped,
    PermissionToJSON,
    PermissionToJSONTyped,
} from './Permission';

/**
 * 
 * @export
 * @interface RoleCreate
 */
export interface RoleCreate {
    /**
     * The permissions granted to users with this role.
     * @type {Set<Permission>}
     * @memberof RoleCreate
     */
    permissions?: Set<Permission>;
    /**
     * The name used to identify the role.
     * @type {{ [key: string]: string; }}
     * @memberof RoleCreate
     */
    name?: { [key: string]: string; };
    /**
     * Whether users with this role are required to use two-factor authentication.
     * @type {boolean}
     * @memberof RoleCreate
     */
    twoFactorRequired?: boolean;
    /**
     * The account the role belongs to. The role can only be assigned within this account.
     * @type {number}
     * @memberof RoleCreate
     */
    account: number;
}

/**
 * Check if a given object implements the RoleCreate interface.
 */
export function instanceOfRoleCreate(value: object): value is RoleCreate {
    if (!('account' in value) || value['account'] === undefined) return false;
    return true;
}

export function RoleCreateFromJSON(json: any): RoleCreate {
    return RoleCreateFromJSONTyped(json, false);
}

export function RoleCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'permissions': json['permissions'] == null ? undefined : (new Set((json['permissions'] as Array<any>).map(PermissionFromJSON))),
        'name': json['name'] == null ? undefined : json['name'],
        'twoFactorRequired': json['twoFactorRequired'] == null ? undefined : json['twoFactorRequired'],
        'account': json['account'],
    };
}

export function RoleCreateToJSON(json: any): RoleCreate {
    return RoleCreateToJSONTyped(json, false);
}

export function RoleCreateToJSONTyped(value?: RoleCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'permissions': value['permissions'] == null ? undefined : (Array.from(value['permissions'] as Set<any>).map(PermissionToJSON)),
        'name': value['name'],
        'twoFactorRequired': value['twoFactorRequired'],
        'account': value['account'],
    };
}

