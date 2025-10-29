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
import type { FailureCategory } from './FailureCategory';
import {
    FailureCategoryFromJSON,
    FailureCategoryFromJSONTyped,
    FailureCategoryToJSON,
} from './FailureCategory';

/**
 * 
 * @export
 * @interface FailureReason
 */
export interface FailureReason {
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof FailureReason
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof FailureReason
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof FailureReason
     */
    readonly id?: number;
    /**
     * 
     * @type {FailureCategory}
     * @memberof FailureReason
     */
    category?: FailureCategory;
}

/**
 * Check if a given object implements the FailureReason interface.
 */
export function instanceOfFailureReason(value: object): value is FailureReason {
    return true;
}

export function FailureReasonFromJSON(json: any): FailureReason {
    return FailureReasonFromJSONTyped(json, false);
}

export function FailureReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): FailureReason {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'category': json['category'] == null ? undefined : FailureCategoryFromJSON(json['category']),
    };
}

export function FailureReasonToJSON(value?: Omit<FailureReason, 'name'|'description'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'category': FailureCategoryToJSON(value['category']),
    };
}

