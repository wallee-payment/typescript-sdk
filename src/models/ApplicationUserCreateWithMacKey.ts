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
 * @interface ApplicationUserCreateWithMacKey
 */
export interface ApplicationUserCreateWithMacKey {
    /**
     * The scope that the user belongs to.
     * @type {number}
     * @memberof ApplicationUserCreateWithMacKey
     */
    readonly scope?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof ApplicationUserCreateWithMacKey
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ApplicationUserCreateWithMacKey
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof ApplicationUserCreateWithMacKey
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {UserType}
     * @memberof ApplicationUserCreateWithMacKey
     */
    userType?: UserType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ApplicationUserCreateWithMacKey
     */
    readonly version?: number;
    /**
     * The maximum number of API requests that are accepted every 2 minutes.
     * @type {number}
     * @memberof ApplicationUserCreateWithMacKey
     */
    readonly requestLimit?: number;
    /**
     * The name used to identify the application user.
     * @type {string}
     * @memberof ApplicationUserCreateWithMacKey
     */
    readonly name?: string;
    /**
     * The primary account that the user belongs to.
     * @type {number}
     * @memberof ApplicationUserCreateWithMacKey
     */
    readonly primaryAccount?: number;
    /**
     * The user's authentication key securing requests. Only displayed a single time after the user has been created.
     * @type {string}
     * @memberof ApplicationUserCreateWithMacKey
     */
    readonly macKey?: string;
}

/**
 * Check if a given object implements the ApplicationUserCreateWithMacKey interface.
 */
export function instanceOfApplicationUserCreateWithMacKey(value: object): value is ApplicationUserCreateWithMacKey {
    return true;
}

export function ApplicationUserCreateWithMacKeyFromJSON(json: any): ApplicationUserCreateWithMacKey {
    return ApplicationUserCreateWithMacKeyFromJSONTyped(json, false);
}

export function ApplicationUserCreateWithMacKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationUserCreateWithMacKey {
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
        'macKey': json['macKey'] == null ? undefined : json['macKey'],
    };
}

export function ApplicationUserCreateWithMacKeyToJSON(value?: Omit<ApplicationUserCreateWithMacKey, 'scope'|'plannedPurgeDate'|'id'|'version'|'requestLimit'|'name'|'primaryAccount'|'macKey'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'userType': UserTypeToJSON(value['userType']),
    };
}

