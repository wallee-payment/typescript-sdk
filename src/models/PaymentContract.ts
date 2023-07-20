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
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * A unique identifier for the object.
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
        * The object's current state.
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
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
