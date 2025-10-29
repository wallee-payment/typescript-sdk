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
import type { DebtCollectorConditionType } from './DebtCollectorConditionType';
import {
    DebtCollectorConditionTypeFromJSON,
    DebtCollectorConditionTypeFromJSONTyped,
    DebtCollectorConditionTypeToJSON,
} from './DebtCollectorConditionType';

/**
 * A condition controls under which circumstances a collector configuration is applied to a debt collection case.
 * @export
 * @interface DebtCollectorCondition
 */
export interface DebtCollectorCondition {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DebtCollectorCondition
     */
    readonly linkedSpaceId?: number;
    /**
     * The name used to identify the condition.
     * @type {string}
     * @memberof DebtCollectorCondition
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DebtCollectorCondition
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DebtCollectorCondition
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof DebtCollectorCondition
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {DebtCollectorConditionType}
     * @memberof DebtCollectorCondition
     */
    type?: DebtCollectorConditionType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DebtCollectorCondition
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the DebtCollectorCondition interface.
 */
export function instanceOfDebtCollectorCondition(value: object): value is DebtCollectorCondition {
    return true;
}

export function DebtCollectorConditionFromJSON(json: any): DebtCollectorCondition {
    return DebtCollectorConditionFromJSONTyped(json, false);
}

export function DebtCollectorConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectorCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'type': json['type'] == null ? undefined : DebtCollectorConditionTypeFromJSON(json['type']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function DebtCollectorConditionToJSON(value?: Omit<DebtCollectorCondition, 'linkedSpaceId'|'name'|'plannedPurgeDate'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'type': DebtCollectorConditionTypeToJSON(value['type']),
    };
}

