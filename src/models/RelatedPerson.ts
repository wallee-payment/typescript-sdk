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
import type { RepresentativeInfo } from './RepresentativeInfo';
import {
    RepresentativeInfoFromJSON,
    RepresentativeInfoFromJSONTyped,
    RepresentativeInfoToJSON,
    RepresentativeInfoToJSONTyped,
} from './RepresentativeInfo';
import type { BasicAddress } from './BasicAddress';
import {
    BasicAddressFromJSON,
    BasicAddressFromJSONTyped,
    BasicAddressToJSON,
    BasicAddressToJSONTyped,
} from './BasicAddress';

/**
 * 
 * @export
 * @interface RelatedPerson
 */
export interface RelatedPerson {
    /**
     * 
     * @type {string}
     * @memberof RelatedPerson
     */
    emailAddress?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RelatedPerson
     */
    isSelectedShareholderOrDirector?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RelatedPerson
     */
    placeOfBirth?: string;
    /**
     * 
     * @type {IdentityInfo}
     * @memberof RelatedPerson
     */
    identityInfo?: IdentityInfo;
    /**
     * 
     * @type {string}
     * @memberof RelatedPerson
     */
    nationality?: string;
    /**
     * 
     * @type {string}
     * @memberof RelatedPerson
     */
    contactLanguage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RelatedPerson
     */
    isDirector?: boolean;
    /**
     * 
     * @type {RepresentativeInfo}
     * @memberof RelatedPerson
     */
    representativeInfo?: RepresentativeInfo;
    /**
     * 
     * @type {string}
     * @memberof RelatedPerson
     */
    jobRole?: string;
    /**
     * 
     * @type {string}
     * @memberof RelatedPerson
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof RelatedPerson
     */
    companyShare?: number;
    /**
     * 
     * @type {BasicAddress}
     * @memberof RelatedPerson
     */
    residenceAddress?: BasicAddress;
}

/**
 * Check if a given object implements the RelatedPerson interface.
 */
export function instanceOfRelatedPerson(value: object): value is RelatedPerson {
    return true;
}

export function RelatedPersonFromJSON(json: any): RelatedPerson {
    return RelatedPersonFromJSONTyped(json, false);
}

export function RelatedPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelatedPerson {
    if (json == null) {
        return json;
    }
    return {
        
        'emailAddress': json['emailAddress'] == null ? undefined : json['emailAddress'],
        'isSelectedShareholderOrDirector': json['isSelectedShareholderOrDirector'] == null ? undefined : json['isSelectedShareholderOrDirector'],
        'placeOfBirth': json['placeOfBirth'] == null ? undefined : json['placeOfBirth'],
        'identityInfo': json['identityInfo'] == null ? undefined : IdentityInfoFromJSON(json['identityInfo']),
        'nationality': json['nationality'] == null ? undefined : json['nationality'],
        'contactLanguage': json['contactLanguage'] == null ? undefined : json['contactLanguage'],
        'isDirector': json['isDirector'] == null ? undefined : json['isDirector'],
        'representativeInfo': json['representativeInfo'] == null ? undefined : RepresentativeInfoFromJSON(json['representativeInfo']),
        'jobRole': json['jobRole'] == null ? undefined : json['jobRole'],
        'id': json['id'] == null ? undefined : json['id'],
        'companyShare': json['companyShare'] == null ? undefined : json['companyShare'],
        'residenceAddress': json['residenceAddress'] == null ? undefined : BasicAddressFromJSON(json['residenceAddress']),
    };
}

export function RelatedPersonToJSON(json: any): RelatedPerson {
    return RelatedPersonToJSONTyped(json, false);
}

export function RelatedPersonToJSONTyped(value?: RelatedPerson | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'emailAddress': value['emailAddress'],
        'isSelectedShareholderOrDirector': value['isSelectedShareholderOrDirector'],
        'placeOfBirth': value['placeOfBirth'],
        'identityInfo': IdentityInfoToJSON(value['identityInfo']),
        'nationality': value['nationality'],
        'contactLanguage': value['contactLanguage'],
        'isDirector': value['isDirector'],
        'representativeInfo': RepresentativeInfoToJSON(value['representativeInfo']),
        'jobRole': value['jobRole'],
        'id': value['id'],
        'companyShare': value['companyShare'],
        'residenceAddress': BasicAddressToJSON(value['residenceAddress']),
    };
}

