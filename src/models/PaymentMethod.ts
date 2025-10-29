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
import type { DataCollectionType } from './DataCollectionType';
import {
    DataCollectionTypeFromJSON,
    DataCollectionTypeFromJSONTyped,
    DataCollectionTypeToJSON,
} from './DataCollectionType';

/**
 * 
 * @export
 * @interface PaymentMethod
 */
export interface PaymentMethod {
    /**
     * The currencies that the payment method supports.
     * @type {Set<string>}
     * @memberof PaymentMethod
     */
    readonly supportedCurrencies?: Set<string>;
    /**
     * The data collection types that payment method supports.
     * @type {Set<DataCollectionType>}
     * @memberof PaymentMethod
     */
    readonly dataCollectionTypes?: Set<DataCollectionType>;
    /**
     * The path to the payment method's image.
     * @type {string}
     * @memberof PaymentMethod
     */
    readonly imagePath?: string;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethod
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethod
     */
    readonly description?: { [key: string]: string; };
    /**
     * A merchant-focused, localized description of the payment method, providing its purpose and details.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethod
     */
    readonly merchantDescription?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentMethod
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the PaymentMethod interface.
 */
export function instanceOfPaymentMethod(value: object): value is PaymentMethod {
    return true;
}

export function PaymentMethodFromJSON(json: any): PaymentMethod {
    return PaymentMethodFromJSONTyped(json, false);
}

export function PaymentMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'supportedCurrencies': json['supportedCurrencies'] == null ? undefined : json['supportedCurrencies'],
        'dataCollectionTypes': json['dataCollectionTypes'] == null ? undefined : (new Set((json['dataCollectionTypes'] as Array<any>).map(DataCollectionTypeFromJSON))),
        'imagePath': json['imagePath'] == null ? undefined : json['imagePath'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'merchantDescription': json['merchantDescription'] == null ? undefined : json['merchantDescription'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PaymentMethodToJSON(value?: Omit<PaymentMethod, 'supportedCurrencies'|'dataCollectionTypes'|'imagePath'|'name'|'description'|'merchantDescription'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

