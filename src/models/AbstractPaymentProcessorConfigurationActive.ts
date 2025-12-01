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
    CreationEntityStateToJSONTyped,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface AbstractPaymentProcessorConfigurationActive
 */
export interface AbstractPaymentProcessorConfigurationActive {
    /**
     * The name used to identify the payment method configuration.
     * @type {string}
     * @memberof AbstractPaymentProcessorConfigurationActive
     */
    name?: string;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof AbstractPaymentProcessorConfigurationActive
     */
    state?: CreationEntityState;
}



/**
 * Check if a given object implements the AbstractPaymentProcessorConfigurationActive interface.
 */
export function instanceOfAbstractPaymentProcessorConfigurationActive(value: object): value is AbstractPaymentProcessorConfigurationActive {
    return true;
}

export function AbstractPaymentProcessorConfigurationActiveFromJSON(json: any): AbstractPaymentProcessorConfigurationActive {
    return AbstractPaymentProcessorConfigurationActiveFromJSONTyped(json, false);
}

export function AbstractPaymentProcessorConfigurationActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractPaymentProcessorConfigurationActive {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
    };
}

export function AbstractPaymentProcessorConfigurationActiveToJSON(json: any): AbstractPaymentProcessorConfigurationActive {
    return AbstractPaymentProcessorConfigurationActiveToJSONTyped(json, false);
}

export function AbstractPaymentProcessorConfigurationActiveToJSONTyped(value?: AbstractPaymentProcessorConfigurationActive | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'state': CreationEntityStateToJSON(value['state']),
    };
}

