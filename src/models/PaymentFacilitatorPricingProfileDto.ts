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
 * @interface PaymentFacilitatorPricingProfileDto
 */
export interface PaymentFacilitatorPricingProfileDto {
    /**
     * 
     * @type {string}
     * @memberof PaymentFacilitatorPricingProfileDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PaymentFacilitatorPricingProfileDto
     */
    id?: number;
}

/**
 * Check if a given object implements the PaymentFacilitatorPricingProfileDto interface.
 */
export function instanceOfPaymentFacilitatorPricingProfileDto(value: object): value is PaymentFacilitatorPricingProfileDto {
    return true;
}

export function PaymentFacilitatorPricingProfileDtoFromJSON(json: any): PaymentFacilitatorPricingProfileDto {
    return PaymentFacilitatorPricingProfileDtoFromJSONTyped(json, false);
}

export function PaymentFacilitatorPricingProfileDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentFacilitatorPricingProfileDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PaymentFacilitatorPricingProfileDtoToJSON(json: any): PaymentFacilitatorPricingProfileDto {
    return PaymentFacilitatorPricingProfileDtoToJSONTyped(json, false);
}

export function PaymentFacilitatorPricingProfileDtoToJSONTyped(value?: PaymentFacilitatorPricingProfileDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'id': value['id'],
    };
}

