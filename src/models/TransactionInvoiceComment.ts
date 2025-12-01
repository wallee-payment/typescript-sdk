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
import type { TransactionInvoice } from './TransactionInvoice';
import {
    TransactionInvoiceFromJSON,
    TransactionInvoiceFromJSONTyped,
    TransactionInvoiceToJSON,
    TransactionInvoiceToJSONTyped,
} from './TransactionInvoice';

/**
 * 
 * @export
 * @interface TransactionInvoiceComment
 */
export interface TransactionInvoiceComment {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TransactionInvoiceComment
     */
    readonly linkedSpaceId?: number;
    /**
     * Whether the comment is pinned to the top.
     * @type {boolean}
     * @memberof TransactionInvoiceComment
     */
    readonly pinned?: boolean;
    /**
     * The ID of the user the comment was last updated by.
     * @type {number}
     * @memberof TransactionInvoiceComment
     */
    readonly editedBy?: number;
    /**
     * The ID of the user the comment was created by.
     * @type {number}
     * @memberof TransactionInvoiceComment
     */
    readonly createdBy?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TransactionInvoiceComment
     */
    readonly id?: number;
    /**
     * The date and time when the comment was last updated.
     * @type {Date}
     * @memberof TransactionInvoiceComment
     */
    readonly editedOn?: Date;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof TransactionInvoiceComment
     */
    readonly createdOn?: Date;
    /**
     * 
     * @type {TransactionInvoice}
     * @memberof TransactionInvoiceComment
     */
    transactionInvoice?: TransactionInvoice;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TransactionInvoiceComment
     */
    readonly version?: number;
    /**
     * The comment's actual content.
     * @type {string}
     * @memberof TransactionInvoiceComment
     */
    readonly content?: string;
}

/**
 * Check if a given object implements the TransactionInvoiceComment interface.
 */
export function instanceOfTransactionInvoiceComment(value: object): value is TransactionInvoiceComment {
    return true;
}

export function TransactionInvoiceCommentFromJSON(json: any): TransactionInvoiceComment {
    return TransactionInvoiceCommentFromJSONTyped(json, false);
}

export function TransactionInvoiceCommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInvoiceComment {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'pinned': json['pinned'] == null ? undefined : json['pinned'],
        'editedBy': json['editedBy'] == null ? undefined : json['editedBy'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'id': json['id'] == null ? undefined : json['id'],
        'editedOn': json['editedOn'] == null ? undefined : (new Date(json['editedOn'])),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'transactionInvoice': json['transactionInvoice'] == null ? undefined : TransactionInvoiceFromJSON(json['transactionInvoice']),
        'version': json['version'] == null ? undefined : json['version'],
        'content': json['content'] == null ? undefined : json['content'],
    };
}

export function TransactionInvoiceCommentToJSON(json: any): TransactionInvoiceComment {
    return TransactionInvoiceCommentToJSONTyped(json, false);
}

export function TransactionInvoiceCommentToJSONTyped(value?: Omit<TransactionInvoiceComment, 'linkedSpaceId'|'pinned'|'editedBy'|'createdBy'|'id'|'editedOn'|'createdOn'|'version'|'content'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'transactionInvoice': TransactionInvoiceToJSON(value['transactionInvoice']),
    };
}

