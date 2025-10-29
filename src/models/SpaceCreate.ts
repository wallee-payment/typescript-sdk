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
import type { SpaceAddressCreate } from './SpaceAddressCreate';
import {
    SpaceAddressCreateFromJSON,
    SpaceAddressCreateFromJSONTyped,
    SpaceAddressCreateToJSON,
} from './SpaceAddressCreate';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface SpaceCreate
 */
export interface SpaceCreate {
    /**
     * The maximum number of API requests that are accepted within two minutes. This limit can only be changed with special privileges.
     * @type {number}
     * @memberof SpaceCreate
     */
    requestLimit?: number;
    /**
     * 
     * @type {SpaceAddressCreate}
     * @memberof SpaceCreate
     */
    postalAddress?: SpaceAddressCreate;
    /**
     * The name used to identify the space.
     * @type {string}
     * @memberof SpaceCreate
     */
    name?: string;
    /**
     * The email address that will receive messages about technical issues and errors that occur in the space.
     * @type {Set<string>}
     * @memberof SpaceCreate
     */
    technicalContactAddresses?: Set<string>;
    /**
     * The time zone that is used to schedule and run background processes. This does not affect the formatting of dates in the user interface.
     * @type {string}
     * @memberof SpaceCreate
     */
    timeZone?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof SpaceCreate
     */
    state?: CreationEntityState;
    /**
     * The currency that is used to display aggregated amounts in the space.
     * @type {string}
     * @memberof SpaceCreate
     */
    primaryCurrency?: string;
    /**
     * The database the space is connected to and that holds the space's data.
     * @type {number}
     * @memberof SpaceCreate
     */
    database?: number;
    /**
     * The account that the space belongs to.
     * @type {number}
     * @memberof SpaceCreate
     */
    account: number;
}

/**
 * Check if a given object implements the SpaceCreate interface.
 */
export function instanceOfSpaceCreate(value: object): value is SpaceCreate {
    if (!('account' in value) || value['account'] === undefined) return false;
    return true;
}

export function SpaceCreateFromJSON(json: any): SpaceCreate {
    return SpaceCreateFromJSONTyped(json, false);
}

export function SpaceCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpaceCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'requestLimit': json['requestLimit'] == null ? undefined : json['requestLimit'],
        'postalAddress': json['postalAddress'] == null ? undefined : SpaceAddressCreateFromJSON(json['postalAddress']),
        'name': json['name'] == null ? undefined : json['name'],
        'technicalContactAddresses': json['technicalContactAddresses'] == null ? undefined : json['technicalContactAddresses'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'primaryCurrency': json['primaryCurrency'] == null ? undefined : json['primaryCurrency'],
        'database': json['database'] == null ? undefined : json['database'],
        'account': json['account'],
    };
}

export function SpaceCreateToJSON(value?: SpaceCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'requestLimit': value['requestLimit'],
        'postalAddress': SpaceAddressCreateToJSON(value['postalAddress']),
        'name': value['name'],
        'technicalContactAddresses': value['technicalContactAddresses'] == null ? undefined : Array.from(value['technicalContactAddresses'] as Set<any>),
        'timeZone': value['timeZone'],
        'state': CreationEntityStateToJSON(value['state']),
        'primaryCurrency': value['primaryCurrency'],
        'database': value['database'],
        'account': value['account'],
    };
}

