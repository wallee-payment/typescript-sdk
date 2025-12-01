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
 * @interface AbstractCustomerCommentActive
 */
export interface AbstractCustomerCommentActive {
    /**
     * The comment's actual content.
     * @type {string}
     * @memberof AbstractCustomerCommentActive
     */
    content?: string;
}

/**
 * Check if a given object implements the AbstractCustomerCommentActive interface.
 */
export function instanceOfAbstractCustomerCommentActive(value: object): value is AbstractCustomerCommentActive {
    return true;
}

export function AbstractCustomerCommentActiveFromJSON(json: any): AbstractCustomerCommentActive {
    return AbstractCustomerCommentActiveFromJSONTyped(json, false);
}

export function AbstractCustomerCommentActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractCustomerCommentActive {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
    };
}

export function AbstractCustomerCommentActiveToJSON(json: any): AbstractCustomerCommentActive {
    return AbstractCustomerCommentActiveToJSONTyped(json, false);
}

export function AbstractCustomerCommentActiveToJSONTyped(value?: AbstractCustomerCommentActive | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'content': value['content'],
    };
}

