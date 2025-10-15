'use strict';
import { TaxCreate } from "./TaxCreate";


class SubscriptionLedgerEntryCreate {

        /**
        * The leger entry's amount with discounts applied, including taxes.
        */
    'amountIncludingTax': number;

        /**
        * 
        */
    'componentReferenceName'?: string;

        /**
        * A client-generated nonce which uniquely identifies some action to be executed. Subsequent requests with the same external ID do not execute the action again, but return the original result.
        */
    'externalId': string;

        /**
        * The number of items that were consumed.
        */
    'quantity': number;

        /**
        * 
        */
    'subscriptionMetricId'?: number;

        /**
        * The subscription version that the ledger entry belongs to.
        */
    'subscriptionVersion': number;

        /**
        * A set of tax lines, each of which specifies a tax applied to the ledger entry.
        */
    'taxes'?: Array<TaxCreate>;

        /**
        * The title that indicates what the ledger entry is about.
        */
    'title': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
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
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
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
        "name": "taxes",
        "baseName": "taxes",
        "type": "Array<TaxCreate>"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionLedgerEntryCreate.attributeTypeMap;
    }
}

export { SubscriptionLedgerEntryCreate }
