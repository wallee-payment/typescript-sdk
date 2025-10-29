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
 * @interface PaymentProcessorConfigurationCreate
 */
export interface PaymentProcessorConfigurationCreate {
    /**
     * The name used to identify the payment method configuration.
     * @type {string}
     * @memberof PaymentProcessorConfigurationCreate
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof PaymentProcessorConfigurationCreate
     */
    state?: CreationEntityState;
    /**
     * The payment processor that the configuration is for.
     * @type {number}
     * @memberof PaymentProcessorConfigurationCreate
     */
    processor: number;
}

/**
 * Check if a given object implements the PaymentProcessorConfigurationCreate interface.
 */
export function instanceOfPaymentProcessorConfigurationCreate(value: object): value is PaymentProcessorConfigurationCreate {
    if (!('processor' in value) || value['processor'] === undefined) return false;
    return true;
}

export function PaymentProcessorConfigurationCreateFromJSON(json: any): PaymentProcessorConfigurationCreate {
    return PaymentProcessorConfigurationCreateFromJSONTyped(json, false);
}

export function PaymentProcessorConfigurationCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentProcessorConfigurationCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'processor': json['processor'],
    };
}

export function PaymentProcessorConfigurationCreateToJSON(value?: PaymentProcessorConfigurationCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
        'processor': value['processor'],
    };
}

