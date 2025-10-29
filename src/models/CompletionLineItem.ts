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
 * @interface CompletionLineItem
 */
export interface CompletionLineItem {
    /**
     * The total amount of the line item to be captured, including taxes.
     * @type {number}
     * @memberof CompletionLineItem
     */
    readonly amount?: number;
    /**
     * The number of items to be captured.
     * @type {number}
     * @memberof CompletionLineItem
     */
    readonly quantity?: number;
    /**
     * The unique identifier of the line item within the set of line items.
     * @type {string}
     * @memberof CompletionLineItem
     */
    readonly uniqueId?: string;
}

/**
 * Check if a given object implements the CompletionLineItem interface.
 */
export function instanceOfCompletionLineItem(value: object): value is CompletionLineItem {
    return true;
}

export function CompletionLineItemFromJSON(json: any): CompletionLineItem {
    return CompletionLineItemFromJSONTyped(json, false);
}

export function CompletionLineItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompletionLineItem {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'uniqueId': json['uniqueId'] == null ? undefined : json['uniqueId'],
    };
}

export function CompletionLineItemToJSON(value?: Omit<CompletionLineItem, 'amount'|'quantity'|'uniqueId'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

