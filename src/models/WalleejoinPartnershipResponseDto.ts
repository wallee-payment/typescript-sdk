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
import type { PricingHistoryDto } from './PricingHistoryDto';
import {
    PricingHistoryDtoFromJSON,
    PricingHistoryDtoFromJSONTyped,
    PricingHistoryDtoToJSON,
    PricingHistoryDtoToJSONTyped,
} from './PricingHistoryDto';
import type { WalleejoinPartnership } from './WalleejoinPartnership';
import {
    WalleejoinPartnershipFromJSON,
    WalleejoinPartnershipFromJSONTyped,
    WalleejoinPartnershipToJSON,
    WalleejoinPartnershipToJSONTyped,
} from './WalleejoinPartnership';
import type { WalleejoinPartnershipState } from './WalleejoinPartnershipState';
import {
    WalleejoinPartnershipStateFromJSON,
    WalleejoinPartnershipStateFromJSONTyped,
    WalleejoinPartnershipStateToJSON,
    WalleejoinPartnershipStateToJSONTyped,
} from './WalleejoinPartnershipState';
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
 * @interface WalleejoinPartnershipResponseDto
 */
export interface WalleejoinPartnershipResponseDto {
    /**
     * 
     * @type {WalleejoinPartnership}
     * @memberof WalleejoinPartnershipResponseDto
     */
    partnership?: WalleejoinPartnership;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinPartnershipResponseDto
     */
    merchantAccount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof WalleejoinPartnershipResponseDto
     */
    allowedToSellScopeProducts?: boolean;
    /**
     * 
     * @type {PricingHistoryDto}
     * @memberof WalleejoinPartnershipResponseDto
     */
    pricingHistory?: PricingHistoryDto;
    /**
     * 
     * @type {WalleejoinPartnershipType}
     * @memberof WalleejoinPartnershipResponseDto
     */
    partnershipType?: WalleejoinPartnershipType;
    /**
     * 
     * @type {WalleejoinPartnershipState}
     * @memberof WalleejoinPartnershipResponseDto
     */
    state?: WalleejoinPartnershipState;
    /**
     * 
     * @type {Date}
     * @memberof WalleejoinPartnershipResponseDto
     */
    updatedOn?: Date;
    /**
     * 
     * @type {WalleejoinAdminPricingType}
     * @memberof WalleejoinPartnershipResponseDto
     */
    allowedPricingType?: WalleejoinAdminPricingType;
    /**
     * 
     * @type {Date}
     * @memberof WalleejoinPartnershipResponseDto
     */
    createdOn?: Date;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinPartnershipResponseDto
     */
    subscriptionProductId?: number;
    /**
     * 
     * @type {number}
     * @memberof WalleejoinPartnershipResponseDto
     */
    partnerAccount?: number;
}



/**
 * Check if a given object implements the WalleejoinPartnershipResponseDto interface.
 */
export function instanceOfWalleejoinPartnershipResponseDto(value: object): value is WalleejoinPartnershipResponseDto {
    return true;
}

export function WalleejoinPartnershipResponseDtoFromJSON(json: any): WalleejoinPartnershipResponseDto {
    return WalleejoinPartnershipResponseDtoFromJSONTyped(json, false);
}

export function WalleejoinPartnershipResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalleejoinPartnershipResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'partnership': json['partnership'] == null ? undefined : WalleejoinPartnershipFromJSON(json['partnership']),
        'merchantAccount': json['merchantAccount'] == null ? undefined : json['merchantAccount'],
        'allowedToSellScopeProducts': json['allowedToSellScopeProducts'] == null ? undefined : json['allowedToSellScopeProducts'],
        'pricingHistory': json['pricingHistory'] == null ? undefined : PricingHistoryDtoFromJSON(json['pricingHistory']),
        'partnershipType': json['partnershipType'] == null ? undefined : WalleejoinPartnershipTypeFromJSON(json['partnershipType']),
        'state': json['state'] == null ? undefined : WalleejoinPartnershipStateFromJSON(json['state']),
        'updatedOn': json['updatedOn'] == null ? undefined : (new Date(json['updatedOn'])),
        'allowedPricingType': json['allowedPricingType'] == null ? undefined : WalleejoinAdminPricingTypeFromJSON(json['allowedPricingType']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'subscriptionProductId': json['subscriptionProductId'] == null ? undefined : json['subscriptionProductId'],
        'partnerAccount': json['partnerAccount'] == null ? undefined : json['partnerAccount'],
    };
}

export function WalleejoinPartnershipResponseDtoToJSON(json: any): WalleejoinPartnershipResponseDto {
    return WalleejoinPartnershipResponseDtoToJSONTyped(json, false);
}

export function WalleejoinPartnershipResponseDtoToJSONTyped(value?: WalleejoinPartnershipResponseDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'partnership': WalleejoinPartnershipToJSON(value['partnership']),
        'merchantAccount': value['merchantAccount'],
        'allowedToSellScopeProducts': value['allowedToSellScopeProducts'],
        'pricingHistory': PricingHistoryDtoToJSON(value['pricingHistory']),
        'partnershipType': WalleejoinPartnershipTypeToJSON(value['partnershipType']),
        'state': WalleejoinPartnershipStateToJSON(value['state']),
        'updatedOn': value['updatedOn'] == null ? undefined : ((value['updatedOn']).toISOString()),
        'allowedPricingType': WalleejoinAdminPricingTypeToJSON(value['allowedPricingType']),
        'createdOn': value['createdOn'] == null ? undefined : ((value['createdOn']).toISOString()),
        'subscriptionProductId': value['subscriptionProductId'],
        'partnerAccount': value['partnerAccount'],
    };
}

