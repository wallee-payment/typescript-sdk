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
 * @interface DunningConditionType
 */
export interface DunningConditionType {
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof DunningConditionType
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof DunningConditionType
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DunningConditionType
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the DunningConditionType interface.
 */
export function instanceOfDunningConditionType(value: object): value is DunningConditionType {
    return true;
}

export function DunningConditionTypeFromJSON(json: any): DunningConditionType {
    return DunningConditionTypeFromJSONTyped(json, false);
}

export function DunningConditionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DunningConditionType {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function DunningConditionTypeToJSON(value?: Omit<DunningConditionType, 'name'|'description'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

