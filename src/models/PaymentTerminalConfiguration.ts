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
import type { PaymentTerminalConfigurationState } from './PaymentTerminalConfigurationState';
import {
    PaymentTerminalConfigurationStateFromJSON,
    PaymentTerminalConfigurationStateFromJSONTyped,
    PaymentTerminalConfigurationStateToJSON,
    PaymentTerminalConfigurationStateToJSONTyped,
} from './PaymentTerminalConfigurationState';
import type { PaymentTerminalType } from './PaymentTerminalType';
import {
    PaymentTerminalTypeFromJSON,
    PaymentTerminalTypeFromJSONTyped,
    PaymentTerminalTypeToJSON,
    PaymentTerminalTypeToJSONTyped,
} from './PaymentTerminalType';

/**
 * 
 * @export
 * @interface PaymentTerminalConfiguration
 */
export interface PaymentTerminalConfiguration {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentTerminalConfiguration
     */
    readonly linkedSpaceId?: number;
    /**
     * The name used to identify the payment terminal configuration.
     * @type {string}
     * @memberof PaymentTerminalConfiguration
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentTerminalConfiguration
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalConfiguration
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentTerminalConfigurationState}
     * @memberof PaymentTerminalConfiguration
     */
    state?: PaymentTerminalConfigurationState;
    /**
     * 
     * @type {PaymentTerminalType}
     * @memberof PaymentTerminalConfiguration
     */
    type?: PaymentTerminalType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentTerminalConfiguration
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the PaymentTerminalConfiguration interface.
 */
export function instanceOfPaymentTerminalConfiguration(value: object): value is PaymentTerminalConfiguration {
    return true;
}

export function PaymentTerminalConfigurationFromJSON(json: any): PaymentTerminalConfiguration {
    return PaymentTerminalConfigurationFromJSONTyped(json, false);
}

export function PaymentTerminalConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : PaymentTerminalConfigurationStateFromJSON(json['state']),
        'type': json['type'] == null ? undefined : PaymentTerminalTypeFromJSON(json['type']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PaymentTerminalConfigurationToJSON(json: any): PaymentTerminalConfiguration {
    return PaymentTerminalConfigurationToJSONTyped(json, false);
}

export function PaymentTerminalConfigurationToJSONTyped(value?: Omit<PaymentTerminalConfiguration, 'linkedSpaceId'|'name'|'plannedPurgeDate'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': PaymentTerminalConfigurationStateToJSON(value['state']),
        'type': PaymentTerminalTypeToJSON(value['type']),
    };
}

