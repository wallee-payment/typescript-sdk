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
import type { ProductFeeType } from './ProductFeeType';
import {
    ProductFeeTypeFromJSON,
    ProductFeeTypeFromJSONTyped,
    ProductFeeTypeToJSON,
    ProductFeeTypeToJSONTyped,
} from './ProductFeeType';
import type { SubscriptionLedgerEntryState } from './SubscriptionLedgerEntryState';
import {
    SubscriptionLedgerEntryStateFromJSON,
    SubscriptionLedgerEntryStateFromJSONTyped,
    SubscriptionLedgerEntryStateToJSON,
    SubscriptionLedgerEntryStateToJSONTyped,
} from './SubscriptionLedgerEntryState';
import type { Tax } from './Tax';
import {
    TaxFromJSON,
    TaxFromJSONTyped,
    TaxToJSON,
    TaxToJSONTyped,
} from './Tax';

/**
 * The subscription ledger entry represents a single change on the subscription balance.
 * @export
 * @interface SubscriptionLedgerEntry
 */
export interface SubscriptionLedgerEntry {
    /**
     * The number of items that were consumed.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly quantity?: number;
    /**
     * The leger entry's amount with discounts applied, excluding taxes.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly amountExcludingTax?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionLedgerEntry
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The subscription version that the ledger entry belongs to.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly subscriptionVersion?: number;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriptionLedgerEntry
     */
    readonly externalId?: string;
    /**
     * A set of tax lines, each of which specifies a tax applied to the ledger entry.
     * @type {Set<Tax>}
     * @memberof SubscriptionLedgerEntry
     */
    readonly taxes?: Set<Tax>;
    /**
     * 
     * @type {ProductFeeType}
     * @memberof SubscriptionLedgerEntry
     */
    feeType?: ProductFeeType;
    /**
     * The title that indicates what the ledger entry is about.
     * @type {string}
     * @memberof SubscriptionLedgerEntry
     */
    readonly title?: string;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof SubscriptionLedgerEntry
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly version?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionLedgerEntry
     */
    readonly componentReferenceName?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly subscriptionMetricId?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionLedgerEntry
     */
    readonly proRataCalculated?: boolean;
    /**
     * The ID of the user the ledger entry was created by.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionLedgerEntry
     */
    readonly componentReferenceSku?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly id?: number;
    /**
     * 
     * @type {SubscriptionLedgerEntryState}
     * @memberof SubscriptionLedgerEntry
     */
    state?: SubscriptionLedgerEntryState;
    /**
     * The leger entry's amount with discounts applied, including taxes.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly amountIncludingTax?: number;
    /**
     * The discount allocated to the ledger entry, including taxes.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly discountIncludingTax?: number;
    /**
     * The sum of all taxes applied to the ledger entry.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly taxAmount?: number;
    /**
     * The total tax rate applied to the ledger entry, calculated from the rates of all tax lines.
     * @type {number}
     * @memberof SubscriptionLedgerEntry
     */
    readonly aggregatedTaxRate?: number;
}



/**
 * Check if a given object implements the SubscriptionLedgerEntry interface.
 */
export function instanceOfSubscriptionLedgerEntry(value: object): value is SubscriptionLedgerEntry {
    return true;
}

export function SubscriptionLedgerEntryFromJSON(json: any): SubscriptionLedgerEntry {
    return SubscriptionLedgerEntryFromJSONTyped(json, false);
}

export function SubscriptionLedgerEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLedgerEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'amountExcludingTax': json['amountExcludingTax'] == null ? undefined : json['amountExcludingTax'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'subscriptionVersion': json['subscriptionVersion'] == null ? undefined : json['subscriptionVersion'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'taxes': json['taxes'] == null ? undefined : (new Set((json['taxes'] as Array<any>).map(TaxFromJSON))),
        'feeType': json['feeType'] == null ? undefined : ProductFeeTypeFromJSON(json['feeType']),
        'title': json['title'] == null ? undefined : json['title'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'componentReferenceName': json['componentReferenceName'] == null ? undefined : json['componentReferenceName'],
        'subscriptionMetricId': json['subscriptionMetricId'] == null ? undefined : json['subscriptionMetricId'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'proRataCalculated': json['proRataCalculated'] == null ? undefined : json['proRataCalculated'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'componentReferenceSku': json['componentReferenceSku'] == null ? undefined : json['componentReferenceSku'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : SubscriptionLedgerEntryStateFromJSON(json['state']),
        'amountIncludingTax': json['amountIncludingTax'] == null ? undefined : json['amountIncludingTax'],
        'discountIncludingTax': json['discountIncludingTax'] == null ? undefined : json['discountIncludingTax'],
        'taxAmount': json['taxAmount'] == null ? undefined : json['taxAmount'],
        'aggregatedTaxRate': json['aggregatedTaxRate'] == null ? undefined : json['aggregatedTaxRate'],
    };
}

export function SubscriptionLedgerEntryToJSON(json: any): SubscriptionLedgerEntry {
    return SubscriptionLedgerEntryToJSONTyped(json, false);
}

export function SubscriptionLedgerEntryToJSONTyped(value?: Omit<SubscriptionLedgerEntry, 'quantity'|'amountExcludingTax'|'plannedPurgeDate'|'subscriptionVersion'|'externalId'|'taxes'|'title'|'createdOn'|'version'|'componentReferenceName'|'subscriptionMetricId'|'linkedSpaceId'|'proRataCalculated'|'createdBy'|'componentReferenceSku'|'id'|'amountIncludingTax'|'discountIncludingTax'|'taxAmount'|'aggregatedTaxRate'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'feeType': ProductFeeTypeToJSON(value['feeType']),
        'state': SubscriptionLedgerEntryStateToJSON(value['state']),
    };
}

