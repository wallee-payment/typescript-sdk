'use strict';
import { DunningCaseState } from "./DunningCaseState";
import { DunningFlow } from "./DunningFlow";
import { TransactionInvoice } from "./TransactionInvoice";


class DunningCase {

        /**
        * 
        */
    'canceledOn'?: Date;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'derecognizedOn'?: Date;

        /**
        * 
        */
    'failedOn'?: Date;

        /**
        * 
        */
    'flow'?: DunningFlow;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'initialInvoice'?: TransactionInvoice;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The payment transaction this object is linked to.
        */
    'linkedTransaction'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: DunningCaseState;

        /**
        * 
        */
    'succeededOn'?: Date;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "canceledOn",
        "baseName": "canceledOn",
        "type": "Date"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "derecognizedOn",
        "baseName": "derecognizedOn",
        "type": "Date"
        },
        
        {
        "name": "failedOn",
        "baseName": "failedOn",
        "type": "Date"
        },
        
        {
        "name": "flow",
        "baseName": "flow",
        "type": "DunningFlow"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "initialInvoice",
        "baseName": "initialInvoice",
        "type": "TransactionInvoice"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "linkedTransaction",
        "baseName": "linkedTransaction",
        "type": "number"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "DunningCaseState"
        },
        
        {
        "name": "succeededOn",
        "baseName": "succeededOn",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return DunningCase.attributeTypeMap;
    }
}

export { DunningCase }
