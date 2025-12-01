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
 * @interface PaymentAppConnectorDetails
 */
export interface PaymentAppConnectorDetails {
}

/**
 * Check if a given object implements the PaymentAppConnectorDetails interface.
 */
export function instanceOfPaymentAppConnectorDetails(value: object): value is PaymentAppConnectorDetails {
    return true;
}

export function PaymentAppConnectorDetailsFromJSON(json: any): PaymentAppConnectorDetails {
    return PaymentAppConnectorDetailsFromJSONTyped(json, false);
}

export function PaymentAppConnectorDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppConnectorDetails {
    return json;
}

export function PaymentAppConnectorDetailsToJSON(json: any): PaymentAppConnectorDetails {
    return PaymentAppConnectorDetailsToJSONTyped(json, false);
}

export function PaymentAppConnectorDetailsToJSONTyped(value?: PaymentAppConnectorDetails | null, ignoreDiscriminator: boolean = false): any {
    return value;
}

