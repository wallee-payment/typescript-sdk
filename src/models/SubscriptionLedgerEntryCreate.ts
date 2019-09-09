'use strict';
import { TaxCreate } from "./TaxCreate";


class SubscriptionLedgerEntryCreate {

        /**
        * 
        */
    'amountIncludingTax': number;

        /**
        * The external id helps to identify the entity and a subsequent creation of an entity with the same ID will not create a new entity.
        */
    'externalId': string;

        /**
        * 
        */
    'quantity': number;

        /**
        * 
        */
    'subscriptionVersion': number;

        /**
        * 
        */
    'taxes'?: Array<TaxCreate>;

        /**
        * 
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
