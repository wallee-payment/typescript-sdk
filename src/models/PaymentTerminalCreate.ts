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
 * @interface PaymentTerminalCreate
 */
export interface PaymentTerminalCreate {
    /**
     * The name used to identify the payment terminal.
     * @type {string}
     * @memberof PaymentTerminalCreate
     */
    name?: string;
    /**
     * The unique identifier of the terminal, that is displayed on the device.
     * @type {string}
     * @memberof PaymentTerminalCreate
     */
    identifier?: string;
    /**
     * The configuration that is assigned to the terminal and determines how it works.
     * @type {number}
     * @memberof PaymentTerminalCreate
     */
    configurationVersion?: number;
    /**
     * The physical location where the terminal is used.
     * @type {number}
     * @memberof PaymentTerminalCreate
     */
    locationVersion?: number;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentTerminalCreate
     */
    externalId: string;
    /**
     * The type of the payment terminal.
     * @type {number}
     * @memberof PaymentTerminalCreate
     */
    type: number;
}

/**
 * Check if a given object implements the PaymentTerminalCreate interface.
 */
export function instanceOfPaymentTerminalCreate(value: object): value is PaymentTerminalCreate {
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function PaymentTerminalCreateFromJSON(json: any): PaymentTerminalCreate {
    return PaymentTerminalCreateFromJSONTyped(json, false);
}

export function PaymentTerminalCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'configurationVersion': json['configurationVersion'] == null ? undefined : json['configurationVersion'],
        'locationVersion': json['locationVersion'] == null ? undefined : json['locationVersion'],
        'externalId': json['externalId'],
        'type': json['type'],
    };
}

export function PaymentTerminalCreateToJSON(json: any): PaymentTerminalCreate {
    return PaymentTerminalCreateToJSONTyped(json, false);
}

export function PaymentTerminalCreateToJSONTyped(value?: PaymentTerminalCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'identifier': value['identifier'],
        'configurationVersion': value['configurationVersion'],
        'locationVersion': value['locationVersion'],
        'externalId': value['externalId'],
        'type': value['type'],
    };
}

