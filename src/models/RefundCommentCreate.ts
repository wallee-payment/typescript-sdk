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
 * @interface RefundCommentCreate
 */
export interface RefundCommentCreate {
    /**
     * The comment's actual content.
     * @type {string}
     * @memberof RefundCommentCreate
     */
    content?: string;
    /**
     * The refund that the comment belongs to.
     * @type {number}
     * @memberof RefundCommentCreate
     */
    refund: number;
}

/**
 * Check if a given object implements the RefundCommentCreate interface.
 */
export function instanceOfRefundCommentCreate(value: object): value is RefundCommentCreate {
    if (!('refund' in value) || value['refund'] === undefined) return false;
    return true;
}

export function RefundCommentCreateFromJSON(json: any): RefundCommentCreate {
    return RefundCommentCreateFromJSONTyped(json, false);
}

export function RefundCommentCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundCommentCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
        'refund': json['refund'],
    };
}

export function RefundCommentCreateToJSON(value?: RefundCommentCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'content': value['content'],
        'refund': value['refund'],
    };
}

