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
import type { LineItemCreate } from './LineItemCreate';
import {
    LineItemCreateFromJSON,
    LineItemCreateFromJSONTyped,
    LineItemCreateToJSON,
    LineItemCreateToJSONTyped,
} from './LineItemCreate';

/**
 * 
 * @export
 * @interface TransactionLineItemVersionCreate
 */
export interface TransactionLineItemVersionCreate {
    /**
     * The line items that replace the original line items in the transaction.
     * @type {Array<LineItemCreate>}
     * @memberof TransactionLineItemVersionCreate
     */
    lineItems: Array<LineItemCreate>;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof TransactionLineItemVersionCreate
     */
    externalId: string;
    /**
     * The transaction that the line item version belongs to.
     * @type {number}
     * @memberof TransactionLineItemVersionCreate
     */
    transaction: number;
}

/**
 * Check if a given object implements the TransactionLineItemVersionCreate interface.
 */
export function instanceOfTransactionLineItemVersionCreate(value: object): value is TransactionLineItemVersionCreate {
    if (!('lineItems' in value) || value['lineItems'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    return true;
}

export function TransactionLineItemVersionCreateFromJSON(json: any): TransactionLineItemVersionCreate {
    return TransactionLineItemVersionCreateFromJSONTyped(json, false);
}

export function TransactionLineItemVersionCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionLineItemVersionCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItems': ((json['lineItems'] as Array<any>).map(LineItemCreateFromJSON)),
        'externalId': json['externalId'],
        'transaction': json['transaction'],
    };
}

export function TransactionLineItemVersionCreateToJSON(json: any): TransactionLineItemVersionCreate {
    return TransactionLineItemVersionCreateToJSONTyped(json, false);
}

export function TransactionLineItemVersionCreateToJSONTyped(value?: TransactionLineItemVersionCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lineItems': ((value['lineItems'] as Array<any>).map(LineItemCreateToJSON)),
        'externalId': value['externalId'],
        'transaction': value['transaction'],
    };
}

