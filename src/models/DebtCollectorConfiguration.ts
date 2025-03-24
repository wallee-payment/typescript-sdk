'use strict';
import { CreationEntityState } from "./CreationEntityState";


class DebtCollectorConfiguration {

        /**
        * The debt collector that the configuration is for.
        */
    'collector'?: number;

        /**
        * Conditions allow to define criteria that a debt collection case must fulfill in order for the debt collector configuration to be considered for processing the case.
        */
    'conditions'?: Array<number>;

        /**
        * The space views for which the debt collector configuration is enabled. If empty, it is enabled for all space views.
        */
    'enabledSpaceViews'?: Array<number>;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The name used to identify the debt collector configuration.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The priority that determines the order in which debt collector configurations are taken into account when processing a case. Low values are considered first.
        */
    'priority'?: number;

        /**
        * Whether the review of debt collection cases is skipped.
        */
    'skipReviewEnabled'?: boolean;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "collector",
        "baseName": "collector",
        "type": "number"
        },
        
        {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<number>"
        },
        
        {
        "name": "enabledSpaceViews",
        "baseName": "enabledSpaceViews",
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
        "name": "skipReviewEnabled",
        "baseName": "skipReviewEnabled",
        "type": "boolean"
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
        return DebtCollectorConfiguration.attributeTypeMap;
    }
}

export { DebtCollectorConfiguration }
