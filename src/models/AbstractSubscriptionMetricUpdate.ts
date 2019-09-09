'use strict';
import { DatabaseTranslatedStringCreate } from "./DatabaseTranslatedStringCreate";


class AbstractSubscriptionMetricUpdate {

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
        return AbstractSubscriptionMetricUpdate.attributeTypeMap;
    }
}

export { AbstractSubscriptionMetricUpdate }
