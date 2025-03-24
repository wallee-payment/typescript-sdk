'use strict';
import { DocumentTemplateTypeGroup } from "./DocumentTemplateTypeGroup";


class DocumentTemplateType {

        /**
        * The localized description of the document template type.
        */
    'description'?: { [key: string]: string; };

        /**
        * The feature that this document template type belongs to.
        */
    'feature'?: number;

        /**
        * The group that this document template type belongs to.
        */
    'group'?: DocumentTemplateTypeGroup;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized title of the document template type.
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
