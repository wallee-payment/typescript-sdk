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
import type { TransactionCompletionState } from './TransactionCompletionState';
import {
    TransactionCompletionStateFromJSON,
    TransactionCompletionStateFromJSONTyped,
    TransactionCompletionStateToJSON,
    TransactionCompletionStateToJSONTyped,
} from './TransactionCompletionState';
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
    FailureReasonToJSONTyped,
} from './FailureReason';
import type { Label } from './Label';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
    LabelToJSONTyped,
} from './Label';
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
    LineItemToJSONTyped,
} from './LineItem';
import type { TransactionCompletionMode } from './TransactionCompletionMode';
import {
    TransactionCompletionModeFromJSON,
    TransactionCompletionModeFromJSONTyped,
    TransactionCompletionModeToJSON,
    TransactionCompletionModeToJSONTyped,
} from './TransactionCompletionMode';
import type { TransactionLineItemVersion } from './TransactionLineItemVersion';
import {
    TransactionLineItemVersionFromJSON,
    TransactionLineItemVersionFromJSONTyped,
    TransactionLineItemVersionToJSON,
    TransactionLineItemVersionToJSONTyped,
} from './TransactionLineItemVersion';

/**
 * 
 * @export
 * @interface TransactionCompletion
 */
export interface TransactionCompletion {
    /**
     * 
     * @type {TransactionLineItemVersion}
     * @memberof TransactionCompletion
     */
    lineItemVersion?: TransactionLineItemVersion;
    /**
     * The statement descriptor that appears on a customer's bank statement, providing an explanation for charges or payments, helping customers identify the transaction.
     * @type {string}
     * @memberof TransactionCompletion
     */
    readonly statementDescriptor?: string;
    /**
     * The original line items from the transaction that serve as the baseline for this completion.
     * @type {Array<LineItem>}
     * @memberof TransactionCompletion
     */
    readonly baseLineItems?: Array<LineItem>;
    /**
     * The date and time when the processing of the transaction completion was started.
     * @type {Date}
     * @memberof TransactionCompletion
     */
    readonly processingOn?: Date;
    /**
     * The merchant's reference used to identify the invoice.
     * @type {string}
     * @memberof TransactionCompletion
     */
    readonly invoiceMerchantReference?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof TransactionCompletion
     */
    readonly language?: string;
    /**
     * The line items yet to be captured in the transaction.
     * @type {Array<LineItem>}
     * @memberof TransactionCompletion
     */
    readonly remainingLineItems?: Array<LineItem>;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof TransactionCompletion
     */
    readonly createdOn?: Date;
    /**
     * The line items captured in this transaction completion.
     * @type {Array<LineItem>}
     * @memberof TransactionCompletion
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * 
     * @type {TransactionCompletionMode}
     * @memberof TransactionCompletion
     */
    mode?: TransactionCompletionMode;
    /**
     * The date and time when the transaction completion succeeded.
     * @type {Date}
     * @memberof TransactionCompletion
     */
    readonly succeededOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TransactionCompletion
     */
    readonly id?: number;
    /**
     * 
     * @type {TransactionCompletionState}
     * @memberof TransactionCompletion
     */
    state?: TransactionCompletionState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof TransactionCompletion
     */
    readonly linkedTransaction?: number;
    /**
     * Payment-specific details related to this transaction completion such as payment instructions or references needed for processing.
     * @type {string}
     * @memberof TransactionCompletion
     */
    readonly paymentInformation?: string;
    /**
     * The total amount to be captured in this completion, including taxes.
     * @type {number}
     * @memberof TransactionCompletion
     */
    readonly amount?: number;
    /**
     * Whether this is the final completion for the transaction. After the last completion is successfully created, the transaction enters its final state, and no further completions can occur.
     * @type {boolean}
     * @memberof TransactionCompletion
     */
    readonly lastCompletion?: boolean;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof TransactionCompletion
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof TransactionCompletion
     */
    readonly externalId?: string;
    /**
     * The time zone that this object is associated with.
     * @type {string}
     * @memberof TransactionCompletion
     */
    readonly timeZone?: string;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof TransactionCompletion
     */
    readonly spaceViewId?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TransactionCompletion
     */
    readonly version?: number;
    /**
     * The labels providing additional information about the object.
     * @type {Set<Label>}
     * @memberof TransactionCompletion
     */
    readonly labels?: Set<Label>;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TransactionCompletion
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the object will expire.
     * @type {Date}
     * @memberof TransactionCompletion
     */
    readonly timeoutOn?: Date;
    /**
     * The ID of the user the transaction completion was created by.
     * @type {number}
     * @memberof TransactionCompletion
     */
    readonly createdBy?: number;
    /**
     * The date and time when the next update of the object's state is planned.
     * @type {Date}
     * @memberof TransactionCompletion
     */
    readonly nextUpdateOn?: Date;
    /**
     * 
     * @type {FailureReason}
     * @memberof TransactionCompletion
     */
    failureReason?: FailureReason;
    /**
     * The portion of the captured amount that corresponds to taxes.
     * @type {number}
     * @memberof TransactionCompletion
     */
    readonly taxAmount?: number;
    /**
     * The date and time when the transaction completion failed.
     * @type {Date}
     * @memberof TransactionCompletion
     */
    readonly failedOn?: Date;
    /**
     * The reference ID provided by the payment processor, used to trace the completion through the external payment system.
     * @type {string}
     * @memberof TransactionCompletion
     */
    readonly processorReference?: string;
}



