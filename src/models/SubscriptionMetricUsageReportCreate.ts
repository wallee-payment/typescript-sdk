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
 * The metric usage is the actual usage of a metric for a particular subscription as collected by an external application.
 * @export
 * @interface SubscriptionMetricUsageReportCreate
 */
export interface SubscriptionMetricUsageReportCreate {
    /**
     * The number of resources consumed, will be charged in the next billing cycle.
     * @type {number}
     * @memberof SubscriptionMetricUsageReportCreate
     */
    consumedUnits: number;
    /**
     * The metric that the usage report is recorded for.
     * @type {number}
     * @memberof SubscriptionMetricUsageReportCreate
     */
    metric: number;
    /**
     * A description used to identify the usage report.
     * @type {string}
     * @memberof SubscriptionMetricUsageReportCreate
     */
    description?: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriptionMetricUsageReportCreate
     */
    externalId: string;
    /**
     * The subscription that the usage report is recorded for.
     * @type {number}
     * @memberof SubscriptionMetricUsageReportCreate
     */
    subscription: number;
}

/**
 * Check if a given object implements the SubscriptionMetricUsageReportCreate interface.
 */
export function instanceOfSubscriptionMetricUsageReportCreate(value: object): value is SubscriptionMetricUsageReportCreate {
    if (!('consumedUnits' in value) || value['consumedUnits'] === undefined) return false;
    if (!('metric' in value) || value['metric'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('subscription' in value) || value['subscription'] === undefined) return false;
    return true;
}

export function SubscriptionMetricUsageReportCreateFromJSON(json: any): SubscriptionMetricUsageReportCreate {
    return SubscriptionMetricUsageReportCreateFromJSONTyped(json, false);
}

export function SubscriptionMetricUsageReportCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionMetricUsageReportCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'consumedUnits': json['consumedUnits'],
        'metric': json['metric'],
        'description': json['description'] == null ? undefined : json['description'],
        'externalId': json['externalId'],
        'subscription': json['subscription'],
    };
}

export function SubscriptionMetricUsageReportCreateToJSON(value?: SubscriptionMetricUsageReportCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'consumedUnits': value['consumedUnits'],
        'metric': value['metric'],
        'description': value['description'],
        'externalId': value['externalId'],
        'subscription': value['subscription'],
    };
}

