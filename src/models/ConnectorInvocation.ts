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
import type { ConnectorInvocationStage } from './ConnectorInvocationStage';
import {
    ConnectorInvocationStageFromJSON,
    ConnectorInvocationStageFromJSONTyped,
    ConnectorInvocationStageToJSON,
} from './ConnectorInvocationStage';

/**
 * 
 * @export
 * @interface ConnectorInvocation
 */
export interface ConnectorInvocation {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof ConnectorInvocation
     */
    readonly linkedSpaceId?: number;
    /**
     * The duration, in milliseconds, taken to execute the connector invocation.
     * @type {number}
     * @memberof ConnectorInvocation
     */
    readonly timeTookInMilliseconds?: number;
    /**
     * 
     * @type {ConnectorInvocationStage}
     * @memberof ConnectorInvocation
     */
    stage?: ConnectorInvocationStage;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof ConnectorInvocation
     */
    readonly plannedPurgeDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof ConnectorInvocation
     */
    readonly id?: number;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof ConnectorInvocation
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof ConnectorInvocation
     */
    readonly version?: number;
    /**
     * The transaction that the connector invocation belongs to.
     * @type {number}
     * @memberof ConnectorInvocation
     */
    readonly transaction?: number;
}

/**
 * Check if a given object implements the ConnectorInvocation interface.
 */
export function instanceOfConnectorInvocation(value: object): value is ConnectorInvocation {
    return true;
}

export function ConnectorInvocationFromJSON(json: any): ConnectorInvocation {
    return ConnectorInvocationFromJSONTyped(json, false);
}

export function ConnectorInvocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorInvocation {
    if (json == null) {
        return json;
    }
    return {
        
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'timeTookInMilliseconds': json['timeTookInMilliseconds'] == null ? undefined : json['timeTookInMilliseconds'],
        'stage': json['stage'] == null ? undefined : ConnectorInvocationStageFromJSON(json['stage']),
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'transaction': json['transaction'] == null ? undefined : json['transaction'],
    };
}

export function ConnectorInvocationToJSON(value?: Omit<ConnectorInvocation, 'linkedSpaceId'|'timeTookInMilliseconds'|'plannedPurgeDate'|'id'|'createdOn'|'version'|'transaction'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'stage': ConnectorInvocationStageToJSON(value['stage']),
    };
}

