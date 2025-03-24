'use strict';
import { AbstractTransactionPending } from "./AbstractTransactionPending";
import { CustomersPresence } from "./CustomersPresence";
import { Environment } from "./Environment";
import { TransactionEnvironmentSelectionStrategy } from "./TransactionEnvironmentSelectionStrategy";


class TransactionCreate extends AbstractTransactionPending {

        /**
        * Whether the transaction can be confirmed automatically or whether this must be done explicitly via the API. Default is true.
        */
    'autoConfirmationEnabled'?: boolean;

        /**
        * Whether the customer can make further payment attempts if the first one has failed. Default is true.
        */
    'chargeRetryEnabled'?: boolean;

        /**
        * The customer's presence indicates whether and in what way the transaction's customer is present. Default is VIRTUAL_PRESENT.
        */
    'customersPresence'?: CustomersPresence;

        /**
        * Allows to link the transaction to the data collected from the customer's device.
        */
    'deviceSessionIdentifier'?: string;

        /**
        * Whether email sending is deactivated for the transaction. Default is false.
        */
    'emailsDisabled'?: boolean;

        /**
        * 
        */
    'environment'?: Environment;

        /**
        * The strategy for determining whether the transaction is to be processed in the test or production environment.
        */
    'environmentSelectionStrategy'?: TransactionEnvironmentSelectionStrategy;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "autoConfirmationEnabled",
        "baseName": "autoConfirmationEnabled",
        "type": "boolean"
        },
        
        {
        "name": "chargeRetryEnabled",
        "baseName": "chargeRetryEnabled",
        "type": "boolean"
        },
        
        {
        "name": "customersPresence",
        "baseName": "customersPresence",
        "type": "CustomersPresence"
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
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionCreate.attributeTypeMap);
    }
}

export { TransactionCreate }
