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
import type { PaymentTerminalAddress } from './PaymentTerminalAddress';
import {
    PaymentTerminalAddressFromJSON,
    PaymentTerminalAddressFromJSONTyped,
    PaymentTerminalAddressToJSON,
    PaymentTerminalAddressToJSONTyped,
} from './PaymentTerminalAddress';
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
 * @interface PaymentTerminalLocationCrudModel
 */
export interface PaymentTerminalLocationCrudModel {
    /**
     * The production merchant identifier assigned to the location.
     * @type {string}
     * @memberof PaymentTerminalLocationCrudModel
     */
    readonly productionMerchantId?: string;
    /**
     * 
     * @type {PaymentTerminalAddress}
     * @memberof PaymentTerminalLocationCrudModel
     */
    address?: PaymentTerminalAddress;
    /**
     * The name used to identify the payment terminal location.
     * @type {string}
     * @memberof PaymentTerminalLocationCrudModel
     */
    readonly name?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof PaymentTerminalLocationCrudModel
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentTerminalLocationCrudModel
     */
    readonly externalId?: string;
    /**
     * 
     * @type {PaymentTerminalAddress}
     * @memberof PaymentTerminalLocationCrudModel
     */
    contactAddress?: PaymentTerminalAddress;
    /**
     * Whether changes to the location are applied to terminals immediately.
     * @type {boolean}
     * @memberof PaymentTerminalLocationCrudModel
     */
    readonly versionAppliedImmediately?: boolean;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentTerminalLocationCrudModel
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentTerminalLocationState}
     * @memberof PaymentTerminalLocationCrudModel
     */
    state?: PaymentTerminalLocationState;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentTerminalLocationCrudModel
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the PaymentTerminalLocationCrudModel interface.
 */
export function instanceOfPaymentTerminalLocationCrudModel(value: object): value is PaymentTerminalLocationCrudModel {
    return true;
}

export function PaymentTerminalLocationCrudModelFromJSON(json: any): PaymentTerminalLocationCrudModel {
    return PaymentTerminalLocationCrudModelFromJSONTyped(json, false);
}

export function PaymentTerminalLocationCrudModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalLocationCrudModel {
    if (json == null) {
        return json;
    }
    return {
        
        'productionMerchantId': json['productionMerchantId'] == null ? undefined : json['productionMerchantId'],
        'address': json['address'] == null ? undefined : PaymentTerminalAddressFromJSON(json['address']),
        'name': json['name'] == null ? undefined : json['name'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'contactAddress': json['contactAddress'] == null ? undefined : PaymentTerminalAddressFromJSON(json['contactAddress']),
        'versionAppliedImmediately': json['versionAppliedImmediately'] == null ? undefined : json['versionAppliedImmediately'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : PaymentTerminalLocationStateFromJSON(json['state']),
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PaymentTerminalLocationCrudModelToJSON(json: any): PaymentTerminalLocationCrudModel {
    return PaymentTerminalLocationCrudModelToJSONTyped(json, false);
}

export function PaymentTerminalLocationCrudModelToJSONTyped(value?: Omit<PaymentTerminalLocationCrudModel, 'productionMerchantId'|'name'|'plannedPurgeDate'|'externalId'|'versionAppliedImmediately'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': PaymentTerminalAddressToJSON(value['address']),
        'contactAddress': PaymentTerminalAddressToJSON(value['contactAddress']),
        'state': PaymentTerminalLocationStateToJSON(value['state']),
    };
}

