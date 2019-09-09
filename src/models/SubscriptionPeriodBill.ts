'use strict';
import { SubscriptionPeriodBillState } from "./SubscriptionPeriodBillState";
import { SubscriptionVersion } from "./SubscriptionVersion";


class SubscriptionPeriodBill {

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'effectivePeriodEndDate'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'language'?: string;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'periodStartDate'?: Date;

        /**
        * 
        */
    'plannedPeriodEndDate'?: Date;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'state'?: SubscriptionPeriodBillState;

        /**
        * 
        */
    'subscriptionVersion'?: SubscriptionVersion;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "effectivePeriodEndDate",
        "baseName": "effectivePeriodEndDate",
        "type": "Date"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "periodStartDate",
        "baseName": "periodStartDate",
        "type": "Date"
        },
        
        {
        "name": "plannedPeriodEndDate",
        "baseName": "plannedPeriodEndDate",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionPeriodBillState"
        },
        
        {
        "name": "subscriptionVersion",
        "baseName": "subscriptionVersion",
        "type": "SubscriptionVersion"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionPeriodBill.attributeTypeMap;
    }
}

export { SubscriptionPeriodBill }
