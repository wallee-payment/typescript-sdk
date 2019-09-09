'use strict';


class DebtCollectionCaseSource {

        /**
        * 
        */
    'description'?: { [key: string]: string; };

        /**
        * 
        */
    'forcedPreparingState'?: boolean;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

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
        "name": "forcedPreparingState",
        "baseName": "forcedPreparingState",
        "type": "boolean"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        }        
    ];

    static getAttributeTypeMap() {
        return DebtCollectionCaseSource.attributeTypeMap;
    }
}

export { DebtCollectionCaseSource }
