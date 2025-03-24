'use strict';


class SubscriptionProductComponentGroupUpdate {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id': number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version': number;

        /**
        * The localized name of the component group that is displayed to the customer.
        */
    'name'?: { [key: string]: string; };

        /**
        * Whether the component group is optional, i.e. the customer does not have to select any component.
        */
    'optional'?: boolean;

        /**
        * The product version that the component group belongs to.
        */
    'productVersion'?: number;

        /**
        * When listing component groups, they can be sorted by this number.
        */
    'sortOrder'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "optional",
        "baseName": "optional",
        "type": "boolean"
        },
        
        {
        "name": "productVersion",
        "baseName": "productVersion",
        "type": "number"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionProductComponentGroupUpdate.attributeTypeMap;
    }
}

export { SubscriptionProductComponentGroupUpdate }
