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
 * @interface CreateFulfillmentRequest
 */
export interface CreateFulfillmentRequest {
    /**
     * 
     * @type {number}
     * @memberof CreateFulfillmentRequest
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateFulfillmentRequest
     */
    completionId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateFulfillmentRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFulfillmentRequest
     */
    externalId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFulfillmentRequest
     */
    trackingNumber?: string;
}

/**
 * Check if a given object implements the CreateFulfillmentRequest interface.
 */
export function instanceOfCreateFulfillmentRequest(value: object): value is CreateFulfillmentRequest {
    return true;
}

export function CreateFulfillmentRequestFromJSON(json: any): CreateFulfillmentRequest {
    return CreateFulfillmentRequestFromJSONTyped(json, false);
}

export function CreateFulfillmentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFulfillmentRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'completionId': json['completionId'] == null ? undefined : json['completionId'],
        'description': json['description'] == null ? undefined : json['description'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'trackingNumber': json['trackingNumber'] == null ? undefined : json['trackingNumber'],
    };
}

export function CreateFulfillmentRequestToJSON(json: any): CreateFulfillmentRequest {
    return CreateFulfillmentRequestToJSONTyped(json, false);
}

export function CreateFulfillmentRequestToJSONTyped(value?: CreateFulfillmentRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'completionId': value['completionId'],
        'description': value['description'],
        'externalId': value['externalId'],
        'trackingNumber': value['trackingNumber'],
    };
}

