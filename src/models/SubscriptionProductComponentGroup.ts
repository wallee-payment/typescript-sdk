'use strict';
import { DatabaseTranslatedString } from "./DatabaseTranslatedString";
import { SubscriptionProductVersion } from "./SubscriptionProductVersion";


class SubscriptionProductComponentGroup {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The component group name will be shown when the components are selected. This can be visible to the subscriber.
        */
    'name'?: DatabaseTranslatedString;

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
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
        "type": "DatabaseTranslatedString"
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
