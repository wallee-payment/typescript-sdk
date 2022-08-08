'use strict';
import { InvoiceReconciliationRecord } from "./InvoiceReconciliationRecord";
import { TransactionInvoice } from "./TransactionInvoice";


class InvoiceReconciliationRecordInvoiceLink {

        /**
        * 
        */
    'amount'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'invoice'?: TransactionInvoice;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
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
