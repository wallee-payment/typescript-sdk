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
 * @interface SpaceUpdate
 */
export interface SpaceUpdate {
    /**
     * The maximum number of API requests that are accepted within two minutes. This limit can only be changed with special privileges.
     * @type {number}
     * @memberof SpaceUpdate
     */
    requestLimit?: number;
    /**
     * 
     * @type {SpaceAddressCreate}
     * @memberof SpaceUpdate
     */
    postalAddress?: SpaceAddressCreate;
    /**
     * The name used to identify the space.
     * @type {string}
     * @memberof SpaceUpdate
     */
    name?: string;
    /**
     * The email address that will receive messages about technical issues and errors that occur in the space.
     * @type {Set<string>}
     * @memberof SpaceUpdate
     */
    technicalContactAddresses?: Set<string>;
    /**
     * The time zone that is used to schedule and run background processes. This does not affect the formatting of dates in the user interface.
     * @type {string}
     * @memberof SpaceUpdate
     */
    timeZone?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof SpaceUpdate
     */
    state?: CreationEntityState;
    /**
     * The currency that is used to display aggregated amounts in the space.
     * @type {string}
     * @memberof SpaceUpdate
     */
    primaryCurrency?: string;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof SpaceUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the SpaceUpdate interface.
 */
export function instanceOfSpaceUpdate(value: object): value is SpaceUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function SpaceUpdateFromJSON(json: any): SpaceUpdate {
    return SpaceUpdateFromJSONTyped(json, false);
}

export function SpaceUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpaceUpdate {
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
        'version': json['version'],
    };
}

export function SpaceUpdateToJSON(value?: SpaceUpdate | null): any {
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
        'version': value['version'],
    };
}

