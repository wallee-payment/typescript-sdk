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
import type { Feature } from './Feature';
import {
    FeatureFromJSON,
    FeatureFromJSONTyped,
    FeatureToJSON,
} from './Feature';

/**
 * The manual task type indicates what kind of manual task is required to be executed by the human.
 * @export
 * @interface ManualTaskType
 */
export interface ManualTaskType {
    /**
     * The features that this type belongs to.
     * @type {Set<Feature>}
     * @memberof ManualTaskType
     */
    readonly features?: Set<Feature>;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof ManualTaskType
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof ManualTaskType
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ManualTaskType
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the ManualTaskType interface.
 */
export function instanceOfManualTaskType(value: object): value is ManualTaskType {
    return true;
}

export function ManualTaskTypeFromJSON(json: any): ManualTaskType {
    return ManualTaskTypeFromJSONTyped(json, false);
}

export function ManualTaskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManualTaskType {
    if (json == null) {
        return json;
    }
    return {
        
        'features': json['features'] == null ? undefined : (new Set((json['features'] as Array<any>).map(FeatureFromJSON))),
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function ManualTaskTypeToJSON(value?: Omit<ManualTaskType, 'features'|'name'|'description'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

