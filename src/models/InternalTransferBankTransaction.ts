'use strict';
import { BankTransaction } from "./BankTransaction";


class InternalTransferBankTransaction {

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
    'sourceBankTransaction'?: BankTransaction;

        /**
        * 
        */
    'targetBankTransaction'?: BankTransaction;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        "name": "sourceBankTransaction",
        "baseName": "sourceBankTransaction",
        "type": "BankTransaction"
        },
        
        {
        "name": "targetBankTransaction",
        "baseName": "targetBankTransaction",
        "type": "BankTransaction"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return InternalTransferBankTransaction.attributeTypeMap;
    }
}

export { InternalTransferBankTransaction }
