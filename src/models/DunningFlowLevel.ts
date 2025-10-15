'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { DocumentTemplate } from "./DocumentTemplate";
import { DunningFlow } from "./DunningFlow";


class DunningFlowLevel {

        /**
        * This text is put in the reminder document of this dunning flow level.
        */
    'documentText'?: { [key: string]: string; };

        /**
        * 
        */
    'flow'?: DunningFlow;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The dunning flow level name is used internally to identify the dunning flow level. For example the name is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The duration of the level before switching to the next one.
        */
    'period'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The priority indicates the sort order of the level. A low value indicates that the level is executed before any level with a higher value. Any change to this value affects future level selections. The value has to pe unique per dunning flow.
        */
    'priority'?: number;

        /**
        * 
        */
    'processor'?: number;

        /**
        * 
        */
    'reminderTemplate'?: DocumentTemplate;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The title is used to communicate the dunning level to the customer within the reminder.
        */
    'title'?: { [key: string]: string; };

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "documentText",
        "baseName": "documentText",
        "type": "{ [key: string]: string; }"
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
        "name": "period",
        "baseName": "period",
        "type": "string"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "priority",
        "baseName": "priority",
        "type": "number"
        },
        
        {
        "name": "processor",
        "baseName": "processor",
        "type": "number"
        },
        
        {
        "name": "reminderTemplate",
        "baseName": "reminderTemplate",
        "type": "DocumentTemplate"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return DunningFlowLevel.attributeTypeMap;
    }
}

export { DunningFlowLevel }
