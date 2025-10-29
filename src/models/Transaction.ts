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
} from './CustomersPresence';
import type { TransactionState } from './TransactionState';
import {
    TransactionStateFromJSON,
    TransactionStateFromJSONTyped,
    TransactionStateToJSON,
} from './TransactionState';
import type { TransactionEnvironmentSelectionStrategy } from './TransactionEnvironmentSelectionStrategy';
import {
    TransactionEnvironmentSelectionStrategyFromJSON,
    TransactionEnvironmentSelectionStrategyFromJSONTyped,
    TransactionEnvironmentSelectionStrategyToJSON,
} from './TransactionEnvironmentSelectionStrategy';
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { TokenizationMode } from './TokenizationMode';
import {
    TokenizationModeFromJSON,
    TokenizationModeFromJSONTyped,
    TokenizationModeToJSON,
} from './TokenizationMode';
import type { TransactionUserInterfaceType } from './TransactionUserInterfaceType';
import {
    TransactionUserInterfaceTypeFromJSON,
    TransactionUserInterfaceTypeFromJSONTyped,
    TransactionUserInterfaceTypeToJSON,
} from './TransactionUserInterfaceType';
import type { LineItem } from './LineItem';
import {
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
} from './LineItem';
import type { TransactionGroup } from './TransactionGroup';
import {
    TransactionGroupFromJSON,
    TransactionGroupFromJSONTyped,
    TransactionGroupToJSON,
} from './TransactionGroup';
import type { Token } from './Token';
import {
    TokenFromJSON,
    TokenFromJSONTyped,
    TokenToJSON,
} from './Token';
import type { PaymentTerminal } from './PaymentTerminal';
import {
    PaymentTerminalFromJSON,
    PaymentTerminalFromJSONTyped,
    PaymentTerminalToJSON,
} from './PaymentTerminal';
import type { PaymentConnectorConfiguration } from './PaymentConnectorConfiguration';
import {
    PaymentConnectorConfigurationFromJSON,
    PaymentConnectorConfigurationFromJSONTyped,
    PaymentConnectorConfigurationToJSON,
} from './PaymentConnectorConfiguration';
import type { FailureReason } from './FailureReason';
import {
    FailureReasonFromJSON,
    FailureReasonFromJSONTyped,
    FailureReasonToJSON,
} from './FailureReason';
import type { TransactionCompletionBehavior } from './TransactionCompletionBehavior';
import {
    TransactionCompletionBehaviorFromJSON,
    TransactionCompletionBehaviorFromJSONTyped,
    TransactionCompletionBehaviorToJSON,
} from './TransactionCompletionBehavior';
import type { Environment } from './Environment';
import {
    EnvironmentFromJSON,
    EnvironmentFromJSONTyped,
    EnvironmentToJSON,
} from './Environment';
import type { ChargeAttemptEnvironment } from './ChargeAttemptEnvironment';
import {
    ChargeAttemptEnvironmentFromJSON,
    ChargeAttemptEnvironmentFromJSONTyped,
    ChargeAttemptEnvironmentToJSON,
} from './ChargeAttemptEnvironment';

