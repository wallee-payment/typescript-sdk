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
import type { ManualTaskActionStyle } from './ManualTaskActionStyle';
import {
    ManualTaskActionStyleFromJSON,
    ManualTaskActionStyleFromJSONTyped,
    ManualTaskActionStyleToJSON,
} from './ManualTaskActionStyle';

/**
 * 
 * @export
 * @interface ManualTaskAction
 */
export interface ManualTaskAction {
    /**
     * The type of manual tasks this action belongs to.
     * @type {number}
     * @memberof ManualTaskAction
     */
    readonly taskType?: number;
    /**
     * 
     * @type {ManualTaskActionStyle}
     * @memberof ManualTaskAction
     */
    style?: ManualTaskActionStyle;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ManualTaskAction
     */
    readonly id?: number;
    /**
     * The action's label.
     * @type {{ [key: string]: string; }}
     * @memberof ManualTaskAction
     */
    readonly label?: { [key: string]: string; };
}

/**
 * Check if a given object implements the ManualTaskAction interface.
 */
export function instanceOfManualTaskAction(value: object): value is ManualTaskAction {
    return true;
}

export function ManualTaskActionFromJSON(json: any): ManualTaskAction {
    return ManualTaskActionFromJSONTyped(json, false);
}

export function ManualTaskActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManualTaskAction {
    if (json == null) {
        return json;
    }
    return {
        
        'taskType': json['taskType'] == null ? undefined : json['taskType'],
        'style': json['style'] == null ? undefined : ManualTaskActionStyleFromJSON(json['style']),
        'id': json['id'] == null ? undefined : json['id'],
        'label': json['label'] == null ? undefined : json['label'],
    };
}

export function ManualTaskActionToJSON(value?: Omit<ManualTaskAction, 'taskType'|'id'|'label'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'style': ManualTaskActionStyleToJSON(value['style']),
    };
}

