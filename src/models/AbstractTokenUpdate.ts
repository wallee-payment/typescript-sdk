'use strict';


class AbstractTokenUpdate {

        /**
        * The customer's email address.
        */
    'customerEmailAddress'?: string;

        /**
        * The unique identifier of the customer in the external system.
        */
    'customerId'?: string;

        /**
        * Whether the token is enabled for one-click payments, which simplify the payment process for the customer. One-click tokens are linked to customers via the customer ID.
        */
    'enabledForOneClickPayment'?: boolean;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The customer's time zone, which affects how dates and times are formatted when communicating with the customer.
        */
    'timeZone'?: string;

        /**
        * The reference used to identify the payment token (e.g. the customer's ID or email address).
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
