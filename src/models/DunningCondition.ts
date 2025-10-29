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

/**
 * A dunning condition determines which dunning flow is applied on a dunning case.
 * @export
 * @interface DunningCondition
 */
export interface DunningCondition {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DunningCondition
     */
    readonly linkedSpaceId?: number;
    /**
     * The condition name is used internally to identify the condition. For example the name is used within search fields and hence it should be distinct and descriptive.
     * @type {string}
     * @memberof DunningCondition
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DunningCondition
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DunningCondition
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof DunningCondition
     */
    state?: CreationEntityState;
    /**
     * The selected dunning condition type defines what settings are available to be configured on the condition in the next step.
     * @type {number}
     * @memberof DunningCondition
     */
    readonly type?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DunningCondition
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the DunningCondition interface.
 */
export function instanceOfDunningCondition(value: object): value is DunningCondition {
    return true;
}

export function DunningConditionFromJSON(json: any): DunningCondition {
    return DunningConditionFromJSONTyped(json, false);
}

export function DunningConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DunningCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'type': json['type'] == null ? undefined : json['type'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function DunningConditionToJSON(value?: Omit<DunningCondition, 'linkedSpaceId'|'name'|'plannedPurgeDate'|'id'|'type'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
    };
}

