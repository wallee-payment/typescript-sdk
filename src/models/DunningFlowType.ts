'use strict';


class DunningFlowType {

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized name of the object.
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'specificCountry'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "specificCountry",
        "baseName": "specificCountry",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return DunningFlowType.attributeTypeMap;
    }
}

export { DunningFlowType }
