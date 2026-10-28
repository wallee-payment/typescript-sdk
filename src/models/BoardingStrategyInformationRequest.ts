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
import type { Setter } from './Setter';
import {
    SetterFromJSON,
    SetterFromJSONTyped,
    SetterToJSON,
    SetterToJSONTyped,
} from './Setter';

/**
 * 
 * @export
 * @interface BoardingStrategyInformationRequest
 */
export interface BoardingStrategyInformationRequest {
    /**
     * 
     * @type {Setter}
     * @memberof BoardingStrategyInformationRequest
     */
    billingAddress: Setter;
}

/**
 * Check if a given object implements the BoardingStrategyInformationRequest interface.
 */
export function instanceOfBoardingStrategyInformationRequest(value: object): value is BoardingStrategyInformationRequest {
    if (!('billingAddress' in value) || value['billingAddress'] === undefined) return false;
    return true;
}

export function BoardingStrategyInformationRequestFromJSON(json: any): BoardingStrategyInformationRequest {
    return BoardingStrategyInformationRequestFromJSONTyped(json, false);
}

export function BoardingStrategyInformationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BoardingStrategyInformationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'billingAddress': SetterFromJSON(json['billingAddress']),
    };
}

export function BoardingStrategyInformationRequestToJSON(json: any): BoardingStrategyInformationRequest {
    return BoardingStrategyInformationRequestToJSONTyped(json, false);
}

export function BoardingStrategyInformationRequestToJSONTyped(value?: BoardingStrategyInformationRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'billingAddress': SetterToJSON(value['billingAddress']),
    };
}

