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
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
