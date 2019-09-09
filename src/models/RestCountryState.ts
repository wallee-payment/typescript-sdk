'use strict';


class RestCountryState {

        /**
        * The code of the state identifies the state. The code is typically used within addresses. Some countries may not provide a code. For those the field is null.
        */
    'code'?: string;

        /**
        * The country code in ISO two letter format (e.g. UK, DE, CH, US).
        */
    'countryCode'?: string;

        /**
        * The ID of the state corresponds to the subdivision identifier defined in ISO 3166-2. The format consists of the country code followed by a dash and a subdivision identifier.
        */
    'id'?: string;

        /**
        * The name is a human readable label of the state in the language of the region.
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
