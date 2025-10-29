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
import type { AuthenticatedCardDataCreate } from './AuthenticatedCardDataCreate';
import {
    AuthenticatedCardDataCreateFromJSON,
    AuthenticatedCardDataCreateFromJSONTyped,
    AuthenticatedCardDataCreateToJSON,
} from './AuthenticatedCardDataCreate';

/**
 * 
 * @export
 * @interface AuthenticatedCardRequest
 */
export interface AuthenticatedCardRequest {
    /**
     * 
     * @type {AuthenticatedCardDataCreate}
     * @memberof AuthenticatedCardRequest
     */
    cardData?: AuthenticatedCardDataCreate;
    /**
     * The ID of the payment method configuration to use.
     * @type {number}
     * @memberof AuthenticatedCardRequest
     */
    paymentMethodConfiguration?: number;
}

/**
 * Check if a given object implements the AuthenticatedCardRequest interface.
 */
export function instanceOfAuthenticatedCardRequest(value: object): value is AuthenticatedCardRequest {
    return true;
}

export function AuthenticatedCardRequestFromJSON(json: any): AuthenticatedCardRequest {
    return AuthenticatedCardRequestFromJSONTyped(json, false);
}

export function AuthenticatedCardRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthenticatedCardRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'cardData': json['cardData'] == null ? undefined : AuthenticatedCardDataCreateFromJSON(json['cardData']),
        'paymentMethodConfiguration': json['paymentMethodConfiguration'] == null ? undefined : json['paymentMethodConfiguration'],
    };
}

export function AuthenticatedCardRequestToJSON(value?: AuthenticatedCardRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cardData': AuthenticatedCardDataCreateToJSON(value['cardData']),
        'paymentMethodConfiguration': value['paymentMethodConfiguration'],
    };
}

