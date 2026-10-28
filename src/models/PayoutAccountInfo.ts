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
 * @interface PayoutAccountInfo
 */
export interface PayoutAccountInfo {
    /**
     * 
     * @type {string}
     * @memberof PayoutAccountInfo
     */
    iban?: string;
    /**
     * 
     * @type {string}
     * @memberof PayoutAccountInfo
     */
    bankName?: string;
    /**
     * 
     * @type {string}
     * @memberof PayoutAccountInfo
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof PayoutAccountInfo
     */
    bic?: string;
}

/**
 * Check if a given object implements the PayoutAccountInfo interface.
 */
export function instanceOfPayoutAccountInfo(value: object): value is PayoutAccountInfo {
    return true;
}

export function PayoutAccountInfoFromJSON(json: any): PayoutAccountInfo {
    return PayoutAccountInfoFromJSONTyped(json, false);
}

export function PayoutAccountInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayoutAccountInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'iban': json['iban'] == null ? undefined : json['iban'],
        'bankName': json['bankName'] == null ? undefined : json['bankName'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'bic': json['bic'] == null ? undefined : json['bic'],
    };
}

export function PayoutAccountInfoToJSON(json: any): PayoutAccountInfo {
    return PayoutAccountInfoToJSONTyped(json, false);
}

export function PayoutAccountInfoToJSONTyped(value?: PayoutAccountInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'iban': value['iban'],
        'bankName': value['bankName'],
        'currency': value['currency'],
        'bic': value['bic'],
    };
}

