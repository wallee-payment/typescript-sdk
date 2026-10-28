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
import type { DunningCase } from './DunningCase';
import {
    DunningCaseFromJSON,
    DunningCaseFromJSONTyped,
    DunningCaseToJSON,
    DunningCaseToJSONTyped,
} from './DunningCase';
import type { DunningCaseLevelState } from './DunningCaseLevelState';
import {
    DunningCaseLevelStateFromJSON,
    DunningCaseLevelStateFromJSONTyped,
    DunningCaseLevelStateToJSON,
    DunningCaseLevelStateToJSONTyped,
} from './DunningCaseLevelState';
import type { Environment } from './Environment';
import {
    EnvironmentFromJSON,
    EnvironmentFromJSONTyped,
    EnvironmentToJSON,
    EnvironmentToJSONTyped,
} from './Environment';

/**
 * 
 * @export
 * @interface DunningCaseLevel
 */
export interface DunningCaseLevel {
    /**
     * 
     * @type {Date}
     * @memberof DunningCaseLevel
     */
    readonly canceledOn?: Date;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof DunningCaseLevel
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof DunningCaseLevel
     */
    readonly language?: string;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof DunningCaseLevel
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof DunningCaseLevel
     */
    readonly version?: number;
    /**
     * 
     * @type {number}
     * @memberof DunningCaseLevel
     */
    readonly flowLevel?: number;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof DunningCaseLevel
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {Date}
     * @memberof DunningCaseLevel
     */
    readonly timeoutOn?: Date;
    /**
     * 
     * @type {Environment}
     * @memberof DunningCaseLevel
     */
    environment?: Environment;
    /**
     * 
     * @type {Date}
     * @memberof DunningCaseLevel
     */
    readonly succeededOn?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof DunningCaseLevel
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof DunningCaseLevel
     */
    readonly invoice?: number;
    /**
     * 
     * @type {DunningCaseLevelState}
     * @memberof DunningCaseLevel
     */
    state?: DunningCaseLevelState;
    /**
     * The payment transaction this object is linked to.
     * @type {number}
     * @memberof DunningCaseLevel
     */
    readonly linkedTransaction?: number;
    /**
     * 
     * @type {Date}
     * @memberof DunningCaseLevel
     */
    readonly failedOn?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof DunningCaseLevel
     */
    readonly mostRecentLevel?: boolean;
    /**
     * 
     * @type {DunningCase}
     * @memberof DunningCaseLevel
     */
    dunningCase?: DunningCase;
}



/**
 * Check if a given object implements the DunningCaseLevel interface.
 */
export function instanceOfDunningCaseLevel(value: object): value is DunningCaseLevel {
    return true;
}

export function DunningCaseLevelFromJSON(json: any): DunningCaseLevel {
    return DunningCaseLevelFromJSONTyped(json, false);
}

export function DunningCaseLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DunningCaseLevel {
    if (json == null) {
        return json;
    }
    return {
        
        'canceledOn': json['canceledOn'] == null ? undefined : (new Date(json['canceledOn'])),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'language': json['language'] == null ? undefined : json['language'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'flowLevel': json['flowLevel'] == null ? undefined : json['flowLevel'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'timeoutOn': json['timeoutOn'] == null ? undefined : (new Date(json['timeoutOn'])),
        'environment': json['environment'] == null ? undefined : EnvironmentFromJSON(json['environment']),
        'succeededOn': json['succeededOn'] == null ? undefined : (new Date(json['succeededOn'])),
        'id': json['id'] == null ? undefined : json['id'],
        'invoice': json['invoice'] == null ? undefined : json['invoice'],
        'state': json['state'] == null ? undefined : DunningCaseLevelStateFromJSON(json['state']),
        'linkedTransaction': json['linkedTransaction'] == null ? undefined : json['linkedTransaction'],
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'mostRecentLevel': json['mostRecentLevel'] == null ? undefined : json['mostRecentLevel'],
        'dunningCase': json['dunningCase'] == null ? undefined : DunningCaseFromJSON(json['dunningCase']),
    };
}

export function DunningCaseLevelToJSON(json: any): DunningCaseLevel {
    return DunningCaseLevelToJSONTyped(json, false);
}

export function DunningCaseLevelToJSONTyped(value?: Omit<DunningCaseLevel, 'canceledOn'|'plannedPurgeDate'|'language'|'createdOn'|'version'|'flowLevel'|'linkedSpaceId'|'timeoutOn'|'succeededOn'|'id'|'invoice'|'linkedTransaction'|'failedOn'|'mostRecentLevel'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'environment': EnvironmentToJSON(value['environment']),
        'state': DunningCaseLevelStateToJSON(value['state']),
        'dunningCase': DunningCaseToJSON(value['dunningCase']),
    };
}

