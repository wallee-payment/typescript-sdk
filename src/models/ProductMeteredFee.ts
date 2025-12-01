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
import type { SubscriptionProductComponent } from './SubscriptionProductComponent';
import {
    SubscriptionProductComponentFromJSON,
    SubscriptionProductComponentFromJSONTyped,
    SubscriptionProductComponentToJSON,
    SubscriptionProductComponentToJSONTyped,
} from './SubscriptionProductComponent';
import type { ProductFeeType } from './ProductFeeType';
import {
    ProductFeeTypeFromJSON,
    ProductFeeTypeFromJSONTyped,
    ProductFeeTypeToJSON,
    ProductFeeTypeToJSONTyped,
} from './ProductFeeType';
import type { ProductMeteredTierPricing } from './ProductMeteredTierPricing';
import {
    ProductMeteredTierPricingFromJSON,
    ProductMeteredTierPricingFromJSONTyped,
    ProductMeteredTierPricingToJSON,
    ProductMeteredTierPricingToJSONTyped,
} from './ProductMeteredTierPricing';
import type { SubscriptionMetric } from './SubscriptionMetric';
import {
    SubscriptionMetricFromJSON,
    SubscriptionMetricFromJSONTyped,
    SubscriptionMetricToJSON,
    SubscriptionMetricToJSONTyped,
} from './SubscriptionMetric';

/**
 * 
 * @export
 * @interface ProductMeteredFee
 */
export interface ProductMeteredFee {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ProductMeteredFee
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {SubscriptionProductComponent}
     * @memberof ProductMeteredFee
     */
    component?: SubscriptionProductComponent;
    /**
     * 
     * @type {ProductMeteredTierPricing}
     * @memberof ProductMeteredFee
     */
    tierPricing?: ProductMeteredTierPricing;
    /**
     * 
     * @type {SubscriptionMetric}
     * @memberof ProductMeteredFee
     */
    metric?: SubscriptionMetric;
    /**
     * The localized name of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductMeteredFee
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the fee that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof ProductMeteredFee
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ProductMeteredFee
     */
    readonly id?: number;
    /**
     * 
     * @type {ProductFeeType}
     * @memberof ProductMeteredFee
     */
    type?: ProductFeeType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ProductMeteredFee
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the ProductMeteredFee interface.
 */
export function instanceOfProductMeteredFee(value: object): value is ProductMeteredFee {
    return true;
}

export function ProductMeteredFeeFromJSON(json: any): ProductMeteredFee {
    return ProductMeteredFeeFromJSONTyped(json, false);
}

export function ProductMeteredFeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMeteredFee {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'component': json['component'] == null ? undefined : SubscriptionProductComponentFromJSON(json['component']),
        'tierPricing': json['tierPricing'] == null ? undefined : ProductMeteredTierPricingFromJSON(json['tierPricing']),
        'metric': json['metric'] == null ? undefined : SubscriptionMetricFromJSON(json['metric']),
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : ProductFeeTypeFromJSON(json['type']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function ProductMeteredFeeToJSON(json: any): ProductMeteredFee {
    return ProductMeteredFeeToJSONTyped(json, false);
}

export function ProductMeteredFeeToJSONTyped(value?: Omit<ProductMeteredFee, 'linkedSpaceId'|'name'|'description'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'component': SubscriptionProductComponentToJSON(value['component']),
        'tierPricing': ProductMeteredTierPricingToJSON(value['tierPricing']),
        'metric': SubscriptionMetricToJSON(value['metric']),
        'type': ProductFeeTypeToJSON(value['type']),
    };
}

