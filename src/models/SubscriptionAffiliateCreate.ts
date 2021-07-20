'use strict';
import { AbstractSubscriptionAffiliateUpdate } from "./AbstractSubscriptionAffiliateUpdate";


class SubscriptionAffiliateCreate extends AbstractSubscriptionAffiliateUpdate {

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId': string;

        /**
        * 
        */
    'reference': string;


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
