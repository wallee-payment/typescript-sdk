'use strict';
import { PaymentInitiationAdviceFileState } from "./PaymentInitiationAdviceFileState";
import { PaymentProcessor } from "./PaymentProcessor";


class PaymentInitiationAdviceFile {

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'failureMessage'?: string;

        /**
        * 
        */
    'fileGeneratedOn'?: Date;

        /**
        * The shipping date indicates the date on which the pain file was transferred to an external processing system.
        */
    'forwardedOn'?: Date;

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
    'name'?: string;

        /**
        * 
        */
    'processedOn'?: Date;

        /**
        * 
        */
    'processor'?: PaymentProcessor;

        /**
        * 
        */
    'state'?: PaymentInitiationAdviceFileState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "failureMessage",
        "baseName": "failureMessage",
        "type": "string"
        },
        
        {
        "name": "fileGeneratedOn",
        "baseName": "fileGeneratedOn",
        "type": "Date"
        },
        
        {
        "name": "forwardedOn",
        "baseName": "forwardedOn",
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
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "processedOn",
        "baseName": "processedOn",
        "type": "Date"
        },
        
        {
        "name": "processor",
        "baseName": "processor",
        "type": "PaymentProcessor"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "PaymentInitiationAdviceFileState"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentInitiationAdviceFile.attributeTypeMap;
    }
}

export { PaymentInitiationAdviceFile }
