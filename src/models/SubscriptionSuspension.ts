'use strict';
import { SubscriptionSuspensionAction } from "./SubscriptionSuspensionAction";
import { SubscriptionSuspensionReason } from "./SubscriptionSuspensionReason";
import { SubscriptionSuspensionState } from "./SubscriptionSuspensionState";


class SubscriptionSuspension {

        /**
        * The created on date indicates the date on which the entity was stored into the database.
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
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The suspension reason indicates why a suspension has been created.
        */
    'reason'?: SubscriptionSuspensionReason;

        /**
        * 
        */
    'state'?: SubscriptionSuspensionState;

        /**
        * 
        */
    'subscription'?: number;

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
