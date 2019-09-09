'use strict';
import { SubscriptionAffiliateUpdate } from "./SubscriptionAffiliateUpdate";


class SubscriptionAffiliateInactive extends SubscriptionAffiliateUpdate {


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionAffiliateInactive.attributeTypeMap);
    }
}

export { SubscriptionAffiliateInactive }
