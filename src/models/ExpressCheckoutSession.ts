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
import type { ExpressCheckoutWalletType } from './ExpressCheckoutWalletType';
import {
    ExpressCheckoutWalletTypeFromJSON,
    ExpressCheckoutWalletTypeFromJSONTyped,
    ExpressCheckoutWalletTypeToJSON,
    ExpressCheckoutWalletTypeToJSONTyped,
} from './ExpressCheckoutWalletType';
import type { ExpressCheckoutSessionState } from './ExpressCheckoutSessionState';
import {
    ExpressCheckoutSessionStateFromJSON,
    ExpressCheckoutSessionStateFromJSONTyped,
    ExpressCheckoutSessionStateToJSON,
    ExpressCheckoutSessionStateToJSONTyped,
} from './ExpressCheckoutSessionState';
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
    LineItemToJSONTyped,
} from './LineItem';
import type { ExpressCheckoutShippingOption } from './ExpressCheckoutShippingOption';
import {
    ExpressCheckoutShippingOptionFromJSON,
    ExpressCheckoutShippingOptionFromJSONTyped,
    ExpressCheckoutShippingOptionToJSON,
    ExpressCheckoutShippingOptionToJSONTyped,
} from './ExpressCheckoutShippingOption';

/**
 * 
 * @export
 * @interface ExpressCheckoutSession
 */
export interface ExpressCheckoutSession {
    /**
     * 
     * @type {Array<LineItem>}
     * @memberof ExpressCheckoutSession
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * The spaceId linked to the entity.
     * @type {number}
     * @memberof ExpressCheckoutSession
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ExpressCheckoutSession
     */
    readonly metaData?: { [key: string]: string; };
    /**
     * 
     * @type {ExpressCheckoutWalletType}
     * @memberof ExpressCheckoutSession
     */
    walletType?: ExpressCheckoutWalletType;
    /**
     * Id of the entity.
     * @type {number}
     * @memberof ExpressCheckoutSession
     */
    readonly id?: number;
    /**
     * 
     * @type {ExpressCheckoutSessionState}
     * @memberof ExpressCheckoutSession
     */
    state?: ExpressCheckoutSessionState;
    /**
     * 
     * @type {Array<ExpressCheckoutShippingOption>}
     * @memberof ExpressCheckoutSession
     */
    readonly shippingOptions?: Array<ExpressCheckoutShippingOption>;
}



/**
 * Check if a given object implements the ExpressCheckoutSession interface.
 */
export function instanceOfExpressCheckoutSession(value: object): value is ExpressCheckoutSession {
    return true;
}

export function ExpressCheckoutSessionFromJSON(json: any): ExpressCheckoutSession {
    return ExpressCheckoutSessionFromJSONTyped(json, false);
}

export function ExpressCheckoutSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpressCheckoutSession {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'walletType': json['walletType'] == null ? undefined : ExpressCheckoutWalletTypeFromJSON(json['walletType']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : ExpressCheckoutSessionStateFromJSON(json['state']),
        'shippingOptions': json['shippingOptions'] == null ? undefined : ((json['shippingOptions'] as Array<any>).map(ExpressCheckoutShippingOptionFromJSON)),
    };
}

export function ExpressCheckoutSessionToJSON(json: any): ExpressCheckoutSession {
    return ExpressCheckoutSessionToJSONTyped(json, false);
}

export function ExpressCheckoutSessionToJSONTyped(value?: Omit<ExpressCheckoutSession, 'lineItems'|'linkedSpaceId'|'metaData'|'id'|'shippingOptions'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'walletType': ExpressCheckoutWalletTypeToJSON(value['walletType']),
        'state': ExpressCheckoutSessionStateToJSON(value['state']),
    };
}

