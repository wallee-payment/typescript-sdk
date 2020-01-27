'use strict';


class Customer {

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'customerId'?: string;

        /**
        * 
        */
    'emailAddress'?: string;

        /**
        * 
        */
    'familyName'?: string;

        /**
        * 
        */
    'givenName'?: string;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'language'?: string;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * Meta data allow to store additional data along the object.
        */
    'metaData'?: { [key: string]: string; };

        /**
        * 
        */
    'preferredCurrency'?: string;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "customerId",
        "baseName": "customerId",
        "type": "string"
        },
        
        {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
        },
        
        {
        "name": "familyName",
        "baseName": "familyName",
        "type": "string"
        },
        
        {
        "name": "givenName",
        "baseName": "givenName",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "metaData",
        "baseName": "metaData",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "preferredCurrency",
        "baseName": "preferredCurrency",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Customer.attributeTypeMap;
    }
}

export { Customer }
