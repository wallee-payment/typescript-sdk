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
import type { BasicAddress } from './BasicAddress';
import {
    BasicAddressFromJSON,
    BasicAddressFromJSONTyped,
    BasicAddressToJSON,
    BasicAddressToJSONTyped,
} from './BasicAddress';
import type { LegalForm } from './LegalForm';
import {
    LegalFormFromJSON,
    LegalFormFromJSONTyped,
    LegalFormToJSON,
    LegalFormToJSONTyped,
} from './LegalForm';

/**
 * 
 * @export
 * @interface MerchantCompanyDetailsDto
 */
export interface MerchantCompanyDetailsDto {
    /**
     * The business sector code or category of the merchant.
     * @type {string}
     * @memberof MerchantCompanyDetailsDto
     */
    businessSector?: string;
    /**
     * The commercial register extract or reference.
     * @type {string}
     * @memberof MerchantCompanyDetailsDto
     */
    extract?: string;
    /**
     * The year in which the merchant company was incorporated.
     * @type {string}
     * @memberof MerchantCompanyDetailsDto
     */
    incorporationYear?: string;
    /**
     * The registered legal name of the merchant company.
     * @type {string}
     * @memberof MerchantCompanyDetailsDto
     */
    organizationName?: string;
    /**
     * A short description of the merchant's business activity.
     * @type {string}
     * @memberof MerchantCompanyDetailsDto
     */
    businessDescription?: string;
    /**
     * The sales tax or VAT number of the merchant company.
     * @type {string}
     * @memberof MerchantCompanyDetailsDto
     */
    salesTaxNumber?: string;
    /**
     * The official business identification number of the merchant company.
     * @type {string}
     * @memberof MerchantCompanyDetailsDto
     */
    businessIdentificationNumber?: string;
    /**
     * 
     * @type {BasicAddress}
     * @memberof MerchantCompanyDetailsDto
     */
    incorporationAddress?: BasicAddress;
    /**
     * 
     * @type {LegalForm}
     * @memberof MerchantCompanyDetailsDto
     */
    legalForm?: LegalForm;
}



/**
 * Check if a given object implements the MerchantCompanyDetailsDto interface.
 */
export function instanceOfMerchantCompanyDetailsDto(value: object): value is MerchantCompanyDetailsDto {
    return true;
}

export function MerchantCompanyDetailsDtoFromJSON(json: any): MerchantCompanyDetailsDto {
    return MerchantCompanyDetailsDtoFromJSONTyped(json, false);
}

export function MerchantCompanyDetailsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantCompanyDetailsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'businessSector': json['businessSector'] == null ? undefined : json['businessSector'],
        'extract': json['extract'] == null ? undefined : json['extract'],
        'incorporationYear': json['incorporationYear'] == null ? undefined : json['incorporationYear'],
        'organizationName': json['organizationName'] == null ? undefined : json['organizationName'],
        'businessDescription': json['businessDescription'] == null ? undefined : json['businessDescription'],
        'salesTaxNumber': json['salesTaxNumber'] == null ? undefined : json['salesTaxNumber'],
        'businessIdentificationNumber': json['businessIdentificationNumber'] == null ? undefined : json['businessIdentificationNumber'],
        'incorporationAddress': json['incorporationAddress'] == null ? undefined : BasicAddressFromJSON(json['incorporationAddress']),
        'legalForm': json['legalForm'] == null ? undefined : LegalFormFromJSON(json['legalForm']),
    };
}

export function MerchantCompanyDetailsDtoToJSON(json: any): MerchantCompanyDetailsDto {
    return MerchantCompanyDetailsDtoToJSONTyped(json, false);
}

export function MerchantCompanyDetailsDtoToJSONTyped(value?: MerchantCompanyDetailsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'businessSector': value['businessSector'],
        'extract': value['extract'],
        'incorporationYear': value['incorporationYear'],
        'organizationName': value['organizationName'],
        'businessDescription': value['businessDescription'],
        'salesTaxNumber': value['salesTaxNumber'],
        'businessIdentificationNumber': value['businessIdentificationNumber'],
        'incorporationAddress': BasicAddressToJSON(value['incorporationAddress']),
        'legalForm': LegalFormToJSON(value['legalForm']),
    };
}

