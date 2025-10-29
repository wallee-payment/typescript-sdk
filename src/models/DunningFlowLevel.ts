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
import type { DunningFlow } from './DunningFlow';
import {
    DunningFlowFromJSON,
    DunningFlowFromJSONTyped,
    DunningFlowToJSON,
} from './DunningFlow';
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';
import type { DocumentTemplate } from './DocumentTemplate';
import {
    DocumentTemplateFromJSON,
    DocumentTemplateFromJSONTyped,
    DocumentTemplateToJSON,
} from './DocumentTemplate';

/**
 * 
 * @export
 * @interface DunningFlowLevel
 */
export interface DunningFlowLevel {
    /**
     * The duration of the level before switching to the next one.
     * @type {string}
     * @memberof DunningFlowLevel
     */
    readonly period?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DunningFlowLevel
     */
    readonly plannedPurgeDate?: Date;
    /**
     * 
     * @type {DocumentTemplate}
     * @memberof DunningFlowLevel
     */
    reminderTemplate?: DocumentTemplate;
    /**
     * The priority indicates the sort order of the level. A low value indicates that the level is executed before any level with a higher value. Any change to this value affects future level selections. The value has to pe unique per dunning flow.
     * @type {number}
     * @memberof DunningFlowLevel
     */
    readonly priority?: number;
    /**
     * The title is used to communicate the dunning level to the customer within the reminder.
     * @type {{ [key: string]: string; }}
     * @memberof DunningFlowLevel
     */
    readonly title?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof DunningFlowLevel
     */
    readonly processor?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DunningFlowLevel
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DunningFlowLevel
     */
    readonly linkedSpaceId?: number;
    /**
     * This text is put in the reminder document of this dunning flow level.
     * @type {{ [key: string]: string; }}
     * @memberof DunningFlowLevel
     */
    readonly documentText?: { [key: string]: string; };
    /**
     * The dunning flow level name is used internally to identify the dunning flow level. For example the name is used within search fields and hence it should be distinct and descriptive.
     * @type {string}
     * @memberof DunningFlowLevel
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DunningFlowLevel
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof DunningFlowLevel
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {DunningFlow}
     * @memberof DunningFlowLevel
     */
    flow?: DunningFlow;
}

/**
 * Check if a given object implements the DunningFlowLevel interface.
 */
export function instanceOfDunningFlowLevel(value: object): value is DunningFlowLevel {
    return true;
}

export function DunningFlowLevelFromJSON(json: any): DunningFlowLevel {
    return DunningFlowLevelFromJSONTyped(json, false);
}

export function DunningFlowLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DunningFlowLevel {
    if (json == null) {
        return json;
    }
    return {
        
        'period': json['period'] == null ? undefined : json['period'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'reminderTemplate': json['reminderTemplate'] == null ? undefined : DocumentTemplateFromJSON(json['reminderTemplate']),
        'priority': json['priority'] == null ? undefined : json['priority'],
        'title': json['title'] == null ? undefined : json['title'],
        'processor': json['processor'] == null ? undefined : json['processor'],
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'documentText': json['documentText'] == null ? undefined : json['documentText'],
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'flow': json['flow'] == null ? undefined : DunningFlowFromJSON(json['flow']),
    };
}

export function DunningFlowLevelToJSON(value?: Omit<DunningFlowLevel, 'period'|'plannedPurgeDate'|'priority'|'title'|'processor'|'version'|'linkedSpaceId'|'documentText'|'name'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reminderTemplate': DocumentTemplateToJSON(value['reminderTemplate']),
        'state': CreationEntityStateToJSON(value['state']),
        'flow': DunningFlowToJSON(value['flow']),
    };
}

