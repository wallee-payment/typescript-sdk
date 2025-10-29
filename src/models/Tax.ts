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
 * @interface Tax
 */
export interface Tax {
    /**
     * The tax rate to be applied.
     * @type {number}
     * @memberof Tax
     */
    readonly rate?: number;
    /**
     * The name of the tax.
     * @type {string}
     * @memberof Tax
     */
    readonly title?: string;
}

/**
 * Check if a given object implements the Tax interface.
 */
export function instanceOfTax(value: object): value is Tax {
    return true;
}

export function TaxFromJSON(json: any): Tax {
    return TaxFromJSONTyped(json, false);
}

export function TaxFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tax {
    if (json == null) {
        return json;
    }
    return {
        
        'rate': json['rate'] == null ? undefined : json['rate'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function TaxToJSON(value?: Omit<Tax, 'rate'|'title'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

