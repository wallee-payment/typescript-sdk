'use strict';
import { InvoiceReimbursementState } from "./InvoiceReimbursementState";
import { PaymentConnectorConfiguration } from "./PaymentConnectorConfiguration";
import { PaymentInitiationAdviceFile } from "./PaymentInitiationAdviceFile";


class InvoiceReimbursement {

        /**
        * 
        */
    'amount'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'currency'?: string;

        /**
        * 
        */
    'discardedBy'?: number;

        /**
        * 
        */
    'discardedOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'paymentConnectorConfiguration'?: PaymentConnectorConfiguration;

        /**
        * 
        */
    'paymentInitiationAdviceFile'?: PaymentInitiationAdviceFile;

        /**
        * 
        */
    'processedBy'?: number;

        /**
        * 
        */
    'processedOn'?: Date;

        /**
        * 
        */
    'recipientCity'?: string;

        /**
        * 
        */
    'recipientCountry'?: string;

        /**
        * 
        */
    'recipientFamilyName'?: string;

        /**
        * 
        */
    'recipientGivenName'?: string;

        /**
        * 
        */
    'recipientIban'?: string;

        /**
        * 
        */
    'recipientPostcode'?: string;

        /**
        * 
        */
    'recipientStreet'?: string;

        /**
        * 
        */
    'senderIban'?: string;

        /**
        * 
        */
    'state'?: InvoiceReimbursementState;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
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
        "name": "paymentConnectorConfiguration",
        "baseName": "paymentConnectorConfiguration",
        "type": "PaymentConnectorConfiguration"
        },
        
        {
        "name": "paymentInitiationAdviceFile",
        "baseName": "paymentInitiationAdviceFile",
        "type": "PaymentInitiationAdviceFile"
        },
        
        {
        "name": "processedBy",
        "baseName": "processedBy",
        "type": "number"
        },
        
        {
        "name": "processedOn",
        "baseName": "processedOn",
        "type": "Date"
        },
        
        {
        "name": "recipientCity",
        "baseName": "recipientCity",
        "type": "string"
        },
        
        {
        "name": "recipientCountry",
        "baseName": "recipientCountry",
        "type": "string"
        },
        
        {
        "name": "recipientFamilyName",
        "baseName": "recipientFamilyName",
        "type": "string"
        },
        
        {
        "name": "recipientGivenName",
        "baseName": "recipientGivenName",
        "type": "string"
        },
        
        {
        "name": "recipientIban",
        "baseName": "recipientIban",
        "type": "string"
        },
        
        {
        "name": "recipientPostcode",
        "baseName": "recipientPostcode",
        "type": "string"
        },
        
        {
        "name": "recipientStreet",
        "baseName": "recipientStreet",
        "type": "string"
        },
        
        {
        "name": "senderIban",
        "baseName": "senderIban",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "InvoiceReimbursementState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return InvoiceReimbursement.attributeTypeMap;
    }
}

export { InvoiceReimbursement }
