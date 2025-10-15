'use strict';
import { LineItemCreate } from "./LineItemCreate";


class TransactionLineItemVersionCreate {

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId': string;

        /**
        * The line items that replace the original line items in the transaction.
        */
    'lineItems': Array<LineItemCreate>;

        /**
        * The transaction that the line item version belongs to.
        */
    'transaction': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return TransactionLineItemVersionCreate.attributeTypeMap;
    }
}

export { TransactionLineItemVersionCreate }
