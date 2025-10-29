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
import type { BankAccountState } from './BankAccountState';
import {
    BankAccountStateFromJSON,
    BankAccountStateFromJSONTyped,
    BankAccountStateToJSON,
} from './BankAccountState';

/**
 * 
 * @export
 * @interface BankAccount
 */
export interface BankAccount {
    /**
     * The identifier is used to uniquely identify the bank account.
     * @type {string}
     * @memberof BankAccount
     */
    readonly identifier?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof BankAccount
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof BankAccount
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The description serves as an alternative name for the bank account.
     * @type {string}
     * @memberof BankAccount
     */
    readonly description?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof BankAccount
     */
    readonly id?: number;
    /**
     * 
     * @type {BankAccountState}
     * @memberof BankAccount
     */
    state?: BankAccountState;
    /**
     * The bank account's type
     * @type {number}
     * @memberof BankAccount
     */
    readonly type?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof BankAccount
     */
    readonly version?: number;
}

/**
 * Check if a given object implements the BankAccount interface.
 */
export function instanceOfBankAccount(value: object): value is BankAccount {
    return true;
}

export function BankAccountFromJSON(json: any): BankAccount {
    return BankAccountFromJSONTyped(json, false);
}

export function BankAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccount {
    if (json == null) {
        return json;
    }
    return {
        
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : BankAccountStateFromJSON(json['state']),
        'type': json['type'] == null ? undefined : json['type'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function BankAccountToJSON(value?: Omit<BankAccount, 'identifier'|'linkedSpaceId'|'plannedPurgeDate'|'description'|'id'|'type'|'version'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'state': BankAccountStateToJSON(value['state']),
    };
}

