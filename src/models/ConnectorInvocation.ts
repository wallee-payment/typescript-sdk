'use strict';
import { ConnectorInvocationStage } from "./ConnectorInvocationStage";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class ConnectorInvocation extends TransactionAwareEntity {

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'stage'?: ConnectorInvocationStage;

        /**
        * 
        */
    'timeTookInMilliseconds'?: number;

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
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
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
        return super.getAttributeTypeMap().concat(ConnectorInvocation.attributeTypeMap);
    }
}

export { ConnectorInvocation }
