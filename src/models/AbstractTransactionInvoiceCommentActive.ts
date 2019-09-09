'use strict';


class AbstractTransactionInvoiceCommentActive {

        /**
        * 
        */
    'content'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "content",
        "baseName": "content",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractTransactionInvoiceCommentActive.attributeTypeMap;
    }
}

export { AbstractTransactionInvoiceCommentActive }
