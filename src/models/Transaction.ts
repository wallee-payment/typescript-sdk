'use strict';
import { Address } from "./Address";
import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { CustomersPresence } from "./CustomersPresence";
import { Environment } from "./Environment";
import { FailureReason } from "./FailureReason";
import { LineItem } from "./LineItem";
import { PaymentConnectorConfiguration } from "./PaymentConnectorConfiguration";
import { PaymentTerminal } from "./PaymentTerminal";
import { Token } from "./Token";
import { TokenizationMode } from "./TokenizationMode";
import { TransactionCompletionBehavior } from "./TransactionCompletionBehavior";
import { TransactionEnvironmentSelectionStrategy } from "./TransactionEnvironmentSelectionStrategy";
import { TransactionGroup } from "./TransactionGroup";
import { TransactionState } from "./TransactionState";
import { TransactionUserInterfaceType } from "./TransactionUserInterfaceType";


class Transaction {

        /**
        * The 'Accept' header of the customer's web browser.
        */
    'acceptHeader'?: string;

        /**
        * The 'Accept Language' header of the customer's web browser.
        */
    'acceptLanguageHeader'?: string;

        /**
        * The payment method brands that can be used to authorize the transaction.
        */
    'allowedPaymentMethodBrands'?: Array<number>;

        /**
        * The payment method configurations that can be used to authorize the transaction.
        */
    'allowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * The sum of all line item prices including taxes in the transaction's currency.
        */
    'authorizationAmount'?: number;

        /**
        * The environment in which the transaction was authorized.
        */
    'authorizationEnvironment'?: ChargeAttemptEnvironment;

        /**
        * The sales channel through which the transaction was placed.
        */
    'authorizationSalesChannel'?: number;

        /**
        * The date and time when the transaction must be authorized, otherwise it will canceled.
        */
    'authorizationTimeoutOn'?: Date;

        /**
        * The date and time when the transaction was authorized.
        */
    'authorizedOn'?: Date;

        /**
        * Whether the transaction can be confirmed automatically or whether this must be done explicitly via the API. Default is true.
        */
    'autoConfirmationEnabled'?: boolean;

        /**
        * The address associated with the payment method for invoicing and transaction processing purposes.
        */
    'billingAddress'?: Address;

        /**
        * Whether the customer can make further payment attempts if the first one has failed. Default is true.
        */
    'chargeRetryEnabled'?: boolean;

        /**
        * The total amount that was completed, in the transaction's currency.
        */
    'completedAmount'?: number;

        /**
        * The date and time when the transaction was completed.
        */
    'completedOn'?: Date;

        /**
        * The behavior that controls when the transaction is completed.
        */
    'completionBehavior'?: TransactionCompletionBehavior;

        /**
        * The date and time when the transaction is completed automatically.
        */
    'completionTimeoutOn'?: Date;

        /**
        * The ID of the user the transaction was confirmed by.
        */
    'confirmedBy'?: number;

        /**
        * The date and time when the transaction was created.
        */
    'confirmedOn'?: Date;

        /**
        * The ID of the user the transaction was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The three-letter code (ISO 4217 format) of the transaction's currency.
        */
    'currency'?: string;

        /**
        * The customer's email address.
        */
    'customerEmailAddress'?: string;

        /**
        * The unique identifier of the customer in the external system.
        */
    'customerId'?: string;

        /**
        * The customer's presence indicates whether and in what way the transaction's customer is present. Default is VIRTUAL_PRESENT.
        */
    'customersPresence'?: CustomersPresence;

        /**
        * This date and time when the decision was made as to whether the order should be shipped.
        */
    'deliveryDecisionMadeOn'?: Date;

        /**
        * Allows to link the transaction to the data collected from the customer's device.
        */
    'deviceSessionIdentifier'?: string;

        /**
        * Whether email sending is deactivated for the transaction. Default is false.
        */
    'emailsDisabled'?: boolean;

        /**
        * The date and time when the transaction reaches its end of live. No further actions can be carried out at this time.
        */
    'endOfLife'?: Date;

        /**
        * 
        */
    'environment'?: Environment;

        /**
        * The strategy for determining whether the transaction is to be processed in the test or production environment.
        */
    'environmentSelectionStrategy'?: TransactionEnvironmentSelectionStrategy;

        /**
        * The date and time when the transaction failed.
        */
    'failedOn'?: Date;

        /**
        * The URL to redirect the customer back to after they canceled or failed to authenticated their payment.
        */
    'failedUrl'?: string;

        /**
        * The reason for the failure of the transaction.
        */
    'failureReason'?: FailureReason;

        /**
        * The group that the transaction belongs to.
        */
    'group'?: TransactionGroup;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The IP address of the customer's device.
        */
    'internetProtocolAddress'?: string;

