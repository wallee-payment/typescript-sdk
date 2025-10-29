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
 * 
 * @export
 * @interface TokenVersionType
 */
export interface TokenVersionType {
    /**
     * 
     * @type {Feature}
     * @memberof TokenVersionType
     */
    feature?: Feature;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof TokenVersionType
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof TokenVersionType
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TokenVersionType
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the TokenVersionType interface.
 */
export function instanceOfTokenVersionType(value: object): value is TokenVersionType {
    return true;
}

export function TokenVersionTypeFromJSON(json: any): TokenVersionType {
    return TokenVersionTypeFromJSONTyped(json, false);
}

export function TokenVersionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenVersionType {
    if (json == null) {
        return json;
    }
    return {
        
        'feature': json['feature'] == null ? undefined : FeatureFromJSON(json['feature']),
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function TokenVersionTypeToJSON(value?: Omit<TokenVersionType, 'name'|'description'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'feature': FeatureToJSON(value['feature']),
    };
}

