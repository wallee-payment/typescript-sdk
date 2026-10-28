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
import type { PaymentInitiationAdviceFileState } from './PaymentInitiationAdviceFileState';
import {
    PaymentInitiationAdviceFileStateFromJSON,
    PaymentInitiationAdviceFileStateFromJSONTyped,
    PaymentInitiationAdviceFileStateToJSON,
    PaymentInitiationAdviceFileStateToJSONTyped,
} from './PaymentInitiationAdviceFileState';
import type { PaymentProcessor } from './PaymentProcessor';
import {
    PaymentProcessorFromJSON,
    PaymentProcessorFromJSONTyped,
    PaymentProcessorToJSON,
    PaymentProcessorToJSONTyped,
} from './PaymentProcessor';

/**
 * 
 * @export
 * @interface PaymentInitiationAdviceFile
 */
export interface PaymentInitiationAdviceFile {
    /**
     * The shipping date indicates the date on which the pain file was transferred to an external processing system.
     * @type {Date}
     * @memberof PaymentInitiationAdviceFile
     */
    readonly forwardedOn?: Date;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentInitiationAdviceFile
     */
    readonly linkedSpaceId?: number;
    /**
     * 
     * @type {Date}
     * @memberof PaymentInitiationAdviceFile
     */
    readonly processedOn?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PaymentInitiationAdviceFile
     */
    readonly fileGeneratedOn?: Date;
    /**
     * 
     * @type {string}
     * @memberof PaymentInitiationAdviceFile
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentInitiationAdviceFile
     */
    readonly id?: number;
    /**
     * 
     * @type {PaymentInitiationAdviceFileState}
     * @memberof PaymentInitiationAdviceFile
     */
    state?: PaymentInitiationAdviceFileState;
    /**
     * The created on date indicates the date on which the entity was stored into the database.
     * @type {Date}
     * @memberof PaymentInitiationAdviceFile
     */
    readonly createdOn?: Date;
    /**
     * 
     * @type {string}
     * @memberof PaymentInitiationAdviceFile
     */
    readonly failureMessage?: string;
    /**
     * 
     * @type {PaymentProcessor}
     * @memberof PaymentInitiationAdviceFile
     */
    processor?: PaymentProcessor;
}



/**
 * Check if a given object implements the PaymentInitiationAdviceFile interface.
 */
export function instanceOfPaymentInitiationAdviceFile(value: object): value is PaymentInitiationAdviceFile {
    return true;
}

export function PaymentInitiationAdviceFileFromJSON(json: any): PaymentInitiationAdviceFile {
    return PaymentInitiationAdviceFileFromJSONTyped(json, false);
}

export function PaymentInitiationAdviceFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationAdviceFile {
    if (json == null) {
        return json;
    }
    return {
        
        'forwardedOn': json['forwardedOn'] == null ? undefined : (new Date(json['forwardedOn'])),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'processedOn': json['processedOn'] == null ? undefined : (new Date(json['processedOn'])),
        'fileGeneratedOn': json['fileGeneratedOn'] == null ? undefined : (new Date(json['fileGeneratedOn'])),
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : PaymentInitiationAdviceFileStateFromJSON(json['state']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'failureMessage': json['failureMessage'] == null ? undefined : json['failureMessage'],
        'processor': json['processor'] == null ? undefined : PaymentProcessorFromJSON(json['processor']),
    };
}

export function PaymentInitiationAdviceFileToJSON(json: any): PaymentInitiationAdviceFile {
    return PaymentInitiationAdviceFileToJSONTyped(json, false);
}

export function PaymentInitiationAdviceFileToJSONTyped(value?: Omit<PaymentInitiationAdviceFile, 'forwardedOn'|'linkedSpaceId'|'processedOn'|'fileGeneratedOn'|'name'|'id'|'createdOn'|'failureMessage'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'state': PaymentInitiationAdviceFileStateToJSON(value['state']),
        'processor': PaymentProcessorToJSON(value['processor']),
    };
}

