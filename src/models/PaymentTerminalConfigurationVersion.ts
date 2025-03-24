'use strict';
import { PaymentTerminalConfiguration } from "./PaymentTerminalConfiguration";
import { PaymentTerminalConfigurationVersionState } from "./PaymentTerminalConfigurationVersionState";


class PaymentTerminalConfigurationVersion {

        /**
        * The payment terminal configuration that the version belongs to.
        */
    'configuration'?: PaymentTerminalConfiguration;

        /**
        * The payment connector configurations that are available on the payment terminal.
        */
    'connectorConfigurations'?: Array<number>;

        /**
        * The ID of the user the payment terminal configuration version was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The default currency that is used if none is set on the payment terminal itself. If it is empty, the currency is derived from the location of the terminal.
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
        * The permitted duration of the terminal's maintenance window.
        */
    'maintenanceWindowDuration'?: string;

        /**
        * The start time of the terminal's maintenance window.
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
        * The time zone of the payment terminal used to determine the maintenance window.
        */
    'timeZone'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;

        /**
        * Whether payment terminals are immediately updated to this configuration version. If not, it will be applied during the maintenance window.
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
