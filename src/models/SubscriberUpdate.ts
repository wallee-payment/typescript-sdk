'use strict';
import { AddressCreate } from "./AddressCreate";


class SubscriberUpdate {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id': number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version': number;

        /**
        * Those payment methods which are allowed additionally will be available even when the product does not allow those methods.
        */
    'additionalAllowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * 
        */
    'billingAddress'?: AddressCreate;

        /**
        * The subscriber description can be used to add a description to the subscriber. This is used in the back office to identify the subscriber.
        */
    'description'?: string;

        /**
        * Those payment methods which are disallowed will not be available to the subscriber even if the product allows those methods.
        */
    'disallowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * The email address is used to communicate with the subscriber. There can be only one subscriber per space with the same email address.
        */
    'emailAddress'?: string;

        /**
        * The subscriber language determines the language which is used to communicate with the subscriber in emails and documents (e.g. invoices).
        */
    'language'?: string;

        /**
        * Allow to store additional information about the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * The subscriber reference identifies the subscriber in administrative interfaces (e.g. customer id).
        */
    'reference'?: string;

        /**
        * 
        */
    'shippingAddress'?: AddressCreate;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        },
        
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
        return SubscriberUpdate.attributeTypeMap;
    }
}

export { SubscriberUpdate }
