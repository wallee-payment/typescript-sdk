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
} from './AddressCreate';
import type { LineItemCreate } from './LineItemCreate';
import {
    LineItemCreateFromJSON,
    LineItemCreateFromJSONTyped,
    LineItemCreateToJSON,
} from './LineItemCreate';
import type { DebtCollectionEnvironment } from './DebtCollectionEnvironment';
import {
    DebtCollectionEnvironmentFromJSON,
    DebtCollectionEnvironmentFromJSONTyped,
    DebtCollectionEnvironmentToJSON,
} from './DebtCollectionEnvironment';

/**
 * 
 * @export
 * @interface AbstractDebtCollectionCaseUpdate
 */
export interface AbstractDebtCollectionCaseUpdate {
    /**
     * The line items that are subject of this debt collection case.
     * @type {Array<LineItemCreate>}
     * @memberof AbstractDebtCollectionCaseUpdate
     */
    lineItems?: Array<LineItemCreate>;
    /**
     * The date and time when the contract with the debtor was signed.
     * @type {Date}
     * @memberof AbstractDebtCollectionCaseUpdate
     */
    contractDate?: Date;
    /**
     * 
     * @type {DebtCollectionEnvironment}
     * @memberof AbstractDebtCollectionCaseUpdate
     */
    environment?: DebtCollectionEnvironment;
    /**
     * The date and time when the claim was due.
     * @type {Date}
     * @memberof AbstractDebtCollectionCaseUpdate
     */
    dueDate?: Date;
    /**
     * The three-letter code (ISO 4217 format) of the case's currency.
     * @type {string}
     * @memberof AbstractDebtCollectionCaseUpdate
     */
    currency?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof AbstractDebtCollectionCaseUpdate
     */
    language?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof AbstractDebtCollectionCaseUpdate
     */
    billingAddress?: AddressCreate;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof AbstractDebtCollectionCaseUpdate
     */
    spaceViewId?: number;
}

/**
 * Check if a given object implements the AbstractDebtCollectionCaseUpdate interface.
 */
export function instanceOfAbstractDebtCollectionCaseUpdate(value: object): value is AbstractDebtCollectionCaseUpdate {
    return true;
}

export function AbstractDebtCollectionCaseUpdateFromJSON(json: any): AbstractDebtCollectionCaseUpdate {
    return AbstractDebtCollectionCaseUpdateFromJSONTyped(json, false);
}

export function AbstractDebtCollectionCaseUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractDebtCollectionCaseUpdate {
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
    };
}

export function AbstractDebtCollectionCaseUpdateToJSON(value?: AbstractDebtCollectionCaseUpdate | null): any {
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
    };
}

