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
 * @interface StoreTrialSubscriptionRequest
 */
export interface StoreTrialSubscriptionRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof StoreTrialSubscriptionRequest
     */
    readonly couponCodes?: Array<string>;
    /**
     * 
     * @type {Array<SubscriptionComponentGroupConfigurationRequestSetter>}
     * @memberof StoreTrialSubscriptionRequest
     */
    readonly componentConfigurations?: Array<SubscriptionComponentGroupConfigurationRequestSetter>;
    /**
     * ID of the product that will be used for the Trial Subscription assigned to the Account.
     * @type {number}
     * @memberof StoreTrialSubscriptionRequest
     */
    readonly productId?: number;
    /**
     * 
     * @type {string}
     * @memberof StoreTrialSubscriptionRequest
     */
    readonly currency?: string;
    /**
     * ID of the affiliate to be added in the subscription assignment.
     * @type {number}
     * @memberof StoreTrialSubscriptionRequest
     */
    readonly affiliateId?: number;
}

/**
 * Check if a given object implements the StoreTrialSubscriptionRequest interface.
 */
export function instanceOfStoreTrialSubscriptionRequest(value: object): value is StoreTrialSubscriptionRequest {
    return true;
}

export function StoreTrialSubscriptionRequestFromJSON(json: any): StoreTrialSubscriptionRequest {
    return StoreTrialSubscriptionRequestFromJSONTyped(json, false);
}

export function StoreTrialSubscriptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreTrialSubscriptionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'couponCodes': json['couponCodes'] == null ? undefined : json['couponCodes'],
        'componentConfigurations': json['componentConfigurations'] == null ? undefined : ((json['componentConfigurations'] as Array<any>).map(SubscriptionComponentGroupConfigurationRequestSetterFromJSON)),
        'productId': json['productId'] == null ? undefined : json['productId'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'affiliateId': json['affiliateId'] == null ? undefined : json['affiliateId'],
    };
}

export function StoreTrialSubscriptionRequestToJSON(json: any): StoreTrialSubscriptionRequest {
    return StoreTrialSubscriptionRequestToJSONTyped(json, false);
}

export function StoreTrialSubscriptionRequestToJSONTyped(value?: Omit<StoreTrialSubscriptionRequest, 'couponCodes'|'componentConfigurations'|'productId'|'currency'|'affiliateId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

