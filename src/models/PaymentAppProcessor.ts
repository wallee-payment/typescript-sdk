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
import type { PaymentAppProcessorState } from './PaymentAppProcessorState';
import {
    PaymentAppProcessorStateFromJSON,
    PaymentAppProcessorStateFromJSONTyped,
    PaymentAppProcessorStateToJSON,
} from './PaymentAppProcessorState';
import type { PaymentProcessorConfiguration } from './PaymentProcessorConfiguration';
import {
    PaymentProcessorConfigurationFromJSON,
    PaymentProcessorConfigurationFromJSONTyped,
    PaymentProcessorConfigurationToJSON,
} from './PaymentProcessorConfiguration';
import type { ChargeAttemptEnvironment } from './ChargeAttemptEnvironment';
import {
    ChargeAttemptEnvironmentFromJSON,
    ChargeAttemptEnvironmentFromJSONTyped,
    ChargeAttemptEnvironmentToJSON,
} from './ChargeAttemptEnvironment';

/**
 * 
 * @export
 * @interface PaymentAppProcessor
 */
export interface PaymentAppProcessor {
    /**
     * A URL pointing to the documentation that explains how to configure and use the processor.
     * @type {string}
     * @memberof PaymentAppProcessor
     */
    readonly documentationUrl?: string;
    /**
     * 
     * @type {ChargeAttemptEnvironment}
     * @memberof PaymentAppProcessor
     */
    configuredEnvironment?: ChargeAttemptEnvironment;
    /**
     * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
     * @type {string}
     * @memberof PaymentAppProcessor
     */
    readonly externalId?: string;
    /**
     * An SVG icon representing the processor, displayed to the user in the interface.
     * @type {string}
     * @memberof PaymentAppProcessor
     */
    readonly svgIcon?: string;
    /**
     * The date and time when the processor was last updated.
     * @type {Date}
     * @memberof PaymentAppProcessor
     */
    readonly updatedOn?: Date;
    /**
     * Whether the processor is fully prepared and available for handling transactions in a production environment.
     * @type {boolean}
     * @memberof PaymentAppProcessor
     */
    readonly usableInProduction?: boolean;
    /**
     * The date and time when the processor was created.
     * @type {Date}
     * @memberof PaymentAppProcessor
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof PaymentAppProcessor
     */
    readonly version?: number;
    /**
     * 
     * @type {PaymentProcessorConfiguration}
     * @memberof PaymentAppProcessor
     */
    processorConfiguration?: PaymentProcessorConfiguration;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof PaymentAppProcessor
     */
    readonly linkedSpaceId?: number;
    /**
     * the date and time when the processor became fully usable and available for handling transactions in a production environment.
     * @type {Date}
     * @memberof PaymentAppProcessor
     */
    readonly usableInProductionSince?: Date;
    /**
     * The name used to identify the processor.
     * @type {string}
     * @memberof PaymentAppProcessor
     */
    readonly name?: string;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentAppProcessor
     */
    readonly id?: number;
    /**
     * The installation ID identifies the Web App installation.
     * @type {number}
     * @memberof PaymentAppProcessor
     */
    readonly installationId?: number;
    /**
     * A URL pointing to the site where merchants can set up production mode for the processor.
     * @type {string}
     * @memberof PaymentAppProcessor
     */
    readonly productionModeUrl?: string;
    /**
     * 
     * @type {PaymentAppProcessorState}
     * @memberof PaymentAppProcessor
     */
    state?: PaymentAppProcessorState;
}

/**
 * Check if a given object implements the PaymentAppProcessor interface.
 */
export function instanceOfPaymentAppProcessor(value: object): value is PaymentAppProcessor {
    return true;
}

export function PaymentAppProcessorFromJSON(json: any): PaymentAppProcessor {
    return PaymentAppProcessorFromJSONTyped(json, false);
}

export function PaymentAppProcessorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAppProcessor {
    if (json == null) {
        return json;
    }
    return {
        
        'documentationUrl': json['documentationUrl'] == null ? undefined : json['documentationUrl'],
        'configuredEnvironment': json['configuredEnvironment'] == null ? undefined : ChargeAttemptEnvironmentFromJSON(json['configuredEnvironment']),
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'svgIcon': json['svgIcon'] == null ? undefined : json['svgIcon'],
        'updatedOn': json['updatedOn'] == null ? undefined : (new Date(json['updatedOn'])),
        'usableInProduction': json['usableInProduction'] == null ? undefined : json['usableInProduction'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'processorConfiguration': json['processorConfiguration'] == null ? undefined : PaymentProcessorConfigurationFromJSON(json['processorConfiguration']),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'usableInProductionSince': json['usableInProductionSince'] == null ? undefined : (new Date(json['usableInProductionSince'])),
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'installationId': json['installationId'] == null ? undefined : json['installationId'],
        'productionModeUrl': json['productionModeUrl'] == null ? undefined : json['productionModeUrl'],
        'state': json['state'] == null ? undefined : PaymentAppProcessorStateFromJSON(json['state']),
    };
}

export function PaymentAppProcessorToJSON(value?: Omit<PaymentAppProcessor, 'documentationUrl'|'externalId'|'svgIcon'|'updatedOn'|'usableInProduction'|'createdOn'|'version'|'linkedSpaceId'|'usableInProductionSince'|'name'|'id'|'installationId'|'productionModeUrl'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'configuredEnvironment': ChargeAttemptEnvironmentToJSON(value['configuredEnvironment']),
        'processorConfiguration': PaymentProcessorConfigurationToJSON(value['processorConfiguration']),
        'state': PaymentAppProcessorStateToJSON(value['state']),
    };
}

