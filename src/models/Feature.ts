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
import type { FeatureCategory } from './FeatureCategory';
import {
    FeatureCategoryFromJSON,
    FeatureCategoryFromJSONTyped,
    FeatureCategoryToJSON,
} from './FeatureCategory';

/**
 * 
 * @export
 * @interface Feature
 */
export interface Feature {
    /**
     * The features that must be enabled for this feature to work properly.
     * @type {Array<number>}
     * @memberof Feature
     */
    readonly requiredFeatures?: Array<number>;
    /**
     * Whether the feature is visible to the user.
     * @type {boolean}
     * @memberof Feature
     */
    readonly visible?: boolean;
    /**
     * The path to the feature's logo image.
     * @type {string}
     * @memberof Feature
     */
    readonly logoPath?: string;
    /**
     * When listing features, they can be sorted by this number.
     * @type {number}
     * @memberof Feature
     */
    readonly sortOrder?: number;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof Feature
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof Feature
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Feature
     */
    readonly id?: number;
    /**
     * 
     * @type {FeatureCategory}
     * @memberof Feature
     */
    category?: FeatureCategory;
    /**
     * Whether the feature is in beta stage and there may still be some issues.
     * @type {boolean}
     * @memberof Feature
     */
    readonly beta?: boolean;
}

/**
 * Check if a given object implements the Feature interface.
 */
export function instanceOfFeature(value: object): value is Feature {
    return true;
}

export function FeatureFromJSON(json: any): Feature {
    return FeatureFromJSONTyped(json, false);
}

export function FeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Feature {
    if (json == null) {
        return json;
    }
    return {
        
        'requiredFeatures': json['requiredFeatures'] == null ? undefined : json['requiredFeatures'],
        'visible': json['visible'] == null ? undefined : json['visible'],
        'logoPath': json['logoPath'] == null ? undefined : json['logoPath'],
        'sortOrder': json['sortOrder'] == null ? undefined : json['sortOrder'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'category': json['category'] == null ? undefined : FeatureCategoryFromJSON(json['category']),
        'beta': json['beta'] == null ? undefined : json['beta'],
    };
}

export function FeatureToJSON(value?: Omit<Feature, 'requiredFeatures'|'visible'|'logoPath'|'sortOrder'|'name'|'description'|'id'|'beta'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'category': FeatureCategoryToJSON(value['category']),
    };
}

