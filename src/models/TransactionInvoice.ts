'use strict';
import { Address } from "./Address";
import { Environment } from "./Environment";
import { LineItem } from "./LineItem";
import { TransactionCompletion } from "./TransactionCompletion";
import { TransactionInvoiceState } from "./TransactionInvoiceState";


class TransactionInvoice {

        /**
        * The total sum of all line items on the invoice, including taxes.
        */
    'amount'?: number;

        /**
        * The address associated with the invoice, used for billing purposes.
        */
    'billingAddress'?: Address;

        /**
        * The transaction completion this object is linked to.
        */
    'completion'?: TransactionCompletion;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The ID of the user the invoice was derecognized by.
        */
    'derecognizedBy'?: number;

        /**
        * The date and time when the invoice was derecognized, meaning it is no longer considered outstanding or valid in the system.
        */
    'derecognizedOn'?: Date;

        /**
        * The due date for payment of the invoice.
        */
    'dueOn'?: Date;

        /**
        * The environment used when rendering resources.
        */
    'environment'?: Environment;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The invoiced line items that will appear on the invoice document.
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The payment transaction this object is linked to.
        */
    'linkedTransaction'?: number;

        /**
        * The merchant's reference used to identify the invoice.
        */
    'merchantReference'?: string;

        /**
        * The remaining amount the buyer owes to the merchant. A negative value indicates the invoice has been overpaid.
        */
    'outstandingAmount'?: number;

        /**
        * The date and time when the invoice was recorded as paid. May differ from the actual payment date due to processing delays.
        */
    'paidOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;

        /**
        * The object's current state.
        */
    'state'?: TransactionInvoiceState;

        /**
        * The portion of the invoiced amount that corresponds to taxes.
        */
    'taxAmount'?: number;

        /**
        * The time zone that this object is associated with.
        */
    'timeZone'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
        },
        
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "Address"
        },
        
        {
        "name": "completion",
        "baseName": "completion",
        "type": "TransactionCompletion"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "derecognizedBy",
        "baseName": "derecognizedBy",
        "type": "number"
        },
        
        {
        "name": "derecognizedOn",
        "baseName": "derecognizedOn",
        "type": "Date"
        },
        
        {
        "name": "dueOn",
        "baseName": "dueOn",
        "type": "Date"
        },
        
        {
        "name": "environment",
        "baseName": "environment",
        "type": "Environment"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
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
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
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
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
        },
        
        {
        "name": "outstandingAmount",
        "baseName": "outstandingAmount",
        "type": "number"
        },
        
        {
        "name": "paidOn",
        "baseName": "paidOn",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "TransactionInvoiceState"
        },
        
        {
        "name": "taxAmount",
        "baseName": "taxAmount",
        "type": "number"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return TransactionInvoice.attributeTypeMap;
    }
}

export { TransactionInvoice }
