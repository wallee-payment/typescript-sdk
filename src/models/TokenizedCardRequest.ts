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
import type { TokenizedCardDataCreate } from './TokenizedCardDataCreate';
import {
    TokenizedCardDataCreateFromJSON,
    TokenizedCardDataCreateFromJSONTyped,
    TokenizedCardDataCreateToJSON,
} from './TokenizedCardDataCreate';

/**
 * 
 * @export
 * @interface TokenizedCardRequest
 */
export interface TokenizedCardRequest {
    /**
     * 
     * @type {TokenizedCardDataCreate}
     * @memberof TokenizedCardRequest
     */
    cardData?: TokenizedCardDataCreate;
    /**
     * The ID of the payment method configuration to use.
     * @type {number}
     * @memberof TokenizedCardRequest
     */
    paymentMethodConfiguration?: number;
}

/**
 * Check if a given object implements the TokenizedCardRequest interface.
 */
export function instanceOfTokenizedCardRequest(value: object): value is TokenizedCardRequest {
    return true;
}

export function TokenizedCardRequestFromJSON(json: any): TokenizedCardRequest {
    return TokenizedCardRequestFromJSONTyped(json, false);
}

export function TokenizedCardRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenizedCardRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'cardData': json['cardData'] == null ? undefined : TokenizedCardDataCreateFromJSON(json['cardData']),
        'paymentMethodConfiguration': json['paymentMethodConfiguration'] == null ? undefined : json['paymentMethodConfiguration'],
    };
}

export function TokenizedCardRequestToJSON(value?: TokenizedCardRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cardData': TokenizedCardDataCreateToJSON(value['cardData']),
        'paymentMethodConfiguration': value['paymentMethodConfiguration'],
    };
}

