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
import type { OneClickPaymentMode } from './OneClickPaymentMode';
import {
    OneClickPaymentModeFromJSON,
    OneClickPaymentModeFromJSONTyped,
    OneClickPaymentModeToJSON,
} from './OneClickPaymentMode';

/**
 * 
 * @export
 * @interface PaymentMethodConfigurationUpdate
 */
export interface PaymentMethodConfigurationUpdate {
    /**
     * The resource path to a custom image for the payment method, displayed to the customer for visual identification.
     * @type {string}
     * @memberof PaymentMethodConfigurationUpdate
     */
    imageResourcePath?: string;
    /**
     * When listing payment methods, they can be sorted by this number.
     * @type {number}
     * @memberof PaymentMethodConfigurationUpdate
     */
    sortOrder?: number;
    /**
     * The name used to identify the payment method configuration.
     * @type {string}
     * @memberof PaymentMethodConfigurationUpdate
     */
    name?: string;
    /**
     * A customer-facing custom description for the payment method.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethodConfigurationUpdate
     */
    description?: { [key: string]: string; };
    /**
     * 
     * @type {OneClickPaymentMode}
     * @memberof PaymentMethodConfigurationUpdate
     */
    oneClickPaymentMode?: OneClickPaymentMode;
    /**
     * A customer-facing custom title for the payment method.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentMethodConfigurationUpdate
     */
    title?: { [key: string]: string; };
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof PaymentMethodConfigurationUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the PaymentMethodConfigurationUpdate interface.
 */
export function instanceOfPaymentMethodConfigurationUpdate(value: object): value is PaymentMethodConfigurationUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function PaymentMethodConfigurationUpdateFromJSON(json: any): PaymentMethodConfigurationUpdate {
    return PaymentMethodConfigurationUpdateFromJSONTyped(json, false);
}

export function PaymentMethodConfigurationUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodConfigurationUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'imageResourcePath': json['imageResourcePath'] == null ? undefined : json['imageResourcePath'],
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'oneClickPaymentMode': json['oneClickPaymentMode'] == null ? undefined : OneClickPaymentModeFromJSON(json['oneClickPaymentMode']),
        'title': json['title'] == null ? undefined : json['title'],
        'version': json['version'],
    };
}

export function PaymentMethodConfigurationUpdateToJSON(value?: PaymentMethodConfigurationUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'imageResourcePath': value['imageResourcePath'],
        'sortOrder': value['sortOrder'],
        'name': value['name'],
        'description': value['description'],
        'oneClickPaymentMode': OneClickPaymentModeToJSON(value['oneClickPaymentMode']),
        'title': value['title'],
        'version': value['version'],
    };
}

