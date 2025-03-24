'use strict';


class SalesChannel {

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
        * When listing sales channels, they can be sorted by this number.
        */
    'sortOrder'?: number;


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
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SalesChannel.attributeTypeMap;
    }
}

export { SalesChannel }
