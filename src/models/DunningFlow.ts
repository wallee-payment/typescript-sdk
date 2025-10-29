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
import type { DunningFlowType } from './DunningFlowType';
import {
    DunningFlowTypeFromJSON,
    DunningFlowTypeFromJSONTyped,
    DunningFlowTypeToJSON,
} from './DunningFlowType';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';

/**
 * 
 * @export
 * @interface DunningFlow
 */
export interface DunningFlow {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DunningFlow
     */
    readonly linkedSpaceId?: number;
    /**
     * The dunning flow name is used internally to identify the configuration in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
     * @type {string}
     * @memberof DunningFlow
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DunningFlow
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DunningFlow
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof DunningFlow
     */
    state?: CreationEntityState;
    /**
     * If a dunning flow meets all selected conditions, the dunning flow will be used to process the dunning case. If the conditions are not met the next dunning flow in line will be chosen according to the priorities.
     * @type {Array<number>}
     * @memberof DunningFlow
     */
    readonly conditions?: Array<number>;
    /**
     * The priority orders the dunning flows. As such the priority determines together with the conditions the dunning flow the selection mechanism for a particular invoice. A change of the priority affects all future selections.
     * @type {number}
     * @memberof DunningFlow
     */
    readonly priority?: number;
    /**
     * 
     * @type {DunningFlowType}
     * @memberof DunningFlow
     */
    type?: DunningFlowType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DunningFlow
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the DunningFlow interface.
 */
export function instanceOfDunningFlow(value: object): value is DunningFlow {
    return true;
}

export function DunningFlowFromJSON(json: any): DunningFlow {
    return DunningFlowFromJSONTyped(json, false);
}

export function DunningFlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): DunningFlow {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'conditions': json['conditions'] == null ? undefined : json['conditions'],
        'priority': json['priority'] == null ? undefined : json['priority'],
        'type': json['type'] == null ? undefined : DunningFlowTypeFromJSON(json['type']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function DunningFlowToJSON(value?: Omit<DunningFlow, 'linkedSpaceId'|'name'|'plannedPurgeDate'|'id'|'conditions'|'priority'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'type': DunningFlowTypeToJSON(value['type']),
    };
}

