'use strict';
import { AddressCreate } from "./AddressCreate";
import { DebtCollectionEnvironment } from "./DebtCollectionEnvironment";
import { LineItemCreate } from "./LineItemCreate";


class AbstractDebtCollectionCaseUpdate {

        /**
        * The billing address that identifies the debtor.
        */
    'billingAddress'?: AddressCreate;

        /**
        * The date and time when the contract with the debtor was signed.
        */
    'contractDate'?: Date;

        /**
        * The three-letter code (ISO 4217 format) of the case's currency.
        */
    'currency'?: string;

        /**
        * The date and time when the claim was due.
        */
    'dueDate'?: Date;

        /**
        * The environment in which the case is processed.
        */
    'environment'?: DebtCollectionEnvironment;

        /**
        * The language that is linked to the object.
        */
    'language'?: string;

        /**
        * The line items that are subject of this debt collection case.
        */
    'lineItems'?: Array<LineItemCreate>;

        /**
        * The ID of the space view this object is linked to.
        */
    'spaceViewId'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "AddressCreate"
        },
        
        {
        "name": "contractDate",
        "baseName": "contractDate",
        "type": "Date"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "dueDate",
        "baseName": "dueDate",
        "type": "Date"
        },
        
        {
        "name": "environment",
        "baseName": "environment",
        "type": "DebtCollectionEnvironment"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItemCreate>"
        },
        
        {
        "name": "spaceViewId",
        "baseName": "spaceViewId",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractDebtCollectionCaseUpdate.attributeTypeMap;
    }
}

export { AbstractDebtCollectionCaseUpdate }
