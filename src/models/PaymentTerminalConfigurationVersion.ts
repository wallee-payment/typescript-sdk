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
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
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
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'state'?: PaymentTerminalConfigurationVersionState;

        /**
        * 
        */
    'timeZone'?: string;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
