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
import type { Account } from './Account';
import {
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
    AccountToJSONTyped,
} from './Account';
import type { SpaceAddress } from './SpaceAddress';
import {
    SpaceAddressFromJSON,
    SpaceAddressFromJSONTyped,
    SpaceAddressToJSON,
    SpaceAddressToJSONTyped,
} from './SpaceAddress';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
    CreationEntityStateToJSONTyped,
} from './CreationEntityState';
import type { TenantDatabase } from './TenantDatabase';
import {
    TenantDatabaseFromJSON,
    TenantDatabaseFromJSONTyped,
    TenantDatabaseToJSON,
    TenantDatabaseToJSONTyped,
} from './TenantDatabase';

/**
 * 
 * @export
 * @interface Space
 */
export interface Space {
    /**
     * Whether this space and all its parent accounts are active or restricted active.
     * @type {boolean}
     * @memberof Space
     */
    readonly activeOrRestrictedActive?: boolean;
    /**
     * The date and time when the space was deleted.
     * @type {Date}
     * @memberof Space
     */
    readonly deletedOn?: Date;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Space
     */
    readonly plannedPurgeDate?: Date;
    /**
     * Whether this space and all its parent accounts are active.
     * @type {boolean}
     * @memberof Space
     */
    readonly active?: boolean;
    /**
     * The time zone that is used to schedule and run background processes. This does not affect the formatting of dates in the user interface.
     * @type {string}
     * @memberof Space
     */
    readonly timeZone?: string;
    /**
     * The date and time when the space was created.
     * @type {Date}
     * @memberof Space
     */
    readonly createdOn?: Date;
    /**
     * The currency that is used to display aggregated amounts in the space.
     * @type {string}
     * @memberof Space
     */
    readonly primaryCurrency?: string;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Space
     */
    readonly version?: number;
    /**
     * The ID of the user the space was deleted by.
     * @type {number}
     * @memberof Space
     */
    readonly deletedBy?: number;
    /**
     * The maximum number of API requests that are accepted within two minutes. This limit can only be changed with special privileges.
     * @type {number}
     * @memberof Space
     */
    readonly requestLimit?: number;
    /**
     * 
     * @type {TenantDatabase}
     * @memberof Space
     */
    database?: TenantDatabase;
    /**
     * 
     * @type {SpaceAddress}
     * @memberof Space
     */
    postalAddress?: SpaceAddress;
    /**
     * Whether this space and all its parent accounts are active or restricted active. There is least one parent account that is restricted active.
     * @type {boolean}
     * @memberof Space
     */
    readonly restrictedActive?: boolean;
    /**
     * The ID of the user the space was created by.
     * @type {number}
     * @memberof Space
     */
    readonly createdBy?: number;
    /**
     * The name used to identify the space.
     * @type {string}
     * @memberof Space
     */
    readonly name?: string;
    /**
     * The email address that will receive messages about technical issues and errors that occur in the space.
     * @type {Set<string>}
     * @memberof Space
     */
    readonly technicalContactAddresses?: Set<string>;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Space
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof Space
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {Account}
     * @memberof Space
     */
    account?: Account;
}



/**
 * Check if a given object implements the Space interface.
 */
export function instanceOfSpace(value: object): value is Space {
    return true;
}

export function SpaceFromJSON(json: any): Space {
    return SpaceFromJSONTyped(json, false);
}

export function SpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Space {
    if (json == null) {
        return json;
    }
    return {
        
        'activeOrRestrictedActive': json['activeOrRestrictedActive'] == null ? undefined : json['activeOrRestrictedActive'],
        'deletedOn': json['deletedOn'] == null ? undefined : (new Date(json['deletedOn'])),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'active': json['active'] == null ? undefined : json['active'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'primaryCurrency': json['primaryCurrency'] == null ? undefined : json['primaryCurrency'],
        'version': json['version'] == null ? undefined : json['version'],
        'deletedBy': json['deletedBy'] == null ? undefined : json['deletedBy'],
        'requestLimit': json['requestLimit'] == null ? undefined : json['requestLimit'],
        'database': json['database'] == null ? undefined : TenantDatabaseFromJSON(json['database']),
        'postalAddress': json['postalAddress'] == null ? undefined : SpaceAddressFromJSON(json['postalAddress']),
        'restrictedActive': json['restrictedActive'] == null ? undefined : json['restrictedActive'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'name': json['name'] == null ? undefined : json['name'],
        'technicalContactAddresses': json['technicalContactAddresses'] == null ? undefined : new Set(json['technicalContactAddresses']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'account': json['account'] == null ? undefined : AccountFromJSON(json['account']),
    };
}

export function SpaceToJSON(json: any): Space {
    return SpaceToJSONTyped(json, false);
}

export function SpaceToJSONTyped(value?: Omit<Space, 'activeOrRestrictedActive'|'deletedOn'|'plannedPurgeDate'|'active'|'timeZone'|'createdOn'|'primaryCurrency'|'version'|'deletedBy'|'requestLimit'|'restrictedActive'|'createdBy'|'name'|'technicalContactAddresses'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'database': TenantDatabaseToJSON(value['database']),
        'postalAddress': SpaceAddressToJSON(value['postalAddress']),
        'state': CreationEntityStateToJSON(value['state']),
        'account': AccountToJSON(value['account']),
    };
}

