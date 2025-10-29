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
import type { PaymentTerminalType } from './PaymentTerminalType';
import {
    PaymentTerminalTypeFromJSON,
    PaymentTerminalTypeFromJSONTyped,
    PaymentTerminalTypeToJSON,
} from './PaymentTerminalType';
import type { PaymentTerminalLocationVersion } from './PaymentTerminalLocationVersion';
import {
    PaymentTerminalLocationVersionFromJSON,
    PaymentTerminalLocationVersionFromJSONTyped,
    PaymentTerminalLocationVersionToJSON,
} from './PaymentTerminalLocationVersion';
import type { PaymentTerminalConfigurationVersion } from './PaymentTerminalConfigurationVersion';
import {
    PaymentTerminalConfigurationVersionFromJSON,
    PaymentTerminalConfigurationVersionFromJSONTyped,
    PaymentTerminalConfigurationVersionToJSON,
} from './PaymentTerminalConfigurationVersion';
import type { PaymentTerminalState } from './PaymentTerminalState';
import {
    PaymentTerminalStateFromJSON,
    PaymentTerminalStateFromJSONTyped,
    PaymentTerminalStateToJSON,
} from './PaymentTerminalState';

/**
 * 
 * @export
 * @interface PaymentTerminal
 */
export interface PaymentTerminal {
    /**
     * The unique identifier of the terminal, that is displayed on the device.
     * @type {string}
     * @memberof PaymentTerminal
     */
    readonly identifier?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentTerminal
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentTerminal
     */
    readonly externalId?: string;
    /**
     * 
     * @type {PaymentTerminalType}
     * @memberof PaymentTerminal
     */
    type?: PaymentTerminalType;
    /**
     * The name of the device that is currently linked to the payment terminal.
     * @type {string}
     * @memberof PaymentTerminal
     */
    readonly deviceName?: string;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentTerminal
     */
    readonly version?: number;
    /**
     * The serial number of the device that is currently linked to the payment terminal.
     * @type {string}
     * @memberof PaymentTerminal
     */
    readonly deviceSerialNumber?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentTerminal
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {PaymentTerminalConfigurationVersion}
     * @memberof PaymentTerminal
     */
    configurationVersion?: PaymentTerminalConfigurationVersion;
    /**
     * 
     * @type {PaymentTerminalLocationVersion}
     * @memberof PaymentTerminal
     */
    locationVersion?: PaymentTerminalLocationVersion;
    /**
     * The default currency of the terminal.
     * @type {string}
     * @memberof PaymentTerminal
     */
    readonly defaultCurrency?: string;
    /**
     * The name used to identify the payment terminal.
     * @type {string}
     * @memberof PaymentTerminal
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminal
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentTerminalState}
     * @memberof PaymentTerminal
     */
    state?: PaymentTerminalState;
}

/**
 * Check if a given object implements the PaymentTerminal interface.
 */
export function instanceOfPaymentTerminal(value: object): value is PaymentTerminal {
    return true;
}

export function PaymentTerminalFromJSON(json: any): PaymentTerminal {
    return PaymentTerminalFromJSONTyped(json, false);
}

export function PaymentTerminalFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminal {
    if (json == null) {
        return json;
    }
    return {
        
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'type': json['type'] == null ? undefined : PaymentTerminalTypeFromJSON(json['type']),
        'deviceName': json['deviceName'] == null ? undefined : json['deviceName'],
        'version': json['version'] == null ? undefined : json['version'],
        'deviceSerialNumber': json['deviceSerialNumber'] == null ? undefined : json['deviceSerialNumber'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'configurationVersion': json['configurationVersion'] == null ? undefined : PaymentTerminalConfigurationVersionFromJSON(json['configurationVersion']),
        'locationVersion': json['locationVersion'] == null ? undefined : PaymentTerminalLocationVersionFromJSON(json['locationVersion']),
        'defaultCurrency': json['defaultCurrency'] == null ? undefined : json['defaultCurrency'],
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : PaymentTerminalStateFromJSON(json['state']),
    };
}

export function PaymentTerminalToJSON(value?: Omit<PaymentTerminal, 'identifier'|'plannedPurgeDate'|'externalId'|'deviceName'|'version'|'deviceSerialNumber'|'linkedSpaceId'|'defaultCurrency'|'name'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': PaymentTerminalTypeToJSON(value['type']),
        'configurationVersion': PaymentTerminalConfigurationVersionToJSON(value['configurationVersion']),
        'locationVersion': PaymentTerminalLocationVersionToJSON(value['locationVersion']),
        'state': PaymentTerminalStateToJSON(value['state']),
    };
}

