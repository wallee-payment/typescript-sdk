'use strict';


class DocumentTemplateTypeGroup {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'title'?: { [key: string]: string; };


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "{ [key: string]: string; }"
        }        
    ];

    static getAttributeTypeMap() {
        return DocumentTemplateTypeGroup.attributeTypeMap;
    }
}

export { DocumentTemplateTypeGroup }
