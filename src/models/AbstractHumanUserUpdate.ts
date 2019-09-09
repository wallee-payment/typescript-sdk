'use strict';
import { CreationEntityState } from "./CreationEntityState";


class AbstractHumanUserUpdate {

        /**
        * The email address of the user.
        */
    'emailAddress'?: string;

        /**
        * The first name of the user.
        */
    'firstname'?: string;

        /**
        * The preferred language of the user.
        */
    'language'?: string;

        /**
        * The last name of the user.
        */
    'lastname'?: string;

        /**
        * 
        */
    'mobilePhoneNumber'?: string;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The time zone which is applied for the user. If no timezone is specified the browser is used to determine an appropriate time zone.
        */
    'timeZone'?: string;

        /**
        * Defines whether two-factor authentication is enabled for this user.
        */
    'twoFactorEnabled'?: boolean;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
        },
        
        {
        "name": "firstname",
        "baseName": "firstname",
        "type": "string"
        },
        
        {
        "name": "language",
        "baseName": "language",
        "type": "string"
        },
        
        {
        "name": "lastname",
        "baseName": "lastname",
        "type": "string"
        },
        
        {
        "name": "mobilePhoneNumber",
        "baseName": "mobilePhoneNumber",
        "type": "string"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "timeZone",
        "baseName": "timeZone",
        "type": "string"
        },
        
        {
        "name": "twoFactorEnabled",
        "baseName": "twoFactorEnabled",
        "type": "boolean"
        }        
    ];

    static getAttributeTypeMap() {
        return AbstractHumanUserUpdate.attributeTypeMap;
    }
}

export { AbstractHumanUserUpdate }
