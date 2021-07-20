'use strict';
import { AbstractDebtCollectionCaseUpdate } from "./AbstractDebtCollectionCaseUpdate";


class DebtCollectionCaseCreate extends AbstractDebtCollectionCaseUpdate {

        /**
        * The collector configuration determines how the debt collection case is processed.
        */
    'collectorConfiguration'?: number;

        /**
        * A client generated nonce which identifies the entity to be created. Subsequent creation requests with the same external ID will not create new entities but return the initially created entity instead.
        */
    'externalId': string;

        /**
        * The case reference is used in the communication with the debtor. It should be unique and it should be linkable with the source of the debt collection case.
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
