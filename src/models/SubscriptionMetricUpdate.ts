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
 * @interface SubscriptionMetricUpdate
 */
export interface SubscriptionMetricUpdate {
    /**
     * The localized name of the metric that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionMetricUpdate
     */
    name?: { [key: string]: string; };
    /**
     * The localized description of the metric that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionMetricUpdate
     */
    description?: { [key: string]: string; };
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof SubscriptionMetricUpdate
     */
    version: number;
}

/**
 * Check if a given object implements the SubscriptionMetricUpdate interface.
 */
export function instanceOfSubscriptionMetricUpdate(value: object): value is SubscriptionMetricUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function SubscriptionMetricUpdateFromJSON(json: any): SubscriptionMetricUpdate {
    return SubscriptionMetricUpdateFromJSONTyped(json, false);
}

export function SubscriptionMetricUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionMetricUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'version': json['version'],
    };
}

export function SubscriptionMetricUpdateToJSON(json: any): SubscriptionMetricUpdate {
    return SubscriptionMetricUpdateToJSONTyped(json, false);
}

export function SubscriptionMetricUpdateToJSONTyped(value?: SubscriptionMetricUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'version': value['version'],
    };
}

