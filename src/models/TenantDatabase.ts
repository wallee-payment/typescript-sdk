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
 * @interface TenantDatabase
 */
export interface TenantDatabase {
    /**
     * The name used to identify the database.
     * @type {string}
     * @memberof TenantDatabase
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TenantDatabase
     */
    readonly id?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TenantDatabase
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the TenantDatabase interface.
 */
export function instanceOfTenantDatabase(value: object): value is TenantDatabase {
    return true;
}

export function TenantDatabaseFromJSON(json: any): TenantDatabase {
    return TenantDatabaseFromJSONTyped(json, false);
}

export function TenantDatabaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantDatabase {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function TenantDatabaseToJSON(json: any): TenantDatabase {
    return TenantDatabaseToJSONTyped(json, false);
}

export function TenantDatabaseToJSONTyped(value?: Omit<TenantDatabase, 'name'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

