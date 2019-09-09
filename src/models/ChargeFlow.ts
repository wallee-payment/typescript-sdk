'use strict';
import { CreationEntityState } from "./CreationEntityState";


class ChargeFlow {

        /**
        * If a transaction meets all selected conditions, the charge flow will be used to process the transaction. If the conditions are not met the next charge flow in line will be chosen according to the priorities.
        */
    'conditions'?: Array<number>;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The charge flow name is used internally to identify the configuration in administrative interfaces. For example it is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The priority orders the charge flows. As such the priority determines together with the conditions the charge flow the selection mechanism for a particular transaction. A change of the priority affects all future selections.
        */
    'priority'?: number;

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
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<number>"
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
        return ChargeFlow.attributeTypeMap;
    }
}

export { ChargeFlow }
