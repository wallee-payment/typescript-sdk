'use strict';
import { LabelDescriptorCategory } from "./LabelDescriptorCategory";


class LabelDescriptor {

        /**
        * The label's category.
        */
    'category'?: LabelDescriptorCategory;

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * The features that this label belongs to.
        */
    'features'?: Array<number>;

        /**
        * The group that this label belongs to.
        */
    'group'?: number;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized name of the object.
        */
    'name'?: { [key: string]: string; };

        /**
        * The type of the label's value.
        */
    'type'?: number;

        /**
        * When listing labels, they can be sorted by this number.
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
