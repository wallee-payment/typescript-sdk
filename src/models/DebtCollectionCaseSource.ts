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
 * The debt collection case source represents the origin of the case. It allows to understand where the amount receivable is coming from.
 * @export
 * @interface DebtCollectionCaseSource
 */
export interface DebtCollectionCaseSource {
    /**
     * Whether debt collection cases created from this source will skip review and directly enter preparing state.
     * @type {boolean}
     * @memberof DebtCollectionCaseSource
     */
    readonly forcedPreparingState?: boolean;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof DebtCollectionCaseSource
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof DebtCollectionCaseSource
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DebtCollectionCaseSource
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the DebtCollectionCaseSource interface.
 */
export function instanceOfDebtCollectionCaseSource(value: object): value is DebtCollectionCaseSource {
    return true;
}

export function DebtCollectionCaseSourceFromJSON(json: any): DebtCollectionCaseSource {
    return DebtCollectionCaseSourceFromJSONTyped(json, false);
}

export function DebtCollectionCaseSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectionCaseSource {
    if (json == null) {
        return json;
    }
    return {
        
        'forcedPreparingState': json['forcedPreparingState'] == null ? undefined : json['forcedPreparingState'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function DebtCollectionCaseSourceToJSON(value?: Omit<DebtCollectionCaseSource, 'forcedPreparingState'|'name'|'description'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

