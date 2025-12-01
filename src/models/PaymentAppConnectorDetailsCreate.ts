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
 * @interface PaymentAppConnectorDetailsCreate
 */
export interface PaymentAppConnectorDetailsCreate {
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentAppConnectorDetailsCreate
     */
    externalId?: string;
}

/**
 * Check if a given object implements the PaymentAppConnectorDetailsCreate interface.
 */
export function instanceOfPaymentAppConnectorDetailsCreate(value: object): value is PaymentAppConnectorDetailsCreate {
    return true;
}

export function PaymentAppConnectorDetailsCreateFromJSON(json: any): PaymentAppConnectorDetailsCreate {
    return PaymentAppConnectorDetailsCreateFromJSONTyped(json, false);
}

export function PaymentAppConnectorDetailsCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppConnectorDetailsCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
    };
}

export function PaymentAppConnectorDetailsCreateToJSON(json: any): PaymentAppConnectorDetailsCreate {
    return PaymentAppConnectorDetailsCreateToJSONTyped(json, false);
}

export function PaymentAppConnectorDetailsCreateToJSONTyped(value?: PaymentAppConnectorDetailsCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'externalId': value['externalId'],
    };
}

