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
import type { CreationEntityState } from './CreationEntityState';
import {
    CreationEntityStateFromJSON,
    CreationEntityStateFromJSONTyped,
    CreationEntityStateToJSON,
} from './CreationEntityState';
import type { DocumentTemplateType } from './DocumentTemplateType';
import {
    DocumentTemplateTypeFromJSON,
    DocumentTemplateTypeFromJSONTyped,
    DocumentTemplateTypeToJSON,
} from './DocumentTemplateType';

/**
 * A document template contains the customizations for a particular document template type.
 * @export
 * @interface DocumentTemplate
 */
export interface DocumentTemplate {
    /**
     * Whether documents of this template should be delivered.
     * @type {boolean}
     * @memberof DocumentTemplate
     */
    readonly deliveryEnabled?: boolean;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DocumentTemplate
     */
    readonly linkedSpaceId?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DocumentTemplate
     */
    readonly spaceId?: number;
    /**
     * Whether this is the default document template which is used whenever no specific template is specified for the same template type.
     * @type {boolean}
     * @memberof DocumentTemplate
     */
    readonly defaultTemplate?: boolean;
    /**
     * The name used to identify the document template.
     * @type {string}
     * @memberof DocumentTemplate
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DocumentTemplate
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The resource path to a custom template to be used to generate PDF documents.
     * @type {string}
     * @memberof DocumentTemplate
     */
    readonly templateResource?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DocumentTemplate
     */
    readonly id?: number;
    /**
     * 
     * @type {CreationEntityState}
     * @memberof DocumentTemplate
     */
    state?: CreationEntityState;
    /**
     * 
     * @type {DocumentTemplateType}
     * @memberof DocumentTemplate
     */
    type?: DocumentTemplateType;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DocumentTemplate
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the DocumentTemplate interface.
 */
export function instanceOfDocumentTemplate(value: object): value is DocumentTemplate {
    return true;
}

export function DocumentTemplateFromJSON(json: any): DocumentTemplate {
    return DocumentTemplateFromJSONTyped(json, false);
}

export function DocumentTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentTemplate {
    if (json == null) {
        return json;
    }
    return {
        
        'deliveryEnabled': json['deliveryEnabled'] == null ? undefined : json['deliveryEnabled'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'spaceId': json['spaceId'] == null ? undefined : json['spaceId'],
        'defaultTemplate': json['defaultTemplate'] == null ? undefined : json['defaultTemplate'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'templateResource': json['templateResource'] == null ? undefined : json['templateResource'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : CreationEntityStateFromJSON(json['state']),
        'type': json['type'] == null ? undefined : DocumentTemplateTypeFromJSON(json['type']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function DocumentTemplateToJSON(value?: Omit<DocumentTemplate, 'deliveryEnabled'|'linkedSpaceId'|'spaceId'|'defaultTemplate'|'name'|'plannedPurgeDate'|'templateResource'|'id'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': CreationEntityStateToJSON(value['state']),
        'type': DocumentTemplateTypeToJSON(value['type']),
    };
}

