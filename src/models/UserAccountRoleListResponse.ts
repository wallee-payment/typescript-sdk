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
import type { UserAccountRole } from './UserAccountRole';
import {
    UserAccountRoleFromJSON,
    UserAccountRoleFromJSONTyped,
    UserAccountRoleToJSON,
    UserAccountRoleToJSONTyped,
} from './UserAccountRole';

/**
 * 
 * @export
 * @interface UserAccountRoleListResponse
 */
export interface UserAccountRoleListResponse {
    /**
     * An array containing the actual response objects.
     * @type {Array<UserAccountRole>}
     * @memberof UserAccountRoleListResponse
     */
    readonly data?: Array<UserAccountRole>;
    /**
     * Whether there are more objects available after this set. If false, there are no more objects to retrieve.
     * @type {boolean}
     * @memberof UserAccountRoleListResponse
     */
    readonly hasMore?: boolean;
    /**
     * The applied limit on the number of objects returned.
     * @type {number}
     * @memberof UserAccountRoleListResponse
     */
    readonly limit?: number;
}

/**
 * Check if a given object implements the UserAccountRoleListResponse interface.
 */
export function instanceOfUserAccountRoleListResponse(value: object): value is UserAccountRoleListResponse {
    return true;
}

export function UserAccountRoleListResponseFromJSON(json: any): UserAccountRoleListResponse {
    return UserAccountRoleListResponseFromJSONTyped(json, false);
}

export function UserAccountRoleListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAccountRoleListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(UserAccountRoleFromJSON)),
        'hasMore': json['hasMore'] == null ? undefined : json['hasMore'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}

export function UserAccountRoleListResponseToJSON(json: any): UserAccountRoleListResponse {
    return UserAccountRoleListResponseToJSONTyped(json, false);
}

export function UserAccountRoleListResponseToJSONTyped(value?: Omit<UserAccountRoleListResponse, 'data'|'hasMore'|'limit'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

