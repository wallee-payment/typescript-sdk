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
 * @interface ExpressCheckoutShippingOption
 */
export interface ExpressCheckoutShippingOption {
    /**
     * Total cost of this shipping option.
     * @type {number}
     * @memberof ExpressCheckoutShippingOption
     */
    readonly amount?: number;
    /**
     * Description of the option
     * @type {string}
     * @memberof ExpressCheckoutShippingOption
     */
    readonly description?: string;
    /**
     * Currency of the option
     * @type {string}
     * @memberof ExpressCheckoutShippingOption
     */
    readonly currency?: string;
    /**
     * Identifier of the option.
     * @type {string}
     * @memberof ExpressCheckoutShippingOption
     */
    readonly id?: string;
    /**
     * Label of the option.
     * @type {string}
     * @memberof ExpressCheckoutShippingOption
     */
    readonly label?: string;
    /**
     * Amount related to taxes.
     * @type {number}
     * @memberof ExpressCheckoutShippingOption
     */
    readonly taxAmount?: number;
    /**
     * Whether it was the option selected by the customer.
     * @type {boolean}
     * @memberof ExpressCheckoutShippingOption
     */
    readonly selected?: boolean;
}

/**
 * Check if a given object implements the ExpressCheckoutShippingOption interface.
 */
export function instanceOfExpressCheckoutShippingOption(value: object): value is ExpressCheckoutShippingOption {
    return true;
}

export function ExpressCheckoutShippingOptionFromJSON(json: any): ExpressCheckoutShippingOption {
    return ExpressCheckoutShippingOptionFromJSONTyped(json, false);
}

export function ExpressCheckoutShippingOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutShippingOption {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'description': json['description'] == null ? undefined : json['description'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'id': json['id'] == null ? undefined : json['id'],
        'label': json['label'] == null ? undefined : json['label'],
        'taxAmount': json['taxAmount'] == null ? undefined : json['taxAmount'],
        'selected': json['selected'] == null ? undefined : json['selected'],
    };
}

export function ExpressCheckoutShippingOptionToJSON(json: any): ExpressCheckoutShippingOption {
    return ExpressCheckoutShippingOptionToJSONTyped(json, false);
}

export function ExpressCheckoutShippingOptionToJSONTyped(value?: Omit<ExpressCheckoutShippingOption, 'amount'|'description'|'currency'|'id'|'label'|'taxAmount'|'selected'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

