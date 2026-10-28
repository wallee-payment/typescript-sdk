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
 * @interface TrackingNumberRequest
 */
export interface TrackingNumberRequest {
    /**
     * 
     * @type {string}
     * @memberof TrackingNumberRequest
     */
    trackingNumber?: string;
}

/**
 * Check if a given object implements the TrackingNumberRequest interface.
 */
export function instanceOfTrackingNumberRequest(value: object): value is TrackingNumberRequest {
    return true;
}

export function TrackingNumberRequestFromJSON(json: any): TrackingNumberRequest {
    return TrackingNumberRequestFromJSONTyped(json, false);
}

export function TrackingNumberRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackingNumberRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'trackingNumber': json['trackingNumber'] == null ? undefined : json['trackingNumber'],
    };
}

export function TrackingNumberRequestToJSON(json: any): TrackingNumberRequest {
    return TrackingNumberRequestToJSONTyped(json, false);
}

export function TrackingNumberRequestToJSONTyped(value?: TrackingNumberRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'trackingNumber': value['trackingNumber'],
    };
}

