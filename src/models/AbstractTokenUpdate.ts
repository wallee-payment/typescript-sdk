'use strict';


class AbstractTokenUpdate {

        /**
        * The customer email address is the email address of the customer.
        */
    'customerEmailAddress'?: string;

        /**
        * The customer ID identifies the customer in the merchant system. In case the customer ID has been provided it has to correspond with the customer ID provided on the transaction. The customer ID will not be changed automatically. The merchant system has to provide it.
        */
    'customerId'?: string;

        /**
        * When a token is enabled for one-click payments the buyer will be able to select the token within the iFrame or on the payment page to pay with the token. The usage of the token will reduce the number of steps the buyer has to go through. The buyer is linked via the customer ID on the transaction with the token. Means the token will be visible for buyers with the same customer ID. Additionally the payment method has to be configured to allow the one-click payments.
        */
    'enabledForOneClickPayment'?: boolean;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The time zone defines in which time zone the customer is located in. The time zone may affects how dates are formatted when interacting with the customer.
        */
    'timeZone'?: string;

        /**
        * Use something that it is easy to identify and may help you find the token (e.g. customer id, email address).
        */
    'tokenReference'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        "name": "enabledForOneClickPayment",
        "baseName": "enabledForOneClickPayment",
        "type": "boolean"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
        },
        
        {
        "name": "tokenReference",
        "baseName": "tokenReference",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractTokenUpdate.attributeTypeMap;
    }
}

export { AbstractTokenUpdate }
