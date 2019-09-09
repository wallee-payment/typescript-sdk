'use strict';
import { CreationEntityState } from "./CreationEntityState";


class AbstractSubscriptionAffiliateUpdate {

        /**
        * 
        */
    'language'?: string;

        /**
        * Meta data allow to store additional data along the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * 
        */
    'name'?: string;

        /**
        * 
        */
    'state'?: CreationEntityState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "metaData",
        "baseName": "metaData",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractSubscriptionAffiliateUpdate.attributeTypeMap;
    }
}

export { AbstractSubscriptionAffiliateUpdate }
