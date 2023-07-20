'use strict';
import { LocalizedString } from "./LocalizedString";


class LegalOrganizationForm {

        /**
        * The two-letter code of the country the legal organization form is used in (ISO 3166-1 alpha-2 format).
        */
    'country'?: string;

        /**
        * The localized descriptions of the legal organization form.
        */
    'description'?: Array<LocalizedString>;

        /**
        * The English name of the legal organization form.
        */
    'englishDescription'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized shortcuts of the legal organization form.
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
