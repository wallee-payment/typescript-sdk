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
 * The debt collection case represents a try to collect the money from the debtor.
 * @export
 * @interface DebtCollectionCaseCreate
 */
export interface DebtCollectionCaseCreate {
    /**
     * The line items that are subject of this debt collection case.
     * @type {Array<LineItemCreate>}
     * @memberof DebtCollectionCaseCreate
     */
    lineItems?: Array<LineItemCreate>;
    /**
     * The date and time when the contract with the debtor was signed.
     * @type {Date}
     * @memberof DebtCollectionCaseCreate
     */
    contractDate?: Date;
    /**
     * 
     * @type {DebtCollectionEnvironment}
     * @memberof DebtCollectionCaseCreate
     */
    environment?: DebtCollectionEnvironment;
    /**
     * The date and time when the claim was due.
     * @type {Date}
     * @memberof DebtCollectionCaseCreate
     */
    dueDate?: Date;
    /**
     * The three-letter code (ISO 4217 format) of the case's currency.
     * @type {string}
     * @memberof DebtCollectionCaseCreate
     */
    currency?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof DebtCollectionCaseCreate
     */
    language?: string;
    /**
     * 
     * @type {AddressCreate}
     * @memberof DebtCollectionCaseCreate
     */
    billingAddress?: AddressCreate;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof DebtCollectionCaseCreate
     */
    spaceViewId?: number;
    /**
     * A unique reference to identify the debt collection case in communication with the debtor.
     * @type {string}
     * @memberof DebtCollectionCaseCreate
     */
    reference: string;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof DebtCollectionCaseCreate
     */
    externalId: string;
    /**
     * The configuration that the case is processed with.
     * @type {number}
     * @memberof DebtCollectionCaseCreate
     */
    collectorConfiguration?: number;
}

/**
 * Check if a given object implements the DebtCollectionCaseCreate interface.
 */
export function instanceOfDebtCollectionCaseCreate(value: object): value is DebtCollectionCaseCreate {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    return true;
}

export function DebtCollectionCaseCreateFromJSON(json: any): DebtCollectionCaseCreate {
    return DebtCollectionCaseCreateFromJSONTyped(json, false);
}

export function DebtCollectionCaseCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DebtCollectionCaseCreate {
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
        'reference': json['reference'],
        'externalId': json['externalId'],
        'collectorConfiguration': json['collectorConfiguration'] == null ? undefined : json['collectorConfiguration'],
    };
}

export function DebtCollectionCaseCreateToJSON(value?: DebtCollectionCaseCreate | null): any {
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
        'reference': value['reference'],
        'externalId': value['externalId'],
        'collectorConfiguration': value['collectorConfiguration'],
    };
}

