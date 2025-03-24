'use strict';
import { AbstractSpaceUpdate } from "./AbstractSpaceUpdate";


class SpaceCreate extends AbstractSpaceUpdate {

        /**
        * The account that the space belongs to.
        */
    'account': number;

        /**
        * The database the space is connected to and that holds the space's data.
        */
    'database'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "account",
        "baseName": "account",
        "type": "number"
        },
        
        {
        "name": "database",
        "baseName": "database",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SpaceCreate.attributeTypeMap);
    }
}

export { SpaceCreate }
