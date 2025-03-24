'use strict';
import { AbstractDebtCollectionCaseUpdate } from "./AbstractDebtCollectionCaseUpdate";


class DebtCollectionCaseCreate extends AbstractDebtCollectionCaseUpdate {

        /**
        * The configuration that the case is processed with.
        */
    'collectorConfiguration'?: number;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId': string;

        /**
        * A unique reference to identify the debt collection case in communication with the debtor.
        */
    'reference': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "collectorConfiguration",
        "baseName": "collectorConfiguration",
        "type": "number"
        },
        
        {
        "name": "externalId",
        "baseName": "externalId",
        "type": "string"
        },
        
        {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DebtCollectionCaseCreate.attributeTypeMap);
    }
}

export { DebtCollectionCaseCreate }
