'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { DatabaseTranslatedString } from "./DatabaseTranslatedString";
import { InstallmentPlanConfiguration } from "./InstallmentPlanConfiguration";


class InstallmentPlanSliceConfiguration {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The title of this slices line items. The title is visible to the buyer.
        */
    'lineItemTitle'?: DatabaseTranslatedString;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The period defines how much time passes between the last slice and this slice. The charge is triggered at the end of the period. When the slice should be charged immediately the period needs to be zero.
        */
    'period'?: string;

        /**
        * The installment plan this slice belongs to.
        */
    'plan'?: InstallmentPlanConfiguration;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The priority controls in which order the slices are applied. The lower the value the higher the precedence.
        */
    'priority'?: number;

        /**
        * The proportion defines how much of the total installment payment has to be paid in this slice. The value is summed up with the other slices and the ratio of all proportions compared to proportion of this slice determines how much the buyer has to pay in this slice.
        */
    'proportion'?: number;

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
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "lineItemTitle",
        "baseName": "lineItemTitle",
        "type": "DatabaseTranslatedString"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "period",
        "baseName": "period",
        "type": "string"
        },
        
        {
        "name": "plan",
        "baseName": "plan",
        "type": "InstallmentPlanConfiguration"
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
        "name": "proportion",
        "baseName": "proportion",
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
        return InstallmentPlanSliceConfiguration.attributeTypeMap;
    }
}

export { InstallmentPlanSliceConfiguration }
