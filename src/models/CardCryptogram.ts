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
 * @interface CardCryptogram
 */
export interface CardCryptogram {
    /**
     * The Electronic Commerce Indicator (ECI) represents the authentication level and indicates liability shift during online or card-not-present transactions.
     * @type {string}
     * @memberof CardCryptogram
     */
    readonly eci?: string;
    /**
     * The cryptogram value used for securing card transactions, format varying based on the PAN type.
     * @type {string}
     * @memberof CardCryptogram
     */
    readonly value?: string;
}

/**
 * Check if a given object implements the CardCryptogram interface.
 */
export function instanceOfCardCryptogram(value: object): value is CardCryptogram {
    return true;
}

export function CardCryptogramFromJSON(json: any): CardCryptogram {
    return CardCryptogramFromJSONTyped(json, false);
}

export function CardCryptogramFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardCryptogram {
    if (json == null) {
        return json;
    }
    return {
        
        'eci': json['eci'] == null ? undefined : json['eci'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function CardCryptogramToJSON(value?: Omit<CardCryptogram, 'eci'|'value'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

