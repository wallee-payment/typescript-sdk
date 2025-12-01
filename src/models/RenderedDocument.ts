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
 * @interface RenderedDocument
 */
export interface RenderedDocument {
    /**
     * The document's template type
     * @type {number}
     * @memberof RenderedDocument
     */
    readonly documentTemplateType?: number;
    /**
     * The binary data of the document
     * @type {string}
     * @memberof RenderedDocument
     */
    readonly data?: string;
    /**
     * The document's content type
     * @type {string}
     * @memberof RenderedDocument
     */
    readonly mimeType?: string;
    /**
     * The title of the rendered document
     * @type {string}
     * @memberof RenderedDocument
     */
    readonly title?: string;
}

/**
 * Check if a given object implements the RenderedDocument interface.
 */
export function instanceOfRenderedDocument(value: object): value is RenderedDocument {
    return true;
}

export function RenderedDocumentFromJSON(json: any): RenderedDocument {
    return RenderedDocumentFromJSONTyped(json, false);
}

export function RenderedDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenderedDocument {
    if (json == null) {
        return json;
    }
    return {
        
        'documentTemplateType': json['documentTemplateType'] == null ? undefined : json['documentTemplateType'],
        'data': json['data'] == null ? undefined : json['data'],
        'mimeType': json['mimeType'] == null ? undefined : json['mimeType'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function RenderedDocumentToJSON(json: any): RenderedDocument {
    return RenderedDocumentToJSONTyped(json, false);
}

export function RenderedDocumentToJSONTyped(value?: Omit<RenderedDocument, 'documentTemplateType'|'data'|'mimeType'|'title'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

