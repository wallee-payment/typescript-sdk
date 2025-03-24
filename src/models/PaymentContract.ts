'use strict';
import { FailureReason } from "./FailureReason";
import { PaymentContractState } from "./PaymentContractState";
import { PaymentContractType } from "./PaymentContractType";


class PaymentContract {

        /**
        * This account that the contract belongs to.
        */
    'account'?: number;

        /**
        * The date and time when the contract was activated.
        */
    'activatedOn'?: Date;

        /**
        * The identifier of the contract.
        */
    'contractIdentifier'?: string;

        /**
        * The type of the contract.
        */
    'contractType'?: PaymentContractType;

        /**
        * The ID of the user the contract was created by.
        */
    'createdBy'?: number;

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
        * The date and time when the object was last modified.
        */
    'lastModifiedDate'?: Date;

        /**
        * The date and time when the contract was rejected.
        */
    'rejectedOn'?: Date;

        /**
        * The reason for rejecting the contract.
        */
    'rejectionReason'?: FailureReason;

        /**
        * The date and time when the termination process of the contract was started.
        */
    'startTerminatingOn'?: Date;

        /**
        * The object's current state.
        */
    'state'?: PaymentContractState;

        /**
        * The ID of the user the contract was terminated by.
        */
    'terminatedBy'?: number;

        /**
        * The date and time when the contract was terminated.
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
        "type": "number"
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
        "type": "number"
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
        "name": "lastModifiedDate",
        "baseName": "lastModifiedDate",
        "type": "Date"
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
        "type": "number"
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
