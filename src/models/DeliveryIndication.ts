'use strict';
import { DeliveryIndicationDecisionReason } from "./DeliveryIndicationDecisionReason";
import { DeliveryIndicationState } from "./DeliveryIndicationState";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class DeliveryIndication extends TransactionAwareEntity {

        /**
        * 
        */
    'automaticDecisionReason'?: DeliveryIndicationDecisionReason;

        /**
        * 
        */
    'automaticallyDecidedOn'?: Date;

        /**
        * 
        */
    'completion'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'manualDecisionTimeoutOn'?: Date;

        /**
        * 
        */
    'manuallyDecidedBy'?: number;

        /**
        * 
        */
    'manuallyDecidedOn'?: Date;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'state'?: DeliveryIndicationState;

        /**
        * 
        */
    'timeoutOn'?: Date;

        /**
        * 
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
        return super.getAttributeTypeMap().concat(DeliveryIndication.attributeTypeMap);
    }
}

export { DeliveryIndication }
