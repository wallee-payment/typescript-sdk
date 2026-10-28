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
import type { PaymentTerminalAddressCreate } from './PaymentTerminalAddressCreate';
import {
    PaymentTerminalAddressCreateFromJSON,
    PaymentTerminalAddressCreateFromJSONTyped,
    PaymentTerminalAddressCreateToJSON,
    PaymentTerminalAddressCreateToJSONTyped,
} from './PaymentTerminalAddressCreate';

/**
 * 
 * @export
 * @interface PaymentTerminalLocationCrudModelRestApiCreate
 */
export interface PaymentTerminalLocationCrudModelRestApiCreate {
    /**
     * The production merchant identifier assigned to the location.
     * @type {string}
     * @memberof PaymentTerminalLocationCrudModelRestApiCreate
     */
    productionMerchantId?: string;
    /**
     * 
     * @type {PaymentTerminalAddressCreate}
     * @memberof PaymentTerminalLocationCrudModelRestApiCreate
     */
    address: PaymentTerminalAddressCreate;
    /**
     * The name used to identify the payment terminal location.
     * @type {string}
     * @memberof PaymentTerminalLocationCrudModelRestApiCreate
     */
    name: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentTerminalLocationCrudModelRestApiCreate
     */
    externalId: string;
    /**
     * 
     * @type {PaymentTerminalAddressCreate}
     * @memberof PaymentTerminalLocationCrudModelRestApiCreate
     */
    contactAddress?: PaymentTerminalAddressCreate;
}

/**
 * Check if a given object implements the PaymentTerminalLocationCrudModelRestApiCreate interface.
 */
export function instanceOfPaymentTerminalLocationCrudModelRestApiCreate(value: object): value is PaymentTerminalLocationCrudModelRestApiCreate {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    return true;
}

export function PaymentTerminalLocationCrudModelRestApiCreateFromJSON(json: any): PaymentTerminalLocationCrudModelRestApiCreate {
    return PaymentTerminalLocationCrudModelRestApiCreateFromJSONTyped(json, false);
}

export function PaymentTerminalLocationCrudModelRestApiCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentTerminalLocationCrudModelRestApiCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'productionMerchantId': json['productionMerchantId'] == null ? undefined : json['productionMerchantId'],
        'address': PaymentTerminalAddressCreateFromJSON(json['address']),
        'name': json['name'],
        'externalId': json['externalId'],
        'contactAddress': json['contactAddress'] == null ? undefined : PaymentTerminalAddressCreateFromJSON(json['contactAddress']),
    };
}

export function PaymentTerminalLocationCrudModelRestApiCreateToJSON(json: any): PaymentTerminalLocationCrudModelRestApiCreate {
    return PaymentTerminalLocationCrudModelRestApiCreateToJSONTyped(json, false);
}

export function PaymentTerminalLocationCrudModelRestApiCreateToJSONTyped(value?: PaymentTerminalLocationCrudModelRestApiCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'productionMerchantId': value['productionMerchantId'],
        'address': PaymentTerminalAddressCreateToJSON(value['address']),
        'name': value['name'],
        'externalId': value['externalId'],
        'contactAddress': PaymentTerminalAddressCreateToJSON(value['contactAddress']),
    };
}

