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
import type { DeliveryDestination } from './DeliveryDestination';
import {
    DeliveryDestinationFromJSON,
    DeliveryDestinationFromJSONTyped,
    DeliveryDestinationToJSON,
    DeliveryDestinationToJSONTyped,
} from './DeliveryDestination';
import type { RefundDaysRange } from './RefundDaysRange';
import {
    RefundDaysRangeFromJSON,
    RefundDaysRangeFromJSONTyped,
    RefundDaysRangeToJSON,
    RefundDaysRangeToJSONTyped,
} from './RefundDaysRange';
import type { RefundPercentageRange } from './RefundPercentageRange';
import {
    RefundPercentageRangeFromJSON,
    RefundPercentageRangeFromJSONTyped,
    RefundPercentageRangeToJSON,
    RefundPercentageRangeToJSONTyped,
} from './RefundPercentageRange';
import type { DeliveryDaysRange } from './DeliveryDaysRange';
import {
    DeliveryDaysRangeFromJSON,
    DeliveryDaysRangeFromJSONTyped,
    DeliveryDaysRangeToJSON,
    DeliveryDaysRangeToJSONTyped,
} from './DeliveryDaysRange';

/**
 * 
 * @export
 * @interface MerchantEcommerceDetailsDto
 */
export interface MerchantEcommerceDetailsDto {
    /**
     * The password used to access the protected ecommerce website.
     * @type {string}
     * @memberof MerchantEcommerceDetailsDto
     */
    password?: string;
    /**
     * Whether voucher sales exceed five percent of turnover.
     * @type {boolean}
     * @memberof MerchantEcommerceDetailsDto
     */
    voucherSalesOver5Percent?: boolean;
    /**
     * Whether the merchant offers subscription-based products.
     * @type {boolean}
     * @memberof MerchantEcommerceDetailsDto
     */
    offerSubscriptionBasedProduct?: boolean;
    /**
     * Whether the ecommerce website is protected by a login.
     * @type {boolean}
     * @memberof MerchantEcommerceDetailsDto
     */
    urlPasswordProtected?: boolean;
    /**
     * The URL of the merchant's ecommerce website.
     * @type {string}
     * @memberof MerchantEcommerceDetailsDto
     */
    websiteUrl?: string;
    /**
     * 
     * @type {DeliveryDestination}
     * @memberof MerchantEcommerceDetailsDto
     */
    deliveryDestination?: DeliveryDestination;
    /**
     * 
     * @type {RefundPercentageRange}
     * @memberof MerchantEcommerceDetailsDto
     */
    expectedInternationalTurnoverRange?: RefundPercentageRange;
    /**
     * 
     * @type {DeliveryDaysRange}
     * @memberof MerchantEcommerceDetailsDto
     */
    deliveryDaysRange?: DeliveryDaysRange;
    /**
     * 
     * @type {RefundDaysRange}
     * @memberof MerchantEcommerceDetailsDto
     */
    refundDaysRange?: RefundDaysRange;
    /**
     * 
     * @type {RefundPercentageRange}
     * @memberof MerchantEcommerceDetailsDto
     */
    refundPercentageRange?: RefundPercentageRange;
    /**
     * The username used to access the protected ecommerce website.
     * @type {string}
     * @memberof MerchantEcommerceDetailsDto
     */
    username?: string;
}



/**
 * Check if a given object implements the MerchantEcommerceDetailsDto interface.
 */
export function instanceOfMerchantEcommerceDetailsDto(value: object): value is MerchantEcommerceDetailsDto {
    return true;
}

export function MerchantEcommerceDetailsDtoFromJSON(json: any): MerchantEcommerceDetailsDto {
    return MerchantEcommerceDetailsDtoFromJSONTyped(json, false);
}

export function MerchantEcommerceDetailsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantEcommerceDetailsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'voucherSalesOver5Percent': json['voucherSalesOver5Percent'] == null ? undefined : json['voucherSalesOver5Percent'],
        'offerSubscriptionBasedProduct': json['offerSubscriptionBasedProduct'] == null ? undefined : json['offerSubscriptionBasedProduct'],
        'urlPasswordProtected': json['urlPasswordProtected'] == null ? undefined : json['urlPasswordProtected'],
        'websiteUrl': json['websiteUrl'] == null ? undefined : json['websiteUrl'],
        'deliveryDestination': json['deliveryDestination'] == null ? undefined : DeliveryDestinationFromJSON(json['deliveryDestination']),
        'expectedInternationalTurnoverRange': json['expectedInternationalTurnoverRange'] == null ? undefined : RefundPercentageRangeFromJSON(json['expectedInternationalTurnoverRange']),
        'deliveryDaysRange': json['deliveryDaysRange'] == null ? undefined : DeliveryDaysRangeFromJSON(json['deliveryDaysRange']),
        'refundDaysRange': json['refundDaysRange'] == null ? undefined : RefundDaysRangeFromJSON(json['refundDaysRange']),
        'refundPercentageRange': json['refundPercentageRange'] == null ? undefined : RefundPercentageRangeFromJSON(json['refundPercentageRange']),
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function MerchantEcommerceDetailsDtoToJSON(json: any): MerchantEcommerceDetailsDto {
    return MerchantEcommerceDetailsDtoToJSONTyped(json, false);
}

export function MerchantEcommerceDetailsDtoToJSONTyped(value?: MerchantEcommerceDetailsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'password': value['password'],
        'voucherSalesOver5Percent': value['voucherSalesOver5Percent'],
        'offerSubscriptionBasedProduct': value['offerSubscriptionBasedProduct'],
        'urlPasswordProtected': value['urlPasswordProtected'],
        'websiteUrl': value['websiteUrl'],
        'deliveryDestination': DeliveryDestinationToJSON(value['deliveryDestination']),
        'expectedInternationalTurnoverRange': RefundPercentageRangeToJSON(value['expectedInternationalTurnoverRange']),
        'deliveryDaysRange': DeliveryDaysRangeToJSON(value['deliveryDaysRange']),
        'refundDaysRange': RefundDaysRangeToJSON(value['refundDaysRange']),
        'refundPercentageRange': RefundPercentageRangeToJSON(value['refundPercentageRange']),
        'username': value['username'],
    };
}

