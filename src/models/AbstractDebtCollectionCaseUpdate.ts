'use strict';
import { AddressCreate } from "./AddressCreate";
import { DebtCollectionEnvironment } from "./DebtCollectionEnvironment";
import { LineItemCreate } from "./LineItemCreate";


class AbstractDebtCollectionCaseUpdate {

        /**
        * The billing address of the case identifies the debtor.
        */
    'billingAddress'?: AddressCreate;

        /**
        * The contract date is the date on which the contract with the debtor was signed on.
        */
    'contractDate'?: Date;

        /**
        * The currency defines the billing currency of the debt collection case.
        */
    'currency'?: string;

        /**
        * The due date indicates the date on which the amount receivable was due. This date has to be always in the past.
        */
    'dueDate'?: Date;

        /**
        * The environment in which this case will be processed. There must be a debt collector configuration present which supports the chosen environment.
        */
    'environment'?: DebtCollectionEnvironment;

        /**
        * The language indicates the language to be used in the communication with the debtor.
        */
    'language'?: string;

        /**
        * The line items of the debt collection case will be shown on documents sent to the debtor and the total of them makes up total amount to collect.
        */
    'lineItems'?: Array<LineItemCreate>;

        /**
        * 
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
