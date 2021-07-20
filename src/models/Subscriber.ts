'use strict';
import { Address } from "./Address";
import { CreationEntityState } from "./CreationEntityState";


class Subscriber {

        /**
        * Those payment methods which are allowed additionally will be available even when the product does not allow those methods.
        */
    'additionalAllowedPaymentMethodConfigurations'?: Array<number>;

        /**
        * 
        */
    'billingAddress'?: Address;

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
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The subscriber language determines the language which is used to communicate with the subscriber in emails and documents (e.g. invoices).
        */
    'language'?: string;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * Meta data allow to store additional data along the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The subscriber reference identifies the subscriber in administrative interfaces (e.g. customer id).
        */
    'reference'?: string;

        /**
        * 
        */
    'shippingAddress'?: Address;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


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
        "type": "Address"
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
        "name": "externalId",
        "baseName": "externalId",
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
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "metaData",
        "baseName": "metaData",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        },
        
        {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "Address"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Subscriber.attributeTypeMap;
    }
}

export { Subscriber }
