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
import type { ProductMeteredTierPricing } from './ProductMeteredTierPricing';
import {
    ProductMeteredTierPricingFromJSON,
    ProductMeteredTierPricingFromJSONTyped,
    ProductMeteredTierPricingToJSON,
    ProductMeteredTierPricingToJSONTyped,
} from './ProductMeteredTierPricing';

/**
 * 
 * @export
 * @interface ProductMeteredFeeUpdate
 */
export interface ProductMeteredFeeUpdate {
    /**
     * The product component that the fee belongs to.
     * @type {number}
     * @memberof ProductMeteredFeeUpdate
     */
    component?: number;
    /**
     * 
     * @type {ProductMeteredTierPricing}
     * @memberof ProductMeteredFeeUpdate
     */
    tierPricing?: ProductMeteredTierPricing;
    /**
     * The metric used to determine the resource consumption billed to the customer.
     * @type {number}
     * @memberof ProductMeteredFeeUpdate
     */
    metric?: number;
    /**
     * The localized name of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductMeteredFeeUpdate
     */
    name?: { [key: string]: string; };
    /**
     * The localized description of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductMeteredFeeUpdate
     */
    description?: { [key: string]: string; };
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof ProductMeteredFeeUpdate
     */
    version: number;
}



/**
 * Check if a given object implements the ProductMeteredFeeUpdate interface.
 */
export function instanceOfProductMeteredFeeUpdate(value: object): value is ProductMeteredFeeUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ProductMeteredFeeUpdateFromJSON(json: any): ProductMeteredFeeUpdate {
    return ProductMeteredFeeUpdateFromJSONTyped(json, false);
}

export function ProductMeteredFeeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeteredFeeUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'component': json['component'] == null ? undefined : json['component'],
        'tierPricing': json['tierPricing'] == null ? undefined : ProductMeteredTierPricingFromJSON(json['tierPricing']),
        'metric': json['metric'] == null ? undefined : json['metric'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'version': json['version'],
    };
}

export function ProductMeteredFeeUpdateToJSON(json: any): ProductMeteredFeeUpdate {
    return ProductMeteredFeeUpdateToJSONTyped(json, false);
}

export function ProductMeteredFeeUpdateToJSONTyped(value?: ProductMeteredFeeUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'component': value['component'],
        'tierPricing': ProductMeteredTierPricingToJSON(value['tierPricing']),
        'metric': value['metric'],
        'name': value['name'],
        'description': value['description'],
        'version': value['version'],
    };
}

