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
import type { PersistableCurrencyAmountUpdate } from './PersistableCurrencyAmountUpdate';
import {
    PersistableCurrencyAmountUpdateFromJSON,
    PersistableCurrencyAmountUpdateFromJSONTyped,
    PersistableCurrencyAmountUpdateToJSON,
    PersistableCurrencyAmountUpdateToJSONTyped,
} from './PersistableCurrencyAmountUpdate';

/**
 * 
 * @export
 * @interface ProductMeteredTierFeeUpdate
 */
export interface ProductMeteredTierFeeUpdate {
    /**
     * Starting from and including this quantity is contained in the tier.
     * @type {number}
     * @memberof ProductMeteredTierFeeUpdate
     */
    startRange?: number;
    /**
     * The metered fee that this tier belongs to.
     * @type {number}
     * @memberof ProductMeteredTierFeeUpdate
     */
    meteredFee?: number;
    /**
     * The amount charged to the customer for each consumed unit at the end of a billing cycle.
     * @type {Set<PersistableCurrencyAmountUpdate>}
     * @memberof ProductMeteredTierFeeUpdate
     */
    fee?: Set<PersistableCurrencyAmountUpdate>;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof ProductMeteredTierFeeUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the ProductMeteredTierFeeUpdate interface.
 */
export function instanceOfProductMeteredTierFeeUpdate(value: object): value is ProductMeteredTierFeeUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ProductMeteredTierFeeUpdateFromJSON(json: any): ProductMeteredTierFeeUpdate {
    return ProductMeteredTierFeeUpdateFromJSONTyped(json, false);
}

export function ProductMeteredTierFeeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeteredTierFeeUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'startRange': json['startRange'] == null ? undefined : json['startRange'],
        'meteredFee': json['meteredFee'] == null ? undefined : json['meteredFee'],
        'fee': json['fee'] == null ? undefined : (new Set((json['fee'] as Array<any>).map(PersistableCurrencyAmountUpdateFromJSON))),
        'version': json['version'],
    };
}

export function ProductMeteredTierFeeUpdateToJSON(json: any): ProductMeteredTierFeeUpdate {
    return ProductMeteredTierFeeUpdateToJSONTyped(json, false);
}

export function ProductMeteredTierFeeUpdateToJSONTyped(value?: ProductMeteredTierFeeUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'startRange': value['startRange'],
        'meteredFee': value['meteredFee'],
        'fee': value['fee'] == null ? undefined : (Array.from(value['fee'] as Set<any>).map(PersistableCurrencyAmountUpdateToJSON)),
        'version': value['version'],
    };
}

