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
 * @interface CustomerCommentCreate
 */
export interface CustomerCommentCreate {
    /**
     * The comment's actual content.
     * @type {string}
     * @memberof CustomerCommentCreate
     */
    content?: string;
    /**
     * The customer that the object belongs to.
     * @type {number}
     * @memberof CustomerCommentCreate
     */
    customer: number;
}

/**
 * Check if a given object implements the CustomerCommentCreate interface.
 */
export function instanceOfCustomerCommentCreate(value: object): value is CustomerCommentCreate {
    if (!('customer' in value) || value['customer'] === undefined) return false;
    return true;
}

export function CustomerCommentCreateFromJSON(json: any): CustomerCommentCreate {
    return CustomerCommentCreateFromJSONTyped(json, false);
}

export function CustomerCommentCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerCommentCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
        'customer': json['customer'],
    };
}

export function CustomerCommentCreateToJSON(json: any): CustomerCommentCreate {
    return CustomerCommentCreateToJSONTyped(json, false);
}

export function CustomerCommentCreateToJSONTyped(value?: CustomerCommentCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'content': value['content'],
        'customer': value['customer'],
    };
}

