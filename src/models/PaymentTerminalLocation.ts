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
import type { PaymentTerminalLocationState } from './PaymentTerminalLocationState';
import {
    PaymentTerminalLocationStateFromJSON,
    PaymentTerminalLocationStateFromJSONTyped,
    PaymentTerminalLocationStateToJSON,
    PaymentTerminalLocationStateToJSONTyped,
} from './PaymentTerminalLocationState';

/**
 * 
 * @export
 * @interface PaymentTerminalLocation
 */
export interface PaymentTerminalLocation {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentTerminalLocation
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentTerminalLocation
     */
    readonly productionMerchantId?: string;
    /**
     * The name used to identify the payment terminal location.
     * @type {string}
     * @memberof PaymentTerminalLocation
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentTerminalLocation
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentTerminalLocation
     */
    readonly externalId?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalLocation
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentTerminalLocationState}
     * @memberof PaymentTerminalLocation
     */
    state?: PaymentTerminalLocationState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentTerminalLocation
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the PaymentTerminalLocation interface.
 */
export function instanceOfPaymentTerminalLocation(value: object): value is PaymentTerminalLocation {
    return true;
}

export function PaymentTerminalLocationFromJSON(json: any): PaymentTerminalLocation {
    return PaymentTerminalLocationFromJSONTyped(json, false);
}

export function PaymentTerminalLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalLocation {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'productionMerchantId': json['productionMerchantId'] == null ? undefined : json['productionMerchantId'],
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : PaymentTerminalLocationStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PaymentTerminalLocationToJSON(json: any): PaymentTerminalLocation {
    return PaymentTerminalLocationToJSONTyped(json, false);
}

export function PaymentTerminalLocationToJSONTyped(value?: Omit<PaymentTerminalLocation, 'linkedSpaceId'|'productionMerchantId'|'name'|'plannedPurgeDate'|'externalId'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': PaymentTerminalLocationStateToJSON(value['state']),
    };
}

