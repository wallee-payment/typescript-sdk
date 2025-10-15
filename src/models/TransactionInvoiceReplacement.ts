'use strict';
import { AddressCreate } from "./AddressCreate";
import { LineItemCreate } from "./LineItemCreate";


class TransactionInvoiceReplacement {

        /**
        * The address associated with the invoice, used for billing purposes.
        */
    'billingAddress'?: AddressCreate;

        /**
        * The due date for payment of the invoice.
        */
    'dueOn'?: Date;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId': string;

        /**
        * The invoiced line items that will appear on the invoice document.
        */
    'lineItems': Array<LineItemCreate>;

        /**
        * The merchant's reference used to identify the invoice.
        */
    'merchantReference'?: string;

        /**
        * Whether the invoice will be sent to the customer via email.
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
