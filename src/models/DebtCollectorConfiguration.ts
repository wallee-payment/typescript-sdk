'use strict';
import { CreationEntityState } from "./CreationEntityState";


class DebtCollectorConfiguration {

        /**
        * The collector handles the debt collection case based on the settings of this configuration.
        */
    'collector'?: number;

        /**
        * The conditions applied to the collector configuration restricts the application of this configuration onto a particular debt collection case.
        */
    'conditions'?: Array<number>;

        /**
        * The collector configuration is only enabled for the selected space views. In case the set is empty the collector configuration is enabled for all space views.
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
        * The collector configuration name is used internally to identify a specific collector configuration. For example the name is used within search fields and hence it should be distinct and descriptive.
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The priority defines the order in which the collector configuration is tried to be applied onto a debt collection case. The higher the value the less likely the configuration is applied on a case.
        */
    'priority'?: number;

        /**
        * When the review is skipped there will be no review for cases which use this configuration.
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
