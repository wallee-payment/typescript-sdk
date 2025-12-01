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
 * 
 * @export
 * @interface AbstractSubscriptionProductActive
 */
export interface AbstractSubscriptionProductActive {
    /**
     * When listing products, they can be sorted by this number.
     * @type {number}
     * @memberof AbstractSubscriptionProductActive
     */
    sortOrder?: number;
    /**
     * The name used to identify the product.
     * @type {string}
     * @memberof AbstractSubscriptionProductActive
     */
    name?: string;
    /**
     * Whether subscriptions can be switched to or from this product, or whether they are locked in.
     * @type {boolean}
     * @memberof AbstractSubscriptionProductActive
     */
    productLocked?: boolean;
    /**
     * 
     * @type {SubscriptionProductState}
     * @memberof AbstractSubscriptionProductActive
     */
    state?: SubscriptionProductState;
    /**
     * The period after which a subscription that has been suspended due to a failed payment is terminated.
     * @type {string}
     * @memberof AbstractSubscriptionProductActive
     */
    failedPaymentSuspensionPeriod?: string;
    /**
     * The payment methods that can be used to subscribe to this product. If none are selected, no restriction is applied.
     * @type {Array<number>}
     * @memberof AbstractSubscriptionProductActive
     */
    allowedPaymentMethodConfigurations?: Array<number>;
}



/**
 * Check if a given object implements the AbstractSubscriptionProductActive interface.
 */
export function instanceOfAbstractSubscriptionProductActive(value: object): value is AbstractSubscriptionProductActive {
    return true;
}

export function AbstractSubscriptionProductActiveFromJSON(json: any): AbstractSubscriptionProductActive {
    return AbstractSubscriptionProductActiveFromJSONTyped(json, false);
}

export function AbstractSubscriptionProductActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractSubscriptionProductActive {
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
    };
}

export function AbstractSubscriptionProductActiveToJSON(json: any): AbstractSubscriptionProductActive {
    return AbstractSubscriptionProductActiveToJSONTyped(json, false);
}

export function AbstractSubscriptionProductActiveToJSONTyped(value?: AbstractSubscriptionProductActive | null, ignoreDiscriminator: boolean = false): any {
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
    };
}

