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
import type { UserType } from './UserType';
import {
    UserTypeFromJSON,
    UserTypeFromJSONTyped,
    UserTypeToJSON,
    UserTypeToJSONTyped,
} from './UserType';

/**
 * 
 * @export
 * @interface ApplicationUser
 */
export interface ApplicationUser {
    /**
     * The scope that the user belongs to.
     * @type {number}
     * @memberof ApplicationUser
     */
    readonly scope?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof ApplicationUser
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ApplicationUser
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof ApplicationUser
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {UserType}
     * @memberof ApplicationUser
     */
    userType?: UserType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ApplicationUser
     */
    readonly version?: number;
    /**
     * The maximum number of API requests that are accepted every 2 minutes.
     * @type {number}
     * @memberof ApplicationUser
     */
    readonly requestLimit?: number;
    /**
     * The name used to identify the application user.
     * @type {string}
     * @memberof ApplicationUser
     */
    readonly name?: string;
    /**
     * The primary account that the user belongs to.
     * @type {number}
     * @memberof ApplicationUser
     */
    readonly primaryAccount?: number;
}



/**
 * Check if a given object implements the ApplicationUser interface.
 */
export function instanceOfApplicationUser(value: object): value is ApplicationUser {
    return true;
}

export function ApplicationUserFromJSON(json: any): ApplicationUser {
    return ApplicationUserFromJSONTyped(json, false);
}

export function ApplicationUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationUser {
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
        'requestLimit': json['requestLimit'] == null ? undefined : json['requestLimit'],
        'name': json['name'] == null ? undefined : json['name'],
        'primaryAccount': json['primaryAccount'] == null ? undefined : json['primaryAccount'],
    };
}

export function ApplicationUserToJSON(json: any): ApplicationUser {
    return ApplicationUserToJSONTyped(json, false);
}

export function ApplicationUserToJSONTyped(value?: Omit<ApplicationUser, 'scope'|'plannedPurgeDate'|'id'|'version'|'requestLimit'|'name'|'primaryAccount'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'userType': UserTypeToJSON(value['userType']),
    };
}

