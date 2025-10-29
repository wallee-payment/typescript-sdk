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
 * @interface DebtCollectionReceipt
 */
export interface DebtCollectionReceipt {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DebtCollectionReceipt
     */
    readonly linkedSpaceId?: number;
    /**
     * The amount that was collected.
     * @type {number}
     * @memberof DebtCollectionReceipt
     */
    readonly amount?: number;
    /**
     * The ID of the user the receipt was created by.
     * @type {number}
     * @memberof DebtCollectionReceipt
     */
    readonly createdBy?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DebtCollectionReceipt
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies the receipt.Subsequent requests with the same external ID do not lead to the creation of another receipt, but return the original one.
     * @type {string}
     * @memberof DebtCollectionReceipt
     */
    readonly externalId?: string;
    /**
     * The debt collection case that this document belongs to.
     * @type {number}
     * @memberof DebtCollectionReceipt
     */
    readonly debtCollectionCase?: number;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DebtCollectionReceipt
     */
    readonly id?: number;
    /**
     * The source stating where the receipt is coming from.
     * @type {number}
     * @memberof DebtCollectionReceipt
     */
    readonly source?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof DebtCollectionReceipt
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DebtCollectionReceipt
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the DebtCollectionReceipt interface.
 */
export function instanceOfDebtCollectionReceipt(value: object): value is DebtCollectionReceipt {
    return true;
}

export function DebtCollectionReceiptFromJSON(json: any): DebtCollectionReceipt {
    return DebtCollectionReceiptFromJSONTyped(json, false);
}

export function DebtCollectionReceiptFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectionReceipt {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'debtCollectionCase': json['debtCollectionCase'] == null ? undefined : json['debtCollectionCase'],
        'id': json['id'] == null ? undefined : json['id'],
        'source': json['source'] == null ? undefined : json['source'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function DebtCollectionReceiptToJSON(value?: Omit<DebtCollectionReceipt, 'linkedSpaceId'|'amount'|'createdBy'|'plannedPurgeDate'|'externalId'|'debtCollectionCase'|'id'|'source'|'createdOn'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

