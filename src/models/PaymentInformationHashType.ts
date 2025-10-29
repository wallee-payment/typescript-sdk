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
 * @interface PaymentInformationHashType
 */
export interface PaymentInformationHashType {
    /**
     * The name that describes the hash type.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentInformationHashType
     */
    readonly name?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentInformationHashType
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the PaymentInformationHashType interface.
 */
export function instanceOfPaymentInformationHashType(value: object): value is PaymentInformationHashType {
    return true;
}

export function PaymentInformationHashTypeFromJSON(json: any): PaymentInformationHashType {
    return PaymentInformationHashTypeFromJSONTyped(json, false);
}

export function PaymentInformationHashTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInformationHashType {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PaymentInformationHashTypeToJSON(value?: Omit<PaymentInformationHashType, 'name'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

