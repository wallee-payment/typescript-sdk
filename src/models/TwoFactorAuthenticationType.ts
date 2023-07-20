'use strict';


class TwoFactorAuthenticationType {

        /**
        * The localized description of the object.
        */
    'description'?: { [key: string]: string; };

        /**
        * The feature that this type belongs to.
        */
    'feature'?: number;

        /**
        * The identifier of the icon representing this type.
        */
    'icon'?: string;

        /**
        * A unique identifier for the object.
        */
    'id'?: number;

        /**
        * The localized name of the object.
        */
    'name'?: { [key: string]: string; };


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "description",
        "baseName": "description",
        "type": "{ [key: string]: string; }"
        },
        
        {
        "name": "feature",
        "baseName": "feature",
        "type": "number"
        },
        
        {
        "name": "icon",
        "baseName": "icon",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "{ [key: string]: string; }"
        }        
    ];

    static getAttributeTypeMap() {
        return TwoFactorAuthenticationType.attributeTypeMap;
    }
}

export { TwoFactorAuthenticationType }
