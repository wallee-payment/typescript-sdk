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
 * @interface PaymentTerminalPreparing
 */
export interface PaymentTerminalPreparing {
    /**
     * The name used to identify the payment terminal.
     * @type {string}
     * @memberof PaymentTerminalPreparing
     */
    name?: string;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof PaymentTerminalPreparing
     */
    version: number;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentTerminalPreparing
     */
    externalId?: string;
}

/**
 * Check if a given object implements the PaymentTerminalPreparing interface.
 */
export function instanceOfPaymentTerminalPreparing(value: object): value is PaymentTerminalPreparing {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function PaymentTerminalPreparingFromJSON(json: any): PaymentTerminalPreparing {
    return PaymentTerminalPreparingFromJSONTyped(json, false);
}

export function PaymentTerminalPreparingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalPreparing {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'version': json['version'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
    };
}

export function PaymentTerminalPreparingToJSON(json: any): PaymentTerminalPreparing {
    return PaymentTerminalPreparingToJSONTyped(json, false);
}

export function PaymentTerminalPreparingToJSONTyped(value?: PaymentTerminalPreparing | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'version': value['version'],
        'externalId': value['externalId'],
    };
}

