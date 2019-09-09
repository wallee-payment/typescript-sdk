'use strict';


class TransactionComment {

        /**
        * 
        */
    'content'?: string;

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'editedBy'?: number;

        /**
        * The date on which the comment was last edited.
        */
    'editedOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'pinned'?: boolean;

        /**
        * 
        */
    'transaction'?: number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "content",
        "baseName": "content",
        "type": "string"
        },
        
        {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "editedBy",
        "baseName": "editedBy",
        "type": "number"
        },
        
        {
        "name": "editedOn",
        "baseName": "editedOn",
        "type": "Date"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "pinned",
        "baseName": "pinned",
        "type": "boolean"
        },
        
        {
        "name": "transaction",
        "baseName": "transaction",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return TransactionComment.attributeTypeMap;
    }
}

export { TransactionComment }
