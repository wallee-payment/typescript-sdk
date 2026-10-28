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
import type { SalesChannel } from './SalesChannel';
import {
    SalesChannelFromJSON,
    SalesChannelFromJSONTyped,
    SalesChannelToJSON,
    SalesChannelToJSONTyped,
} from './SalesChannel';

/**
 * 
 * @export
 * @interface MerchantPaymentChannelsDto
 */
export interface MerchantPaymentChannelsDto {
    /**
     * The channels through which the merchant accepts payments.
     * @type {Set<SalesChannel>}
     * @memberof MerchantPaymentChannelsDto
     */
    salesChannels?: Set<SalesChannel>;
    /**
     * The expected yearly turnover range for the merchant.
     * @type {string}
     * @memberof MerchantPaymentChannelsDto
     */
    expectedYearlyTurnoverCurrencyRange?: string;
    /**
     * The expected average basket value for a transaction.
     * @type {string}
     * @memberof MerchantPaymentChannelsDto
     */
    averageBasketValue?: string;
}

/**
 * Check if a given object implements the MerchantPaymentChannelsDto interface.
 */
export function instanceOfMerchantPaymentChannelsDto(value: object): value is MerchantPaymentChannelsDto {
    return true;
}

export function MerchantPaymentChannelsDtoFromJSON(json: any): MerchantPaymentChannelsDto {
    return MerchantPaymentChannelsDtoFromJSONTyped(json, false);
}

export function MerchantPaymentChannelsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantPaymentChannelsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'salesChannels': json['salesChannels'] == null ? undefined : (new Set((json['salesChannels'] as Array<any>).map(SalesChannelFromJSON))),
        'expectedYearlyTurnoverCurrencyRange': json['expectedYearlyTurnoverCurrencyRange'] == null ? undefined : json['expectedYearlyTurnoverCurrencyRange'],
        'averageBasketValue': json['averageBasketValue'] == null ? undefined : json['averageBasketValue'],
    };
}

export function MerchantPaymentChannelsDtoToJSON(json: any): MerchantPaymentChannelsDto {
    return MerchantPaymentChannelsDtoToJSONTyped(json, false);
}

export function MerchantPaymentChannelsDtoToJSONTyped(value?: MerchantPaymentChannelsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'salesChannels': value['salesChannels'] == null ? undefined : (Array.from(value['salesChannels'] as Set<any>).map(SalesChannelToJSON)),
        'expectedYearlyTurnoverCurrencyRange': value['expectedYearlyTurnoverCurrencyRange'],
        'averageBasketValue': value['averageBasketValue'],
    };
}

