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
 * @interface UserAccountRole
 */
export interface UserAccountRole {
    /**
     * The role that is assigned to the user.
     * @type {number}
     * @memberof UserAccountRole
     */
    readonly role?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof UserAccountRole
     */
    readonly id?: number;
    /**
     * Whether the role is assigned to the user in subaccounts only.
     * @type {boolean}
     * @memberof UserAccountRole
     */
    readonly appliesOnSubAccount?: boolean;
    /**
     * The user whose role this defines.
     * @type {number}
     * @memberof UserAccountRole
     */
    readonly user?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof UserAccountRole
     */
    readonly version?: number;
    /**
     * The account in which the role is assigned to the user.
     * @type {number}
     * @memberof UserAccountRole
     */
    readonly account?: number;
}

/**
 * Check if a given object implements the UserAccountRole interface.
 */
export function instanceOfUserAccountRole(value: object): value is UserAccountRole {
    return true;
}

export function UserAccountRoleFromJSON(json: any): UserAccountRole {
    return UserAccountRoleFromJSONTyped(json, false);
}

export function UserAccountRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAccountRole {
    if (json == null) {
        return json;
    }
    return {
        
        'role': json['role'] == null ? undefined : json['role'],
        'id': json['id'] == null ? undefined : json['id'],
        'appliesOnSubAccount': json['appliesOnSubAccount'] == null ? undefined : json['appliesOnSubAccount'],
        'user': json['user'] == null ? undefined : json['user'],
        'version': json['version'] == null ? undefined : json['version'],
        'account': json['account'] == null ? undefined : json['account'],
    };
}

export function UserAccountRoleToJSON(json: any): UserAccountRole {
    return UserAccountRoleToJSONTyped(json, false);
}

export function UserAccountRoleToJSONTyped(value?: Omit<UserAccountRole, 'role'|'id'|'appliesOnSubAccount'|'user'|'version'|'account'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

