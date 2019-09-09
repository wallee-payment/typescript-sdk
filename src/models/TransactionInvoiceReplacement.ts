'use strict';
import { AddressCreate } from "./AddressCreate";
import { LineItemCreate } from "./LineItemCreate";


class TransactionInvoiceReplacement {

        /**
        * 
        */
    'billingAddress'?: AddressCreate;

        /**
        * The date on which the invoice should be paid on.
        */
    'dueOn'?: Date;

        /**
        * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
        */
    'externalId': string;

        /**
        * 
        */
    'lineItems': Array<LineItemCreate>;

        /**
        * 
        */
    'merchantReference'?: string;

        /**
        * When the connector is configured to send the invoice to the customer and this property is true the customer will receive an email with the updated invoice. When this property is false no invoice is sent.
        */
    'sentToCustomer'?: boolean;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "AddressCreate"
        },
        
        {
        "name": "dueOn",
        "baseName": "dueOn",
        "type": "Date"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItemCreate>"
        },
        
        {
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
        },
        
        {
        "name": "sentToCustomer",
        "baseName": "sentToCustomer",
        "type": "boolean"
        }        
    ];

    static getAttributeTypeMap() {
        return TransactionInvoiceReplacement.attributeTypeMap;
    }
}

export { TransactionInvoiceReplacement }
