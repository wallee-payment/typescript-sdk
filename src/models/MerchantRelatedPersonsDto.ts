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
import type { RelatedPerson } from './RelatedPerson';
import {
    RelatedPersonFromJSON,
    RelatedPersonFromJSONTyped,
    RelatedPersonToJSON,
    RelatedPersonToJSONTyped,
} from './RelatedPerson';

/**
 * 
 * @export
 * @interface MerchantRelatedPersonsDto
 */
export interface MerchantRelatedPersonsDto {
    /**
     * The people who own, control, direct, or represent the merchant company.
     * @type {Set<RelatedPerson>}
     * @memberof MerchantRelatedPersonsDto
     */
    relatedPersons?: Set<RelatedPerson>;
}

/**
 * Check if a given object implements the MerchantRelatedPersonsDto interface.
 */
export function instanceOfMerchantRelatedPersonsDto(value: object): value is MerchantRelatedPersonsDto {
    return true;
}

export function MerchantRelatedPersonsDtoFromJSON(json: any): MerchantRelatedPersonsDto {
    return MerchantRelatedPersonsDtoFromJSONTyped(json, false);
}

export function MerchantRelatedPersonsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantRelatedPersonsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'relatedPersons': json['relatedPersons'] == null ? undefined : (new Set((json['relatedPersons'] as Array<any>).map(RelatedPersonFromJSON))),
    };
}

export function MerchantRelatedPersonsDtoToJSON(json: any): MerchantRelatedPersonsDto {
    return MerchantRelatedPersonsDtoToJSONTyped(json, false);
}

export function MerchantRelatedPersonsDtoToJSONTyped(value?: MerchantRelatedPersonsDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'relatedPersons': value['relatedPersons'] == null ? undefined : (Array.from(value['relatedPersons'] as Set<any>).map(RelatedPersonToJSON)),
    };
}

