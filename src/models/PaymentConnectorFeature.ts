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
/**
 * 
 * @export
 * @interface PaymentConnectorFeature
 */
export interface PaymentConnectorFeature {
    /**
     * The localized name of the feature.
     * @type {string}
     * @memberof PaymentConnectorFeature
     */
    readonly displayName?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentConnectorFeature
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the PaymentConnectorFeature interface.
 */
export function instanceOfPaymentConnectorFeature(value: object): value is PaymentConnectorFeature {
    return true;
}

export function PaymentConnectorFeatureFromJSON(json: any): PaymentConnectorFeature {
    return PaymentConnectorFeatureFromJSONTyped(json, false);
}

export function PaymentConnectorFeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentConnectorFeature {
    if (json == null) {
        return json;
    }
    return {
        
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PaymentConnectorFeatureToJSON(value?: Omit<PaymentConnectorFeature, 'displayName'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

