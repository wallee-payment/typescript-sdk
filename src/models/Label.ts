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
import type { LabelDescriptor } from './LabelDescriptor';
import {
    LabelDescriptorFromJSON,
    LabelDescriptorFromJSONTyped,
    LabelDescriptorToJSON,
} from './LabelDescriptor';

/**
 * 
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * The label's content formatted as string.
     * @type {string}
     * @memberof Label
     */
    readonly contentAsString?: string;
    /**
     * 
     * @type {LabelDescriptor}
     * @memberof Label
     */
    descriptor?: LabelDescriptor;
    /**
     * The label's actual content.
     * @type {any}
     * @memberof Label
     */
    readonly content?: any | null;
}

/**
 * Check if a given object implements the Label interface.
 */
export function instanceOfLabel(value: object): value is Label {
    return true;
}

export function LabelFromJSON(json: any): Label {
    return LabelFromJSONTyped(json, false);
}

export function LabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): Label {
    if (json == null) {
        return json;
    }
    return {
        
        'contentAsString': json['contentAsString'] == null ? undefined : json['contentAsString'],
        'descriptor': json['descriptor'] == null ? undefined : LabelDescriptorFromJSON(json['descriptor']),
        'content': json['content'] == null ? undefined : json['content'],
    };
}

export function LabelToJSON(value?: Omit<Label, 'contentAsString'|'content'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'descriptor': LabelDescriptorToJSON(value['descriptor']),
    };
}

