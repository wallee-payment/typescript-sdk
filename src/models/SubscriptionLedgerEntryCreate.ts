'use strict';
import { TaxCreate } from "./TaxCreate";


class SubscriptionLedgerEntryCreate {

        /**
        * 
        */
    'amountIncludingTax': number;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
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
