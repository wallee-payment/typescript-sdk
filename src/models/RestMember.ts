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
import type { RoleRef } from './RoleRef';
import {
    RoleRefFromJSON,
    RoleRefFromJSONTyped,
    RoleRefToJSON,
    RoleRefToJSONTyped,
} from './RoleRef';
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
 * @interface RestMember
 */
export interface RestMember {
    /**
     * The roles the user holds.
     * @type {Array<RoleRef>}
     * @memberof RestMember
     */
    readonly roles?: Array<RoleRef>;
    /**
     * The name used to identify the user.
     * @type {string}
     * @memberof RestMember
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof RestMember
     */
    readonly id?: number;
    /**
     * 
     * @type {UserType}
     * @memberof RestMember
     */
    userType?: UserType;
}



/**
 * Check if a given object implements the RestMember interface.
 */
export function instanceOfRestMember(value: object): value is RestMember {
    return true;
}

export function RestMemberFromJSON(json: any): RestMember {
    return RestMemberFromJSONTyped(json, false);
}

export function RestMemberFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestMember {
    if (json == null) {
        return json;
    }
    return {
        
        'roles': json['roles'] == null ? undefined : ((json['roles'] as Array<any>).map(RoleRefFromJSON)),
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'userType': json['userType'] == null ? undefined : UserTypeFromJSON(json['userType']),
    };
}

export function RestMemberToJSON(json: any): RestMember {
    return RestMemberToJSONTyped(json, false);
}

export function RestMemberToJSONTyped(value?: Omit<RestMember, 'roles'|'name'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'userType': UserTypeToJSON(value['userType']),
    };
}

