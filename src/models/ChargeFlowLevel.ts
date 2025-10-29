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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';
import type { Charge } from './Charge';
import {
    ChargeFromJSON,
    ChargeFromJSONTyped,
    ChargeToJSON,
} from './Charge';
import type { ChargeFlowLevelConfiguration } from './ChargeFlowLevelConfiguration';
import {
    ChargeFlowLevelConfigurationFromJSON,
    ChargeFlowLevelConfigurationFromJSONTyped,
    ChargeFlowLevelConfigurationToJSON,
} from './ChargeFlowLevelConfiguration';
import type { ChargeFlowLevelState } from './ChargeFlowLevelState';
import {
    ChargeFlowLevelStateFromJSON,
    ChargeFlowLevelStateFromJSONTyped,
    ChargeFlowLevelStateToJSON,
} from './ChargeFlowLevelState';

/**
 * 
 * @export
 * @interface ChargeFlowLevel
 */
export interface ChargeFlowLevel {
    /**
     * 
     * @type {Charge}
     * @memberof ChargeFlowLevel
     */
    synchronousCharge?: Charge;
    /**
     * 
     * @type {ChargeFlowLevelConfiguration}
     * @memberof ChargeFlowLevel
     */
    _configuration?: ChargeFlowLevelConfiguration;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof ChargeFlowLevel
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof ChargeFlowLevel
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ChargeFlowLevel
     */
    readonly version?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ChargeFlowLevel
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the charge flow level will expire.
     * @type {Date}
     * @memberof ChargeFlowLevel
     */
    readonly timeoutOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ChargeFlowLevel
     */
    readonly id?: number;
    /**
     * 
     * @type {ChargeFlowLevelState}
     * @memberof ChargeFlowLevel
     */
    state?: ChargeFlowLevelState;
    /**
     * 
     * @type {Charge}
     * @memberof ChargeFlowLevel
     */
    asynchronousCharge?: Charge;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof ChargeFlowLevel
     */
    readonly linkedTransaction?: number;
    /**
     * 
     * @type {Charge}
     * @memberof ChargeFlowLevel
     */
    tokenCharge?: Charge;
    /**
     * 
     * @type {Transaction}
     * @memberof ChargeFlowLevel
     */
    transaction?: Transaction;
}

/**
 * Check if a given object implements the ChargeFlowLevel interface.
 */
export function instanceOfChargeFlowLevel(value: object): value is ChargeFlowLevel {
    return true;
}

export function ChargeFlowLevelFromJSON(json: any): ChargeFlowLevel {
    return ChargeFlowLevelFromJSONTyped(json, false);
}

export function ChargeFlowLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeFlowLevel {
    if (json == null) {
        return json;
    }
    return {
        
        'synchronousCharge': json['synchronousCharge'] == null ? undefined : ChargeFromJSON(json['synchronousCharge']),
        '_configuration': json['configuration'] == null ? undefined : ChargeFlowLevelConfigurationFromJSON(json['configuration']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'timeoutOn': json['timeoutOn'] == null ? undefined : (new Date(json['timeoutOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : ChargeFlowLevelStateFromJSON(json['state']),
        'asynchronousCharge': json['asynchronousCharge'] == null ? undefined : ChargeFromJSON(json['asynchronousCharge']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'tokenCharge': json['tokenCharge'] == null ? undefined : ChargeFromJSON(json['tokenCharge']),
        'transaction': json['transaction'] == null ? undefined : TransactionFromJSON(json['transaction']),
    };
}

export function ChargeFlowLevelToJSON(value?: Omit<ChargeFlowLevel, 'plannedPurgeDate'|'createdOn'|'version'|'linkedSpaceId'|'timeoutOn'|'id'|'linkedTransaction'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'synchronousCharge': ChargeToJSON(value['synchronousCharge']),
        'configuration': ChargeFlowLevelConfigurationToJSON(value['_configuration']),
        'state': ChargeFlowLevelStateToJSON(value['state']),
        'asynchronousCharge': ChargeToJSON(value['asynchronousCharge']),
        'tokenCharge': ChargeToJSON(value['tokenCharge']),
        'transaction': TransactionToJSON(value['transaction']),
    };
}

