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
 * @interface MerchantContractRevenueDto
 */
export interface MerchantContractRevenueDto {
    /**
     * The merchant's public business website.
     * @type {string}
     * @memberof MerchantContractRevenueDto
     */
    businessWebsite?: string;
    /**
     * The statement descriptor shown to customers on payment records.
     * @type {string}
     * @memberof MerchantContractRevenueDto
     */
    statementDescriptor?: string;
    /**
     * The business industry code or category of the merchant.
     * @type {string}
     * @memberof MerchantContractRevenueDto
     */
    businessIndustry?: string;
    /**
     * A description of the products or services sold by the merchant.
     * @type {string}
     * @memberof MerchantContractRevenueDto
     */
    productDescription?: string;
}

/**
 * Check if a given object implements the MerchantContractRevenueDto interface.
 */
export function instanceOfMerchantContractRevenueDto(value: object): value is MerchantContractRevenueDto {
    return true;
}

export function MerchantContractRevenueDtoFromJSON(json: any): MerchantContractRevenueDto {
    return MerchantContractRevenueDtoFromJSONTyped(json, false);
}

export function MerchantContractRevenueDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantContractRevenueDto {
    if (json == null) {
        return json;
    }
    return {
        
        'businessWebsite': json['businessWebsite'] == null ? undefined : json['businessWebsite'],
        'statementDescriptor': json['statementDescriptor'] == null ? undefined : json['statementDescriptor'],
        'businessIndustry': json['businessIndustry'] == null ? undefined : json['businessIndustry'],
        'productDescription': json['productDescription'] == null ? undefined : json['productDescription'],
    };
}

export function MerchantContractRevenueDtoToJSON(json: any): MerchantContractRevenueDto {
    return MerchantContractRevenueDtoToJSONTyped(json, false);
}

export function MerchantContractRevenueDtoToJSONTyped(value?: MerchantContractRevenueDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'businessWebsite': value['businessWebsite'],
        'statementDescriptor': value['statementDescriptor'],
        'businessIndustry': value['businessIndustry'],
        'productDescription': value['productDescription'],
    };
}

