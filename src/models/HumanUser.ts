'use strict';
import { TwoFactorAuthenticationType } from "./TwoFactorAuthenticationType";


class HumanUser {

        /**
        * The user's email address.
        */
    'emailAddress'?: string;

        /**
        * Whether the user's email address has been verified.
        */
    'emailAddressVerified'?: boolean;

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
        * Whether the user's mobile phone number has been verified.
        */
    'mobilePhoneVerified'?: boolean;

        /**
        * The primary account that the user belongs to.
        */
    'primaryAccount'?: number;

        /**
        * The scope that the user belongs to.
        */
    'scope'?: number;

        /**
        * The user's time zone. If none is specified, the one provided by the browser will be used.
        */
    'timeZone'?: string;

        /**
        * Whether two-factor authentication is enabled for this user.
        */
    'twoFactorEnabled'?: boolean;

        /**
        * The type of two-factor authentication that is enabled for the user.
        */
    'twoFactorType'?: TwoFactorAuthenticationType;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "emailAddress",
        "baseName": "emailAddress",
        "type": "string"
        },
        
        {
        "name": "emailAddressVerified",
        "baseName": "emailAddressVerified",
        "type": "boolean"
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
        "name": "mobilePhoneVerified",
        "baseName": "mobilePhoneVerified",
        "type": "boolean"
        },
        
        {
        "name": "primaryAccount",
        "baseName": "primaryAccount",
        "type": "number"
        },
        
        {
        "name": "scope",
        "baseName": "scope",
        "type": "number"
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
        },
        
        {
        "name": "twoFactorType",
        "baseName": "twoFactorType",
        "type": "TwoFactorAuthenticationType"
        }        
    ];

    static getAttributeTypeMap() {
        return HumanUser.attributeTypeMap;
    }
}

export { HumanUser }
