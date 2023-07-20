'use strict';
import { BankTransaction } from "./BankTransaction";


class InternalTransferBankTransaction {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
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
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
