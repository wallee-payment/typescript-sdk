'use strict';
import { PaymentTerminalDccTransactionSum } from "./PaymentTerminalDccTransactionSum";
import { PaymentTerminalTransactionSum } from "./PaymentTerminalTransactionSum";


class PaymentTerminalTransactionSummary {

        /**
        * 
        */
    'dccTransactionSums'?: Array<PaymentTerminalDccTransactionSum>;

        /**
        * 
        */
    'endedOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'numberOfTransactions'?: number;

        /**
        * 
        */
    'paymentTerminal'?: number;

        /**
        * 
        */
    'receipt'?: string;

        /**
        * 
        */
    'startedOn'?: Date;

        /**
        * 
        */
    'transactionSums'?: Array<PaymentTerminalTransactionSum>;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "dccTransactionSums",
        "baseName": "dccTransactionSums",
        "type": "Array<PaymentTerminalDccTransactionSum>"
        },
        
        {
        "name": "endedOn",
        "baseName": "endedOn",
        "type": "Date"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "numberOfTransactions",
        "baseName": "numberOfTransactions",
        "type": "number"
        },
        
        {
        "name": "paymentTerminal",
        "baseName": "paymentTerminal",
        "type": "number"
        },
        
        {
        "name": "receipt",
        "baseName": "receipt",
        "type": "string"
        },
        
        {
        "name": "startedOn",
        "baseName": "startedOn",
        "type": "Date"
        },
        
        {
        "name": "transactionSums",
        "baseName": "transactionSums",
        "type": "Array<PaymentTerminalTransactionSum>"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalTransactionSummary.attributeTypeMap;
    }
}

export { PaymentTerminalTransactionSummary }
