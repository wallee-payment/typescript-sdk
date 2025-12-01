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
import type { Label } from './Label';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
    LabelToJSONTyped,
} from './Label';

/**
 * 
 * @export
 * @interface DebtCollectionCaseDocument
 */
export interface DebtCollectionCaseDocument {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DebtCollectionCaseDocument
     */
    readonly linkedSpaceId?: number;
    /**
     * The file name of the document.
     * @type {string}
     * @memberof DebtCollectionCaseDocument
     */
    readonly fileName?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DebtCollectionCaseDocument
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The debt collection case that this document belongs to.
     * @type {number}
     * @memberof DebtCollectionCaseDocument
     */
    readonly debtCollectionCase?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DebtCollectionCaseDocument
     */
    readonly id?: number;
    /**
     * The MIME type of the document's content.
     * @type {string}
     * @memberof DebtCollectionCaseDocument
     */
    readonly mimeType?: string;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof DebtCollectionCaseDocument
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DebtCollectionCaseDocument
     */
    readonly version?: number;
    /**
     * A unique identifier of the document.
     * @type {string}
     * @memberof DebtCollectionCaseDocument
     */
    readonly uniqueId?: string;
    /**
     * The labels providing additional information about the object.
     * @type {Set<Label>}
     * @memberof DebtCollectionCaseDocument
     */
    readonly labels?: Set<Label>;
}

/**
 * Check if a given object implements the DebtCollectionCaseDocument interface.
 */
export function instanceOfDebtCollectionCaseDocument(value: object): value is DebtCollectionCaseDocument {
    return true;
}

export function DebtCollectionCaseDocumentFromJSON(json: any): DebtCollectionCaseDocument {
    return DebtCollectionCaseDocumentFromJSONTyped(json, false);
}

export function DebtCollectionCaseDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectionCaseDocument {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'fileName': json['fileName'] == null ? undefined : json['fileName'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'debtCollectionCase': json['debtCollectionCase'] == null ? undefined : json['debtCollectionCase'],
        'id': json['id'] == null ? undefined : json['id'],
        'mimeType': json['mimeType'] == null ? undefined : json['mimeType'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'uniqueId': json['uniqueId'] == null ? undefined : json['uniqueId'],
        'labels': json['labels'] == null ? undefined : (new Set((json['labels'] as Array<any>).map(LabelFromJSON))),
    };
}

export function DebtCollectionCaseDocumentToJSON(json: any): DebtCollectionCaseDocument {
    return DebtCollectionCaseDocumentToJSONTyped(json, false);
}

export function DebtCollectionCaseDocumentToJSONTyped(value?: Omit<DebtCollectionCaseDocument, 'linkedSpaceId'|'fileName'|'plannedPurgeDate'|'debtCollectionCase'|'id'|'mimeType'|'createdOn'|'version'|'uniqueId'|'labels'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

