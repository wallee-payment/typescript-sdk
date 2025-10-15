'use strict';
import { BankTransaction } from "./BankTransaction";


class ExternalTransferBankTransaction {

        /**
        * Provides general information about the bank transaction.
        */
    'bankTransaction'?: BankTransaction;

        /**
        * The identifier is used to uniquely identify the external bank account.
        */
    'externalAccountIdentifier'?: string;

        /**
        * The external bank account's type.
        */
    'externalAccountType'?: string;

        /**
        * The external bank account's name.
        */
    'externalBankName'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "bankTransaction",
        "baseName": "bankTransaction",
        "type": "BankTransaction"
        },
        
        {
        "name": "externalAccountIdentifier",
        "baseName": "externalAccountIdentifier",
        "type": "string"
        },
        
        {
        "name": "externalAccountType",
        "baseName": "externalAccountType",
        "type": "string"
        },
        
        {
        "name": "externalBankName",
        "baseName": "externalBankName",
        "type": "string"
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
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ExternalTransferBankTransaction.attributeTypeMap;
    }
}

export { ExternalTransferBankTransaction }
