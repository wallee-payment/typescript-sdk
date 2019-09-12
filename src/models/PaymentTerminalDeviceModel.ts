'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { DatabaseTranslatedString } from "./DatabaseTranslatedString";
import { PaymentTerminalDeviceManufacturer } from "./PaymentTerminalDeviceManufacturer";


class PaymentTerminalDeviceModel {

        /**
        * 
        */
    'description'?: DatabaseTranslatedString;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'image'?: Array<string>;

        /**
        * 
        */
    'imageType'?: string;

        /**
        * 
        */
    'manufacturer'?: PaymentTerminalDeviceManufacturer;

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
        "name": "description",
        "baseName": "description",
        "type": "DatabaseTranslatedString"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "image",
        "baseName": "image",
        "type": "Array<string>"
        },
        
        {
        "name": "imageType",
        "baseName": "imageType",
        "type": "string"
        },
        
        {
        "name": "manufacturer",
        "baseName": "manufacturer",
        "type": "PaymentTerminalDeviceManufacturer"
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
        return PaymentTerminalDeviceModel.attributeTypeMap;
    }
}

export { PaymentTerminalDeviceModel }
