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
import type { DunningFlow } from './DunningFlow';
import {
    DunningFlowFromJSON,
    DunningFlowFromJSONTyped,
    DunningFlowToJSON,
    DunningFlowToJSONTyped,
} from './DunningFlow';
import type { DunningCaseState } from './DunningCaseState';
import {
    DunningCaseStateFromJSON,
    DunningCaseStateFromJSONTyped,
    DunningCaseStateToJSON,
    DunningCaseStateToJSONTyped,
} from './DunningCaseState';
import type { TransactionInvoice } from './TransactionInvoice';
import {
    TransactionInvoiceFromJSON,
    TransactionInvoiceFromJSONTyped,
    TransactionInvoiceToJSON,
    TransactionInvoiceToJSONTyped,
} from './TransactionInvoice';

/**
 * 
 * @export
 * @interface DunningCase
 */
export interface DunningCase {
    /**
     * 
     * @type {Date}
     * @memberof DunningCase
     */
    readonly canceledOn?: Date;
    /**
     * 
     * @type {Date}
     * @memberof DunningCase
     */
    readonly derecognizedOn?: Date;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DunningCase
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof DunningCase
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DunningCase
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DunningCase
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {TransactionInvoice}
     * @memberof DunningCase
     */
    initialInvoice?: TransactionInvoice;
    /**
     * 
     * @type {Date}
     * @memberof DunningCase
     */
    readonly succeededOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DunningCase
     */
    readonly id?: number;
    /**
     * 
     * @type {DunningCaseState}
     * @memberof DunningCase
     */
    state?: DunningCaseState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof DunningCase
     */
    readonly linkedTransaction?: number;
    /**
     * 
     * @type {Date}
     * @memberof DunningCase
     */
    readonly failedOn?: Date;
    /**
     * 
     * @type {DunningFlow}
     * @memberof DunningCase
     */
    flow?: DunningFlow;
}



/**
 * Check if a given object implements the DunningCase interface.
 */
export function instanceOfDunningCase(value: object): value is DunningCase {
    return true;
}

export function DunningCaseFromJSON(json: any): DunningCase {
    return DunningCaseFromJSONTyped(json, false);
}

export function DunningCaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DunningCase {
    if (json == null) {
        return json;
    }
    return {
        
        'canceledOn': json['canceledOn'] == null ? undefined : (new Date(json['canceledOn'])),
        'derecognizedOn': json['derecognizedOn'] == null ? undefined : (new Date(json['derecognizedOn'])),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'initialInvoice': json['initialInvoice'] == null ? undefined : TransactionInvoiceFromJSON(json['initialInvoice']),
        'succeededOn': json['succeededOn'] == null ? undefined : (new Date(json['succeededOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : DunningCaseStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'flow': json['flow'] == null ? undefined : DunningFlowFromJSON(json['flow']),
    };
}

export function DunningCaseToJSON(json: any): DunningCase {
    return DunningCaseToJSONTyped(json, false);
}

export function DunningCaseToJSONTyped(value?: Omit<DunningCase, 'canceledOn'|'derecognizedOn'|'plannedPurgeDate'|'createdOn'|'version'|'linkedSpaceId'|'succeededOn'|'id'|'linkedTransaction'|'failedOn'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'initialInvoice': TransactionInvoiceToJSON(value['initialInvoice']),
        'state': DunningCaseStateToJSON(value['state']),
        'flow': DunningFlowToJSON(value['flow']),
    };
}

