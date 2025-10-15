'use strict';
import { DeliveryIndicationDecisionReason } from "./DeliveryIndicationDecisionReason";
import { DeliveryIndicationState } from "./DeliveryIndicationState";
import { Transaction } from "./Transaction";


class DeliveryIndication {

        /**
        * The reason for the automatic system decision about the delivery indication.
        */
    'automaticDecisionReason'?: DeliveryIndicationDecisionReason;

        /**
        * The date and time when an automatic decision was made.
        */
    'automaticallyDecidedOn'?: Date;

        /**
        * The transaction completion that the delivery indication is linked to.
        */
    'completion'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The payment transaction this object is linked to.
        */
    'linkedTransaction'?: number;

        /**
        * The date and time by which a decision must be made before the system automatically proceeds according to the connector's predefined settings.
        */
    'manualDecisionTimeoutOn'?: Date;

        /**
        * The ID of the user who manually decided the delivery indication's state.
        */
    'manuallyDecidedBy'?: number;

        /**
        * The date and time when a manual decision was made.
        */
    'manuallyDecidedOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: DeliveryIndicationState;

        /**
        * The date and time when the delivery indication will expire.
        */
    'timeoutOn'?: Date;

        /**
        * The payment transaction that the delivery indication is linked to.
        */
    'transaction'?: Transaction;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "automaticDecisionReason",
        "baseName": "automaticDecisionReason",
        "type": "DeliveryIndicationDecisionReason"
        },
        
        {
        "name": "automaticallyDecidedOn",
        "baseName": "automaticallyDecidedOn",
        "type": "Date"
        },
        
        {
        "name": "completion",
        "baseName": "completion",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
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
        "name": "linkedTransaction",
        "baseName": "linkedTransaction",
        "type": "number"
        },
        
        {
        "name": "manualDecisionTimeoutOn",
        "baseName": "manualDecisionTimeoutOn",
        "type": "Date"
        },
        
        {
        "name": "manuallyDecidedBy",
        "baseName": "manuallyDecidedBy",
        "type": "number"
        },
        
        {
        "name": "manuallyDecidedOn",
        "baseName": "manuallyDecidedOn",
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
        "type": "DeliveryIndicationState"
        },
        
        {
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
        }        
    ];

    static getAttributeTypeMap() {
        return DeliveryIndication.attributeTypeMap;
    }
}

export { DeliveryIndication }
