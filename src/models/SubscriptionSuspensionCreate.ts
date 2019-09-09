'use strict';
import { SubscriptionSuspensionAction } from "./SubscriptionSuspensionAction";


class SubscriptionSuspensionCreate {

        /**
        * When the suspension reaches the planned end date the end action will be carried out. This action is only executed when the suspension is ended automatically based on the end date.
        */
    'endAction': SubscriptionSuspensionAction;

        /**
        * The note may contain some internal information for the suspension. The note will not be disclosed to the subscriber.
        */
    'note'?: string;

        /**
        * The planned end date of the suspension identifies the date on which the suspension will be ended automatically.
        */
    'plannedEndDate': Date;

        /**
        * 
        */
    'subscription': number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "endAction",
        "baseName": "endAction",
        "type": "SubscriptionSuspensionAction"
        },
        
        {
        "name": "note",
        "baseName": "note",
        "type": "string"
        },
        
        {
        "name": "plannedEndDate",
        "baseName": "plannedEndDate",
        "type": "Date"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionSuspensionCreate.attributeTypeMap;
    }
}

export { SubscriptionSuspensionCreate }