/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {Transaction}
     * @memberof Transaction
     */
    parent?: Transaction;
    /**
     * The total amount that was settled, in the transaction's currency.
     * @type {number}
     * @memberof Transaction
     */
    readonly totalSettledAmount?: number;
    /**
     * Allows to link the transaction to the data collected from the customer's device.
     * @type {string}
     * @memberof Transaction
     */
    readonly deviceSessionIdentifier?: string;
    /**
     * The date and time when the processing of the transaction was started.
     * @type {Date}
     * @memberof Transaction
     */
    readonly processingOn?: Date;
    /**
     * The merchant's reference used to identify the invoice.
     * @type {string}
     * @memberof Transaction
     */
    readonly invoiceMerchantReference?: string;
    /**
     * The language that is linked to the object.
     * @type {string}
     * @memberof Transaction
     */
    readonly language?: string;
    /**
     * The date and time when the transaction was created.
     * @type {Date}
     * @memberof Transaction
     */
    readonly confirmedOn?: Date;
    /**
     * The line items purchased by the customer.
     * @type {Array<LineItem>}
     * @memberof Transaction
     */
    readonly lineItems?: Array<LineItem>;
    /**
     * The 'Accept Language' header of the customer's web browser.
     * @type {string}
     * @memberof Transaction
     */
    readonly acceptLanguageHeader?: string;
    /**
     * Whether Java is enabled on the customer's web browser.
     * @type {boolean}
     * @memberof Transaction
     */
    readonly javaEnabled?: boolean;
    /**
     * The ID of the user the transaction was confirmed by.
     * @type {number}
     * @memberof Transaction
     */
    readonly confirmedBy?: number;
    /**
     * 
     * @type {PaymentConnectorConfiguration}
     * @memberof Transaction
     */
    paymentConnectorConfiguration?: PaymentConnectorConfiguration;
    /**
     * A unique identifier for the object.
     * @type {number}
     * @memberof Transaction
     */
    readonly id?: number;
    /**
     * 
     * @type {TransactionState}
     * @memberof Transaction
     */
    state?: TransactionState;
    /**
     * The window width of the customer's web browser.
     * @type {string}
     * @memberof Transaction
     */
    readonly windowWidth?: string;
    /**
     * The payment method configurations that can be used to authorize the transaction.
     * @type {Array<number>}
     * @memberof Transaction
     */
    readonly allowedPaymentMethodConfigurations?: Array<number>;
    /**
     * 
     * @type {TransactionGroup}
     * @memberof Transaction
     */
    group?: TransactionGroup;
    /**
     * Whether the customer can make further payment attempts if the first one has failed. Default is true.
     * @type {boolean}
     * @memberof Transaction
     */
    readonly chargeRetryEnabled?: boolean;
    /**
     * The 'Accept' header of the customer's web browser.
     * @type {string}
     * @memberof Transaction
     */
    readonly acceptHeader?: string;
    /**
     * The 'User Agent' header of the customer's web browser.
     * @type {string}
     * @memberof Transaction
     */
    readonly userAgentHeader?: string;
    /**
     * The name of the shipping method used to ship the products.
     * @type {string}
     * @memberof Transaction
     */
    readonly shippingMethod?: string;
    /**
     * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
     * @type {Date}
     * @memberof Transaction
     */
    readonly plannedPurgeDate?: Date;
    /**
     * The URL to redirect the customer back to after they successfully authenticated their payment.
     * @type {string}
     * @memberof Transaction
     */
    readonly successUrl?: string;
    /**
     * The customer's time zone, which affects how dates and times are formatted when communicating with the customer.
     * @type {string}
     * @memberof Transaction
     */
    readonly timeZone?: string;
    /**
     * The ID of the space view this object is linked to.
     * @type {number}
     * @memberof Transaction
     */
    readonly spaceViewId?: number;
    /**
     * The message that can be displayed to the customer explaining why the transaction failed, in the customer's language.
     * @type {string}
     * @memberof Transaction
     */
    readonly userFailureMessage?: string;
    /**
     * 
     * @type {TransactionCompletionBehavior}
     * @memberof Transaction
     */
    completionBehavior?: TransactionCompletionBehavior;
    /**
     * The version is used for optimistic locking and incremented whenever the object is updated.
     * @type {number}
     * @memberof Transaction
     */
    readonly version?: number;
    /**
     * The country determined from the IP address of the customer's device.
     * @type {string}
     * @memberof Transaction
     */
    readonly internetProtocolAddressCountry?: string;
    /**
     * The ID of the space this object belongs to.
     * @type {number}
     * @memberof Transaction
     */
    readonly linkedSpaceId?: number;
    /**
     * This date and time when the decision was made as to whether the order should be shipped.
     * @type {Date}
     * @memberof Transaction
     */
    readonly deliveryDecisionMadeOn?: Date;
    /**
     * 
     * @type {ChargeAttemptEnvironment}
     * @memberof Transaction
     */
    authorizationEnvironment?: ChargeAttemptEnvironment;
    /**
     * Whether the transaction can be confirmed automatically or whether this must be done explicitly via the API. Default is true.
     * @type {boolean}
     * @memberof Transaction
     */
    readonly autoConfirmationEnabled?: boolean;
    /**
     * 
     * @type {FailureReason}
     * @memberof Transaction
     */
    failureReason?: FailureReason;
    /**
     * The total of all fees charged, in the transaction's currency.
     * @type {number}
     * @memberof Transaction
     */
    readonly totalAppliedFees?: number;
    /**
     * 
     * @type {CustomersPresence}
     * @memberof Transaction
     */
    customersPresence?: CustomersPresence;
    /**
     * The date and time when the transaction failed.
     * @type {Date}
     * @memberof Transaction
     */
    readonly failedOn?: Date;
    /**
     * The total amount that was refunded, in the transaction's currency.
     * @type {number}
     * @memberof Transaction
     */
    readonly refundedAmount?: number;
    /**
     * The sum of all line item prices including taxes in the transaction's currency.
     * @type {number}
     * @memberof Transaction
     */
    readonly authorizationAmount?: number;
    /**
     * The screen width of the customer's web browser.
     * @type {string}
     * @memberof Transaction
     */
    readonly screenWidth?: string;
    /**
     * 
     * @type {TransactionEnvironmentSelectionStrategy}
     * @memberof Transaction
     */
    environmentSelectionStrategy?: TransactionEnvironmentSelectionStrategy;
    /**
     * The customer's email address.
     * @type {string}
     * @memberof Transaction
     */
    readonly customerEmailAddress?: string;
    /**
     * The window height of the customer's web browser.
     * @type {string}
     * @memberof Transaction
     */
    readonly windowHeight?: string;
    /**
     * 
     * @type {TokenizationMode}
     * @memberof Transaction
     */
    tokenizationMode?: TokenizationMode;
    /**
     * The date and time when the transaction must be authorized, otherwise it will canceled.
     * @type {Date}
     * @memberof Transaction
     */
    readonly authorizationTimeoutOn?: Date;
    /**
     * The payment method brands that can be used to authorize the transaction.
     * @type {Array<number>}
     * @memberof Transaction
     */
    readonly allowedPaymentMethodBrands?: Array<number>;
    /**
     * The date and time when the object was created.
     * @type {Date}
     * @memberof Transaction
     */
    readonly createdOn?: Date;
    /**
     * Allow to store additional information about the object.
     * @type {{ [key: string]: string; }}
     * @memberof Transaction
     */
    readonly metaData?: { [key: string]: string; };
    /**
     * Whether email sending is deactivated for the transaction. Default is false.
     * @type {boolean}
     * @memberof Transaction
     */
    readonly emailsDisabled?: boolean;
    /**
     * 
     * @type {TransactionUserInterfaceType}
     * @memberof Transaction
     */
    userInterfaceType?: TransactionUserInterfaceType;
    /**
     * The unique identifier of the customer in the external system.
     * @type {string}
     * @memberof Transaction
     */
    readonly customerId?: string;
    /**
     * The three-letter code (ISO 4217 format) of the transaction's currency.
     * @type {string}
     * @memberof Transaction
     */
    readonly currency?: string;
    /**
     * The merchant's reference used to identify the transaction.
     * @type {string}
     * @memberof Transaction
     */
    readonly merchantReference?: string;
    /**
     * The sales channel through which the transaction was placed.
     * @type {number}
     * @memberof Transaction
     */
    readonly authorizationSalesChannel?: number;
    /**
     * The number of years the transaction is kept after its authorization.
     * @type {number}
     * @memberof Transaction
     */
    readonly yearsToKeep?: number;
    /**
     * The total amount that was completed, in the transaction's currency.
     * @type {number}
     * @memberof Transaction
     */
    readonly completedAmount?: number;
    /**
     * The screen height of the customer's web browser.
     * @type {string}
     * @memberof Transaction
     */
    readonly screenHeight?: string;
    /**
     * The IP address of the customer's device.
     * @type {string}
     * @memberof Transaction
     */
    readonly internetProtocolAddress?: string;
    /**
     * 
     * @type {PaymentTerminal}
     * @memberof Transaction
     */
    terminal?: PaymentTerminal;
    /**
     * The date and time when the transaction reaches its end of live. No further actions can be carried out at this time.
     * @type {Date}
     * @memberof Transaction
     */
    readonly endOfLife?: Date;
    /**
     * 
     * @type {Token}
     * @memberof Transaction
     */
    token?: Token;
    /**
     * 
     * @type {Environment}
     * @memberof Transaction
     */
    environment?: Environment;
    /**
     * The screen color depth of the customer's web browser.
     * @type {string}
     * @memberof Transaction
     */
    readonly screenColorDepth?: string;
    /**
     * The ID of the user the transaction was created by.
     * @type {number}
     * @memberof Transaction
     */
    readonly createdBy?: number;
    /**
     * The date and time when the transaction was completed.
     * @type {Date}
     * @memberof Transaction
     */
    readonly completedOn?: Date;
    /**
     * The date and time when the transaction is completed automatically.
     * @type {Date}
     * @memberof Transaction
     */
    readonly completionTimeoutOn?: Date;
    /**
     * 
     * @type {Address}
     * @memberof Transaction
     */
    shippingAddress?: Address;
    /**
     * 
     * @type {Address}
     * @memberof Transaction
     */
    billingAddress?: Address;
    /**
     * The date and time when the transaction was authorized.
     * @type {Date}
     * @memberof Transaction
     */
    readonly authorizedOn?: Date;
    /**
     * The URL to redirect the customer back to after they canceled or failed to authenticated their payment.
     * @type {string}
     * @memberof Transaction
     */
    readonly failedUrl?: string;
}

