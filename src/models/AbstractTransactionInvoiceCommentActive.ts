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
 * @interface AbstractTransactionInvoiceCommentActive
 */
export interface AbstractTransactionInvoiceCommentActive {
    /**
     * The comment's actual content.
     * @type {string}
     * @memberof AbstractTransactionInvoiceCommentActive
     */
    content?: string;
}

/**
 * Check if a given object implements the AbstractTransactionInvoiceCommentActive interface.
 */
export function instanceOfAbstractTransactionInvoiceCommentActive(value: object): value is AbstractTransactionInvoiceCommentActive {
    return true;
}

export function AbstractTransactionInvoiceCommentActiveFromJSON(json: any): AbstractTransactionInvoiceCommentActive {
    return AbstractTransactionInvoiceCommentActiveFromJSONTyped(json, false);
}

export function AbstractTransactionInvoiceCommentActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractTransactionInvoiceCommentActive {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
    };
}

export function AbstractTransactionInvoiceCommentActiveToJSON(json: any): AbstractTransactionInvoiceCommentActive {
    return AbstractTransactionInvoiceCommentActiveToJSONTyped(json, false);
}

export function AbstractTransactionInvoiceCommentActiveToJSONTyped(value?: AbstractTransactionInvoiceCommentActive | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'content': value['content'],
    };
}

