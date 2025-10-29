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
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';
import type { SubscriptionMetricType } from './SubscriptionMetricType';
import {
    SubscriptionMetricTypeFromJSON,
    SubscriptionMetricTypeFromJSONTyped,
    SubscriptionMetricTypeToJSON,
} from './SubscriptionMetricType';

/**
 * A metric represents the usage of a resource that can be measured.
 * @export
 * @interface SubscriptionMetric
 */
export interface SubscriptionMetric {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionMetric
     */
    readonly linkedSpaceId?: number;
    /**
     * The localized name of the metric that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionMetric
     */
    readonly name?: { [key: string]: string; };
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionMetric
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The localized description of the metric that is displayed to the customer.
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionMetric
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionMetric
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof SubscriptionMetric
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {SubscriptionMetricType}
     * @memberof SubscriptionMetric
     */
    type?: SubscriptionMetricType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionMetric
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the SubscriptionMetric interface.
 */
export function instanceOfSubscriptionMetric(value: object): value is SubscriptionMetric {
    return true;
}

export function SubscriptionMetricFromJSON(json: any): SubscriptionMetric {
    return SubscriptionMetricFromJSONTyped(json, false);
}

export function SubscriptionMetricFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionMetric {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'type': json['type'] == null ? undefined : SubscriptionMetricTypeFromJSON(json['type']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SubscriptionMetricToJSON(value?: Omit<SubscriptionMetric, 'linkedSpaceId'|'name'|'plannedPurgeDate'|'description'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'type': SubscriptionMetricTypeToJSON(value['type']),
    };
}

