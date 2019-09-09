'use strict';
import { ManualTaskActionStyle } from "./ManualTaskActionStyle";


class ManualTaskAction {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'label'?: { [key: string]: string; };

        /**
        * 
        */
    'style'?: ManualTaskActionStyle;

        /**
        * 
        */
    'taskType'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "label",
        "baseName": "label",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "style",
        "baseName": "style",
        "type": "ManualTaskActionStyle"
        },
        
        {
        "name": "taskType",
        "baseName": "taskType",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ManualTaskAction.attributeTypeMap;
    }
}

export { ManualTaskAction }
