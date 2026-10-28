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
 * @interface PaymentTerminalCreationRequest
 */
export interface PaymentTerminalCreationRequest {
    /**
     * The environment used to create the payment terminal (TEST/PRODUCTION).
     * @type {string}
     * @memberof PaymentTerminalCreationRequest
     */
    environment: string;
    /**
     * The configuration that is assigned to the terminal and determines how it works.
     * @type {number}
     * @memberof PaymentTerminalCreationRequest
     */
    _configuration: number;
    /**
     * The name used to identify the payment terminal.
     * @type {string}
     * @memberof PaymentTerminalCreationRequest
     */
    name: string;
    /**
     * The ID assigned by the external system to this payment terminal
     * @type {string}
     * @memberof PaymentTerminalCreationRequest
     */
    externalId: string;
    /**
     * The physical location where the terminal is used.
     * @type {number}
     * @memberof PaymentTerminalCreationRequest
     */
    location: number;
}

/**
 * Check if a given object implements the PaymentTerminalCreationRequest interface.
 */
export function instanceOfPaymentTerminalCreationRequest(value: object): value is PaymentTerminalCreationRequest {
    if (!('environment' in value) || value['environment'] === undefined) return false;
    if (!('_configuration' in value) || value['_configuration'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('location' in value) || value['location'] === undefined) return false;
    return true;
}

export function PaymentTerminalCreationRequestFromJSON(json: any): PaymentTerminalCreationRequest {
    return PaymentTerminalCreationRequestFromJSONTyped(json, false);
}

export function PaymentTerminalCreationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalCreationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'environment': json['environment'],
        '_configuration': json['configuration'],
        'name': json['name'],
        'externalId': json['externalId'],
        'location': json['location'],
    };
}

export function PaymentTerminalCreationRequestToJSON(json: any): PaymentTerminalCreationRequest {
    return PaymentTerminalCreationRequestToJSONTyped(json, false);
}

export function PaymentTerminalCreationRequestToJSONTyped(value?: PaymentTerminalCreationRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'environment': value['environment'],
        'configuration': value['_configuration'],
        'name': value['name'],
        'externalId': value['externalId'],
        'location': value['location'],
    };
}

