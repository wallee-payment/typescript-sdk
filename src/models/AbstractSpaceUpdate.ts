'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { SpaceAddressCreate } from "./SpaceAddressCreate";


class AbstractSpaceUpdate {

        /**
        * The date and time when the object was last modified.
        */
    'lastModifiedDate'?: Date;

        /**
        * The name used to identify the space.
        */
    'name'?: string;

        /**
        * The address that is used in communication with clients for example in emails, documents, etc.
        */
    'postalAddress'?: SpaceAddressCreate;

        /**
        * The currency that is used to display aggregated amounts in the space.
        */
    'primaryCurrency'?: string;

        /**
        * The maximum number of API requests that are accepted within two minutes. This limit can only be changed with special privileges.
        */
    'requestLimit'?: number;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The email address that will receive messages about technical issues and errors that occur in the space.
        */
    'technicalContactAddresses'?: Array<string>;

        /**
        * The time zone that is used to schedule and run background processes. This does not affect the formatting of dates in the user interface.
        */
    'timeZone'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "lastModifiedDate",
        "baseName": "lastModifiedDate",
        "type": "Date"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "postalAddress",
        "baseName": "postalAddress",
        "type": "SpaceAddressCreate"
        },
        
        {
        "name": "primaryCurrency",
        "baseName": "primaryCurrency",
        "type": "string"
        },
        
        {
        "name": "requestLimit",
        "baseName": "requestLimit",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "technicalContactAddresses",
        "baseName": "technicalContactAddresses",
        "type": "Array<string>"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractSpaceUpdate.attributeTypeMap;
    }
}

export { AbstractSpaceUpdate }
