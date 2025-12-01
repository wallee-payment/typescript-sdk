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
 * @interface LineItemAttributeCreate
 */
export interface LineItemAttributeCreate {
    /**
     * The label describing the line item attribute.
     * @type {string}
     * @memberof LineItemAttributeCreate
     */
    label: string;
    /**
     * The value of the line item attribute.
     * @type {string}
     * @memberof LineItemAttributeCreate
     */
    value: string;
}

/**
 * Check if a given object implements the LineItemAttributeCreate interface.
 */
export function instanceOfLineItemAttributeCreate(value: object): value is LineItemAttributeCreate {
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function LineItemAttributeCreateFromJSON(json: any): LineItemAttributeCreate {
    return LineItemAttributeCreateFromJSONTyped(json, false);
}

export function LineItemAttributeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemAttributeCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'label': json['label'],
        'value': json['value'],
    };
}

export function LineItemAttributeCreateToJSON(json: any): LineItemAttributeCreate {
    return LineItemAttributeCreateToJSONTyped(json, false);
}

export function LineItemAttributeCreateToJSONTyped(value?: LineItemAttributeCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'label': value['label'],
        'value': value['value'],
    };
}

