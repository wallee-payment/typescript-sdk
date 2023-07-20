'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { ResourcePath } from "./ResourcePath";


class DocumentTemplate {

        /**
        * The default document template is used whenever no specific template is specified for a particular template type.
        */
    'defaultTemplate'?: boolean;

        /**
        * 
        */
    'deliveryEnabled'?: boolean;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'name'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'spaceId'?: number;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * 
        */
    'templateResource'?: ResourcePath;

        /**
        * 
        */
    'type'?: number;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "defaultTemplate",
        "baseName": "defaultTemplate",
        "type": "boolean"
        },
        
        {
        "name": "deliveryEnabled",
        "baseName": "deliveryEnabled",
        "type": "boolean"
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
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "spaceId",
        "baseName": "spaceId",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "templateResource",
        "baseName": "templateResource",
        "type": "ResourcePath"
        },
        
        {
        "name": "type",
        "baseName": "type",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return DocumentTemplate.attributeTypeMap;
    }
}

export { DocumentTemplate }
