'use strict';


class SubscriptionUpdate {

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id': number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version': number;

        /**
        * The affiliate that led to the creation of the subscription.
        */
    'affiliate'?: number;

        /**
        * A description used to identify the subscription.
        */
    'description'?: string;

        /**
        * The date and time when the subscription is planned to be terminated.
        */
    'plannedTerminationDate'?: Date;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        },
        
        {
        "name": "affiliate",
        "baseName": "affiliate",
        "type": "number"
        },
        
        {
        "name": "description",
        "baseName": "description",
        "type": "string"
        },
        
        {
        "name": "plannedTerminationDate",
        "baseName": "plannedTerminationDate",
        "type": "Date"
        }        
    ];

    static getAttributeTypeMap() {
        return SubscriptionUpdate.attributeTypeMap;
    }
}

export { SubscriptionUpdate }
