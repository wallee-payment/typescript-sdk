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
/**
 * 
 * @export
 * @interface BankAccountType
 */
export interface BankAccountType {
    /**
     * The identifier name specifies how the bank account type's identifier is called.
     * @type {{ [key: string]: string; }}
     * @memberof BankAccountType
     */
    readonly identifierName?: { [key: string]: string; };
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof BankAccountType
     */
    readonly name?: { [key: string]: string; };
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof BankAccountType
     */
    readonly description?: { [key: string]: string; };
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof BankAccountType
     */
    readonly id?: number;
}

/**
 * Check if a given object implements the BankAccountType interface.
 */
export function instanceOfBankAccountType(value: object): value is BankAccountType {
    return true;
}

export function BankAccountTypeFromJSON(json: any): BankAccountType {
    return BankAccountTypeFromJSONTyped(json, false);
}

export function BankAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccountType {
    if (json == null) {
        return json;
    }
    return {
        
        'identifierName': json['identifierName'] == null ? undefined : json['identifierName'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function BankAccountTypeToJSON(value?: Omit<BankAccountType, 'identifierName'|'name'|'description'|'id'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

