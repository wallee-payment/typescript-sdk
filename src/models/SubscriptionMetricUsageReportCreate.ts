'use strict';


class SubscriptionMetricUsageReportCreate {

        /**
        * The consumed units describe the amount of resources consumed. Those consumed units will be billed in the next billing cycle.
        */
    'consumedUnits': number;

        /**
        * The metric usage report description describe the reported usage. This description may be shown to the end user.
        */
    'description'?: string;

        /**
        * The external id identifies the metric usage uniquely.
        */
    'externalId': string;

        /**
        * The metric usage report is linked to the metric for which the usage should be recorded.
        */
    'metric': number;

        /**
        * The subscription to which the usage is added to.
        */
    'subscription': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "consumedUnits",
        "baseName": "consumedUnits",
        "type": "number"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "string"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "metric",
        "baseName": "metric",
        "type": "number"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionMetricUsageReportCreate.attributeTypeMap;
    }
}

export { SubscriptionMetricUsageReportCreate }
