'use strict';


class PaymentTerminalTransactionSum {

        /**
        * 
        */
    'brand'?: string;

        /**
        * 
        */
    'dccTipAmount'?: number;

        /**
        * 
        */
    'dccTransactionAmount'?: number;

        /**
        * 
        */
    'dccTransactionCount'?: number;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'product'?: string;

        /**
        * 
        */
    'transactionAmount'?: number;

        /**
        * 
        */
    'transactionCount'?: number;

        /**
        * 
        */
    'transactionCurrency'?: string;

        /**
        * 
        */
    'transactionTipAmount'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "brand",
        "baseName": "brand",
        "type": "string"
        },
        
        {
        "name": "dccTipAmount",
        "baseName": "dccTipAmount",
        "type": "number"
        },
        
        {
        "name": "dccTransactionAmount",
        "baseName": "dccTransactionAmount",
        "type": "number"
        },
        
        {
        "name": "dccTransactionCount",
        "baseName": "dccTransactionCount",
        "type": "number"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "product",
        "baseName": "product",
        "type": "string"
        },
        
        {
        "name": "transactionAmount",
        "baseName": "transactionAmount",
        "type": "number"
        },
        
        {
        "name": "transactionCount",
        "baseName": "transactionCount",
        "type": "number"
        },
        
        {
        "name": "transactionCurrency",
        "baseName": "transactionCurrency",
        "type": "string"
        },
        
        {
        "name": "transactionTipAmount",
        "baseName": "transactionTipAmount",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalTransactionSum.attributeTypeMap;
    }
}

export { PaymentTerminalTransactionSum }
