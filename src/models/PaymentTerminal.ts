'use strict';
import { PaymentTerminalConfigurationVersion } from "./PaymentTerminalConfigurationVersion";
import { PaymentTerminalLocationVersion } from "./PaymentTerminalLocationVersion";
import { PaymentTerminalState } from "./PaymentTerminalState";
import { PaymentTerminalType } from "./PaymentTerminalType";


class PaymentTerminal {

        /**
        * 
        */
    'configurationVersion'?: PaymentTerminalConfigurationVersion;

        /**
        * 
        */
    'defaultCurrency'?: string;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The identifier uniquely identifies the terminal. Normally it is visible on the device or in the display of the device.
        */
    'identifier'?: string;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'locationVersion'?: PaymentTerminalLocationVersion;

        /**
        * The terminal name is used internally to identify the terminal in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'state'?: PaymentTerminalState;

        /**
        * 
        */
    'type'?: PaymentTerminalType;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "configurationVersion",
        "baseName": "configurationVersion",
        "type": "PaymentTerminalConfigurationVersion"
        },
        
        {
        "name": "defaultCurrency",
        "baseName": "defaultCurrency",
        "type": "string"
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
        "name": "identifier",
        "baseName": "identifier",
        "type": "string"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "locationVersion",
        "baseName": "locationVersion",
        "type": "PaymentTerminalLocationVersion"
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
        "type": "PaymentTerminalState"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "PaymentTerminalType"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminal.attributeTypeMap;
    }
}

export { PaymentTerminal }
