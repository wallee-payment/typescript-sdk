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

/**
 * 
 * @export
 */
export const ProductMeteredTierPricing = {
    CheapestTierPricing: 'CHEAPEST_TIER_PRICING',
    IncrementalDiscountPricing: 'INCREMENTAL_DISCOUNT_PRICING'
} as const;
export type ProductMeteredTierPricing = typeof ProductMeteredTierPricing[keyof typeof ProductMeteredTierPricing];


export function instanceOfProductMeteredTierPricing(value: any): boolean {
    for (const key in ProductMeteredTierPricing) {
        if (Object.prototype.hasOwnProperty.call(ProductMeteredTierPricing, key)) {
            if (ProductMeteredTierPricing[key as keyof typeof ProductMeteredTierPricing] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ProductMeteredTierPricingFromJSON(json: any): ProductMeteredTierPricing {
    return ProductMeteredTierPricingFromJSONTyped(json, false);
}

export function ProductMeteredTierPricingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeteredTierPricing {
    return json as ProductMeteredTierPricing;
}

export function ProductMeteredTierPricingToJSON(value?: ProductMeteredTierPricing | null): any {
    return value as any;
}

export function ProductMeteredTierPricingToJSONTyped(value: any, ignoreDiscriminator: boolean): ProductMeteredTierPricing {
    return value as ProductMeteredTierPricing;
}

