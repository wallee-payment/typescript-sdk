'use strict';
import { BankTransaction } from "./BankTransaction";


class ExternalTransferBankTransaction {

        /**
        * 
        */
    'bankTransaction'?: BankTransaction;

        /**
        * 
        */
    'externalAccountIdentifier'?: string;

        /**
        * 
        */
    'externalAccountType'?: string;

        /**
        * 
        */
    'externalBankName'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
