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
import type { Tax } from './Tax';
import {
    TaxFromJSON,
    TaxFromJSONTyped,
    TaxToJSON,
} from './Tax';

/**
 * 
 * @export
 * @interface PaymentAdjustment
 */
export interface PaymentAdjustment {
    /**
     * The adjustment's amount, excluding taxes.
     * @type {number}
     * @memberof PaymentAdjustment
     */
    readonly amountExcludingTax?: number;
    /**
     * The percentage rate used to calculate the adjustment amount.
     * @type {number}
     * @memberof PaymentAdjustment
     */
    readonly rateInPercentage?: number;
    /**
     * 
     * @type {Tax}
     * @memberof PaymentAdjustment
     */
    tax?: Tax;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentAdjustment
     */
    readonly id?: number;
    /**
     * The adjustment's amount, including taxes.
     * @type {number}
     * @memberof PaymentAdjustment
     */
    readonly amountIncludingTax?: number;
    /**
     * The type of the adjustment.
     * @type {number}
     * @memberof PaymentAdjustment
     */
    readonly type?: number;
}

/**
 * Check if a given object implements the PaymentAdjustment interface.
 */
export function instanceOfPaymentAdjustment(value: object): value is PaymentAdjustment {
    return true;
}

export function PaymentAdjustmentFromJSON(json: any): PaymentAdjustment {
    return PaymentAdjustmentFromJSONTyped(json, false);
}

export function PaymentAdjustmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAdjustment {
    if (json == null) {
        return json;
    }
    return {
        
        'amountExcludingTax': json['amountExcludingTax'] == null ? undefined : json['amountExcludingTax'],
        'rateInPercentage': json['rateInPercentage'] == null ? undefined : json['rateInPercentage'],
        'tax': json['tax'] == null ? undefined : TaxFromJSON(json['tax']),
        'id': json['id'] == null ? undefined : json['id'],
        'amountIncludingTax': json['amountIncludingTax'] == null ? undefined : json['amountIncludingTax'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function PaymentAdjustmentToJSON(value?: Omit<PaymentAdjustment, 'amountExcludingTax'|'rateInPercentage'|'id'|'amountIncludingTax'|'type'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tax': TaxToJSON(value['tax']),
    };
}

