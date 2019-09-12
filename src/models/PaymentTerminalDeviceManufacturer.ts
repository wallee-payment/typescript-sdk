'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { DatabaseTranslatedString } from "./DatabaseTranslatedString";
import { Scope } from "./Scope";


class PaymentTerminalDeviceManufacturer {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'name'?: string;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'scope'?: Scope;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * 
        */
    'title'?: DatabaseTranslatedString;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
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
        "name": "scope",
        "baseName": "scope",
        "type": "Scope"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "DatabaseTranslatedString"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalDeviceManufacturer.attributeTypeMap;
    }
}

export { PaymentTerminalDeviceManufacturer }
