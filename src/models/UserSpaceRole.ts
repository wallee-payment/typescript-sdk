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
 * @interface UserSpaceRole
 */
export interface UserSpaceRole {
    /**
     * The role that is assigned to the user.
     * @type {number}
     * @memberof UserSpaceRole
     */
    readonly role?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof UserSpaceRole
     */
    readonly id?: number;
    /**
     * The user whose role this defines.
     * @type {number}
     * @memberof UserSpaceRole
     */
    readonly user?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof UserSpaceRole
     */
    readonly version?: number;
    /**
     * The space in which the role is assigned to the user.
     * @type {number}
     * @memberof UserSpaceRole
     */
    readonly space?: number;
}

/**
 * Check if a given object implements the UserSpaceRole interface.
 */
export function instanceOfUserSpaceRole(value: object): value is UserSpaceRole {
    return true;
}

export function UserSpaceRoleFromJSON(json: any): UserSpaceRole {
    return UserSpaceRoleFromJSONTyped(json, false);
}

export function UserSpaceRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSpaceRole {
    if (json == null) {
        return json;
    }
    return {
        
        'role': json['role'] == null ? undefined : json['role'],
        'id': json['id'] == null ? undefined : json['id'],
        'user': json['user'] == null ? undefined : json['user'],
        'version': json['version'] == null ? undefined : json['version'],
        'space': json['space'] == null ? undefined : json['space'],
    };
}

export function UserSpaceRoleToJSON(json: any): UserSpaceRole {
    return UserSpaceRoleToJSONTyped(json, false);
}

export function UserSpaceRoleToJSONTyped(value?: Omit<UserSpaceRole, 'role'|'id'|'user'|'version'|'space'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

