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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
    TransactionToJSONTyped,
} from './Transaction';
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
import type { TransactionLineItemVersionState } from './TransactionLineItemVersionState';
import {
    TransactionLineItemVersionStateFromJSON,
    TransactionLineItemVersionStateFromJSONTyped,
    TransactionLineItemVersionStateToJSON,
    TransactionLineItemVersionStateToJSONTyped,
} from './TransactionLineItemVersionState';
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
    LineItemToJSONTyped,
} from './LineItem';

/**
 * 
 * @export
 * @interface TransactionLineItemVersion
 */
export interface TransactionLineItemVersion {
    /**
     * The total amount of the updated line items, including taxes.
     * @type {number}
     * @memberof TransactionLineItemVersion
     */
    readonly amount?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof TransactionLineItemVersion
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The date and time when the processing of the line item version was started.
     * @type {Date}
     * @memberof TransactionLineItemVersion
     */
    readonly processingOn?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof TransactionLineItemVersion
     */
    readonly externalId?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof TransactionLineItemVersion
     */
    readonly language?: string;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof TransactionLineItemVersion
     */
    readonly spaceViewId?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof TransactionLineItemVersion
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TransactionLineItemVersion
     */
    readonly version?: number;
    /**
     * The labels providing additional information about the object.
     * @type {Set<Label>}
     * @memberof TransactionLineItemVersion
     */
    readonly labels?: Set<Label>;
    /**
     * The line items that replace the original line items in the transaction.
     * @type {Array<LineItem>}
     * @memberof TransactionLineItemVersion
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TransactionLineItemVersion
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time by when the line item version is expected to be processed.
     * @type {Date}
     * @memberof TransactionLineItemVersion
     */
    readonly timeoutOn?: Date;
    /**
     * The ID of the user the line item version was created by.
     * @type {number}
     * @memberof TransactionLineItemVersion
     */
    readonly createdBy?: number;
    /**
     * The date and time when the next update of the line item version's state is planned.
     * @type {Date}
     * @memberof TransactionLineItemVersion
     */
    readonly nextUpdateOn?: Date;
    /**
     * 
     * @type {FailureReason}
     * @memberof TransactionLineItemVersion
     */
    failureReason?: FailureReason;
    /**
     * The date and time when the line item version was processed successfully.
     * @type {Date}
     * @memberof TransactionLineItemVersion
     */
    readonly succeededOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TransactionLineItemVersion
     */
    readonly id?: number;
    /**
     * 
     * @type {TransactionLineItemVersionState}
     * @memberof TransactionLineItemVersion
     */
    state?: TransactionLineItemVersionState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof TransactionLineItemVersion
     */
    readonly linkedTransaction?: number;
    /**
     * The portion of the total amount that corresponds to taxes.
     * @type {number}
     * @memberof TransactionLineItemVersion
     */
    readonly taxAmount?: number;
    /**
     * The date and time when the processing of the line item version failed.
     * @type {Date}
     * @memberof TransactionLineItemVersion
     */
    readonly failedOn?: Date;
    /**
     * 
     * @type {Transaction}
     * @memberof TransactionLineItemVersion
     */
    transaction?: Transaction;
}



/**
 * Check if a given object implements the TransactionLineItemVersion interface.
 */
export function instanceOfTransactionLineItemVersion(value: object): value is TransactionLineItemVersion {
    return true;
}

export function TransactionLineItemVersionFromJSON(json: any): TransactionLineItemVersion {
    return TransactionLineItemVersionFromJSONTyped(json, false);
}

export function TransactionLineItemVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionLineItemVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'processingOn': json['processingOn'] == null ? undefined : (new Date(json['processingOn'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'language': json['language'] == null ? undefined : json['language'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'labels': json['labels'] == null ? undefined : (new Set((json['labels'] as Array<any>).map(LabelFromJSON))),
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'timeoutOn': json['timeoutOn'] == null ? undefined : (new Date(json['timeoutOn'])),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'nextUpdateOn': json['nextUpdateOn'] == null ? undefined : (new Date(json['nextUpdateOn'])),
        'failureReason': json['failureReason'] == null ? undefined : FailureReasonFromJSON(json['failureReason']),
        'succeededOn': json['succeededOn'] == null ? undefined : (new Date(json['succeededOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : TransactionLineItemVersionStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'taxAmount': json['taxAmount'] == null ? undefined : json['taxAmount'],
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
    };
}

export function TransactionLineItemVersionToJSON(json: any): TransactionLineItemVersion {
    return TransactionLineItemVersionToJSONTyped(json, false);
}

export function TransactionLineItemVersionToJSONTyped(value?: Omit<TransactionLineItemVersion, 'amount'|'plannedPurgeDate'|'processingOn'|'externalId'|'language'|'spaceViewId'|'createdOn'|'version'|'labels'|'lineItems'|'linkedSpaceId'|'timeoutOn'|'createdBy'|'nextUpdateOn'|'succeededOn'|'id'|'linkedTransaction'|'taxAmount'|'failedOn'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'failureReason': FailureReasonToJSON(value['failureReason']),
        'state': TransactionLineItemVersionStateToJSON(value['state']),
        'transaction': TransactionToJSON(value['transaction']),
    };
}