        /**
        * The country determined from the IP address of the customer's device.
        */
    'internetProtocolAddressCountry'?: string;

        /**
        * The merchant's reference used to identify the invoice.
        */
    'invoiceMerchantReference'?: string;

        /**
        * Whether Java is enabled on the customer's web browser.
        */
    'javaEnabled'?: boolean;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The line items purchased by the customer.
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The merchant's reference used to identify the transaction.
        */
    'merchantReference'?: string;

        /**
        * Allow to store additional information about the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * The parent transaction which was (partially) replaced by this transaction.
        */
    'parent'?: number;

        /**
        * The payment connector configuration that was used to authorize the transaction.
        */
    'paymentConnectorConfiguration'?: PaymentConnectorConfiguration;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The date and time when the processing of the transaction was started.
        */
    'processingOn'?: Date;

        /**
        * The total amount that was refunded, in the transaction's currency.
        */
    'refundedAmount'?: number;

        /**
        * The screen color depth of the customer's web browser.
        */
    'screenColorDepth'?: string;

        /**
        * The screen height of the customer's web browser.
        */
    'screenHeight'?: string;

        /**
        * The screen width of the customer's web browser.
        */
    'screenWidth'?: string;

        /**
        * The address to where the order will be shipped.
        */
    'shippingAddress'?: Address;

        /**
        * The name of the shipping method used to ship the products.
        */
    'shippingMethod'?: string;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;

        /**
        * The object's current state.
        */
    'state'?: TransactionState;

        /**
        * The URL to redirect the customer back to after they successfully authenticated their payment.
        */
    'successUrl'?: string;

        /**
        * The payment terminal through which the payment was processed.
        */
    'terminal'?: PaymentTerminal;

        /**
        * The customer's time zone, which affects how dates and times are formatted when communicating with the customer.
        */
    'timeZone'?: string;

        /**
        * The payment token that should be used to charge the customer.
        */
    'token'?: Token;

        /**
        * The tokenization mode specifies whether and how the tokenization of payment information is applied to the transaction.
        */
    'tokenizationMode'?: TokenizationMode;

        /**
        * The total of all fees charged, in the transaction's currency.
        */
    'totalAppliedFees'?: number;

        /**
        * The total amount that was settled, in the transaction's currency.
        */
    'totalSettledAmount'?: number;

        /**
        * The 'User Agent' header of the customer's web browser.
        */
    'userAgentHeader'?: string;

        /**
        * The message that can be displayed to the customer explaining why the transaction failed, in the customer's language.
        */
    'userFailureMessage'?: string;

        /**
        * The type of user interface the customer used to provide the payment information.
        */
    'userInterfaceType'?: TransactionUserInterfaceType;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;

        /**
        * The window height of the customer's web browser.
        */
    'windowHeight'?: string;

        /**
        * The window width of the customer's web browser.
        */
    'windowWidth'?: string;

