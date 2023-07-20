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
        * The component group name will be shown when the components are selected. This can be visible to the subscriber.
        */
    'name'?: { [key: string]: string; };

        /**
        * The component group can be optional. This means no component has to be selected by the subscriber.
        */
    'optional'?: boolean;

        /**
        * 
        */
    'productVersion'?: SubscriptionProductVersion;

        /**
        * The sort order controls in which order the component group is listed. The sort order is used to order the component groups in ascending order.
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
