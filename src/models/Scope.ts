'use strict';
import { CreationEntityState } from "./CreationEntityState";
import { Feature } from "./Feature";


class Scope {

        /**
        * The domain name to which this scope is mapped to.
        */
    'domainName'?: string;

        /**
        * 
        */
    'features'?: Array<Feature>;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'machineName'?: string;

        /**
        * The name of the scope is shown to the user where the user should select a scope.
        */
    'name'?: string;

        /**
        * The planned purge date indicates when the entity is permanently removed. When the date is null the entity is not planned to be removed.
        */
    'plannedPurgeDate'?: Date;

        /**
        * The port number to which this scope is mapped to.
        */
    'port'?: number;

        /**
        * Define whether the scope supports SSL.
        */
    'sslActive'?: boolean;

        /**
        * 
        */
    'state'?: CreationEntityState;

        /**
        * The themes determines how the application layout, look and feel is. By providing multiple themes you can fallback to other themes.
        */
    'themes'?: Array<string>;

        /**
        * 
        */
    'url'?: string;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "domainName",
        "baseName": "domainName",
        "type": "string"
        },
        
        {
        "name": "features",
        "baseName": "features",
        "type": "Array<Feature>"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "machineName",
        "baseName": "machineName",
        "type": "string"
        },
        
        {
        "name": "name",
        "baseName": "name",
        "type": "string"
        },
        
        {
        "name": "plannedPurgeDate",
        "baseName": "plannedPurgeDate",
        "type": "Date"
        },
        
        {
        "name": "port",
        "baseName": "port",
        "type": "number"
        },
        
        {
        "name": "sslActive",
        "baseName": "sslActive",
        "type": "boolean"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "CreationEntityState"
        },
        
        {
        "name": "themes",
        "baseName": "themes",
        "type": "Array<string>"
        },
        
        {
        "name": "url",
        "baseName": "url",
        "type": "string"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return Scope.attributeTypeMap;
    }
}

export { Scope }
