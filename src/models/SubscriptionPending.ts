'use strict';
import { SubscriptionUpdate } from "./SubscriptionUpdate";


class SubscriptionPending extends SubscriptionUpdate {

        /**
        * The merchant's reference used to identify the subscription.
        */
    'reference'?: string;

        /**
        * The subscriber that the subscription belongs to.
        */
    'subscriber'?: number;

        /**
        * The payment token that is used to charge the customer.
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
