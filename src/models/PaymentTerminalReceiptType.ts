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
 * @interface PaymentTerminalReceiptType
 */
export interface PaymentTerminalReceiptType {
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentTerminalReceiptType
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentTerminalReceiptType
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalReceiptType
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the PaymentTerminalReceiptType interface.
 */
export function instanceOfPaymentTerminalReceiptType(value: object): value is PaymentTerminalReceiptType {
    return true;
}

export function PaymentTerminalReceiptTypeFromJSON(json: any): PaymentTerminalReceiptType {
    return PaymentTerminalReceiptTypeFromJSONTyped(json, false);
}

export function PaymentTerminalReceiptTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalReceiptType {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PaymentTerminalReceiptTypeToJSON(json: any): PaymentTerminalReceiptType {
    return PaymentTerminalReceiptTypeToJSONTyped(json, false);
}

export function PaymentTerminalReceiptTypeToJSONTyped(value?: Omit<PaymentTerminalReceiptType, 'name'|'description'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

