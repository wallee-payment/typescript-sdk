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
        * The sum of all unpaid item prices in the case's currency. The amount can no longer be changed once the case has been reviewed.
        */
    'amount'?: number;

        /**
        * The billing address that identifies the debtor.
        */
    'billingAddress'?: Address;

        /**
        * The date and time when the case was closed.
        */
    'closedOn'?: Date;

        /**
        * The configuration that the case is processed with.
        */
    'collectorConfiguration'?: DebtCollectorConfiguration;

        /**
        * The date and time when the contract with the debtor was signed.
        */
    'contractDate'?: Date;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The ID of the user the case was created by.
        */
    'creator'?: number;

        /**
        * The three-letter code (ISO 4217 format) of the case's currency.
        */
    'currency'?: string;

        /**
        * The date and time when the claim was due.
        */
    'dueDate'?: Date;

        /**
        * The environment in which the case is processed.
        */
    'environment'?: DebtCollectionEnvironment;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * The date and time when the case failed.
        */
    'failedOn'?: Date;

        /**
        * The reason for the failure of the case.
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
        * The line items that are subject of this debt collection case.
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The date and time when the next attempt at processing the case will be made.
        */
    'nextAttemptOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The date and time when the processing of the case was started.
        */
    'processingStartedOn'?: Date;

        /**
        * The date and time when the processing of the case times out.
        */
    'processingTimeoutOn'?: Date;

        /**
        * A unique reference to identify the debt collection case in communication with the debtor.
        */
    'reference'?: string;

        /**
        * The date and time when the review of the case was started.
        */
    'reviewStartedOn'?: Date;

        /**
        * The date and time when the case was reviewed.
        */
    'reviewedOn'?: Date;

        /**
        * The ID of the user the case was reviewed by.
        */
    'reviewer'?: number;

        /**
        * The source of the case stating the origin of the claim.
        */
    'source'?: DebtCollectionCaseSource;

        /**
        * The ID of the object that is the source of the case. Only defined if the case was created by an internal process.
        */
    'sourceEntityId'?: number;

        /**
        * The ID of the space view this object is linked to.
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
