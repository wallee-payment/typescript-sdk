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
import type { Customer } from './Customer';
import {
    CustomerFromJSON,
    CustomerFromJSONTyped,
    CustomerToJSON,
} from './Customer';

/**
 * 
 * @export
 * @interface CustomerComment
 */
export interface CustomerComment {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof CustomerComment
     */
    readonly linkedSpaceId?: number;
    /**
     * Whether the comment is pinned to the top.
     * @type {boolean}
     * @memberof CustomerComment
     */
    readonly pinned?: boolean;
    /**
     * The ID of the user the comment was last updated by.
     * @type {number}
     * @memberof CustomerComment
     */
    readonly editedBy?: number;
    /**
     * The ID of the user the comment was created by.
     * @type {number}
     * @memberof CustomerComment
     */
    readonly createdBy?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof CustomerComment
     */
    readonly id?: number;
    /**
     * The date and time when the comment was last updated.
     * @type {Date}
     * @memberof CustomerComment
     */
    readonly editedOn?: Date;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof CustomerComment
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof CustomerComment
     */
    readonly version?: number;
    /**
     * The comment's actual content.
     * @type {string}
     * @memberof CustomerComment
     */
    readonly content?: string;
    /**
     * 
     * @type {Customer}
     * @memberof CustomerComment
     */
    customer?: Customer;
}

/**
 * Check if a given object implements the CustomerComment interface.
 */
export function instanceOfCustomerComment(value: object): value is CustomerComment {
    return true;
}

export function CustomerCommentFromJSON(json: any): CustomerComment {
    return CustomerCommentFromJSONTyped(json, false);
}

export function CustomerCommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerComment {
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
        'customer': json['customer'] == null ? undefined : CustomerFromJSON(json['customer']),
    };
}

export function CustomerCommentToJSON(value?: Omit<CustomerComment, 'linkedSpaceId'|'pinned'|'editedBy'|'createdBy'|'id'|'editedOn'|'createdOn'|'version'|'content'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'customer': CustomerToJSON(value['customer']),
    };
}

