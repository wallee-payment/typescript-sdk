'use strict';
import { LabelDescriptor } from "./LabelDescriptor";


class Label {

        /**
        * The label's actual content.
        */
    'content'?: any;

        /**
        * The label's content formatted as string.
        */
    'contentAsString'?: string;

        /**
        * The descriptor that describes what information the label provides.
        */
    'descriptor'?: LabelDescriptor;


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
        }        
    ];

    static getAttributeTypeMap() {
        return Label.attributeTypeMap;
    }
}

export { Label }
