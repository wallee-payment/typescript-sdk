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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';

/**
 * 
 * @export
 * @interface TransactionComment
 */
export interface TransactionComment {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TransactionComment
     */
    readonly linkedSpaceId?: number;
    /**
     * Whether the comment is pinned to the top.
     * @type {boolean}
     * @memberof TransactionComment
     */
    readonly pinned?: boolean;
    /**
     * The ID of the user the comment was last updated by.
     * @type {number}
     * @memberof TransactionComment
     */
    readonly editedBy?: number;
    /**
     * The ID of the user the comment was created by.
     * @type {number}
     * @memberof TransactionComment
     */
    readonly createdBy?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TransactionComment
     */
    readonly id?: number;
    /**
     * The date and time when the comment was last updated.
     * @type {Date}
     * @memberof TransactionComment
     */
    readonly editedOn?: Date;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof TransactionComment
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TransactionComment
     */
    readonly version?: number;
    /**
     * The comment's actual content.
     * @type {string}
     * @memberof TransactionComment
     */
    readonly content?: string;
    /**
     * 
     * @type {Transaction}
     * @memberof TransactionComment
     */
    transaction?: Transaction;
}

/**
 * Check if a given object implements the TransactionComment interface.
 */
export function instanceOfTransactionComment(value: object): value is TransactionComment {
    return true;
}

export function TransactionCommentFromJSON(json: any): TransactionComment {
    return TransactionCommentFromJSONTyped(json, false);
}

export function TransactionCommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionComment {
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
        'version': json['version'] == null ? undefined : json['version'],
        'content': json['content'] == null ? undefined : json['content'],
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
    };
}

export function TransactionCommentToJSON(value?: Omit<TransactionComment, 'linkedSpaceId'|'pinned'|'editedBy'|'createdBy'|'id'|'editedOn'|'createdOn'|'version'|'content'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'transaction': TransactionToJSON(value['transaction']),
    };
}

