'use strict';


class ChargeFlowLevelConfigurationType {

        /**
        * 
        */
    'description'?: { [key: string]: string; };

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
    'name'?: { [key: string]: string; };


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
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
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        }        
    ];

    static getAttributeTypeMap() {
        return ChargeFlowLevelConfigurationType.attributeTypeMap;
    }
}

export { ChargeFlowLevelConfigurationType }
