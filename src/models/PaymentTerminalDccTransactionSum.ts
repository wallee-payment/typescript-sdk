'use strict';


class PaymentTerminalDccTransactionSum {

        /**
        * 
        */
    'brand'?: string;

        /**
        * 
        */
    'dccAmount'?: number;

        /**
        * 
        */
    'dccCurrency'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

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
        "name": "dccAmount",
        "baseName": "dccAmount",
        "type": "number"
        },
        
        {
        "name": "dccCurrency",
        "baseName": "dccCurrency",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
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
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalDccTransactionSum.attributeTypeMap;
    }
}

export { PaymentTerminalDccTransactionSum }
