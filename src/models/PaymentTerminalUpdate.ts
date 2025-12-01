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
 * @interface PaymentTerminalUpdate
 */
export interface PaymentTerminalUpdate {
    /**
     * The name used to identify the payment terminal.
     * @type {string}
     * @memberof PaymentTerminalUpdate
     */
    name?: string;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof PaymentTerminalUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the PaymentTerminalUpdate interface.
 */
export function instanceOfPaymentTerminalUpdate(value: object): value is PaymentTerminalUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function PaymentTerminalUpdateFromJSON(json: any): PaymentTerminalUpdate {
    return PaymentTerminalUpdateFromJSONTyped(json, false);
}

export function PaymentTerminalUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'version': json['version'],
    };
}

export function PaymentTerminalUpdateToJSON(json: any): PaymentTerminalUpdate {
    return PaymentTerminalUpdateToJSONTyped(json, false);
}

export function PaymentTerminalUpdateToJSONTyped(value?: PaymentTerminalUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'version': value['version'],
    };
}

