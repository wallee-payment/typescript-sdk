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
import type { LabelDescriptorCategory } from './LabelDescriptorCategory';
import {
    LabelDescriptorCategoryFromJSON,
    LabelDescriptorCategoryFromJSONTyped,
    LabelDescriptorCategoryToJSON,
} from './LabelDescriptorCategory';
import type { LabelDescriptorGroup } from './LabelDescriptorGroup';
import {
    LabelDescriptorGroupFromJSON,
    LabelDescriptorGroupFromJSONTyped,
    LabelDescriptorGroupToJSON,
} from './LabelDescriptorGroup';

/**
 * 
 * @export
 * @interface LabelDescriptor
 */
export interface LabelDescriptor {
    /**
     * The features that this label belongs to.
     * @type {Set<Feature>}
     * @memberof LabelDescriptor
     */
    readonly features?: Set<Feature>;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof LabelDescriptor
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof LabelDescriptor
     */
    readonly description?: { [key: string]: string; };
    /**
     * When listing labels, they can be sorted by this number.
     * @type {number}
     * @memberof LabelDescriptor
     */
    readonly weight?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof LabelDescriptor
     */
    readonly id?: number;
    /**
     * 
     * @type {LabelDescriptorCategory}
     * @memberof LabelDescriptor
     */
    category?: LabelDescriptorCategory;
    /**
     * The type of the label's value.
     * @type {number}
     * @memberof LabelDescriptor
     */
    readonly type?: number;
    /**
     * 
     * @type {LabelDescriptorGroup}
     * @memberof LabelDescriptor
     */
    group?: LabelDescriptorGroup;
}

/**
 * Check if a given object implements the LabelDescriptor interface.
 */
export function instanceOfLabelDescriptor(value: object): value is LabelDescriptor {
    return true;
}

export function LabelDescriptorFromJSON(json: any): LabelDescriptor {
    return LabelDescriptorFromJSONTyped(json, false);
}

export function LabelDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): LabelDescriptor {
    if (json == null) {
        return json;
    }
    return {
        
        'features': json['features'] == null ? undefined : (new Set((json['features'] as Array<any>).map(FeatureFromJSON))),
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'weight': json['weight'] == null ? undefined : json['weight'],
        'id': json['id'] == null ? undefined : json['id'],
        'category': json['category'] == null ? undefined : LabelDescriptorCategoryFromJSON(json['category']),
        'type': json['type'] == null ? undefined : json['type'],
        'group': json['group'] == null ? undefined : LabelDescriptorGroupFromJSON(json['group']),
    };
}

export function LabelDescriptorToJSON(value?: Omit<LabelDescriptor, 'features'|'name'|'description'|'weight'|'id'|'type'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'category': LabelDescriptorCategoryToJSON(value['category']),
        'group': LabelDescriptorGroupToJSON(value['group']),
    };
}

