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
 * The debt collector connects to an external service to process debt collection cases and directs the debt collection process.
 * @export
 * @interface DebtCollector
 */
export interface DebtCollector {
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof DebtCollector
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof DebtCollector
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DebtCollector
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the DebtCollector interface.
 */
export function instanceOfDebtCollector(value: object): value is DebtCollector {
    return true;
}

export function DebtCollectorFromJSON(json: any): DebtCollector {
    return DebtCollectorFromJSONTyped(json, false);
}

export function DebtCollectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollector {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function DebtCollectorToJSON(value?: Omit<DebtCollector, 'name'|'description'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

