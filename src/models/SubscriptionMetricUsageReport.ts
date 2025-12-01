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
 * @interface SubscriptionMetricUsageReport
 */
export interface SubscriptionMetricUsageReport {
    /**
     * The number of resources consumed, will be charged in the next billing cycle.
     * @type {number}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly consumedUnits?: number;
    /**
     * The ID of the user the usage report was created by.
     * @type {number}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly createdByUserId?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly linkedSpaceId?: number;
    /**
     * The metric that the usage report is recorded for.
     * @type {number}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly metric?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A description used to identify the usage report.
     * @type {string}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly description?: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly externalId?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly id?: number;
    /**
     * The subscription that the usage report is recorded for.
     * @type {number}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly subscription?: number;
    /**
     * The date and time when the usage report was created.
     * @type {Date}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionMetricUsageReport
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the SubscriptionMetricUsageReport interface.
 */
export function instanceOfSubscriptionMetricUsageReport(value: object): value is SubscriptionMetricUsageReport {
    return true;
}

export function SubscriptionMetricUsageReportFromJSON(json: any): SubscriptionMetricUsageReport {
    return SubscriptionMetricUsageReportFromJSONTyped(json, false);
}

export function SubscriptionMetricUsageReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionMetricUsageReport {
    if (json == null) {
        return json;
    }
    return {
        
        'consumedUnits': json['consumedUnits'] == null ? undefined : json['consumedUnits'],
        'createdByUserId': json['createdByUserId'] == null ? undefined : json['createdByUserId'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'metric': json['metric'] == null ? undefined : json['metric'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'id': json['id'] == null ? undefined : json['id'],
        'subscription': json['subscription'] == null ? undefined : json['subscription'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SubscriptionMetricUsageReportToJSON(json: any): SubscriptionMetricUsageReport {
    return SubscriptionMetricUsageReportToJSONTyped(json, false);
}

export function SubscriptionMetricUsageReportToJSONTyped(value?: Omit<SubscriptionMetricUsageReport, 'consumedUnits'|'createdByUserId'|'linkedSpaceId'|'metric'|'plannedPurgeDate'|'description'|'externalId'|'id'|'subscription'|'createdOn'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

