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
import type { LineItemType } from './LineItemType';
import {
    LineItemTypeFromJSON,
    LineItemTypeFromJSONTyped,
    LineItemTypeToJSON,
} from './LineItemType';
import type { LineItemAttribute } from './LineItemAttribute';
import {
    LineItemAttributeFromJSON,
    LineItemAttributeFromJSONTyped,
    LineItemAttributeToJSON,
} from './LineItemAttribute';
import type { Tax } from './Tax';
import {
    TaxFromJSON,
    TaxFromJSONTyped,
    TaxToJSON,
} from './Tax';

/**
 * 
 * @export
 * @interface LineItem
 */
export interface LineItem {
    /**
     * The calculated tax amount per unit.
     * @type {number}
     * @memberof LineItem
     */
    readonly taxAmountPerUnit?: number;
    /**
     * The line item price with discounts not applied, excluding taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly undiscountedAmountExcludingTax?: number;
    /**
     * The number of items that were purchased.
     * @type {number}
     * @memberof LineItem
     */
    readonly quantity?: number;
    /**
     * The calculated price per unit with discounts not applied, including taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly undiscountedUnitPriceIncludingTax?: number;
    /**
     * The line item price with discounts applied, excluding taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly amountExcludingTax?: number;
    /**
     * The line item price with discounts not applied, including taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly undiscountedAmountIncludingTax?: number;
    /**
     * A set of tax lines, each of which specifies a tax applied to the item.
     * @type {Set<Tax>}
     * @memberof LineItem
     */
    readonly taxes?: Set<Tax>;
    /**
     * 
     * @type {LineItemType}
     * @memberof LineItem
     */
    type?: LineItemType;
    /**
     * The calculated price per unit with discounts applied, including taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly unitPriceIncludingTax?: number;
    /**
     * The discount allocated to the item, excluding taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly discountExcludingTax?: number;
    /**
     * Whether the item required shipping.
     * @type {boolean}
     * @memberof LineItem
     */
    readonly shippingRequired?: boolean;
    /**
     * The calculated price per unit with discounts applied, excluding taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly unitPriceExcludingTax?: number;
    /**
     * The name of the product, ideally in the customer's language.
     * @type {string}
     * @memberof LineItem
     */
    readonly name?: string;
    /**
     * A map of custom information for the item.
     * @type {{ [key: string]: LineItemAttribute; }}
     * @memberof LineItem
     */
    readonly attributes?: { [key: string]: LineItemAttribute; };
    /**
     * The calculated price per unit with discounts not applied, excluding taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly undiscountedUnitPriceExcludingTax?: number;
    /**
     * The line item price with discounts applied, including taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly amountIncludingTax?: number;
    /**
     * The discount allocated to the item, including taxes.
     * @type {number}
     * @memberof LineItem
     */
    readonly discountIncludingTax?: number;
    /**
     * The SKU (stock-keeping unit) of the product.
     * @type {string}
     * @memberof LineItem
     */
    readonly sku?: string;
    /**
     * The sum of all taxes applied to the item.
     * @type {number}
     * @memberof LineItem
     */
    readonly taxAmount?: number;
    /**
     * The total tax rate applied to the item, calculated from the rates of all tax lines.
     * @type {number}
     * @memberof LineItem
     */
    readonly aggregatedTaxRate?: number;
    /**
     * The unique identifier of the line item within the set of line items.
     * @type {string}
     * @memberof LineItem
     */
    readonly uniqueId?: string;
}

/**
 * Check if a given object implements the LineItem interface.
 */
export function instanceOfLineItem(value: object): value is LineItem {
    return true;
}

export function LineItemFromJSON(json: any): LineItem {
    return LineItemFromJSONTyped(json, false);
}

export function LineItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItem {
    if (json == null) {
        return json;
    }
    return {
        
        'taxAmountPerUnit': json['taxAmountPerUnit'] == null ? undefined : json['taxAmountPerUnit'],
        'undiscountedAmountExcludingTax': json['undiscountedAmountExcludingTax'] == null ? undefined : json['undiscountedAmountExcludingTax'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'undiscountedUnitPriceIncludingTax': json['undiscountedUnitPriceIncludingTax'] == null ? undefined : json['undiscountedUnitPriceIncludingTax'],
        'amountExcludingTax': json['amountExcludingTax'] == null ? undefined : json['amountExcludingTax'],
        'undiscountedAmountIncludingTax': json['undiscountedAmountIncludingTax'] == null ? undefined : json['undiscountedAmountIncludingTax'],
        'taxes': json['taxes'] == null ? undefined : (new Set((json['taxes'] as Array<any>).map(TaxFromJSON))),
        'type': json['type'] == null ? undefined : LineItemTypeFromJSON(json['type']),
        'unitPriceIncludingTax': json['unitPriceIncludingTax'] == null ? undefined : json['unitPriceIncludingTax'],
        'discountExcludingTax': json['discountExcludingTax'] == null ? undefined : json['discountExcludingTax'],
        'shippingRequired': json['shippingRequired'] == null ? undefined : json['shippingRequired'],
        'unitPriceExcludingTax': json['unitPriceExcludingTax'] == null ? undefined : json['unitPriceExcludingTax'],
        'name': json['name'] == null ? undefined : json['name'],
        'attributes': json['attributes'] == null ? undefined : (mapValues(json['attributes'], LineItemAttributeFromJSON)),
        'undiscountedUnitPriceExcludingTax': json['undiscountedUnitPriceExcludingTax'] == null ? undefined : json['undiscountedUnitPriceExcludingTax'],
        'amountIncludingTax': json['amountIncludingTax'] == null ? undefined : json['amountIncludingTax'],
        'discountIncludingTax': json['discountIncludingTax'] == null ? undefined : json['discountIncludingTax'],
        'sku': json['sku'] == null ? undefined : json['sku'],
        'taxAmount': json['taxAmount'] == null ? undefined : json['taxAmount'],
        'aggregatedTaxRate': json['aggregatedTaxRate'] == null ? undefined : json['aggregatedTaxRate'],
        'uniqueId': json['uniqueId'] == null ? undefined : json['uniqueId'],
    };
}

export function LineItemToJSON(value?: Omit<LineItem, 'taxAmountPerUnit'|'undiscountedAmountExcludingTax'|'quantity'|'undiscountedUnitPriceIncludingTax'|'amountExcludingTax'|'undiscountedAmountIncludingTax'|'taxes'|'unitPriceIncludingTax'|'discountExcludingTax'|'shippingRequired'|'unitPriceExcludingTax'|'name'|'attributes'|'undiscountedUnitPriceExcludingTax'|'amountIncludingTax'|'discountIncludingTax'|'sku'|'taxAmount'|'aggregatedTaxRate'|'uniqueId'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': LineItemTypeToJSON(value['type']),
    };
}

