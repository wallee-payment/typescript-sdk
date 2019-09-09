'use strict';
import { SubscriptionMetricUpdate } from "./SubscriptionMetricUpdate";


class SubscriptionMetricActive extends SubscriptionMetricUpdate {


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionMetricActive.attributeTypeMap);
    }
}

export { SubscriptionMetricActive }
