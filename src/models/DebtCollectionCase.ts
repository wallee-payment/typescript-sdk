'use strict';
import { Address } from "./Address";
import { DebtCollectionCaseSource } from "./DebtCollectionCaseSource";
import { DebtCollectionCaseState } from "./DebtCollectionCaseState";
import { DebtCollectionEnvironment } from "./DebtCollectionEnvironment";
import { DebtCollectorConfiguration } from "./DebtCollectorConfiguration";
import { FailureReason } from "./FailureReason";
import { Label } from "./Label";
import { LineItem } from "./LineItem";


class DebtCollectionCase {

        /**
        * The amount is the total amount of the not paid items. The amount cannot be change once the case is reviewed.
        */
    'amount'?: number;

        /**
        * The billing address of the case identifies the debtor.
        */
    'billingAddress'?: Address;

        /**
        * The closed on date indicates when the case is closed on.
        */
    'closedOn'?: Date;

        /**
        * The collector configuration determines how the debt collection case is processed.
        */
    'collectorConfiguration'?: DebtCollectorConfiguration;

        /**
        * The contract date is the date on which the contract with the debtor was signed on.
        */
    'contractDate'?: Date;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The creator references the user which has created the debt collection case.
        */
    'creator'?: number;

        /**
        * The currency defines the billing currency of the debt collection case.
        */
    'currency'?: string;

        /**
        * The due date indicates the date on which the amount receivable was due. This date has to be always in the past.
        */
    'dueDate'?: Date;

        /**
        * The environment in which this case will be processed. There must be a debt collector configuration present which supports the chosen environment.
        */
    'environment'?: DebtCollectionEnvironment;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * The failed on date indicates when the case is failed on.
        */
    'failedOn'?: Date;

        /**
        * 
        */
    'failureReason'?: FailureReason;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'labels'?: Array<Label>;

        /**
        * The language indicates the language to be used in the communication with the debtor.
        */
    'language'?: string;

        /**
        * The line items of the debt collection case will be shown on documents sent to the debtor and the total of them makes up total amount to collect.
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'nextAttemptOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The processing started on date indicates the date on which the processing of the case started on.
        */
    'processingStartedOn'?: Date;

        /**
        * 
        */
    'processingTimeoutOn'?: Date;

        /**
        * The case reference is used in the communication with the debtor. It should be unique and it should be linkable with the source of the debt collection case.
        */
    'reference'?: string;

        /**
        * 
        */
    'reviewStartedOn'?: Date;

        /**
        * The reviewed on date indicates when the review of the case was conducted on.
        */
    'reviewedOn'?: Date;

        /**
        * The reviewer references the user which has reviewed the case.
        */
    'reviewer'?: number;

        /**
        * The source of the debt collection case indicates the origin of the amount receivable.
        */
    'source'?: DebtCollectionCaseSource;

        /**
        * The source entity ID points to the object which is the origin of the debt collection case. This ID is only set when the case was triggered by an internal process.
        */
    'sourceEntityId'?: number;

        /**
        * 
        */
    'spaceViewId'?: number;

        /**
        * The object's current state.
        */
    'state'?: DebtCollectionCaseState;

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
        "name": "closedOn",
        "baseName": "closedOn",
        "type": "Date"
        },
        
        {
        "name": "collectorConfiguration",
        "baseName": "collectorConfiguration",
        "type": "DebtCollectorConfiguration"
        },
        
        {
        "name": "contractDate",
        "baseName": "contractDate",
        "type": "Date"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "creator",
        "baseName": "creator",
        "type": "number"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "dueDate",
        "baseName": "dueDate",
        "type": "Date"
        },
        
        {
        "name": "environment",
        "baseName": "environment",
        "type": "DebtCollectionEnvironment"
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
        "name": "nextAttemptOn",
        "baseName": "nextAttemptOn",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "processingStartedOn",
        "baseName": "processingStartedOn",
        "type": "Date"
        },
        
        {
        "name": "processingTimeoutOn",
        "baseName": "processingTimeoutOn",
        "type": "Date"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "reviewStartedOn",
        "baseName": "reviewStartedOn",
        "type": "Date"
        },
        
        {
        "name": "reviewedOn",
        "baseName": "reviewedOn",
        "type": "Date"
        },
        
        {
        "name": "reviewer",
        "baseName": "reviewer",
        "type": "number"
        },
        
        {
        "name": "source",
        "baseName": "source",
        "type": "DebtCollectionCaseSource"
        },
        
        {
        "name": "sourceEntityId",
        "baseName": "sourceEntityId",
        "type": "number"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "DebtCollectionCaseState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return DebtCollectionCase.attributeTypeMap;
    }
}

export { DebtCollectionCase }
