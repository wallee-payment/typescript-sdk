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
 * @interface PaymentTerminalTransactionSummaryReference
 */
export interface PaymentTerminalTransactionSummaryReference {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentTerminalTransactionSummaryReference
     */
    readonly linkedSpaceId?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalTransactionSummaryReference
     */
    readonly id?: number;
    /**
     * The unique identifier of the terminal.
     * @type {number}
     * @memberof PaymentTerminalTransactionSummaryReference
     */
    readonly terminalId?: number;
    /**
     * The unique identifier of the terminal, that is displayed on the device.
     * @type {string}
     * @memberof PaymentTerminalTransactionSummaryReference
     */
    readonly terminalIdentifier?: string;
}

/**
 * Check if a given object implements the PaymentTerminalTransactionSummaryReference interface.
 */
export function instanceOfPaymentTerminalTransactionSummaryReference(value: object): value is PaymentTerminalTransactionSummaryReference {
    return true;
}

export function PaymentTerminalTransactionSummaryReferenceFromJSON(json: any): PaymentTerminalTransactionSummaryReference {
    return PaymentTerminalTransactionSummaryReferenceFromJSONTyped(json, false);
}

export function PaymentTerminalTransactionSummaryReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalTransactionSummaryReference {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'id': json['id'] == null ? undefined : json['id'],
        'terminalId': json['terminalId'] == null ? undefined : json['terminalId'],
        'terminalIdentifier': json['terminalIdentifier'] == null ? undefined : json['terminalIdentifier'],
    };
}

export function PaymentTerminalTransactionSummaryReferenceToJSON(json: any): PaymentTerminalTransactionSummaryReference {
    return PaymentTerminalTransactionSummaryReferenceToJSONTyped(json, false);
}

export function PaymentTerminalTransactionSummaryReferenceToJSONTyped(value?: Omit<PaymentTerminalTransactionSummaryReference, 'linkedSpaceId'|'id'|'terminalId'|'terminalIdentifier'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

