'use strict';


class FeatureCategory {

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'orderWeight'?: number;


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
        "name": "orderWeight",
        "baseName": "orderWeight",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return FeatureCategory.attributeTypeMap;
    }
}

export { FeatureCategory }
