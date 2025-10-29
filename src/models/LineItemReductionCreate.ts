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
 * @interface LineItemReductionCreate
 */
export interface LineItemReductionCreate {
    /**
     * The quantity removed or reduced from the line item. This value reflects the decrease in the item count due to the reduction.
     * @type {number}
     * @memberof LineItemReductionCreate
     */
    quantityReduction: number;
    /**
     * The monetary amount by which the line item's unit price is discounted. This reduction adjusts the price without altering the quantity.
     * @type {number}
     * @memberof LineItemReductionCreate
     */
    unitPriceReduction: number;
    /**
     * The unique identifier of the line item to which the reduction is applied. This ID ensures the reduction is accurately associated with the correct item.
     * @type {string}
     * @memberof LineItemReductionCreate
     */
    lineItemUniqueId: string;
}

/**
 * Check if a given object implements the LineItemReductionCreate interface.
 */
export function instanceOfLineItemReductionCreate(value: object): value is LineItemReductionCreate {
    if (!('quantityReduction' in value) || value['quantityReduction'] === undefined) return false;
    if (!('unitPriceReduction' in value) || value['unitPriceReduction'] === undefined) return false;
    if (!('lineItemUniqueId' in value) || value['lineItemUniqueId'] === undefined) return false;
    return true;
}

export function LineItemReductionCreateFromJSON(json: any): LineItemReductionCreate {
    return LineItemReductionCreateFromJSONTyped(json, false);
}

export function LineItemReductionCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemReductionCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'quantityReduction': json['quantityReduction'],
        'unitPriceReduction': json['unitPriceReduction'],
        'lineItemUniqueId': json['lineItemUniqueId'],
    };
}

export function LineItemReductionCreateToJSON(value?: LineItemReductionCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'quantityReduction': value['quantityReduction'],
        'unitPriceReduction': value['unitPriceReduction'],
        'lineItemUniqueId': value['lineItemUniqueId'],
    };
}

