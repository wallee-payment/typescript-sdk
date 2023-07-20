'use strict';
import { FeatureCategory } from "./FeatureCategory";


class Feature {

        /**
        * Whether the feature is in beta stage and there may still be some issues.
        */
    'beta'?: boolean;

        /**
        * The category that the feature belongs to.
        */
    'category'?: FeatureCategory;

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The path to the feature's logo image.
        */
    'logoPath'?: string;

        /**
        * The localized name of the object.
        */
    'name'?: { [key: string]: string; };

        /**
        * The features that must be enabled for this feature to work properly.
        */
    'requiredFeatures'?: Array<number>;

        /**
        * When listing features, they can be sorted by this number.
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
