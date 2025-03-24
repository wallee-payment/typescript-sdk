'use strict';
import { SubscriptionSuspensionAction } from "./SubscriptionSuspensionAction";


class SubscriptionSuspensionCreate {

        /**
        * Whether the subscription should be terminated or reactivated after the suspension has reached its end date.
        */
    'endAction': SubscriptionSuspensionAction;

        /**
        * A note that contains details about the suspension. It is not disclosed to the subscriber.
        */
    'note'?: string;

        /**
        * The date and time when the suspension is planned to end.
        */
    'plannedEndDate': Date;

        /**
        * The subscription that this suspension belongs to.
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
