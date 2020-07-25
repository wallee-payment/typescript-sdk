'use strict';
import { PaymentTerminalAddress } from "./PaymentTerminalAddress";
import { PaymentTerminalConfiguration } from "./PaymentTerminalConfiguration";
import { PaymentTerminalContactAddress } from "./PaymentTerminalContactAddress";
import { PaymentTerminalLocationState } from "./PaymentTerminalLocationState";


class PaymentTerminalLocation {

        /**
        * 
        */
    'contactAddress'?: PaymentTerminalContactAddress;

        /**
        * 
        */
    'defaultConfiguration'?: PaymentTerminalConfiguration;

        /**
        * 
        */
    'deliveryAddress'?: PaymentTerminalAddress;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The terminal location name is used internally to identify the terminal in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'state'?: PaymentTerminalLocationState;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "contactAddress",
        "baseName": "contactAddress",
        "type": "PaymentTerminalContactAddress"
        },
        
        {
        "name": "defaultConfiguration",
        "baseName": "defaultConfiguration",
        "type": "PaymentTerminalConfiguration"
        },
        
        {
        "name": "deliveryAddress",
        "baseName": "deliveryAddress",
        "type": "PaymentTerminalAddress"
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
        "name": "state",
        "baseName": "state",
        "type": "PaymentTerminalLocationState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalLocation.attributeTypeMap;
    }
}

export { PaymentTerminalLocation }
