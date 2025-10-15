'use strict';
import { ChargeFlow } from "./ChargeFlow";
import { CreationEntityState } from "./CreationEntityState";


class ChargeFlowLevelConfiguration {

        /**
        * The charge flow that this level configuration belongs to.
        */
    'flow'?: ChargeFlow;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The name used to identify the charge flow level configuration.
        */
    'name'?: string;

        /**
        * The duration specifies how long the level remains active before transitioning to the next one.
        */
    'period'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The priority that determines the order in which level configurations are taken into account when processing a charge flow. Low values are considered first.
        */
    'priority'?: number;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The type defines the method of delivering the payment link to the customer.
        */
    'type'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "flow",
        "baseName": "flow",
        "type": "ChargeFlow"
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
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ChargeFlowLevelConfiguration.attributeTypeMap;
    }
}

export { ChargeFlowLevelConfiguration }
