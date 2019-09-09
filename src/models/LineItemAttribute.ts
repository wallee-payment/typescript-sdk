'use strict';


class LineItemAttribute {

        /**
        * 
        */
    'label'?: string;

        /**
        * 
        */
    'value'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "label",
        "baseName": "label",
        "type": "string"
        },
        
        {
        "name": "value",
        "baseName": "value",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return LineItemAttribute.attributeTypeMap;
    }
}

export { LineItemAttribute }
