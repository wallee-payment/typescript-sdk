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
        * The date and time when the object was created.
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
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
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
    'recipientOrganizationName'?: string;

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
        * The object's current state.
        */
    'state'?: InvoiceReimbursementState;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
        "name": "recipientOrganizationName",
        "baseName": "recipientOrganizationName",
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
