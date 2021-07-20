'use strict';
import { Account } from "./Account";
import { FailureReason } from "./FailureReason";
import { PaymentContractState } from "./PaymentContractState";
import { PaymentContractType } from "./PaymentContractType";
import { User } from "./User";


class PaymentContract {

        /**
        * 
        */
    'account'?: Account;

        /**
        * 
        */
    'activatedOn'?: Date;

        /**
        * 
        */
    'contractIdentifier'?: string;

        /**
        * 
        */
    'contractType'?: PaymentContractType;

        /**
        * 
        */
    'createdBy'?: User;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'rejectedOn'?: Date;

        /**
        * 
        */
    'rejectionReason'?: FailureReason;

        /**
        * 
        */
    'startTerminatingOn'?: Date;

        /**
        * 
        */
    'state'?: PaymentContractState;

        /**
        * 
        */
    'terminatedBy'?: User;

        /**
        * 
        */
    'terminatedOn'?: Date;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "account",
        "baseName": "account",
        "type": "Account"
        },
        
        {
        "name": "activatedOn",
        "baseName": "activatedOn",
        "type": "Date"
        },
        
        {
        "name": "contractIdentifier",
        "baseName": "contractIdentifier",
        "type": "string"
        },
        
        {
        "name": "contractType",
        "baseName": "contractType",
        "type": "PaymentContractType"
        },
        
        {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "User"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "rejectedOn",
        "baseName": "rejectedOn",
        "type": "Date"
        },
        
        {
        "name": "rejectionReason",
        "baseName": "rejectionReason",
        "type": "FailureReason"
        },
        
        {
        "name": "startTerminatingOn",
        "baseName": "startTerminatingOn",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "PaymentContractState"
        },
        
        {
        "name": "terminatedBy",
        "baseName": "terminatedBy",
        "type": "User"
        },
        
        {
        "name": "terminatedOn",
        "baseName": "terminatedOn",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentContract.attributeTypeMap;
    }
}

export { PaymentContract }
