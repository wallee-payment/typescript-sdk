'use strict';
import { Account } from "./Account";
import { PaymentTerminalDeviceModel } from "./PaymentTerminalDeviceModel";
import { PaymentTerminalDeviceState } from "./PaymentTerminalDeviceState";
import { PaymentTerminalReference } from "./PaymentTerminalReference";


class PaymentTerminalDevice {

        /**
        * 
        */
    'account'?: Account;

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
    'model'?: PaymentTerminalDeviceModel;

        /**
        * 
        */
    'name'?: string;

        /**
        * 
        */
    'serialNumber'?: string;

        /**
        * 
        */
    'state'?: PaymentTerminalDeviceState;

        /**
        * 
        */
    'terminal'?: PaymentTerminalReference;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "account",
        "baseName": "account",
        "type": "Account"
        },
        
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
        "name": "model",
        "baseName": "model",
        "type": "PaymentTerminalDeviceModel"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "serialNumber",
        "baseName": "serialNumber",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "PaymentTerminalDeviceState"
        },
        
        {
        "name": "terminal",
        "baseName": "terminal",
        "type": "PaymentTerminalReference"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return PaymentTerminalDevice.attributeTypeMap;
    }
}

export { PaymentTerminalDevice }
