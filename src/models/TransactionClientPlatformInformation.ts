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
 * @interface TransactionClientPlatformInformation
 */
export interface TransactionClientPlatformInformation {
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof TransactionClientPlatformInformation
     */
    readonly spaceId?: number;
    /**
     * The type of integration that was used to collect the payment information.
     * @type {string}
     * @memberof TransactionClientPlatformInformation
     */
    readonly integrationType?: string;
    /**
     * The version of the operating system that was used to collect the payment information.
     * @type {string}
     * @memberof TransactionClientPlatformInformation
     */
    readonly osVersion?: string;
    /**
     * The type of platform that was used to collect the payment information, e.g. Android or iOS.
     * @type {string}
     * @memberof TransactionClientPlatformInformation
     */
    readonly platformType?: string;
    /**
     * The type of the SDK that was used to collect the payment information.
     * @type {string}
     * @memberof TransactionClientPlatformInformation
     */
    readonly sdkVersion?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof TransactionClientPlatformInformation
     */
    readonly id?: number;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof TransactionClientPlatformInformation
     */
    readonly version?: number;
    /**
     * The transaction that is associated with the client platform information.
     * @type {number}
     * @memberof TransactionClientPlatformInformation
     */
    readonly transaction?: number;
}

/**
 * Check if a given object implements the TransactionClientPlatformInformation interface.
 */
export function instanceOfTransactionClientPlatformInformation(value: object): value is TransactionClientPlatformInformation {
    return true;
}

export function TransactionClientPlatformInformationFromJSON(json: any): TransactionClientPlatformInformation {
    return TransactionClientPlatformInformationFromJSONTyped(json, false);
}

export function TransactionClientPlatformInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionClientPlatformInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'spaceId': json['spaceId'] == null ? undefined : json['spaceId'],
        'integrationType': json['integrationType'] == null ? undefined : json['integrationType'],
        'osVersion': json['osVersion'] == null ? undefined : json['osVersion'],
        'platformType': json['platformType'] == null ? undefined : json['platformType'],
        'sdkVersion': json['sdkVersion'] == null ? undefined : json['sdkVersion'],
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : json['version'],
        'transaction': json['transaction'] == null ? undefined : json['transaction'],
    };
}

export function TransactionClientPlatformInformationToJSON(json: any): TransactionClientPlatformInformation {
    return TransactionClientPlatformInformationToJSONTyped(json, false);
}

export function TransactionClientPlatformInformationToJSONTyped(value?: Omit<TransactionClientPlatformInformation, 'spaceId'|'integrationType'|'osVersion'|'platformType'|'sdkVersion'|'id'|'version'|'transaction'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

