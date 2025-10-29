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
import type { ConditionType } from './ConditionType';
import {
    ConditionTypeFromJSON,
    ConditionTypeFromJSONTyped,
    ConditionTypeToJSON,
} from './ConditionType';

/**
 * A connector condition defines criteria that a transaction must meet for a connector configuration to process the payment.
 * @export
 * @interface Condition
 */
export interface Condition {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof Condition
     */
    readonly linkedSpaceId?: number;
    /**
     * The name used to identify the condition.
     * @type {string}
     * @memberof Condition
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Condition
     */
    readonly plannedPurgeDate?: Date;
    /**
     * 
     * @type {ConditionType}
     * @memberof Condition
     */
    conditionType?: ConditionType;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Condition
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof Condition
     */
    state?: CreationEntityState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Condition
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the Condition interface.
 */
export function instanceOfCondition(value: object): value is Condition {
    return true;
}

export function ConditionFromJSON(json: any): Condition {
    return ConditionFromJSONTyped(json, false);
}

export function ConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Condition {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'conditionType': json['conditionType'] == null ? undefined : ConditionTypeFromJSON(json['conditionType']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function ConditionToJSON(value?: Omit<Condition, 'linkedSpaceId'|'name'|'plannedPurgeDate'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'conditionType': ConditionTypeToJSON(value['conditionType']),
        'state': CreationEntityStateToJSON(value['state']),
    };
}

