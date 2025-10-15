'use strict';
import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { LineItem } from "./LineItem";
import { TransactionCompletionMode } from "./TransactionCompletionMode";
import { TransactionCompletionState } from "./TransactionCompletionState";
import { TransactionLineItemVersion } from "./TransactionLineItemVersion";


class TransactionCompletion {

        /**
        * The total amount to be captured in this completion, including taxes.
        */
    'amount'?: number;

        /**
        * The original line items from the transaction that serve as the baseline for this completion.
        */
    'baseLineItems'?: Array<LineItem>;

        /**
        * The ID of the user the transaction completion was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId'?: string;

        /**
        * The date and time when the transaction completion failed.
        */
    'failedOn'?: Date;

        /**
        * The reason for the failure of the transaction completion.
        */
    'failureReason'?: FailureReason;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The merchant's reference used to identify the invoice.
        */
    'invoiceMerchantReference'?: string;

        /**
        * The labels providing additional information about the object.
        */
    'labels'?: Array<Label>;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * Whether this is the final completion for the transaction. After the last completion is successfully created, the transaction enters its final state, and no further completions can occur.
        */
    'lastCompletion'?: boolean;

        /**
        * The specific version of the line items that are being used for this completion.
        */
    'lineItemVersion'?: TransactionLineItemVersion;

        /**
        * The line items captured in this transaction completion.
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
        * The mode of transaction completion, such as online or offline, determining how the completion process is executed.
        */
    'mode'?: TransactionCompletionMode;

        /**
        * The date and time when the next update of the object's state is planned.
        */
    'nextUpdateOn'?: Date;

        /**
        * Payment-specific details related to this transaction completion such as payment instructions or references needed for processing.
        */
    'paymentInformation'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The date and time when the processing of the transaction completion was started.
        */
    'processingOn'?: Date;

        /**
        * The reference ID provided by the payment processor, used to trace the completion through the external payment system.
        */
    'processorReference'?: string;

        /**
        * The line items yet to be captured in the transaction.
        */
    'remainingLineItems'?: Array<LineItem>;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;

        /**
        * The object's current state.
        */
    'state'?: TransactionCompletionState;

        /**
        * The statement descriptor that appears on a customer's bank statement, providing an explanation for charges or payments, helping customers identify the transaction.
        */
    'statementDescriptor'?: string;

        /**
        * The date and time when the transaction completion succeeded.
        */
    'succeededOn'?: Date;

        /**
        * The portion of the captured amount that corresponds to taxes.
        */
    'taxAmount'?: number;

        /**
        * The time zone that this object is associated with.
        */
    'timeZone'?: string;

        /**
        * The date and time when the object will expire.
        */
    'timeoutOn'?: Date;

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
        "name": "id",
        "baseName": "id",
        "type": "number"
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
        "name": "statementDescriptor",
        "baseName": "statementDescriptor",
        "type": "string"
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
        return TransactionCompletion.attributeTypeMap;
    }
}

export { TransactionCompletion }
