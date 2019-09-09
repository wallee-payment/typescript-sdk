'use strict';
import { LabelDescriptor } from "./LabelDescriptor";


class Label {

        /**
        * 
        */
    'content'?: any;

        /**
        * 
        */
    'contentAsString'?: string;

        /**
        * 
        */
    'descriptor'?: LabelDescriptor;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "content",
        "baseName": "content",
        "type": "any"
        },
        
        {
        "name": "contentAsString",
        "baseName": "contentAsString",
        "type": "string"
        },
        
        {
        "name": "descriptor",
        "baseName": "descriptor",
        "type": "LabelDescriptor"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Label.attributeTypeMap;
    }
}

export { Label }
