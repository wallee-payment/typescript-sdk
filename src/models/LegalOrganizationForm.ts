'use strict';
import { LocalizedString } from "./LocalizedString";


class LegalOrganizationForm {

        /**
        * 
        */
    'country'?: string;

        /**
        * 
        */
    'description'?: Array<LocalizedString>;

        /**
        * 
        */
    'englishDescription'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'shortcut'?: Array<LocalizedString>;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "country",
        "baseName": "country",
        "type": "string"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "Array<LocalizedString>"
        },
        
        {
        "name": "englishDescription",
        "baseName": "englishDescription",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "shortcut",
        "baseName": "shortcut",
        "type": "Array<LocalizedString>"
        }        
    ];

    static getAttributeTypeMap() {
        return LegalOrganizationForm.attributeTypeMap;
    }
}

export { LegalOrganizationForm }
