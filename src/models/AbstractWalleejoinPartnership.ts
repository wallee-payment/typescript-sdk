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
import type { WalleejoinPartnershipType } from './WalleejoinPartnershipType';
import {
    WalleejoinPartnershipTypeFromJSON,
    WalleejoinPartnershipTypeFromJSONTyped,
    WalleejoinPartnershipTypeToJSON,
    WalleejoinPartnershipTypeToJSONTyped,
} from './WalleejoinPartnershipType';
import type { WalleejoinPartnershipState } from './WalleejoinPartnershipState';
import {
    WalleejoinPartnershipStateFromJSON,
    WalleejoinPartnershipStateFromJSONTyped,
    WalleejoinPartnershipStateToJSON,
    WalleejoinPartnershipStateToJSONTyped,
} from './WalleejoinPartnershipState';

/**
 * 
 * @export
 * @interface AbstractWalleejoinPartnership
 */
export interface AbstractWalleejoinPartnership {
    /**
     * The date and time when the partnership was terminated.
     * @type {Date}
     * @memberof AbstractWalleejoinPartnership
     */
    terminatedOn?: Date;
    /**
     * 
     * @type {object}
     * @memberof AbstractWalleejoinPartnership
     */
    pricingProfileSellRate?: object;
    /**
     * The date and time when the partnership was activated.
     * @type {Date}
     * @memberof AbstractWalleejoinPartnership
     */
    activatedOn?: Date;
    /**
     * The ID of the merchant account.
     * @type {number}
     * @memberof AbstractWalleejoinPartnership
     */
    merchantAccount?: number;
    /**
     * The email address the merchant was invited with.
     * @type {string}
     * @memberof AbstractWalleejoinPartnership
     */
    invitationEmailAddress?: string;
    /**
     * 
     * @type {WalleejoinPartnershipType}
     * @memberof AbstractWalleejoinPartnership
     */
    partnershipType?: WalleejoinPartnershipType;
    /**
     * 
     * @type {WalleejoinPartnershipState}
     * @memberof AbstractWalleejoinPartnership
     */
    state?: WalleejoinPartnershipState;
    /**
     * The ID of the product.
     * @type {number}
     * @memberof AbstractWalleejoinPartnership
     */
    subscriptionProductId?: number;
    /**
     * The ID of the partner account.
     * @type {number}
     * @memberof AbstractWalleejoinPartnership
     */
    partnerAccount?: number;
}



/**
 * Check if a given object implements the AbstractWalleejoinPartnership interface.
 */
export function instanceOfAbstractWalleejoinPartnership(value: object): value is AbstractWalleejoinPartnership {
    return true;
}

export function AbstractWalleejoinPartnershipFromJSON(json: any): AbstractWalleejoinPartnership {
    return AbstractWalleejoinPartnershipFromJSONTyped(json, false);
}

export function AbstractWalleejoinPartnershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractWalleejoinPartnership {
    if (json == null) {
        return json;
    }
    return {
        
        'terminatedOn': json['terminatedOn'] == null ? undefined : (new Date(json['terminatedOn'])),
        'pricingProfileSellRate': json['pricingProfileSellRate'] == null ? undefined : json['pricingProfileSellRate'],
        'activatedOn': json['activatedOn'] == null ? undefined : (new Date(json['activatedOn'])),
        'merchantAccount': json['merchantAccount'] == null ? undefined : json['merchantAccount'],
        'invitationEmailAddress': json['invitationEmailAddress'] == null ? undefined : json['invitationEmailAddress'],
        'partnershipType': json['partnershipType'] == null ? undefined : WalleejoinPartnershipTypeFromJSON(json['partnershipType']),
        'state': json['state'] == null ? undefined : WalleejoinPartnershipStateFromJSON(json['state']),
        'subscriptionProductId': json['subscriptionProductId'] == null ? undefined : json['subscriptionProductId'],
        'partnerAccount': json['partnerAccount'] == null ? undefined : json['partnerAccount'],
    };
}

export function AbstractWalleejoinPartnershipToJSON(json: any): AbstractWalleejoinPartnership {
    return AbstractWalleejoinPartnershipToJSONTyped(json, false);
}

export function AbstractWalleejoinPartnershipToJSONTyped(value?: AbstractWalleejoinPartnership | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'terminatedOn': value['terminatedOn'] == null ? undefined : ((value['terminatedOn']).toISOString()),
        'pricingProfileSellRate': value['pricingProfileSellRate'],
        'activatedOn': value['activatedOn'] == null ? undefined : ((value['activatedOn']).toISOString()),
        'merchantAccount': value['merchantAccount'],
        'invitationEmailAddress': value['invitationEmailAddress'],
        'partnershipType': WalleejoinPartnershipTypeToJSON(value['partnershipType']),
        'state': WalleejoinPartnershipStateToJSON(value['state']),
        'subscriptionProductId': value['subscriptionProductId'],
        'partnerAccount': value['partnerAccount'],
    };
}

