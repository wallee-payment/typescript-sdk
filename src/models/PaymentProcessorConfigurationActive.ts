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
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface PaymentProcessorConfigurationActive
 */
export interface PaymentProcessorConfigurationActive {
    /**
     * The name used to identify the payment method configuration.
     * @type {string}
     * @memberof PaymentProcessorConfigurationActive
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof PaymentProcessorConfigurationActive
     */
    state?: CreationEntityState;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof PaymentProcessorConfigurationActive
     */
    version: number;
}

/**
 * Check if a given object implements the PaymentProcessorConfigurationActive interface.
 */
export function instanceOfPaymentProcessorConfigurationActive(value: object): value is PaymentProcessorConfigurationActive {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function PaymentProcessorConfigurationActiveFromJSON(json: any): PaymentProcessorConfigurationActive {
    return PaymentProcessorConfigurationActiveFromJSONTyped(json, false);
}

export function PaymentProcessorConfigurationActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentProcessorConfigurationActive {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'version': json['version'],
    };
}

export function PaymentProcessorConfigurationActiveToJSON(value?: PaymentProcessorConfigurationActive | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
        'version': value['version'],
    };
}

