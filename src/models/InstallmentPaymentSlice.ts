'use strict';
import { InstallmentPayment } from "./InstallmentPayment";
import { InstallmentPaymentSliceState } from "./InstallmentPaymentSliceState";
import { LineItem } from "./LineItem";
import { Transaction } from "./Transaction";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class InstallmentPaymentSlice extends TransactionAwareEntity {

        /**
        * 
        */
    'chargeOn'?: Date;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'installmentPayment'?: InstallmentPayment;

        /**
        * 
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: InstallmentPaymentSliceState;

        /**
        * 
        */
    'transaction'?: Transaction;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "chargeOn",
        "baseName": "chargeOn",
        "type": "Date"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "installmentPayment",
        "baseName": "installmentPayment",
        "type": "InstallmentPayment"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "InstallmentPaymentSliceState"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InstallmentPaymentSlice.attributeTypeMap);
    }
}

export { InstallmentPaymentSlice }
