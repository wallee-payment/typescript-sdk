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
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The ID of the space this object belongs to.
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
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionPeriodBillState;

        /**
        * 
        */
    'subscriptionVersion'?: SubscriptionVersion;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
