'use strict';
import { CompletionLineItemCreate } from "./CompletionLineItemCreate";


class TransactionCompletionRequest {

        /**
        * The external ID helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
        */
    'externalId': string;

        /**
        * The last completion flag indicates if this is the last completion. After the last completion is created no further completions can be issued.
        */
    'lastCompletion': boolean;

        /**
        * The line items which will be used to complete the transaction.
        */
    'lineItems'?: Array<CompletionLineItemCreate>;

        /**
        * The ID of the transaction which should be completed.
        */
    'transactionId': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "lastCompletion",
        "baseName": "lastCompletion",
        "type": "boolean"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<CompletionLineItemCreate>"
        },
        
        {
        "name": "transactionId",
        "baseName": "transactionId",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return TransactionCompletionRequest.attributeTypeMap;
    }
}

export { TransactionCompletionRequest }
