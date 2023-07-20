'use strict';
import { Subscription } from "./Subscription";
import { SubscriptionChargeProcessingType } from "./SubscriptionChargeProcessingType";
import { SubscriptionChargeState } from "./SubscriptionChargeState";
import { SubscriptionChargeType } from "./SubscriptionChargeType";
import { SubscriptionLedgerEntry } from "./SubscriptionLedgerEntry";
import { Transaction } from "./Transaction";


class SubscriptionCharge {

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'discardedBy'?: number;

        /**
        * 
        */
    'discardedOn'?: Date;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * 
        */
    'failedOn'?: Date;

        /**
        * The user will be redirected to failed URL when the transaction could not be authorized or completed. In case no failed URL is specified a default failed page will be displayed.
        */
    'failedUrl'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * 
        */
    'ledgerEntries'?: Array<SubscriptionLedgerEntry>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'plannedExecutionDate'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'processingType'?: SubscriptionChargeProcessingType;

        /**
        * 
        */
    'reference'?: string;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionChargeState;

        /**
        * The field subscription indicates the subscription to which the charge belongs to.
        */
    'subscription'?: Subscription;

        /**
        * 
        */
    'succeedOn'?: Date;

        /**
        * The user will be redirected to success URL when the transaction could be authorized or completed. In case no success URL is specified a default success page will be displayed.
        */
    'successUrl'?: string;

        /**
        * 
        */
    'transaction'?: Transaction;

        /**
        * 
        */
    'type'?: SubscriptionChargeType;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "discardedBy",
        "baseName": "discardedBy",
        "type": "number"
        },
        
        {
        "name": "discardedOn",
        "baseName": "discardedOn",
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
        "name": "failedUrl",
        "baseName": "failedUrl",
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
        "name": "ledgerEntries",
        "baseName": "ledgerEntries",
        "type": "Array<SubscriptionLedgerEntry>"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "plannedExecutionDate",
        "baseName": "plannedExecutionDate",
        "type": "Date"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "processingType",
        "baseName": "processingType",
        "type": "SubscriptionChargeProcessingType"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionChargeState"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "Subscription"
        },
        
        {
        "name": "succeedOn",
        "baseName": "succeedOn",
        "type": "Date"
        },
        
        {
        "name": "successUrl",
        "baseName": "successUrl",
        "type": "string"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "Transaction"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "SubscriptionChargeType"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionCharge.attributeTypeMap;
    }
}

export { SubscriptionCharge }
