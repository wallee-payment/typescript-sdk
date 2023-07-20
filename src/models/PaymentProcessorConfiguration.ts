'use strict';
import { CreationEntityState } from "./CreationEntityState";


class PaymentProcessorConfiguration {

        /**
        * The configuration is managed by the application and cannot be changed via the user interface.
        */
    'applicationManaged'?: boolean;

        /**
        * The contract links the processor configuration with the contract that is used to process payments.
        */
    'contractId'?: number;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The processor configuration name is used internally to identify a specific processor configuration. For example the name is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * A processor handles the connection to a third part company (a Payment Service Provider) that technically manages the transaction and therefore processes the payment. For the same processor multiple processor configuration can be setup.
        */
    'processor'?: number;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "applicationManaged",
        "baseName": "applicationManaged",
        "type": "boolean"
        },
        
        {
        "name": "contractId",
        "baseName": "contractId",
        "type": "number"
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
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "processor",
        "baseName": "processor",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentProcessorConfiguration.attributeTypeMap;
    }
}

export { PaymentProcessorConfiguration }
