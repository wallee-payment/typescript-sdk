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
import type { CompletionLineItemCreate } from './CompletionLineItemCreate';
import {
    CompletionLineItemCreateFromJSON,
    CompletionLineItemCreateFromJSONTyped,
    CompletionLineItemCreateToJSON,
} from './CompletionLineItemCreate';

/**
 * 
 * @export
 * @interface TransactionCompletionDetails
 */
export interface TransactionCompletionDetails {
    /**
     * The line items to be captured in the transaction completion.
     * @type {Array<CompletionLineItemCreate>}
     * @memberof TransactionCompletionDetails
     */
    lineItems?: Array<CompletionLineItemCreate>;
    /**
     * Whether this is the final completion for the transaction, meaning no further completions can occur, and the transaction will move to its completed state upon success.
     * @type {boolean}
     * @memberof TransactionCompletionDetails
     */
    lastCompletion?: boolean;
    /**
     * The statement descriptor that appears on a customer's bank statement, providing an explanation for charges or payments, helping customers identify the transaction.
     * @type {string}
     * @memberof TransactionCompletionDetails
     */
    statementDescriptor?: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof TransactionCompletionDetails
     */
    externalId?: string;
    /**
     * The merchant's reference used to identify the invoice.
     * @type {string}
     * @memberof TransactionCompletionDetails
     */
    invoiceMerchantReference?: string;
}

/**
 * Check if a given object implements the TransactionCompletionDetails interface.
 */
export function instanceOfTransactionCompletionDetails(value: object): value is TransactionCompletionDetails {
    return true;
}

export function TransactionCompletionDetailsFromJSON(json: any): TransactionCompletionDetails {
    return TransactionCompletionDetailsFromJSONTyped(json, false);
}

export function TransactionCompletionDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCompletionDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(CompletionLineItemCreateFromJSON)),
        'lastCompletion': json['lastCompletion'] == null ? undefined : json['lastCompletion'],
        'statementDescriptor': json['statementDescriptor'] == null ? undefined : json['statementDescriptor'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'invoiceMerchantReference': json['invoiceMerchantReference'] == null ? undefined : json['invoiceMerchantReference'],
    };
}

export function TransactionCompletionDetailsToJSON(value?: TransactionCompletionDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lineItems': value['lineItems'] == null ? undefined : ((value['lineItems'] as Array<any>).map(CompletionLineItemCreateToJSON)),
        'lastCompletion': value['lastCompletion'],
        'statementDescriptor': value['statementDescriptor'],
        'externalId': value['externalId'],
        'invoiceMerchantReference': value['invoiceMerchantReference'],
    };
}

