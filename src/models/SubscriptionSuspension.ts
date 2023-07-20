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
        * 
        */
    'effectiveEndDate'?: Date;

        /**
        * When the suspension reaches the planned end date the end action will be carried out. This action is only executed when the suspension is ended automatically based on the end date.
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
        * The note may contain some internal information for the suspension. The note will not be disclosed to the subscriber.
        */
    'note'?: string;

        /**
        * 
        */
    'periodBill'?: number;

        /**
        * The planned end date of the suspension identifies the date on which the suspension will be ended automatically.
        */
    'plannedEndDate'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The suspension reason indicates why a suspension has been created.
        */
    'reason'?: SubscriptionSuspensionReason;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionSuspensionState;

        /**
        * 
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
