'use strict';
import { Subscription } from "./Subscription";
import { SubscriptionChargeProcessingType } from "./SubscriptionChargeProcessingType";
import { SubscriptionChargeState } from "./SubscriptionChargeState";
import { SubscriptionChargeType } from "./SubscriptionChargeType";
import { SubscriptionLedgerEntry } from "./SubscriptionLedgerEntry";
import { Transaction } from "./Transaction";


class SubscriptionCharge {

        /**
        * The date and time when the charge was created.
        */
    'createdOn'?: Date;

        /**
        * The ID of the user the charge was discarded by.
        */
    'discardedBy'?: number;

        /**
        * The date and time when the charge was discarded.
        */
    'discardedOn'?: Date;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId'?: string;

        /**
        * The date and time when the charge failed.
        */
    'failedOn'?: Date;

        /**
        * The URL to redirect the customer back to after they canceled or failed to authenticated their payment.
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
        * The ledger entries that belong to the charge.
        */
    'ledgerEntries'?: Array<SubscriptionLedgerEntry>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The date and time when the execution of the charge is planned.
        */
    'plannedExecutionDate'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The processing type specifies how the charge is to be processed.
        */
    'processingType'?: SubscriptionChargeProcessingType;

        /**
        * The merchant's reference used to identify the charge.
        */
    'reference'?: string;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionChargeState;

        /**
        * The subscription that the charge belongs to.
        */
    'subscription'?: Subscription;

        /**
        * The date and time when the charge succeeded.
        */
    'succeedOn'?: Date;

        /**
        * The URL to redirect the customer back to after they successfully authenticated their payment.
        */
    'successUrl'?: string;

        /**
        * The transaction used to process the charge.
        */
    'transaction'?: Transaction;

        /**
        * The type specified how the charge was initiated.
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
