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
 * @interface DocumentTemplateTypeGroup
 */
export interface DocumentTemplateTypeGroup {
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DocumentTemplateTypeGroup
     */
    readonly id?: number;
    /**
     * The localized title of the group.
     * @type {{ [key: string]: string; }}
     * @memberof DocumentTemplateTypeGroup
     */
    readonly title?: { [key: string]: string; };
}

/**
 * Check if a given object implements the DocumentTemplateTypeGroup interface.
 */
export function instanceOfDocumentTemplateTypeGroup(value: object): value is DocumentTemplateTypeGroup {
    return true;
}

export function DocumentTemplateTypeGroupFromJSON(json: any): DocumentTemplateTypeGroup {
    return DocumentTemplateTypeGroupFromJSONTyped(json, false);
}

export function DocumentTemplateTypeGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentTemplateTypeGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function DocumentTemplateTypeGroupToJSON(json: any): DocumentTemplateTypeGroup {
    return DocumentTemplateTypeGroupToJSONTyped(json, false);
}

export function DocumentTemplateTypeGroupToJSONTyped(value?: Omit<DocumentTemplateTypeGroup, 'id'|'title'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

