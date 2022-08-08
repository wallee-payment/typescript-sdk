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
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
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
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
