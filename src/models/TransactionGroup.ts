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
import type { TransactionGroupState } from './TransactionGroupState';
import {
    TransactionGroupStateFromJSON,
    TransactionGroupStateFromJSONTyped,
    TransactionGroupStateToJSON,
    TransactionGroupStateToJSONTyped,
} from './TransactionGroupState';

/**
 * 
 * @export
 * @interface TransactionGroup
 */
export interface TransactionGroup {
    /**
     * The date and time when the initial transaction in the group was created.
     * @type {Date}
     * @memberof TransactionGroup
     */
    readonly beginDate?: Date;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TransactionGroup
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the final transaction in the group was last updated.
     * @type {Date}
     * @memberof TransactionGroup
     */
    readonly endDate?: Date;
    /**
     * The unique identifier of the customer in the external system.
     * @type {string}
     * @memberof TransactionGroup
     */
    readonly customerId?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof TransactionGroup
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TransactionGroup
     */
    readonly id?: number;
    /**
     * 
     * @type {TransactionGroupState}
     * @memberof TransactionGroup
     */
    state?: TransactionGroupState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TransactionGroup
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the TransactionGroup interface.
 */
export function instanceOfTransactionGroup(value: object): value is TransactionGroup {
    return true;
}

export function TransactionGroupFromJSON(json: any): TransactionGroup {
    return TransactionGroupFromJSONTyped(json, false);
}

export function TransactionGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'beginDate': json['beginDate'] == null ? undefined : (new Date(json['beginDate'])),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : TransactionGroupStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function TransactionGroupToJSON(json: any): TransactionGroup {
    return TransactionGroupToJSONTyped(json, false);
}

export function TransactionGroupToJSONTyped(value?: Omit<TransactionGroup, 'beginDate'|'linkedSpaceId'|'endDate'|'customerId'|'plannedPurgeDate'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': TransactionGroupStateToJSON(value['state']),
    };
}

