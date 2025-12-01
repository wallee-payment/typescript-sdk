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
import type { TaxCreate } from './TaxCreate';
import {
    TaxCreateFromJSON,
    TaxCreateFromJSONTyped,
    TaxCreateToJSON,
    TaxCreateToJSONTyped,
} from './TaxCreate';

/**
 * The subscription ledger entry represents a single change on the subscription balance.
 * @export
 * @interface SubscriptionLedgerEntryCreate
 */
export interface SubscriptionLedgerEntryCreate {
    /**
     * The number of items that were consumed.
     * @type {number}
     * @memberof SubscriptionLedgerEntryCreate
     */
    quantity: number;
    /**
     * The subscription version that the ledger entry belongs to.
     * @type {number}
     * @memberof SubscriptionLedgerEntryCreate
     */
    subscriptionVersion: number;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof SubscriptionLedgerEntryCreate
     */
    externalId: string;
    /**
     * A set of tax lines, each of which specifies a tax applied to the ledger entry.
     * @type {Set<TaxCreate>}
     * @memberof SubscriptionLedgerEntryCreate
     */
    taxes?: Set<TaxCreate>;
    /**
     * The leger entry's amount with discounts applied, including taxes.
     * @type {number}
     * @memberof SubscriptionLedgerEntryCreate
     */
    amountIncludingTax: number;
    /**
     * The title that indicates what the ledger entry is about.
     * @type {string}
     * @memberof SubscriptionLedgerEntryCreate
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionLedgerEntryCreate
     */
    componentReferenceName?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionLedgerEntryCreate
     */
    subscriptionMetricId?: number;
}

/**
 * Check if a given object implements the SubscriptionLedgerEntryCreate interface.
 */
export function instanceOfSubscriptionLedgerEntryCreate(value: object): value is SubscriptionLedgerEntryCreate {
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('subscriptionVersion' in value) || value['subscriptionVersion'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('amountIncludingTax' in value) || value['amountIncludingTax'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    return true;
}

export function SubscriptionLedgerEntryCreateFromJSON(json: any): SubscriptionLedgerEntryCreate {
    return SubscriptionLedgerEntryCreateFromJSONTyped(json, false);
}

export function SubscriptionLedgerEntryCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLedgerEntryCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'quantity': json['quantity'],
        'subscriptionVersion': json['subscriptionVersion'],
        'externalId': json['externalId'],
        'taxes': json['taxes'] == null ? undefined : (new Set((json['taxes'] as Array<any>).map(TaxCreateFromJSON))),
        'amountIncludingTax': json['amountIncludingTax'],
        'title': json['title'],
        'componentReferenceName': json['componentReferenceName'] == null ? undefined : json['componentReferenceName'],
        'subscriptionMetricId': json['subscriptionMetricId'] == null ? undefined : json['subscriptionMetricId'],
    };
}

export function SubscriptionLedgerEntryCreateToJSON(json: any): SubscriptionLedgerEntryCreate {
    return SubscriptionLedgerEntryCreateToJSONTyped(json, false);
}

export function SubscriptionLedgerEntryCreateToJSONTyped(value?: SubscriptionLedgerEntryCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'quantity': value['quantity'],
        'subscriptionVersion': value['subscriptionVersion'],
        'externalId': value['externalId'],
        'taxes': value['taxes'] == null ? undefined : (Array.from(value['taxes'] as Set<any>).map(TaxCreateToJSON)),
        'amountIncludingTax': value['amountIncludingTax'],
        'title': value['title'],
        'componentReferenceName': value['componentReferenceName'],
        'subscriptionMetricId': value['subscriptionMetricId'],
    };
}

