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
import { TransactionAwareEntity } from "./TransactionAwareEntity";
import { TransactionCompletionBehavior } from "./TransactionCompletionBehavior";
import { WalletType } from "./WalletType";


class ChargeAttempt extends TransactionAwareEntity {

        /**
        * 
        */
    'charge'?: Charge;

        /**
        * 
        */
    'completionBehavior'?: TransactionCompletionBehavior;

        /**
        * 
        */
    'connectorConfiguration'?: PaymentConnectorConfiguration;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The customers presence indicates which kind of customer interaction was used during the charge attempt.
        */
    'customersPresence'?: CustomersPresence;

        /**
        * 
        */
    'environment'?: ChargeAttemptEnvironment;

        /**
        * 
        */
    'failedOn'?: Date;

        /**
        * 
        */
    'failureReason'?: FailureReason;

        /**
        * 
        */
    'initializingTokenVersion'?: boolean;

        /**
        * 
        */
    'invocation'?: ConnectorInvocation;

        /**
        * 
        */
    'labels'?: Array<Label>;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * 
        */
    'nextUpdateOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'redirectionUrl'?: string;

        /**
        * 
        */
    'salesChannel'?: number;

        /**
        * 
        */
    'spaceViewId'?: number;

        /**
        * The object's current state.
        */
    'state'?: ChargeAttemptState;

        /**
        * 
        */
    'succeededOn'?: Date;

        /**
        * 
        */
    'terminal'?: PaymentTerminal;

        /**
        * 
        */
    'timeZone'?: string;

        /**
        * 
        */
    'timeoutOn'?: Date;

        /**
        * 
        */
    'tokenVersion'?: TokenVersion;

        /**
        * The user failure message contains the message for the user in case the attempt failed. The message is localized into the language specified on the transaction.
        */
    'userFailureMessage'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;

        /**
        * 
        */
    'walletType'?: WalletType;


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
        "name": "walletType",
        "baseName": "walletType",
        "type": "WalletType"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChargeAttempt.attributeTypeMap);
    }
}

export { ChargeAttempt }
