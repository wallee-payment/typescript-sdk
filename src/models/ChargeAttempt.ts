'use strict';
import { Charge } from "./Charge";
import { ChargeAttemptEnvironment } from "./ChargeAttemptEnvironment";
import { ChargeAttemptState } from "./ChargeAttemptState";
import { ConnectorInvocation } from "./ConnectorInvocation";
import { CustomersPresence } from "./CustomersPresence";
import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { PaymentConnectorConfiguration } from "./PaymentConnectorConfiguration";
import { PaymentTerminal } from "./PaymentTerminal";
import { TokenVersion } from "./TokenVersion";
import { TransactionCompletionBehavior } from "./TransactionCompletionBehavior";
import { WalletType } from "./WalletType";


class ChargeAttempt {

        /**
        * The charge that the charge attempt belongs to.
        */
    'charge'?: Charge;

        /**
        * The behavior that controls when the transaction is completed.
        */
    'completionBehavior'?: TransactionCompletionBehavior;

        /**
        * The payment connector configuration that was used for the charge attempt.
        */
    'connectorConfiguration'?: PaymentConnectorConfiguration;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The customer's presence indicates whether and in what way the charge attempt's customer is present.
        */
    'customersPresence'?: CustomersPresence;

        /**
        * The environment in which the charge attempt is executed.
        */
    'environment'?: ChargeAttemptEnvironment;

        /**
        * The date and time when the charge attempt failed.
        */
    'failedOn'?: Date;

        /**
        * The reason for the failure of the charge attempt.
        */
    'failureReason'?: FailureReason;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * Whether a new token version is being initialized.
        */
    'initializingTokenVersion'?: boolean;

        /**
        * The connector invocation that the charge attempt belongs to.
        */
    'invocation'?: ConnectorInvocation;

        /**
        * The labels providing additional information about the object.
        */
    'labels'?: Array<Label>;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The payment transaction this object is linked to.
        */
    'linkedTransaction'?: number;

        /**
        * The date and time when the next update of the object's state is planned.
        */
    'nextUpdateOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The URL to redirect the customer to after payment processing.
        */
    'redirectionUrl'?: string;

        /**
        * The sales channel through which the charge attempt was made.
        */
    'salesChannel'?: number;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;

        /**
        * The object's current state.
        */
    'state'?: ChargeAttemptState;

        /**
        * The date and time when the charge attempt succeeded.
        */
    'succeededOn'?: Date;

        /**
        * The payment terminal through which the charge attempt was made.
        */
    'terminal'?: PaymentTerminal;

        /**
        * The time zone that this object is associated with.
        */
    'timeZone'?: string;

        /**
        * The date and time when the object will expire.
        */
    'timeoutOn'?: Date;

        /**
        * The token version used for the charge attempt.
        */
    'tokenVersion'?: TokenVersion;

        /**
        * The message that can be displayed to the customer explaining why the charge attempt failed, in the customer's language.
        */
    'userFailureMessage'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;

        /**
        * The type of wallet used to make the charge attempt.
        */
    'wallet'?: WalletType;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "charge",
        "baseName": "charge",
        "type": "Charge"
        },
        
        {
        "name": "completionBehavior",
        "baseName": "completionBehavior",
        "type": "TransactionCompletionBehavior"
        },
        
        {
        "name": "connectorConfiguration",
        "baseName": "connectorConfiguration",
        "type": "PaymentConnectorConfiguration"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "customersPresence",
        "baseName": "customersPresence",
        "type": "CustomersPresence"
        },
        
        {
        "name": "environment",
        "baseName": "environment",
        "type": "ChargeAttemptEnvironment"
        },
        
        {
        "name": "failedOn",
        "baseName": "failedOn",
        "type": "Date"
        },
        
        {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "initializingTokenVersion",
        "baseName": "initializingTokenVersion",
        "type": "boolean"
        },
        
        {
        "name": "invocation",
        "baseName": "invocation",
        "type": "ConnectorInvocation"
        },
        
        {
        "name": "labels",
        "baseName": "labels",
        "type": "Array<Label>"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "linkedTransaction",
        "baseName": "linkedTransaction",
        "type": "number"
        },
        
        {
        "name": "nextUpdateOn",
        "baseName": "nextUpdateOn",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "redirectionUrl",
        "baseName": "redirectionUrl",
        "type": "string"
        },
        
        {
        "name": "salesChannel",
        "baseName": "salesChannel",
        "type": "number"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ChargeAttemptState"
        },
        
        {
        "name": "succeededOn",
        "baseName": "succeededOn",
        "type": "Date"
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
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
        },
        
        {
        "name": "tokenVersion",
        "baseName": "tokenVersion",
        "type": "TokenVersion"
        },
        
        {
        "name": "userFailureMessage",
        "baseName": "userFailureMessage",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        },
        
        {
        "name": "wallet",
        "baseName": "wallet",
        "type": "WalletType"
        }        
    ];

    static getAttributeTypeMap() {
        return ChargeAttempt.attributeTypeMap;
    }
}

export { ChargeAttempt }
