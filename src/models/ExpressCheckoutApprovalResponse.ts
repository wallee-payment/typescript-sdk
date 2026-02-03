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
import type { ExpressCheckoutSessionState } from './ExpressCheckoutSessionState';
import {
    ExpressCheckoutSessionStateFromJSON,
    ExpressCheckoutSessionStateFromJSONTyped,
    ExpressCheckoutSessionStateToJSON,
    ExpressCheckoutSessionStateToJSONTyped,
} from './ExpressCheckoutSessionState';

/**
 * 
 * @export
 * @interface ExpressCheckoutApprovalResponse
 */
export interface ExpressCheckoutApprovalResponse {
    /**
     * 
     * @type {string}
     * @memberof ExpressCheckoutApprovalResponse
     */
    readonly merchantRedirectUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof ExpressCheckoutApprovalResponse
     */
    readonly sessionId?: number;
    /**
     * 
     * @type {ExpressCheckoutSessionState}
     * @memberof ExpressCheckoutApprovalResponse
     */
    state?: ExpressCheckoutSessionState;
}



/**
 * Check if a given object implements the ExpressCheckoutApprovalResponse interface.
 */
export function instanceOfExpressCheckoutApprovalResponse(value: object): value is ExpressCheckoutApprovalResponse {
    return true;
}

export function ExpressCheckoutApprovalResponseFromJSON(json: any): ExpressCheckoutApprovalResponse {
    return ExpressCheckoutApprovalResponseFromJSONTyped(json, false);
}

export function ExpressCheckoutApprovalResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutApprovalResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'merchantRedirectUrl': json['merchantRedirectUrl'] == null ? undefined : json['merchantRedirectUrl'],
        'sessionId': json['sessionId'] == null ? undefined : json['sessionId'],
        'state': json['state'] == null ? undefined : ExpressCheckoutSessionStateFromJSON(json['state']),
    };
}

export function ExpressCheckoutApprovalResponseToJSON(json: any): ExpressCheckoutApprovalResponse {
    return ExpressCheckoutApprovalResponseToJSONTyped(json, false);
}

export function ExpressCheckoutApprovalResponseToJSONTyped(value?: Omit<ExpressCheckoutApprovalResponse, 'merchantRedirectUrl'|'sessionId'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': ExpressCheckoutSessionStateToJSON(value['state']),
    };
}

