'use strict';
import { BankAccount } from "./BankAccount";
import { BankAccountEnvironment } from "./BankAccountEnvironment";


class CurrencyBankAccount {

        /**
        * The bank account this currency bank account belongs to.
        */
    'bankAccount'?: BankAccount;

        /**
        * The currency associated with the bank account.
        */
    'currency'?: string;

        /**
        * Whether the bank account operates in a test or production environment.
        */
    'environment'?: BankAccountEnvironment;

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
