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
 * @interface WalleejoinAdminPartnerConfigurationRequestDto
 */
export interface WalleejoinAdminPartnerConfigurationRequestDto {
    /**
     * 
     * @type {boolean}
     * @memberof WalleejoinAdminPartnerConfigurationRequestDto
     */
    allowedToSellScopeProducts?: boolean;
    /**
     * 
     * @type {Set<number>}
     * @memberof WalleejoinAdminPartnerConfigurationRequestDto
     */
    pricingProfileSellRateIds?: Set<number>;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinAdminPartnerConfigurationRequestDto
     */
    revenueShare?: number;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinAdminPartnerConfigurationRequestDto
     */
    oneOffReferral?: number;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinAdminPartnerConfigurationRequestDto
     */
    partnerAccountId?: number;
    /**
     * 
     * @type {Set<number>}
     * @memberof WalleejoinAdminPartnerConfigurationRequestDto
     */
    subscriptionProductIds?: Set<number>;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinAdminPartnerConfigurationRequestDto
     */
    pricingProfileBuyRateId?: number;
    /**
     * 
     * @type {Set<WalleejoinPartnershipType>}
     * @memberof WalleejoinAdminPartnerConfigurationRequestDto
     */
    partnershipTypes?: Set<WalleejoinPartnershipType>;
    /**
     * 
     * @type {WalleejoinAdminPricingType}
     * @memberof WalleejoinAdminPartnerConfigurationRequestDto
     */
    pricingType?: WalleejoinAdminPricingType;
}



/**
 * Check if a given object implements the WalleejoinAdminPartnerConfigurationRequestDto interface.
 */
export function instanceOfWalleejoinAdminPartnerConfigurationRequestDto(value: object): value is WalleejoinAdminPartnerConfigurationRequestDto {
    return true;
}

export function WalleejoinAdminPartnerConfigurationRequestDtoFromJSON(json: any): WalleejoinAdminPartnerConfigurationRequestDto {
    return WalleejoinAdminPartnerConfigurationRequestDtoFromJSONTyped(json, false);
}

export function WalleejoinAdminPartnerConfigurationRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalleejoinAdminPartnerConfigurationRequestDto {
    if (json == null) {
        return json;
    }
    return {
        
        'allowedToSellScopeProducts': json['allowedToSellScopeProducts'] == null ? undefined : json['allowedToSellScopeProducts'],
        'pricingProfileSellRateIds': json['pricingProfileSellRateIds'] == null ? undefined : new Set(json['pricingProfileSellRateIds']),
        'revenueShare': json['revenueShare'] == null ? undefined : json['revenueShare'],
        'oneOffReferral': json['oneOffReferral'] == null ? undefined : json['oneOffReferral'],
        'partnerAccountId': json['partnerAccountId'] == null ? undefined : json['partnerAccountId'],
        'subscriptionProductIds': json['subscriptionProductIds'] == null ? undefined : new Set(json['subscriptionProductIds']),
        'pricingProfileBuyRateId': json['pricingProfileBuyRateId'] == null ? undefined : json['pricingProfileBuyRateId'],
        'partnershipTypes': json['partnershipTypes'] == null ? undefined : (new Set((json['partnershipTypes'] as Array<any>).map(WalleejoinPartnershipTypeFromJSON))),
        'pricingType': json['pricingType'] == null ? undefined : WalleejoinAdminPricingTypeFromJSON(json['pricingType']),
    };
}

export function WalleejoinAdminPartnerConfigurationRequestDtoToJSON(json: any): WalleejoinAdminPartnerConfigurationRequestDto {
    return WalleejoinAdminPartnerConfigurationRequestDtoToJSONTyped(json, false);
}

export function WalleejoinAdminPartnerConfigurationRequestDtoToJSONTyped(value?: WalleejoinAdminPartnerConfigurationRequestDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'allowedToSellScopeProducts': value['allowedToSellScopeProducts'],
        'pricingProfileSellRateIds': value['pricingProfileSellRateIds'] == null ? undefined : Array.from(value['pricingProfileSellRateIds'] as Set<any>),
        'revenueShare': value['revenueShare'],
        'oneOffReferral': value['oneOffReferral'],
        'partnerAccountId': value['partnerAccountId'],
        'subscriptionProductIds': value['subscriptionProductIds'] == null ? undefined : Array.from(value['subscriptionProductIds'] as Set<any>),
        'pricingProfileBuyRateId': value['pricingProfileBuyRateId'],
        'partnershipTypes': value['partnershipTypes'] == null ? undefined : (Array.from(value['partnershipTypes'] as Set<any>).map(WalleejoinPartnershipTypeToJSON)),
        'pricingType': WalleejoinAdminPricingTypeToJSON(value['pricingType']),
    };
}

