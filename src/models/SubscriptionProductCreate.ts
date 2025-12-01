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
import type { SubscriptionProductState } from './SubscriptionProductState';
import {
    SubscriptionProductStateFromJSON,
    SubscriptionProductStateFromJSONTyped,
    SubscriptionProductStateToJSON,
    SubscriptionProductStateToJSONTyped,
} from './SubscriptionProductState';

/**
 * A subscription product represents a product to which a subscriber can subscribe to. A product defines how much the subscription costs and in what cycles the subscribe is charged.
 * @export
 * @interface SubscriptionProductCreate
 */
export interface SubscriptionProductCreate {
    /**
     * When listing products, they can be sorted by this number.
     * @type {number}
     * @memberof SubscriptionProductCreate
     */
    sortOrder?: number;
    /**
     * The name used to identify the product.
     * @type {string}
     * @memberof SubscriptionProductCreate
     */
    name?: string;
    /**
     * Whether subscriptions can be switched to or from this product, or whether they are locked in.
     * @type {boolean}
     * @memberof SubscriptionProductCreate
     */
    productLocked?: boolean;
    /**
     * 
     * @type {SubscriptionProductState}
     * @memberof SubscriptionProductCreate
     */
    state?: SubscriptionProductState;
    /**
     * The period after which a subscription that has been suspended due to a failed payment is terminated.
     * @type {string}
     * @memberof SubscriptionProductCreate
     */
    failedPaymentSuspensionPeriod?: string;
    /**
     * The payment methods that can be used to subscribe to this product. If none are selected, no restriction is applied.
     * @type {Array<number>}
     * @memberof SubscriptionProductCreate
     */
    allowedPaymentMethodConfigurations?: Array<number>;
    /**
     * The merchant's reference used to identify the product, e.g. the SKU.
     * @type {string}
     * @memberof SubscriptionProductCreate
     */
    reference: string;
}



/**
 * Check if a given object implements the SubscriptionProductCreate interface.
 */
export function instanceOfSubscriptionProductCreate(value: object): value is SubscriptionProductCreate {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    return true;
}

export function SubscriptionProductCreateFromJSON(json: any): SubscriptionProductCreate {
    return SubscriptionProductCreateFromJSONTyped(json, false);
}

export function SubscriptionProductCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'name': json['name'] == null ? undefined : json['name'],
        'productLocked': json['productLocked'] == null ? undefined : json['productLocked'],
        'state': json['state'] == null ? undefined : SubscriptionProductStateFromJSON(json['state']),
        'failedPaymentSuspensionPeriod': json['failedPaymentSuspensionPeriod'] == null ? undefined : json['failedPaymentSuspensionPeriod'],
        'allowedPaymentMethodConfigurations': json['allowedPaymentMethodConfigurations'] == null ? undefined : json['allowedPaymentMethodConfigurations'],
        'reference': json['reference'],
    };
}

export function SubscriptionProductCreateToJSON(json: any): SubscriptionProductCreate {
    return SubscriptionProductCreateToJSONTyped(json, false);
}

export function SubscriptionProductCreateToJSONTyped(value?: SubscriptionProductCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sortOrder': value['sortOrder'],
        'name': value['name'],
        'productLocked': value['productLocked'],
        'state': SubscriptionProductStateToJSON(value['state']),
        'failedPaymentSuspensionPeriod': value['failedPaymentSuspensionPeriod'],
        'allowedPaymentMethodConfigurations': value['allowedPaymentMethodConfigurations'],
        'reference': value['reference'],
    };
}

