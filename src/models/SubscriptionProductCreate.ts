'use strict';
import { AbstractSubscriptionProductActive } from "./AbstractSubscriptionProductActive";


class SubscriptionProductCreate extends AbstractSubscriptionProductActive {

        /**
        * The merchant's reference used to identify the product, e.g. the SKU.
        */
    'reference': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionProductCreate.attributeTypeMap);
    }
}

export { SubscriptionProductCreate }
