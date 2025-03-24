'use strict';


class DebtCollectionCaseSource {

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * Whether debt collection cases created from this source will skip review and directly enter preparing state.
        */
    'forcedPreparingState'?: boolean;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized name of the object.
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
