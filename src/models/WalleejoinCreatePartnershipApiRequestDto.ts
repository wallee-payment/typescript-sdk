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
 * @interface WalleejoinCreatePartnershipApiRequestDto
 */
export interface WalleejoinCreatePartnershipApiRequestDto {
    /**
     * 
     * @type {string}
     * @memberof WalleejoinCreatePartnershipApiRequestDto
     */
    emailMessage?: string;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinCreatePartnershipApiRequestDto
     */
    partnerAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinCreatePartnershipApiRequestDto
     */
    pricingProfileSellRateId?: number;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinCreatePartnershipApiRequestDto
     */
    subscriptionProductId?: number;
    /**
     * 
     * @type {string}
     * @memberof WalleejoinCreatePartnershipApiRequestDto
     */
    merchantEmailAddress?: string;
}

/**
 * Check if a given object implements the WalleejoinCreatePartnershipApiRequestDto interface.
 */
export function instanceOfWalleejoinCreatePartnershipApiRequestDto(value: object): value is WalleejoinCreatePartnershipApiRequestDto {
    return true;
}

export function WalleejoinCreatePartnershipApiRequestDtoFromJSON(json: any): WalleejoinCreatePartnershipApiRequestDto {
    return WalleejoinCreatePartnershipApiRequestDtoFromJSONTyped(json, false);
}

export function WalleejoinCreatePartnershipApiRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalleejoinCreatePartnershipApiRequestDto {
    if (json == null) {
        return json;
    }
    return {
        
        'emailMessage': json['emailMessage'] == null ? undefined : json['emailMessage'],
        'partnerAccountId': json['partnerAccountId'] == null ? undefined : json['partnerAccountId'],
        'pricingProfileSellRateId': json['pricingProfileSellRateId'] == null ? undefined : json['pricingProfileSellRateId'],
        'subscriptionProductId': json['subscriptionProductId'] == null ? undefined : json['subscriptionProductId'],
        'merchantEmailAddress': json['merchantEmailAddress'] == null ? undefined : json['merchantEmailAddress'],
    };
}

export function WalleejoinCreatePartnershipApiRequestDtoToJSON(json: any): WalleejoinCreatePartnershipApiRequestDto {
    return WalleejoinCreatePartnershipApiRequestDtoToJSONTyped(json, false);
}

export function WalleejoinCreatePartnershipApiRequestDtoToJSONTyped(value?: WalleejoinCreatePartnershipApiRequestDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'emailMessage': value['emailMessage'],
        'partnerAccountId': value['partnerAccountId'],
        'pricingProfileSellRateId': value['pricingProfileSellRateId'],
        'subscriptionProductId': value['subscriptionProductId'],
        'merchantEmailAddress': value['merchantEmailAddress'],
    };
}

