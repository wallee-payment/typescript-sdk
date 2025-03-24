'use strict';


class LineItemAttributeCreate {

        /**
        * The label describing the line item attribute.
        */
    'label': string;

        /**
        * The value of the line item attribute.
        */
    'value': string;


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
        return LineItemAttributeCreate.attributeTypeMap;
    }
}

export { LineItemAttributeCreate }
