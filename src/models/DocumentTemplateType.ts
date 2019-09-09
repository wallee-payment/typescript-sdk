'use strict';
import { DocumentTemplateTypeGroup } from "./DocumentTemplateTypeGroup";


class DocumentTemplateType {

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'feature'?: number;

        /**
        * 
        */
    'group'?: DocumentTemplateTypeGroup;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'title'?: { [key: string]: string; };


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "feature",
        "baseName": "feature",
        "type": "number"
        },
        
        {
        "name": "group",
        "baseName": "group",
        "type": "DocumentTemplateTypeGroup"
        },
        
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
        return DocumentTemplateType.attributeTypeMap;
    }
}

export { DocumentTemplateType }
