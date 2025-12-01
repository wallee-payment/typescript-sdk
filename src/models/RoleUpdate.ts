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
 * @interface RoleUpdate
 */
export interface RoleUpdate {
    /**
     * The permissions granted to users with this role.
     * @type {Set<Permission>}
     * @memberof RoleUpdate
     */
    permissions?: Set<Permission>;
    /**
     * The name used to identify the role.
     * @type {{ [key: string]: string; }}
     * @memberof RoleUpdate
     */
    name?: { [key: string]: string; };
    /**
     * Whether users with this role are required to use two-factor authentication.
     * @type {boolean}
     * @memberof RoleUpdate
     */
    twoFactorRequired?: boolean;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof RoleUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the RoleUpdate interface.
 */
export function instanceOfRoleUpdate(value: object): value is RoleUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function RoleUpdateFromJSON(json: any): RoleUpdate {
    return RoleUpdateFromJSONTyped(json, false);
}

export function RoleUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'permissions': json['permissions'] == null ? undefined : (new Set((json['permissions'] as Array<any>).map(PermissionFromJSON))),
        'name': json['name'] == null ? undefined : json['name'],
        'twoFactorRequired': json['twoFactorRequired'] == null ? undefined : json['twoFactorRequired'],
        'version': json['version'],
    };
}

export function RoleUpdateToJSON(json: any): RoleUpdate {
    return RoleUpdateToJSONTyped(json, false);
}

export function RoleUpdateToJSONTyped(value?: RoleUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'permissions': value['permissions'] == null ? undefined : (Array.from(value['permissions'] as Set<any>).map(PermissionToJSON)),
        'name': value['name'],
        'twoFactorRequired': value['twoFactorRequired'],
        'version': value['version'],
    };
}

