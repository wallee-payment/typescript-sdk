'use strict';
import { SubscriptionProductVersion } from "./SubscriptionProductVersion";


class SubscriptionProductComponentGroup {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

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
    'productVersion'?: SubscriptionProductVersion;

        /**
        * When listing component groups, they can be sorted by this number.
        */
    'sortOrder'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
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
        "type": "SubscriptionProductVersion"
        },
        
        {
        "name": "sortOrder",
        "baseName": "sortOrder",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionProductComponentGroup.attributeTypeMap;
    }
}

export { SubscriptionProductComponentGroup }
