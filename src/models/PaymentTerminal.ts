'use strict';
import { PaymentTerminalConfigurationVersion } from "./PaymentTerminalConfigurationVersion";
import { PaymentTerminalLocationVersion } from "./PaymentTerminalLocationVersion";
import { PaymentTerminalState } from "./PaymentTerminalState";
import { PaymentTerminalType } from "./PaymentTerminalType";


class PaymentTerminal {

        /**
        * The configuration that is assigned to the terminal and determines how it works.
        */
    'configurationVersion'?: PaymentTerminalConfigurationVersion;

        /**
        * The default currency of the terminal.
        */
    'defaultCurrency'?: string;

        /**
        * The name of the device that is currently linked to the payment terminal.
        */
    'deviceName'?: string;

        /**
        * The serial number of the device that is currently linked to the payment terminal.
        */
    'deviceSerialNumber'?: string;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The unique identifier of the terminal, that is displayed on the device.
        */
    'identifier'?: string;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The physical location where the terminal is used.
        */
    'locationVersion'?: PaymentTerminalLocationVersion;

        /**
        * The name used to identify the payment terminal.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: PaymentTerminalState;

        /**
        * The type of the payment terminal.
        */
    'type'?: PaymentTerminalType;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
        "name": "deviceName",
        "baseName": "deviceName",
        "type": "string"
        },
        
        {
        "name": "deviceSerialNumber",
        "baseName": "deviceSerialNumber",
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
