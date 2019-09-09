'use strict';
import { AbstractSubscriptionAffiliateUpdate } from "./AbstractSubscriptionAffiliateUpdate";


class SubscriptionAffiliateCreate extends AbstractSubscriptionAffiliateUpdate {

        /**
        * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
        */
    'externalId': string;

        /**
        * 
        */
    'reference'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionAffiliateCreate.attributeTypeMap);
    }
}

export { SubscriptionAffiliateCreate }
