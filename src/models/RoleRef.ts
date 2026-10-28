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
 * @interface RoleRef
 */
export interface RoleRef {
    /**
     * The name used to identify the role.
     * @type {string}
     * @memberof RoleRef
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof RoleRef
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the RoleRef interface.
 */
export function instanceOfRoleRef(value: object): value is RoleRef {
    return true;
}

export function RoleRefFromJSON(json: any): RoleRef {
    return RoleRefFromJSONTyped(json, false);
}

export function RoleRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleRef {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function RoleRefToJSON(json: any): RoleRef {
    return RoleRefToJSONTyped(json, false);
}

export function RoleRefToJSONTyped(value?: Omit<RoleRef, 'name'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

