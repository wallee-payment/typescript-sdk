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
import type { BankAccountEnvironment } from './BankAccountEnvironment';
import {
    BankAccountEnvironmentFromJSON,
    BankAccountEnvironmentFromJSONTyped,
    BankAccountEnvironmentToJSON,
    BankAccountEnvironmentToJSONTyped,
} from './BankAccountEnvironment';
import type { BankAccount } from './BankAccount';
import {
    BankAccountFromJSON,
    BankAccountFromJSONTyped,
    BankAccountToJSON,
    BankAccountToJSONTyped,
} from './BankAccount';

/**
 * 
 * @export
 * @interface CurrencyBankAccount
 */
export interface CurrencyBankAccount {
    /**
     * 
     * @type {BankAccount}
     * @memberof CurrencyBankAccount
     */
    bankAccount?: BankAccount;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof CurrencyBankAccount
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {BankAccountEnvironment}
     * @memberof CurrencyBankAccount
     */
    environment?: BankAccountEnvironment;
    /**
     * The currency associated with the bank account.
     * @type {string}
     * @memberof CurrencyBankAccount
     */
    readonly currency?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof CurrencyBankAccount
     */
    readonly id?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof CurrencyBankAccount
     */
    readonly version?: number;
}



/**
 * Check if a given object implements the CurrencyBankAccount interface.
 */
export function instanceOfCurrencyBankAccount(value: object): value is CurrencyBankAccount {
    return true;
}

export function CurrencyBankAccountFromJSON(json: any): CurrencyBankAccount {
    return CurrencyBankAccountFromJSONTyped(json, false);
}

export function CurrencyBankAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyBankAccount {
    if (json == null) {
        return json;
    }
    return {
        
        'bankAccount': json['bankAccount'] == null ? undefined : BankAccountFromJSON(json['bankAccount']),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'environment': json['environment'] == null ? undefined : BankAccountEnvironmentFromJSON(json['environment']),
        'currency': json['currency'] == null ? undefined : json['currency'],
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function CurrencyBankAccountToJSON(json: any): CurrencyBankAccount {
    return CurrencyBankAccountToJSONTyped(json, false);
}

export function CurrencyBankAccountToJSONTyped(value?: Omit<CurrencyBankAccount, 'linkedSpaceId'|'currency'|'id'|'version'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bankAccount': BankAccountToJSON(value['bankAccount']),
        'environment': BankAccountEnvironmentToJSON(value['environment']),
    };
}

