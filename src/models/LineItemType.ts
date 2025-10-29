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

/**
 * 
 * @export
 */
export const LineItemType = {
    Shipping: 'SHIPPING',
    Discount: 'DISCOUNT',
    Fee: 'FEE',
    Product: 'PRODUCT',
    Tip: 'TIP'
} as const;
export type LineItemType = typeof LineItemType[keyof typeof LineItemType];


export function instanceOfLineItemType(value: any): boolean {
    for (const key in LineItemType) {
        if (Object.prototype.hasOwnProperty.call(LineItemType, key)) {
            if (LineItemType[key as keyof typeof LineItemType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function LineItemTypeFromJSON(json: any): LineItemType {
    return LineItemTypeFromJSONTyped(json, false);
}

export function LineItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemType {
    return json as LineItemType;
}

export function LineItemTypeToJSON(value?: LineItemType | null): any {
    return value as any;
}

