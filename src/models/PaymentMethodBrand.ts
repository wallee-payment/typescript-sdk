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
 * @interface PaymentMethodBrand
 */
export interface PaymentMethodBrand {
    /**
     * The path to the payment method brand's grayscale image.
     * @type {string}
     * @memberof PaymentMethodBrand
     */
    readonly grayImagePath?: string;
    /**
     * The path to the payment method brand's image.
     * @type {string}
     * @memberof PaymentMethodBrand
     */
    readonly imagePath?: string;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethodBrand
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethodBrand
     */
    readonly description?: { [key: string]: string; };
    /**
     * The payment method that the brand belongs to.
     * @type {number}
     * @memberof PaymentMethodBrand
     */
    readonly paymentMethod?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentMethodBrand
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the PaymentMethodBrand interface.
 */
export function instanceOfPaymentMethodBrand(value: object): value is PaymentMethodBrand {
    return true;
}

export function PaymentMethodBrandFromJSON(json: any): PaymentMethodBrand {
    return PaymentMethodBrandFromJSONTyped(json, false);
}

export function PaymentMethodBrandFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodBrand {
    if (json == null) {
        return json;
    }
    return {
        
        'grayImagePath': json['grayImagePath'] == null ? undefined : json['grayImagePath'],
        'imagePath': json['imagePath'] == null ? undefined : json['imagePath'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'paymentMethod': json['paymentMethod'] == null ? undefined : json['paymentMethod'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PaymentMethodBrandToJSON(json: any): PaymentMethodBrand {
    return PaymentMethodBrandToJSONTyped(json, false);
}

export function PaymentMethodBrandToJSONTyped(value?: Omit<PaymentMethodBrand, 'grayImagePath'|'imagePath'|'name'|'description'|'paymentMethod'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

