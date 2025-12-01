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
import type { PaymentTerminalAddress } from './PaymentTerminalAddress';
import {
    PaymentTerminalAddressFromJSON,
    PaymentTerminalAddressFromJSONTyped,
    PaymentTerminalAddressToJSON,
    PaymentTerminalAddressToJSONTyped,
} from './PaymentTerminalAddress';
import type { PaymentTerminalLocationVersionState } from './PaymentTerminalLocationVersionState';
import {
    PaymentTerminalLocationVersionStateFromJSON,
    PaymentTerminalLocationVersionStateFromJSONTyped,
    PaymentTerminalLocationVersionStateToJSON,
    PaymentTerminalLocationVersionStateToJSONTyped,
} from './PaymentTerminalLocationVersionState';
import type { PaymentTerminalLocation } from './PaymentTerminalLocation';
import {
    PaymentTerminalLocationFromJSON,
    PaymentTerminalLocationFromJSONTyped,
    PaymentTerminalLocationToJSON,
    PaymentTerminalLocationToJSONTyped,
} from './PaymentTerminalLocation';

/**
 * 
 * @export
 * @interface PaymentTerminalLocationVersion
 */
export interface PaymentTerminalLocationVersion {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentTerminalLocationVersion
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {PaymentTerminalAddress}
     * @memberof PaymentTerminalLocationVersion
     */
    address?: PaymentTerminalAddress;
    /**
     * The ID of the user the payment terminal location version was created by.
     * @type {number}
     * @memberof PaymentTerminalLocationVersion
     */
    readonly createdBy?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentTerminalLocationVersion
     */
    readonly plannedPurgeDate?: Date;
    /**
     * 
     * @type {PaymentTerminalAddress}
     * @memberof PaymentTerminalLocationVersion
     */
    contactAddress?: PaymentTerminalAddress;
    /**
     * 
     * @type {PaymentTerminalLocation}
     * @memberof PaymentTerminalLocationVersion
     */
    location?: PaymentTerminalLocation;
    /**
     * Whether payment terminals are immediately updated to this configuration version. If not, it will be applied during the maintenance window.
     * @type {boolean}
     * @memberof PaymentTerminalLocationVersion
     */
    readonly versionAppliedImmediately?: boolean;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalLocationVersion
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentTerminalLocationVersionState}
     * @memberof PaymentTerminalLocationVersion
     */
    state?: PaymentTerminalLocationVersionState;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof PaymentTerminalLocationVersion
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentTerminalLocationVersion
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the PaymentTerminalLocationVersion interface.
 */
export function instanceOfPaymentTerminalLocationVersion(value: object): value is PaymentTerminalLocationVersion {
    return true;
}

export function PaymentTerminalLocationVersionFromJSON(json: any): PaymentTerminalLocationVersion {
    return PaymentTerminalLocationVersionFromJSONTyped(json, false);
}

export function PaymentTerminalLocationVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalLocationVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'address': json['address'] == null ? undefined : PaymentTerminalAddressFromJSON(json['address']),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'contactAddress': json['contactAddress'] == null ? undefined : PaymentTerminalAddressFromJSON(json['contactAddress']),
        'location': json['location'] == null ? undefined : PaymentTerminalLocationFromJSON(json['location']),
        'versionAppliedImmediately': json['versionAppliedImmediately'] == null ? undefined : json['versionAppliedImmediately'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : PaymentTerminalLocationVersionStateFromJSON(json['state']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PaymentTerminalLocationVersionToJSON(json: any): PaymentTerminalLocationVersion {
    return PaymentTerminalLocationVersionToJSONTyped(json, false);
}

export function PaymentTerminalLocationVersionToJSONTyped(value?: Omit<PaymentTerminalLocationVersion, 'linkedSpaceId'|'createdBy'|'plannedPurgeDate'|'versionAppliedImmediately'|'id'|'createdOn'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': PaymentTerminalAddressToJSON(value['address']),
        'contactAddress': PaymentTerminalAddressToJSON(value['contactAddress']),
        'location': PaymentTerminalLocationToJSON(value['location']),
        'state': PaymentTerminalLocationVersionStateToJSON(value['state']),
    };
}

