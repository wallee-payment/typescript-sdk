'use strict';
import { AddressCreate } from "./AddressCreate";


class AbstractSubscriberUpdate {

        /**
        * Allow the subscriber to use these payment methods even if subscription products do not accept them.
        */
    'additionalAllowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * The address associated with the subscriber for invoicing and transaction processing purposes.
        */
    'billingAddress'?: AddressCreate;

        /**
        * The description used to identify the subscriber.
        */
    'description'?: string;

        /**
        * Prevent the subscriber from using these payment methods even if subscription products do accept them.
        */
    'disallowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * The email address that is used to communicate with the subscriber. There can be only one subscriber per space with the same email address.
        */
    'emailAddress'?: string;

        /**
        * The language that is used when communicating with the subscriber via emails and documents.
        */
    'language'?: string;

        /**
        * Allow to store additional information about the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * The merchant's reference used to identify the subscriber.
        */
    'reference'?: string;

        /**
        * The address to where orders will be shipped.
        */
    'shippingAddress'?: AddressCreate;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "additionalAllowedPaymentMethodConfigurations",
        "baseName": "additionalAllowedPaymentMethodConfigurations",
        "type": "Array<number>"
        },
        
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "AddressCreate"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "string"
        },
        
        {
        "name": "disallowedPaymentMethodConfigurations",
        "baseName": "disallowedPaymentMethodConfigurations",
        "type": "Array<number>"
        },
        
        {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "metaData",
        "baseName": "metaData",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "AddressCreate"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractSubscriberUpdate.attributeTypeMap;
    }
}

export { AbstractSubscriberUpdate }
