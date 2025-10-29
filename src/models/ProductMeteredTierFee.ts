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
import type { PersistableCurrencyAmount } from './PersistableCurrencyAmount';
import {
    PersistableCurrencyAmountFromJSON,
    PersistableCurrencyAmountFromJSONTyped,
    PersistableCurrencyAmountToJSON,
} from './PersistableCurrencyAmount';
import type { ProductMeteredFee } from './ProductMeteredFee';
import {
    ProductMeteredFeeFromJSON,
    ProductMeteredFeeFromJSONTyped,
    ProductMeteredFeeToJSON,
} from './ProductMeteredFee';

/**
 * 
 * @export
 * @interface ProductMeteredTierFee
 */
export interface ProductMeteredTierFee {
    /**
     * Starting from and including this quantity is contained in the tier.
     * @type {number}
     * @memberof ProductMeteredTierFee
     */
    readonly startRange?: number;
    /**
     * 
     * @type {ProductMeteredFee}
     * @memberof ProductMeteredTierFee
     */
    meteredFee?: ProductMeteredFee;
    /**
     * The amount charged to the customer for each consumed unit at the end of a billing cycle.
     * @type {Set<PersistableCurrencyAmount>}
     * @memberof ProductMeteredTierFee
     */
    readonly fee?: Set<PersistableCurrencyAmount>;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ProductMeteredTierFee
     */
    readonly id?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ProductMeteredTierFee
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the ProductMeteredTierFee interface.
 */
export function instanceOfProductMeteredTierFee(value: object): value is ProductMeteredTierFee {
    return true;
}

export function ProductMeteredTierFeeFromJSON(json: any): ProductMeteredTierFee {
    return ProductMeteredTierFeeFromJSONTyped(json, false);
}

export function ProductMeteredTierFeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeteredTierFee {
    if (json == null) {
        return json;
    }
    return {
        
        'startRange': json['startRange'] == null ? undefined : json['startRange'],
        'meteredFee': json['meteredFee'] == null ? undefined : ProductMeteredFeeFromJSON(json['meteredFee']),
        'fee': json['fee'] == null ? undefined : (new Set((json['fee'] as Array<any>).map(PersistableCurrencyAmountFromJSON))),
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function ProductMeteredTierFeeToJSON(value?: Omit<ProductMeteredTierFee, 'startRange'|'fee'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meteredFee': ProductMeteredFeeToJSON(value['meteredFee']),
    };
}

