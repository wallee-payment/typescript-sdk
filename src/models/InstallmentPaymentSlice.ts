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
        * The created on date indicates the date on which the entity was stored into the database.
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
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'state'?: InstallmentPaymentSliceState;

        /**
        * 
        */
    'transaction'?: Transaction;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
