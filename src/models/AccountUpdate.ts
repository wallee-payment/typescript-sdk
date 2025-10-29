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
 * @interface AccountUpdate
 */
export interface AccountUpdate {
    /**
     * The name used to identify the account.
     * @type {string}
     * @memberof AccountUpdate
     */
    name?: string;
    /**
     * The number of sub-accounts that can be created within this account.
     * @type {number}
     * @memberof AccountUpdate
     */
    subaccountLimit?: number;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof AccountUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the AccountUpdate interface.
 */
export function instanceOfAccountUpdate(value: object): value is AccountUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function AccountUpdateFromJSON(json: any): AccountUpdate {
    return AccountUpdateFromJSONTyped(json, false);
}

export function AccountUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'subaccountLimit': json['subaccountLimit'] == null ? undefined : json['subaccountLimit'],
        'version': json['version'],
    };
}

export function AccountUpdateToJSON(value?: AccountUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'subaccountLimit': value['subaccountLimit'],
        'version': value['version'],
    };
}

