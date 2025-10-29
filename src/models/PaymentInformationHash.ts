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
import type { PaymentInformationHashType } from './PaymentInformationHashType';
import {
    PaymentInformationHashTypeFromJSON,
    PaymentInformationHashTypeFromJSONTyped,
    PaymentInformationHashTypeToJSON,
} from './PaymentInformationHashType';

/**
 * A payment information hash is generated from user input, ensuring consistent and collision-free results for identical inputs.
 * @export
 * @interface PaymentInformationHash
 */
export interface PaymentInformationHash {
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentInformationHash
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentInformationHashType}
     * @memberof PaymentInformationHash
     */
    type?: PaymentInformationHashType;
    /**
     * The hash value generated based on the specified type.
     * @type {string}
     * @memberof PaymentInformationHash
     */
    readonly value?: string;
}

/**
 * Check if a given object implements the PaymentInformationHash interface.
 */
export function instanceOfPaymentInformationHash(value: object): value is PaymentInformationHash {
    return true;
}

export function PaymentInformationHashFromJSON(json: any): PaymentInformationHash {
    return PaymentInformationHashFromJSONTyped(json, false);
}

export function PaymentInformationHashFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInformationHash {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : PaymentInformationHashTypeFromJSON(json['type']),
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function PaymentInformationHashToJSON(value?: Omit<PaymentInformationHash, 'id'|'value'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': PaymentInformationHashTypeToJSON(value['type']),
    };
}

