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
 * @interface PricingHistoryDto
 */
export interface PricingHistoryDto {
    /**
     * 
     * @type {number}
     * @memberof PricingHistoryDto
     */
    accountId?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingHistoryDto
     */
    revenueShare?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingHistoryDto
     */
    oneOffReferral?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingHistoryDto
     */
    pricingProfileBuyRateId?: number;
    /**
     * 
     * @type {number}
     * @memberof PricingHistoryDto
     */
    pricingProfileSellRateId?: number;
}

/**
 * Check if a given object implements the PricingHistoryDto interface.
 */
export function instanceOfPricingHistoryDto(value: object): value is PricingHistoryDto {
    return true;
}

export function PricingHistoryDtoFromJSON(json: any): PricingHistoryDto {
    return PricingHistoryDtoFromJSONTyped(json, false);
}

export function PricingHistoryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingHistoryDto {
    if (json == null) {
        return json;
    }
    return {
        
        'accountId': json['accountId'] == null ? undefined : json['accountId'],
        'revenueShare': json['revenueShare'] == null ? undefined : json['revenueShare'],
        'oneOffReferral': json['oneOffReferral'] == null ? undefined : json['oneOffReferral'],
        'pricingProfileBuyRateId': json['pricingProfileBuyRateId'] == null ? undefined : json['pricingProfileBuyRateId'],
        'pricingProfileSellRateId': json['pricingProfileSellRateId'] == null ? undefined : json['pricingProfileSellRateId'],
    };
}

export function PricingHistoryDtoToJSON(json: any): PricingHistoryDto {
    return PricingHistoryDtoToJSONTyped(json, false);
}

export function PricingHistoryDtoToJSONTyped(value?: PricingHistoryDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'accountId': value['accountId'],
        'revenueShare': value['revenueShare'],
        'oneOffReferral': value['oneOffReferral'],
        'pricingProfileBuyRateId': value['pricingProfileBuyRateId'],
        'pricingProfileSellRateId': value['pricingProfileSellRateId'],
    };
}