/**
 * Check if a given object implements the Transaction interface.
 */
export function instanceOfTransaction(value: object): value is Transaction {
    return true;
}

export function TransactionFromJSON(json: any): Transaction {
    return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction {
    if (json == null) {
        return json;
    }
    return {
        
        'parent': json['parent'] == null ? undefined : TransactionFromJSON(json['parent']),
        'totalSettledAmount': json['totalSettledAmount'] == null ? undefined : json['totalSettledAmount'],
        'deviceSessionIdentifier': json['deviceSessionIdentifier'] == null ? undefined : json['deviceSessionIdentifier'],
        'processingOn': json['processingOn'] == null ? undefined : (new Date(json['processingOn'])),
        'invoiceMerchantReference': json['invoiceMerchantReference'] == null ? undefined : json['invoiceMerchantReference'],
        'language': json['language'] == null ? undefined : json['language'],
        'confirmedOn': json['confirmedOn'] == null ? undefined : (new Date(json['confirmedOn'])),
        'lineItems': json['lineItems'] == null ? undefined : ((json['lineItems'] as Array<any>).map(LineItemFromJSON)),
        'acceptLanguageHeader': json['acceptLanguageHeader'] == null ? undefined : json['acceptLanguageHeader'],
        'javaEnabled': json['javaEnabled'] == null ? undefined : json['javaEnabled'],
        'confirmedBy': json['confirmedBy'] == null ? undefined : json['confirmedBy'],
        'paymentConnectorConfiguration': json['paymentConnectorConfiguration'] == null ? undefined : PaymentConnectorConfigurationFromJSON(json['paymentConnectorConfiguration']),
        'id': json['id'] == null ? undefined : json['id'],
        'state': json['state'] == null ? undefined : TransactionStateFromJSON(json['state']),
        'windowWidth': json['windowWidth'] == null ? undefined : json['windowWidth'],
        'allowedPaymentMethodConfigurations': json['allowedPaymentMethodConfigurations'] == null ? undefined : json['allowedPaymentMethodConfigurations'],
        'group': json['group'] == null ? undefined : TransactionGroupFromJSON(json['group']),
        'chargeRetryEnabled': json['chargeRetryEnabled'] == null ? undefined : json['chargeRetryEnabled'],
        'acceptHeader': json['acceptHeader'] == null ? undefined : json['acceptHeader'],
        'userAgentHeader': json['userAgentHeader'] == null ? undefined : json['userAgentHeader'],
        'shippingMethod': json['shippingMethod'] == null ? undefined : json['shippingMethod'],
        'plannedPurgeDate': json['plannedPurgeDate'] == null ? undefined : (new Date(json['plannedPurgeDate'])),
        'successUrl': json['successUrl'] == null ? undefined : json['successUrl'],
        'timeZone': json['timeZone'] == null ? undefined : json['timeZone'],
        'spaceViewId': json['spaceViewId'] == null ? undefined : json['spaceViewId'],
        'userFailureMessage': json['userFailureMessage'] == null ? undefined : json['userFailureMessage'],
        'completionBehavior': json['completionBehavior'] == null ? undefined : TransactionCompletionBehaviorFromJSON(json['completionBehavior']),
        'version': json['version'] == null ? undefined : json['version'],
        'internetProtocolAddressCountry': json['internetProtocolAddressCountry'] == null ? undefined : json['internetProtocolAddressCountry'],
        'linkedSpaceId': json['linkedSpaceId'] == null ? undefined : json['linkedSpaceId'],
        'deliveryDecisionMadeOn': json['deliveryDecisionMadeOn'] == null ? undefined : (new Date(json['deliveryDecisionMadeOn'])),
        'authorizationEnvironment': json['authorizationEnvironment'] == null ? undefined : ChargeAttemptEnvironmentFromJSON(json['authorizationEnvironment']),
        'autoConfirmationEnabled': json['autoConfirmationEnabled'] == null ? undefined : json['autoConfirmationEnabled'],
        'failureReason': json['failureReason'] == null ? undefined : FailureReasonFromJSON(json['failureReason']),
        'totalAppliedFees': json['totalAppliedFees'] == null ? undefined : json['totalAppliedFees'],
        'customersPresence': json['customersPresence'] == null ? undefined : CustomersPresenceFromJSON(json['customersPresence']),
        'failedOn': json['failedOn'] == null ? undefined : (new Date(json['failedOn'])),
        'refundedAmount': json['refundedAmount'] == null ? undefined : json['refundedAmount'],
        'authorizationAmount': json['authorizationAmount'] == null ? undefined : json['authorizationAmount'],
        'screenWidth': json['screenWidth'] == null ? undefined : json['screenWidth'],
        'environmentSelectionStrategy': json['environmentSelectionStrategy'] == null ? undefined : TransactionEnvironmentSelectionStrategyFromJSON(json['environmentSelectionStrategy']),
        'customerEmailAddress': json['customerEmailAddress'] == null ? undefined : json['customerEmailAddress'],
        'windowHeight': json['windowHeight'] == null ? undefined : json['windowHeight'],
        'tokenizationMode': json['tokenizationMode'] == null ? undefined : TokenizationModeFromJSON(json['tokenizationMode']),
        'authorizationTimeoutOn': json['authorizationTimeoutOn'] == null ? undefined : (new Date(json['authorizationTimeoutOn'])),
        'allowedPaymentMethodBrands': json['allowedPaymentMethodBrands'] == null ? undefined : json['allowedPaymentMethodBrands'],
        'createdOn': json['createdOn'] == null ? undefined : (new Date(json['createdOn'])),
        'metaData': json['metaData'] == null ? undefined : json['metaData'],
        'emailsDisabled': json['emailsDisabled'] == null ? undefined : json['emailsDisabled'],
        'userInterfaceType': json['userInterfaceType'] == null ? undefined : TransactionUserInterfaceTypeFromJSON(json['userInterfaceType']),
        'customerId': json['customerId'] == null ? undefined : json['customerId'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'merchantReference': json['merchantReference'] == null ? undefined : json['merchantReference'],
        'authorizationSalesChannel': json['authorizationSalesChannel'] == null ? undefined : json['authorizationSalesChannel'],
        'yearsToKeep': json['yearsToKeep'] == null ? undefined : json['yearsToKeep'],
        'completedAmount': json['completedAmount'] == null ? undefined : json['completedAmount'],
        'screenHeight': json['screenHeight'] == null ? undefined : json['screenHeight'],
        'internetProtocolAddress': json['internetProtocolAddress'] == null ? undefined : json['internetProtocolAddress'],
        'terminal': json['terminal'] == null ? undefined : PaymentTerminalFromJSON(json['terminal']),
        'endOfLife': json['endOfLife'] == null ? undefined : (new Date(json['endOfLife'])),
        'token': json['token'] == null ? undefined : TokenFromJSON(json['token']),
        'environment': json['environment'] == null ? undefined : EnvironmentFromJSON(json['environment']),
        'screenColorDepth': json['screenColorDepth'] == null ? undefined : json['screenColorDepth'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'completedOn': json['completedOn'] == null ? undefined : (new Date(json['completedOn'])),
        'completionTimeoutOn': json['completionTimeoutOn'] == null ? undefined : (new Date(json['completionTimeoutOn'])),
        'shippingAddress': json['shippingAddress'] == null ? undefined : AddressFromJSON(json['shippingAddress']),
        'billingAddress': json['billingAddress'] == null ? undefined : AddressFromJSON(json['billingAddress']),
        'authorizedOn': json['authorizedOn'] == null ? undefined : (new Date(json['authorizedOn'])),
        'failedUrl': json['failedUrl'] == null ? undefined : json['failedUrl'],
    };
}

export function TransactionToJSON(value?: Omit<Transaction, 'totalSettledAmount'|'deviceSessionIdentifier'|'processingOn'|'invoiceMerchantReference'|'language'|'confirmedOn'|'lineItems'|'acceptLanguageHeader'|'javaEnabled'|'confirmedBy'|'id'|'windowWidth'|'allowedPaymentMethodConfigurations'|'chargeRetryEnabled'|'acceptHeader'|'userAgentHeader'|'shippingMethod'|'plannedPurgeDate'|'successUrl'|'timeZone'|'spaceViewId'|'userFailureMessage'|'version'|'internetProtocolAddressCountry'|'linkedSpaceId'|'deliveryDecisionMadeOn'|'autoConfirmationEnabled'|'totalAppliedFees'|'failedOn'|'refundedAmount'|'authorizationAmount'|'screenWidth'|'customerEmailAddress'|'windowHeight'|'authorizationTimeoutOn'|'allowedPaymentMethodBrands'|'createdOn'|'metaData'|'emailsDisabled'|'customerId'|'currency'|'merchantReference'|'authorizationSalesChannel'|'yearsToKeep'|'completedAmount'|'screenHeight'|'internetProtocolAddress'|'endOfLife'|'screenColorDepth'|'createdBy'|'completedOn'|'completionTimeoutOn'|'authorizedOn'|'failedUrl'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'parent': TransactionToJSON(value['parent']),
        'paymentConnectorConfiguration': PaymentConnectorConfigurationToJSON(value['paymentConnectorConfiguration']),
        'state': TransactionStateToJSON(value['state']),
        'group': TransactionGroupToJSON(value['group']),
        'completionBehavior': TransactionCompletionBehaviorToJSON(value['completionBehavior']),
        'authorizationEnvironment': ChargeAttemptEnvironmentToJSON(value['authorizationEnvironment']),
        'failureReason': FailureReasonToJSON(value['failureReason']),
        'customersPresence': CustomersPresenceToJSON(value['customersPresence']),
        'environmentSelectionStrategy': TransactionEnvironmentSelectionStrategyToJSON(value['environmentSelectionStrategy']),
        'tokenizationMode': TokenizationModeToJSON(value['tokenizationMode']),
        'userInterfaceType': TransactionUserInterfaceTypeToJSON(value['userInterfaceType']),
        'terminal': PaymentTerminalToJSON(value['terminal']),
        'token': TokenToJSON(value['token']),
        'environment': EnvironmentToJSON(value['environment']),
        'shippingAddress': AddressToJSON(value['shippingAddress']),
        'billingAddress': AddressToJSON(value['billingAddress']),
    };
}

