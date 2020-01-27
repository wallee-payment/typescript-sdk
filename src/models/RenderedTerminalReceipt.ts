'use strict';


class RenderedTerminalReceipt {

        /**
        * 
        */
    'data'?: Array<string>;

        /**
        * 
        */
    'mimeType'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "data",
        "baseName": "data",
        "type": "Array<string>"
        },
        
        {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return RenderedTerminalReceipt.attributeTypeMap;
    }
}

export { RenderedTerminalReceipt }
