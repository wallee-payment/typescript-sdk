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
import type { MerchantEcommerceDetailsDto } from './MerchantEcommerceDetailsDto';
import {
    MerchantEcommerceDetailsDtoFromJSON,
    MerchantEcommerceDetailsDtoFromJSONTyped,
    MerchantEcommerceDetailsDtoToJSON,
    MerchantEcommerceDetailsDtoToJSONTyped,
} from './MerchantEcommerceDetailsDto';
import type { MerchantRelatedPersonsDto } from './MerchantRelatedPersonsDto';
import {
    MerchantRelatedPersonsDtoFromJSON,
    MerchantRelatedPersonsDtoFromJSONTyped,
    MerchantRelatedPersonsDtoToJSON,
    MerchantRelatedPersonsDtoToJSONTyped,
} from './MerchantRelatedPersonsDto';
import type { MerchantContractRevenueDto } from './MerchantContractRevenueDto';
import {
    MerchantContractRevenueDtoFromJSON,
    MerchantContractRevenueDtoFromJSONTyped,
    MerchantContractRevenueDtoToJSON,
    MerchantContractRevenueDtoToJSONTyped,
} from './MerchantContractRevenueDto';
import type { MerchantBankDetailsDto } from './MerchantBankDetailsDto';
import {
    MerchantBankDetailsDtoFromJSON,
    MerchantBankDetailsDtoFromJSONTyped,
    MerchantBankDetailsDtoToJSON,
    MerchantBankDetailsDtoToJSONTyped,
} from './MerchantBankDetailsDto';
import type { MerchantCompanyDetailsDto } from './MerchantCompanyDetailsDto';
import {
    MerchantCompanyDetailsDtoFromJSON,
    MerchantCompanyDetailsDtoFromJSONTyped,
    MerchantCompanyDetailsDtoToJSON,
    MerchantCompanyDetailsDtoToJSONTyped,
} from './MerchantCompanyDetailsDto';
import type { MerchantPaymentChannelsDto } from './MerchantPaymentChannelsDto';
import {
    MerchantPaymentChannelsDtoFromJSON,
    MerchantPaymentChannelsDtoFromJSONTyped,
    MerchantPaymentChannelsDtoToJSON,
    MerchantPaymentChannelsDtoToJSONTyped,
} from './MerchantPaymentChannelsDto';

/**
 * 
 * @export
 * @interface MerchantApplicationDataDto
 */
export interface MerchantApplicationDataDto {
    /**
     * 
     * @type {MerchantRelatedPersonsDto}
     * @memberof MerchantApplicationDataDto
     */
    relatedPersons?: MerchantRelatedPersonsDto;
    /**
     * 
     * @type {MerchantBankDetailsDto}
     * @memberof MerchantApplicationDataDto
     */
    bankDetails?: MerchantBankDetailsDto;
    /**
     * 
     * @type {MerchantCompanyDetailsDto}
     * @memberof MerchantApplicationDataDto
     */
    companyDetails?: MerchantCompanyDetailsDto;
    /**
     * 
     * @type {MerchantPaymentChannelsDto}
     * @memberof MerchantApplicationDataDto
     */
    paymentChannels?: MerchantPaymentChannelsDto;
    /**
     * 
     * @type {MerchantContractRevenueDto}
     * @memberof MerchantApplicationDataDto
     */
    contractRevenue?: MerchantContractRevenueDto;
    /**
     * 
     * @type {MerchantEcommerceDetailsDto}
     * @memberof MerchantApplicationDataDto
     */
    ecommerceDetails?: MerchantEcommerceDetailsDto;
}

/**
 * Check if a given object implements the MerchantApplicationDataDto interface.
 */
export function instanceOfMerchantApplicationDataDto(value: object): value is MerchantApplicationDataDto {
    return true;
}

export function MerchantApplicationDataDtoFromJSON(json: any): MerchantApplicationDataDto {
    return MerchantApplicationDataDtoFromJSONTyped(json, false);
}

export function MerchantApplicationDataDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantApplicationDataDto {
    if (json == null) {
        return json;
    }
    return {
        
        'relatedPersons': json['relatedPersons'] == null ? undefined : MerchantRelatedPersonsDtoFromJSON(json['relatedPersons']),
        'bankDetails': json['bankDetails'] == null ? undefined : MerchantBankDetailsDtoFromJSON(json['bankDetails']),
        'companyDetails': json['companyDetails'] == null ? undefined : MerchantCompanyDetailsDtoFromJSON(json['companyDetails']),
        'paymentChannels': json['paymentChannels'] == null ? undefined : MerchantPaymentChannelsDtoFromJSON(json['paymentChannels']),
        'contractRevenue': json['contractRevenue'] == null ? undefined : MerchantContractRevenueDtoFromJSON(json['contractRevenue']),
        'ecommerceDetails': json['ecommerceDetails'] == null ? undefined : MerchantEcommerceDetailsDtoFromJSON(json['ecommerceDetails']),
    };
}

export function MerchantApplicationDataDtoToJSON(json: any): MerchantApplicationDataDto {
    return MerchantApplicationDataDtoToJSONTyped(json, false);
}

export function MerchantApplicationDataDtoToJSONTyped(value?: MerchantApplicationDataDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'relatedPersons': MerchantRelatedPersonsDtoToJSON(value['relatedPersons']),
        'bankDetails': MerchantBankDetailsDtoToJSON(value['bankDetails']),
        'companyDetails': MerchantCompanyDetailsDtoToJSON(value['companyDetails']),
        'paymentChannels': MerchantPaymentChannelsDtoToJSON(value['paymentChannels']),
        'contractRevenue': MerchantContractRevenueDtoToJSON(value['contractRevenue']),
        'ecommerceDetails': MerchantEcommerceDetailsDtoToJSON(value['ecommerceDetails']),
    };
}

