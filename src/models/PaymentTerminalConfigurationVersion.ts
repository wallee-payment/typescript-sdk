'use strict';
import { PaymentTerminalConfiguration } from "./PaymentTerminalConfiguration";
import { PaymentTerminalConfigurationVersionState } from "./PaymentTerminalConfigurationVersionState";


class PaymentTerminalConfigurationVersion {

        /**
        * 
        */
    'configuration'?: PaymentTerminalConfiguration;

        /**
        * 
        */
    'connectorConfigurations'?: Array<number>;

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The currency is derived by default from the terminal location. By setting a specific currency the derived currency is overridden.
        */
    'defaultCurrency'?: string;

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
    'maintenanceWindowDuration'?: string;

        /**
        * 
        */
    'maintenanceWindowStart'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: PaymentTerminalConfigurationVersionState;

        /**
        * 
        */
    'timeZone'?: string;

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
        "name": "configuration",
        "baseName": "configuration",
        "type": "PaymentTerminalConfiguration"
        },
        
        {
        "name": "connectorConfigurations",
        "baseName": "connectorConfigurations",
        "type": "Array<number>"
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
        "name": "defaultCurrency",
        "baseName": "defaultCurrency",
        "type": "string"
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
        "name": "maintenanceWindowDuration",
        "baseName": "maintenanceWindowDuration",
        "type": "string"
        },
        
        {
        "name": "maintenanceWindowStart",
        "baseName": "maintenanceWindowStart",
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
        "type": "PaymentTerminalConfigurationVersionState"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
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
        return PaymentTerminalConfigurationVersion.attributeTypeMap;
    }
}

export { PaymentTerminalConfigurationVersion }
