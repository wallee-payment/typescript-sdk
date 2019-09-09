'use strict';
import { SubscriptionAffiliate } from "./SubscriptionAffiliate";


class SubscriptionAffiliateDeleted extends SubscriptionAffiliate {


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionAffiliateDeleted.attributeTypeMap);
    }
}

export { SubscriptionAffiliateDeleted }
