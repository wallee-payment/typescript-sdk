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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressToJSONTyped,
} from './Address';
import type { Environment } from './Environment';
import {
    EnvironmentFromJSON,
    EnvironmentFromJSONTyped,
    EnvironmentToJSON,
    EnvironmentToJSONTyped,
} from './Environment';
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
    LineItemToJSONTyped,
} from './LineItem';
import type { TransactionInvoiceState } from './TransactionInvoiceState';
import {
    TransactionInvoiceStateFromJSON,
    TransactionInvoiceStateFromJSONTyped,
    TransactionInvoiceStateToJSON,
    TransactionInvoiceStateToJSONTyped,
} from './TransactionInvoiceState';
import type { TransactionCompletion } from './TransactionCompletion';
import {
    TransactionCompletionFromJSON,
    TransactionCompletionFromJSONTyped,
    TransactionCompletionToJSON,
    TransactionCompletionToJSONTyped,
} from './TransactionCompletion';

/**
 * 
 * @export
 * @interface TransactionInvoice
 */
export interface TransactionInvoice {
    /**
     * 
     * @type {TransactionCompletion}
     * @memberof TransactionInvoice
     */
    completion?: TransactionCompletion;
    /**
     * The date and time when the invoice was derecognized, meaning it is no longer considered outstanding or valid in the system.
     * @type {Date}
     * @memberof TransactionInvoice
     */
    readonly derecognizedOn?: Date;
    /**
     * The total sum of all line items on the invoice, including taxes.
     * @type {number}
     * @memberof TransactionInvoice
     */
    readonly amount?: number;
    /**
     * The due date for payment of the invoice.
     * @type {Date}
     * @memberof TransactionInvoice
     */
    readonly dueOn?: Date;
    /**
     * The remaining amount the buyer owes to the merchant. A negative value indicates the invoice has been overpaid.
     * @type {number}
     * @memberof TransactionInvoice
     */
    readonly outstandingAmount?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof TransactionInvoice
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof TransactionInvoice
     */
    readonly externalId?: string;
    /**
     * The time zone that this object is associated with.
     * @type {string}
     * @memberof TransactionInvoice
     */
    readonly timeZone?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof TransactionInvoice
     */
    readonly language?: string;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof TransactionInvoice
     */
    readonly spaceViewId?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof TransactionInvoice
     */
    readonly createdOn?: Date;
    /**
     * The date and time when the invoice was recorded as paid. May differ from the actual payment date due to processing delays.
     * @type {Date}
     * @memberof TransactionInvoice
     */
    readonly paidOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TransactionInvoice
     */
    readonly version?: number;
    /**
     * The invoiced line items that will appear on the invoice document.
     * @type {Array<LineItem>}
     * @memberof TransactionInvoice
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TransactionInvoice
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {Environment}
     * @memberof TransactionInvoice
     */
    environment?: Environment;
    /**
     * The ID of the user the invoice was derecognized by.
     * @type {number}
     * @memberof TransactionInvoice
     */
    readonly derecognizedBy?: number;
    /**
     * 
     * @type {Address}
     * @memberof TransactionInvoice
     */
    billingAddress?: Address;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TransactionInvoice
     */
    readonly id?: number;
    /**
     * 
     * @type {TransactionInvoiceState}
     * @memberof TransactionInvoice
     */
    state?: TransactionInvoiceState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof TransactionInvoice
     */
    readonly linkedTransaction?: number;
    /**
     * The portion of the invoiced amount that corresponds to taxes.
     * @type {number}
     * @memberof TransactionInvoice
     */
    readonly taxAmount?: number;
    /**
     * The merchant's reference used to identify the invoice.
     * @type {string}
     * @memberof TransactionInvoice
     */
    readonly merchantReference?: string;
}



/**
 * Check if a given object implements the TransactionInvoice interface.
 */
export function instanceOfTransactionInvoice(value: object): value is TransactionInvoice {
    return true;
}

export function TransactionInvoiceFromJSON(json: any): TransactionInvoice {
    return TransactionInvoiceFromJSONTyped(json, false);
}

export function TransactionInvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInvoice {
    if (json == null) {
        return json;
    }
    return {
        
        'completion': json['completion'] == null ? undefined : TransactionCompletionFromJSON(json['completion']),
        'derecognizedOn': json['derecognizedOn'] == null ? undefined : (new Date(json['derecognizedOn'])),
        'amount': json['amount'] == null ? undefined : json['amount'],
        'dueOn': json['dueOn'] == null ? undefined : (new Date(json['dueOn'])),
        'outstandingAmount': json['outstandingAmount'] == null ? undefined : json['outstandingAmount'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'language': json['language'] == null ? undefined : json['language'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'paidOn': json['paidOn'] == null ? undefined : (new Date(json['paidOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'environment': json['environment'] == null ? undefined : EnvironmentFromJSON(json['environment']),
        'derecognizedBy': json['derecognizedBy'] == null ? undefined : json['derecognizedBy'],
        'billingAddress': json['billingAddress'] == null ? undefined : AddressFromJSON(json['billingAddress']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : TransactionInvoiceStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'taxAmount': json['taxAmount'] == null ? undefined : json['taxAmount'],
        'merchantReference': json['merchantReference'] == null ? undefined : json['merchantReference'],
    };
}

export function TransactionInvoiceToJSON(json: any): TransactionInvoice {
    return TransactionInvoiceToJSONTyped(json, false);
}

export function TransactionInvoiceToJSONTyped(value?: Omit<TransactionInvoice, 'derecognizedOn'|'amount'|'dueOn'|'outstandingAmount'|'plannedPurgeDate'|'externalId'|'timeZone'|'language'|'spaceViewId'|'createdOn'|'paidOn'|'version'|'lineItems'|'linkedSpaceId'|'derecognizedBy'|'id'|'linkedTransaction'|'taxAmount'|'merchantReference'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'completion': TransactionCompletionToJSON(value['completion']),
        'environment': EnvironmentToJSON(value['environment']),
        'billingAddress': AddressToJSON(value['billingAddress']),
        'state': TransactionInvoiceStateToJSON(value['state']),
    };
}

