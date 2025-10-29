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
 * @interface LineItemReduction
 */
export interface LineItemReduction {
    /**
     * The quantity removed or reduced from the line item. This value reflects the decrease in the item count due to the reduction.
     * @type {number}
     * @memberof LineItemReduction
     */
    readonly quantityReduction?: number;
    /**
     * The monetary amount by which the line item's unit price is discounted. This reduction adjusts the price without altering the quantity.
     * @type {number}
     * @memberof LineItemReduction
     */
    readonly unitPriceReduction?: number;
    /**
     * The unique identifier of the line item to which the reduction is applied. This ID ensures the reduction is accurately associated with the correct item.
     * @type {string}
     * @memberof LineItemReduction
     */
    readonly lineItemUniqueId?: string;
}

/**
 * Check if a given object implements the LineItemReduction interface.
 */
export function instanceOfLineItemReduction(value: object): value is LineItemReduction {
    return true;
}

export function LineItemReductionFromJSON(json: any): LineItemReduction {
    return LineItemReductionFromJSONTyped(json, false);
}

export function LineItemReductionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemReduction {
    if (json == null) {
        return json;
    }
    return {
        
        'quantityReduction': json['quantityReduction'] == null ? undefined : json['quantityReduction'],
        'unitPriceReduction': json['unitPriceReduction'] == null ? undefined : json['unitPriceReduction'],
        'lineItemUniqueId': json['lineItemUniqueId'] == null ? undefined : json['lineItemUniqueId'],
    };
}

export function LineItemReductionToJSON(value?: Omit<LineItemReduction, 'quantityReduction'|'unitPriceReduction'|'lineItemUniqueId'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

