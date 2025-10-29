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
import type { LineItemAttributeCreate } from './LineItemAttributeCreate';
import {
    LineItemAttributeCreateFromJSON,
    LineItemAttributeCreateFromJSONTyped,
    LineItemAttributeCreateToJSON,
} from './LineItemAttributeCreate';
import type { LineItemType } from './LineItemType';
import {
    LineItemTypeFromJSON,
    LineItemTypeFromJSONTyped,
    LineItemTypeToJSON,
} from './LineItemType';
import type { TaxCreate } from './TaxCreate';
import {
    TaxCreateFromJSON,
    TaxCreateFromJSONTyped,
    TaxCreateToJSON,
} from './TaxCreate';

/**
 * 
 * @export
 * @interface LineItemCreate
 */
export interface LineItemCreate {
    /**
     * Whether the item required shipping.
     * @type {boolean}
     * @memberof LineItemCreate
     */
    shippingRequired?: boolean;
    /**
     * The number of items that were purchased.
     * @type {number}
     * @memberof LineItemCreate
     */
    quantity: number;
    /**
     * The name of the product, ideally in the customer's language.
     * @type {string}
     * @memberof LineItemCreate
     */
    name: string;
    /**
     * A set of tax lines, each of which specifies a tax applied to the item.
     * @type {Set<TaxCreate>}
     * @memberof LineItemCreate
     */
    taxes?: Set<TaxCreate>;
    /**
     * A map of custom information for the item.
     * @type {{ [key: string]: LineItemAttributeCreate; }}
     * @memberof LineItemCreate
     */
    attributes?: { [key: string]: LineItemAttributeCreate; };
    /**
     * The line item price with discounts applied, including taxes.
     * @type {number}
     * @memberof LineItemCreate
     */
    amountIncludingTax: number;
    /**
     * The discount allocated to the item, including taxes.
     * @type {number}
     * @memberof LineItemCreate
     */
    discountIncludingTax?: number;
    /**
     * The SKU (stock-keeping unit) of the product.
     * @type {string}
     * @memberof LineItemCreate
     */
    sku?: string;
    /**
     * 
     * @type {LineItemType}
     * @memberof LineItemCreate
     */
    type: LineItemType;
    /**
     * The unique identifier of the line item within the set of line items.
     * @type {string}
     * @memberof LineItemCreate
     */
    uniqueId: string;
}

/**
 * Check if a given object implements the LineItemCreate interface.
 */
export function instanceOfLineItemCreate(value: object): value is LineItemCreate {
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('amountIncludingTax' in value) || value['amountIncludingTax'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('uniqueId' in value) || value['uniqueId'] === undefined) return false;
    return true;
}

export function LineItemCreateFromJSON(json: any): LineItemCreate {
    return LineItemCreateFromJSONTyped(json, false);
}

export function LineItemCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'shippingRequired': json['shippingRequired'] == null ? undefined : json['shippingRequired'],
        'quantity': json['quantity'],
        'name': json['name'],
        'taxes': json['taxes'] == null ? undefined : (new Set((json['taxes'] as Array<any>).map(TaxCreateFromJSON))),
        'attributes': json['attributes'] == null ? undefined : (mapValues(json['attributes'], LineItemAttributeCreateFromJSON)),
        'amountIncludingTax': json['amountIncludingTax'],
        'discountIncludingTax': json['discountIncludingTax'] == null ? undefined : json['discountIncludingTax'],
        'sku': json['sku'] == null ? undefined : json['sku'],
        'type': LineItemTypeFromJSON(json['type']),
        'uniqueId': json['uniqueId'],
    };
}

export function LineItemCreateToJSON(value?: LineItemCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'shippingRequired': value['shippingRequired'],
        'quantity': value['quantity'],
        'name': value['name'],
        'taxes': value['taxes'] == null ? undefined : (Array.from(value['taxes'] as Set<any>).map(TaxCreateToJSON)),
        'attributes': value['attributes'] == null ? undefined : (mapValues(value['attributes'], LineItemAttributeCreateToJSON)),
        'amountIncludingTax': value['amountIncludingTax'],
        'discountIncludingTax': value['discountIncludingTax'],
        'sku': value['sku'],
        'type': LineItemTypeToJSON(value['type']),
        'uniqueId': value['uniqueId'],
    };
}

