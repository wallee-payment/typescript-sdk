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
 * @interface StaticValue
 */
export interface StaticValue {
    /**
     * The features that this static value belongs to.
     * @type {Array<number>}
     * @memberof StaticValue
     */
    readonly features?: Array<number>;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof StaticValue
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof StaticValue
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof StaticValue
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the StaticValue interface.
 */
export function instanceOfStaticValue(value: object): value is StaticValue {
    return true;
}

export function StaticValueFromJSON(json: any): StaticValue {
    return StaticValueFromJSONTyped(json, false);
}

export function StaticValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaticValue {
    if (json == null) {
        return json;
    }
    return {
        
        'features': json['features'] == null ? undefined : json['features'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function StaticValueToJSON(value?: Omit<StaticValue, 'features'|'name'|'description'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

