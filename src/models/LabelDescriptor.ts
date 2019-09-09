'use strict';
import { LabelDescriptorCategory } from "./LabelDescriptorCategory";


class LabelDescriptor {

        /**
        * 
        */
    'category'?: LabelDescriptorCategory;

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'features'?: Array<number>;

        /**
        * 
        */
    'group'?: number;

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
    'type'?: number;

        /**
        * 
        */
    'weight'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "category",
        "baseName": "category",
        "type": "LabelDescriptorCategory"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "features",
        "baseName": "features",
        "type": "Array<number>"
        },
        
        {
        "name": "group",
        "baseName": "group",
        "type": "number"
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
        "name": "type",
        "baseName": "type",
        "type": "number"
        },
        
        {
        "name": "weight",
        "baseName": "weight",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return LabelDescriptor.attributeTypeMap;
    }
}

export { LabelDescriptor }
