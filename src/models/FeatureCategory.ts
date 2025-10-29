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
/**
 * 
 * @export
 * @interface FeatureCategory
 */
export interface FeatureCategory {
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof FeatureCategory
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof FeatureCategory
     */
    readonly description?: { [key: string]: string; };
    /**
     * When listing feature categories, they can be sorted by this number.
     * @type {number}
     * @memberof FeatureCategory
     */
    readonly orderWeight?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof FeatureCategory
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the FeatureCategory interface.
 */
export function instanceOfFeatureCategory(value: object): value is FeatureCategory {
    return true;
}

export function FeatureCategoryFromJSON(json: any): FeatureCategory {
    return FeatureCategoryFromJSONTyped(json, false);
}

export function FeatureCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'orderWeight': json['orderWeight'] == null ? undefined : json['orderWeight'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function FeatureCategoryToJSON(value?: Omit<FeatureCategory, 'name'|'description'|'orderWeight'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

