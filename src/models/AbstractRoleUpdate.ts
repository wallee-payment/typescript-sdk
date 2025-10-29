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
} from './Permission';

/**
 * 
 * @export
 * @interface AbstractRoleUpdate
 */
export interface AbstractRoleUpdate {
    /**
     * The permissions granted to users with this role.
     * @type {Set<Permission>}
     * @memberof AbstractRoleUpdate
     */
    permissions?: Set<Permission>;
    /**
     * The name used to identify the role.
     * @type {{ [key: string]: string; }}
     * @memberof AbstractRoleUpdate
     */
    name?: { [key: string]: string; };
    /**
     * Whether users with this role are required to use two-factor authentication.
     * @type {boolean}
     * @memberof AbstractRoleUpdate
     */
    twoFactorRequired?: boolean;
}

/**
 * Check if a given object implements the AbstractRoleUpdate interface.
 */
export function instanceOfAbstractRoleUpdate(value: object): value is AbstractRoleUpdate {
    return true;
}

export function AbstractRoleUpdateFromJSON(json: any): AbstractRoleUpdate {
    return AbstractRoleUpdateFromJSONTyped(json, false);
}

export function AbstractRoleUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractRoleUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'permissions': json['permissions'] == null ? undefined : (new Set((json['permissions'] as Array<any>).map(PermissionFromJSON))),
        'name': json['name'] == null ? undefined : json['name'],
        'twoFactorRequired': json['twoFactorRequired'] == null ? undefined : json['twoFactorRequired'],
    };
}

export function AbstractRoleUpdateToJSON(value?: AbstractRoleUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'permissions': value['permissions'] == null ? undefined : (Array.from(value['permissions'] as Set<any>).map(PermissionToJSON)),
        'name': value['name'],
        'twoFactorRequired': value['twoFactorRequired'],
    };
}

