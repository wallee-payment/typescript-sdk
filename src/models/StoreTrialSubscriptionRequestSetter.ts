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
import type { SubscriptionComponentGroupConfigurationRequestSetter } from './SubscriptionComponentGroupConfigurationRequestSetter';
import {
    SubscriptionComponentGroupConfigurationRequestSetterFromJSON,
    SubscriptionComponentGroupConfigurationRequestSetterFromJSONTyped,
    SubscriptionComponentGroupConfigurationRequestSetterToJSON,
    SubscriptionComponentGroupConfigurationRequestSetterToJSONTyped,
} from './SubscriptionComponentGroupConfigurationRequestSetter';

/**
 * Model used to store a Trial Subscription, assigning it to an Account
 * @export
 * @interface StoreTrialSubscriptionRequestSetter
 */
export interface StoreTrialSubscriptionRequestSetter {
    /**
     * 
     * @type {Array<string>}
     * @memberof StoreTrialSubscriptionRequestSetter
     */
    couponCodes?: Array<string>;
    /**
     * 
     * @type {Array<SubscriptionComponentGroupConfigurationRequestSetter>}
     * @memberof StoreTrialSubscriptionRequestSetter
     */
    componentConfigurations?: Array<SubscriptionComponentGroupConfigurationRequestSetter>;
    /**
     * ID of the product that will be used for the Trial Subscription assigned to the Account.
     * @type {number}
     * @memberof StoreTrialSubscriptionRequestSetter
     */
    productId: number;
    /**
     * 
     * @type {string}
     * @memberof StoreTrialSubscriptionRequestSetter
     */
    currency: string;
    /**
     * ID of the affiliate to be added in the subscription assignment.
     * @type {number}
     * @memberof StoreTrialSubscriptionRequestSetter
     */
    affiliateId?: number;
}

/**
 * Check if a given object implements the StoreTrialSubscriptionRequestSetter interface.
 */
export function instanceOfStoreTrialSubscriptionRequestSetter(value: object): value is StoreTrialSubscriptionRequestSetter {
    if (!('productId' in value) || value['productId'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    return true;
}

export function StoreTrialSubscriptionRequestSetterFromJSON(json: any): StoreTrialSubscriptionRequestSetter {
    return StoreTrialSubscriptionRequestSetterFromJSONTyped(json, false);
}

export function StoreTrialSubscriptionRequestSetterFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreTrialSubscriptionRequestSetter {
    if (json == null) {
        return json;
    }
    return {
        
        'couponCodes': json['couponCodes'] == null ? undefined : json['couponCodes'],
        'componentConfigurations': json['componentConfigurations'] == null ? undefined : ((json['componentConfigurations'] as Array<any>).map(SubscriptionComponentGroupConfigurationRequestSetterFromJSON)),
        'productId': json['productId'],
        'currency': json['currency'],
        'affiliateId': json['affiliateId'] == null ? undefined : json['affiliateId'],
    };
}

export function StoreTrialSubscriptionRequestSetterToJSON(json: any): StoreTrialSubscriptionRequestSetter {
    return StoreTrialSubscriptionRequestSetterToJSONTyped(json, false);
}

export function StoreTrialSubscriptionRequestSetterToJSONTyped(value?: StoreTrialSubscriptionRequestSetter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'couponCodes': value['couponCodes'],
        'componentConfigurations': value['componentConfigurations'] == null ? undefined : ((value['componentConfigurations'] as Array<any>).map(SubscriptionComponentGroupConfigurationRequestSetterToJSON)),
        'productId': value['productId'],
        'currency': value['currency'],
        'affiliateId': value['affiliateId'],
    };
}

