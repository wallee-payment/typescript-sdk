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
    CardAuthenticationVersionToJSONTyped,
} from './CardAuthenticationVersion';
import type { CardAuthenticationResponse } from './CardAuthenticationResponse';
import {
    CardAuthenticationResponseFromJSON,
    CardAuthenticationResponseFromJSONTyped,
    CardAuthenticationResponseToJSON,
    CardAuthenticationResponseToJSONTyped,
} from './CardAuthenticationResponse';

/**
 * 
 * @export
 * @interface CardholderAuthentication
 */
export interface CardholderAuthentication {
    /**
     * The identifier (e.g., XID or DSTransactionID) assigned by the authentication system for tracking and verification.
     * @type {string}
     * @memberof CardholderAuthentication
     */
    readonly authenticationIdentifier?: string;
    /**
     * 
     * @type {CardAuthenticationResponse}
     * @memberof CardholderAuthentication
     */
    authenticationResponse?: CardAuthenticationResponse;
    /**
     * The Electronic Commerce Indicator (ECI) represents the authentication level and indicates liability shift during online or card-not-present transactions.
     * @type {string}
     * @memberof CardholderAuthentication
     */
    readonly electronicCommerceIndicator?: string;
    /**
     * The cryptographic token (CAVV/AAV) generated during the authentication process to validate the cardholder's identity.
     * @type {string}
     * @memberof CardholderAuthentication
     */
    readonly authenticationValue?: string;
    /**
     * 
     * @type {CardAuthenticationVersion}
     * @memberof CardholderAuthentication
     */
    version?: CardAuthenticationVersion;
}



/**
 * Check if a given object implements the CardholderAuthentication interface.
 */
export function instanceOfCardholderAuthentication(value: object): value is CardholderAuthentication {
    return true;
}

export function CardholderAuthenticationFromJSON(json: any): CardholderAuthentication {
    return CardholderAuthenticationFromJSONTyped(json, false);
}

export function CardholderAuthenticationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardholderAuthentication {
    if (json == null) {
        return json;
    }
    return {
        
        'authenticationIdentifier': json['authenticationIdentifier'] == null ? undefined : json['authenticationIdentifier'],
        'authenticationResponse': json['authenticationResponse'] == null ? undefined : CardAuthenticationResponseFromJSON(json['authenticationResponse']),
        'electronicCommerceIndicator': json['electronicCommerceIndicator'] == null ? undefined : json['electronicCommerceIndicator'],
        'authenticationValue': json['authenticationValue'] == null ? undefined : json['authenticationValue'],
        'version': json['version'] == null ? undefined : CardAuthenticationVersionFromJSON(json['version']),
    };
}

export function CardholderAuthenticationToJSON(json: any): CardholderAuthentication {
    return CardholderAuthenticationToJSONTyped(json, false);
}

export function CardholderAuthenticationToJSONTyped(value?: Omit<CardholderAuthentication, 'authenticationIdentifier'|'electronicCommerceIndicator'|'authenticationValue'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'authenticationResponse': CardAuthenticationResponseToJSON(value['authenticationResponse']),
        'version': CardAuthenticationVersionToJSON(value['version']),
    };
}

