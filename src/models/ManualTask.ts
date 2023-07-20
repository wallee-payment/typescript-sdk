'use strict';
import { ManualTaskState } from "./ManualTaskState";


class ManualTask {

        /**
        * The actions that can be triggered to handle the manual task.
        */
    'actions'?: Array<number>;

        /**
        * The ID of the entity the manual task is linked to.
        */
    'contextEntityId'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The date and time until when the manual task has to be handled.
        */
    'expiresOn'?: Date;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The object's current state.
        */
    'state'?: ManualTaskState;

        /**
        * The manual task's type.
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
