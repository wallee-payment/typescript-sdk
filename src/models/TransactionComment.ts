'use strict';


class TransactionComment {

        /**
        * The comment's actual content.
        */
    'content'?: string;

        /**
        * The ID of the user the comment was created by.
        */
    'createdBy'?: number;

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The ID of the user the comment was last updated by.
        */
    'editedBy'?: number;

        /**
        * The date and time when the comment was last updated.
        */
    'editedOn'?: Date;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * Whether the comment is pinned to the top.
        */
    'pinned'?: boolean;

        /**
        * 
        */
    'transaction'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
