'use strict';


class RenderedDocument {

        /**
        * The binary data of the document
        */
    'data'?: Array<string>;

        /**
        * The document's template type
        */
    'documentTemplateType'?: number;

        /**
        * The document's content type
        */
    'mimeType'?: string;

        /**
        * The title of the rendered document
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
