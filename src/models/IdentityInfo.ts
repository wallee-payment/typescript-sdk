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
import type { PersonSalutation } from './PersonSalutation';
import {
    PersonSalutationFromJSON,
    PersonSalutationFromJSONTyped,
    PersonSalutationToJSON,
    PersonSalutationToJSONTyped,
} from './PersonSalutation';

/**
 * 
 * @export
 * @interface IdentityInfo
 */
export interface IdentityInfo {
    /**
     * 
     * @type {string}
     * @memberof IdentityInfo
     */
    familyName?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityInfo
     */
    givenName?: string;
    /**
     * 
     * @type {PersonSalutation}
     * @memberof IdentityInfo
     */
    title?: PersonSalutation;
    /**
     * 
     * @type {Date}
     * @memberof IdentityInfo
     */
    birthDate?: Date;
}



/**
 * Check if a given object implements the IdentityInfo interface.
 */
export function instanceOfIdentityInfo(value: object): value is IdentityInfo {
    return true;
}

export function IdentityInfoFromJSON(json: any): IdentityInfo {
    return IdentityInfoFromJSONTyped(json, false);
}

export function IdentityInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'familyName': json['familyName'] == null ? undefined : json['familyName'],
        'givenName': json['givenName'] == null ? undefined : json['givenName'],
        'title': json['title'] == null ? undefined : PersonSalutationFromJSON(json['title']),
        'birthDate': json['birthDate'] == null ? undefined : (new Date(json['birthDate'])),
    };
}

export function IdentityInfoToJSON(json: any): IdentityInfo {
    return IdentityInfoToJSONTyped(json, false);
}

export function IdentityInfoToJSONTyped(value?: IdentityInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'familyName': value['familyName'],
        'givenName': value['givenName'],
        'title': PersonSalutationToJSON(value['title']),
        'birthDate': value['birthDate'] == null ? undefined : ((value['birthDate']).toISOString().substring(0,10)),
    };
}

