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
 * @interface SubscriptionProductDto
 */
export interface SubscriptionProductDto {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionProductDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionProductDto
     */
    id?: number;
}

/**
 * Check if a given object implements the SubscriptionProductDto interface.
 */
export function instanceOfSubscriptionProductDto(value: object): value is SubscriptionProductDto {
    return true;
}

export function SubscriptionProductDtoFromJSON(json: any): SubscriptionProductDto {
    return SubscriptionProductDtoFromJSONTyped(json, false);
}

export function SubscriptionProductDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionProductDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function SubscriptionProductDtoToJSON(json: any): SubscriptionProductDto {
    return SubscriptionProductDtoToJSONTyped(json, false);
}

export function SubscriptionProductDtoToJSONTyped(value?: SubscriptionProductDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'id': value['id'],
    };
}

