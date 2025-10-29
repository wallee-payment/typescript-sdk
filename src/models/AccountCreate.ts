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
 * @interface AccountCreate
 */
export interface AccountCreate {
    /**
     * The name used to identify the account.
     * @type {string}
     * @memberof AccountCreate
     */
    name?: string;
    /**
     * The number of sub-accounts that can be created within this account.
     * @type {number}
     * @memberof AccountCreate
     */
    subaccountLimit?: number;
    /**
     * The scope that the account belongs to.
     * @type {number}
     * @memberof AccountCreate
     */
    scope: number;
    /**
     * The parent account responsible for administering this account.
     * @type {number}
     * @memberof AccountCreate
     */
    parentAccount?: number;
}

/**
 * Check if a given object implements the AccountCreate interface.
 */
export function instanceOfAccountCreate(value: object): value is AccountCreate {
    if (!('scope' in value) || value['scope'] === undefined) return false;
    return true;
}

export function AccountCreateFromJSON(json: any): AccountCreate {
    return AccountCreateFromJSONTyped(json, false);
}

export function AccountCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'subaccountLimit': json['subaccountLimit'] == null ? undefined : json['subaccountLimit'],
        'scope': json['scope'],
        'parentAccount': json['parentAccount'] == null ? undefined : json['parentAccount'],
    };
}

export function AccountCreateToJSON(value?: AccountCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'subaccountLimit': value['subaccountLimit'],
        'scope': value['scope'],
        'parentAccount': value['parentAccount'],
    };
}

