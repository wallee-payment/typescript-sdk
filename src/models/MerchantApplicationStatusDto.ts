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
 * 
 * @export
 * @interface MerchantApplicationStatusDto
 */
export interface MerchantApplicationStatusDto {
    /**
     * 
     * @type {MerchantApplicationState}
     * @memberof MerchantApplicationStatusDto
     */
    applicationState?: MerchantApplicationState;
    /**
     * Validation violations that currently prevent the merchant application from being completed.
     * @type {Set<{ [key: string]: any; }>}
     * @memberof MerchantApplicationStatusDto
     */
    readonly violations?: Set<{ [key: string]: any; }>;
    /**
     * The ID of the merchant application.
     * @type {number}
     * @memberof MerchantApplicationStatusDto
     */
    readonly merchantApplicationId?: number;
}



/**
 * Check if a given object implements the MerchantApplicationStatusDto interface.
 */
export function instanceOfMerchantApplicationStatusDto(value: object): value is MerchantApplicationStatusDto {
    return true;
}

export function MerchantApplicationStatusDtoFromJSON(json: any): MerchantApplicationStatusDto {
    return MerchantApplicationStatusDtoFromJSONTyped(json, false);
}

export function MerchantApplicationStatusDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantApplicationStatusDto {
    if (json == null) {
        return json;
    }
    return {
        
        'applicationState': json['applicationState'] == null ? undefined : MerchantApplicationStateFromJSON(json['applicationState']),
        'violations': json['violations'] == null ? undefined : new Set(json['violations']),
        'merchantApplicationId': json['merchantApplicationId'] == null ? undefined : json['merchantApplicationId'],
    };
}

export function MerchantApplicationStatusDtoToJSON(json: any): MerchantApplicationStatusDto {
    return MerchantApplicationStatusDtoToJSONTyped(json, false);
}

export function MerchantApplicationStatusDtoToJSONTyped(value?: Omit<MerchantApplicationStatusDto, 'violations'|'merchantApplicationId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'applicationState': MerchantApplicationStateToJSON(value['applicationState']),
    };
}

