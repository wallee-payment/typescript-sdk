'use strict';


class SubscriptionMetricUsageReport {

        /**
        * The consumed units describe the amount of resources consumed. Those consumed units will be billed in the next billing cycle.
        */
    'consumedUnits'?: number;

        /**
        * 
        */
    'createdByUserId'?: number;

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * The metric usage report description describe the reported usage. This description may be shown to the end user.
        */
    'description'?: string;

        /**
        * The external id identifies the metric usage uniquely.
        */
    'externalId'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The metric usage report is linked to the metric for which the usage should be recorded.
        */
    'metric'?: number;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The subscription to which the usage is added to.
        */
    'subscription'?: number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "consumedUnits",
        "baseName": "consumedUnits",
        "type": "number"
        },
        
        {
        "name": "createdByUserId",
        "baseName": "createdByUserId",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
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
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "metric",
        "baseName": "metric",
        "type": "number"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionMetricUsageReport.attributeTypeMap;
    }
}

export { SubscriptionMetricUsageReport }
