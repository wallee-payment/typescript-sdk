'use strict';
import { ManualTaskState } from "./ManualTaskState";


class ManualTask {

        /**
        * 
        */
    'actions'?: Array<number>;

        /**
        * The context entity ID links the manual task to the entity which caused its creation.
        */
    'contextEntityId'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * The expiry date indicates until when the manual task has to be executed.
        */
    'expiresOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'spaceId'?: number;

        /**
        * 
        */
    'state'?: ManualTaskState;

        /**
        * The type categorizes the manual task.
        */
    'type'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "actions",
        "baseName": "actions",
        "type": "Array<number>"
        },
        
        {
        "name": "contextEntityId",
        "baseName": "contextEntityId",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "expiresOn",
        "baseName": "expiresOn",
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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "spaceId",
        "baseName": "spaceId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ManualTaskState"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ManualTask.attributeTypeMap;
    }
}

export { ManualTask }
