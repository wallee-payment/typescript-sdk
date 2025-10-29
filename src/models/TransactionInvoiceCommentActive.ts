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
 * @interface TransactionInvoiceCommentActive
 */
export interface TransactionInvoiceCommentActive {
    /**
     * The comment's actual content.
     * @type {string}
     * @memberof TransactionInvoiceCommentActive
     */
    content?: string;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof TransactionInvoiceCommentActive
     */
    version: number;
}

/**
 * Check if a given object implements the TransactionInvoiceCommentActive interface.
 */
export function instanceOfTransactionInvoiceCommentActive(value: object): value is TransactionInvoiceCommentActive {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function TransactionInvoiceCommentActiveFromJSON(json: any): TransactionInvoiceCommentActive {
    return TransactionInvoiceCommentActiveFromJSONTyped(json, false);
}

export function TransactionInvoiceCommentActiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInvoiceCommentActive {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
        'version': json['version'],
    };
}

export function TransactionInvoiceCommentActiveToJSON(value?: TransactionInvoiceCommentActive | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'content': value['content'],
        'version': value['version'],
    };
}

