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
import type { PaymentTerminalConfigurationVersionState } from './PaymentTerminalConfigurationVersionState';
import {
    PaymentTerminalConfigurationVersionStateFromJSON,
    PaymentTerminalConfigurationVersionStateFromJSONTyped,
    PaymentTerminalConfigurationVersionStateToJSON,
    PaymentTerminalConfigurationVersionStateToJSONTyped,
} from './PaymentTerminalConfigurationVersionState';
import type { PaymentTerminalConfiguration } from './PaymentTerminalConfiguration';
import {
    PaymentTerminalConfigurationFromJSON,
    PaymentTerminalConfigurationFromJSONTyped,
    PaymentTerminalConfigurationToJSON,
    PaymentTerminalConfigurationToJSONTyped,
} from './PaymentTerminalConfiguration';

/**
 * 
 * @export
 * @interface PaymentTerminalConfigurationVersion
 */
export interface PaymentTerminalConfigurationVersion {
    /**
     * The start time of the terminal's maintenance window.
     * @type {string}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly maintenanceWindowStart?: string;
    /**
     * 
     * @type {PaymentTerminalConfiguration}
     * @memberof PaymentTerminalConfigurationVersion
     */
    _configuration?: PaymentTerminalConfiguration;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The time zone of the payment terminal used to determine the maintenance window.
     * @type {string}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly timeZone?: string;
    /**
     * Whether payment terminals are immediately updated to this configuration version. If not, it will be applied during the maintenance window.
     * @type {boolean}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly versionAppliedImmediately?: boolean;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly linkedSpaceId?: number;
    /**
     * The payment connector configurations that are available on the payment terminal.
     * @type {Array<number>}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly connectorConfigurations?: Array<number>;
    /**
     * The ID of the user the payment terminal configuration version was created by.
     * @type {number}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly createdBy?: number;
    /**
     * The default currency that is used if none is set on the payment terminal itself. If it is empty, the currency is derived from the location of the terminal.
     * @type {string}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly defaultCurrency?: string;
    /**
     * The permitted duration of the terminal's maintenance window.
     * @type {string}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly maintenanceWindowDuration?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalConfigurationVersion
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentTerminalConfigurationVersionState}
     * @memberof PaymentTerminalConfigurationVersion
     */
    state?: PaymentTerminalConfigurationVersionState;
}



/**
 * Check if a given object implements the PaymentTerminalConfigurationVersion interface.
 */
export function instanceOfPaymentTerminalConfigurationVersion(value: object): value is PaymentTerminalConfigurationVersion {
    return true;
}

export function PaymentTerminalConfigurationVersionFromJSON(json: any): PaymentTerminalConfigurationVersion {
    return PaymentTerminalConfigurationVersionFromJSONTyped(json, false);
}

export function PaymentTerminalConfigurationVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalConfigurationVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'maintenanceWindowStart': json['maintenanceWindowStart'] == null ? undefined : json['maintenanceWindowStart'],
        '_configuration': json['configuration'] == null ? undefined : PaymentTerminalConfigurationFromJSON(json['configuration']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'versionAppliedImmediately': json['versionAppliedImmediately'] == null ? undefined : json['versionAppliedImmediately'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'connectorConfigurations': json['connectorConfigurations'] == null ? undefined : json['connectorConfigurations'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'defaultCurrency': json['defaultCurrency'] == null ? undefined : json['defaultCurrency'],
        'maintenanceWindowDuration': json['maintenanceWindowDuration'] == null ? undefined : json['maintenanceWindowDuration'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : PaymentTerminalConfigurationVersionStateFromJSON(json['state']),
    };
}

export function PaymentTerminalConfigurationVersionToJSON(json: any): PaymentTerminalConfigurationVersion {
    return PaymentTerminalConfigurationVersionToJSONTyped(json, false);
}

export function PaymentTerminalConfigurationVersionToJSONTyped(value?: Omit<PaymentTerminalConfigurationVersion, 'maintenanceWindowStart'|'plannedPurgeDate'|'timeZone'|'versionAppliedImmediately'|'createdOn'|'version'|'linkedSpaceId'|'connectorConfigurations'|'createdBy'|'defaultCurrency'|'maintenanceWindowDuration'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'configuration': PaymentTerminalConfigurationToJSON(value['_configuration']),
        'state': PaymentTerminalConfigurationVersionStateToJSON(value['state']),
    };
}

