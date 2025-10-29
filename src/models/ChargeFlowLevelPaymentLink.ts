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
import type { ChargeFlowLevel } from './ChargeFlowLevel';
import {
    ChargeFlowLevelFromJSON,
    ChargeFlowLevelFromJSONTyped,
    ChargeFlowLevelToJSON,
} from './ChargeFlowLevel';

/**
 * 
 * @export
 * @interface ChargeFlowLevelPaymentLink
 */
export interface ChargeFlowLevelPaymentLink {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ChargeFlowLevelPaymentLink
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {ChargeFlowLevel}
     * @memberof ChargeFlowLevelPaymentLink
     */
    chargeFlowLevel?: ChargeFlowLevel;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ChargeFlowLevelPaymentLink
     */
    readonly id?: number;
    /**
     * The URL provided to the customer for entering their payment details and completing the transaction.
     * @type {string}
     * @memberof ChargeFlowLevelPaymentLink
     */
    readonly paymentLink?: string;
}

/**
 * Check if a given object implements the ChargeFlowLevelPaymentLink interface.
 */
export function instanceOfChargeFlowLevelPaymentLink(value: object): value is ChargeFlowLevelPaymentLink {
    return true;
}

export function ChargeFlowLevelPaymentLinkFromJSON(json: any): ChargeFlowLevelPaymentLink {
    return ChargeFlowLevelPaymentLinkFromJSONTyped(json, false);
}

export function ChargeFlowLevelPaymentLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeFlowLevelPaymentLink {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'chargeFlowLevel': json['chargeFlowLevel'] == null ? undefined : ChargeFlowLevelFromJSON(json['chargeFlowLevel']),
        'id': json['id'] == null ? undefined : json['id'],
        'paymentLink': json['paymentLink'] == null ? undefined : json['paymentLink'],
    };
}

export function ChargeFlowLevelPaymentLinkToJSON(value?: Omit<ChargeFlowLevelPaymentLink, 'linkedSpaceId'|'id'|'paymentLink'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'chargeFlowLevel': ChargeFlowLevelToJSON(value['chargeFlowLevel']),
    };
}

