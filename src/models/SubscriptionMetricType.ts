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
 * The subscription metric type identifies the type of the metric.
 * @export
 * @interface SubscriptionMetricType
 */
export interface SubscriptionMetricType {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionMetricType
     */
    readonly feature?: number;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionMetricType
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionMetricType
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionMetricType
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the SubscriptionMetricType interface.
 */
export function instanceOfSubscriptionMetricType(value: object): value is SubscriptionMetricType {
    return true;
}

export function SubscriptionMetricTypeFromJSON(json: any): SubscriptionMetricType {
    return SubscriptionMetricTypeFromJSONTyped(json, false);
}

export function SubscriptionMetricTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionMetricType {
    if (json == null) {
        return json;
    }
    return {
        
        'feature': json['feature'] == null ? undefined : json['feature'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function SubscriptionMetricTypeToJSON(json: any): SubscriptionMetricType {
    return SubscriptionMetricTypeToJSONTyped(json, false);
}

export function SubscriptionMetricTypeToJSONTyped(value?: Omit<SubscriptionMetricType, 'feature'|'name'|'description'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

