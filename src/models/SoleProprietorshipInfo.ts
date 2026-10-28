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
import type { IdentityInfo } from './IdentityInfo';
import {
    IdentityInfoFromJSON,
    IdentityInfoFromJSONTyped,
    IdentityInfoToJSON,
    IdentityInfoToJSONTyped,
} from './IdentityInfo';
import type { SoleProprietorOwnershipType } from './SoleProprietorOwnershipType';
import {
    SoleProprietorOwnershipTypeFromJSON,
    SoleProprietorOwnershipTypeFromJSONTyped,
    SoleProprietorOwnershipTypeToJSON,
    SoleProprietorOwnershipTypeToJSONTyped,
} from './SoleProprietorOwnershipType';

/**
 * 
 * @export
 * @interface SoleProprietorshipInfo
 */
export interface SoleProprietorshipInfo {
    /**
     * 
     * @type {IdentityInfo}
     * @memberof SoleProprietorshipInfo
     */
    thirdPartyInfo?: IdentityInfo;
    /**
     * 
     * @type {SoleProprietorOwnershipType}
     * @memberof SoleProprietorshipInfo
     */
    soleProprietorOwnershipType?: SoleProprietorOwnershipType;
}



/**
 * Check if a given object implements the SoleProprietorshipInfo interface.
 */
export function instanceOfSoleProprietorshipInfo(value: object): value is SoleProprietorshipInfo {
    return true;
}

export function SoleProprietorshipInfoFromJSON(json: any): SoleProprietorshipInfo {
    return SoleProprietorshipInfoFromJSONTyped(json, false);
}

export function SoleProprietorshipInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SoleProprietorshipInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'thirdPartyInfo': json['thirdPartyInfo'] == null ? undefined : IdentityInfoFromJSON(json['thirdPartyInfo']),
        'soleProprietorOwnershipType': json['soleProprietorOwnershipType'] == null ? undefined : SoleProprietorOwnershipTypeFromJSON(json['soleProprietorOwnershipType']),
    };
}

export function SoleProprietorshipInfoToJSON(json: any): SoleProprietorshipInfo {
    return SoleProprietorshipInfoToJSONTyped(json, false);
}

export function SoleProprietorshipInfoToJSONTyped(value?: SoleProprietorshipInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'thirdPartyInfo': IdentityInfoToJSON(value['thirdPartyInfo']),
        'soleProprietorOwnershipType': SoleProprietorOwnershipTypeToJSON(value['soleProprietorOwnershipType']),
    };
}

