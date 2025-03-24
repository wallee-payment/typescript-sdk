'use strict';
import { AbstractSubscriptionMetricUpdate } from "./AbstractSubscriptionMetricUpdate";


class SubscriptionMetricCreate extends AbstractSubscriptionMetricUpdate {

        /**
        * The type of the metric.
        */
    'type': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "type",
        "baseName": "type",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriptionMetricCreate.attributeTypeMap);
    }
}

export { SubscriptionMetricCreate }
