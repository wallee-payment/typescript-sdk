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
 * @interface TaxCreate
 */
export interface TaxCreate {
    /**
     * The tax rate to be applied.
     * @type {number}
     * @memberof TaxCreate
     */
    rate: number;
    /**
     * The name of the tax.
     * @type {string}
     * @memberof TaxCreate
     */
    title: string;
}

/**
 * Check if a given object implements the TaxCreate interface.
 */
export function instanceOfTaxCreate(value: object): value is TaxCreate {
    if (!('rate' in value) || value['rate'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    return true;
}

export function TaxCreateFromJSON(json: any): TaxCreate {
    return TaxCreateFromJSONTyped(json, false);
}

export function TaxCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'rate': json['rate'],
        'title': json['title'],
    };
}

export function TaxCreateToJSON(value?: TaxCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'rate': value['rate'],
        'title': value['title'],
    };
}

