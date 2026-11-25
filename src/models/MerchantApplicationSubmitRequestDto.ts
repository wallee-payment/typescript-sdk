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
 * The confirmation required to submit a merchant application.
 * @export
 * @interface MerchantApplicationSubmitRequestDto
 */
export interface MerchantApplicationSubmitRequestDto {
    /**
     * Whether the merchant accepts the terms and conditions required for submission.
     * @type {boolean}
     * @memberof MerchantApplicationSubmitRequestDto
     */
    acceptedWalleeTerms?: boolean;
}

/**
 * Check if a given object implements the MerchantApplicationSubmitRequestDto interface.
 */
export function instanceOfMerchantApplicationSubmitRequestDto(value: object): value is MerchantApplicationSubmitRequestDto {
    return true;
}

export function MerchantApplicationSubmitRequestDtoFromJSON(json: any): MerchantApplicationSubmitRequestDto {
    return MerchantApplicationSubmitRequestDtoFromJSONTyped(json, false);
}

export function MerchantApplicationSubmitRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantApplicationSubmitRequestDto {
    if (json == null) {
        return json;
    }
    return {
        
        'acceptedWalleeTerms': json['acceptedWalleeTerms'] == null ? undefined : json['acceptedWalleeTerms'],
    };
}

export function MerchantApplicationSubmitRequestDtoToJSON(json: any): MerchantApplicationSubmitRequestDto {
    return MerchantApplicationSubmitRequestDtoToJSONTyped(json, false);
}

export function MerchantApplicationSubmitRequestDtoToJSONTyped(value?: MerchantApplicationSubmitRequestDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'acceptedWalleeTerms': value['acceptedWalleeTerms'],
    };
}

