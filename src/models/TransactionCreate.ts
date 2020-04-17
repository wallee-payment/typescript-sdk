'use strict';
import { AbstractTransactionPending } from "./AbstractTransactionPending";
import { CustomersPresence } from "./CustomersPresence";
import { Environment } from "./Environment";
import { TransactionEnvironmentSelectionStrategy } from "./TransactionEnvironmentSelectionStrategy";


class TransactionCreate extends AbstractTransactionPending {

        /**
        * When auto confirmation is enabled the transaction can be confirmed by the user and does not require an explicit confirmation through the web service API.
        */
    'autoConfirmationEnabled'?: boolean;

        /**
        * When the charging of the customer fails we can retry the charging. This implies that we redirect the user back to the payment page which allows the customer to retry. By default we will retry.
        */
    'chargeRetryEnabled'?: boolean;

        /**
        * The customer's presence indicates what kind of authentication methods can be used during the authorization of the transaction. If no value is provided, 'Virtually Present' is used by default.
        */
    'customersPresence'?: CustomersPresence;

        /**
        * The device session identifier links the transaction with the session identifier provided in the URL of the device data JavaScript. This allows to link the transaction with the collected device data of the buyer.
        */
    'deviceSessionIdentifier'?: string;

        /**
        * Flag indicating whether email sending is disabled for this particular transaction. Defaults to false.
        */
    'emailsDisabled'?: boolean;

        /**
        * 
        */
    'environment'?: Environment;

        /**
        * The environment selection strategy determines how the environment (test or production) for processing the transaction is selected.
        */
    'environmentSelectionStrategy'?: TransactionEnvironmentSelectionStrategy;

        /**
        * 
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
