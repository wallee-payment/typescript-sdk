'use strict';
import { DatabaseTranslatedStringCreate } from "./DatabaseTranslatedStringCreate";


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
        * The component group name will be shown when the components are selected. This can be visible to the subscriber.
        */
    'name'?: DatabaseTranslatedStringCreate;

        /**
        * The component group can be optional. This means no component has to be selected by the subscriber.
        */
    'optional'?: boolean;

        /**
        * 
        */
    'productVersion'?: number;

        /**
        * The sort order controls in which order the component group is listed. The sort order is used to order the component groups in ascending order.
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
        "type": "DatabaseTranslatedStringCreate"
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
