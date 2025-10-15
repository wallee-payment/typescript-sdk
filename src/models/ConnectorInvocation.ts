'use strict';
import { ConnectorInvocationStage } from "./ConnectorInvocationStage";


class ConnectorInvocation {

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The ID of the space this object belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The transaction stage during which the connector invocation was performed.
        */
    'stage'?: ConnectorInvocationStage;

        /**
        * The duration, in milliseconds, taken to execute the connector invocation.
        */
    'timeTookInMilliseconds'?: number;

        /**
        * The transaction that the connector invocation belongs to.
        */
    'transaction'?: number;

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
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "stage",
        "baseName": "stage",
        "type": "ConnectorInvocationStage"
        },
        
        {
        "name": "timeTookInMilliseconds",
        "baseName": "timeTookInMilliseconds",
        "type": "number"
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
        return ConnectorInvocation.attributeTypeMap;
    }
}

export { ConnectorInvocation }
