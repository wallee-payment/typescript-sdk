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
 * @interface TwoFactorAuthenticationType
 */
export interface TwoFactorAuthenticationType {
    /**
     * The feature that this type belongs to.
     * @type {number}
     * @memberof TwoFactorAuthenticationType
     */
    readonly feature?: number;
    /**
     * The identifier of the icon representing this type.
     * @type {string}
     * @memberof TwoFactorAuthenticationType
     */
    readonly icon?: string;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof TwoFactorAuthenticationType
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof TwoFactorAuthenticationType
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TwoFactorAuthenticationType
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the TwoFactorAuthenticationType interface.
 */
export function instanceOfTwoFactorAuthenticationType(value: object): value is TwoFactorAuthenticationType {
    return true;
}

export function TwoFactorAuthenticationTypeFromJSON(json: any): TwoFactorAuthenticationType {
    return TwoFactorAuthenticationTypeFromJSONTyped(json, false);
}

export function TwoFactorAuthenticationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwoFactorAuthenticationType {
    if (json == null) {
        return json;
    }
    return {
        
        'feature': json['feature'] == null ? undefined : json['feature'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function TwoFactorAuthenticationTypeToJSON(json: any): TwoFactorAuthenticationType {
    return TwoFactorAuthenticationTypeToJSONTyped(json, false);
}

export function TwoFactorAuthenticationTypeToJSONTyped(value?: Omit<TwoFactorAuthenticationType, 'feature'|'icon'|'name'|'description'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

