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
import type { PaymentProcessor } from './PaymentProcessor';
import {
    PaymentProcessorFromJSON,
    PaymentProcessorFromJSONTyped,
    PaymentProcessorToJSON,
} from './PaymentProcessor';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface PaymentProcessorConfiguration
 */
export interface PaymentProcessorConfiguration {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentProcessorConfiguration
     */
    readonly linkedSpaceId?: number;
    /**
     * Whether the processor configuration is managed by the application and therefore cannot be changed.
     * @type {boolean}
     * @memberof PaymentProcessorConfiguration
     */
    readonly applicationManaged?: boolean;
    /**
     * The ID of the payment contract the processor configuration is linked to.
     * @type {number}
     * @memberof PaymentProcessorConfiguration
     */
    readonly contractId?: number;
    /**
     * The name used to identify the payment method configuration.
     * @type {string}
     * @memberof PaymentProcessorConfiguration
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentProcessorConfiguration
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentProcessorConfiguration
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof PaymentProcessorConfiguration
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {PaymentProcessor}
     * @memberof PaymentProcessorConfiguration
     */
    processor?: PaymentProcessor;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentProcessorConfiguration
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the PaymentProcessorConfiguration interface.
 */
export function instanceOfPaymentProcessorConfiguration(value: object): value is PaymentProcessorConfiguration {
    return true;
}

export function PaymentProcessorConfigurationFromJSON(json: any): PaymentProcessorConfiguration {
    return PaymentProcessorConfigurationFromJSONTyped(json, false);
}

export function PaymentProcessorConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentProcessorConfiguration {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'applicationManaged': json['applicationManaged'] == null ? undefined : json['applicationManaged'],
        'contractId': json['contractId'] == null ? undefined : json['contractId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'processor': json['processor'] == null ? undefined : PaymentProcessorFromJSON(json['processor']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PaymentProcessorConfigurationToJSON(value?: Omit<PaymentProcessorConfiguration, 'linkedSpaceId'|'applicationManaged'|'contractId'|'name'|'plannedPurgeDate'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'processor': PaymentProcessorToJSON(value['processor']),
    };
}