        /**
        * The number of years the transaction is kept after its authorization.
        */
    'yearsToKeep'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "acceptHeader",
        "baseName": "acceptHeader",
        "type": "string"
        },
        
        {
        "name": "acceptLanguageHeader",
        "baseName": "acceptLanguageHeader",
        "type": "string"
        },
        
        {
        "name": "allowedPaymentMethodBrands",
        "baseName": "allowedPaymentMethodBrands",
        "type": "Array<number>"
        },
        
        {
        "name": "allowedPaymentMethodConfigurations",
        "baseName": "allowedPaymentMethodConfigurations",
        "type": "Array<number>"
        },
        
        {
        "name": "authorizationAmount",
        "baseName": "authorizationAmount",
        "type": "number"
        },
        
        {
        "name": "authorizationEnvironment",
        "baseName": "authorizationEnvironment",
        "type": "ChargeAttemptEnvironment"
        },
        
        {
        "name": "authorizationSalesChannel",
        "baseName": "authorizationSalesChannel",
        "type": "number"
        },
        
        {
        "name": "authorizationTimeoutOn",
        "baseName": "authorizationTimeoutOn",
        "type": "Date"
        },
        
        {
        "name": "authorizedOn",
        "baseName": "authorizedOn",
        "type": "Date"
        },
        
        {
        "name": "autoConfirmationEnabled",
        "baseName": "autoConfirmationEnabled",
        "type": "boolean"
        },
        
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "Address"
        },
        
        {
        "name": "chargeRetryEnabled",
        "baseName": "chargeRetryEnabled",
        "type": "boolean"
        },
        
        {
        "name": "completedAmount",
        "baseName": "completedAmount",
        "type": "number"
        },
        
        {
        "name": "completedOn",
        "baseName": "completedOn",
        "type": "Date"
        },
        
        {
        "name": "completionBehavior",
        "baseName": "completionBehavior",
        "type": "TransactionCompletionBehavior"
        },
        
        {
        "name": "completionTimeoutOn",
        "baseName": "completionTimeoutOn",
        "type": "Date"
        },
        
        {
        "name": "confirmedBy",
        "baseName": "confirmedBy",
        "type": "number"
        },
        
        {
        "name": "confirmedOn",
        "baseName": "confirmedOn",
        "type": "Date"
        },
        
        {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "customerEmailAddress",
        "baseName": "customerEmailAddress",
        "type": "string"
        },
        
        {
        "name": "customerId",
        "baseName": "customerId",
        "type": "string"
        },
        
        {
        "name": "customersPresence",
        "baseName": "customersPresence",
        "type": "CustomersPresence"
        },
        
        {
        "name": "deliveryDecisionMadeOn",
        "baseName": "deliveryDecisionMadeOn",
        "type": "Date"
        },
        
        {
        "name": "deviceSessionIdentifier",
        "baseName": "deviceSessionIdentifier",
        "type": "string"
        },
        
        {
        "name": "emailsDisabled",
        "baseName": "emailsDisabled",
        "type": "boolean"
        },
        
        {
        "name": "endOfLife",
        "baseName": "endOfLife",
        "type": "Date"
        },
        
        {
        "name": "environment",
        "baseName": "environment",
        "type": "Environment"
        },
        
        {
        "name": "environmentSelectionStrategy",
        "baseName": "environmentSelectionStrategy",
        "type": "TransactionEnvironmentSelectionStrategy"
        },
        
        {
        "name": "failedOn",
        "baseName": "failedOn",
        "type": "Date"
        },
        
        {
        "name": "failedUrl",
        "baseName": "failedUrl",
        "type": "string"
        },
        
        {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
        },
        
        {
        "name": "group",
        "baseName": "group",
        "type": "TransactionGroup"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "internetProtocolAddress",
        "baseName": "internetProtocolAddress",
        "type": "string"
        },
        
        {
        "name": "internetProtocolAddressCountry",
        "baseName": "internetProtocolAddressCountry",
        "type": "string"
        },
        
        {
        "name": "invoiceMerchantReference",
        "baseName": "invoiceMerchantReference",
        "type": "string"
        },
        
        {
        "name": "javaEnabled",
        "baseName": "javaEnabled",
        "type": "boolean"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
        },
        
        {
        "name": "metaData",
        "baseName": "metaData",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "parent",
        "baseName": "parent",
        "type": "number"
        },
        
        {
        "name": "paymentConnectorConfiguration",
        "baseName": "paymentConnectorConfiguration",
        "type": "PaymentConnectorConfiguration"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "processingOn",
        "baseName": "processingOn",
        "type": "Date"
        },
        
        {
        "name": "refundedAmount",
        "baseName": "refundedAmount",
        "type": "number"
        },
        
        {
        "name": "screenColorDepth",
        "baseName": "screenColorDepth",
        "type": "string"
        },
        
        {
        "name": "screenHeight",
        "baseName": "screenHeight",
        "type": "string"
        },
        
        {
        "name": "screenWidth",
        "baseName": "screenWidth",
        "type": "string"
        },
        
        {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "Address"
        },
        
        {
        "name": "shippingMethod",
        "baseName": "shippingMethod",
        "type": "string"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "TransactionState"
        },
        
        {
        "name": "successUrl",
        "baseName": "successUrl",
        "type": "string"
        },
        
        {
        "name": "terminal",
        "baseName": "terminal",
        "type": "PaymentTerminal"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
        },
        
        {
        "name": "token",
        "baseName": "token",
        "type": "Token"
        },
        
        {
        "name": "tokenizationMode",
        "baseName": "tokenizationMode",
        "type": "TokenizationMode"
        },
        
        {
        "name": "totalAppliedFees",
        "baseName": "totalAppliedFees",
        "type": "number"
        },
        
        {
        "name": "totalSettledAmount",
        "baseName": "totalSettledAmount",
        "type": "number"
        },
        
        {
        "name": "userAgentHeader",
        "baseName": "userAgentHeader",
        "type": "string"
        },
        
        {
        "name": "userFailureMessage",
        "baseName": "userFailureMessage",
        "type": "string"
        },
        
        {
        "name": "userInterfaceType",
        "baseName": "userInterfaceType",
        "type": "TransactionUserInterfaceType"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        },
        
        {
        "name": "windowHeight",
        "baseName": "windowHeight",
        "type": "string"
        },
        
        {
        "name": "windowWidth",
        "baseName": "windowWidth",
        "type": "string"
        },
        
        {
        "name": "yearsToKeep",
        "baseName": "yearsToKeep",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }
}

export { Transaction }
