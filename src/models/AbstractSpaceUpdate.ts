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
    SpaceAddressCreateToJSONTyped,
} from './SpaceAddressCreate';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
    CreationEntityStateToJSONTyped,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface AbstractSpaceUpdate
 */
export interface AbstractSpaceUpdate {
    /**
     * The maximum number of API requests that are accepted within two minutes. This limit can only be changed with special privileges.
     * @type {number}
     * @memberof AbstractSpaceUpdate
     */
    requestLimit?: number;
    /**
     * 
     * @type {SpaceAddressCreate}
     * @memberof AbstractSpaceUpdate
     */
    postalAddress?: SpaceAddressCreate;
    /**
     * The name used to identify the space.
     * @type {string}
     * @memberof AbstractSpaceUpdate
     */
    name?: string;
    /**
     * The email address that will receive messages about technical issues and errors that occur in the space.
     * @type {Set<string>}
     * @memberof AbstractSpaceUpdate
     */
    technicalContactAddresses?: Set<string>;
    /**
     * The time zone that is used to schedule and run background processes. This does not affect the formatting of dates in the user interface.
     * @type {string}
     * @memberof AbstractSpaceUpdate
     */
    timeZone?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof AbstractSpaceUpdate
     */
    state?: CreationEntityState;
    /**
     * The currency that is used to display aggregated amounts in the space.
     * @type {string}
     * @memberof AbstractSpaceUpdate
     */
    primaryCurrency?: string;
}



/**
 * Check if a given object implements the AbstractSpaceUpdate interface.
 */
export function instanceOfAbstractSpaceUpdate(value: object): value is AbstractSpaceUpdate {
    return true;
}

export function AbstractSpaceUpdateFromJSON(json: any): AbstractSpaceUpdate {
    return AbstractSpaceUpdateFromJSONTyped(json, false);
}

export function AbstractSpaceUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractSpaceUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'requestLimit': json['requestLimit'] == null ? undefined : json['requestLimit'],
        'postalAddress': json['postalAddress'] == null ? undefined : SpaceAddressCreateFromJSON(json['postalAddress']),
        'name': json['name'] == null ? undefined : json['name'],
        'technicalContactAddresses': json['technicalContactAddresses'] == null ? undefined : new Set(json['technicalContactAddresses']),
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'primaryCurrency': json['primaryCurrency'] == null ? undefined : json['primaryCurrency'],
    };
}

export function AbstractSpaceUpdateToJSON(json: any): AbstractSpaceUpdate {
    return AbstractSpaceUpdateToJSONTyped(json, false);
}

export function AbstractSpaceUpdateToJSONTyped(value?: AbstractSpaceUpdate | null, ignoreDiscriminator: boolean = false): any {
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
    };
}

