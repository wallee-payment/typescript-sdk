'use strict';
import { BankAccount } from "./BankAccount";
import { BankAccountEnvironment } from "./BankAccountEnvironment";


class CurrencyBankAccount {

        /**
        * 
        */
    'bankAccount'?: BankAccount;

        /**
        * 
        */
    'currency'?: string;

        /**
        * 
        */
    'environment'?: BankAccountEnvironment;

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
        "name": "bankAccount",
        "baseName": "bankAccount",
        "type": "BankAccount"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "environment",
        "baseName": "environment",
        "type": "BankAccountEnvironment"
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
        return CurrencyBankAccount.attributeTypeMap;
    }
}

export { CurrencyBankAccount }
