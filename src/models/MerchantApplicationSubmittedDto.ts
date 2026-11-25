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
import type { MerchantApplicationState } from './MerchantApplicationState';
import {
    MerchantApplicationStateFromJSON,
    MerchantApplicationStateFromJSONTyped,
    MerchantApplicationStateToJSON,
    MerchantApplicationStateToJSONTyped,
} from './MerchantApplicationState';

/**
 * The result of submitting a merchant application.
 * @export
 * @interface MerchantApplicationSubmittedDto
 */
export interface MerchantApplicationSubmittedDto {
    /**
     * 
     * @type {MerchantApplicationState}
     * @memberof MerchantApplicationSubmittedDto
     */
    applicationState?: MerchantApplicationState;
    /**
     * The ID of the organization created by submitting the application.
     * @type {number}
     * @memberof MerchantApplicationSubmittedDto
     */
    readonly paymentFacilitatorOrganizationId?: number;
    /**
     * The ID of the submitted merchant application.
     * @type {number}
     * @memberof MerchantApplicationSubmittedDto
     */
    readonly merchantApplicationId?: number;
}



/**
 * Check if a given object implements the MerchantApplicationSubmittedDto interface.
 */
export function instanceOfMerchantApplicationSubmittedDto(value: object): value is MerchantApplicationSubmittedDto {
    return true;
}

export function MerchantApplicationSubmittedDtoFromJSON(json: any): MerchantApplicationSubmittedDto {
    return MerchantApplicationSubmittedDtoFromJSONTyped(json, false);
}

export function MerchantApplicationSubmittedDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantApplicationSubmittedDto {
    if (json == null) {
        return json;
    }
    return {
        
        'applicationState': json['applicationState'] == null ? undefined : MerchantApplicationStateFromJSON(json['applicationState']),
        'paymentFacilitatorOrganizationId': json['paymentFacilitatorOrganizationId'] == null ? undefined : json['paymentFacilitatorOrganizationId'],
        'merchantApplicationId': json['merchantApplicationId'] == null ? undefined : json['merchantApplicationId'],
    };
}

export function MerchantApplicationSubmittedDtoToJSON(json: any): MerchantApplicationSubmittedDto {
    return MerchantApplicationSubmittedDtoToJSONTyped(json, false);
}

export function MerchantApplicationSubmittedDtoToJSONTyped(value?: Omit<MerchantApplicationSubmittedDto, 'paymentFacilitatorOrganizationId'|'merchantApplicationId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'applicationState': MerchantApplicationStateToJSON(value['applicationState']),
    };
}

