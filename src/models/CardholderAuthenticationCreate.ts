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
import type { CardAuthenticationVersion } from './CardAuthenticationVersion';
import {
    CardAuthenticationVersionFromJSON,
    CardAuthenticationVersionFromJSONTyped,
    CardAuthenticationVersionToJSON,
} from './CardAuthenticationVersion';
import type { CardAuthenticationResponse } from './CardAuthenticationResponse';
import {
    CardAuthenticationResponseFromJSON,
    CardAuthenticationResponseFromJSONTyped,
    CardAuthenticationResponseToJSON,
} from './CardAuthenticationResponse';

/**
 * 
 * @export
 * @interface CardholderAuthenticationCreate
 */
export interface CardholderAuthenticationCreate {
    /**
     * The identifier (e.g., XID or DSTransactionID) assigned by the authentication system for tracking and verification.
     * @type {string}
     * @memberof CardholderAuthenticationCreate
     */
    authenticationIdentifier?: string;
    /**
     * 
     * @type {CardAuthenticationResponse}
     * @memberof CardholderAuthenticationCreate
     */
    authenticationResponse: CardAuthenticationResponse;
    /**
     * The Electronic Commerce Indicator (ECI) represents the authentication level and indicates liability shift during online or card-not-present transactions.
     * @type {string}
     * @memberof CardholderAuthenticationCreate
     */
    electronicCommerceIndicator?: string;
    /**
     * The cryptographic token (CAVV/AAV) generated during the authentication process to validate the cardholder's identity.
     * @type {string}
     * @memberof CardholderAuthenticationCreate
     */
    authenticationValue?: string;
    /**
     * 
     * @type {CardAuthenticationVersion}
     * @memberof CardholderAuthenticationCreate
     */
    version: CardAuthenticationVersion;
}

/**
 * Check if a given object implements the CardholderAuthenticationCreate interface.
 */
export function instanceOfCardholderAuthenticationCreate(value: object): value is CardholderAuthenticationCreate {
    if (!('authenticationResponse' in value) || value['authenticationResponse'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function CardholderAuthenticationCreateFromJSON(json: any): CardholderAuthenticationCreate {
    return CardholderAuthenticationCreateFromJSONTyped(json, false);
}

export function CardholderAuthenticationCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardholderAuthenticationCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'authenticationIdentifier': json['authenticationIdentifier'] == null ? undefined : json['authenticationIdentifier'],
        'authenticationResponse': CardAuthenticationResponseFromJSON(json['authenticationResponse']),
        'electronicCommerceIndicator': json['electronicCommerceIndicator'] == null ? undefined : json['electronicCommerceIndicator'],
        'authenticationValue': json['authenticationValue'] == null ? undefined : json['authenticationValue'],
        'version': CardAuthenticationVersionFromJSON(json['version']),
    };
}

export function CardholderAuthenticationCreateToJSON(value?: CardholderAuthenticationCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'authenticationIdentifier': value['authenticationIdentifier'],
        'authenticationResponse': CardAuthenticationResponseToJSON(value['authenticationResponse']),
        'electronicCommerceIndicator': value['electronicCommerceIndicator'],
        'authenticationValue': value['authenticationValue'],
        'version': CardAuthenticationVersionToJSON(value['version']),
    };
}

