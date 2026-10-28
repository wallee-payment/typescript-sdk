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
/**
 * Model used to configure the Subscription Product to be assigned to the Account
 * @export
 * @interface SubscriptionComponentGroupConfigurationRequestSetter
 */
export interface SubscriptionComponentGroupConfigurationRequestSetter {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionComponentGroupConfigurationRequestSetter
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionComponentGroupConfigurationRequestSetter
     */
    subscriptionProductComponentGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionComponentGroupConfigurationRequestSetter
     */
    subscriptionProductComponentReferenceId?: number;
}

/**
 * Check if a given object implements the SubscriptionComponentGroupConfigurationRequestSetter interface.
 */
export function instanceOfSubscriptionComponentGroupConfigurationRequestSetter(value: object): value is SubscriptionComponentGroupConfigurationRequestSetter {
    return true;
}

export function SubscriptionComponentGroupConfigurationRequestSetterFromJSON(json: any): SubscriptionComponentGroupConfigurationRequestSetter {
    return SubscriptionComponentGroupConfigurationRequestSetterFromJSONTyped(json, false);
}

export function SubscriptionComponentGroupConfigurationRequestSetterFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionComponentGroupConfigurationRequestSetter {
    if (json == null) {
        return json;
    }
    return {
        
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'subscriptionProductComponentGroupId': json['subscriptionProductComponentGroupId'] == null ? undefined : json['subscriptionProductComponentGroupId'],
        'subscriptionProductComponentReferenceId': json['subscriptionProductComponentReferenceId'] == null ? undefined : json['subscriptionProductComponentReferenceId'],
    };
}

export function SubscriptionComponentGroupConfigurationRequestSetterToJSON(json: any): SubscriptionComponentGroupConfigurationRequestSetter {
    return SubscriptionComponentGroupConfigurationRequestSetterToJSONTyped(json, false);
}

export function SubscriptionComponentGroupConfigurationRequestSetterToJSONTyped(value?: SubscriptionComponentGroupConfigurationRequestSetter | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'quantity': value['quantity'],
        'subscriptionProductComponentGroupId': value['subscriptionProductComponentGroupId'],
        'subscriptionProductComponentReferenceId': value['subscriptionProductComponentReferenceId'],
    };
}

