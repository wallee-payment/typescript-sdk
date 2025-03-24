'use strict';


class ShopifySubscriberCreation {

        /**
        * 
        */
    'emailAddress'?: string;

        /**
        * 
        */
    'phoneNumber'?: string;

        /**
        * The customer Global ID has to correspond to the Global ID assigned to the customer by Shopify. When the subscriber already exists no new subscriber will be created.
        */
    'shopifyCustomerGid'?: string;

        /**
        * The customer ID has to correspond to the ID assigned to the customer by Shopify. When the subscriber already exists no new subscriber will be created.
        */
    'shopifyCustomerId': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
        },
        
        {
        "name": "phoneNumber",
        "baseName": "phoneNumber",
        "type": "string"
        },
        
        {
        "name": "shopifyCustomerGid",
        "baseName": "shopifyCustomerGid",
        "type": "string"
        },
        
        {
        "name": "shopifyCustomerId",
        "baseName": "shopifyCustomerId",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriberCreation.attributeTypeMap;
    }
}

export { ShopifySubscriberCreation }
