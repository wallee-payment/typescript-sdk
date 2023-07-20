'use strict';
import { InvoiceReconciliationRecord } from "./InvoiceReconciliationRecord";
import { TransactionInvoice } from "./TransactionInvoice";


class InvoiceReconciliationRecordInvoiceLink {

        /**
        * 
        */
    'amount'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'invoice'?: TransactionInvoice;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'record'?: InvoiceReconciliationRecord;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "amount",
        "baseName": "amount",
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
        "name": "invoice",
        "baseName": "invoice",
        "type": "TransactionInvoice"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "record",
        "baseName": "record",
        "type": "InvoiceReconciliationRecord"
        }        
    ];

    static getAttributeTypeMap() {
        return InvoiceReconciliationRecordInvoiceLink.attributeTypeMap;
    }
}

export { InvoiceReconciliationRecordInvoiceLink }
