'use strict';
import { ConnectorInvocationStage } from "./ConnectorInvocationStage";
import { TransactionAwareEntity } from "./TransactionAwareEntity";


class ConnectorInvocation extends TransactionAwareEntity {

        /**
        * The date and time when the object was created.
        */
    'createdOn'?: Date;

        /**
        * The date and time when the object is planned to be permanently removed. If the value is empty, the object will not be removed.
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
