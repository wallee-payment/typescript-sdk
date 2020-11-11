'use strict';
import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { LineItem } from "./LineItem";
import { TransactionAwareEntity } from "./TransactionAwareEntity";
import { TransactionCompletionMode } from "./TransactionCompletionMode";
import { TransactionCompletionState } from "./TransactionCompletionState";
import { TransactionLineItemVersion } from "./TransactionLineItemVersion";


class TransactionCompletion extends TransactionAwareEntity {

        /**
        * The amount which is captured. The amount represents sum of line items including taxes.
        */
    'amount'?: number;

        /**
        * The base line items on which the completion is applied on.
        */
    'baseLineItems'?: Array<LineItem>;

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * The external ID helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
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
        * 
        */
    'invoiceMerchantReference'?: string;

        /**
        * 
        */
    'labels'?: Array<Label>;

        /**
        * 
        */
    'language'?: string;

        /**
        * Indicates if this is the last completion. After the last completion is created the transaction cannot be completed anymore.
        */
    'lastCompletion'?: boolean;

        /**
        * 
        */
    'lineItemVersion'?: TransactionLineItemVersion;

        /**
        * The line items which are captured.
        */
    'lineItems'?: Array<LineItem>;

        /**
        * 
        */
    'mode'?: TransactionCompletionMode;

        /**
        * 
        */
    'nextUpdateOn'?: Date;

        /**
        * 
        */
    'paymentInformation'?: string;

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
    'remainingLineItems'?: Array<LineItem>;

        /**
        * 
        */
    'spaceViewId'?: number;

        /**
        * 
        */
    'state'?: TransactionCompletionState;

        /**
        * 
        */
    'succeededOn'?: Date;

        /**
        * The total sum of all taxes of line items.
        */
    'taxAmount'?: number;

        /**
        * 
        */
    'timeZone'?: string;

        /**
        * 
        */
    'timeoutOn'?: Date;

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
        "name": "invoiceMerchantReference",
        "baseName": "invoiceMerchantReference",
        "type": "string"
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
        "name": "lastCompletion",
        "baseName": "lastCompletion",
        "type": "boolean"
        },
        
        {
        "name": "lineItemVersion",
        "baseName": "lineItemVersion",
        "type": "TransactionLineItemVersion"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
        },
        
        {
        "name": "mode",
        "baseName": "mode",
        "type": "TransactionCompletionMode"
        },
        
        {
        "name": "nextUpdateOn",
        "baseName": "nextUpdateOn",
        "type": "Date"
        },
        
        {
        "name": "paymentInformation",
        "baseName": "paymentInformation",
        "type": "string"
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
        "name": "remainingLineItems",
        "baseName": "remainingLineItems",
        "type": "Array<LineItem>"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "TransactionCompletionState"
        },
        
        {
        "name": "succeededOn",
        "baseName": "succeededOn",
        "type": "Date"
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
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransactionCompletion.attributeTypeMap);
    }
}

export { TransactionCompletion }
