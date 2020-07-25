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
        * 
        */
    'amount'?: number;

        /**
        * 
        */
    'baseLineItems'?: Array<LineItem>;

        /**
        * 
        */
    'completion'?: number;

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'environment'?: Environment;

        /**
        * The external id helps to identify duplicate calls to the refund service. As such the external ID has to be unique per transaction.
        */
    'externalId'?: string;

        /**
        * 
        */
    'failedOn'?: Date;

        /**
        * 
        */
    'failureReason'?: FailureReason;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'labels'?: Array<Label>;

        /**
        * 
        */
    'language'?: string;

        /**
        * 
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'merchantReference'?: string;

        /**
        * 
        */
    'nextUpdateOn'?: Date;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'processingOn'?: Date;

        /**
        * 
        */
    'processorReference'?: string;

        /**
        * 
        */
    'reducedLineItems'?: Array<LineItem>;

        /**
        * 
        */
    'reductions'?: Array<LineItemReduction>;

        /**
        * 
        */
    'state'?: RefundState;

        /**
        * 
        */
    'succeededOn'?: Date;

        /**
        * 
        */
    'taxes'?: Array<Tax>;

        /**
        * 
        */
    'timeZone'?: string;

        /**
        * 
        */
    'timeoutOn'?: Date;

        /**
        * The total applied fees is the sum of all fees that have been applied so far.
        */
    'totalAppliedFees'?: number;

        /**
        * The total settled amount is the total amount which has been settled so far.
        */
    'totalSettledAmount'?: number;

        /**
        * 
        */
    'transaction'?: Transaction;

        /**
        * 
        */
    'type'?: RefundType;

        /**
        * 
        */
    'updatedInvoice'?: number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
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
