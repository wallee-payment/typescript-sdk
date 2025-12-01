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
import type { AddressCreate } from './AddressCreate';
import {
    AddressCreateFromJSON,
    AddressCreateFromJSONTyped,
    AddressCreateToJSON,
    AddressCreateToJSONTyped,
} from './AddressCreate';
import type { LineItemCreate } from './LineItemCreate';
import {
    LineItemCreateFromJSON,
    LineItemCreateFromJSONTyped,
    LineItemCreateToJSON,
    LineItemCreateToJSONTyped,
} from './LineItemCreate';
import type { DebtCollectionEnvironment } from './DebtCollectionEnvironment';
import {
    DebtCollectionEnvironmentFromJSON,
    DebtCollectionEnvironmentFromJSONTyped,
    DebtCollectionEnvironmentToJSON,
    DebtCollectionEnvironmentToJSONTyped,
} from './DebtCollectionEnvironment';

/**
 * The debt collection case represents a try to collect the money from the debtor.
 * @export
 * @interface DebtCollectionCaseUpdate
 */
export interface DebtCollectionCaseUpdate {
    /**
     * The line items that are subject of this debt collection case.
     * @type {Array<LineItemCreate>}
     * @memberof DebtCollectionCaseUpdate
     */
    lineItems?: Array<LineItemCreate>;
    /**
     * The date and time when the contract with the debtor was signed.
     * @type {Date}
     * @memberof DebtCollectionCaseUpdate
     */
    contractDate?: Date;
    /**
     * 
     * @type {DebtCollectionEnvironment}
     * @memberof DebtCollectionCaseUpdate
     */
    environment?: DebtCollectionEnvironment;
    /**
     * The date and time when the claim was due.
     * @type {Date}
     * @memberof DebtCollectionCaseUpdate
     */
    dueDate?: Date;
    /**
     * The three-letter code (ISO 4217 format) of the case's currency.
     * @type {string}
     * @memberof DebtCollectionCaseUpdate
     */
    currency?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof DebtCollectionCaseUpdate
     */
    language?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof DebtCollectionCaseUpdate
     */
    billingAddress?: AddressCreate;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof DebtCollectionCaseUpdate
     */
    spaceViewId?: number;
    /**
     * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
     * @type {number}
     * @memberof DebtCollectionCaseUpdate
     */
    version: number;
}



/**
 * Check if a given object implements the DebtCollectionCaseUpdate interface.
 */
export function instanceOfDebtCollectionCaseUpdate(value: object): value is DebtCollectionCaseUpdate {
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function DebtCollectionCaseUpdateFromJSON(json: any): DebtCollectionCaseUpdate {
    return DebtCollectionCaseUpdateFromJSONTyped(json, false);
}

export function DebtCollectionCaseUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectionCaseUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemCreateFromJSON)),
        'contractDate': json['contractDate'] == null ? undefined : (new Date(json['contractDate'])),
        'environment': json['environment'] == null ? undefined : DebtCollectionEnvironmentFromJSON(json['environment']),
        'dueDate': json['dueDate'] == null ? undefined : (new Date(json['dueDate'])),
        'currency': json['currency'] == null ? undefined : json['currency'],
        'language': json['language'] == null ? undefined : json['language'],
        'billingAddress': json['billingAddress'] == null ? undefined : AddressCreateFromJSON(json['billingAddress']),
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'version': json['version'],
    };
}

export function DebtCollectionCaseUpdateToJSON(json: any): DebtCollectionCaseUpdate {
    return DebtCollectionCaseUpdateToJSONTyped(json, false);
}

export function DebtCollectionCaseUpdateToJSONTyped(value?: DebtCollectionCaseUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'lineItems': value['lineItems'] == null ? undefined : ((value['lineItems'] as Array<any>).map(LineItemCreateToJSON)),
        'contractDate': value['contractDate'] == null ? undefined : ((value['contractDate']).toISOString()),
        'environment': DebtCollectionEnvironmentToJSON(value['environment']),
        'dueDate': value['dueDate'] == null ? undefined : ((value['dueDate']).toISOString()),
        'currency': value['currency'],
        'language': value['language'],
        'billingAddress': AddressCreateToJSON(value['billingAddress']),
        'spaceViewId': value['spaceViewId'],
        'version': value['version'],
    };
}

