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
import type { DocumentTemplateTypeGroup } from './DocumentTemplateTypeGroup';
import {
    DocumentTemplateTypeGroupFromJSON,
    DocumentTemplateTypeGroupFromJSONTyped,
    DocumentTemplateTypeGroupToJSON,
} from './DocumentTemplateTypeGroup';
import type { Feature } from './Feature';
import {
    FeatureFromJSON,
    FeatureFromJSONTyped,
    FeatureToJSON,
} from './Feature';

/**
 * 
 * @export
 * @interface DocumentTemplateType
 */
export interface DocumentTemplateType {
    /**
     * 
     * @type {Feature}
     * @memberof DocumentTemplateType
     */
    feature?: Feature;
    /**
     * The localized description of the document template type.
     * @type {{ [key: string]: string; }}
     * @memberof DocumentTemplateType
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DocumentTemplateType
     */
    readonly id?: number;
    /**
     * The localized title of the document template type.
     * @type {{ [key: string]: string; }}
     * @memberof DocumentTemplateType
     */
    readonly title?: { [key: string]: string; };
    /**
     * 
     * @type {DocumentTemplateTypeGroup}
     * @memberof DocumentTemplateType
     */
    group?: DocumentTemplateTypeGroup;
}

/**
 * Check if a given object implements the DocumentTemplateType interface.
 */
export function instanceOfDocumentTemplateType(value: object): value is DocumentTemplateType {
    return true;
}

export function DocumentTemplateTypeFromJSON(json: any): DocumentTemplateType {
    return DocumentTemplateTypeFromJSONTyped(json, false);
}

export function DocumentTemplateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentTemplateType {
    if (json == null) {
        return json;
    }
    return {
        
        'feature': json['feature'] == null ? undefined : FeatureFromJSON(json['feature']),
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'group': json['group'] == null ? undefined : DocumentTemplateTypeGroupFromJSON(json['group']),
    };
}

export function DocumentTemplateTypeToJSON(value?: Omit<DocumentTemplateType, 'description'|'id'|'title'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'feature': FeatureToJSON(value['feature']),
        'group': DocumentTemplateTypeGroupToJSON(value['group']),
    };
}

