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

/**
 * 
 * @export
 */
export const TransactionUserInterfaceType = {
    Iframe: 'IFRAME',
    Lightbox: 'LIGHTBOX',
    PaymentPage: 'PAYMENT_PAGE',
    MobileSdk: 'MOBILE_SDK',
    Terminal: 'TERMINAL',
    ExpressCheckout: 'EXPRESS_CHECKOUT'
} as const;
export type TransactionUserInterfaceType = typeof TransactionUserInterfaceType[keyof typeof TransactionUserInterfaceType];


export function instanceOfTransactionUserInterfaceType(value: any): boolean {
    for (const key in TransactionUserInterfaceType) {
        if (Object.prototype.hasOwnProperty.call(TransactionUserInterfaceType, key)) {
            if (TransactionUserInterfaceType[key as keyof typeof TransactionUserInterfaceType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionUserInterfaceTypeFromJSON(json: any): TransactionUserInterfaceType {
    return TransactionUserInterfaceTypeFromJSONTyped(json, false);
}

export function TransactionUserInterfaceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionUserInterfaceType {
    return json as TransactionUserInterfaceType;
}

export function TransactionUserInterfaceTypeToJSON(value?: TransactionUserInterfaceType | null): any {
    return value as any;
}

