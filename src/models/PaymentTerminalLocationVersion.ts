'use strict';
import { PaymentTerminalAddress } from "./PaymentTerminalAddress";
import { PaymentTerminalLocation } from "./PaymentTerminalLocation";
import { PaymentTerminalLocationVersionState } from "./PaymentTerminalLocationVersionState";


class PaymentTerminalLocationVersion {

        /**
        * 
        */
    'address'?: PaymentTerminalAddress;

        /**
        * 
        */
    'contactAddress'?: PaymentTerminalAddress;

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

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
    'location'?: PaymentTerminalLocation;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: PaymentTerminalLocationVersionState;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;

        /**
        * 
        */
    'versionAppliedImmediately'?: boolean;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "address",
        "baseName": "address",
        "type": "PaymentTerminalAddress"
        },
        
        {
        "name": "contactAddress",
        "baseName": "contactAddress",
        "type": "PaymentTerminalAddress"
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
        "name": "location",
        "baseName": "location",
        "type": "PaymentTerminalLocation"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "PaymentTerminalLocationVersionState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        },
        
        {
        "name": "versionAppliedImmediately",
        "baseName": "versionAppliedImmediately",
        "type": "boolean"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalLocationVersion.attributeTypeMap;
    }
}

export { PaymentTerminalLocationVersion }
