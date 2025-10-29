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
} from './CreationEntityState';
import type { UserType } from './UserType';
import {
    UserTypeFromJSON,
    UserTypeFromJSONTyped,
    UserTypeToJSON,
} from './UserType';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * The scope that the user belongs to.
     * @type {number}
     * @memberof User
     */
    readonly scope?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof User
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof User
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof User
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {UserType}
     * @memberof User
     */
    userType?: UserType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof User
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'scope': json['scope'] == null ? undefined : json['scope'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'userType': json['userType'] == null ? undefined : UserTypeFromJSON(json['userType']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function UserToJSON(value?: Omit<User, 'scope'|'plannedPurgeDate'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'userType': UserTypeToJSON(value['userType']),
    };
}

