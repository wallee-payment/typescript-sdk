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
import type { AddressCreate } from './AddressCreate';
import {
    AddressCreateFromJSON,
    AddressCreateFromJSONTyped,
    AddressCreateToJSON,
} from './AddressCreate';
import type { LineItemCreate } from './LineItemCreate';
import {
    LineItemCreateFromJSON,
    LineItemCreateFromJSONTyped,
    LineItemCreateToJSON,
} from './LineItemCreate';

/**
 * 
 * @export
 * @interface TransactionInvoiceReplacement
 */
export interface TransactionInvoiceReplacement {
    /**
     * The invoiced line items that will appear on the invoice document.
     * @type {Array<LineItemCreate>}
     * @memberof TransactionInvoiceReplacement
     */
    lineItems: Array<LineItemCreate>;
    /**
     * The due date for payment of the invoice.
     * @type {Date}
     * @memberof TransactionInvoiceReplacement
     */
    dueOn?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof TransactionInvoiceReplacement
     */
    externalId: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof TransactionInvoiceReplacement
     */
    billingAddress?: AddressCreate;
    /**
     * Whether the invoice will be sent to the customer via email.
     * @type {boolean}
     * @memberof TransactionInvoiceReplacement
     */
    sentToCustomer?: boolean;
    /**
     * The merchant's reference used to identify the invoice.
     * @type {string}
     * @memberof TransactionInvoiceReplacement
     */
    merchantReference?: string;
}

/**
 * Check if a given object implements the TransactionInvoiceReplacement interface.
 */
export function instanceOfTransactionInvoiceReplacement(value: object): value is TransactionInvoiceReplacement {
    if (!('lineItems' in value) || value['lineItems'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    return true;
}

export function TransactionInvoiceReplacementFromJSON(json: any): TransactionInvoiceReplacement {
    return TransactionInvoiceReplacementFromJSONTyped(json, false);
}

export function TransactionInvoiceReplacementFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInvoiceReplacement {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItems': ((json['lineItems'] as Array<any>).map(LineItemCreateFromJSON)),
        'dueOn': json['dueOn'] == null ? undefined : (new Date(json['dueOn'])),
        'externalId': json['externalId'],
        'billingAddress': json['billingAddress'] == null ? undefined : AddressCreateFromJSON(json['billingAddress']),
        'sentToCustomer': json['sentToCustomer'] == null ? undefined : json['sentToCustomer'],
        'merchantReference': json['merchantReference'] == null ? undefined : json['merchantReference'],
    };
}

export function TransactionInvoiceReplacementToJSON(value?: TransactionInvoiceReplacement | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lineItems': ((value['lineItems'] as Array<any>).map(LineItemCreateToJSON)),
        'dueOn': value['dueOn'] == null ? undefined : ((value['dueOn']).toISOString()),
        'externalId': value['externalId'],
        'billingAddress': AddressCreateToJSON(value['billingAddress']),
        'sentToCustomer': value['sentToCustomer'],
        'merchantReference': value['merchantReference'],
    };
}

