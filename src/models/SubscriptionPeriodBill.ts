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
import type { SubscriptionPeriodBillState } from './SubscriptionPeriodBillState';
import {
    SubscriptionPeriodBillStateFromJSON,
    SubscriptionPeriodBillStateFromJSONTyped,
    SubscriptionPeriodBillStateToJSON,
} from './SubscriptionPeriodBillState';
import type { SubscriptionVersion } from './SubscriptionVersion';
import {
    SubscriptionVersionFromJSON,
    SubscriptionVersionFromJSONTyped,
    SubscriptionVersionToJSON,
} from './SubscriptionVersion';

/**
 * 
 * @export
 * @interface SubscriptionPeriodBill
 */
export interface SubscriptionPeriodBill {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionPeriodBill
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the period started.
     * @type {Date}
     * @memberof SubscriptionPeriodBill
     */
    readonly periodStartDate?: Date;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionPeriodBill
     */
    readonly plannedPurgeDate?: Date;
    /**
     * 
     * @type {SubscriptionVersion}
     * @memberof SubscriptionPeriodBill
     */
    subscriptionVersion?: SubscriptionVersion;
    /**
     * The date and time when the period actually ended.
     * @type {Date}
     * @memberof SubscriptionPeriodBill
     */
    readonly effectivePeriodEndDate?: Date;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof SubscriptionPeriodBill
     */
    readonly language?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionPeriodBill
     */
    readonly id?: number;
    /**
     * 
     * @type {SubscriptionPeriodBillState}
     * @memberof SubscriptionPeriodBill
     */
    state?: SubscriptionPeriodBillState;
    /**
     * The date and time when the period bill was created.
     * @type {Date}
     * @memberof SubscriptionPeriodBill
     */
    readonly createdOn?: Date;
    /**
     * The date and time when the period is planned to end.
     * @type {Date}
     * @memberof SubscriptionPeriodBill
     */
    readonly plannedPeriodEndDate?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionPeriodBill
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the SubscriptionPeriodBill interface.
 */
export function instanceOfSubscriptionPeriodBill(value: object): value is SubscriptionPeriodBill {
    return true;
}

export function SubscriptionPeriodBillFromJSON(json: any): SubscriptionPeriodBill {
    return SubscriptionPeriodBillFromJSONTyped(json, false);
}

export function SubscriptionPeriodBillFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPeriodBill {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'periodStartDate': json['periodStartDate'] == null ? undefined : (new Date(json['periodStartDate'])),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'subscriptionVersion': json['subscriptionVersion'] == null ? undefined : SubscriptionVersionFromJSON(json['subscriptionVersion']),
        'effectivePeriodEndDate': json['effectivePeriodEndDate'] == null ? undefined : (new Date(json['effectivePeriodEndDate'])),
        'language': json['language'] == null ? undefined : json['language'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : SubscriptionPeriodBillStateFromJSON(json['state']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'plannedPeriodEndDate': json['plannedPeriodEndDate'] == null ? undefined : (new Date(json['plannedPeriodEndDate'])),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SubscriptionPeriodBillToJSON(value?: Omit<SubscriptionPeriodBill, 'linkedSpaceId'|'periodStartDate'|'plannedPurgeDate'|'effectivePeriodEndDate'|'language'|'id'|'createdOn'|'plannedPeriodEndDate'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'subscriptionVersion': SubscriptionVersionToJSON(value['subscriptionVersion']),
        'state': SubscriptionPeriodBillStateToJSON(value['state']),
    };
}

