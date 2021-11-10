'use strict';
import { LineItemCreate } from "./LineItemCreate";


class TransactionLineItemVersionCreate {

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId': string;

        /**
        * 
        */
    'lineItems': Array<LineItemCreate>;

        /**
        * 
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
