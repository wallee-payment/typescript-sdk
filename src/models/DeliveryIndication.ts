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
        * The date and time when the object was created.
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
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
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
