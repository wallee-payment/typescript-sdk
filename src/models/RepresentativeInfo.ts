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
import type { SoleProprietorshipInfo } from './SoleProprietorshipInfo';
import {
    SoleProprietorshipInfoFromJSON,
    SoleProprietorshipInfoFromJSONTyped,
    SoleProprietorshipInfoToJSON,
    SoleProprietorshipInfoToJSONTyped,
} from './SoleProprietorshipInfo';

/**
 * 
 * @export
 * @interface RepresentativeInfo
 */
export interface RepresentativeInfo {
    /**
     * 
     * @type {string}
     * @memberof RepresentativeInfo
     */
    phoneNumber?: string;
    /**
     * 
     * @type {SoleProprietorshipInfo}
     * @memberof RepresentativeInfo
     */
    soleProprietorshipInfo?: SoleProprietorshipInfo;
}

/**
 * Check if a given object implements the RepresentativeInfo interface.
 */
export function instanceOfRepresentativeInfo(value: object): value is RepresentativeInfo {
    return true;
}

export function RepresentativeInfoFromJSON(json: any): RepresentativeInfo {
    return RepresentativeInfoFromJSONTyped(json, false);
}

export function RepresentativeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepresentativeInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'phoneNumber': json['phoneNumber'] == null ? undefined : json['phoneNumber'],
        'soleProprietorshipInfo': json['soleProprietorshipInfo'] == null ? undefined : SoleProprietorshipInfoFromJSON(json['soleProprietorshipInfo']),
    };
}

export function RepresentativeInfoToJSON(json: any): RepresentativeInfo {
    return RepresentativeInfoToJSONTyped(json, false);
}

export function RepresentativeInfoToJSONTyped(value?: RepresentativeInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'phoneNumber': value['phoneNumber'],
        'soleProprietorshipInfo': SoleProprietorshipInfoToJSON(value['soleProprietorshipInfo']),
    };
}

