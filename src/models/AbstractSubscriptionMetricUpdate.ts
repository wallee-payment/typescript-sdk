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
 * 
 * @export
 * @interface AbstractSubscriptionMetricUpdate
 */
export interface AbstractSubscriptionMetricUpdate {
    /**
     * The localized name of the metric that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof AbstractSubscriptionMetricUpdate
     */
    name?: { [key: string]: string; };
    /**
     * The localized description of the metric that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof AbstractSubscriptionMetricUpdate
     */
    description?: { [key: string]: string; };
}

/**
 * Check if a given object implements the AbstractSubscriptionMetricUpdate interface.
 */
export function instanceOfAbstractSubscriptionMetricUpdate(value: object): value is AbstractSubscriptionMetricUpdate {
    return true;
}

export function AbstractSubscriptionMetricUpdateFromJSON(json: any): AbstractSubscriptionMetricUpdate {
    return AbstractSubscriptionMetricUpdateFromJSONTyped(json, false);
}

export function AbstractSubscriptionMetricUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractSubscriptionMetricUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function AbstractSubscriptionMetricUpdateToJSON(json: any): AbstractSubscriptionMetricUpdate {
    return AbstractSubscriptionMetricUpdateToJSONTyped(json, false);
}

export function AbstractSubscriptionMetricUpdateToJSONTyped(value?: AbstractSubscriptionMetricUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
    };
}

