'use strict';
import { InstallmentPaymentState } from "./InstallmentPaymentState";
import { LineItem } from "./LineItem";
import { Transaction } from "./Transaction";


class InstallmentPayment {

        /**
        * The created on date indicates the date on which the entity was stored into the database.
        */
    'createdOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'initialTransaction'?: Transaction;

        /**
        * 
        */
    'lineItems'?: Array<LineItem>;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'planConfiguration'?: number;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * 
        */
    'state'?: InstallmentPaymentState;

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
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "initialTransaction",
        "baseName": "initialTransaction",
        "type": "Transaction"
        },
        
        {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItem>"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "planConfiguration",
        "baseName": "planConfiguration",
        "type": "number"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "InstallmentPaymentState"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return InstallmentPayment.attributeTypeMap;
    }
}

export { InstallmentPayment }
