'use strict';


class RestCountryState {

        /**
        * The state's code used within addresses.
        */
    'code'?: string;

        /**
        * 
        */
    'country'?: string;

        /**
        * The two-letter code of the state's country (ISO 3166-1 alpha-2 format).
        */
    'countryCode'?: string;

        /**
        * The state's code in ISO 3166-2 format.
        */
    'id'?: string;

        /**
        * The name of the state.
        */
    'name'?: string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "code",
        "baseName": "code",
        "type": "string"
        },
        
        {
        "name": "country",
        "baseName": "country",
        "type": "string"
        },
        
        {
        "name": "countryCode",
        "baseName": "countryCode",
        "type": "string"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return RestCountryState.attributeTypeMap;
    }
}

export { RestCountryState }
