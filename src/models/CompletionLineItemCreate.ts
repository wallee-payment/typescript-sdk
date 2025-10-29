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
 * @interface CompletionLineItemCreate
 */
export interface CompletionLineItemCreate {
    /**
     * The total amount of the line item to be captured, including taxes.
     * @type {number}
     * @memberof CompletionLineItemCreate
     */
    amount: number;
    /**
     * The number of items to be captured.
     * @type {number}
     * @memberof CompletionLineItemCreate
     */
    quantity: number;
    /**
     * The unique identifier of the line item within the set of line items.
     * @type {string}
     * @memberof CompletionLineItemCreate
     */
    uniqueId: string;
}

/**
 * Check if a given object implements the CompletionLineItemCreate interface.
 */
export function instanceOfCompletionLineItemCreate(value: object): value is CompletionLineItemCreate {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('uniqueId' in value) || value['uniqueId'] === undefined) return false;
    return true;
}

export function CompletionLineItemCreateFromJSON(json: any): CompletionLineItemCreate {
    return CompletionLineItemCreateFromJSONTyped(json, false);
}

export function CompletionLineItemCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompletionLineItemCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'quantity': json['quantity'],
        'uniqueId': json['uniqueId'],
    };
}

export function CompletionLineItemCreateToJSON(value?: CompletionLineItemCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'quantity': value['quantity'],
        'uniqueId': value['uniqueId'],
    };
}

