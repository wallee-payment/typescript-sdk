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
 * @interface LineItemAttribute
 */
export interface LineItemAttribute {
    /**
     * The label describing the line item attribute.
     * @type {string}
     * @memberof LineItemAttribute
     */
    readonly label?: string;
    /**
     * The value of the line item attribute.
     * @type {string}
     * @memberof LineItemAttribute
     */
    readonly value?: string;
}

/**
 * Check if a given object implements the LineItemAttribute interface.
 */
export function instanceOfLineItemAttribute(value: object): value is LineItemAttribute {
    return true;
}

export function LineItemAttributeFromJSON(json: any): LineItemAttribute {
    return LineItemAttributeFromJSONTyped(json, false);
}

export function LineItemAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItemAttribute {
    if (json == null) {
        return json;
    }
    return {
        
        'label': json['label'] == null ? undefined : json['label'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function LineItemAttributeToJSON(json: any): LineItemAttribute {
    return LineItemAttributeToJSONTyped(json, false);
}

export function LineItemAttributeToJSONTyped(value?: Omit<LineItemAttribute, 'label'|'value'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

