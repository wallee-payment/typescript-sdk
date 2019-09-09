'use strict';


class RenderedDocument {

        /**
        * 
        */
    'data'?: Array<string>;

        /**
        * 
        */
    'documentTemplateType'?: number;

        /**
        * 
        */
    'mimeType'?: string;

        /**
        * 
        */
    'title'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "data",
        "baseName": "data",
        "type": "Array<string>"
        },
        
        {
        "name": "documentTemplateType",
        "baseName": "documentTemplateType",
        "type": "number"
        },
        
        {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return RenderedDocument.attributeTypeMap;
    }
}

export { RenderedDocument }
