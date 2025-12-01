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
 * A metric represents the usage of a resource that can be measured.
 * @export
 * @interface SubscriptionMetricCreate
 */
export interface SubscriptionMetricCreate {
    /**
     * The localized name of the metric that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionMetricCreate
     */
    name: { [key: string]: string; };
    /**
     * The localized description of the metric that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionMetricCreate
     */
    description?: { [key: string]: string; };
    /**
     * The type of the metric.
     * @type {number}
     * @memberof SubscriptionMetricCreate
     */
    type: number;
}

/**
 * Check if a given object implements the SubscriptionMetricCreate interface.
 */
export function instanceOfSubscriptionMetricCreate(value: object): value is SubscriptionMetricCreate {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function SubscriptionMetricCreateFromJSON(json: any): SubscriptionMetricCreate {
    return SubscriptionMetricCreateFromJSONTyped(json, false);
}

export function SubscriptionMetricCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionMetricCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'type': json['type'],
    };
}

export function SubscriptionMetricCreateToJSON(json: any): SubscriptionMetricCreate {
    return SubscriptionMetricCreateToJSONTyped(json, false);
}

export function SubscriptionMetricCreateToJSONTyped(value?: SubscriptionMetricCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'type': value['type'],
    };
}

