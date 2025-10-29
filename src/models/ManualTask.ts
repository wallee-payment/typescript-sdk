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
import type { ManualTaskAction } from './ManualTaskAction';
import {
    ManualTaskActionFromJSON,
    ManualTaskActionFromJSONTyped,
    ManualTaskActionToJSON,
} from './ManualTaskAction';
import type { ManualTaskState } from './ManualTaskState';
import {
    ManualTaskStateFromJSON,
    ManualTaskStateFromJSONTyped,
    ManualTaskStateToJSON,
} from './ManualTaskState';

/**
 * A manual task requires the manual intervention of a human.
 * @export
 * @interface ManualTask
 */
export interface ManualTask {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ManualTask
     */
    readonly linkedSpaceId?: number;
    /**
     * The ID of the entity the manual task is linked to.
     * @type {number}
     * @memberof ManualTask
     */
    readonly contextEntityId?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof ManualTask
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The date and time until when the manual task has to be handled.
     * @type {Date}
     * @memberof ManualTask
     */
    readonly expiresOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ManualTask
     */
    readonly id?: number;
    /**
     * 
     * @type {ManualTaskState}
     * @memberof ManualTask
     */
    state?: ManualTaskState;
    /**
     * The manual task's type.
     * @type {number}
     * @memberof ManualTask
     */
    readonly type?: number;
    /**
     * The actions that can be triggered to handle the manual task.
     * @type {Array<ManualTaskAction>}
     * @memberof ManualTask
     */
    readonly actions?: Array<ManualTaskAction>;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof ManualTask
     */
    readonly createdOn?: Date;
}

/**
 * Check if a given object implements the ManualTask interface.
 */
export function instanceOfManualTask(value: object): value is ManualTask {
    return true;
}

export function ManualTaskFromJSON(json: any): ManualTask {
    return ManualTaskFromJSONTyped(json, false);
}

export function ManualTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManualTask {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'contextEntityId': json['contextEntityId'] == null ? undefined : json['contextEntityId'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'expiresOn': json['expiresOn'] == null ? undefined : (new Date(json['expiresOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : ManualTaskStateFromJSON(json['state']),
        'type': json['type'] == null ? undefined : json['type'],
        'actions': json['actions'] == null ? undefined : ((json['actions'] as Array<any>).map(ManualTaskActionFromJSON)),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
    };
}

export function ManualTaskToJSON(value?: Omit<ManualTask, 'linkedSpaceId'|'contextEntityId'|'plannedPurgeDate'|'expiresOn'|'id'|'type'|'actions'|'createdOn'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': ManualTaskStateToJSON(value['state']),
    };
}

