'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { SubscriberUpdate } from "./SubscriberUpdate";


class SubscriberActive extends SubscriberUpdate {

        /**
        * 
        */
    'state'?: CreationEntityState;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SubscriberActive.attributeTypeMap);
    }
}

export { SubscriberActive }
