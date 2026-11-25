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
 * @interface PaymentTerminalUpdateRequest
 */
export interface PaymentTerminalUpdateRequest {
    /**
     * The configuration that is assigned to the terminal and determines how it works.
     * @type {number}
     * @memberof PaymentTerminalUpdateRequest
     */
    _configuration?: number;
    /**
     * The name used to identify the payment terminal.
     * @type {string}
     * @memberof PaymentTerminalUpdateRequest
     */
    name?: string;
    /**
     * The version is used for optimistic locking and incremented whenever the payment terminal is updated.
     * @type {number}
     * @memberof PaymentTerminalUpdateRequest
     */
    version?: number;
}

/**
 * Check if a given object implements the PaymentTerminalUpdateRequest interface.
 */
export function instanceOfPaymentTerminalUpdateRequest(value: object): value is PaymentTerminalUpdateRequest {
    return true;
}

export function PaymentTerminalUpdateRequestFromJSON(json: any): PaymentTerminalUpdateRequest {
    return PaymentTerminalUpdateRequestFromJSONTyped(json, false);
}

export function PaymentTerminalUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        '_configuration': json['configuration'] == null ? undefined : json['configuration'],
        'name': json['name'] == null ? undefined : json['name'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PaymentTerminalUpdateRequestToJSON(json: any): PaymentTerminalUpdateRequest {
    return PaymentTerminalUpdateRequestToJSONTyped(json, false);
}

export function PaymentTerminalUpdateRequestToJSONTyped(value?: PaymentTerminalUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'configuration': value['_configuration'],
        'name': value['name'],
        'version': value['version'],
    };
}

