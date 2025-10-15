'use strict';


class SubscriptionMetricUsageReportCreate {

        /**
        * The number of resources consumed, will be charged in the next billing cycle.
        */
    'consumedUnits': number;

        /**
        * A description used to identify the usage report.
        */
    'description'?: string;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId': string;

        /**
        * The metric that the usage report is recorded for.
        */
    'metric': number;

        /**
        * The subscription that the usage report is recorded for.
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
