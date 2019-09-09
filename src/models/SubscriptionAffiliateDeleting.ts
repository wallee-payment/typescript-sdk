'use strict';
import { SubscriptionAffiliateDeleted } from "./SubscriptionAffiliateDeleted";


class SubscriptionAffiliateDeleting extends SubscriptionAffiliateDeleted {


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionAffiliateDeleting.attributeTypeMap);
    }
}

export { SubscriptionAffiliateDeleting }
