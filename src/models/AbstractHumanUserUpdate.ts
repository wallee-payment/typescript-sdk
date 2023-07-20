'use strict';
import { CreationEntityState } from "./CreationEntityState";


class AbstractHumanUserUpdate {

        /**
        * The user's email address.
        */
    'emailAddress'?: string;

        /**
        * The user's first name.
        */
    'firstname'?: string;

        /**
        * The user's preferred language.
        */
    'language'?: string;

        /**
        * The user's last name.
        */
    'lastname'?: string;

        /**
        * The user's mobile phone number.
        */
    'mobilePhoneNumber'?: string;

        /**
        * The object's current state.
        */
    'state'?: CreationEntityState;

        /**
        * The user's time zone. If none is specified, the one provided by the browser will be used.
        */
    'timeZone'?: string;

        /**
        * Whether two-factor authentication is enabled for this user.
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
