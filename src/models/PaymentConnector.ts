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
import type { CustomersPresence } from './CustomersPresence';
import {
    CustomersPresenceFromJSON,
    CustomersPresenceFromJSONTyped,
    CustomersPresenceToJSON,
    CustomersPresenceToJSONTyped,
} from './CustomersPresence';
import type { PaymentPrimaryRiskTaker } from './PaymentPrimaryRiskTaker';
import {
    PaymentPrimaryRiskTakerFromJSON,
    PaymentPrimaryRiskTakerFromJSONTyped,
    PaymentPrimaryRiskTakerToJSON,
    PaymentPrimaryRiskTakerToJSONTyped,
} from './PaymentPrimaryRiskTaker';
import type { PaymentProcessor } from './PaymentProcessor';
import {
    PaymentProcessorFromJSON,
    PaymentProcessorFromJSONTyped,
    PaymentProcessorToJSON,
    PaymentProcessorToJSONTyped,
} from './PaymentProcessor';
import type { PaymentMethod } from './PaymentMethod';
import {
    PaymentMethodFromJSON,
    PaymentMethodFromJSONTyped,
    PaymentMethodToJSON,
    PaymentMethodToJSONTyped,
} from './PaymentMethod';
import type { DataCollectionType } from './DataCollectionType';
import {
    DataCollectionTypeFromJSON,
    DataCollectionTypeFromJSONTyped,
    DataCollectionTypeToJSON,
    DataCollectionTypeToJSONTyped,
} from './DataCollectionType';
import type { PaymentConnectorFeature } from './PaymentConnectorFeature';
import {
    PaymentConnectorFeatureFromJSON,
    PaymentConnectorFeatureFromJSONTyped,
    PaymentConnectorFeatureToJSON,
    PaymentConnectorFeatureToJSONTyped,
} from './PaymentConnectorFeature';
import type { PaymentMethodBrand } from './PaymentMethodBrand';
import {
    PaymentMethodBrandFromJSON,
    PaymentMethodBrandFromJSONTyped,
    PaymentMethodBrandToJSON,
    PaymentMethodBrandToJSONTyped,
} from './PaymentMethodBrand';

/**
 * 
 * @export
 * @interface PaymentConnector
 */
export interface PaymentConnector {
    /**
     * The features that are supported by the connector.
     * @type {Set<PaymentConnectorFeature>}
     * @memberof PaymentConnector
     */
    readonly supportedFeatures?: Set<PaymentConnectorFeature>;
    /**
     * The types of customer's presence that are supported by the connector.
     * @type {Set<CustomersPresence>}
     * @memberof PaymentConnector
     */
    readonly supportedCustomersPresences?: Set<CustomersPresence>;
    /**
     * 
     * @type {DataCollectionType}
     * @memberof PaymentConnector
     */
    dataCollectionType?: DataCollectionType;
    /**
     * Whether the object was deprecated.
     * @type {boolean}
     * @memberof PaymentConnector
     */
    readonly deprecated?: boolean;
    /**
     * 
     * @type {PaymentPrimaryRiskTaker}
     * @memberof PaymentConnector
     */
    primaryRiskTaker?: PaymentPrimaryRiskTaker;
    /**
     * The localized description of the object.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentConnector
     */
    readonly description?: { [key: string]: string; };
    /**
     * 
     * @type {PaymentMethodBrand}
     * @memberof PaymentConnector
     */
    paymentMethodBrand?: PaymentMethodBrand;
    /**
     * 
     * @type {PaymentProcessor}
     * @memberof PaymentConnector
     */
    processor?: PaymentProcessor;
    /**
     * The deprecation reason describes why the object was deprecated.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentConnector
     */
    readonly deprecationReason?: { [key: string]: string; };
    /**
     * The currencies that are supported by the connector.
     * @type {Set<string>}
     * @memberof PaymentConnector
     */
    readonly supportedCurrencies?: Set<string>;
    /**
     * The localized name of the object.
     * @type {{ [key: string]: string; }}
     * @memberof PaymentConnector
     */
    readonly name?: { [key: string]: string; };
    /**
     * 
     * @type {PaymentMethod}
     * @memberof PaymentConnector
     */
    paymentMethod?: PaymentMethod;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof PaymentConnector
     */
    readonly id?: number;
}



/**
 * Check if a given object implements the PaymentConnector interface.
 */
export function instanceOfPaymentConnector(value: object): value is PaymentConnector {
    return true;
}

export function PaymentConnectorFromJSON(json: any): PaymentConnector {
    return PaymentConnectorFromJSONTyped(json, false);
}

export function PaymentConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentConnector {
    if (json == null) {
        return json;
    }
    return {
        
        'supportedFeatures': json['supportedFeatures'] == null ? undefined : (new Set((json['supportedFeatures'] as Array<any>).map(PaymentConnectorFeatureFromJSON))),
        'supportedCustomersPresences': json['supportedCustomersPresences'] == null ? undefined : (new Set((json['supportedCustomersPresences'] as Array<any>).map(CustomersPresenceFromJSON))),
        'dataCollectionType': json['dataCollectionType'] == null ? undefined : DataCollectionTypeFromJSON(json['dataCollectionType']),
        'deprecated': json['deprecated'] == null ? undefined : json['deprecated'],
        'primaryRiskTaker': json['primaryRiskTaker'] == null ? undefined : PaymentPrimaryRiskTakerFromJSON(json['primaryRiskTaker']),
        'description': json['description'] == null ? undefined : json['description'],
        'paymentMethodBrand': json['paymentMethodBrand'] == null ? undefined : PaymentMethodBrandFromJSON(json['paymentMethodBrand']),
        'processor': json['processor'] == null ? undefined : PaymentProcessorFromJSON(json['processor']),
        'deprecationReason': json['deprecationReason'] == null ? undefined : json['deprecationReason'],
        'supportedCurrencies': json['supportedCurrencies'] == null ? undefined : new Set(json['supportedCurrencies']),
        'name': json['name'] == null ? undefined : json['name'],
        'paymentMethod': json['paymentMethod'] == null ? undefined : PaymentMethodFromJSON(json['paymentMethod']),
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PaymentConnectorToJSON(json: any): PaymentConnector {
    return PaymentConnectorToJSONTyped(json, false);
}

export function PaymentConnectorToJSONTyped(value?: Omit<PaymentConnector, 'supportedFeatures'|'supportedCustomersPresences'|'deprecated'|'description'|'deprecationReason'|'supportedCurrencies'|'name'|'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dataCollectionType': DataCollectionTypeToJSON(value['dataCollectionType']),
        'primaryRiskTaker': PaymentPrimaryRiskTakerToJSON(value['primaryRiskTaker']),
        'paymentMethodBrand': PaymentMethodBrandToJSON(value['paymentMethodBrand']),
        'processor': PaymentProcessorToJSON(value['processor']),
        'paymentMethod': PaymentMethodToJSON(value['paymentMethod']),
    };
}

