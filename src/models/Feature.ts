'use strict';
import { FeatureCategory } from "./FeatureCategory";


class Feature {

        /**
        * 
        */
    'beta'?: boolean;

        /**
        * 
        */
    'category'?: FeatureCategory;

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
    'logoPath'?: string;

        /**
        * 
        */
    'name'?: { [key: string]: string; };

        /**
        * 
        */
    'requiredFeatures'?: Array<number>;

        /**
        * 
        */
    'sortOrder'?: number;

        /**
        * 
        */
    'visible'?: boolean;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "beta",
        "baseName": "beta",
        "type": "boolean"
        },
        
        {
        "name": "category",
        "baseName": "category",
        "type": "FeatureCategory"
        },
        
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
        "name": "logoPath",
        "baseName": "logoPath",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "requiredFeatures",
        "baseName": "requiredFeatures",
        "type": "Array<number>"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        },
        
        {
        "name": "visible",
        "baseName": "visible",
        "type": "boolean"
        }        
    ];

    static getAttributeTypeMap() {
        return Feature.attributeTypeMap;
    }
}

export { Feature }
