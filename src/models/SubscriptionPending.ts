'use strict';
import { SubscriptionUpdate } from "./SubscriptionUpdate";


class SubscriptionPending extends SubscriptionUpdate {

        /**
        * 
        */
    'reference'?: string;

        /**
        * 
        */
    'subscriber'?: number;

        /**
        * 
        */
    'token'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "subscriber",
        "baseName": "subscriber",
        "type": "number"
        },
        
        {
        "name": "token",
        "baseName": "token",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionPending.attributeTypeMap);
    }
}

export { SubscriptionPending }
