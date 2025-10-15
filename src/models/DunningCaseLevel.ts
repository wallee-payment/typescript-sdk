'use strict';
import { DunningCase } from "./DunningCase";
import { DunningCaseLevelState } from "./DunningCaseLevelState";
import { Environment } from "./Environment";


class DunningCaseLevel {

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
    'dunningCase'?: DunningCase;

        /**
        * The environment used when rendering resources.
        */
    'environment'?: Environment;

        /**
        * 
        */
    'failedOn'?: Date;

        /**
        * 
        */
    'flowLevel'?: number;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * 
        */
    'invoice'?: number;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The payment transaction this object is linked to.
        */
    'linkedTransaction'?: number;

        /**
        * 
        */
    'mostRecentLevel'?: boolean;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: DunningCaseLevelState;

        /**
        * 
        */
    'succeededOn'?: Date;

        /**
        * 
        */
    'timeoutOn'?: Date;

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
        "name": "dunningCase",
        "baseName": "dunningCase",
        "type": "DunningCase"
        },
        
        {
        "name": "environment",
        "baseName": "environment",
        "type": "Environment"
        },
        
        {
        "name": "failedOn",
        "baseName": "failedOn",
        "type": "Date"
        },
        
        {
        "name": "flowLevel",
        "baseName": "flowLevel",
        "type": "number"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "invoice",
        "baseName": "invoice",
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
        "name": "linkedTransaction",
        "baseName": "linkedTransaction",
        "type": "number"
        },
        
        {
        "name": "mostRecentLevel",
        "baseName": "mostRecentLevel",
        "type": "boolean"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "DunningCaseLevelState"
        },
        
        {
        "name": "succeededOn",
        "baseName": "succeededOn",
        "type": "Date"
        },
        
        {
        "name": "timeoutOn",
        "baseName": "timeoutOn",
        "type": "Date"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return DunningCaseLevel.attributeTypeMap;
    }
}

export { DunningCaseLevel }
