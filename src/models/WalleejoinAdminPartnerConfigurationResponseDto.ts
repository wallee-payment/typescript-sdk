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
import type { WalleejoinPartnershipType } from './WalleejoinPartnershipType';
import {
    WalleejoinPartnershipTypeFromJSON,
    WalleejoinPartnershipTypeFromJSONTyped,
    WalleejoinPartnershipTypeToJSON,
    WalleejoinPartnershipTypeToJSONTyped,
} from './WalleejoinPartnershipType';
import type { PaymentFacilitatorPricingProfileDto } from './PaymentFacilitatorPricingProfileDto';
import {
    PaymentFacilitatorPricingProfileDtoFromJSON,
    PaymentFacilitatorPricingProfileDtoFromJSONTyped,
    PaymentFacilitatorPricingProfileDtoToJSON,
    PaymentFacilitatorPricingProfileDtoToJSONTyped,
} from './PaymentFacilitatorPricingProfileDto';
import type { SubscriptionProductDto } from './SubscriptionProductDto';
import {
    SubscriptionProductDtoFromJSON,
    SubscriptionProductDtoFromJSONTyped,
    SubscriptionProductDtoToJSON,
    SubscriptionProductDtoToJSONTyped,
} from './SubscriptionProductDto';
import type { WalleejoinAdminPricingType } from './WalleejoinAdminPricingType';
import {
    WalleejoinAdminPricingTypeFromJSON,
    WalleejoinAdminPricingTypeFromJSONTyped,
    WalleejoinAdminPricingTypeToJSON,
    WalleejoinAdminPricingTypeToJSONTyped,
} from './WalleejoinAdminPricingType';

/**
 * 
 * @export
 * @interface WalleejoinAdminPartnerConfigurationResponseDto
 */
export interface WalleejoinAdminPartnerConfigurationResponseDto {
    /**
     * 
     * @type {Set<PaymentFacilitatorPricingProfileDto>}
     * @memberof WalleejoinAdminPartnerConfigurationResponseDto
     */
    pricingProfileSellRates?: Set<PaymentFacilitatorPricingProfileDto>;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinAdminPartnerConfigurationResponseDto
     */
    revenueShare?: number;
    /**
     * 
     * @type {Set<SubscriptionProductDto>}
     * @memberof WalleejoinAdminPartnerConfigurationResponseDto
     */
    subscriptionProducts?: Set<SubscriptionProductDto>;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinAdminPartnerConfigurationResponseDto
     */
    oneOffReferral?: number;
    /**
     * 
     * @type {PaymentFacilitatorPricingProfileDto}
     * @memberof WalleejoinAdminPartnerConfigurationResponseDto
     */
    pricingProfileBuyRate?: PaymentFacilitatorPricingProfileDto;
    /**
     * 
     * @type {Set<WalleejoinPartnershipType>}
     * @memberof WalleejoinAdminPartnerConfigurationResponseDto
     */
    partnershipTypes?: Set<WalleejoinPartnershipType>;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinAdminPartnerConfigurationResponseDto
     */
    partnerAccount?: number;
    /**
     * 
     * @type {WalleejoinAdminPricingType}
     * @memberof WalleejoinAdminPartnerConfigurationResponseDto
     */
    pricingType?: WalleejoinAdminPricingType;
}



/**
 * Check if a given object implements the WalleejoinAdminPartnerConfigurationResponseDto interface.
 */
export function instanceOfWalleejoinAdminPartnerConfigurationResponseDto(value: object): value is WalleejoinAdminPartnerConfigurationResponseDto {
    return true;
}

export function WalleejoinAdminPartnerConfigurationResponseDtoFromJSON(json: any): WalleejoinAdminPartnerConfigurationResponseDto {
    return WalleejoinAdminPartnerConfigurationResponseDtoFromJSONTyped(json, false);
}

export function WalleejoinAdminPartnerConfigurationResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalleejoinAdminPartnerConfigurationResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'pricingProfileSellRates': json['pricingProfileSellRates'] == null ? undefined : (new Set((json['pricingProfileSellRates'] as Array<any>).map(PaymentFacilitatorPricingProfileDtoFromJSON))),
        'revenueShare': json['revenueShare'] == null ? undefined : json['revenueShare'],
        'subscriptionProducts': json['subscriptionProducts'] == null ? undefined : (new Set((json['subscriptionProducts'] as Array<any>).map(SubscriptionProductDtoFromJSON))),
        'oneOffReferral': json['oneOffReferral'] == null ? undefined : json['oneOffReferral'],
        'pricingProfileBuyRate': json['pricingProfileBuyRate'] == null ? undefined : PaymentFacilitatorPricingProfileDtoFromJSON(json['pricingProfileBuyRate']),
        'partnershipTypes': json['partnershipTypes'] == null ? undefined : (new Set((json['partnershipTypes'] as Array<any>).map(WalleejoinPartnershipTypeFromJSON))),
        'partnerAccount': json['partnerAccount'] == null ? undefined : json['partnerAccount'],
        'pricingType': json['pricingType'] == null ? undefined : WalleejoinAdminPricingTypeFromJSON(json['pricingType']),
    };
}

export function WalleejoinAdminPartnerConfigurationResponseDtoToJSON(json: any): WalleejoinAdminPartnerConfigurationResponseDto {
    return WalleejoinAdminPartnerConfigurationResponseDtoToJSONTyped(json, false);
}

export function WalleejoinAdminPartnerConfigurationResponseDtoToJSONTyped(value?: WalleejoinAdminPartnerConfigurationResponseDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'pricingProfileSellRates': value['pricingProfileSellRates'] == null ? undefined : (Array.from(value['pricingProfileSellRates'] as Set<any>).map(PaymentFacilitatorPricingProfileDtoToJSON)),
        'revenueShare': value['revenueShare'],
        'subscriptionProducts': value['subscriptionProducts'] == null ? undefined : (Array.from(value['subscriptionProducts'] as Set<any>).map(SubscriptionProductDtoToJSON)),
        'oneOffReferral': value['oneOffReferral'],
        'pricingProfileBuyRate': PaymentFacilitatorPricingProfileDtoToJSON(value['pricingProfileBuyRate']),
        'partnershipTypes': value['partnershipTypes'] == null ? undefined : (Array.from(value['partnershipTypes'] as Set<any>).map(WalleejoinPartnershipTypeToJSON)),
        'partnerAccount': value['partnerAccount'],
        'pricingType': WalleejoinAdminPricingTypeToJSON(value['pricingType']),
    };
}

