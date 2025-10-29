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
import type { SubscriptionVersionState } from './SubscriptionVersionState';
import {
    SubscriptionVersionStateFromJSON,
    SubscriptionVersionStateFromJSONTyped,
    SubscriptionVersionStateToJSON,
} from './SubscriptionVersionState';
import type { BillingCycleModel } from './BillingCycleModel';
import {
    BillingCycleModelFromJSON,
    BillingCycleModelFromJSONTyped,
    BillingCycleModelToJSON,
} from './BillingCycleModel';
import type { SubscriptionComponentConfiguration } from './SubscriptionComponentConfiguration';
import {
    SubscriptionComponentConfigurationFromJSON,
    SubscriptionComponentConfigurationFromJSONTyped,
    SubscriptionComponentConfigurationToJSON,
} from './SubscriptionComponentConfiguration';
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';
import type { SubscriptionProductVersion } from './SubscriptionProductVersion';
import {
    SubscriptionProductVersionFromJSON,
    SubscriptionProductVersionFromJSONTyped,
    SubscriptionProductVersionToJSON,
} from './SubscriptionProductVersion';

/**
 * 
 * @export
 * @interface SubscriptionVersion
 */
export interface SubscriptionVersion {
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof SubscriptionVersion
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof SubscriptionVersion
     */
    readonly language?: string;
    /**
     * 
     * @type {Subscription}
     * @memberof SubscriptionVersion
     */
    subscription?: Subscription;
    /**
     * The date and time when the subscription version was created.
     * @type {Date}
     * @memberof SubscriptionVersion
     */
    readonly createdOn?: Date;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof SubscriptionVersion
     */
    readonly version?: number;
    /**
     * The date and time when the subscription version was terminated.
     * @type {Date}
     * @memberof SubscriptionVersion
     */
    readonly terminatedOn?: Date;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof SubscriptionVersion
     */
    readonly linkedSpaceId?: number;
    /**
     * The date and time when the termination of the subscription version was issued.
     * @type {Date}
     * @memberof SubscriptionVersion
     */
    readonly terminationIssuedOn?: Date;
    /**
     * The configurations of the subscription's components.
     * @type {Set<SubscriptionComponentConfiguration>}
     * @memberof SubscriptionVersion
     */
    readonly componentConfigurations?: Set<SubscriptionComponentConfiguration>;
    /**
     * 
     * @type {SubscriptionProductVersion}
     * @memberof SubscriptionVersion
     */
    productVersion?: SubscriptionProductVersion;
    /**
     * The date and time when the subscription version was activated.
     * @type {Date}
     * @memberof SubscriptionVersion
     */
    readonly activatedOn?: Date;
    /**
     * The date and time when the termination of the subscription version started.
     * @type {Date}
     * @memberof SubscriptionVersion
     */
    readonly terminatingOn?: Date;
    /**
     * The three-letter code (ISO 4217 format) of the currency used to invoice the customer. Must be one of the currencies supported by the product.
     * @type {string}
     * @memberof SubscriptionVersion
     */
    readonly billingCurrency?: string;
    /**
     * The date and time when the last period is expected to end.
     * @type {Date}
     * @memberof SubscriptionVersion
     */
    readonly expectedLastPeriodEnd?: Date;
    /**
     * 
     * @type {BillingCycleModel}
     * @memberof SubscriptionVersion
     */
    billingCycleModel?: BillingCycleModel;
    /**
     * The date and time when the termination of the subscription version is planned.
     * @type {Date}
     * @memberof SubscriptionVersion
     */
    readonly plannedTerminationDate?: Date;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof SubscriptionVersion
     */
    readonly id?: number;
    /**
     * 
     * @type {SubscriptionVersionState}
     * @memberof SubscriptionVersion
     */
    state?: SubscriptionVersionState;
    /**
     * The date and time when the subscription version failed.
     * @type {Date}
     * @memberof SubscriptionVersion
     */
    readonly failedOn?: Date;
}

/**
 * Check if a given object implements the SubscriptionVersion interface.
 */
export function instanceOfSubscriptionVersion(value: object): value is SubscriptionVersion {
    return true;
}

export function SubscriptionVersionFromJSON(json: any): SubscriptionVersion {
    return SubscriptionVersionFromJSONTyped(json, false);
}

export function SubscriptionVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'language': json['language'] == null ? undefined : json['language'],
        'subscription': json['subscription'] == null ? undefined : SubscriptionFromJSON(json['subscription']),
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'version': json['version'] == null ? undefined : json['version'],
        'terminatedOn': json['terminatedOn'] == null ? undefined : (new Date(json['terminatedOn'])),
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'terminationIssuedOn': json['terminationIssuedOn'] == null ? undefined : (new Date(json['terminationIssuedOn'])),
        'componentConfigurations': json['componentConfigurations'] == null ? undefined : (new Set((json['componentConfigurations'] as Array<any>).map(SubscriptionComponentConfigurationFromJSON))),
        'productVersion': json['productVersion'] == null ? undefined : SubscriptionProductVersionFromJSON(json['productVersion']),
        'activatedOn': json['activatedOn'] == null ? undefined : (new Date(json['activatedOn'])),
        'terminatingOn': json['terminatingOn'] == null ? undefined : (new Date(json['terminatingOn'])),
        'billingCurrency': json['billingCurrency'] == null ? undefined : json['billingCurrency'],
        'expectedLastPeriodEnd': json['expectedLastPeriodEnd'] == null ? undefined : (new Date(json['expectedLastPeriodEnd'])),
        'billingCycleModel': json['billingCycleModel'] == null ? undefined : BillingCycleModelFromJSON(json['billingCycleModel']),
        'plannedTerminationDate': json['plannedTerminationDate'] == null ? undefined : (new Date(json['plannedTerminationDate'])),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : SubscriptionVersionStateFromJSON(json['state']),
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
    };
}

export function SubscriptionVersionToJSON(value?: Omit<SubscriptionVersion, 'plannedPurgeDate'|'language'|'createdOn'|'version'|'terminatedOn'|'linkedSpaceId'|'terminationIssuedOn'|'componentConfigurations'|'activatedOn'|'terminatingOn'|'billingCurrency'|'expectedLastPeriodEnd'|'plannedTerminationDate'|'id'|'failedOn'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'subscription': SubscriptionToJSON(value['subscription']),
        'productVersion': SubscriptionProductVersionToJSON(value['productVersion']),
        'billingCycleModel': BillingCycleModelToJSON(value['billingCycleModel']),
        'state': SubscriptionVersionStateToJSON(value['state']),
    };
}

