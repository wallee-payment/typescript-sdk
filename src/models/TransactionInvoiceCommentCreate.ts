'use strict';
import { AbstractTransactionInvoiceCommentActive } from "./AbstractTransactionInvoiceCommentActive";


class TransactionInvoiceCommentCreate extends AbstractTransactionInvoiceCommentActive {

        /**
        * The transaction invoice that the comment belongs to.
        */
    'transactionInvoice': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "transactionInvoice",
        "baseName": "transactionInvoice",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionInvoiceCommentCreate.attributeTypeMap);
    }
}

export { TransactionInvoiceCommentCreate }
