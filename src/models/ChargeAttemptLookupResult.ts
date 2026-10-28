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
import type { TransactionProjection } from './TransactionProjection';
import {
    TransactionProjectionFromJSON,
    TransactionProjectionFromJSONTyped,
    TransactionProjectionToJSON,
    TransactionProjectionToJSONTyped,
} from './TransactionProjection';
import type { ChargeAttemptProjection } from './ChargeAttemptProjection';
import {
    ChargeAttemptProjectionFromJSON,
    ChargeAttemptProjectionFromJSONTyped,
    ChargeAttemptProjectionToJSON,
    ChargeAttemptProjectionToJSONTyped,
} from './ChargeAttemptProjection';

/**
 * 
 * @export
 * @interface ChargeAttemptLookupResult
 */
export interface ChargeAttemptLookupResult {
    /**
     * 
     * @type {ChargeAttemptProjection}
     * @memberof ChargeAttemptLookupResult
     */
    successfulChargeAttempt?: ChargeAttemptProjection;
    /**
     * 
     * @type {TransactionProjection}
     * @memberof ChargeAttemptLookupResult
     */
    transaction?: TransactionProjection;
}

/**
 * Check if a given object implements the ChargeAttemptLookupResult interface.
 */
export function instanceOfChargeAttemptLookupResult(value: object): value is ChargeAttemptLookupResult {
    return true;
}

export function ChargeAttemptLookupResultFromJSON(json: any): ChargeAttemptLookupResult {
    return ChargeAttemptLookupResultFromJSONTyped(json, false);
}

export function ChargeAttemptLookupResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeAttemptLookupResult {
    if (json == null) {
        return json;
    }
    return {
        
        'successfulChargeAttempt': json['successfulChargeAttempt'] == null ? undefined : ChargeAttemptProjectionFromJSON(json['successfulChargeAttempt']),
        'transaction': json['transaction'] == null ? undefined : TransactionProjectionFromJSON(json['transaction']),
    };
}

export function ChargeAttemptLookupResultToJSON(json: any): ChargeAttemptLookupResult {
    return ChargeAttemptLookupResultToJSONTyped(json, false);
}

export function ChargeAttemptLookupResultToJSONTyped(value?: ChargeAttemptLookupResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'successfulChargeAttempt': ChargeAttemptProjectionToJSON(value['successfulChargeAttempt']),
        'transaction': TransactionProjectionToJSON(value['transaction']),
    };
}

