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
 * @interface SubscriptionProduct
 */
export interface SubscriptionProduct {
    /**
     * The merchant's reference used to identify the product, e.g. the SKU.
     * @type {string}
     * @memberof SubscriptionProduct
     */
    readonly reference?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionProduct
     */
    readonly linkedSpaceId?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionProduct
     */
    readonly spaceId?: number;
    /**
     * When listing products, they can be sorted by this number.
     * @type {number}
     * @memberof SubscriptionProduct
     */
    readonly sortOrder?: number;
    /**
     * The name used to identify the product.
     * @type {string}
     * @memberof SubscriptionProduct
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionProduct
     */
    readonly plannedPurgeDate?: Date;
    /**
     * Whether subscriptions can be switched to or from this product, or whether they are locked in.
     * @type {boolean}
     * @memberof SubscriptionProduct
     */
    readonly productLocked?: boolean;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionProduct
     */
    readonly id?: number;
    /**
     * 
     * @type {SubscriptionProductState}
     * @memberof SubscriptionProduct
     */
    state?: SubscriptionProductState;
    /**
     * The period after which a subscription that has been suspended due to a failed payment is terminated.
     * @type {string}
     * @memberof SubscriptionProduct
     */
    readonly failedPaymentSuspensionPeriod?: string;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionProduct
     */
    readonly version?: number;
    /**
     * The payment methods that can be used to subscribe to this product. If none are selected, no restriction is applied.
     * @type {Array<number>}
     * @memberof SubscriptionProduct
     */
    readonly allowedPaymentMethodConfigurations?: Array<number>;
}



/**
 * Check if a given object implements the SubscriptionProduct interface.
 */
export function instanceOfSubscriptionProduct(value: object): value is SubscriptionProduct {
    return true;
}

export function SubscriptionProductFromJSON(json: any): SubscriptionProduct {
    return SubscriptionProductFromJSONTyped(json, false);
}

export function SubscriptionProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProduct {
    if (json == null) {
        return json;
    }
    return {
        
        'reference': json['reference'] == null ? undefined : json['reference'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'spaceId': json['spaceId'] == null ? undefined : json['spaceId'],
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'productLocked': json['productLocked'] == null ? undefined : json['productLocked'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : SubscriptionProductStateFromJSON(json['state']),
        'failedPaymentSuspensionPeriod': json['failedPaymentSuspensionPeriod'] == null ? undefined : json['failedPaymentSuspensionPeriod'],
        'version': json['version'] == null ? undefined : json['version'],
        'allowedPaymentMethodConfigurations': json['allowedPaymentMethodConfigurations'] == null ? undefined : json['allowedPaymentMethodConfigurations'],
    };
}

export function SubscriptionProductToJSON(json: any): SubscriptionProduct {
    return SubscriptionProductToJSONTyped(json, false);
}

export function SubscriptionProductToJSONTyped(value?: Omit<SubscriptionProduct, 'reference'|'linkedSpaceId'|'spaceId'|'sortOrder'|'name'|'plannedPurgeDate'|'productLocked'|'id'|'failedPaymentSuspensionPeriod'|'version'|'allowedPaymentMethodConfigurations'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': SubscriptionProductStateToJSON(value['state']),
    };
}

