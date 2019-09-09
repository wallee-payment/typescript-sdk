'use strict';
import { DatabaseTranslatedStringCreate } from "./DatabaseTranslatedStringCreate";


class SubscriptionMetricUpdate {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id': number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version': number;

        /**
        * 
        */
    'description'?: DatabaseTranslatedStringCreate;

        /**
        * 
        */
    'name'?: DatabaseTranslatedStringCreate;


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
        "name": "description",
        "baseName": "description",
        "type": "DatabaseTranslatedStringCreate"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "DatabaseTranslatedStringCreate"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionMetricUpdate.attributeTypeMap;
    }
}

export { SubscriptionMetricUpdate }