/**
 * Check if a given object implements the TransactionCompletion interface.
 */
export function instanceOfTransactionCompletion(value: object): value is TransactionCompletion {
    return true;
}

export function TransactionCompletionFromJSON(json: any): TransactionCompletion {
    return TransactionCompletionFromJSONTyped(json, false);
}

export function TransactionCompletionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCompletion {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItemVersion': json['lineItemVersion'] == null ? undefined : TransactionLineItemVersionFromJSON(json['lineItemVersion']),
        'statementDescriptor': json['statementDescriptor'] == null ? undefined : json['statementDescriptor'],
        'baseLineItems': json['baseLineItems'] == null ? undefined : ((json['baseLineItems'] as Array<any>).map(LineItemFromJSON)),
        'processingOn': json['processingOn'] == null ? undefined : (new Date(json['processingOn'])),
        'invoiceMerchantReference': json['invoiceMerchantReference'] == null ? undefined : json['invoiceMerchantReference'],
        'language': json['language'] == null ? undefined : json['language'],
        'remainingLineItems': json['remainingLineItems'] == null ? undefined : ((json['remainingLineItems'] as Array<any>).map(LineItemFromJSON)),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'mode': json['mode'] == null ? undefined : TransactionCompletionModeFromJSON(json['mode']),
        'succeededOn': json['succeededOn'] == null ? undefined : (new Date(json['succeededOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : TransactionCompletionStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'paymentInformation': json['paymentInformation'] == null ? undefined : json['paymentInformation'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'lastCompletion': json['lastCompletion'] == null ? undefined : json['lastCompletion'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'version': json['version'] == null ? undefined : json['version'],
        'labels': json['labels'] == null ? undefined : (new Set((json['labels'] as Array<any>).map(LabelFromJSON))),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'timeoutOn': json['timeoutOn'] == null ? undefined : (new Date(json['timeoutOn'])),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'nextUpdateOn': json['nextUpdateOn'] == null ? undefined : (new Date(json['nextUpdateOn'])),
        'failureReason': json['failureReason'] == null ? undefined : FailureReasonFromJSON(json['failureReason']),
        'taxAmount': json['taxAmount'] == null ? undefined : json['taxAmount'],
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'processorReference': json['processorReference'] == null ? undefined : json['processorReference'],
    };
}

export function TransactionCompletionToJSON(json: any): TransactionCompletion {
    return TransactionCompletionToJSONTyped(json, false);
}

export function TransactionCompletionToJSONTyped(value?: Omit<TransactionCompletion, 'statementDescriptor'|'baseLineItems'|'processingOn'|'invoiceMerchantReference'|'language'|'remainingLineItems'|'createdOn'|'lineItems'|'succeededOn'|'id'|'linkedTransaction'|'paymentInformation'|'amount'|'lastCompletion'|'plannedPurgeDate'|'externalId'|'timeZone'|'spaceViewId'|'version'|'labels'|'linkedSpaceId'|'timeoutOn'|'createdBy'|'nextUpdateOn'|'taxAmount'|'failedOn'|'processorReference'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lineItemVersion': TransactionLineItemVersionToJSON(value['lineItemVersion']),
        'mode': TransactionCompletionModeToJSON(value['mode']),
        'state': TransactionCompletionStateToJSON(value['state']),
        'failureReason': FailureReasonToJSON(value['failureReason']),
    };
}

