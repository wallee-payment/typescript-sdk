'use strict';
import { ProductFeeType } from "./ProductFeeType";
import { SubscriptionLedgerEntryState } from "./SubscriptionLedgerEntryState";
import { Tax } from "./Tax";


class SubscriptionLedgerEntry {

        /**
        * The total tax rate applied to the ledger entry, calculated from the rates of all tax lines.
        */
    'aggregatedTaxRate'?: number;

        /**
        * The leger entry's amount with discounts applied, excluding taxes.
        */
    'amountExcludingTax'?: number;

        /**
        * The leger entry's amount with discounts applied, including taxes.
        */
    'amountIncludingTax'?: number;

        /**
        * 
        */
    'componentReferenceName'?: string;

        /**
        * 
        */
    'componentReferenceSku'?: string;

        /**
        * The ID of the user the ledger entry was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The discount allocated to the ledger entry, including taxes.
        */
    'discountIncludingTax'?: number;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId'?: string;

        /**
        * 
        */
    'feeType'?: ProductFeeType;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'proRataCalculated'?: boolean;

        /**
        * The number of items that were consumed.
        */
    'quantity'?: number;

        /**
        * The object's current state.
        */
    'state'?: SubscriptionLedgerEntryState;

        /**
        * 
        */
    'subscriptionMetricId'?: number;

        /**
        * The subscription version that the ledger entry belongs to.
        */
    'subscriptionVersion'?: number;

        /**
        * The sum of all taxes applied to the ledger entry.
        */
    'taxAmount'?: number;

        /**
        * A set of tax lines, each of which specifies a tax applied to the ledger entry.
        */
    'taxes'?: Array<Tax>;

        /**
        * The title that indicates what the ledger entry is about.
        */
    'title'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "aggregatedTaxRate",
        "baseName": "aggregatedTaxRate",
        "type": "number"
        },
        
        {
        "name": "amountExcludingTax",
        "baseName": "amountExcludingTax",
        "type": "number"
        },
        
        {
        "name": "amountIncludingTax",
        "baseName": "amountIncludingTax",
        "type": "number"
        },
        
        {
        "name": "componentReferenceName",
        "baseName": "componentReferenceName",
        "type": "string"
        },
        
        {
        "name": "componentReferenceSku",
        "baseName": "componentReferenceSku",
        "type": "string"
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
        "name": "discountIncludingTax",
        "baseName": "discountIncludingTax",
        "type": "number"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "feeType",
        "baseName": "feeType",
        "type": "ProductFeeType"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "proRataCalculated",
        "baseName": "proRataCalculated",
        "type": "boolean"
        },
        
        {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "SubscriptionLedgerEntryState"
        },
        
        {
        "name": "subscriptionMetricId",
        "baseName": "subscriptionMetricId",
        "type": "number"
        },
        
        {
        "name": "subscriptionVersion",
        "baseName": "subscriptionVersion",
        "type": "number"
        },
        
        {
        "name": "taxAmount",
        "baseName": "taxAmount",
        "type": "number"
        },
        
        {
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<Tax>"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionLedgerEntry.attributeTypeMap;
    }
}

export { SubscriptionLedgerEntry }
