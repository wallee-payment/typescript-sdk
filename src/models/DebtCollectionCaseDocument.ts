'use strict';
import { Label } from "./Label";


class DebtCollectionCaseDocument {

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The debt collection case that this document belongs to.
        */
    'debtCollectionCase'?: number;

        /**
        * The file name of the document.
        */
    'fileName'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The labels providing additional information about the object.
        */
    'labels'?: Array<Label>;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The MIME type of the document's content.
        */
    'mimeType'?: string;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * A unique identifier of the document.
        */
    'uniqueId'?: string;

        /**
        * The version is used for optimistic locking and incremented whenever the object is updated.
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
        "name": "debtCollectionCase",
        "baseName": "debtCollectionCase",
        "type": "number"
        },
        
        {
        "name": "fileName",
        "baseName": "fileName",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "labels",
        "baseName": "labels",
        "type": "Array<Label>"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "uniqueId",
        "baseName": "uniqueId",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return DebtCollectionCaseDocument.attributeTypeMap;
    }
}

export { DebtCollectionCaseDocument }
