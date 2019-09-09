'use strict';
import { LineItemCreate } from "./LineItemCreate";


class TransactionLineItemUpdateRequest {

        /**
        * 
        */
    'newLineItems'?: Array<LineItemCreate>;

        /**
        * 
        */
    'transactionId': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "newLineItems",
        "baseName": "newLineItems",
        "type": "Array<LineItemCreate>"
        },
        
        {
        "name": "transactionId",
        "baseName": "transactionId",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return TransactionLineItemUpdateRequest.attributeTypeMap;
    }
}

export { TransactionLineItemUpdateRequest }
