'use strict';
import { AbstractTransactionCommentActive } from "./AbstractTransactionCommentActive";


class TransactionCommentCreate extends AbstractTransactionCommentActive {

        /**
        * 
        */
    'transaction': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionCommentCreate.attributeTypeMap);
    }
}

export { TransactionCommentCreate }
