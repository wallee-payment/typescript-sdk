'use strict';
import { ManualTaskActionStyle } from "./ManualTaskActionStyle";


class ManualTaskAction {

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The action's label.
        */
    'label'?: { [key: string]: string; };

        /**
        * The action's style.
        */
    'style'?: ManualTaskActionStyle;

        /**
        * The type of manual tasks this action belongs to.
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
