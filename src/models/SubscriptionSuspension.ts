'use strict';
import { SubscriptionSuspensionAction } from "./SubscriptionSuspensionAction";
import { SubscriptionSuspensionReason } from "./SubscriptionSuspensionReason";
import { SubscriptionSuspensionState } from "./SubscriptionSuspensionState";


class SubscriptionSuspension {

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The date and time when the suspension ended.
        */
    'effectiveEndDate'?: Date;

        /**
        * Whether the subscription should be terminated or reactivated after the suspension has reached its end date.
        */
    'endAction'?: SubscriptionSuspensionAction;

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
        * A note that contains details about the suspension. It is not disclosed to the subscriber.
        */
    'note'?: string;

        /**
        * The period bill that led to the suspension of the subscription.
        */
    'periodBill'?: number;

        /**
        * The date and time when the suspension is planned to end.
        */
    'plannedEndDate'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The reason why the subscription was suspended.
        */
    'reason'?: SubscriptionSuspensionReason;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionSuspensionState;

        /**
        * The subscription that this suspension belongs to.
        */
    'subscription'?: number;

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
        "name": "effectiveEndDate",
        "baseName": "effectiveEndDate",
        "type": "Date"
        },
        
        {
        "name": "endAction",
        "baseName": "endAction",
        "type": "SubscriptionSuspensionAction"
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
        "name": "note",
        "baseName": "note",
        "type": "string"
        },
        
        {
        "name": "periodBill",
        "baseName": "periodBill",
        "type": "number"
        },
        
        {
        "name": "plannedEndDate",
        "baseName": "plannedEndDate",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "reason",
        "baseName": "reason",
        "type": "SubscriptionSuspensionReason"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionSuspensionState"
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
        return SubscriptionSuspension.attributeTypeMap;
    }
}

export { SubscriptionSuspension }
