'use strict';
import { Address } from "./Address";


class ShopifySubscriptionAddress extends Address {


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShopifySubscriptionAddress.attributeTypeMap);
    }
}

export { ShopifySubscriptionAddress }
