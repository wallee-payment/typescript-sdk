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
 * @interface BogusExpressCheckoutPaymentData
 */
export interface BogusExpressCheckoutPaymentData {
    /**
     * Wallet-generated payment token collected during approval.
     * @type {string}
     * @memberof BogusExpressCheckoutPaymentData
     */
    readonly paymentToken?: string;
    /**
     * Wallet-generated cryptogram collected during approval.
     * @type {string}
     * @memberof BogusExpressCheckoutPaymentData
     */
    readonly cryptogram?: string;
}

/**
 * Check if a given object implements the BogusExpressCheckoutPaymentData interface.
 */
export function instanceOfBogusExpressCheckoutPaymentData(value: object): value is BogusExpressCheckoutPaymentData {
    return true;
}

export function BogusExpressCheckoutPaymentDataFromJSON(json: any): BogusExpressCheckoutPaymentData {
    return BogusExpressCheckoutPaymentDataFromJSONTyped(json, false);
}

export function BogusExpressCheckoutPaymentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BogusExpressCheckoutPaymentData {
    if (json == null) {
        return json;
    }
    return {
        
        'paymentToken': json['paymentToken'] == null ? undefined : json['paymentToken'],
        'cryptogram': json['cryptogram'] == null ? undefined : json['cryptogram'],
    };
}

export function BogusExpressCheckoutPaymentDataToJSON(json: any): BogusExpressCheckoutPaymentData {
    return BogusExpressCheckoutPaymentDataToJSONTyped(json, false);
}

export function BogusExpressCheckoutPaymentDataToJSONTyped(value?: Omit<BogusExpressCheckoutPaymentData, 'paymentToken'|'cryptogram'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

