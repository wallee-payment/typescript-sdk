'use strict';
import { Environment } from "./Environment";
import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { LineItem } from "./LineItem";
import { LineItemReduction } from "./LineItemReduction";
import { RefundState } from "./RefundState";
import { RefundType } from "./RefundType";
import { Tax } from "./Tax";
import { Transaction } from "./Transaction";


class Refund {

        /**
        * The total monetary amount of the refund, representing the exact credit issued to the customer.
        */
    'amount'?: number;

        /**
        * The original base line items from the transaction prior to the refund, serving as a reference for the refunded amounts.
        */
    'baseLineItems'?: Array<LineItem>;

        /**
        * The transaction completion that the refund belongs to.
        */
    'completion'?: number;

        /**
        * The ID of the user the refund was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The environment used when rendering resources.
        */
    'environment'?: Environment;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId'?: string;

        /**
        * The date and time when the refund failed.
        */
    'failedOn'?: Date;

        /**
        * The reason for the failure of the refund.
        */
    'failureReason'?: FailureReason;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The labels providing additional information about the object.
        */
    'labels'?: Array<Label>;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The line items included in the refund, representing the reductions.
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The merchant's reference used to identify the refund.
        */
    'merchantReference'?: string;

        /**
        * The date and time when the next update of the object's state is planned.
        */
    'nextUpdateOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The date and time when the processing of the refund was started.
        */
    'processingOn'?: Date;

        /**
        * The reference ID provided by the payment processor, used to trace the refund through the external payment system.
        */
    'processorReference'?: string;

        /**
        * The line items from the original transaction, adjusted to reflect any reductions applied during the refund process.
        */
    'reducedLineItems'?: Array<LineItem>;

        /**
        * The reductions applied on the original transaction items, detailing specific adjustments associated with the refund.
        */
    'reductions'?: Array<LineItemReduction>;

        /**
        * The object's current state.
        */
    'state'?: RefundState;

        /**
        * The date and time when the refund succeeded.
        */
    'succeededOn'?: Date;

        /**
        * The tax breakdown applied to the refund amount, helping with tax calculations or reporting.
        */
    'taxes'?: Array<Tax>;

        /**
        * The time zone that this object is associated with.
        */
    'timeZone'?: string;

        /**
        * The date and time when the object will expire.
        */
    'timeoutOn'?: Date;

        /**
        * The sum of fees applied to the refund transaction, such as processing or service charges.
        */
    'totalAppliedFees'?: number;

        /**
        * The total amount settled for the refund, factoring in reductions, taxes, and any additional applied fees.
        */
    'totalSettledAmount'?: number;

        /**
        * The transaction that the refund belongs to.
        */
    'transaction'?: Transaction;

        /**
        * The type specifying the method and origin of the refund (e.g., initiated by the customer or merchant).
        */
    'type'?: RefundType;

        /**
        * An updated invoice reflecting adjustments made by the refund.
        */
    'updatedInvoice'?: number;

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
        "name": "baseLineItems",
        "baseName": "baseLineItems",
        "type": "Array<LineItem>"
        },
        
        {
        "name": "completion",
        "baseName": "completion",
        "type": "number"
        },
        
        {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
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
        "name": "failedOn",
        "baseName": "failedOn",
        "type": "Date"
        },
        
        {
        "name": "failureReason",
        "baseName": "failureReason",
        "type": "FailureReason"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "labels",
        "baseName": "labels",
        "type": "Array<Label>"
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
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
        },
        
        {
        "name": "nextUpdateOn",
        "baseName": "nextUpdateOn",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "processingOn",
        "baseName": "processingOn",
        "type": "Date"
        },
        
        {
        "name": "processorReference",
        "baseName": "processorReference",
        "type": "string"
        },
        
        {
        "name": "reducedLineItems",
        "baseName": "reducedLineItems",
        "type": "Array<LineItem>"
        },
        
        {
        "name": "reductions",
        "baseName": "reductions",
        "type": "Array<LineItemReduction>"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "RefundState"
        },
        
        {
        "name": "succeededOn",
        "baseName": "succeededOn",
        "type": "Date"
        },
        
        {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<Tax>"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
        },
        
        {
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
        },
        
        {
        "name": "totalAppliedFees",
        "baseName": "totalAppliedFees",
        "type": "number"
        },
        
        {
        "name": "totalSettledAmount",
        "baseName": "totalSettledAmount",
        "type": "number"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "RefundType"
        },
        
        {
        "name": "updatedInvoice",
        "baseName": "updatedInvoice",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Refund.attributeTypeMap;
    }
}

export { Refund }
